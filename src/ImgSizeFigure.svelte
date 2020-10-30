<script>
  export let image = {};

  $: effectiveWidth = 250 * image.ratio[0]/image.ratio[1]
</script>

<figure style="width: { effectiveWidth }px;">
  <figcaption>{ image.title }</figcaption>
  <h1>{ image.ratio[0] }:{ image.ratio[1] }</h1>
  <code>{ image.width }, { image.height }</code>
  <!-- <button>300 x 400</button> -->
</figure>

<style lang="postcss">
	figure {
		@apply m-2 text-center relative flex flex-col items-center justify-center;
		background: #D8D8D8;
		border: 1px solid #979797;
		border-radius: 5px;
		height: 250px;
	}

	figure h1 {
		@apply text-center text-6xl leading-tight font-bold;
		color: #A7A7A7;
	}

	figure figcaption {
		@apply absolute bottom-0 left-0 text-sm font-semibold p-2 px-3;
  }
  
  figure code {
    @apply font-mono text-xs p-1 px-2 rounded;
    background: #E8E8E8;
		border: 1px solid #979797;
	}

	/* figure button {
		@apply absolute bottom-0 right-0 text-xs font-semibold p-2 bg-gray-600 text-gray-100 rounded-full;
  } */
  

  figure code {

  }
</style>