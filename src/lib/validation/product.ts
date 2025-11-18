// import { z } from 'zod';

// export const productSchema = z.object({
//   name: z.string().min(1, 'Product name is required').max(200),
//   description: z.string().max(1000).optional().nullable(),
//   price: z.number().positive('Price must be positive').max(999999),
//   category: z.string().min(1, 'Category is required'),
//   brand: z.string().max(100).optional().nullable(),
//   stock: z.number().int().min(0, 'Stock cannot be negative').default(0),
//   imageUrl: z.string().url('Invalid image URL').optional().nullable(),
//   rating: z.number().min(0).max(5).optional().nullable()
// });

// export const productUpdateSchema = productSchema.partial();

// export const productQuerySchema = z.object({
//   search: z.string().optional(),
//   category: z.string().optional(),
//   minPrice: z.coerce.number().min(0).optional().default(0),
//   maxPrice: z.coerce.number().positive().optional().default(999999),
//   inStock: z.coerce.boolean().optional().default(false),
//   sortBy: z.enum(['name', 'price-asc', 'price-desc', 'rating']).optional().default('name'),
//   page: z.coerce.number().int().positive().optional().default(1),
//   limit: z.coerce.number().int().positive().max(100).optional().default(20)
// });

// export type ProductInput = z.infer<typeof productSchema>;
// export type ProductQuery = z.infer<typeof productQuerySchema>;