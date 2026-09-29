import fs from "fs";
import path from "path";
import type { DestinoData } from "@/types";

const IMAGE_RE = /\.(png|jpe?g|webp|gif|svg)$/i;

/** Nombre de carpeta en /public/Paises que no coincide con el id del país. */
const CARPETA_PAIS: Record<string, string> = {
  repdominicana: "RepublicaDominicana",
};

/** Prefijos de archivo que identifican una sección cuando el destino usa carpeta plana. */
const PREFIJOS: Record<string, string[]> = {
  galeria: ["galeria", "carruselgaleri", "carruselgaleria"],
  hospedaje: ["hospedaje", "hospedaj"],
  animales: ["animales"],
  actividades: ["actividades"],
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Carpeta de /public/Paises para un id de país. */
function carpetaPais(paisId: string) {
  return CARPETA_PAIS[paisId] ?? capitalizeFirstLetter(paisId);
}

/** Convierte una URL pública (/Paises/...) en su ruta absoluta dentro de /public. */
function toDiskPath(publicUrl: string) {
  return path.join(
    process.cwd(),
    "public",
    publicUrl.replace(/^\/+/, "").split("/").join(path.sep)
  );
}

/** ¿Existe en /public el archivo al que apunta esta URL? */
export function existe(publicUrl: string) {
  try {
    return fs.existsSync(toDiskPath(publicUrl));
  } catch {
    return false;
  }
}

/** Orden estable y colación española, para que el build sea reproducible. */
function ordenar(nombres: string[]) {
  return [...nombres].sort((a, b) => a.localeCompare(b, "es", { numeric: true }));
}

/** Lista las imágenes de una carpeta pública. Devuelve URLs, o [] si no existe. */
function readFolder(publicUrl: string): string[] {
  const fullPath = toDiskPath(publicUrl);
  try {
    if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isDirectory()) return [];
    return ordenar(
      fs
        .readdirSync(fullPath)
        .filter((file) => IMAGE_RE.test(file))
    ).map((file) => `${publicUrl}/${file}`);
  } catch (error) {
    console.error(`Error reading directory ${fullPath}:`, error);
    return [];
  }
}

/**
 * Algunos destinos dejan todas las imágenes en la raíz de su carpeta y las
 * distinguen sólo por el prefijo del archivo (GaleriaCarrusel1.webp, Hospedaje2.webp, ...).
 * Esta función recupera esa sección sin necesidad de mover los archivos.
 */
function readFlat(publicUrl: string, seccion: string): string[] {
  const base = toDiskPath(publicUrl);
  const prefijos = PREFIJOS[seccion];
  if (!prefijos) return [];
  try {
    if (!fs.existsSync(base) || !fs.statSync(base).isDirectory()) return [];
      return ordenar(
        fs
          .readdirSync(base)
          .filter((file) => {
            if (!IMAGE_RE.test(file)) return false;
            const nombre = path.basename(file, path.extname(file)).toLowerCase();
            return prefijos.some((p) => nombre.startsWith(p));
          })
      ).map((file) => `${publicUrl}/${file}`);
  } catch (error) {
    console.error(`Error reading flat directory ${base}:`, error);
    return [];
  }
}

/**
 * Carpeta pública donde vive el destino, deducida de su hero.
 * Ej.: "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL/PortadaJardinB.webp"
 *   -> "/Paises/Brasil/Jardín Botánico de Curitiba BRASIL"
 */
function carpetaDelDestino(destino: DestinoData): string | null {
  const hero = destino.hero?.src;
  if (!hero) return null;
  const lastSlash = hero.lastIndexOf("/");
  return lastSlash > 0 ? hero.slice(0, lastSlash) : null;
}

/**
 * Carpetas candidatas donde pueden vivir los assets de un destino, en orden de
 * preferencia: la deducida del hero, y las convenciones históricas por id.
 */
function carpetasCandidatas(destino: DestinoData): string[] {
  const carpeta = carpetaDelDestino(destino);
  const pais = carpetaPais(destino.paisId);
  // Las carpetas de Venezuela usan camelCase (coloniaTovar), no el id (colonia-tovar).
  const nombres = [...new Set([destino.id, destino.id.replace(/-([a-z])/g, (m) => m[1].toUpperCase())])];
  return [
    ...(carpeta ? [carpeta] : []),
    ...nombres.flatMap((nombre) => [`/Paises/${pais}/${nombre}`, `/Paises/${destino.paisId}/${nombre}`]),
  ];
}

