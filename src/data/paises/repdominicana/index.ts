import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "repdominicana",
  name: "República Dominicana",
  subtitle: "Explora la magia de este destino.",
  hero: {
    // TODO(design): falta foto de portada real para República Dominicana.
    src: "",
    alt: "República Dominicana",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Klk! Prepárate para el viaje.",
  // TODO(design): copy de las 4 ser de "Antes de viajar" para República Dominicana.
  antesDeViajar: [],
  destinos: [],
  curiosidades: [
    {
      text: "¿Sabías que el merengue, el ritmo que mueve a República Dominicana, fue declarado en 2016 Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO? Es el género musical africano, europeo e indígena contado a través de una fiesta.",
      image: { src: "", alt: "Merengue dominicano" },
    },
    {
      text: "¿Sabías que el ámbar dominicano es único en el mundo por su transparencia? El ámbar azul, que brilla con un tono fluorescente bajo la luz del sol, solo existe en la cordillera del norte de este país caribeño.",
      image: { src: "", alt: "Ámbar azul dominicano" },
    },
    {
      text: "¿Sabías que el Lago Enriquillo es el lago más grande del Caribe y un milagro natural? Sus aguas saladas se encuentran por debajo del nivel del mar y en sus orillas viven cocodrilos americanos, iguanas y flamencos rosados.",
      image: { src: "", alt: "Lago Enriquillo" },
    },
  ],
};