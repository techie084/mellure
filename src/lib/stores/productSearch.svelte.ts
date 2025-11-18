// import { writable, derived } from 'svelte/store';

// export interface Product {
// 	id: number;
// 	name: string;
// 	price: string;
// 	category: string;
// 	brand: string | null;
// 	stock: number;
// 	rating: number | null;
// 	imageUrl: string | null;
// 	description: string | null;
// }

// export interface ApiError {
// 	message: string;
// 	details?: Array<{ field: string; message: string }>;
// 	code?: string;
// }

// // State stores
// export const products = writable<Product[]>([]);
// export const isLoading = writable(false);
// export const error = writable<ApiError | null>(null);
// export const pagination = writable({ page: 1, limit: 20, total: 0, totalPages: 0 });

// // Filter stores
// export const searchQuery = writable('');
// export const selectedCategory = writable<string | null>(null);
// export const priceRange = writable({ min: 0, max: 1000 });
// export const inStockOnly = writable(false);
// export const sortBy = writable<'name' | 'price-asc' | 'price-desc' | 'rating'>('name');

// // Fetch products with comprehensive error handling
// export async function fetchProducts(page = 1) {
// 	isLoading.set(true);
// 	error.set(null);

// 	try {
// 		// const params = new SvelteURLSearchParams();
// 		const params = new URLSearchParams();

// 		const query = get(searchQuery);
// 		const category = get(selectedCategory);
// 		const range = get(priceRange);
// 		const inStock = get(inStockOnly);
// 		const sort = get(sortBy);

// 		if (query) params.set('search', query);
// 		if (category) params.set('category', category);
// 		params.set('minPrice', range.min.toString());
// 		params.set('maxPrice', range.max.toString());
// 		if (inStock) params.set('inStock', 'true');
// 		params.set('sortBy', sort);
// 		params.set('page', page.toString());

// 		const response = await fetch(`/api/products?${params}`);

// 		if (!response.ok) {
// 			const errorData = await response.json().catch(() => ({ error: 'Failed to fetch products' }));
// 			throw new Error(errorData.error || `HTTP ${response.status}`);
// 		}

// 		const data = await response.json();
// 		products.set(data.products);
// 		pagination.set(data.pagination);
// 	} catch (err) {
// 		const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
// 		error.set({ message: errorMessage });
// 		products.set([]);
// 	} finally {
// 		isLoading.set(false);
// 	}
// }

// // Helper to get current value from store
// function get<T>(store: { subscribe: (fn: (value: T) => void) => () => void }): T {
// 	let value: T;
// 	const unsubscribe = store.subscribe((v) => (value = v));
// 	unsubscribe();
// 	return value!;
// }

// // Debounced fetch for search
// let debounceTimer: ReturnType<typeof setTimeout>;

// export function debouncedFetch() {
// 	clearTimeout(debounceTimer);
// 	debounceTimer = setTimeout(() => {
// 		fetchProducts();
// 	}, 300);
// }

// // Clear error
// export function clearError() {
// 	error.set(null);
// }

// export const filteredProducts = derived([products, searchQuery], ([$products, $searchQuery]) => {
// 	if (!$searchQuery) return $products;

// 	const query = $searchQuery.toLowerCase();
// 	return $products.filter(
// 		(product) =>
// 			product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
// 	);
// });
