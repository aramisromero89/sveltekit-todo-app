<script lang="ts">
  import {
    reqTaskList,
    tasks,
    creatingTask,
    editingTaskId,
  } from "$lib/services/task-service";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import TaskEdit from "./TaskEdit.svelte";
  import TaskListItem from "./TaskListItem.svelte";

  onMount(() => {
    reqTaskList();
  });
</script>

<div class="container">
  <row class="row">
    <TaskEdit isCreator={true} />
  </row>
  {#each $tasks as task}
    <div class="row" style="margin-top: 20px;">
      {#if $editingTaskId == task.id}
      <div in:fade>
        <TaskEdit taskId={task.id} value={task.text}/>
      </div>
        
      {:else}
        <div in:fade>
          <TaskListItem taskId={task.id} value={task.text} done={task.done}/>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style> 
  .container {
    margin-top: 20px;
  }
</style>
