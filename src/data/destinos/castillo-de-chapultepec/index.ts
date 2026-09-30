import type { DestinoData } from "@/types";

export const destino: DestinoData = {
  id: "castillo-de-chapultepec",
  paisId: "mexico",
  name: "Castillo de Chapultepec",
  tag: "Palacio Histórico",
  hero: {
    src: "/Paises/Mexico/Castillo Chapultepec/PortadaCastilloChapultec.webp",
    alt: "Castillo de Chapultepec",
  },
  manualDelViajero: [
    {
      title: "Clima",
      description:
        "Templado subhúmedo con media de 19°C. Las mañanas son frescas en el bosque y las tardes secas, salvo la temporada de lluvias de junio a septiembre.",
      icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
    },
    {
      title: "Transporte",
      description:
        "Estación Chapultepec del Metro y del Tren Eléctrico Urbano. También se llega en autobús RTP y por las avenidas Constituyentes, Panzacola y Paseo de la Reforma.",
      icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
    },
    {
      title: "Mejor época",
      description:
        "De octubre a abril, con clima seco y días despejados ideales para recorrer el bosque. Julio es la fecha clave por el Festival Internacional de Cine.",
      icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
    },
  ],
  hospedaje: {
    hoteles: [
      { name: "Marriott Marquis City Chapultepec", tipo: "Hotel", estrellas: 5 },
      { name: "Wyndham Grand Mexico City Chapultepec", tipo: "Hotel", estrellas: 4.5 },
      { name: "Gran Hotel Ciudad de México", tipo: "Hotel histórico", estrellas: 4 },
    ],
    imagenes: [],
  },
  animales: {
    description:
      "El bosque de Chapultepec es refugio de ardillas, tlacuaches, mapaches y coatíes, además de colibríes, chipezones y gaviotas que descansan a la orilla del lago.",
    imagenes: [],
  },
  actividades: {
    description:
      "Resaltan recorrer el Castillo y el Museo Nacional de Historia, subir a la cúpula para ver el centro histórico, navegar el lago, visitar el Papalote Museo del Niño, el Jardín Botánico y los Auditorios Nezahualcóyotl.",
    imagenes: [],
  },
  galeria: [],
};
