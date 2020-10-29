<script>
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
			<figure style="width: { image.width }px;">
				<h1>{ image.width },{ image.height }</h1>
				<figcaption>{ image.title }</figcaption>
			</figure>
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

	nav li {
		@apply font-semibold text-2xl leading-normal;
		letter-spacing: 1px;
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

	figure {
		@apply m-2 text-center relative flex flex-col items-center justify-center;
		background: #D8D8D8;
		border: 1px solid #979797;
		border-radius: 5px;
		height: 300px;
	}

	figure h1 {
		@apply m-2 text-center text-4xl font-bold;
		color: #A7A7A7;
	}

	figure figcaption {
		@apply absolute bottom-0 left-0 text-sm font-semibold p-1 px-2;

	}
</style>
