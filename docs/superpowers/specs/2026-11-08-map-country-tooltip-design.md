# Especificación de Diseño: Etiqueta Hover Personalizada en el Mapa Interactivo (Cápsula Brújula)

**Fecha:** 2026-11-08
**Proyecto:** Rumbo Latam
**Framework:** Next.js 16.2.10 (App Router) + React 19.2.4 + TypeScript + Tailwind CSS 4

---

## 1. Objetivo y Problema

Actualmente, al pasar el cursor (`hover`) sobre cualquier territorio en `InteractiveMap`, el componente `CountryItem` expone el atributo HTML nativo `title={name}`, provocando que el navegador muestre un tooltip genérico del sistema operativo con retraso y sin relación con la identidad visual de Rumbo Latam.

El objetivo es reemplazar ese tooltip por defecto por una etiqueta flotante personalizada (**Opción A — Cápsula Brújula**) que:
1. Siga suavemente al puntero mientras recorre cualquier territorio del mapa.
2. Muestre el nombre del país acompañado del emblema de aguja viajera de Rumbo Latam sin duplicar la bandera que ya flota sobre el territorio.
3. Mantenga 60 fps sin provocar re-renders de React en cada píxel de desplazamiento y sin interferir con interacciones táctiles en dispositivos móviles ni con los enlaces semánticos (`<Link>`) del mapa.

---

## 2. Restricciones Globales del Proyecto

- **Gestor de paquetes:** Usar única y exclusivamente `pnpm`.
- **Convenciones de código (`.agents/AGENTS.md`):**
  - Variables y funciones en `camelCase`.
  - Componentes y clases en `PascalCase`.
  - Componentes React escritos como funciones de flecha (`const MiComponente = () => ...`).
  - Funciones pequeñas, modulares y cada una acompañada de un bloque de comentario JSDoc indicando su propósito.
- **Accesibilidad y SEO:** Conservar el nombre accesible (`aria-label={name}`) y el enlace navegable hacia `/paises/${id}` en cada territorio al retirar el atributo `title`.
- **Movimiento reducido:** Respetar la regla `@media (prefers-reduced-motion: reduce)` definida en `src/app/globals.css`.

---

## 3. Diseño Visual (Cápsula Brújula)

- **Contenedor exterior (`MapCountryTooltip`):**
  - Posicionamiento global `fixed top-0 left-0 z-50 pointer-events-none select-none` para evitar recortes por `overflow-hidden` en `DesktopHome` o `MobileHome` y quedar siempre por encima de banderas e ilustraciones vecinas.
  - Forma cápsula (`rounded-full`) con relleno crema postal (`bg-[#FFF7E2]`), borde sutil verde selva (`border border-[#13522B]/20`), sombra cálida (`shadow-[0_8px_20px_rgba(19,82,43,0.22)]`), padding compacto (`pl-1.5 pr-3.5 py-1.5`) y ligera inclinación editorial (`-rotate-1`).
- **Insignia izquierda:**
  - Círculo verde selva (`w-6 h-6 rounded-full bg-[#13522B]`) centrando el vector oficial de aguja viajera (`M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z`) en naranja (`#FF7223`) rotado `135deg` (orientación noreste `↗`).
- **Tipografía:**
  - Familia `font-nohemi`, peso `font-bold`, tamaño `text-sm` (`14px`), interlineado compacto, color verde selva (`text-[#13522B]`) y `whitespace-nowrap`.
- **Transición:**
  - Entrada/salida suave combinando `opacity-100 scale-100` cuando hay país activo y `opacity-0 scale-95` en reposo (`duration-150 ease-out`).

---

## 4. Arquitectura Modular (`src/components/map/`)

### 4.1 Cálculo de Coordenadas (`src/components/map/tooltipPosition.ts`)
Módulo puro sin dependencias de React ni DOM global:
- `computeTooltipPosition(cursor, viewport, dimensions?)`: recibe `{ clientX, clientY }`, `{ width, height }` de la ventana y dimensiones estimadas del tooltip (`default: { width: 190, height: 42 }`).
- Aplica un desplazamiento base de `+16px` en `X` y `-42px` en `Y` respecto al cursor para no tapar el puntero ni el punto exacto donde el usuario hace clic.
- Si el tooltip rebasa el margen derecho (`clientX + 16 + width > viewport.width - 12`), invierte horizontalmente a la izquierda del cursor (`clientX - width - 16`) y asegura un mínimo de `12px`.
- Si rebasa el margen superior (`clientY - 42 < 12`), lo coloca debajo del cursor (`clientY + 20`).

