import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DesktopDestino from "@/components/desktop/DesktopDestino";
import MobileDestino from "@/components/mobile/MobileDestino";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDestino, getPais, listDestinos } from "@/data";
import { buildDestinoJsonLd } from "@/lib/seo/jsonLd";
import { buildDestinoMetadata } from "@/lib/seo/metadata";
import { getDestinationResources } from "@/utils/getResources";

interface DestinoPageProps {
  params: Promise<{ id: string }>;
}

/**
 * Los destinos se prerenderizan en el build, no se sirven por SSR.
 *
 * No es sólo rendimiento: `getDestinationResources()` descubre las imágenes con
 * `fs.readdirSync` sobre /public, y /public no viaja dentro de la function de
 * Netlify (pesa 235 MB y el límite es 250 MB). Si la ruta se renderizara en
 * runtime, esa lectura fallaría y cada destino mostraría "Falta el recurso".
 * Prerenderizando, el disco se lee en el build — donde /public sí está — y en
 * production sólo se sirve HTML ya generado.
 */
export const dynamicParams = false;

/**
 * Genera los parámetros estáticos de todos los destinos turísticos registrados.
 */
export function generateStaticParams() {
  return listDestinos().map((destino) => ({ id: destino.id }));
}

/**
 * Genera los metadatos SEO específicos del destino o ejecuta notFound() si no existe.
 */
export async function generateMetadata({
  params,
}: DestinoPageProps): Promise<Metadata> {
  const { id } = await params;
  const destino = getDestino(id);

  if (!destino) {
    notFound();
  }

  const pais = getPais(destino.paisId);
  const { portadaImage } = getDestinationResources(destino);
  return buildDestinoMetadata(destino, pais, portadaImage);
}

/**
 * Página de detalle de un destino turístico con manual del viajero, hospedaje,
 * fauna autóctona, actividades, galería y datos estructurados TouristDestination.
 */
const DestinoPage = async ({
  params,
}: DestinoPageProps) => {
  const resolvedParams = await params;
  const destinoId = resolvedParams.id;
  const destino = getDestino(destinoId);

  if (!destino) {
    notFound();
  }

  const pais = getPais(destino.paisId);
  const dynamicResources = getDestinationResources(destino);

  return (
    <>
      <JsonLd data={buildDestinoJsonLd(destino, pais, dynamicResources.portadaImage)} />
      {/* Versión Móvil */}
      <MobileDestino destinoId={destinoId} dynamicResources={dynamicResources} />

      {/* Versión Desktop */}
      <DesktopDestino destinoId={destinoId} dynamicResources={dynamicResources} />
    </>
  );
};

export default DestinoPage;
