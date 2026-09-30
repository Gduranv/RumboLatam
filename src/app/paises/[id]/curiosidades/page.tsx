import MobileCuriosidades from "@/components/mobile/MobileCuriosidades";
import DesktopCuriosidades from "@/components/desktop/DesktopCuriosidades";
import { getPais, isValidPais, listPaises } from "@/data";
import { getCountryResources } from "@/utils/getResources";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

/** Prerenderizado en el build; ver el comentario en `/destinos/[id]`. */
export const dynamicParams = false;

export function generateStaticParams() {
  // Sólo los países que declaran curiosidades: el resto ya daba notFound() y
  // no tiene nada que prerenderizar.
  return listPaises()
    .filter((pais) => pais.curiosidades.length > 0)
    .map((pais) => ({ id: pais.id }));
}

export default async function CuriosidadesPage({ params }: PageProps) {
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
      <MobileCuriosidades countryId={countryId} curiosidadImages={curiosidadImages} />
      <DesktopCuriosidades countryId={countryId} curiosidadImages={curiosidadImages} />
    </>
  );
}
