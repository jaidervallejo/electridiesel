/** Menú móvil accesible + resaltado del enlace activo según la sección visible. */
export function initNavigation(): void {
	const toggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
	const nav = document.querySelector<HTMLElement>('[data-nav]');
	const label = document.querySelector<HTMLElement>('[data-nav-label]');
	if (!toggle || !nav) return;

	const mobileQuery = window.matchMedia('(max-width: 900px)');

	const setOpen = (open: boolean) => {
		toggle.setAttribute('aria-expanded', String(open));
		nav.classList.toggle('is-open', open);
		if (label) label.textContent = open ? 'Cerrar menú' : 'Abrir menú';
	};

	toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));

	nav.addEventListener('click', (event) => {
		if ((event.target as HTMLElement).closest('a')) setOpen(false);
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
			setOpen(false);
			toggle.focus();
		}
	});

	mobileQuery.addEventListener('change', () => setOpen(false));

	// Enlace activo según la sección visible
	const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
	const sections = links
		.map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') ?? ''))
		.filter((el): el is HTMLElement => Boolean(el));

	if (!('IntersectionObserver' in window) || sections.length === 0) return;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const id = `#${entry.target.id}`;
				links.forEach((link) => {
					if (link.getAttribute('href') === id) link.setAttribute('aria-current', 'true');
					else link.removeAttribute('aria-current');
				});
			}
		},
		{ rootMargin: '-45% 0px -50% 0px' },
	);

	sections.forEach((section) => observer.observe(section));
}
