<script lang="ts">
import AuthGuard from "$lib/components/AuthGuard.svelte";
import NavBar from "$lib/components/NavBar.svelte";
import TaskList from "$lib/components/task/TaskList.svelte";

</script>

<AuthGuard>  
  <NavBar></NavBar>
  <TaskList></TaskList>
</AuthGuard>