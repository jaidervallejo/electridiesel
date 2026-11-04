import { whatsapp } from '../config/whatsapp';

/** Reemplaza marcadores {clave} en una plantilla de texto. */
export function fillTemplate(template: string, values: Record<string, string> = {}): string {
	return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

/**
 * Genera un enlace https://wa.me/NUMERO?text=MENSAJE con el mensaje codificado.
 * El visitante debe confirmar el envío dentro de WhatsApp.
 */
export function buildWhatsAppUrl(message?: string, phone: string = whatsapp.phone): string {
	const number = phone.replace(/\D/g, '');
	const base = `https://wa.me/${number}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
