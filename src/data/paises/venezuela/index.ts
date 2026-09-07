import type { PaisData } from "@/types";

export const pais: PaisData = {
  id: "venezuela",
  name: "Venezuela",
  subtitle: "La magia de la tierra de gracia.",
  hero: {
    src: "/Paises/Venezuela/FotoVenezuela.png",
    alt: "Venezuela",
  },
  // Mensaje de Gia propio del país: lo completa el equipo de contenido manualmente.
  giaMessage: "¡Epa, chamo! Prepárate para el viaje.",
  antesDeViajar: [
    {
      title: "Moneda",
      description:
        "El bolívar (VES) es la moneda oficial, aunque el uso del dólar estadounidense (USD) en efectivo está ampliamente extendido en comercios y servicios.",
      icon: { src: "/Paises/icon moneda.png", alt: "Icono Moneda" },
    },
    {
      title: "Gastronomía",
      description:
        "Predomina una cocina basada en el maíz, las carnes sazonadas y los quesos frescos, caracterizada por un balance perfecto de sabores intensos.",
      icon: { src: "/Paises/icono gastronomia.png", alt: "Icono Gastronomía" },
    },
    {
      title: "Idioma",
      description:
        "**Español,** hablado con una calidez única y lleno de expresiones coloquiales icónicas que te harán sentir como en casa.",
      icon: { src: "/Paises/idioma.png", alt: "Icono Idioma" },
    },
    {
      title: "Estaciones",
      description:
        "Al ser un país tropical, no existen las estaciones tradicionales, sino dos períodos climáticos: el de sequía **(verano)** y el de lluvias **(invierno)**.",
      icon: { src: "/Paises/icon estaciones.png", alt: "Icono Estaciones" },
    },
  ],
  destinos: [
    {
      id: "canaima",
      title: "Parque Nacional Canaima",
      tag: "Patrimonio natural",
      description:
        "Hogar de los milenarios tepuyes y del Salto Ángel, la caída de agua libre más alta de todo el planeta. Un territorio salvaje esculpido por el tiempo que te invita a descubrir la energía más pura de la naturaleza americana.",
      image: {
        src: "/Paises/Venezuela/portadas/CanaimaPortada.webp",
        alt: "Parque Nacional Canaima",
      },
    },
    {
      id: "colonia-tovar",
      title: "Colonia Tovar",
      tag: "Cultura y Gastronomía",
      description:
        "Un pintoresco poblado europeo fundado en las montañas de la Cordillera de la Costa. Un destino místico donde la arquitectura de madera y la neblina fusionan las tradiciones andinas con las alemanas.",
      image: {
        src: "/Paises/Venezuela/portadas/colonia_tovar_portada.webp",
        alt: "Colonia Tovar",
      },
    },
    {
      id: "isla-larga",
      title: "Isla Larga",
      tag: "Refugio caribeño",
      description:
        "Una paradisíaca isla del Parque Nacional San Esteban con arenas blancas y arrecifes de coral. Un paraíso marino ideal para explorar barcos hundidos históricos en aguas totalmente cristalinas.",
      image: {
        src: "/Paises/Venezuela/portadas/isla_larga_portada.webp",
        alt: "Isla Larga",
      },
    },
  ],
  curiosidades: [
    {
      text: "**¿Sabías que Venezuela es uno de los pocos países del mundo donde puedes experimentar casi todos los climas?** En un mismo viaje puedes pasar de las dunas desérticas de los Médanos de Coro, a selvas tropicales, y terminar tocando nieve en las cumbres de la Cordillera de los Andes.",
      image: {
        src: "/Paises/Venezuela/curiosidades/curiosidadesven-medanos.webp",
        alt: "Dunas de los Médanos de Coro",
      },
    },
    {
      text: '**¿Sabías que el chigüire es el roedor más grande del mundo y habita en los llanos venezolanos?** Históricamente, el Vaticano permitió a los venezolanos consumirlo durante la Semana Santa clasificándolo casi como un "pescado" debido a sus hábitos semiacuáticos.',
      image: {
        src: "/Paises/Venezuela/curiosidades/curiosidadesven-capibara.webp",
        alt: "Chigüire de los llanos venezolanos",
      },
    },
    {
      text: "**¿Sabías que en Venezuela existe una curiosa tradición de Año Nuevo para atraer viajes?** A la medianoche exacta del 1 de enero, es costumbre salir corriendo por la calle arrastrando una maleta. Según la creencia popular, esto garantiza que el nuevo año estará lleno de viajes y aventuras.",
      image: {
        src: "/Paises/Venezuela/curiosidades/curiosidadesven-maletas.webp",
        alt: "Tradición de Año Nuevo con maletas",
      },
    },
  ],
  curiosidadesAccent: "#A11F34",
  curiosidadesNameColor: "#A11F34",
};