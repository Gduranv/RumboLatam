import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MobileCuriosidades from "@/components/mobile/MobileCuriosidades";
import DesktopCuriosidades from "@/components/desktop/DesktopCuriosidades";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPais, isValidPais, listPaises } from "@/data";
import { buildCuriosidadesJsonLd } from "@/lib/seo/jsonLd";
import { buildCuriosidadesMetadata } from "@/lib/seo/metadata";
import { getCountryResources } from "@/utils/getResources";

interface PageProps {
  params: Promise<{ id: string }>;
}

/** Prerenderizado en el build; ver el comentario en `/destinos/[id]`. */
export const dynamicParams = false;

/**
 * Genera los parámetros estáticos únicamente para los países que tienen curiosidades.
 */
export function generateStaticParams() {
  // Sólo los países que declaran curiosidades: el resto ya daba notFound() y
  // no tiene nada que prerenderizar.
  return listPaises()
    .filter((pais) => pais.curiosidades.length > 0)
    .map((pais) => ({ id: pais.id }));
}

/**
 * Genera los metadatos SEO para la página de curiosidades de un país.
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  if (!isValidPais(id)) {
    notFound();
  }

  const pais = getPais(id);
  if (!pais || pais.curiosidades.length === 0) {
    notFound();
  }

  const { curiosidadImages } = getCountryResources(pais);
  return buildCuriosidadesMetadata(pais, curiosidadImages[0] ?? null);
}

/**
 * Página de curiosidades culturales y naturales del país con esquema FAQPage.
 */
const CuriosidadesPage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;

  if (!isValidPais(countryId)) {
    return notFound();
  }

  const pais = getPais(countryId);
  if (!pais || pais.curiosidades.length === 0) {
    return notFound();
  }

  // Las imágenes llegan ya resueltas: si el país no tiene foto de esa curiosidad
  // se pasa `null` y el componente muestra el placeholder de marca, en vez de
  // dejar un <img> apuntando a un archivo inexistente.
  const { curiosidadImages } = getCountryResources(pais);

  return (
    <>
      <JsonLd data={buildCuriosidadesJsonLd(pais)} />
      <MobileCuriosidades
        countryId={countryId}
        curiosidadImages={curiosidadImages}
      />
      <DesktopCuriosidades
        countryId={countryId}
        curiosidadImages={curiosidadImages}
      />
    </>
  );
};

export default CuriosidadesPage;
