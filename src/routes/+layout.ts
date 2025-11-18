import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';
// import type { LayoutServerData } from './$types';

// export const load: LayoutServerLoad = async ({ locals }) => {
// 	return {
// 		session: locals.session,
// 		user: locals.user
// 	};
// };

injectAnalytics({ mode: dev ? 'development' : 'production' });
