<script lang="ts">
import AuthGuard from "$lib/components/AuthGuard.svelte";
import NavBar from "$lib/components/NavBar.svelte";

  import { user } from "$lib/services/auth-service"
 
</script>

<AuthGuard>  
  <NavBar></NavBar>
  <p>hello</p>
</AuthGuard>