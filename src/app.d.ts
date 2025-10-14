// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { Session, User } from 'better-auth/svelte-kit';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			session?: Session;
			user?: User;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
