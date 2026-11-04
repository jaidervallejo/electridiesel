/**
 * Marcas de repuestos y sus productos.
 * [PROVISIONAL] Todos los nombres y descripciones son de ejemplo.
 *
 * Para añadir una marca: copia un objeto y cambia `id` (único, sin espacios), `name`, etc.
 * Para añadir productos: agrega objetos { name, description } al arreglo `products`.
 * Campos opcionales por producto: `image` ({ src, alt }), `reference`, `tags`.
 * Íconos disponibles: src/components/ui/icons.ts
 */
import type { Brand } from '../types';

export const brandsSection = {
	eyebrow: 'Nuestras marcas',
	title: 'Repuestos para cada necesidad',
	description:
		'Consulta los repuestos disponibles por marca. Pulsa una tarjeta para ver algunos de sus productos y solicitar tu cotización.',
	cardHint: 'Ver productos',
};

export const brands: Brand[] = [
	{
		id: 'marca-a',
		name: 'Marca A',
		summary: 'Filtros y componentes de mantenimiento.',
		icon: 'filter',
		products: [
			{ name: 'Filtro de aceite (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Filtro de combustible (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Filtro de aire (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Separador de agua (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
	{
		id: 'marca-b',
		name: 'Marca B',
		summary: 'Bombas y sistemas de inyección.',
		icon: 'pump',
		products: [
			{ name: 'Bomba de inyección (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Bomba de transferencia (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Bomba de agua (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
	{
		id: 'marca-c',
		name: 'Marca C',
		summary: 'Inyectores y toberas.',
		icon: 'injector',
		products: [
			{ name: 'Inyector diésel (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Tobera (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Kit de reparación de inyector (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
	{
		id: 'marca-d',
		name: 'Marca D',
		summary: 'Correas, poleas y tensores.',
		icon: 'belt',
		products: [
			{ name: 'Correa de distribución (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Tensor (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Polea (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
	{
		id: 'marca-e',
		name: 'Marca E',
		summary: 'Componentes internos de motor.',
		icon: 'gear',
		products: [
			{ name: 'Kit de pistones (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Juego de empaques (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Cojinetes (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Válvulas (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
	{
		id: 'marca-f',
		name: 'Marca F',
		summary: 'Sistemas eléctricos.',
		icon: 'bolt',
		products: [
			{ name: 'Motor de arranque (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Alternador (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Sensor (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
	{
		id: 'marca-g',
		name: 'Marca G',
		summary: 'Otros repuestos diésel.',
		icon: 'box',
		products: [
			{ name: 'Turbocargador (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Radiador (ejemplo)', description: 'Descripción breve provisional del producto.' },
			{ name: 'Mangueras (ejemplo)', description: 'Descripción breve provisional del producto.' },
		],
	},
];
