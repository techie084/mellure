<script lang="ts">
	import type { Product } from '$lib/types/types';

	const products: Product[] = [
		{
			id: 1,
			name: 'Classic Aviator Sunglasses',
			price: 149.99,
			category: 'Sunglasses',
			image: '/1-glass.jpeg',
			description:
				'Timeless aviator design with premium polarized lenses. Perfect for any occasion.',
			inStock: true
		},
		{
			id: 2,
			name: 'Modern Reading Glasses',
			price: 89.99,
			category: 'Reading',
			image: '/2-glass.jpeg',
			description:
				'Comfortable reading glasses with anti-reflective coating and blue light protection.',
			inStock: true
		},
		{
			id: 3,
			name: 'Designer Eyeglasses Collection',
			price: 199.99,
			category: 'Eyeglasses',
			image: '/3-glass.jpeg',
			description: 'Premium designer frames with exceptional clarity and style.',
			inStock: true
		},
		{
			id: 4,
			name: 'Vintage Round Frames',
			price: 129.99,
			category: 'Vintage',
			image: '/4-glass.jpeg',
			description: 'Retro-inspired round frames that combine vintage charm with modern comfort.',
			inStock: true
		},
		{
			id: 5,
			name: 'Performance Sports Sunglasses',
			price: 179.99,
			category: 'Sports',
			image:
				'/5glass.jpeg',
			description:
				'High-performance sunglasses designed for athletes with superior grip and clarity.',
			inStock: true
		},
		{
			id: 6,
			name: 'Square Frame Clear Lens Glasses',
			price: 99.99,
			category: 'Eyeglasses',
			image:
				'https://images.unsplash.com/photo-1759910546772-73e4bb7fdadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZmFzaGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzYwNTA5NzU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
			description: 'Clean, minimalist design perfect for everyday wear and professional settings.',
			inStock: false
		},
		{
			id: 7,
			name: 'Polarized Wayfarer Sunglasses',
			price: 159.99,
			category: 'Sunglasses',
			image:
				'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdW5nbGFzc2VzfGVufDF8fHx8MTc2MDUwODkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
			description: 'Classic wayfarer style with modern polarized lens technology.',
			inStock: true
		},
		{
			id: 8,
			name: 'Lightweight Titanium Frames',
			price: 219.99,
			category: 'Eyeglasses',
			image:
				'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleWVnbGFzc2VzfGVufDF8fHx8MTc2MDUwODkxNXww&ixlib=rb-4.1.0&q=80&w=1080',
			description: 'Ultra-lightweight titanium construction for all-day comfort.',
			inStock: true
		}
	];
</script>
