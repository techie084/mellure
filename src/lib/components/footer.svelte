<script lang="ts">
	const Socials = [
		{
			name: 'TicTok',
			href: 'https://www.tiktok.com/@mellureszn',
			img: '/tiktok.svg'
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/mellureszn/',
			img: '/instagram.svg'
		},
		{
			name: 'Whatsapp',
			href: 'https://wa.me/+2347056791923',
			img: '/whatsapp.svg'
		}
	];
</script>

<footer class="mx-auto border-t py-4">
	<div class="mx-auto px-4">
		<div class="mb-8 grid gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-2xl font-bold">Mellure</h3>
				<p class="text-muted-foreground">Premium Eye-wear for the modern individual</p>
			</div>
			<div>
				<h4 id="social" class="mb-4 text-xl font-medium">Social's</h4>
				<!-- Socials links -->
				<ul class="space-y-2 text-muted-foreground">
					{#each Socials as { href, img, name }}
						<li>
							<a {href} class="flex items-center gap-2 hover:text-foreground" target="_blank"
								><img src={img} alt="{name} svg" class="h-5 w-5" /> {name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="border-t pt-8 text-center text-sm text-muted-foreground">
			<p>&COPY; 2025 Mellure. All rights reserved.</p>
		</div>
	</div>
</footer>
