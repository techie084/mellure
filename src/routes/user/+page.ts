// import { authClient } from '$lib/auth-client';

// export const { data: session, error } = await authClient.getSession();

export const load = ({ fetch }) => {
	const fetchUser = async () => {
		const user = await fetch('/api/user');
		const userData = user.json();
		return userData;
	};

	return { user: fetchUser() };
};
