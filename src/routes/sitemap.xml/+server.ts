// import type { RequestHandler } from './$types';
// import { db } from '$lib/server/db';
// import { products } from '$lib/server/db/schema';

// export const GET: RequestHandler = async () => {
// 	const allProducts = await db.select().from(products);

// 	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://yoursite.com</loc>
//     <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>
//   <url>
//     <loc>https://yoursite.com/products</loc>
//     <lastmod>${new Date().toISOString()}</lastmod>
//     <changefreq>daily</changefreq>
//     <priority>0.9</priority>
//   </url>
//   ${allProducts
// 		.map(
// 			(product) => `
//   <url>
//     <loc>https://yoursite.com/products/${product.id}</loc>
//     <lastmod>${product.updatedAt?.toISOString() || new Date().toISOString()}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>
//   `
// 		)
// 		.join('')}
// </urlset>`;

// 	return new Response(sitemap, {
// 		headers: {
// 			'Content-Type': 'application/xml',
// 			'Cache-Control': 'max-age=3600, s-max-age=3600'
// 		}
// 	});
// };
