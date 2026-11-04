/** [PROVISIONAL] Textos de ejemplo de la sección de servicios. */
import type { InfoItem } from '../types';

export const servicesSection = {
	eyebrow: 'Nuestros servicios',
	title: 'Más que repuestos, soluciones',
	description: 'Servicios pensados para que tu motor diésel se mantenga en buenas condiciones de funcionamiento.',
};

export const services: InfoItem[] = [
	{
		icon: 'diagnostic',
		title: 'Diagnóstico de motores',
		description: 'Identificamos fallas y te orientamos sobre la mejor solución para tu motor.',
	},
	{
		icon: 'wrench',
		title: 'Mantenimiento preventivo y correctivo',
		description: 'Ayudamos a prolongar la vida útil de tus equipos y a evitar paradas inesperadas.',
	},
	{
		icon: 'gear',
		title: 'Suministro de repuestos',
		description: 'Repuestos para diferentes marcas y aplicaciones de motores diésel.',
	},
	{
		icon: 'headset',
		title: 'Asesoría técnica',
		description: 'Te ayudamos a encontrar el repuesto o servicio adecuado para tu necesidad.',
	},
	{
		icon: 'engine',
		title: 'Reparación de motores diésel',
		description: 'Atención técnica para la reparación de motores y sus componentes.',
	},
];
