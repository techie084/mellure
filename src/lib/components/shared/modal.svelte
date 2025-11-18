<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		isOpen: boolean;
		children?: any;
	}

	let { isOpen = $bindable(false), children }: Props = $props();

	let isAnimating = $state(false);

	// Handle escape key
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && isOpen) {
			closeModal();
		}
	}

	// Close modal with animation
	function closeModal() {
		isAnimating = true;
		setTimeout(() => {
			isOpen = false;
			isAnimating = false;
		}, 300);
	}

	// Click outside to close
	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			closeModal();
		}
	}

	// Prevent body scroll when modal is open
	$effect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = '';
		};
	});

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

{#if isOpen}
	<!-- Backdrop with fade animation -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="animate-fadeIn fixed inset-0 z-50 flex items-center justify-center p-4"
		class:animate-fadeOut={isAnimating}
		onclick={handleBackdropClick}
	>
		<!-- Dark overlay -->
		<div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

		<!-- Modal content -->
		<div bind:this={isAnimating} role="dialog" aria-modal="true">
			<!-- Close button -->
			<button
				onclick={closeModal}
				class="absolute top-4 right-4 rounded-lg p-2 transition-colors hover:bg-gray-100"
				aria-label="Close modal"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<!-- Modal content slot -->
			<div>
				{@render children()}
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes scaleIn {
		from {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@keyframes scaleOut {
		from {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
		to {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
	}

	.animate-fadeIn {
		animation: fadeIn 0.3s ease-out;
	}

	.animate-fadeOut {
		animation: fadeOut 0.3s ease-out;
	}

	.animate-scaleIn {
		animation: scaleIn 0.3s ease-out;
	}

	.animate-scaleOut {
		animation: scaleOut 0.3s ease-out;
	}
</style>
