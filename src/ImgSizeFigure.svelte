<script>
	import { onMount } from 'svelte'
	import { renderImgToCanvas } from './utils.js'
	export let image = {};
	export let exampleImgUrl = '';

	let canvasElement;
	let figureElement;

	$: effectiveWidth = 250 * image.ratio[0]/image.ratio[1]
	
	$: canvasRenderer = renderImgToCanvas(canvasElement);
	$: canvasElement && canvasRenderer(exampleImgUrl, image.ratio[0]/image.ratio[1], offSet);

	let startPosition = {x: null, y: null}
	let offSet = {x: 0, y: 0}
	const onMouseMove = (e) => {
		if (startPosition.x == null || startPosition.y == null) return;
		offSet = { x: e.clientX - startPosition.x, y: e.clientY - startPosition.y };
		console.log(offSet)
	}

	const onMouseDown = (e) => {
		console.log(e)
		startPosition = {x: (e.clientX - offSet.x), y: (e.clientY - offSet.y)}
		figureElement.addEventListener('mousemove', onMouseMove)
		document.body.addEventListener('mouseup', onMouseUp)
	}

	const onMouseUp = (e) => {
		figureElement.removeEventListener('mousemove', onMouseMove)
		startPosition = {x: null, y: null}
		document.body.removeEventListener('mouseup', onMouseUp)

	}
	onMount(() => {
		figureElement.addEventListener('mousedown', onMouseDown)
	})

	const imageToClipboard = () => {
		canvasElement.toBlob(function(blob) { 
			const item = new ClipboardItem({ "image/png": blob });
			navigator.clipboard.write([item]); 
		});
	}
</script>

<figure style="width: { effectiveWidth }px;" bind:this={figureElement}>
  <figcaption>{ image.title }</figcaption>
	<canvas bind:this={canvasElement}></canvas>
  <h1>{ image.ratio[0] }:{ image.ratio[1] }</h1>
  <code>{ image.width }, { image.height }</code>
	{#if exampleImgUrl}
  <button on:click="{imageToClipboard}">Copy</button>
	{/if}
</figure>

<style lang="postcss">
	figure {
		@apply m-2 text-center relative flex flex-col items-center justify-center overflow-hidden;
		background: #D8D8D8;
		border: 1px solid #979797;
		border-radius: 10px;
		height: 250px;
	}

	figure canvas {
		@apply absolute top-0 left-0 h-full w-full;
		z-index: 0;
	}

	figure h1 {
		@apply text-center text-6xl leading-tight font-bold;
		color: #A7A7A7;
	}

	figure figcaption {
		@apply absolute bottom-0 left-0 text-sm font-semibold p-2 px-3;
		z-index: 1;
  }
  
  figure code {
    @apply font-mono text-xs p-1 px-2 rounded;
    background: #E8E8E8;
		border: 1px solid #979797;
		z-index: 1;
	}

	figure button {
		@apply absolute bottom-0 right-0 text-xs font-semibold p-2 m-2 text-gray-100 rounded-full border-none;
		background-color: #353535;
		z-index: 1;
  }
</style>