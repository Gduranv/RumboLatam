# Revisión de Arquitectura y Buenas Prácticas — RumboLatam

> **Tipo de documento:** Auditoría de código (solo lectura)
> **Fecha:** Agosto 2026
> **Stack detectado:** Next.js 16.2.10 (App Router) · React 19 · TypeScript 5 (strict) · Tailwind CSS v4 · ESLint 9 · pnpm

---

## 1. Resumen ejecutivo

El proyecto tiene una base sólida: usa App Router, TypeScript con `strict: true`, datos
centralizados en `src/data`, token de marca definidos en `globals.css` mediante `@theme inline`,
y rutas dinámicas bien planteadas (`/paises/[id]`, `/destinos/[id]`).

Sin embargo, **la deuda técnica principal es que cada vista existe dos veces** (versión móvil y
versión desktop), el layout se construye con posicionamiento absoluto y `clip-path` con píxeles
"mágicos" (frágil ante cualquier cambio de contenido), hay SVGs gigantes incrustados en el código
de la página de destinos, y la página hereda metadatos/plantilla por defecto de `create-next-app`.
También hay código muerto, contenido hardcodeado que no corresponde al país visitado y problemas
de rendimiento importantes (GIFs de 5–9 MB).

**Cifras que importan (estado del lint):** `npx eslint src` reporta **4 errores y 46 advertencias**.

---

## 2. Estado actual del proyecto

### 2.1 Estructura real

```
src/
  app/
    layout.tsx            → fuentes + metadata por defecto
    page.tsx              → Home (renderiza MobileHome + DesktopHome)
    loading.tsx           → LoadingScreen (solo visible en móvil, tiene md:hidden)
    paises/[id]/page.tsx  → MobileCountry + DesktopCountry
    destinos/[id]/page.tsx→ MobileDestino + ~73 KB de desktop (SVGs inline)
  components/
    cards/                → AnimatedCard, HospedajeCard, Mobile* (duplicados)
    carousels/            → DestinationsCarousel, StampCarousel, Mobile* (duplicados)
    desktop/              → DesktopHome, DesktopCountry
    map/                  → InteractiveMap, CountryItem
    mobile/               → MobileHome, MobileCountry, MobileDestino
    modals/               → NosotrasModal, ProjectModal, TouristModal
    ui/                   → ClientPreloader, Compass, CountryHeaderButtons, ...
  data/
    countries.ts          → países + destinos resumidos
    destinations.ts       → detalle de destinos (manual, hospedaje, etc.)
```

### 2.2 Lo que ya está bien (mantener)

- **Rutas dinámicas con App Router** y `params` tipados como `Promise` (correcto en Next.js 15+).
- **Tipos fuertes** y datos centralizados en `src/data/*.ts` en lugar de hardcodear en los componentes.
- **Tokens de marca en Tailwind v4** (`--color-verde`, `--color-naranja`, etc.) en `globals.css`.
- `next/font/local` para la tipografía Nohemi (sin viajar a Google por esa fuente).
- ESLint 9 con `eslint-config-next` (core-web-vitals + typescript).
- Uso de `next/image` con `fill` + `priority` en los héroes.

---

## 3. Problemas críticos y malas prácticas

### 3.1 [CRÍTICO] Duplicación total del frontend móvil/desktop

Prácticamente **cada componente existe en versión móvil y desktop**, renderizando ambos árboles en
el DOM y ocultándolos con `hidden md:block` / `flex md:hidden`:

| Vista | Móvil | Desktop | Duplicación |
|---|---|---|---|
| Home | `mobile/MobileHome.tsx` | `desktop/DesktopHome.tsx` | Lógica idéntica (modal Nosotras, mapa) |
| País | `mobile/MobileCountry.tsx` | `desktop/DesktopCountry.tsx` | Mismas 4 cards, header, footer |
| Destino | `mobile/MobileDestino.tsx` | `app/destinos/[id]/page.tsx` (dentro) | Manual, hospedaje, galería, footer |
| Cards | `MobileAnimatedCard`, `MobileHospedajeCard`, `MobileInfoCard` | `AnimatedCard`, `HospedajeCard`, `InfoHorizontalCard` | Misma semántica, estilos repetidos |
| Carrusel | `MobileDestinationsCarousel`, `MobileStampCarousel` | `DestinationsCarousel`, `StampCarousel` | Misma lógica (`next/prev`, index, dots) |

