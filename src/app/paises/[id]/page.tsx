import MobileCountry from "@/components/mobile/MobileCountry";
import DesktopCountry from "@/components/desktop/DesktopCountry";
import { getDestino, getPais } from "@/data";
import { getDestinationResources, getCountryHeroImage } from "@/utils/getResources";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CountryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;
  const pais = getPais(countryId);

  const dynamicDestinationsResources = pais
    ? Object.fromEntries(
        pais.destinos.map((resumen) => {
          const destino = getDestino(resumen.id);
          return [resumen.id, destino ? getDestinationResources(destino).portadaImage : null];
        })
      )
    : {};
  const dynamicHeroImage = getCountryHeroImage(countryId);

  return (
    <>
      <MobileCountry countryId={countryId} dynamicDestinationsResources={dynamicDestinationsResources} dynamicHeroImage={dynamicHeroImage} />
      <DesktopCountry countryId={countryId} dynamicDestinationsResources={dynamicDestinationsResources} dynamicHeroImage={dynamicHeroImage} />
    </>
  );
}
