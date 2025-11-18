<script lang="ts">
	//  import SEO from '$lib/components/shared/seo.svelte';
	// 	import { generateSEO } from '$lib/utils/seo';
	// 	const seo = generateSEO({
	// 			title: product.name,
	// 			description: product.description || `Buy ${product.name} for $${product.price}`,
	// 			url: `https://yoursite.com/products/${product.id}`,
	// 			image: product.imageUrl || undefined,
	// 			type: 'product',
	// 			keywords: [product.category, product.brand, product.name].filter(Boolean),
	// 			product: {
	// 					price: product.price,
	// 					currency: 'USD',
	// 					availability: product.stock > 0 ? 'in stock' : 'out of stock',
	// 					brand: product.brand || undefined
	// 				}
	// 			});

	import type { PageData } from './$types';

	export let data: PageData;

	const { product } = data;
</script>

<!-- <SEO config={seo} /> -->

<h1>products-Id</h1>

<div class="product-page">
	<h1>
		<a href="/product/{product.id}"></a>
		{product.name}
	</h1>
	<p>{product.price.toFixed(2)}</p>
</div>
