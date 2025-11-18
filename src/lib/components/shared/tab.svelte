<!-- <script lang="ts">
	// let { activeItem, items } = $props();
	export let activeItem: string;
	export let items;
</script>

<div class="sticky top-16 z-40 border-b bg-background/95 backdrop-blur">
	<ul class="container mx-auto px-4 py-4">
		{#each items as item}
			<li
				id="category-filters"
				class="scrollbar-hide flex gap-2 overflow-x-auto"
				onclick={() => {
					dispatchEvent(item);
				}}
			>
				<a
					class="category-btn active cursor-pointer"
					data-category={item}
					class:active={item === activeItem}
					href="/">{item}</a
				>
			</li>
		{/each}
	</ul>
</div> -->
