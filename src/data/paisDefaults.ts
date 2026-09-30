import type { AntesDeViajarCard, ImageSource } from "@/types";

/** Se muestra cuando el id de la URL no corresponde a ningún país. */
export const GIA_PAIS_FALLBACK: ImageSource = {
  src: "/Paises/Venezuela/giacortada.gif",
  alt: "Gia",
};

export const SUBTITLE_FALLBACK = "Explora la magia de este destino.";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

/**
 * Maquetación de "Antes de viajar": cuatro tarjetas. Si un país no declara
 * las suyas, se muestran estos textos para que la página nunca quede con una
 * sección vacía. Un país que sí los declare los reemplaza completos.
 */
export const DEFAULT_ANTES_DE_VIAJAR: AntesDeViajarCard[] = [
  { title: "Moneda", description: LOREM, icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" } },
  { title: "Gastronomía", description: LOREM, icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" } },
  { title: "Idioma", description: LOREM, icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" } },
  { title: "Estaciones", description: LOREM, icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" } },
];
