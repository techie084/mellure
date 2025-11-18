<!-- <script lang="ts">
	let name = '';
	let description = '';
	let price = 0;
	let imageUrl = '';
	let loading = false;

	async function submit() {
		loading = true;
		const res = await fetch('/admin/api/add-product', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, description, price, imageUrl })
		});

		if (res.ok) {
			alert('✅ Product added successfully');
			name = description = imageUrl = '';
			price = 0;
		} else {
			const err = await res.json();
			alert('❌ ' + err.error);
		}
		loading = false;
	}
</script>

<h1 class="mb-6 text-2xl font-bold">Add Product</h1>

<form on:submit|preventDefault={submit} class="max-w-lg space-y-4">
	<input
		type="text"
		bind:value={name}
		placeholder="Product name"
		required
		class="w-full rounded border p-2"
	/>
	<textarea bind:value={description} placeholder="Description" class="w-full rounded border p-2"
	></textarea>
	<input
		type="number"
		bind:value={price}
		placeholder="Price (USD)"
		step="0.01"
		class="w-full rounded border p-2"
	/>
	<input
		type="text"
		bind:value={imageUrl}
		placeholder="Image URL"
		class="w-full rounded border p-2"
	/>

	{#if imageUrl}
		<img src={imageUrl} alt="Preview" class="h-40 w-40 rounded border object-cover" />
	{/if}

	<button
		type="submit"
		class="rounded bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
		disabled={loading}
	>
		{loading ? 'Adding...' : 'Add Product'}
	</button>
</form> -->
