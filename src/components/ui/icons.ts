/**
 * Íconos SVG en línea (24x24, trazo con currentColor).
 * Para añadir uno nuevo, agrega una entrada con su contenido SVG interno.
 * Los íconos marcados como `fill` usan relleno en vez de trazo.
 */
export const icons = {
	'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
	menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
	close: '<path d="M6 6l12 12M18 6L6 18"/>',
	check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
	plus: '<path d="M12 5v14M5 12h14"/>',
	quote: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6M9 10h6"/>',

	filter: '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M6 7h12M6 17h12M9 10v4M12 10v4M15 10v4"/>',
	pump: '<circle cx="12" cy="12" r="4"/><path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3"/>',
	injector: '<path d="M10 2h4v4h-4zM9 6h6l-1 9h-4zM11 15h2v4l-1 3-1-3z"/>',
	belt: '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M7 8h10M7 16h10"/>',
	gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1"/><circle cx="12" cy="12" r="7"/>',
	bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
	box: '<path d="M3 7l9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10"/>',
	tag: '<path d="M3 12V3h9l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',

	diagnostic: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4M5 12h3l2-4 3 6 2-3h4"/>',
	wrench: '<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 1-5-5L13 3l-1 1 2.7 2.3zM3 21l6-6"/>',
	headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="6" rx="1.5"/><rect x="17" y="14" width="5" height="6" rx="1.5"/><path d="M20 20a4 4 0 0 1-4 2h-3"/>',
	engine: '<path d="M4 9h3l2-2h5l2 3h2v2h2v-2h1v7h-1v-2h-2v3h-3l-2 2H8l-2-2H4z"/><path d="M2 12h2M9 7V4h4"/>',

	shield: '<path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
	users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21v-1a6 6 0 0 1 12 0v1"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 0 1 6 4.9V21"/>',
	clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
	truck: '<path d="M2 6h11v10H2zM13 10h5l3 3v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
	target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
	eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',

	phone: '<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>',
	mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
	'map-pin': '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',

	whatsapp:
		'<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/><path d="M8.8 8.2c.2-.4.4-.5.7-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.2.3.4 0 .5-.2 1.1-.7 1.5-.5.4-1.3.6-2.3.3-2.3-.8-4.1-2.6-4.9-4.9-.3-.9-.2-1.7 0-2.1z"/>',
	facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v8h4v-8h3l1-4h-4V8z"/>',
	instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
	youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
	linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
} as const;

export type IconName = keyof typeof icons;
