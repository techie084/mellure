<script lang="ts">
	interface AccordionItem {
		title: string;
		content: string;
	}

	interface Props {
		items: AccordionItem[];
		allowMultiple?: boolean;
	}

	let { items, allowMultiple = false }: Props = $props();

	let openIndexes = $state<number[]>([]);

	function toggleItem(index: number) {
		if (allowMultiple) {
			// Multiple items can be open
			if (openIndexes.includes(index)) {
				openIndexes = openIndexes.filter((i) => i !== index);
			} else {
				openIndexes = [...openIndexes, index];
			}
		} else {
			// Only one item can be open
			if (openIndexes.includes(index)) {
				openIndexes = [];
			} else {
				openIndexes = [index];
			}
		}
	}

	function isOpen(index: number): boolean {
		return openIndexes.includes(index);
	}

	const accordion = [
		{
			title: 'What is Mellure?',
			content:
				'Mellure is an online eye-wear store offering a curated selection of stylish and affordable glasses for every occasion.'
		},
		{
			title: 'Do you offer prescription lenses?',
			content:
				'Yes, we provide prescription lenses for most of our frames. You can enter your prescription details during checkout.'
		},
		{
			title: 'What is your return policy?',
			content:
				'We offer a 30-day return policy on all eye-wear. If you are not satisfied with your purchase, you can return it for a full refund or exchange.'
		},
		{
			title: 'How long does shipping take?',
			content:
				'Shipping times vary based on your location, but most orders are delivered within 5-10 business days.'
		},
		{
			title: 'Do you have customer support?',
			content:
				'Yes, our customer support team is available to assist you with any questions or concerns. You can reach us via email or through our social media channels.'
		}
	];
</script>

<section class="py-16 md:py-24">
	<div class="mx-auto max-w-5xl px-4 md:px-6">
		<div class="mx-auto max-w-xl text-center">
			<h2 class="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
				Frequently Asked Questions
			</h2>
			<p class="mt-4 text-balance text-muted-foreground">
				Discover quick and comprehensive answers to common questions about our services.
			</p>
		</div>

		<div class="mx-auto mt-12 max-w-xl">
			<!-- accordion  -->
			<div class="space-y-3">
				{#each items as item, index}
					<div
						class="overflow-hidden rounded-lg border-2 border-gray-200 transition-all duration-300 hover:border-gray-300"
					>
						<!-- Accordion Header -->
						<button
							onclick={() => toggleItem(index)}
							class="flex w-full items-center justify-between px-6 py-4 text-left font-semibold transition-colors duration-200 hover:bg-gray-50"
						>
							<span class="text-lg">{item.title}</span>
							<svg
								class="h-6 w-6 transition-transform duration-300"
								class:rotate-180={isOpen(index)}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						<!-- Accordion Content with Animation -->
						<div
							class="overflow-hidden transition-all duration-300 ease-in-out"
							style="max-height: {isOpen(index) ? '500px' : '0'}; opacity: {isOpen(index)
								? '1'
								: '0'};"
						>
							<div class="border-t-2 border-gray-200 bg-gray-50 px-6 py-4">
								<p class="leading-relaxed text-gray-700">{item.content}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<!--  -->
			<p class="mt-6 px-4 text-muted-foreground">
				Can't find what you're looking for? Contact our
				<a href="#social" class="font-medium text-[#ec4899] hover:underline"
					>customer support team</a
				>
			</p>
		</div>
	</div>
</section>
