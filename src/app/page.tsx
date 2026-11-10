import type { Metadata } from "next";
import MobileHome from "@/components/mobile/MobileHome";
import DesktopHome from "@/components/desktop/DesktopHome";
import { ResponsiveViewportSwitch } from "@/components/ui/ResponsiveViewportSwitch";
import { HomeSeoSummary } from "@/components/seo/HomeSeoSummary";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildWebsiteJsonLd } from "@/lib/seo/jsonLd";
import { buildHomeMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildHomeMetadata();

/**
 * Página de inicio de Rumbo Latam: inyecta datos estructurados WebSite,
 * directorio semántico accesible y el mapa interactivo montando únicamente
 * el layout del viewport activo en el cliente para máximo rendimiento.
 */
const Home = () => {
  return (
    <>
      <JsonLd data={buildWebsiteJsonLd()} />
      <HomeSeoSummary />
      <ResponsiveViewportSwitch
        mobile={<MobileHome />}
        desktop={<DesktopHome />}
      />
    </>
  );
};

export default Home;
