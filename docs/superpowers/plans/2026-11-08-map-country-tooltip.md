# Etiqueta Hover Personalizada del Mapa (Cápsula Brújula) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el tooltip nativo (`title`) de los territorios en `InteractiveMap` por la etiqueta flotante personalizada "Cápsula Brújula" de Rumbo Latam que sigue suavemente al cursor sin causar re-renders por píxel.

**Architecture:** Se desacopla el cálculo geométrico puro en `tooltipPosition.ts`, la coordinación de puntero y actualización imperativa de `transform: translate3d(...)` en el hook `useMapTooltip.ts`, y la vista de marca en `MapCountryTooltip.tsx`. `CountryItem` elimina `title`, conserva accesibilidad/enlaces SEO y delega eventos de puntero hacia `InteractiveMap`.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, TypeScript 5, Tailwind CSS 4, Vitest 4 + React Testing Library.

## Global Constraints

- Usar única y exclusivamente `pnpm` (jamás `npm` ni `yarn`).
- Variables y funciones en `camelCase`; componentes y clases en `PascalCase`.
- Componentes React escritos como funciones de flecha (`export const Componente = () => ...`).
- Funciones pequeñas y modulares, cada una con su bloque de comentario JSDoc indicando su propósito.
- Preservar la rastreabilidad SEO (`<Link>` / `href`) y accesibilidad (`aria-label`) en `CountryItem`.

---

### Task 1: Cálculo Puro de Posición del Tooltip (`tooltipPosition.ts`)

**Files:**
- Create: `src/components/map/tooltipPosition.ts`
- Test: `src/components/map/tooltipPosition.test.ts`

**Interfaces:**
- Produces:
  - `CursorPoint { clientX: number; clientY: number }`
  - `ViewportSize { width: number; height: number }`
  - `TooltipDimensions { width: number; height: number }`
  - `TooltipCoordinates { x: number; y: number }`
  - `computeTooltipPosition(cursor: CursorPoint, viewport: ViewportSize, dimensions?: TooltipDimensions): TooltipCoordinates`

- [x] **Step 1: Write the failing test in `src/components/map/tooltipPosition.test.ts`**
- [x] **Step 2: Run `pnpm test src/components/map/tooltipPosition.test.ts` to verify RED**
- [x] **Step 3: Implement `src/components/map/tooltipPosition.ts` with small JSDoc-documented functions**
- [x] **Step 4: Run `pnpm test src/components/map/tooltipPosition.test.ts` to verify GREEN**

---

### Task 2: Componente Visual `MapCountryTooltip` y Hook `useMapTooltip`

**Files:**
- Create: `src/components/map/useMapTooltip.ts`
- Create: `src/components/map/MapCountryTooltip.tsx`
- Test: `src/components/map/MapCountryTooltip.test.tsx`

**Interfaces:**
- Consumes: `computeTooltipPosition` from `./tooltipPosition`
- Produces:
  - `useMapTooltip()` returning `{ activeCountryName, tooltipRef, handleCountryPointerEnter, handleCountryPointerMove, handleCountryPointerLeave }`
  - `MapCountryTooltip` (`({ countryName, tooltipRef }: MapCountryTooltipProps) => JSX.Element`)

- [x] **Step 1: Write the failing test in `src/components/map/MapCountryTooltip.test.tsx`**
- [x] **Step 2: Run `pnpm test src/components/map/MapCountryTooltip.test.tsx` to verify RED**
- [x] **Step 3: Implement `src/components/map/useMapTooltip.ts` and `src/components/map/MapCountryTooltip.tsx`**
- [x] **Step 4: Run `pnpm test src/components/map/MapCountryTooltip.test.tsx` to verify GREEN**

---

### Task 3: Integración en `CountryItem` e `InteractiveMap`

**Files:**
- Modify: `src/components/map/CountryItem.tsx`
- Modify: `src/components/map/InteractiveMap.tsx`
- Test: `src/components/map/InteractiveMap.test.tsx`

**Interfaces:**
- Consumes: `useMapTooltip`, `MapCountryTooltip`
- Produces: `CountryItem` sin atributo `title`, con `aria-label={name}`, `hover:z-30` y soporte de puntero conectado a `InteractiveMap`.

- [x] **Step 1: Write the failing test in `src/components/map/InteractiveMap.test.tsx`**
- [x] **Step 2: Run `pnpm test src/components/map/InteractiveMap.test.tsx` to verify RED**
- [x] **Step 3: Update `src/components/map/CountryItem.tsx` and `src/components/map/InteractiveMap.tsx` preserving any concurrent SEO `<Link>` changes**
- [x] **Step 4: Run `pnpm test`, `pnpm typecheck`, and `pnpm lint` to verify full GREEN**
