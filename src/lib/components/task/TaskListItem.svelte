<script lang="ts">
    import{editTask} from "$lib/services/task-service"
    import {SquareIcon} from "svelte-feather-icons"
    export let taskId
    export let value

    function handleCLick(){
        console.log("edit task: "+ value)
        editTask(taskId)
    }
</script>
<div style="margin-left: 10px;" on:click={handleCLick}>
    <SquareIcon/>&nbsp;{value}
</div>