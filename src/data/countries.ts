export interface MapPlace {
  path: string;
  position: { top: string; left: string; width: string; height?: string };
}

/**
 * Datos que el mapa interactivo del home necesita de cada país: el SVG que lo
 * dibuja, la bandera, los marcadores de destino y dónde va cada pieza.
 *
 * Deliberadamente **no** guarda contenido (subtítulo, hero, Gia, destinos).
 * Eso vive en `src/data/paises/<id>/index.ts` (`PaisData`) y lo consumen
 * `MobileCountry` y `DesktopCountry`. Mantener aquí una segunda copia era justo
 * lo que hacía que el móvil mostrara el texto de Venezuela en todos los países.
 */
export interface CountryData {
  id: string;
  name: string;
  svgPath: string;
  flagPath?: string;
  flagPosition?: { top: string; left: string };
  places: MapPlace[];
  position: { top: string; left: string; width: string };
}

export const countriesData: Record<string, CountryData> = {
  mexico: {
    id: "mexico",
    name: "México",
    svgPath: "/Paises/Mexico/mexico.svg",
    flagPath: "/Paises/Mexico/BANDERA MEXICO.png",
    flagPosition: { top: "45%", left: "18%" },
    places: [
      { path: "/Paises/Mexico/LUGAR MEXICO 1.png", position: { top: "-15%", left: "10%", width: "88px", height: "47px" } },
      { path: "/Paises/Mexico/LUGAR MEXICO 2.png", position: { top: "2%", left: "40%", width: "48px", height: "71px" } },
      { path: "/Paises/Mexico/LUGAR MEXICO 3.png", position: { top: "55%", left: "45%", width: "99px", height: "50px" } },
    ],
    position: { top: "0%", left: "0%", width: "36.03%" },
  },
  repdominicana: {
    id: "repdominicana",
    name: "República Dominicana",
    svgPath: "/Paises/RepublicaDominicana/repdominicana.svg",
    flagPath: "/Paises/RepublicaDominicana/BANDERA REP DOM.png",
    flagPosition: { top: "-250%", left: "120%" },
    places: [
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM1.png", position: { top: "-150%", left: "0%", width: "50px", height: "60px" } },
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM2.png", position: { top: "-350%", left: "-115%", width: "60px", height: "50px" } },
      { path: "/Paises/RepublicaDominicana/LUGAR REP DOM3.png", position: { top: "-22%", left: "160%", width: "60px", height: "38px" } },
    ],
    position: { top: "14.34%", left: "53.37%", width: "4.35%" },
  },
  colombia: {
    id: "colombia",
    name: "Colombia",
    svgPath: "/Paises/Colombia/colombia.svg",
    flagPath: "/Paises/Colombia/BANDERA COLOMBIA.png",
    flagPosition: { top: "35%", left: "-10%" },
    places: [
      { path: "/Paises/Colombia/LUGAR COLOMBIA1.png", position: { top: "30%", left: "50%", width: "47px", height: "28px" } },
      { path: "/Paises/Colombia/LUGAR COLOMBIA2.png", position: { top: "35%", left: "30%", width: "48px", height: "68px" } },
      { path: "/Paises/Colombia/LUGAR COLOMBIA3.png", position: { top: "-10%", left: "-5%", width: "50px", height: "58px" } },
    ],
    position: { top: "22.83%", left: "45.03%", width: "14.34%" },
  },
  venezuela: {
    id: "venezuela",
    name: "Venezuela",
    svgPath: "/Paises/Venezuela/venezuela.svg",
    flagPath: "/Paises/Venezuela/Bandera Venezuela.png",
    flagPosition: { top: "-5%", left: "65%" },
    places: [
      { path: "/Paises/Venezuela/LUGAR VENEZUELA1.png", position: { top: "-4%", left: "95%", width: "55%" } },
      { path: "/Paises/Venezuela/LUGAR VENEZUELA2.png", position: { top: "-20%", left: "18%", width: "40%" } },
      { path: "/Paises/Venezuela/LUGAR VENEZUELA3.png", position: { top: "30%", left: "45%", width: "40%" } },
    ],
    position: { top: "23.14%", left: "51.67%", width: "16.01%" },
  },
  peru: {
    id: "peru",
    name: "Perú",
    svgPath: "/Paises/Peru/peru.svg",
    flagPath: "/Paises/Peru/BANDERA PERU.png",
    flagPosition: { top: "45%", left: "10%" },
    places: [
      { path: "/Paises/Peru/LUGAR PERU1.png", position: { top: "20%", left: "2%", width: "65%" } },
      { path: "/Paises/Peru/LUGAR PERU2.png", position: { top: "60%", left: "40%", width: "55%" } },
      { path: "/Paises/Peru/LUGAR PERU3.png", position: { top: "0%", left: "35%", width: "55%" } },
    ],
    position: { top: "36.93%", left: "42.31%", width: "14.94%" },
  },
  brasil: {
    id: "brasil",
    name: "Brasil",
    svgPath: "/Paises/Brasil/brasil.svg",
    flagPath: "/Paises/Brasil/BANDERA BRASIL.png",
    flagPosition: { top: "15%", left: "80%" },
    places: [
      { path: "/Paises/Brasil/LUGAR BRASIL1.png", position: { top: "15%", left: "20%", width: "20%" } },
      { path: "/Paises/Brasil/LUGAR BRASIL2.png", position: { top: "55%", left: "45%", width: "20%" } },
      { path: "/Paises/Brasil/LUGAR BRASIL3.png", position: { top: "32%", left: "50%", width: "20%" } },
    ],
    position: { top: "30.95%", left: "50.93%", width: "49.07%" },
  },
  chile: {
    id: "chile",
    name: "Chile",
    svgPath: "/Paises/Chile/chile.svg",
    flagPath: "/Paises/Chile/BANDERA CHILE.png",
    flagPosition: { top: "3%", left: "30%" },
    places: [
      { path: "/Paises/Chile/LUGAR CHILE1.png", position: { top: "70%", left: "-80%", width: "100%" } },
      { path: "/Paises/Chile/LUGAR CHILE2.png", position: { top: "40%", left: "-40%", width: "80%" } },
      { path: "/Paises/Chile/LUGAR CHILE3.png", position: { top: "15%", left: "-40%", width: "100%" } },
    ],
    position: { top: "56.63%", left: "48.91%", width: "11.03%" },
  },
  argentina: {
    id: "argentina",
    name: "Argentina",
    svgPath: "/Paises/Argentina/argentina.svg",
    flagPath: "/Paises/Argentina/BANDERA ARGENTINA.png",
    flagPosition: { top: "45%", left: "65%" },
    places: [
      { path: "/Paises/Argentina/LUGAR ARGENTINA1.png", position: { top: "10%", left: "30%", width: "40%" } },
      { path: "/Paises/Argentina/LUGAR ARGENTINA2.png", position: { top: "35%", left: "20%", width: "40%" } },
      { path: "/Paises/Argentina/LUGAR ARGENTINA3.png", position: { top: "60%", left: "15%", width: "40%" } },
    ],
    position: { top: "61.47%", left: "51.46%", width: "23.49%" },
  },
};
