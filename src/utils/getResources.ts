import fs from "fs";
import path from "path";
import { DestinoData } from "@/data/destinations";

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getDestinationResources(destino: DestinoData) {
  const countryFolderName = capitalizeFirstLetter(destino.countryId); // e.g. "Venezuela"
  const destinoFolderName = destino.folderName; // e.g. "canaima"

  const basePath = path.join(process.cwd(), "public", "Paises", countryFolderName, destinoFolderName);
  const basePathUrl = `/Paises/${countryFolderName}/${destinoFolderName}`;

  const readFolder = (folderName: string): string[] => {
    const fullPath = path.join(basePath, folderName);
    try {
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
        const files = fs.readdirSync(fullPath);
        // Filtrar solo imágenes (puedes ajustar las extensiones si es necesario)
        const images = files.filter(file => /\.(png|jpe?g|webp|gif|svg)$/i.test(file));
        return images.map(file => `${basePathUrl}/${folderName}/${file}`);
      }
    } catch (error) {
      console.error(`Error reading directory ${fullPath}:`, error);
    }
    return [];
  };

  const portadaImages = readFolder("portada");
  const portadaImage = portadaImages.length > 0 ? portadaImages[0] : null;

  const galeriaFiles = readFolder("galeria");
  const galeriaImages = galeriaFiles.map((file, index) => ({
    src: file,
    alt: `Galería ${destino.name} ${index + 1}`
  }));

  const animalesImages = readFolder("animales");
  const hospedajeImages = readFolder("hospedaje");
  const actividadesImages = readFolder("actividades");

  return {
    portadaImage,
    galeriaImages,
    animalesImages,
    hospedajeImages,
    actividadesImages
  };
}

export function getCountryDestinationsResources(countryId: string, destinos: { id: string }[]) {
  const countryFolderName = capitalizeFirstLetter(countryId);
  const resources: Record<string, string | null> = {};

  // Necesitamos importar getDestino para sacar el folderName real si lo tiene, pero
  // para evitar dependencias circulares, podemos intentar leer la carpeta usando el ID,
  // y si no existe, usar el camelCase del ID.
  const toCamelCase = (str: string) => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

  destinos.forEach((destino) => {
    let folderName = toCamelCase(destino.id);
    // Para capa extra de seguridad probamos el folderName
    const basePath = path.join(process.cwd(), "public", "Paises", countryFolderName, folderName, "portada");
    let portadaImage = null;

    try {
      if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
        const files = fs.readdirSync(basePath).filter(file => /\.(png|jpe?g|webp|gif|svg)$/i.test(file));
        if (files.length > 0) {
          portadaImage = `/Paises/${countryFolderName}/${folderName}/portada/${files[0]}`;
        }
      } else {
        // Fallback por si la carpeta se llama exactamente igual al id (e.g. "colonia-tovar")
        const fallbackPath = path.join(process.cwd(), "public", "Paises", countryFolderName, destino.id, "portada");
        if (fs.existsSync(fallbackPath) && fs.statSync(fallbackPath).isDirectory()) {
          const files = fs.readdirSync(fallbackPath).filter(file => /\.(png|jpe?g|webp|gif|svg)$/i.test(file));
          if (files.length > 0) {
            portadaImage = `/Paises/${countryFolderName}/${destino.id}/portada/${files[0]}`;
          }
        }
      }
    } catch (e) {
      console.error(`Error reading directory for destination ${destino.id}:`, e);
    }

    resources[destino.id] = portadaImage;
  });

  return resources;
}

export function getCountryHeroImage(countryId: string) {
  const countryFolderName = capitalizeFirstLetter(countryId);
  // Buscar en carpeta "portada" o "Portada"
  const tryPaths = ["portada", "Portada"];
  let heroImage = null;

  for (const folder of tryPaths) {
    const basePath = path.join(process.cwd(), "public", "Paises", countryFolderName, folder);
    try {
      if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
        const files = fs.readdirSync(basePath).filter(file => /\.(png|jpe?g|webp|gif|svg)$/i.test(file));
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
