import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db.js';
import { usersTable } from '$lib/server/schema.js';

export const GET = async () => {
	const user = await db.select().from(usersTable);

	return json(user, { status: 200 });
};
