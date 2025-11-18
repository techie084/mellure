import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$env/static/private';

const sql = neon(DATABASE_URL);
const db = drizzle({ client: sql });
console.log('✅ Database connected successfully');

export { db };
