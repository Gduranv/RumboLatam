import MobileCuriosidades from "@/components/mobile/MobileCuriosidades";
import DesktopCuriosidades from "@/components/desktop/DesktopCuriosidades";
import { getPais, isValidPais } from "@/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CuriosidadesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const countryId = resolvedParams.id;

  if (!isValidPais(countryId)) {
    return notFound();
  }

  if ((getPais(countryId)?.curiosidades ?? []).length === 0) {
    return notFound();
  }

  return (
    <>
      <MobileCuriosidades countryId={countryId} />
      <DesktopCuriosidades countryId={countryId} />
    </>
  );
}