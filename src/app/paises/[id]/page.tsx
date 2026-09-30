import MobileCountry from "@/components/mobile/MobileCountry";
import DesktopCountry from "@/components/desktop/DesktopCountry";
import { getDestino, getPais } from "@/data";
import { getCountryResources, getDestinationResources } from "@/utils/getResources";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CountryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;
  const pais = getPais(countryId);

  // Una sola resolución de recursos para desktop y móvil: la portada del país,
  // su Gia y las portadas de los destinos del carrusel. Así ninguna versión
  // puede mostrar "falta el recurso" si la otra ya lo encontró.
  const { heroImage, giaImage } = pais
    ? getCountryResources(pais)
    : { heroImage: null, giaImage: null };

  const dynamicDestinationsResources = pais
    ? Object.fromEntries(
        pais.destinos.map((resumen) => {
          const destino = getDestino(resumen.id);
          return [resumen.id, destino ? getDestinationResources(destino).portadaImage : null];
        })
      )
    : {};

  return (
    <>
      <MobileCountry
        countryId={countryId}
        dynamicDestinationsResources={dynamicDestinationsResources}
        dynamicHeroImage={heroImage}
        dynamicGiaImage={giaImage}
      />
      <DesktopCountry
        countryId={countryId}
        dynamicDestinationsResources={dynamicDestinationsResources}
        dynamicHeroImage={heroImage}
        dynamicGiaImage={giaImage}
      />
    </>
  );
}
