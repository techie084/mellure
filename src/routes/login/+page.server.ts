import { redirect } from '@sveltejs/kit';

let login = [
	{
		email: 'wisommatthew08@gmail.com',
		password: 123456789
	}
];

export const load = async () => {
	return {
		login
	};
};

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		const loginForm = {
			email,
			password
		};

		console.log(loginForm)

		throw redirect(303, '/');

		// return { success: true };
	},
	delete: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		login = login.filter((l) => l.email != email);

		return { success: true };
	}
};
