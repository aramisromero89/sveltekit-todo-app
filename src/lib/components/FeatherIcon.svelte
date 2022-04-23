<script lang="ts">
    import { onMount } from "svelte";
    import feather from "feather-icons"
    
    export let icon   
    export let color="black"
    onMount(() => {    
      feather.replace();     
    });
  </script>
  
  <i style="color:{color}" data-feather={icon} />