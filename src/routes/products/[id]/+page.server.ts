// import type { ServerLoad } from '@sveltejs/kit';
// import { db } from '$lib/server/db';
// import { products } from '$lib/server/schema';
// import { eq } from 'drizzle-orm';
// import { error } from '@sveltejs/kit';

// export const load: ServerLoad = async ({ fetch, params }) => {
// 	const product = await db
// 		.select()
// 		.from(products)
// 		.where(eq(products.id, parseInt(params.id)))
// 		.getSQL();

// 	if (!product) {
// 		throw error(404, 'Product not found');
// 	}

// 	return {
// 		product
// 	};
// };

export const load = ({ fetch, params }) => {
	const fetchProductId = async (id: string) => {
		const productId = await fetch(`/api/products/[id]/${id}`);
		const Id = productId.json();
		return Id;
	};

	return {
		product: fetchProductId(params.id)
	};
};
