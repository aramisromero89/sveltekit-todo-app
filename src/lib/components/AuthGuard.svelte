<script lang="ts">
  import { user } from "$lib/services/auth-service";
  import SignIn from "./SignIn.svelte";
</script>

{#if $user == null}
  <SignIn />
{:else}
  <slot />
{/if}
