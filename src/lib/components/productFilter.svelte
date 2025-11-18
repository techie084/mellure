<script lang="ts">
	// import { activeFilter, products } from '$lib/stores/FilterStore.svelte';
	let categories: string[] = $state([
		'All',
		'Sunglasses',
		'Eyeglasses',
		'Reading',
		'Sports',
		'Vintage'
	]);

	$effect(() => {
		console.log(categories);
	});
</script>

<section class="sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
	<div class="container mx-auto px-4 py-4">
		<div id="category-filters" class="scrollbar-hide flex gap-2 overflow-x-auto">
			{#each categories as category}
				<button
					class="category-btn active cursor-pointer hover:bg-primary"
					onclick={() => console.log(category)}>{category}</button
				>
			{/each}
		</div>
	</div>
</section>
