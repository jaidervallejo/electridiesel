/**
 * Controlador de diálogos nativos (<dialog>):
 * - abre con [data-dialog-open="id"], cierra con [data-dialog-close], Escape o clic en el fondo
 * - solo un diálogo abierto a la vez
 * - bloquea el scroll del fondo y devuelve el foco al disparador al cerrar
 */
export function initDialogs(): void {
	const triggers = new Map<string, HTMLElement>();
	let current: HTMLDialogElement | null = null;

	const close = (dialog: HTMLDialogElement) => {
		if (dialog.open) dialog.close();
	};

	const open = (dialog: HTMLDialogElement, trigger: HTMLElement) => {
		if (current && current !== dialog) close(current);
		triggers.set(dialog.id, trigger);
		dialog.showModal();
		current = dialog;
		document.body.classList.add('is-locked');
		dialog.querySelector<HTMLElement>('[data-dialog-close]')?.focus();
	};

	document.querySelectorAll<HTMLElement>('[data-dialog-open]').forEach((trigger) => {
		const dialog = document.getElementById(trigger.dataset.dialogOpen ?? '');
		if (!(dialog instanceof HTMLDialogElement)) return;
		trigger.addEventListener('click', () => open(dialog, trigger));
	});

	document.querySelectorAll<HTMLDialogElement>('dialog[data-dialog]').forEach((dialog) => {
		dialog.querySelectorAll('[data-dialog-close]').forEach((btn) => {
			btn.addEventListener('click', () => close(dialog));
		});

		// Clic fuera del panel (sobre el backdrop)
		dialog.addEventListener('click', (event) => {
			if (event.target === dialog) close(dialog);
		});

		// Escape explícito (refuerza el comportamiento nativo en todos los navegadores)
		dialog.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				event.preventDefault();
				close(dialog);
			}
		});

		dialog.addEventListener('close', () => {
			if (current === dialog) current = null;
			if (!document.querySelector('dialog[data-dialog][open]')) {
				document.body.classList.remove('is-locked');
			}
			triggers.get(dialog.id)?.focus();
		});
	});
}
