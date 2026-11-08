# Especificación de Diseño: SEO Técnico y Semántico para Rumbo Latam

**Fecha:** 2026-11-08
**Dominio de producción:** `https://rumbolatam.netlify.app`
**Framework:** Next.js 16.2.10 (App Router) + React 19.2.4 + TypeScript

---

## 1. Problema y Causas Raíz

Rumbo Latam no aparece en los motores de búsqueda por la combinación de seis bloqueos técnicos y un requisito externo de alta en buscadores:

1. **Dominio erróneo en configuración (`src/config.ts`):** `SITE_URL` apunta por defecto a `https://gduranv.github.io/RumboLatam` aunque la aplicación está desplegada en `https://rumbolatam.netlify.app`. Como consecuencia, `robots.txt`, `sitemap.xml` y `metadataBase` declaran URLs de otro dominio.
2. **Mapa de inicio sin enlaces HTML (`<a>`):** `InteractiveMap` y `CountryItem` usan `<div onClick={() => router.push(...)}>`. Los rastreadores web no descubren ninguna ruta `/paises/[id]` desde `/`.
3. **Enlaces y contenidos ausentes del HTML inicial:**
   - `DestinationsCarousel` y `MobileDestinationsCarousel` solo renderizan en el DOM el destino activo (`currentIndex = 0`), dejando los destinos `1..N` fuera del HTML prerenderizado.
   - `DesktopCuriosidades` y `MobileCuriosidades` omiten del DOM el texto de las curiosidades cuando las tarjetas están colapsadas.
   - `/` y `/nosotras` carecen de un `<h1>` descriptivo e índice textual semántico, mientras `LoadingScreen` renderiza `Cargando Rumbo Latam` sin `data-nosnippet`.
4. **Falta de metadatos únicos por ruta y datos estructurados:** Ninguna ruta interna (`/nosotras`, `/paises/[id]`, `/paises/[id]/curiosidades`, `/destinos/[id]`) define `metadata` / `generateMetadata`, URLs canónicas (`alternates.canonical`), tarjetas Open Graph / Twitter específicas ni bloques Schema.org (`JSON-LD`).
5. **Sitemap incompleto y Soft-404s:** `/nosotras` no figura en `src/app/sitemap.ts`, y tanto `src/app/paises/[id]/page.tsx` como `src/app/destinos/[id]/page.tsx` devuelven contenido de respaldo con HTTP 200 ante IDs inexistentes en lugar de `notFound()`.
6. **Falta de alta en Google Search Console:** Un subdominio `.netlify.app` nuevo sin backlinks externos necesita verificación de propiedad (vía meta tag `google-site-verification`) y envío explícito de `https://rumbolatam.netlify.app/sitemap.xml`.

---

## 2. Restricciones Globales del Proyecto

- **Gestor de paquetes:** Usar única y exclusivamente `pnpm`.
- **Convenciones de código (`.agents/AGENTS.md`):**
  - Variables y funciones en `camelCase`.
  - Componentes y clases en `PascalCase`.
  - Componentes React declarados como funciones de flecha (`const MiComponente = () => ...`).
  - Funciones pequeñas, modulares y cada una con bloque de comentario JSDoc indicando su propósito.
- **Invariante visual:** Cero alteraciones visuales sobre los diseños de Figma en móvil y escritorio. Todo enriquecimiento semántico adicional en componentes interactivos debe usar `<Link>` con las mismas clases visuales o contenedores `sr-only`.
- **Restricción de despliegue Netlify (`next.config.ts`):** `./public/**/*` está excluido del trazado serverless (`outputFileTracingExcludes`). Toda resolución de imágenes para metadatos debe ocurrir en tiempo de build sobre rutas estáticas o mediante URLs públicas codificadas con `encodeURI`.

---

## 3. Arquitectura Modular

