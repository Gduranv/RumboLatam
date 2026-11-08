import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MobileCountry from "@/components/mobile/MobileCountry";
import DesktopCountry from "@/components/desktop/DesktopCountry";
import { RouteAssetsRegistrar } from "@/components/providers/RouteAssetsRegistrar";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDestino, getPais, listPaises } from "@/data";
import { buildPaisJsonLd } from "@/lib/seo/jsonLd";
import { buildPaisMetadata } from "@/lib/seo/metadata";
import { getCountryResources, getDestinationResources } from "@/utils/getResources";

interface PageProps {
  params: Promise<{ id: string }>;
}

/**
 * Prerenderizado en el build por la misma razón que `/destinos/[id]`: la
 * resolución de recursos lee /public con `fs`, y /public no va dentro de la
 * function de Netlify. Ver el comentario en la página de destinos.
 */
export const dynamicParams = false;

/**
 * Genera estáticamente los identificadores de todos los países registrados.
 */
export function generateStaticParams() {
  return listPaises().map((pais) => ({ id: pais.id }));
}

/**
 * Genera los metadatos SEO específicos del país o devuelve 404 si no existe.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const pais = getPais(id);

  if (!pais) {
    notFound();
  }

  const { heroImage } = getCountryResources(pais);
  return buildPaisMetadata(pais, heroImage);
}

/**
 * Página principal de un país con guía práctica antes de viajar, carrusel de
 * destinos imperdibles y datos estructurados Schema.org Country.
 */
const CountryPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;
  const pais = getPais(countryId);

  if (!pais) {
    notFound();
  }

  // Una sola resolución de recursos para desktop y móvil: la portada del país,
  // su Gia (la de escritorio y la vertical del hero móvil) y las portadas de
  // los destinos del carrusel. Así ninguna versión puede mostrar "falta el
  // recurso" si la otra ya lo encontró.
  const { heroImage, giaImage, giaMovilImage } = getCountryResources(pais);

  const dynamicDestinationsResources = Object.fromEntries(
    pais.destinos.map((resumen) => {
      const destino = getDestino(resumen.id);
      return [
        resumen.id,
        destino ? getDestinationResources(destino).portadaImage : null,
      ];
    })
  );

  // Las portadas del carrusel van al gate de navegación: son los únicos
  // assets de esta página que ni el manifiesto ni el chequeo del DOM cubren
  // (están fuera de pantalla, y el DOM sólo mira lo visible). El hero no hace
  // falta registrarlo: es lo primero que el gate visual espera en ambos
  // layouts. Las Gia quedan fuera a propósito: son GIFs de varios MB en una
  // caja de altura fija, y esperarlas alargaría el loader hasta el tope de
  // 10 s por un adorno (ver DesktopCountry y visual-ready).
  const assetsCriticos = Object.values(dynamicDestinationsResources).filter(
    (url): url is string => Boolean(url)
  );

  return (
    <>
      <JsonLd data={buildPaisJsonLd(pais, heroImage)} />
      <RouteAssetsRegistrar urls={assetsCriticos} />
      <MobileCountry
        countryId={countryId}
        dynamicDestinationsResources={dynamicDestinationsResources}
        dynamicHeroImage={heroImage}
        dynamicGiaImage={giaImage}
        dynamicGiaImageMovil={giaMovilImage}
      />
      <DesktopCountry
        countryId={countryId}
        dynamicDestinationsResources={dynamicDestinationsResources}
        dynamicHeroImage={heroImage}
        dynamicGiaImage={giaImage}
      />
    </>
  );
};

export default CountryPage;
