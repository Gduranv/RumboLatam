import Image from "next/image";
import Link from "next/link";
import MobileAnimatedCard from "@/components/cards/MobileAnimatedCard";
import MobileDestinationsCarousel from "@/components/carousels/MobileDestinationsCarousel";
import { countriesData } from "@/data/countries";

interface MobileCountryProps {
  countryId: string;
}

export default function MobileCountry({ countryId }: MobileCountryProps) {
  const countryInfo = countriesData[countryId] || {
    name: countryId.charAt(0).toUpperCase() + countryId.slice(1),
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    destinations: []
  }; // Podríamos usarlo dinámicamente luego

  return (
    <main className="w-full min-h-screen bg-[#FDF9EC] flex flex-col overflow-x-hidden relative block md:hidden">

      {/* HERO SECTION (Imagen + Header + Gia) */}
      <section className="relative w-full min-h-[550px] flex flex-col overflow-hidden">

        {/* Fondo de País (se extiende por todo el hero) */}
        <div className="absolute inset-0 z-0 h-full">
          <img
            src={countryInfo.heroImage}
            alt={`Foto de ${countryInfo.name}`}
            className="w-full h-full object-cover"
          />
          {/* Gradiente sutil para oscurecer la parte superior y asegurar lectura del texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
          {/* Gradiente inferior para fundirse con la sección verde de abajo (estirado 2px para evitar líneas de renderizado) */}
          <div className="absolute inset-x-0 -bottom-[2px] h-48 bg-gradient-to-t from-[#13522B] via-[#13522B]/80 to-transparent" />
        </div>

        {/* HEADER NARANJA CON CORTE EN V */}
        <div className="relative z-20 w-full">
          {/* Fondo Naranja con corte en V */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-[#FF7223] drop-shadow-md z-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)" }}
          ></div>

          {/* Contenido del Header */}
          <div className="relative z-10 w-full flex justify-center px-4 pt-6 pb-14">

            {/* Botón Atrás (Posicionado en el borde izquierdo) */}
            <Link href="/" className="absolute left-4 top-[96px] z-20">
              <button className="flex items-center justify-center hover:scale-105 transition-transform drop-shadow-md">
                <img src="/Paises/FlechaAtras.png" alt="Atrás" className="w-10 h-10 object-contain" />
              </button>
            </Link>

            {/* Logo Rumbo Latam Blanco */}
            <Link href="/" className="relative z-10 top-[20px] mt-1">
              <img src="/Paises/logoBlanco.png" alt="Rumbo Latam" className="w-[120px] h-auto object-contain cursor-pointer hover:scale-105 transition-transform" />
            </Link>

            {/* Botón Música (Posicionado en el borde derecho) */}
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

        {/* Textos del Hero */}
        <div className="relative z-10 px-6 pt-18 text-white font-nohemi mt-2">
          <h1 className="text-[36px] font-bold leading-tight tracking-tight drop-shadow-md">{countryInfo.name}:</h1>
          <p className="text-[20px] font-bold mt-1 pr-4 drop-shadow-md">{countryInfo.subtitle}</p>
        </div>

        {/* Gia y su Mensaje */}
        <div className="absolute top-140 left-68 -rotate-30 w-[300px] h-[340px] z-20 pointer-events-none">
          {/* Mensaje Nube (Usando el asset de la nube con el texto encima) */}
          <div className="absolute bottom-110 rotate-20 right-28 w-[120px] origin-bottom-right drop-shadow-lg">
            <div className="relative">
              <img src="/Paises/NubeParaMensaje.png" alt="Nube" className="w-full h-auto" />
              <p className="absolute inset-0 flex items-center justify-center text-center text-[#13522B] font-bold text-[12px] leading-tight px-4 pt-2 pb-6 rotate-[-10deg] font-nohemi">
                {countryInfo.giaMessage}
              </p>
            </div>
          </div>

          {/* Gia Imagen (GiaSaluda.png) */}
          <img
            src="/Paises/GiaSaluda.png"
            alt="Gia Saluda"
            className="absolute bottom-[-10px] right-[-10px] w-[180px] h-auto object-contain drop-shadow-xl"
          />
        </div>

      </section>

      {/* SECCIÓN: ANTES DE VIAJAR */}
      <section
        className="w-full bg-[#13522B] px-4 pt-12 pb-24 relative z-10 -mt-[1px]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 50% 100%, 0 calc(100% - 40px))" }}
      >
        <h2 className="text-white text-3xl font-bold tracking-tight font-nohemi text-center mb-8">
          Antes de viajar:
        </h2>

        <div className="flex flex-col gap-y-4">
          <MobileAnimatedCard
            title="Moneda"
            description={
              <>
                El bolívar (VES) es la moneda oficial, aunque el uso del dólar estadounidense (USD) en efectivo está ampliamente extendido en comercios y servicios.
              </>
            }
            iconSrc="/Paises/icon moneda.png"
            iconAlt="Icono Moneda"
          />

          <MobileAnimatedCard
            title="Gastronomía"
            description={
              <>
                Predomina una cocina basada en el maíz, las carnes sazonadas y los quesos frescos, caracterizada por un balance perfecto de sabores intensos.
              </>
            }
            iconSrc="/Paises/icono gastronomia.png"
            iconAlt="Icono Gastronomía"
          />

          <MobileAnimatedCard
            title="Idioma"
            description={
              <>
                <strong>Español,</strong> hablado con una calidez única y lleno de expresiones coloquiales icónicas que te harán sentir como en casa.
              </>
            }
            iconSrc="/Paises/idioma.png"
            iconAlt="Icono Idioma"
          />

          <MobileAnimatedCard
            title="Estaciones"
            description={
              <>
                Al ser un país tropical, no existen las estaciones tradicionales, sino dos períodos climáticos: el de sequía <strong>(verano)</strong> y el de lluvias <strong>(invierno)</strong>.
              </>
            }
            iconSrc="/Paises/icon estaciones.png"
            iconAlt="Icono Estaciones"
          />
        </div>
      </section>

      {/* SECCIÓN: 3 DESTINOS */}
      <section className="w-full pt-10 pb-10 flex flex-col items-center overflow-hidden bg-[#FFF7E2] -mt-[10px]">
        <h2 className="text-[#13522B] text-3xl font-bold tracking-tight mb-8 font-nohemi text-center px-4">
          3 destinos que no te puedes perder
        </h2>
        <MobileDestinationsCarousel destinations={countryInfo.destinations} />
      </section>

      {/* FOOTER */}
      <footer className="w-full flex-grow relative z-10 bg-[#B5E3F8] pt-8 pb-6 px-6 mt-auto">
        {/* Ola SVG Arriba */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 -translate-y-[99%]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#B5E3F8"></path>
          </svg>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[#1D799B] text-[9px] leading-snug tracking-wide font-sans text-left font-medium">
            <p className="font-bold">© 2024 Rumbo Latam.</p>
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
}
