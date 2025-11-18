import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	const robots = `User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
};
