<script lang="ts">
	import { UserRound, ShoppingCart } from '@lucide/svelte';
</script>

<header
	id="main-header"
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60"
>
	<nav class="container mx-auto flex h-16 items-center justify-between px-4">
		<div class="flex items-center gap-6">
			<a
				href="/"
				aria-labelledby="Logo"
				class="text-2xl font-bold transition-opacity hover:opacity-80">Mellure</a
			>
		</div>
		<!-- Desktop  nav -->
		<div class="flex items-center gap-2">
			<a
				href="/user"
				aria-label="Account"
				class="h-10 w-10 cursor-pointer items-center justify-center rounded-md p-2 transition-colors hover:bg-accent md:flex"
			>
				<UserRound />
			</a>
			<a
				href="/cart"
				id="cart-btn"
				aria-label="shopping-cart"
				class="relative h-10 w-10 cursor-pointer items-center justify-center rounded-md p-2 transition-colors hover:bg-accent md:flex"
			>
				<ShoppingCart />
				<span
					id="cart-badge"
					class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary p-0 text-xs text-primary-foreground"
					>0</span
				>
			</a>
			<!-- Mobile menu button -->
		</div>
	</nav>
</header>
