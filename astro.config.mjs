// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// [PROVISIONAL] Reemplazar por el dominio definitivo (también en src/config/site.ts,
	// public/robots.txt y public/sitemap.xml).
	site: 'https://jaidervallejo.github.io/electridiesel/',
	trailingSlash: 'ignore',
	build: {
		inlineStylesheets: 'auto',
	},
});
