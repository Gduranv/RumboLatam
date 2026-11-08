import type { Metadata } from "next";
import MobileHome from "@/components/mobile/MobileHome";
import DesktopHome from "@/components/desktop/DesktopHome";
import { HomeSeoSummary } from "@/components/seo/HomeSeoSummary";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebsiteJsonLd } from "@/lib/seo/jsonLd";
import { buildHomeMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildHomeMetadata();

/**
 * Página de inicio de Rumbo Latam: inyecta datos estructurados WebSite,
 * directorio semántico accesible y el mapa interactivo en móvil y escritorio.
 */
const Home = () => {
  return (
    <>
      <JsonLd data={buildWebsiteJsonLd()} />
      <HomeSeoSummary />
      <MobileHome />
      <DesktopHome />
    </>
  );
};

export default Home;
