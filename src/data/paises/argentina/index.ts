import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "argentina",
  name: "Argentina",
  subtitle: "Explora la magia de este destino.",
  hero: {
    // TODO(design): falta foto de portada real para Argentina.
    src: "",
    alt: "Argentina",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Che, boludo! Prepárate para el viaje.",
  // TODO(design): copy de las 4 ser de "Antes de viajar" para Argentina.
  antesDeViajar: [],
  destinos: [],
  curiosidades: [
    {
      text: "¿Sabías que el tango nació en los barrios de Buenos Aires a finales del siglo XIX? Esta danza romántica y melancólica, fruto del mestizaje, fue declarada en 2009 Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.",
      image: { src: "", alt: "Tango porteño" },
    },
    {
      text: "¿Sabías que el glaciar Perito Moreno, en la Patagonia argentina, es uno de los pocos glaciares del mundo que continúa avanzando? Su frente se derrumba en bloques de hielo gigantes ante los ojos de quienes lo visitan.",
      image: { src: "", alt: "Glaciar Perito Moreno" },
    },
    {
      text: "¿Sabías que tomar mate es casi un ritual de amistad? La infusión de yerba mate se comparte en ronda con la misma bombilla, y negarse a convidar es un gesto que todo argentino toma muy en serio.",
      image: { src: "", alt: "Mate argentino" },
    },
  ],
};