Consecuencias:
- **Cualquier cambio de diseño se hace dos veces** (o se olvida en una de las versiones → bugs).
- Se paga el coste de montar ambos árboles en el cliente.
- Rompe el principio DRY y dificulta el mantenimiento.

**Cómo implementarlo (resumen):** unificar en componentes únicos responsivos usando los prefijos
de Tailwind (`md:`, `lg:`) y, donde el layout cambie de verdad (grid de 2 columnas vs. 1), usar el
mismo componente con clases condicionales. Detalle en §7.

### 3.2 [CRÍTICO] Layout por píxeles "mágicos" + `clip-path`

Toda la maquetación está basada en **posiciones y alturas fijas en píxeles** y recortes
geométricos con valores absolutos:

- `destinos/[id]/page.tsx:51` → `min-h-[3328px]`
- `destinos/[id]/page.tsx:55-56` → `h-[1550px]`, `clipPath: 'polygon(0 0, 100% 0, 100% 1400px, 50% 1550px, 0 1400px)'`
- `desktop/DesktopCountry.tsx:22` → `h-[2800px]`, `min-w-[1024px]`
- `DesktopCountry.tsx:161` → `top-[1683px]`, `DesktopCountry.tsx:171` → `top: '2493px'`
- `InteractiveMap.tsx:61` → `w-[386px] h-[436px]`, contenedores de 417px/436px
- `MobileCountry.tsx:79` → `top-140 left-60 -rotate-30 w-[300px]` para posicionar a Gia
- `CountryHeaderButtons.tsx` → botones en `top-[50px] left-[56px]`

Consecuencias:
- Cualquier cambio de texto, imagen o fuente **rompe el layout** en cascada.
- No es responsive: depende del viewport exacto de diseño de Figma.
- Los valores tipo `top-[1550px]` son imposibles de razonar y de mantener.

**Cómo implementarlo:** usar layout en flujo (`flex`/`grid` + `mt`/`gap`/`pt`), las secciones
apiladas normalmente y los recortes en V solo con SVG de borde (waves) que usen `viewBox`, no
`clip-path` con px. Detalle en §7.

### 3.3 [CRÍTICO] SVGs gigantes incrustados en el código

`destinos/[id]/page.tsx` pesa **73,5 KB** y la mayoría son paths SVG pegados desde Figma
(iconos de Clima/Transporte/Mejor época y los badges de Animales/Actividades). Lo mismo en
`HospedajeCard.tsx` (18 KB de SVG) y en los carruseles de sellos.

Además `stampPath` (la forma del sello postal) está **copiada y pegada dos veces**:
`StampCarousel.tsx:15` y `MobileStampCarousel.tsx:16`.

Consecuencias:
- Archivos imposibles de leer y difíciles de versionar (cada `diff` es un muro de path).
- Los SVGs se re-renderizan (JSX) en cada render en vez de cachearse como asset estático.

**Cómo implementarlo:** extraer cada SVG a `src/components/icons/*.tsx` (con `aria-hidden`) o a
`public/svg/*.svg` y referenciarlos; compartir `stampPath` en un solo módulo (`src/lib/stamps.ts`).

### 3.4 [ALTO] Contenido de país hardcodeado a Venezuela

`MobileCountry.tsx` y `DesktopCountry.tsx` muestran **siempre** las 4 cards de
"Antes de viajar" con contenido venezolano (bolívar, arepas…), sin importar si el país visitado es
México, Perú o Brasil. Ese contenido debería vivir por país en `countriesData`.

### 3.5 [ALTO] Fallbacks de imágenes incorrectos (bug visible)

En `destinos/[id]/page.tsx:11-30` y `MobileDestino.tsx:18-43` existen arreglos `hospedajeImages`,
`animalesImages` y `actividadesImages` **hardcodeados a Canaima**. Como `colonia-tovar` e
`isla-larga` tienen `images: []` en `src/data/destinations.ts`, **esas páginas muestran fotos de
Canaima**. Es un fallback con datos inventados, no reales.

### 3.6 [ALTO] Código muerto y componentes sin usar

- `ProjectModal.tsx` no se importa en ningún sitio.
- `TouristModal` se renderiza en `InteractiveMap.tsx:69-75` pero `selectedCountry` **nunca se setea**
  (solo `onClose`); por tanto el modal jamás aparece y el evento click de los lugares
  (`CountryItem.tsx:50` le pone `pointer-events-auto cursor-pointer`) no hace nada.
