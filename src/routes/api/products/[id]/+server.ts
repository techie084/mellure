// import { json } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
// import { db } from '$lib/server/db';
// import { products } from '$lib/server/db/schema';
// import { eq } from 'drizzle-orm';
// import { handleError, AppError } from '$lib/utils/errors';
// import { productUpdateSchema } from '$lib/validation/product';
// import { z } from 'zod';

// // Validate ID param
// const idSchema = z.coerce.number().int().positive();

// export const GET: RequestHandler = async ({ params }) => {
// 	try {
// 		const id = idSchema.parse(params.id);

// 		const product = await db.select().from(products).where(eq(products.id, id)).get();

// 		if (!product) {
// 			throw new AppError('Product not found', 404, 'PRODUCT_NOT_FOUND');
// 		}

// 		return json({ product });
// 	} catch (error) {
// 		return handleError(error);
// 	}
// };

// export const PATCH: RequestHandler = async ({ params, request }) => {
// 	try {
// 		const id = idSchema.parse(params.id);
// 		const body = await request.json();

// 		// Validate update data
// 		const validatedData = productUpdateSchema.parse(body);

// 		// Check if product exists
// 		const existing = await db.select().from(products).where(eq(products.id, id)).get();

// 		if (!existing) {
// 			throw new AppError('Product not found', 404, 'PRODUCT_NOT_FOUND');
// 		}

// 		// Update product
// 		const updated = await db
// 			.update(products)
// 			.set({
// 				...validatedData,
// 				updatedAt: new Date()
// 			})
// 			.where(eq(products.id, id))
// 			.returning();

// 		return json({ product: updated[0] });
// 	} catch (error) {
// 		return handleError(error);
// 	}
// };

// export const DELETE: RequestHandler = async ({ params }) => {
// 	try {
// 		const id = idSchema.parse(params.id);

// 		const existing = await db.select().from(products).where(eq(products.id, id)).get();

// 		if (!existing) {
// 			throw new AppError('Product not found', 404, 'PRODUCT_NOT_FOUND');
// 		}

// 		await db.delete(products).where(eq(products.id, id));

// 		return json({ message: 'Product deleted successfully' });
// 	} catch (error) {
// 		return handleError(error);
// 	}
// };
