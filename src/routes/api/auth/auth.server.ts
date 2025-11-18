import { auth } from '$lib/server/auth';
import { db } from '$lib/server/db';
import { usersTable } from '$lib/server/schema';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async (event) => {
	return auth.handler(event.request);
};

export const POST = async (event) => {
	const data = await event.request.formData();
	const email = data.get('email');
	const password = data.get('password');
	console.log(email, password);

	const user: typeof usersTable.$inferInsert = {
		name: 'wisdom',
		email: 'wisdommatthew08@gmail.com',
		emailVerified: 1
	};

	await db
		.update(usersTable)
		.set({
			name: 'Mellure'
		})
		.where(eq(usersTable.email, user.email));
	console.log('User info updated!');
	await db
		.update(usersTable)
		.set({
			name: 'Mellure'
		})
		.where(eq(usersTable.email, user.email));
	console.log('✅ User info updated!');

	console.log(event);
	return { success: true };
};
