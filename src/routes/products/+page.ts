import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const products = ['glasses'];
	return { products };
};
