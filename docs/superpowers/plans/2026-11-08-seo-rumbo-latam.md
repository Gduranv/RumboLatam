# Rumbo Latam SEO Integral Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Hacer que Rumbo Latam (`https://rumbolatam.netlify.app`) sea 100% indexable, rastreable y enriquecido con metadatos únicos y Schema.org JSON-LD en todas sus rutas sin alterar el diseño visual.

**Architecture:** Se introduce un módulo puro y testeado en `src/lib/seo/` (`text.ts`, `metadata.ts`, `jsonLd.ts`) más dos componentes servidor ligeros en `src/components/seo/` (`JsonLd.tsx`, `HomeSeoSummary.tsx`). Todas las rutas de `src/app/` delegan su `metadata` / `generateMetadata` y `JSON-LD` a este módulo, mientras que los componentes interactivos (`CountryItem`, carruseles y curiosidades) exponen enlaces `<Link>` y textos `sr-only` en el HTML inicial prerenderizado.

**Tech Stack:** Next.js 16.2.10 (App Router Metadata API), React 19.2.4, TypeScript 5, Vitest 4 + React Testing Library, Sharp 0.35.

## Global Constraints

- Usar única y exclusivamente `pnpm` (prohibido `npm` o `yarn`).
- Variables y funciones en `camelCase`; componentes y clases en `PascalCase`.
- Componentes React escritos como funciones de flecha (`const Componente = () => ...`).
- Funciones pequeñas y cada una con su bloque de comentario JSDoc indicando su propósito.
- Cero cambios visuales sobre los layouts móvil y escritorio actuales.
- No empaquetar lecturas runtime de `./public/**/*` en funciones serverless de Netlify (`outputFileTracingExcludes`).

---

### Task 1: Configuración de Dominio Base, Verificación Google e Imagen OG por Defecto

**Files:**
- Modify: `src/config.ts`
- Create: `src/config.test.ts`
- Create: `scripts/build-og-image.mjs`
- Create: `public/og-default.jpg`

**Interfaces:**
- Produces: `DEFAULT_SITE_URL: string`, `resolveSiteUrl(env?: Record<string, string | undefined>): string`, `SITE_URL: string`, `GOOGLE_SITE_VERIFICATION: string | undefined`

- [ ] **Step 1: Write the failing test in `src/config.test.ts`**
  Verifica que `resolveSiteUrl` prioriza `SITE_URL` -> `NEXT_PUBLIC_SITE_URL` -> `URL` -> `"https://rumbolatam.netlify.app"` y recorta barras finales.
- [ ] **Step 2: Run test to verify it fails**
  Run: `pnpm test src/config.test.ts`
- [ ] **Step 3: Implement `resolveSiteUrl`, `SITE_URL`, `GOOGLE_SITE_VERIFICATION` in `src/config.ts` and generate `public/og-default.jpg` (1200x630)**
- [ ] **Step 4: Run test to verify it passes**
  Run: `pnpm test src/config.test.ts`

---

### Task 2: Utilidades de Limpieza de Texto y URLs Absolutas (`src/lib/seo/text.ts`)

**Files:**
- Create: `src/lib/seo/text.ts`
- Create: `src/lib/seo/text.test.ts`

**Interfaces:**
- Consumes: `SITE_URL` from `@/config`
- Produces: `cleanRichText(raw: string): string`, `truncateMetaDescription(text: string, maxLength?: number): string`, `toAbsoluteUrl(pathOrUrl: string): string`

- [ ] **Step 1: Write failing tests in `src/lib/seo/text.test.ts`**
  Cubre eliminación de `**negrita**`, saltos de línea, truncado en límite de palabra y codificación de espacios en rutas como `/Paises/Chile/Volcan Villarrica/PortadaVolcanVillarrica.webp`.
- [ ] **Step 2: Run test to verify it fails**
  Run: `pnpm test src/lib/seo/text.test.ts`
- [ ] **Step 3: Implement `src/lib/seo/text.ts`**
- [ ] **Step 4: Run test to verify it passes**
  Run: `pnpm test src/lib/seo/text.test.ts`

---

### Task 3: Constructores Modulares de `Metadata` (`src/lib/seo/metadata.ts`)

**Files:**
- Create: `src/lib/seo/metadata.ts`
- Create: `src/lib/seo/metadata.test.ts`

