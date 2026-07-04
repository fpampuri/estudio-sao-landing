# Estudio SAO — Sitio institucional

Sitio público de marketing del **Estudio SAO** (accidentes de tránsito,
accidentes de trabajo · ART, contratos de seguros). Portado 1:1 desde el
prototipo de diseño en HTML (`Estudio SAO.dc.html` y hermanos).

Es un proyecto **independiente** de la app de gestión interna (`../sao`):
sin auth, sin base de datos, 100% estático.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript** (strict)
- Fuentes vía `next/font/google`: **Newsreader** (títulos serif) + **Plus Jakarta Sans** (resto)
- Iconos: **@phosphor-icons/react**
- Estilos: inline styles fieles al prototipo + tokens/animaciones en `app/globals.css`

## Páginas

| Ruta | Contenido |
|------|-----------|
| `/` | Inicio — Hero, Stats, Servicios, Nosotros, CTA |
| `/accidentes-transito` | Accidentes de Tránsito |
| `/contratos-seguros` | Contratos de Seguros |
| `/accidentes-trabajo` | Accidentes de Trabajo (ART) — con FAQ acordeón |

La navegación es client-side (feeling SPA) con URLs reales por página.

## Estructura

```
app/                     rutas (una carpeta por página) + layout + globals.css
components/
  layout/                Header, Footer, FloatingWhatsApp (compartidos)
  ui/                    Hoverable, HoverLink, ServiceCard, TopicCard, FaqAccordion
lib/
  site.ts                contactos, links de WhatsApp y nav (fuente única)
  content/               textos de cada página (home, transito, trabajo)
```

## Datos de contacto

Centralizados en `lib/site.ts`. WhatsApp general: `wa.link/p8lcte`.
La página de ART usa su propio número (`5491157529786`), tal como el prototipo.

## Fotos reales (pendiente)

El prototipo deja placeholders marcados `[ foto del equipo / estudio ]` y
`[ foto profesional del estudio ]` en la home. Para reemplazarlos:

1. Poné las imágenes en `public/` (ej. `public/equipo.jpg`).
2. En `app/page.tsx`, reemplazá el `<div>` placeholder correspondiente por
   `next/image` (`<Image src="/equipo.jpg" fill ... />`) manteniendo el
   contenedor con `borderRadius`, `overflow:hidden` y el mismo `aspectRatio`.

## Desarrollo

```bash
npm run dev      # http://localhost:3000
npm run build    # build de producción (estático)
npm start        # servir el build
```
