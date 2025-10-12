import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import server from 'svelte/compiler'

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
	// server.hmr.overlay = false;
});
