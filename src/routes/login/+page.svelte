<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { signIn } from '$lib/auth-client';
	import { toast } from '@zerodevx/svelte-toast';

	let { data } = $props();
	console.log(data);
</script>

<div class="mx-auto max-w-md p-8">
	<h1 class="mb-6 text-3xl font-bold">Login 😎</h1>

	<!-- {#if form?.error}
		<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
			{form?.message}
		</div>
	{/if} -->

	<form method="POST" action="?/create" class="space-y-4" use:enhance>
		<div>
			<label for="email" class="mb-2 block font-medium">Email</label>
			<input type="email" name="email" class="w-full rounded-lg border px-4 py-2" required />
		</div>

		<div>
			<label for="password" class="mb-2 block font-medium">Password</label>
			<input type="password" name="password" class="w-full rounded-lg border px-4 py-2" required />
		</div>

		<button
			type="submit"
			class="w-full rounded-lg bg-black py-3 text-white hover:cursor-pointer hover:bg-primary disabled:opacity-50"
			onclick={() => toast.push('Welcome 🥰💃')}
		>
			Login
		</button>
	</form>

	<div class="my-6 text-center text-gray-500">OR</div>

	<!-- Google Login btn -->
	<button
		class="flex w-full justify-center rounded-lg border-2 border-black py-3 hover:cursor-pointer hover:border-none hover:bg-primary/50"
		onclick={async () =>
			await signIn.social({
				provider: 'google'
			})}
	>
		<img src="/google.svg" alt="Google logo" class="mr-2 inline-block h-5 w-5" />
		Login with Google
	</button>

	<p class="mt-4 text-center text-sm">
		Don't have an account? <a href="/signup" class="underline">sign-up</a>
	</p>
</div>
