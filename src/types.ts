import type { ImageMetadata } from 'astro';
import type { IconName } from './components/ui/icons';

/** Imagen local optimizable (import) o ruta pública (`/images/...`). */
export type ImageSource = ImageMetadata | string;

export interface ImageData {
	src: ImageSource;
	alt: string;
	width?: number;
	height?: number;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface SocialLink {
	label: string;
	icon: IconName;
	url: string;
}

export interface Product {
	name: string;
	description: string;
	image?: ImageData;
	/** Campos opcionales para ampliar más adelante. */
	reference?: string;
	tags?: string[];
}

export interface Brand {
	/** Identificador único, se usa para el id del diálogo (solo letras, números y guiones). */
	id: string;
	name: string;
	summary: string;
	icon: IconName;
	image?: ImageData;
	products: Product[];
}

export interface InfoItem {
	icon: IconName;
	title: string;
	description: string;
}

export type ButtonVariant = 'primary' | 'outline' | 'dark' | 'whatsapp' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
