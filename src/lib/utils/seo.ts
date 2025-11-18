// export interface SEOConfig {
// 	title: string;
// 	description: string;
// 	url?: string;
// 	image?: string;
// 	type?: 'website' | 'product' | 'article';
// 	noindex?: boolean;
// 	nofollow?: boolean;
// 	canonical?: string;
// 	keywords?: string[];
// 	author?: string;
// 	publishedTime?: string;
// 	modifiedTime?: string;
// 	product?: {
// 		price: number;
// 		currency: string;
// 		availability: 'in stock' | 'out of stock';
// 		brand?: string;
// 	};
// }

// export const defaultSEO: SEOConfig = {
// 	title: 'Mellure',
// 	description: 'Your Aura Amplified.',
// 	url: 'https://mellure-lux.vercel.app',
// 	image: 'https://mellure-lux.vercel.app/og-image.jpg',
// 	type: 'website'
// };

// export function generateSEO(config: Partial<SEOConfig>): SEOConfig {
// 	return {
// 		...defaultSEO,
// 		...config,
// 		title: config.title ? `${config.title} | ${defaultSEO.title}` : defaultSEO.title
// 	};
// }

// // Generate structured data (JSON-LD)
// export function generateStructuredData(config: SEOConfig) {
// 	const baseData = {
// 		'@context': 'https://schema.org',
// 		'@type': config.type === 'product' ? 'Product' : 'WebPage',
// 		name: config.title,
// 		description: config.description,
// 		url: config.url,
// 		image: config.image
// 	};

// 	if (config.type === 'product' && config.product) {
// 		return {
// 			...baseData,
// 			'@type': 'Product',
// 			offers: {
// 				'@type': 'Offer',
// 				price: config.product.price,
// 				priceCurrency: config.product.currency,
// 				availability:
// 					config.product.availability === 'in stock'
// 						? 'https://schema.org/InStock'
// 						: 'https://schema.org/OutOfStock',
// 				url: config.url
// 			},
// 			brand: config.product.brand
// 				? {
// 						'@type': 'Brand',
// 						name: config.product.brand
// 					}
// 				: undefined
// 		};
// 	}

// 	return baseData;
// }