- `ClientPreloader.tsx:4` importa `LoadingScreen` sin usarlo (reimplementa su propio loader).
- `hasError` (`ClientPreloader.tsx:25`) se asigna pero nunca se usa.
- Dependencia `@lottiefiles/dotlottie-react` instalada y **sin uso** (ni `GiaHome.lottie` se usa).
- Imports sin uso: `Image`, `dynamic` en `MobileHome.tsx:4-5`; `Image` en `MobileCountry.tsx:1`,
  `TouristModal.tsx:3`, `LoadingScreen.tsx:2`; `useState/useRef` en `MobileHospedajeCard.tsx:4`;
  `isHovered` en `Compass.tsx:7`; `CountryItemProps` en `CountryItem.tsx:3`.

### 3.7 [ALTO] Errores de React (setState en efecto)

- `HospedajeCard.tsx:55` y `InfoHorizontalCard.tsx:25` llaman `setCurrentIndex(0)` de forma
  síncrona dentro del `useEffect`. Es un error de lint de `react-hooks/set-state-in-effect`
  (render en cascada). El reset debe hacerse en `onMouseLeave`, no en el efecto.
- `ClientPreloader.tsx:65` → `useEffect` sin `isLoading` en dependencias.
- El intervalo de 600 ms en las cards es un parpadeo muy agresivo para el usuario.

### 3.8 [ALTO] Rendimiento de assets

Assets muy pesados servidos tal cual:

| Asset | Tamaño |
|---|---|
| `public/mobileSitio.svg` | **28,4 MB** (¿se usa en algún lado? no se referencia) |
| `public/GiaGifHome.gif` | 9,0 MB |
| `public/Paises/Venezuela/FotoVenezuela.png` | 8,5 MB |
| `public/Paises/Venezuela/giacortada.gif` | 6,6 MB |
| `public/GiaLight.gif` | 4,8 MB |
| `public/TableroMapaWeb.svg` (x2, también en `Paises/`) | 2,5 MB c/u |

- Los GIF animados deberían convertirse a **WebM/MP4** (con `<video autoplay muted loop playsinline>`)
  o al `.lottie` que ya tienen pero no usan.
- `FotoVenezuela.png` de 8,5 MB debe pasar a WebP/AVIF (y tener sus variantes por país).
- Hay archivos **duplicados**: `GiaHome.lottie`, `TableroMapaWeb.svg` existen en `public/` y en
  `public/Paises/`.
