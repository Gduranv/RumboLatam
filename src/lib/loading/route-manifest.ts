import { countriesData } from "@/data/countries";

/**
 * Manifiesto de assets por ruta.
 *
 * `critical` bloquea la pantalla de introducción: es lo mínimo que el usuario
 * perceive como "la página". Medido, el home son ~280 KB.
 *
 * `deferred` se pide en el hueco de inactividad sin bloquear nada: el GIF de Gia
 * (4.7 MB), el fondo del escritorio y los marcadores del mapa. Antes esto se
 * esperaba en el preloader, y por eso la intro duraba 7 s.
 *
 * En las rutas dinámicas el `critical` lo aporta la propia página en el futuro
 * (el hero de un país se resuelve en el servidor), así que aquí va vacío y el
 * gate resuelve de inmediato.
 */
export interface RouteAssets {
  critical: string[];
  deferred: string[];
}

export const INTRO_LOGO = "/Paises/LogoReducido.png";

const HOME_CRITICAL = [
  "/OtrosRecursos/MAPA SVG.svg",
  "/OtrosRecursos/LOGO RUMBO.png",
  "/OtrosRecursos/ICON.png",
  "/OtrosRecursos/brujula-base.svg",
  "/OtrosRecursos/brujula-aguja.svg",
  "/NosotrasHD.png",
];

function homeDeferred(): string[] {
  const urls: string[] = ["/GiaLight.gif", "/FondoHusoHorario/MAR.svg"];
  for (const country of Object.values(countriesData)) {
    urls.push(country.svgPath);
    if (country.flagPath) urls.push(country.flagPath);
    for (const place of country.places) urls.push(place.path);
  }
  return urls;
}

const EMPTY: RouteAssets = { critical: [], deferred: [] };

/** Ruta de la home, con los marcadores del mapa derivados de countriesData. */
const HOME: RouteAssets = {
  critical: HOME_CRITICAL,
  deferred: dedupe(homeDeferred()),
};

function dedupe(urls: string[]): string[] {
  return [...new Set(urls)];
}

/**
 * Empareja un pathname con su manifiesto. Los segmentos literales se comparan y
 * `*` captura un segmento dinámico (`/paises/*` cubre `/paises/venezuela` pero
 * no `/paises/venezuela/curiosidades`, que necesita su propia entrada).
 */
export function getRouteAssets(pathname: string | null): RouteAssets {
  if (!pathname) return EMPTY;
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return HOME;

  const patterns: Array<[string[], RouteAssets]> = [
    [["nosotras"], EMPTY],
    [["paises", "*", "curiosidades"], EMPTY],
    [["paises", "*"], EMPTY],
    [["destinos", "*"], EMPTY],
  ];

  for (const [pattern, assets] of patterns) {
    if (
      pattern.length === segments.length &&
      pattern.every((p, i) => p === "*" || p === segments[i])
    ) {
      return assets;
    }
  }

  return EMPTY;
}
