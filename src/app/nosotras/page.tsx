import type { Metadata } from "next";
import MobileNosotras from "@/components/mobile/MobileNosotras";
import DesktopNosotras from "@/components/desktop/DesktopNosotras";
import { ResponsiveViewportSwitch } from "@/components/ui/ResponsiveViewportSwitch";
import { RouteAssetsRegistrar } from "@/components/providers/RouteAssetsRegistrar";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildAboutPageJsonLd } from "@/lib/seo/jsonLd";
import { buildNosotrasMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildNosotrasMetadata();

const CRITICAL_NOSOTRAS_ASSETS = [
  "/Nosotras/fondo.png",
  "/Nosotras/foto-hero-1.png",
  "/Nosotras/foto-hero-2.png",
  "/Nosotras/card1-foto.png",
  "/Nosotras/card1-strip.png",
  "/Nosotras/card3-foto.png",
  "/Nosotras/card3-foto-top.png",
] as const;

const DEFERRED_NOSOTRAS_ASSETS = [
  "/Nosotras/coll-photo-152.png",
  "/Nosotras/coll-photo-153.png",
  "/Nosotras/coll-photo-151.png",
  "/Nosotras/coll-photo-150.png",
  "/Nosotras/coll-photo-148.png",
] as const;

/**
 * Página institucional Nosotras: presenta el equipo detrás de Rumbo Latam,
 * el contexto académico URBE y la misión cultural del proyecto asegurando
 * que el layout inactivo no consuma memoria ni peticiones de red duplicadas.
 */
const Nosotras = () => {
  return (
    <>
      <JsonLd data={buildAboutPageJsonLd()} />
      <RouteAssetsRegistrar
        urls={CRITICAL_NOSOTRAS_ASSETS}
        deferredUrls={DEFERRED_NOSOTRAS_ASSETS}
      />
      <h1 className="sr-only">
        Sobre nosotras y qué hay detrás del proyecto Rumbo Latam
      </h1>
      <ResponsiveViewportSwitch
        mobile={<MobileNosotras />}
        desktop={<DesktopNosotras />}
      />
    </>
  );
};

export default Nosotras;