- Sobran los SVGs de plantilla: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`.

### 3.9 [MEDIO] `<img>` crudo en lugar de `next/image`

Hay decenas de advertencias `@next/next/no-img-element`. `next/image` da optimización, WebP,
sizing y LCP. En imágenes locales de PNG/JPG/WebP debe usarse `next/image`. Excepción razonable:
SVG (mapa, brújula) pueden quedarse como `<img>` si no aporta la optimización, pero deben tener
`width/height` o `aspect-ratio` para evitar saltos de layout.

### 3.10 [MEDIO] SEO, idioma y metadatos

- `layout.tsx:32-35` → `title: "Create Next App"` y `description` por defecto.
- `layout.tsx:44` → `lang="en"` para un sitio en español.
- No hay `metadataBase`, `generateMetadata`, `robots.ts`, `sitemap.ts`, ni Open Graph.
- `InteractiveMap.tsx:94-95`, `NosotrasModal.tsx:29-31` y `ProjectModal.tsx:29-31` tienen **Lorem
  ipsum** como contenido real del producto.

### 3.11 [MEDIO] Accesibilidad

- Los modales no gestionan foco, ni `Escape`, ni bloqueo de scroll, ni `role="dialog"`/`aria-modal`.
  (`NosotrasModal`, `ProjectModal`, `TouristModal`, y el modal de Gia dentro de `InteractiveMap`).
- Textos móviles de 9–10 px (`MobileDestinationsCarousel.tsx:102`, `MobileInfoCard.tsx:60`,
  `MobileCountry.tsx:174`) comprometen la legibilidad.
- `globals.css:21-26` define `prefers-color-scheme: dark` que oscurece el fondo del `body`, pero
  todos los componentes fijan colores claros hardcodeados → modo oscuro incoherente. Mejor: quitar
  el bloque dark o implementar un dark mode completo.
- `suppressHydrationWarning` en `html` y `body` (`layout.tsx:46,48`) sin causa justificada; su uso
  debe limitarse a casos puntuales.

### 3.12 [MEDIO] Fallback silencioso en vez de 404

- `destinos/[id]/page.tsx:41` → `destinosData[destinoId] || destinosData["canaima"]` y
  `MobileDestino.tsx:14` hacen lo mismo. Un id inexistente muestra Canaima en lugar de `notFound()`.
- En `MobileCountry.tsx:12-18` y `DesktopCountry.tsx:13-19` se inventa un `countryInfo` de relleno
  cuando el país no existe. Mejor: `notFound()`.

### 3.13 [MEDIO] Tipado laxo

- `CountryItem.tsx:21` → props tipadas `...rest: any` y `place: any` (`CountryItem.tsx:43`),
  ignorando la interfaz `CountryItemProps` ya definida (sin usar) en la línea 3.
- `svg_sizes.json` es un artefacto de datos sin tipar ni consumir.

### 3.14 [BAJO] Artefactos de desarrollo commiteados

- `scratch_result.txt` y `svg_sizes.json` (outputs de cálculo de coordenadas) y `scratch/*.js`
  (scripts de reemplazo) están commiteados y sueltos en la raíz. Deberían moverse a una carpeta
  `tools/` o borrarse; son ruido para el repositorio.

### 3.15 [BAJO] Inconsistencias menores

- Pie de página: `© 2024` en `MobileCountry.tsx:175` vs `© 2026` en el resto.
- `DesktopCountry.tsx:144` usa `<CountryHeaderButtons />` sin `backUrl` (va a `/`), mientras el
  móvil vuelve a `/`; en `destinos` sí se pasa `backToCountry`. Comportamiento inconsistente.
- El README sigue siendo el boilerplate de `create-next-app`.

---

## 4. Prácticas obsoletas

| Práctica actual | Obsoleta porque... | Práctica vigente |
|---|---|---|
| Duplicar componentes Mobile/Desktop | En diseño responsive la duplicación es innecesaria y costosa | Componentes únicos responsivos (CSS/Tailwind) |
| `<img>` crudo para fotos | `next/image` optimiza, sirve WebP/AVIF y da prioridad de carga | `next/image` (o `next/future` en el nuevo Next) |
| Preloader JS manual con `new Image()` | Obstaculiza LCP; el navegador ya prioriza `preload`/`priority` | `priority`, `fetchPriority="high"`, placeholders `blur` |
| Layout con `clip-path` + píxeles absolutos | Rompe con cualquier cambio; no fluye | Layout en flujo + SVGs con `viewBox` |
| SVGs de Figma pegados como JSX inline | Re-renderizan, ensucian el diff, no se cachean | Componentes de icono o `.svg` estáticos optimizados |
| `useEffect` para resetear estado derivado del hover | React recomienda "no necesitas un efecto" | Reset en el manejador de eventos (`onMouseLeave`) |
| GIF animados pesados | Tamaño y batería | `<video>` WebM/MP4 o Lottie |
| Metadata/título de `create-next-app` | Confunde SEO y producto | `generateMetadata` + `metadataBase` + `sitemap`/`robots` |
| Dark mode sin implementar (`prefers-color-scheme`) | Contradice el diseño fijo claro | Quitar el bloque o implementarlo completo |

---

## 5. Organización propuesta

Objetivo: una sola fuente de verdad por pieza visual y datos por entidad.

```
src/
  app/
    layout.tsx
    page.tsx                      # Home responsivo
    loading.tsx
    not-found.tsx
    error.tsx
    sitemap.ts
    robots.ts
    paises/[id]/page.tsx          # 1 página responsiva
    destinos/[id]/page.tsx        # 1 página responsiva
  components/
    layout/                       # Header, Footer, Waves (SVG reutilizables)
      Header.tsx
      Footer.tsx
      Waves.tsx
    map/
      InteractiveMap.tsx
      CountryOverlay.tsx          # antes CountryItem
    carousel/
      Carousel.tsx                # lógica genérica next/prev/dots/scroll-snap
      StampCarousel.tsx           # usa Carousel
      ManualCarousel.tsx
    cards/
      TravelerCard.tsx            # unifica AnimatedCard + MobileAnimatedCard
      HospedajeCard.tsx           # responsiva
      InfoCard.tsx                # unifica InfoHorizontalCard + MobileInfoCard
    modals/
      BaseModal.tsx               # foco, Esc, scroll-lock, aria
      NosotrasModal.tsx
      ProjectModal.tsx
    ui/
      Icon.tsx                    # envoltura de los SVG extraídos
      Button.tsx
      Compass.tsx
  data/
    countries.ts
    destinations.ts
    constants.ts                  # paleta, URL de playlist, nav
  lib/
    utils.ts                      # getCountryById, getDestinoById, cn(), ...
    notFound helpers
  types/
    index.ts                      # Hotel, Destination, CountryData, MapPlace, ...
  tests/                          # (opcional) colocated __tests__/ si se prefiere
```

Reglas de oro para futuras vistas:
1. **Un componente = una responsabilidad** y sin variantes móvil/desktop (usar breakpoints).
2. Los datos nunca se hardcodean en la vista; viven en `src/data` o en la DB/API.
3. Sin píxeles absolutos para layout; solo para detalles finos aceptados con justificación.
4. Cero `any`, cero imports muertos, cero SVGs inline largos.

---

## 6. Plan de implementación (detallado)

Prioridad 1 (P1) = crítico, P2 = alto, P3 = medio, P4 = bajo.

### P1. Eliminar duplicación móvil/desktop → 1 componente responsivo

**Pasos:**
1. Empezar por el patrón más repetido: **Header + Footer**. Crear `components/layout/Header.tsx`
   y `Footer.tsx` que contengan las dos variantes con clases `hidden md:flex` / `flex md:hidden`
   para los botones, pero compartiendo el mismo markup y datos.
2. **Cards**: unificar `AnimatedCard`+`MobileAnimatedCard` en `TravelerCard.tsx` usando
   `w-full md:w-[457px]`, tamaños de tipografía con `text-base md:text-[18px]`, etc.
3. **Carruseles**: crear `Carousel.tsx` con la lógica común (índice, prev/next, dots, scroll-snap)
   y que cada carrusel le pase `renderItem`. Los dos `stampPath` se unifican en un módulo.
4. **Páginas**: `paises/[id]/page.tsx` y `destinos/[id]/page.tsx` dejan de montar dos árboles;
   un solo layout fluido que se adapta.
5. Verificar cada vista en móvil y desktop tras cada unificación (revisión visual + `npm run lint`).

### P2. Layout en flujo en lugar de píxeles absolutos

1. Sustituir las secciones apiladas de `destinos/[id]/page.tsx` y `DesktopCountry.tsx`
   (`top-[1550px]`, `top-[2350px]`, `h-[2800px]`) por `section` en flujo con `pt/pb/gap`.
2. Los efectos de "cortes en V" se logran mejor con SVGs decorativos de borde (como las olas del
   footer) usando `viewBox` y `preserveAspectRatio`, no `clip-path` con px.
3. Para la superposición del mapa y sus países, trabajar **en coordenadas relativas** (`%`) ya
   existentes en `countriesData` y apoyarse en un `aspect-ratio` del contenedor, no en cajas fijas.

### P2. Extraer SVGs y matar el código muerto

1. Mover cada SVG inline de `destinos/[id]/page.tsx` y `HospedajeCard.tsx` a
   `components/ui/Icon.tsx` o a `public/svg/`. Importar en lugar de pegar.
2. Unificar `stampPath` en `src/lib/stamps.ts` e importarlo en ambos carruseles.
3. Eliminar `ProjectModal`, el render de `TouristModal` + estado `selectedCountry` (o cablear el
   click de `places` para que abra el modal), imports muertos y la dependencia `@lottiefiles`.
4. Ejecutar `npx eslint src` hasta 0 errores y decidir si las advertencias restantes se corrigen
   o se ignoran explícitamente.

### P2. Corregir datos

1. Mover las 4 cards de "Antes de viajar" (Moneda/Gastronomía/Idioma/Estaciones) a
   `countriesData[country].beforeYouGo` y renderizarlas desde los datos.
2. Eliminar los fallbacks hardcodeados de Canaima: que cada destino tenga sus propias imágenes o
   muestre un estado "próximamente" real. Nunca fotos de otro destino.
3. `heroImage`/`giaImage` de todos los países apuntan a Venezuela con `// TODO`. Asignar los
   assets reales o un placeholder genérico de marca.

### P2. Rendimiento de assets

1. Convertir `GiaLight.gif`, `GiaGifHome.gif`, `giacortada.gif` a **WebM** (~10-20× menos) y
   usarlos con `<video muted loop playsinline autoPlay>`; o usar el Lottie que ya tienen
   (`GiaHome.lottie`) con el paquete que ya está instalado.
2. Reconvertir `FotoVenezuela.png` (8,5 MB) y fotos de secciones a WebP/AVIF con `sharp`
   (ya aprobado en `pnpm-workspace.yaml`).
3. Eliminar `mobileSitio.svg` (28 MB, sin uso) y assets duplicados/plantilla.
4. Reemplazar los `<img>` de fotos por `next/image` con `sizes` y `placeholder="blur"`.

### P2. Preloader vs. rendimiento percibido

`ClientPreloader` bloquea toda la app durante 5 assets o 7 s. Mejor:
1. Renderizar la página inmediatamente.
2. Usar `priority` en el logo/hero y `fetchPriority="high"`.
3. Mostrar un **skeleton** (`loading.tsx` por ruta) en vez de una pantalla de carga a pantalla
   completa, y eliminarla al terminar la carga real de contenido.

### P3. SEO, idioma y metadatos

1. `layout.tsx`: `lang="es"`, `metadataBase: new URL("https://rumbolatam.vercel.app")`,
   título "Rumbo Latam | Descubre Latinoamérica", descripción real, Open Graph.
2. En cada página dinámica: `export async function generateMetadata({ params })` con nombre del
   país/destino.
3. Añadir `app/robots.ts` y `app/sitemap.ts`.
4. Reemplazar Lorem ipsum por el texto real del producto.

### P3. Accesibilidad

1. Crear `BaseModal.tsx` que: bloquee scroll (`overflow:hidden` en `body`), capture el foco
   (`focus trap`), cierre con `Escape`, tenga `role="dialog"` + `aria-modal` + `aria-labelledby`.
2. Subir los tamaños de texto móvil a ≥ 12 px (ideal 14 px) con `text-sm`.
3. Quitar `prefers-color-scheme: dark` de `globals.css` o implementar dark mode de verdad.
4. Los botones deben ser `<button>`; los `<a>` deben tener `href` real (no `onClick`).

### P3. Robustez de rutas y tipos

1. En `paises/[id]` y `destinos/[id]`: usar `notFound()` del `next/navigation` cuando el id no
   exista, en lugar de fallbacks de relleno.
2. Tipar `CountryItem` con `CountryItemProps` y `MapPlace` reales; eliminar `any`.
3. Mover interfaces compartidas (`Destination`, `Hotel`, `CountryData`) a `src/types/index.ts`.

### P4. Higiene del repo y proceso

1. Borrar o mover `scratch/`, `scratch_result.txt`, `svg_sizes.json` (a `tools/` si son útiles).
2. Reescribir `README.md` (qué es, cómo correr, estructura, scripts).
3. Añadir scripts: `"typecheck": "tsc --noEmit"`, `"lint:fix"`. Agregar CI (GitHub Actions) que
   corra `lint` + `typecheck` + `build`.
4. Añadir tests mínimos (ej. Vitest + React Testing Library) para las utilidades
   (`getDestinoById`, carrusel) y para el cálculo de rating de estrellas.
5. Alinear el código con las reglas del propio `AGENTS.md` (componentes como arrow functions con
   comentario de propósito) o revisar la regla, ya que hoy muchos componentes son `function`.
6. Unificar el texto del footer (© 2026 en todos lados).

---

## 7. Detalle de implementación: ejemplos concretos

### 7.1 Carrusel genérico reutilizable

```tsx
// components/carousel/Carousel.tsx
"use client";
import { ReactNode } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  renderDot?: (index: number, active: boolean) => ReactNode;
  className?: string;
}

export function Carousel<T>({ items, renderItem, renderDot, className }: CarouselProps<T>) {
  // ... estado currentIndex, handlers next/prev/onScroll (scroll-snap)
  return (
    <div className={className}>
      <div className="flex ... overflow-x-auto snap-x snap-mandatory">
        {items.map((item, i) => renderItem(item, i))}
      </div>
      {renderDot && <div className="flex ...">{items.map((_, i) => renderDot(i, i === currentIndex))}</div>}
    </div>
  );
}
```

Así `StampCarousel`, `ManualCarousel` y `DestinationsCarousel` dejan de duplicar la lógica de
índice/dots/snap. Móvil y desktop usan el **mismo** componente con clases `md:`.

### 7.2 Eliminar `setState` síncrono en efectos

En `HospedajeCard.tsx` y `InfoHorizontalCard.tsx`, el reset debe ocurrir en el evento, no en el
efecto:

```tsx
// Antes (error de lint react-hooks/set-state-in-effect)
useEffect(() => {
  let interval: NodeJS.Timeout;
  if (isHovered && images.length > 1) {
    interval = setInterval(() => setCurrentIndex(p => (p + 1) % images.length), 600);
  } else {
    setCurrentIndex(0);          // ← setState síncrono en efecto: evita
  }
  return () => clearInterval(interval);
}, [isHovered, images.length]);

// Después
useEffect(() => {
  if (!isHovered || images.length < 2) return;
  const interval = setInterval(() => setCurrentIndex(p => (p + 1) % images.length), 1200);
  return () => clearInterval(interval);
}, [isHovered, images.length]);

const handleMouseLeave = () => {
  setIsHovered(false);
  setCurrentIndex(0);            // reset en el evento, no en el efecto
};
```

### 7.3 Tipo seguro para `CountryItem`

```tsx
interface CountryItemProps {
  id: string;
  name: string;
  svgPath: string;
  flagPath?: string;
  flagPosition?: { top: string; left: string };
  places: MapPlace[];
  position: { top: string; left: string; width: string };
  onClick: () => void;
}

export function CountryItem(props: CountryItemProps) { /* sin `any` */ }
```

### 7.4 `notFound()` en vez de fallbacks silenciosos

```tsx
// app/destinos/[id]/page.tsx
import { notFound } from "next/navigation";

