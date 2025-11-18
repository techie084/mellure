<!-- <script lang="ts">
	import type { SEOConfig } from '$lib/utils/seo';
	import { generateStructuredData } from '$lib/utils/seo';
	import { page } from '$app/stores';

	export let config: SEOConfig;

	$: structuredData = generateStructuredData(config);
	$: currentUrl = config.url || $page.url.href;
	$: robotsContent =
		[config.noindex && 'noindex', config.nofollow && 'nofollow'].filter(Boolean).join(', ') ||
		'index, follow';
</script>

<svelte:head>
	Primary Meta Tags
	<title>{config.title}</title>
	<meta name="title" content={config.title} />
	<meta name="description" content={config.description} />
	{#if config.keywords}
		<meta name="keywords" content={config.keywords.join(', ')} />
	{/if}
	{#if config.author}
		<meta name="author" content={config.author} />
	{/if}
	<meta name="robots" content={robotsContent} />

	Canonical URL
	<link rel="canonical" href={config.canonical || currentUrl} />

	Open Graph / Facebook
	<meta property="og:type" content={config.type || 'website'} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:title" content={config.title} />
	<meta property="og:description" content={config.description} />
	{#if config.image}
		<meta property="og:image" content={config.image} />
	{/if}

	Twitter
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={currentUrl} />
	<meta property="twitter:title" content={config.title} />
	<meta property="twitter:description" content={config.description} />
	{#if config.image}
		<meta property="twitter:image" content={config.image} />
	{/if}

	Article/Blog specific
	{#if config.type === 'article'}
		{#if config.publishedTime}
			<meta property="article:published_time" content={config.publishedTime} />
		{/if}
		{#if config.modifiedTime}
			<meta property="article:modified_time" content={config.modifiedTime} />
		{/if}
		{#if config.author}
			<meta property="article:author" content={config.author} />
		{/if}
	{/if}

	Structured Data (JSON-LD)
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}<\/script>`}
</svelte:head> -->
