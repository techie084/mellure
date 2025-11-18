<script lang="ts">
	// import Faq from '$lib/components/faq.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ProductFilter from '$lib/components/productFilter.svelte';
	import ProductGrid from '$lib/components/productGrid.svelte';
	import Benefits from '$lib/components/benefit.svelte';
</script>

<Hero />
<ProductFilter />
<ProductGrid />
<Benefits />
<!-- <Faq /> -->

<!-- {#if visible}
	<div
		class="absolute z-50 float-right flex items-center justify-center gap-2 rounded-lg bg-chart-1/50 bg-top-right p-3 px-5 py-3 text-sm font-bold transition-colors"
	>
		🍪 we use cookies for functional and analytical purpose.<button
			onclick={removeEl}
			class="hover:bg- inline-block rounded-lg bg-primary px-5 py-3 text-sm font-bold transition-colors hover:cursor-pointer"
			type="submit">Accept ✅</button
		>
	</div>
{/if} -->