const destino = destinosData[resolvedParams.id];
if (!destino) notFound();
```

### 7.5 GIF → WebM (performance)

```html
<video autoPlay muted loop playsInline
       className="w-full h-full object-contain drop-shadow-2xl"
       poster="/GiaLight-poster.webp">
  <source src="/GiaLight.webm" type="video/webm" />
</video>
```

Herramienta: `ffmpeg -i GiaLight.gif -movflags faststart -vf "scale=720:-2" GiaLight.webm`.

---

## 8. Matriz de prioridades resumida

| # | Hallazgo | Severidad | Esfuerzo |
|---|---|---|---|
| 3.1 | Duplicación mobile/desktop | Crítica | Alto |
| 3.2 | Layout de píxeles absolutos + clip-path | Crítica | Alto |
| 3.3 | SVGs inline gigantes | Crítica | Bajo-Medio |
| 3.4 | Contenido hardcodeado a Venezuela | Alta | Bajo |
| 3.5 | Fallbacks de imágenes de otro destino | Alta | Bajo |
| 3.6 | Código muerto / dependencia sin uso | Alta | Bajo |
| 3.7 | setState en useEffect | Alta | Bajo |
| 3.8 | Assets gigantes (GIF/SVG/PNG) | Alta | Medio |
| 3.9 | `<img>` crudo | Media | Bajo |
| 3.10 | SEO/idioma/metadata | Media | Bajo |
| 3.11 | Accesibilidad | Media | Medio |
| 3.12 | Fallback silencioso en rutas | Media | Bajo |
| 3.13 | Tipado laxo (`any`) | Media | Bajo |
| 3.14 | Artefactos commiteados | Baja | Bajo |
| 3.15 | Inconsistencias menores | Baja | Bajo |

**Orden sugerido de trabajo:** 3.6 → 3.7 → 3.5 → 3.4 → 3.3 (deuda de código rápida y segura),
luego 3.8 (rendimiento), después 3.2 → 3.1 (refactor grande, hacerlo con revisión visual por
página) y por último 3.10 → 3.11 → 3.14 → 3.15 (pulido).

---

## 9. Conclusión

RumboLatam es un proyecto con un diseño visual cuidado y una arquitectura de datos razonable, pero
su estructura de doble código móvil/desktop y su maquetación por píxeles absolutos lo vuelven
frágil y caro de mantener. Atacar primero el código muerto y los bugs de datos es barato y de alto
impacto; el refactor a componentes responsivos únicos y layout en flujo es la inversión más
rentable a mediano plazo. Todo lo anterior es alcanzable sin cambiar el diseño: la prioridad es
que el mismo diseño se construya una sola vez y se adapte solo.
