<script lang="ts">
  import { reqTaskList, tasks, creatingTask, editingTaskId } from "$lib/services/task-service";
  import { onMount } from "svelte";
  import TaskEdit from "./TaskEdit.svelte";
  import TaskListItem from "./TaskListItem.svelte";

  onMount(() => {
    reqTaskList();
  });
</script>

<div class="container">
  <row class="row">
    <TaskEdit  isCreator={true} />
  </row>  
  {#each $tasks as task}
    <div class="row" style="margin-top: 20px;">
      {#if $editingTaskId == task.id}
        <TaskEdit taskId={task.id} value={task.text} />
      {:else}
        <TaskListItem taskId={task.id} value={task.text} />
      {/if}
    </div>
  {/each}
</div>

<style>
  .container{
    margin-top: 20px;
  }
</style>
