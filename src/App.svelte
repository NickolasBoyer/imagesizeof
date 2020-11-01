<script>
	import ImgSizeFigure from './ImgSizeFigure.svelte'
	export let profiles;

	let exampleImgUrl;

	// reader for the example img dropped by the user
	const reader = new FileReader();

	reader.addEventListener("load", function () {
    // convert image file to base64 string and pas to component
    exampleImgUrl = reader.result;
  }, false);

	const handlerFunction = (e) => {
		e.preventDefault();
		e.stopPropagation();
		// read file on drop
		reader.readAsDataURL(event.dataTransfer.files[0]);
	}

	document.body.addEventListener('drop', handlerFunction, false)
	document.body.addEventListener("dragover", (e) => {
		// needed for drop to work
		e.preventDefault();
});
</script>

<nav>
	<ul>
		{#each profiles as profile}
		<li><a href="#{ profile.id }">{ profile.title }</a></li>
		{/each}
	</ul>
</nav>
<div>
	{#each profiles as profile}
	<article id="{ profile.id }">
		<header>
			<h1>{ profile.title }</h1>
			<!-- <p>This is twitter</p> -->
		</header>
		<main>
			{#each profile.images as image}
			<ImgSizeFigure bind:image exampleImgUrl="{exampleImgUrl}"></ImgSizeFigure>
			{/each}
		</main>
	</article>
	{/each}
</div>

<style lang="postcss">
	nav {
		@apply h-full p-16;
		/* width: 320px; */
	}

	nav ul {
		@apply pt-12 sticky top-0;
	}

	nav li {
		@apply font-semibold text-2xl leading-normal;
	}

	nav li a {
		text-decoration: none;
	}

	article {
		@apply p-12;
	}

	article header {
		@apply m-4;
	}

	article header h1 {
		@apply text-4xl font-semibold leading-snug;
	}

	article main {
		@apply flex flex-row flex-wrap m-2;
	}
</style>