**Interfaces:**
- Consumes: `cleanRichText`, `truncateMetaDescription`, `toAbsoluteUrl` from `./text`; `SITE_URL`, `GOOGLE_SITE_VERIFICATION` from `@/config`; `PaisData`, `DestinoData` from `@/types`
- Produces: `buildRootMetadata()`, `buildHomeMetadata()`, `buildNosotrasMetadata()`, `buildPaisMetadata(pais, heroImage)`, `buildCuriosidadesMetadata(pais, firstImage)`, `buildDestinoMetadata(destino, pais, portadaImage)`

- [ ] **Step 1: Write failing tests in `src/lib/seo/metadata.test.ts`**
- [ ] **Step 2: Run test to verify it fails**
  Run: `pnpm test src/lib/seo/metadata.test.ts`
- [ ] **Step 3: Implement `src/lib/seo/metadata.ts`**
- [ ] **Step 4: Run test to verify it passes**
  Run: `pnpm test src/lib/seo/metadata.test.ts`

---

### Task 4: Datos Estructurados Schema.org (`src/lib/seo/jsonLd.ts` + `src/components/seo/JsonLd.tsx`)

**Files:**
- Create: `src/lib/seo/jsonLd.ts`
- Create: `src/lib/seo/jsonLd.test.ts`
- Create: `src/components/seo/JsonLd.tsx`

**Interfaces:**
- Consumes: `cleanRichText`, `toAbsoluteUrl` from `./text`; `SITE_URL` from `@/config`; `PaisData`, `DestinoData` from `@/types`
- Produces: `serializeJsonLd(data)`, `buildWebsiteJsonLd()`, `buildAboutPageJsonLd()`, `buildPaisJsonLd(pais, heroImage)`, `buildCuriosidadesJsonLd(pais)`, `buildDestinoJsonLd(destino, pais, portadaImage)`, `JsonLd` component

- [ ] **Step 1: Write failing tests in `src/lib/seo/jsonLd.test.ts`**
- [ ] **Step 2: Run test to verify it fails**
  Run: `pnpm test src/lib/seo/jsonLd.test.ts`
- [ ] **Step 3: Implement `src/lib/seo/jsonLd.ts` and `src/components/seo/JsonLd.tsx`**
- [ ] **Step 4: Run test to verify it passes**
  Run: `pnpm test src/lib/seo/jsonLd.test.ts`

---

### Task 5: Sitemap Completo, Robots y Rastreabilidad de Componentes Interactivos

**Files:**
- Modify: `src/app/sitemap.ts`
- Create: `src/app/sitemap.test.ts`
- Modify: `src/components/map/CountryItem.tsx`
- Modify: `src/components/map/InteractiveMap.tsx`
- Create: `src/components/map/CountryItem.test.tsx`
- Modify: `src/components/carousels/DestinationsCarousel.tsx`
- Modify: `src/components/carousels/MobileDestinationsCarousel.tsx`
- Modify: `src/components/desktop/DesktopCuriosidades.tsx`
- Modify: `src/components/mobile/MobileCuriosidades.tsx`
- Modify: `src/components/ui/LoadingScreen.tsx`
- Create: `src/components/seo/HomeSeoSummary.tsx`

- [ ] **Step 1: Write failing tests in `src/app/sitemap.test.ts` and `src/components/map/CountryItem.test.tsx`**
- [ ] **Step 2: Run tests to verify they fail**
  Run: `pnpm test src/app/sitemap.test.ts src/components/map/CountryItem.test.tsx`
- [ ] **Step 3: Implement sitemap update, `<Link>` in `CountryItem`/`InteractiveMap`, `sr-only` links/text in carousels & curiosidades, `data-nosnippet` in `LoadingScreen`, and `HomeSeoSummary`**
- [ ] **Step 4: Run tests to verify they pass**
  Run: `pnpm test`

---

### Task 6: Integración de Metadata, JSON-LD y `notFound()` en Todas las Rutas de `src/app/`

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/nosotras/page.tsx`
- Modify: `src/app/paises/[id]/page.tsx`
- Modify: `src/app/paises/[id]/curiosidades/page.tsx`
- Modify: `src/app/destinos/[id]/page.tsx`
- Create: `src/app/seo-routes.test.ts`

- [ ] **Step 1: Write failing integration tests for route `generateMetadata` & `notFound()` behavior in `src/app/seo-routes.test.ts`**
- [ ] **Step 2: Run test to verify it fails**
  Run: `pnpm test src/app/seo-routes.test.ts`
- [ ] **Step 3: Wire `metadata` / `generateMetadata`, `<JsonLd />`, semantic `<h1>` / `<HomeSeoSummary />`, and `notFound()` across all 6 route files**
- [ ] **Step 4: Run full verification suite**
  Run: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`

