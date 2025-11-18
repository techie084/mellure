<script lang="ts">
	import { Truck, PartyPopper, ShieldCheck } from '@lucide/svelte';
	const benefits = [
		{
			icon: PartyPopper,
			title: 'Premium Quality',
			description: 'Crafted from the finest materials'
		},
		{ icon: Truck, title: 'Free Shipping', description: 'On orders over $100' },
		{ icon: ShieldCheck, title: '30-Day Returns', description: 'Risk-free guarantee' }
	];
</script>

<section class="bg-secondary/30 py-12">
	<div class="container mx-auto px-4">
		<div class="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
			{#each benefits as { icon, title, description }}
				<div class="space-y-2 text-center">
					<div
						class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/40"
					>
						<span class="text-2xl"><svelte:component this={icon} /></span>
					</div>
					<h3>{title}</h3>
					<p class="text-sm text-muted-foreground">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
