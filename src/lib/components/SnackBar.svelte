<script lang="ts">
  import { onMount } from "svelte";
  import { SvelteToast, toast } from "@zerodevx/svelte-toast";
  import { SNACK_MSG } from "$lib/services/snackbar-service";


  onMount(() => {
    SNACK_MSG.subscribe((msg) => {
      if (msg) {
        toast.pop();
        toast.push(msg);
      }
    });
  });
</script>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
