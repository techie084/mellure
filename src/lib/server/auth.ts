import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './db';
import * as schema from './schema';
import { BETTER_AUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';

const _auth = betterAuth({
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true
	},
	socialProviders: {
		google: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}
	},
	secret: BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema
	})
});

export const auth = _auth;
export type Auth = typeof _auth;
export type User = typeof _auth.$Infer.Session.user;
export type Session = typeof _auth.$Infer.Session.session;
