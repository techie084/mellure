// import { json } from '@sveltejs/kit';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST({ request }) {
//   try {
//     const { name, description, price, imageUrl } = await request.json();

//     if (!name || !price) {
//       return json({ error: 'Name and price are required' }, { status: 400 });
//     }

//     const product = await prisma.product.create({
//       data: { name, description, price: parseFloat(price), imageUrl },
//     });

//     return json(product);
//   } catch (error) {
//     console.error('Product add error:', error);
//     return json({ error: 'Failed to add product' }, { status: 500 });
//   }
// }
