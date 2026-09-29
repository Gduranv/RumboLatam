export const SITE_URL: string =
  process.env.SITE_URL ?? "https://gduranv.github.io/RumboLatam";

/**
 * Playlist de Spotify por defecto, usada cuando un país no define la suya.
 * Para cambiar el enlace de un país, edita `playlistUrl` en
 * `src/data/paises/{id}/index.ts`.
 */
export const DEFAULT_PLAYLIST_URL: string =
  "https://open.spotify.com/playlist/5bywhsxxSqQbOoneg9vdPI?si=UEAJ74YLRTihwv_shlzdEw&utm_source=whatsapp&pi=BKfbh5UxS_yP8";