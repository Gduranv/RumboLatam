import type { Metadata } from "next";
import MobileNosotras from "@/components/mobile/MobileNosotras";
import DesktopNosotras from "@/components/desktop/DesktopNosotras";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAboutPageJsonLd } from "@/lib/seo/jsonLd";
import { buildNosotrasMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildNosotrasMetadata();

/**
 * Página institucional Nosotras: presenta el equipo detrás de Rumbo Latam,
 * el contexto académico URBE y la misión cultural del proyecto.
 */
const Nosotras = () => {
  return (
    <>
      <JsonLd data={buildAboutPageJsonLd()} />
      <h1 className="sr-only">
        Sobre Nosotras y qué hay detrás del proyecto Rumbo Latam
      </h1>
      <MobileNosotras />
      <DesktopNosotras />
    </>
  );
};

export default Nosotras;
