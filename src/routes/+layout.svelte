<script>
	import favicon from '#lib/assets/favicon.svg';
	import Navbar from '#lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main>
	{@render children()}
</main>

<style>
	:global(:root) {
		--color-cream: #f8f8e8;
		--color-surface: #e4e4e7;
		--color-surface-strong: #d0d0d4;
		--color-text: #1a1a1a;
		--color-accent: #0f9d58;
		--content-width: 1100px;
		font-family: Georgia, 'Times New Roman', Times, serif;
		color: var(--color-text);
		/* Prevent iOS from enlarging text on rotation */
		-webkit-text-size-adjust: 100%;
		text-size-adjust: 100%;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background: #fff;
	}

	main {
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 2rem max(1.5rem, env(safe-area-inset-right)) max(2rem, env(safe-area-inset-bottom))
			max(1.5rem, env(safe-area-inset-left));
	}

	main :global(h1) {
		font-weight: normal;
		font-size: clamp(1.5rem, 3vw, 2rem);
		margin: 0 0 1rem;
	}
</style>
