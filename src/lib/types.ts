// Types;
export interface Product {
	id: number;
	name: string;
	price: number;
	category: string;
	image: string;
	description: string;
	inStock: boolean;
}

export interface CartItem {
	id: number;
	name: string;
	price: number;
	image: string;
	quantity: number;
	category: string;
}

export interface Order {
	id: string;
	date: string;
	status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
	total: number;
	items: CartItem[];
	shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
	fullName: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	country: string;
}

export interface User {
	email: string;
	name: string;
	orders: Order[];
}
