<script lang="ts">
  import FeatherIcon from "../FeatherIcon.svelte";
  import { isEmpty } from "lodash-es";
  import Avatar from "../Avatar.svelte";
  import { user } from "$lib/services/auth-service";
  import { SaveIcon, PlusIcon, XIcon } from "svelte-feather-icons";
  import { cancelEdition, reqTaskCreate, reqTaskUpdate, creatingTask, createTask } from "$lib/services/task-service";

  let okAction = "add"; //:"add"|"update"|"cancel"

  export let taskId = null;
  export let value = "";
  export let isCreator = false;

  $: showCard = !isCreator || $creatingTask;

  $: {
    if (isEmpty(value)) {
      okAction = "cancel";
    } else if (taskId) {
      okAction = "update";
    } else {
      okAction = "add";
    }
  }

  function handleCancel() {
    cancelEdition();
  }

  function handleInputFocus() {
    if (isCreator) {
      createTask();
    }
  }

  async function handleOK() {
    if (okAction == "cancel") {
      handleCancel();
    } else if (okAction == "update") {
      await reqTaskUpdate(taskId, value);
    } else {
      await reqTaskCreate(value);
    }
    value=""
  }
</script>

<div class="container">
  <div class={showCard ? "card-task" : ""}>
    <div class="editor" style={showCard ? "border-bottom: 1px solid #ddd;" : ""}>
      <div>
        <FeatherIcon icon="plus-square" color="#007FFF" />
      </div>
      <input placeholder={isCreator ? "Type to add new task" : ""} on:focus={handleInputFocus} bind:value class="input-text" />
      {#if showCard}
        <span style={okAction == "cancel" ? "opacity:0.5;":""}><Avatar width={24} text={$user.username} src={$user.avatar} /></span>
      {/if}
    </div>

    {#if showCard}
      <div class="buttons-container row">
        <div class="col option-buttons" />
        <div class="col action-buttons">
          <div class="btn btn-cancel" on:click={handleCancel} style="background-color: #ccc;margin-right: 10px;">Cancel</div>
          <div class="btn btn-primary" on:click={handleOK}>
            <span class="span-ok-icon">
              {#if okAction == "cancel"}
                <XIcon />
              {:else if okAction == "update"}
                <SaveIcon />
              {:else}
                <PlusIcon />
              {/if}
            </span>
            <span class="span-ok">Ok</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .btn {
    padding: 13px 24px;
  }
  .input-text {
    outline: none;
    border: none;
    width: calc(100% - 70px);
    margin-left: 5px;
    margin-right: 20px;
  }
  .editor {
    display: flex;
    padding: 10px 10px 30px;
  }

  .buttons-container {
    margin: 0px;
    padding: 10px 0px;
    background-color: #fafbfb;
  }
  .option-buttons {
    display: flex;
  }

  .action-buttons {
    display: flex;
    justify-content: end;
  }
  .card-task {
    border-radius: 0.25rem;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05), 0 1px 5px rgba(0, 0, 0, 0.05);
  }

  @media only screen and (min-width: 1230px) {
    .span-ok-icon {
      display: none;
    }
    .btn-cancel {
      display: inline-block;
    }
  }

  @media only screen and (max-width: 1229px) {
    .span-ok {
      display: none;
    }
    .btn-cancel {
      display: none;
    }
  }
</style>
