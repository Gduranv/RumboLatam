import MobileCountry from "@/components/mobile/MobileCountry";
import DesktopCountry from "@/components/desktop/DesktopCountry";
import { getPais } from "@/data";
import { getCountryDestinationsResources, getCountryHeroImage } from "@/utils/getResources";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CountryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;
  const pais = getPais(countryId);

  const dynamicDestinationsResources = pais ? getCountryDestinationsResources(countryId, pais.destinos) : {};
  const dynamicHeroImage = getCountryHeroImage(countryId);

  return (
    <>
      <MobileCountry countryId={countryId} dynamicDestinationsResources={dynamicDestinationsResources} dynamicHeroImage={dynamicHeroImage} />
      <DesktopCountry countryId={countryId} dynamicDestinationsResources={dynamicDestinationsResources} dynamicHeroImage={dynamicHeroImage} />
    </>
  );
}
