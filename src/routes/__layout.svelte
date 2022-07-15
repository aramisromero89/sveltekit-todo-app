<script lang="ts">
  import { LOADING } from "$lib/api/apollo-client";
  import AuthGuard from "$lib/components/AuthGuard.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import SnackBar from "$lib/components/SnackBar.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
</svelte:head>
<SnackBar />
{#if $LOADING}
  <dialog open>
    <div
      class="spinner-border"
      style="width: 3rem; height: 3rem;"
      role="status"
    />
  </dialog>
{/if}

<slot />

<style>
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

  dialog {
    text-align: center;
    border: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(5, 5, 5, 0.5);
  }

  .spinner-border{
    color:white;
    margin-top: 50vh;
    z-index: 9999999;
  }

  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 1rem;
    --toastContainerLeft: calc(50vw - 8rem);
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }

  :global(*) {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }

  :global(body) {
    font-family: "Roboto", Arial, Helvetica, sans-serif !important;
  }
</style>
