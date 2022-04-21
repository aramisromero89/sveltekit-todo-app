<script lang="ts">
  import AuthGuard from "$lib/components/AuthGuard.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import SnackBar from "$lib/components/SnackBar.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
</svelte:head>
<SnackBar />

<slot />

<style>
  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 1rem;
    --toastContainerLeft: calc(50vw - 8rem);
  }
</style>
