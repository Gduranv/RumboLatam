# Especificación de Diseño: Selector de Idioma Desplegable (`ES` / `EN` / `PT`)

**Fecha:** 2026-11-08  
**Proyecto:** Rumbo Latam  
**Alcance:** Todas las páginas internas (`/paises/[id]`, `/destinos/[id]`, `/paises/[id]/curiosidades`, `/nosotras`). **Excluido explícitamente el Home (`/`)**.

---

## 1. Objetivo
Implementar un botón flotante tipo menú desplegable con la estética visual de **Rumbo Latam** que permita al usuario cambiar el idioma de los textos entre **Español (`es`)**, **Inglés (`en`)** y **Portugués (`pt`)** de forma instantánea y responsive tanto en escritorio como en dispositivos móviles, a partir de las páginas de países y sitios (sin mostrarse ni alterar la página de inicio `/`).

---

## 2. Reglas de Alcance y Visibilidad
1. **Exclusión estricta del Home (`/`):**
   - El componente `<LanguageDropdown />` inspecciona la ruta activa mediante `usePathname()`.
   - Cuando `pathname === "/"`, el botón retorna `null` y la página de inicio permanece íntegramente en español.
2. **Páginas incluidas:**
   - `/paises/[id]` (escritorio y móvil)
   - `/destinos/[id]` (escritorio y móvil)
   - `/paises/[id]/curiosidades` (escritorio y móvil)
   - `/nosotras` (escritorio y móvil)
3. **Persistencia:**
   - La selección del usuario se guarda en `localStorage` bajo la clave `"rumbo-latam-locale"`.
   - Si no existe preferencia previa o el valor almacenado no es válido, el idioma por defecto es `"es"`.

---

## 3. Diseño Visual y Adaptación Responsive (`<LanguageDropdown />`)

### 3.1 Paleta y Tipografía Rumbo Latam
- **Fondo del botón y menú:** Crema de marca `#FFF7E2`
- **Borde e iconografía:** Naranja de marca `#FF7223` (`border-2 border-[#FF7223]`)
- **Texto principal:** Verde bosque `#13522B` con tipografía `font-nohemi` para códigos/títulos y `font-sans` (`Albert Sans`) para etiquetas descriptivas
- **Estado activo en el desplegable:** Fondo `#FF7223` con texto `#FFF7E2`
- **Estado hover en opciones inactivas:** Fondo `#F1E4C4` con texto `#13522B`

### 3.2 Posicionamiento y Dimensiones Responsive
- **Ubicación:** Flotante fijo en la esquina inferior derecha (`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[70]`), evitando cualquier colisión con los botones superiores del cintillo naranja (`Atrás`, `Curiosidades`, `Nosotras`, `Música`) tanto en desktop como en mobile.
- **Dimensiones del botón disparador:**
  - **Mobile (`< 768px`):** Altura `44px` (`h-11`), padding horizontal `12px` (`px-3`), icono de globo `20x20`, código de idioma (`ES` / `EN` / `PT`) en `14px` bold y chevron desplegable.
  - **Desktop (`>= 768px`):** Altura `52px` (`md:h-[52px]`), padding horizontal `16px` (`md:px-4`), icono de globo `24x24`, código de idioma en `16px` bold y chevron animado.
- **Panel desplegable:**
  - Se abre **hacia arriba** (`bottom-full right-0 mb-2`) con `min-w-[168px] md:min-w-[184px]`, bordes redondeados `rounded-2xl`, borde `2px solid #FF7223` y sombra `shadow-xl`.
  - Lista las 3 opciones con su código y nombre nativo:
    - `ES` — `Español`
    - `EN` — `English`
    - `PT` — `Português`
  - Se cierra al seleccionar un idioma, al hacer clic/toque fuera del componente (`pointerdown`) o al pulsar la tecla `Escape`.

---

## 4. Arquitectura de Internacionalización (`src/i18n/`)

```
src/
├── i18n/
│   ├── types.ts                  # Tipos Locale, UiTranslations, PaisTranslation, DestinoTranslation, NosotrasTranslations
│   ├── LocaleContext.tsx         # LocaleProvider + hook useLocale() + persistencia en localStorage
│   ├── ui.ts                     # Textos fijos de interfaz (ES / EN / PT)
│   ├── nosotras.ts               # Textos de la página /nosotras (ES / EN / PT)
│   ├── paises/
│   │   ├── en.ts                 # Traducciones al inglés de los 8 países y sus curiosidades
│   │   └── pt.ts                 # Traducciones al portugués de los 8 países y sus curiosidades
│   ├── destinos/
│   │   ├── en.ts                 # Traducciones al inglés de los 24 destinos
│   │   └── pt.ts                 # Traducciones al portugués de los 24 destinos
│   ├── index.ts                  # Funciones getLocalizedPais, getLocalizedDestino, getUiStrings, getNosotrasStrings
│   └── i18n.test.tsx             # Pruebas unitarias de diccionarios, fallback y proveedor de idioma
├── components/
│   ├── ui/
│   │   ├── LanguageDropdown.tsx       # Botón desplegable flotante con exclusión de "/"
│   │   └── LanguageDropdown.test.tsx  # Pruebas de renderizado por ruta, interacción y accesibilidad
│   └── desktop/
│       └── DesktopDestino.tsx         # Vista desktop extraída de src/app/destinos/[id]/page.tsx
```