### 3.1 Configuración de Dominio y Verificación (`src/config.ts`)
- `DEFAULT_SITE_URL = "https://rumbolatam.netlify.app"`.
- `resolveSiteUrl(env)`: evalúa en orden `env.SITE_URL`, `env.NEXT_PUBLIC_SITE_URL`, `env.URL` (inyectada por Netlify en producción) y `DEFAULT_SITE_URL`, eliminando barras finales (`/+$`).
- `SITE_URL`: constante exportada con el resultado de `resolveSiteUrl(process.env)`.
- `GOOGLE_SITE_VERIFICATION`: lee `process.env.GOOGLE_SITE_VERIFICATION?.trim() || undefined`.

### 3.2 Utilidades de Texto y URLs SEO (`src/lib/seo/text.ts`)
- `cleanRichText(raw)`: elimina marcadores `**` y normaliza saltos de línea y espacios múltiples a espacios simples.
- `truncateMetaDescription(text, maxLength = 160)`: recorta en límite de palabra sin cortar palabras a la mitad y añade `…` cuando supera `maxLength`.
- `toAbsoluteUrl(pathOrUrl)`: convierte cualquier ruta relativa (incluso con espacios como `/Paises/Chile/Volcan Villarrica/...`) en URL absoluta codificada con `encodeURI` sobre `SITE_URL`.

### 3.3 Constructores de `Metadata` (`src/lib/seo/metadata.ts`)
Imagen Open Graph por defecto generada estáticamente en `public/og-default.jpg` (`1200x630`, fondo celeste de marca `#6FC9E6` con emblema de Rumbo Latam optimizado con `sharp` < 80 KB).
- `buildRootMetadata()`: `metadataBase`, plantilla `%s | Rumbo Latam`, iconos, manifest, `robots` + `googleBot` (`max-image-preview: "large"`, `max-snippet: -1`, `max-video-preview: -1`), `openGraph`, `twitter` (`summary_large_image`) y `verification.google` condicional.
- `buildHomeMetadata()`: título absoluto `"Rumbo Latam | Guía de Viaje Interactiva por América Latina"`, descripción con países cubiertos, `alternates.canonical: "/"`, Open Graph y Twitter.
- `buildNosotrasMetadata()`: título `"Sobre Nosotras y el Proyecto"`, descripción del equipo URBE detrás de Rumbo Latam, `alternates.canonical: "/nosotras"` e imagen `/Nosotras/foto-hero-1.png`.
- `buildPaisMetadata(pais, heroImage)`: título `"${pais.name}: Destinos, Moneda, Clima y Guía de Viaje"`, descripción combinando `subtitle` y nombres de sus destinos turísticos, `alternates.canonical: "/paises/${pais.id}"` e imagen de portada del país.
- `buildCuriosidadesMetadata(pais, firstImage)`: título `"Curiosidades y Datos Asombrosos de ${pais.name}"`, descripción derivada de la primera curiosidad limpia, `alternates.canonical: "/paises/${pais.id}/curiosidades"` e imagen ilustrativa.
- `buildDestinoMetadata(destino, pais, portadaImage)`: título `"${destino.name}${pais ? `, ${pais.name}` : ""}: Qué Hacer, Clima y Hospedaje"`, descripción limpia combinando `tag`, actividades y clima, `alternates.canonical: "/destinos/${destino.id}"` e imagen de portada del destino.

### 3.4 Datos Estructurados Schema.org (`src/lib/seo/jsonLd.ts` + `src/components/seo/JsonLd.tsx`)
- `serializeJsonLd(data)`: serializa a JSON escapando `<` por `\u003c` para prevenir inyecciones XSS en `<script type="application/ld+json">`.
- `buildWebsiteJsonLd()`: `@graph` con `WebSite` y `Organization` (`Rumbo Latam`, logo, idioma `es`).
- `buildAboutPageJsonLd()`: `@graph` con `AboutPage` y `BreadcrumbList` (`Inicio` -> `Nosotras`).
- `buildPaisJsonLd(pais, heroImage)`: `@graph` con `Country`, `ItemList` de sus destinos enlazados y `BreadcrumbList` (`Inicio` -> `pais.name`).
- `buildCuriosidadesJsonLd(pais)`: `@graph` con `FAQPage` (extrayendo la pregunta inicial `¿...?` y el párrafo explicativo como `Question`/`Answer` para cada curiosidad) y `BreadcrumbList` (`Inicio` -> `pais.name` -> `Curiosidades`).
- `buildDestinoJsonLd(destino, pais, portadaImage)`: `@graph` con `TouristDestination` (`name`, `description`, `image`, `touristType`, `containedInPlace` apuntando al país) y `BreadcrumbList` (`Inicio` -> `pais.name` -> `destino.name`).
- `JsonLd`: componente servidor en función de flecha que inyecta `<script type="application/ld+json">`.

