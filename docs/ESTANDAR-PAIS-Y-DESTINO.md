# Estándar de país y destino

Cómo agregar o corregir un país y un destino. La regla que resume todo el
documento:

> **Un componente, una plantilla. Lo que cambia entre países y destinos son los
> datos, nunca el JSX.**

Si para que un país se vea bien hay que tocar un componente, el dato está mal.

---

## 1. Dónde vive cada cosa

| Contenido | Archivo |
| --- | --- |
| Texto, hero, Gia, "antes de viajar", curiosidades | `src/data/paises/<id>/index.ts` |
| Texto, hero, manual, hospedaje, animales, actividades, galería | `src/data/destinos/<id>/index.ts` |
| Registro de los ids | `src/data/index.ts` |
| Tipos (`PaisData`, `DestinoData`, …) | `src/types/index.ts` |
| Posición de los países en el mapa del home | `src/data/countries.ts` |
| Resolución de imágenes | `src/utils/getResources.ts` |
| Textos por defecto compartidos | `src/data/paisDefaults.ts` |

`src/data/countries.ts` **sólo** guarda geometría del mapa (`svgPath`,
`flagPath`, `places`, `position`). No guarda contenido. Esa duplicación fue la
que hacía que el móvil mostrara el texto de Venezuela en todos los países.

## 2. Agregar un país

1. Crear `src/data/paises/<id>/index.ts` exportando `pais: PaisData`.
2. Registrar el import y la clave en `src/data/index.ts`.
3. Agregar geometría del mapa a `src/data/countries.ts` (SVG, bandera, `places`).
4. Poner los assets en `public/Paises/<CarpetaDelPais>/`.

Campos que **no** se pueden dejar vacíos: `name`, `subtitle`, `hero.src`,
`giaPais.src`, `giaMessage`, `antesDeViajar`, `destinos`, `curiosidades`.

### La carpeta del país

Es el nombre de la carpeta en `public/Paises/` y casi siempre coincide con el
id en mayúscula inicial. Las excepciones viven en `CARPETA_PAIS` dentro de
`getResources.ts` (`repdominicana` → `RepublicaDominicana`). Si agregas una
excepción, agrégala ahí; no la hornees en el componente.

## 3. Agregar un destino

1. Crear `src/data/destinos/<id>/index.ts` exportando `destino: DestinoData`.
2. Registrarlo en `src/data/index.ts`.
3. Agregarlo a `destinos` del país correspondiente, con el `id` idéntico al del
   destino y `image.src` igual a `destino.hero.src` (lo verifica el test).
4. Poner los assets en `public/Paises/<Pais>/<Destino>/`.

El test `src/data/contenido.test.ts` falla si un resumen de la página del país
apunta a un destino inexistente o a un `paisId` distinto, así que este paso no
es opcional aunque parezca redundante.

## 4. Imágenes: el dato manda, la carpeta es el respaldo

Nada de rutas dentro del JSX. Todo se resuelve en `getResources.ts` con esta
cascada, y el primer paso gana siempre que el archivo exista:

1. **El dato**, en su orden curado. Las rutas que no existen en disco se
   descartan, no rompen la página.
2. **La carpeta deducida del hero**: `hero.src` menos el nombre del archivo.
3. **La convención histórica**: `/Paises/{paisId}/{id}/{seccion}`.
4. **La raíz de la carpeta, por prefijo**: `Galeria*.webp`, `Hospedaje*.webp`, …

`sections` válidas: `galeria`, `hospedaje`, `animales`, `actividades`, y
`portada` para la imagen principal.

Esto significa que un destino nuevo funciona **sólo** con sus rutas escritas en
el dato, sin tocar una línea de componente. Y que los destinos antiguos, cuyos
datos todavía apuntan a rutas previas a la mudanza de assets, siguen funcionando
por la carpeta.

### Casos límite resueltos

- **Flat folders**: si las imágenes viven sueltas en la raíz con prefijo en el
  nombre, la regla 4 las encuentra (`PREFIJOS` en `getResources.ts`).
- **camelCase**: Venezuela nombra `coloniaTovar`, no `colonia-tovar`. El
  resolver prueba ambas formas.
- **Curiosidades**: se buscan `Curiosidades` y `curiosidades`, porque no todos
  los países archivaron igual.

## 5. Falta de assets

Cuando no hay foto, la salida honesta es un placeholder — nunca la foto de otro
destino ni un `<img>` apuntando a un archivo inexistente.

- Sin foto de curiosidad: `/OtrosRecursos/ICONOCURIOSIDADES.png`.
- Sin hero de país: se dibuja el bloque "Falta el recurso" con degradado de
  fondo, para que la página parezca cargando y no rota.

Si agregas un destino con secciones sin foto, documéntalo en
`FALTANTES_DE_FOTO` dentro de `src/data/contenido.test.ts`. El test falla si
aparece una sección vacía que no esté en esa lista: así un faltante nuevo se
anota en vez de descubrirse en producción.

Faltantes conocidos a la fecha de este documento:

| Destino | Secciones sin foto |
| --- | --- |
| `altos-de-chavon` | galeria, hospedaje, animales, actividades |
| `eje-cafetero` | galeria |
| `castillo-de-chapultepec` | galeria, hospedaje, actividades |
| `hierve-el-agua` | hospedaje |

## 6. Texto

`description` acepta negritas marcadas con `**así**` en `PaisData`,
`DestinoData` y los datos de imágenes. Se renderizan con `<RichText />`, que
debe ser el único que parsea ese formato:

```tsx
<RichText text={card.description} />
```

Si un texto necesita dos pisos de negrita, `RichText` lo resuelve con CSS
(`fw-black` para el segundo nivel); no hace falta HTML ni `dangerouslySetInnerHTML`.

Cuando un país no declara `antesDeViajar`, se usan las cuatro tarjetas de
`DEFAULT_ANTES_DE_VIAJAR` en `src/data/paisDefaults.ts`, para que la sección
nunca quede vacía. Un país que sí los declara los reemplaza completos. Lo
mismo aplica a `SUBTITLE_FALLBACK` y a `GIA_PAIS_FALLBACK`.

## 7. Reglas para los componentes

- Mobile y desktop leen **el mismo** `PaisData` / `DestinoData`. Si uno necesita
  un campo que el otro no, el problema es el modelo de datos, no el componente.
- Nada de contenido hardcodeado. Si un texto es igual para todos los países
  (títulos, descripciones de sección), va en el componente; si es de un país, va
  en el dato.
- Los componentes de servidor resuelven imágenes; los de cliente reciben
  strings ya resueltos. `getResources.ts` usa `fs` y **no** puede importarse
  desde un `"use client"`.
- No agregar campos para rastrearAsset. La carpeta del destino se deduce de su
  `hero.src`; un campo más sería una segunda fuente de verdad que puede
  contradecir a la imagen.

## 8. Verificación

```bash
npx tsc --noEmit          # tipos
npx vitest run            # contrato de contenido + recursos
npm run build
```

`src/data/contenido.test.ts` es el que mantiene vivo este documento. Si una
regla de aquí se rompe, ese test es el que avisa.
