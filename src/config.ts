export const DEFAULT_SITE_URL = "https://rumbolatam.netlify.app";

type EnvRecord = Record<string, string | undefined>;

/**
 * Resuelve la URL pública canónica del sitio priorizando SITE_URL,
 * NEXT_PUBLIC_SITE_URL y URL (variable inyectada automáticamente por Netlify),
 * eliminando cualquier barra final para evitar dobles barras al concatenar rutas.
 */
export const resolveSiteUrl = (env: EnvRecord = process.env): string => {
  const candidates = [env.SITE_URL, env.NEXT_PUBLIC_SITE_URL, env.URL];
  const raw =
    candidates.find((value) => typeof value === "string" && value.trim().length > 0) ??
    DEFAULT_SITE_URL;

  return raw.trim().replace(/\/+$/, "");
};

/**
 * Extrae el código de verificación de Google Search Console desde el entorno,
 * devolviendo undefined cuando no está configurado o está en blanco.
 */
export const resolveGoogleVerification = (
  env: EnvRecord = process.env
): string | undefined => {
  const trimmed = env.GOOGLE_SITE_VERIFICATION?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : undefined;
};

export const SITE_URL: string = resolveSiteUrl();

export const GOOGLE_SITE_VERIFICATION: string | undefined =
  resolveGoogleVerification();

/**
 * Playlist de Spotify por defecto, usada cuando un país no define la suya.
 * Para cambiar el enlace de un país, edita `playlistUrl` en
 * `src/data/paises/{id}/index.ts`.
 */
export const DEFAULT_PLAYLIST_URL: string =
  "https://open.spotify.com/playlist/5bywhsxxSqQbOoneg9vdPI?si=UEAJ74YLRTihwv_shlzdEw&utm_source=whatsapp&pi=BKfbh5UxS_yP8";