### 4.2 Hook de Seguimiento (`src/components/map/useMapTooltip.ts`)
Hook cliente que separa el estado discreto del movimiento continuo:
- `activeCountryName: string | null` en `useState` (solo cambia en `enter` y `leave`).
- `tooltipRef: RefObject<HTMLDivElement | null>` cuyo `style.transform` se actualiza directamente con `translate3d(${x}px, ${y}px, 0)` al entrar y mover el puntero, logrando 0 re-renders por movimiento.
- Funciones pequeñas con JSDoc:
  - `isTouchPointer(pointerType)`: devuelve `true` cuando `pointerType === "touch"` para ignorar eventos táctiles.
  - `applyTooltipTransform(element, clientX, clientY)`: calcula la posición con `computeTooltipPosition` sobre el tamaño actual del elemento (`offsetWidth` / `offsetHeight` con respaldo) y escribe `style.transform`.
  - `handleCountryPointerEnter(countryName, event)`: ignora `touch`, posiciona inmediatamente el nodo antes de mostrarlo (evitando saltos desde `(0, 0)`) y fija `activeCountryName`.
  - `handleCountryPointerMove(event)`: ignora `touch` y actualiza `style.transform` si hay elemento montado.
  - `handleCountryPointerLeave(event)`: ignora `touch` y limpia `activeCountryName` a `null`.

### 4.3 Componente Visual (`src/components/map/MapCountryTooltip.tsx`)
- Arrow function `MapCountryTooltip` que recibe `{ countryName: string | null; tooltipRef: RefObject<HTMLDivElement | null> }`.
- Permanece montado en el árbol de `InteractiveMap` con `aria-hidden="true"` y `data-testid="map-country-tooltip"` para que `tooltipRef.current` esté disponible desde el primer `pointerenter` y permita animar tanto la aparición como el desvanecimiento, conservando el último nombre mostrado durante el breve fade-out.

### 4.4 Integración en `CountryItem.tsx` e `InteractiveMap.tsx`
- En `CountryItem.tsx`:
  - Tipado explícito `CountryItemProps` (eliminando `: any`), soportando tanto navegación por enlace (`href`) como `onClick` opcional, más callbacks opcionales `onCountryPointerEnter`, `onCountryPointerMove` y `onCountryPointerLeave`.
  - Eliminación del atributo `title={name}` y adición/preservación de `aria-label={name}`.
  - Elevación `hover:z-30` en el contenedor posicionado del país para evitar solapamientos con países hermanos posteriores en el DOM.
- En `InteractiveMap.tsx`:
  - Uso de `useMapTooltip()` para conectar los tres callbacks a cada `CountryItem` y renderizar `<MapCountryTooltip />`.

---

## 5. Estrategia de Pruebas

1. **`src/components/map/tooltipPosition.test.ts`**:
   - Posición estándar desplazada arriba a la derecha del cursor.
   - Inversión horizontal cuando el cursor se acerca al borde derecho del viewport.
   - Inversión vertical cuando el cursor se acerca al borde superior del viewport.
2. **`src/components/map/InteractiveMap.test.tsx`**:
   - Ningún territorio renderiza el atributo nativo `title`, manteniendo accesibilidad (`aria-label` / enlace accesible).
   - Al disparar `pointerEnter` + `pointerMove` con `pointerType: "mouse"` sobre un territorio (ej. Venezuela), `MapCountryTooltip` pasa a estado visible, muestra `"Venezuela"` y actualiza `transform: translate3d(...)`.
   - Al disparar `pointerLeave` con `pointerType: "mouse"`, la etiqueta vuelve a estado oculto.
   - Al disparar `pointerEnter` con `pointerType: "touch"`, la etiqueta permanece oculta.

