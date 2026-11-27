<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Katalog – Piano-Trainer</title>
</svelte:head>

<h1>Katalog</h1>

<section class="panel">
	{#if data.dbError}
		<p class="message error" role="alert">
			Die Datenbank ist im Moment nicht erreichbar. Bitte versuche es später nochmals.
		</p>
	{:else if data.songs.length === 0}
		<p class="message">
			Noch keine Songs – <a href="/import">importiere deine erste MIDI-Datei</a>
		</p>
	{:else}
		<ul class="song-list">
			{#each data.songs as song (song.id)}
				<li>
					<span class="song-name">
						{song.title}{#if song.composer}&nbsp;– {song.composer}{/if}
					</span>
					<a class="practice-button" href="/songs/{song.id}">Üben</a>
				</li>
			{/each}
		</ul>
	{/if}
</section>

<style>
	.panel {
		background: #f4f4f4;
		padding: clamp(1rem, 2.5vw, 1.5rem);
		border-radius: 4px;
	}

	.song-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.song-list li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.75rem 1rem;
		background: #d9d9d9;
	}

	.song-name {
		font-size: 1.125rem;
		overflow-wrap: anywhere;
	}

	.practice-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		/* Comfortable touch target for tablets */
		min-height: 44px;
		min-width: 6rem;
		padding: 0 1.25rem;
		background: var(--color-accent);
		color: #fff;
		text-decoration: none;
		font-size: 1.25rem;
		-webkit-tap-highlight-color: transparent;
	}

	.practice-button:active {
		filter: brightness(0.9);
	}

	@media (hover: hover) {
		.practice-button:hover {
			filter: brightness(0.9);
		}
	}

	.practice-button:focus-visible,
	.message a:focus-visible {
		outline: 3px solid var(--color-text);
		outline-offset: 3px;
	}

	.message {
		margin: 0;
		font-size: 1.125rem;
	}

	.message a {
		color: var(--color-text);
	}

	.error {
		color: #b00020;
	}
</style>
