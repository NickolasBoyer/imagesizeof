<script>
	import ImgSizeFigure from './ImgSizeFigure.svelte'
	export let profiles;
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
			<ImgSizeFigure bind:image></ImgSizeFigure>
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
