import Link from "next/link";
import MobileManualCarousel from "@/components/carousels/MobileManualCarousel";
import MobileHospedajeCard from "@/components/cards/MobileHospedajeCard";
import MobileInfoCard from "@/components/cards/MobileInfoCard";
import MobileStampCarousel from "@/components/carousels/MobileStampCarousel";
import { destinosData } from "@/data/destinations";

interface MobileDestinoProps {
  destinoId: string;
}

/** Versión móvil de la página de destino turístico */
const MobileDestino = ({ destinoId }: MobileDestinoProps) => {
  const destino = destinosData[destinoId] || destinosData["canaima"];
  const backToCountry = `/paises/${destino.countryId || "venezuela"}`;

  /** Imágenes fallback para secciones sin datos */
  const hospedajeImages = destino.hospedaje.images.length > 0
    ? destino.hospedaje.images
    : [
      "/Paises/Venezuela/Hospedaje/hospedajeCanaima1.webp",
      "/Paises/Venezuela/Hospedaje/hospedajeCanaima2.webp",
      "/Paises/Venezuela/Hospedaje/hospedajeCanaima3.webp",
    ];

  const animalesImages = destino.animales.images.length > 0
    ? destino.animales.images
    : [
      "/Paises/Venezuela/Animales/AnimalesCanaima1.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima2.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima3.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima4.webp",
      "/Paises/Venezuela/Animales/AnimalesCanaima5.webp",
    ];

  const actividadesImages = destino.actividades.images.length > 0
    ? destino.actividades.images
    : [
      "/Paises/Venezuela/Actividades/ActCanaima1.webp",
      "/Paises/Venezuela/Actividades/ActCanaima2.webp",
      "/Paises/Venezuela/Actividades/ActCanaima3.webp",
      "/Paises/Venezuela/Actividades/ActCanaima4.webp",
    ];

  /** Cards del manual del viajero para el carrusel */
  const manualCards = [
    {
      title: "Clima",
      description: destino.manual.clima,
      iconSrc: "/Paises/icono clima.png",
      iconAlt: "Icono Clima",
    },
    {
      title: "Transporte",
      description: destino.manual.transporte,
      iconSrc: "/Paises/icon transporte.png",
      iconAlt: "Icono Transporte",
    },
    {
      title: "Mejor época",
      description: destino.manual.mejorEpoca,
      iconSrc: "/Paises/icon mejor epoca.png",
      iconAlt: "Icono Mejor Época",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#FFF7E2] flex flex-col overflow-x-hidden relative block md:hidden">

      {/* ============================================= */}
      {/* HERO SECTION (Imagen + Header + Textos)       */}
      {/* ============================================= */}
      <section
        className="relative w-full min-h-[520px] flex flex-col overflow-hidden z-20"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 50% 100%, 0 calc(100% - 40px))" }}
      >

        {/* Fondo de Destino */}
        <div className="absolute inset-0 z-0 h-full">
          <img
            src={destino.heroImage}
            alt={`Foto de ${destino.name}`}
            className="w-full h-full object-cover"
          />
          {/* Gradiente superior para legibilidad del header */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        </div>

        {/* HEADER NARANJA CON CORTE EN V */}
        <div className="relative z-20 w-full">
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#FF7223] drop-shadow-md z-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)" }}
          ></div>

          <div className="relative z-10 w-full flex justify-center px-4 pt-6 pb-14">
            {/* Botón Atrás */}
            <Link href={backToCountry} className="absolute left-4 top-[96px] z-20">
              <button className="flex items-center justify-center hover:scale-105 transition-transform drop-shadow-md">
                <img src="/Paises/FlechaAtras.png" alt="Atrás" className="w-10 h-10 object-contain" />
              </button>
            </Link>

            {/* Logo Rumbo Latam Blanco */}
            <Link href="/" className="relative z-10 top-[20px] mt-1">
              <img src="/Paises/logoBlanco.png" alt="Rumbo Latam" className="w-[120px] h-auto object-contain cursor-pointer hover:scale-105 transition-transform" />
            </Link>

            {/* Botón Música */}
            <a
              href="https://open.spotify.com/playlist/5bywhsxxSqQbOoneg9vdPI?si=UEAJ74YLRTihwv_shlzdEw&utm_source=whatsapp&pi=BKfbh5UxS_yP8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 top-[96px] z-20 flex items-center justify-center hover:scale-105 transition-transform drop-shadow-md"
            >
              <img src="/ICONO-MUSIC.png" alt="Música" className="w-10 h-10 object-contain" />
            </a>
          </div>
        </div>

        {/* Textos del Hero (centrados) */}
        <div className="relative z-10 px-6 pt-2 flex flex-col items-center text-center font-nohemi mt-8 flex-1 justify-center">
          <h1 className="text-[#FFF7E2] text-[24px] font-bold leading-tight tracking-tight drop-shadow-lg capitalize">
            {destino.name}:
          </h1>
          <p className="text-white font-sans font-semibold text-[16px] mt-1 drop-shadow-md">
            {destino.tag}
          </p>
        </div>
      </section>

      {/* ============================================= */}
      {/* SECCIÓN: MANUAL DEL VIAJERO (Verde)           */}
      {/* ============================================= */}
      <section
        className="w-full bg-[#13522B] pt-[70px] pb-24 relative z-10 -mt-[45px]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 50% 100%, 0 calc(100% - 40px))" }}
      >
        <h2 className="text-[#F1E4C4] text-[20px] font-bold font-nohemi tracking-tight text-center mb-2">
          Manual del viajero
        </h2>
        <p className="text-[#A3DBEF] text-[12px] font-normal font-nohemi text-center mb-6">
          Detalles esenciales para planificar tu ruta
        </p>

        {/* Carrusel deslizable: muestra 1 card a la vez */}
        <MobileManualCarousel cards={manualCards} />
      </section>

      {/* ============================================= */}
      {/* SECCIÓN: HOSPEDAJE                            */}
      {/* ============================================= */}
      <section className="w-full px-4 pt-8 pb-6 bg-[#FFF7E2] -mt-[10px]">
        <MobileHospedajeCard
          hotels={destino.hospedaje.hotels}
          images={hospedajeImages}
        />
      </section>

      {/* ============================================= */}
      {/* SECCIÓN: ANIMALES AUTÓCTONOS (outline)        */}
      {/* ============================================= */}
      <section className="w-full px-4 py-4 bg-[#FFF7E2]">
        <MobileInfoCard
          title="Animales autóctonos"
          description={destino.animales.description}
          images={animalesImages}
          iconSrc="/Paises/icon animales.png"
          iconAlt="Icono Animales"
          iconPosition="right"
          filled={false}
        />
      </section>

      {/* ============================================= */}
      {/* SECCIÓN: ACTIVIDADES PARA HACER (filled)      */}
      {/* ============================================= */}
      <section className="w-full px-4 py-4 bg-[#FFF7E2]">
        <MobileInfoCard
          title="Actividades para hacer"
          description={destino.actividades.description}
          images={actividadesImages}
          iconSrc="/Paises/icon act por hacer.png"
          iconAlt="Icono Actividades"
          iconPosition="left"
          filled={true}
        />
      </section>

      {/* ============================================= */}
      {/* SECCIÓN: GALERÍA DE SELLOS POSTALES            */}
      {/* ============================================= */}
      {destino.galeriaImages && destino.galeriaImages.length > 0 && (
        <section className="w-full pt-6 pb-6 flex flex-col items-center bg-[#FFF7E2]">
          <MobileStampCarousel images={destino.galeriaImages} />
        </section>
      )}

      {/* ============================================= */}
      {/* FOOTER                                        */}
      {/* ============================================= */}
      <footer className="w-full flex-grow relative z-10 bg-[#B5E3F8] pt-8 pb-6 px-6 mt-auto">
        {/* Ola SVG Arriba */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[99%]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#B5E3F8"></path>
          </svg>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[#1D799B] text-[9px] leading-snug tracking-wide font-sans text-left font-medium">
            <p className="font-bold">© 2026 Rumbo Latam.</p>
            <p>Trabajo Especial de Grado - URBE.</p>
            <p>Todos los derechos reservados.</p>
          </div>
          <div className="w-[80px]">
            <img src="/Paises/LogoURBE.png" alt="Logo URBE" className="w-full h-auto object-contain" />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default MobileDestino;
