export interface ImageSource {
  src: string;
  alt: string;
}

export interface AntesDeViajarCard {
  title: string;
  /** Texto con negritas marcadas como **así** (ver <RichText />) */
  description: string;
  icon: ImageSource;
}

export interface DestinoResumen {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: ImageSource;
}

export interface Curiosidad {
  /** Imagen ilustrativa de la curiosidad. Si `src` está vacío se muestra un placeholder de marca. */
  image: ImageSource;
  /** Cuerpo de la curiosidad, usualmente empezando con "¿Sabías que...?" */
  text: string;
}

export interface PaisData {
  id: string;
  name: string;
  subtitle: string;
  hero: ImageSource;
  /** Mensaje de Gia propio de cada país. Lo completa el equipo de contenido manualmente. */
  giaMessage: string;
  antesDeViajar: AntesDeViajarCard[];
  destinos: DestinoResumen[];
  /** Datos curiosos del país (ruta /paises/[id]/curiosidades). */
  curiosidades: Curiosidad[];
  /** Color de acento de la sección de curiosidades: banda, botón y tinte de las cards (default dorado #D4AF37). */
  curiosidadesAccent?: string;
  /** Color del nombre del país junto a la bandera en curiosidades (default verde #13522B). */
  curiosidadesNameColor?: string;
}

export interface ManualCard {
  title: string;
  /** Texto con negritas marcadas como **así** (ver <RichText />) */
  description: string;
  icon: ImageSource;
}

export interface Hotel {
  name: string;
  tipo: string;
  /** Entre 1 y 5, admite decimales (ej.: 4.5) */
  estrellas: number;
}

export interface HospedajeData {
  hoteles: Hotel[];
  imagenes: string[];
}

export interface ImagenesData {
  description: string;
  imagenes: string[];
}

export interface DestinoData {
  id: string;
  paisId: string;
  name: string;
  tag: string;
  hero: ImageSource;
  manualDelViajero: ManualCard[];
  hospedaje: HospedajeData;
  animales: ImagenesData;
  actividades: ImagenesData;
  galeria: ImageSource[];
}