// // src/routes/api/search/+server.ts
// import { json } from '@sveltejs/kit';
// import { env } from '$env/dynamic/private';

// const notion = new Client({ auth: env.NOTION_KEY });
// const databaseId = env.NOTION_PRODUCTS_DB!;

// export async function GET({ url }) {
// 	const query = url.searchParams.get('q') || '';

// 	const res = await notion.databases.query({
// 		database_id: databaseId,
// 		filter: {
// 			or: [
// 				{ property: 'Name', rich_text: { contains: query } },
// 				{ property: 'Category', rich_text: { contains: query } }
// 			]
// 		}
// 	});

// 	interface Product {
// 		id: string;
// 		name: string | undefined;
// 		category: string | undefined;
// 		price: number | undefined;
// 	}

// 	interface NotionPage {
// 		id: string;
// 		properties: {
// 			Name: {
// 				title: Array<{ plain_text: string }>;
// 			};
// 			Category?: {
// 				select?: {
// 					name: string;
// 				};
// 			};
// 			Price?: {
// 				number?: number;
// 			};
// 		};
// 	}

// 	const products: Product[] = (res.results as NotionPage[]).map((page) => ({
// 		id: page.id,
// 		name: page.properties.Name.title[0]?.plain_text,
// 		category: page.properties.Category?.select?.name,
// 		price: page.properties.Price?.number
// 	}));

// 	return json(products);
// }
