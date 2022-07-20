<script lang="ts">
  import { editTask, reqTaskUpdate } from "$lib/services/task-service";
  import { onMount } from "svelte";
  import { SquareIcon, CheckSquareIcon } from "svelte-feather-icons";
  export let taskId;
  export let value;
  export let done;
  let transformed;

  $: {
    value;
    transform();
  }

  function handleCLick() {
    console.log("edit task: " + value);
    editTask(taskId);
  }

  function toggleDone() {
    let pdone = done==true
    pdone = !pdone
    console.log(`toggle task: ${pdone}`);
    reqTaskUpdate(taskId, value, pdone);
  }

  function transform() {
    transformed = value;
    replaceEmails();
    replaceUsers();

    replaceLinks();
    replaceTags();
  }

  function replace(regex, replacecb) {
    let find = true;
    while (find) {
      let out = regex.exec(transformed);
      if (out && out.length) {
        if (out[0] !== " ") {
          let newValue = replacecb(out[0]);
          transformed = transformed.replaceAll(out[0], newValue);
        }
      } else {
        find = false;
      }
    }
  }

  function replaceUsers() {
    replace(/(@[a-z0-9]*)/, (t) => {
      return ` <span class="userTag"><svg style="margin-bottom:4px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>${t.replace(
        "@",
        ""
      )}</span> `;
    });
  }

  function replaceTags() {
    replace(/(#[a-z0-9]*)/, (t) => {
      return ` <span class="tagTag"><svg style="margin-bottom:4px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>${t.replace(
        "#",
        ""
      )}</span> `;
    });
  }

  function replaceEmails() {
    replace(/(^| )[a-z0-9]+@[a-z0-9]+\.[a-z]+($| )/g, (t) => {
      return ` <span class="emailTag"><svg style="margin-bottom:4px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>Mail</span> `;
    });
  }

  function replaceLinks() {
    replace(/(^| )[a-z0-9]+\.[a-z0-9]+\.[a-z]+($| )/g, (t) => {
      return ` <span class="linkTag"><svg style="margin-bottom:4px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hash"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>Link</span> `;
    });
  }

  onMount(() => {
    console.log(done)
    transform();
  });
</script>

<div style="margin-left: 10px;">
  <span on:click={toggleDone}>
    {#if done}
      <CheckSquareIcon />
    {:else}
      <SquareIcon />
    {/if}
  </span>
  <span>&nbsp;<span on:click={handleCLick}>{@html transformed}</span> </span>
</div>

<style>
  :global(.emailTag) {
    background: #ffe6c7;
    border-radius: 12px;
    font-size: 14px;
    padding: 4px;
    color: #f58e0a;
  }

  :global(.linkTag) {
    background: #d6ebff;
    border-radius: 12px;
    font-size: 14px;
    padding: 4px;
    color: #007fff;
  }

  :global(.tagTag) {
    background: #dbc7ff;
    border-radius: 12px;
    font-size: 14px;
    padding: 4px;
    color: #702ee6;
  }

  :global(.userTag) {
    background: #adf0d9;
    border-radius: 12px;
    font-size: 14px;
    padding: 4px;
    color: #07a873;
  }
</style>
