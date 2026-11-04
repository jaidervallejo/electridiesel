# ELECTRIDIESEL – Sitio informativo (Astro)

Sitio estático de una sola página para un negocio de repuestos y servicios para motores diésel. El contacto se hace por WhatsApp.

## Ejecutar

Requiere Node.js >= 22.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # genera ./dist (sitio estático)
npm run preview
```

## Estructura

```text
src/
  config/      site.ts (SEO, navegación, contacto, redes) · whatsapp.ts (teléfono y mensajes)
  data/        brands.ts (marcas y productos) · services.ts · why-us.ts · content.ts (hero, slogan, misión/visión, CTA)
  components/
    ui/        Button, WhatsAppButton, Icon (+ icons.ts), SectionHeading, InfoCard, SmartImage
    layout/    Header, Footer, Logo, Seo, FloatingWhatsApp
    brands/    BrandCard, BrandDialog
    sections/  Hero, Slogan, Brands, Services, MissionVision, WhyUs, QuoteCta
  scripts/     navigation.ts (menú móvil) · dialogs.ts (diálogos de marcas)
  styles/      global.css (variables de color y tipografía)
  layouts/     Layout.astro
  pages/       index.astro (orden de las secciones)
public/        logo.svg, favicon.svg, og-image.png, images/, robots.txt, sitemap.xml
```

## Dónde editar

| Qué | Dónde |
| --- | --- |
| Textos de portada, slogan, misión/visión, cotización | `src/data/content.ts` |
| Marcas y productos | `src/data/brands.ts` |
| Servicios | `src/data/services.ts` |
| ¿Por qué elegirnos? | `src/data/why-us.ts` |
| Teléfono y mensajes de WhatsApp | `src/config/whatsapp.ts` |
| SEO, navegación, contacto, redes sociales | `src/config/site.ts` |
| Dominio | `astro.config.mjs` (`site`), `src/config/site.ts`, `public/robots.txt`, `public/sitemap.xml` |
| Colores y tipografía | `src/styles/global.css` (`:root`) |
| Logo, imágenes, imagen Open Graph | `public/logo.svg`, `public/images/`, `public/og-image.png` (1200×630) |

Los contenidos marcados como `[PROVISIONAL]` deben reemplazarse por los reales.
