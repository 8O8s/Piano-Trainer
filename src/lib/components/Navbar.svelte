<script>
	import { page } from '$app/state';
	import logo from '#lib/assets/logo.svg';

	const links = [
		{ href: '/katalog', label: 'Katalog' },
		{ href: '/import', label: 'Import' }
	];

	/**
	 * A section counts as active for its own route and all sub-routes.
	 * @param {string} href
	 */
	function isActive(href) {
		const path = page.url.pathname;
		return path === href || path.startsWith(`${href}/`);
	}
</script>

<header class="navbar">
	<nav aria-label="Hauptnavigation">
		<a class="brand" href="/" aria-current={page.url.pathname === '/' ? 'page' : undefined}>
			<img src={logo} alt="" width="64" height="48" />
			<span>Piano-Trainer</span>
		</a>

		<ul>
			{#each links as link (link.href)}
				<li>
					<a
						class="nav-link"
						href={link.href}
						aria-current={isActive(link.href) ? 'page' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.navbar {
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--color-cream);
		/* Keep content clear of the iPad status bar / rounded corners */
		padding-top: env(safe-area-inset-top);
	}

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: var(--content-width);
		margin: 0 auto;
		padding: 0.75rem max(1.5rem, env(safe-area-inset-right)) 0.75rem
			max(1.5rem, env(safe-area-inset-left));
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		min-height: 44px;
		color: var(--color-text);
		text-decoration: none;
		font-size: clamp(1.5rem, 3.5vw, 2.25rem);
		white-space: nowrap;
	}

	.brand img {
		width: clamp(48px, 6vw, 64px);
		height: auto;
		flex-shrink: 0;
	}

	ul {
		display: flex;
		gap: clamp(0.75rem, 2.5vw, 1.5rem);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.nav-link {
		display: flex;
		align-items: center;
		justify-content: center;
		/* Comfortable touch target for tablets */
		min-height: 44px;
		min-width: clamp(7rem, 14vw, 9rem);
		padding: 0 1.25rem;
		border-radius: 8px;
		background: var(--color-surface);
		color: var(--color-text);
		text-decoration: none;
		font-size: 1.125rem;
		-webkit-tap-highlight-color: transparent;
		transition: background-color 0.15s;
	}

	.nav-link:active {
		background: var(--color-surface-strong);
	}

	/* Hover styling only on devices with a real pointer (not touch) */
	@media (hover: hover) {
		.nav-link:hover {
			background: var(--color-surface-strong);
		}
	}

	.nav-link[aria-current='page'] {
		background: var(--color-text);
		color: var(--color-cream);
	}

	.brand:focus-visible,
	.nav-link:focus-visible {
		outline: 3px solid var(--color-accent);
		outline-offset: 3px;
	}

	/* Narrow portrait tablets / split view: hide wordmark text if space is tight */
	@media (max-width: 540px) {
		.brand span {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			clip: rect(0 0 0 0);
		}

		.nav-link {
			min-width: 0;
		}
	}
</style>