### 4.1 Flujo de Datos y Fallbacks
- Cuando `locale === "es"`, `getLocalizedPais(id, "es")` y `getLocalizedDestino(id, "es")` devuelven directamente los objetos base de `src/data/` sin sobrecarga.
- Cuando `locale === "en"` o `"pt"`, se combinan los textos traducidos sobre la estructura original del país o destino (manteniendo intactas todas las rutas de imágenes, enlaces de Spotify, colores de acento, estrellas de hoteles y enlaces de Google Maps).
- Todas las cadenas con formato `**negrita**` conservan sus marcadores `**` en inglés y portugués para que `<RichText />` siga resaltando las palabras clave exactamente igual que en español.

---

## 5. Integración en Componentes

1. **[`src/app/layout.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/app/layout.tsx):**
   - Envuelve `{children}` con `<LocaleProvider>` e incluye `<LanguageDropdown />`.
2. **Páginas de País ([`DesktopCountry.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/desktop/DesktopCountry.tsx) y [`MobileCountry.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/mobile/MobileCountry.tsx)):**
   - Consumen `useLocale()`, `getLocalizedPais(countryId, locale)` y `getUiStrings(locale)` para traducir subtítulo, mensaje de Gia, sección *"Antes de viajar:"*, tarjetas informativas, título *"3 destinos que no te puedes perder"*, carrusel de destinos y botón *"Explorar"*.
3. **Páginas de Destino (`DesktopDestino.tsx`, [`MobileDestino.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/mobile/MobileDestino.tsx), [`HospedajeCard.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/cards/HospedajeCard.tsx), [`MobileHospedajeCard.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/cards/MobileHospedajeCard.tsx)):**
   - Consumen `useLocale()`, `getLocalizedDestino(destinoId, locale)` y `getUiStrings(locale)` para traducir tag del destino, *"Manual del viajero"*, subtítulo, tarjetas de *Clima / Transporte / Mejor época*, tarjeta de *Hospedaje* (título, subtítulo, tipos de alojamiento, *"VER EN GOOGLE MAPS"*), *Animales autóctonos*, *Actividades* y *"Recuerdos de viaje"*.
4. **Páginas de Curiosidades ([`DesktopCuriosidades.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/desktop/DesktopCuriosidades.tsx) y [`MobileCuriosidades.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/mobile/MobileCuriosidades.tsx)):**
   - Consumen `useLocale()`, `getLocalizedPais(countryId, locale)` y `getUiStrings(locale)` para traducir *"Datos curiosos"*, párrafo introductorio, nombre del país y los textos de cada curiosidad.
5. **Páginas de Nosotras ([`DesktopNosotras.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/desktop/DesktopNosotras.tsx) y [`MobileNosotras.tsx`](file:///c:/Users/victo/Documents/GitHub/RumboLatam/src/components/mobile/MobileNosotras.tsx)):**
   - Consumen `useLocale()` y `getNosotrasStrings(locale)` para traducir encabezados, historia del proyecto, etiquetas de las polaroids, roles del equipo y créditos del pie de página.

---

## 6. Estrategia de Pruebas
1. **Pruebas unitarias de `i18n` (`src/i18n/i18n.test.tsx`):**
   - Verifica que los 8 países y los 24 destinos devuelven textos traducidos no vacíos tanto en `"en"` como en `"pt"`.
   - Verifica el cambio de idioma en `LocaleProvider` y la lectura/escritura en `localStorage`.
2. **Pruebas unitarias de `<LanguageDropdown />` (`src/components/ui/LanguageDropdown.test.tsx`):**
   - Verifica que en `pathname = "/"` **no** se renderiza nada.
   - Verifica que en `pathname = "/paises/venezuela"` o `"/destinos/canaima"` sí se muestra el botón, despliega las 3 opciones (`ES`, `EN`, `PT`), cambia el idioma activo al hacer clic y cierra el menú.
3. **Verificación de tipos y build:**
   - `pnpm test`, `pnpm typecheck`, `pnpm exec eslint` y `pnpm build`.

