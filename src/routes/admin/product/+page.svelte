<!-- <script lang="ts">
	import { onMount } from 'svelte';
	let products: any[] | null | undefined = [];

	onMount(async () => {
		const res = await fetch('/api/products');
		products = await res.json();
	});
</script>

<h1 class="mb-4 text-2xl font-bold">Products</h1>

<table class="w-full border-collapse rounded border bg-white text-left text-sm shadow">
	<thead class="bg-gray-50">
		<tr>
			<th class="border-b p-3">Name</th>
			<th class="border-b p-3">Price</th>
			<th class="border-b p-3">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each products as product}
			<tr class="hover:bg-gray-50">
				<td class="border-b p-3">{product.name}</td>
				<td class="border-b p-3">${product.price.toFixed(2)}</td>
				<td class="border-b p-3 text-indigo-600">
					<a href={`/product/${product.id}`}>View</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table> -->
