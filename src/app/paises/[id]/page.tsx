import MobileCountry from "@/components/mobile/MobileCountry";
import DesktopCountry from "@/components/desktop/DesktopCountry";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CountryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;

  return (
    <>
      <MobileCountry countryId={countryId} />
      <DesktopCountry countryId={countryId} />
    </>
  );
}
