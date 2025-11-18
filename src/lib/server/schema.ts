import { integer, varchar, pgEnum, pgTable as table } from 'drizzle-orm/pg-core';

export const roles = pgEnum('roles', ['guest', 'user', 'admin']);

export const usersTable = table('users', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
	name: varchar('name', { length: 225 }).notNull(),
	email: varchar('email', { length: 225 }).notNull().unique(),
	emailVerified: integer('email_verified')
});

export const products = table('products', {
	id: integer('id').primaryKey().generatedAlwaysAsIdentity()
});

export type User = typeof usersTable.$inferSelect;
export type NewUser = typeof usersTable.$inferInsert;
// product
export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;
