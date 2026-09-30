import type { DestinoData } from "@/types";

/**
 * Datos del destino turístico Altos de Chavón (República Dominicana).
 */
export const destino: DestinoData = {
    id: "altos-de-chavon",
    paisId: "repdominicana",
    name: "Altos de Chavón",
    tag: "Villa renacentista",
    hero: {
        src: "/Paises/RepublicaDominicana/AltosDeChavon/PortadaAltosDeChavon.webp",
        alt: "Altos de Chavón",
    },
    manualDelViajero: [
        {
            title: "Clima",
            description:
                "Tropical y cálido con media de 26°C. Varía de tardes soleadas con brisa del río Chavón a noches templadas, con lluvias moderadas durante el verano.",
            icon: { src: "/Paises/icono clima.png", alt: "Icono Clima" },
        },
        {
            title: "Transporte",
            description:
                "Acceso terrestre desde La Romana o Punta Cana en auto o autobús. Internamente el recorrido es peatonal debido a sus calles empedradas.",
            icon: { src: "/Paises/icon transporte.png", alt: "Icono Transporte" },
        },
        {
            title: "Mejor época",
            description:
                "Ideal de diciembre a abril por el clima fresco y seco, o al final de la tarde para ver el encendido de los faroles y disfrutar del atardecer.",
            icon: { src: "/Paises/icon mejor epoca.png", alt: "Icono Mejor época" },
        },
    ],
    hospedaje: {
        hoteles: [
            { name: "Los Altos Residences", tipo: "Hotel", estrellas: 5 },
            { name: "Batey 16", tipo: "Hotel", estrellas: 5 },
            { name: "Villa Baya", tipo: "Hotel", estrellas: 4.5 },
        ],
        imagenes: [],
    },
    animales: {
        description:
            "Destacan aves tropicales como el zumbadorcito y la cigua palmera, coloridas mariposas en los jardines, además de garzas reales volando sobre el cañón del río.",
        imagenes: [],
    },
    actividades: {
        description:
            "Resaltan recorrer las hermosas réplicas de calles empedradas de una villa mediterránea del siglo XVI, tomar fotografías en el imponente anfiteatro de piedra de estilo romano, visitar el Museo Arqueológico Regional y disfrutar de las vistas  hacia el río.",
        imagenes: [],
    },
    galeria: [],
};