/**
 * Imágenes de un destino. Cada sección se resuelve en cascada:
 *   1. el dato, en su orden curado, descartando rutas que no existan en /public
 *   2. la carpeta deducida del hero:        <carpeta>/<seccion>
 *   3. la convención histórica:             /Paises/{paisId}/{id}/<seccion>
 *   4. la raíz de la carpeta, por prefijo:  <carpeta>/Galeria*.webp
 * Así un destino nuevo funciona sólo con sus rutas en el dato, y los de
 * Venezuela —cuyos datos aún apuntan a rutas viejas— siguen usando su carpeta.
 */
export function getDestinationResources(destino: DestinoData) {
  const carpetas = carpetasCandidatas(destino);
  const carpetaHero = carpetaDelDestino(destino);

  const seccion = (delDato: string[], nombre: string): string[] => {
    const vivos = delDato.filter(existe);
    if (vivos.length) return vivos;

    for (const base of carpetas) {
      const encontradas = readFolder(`${base}/${nombre}`);
      if (encontradas.length) return encontradas;
    }
    // Último recurso: la sección vive suelta en la raíz, con prefijo en el nombre.
    return carpetaHero ? readFlat(carpetaHero, nombre) : [];
  };

  // La portada suele ser un archivo suelto en la raíz de la carpeta del destino.
  const heroSrc = destino.hero?.src;
  let portadaImages: string[] = heroSrc && existe(heroSrc) ? [heroSrc] : [];

  if (!portadaImages.length) {
    for (const base of carpetas) {
      portadaImages = readFolder(`${base}/portada`);
      if (portadaImages.length) break;
    }
  }

  // Último recurso: la sección vive suelta en la raíz, con prefijo en el nombre.
  if (!portadaImages.length && carpetaHero) {
    const raiz = readFolder(carpetaHero).filter((url) => /\/Portada/i.test(url));
    portadaImages = raiz.length ? raiz : readFolder(carpetaHero);
  }

  const galeriaImages = seccion(
    (destino.galeria ?? []).map((imagen) => imagen.src),
    "galeria"
  ).map((src, index) => ({
    src,
    alt: `Galería ${destino.name} ${index + 1}`,
  }));

  return {
    portadaImage: portadaImages[0] ?? null,
    galeriaImages,
    animalesImages: seccion(destino.animales?.imagenes ?? [], "animales"),
    hospedajeImages: seccion(destino.hospedaje?.imagenes ?? [], "hospedaje"),
    actividadesImages: seccion(destino.actividades?.imagenes ?? [], "actividades"),
  };
}

export function getCountryHeroImage(countryId: string) {
  const countryFolderName = carpetaPais(countryId);
  // Buscar en carpeta "portada" o "Portada"
  const tryPaths = ["portada", "Portada"];
  const raiz = path.join(process.cwd(), "public", "Paises", countryFolderName);
  let heroImage = null;

  try {
    if (fs.existsSync(raiz) && fs.statSync(raiz).isDirectory()) {
      const archivos = ordenar(
        fs.readdirSync(raiz).filter((f) => /\.(png|jpe?g|webp|gif|svg)$/i.test(f))
      );
      // La portada del país puede estar suelta en la raíz (p. ej. "PortadaARGENTINA.webp").
      const enRaiz = archivos.filter((f) => /^portada/i.test(f));
      if (enRaiz.length > 0) {
        return `/Paises/${countryFolderName}/${enRaiz[0]}`;
      }
    }
  } catch (e) {
    console.error(`Error reading country root for hero ${countryId}:`, e);
  }

  for (const folder of tryPaths) {
    const basePath = path.join(process.cwd(), "public", "Paises", countryFolderName, folder);
    try {
      if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
        // Ordenar es obligatorio: readdirSync no garantiza orden, y sin esto la
        // portada de un país cambia entre builds (p. ej. Venezuela tiene a la vez
        // FotoVenezuela.png y HeroVenezuela.jpg en la misma carpeta).
        const files = ordenar(
          fs.readdirSync(basePath).filter((file) => /\.(png|jpe?g|webp|gif|svg)$/i.test(file))
        );
        if (files.length > 0) {
          heroImage = `/Paises/${countryFolderName}/${folder}/${files[0]}`;
          break; // Si la encontró, terminamos de buscar
        }
      }
    } catch (e) {
      console.error(`Error reading directory for country hero ${countryId}:`, e);
    }
  }

  return heroImage;
}