### 3.5 Semántica HTML y Rastreabilidad Interna
- **`HomeSeoSummary` (`src/components/seo/HomeSeoSummary.tsx`):** bloque `sr-only` renderizado en `/` con `<h1>`, descripción general y `<nav aria-label="Países y destinos de Rumbo Latam">` con `<Link>` hacia `/nosotras`, cada `/paises/[id]` y cada `/destinos/[id]`.
- **`CountryItem` + `InteractiveMap`:** reemplazo de `<div onClick>` por `<Link href="/paises/${id}">` conservando exactamente estilos, posicionamiento absoluto y animaciones hover.
- **`DestinationsCarousel` + `MobileDestinationsCarousel`:** lista `<nav className="sr-only">` con `<Link href="/destinos/${d.id}">` para todos los destinos del arreglo, garantizando que los rastreadores descubran todos los destinos desde la página del país.
- **`DesktopCuriosidades` + `MobileCuriosidades`:** cuando una tarjeta está colapsada, su texto limpio se mantiene presente dentro de un `<p className="sr-only">` para indexación SSR sin alterar la tarjeta colapsada visual.
- **`nosotras/page.tsx`:** inclusión de `<h1 className="sr-only">` descriptivo del proyecto y equipo.
- **`LoadingScreen.tsx`:** atributo `data-nosnippet=""` en el contenedor raíz para impedir que Google use `"Cargando Rumbo Latam"` en fragmentos de resultados.
- **Eliminación de Soft-404s:** `notFound()` tanto en `generateMetadata` como en el componente de página cuando `getPais(id)` o `getDestino(id)` devuelven `undefined`.
- **Sitemap (`src/app/sitemap.ts`):** añade `/nosotras` con prioridad `0.5` junto a `/`, `/paises/[id]`, `/paises/[id]/curiosidades` y `/destinos/[id]`.

---

## 4. Estrategia de Pruebas y Verificación

1. **Tests unitarios (Vitest):**
   - `src/config.test.ts`: prioridad de variables de entorno y recorte de barra final en `resolveSiteUrl`.
   - `src/lib/seo/text.test.ts`: limpieza de `**negritas**`, saltos de línea, truncado en frontera de palabra y `encodeURI` en rutas con espacios (`Volcan Villarrica`).
   - `src/lib/seo/metadata.test.ts`: generación de títulos, descripciones <= 165 caracteres, canonicals e imágenes OG para cada tipo de ruta.
   - `src/lib/seo/jsonLd.test.ts`: estructura válida de `@graph` para `WebSite`, `Country`, `FAQPage`, `TouristDestination` y escape seguro de `<`.
   - `src/app/sitemap.test.ts`: inclusión de `/`, `/nosotras`, los 8 países, sus páginas de curiosidades y los 24 destinos bajo `https://rumbolatam.netlify.app`.
   - `src/components/map/CountryItem.test.tsx`: renderiza un `<a href="/paises/venezuela">` real.
2. **Verificación integral:**
   - `pnpm typecheck` (`tsc --noEmit` con 0 errores).
   - `pnpm lint` (ESLint con 0 errores).
   - `pnpm test` (100% de tests en verde).
   - `pnpm build` (prerenderizado estático exitoso de todas las rutas y metadatos).

