/**
 * [PROVISIONAL] Textos editables de portada, slogan, misión/visión y llamada a cotización.
 */
import type { InfoItem } from '../types';

export const hero = {
	titleStart: 'Soluciones y repuestos',
	titleHighlight: 'para motores diésel',
	description:
		'Ofrecemos repuestos y servicios especializados para ayudarte a mantener tu motor diésel en el mejor rendimiento.',
	primaryCta: { label: 'Ver repuestos', href: '#repuestos' },
	whatsappCta: 'Contactar por WhatsApp',
	image: {
		// src: '/images/hero-engine.svg',
		src: '/images/engine.jpg',
		alt: 'Imagen provisional de un motor diésel',
		width: 960,
		height: 640,
	},
};

export const slogan = {
	text: 'Calidad y confianza en cada repuesto',
	highlight: ' para que tu motor nunca se detenga.',
};

export const aboutSection = {
	eyebrow: 'Nosotros',
	title: 'Misión y visión',
	description: 'Lo que nos mueve y hacia dónde queremos llegar.',
};

export const missionVision: InfoItem[] = [
	{
		icon: 'target',
		title: 'Misión',
		description:
			'Texto provisional de la misión: describe el propósito del negocio, a quién atiende y cómo ayuda a sus clientes con repuestos y servicios para motores diésel.',
	},
	{
		icon: 'eye',
		title: 'Visión',
		description:
			'Texto provisional de la visión: describe cómo se proyecta el negocio en el futuro y qué quiere lograr con sus clientes y su entorno.',
	},
];

export const quoteCta = {
	title: '¿Necesitas un repuesto?',
	subtitle: 'Escríbenos por WhatsApp y encuentra la solución para tu motor.',
	buttonLabel: 'Solicitar cotización',
};

export const floatingWhatsApp = {
	label: 'Escríbenos por WhatsApp',
};
