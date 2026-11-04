/**
 * Configuración centralizada de WhatsApp.
 * [PROVISIONAL] Reemplaza `phone` por el número real: código de país + número,
 * solo dígitos, sin "+", espacios ni guiones. Ej.: 573001234567
 */
export const whatsapp = {
	phone: '570000000000',
	messages: {
		general: 'Hola, quiero solicitar una cotización de repuestos para motor diésel.',
		floating: 'Hola, me gustaría recibir información sobre sus repuestos y servicios.',
		services: 'Hola, quiero información sobre sus servicios para motores diésel.',
		/** Plantillas: {brand} y {product} se reemplazan automáticamente. */
		brand: 'Hola, quiero cotizar repuestos de la marca {brand}.',
		product: 'Hola, quiero cotizar el producto "{product}" de la marca {brand}.',
	},
} as const;
