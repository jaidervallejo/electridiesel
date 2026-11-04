/**
 * Configuración general del sitio y del negocio.
 * Todos los datos marcados como [PROVISIONAL] deben reemplazarse por los reales.
 */
import type { NavLink, SocialLink } from '../types';

export const site = {
	/** Dominio definitivo. Actualízalo también en astro.config.mjs (`site`) y en public/robots.txt. */
	url: 'https://jaidervallejo.github.io/electridiesel/',
	lang: 'es',
	locale: 'es_CO',
	name: 'ELECTRIDIESEL',
	tagline: 'Repuestos y servicios para motores diésel',
	/** SEO por defecto (puede sobrescribirse por página). */
	seo: {
		title: 'ELECTRIDIESEL | Repuestos y servicios para motores diésel',
		description:
			'Repuestos y servicios para motores diésel. Consulta repuestos por marca, conoce nuestros servicios y solicita tu cotización por WhatsApp.',
		ogImage: '/og-image.png',
		themeColor: '#0d0e10',
	},
	logo: {
		src: '/logo.svg',
		alt: 'ELECTRIDIESEL, inicio',
	},
} as const;

export const navigation: NavLink[] = [
	{ label: 'Inicio', href: '#inicio' },
	{ label: 'Repuestos', href: '#repuestos' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'Nosotros', href: '#nosotros' },
	{ label: 'Contacto', href: '#contacto' },
];

/**
 * Datos de contacto. Deja un campo vacío ('') para ocultarlo en el sitio.
 * [PROVISIONAL] No se publican datos reales hasta que se definan.
 */
export const contact = {
	phoneDisplay: '+57 000 000 0000',
	phoneHref: 'tel:+570000000000',
	email: 'correo@example.com',
	address: 'Dirección del negocio (por definir)',
	schedule: ['Lun - Vie: horario por definir', 'Sáb: horario por definir'],
};

/** Redes sociales. Deja `url` vacío para ocultar la red. */
export const socialLinks: SocialLink[] = [
	{ label: 'Facebook', icon: 'facebook', url: '' },
	{ label: 'Instagram', icon: 'instagram', url: '' },
	{ label: 'YouTube', icon: 'youtube', url: '' },
	{ label: 'LinkedIn', icon: 'linkedin', url: '' },
];
