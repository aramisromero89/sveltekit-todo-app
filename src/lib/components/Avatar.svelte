<!--
This is all derivative of the codepen and gist linked below. I claim none of it except the structure of the component.
Any work in here that is original enough to need a license is offered under the MIT license:
https://github.com/IQAndreas/markdown-licenses/blob/master/mit.md
-->
<script>
  import { onMount } from "svelte";
  
  export let text = "";
  export let color = "#1abc9c";
  export let width = 32;
  export let round = true;
  export let src = "";
  export let onClick=()=>{}

  let avatarImage;
  let initialized = false;

  $: if(initialized) avatarImage.src = src !== "" ? src : LetterAvatar(text, width)

  onMount(()=>{
      initialized = true    
  }) 

 
  function LetterAvatar(name, size) {
    name = name || "";
    size = size || 60;

    let nameSplit = String(name).toUpperCase().split(" "),
      initials,
      charIndex,
      colourIndex,
      canvas,
      context,
      dataURI;

    if (nameSplit.length == 1) {
      initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
    } else {
      initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }

    if (window.devicePixelRatio) {
      size = size * window.devicePixelRatio;
    }

    charIndex = (initials == "?" ? 72 : initials.charCodeAt(0)) - 64;
    colourIndex = charIndex % 20;
    canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    context = canvas.getContext("2d");

    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = Math.round(canvas.width / 2) + "px Arial";
    context.textAlign = "center";
    context.fillStyle = "#FFF";
    context.fillText(initials, size / 2, size / 1.5);

    dataURI = canvas.toDataURL();
    canvas = null;

    return dataURI;
  }

  //   onMount(() => {

  //   });
</script>

<img on:click={onClick} bind:this={avatarImage} class:round {width} height={width} alt={text} />

<style>
  .round {
    border-radius: 50%;
  }
</style>
