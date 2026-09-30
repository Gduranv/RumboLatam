import Image from "next/image";
import Link from "next/link";
import MobileAnimatedCard from "@/components/cards/MobileAnimatedCard";
import MobileDestinationsCarousel from "@/components/carousels/MobileDestinationsCarousel";
import RichText from "@/components/ui/RichText";
import { getPais, getPlaylistUrl } from "@/data";
import { DEFAULT_ANTES_DE_VIAJAR, GIA_PAIS_FALLBACK, SUBTITLE_FALLBACK } from "@/data/paisDefaults";

interface MobileCountryProps {
  countryId: string;
  dynamicDestinationsResources: Record<string, string | null>;
  dynamicHeroImage: string | null;
  dynamicGiaImage: string | null;
}

/**
 * Página de país en móvil. Es el espejo de `DesktopCountry`: ambos leen el
 * mismo `PaisData` y reciben las mismas imágenes ya resueltas por la ruta, así
 * que la única diferencia entre un país y otro —o entre móvil y escritorio— es
 * el contenido del dato, nunca el markup.
 */
export default function MobileCountry({
  countryId,
  dynamicDestinationsResources,
  dynamicHeroImage,
  dynamicGiaImage,
}: MobileCountryProps) {
  const pais = getPais(countryId);

  const name = pais?.name ?? countryId.charAt(0).toUpperCase() + countryId.slice(1);
  const subtitle = pais?.subtitle || SUBTITLE_FALLBACK;
  const heroImage = dynamicHeroImage;
  const giaSrc = dynamicGiaImage ?? pais?.giaPais?.src ?? GIA_PAIS_FALLBACK.src;
  const giaAlt = pais?.giaPais?.alt ?? GIA_PAIS_FALLBACK.alt;
  const giaMessage = pais?.giaMessage;
  const antesDeViajar = pais?.antesDeViajar?.length ? pais.antesDeViajar : DEFAULT_ANTES_DE_VIAJAR;
  const destinations = (pais?.destinos ?? []).map((destino) => ({
    id: destino.id,
    title: destino.title,
    tag: destino.tag,
    description: destino.description,
    imageSrc: dynamicDestinationsResources[destino.id] ?? destino.image.src,
  }));

  return (
    <main className="w-full min-h-screen bg-[#FDF9EC] flex flex-col overflow-x-hidden relative block md:hidden">

      {/* HERO SECTION (Imagen + Header + Gia) */}
      <section className="relative w-full min-h-[550px] flex flex-col overflow-hidden">

        {/* Fondo de País (se extiende por todo el hero) */}
        {/* Degradado de marca: es lo que se ve mientras el hero descarga, para que
            el hueco no parezca una imagen rota. */}
        <div className="absolute inset-0 z-0 h-full bg-gradient-to-b from-[#1a3d2b] to-[#0b1f14]">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={`Foto de ${name}`}
              fill
              loading="eager"
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white text-3xl font-bold font-nohemi">
              Falta el recurso
            </div>
          )}
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

            {/* Logo Rumbo Latam Blanco → inicio */}
            <Link
              href="/"
              aria-label="Ir al inicio"
              className="relative z-10 block w-[120px] top-[20px] mt-1 cursor-pointer hover:scale-105 transition-transform"
            >
              <img src="/Paises/logoBlanco.png" alt="Rumbo Latam" className="w-full h-auto object-contain" />
            </Link>

            {/* Botón Curiosidades */}
            <Link href={`/paises/${countryId}/curiosidades`} className="absolute right-4 top-[95px] z-20">
              <button
                type="button"
                aria-label="Curiosidades"
                className="flex items-center justify-center hover:scale-105 transition-transform drop-shadow-md w-10 h-10"
              >
                <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
                  <path d="M40.1373 44.466H23.863V50.9565H40.1373V44.466Z" fill="#FF7223" />
                  <path d="M40.1376 13.0441H23.8634L15.7259 27.1381L23.8634 41.232H40.1376L48.2744 27.1381L40.1376 13.0441ZM33.253 35.7831H29.8898V32.4294H33.253V35.7831ZM38.8589 25.2005C38.7524 25.6009 38.6118 25.9552 38.4359 26.2636C38.26 26.5719 38.0569 26.8405 37.8262 27.0694C37.5954 27.2982 37.3533 27.4994 37.0998 27.6728C36.847 27.8462 36.5922 27.9975 36.3369 28.1261C36.0815 28.2547 35.8419 28.3701 35.6175 28.4723L35.1578 28.6866C34.917 28.797 34.6818 28.9105 34.4535 29.0265C34.2246 29.1431 34.0216 29.2736 33.8438 29.4187C33.666 29.5637 33.5229 29.7264 33.4151 29.9061C33.3066 30.0858 33.2524 30.2963 33.2524 30.5372V31.1072H29.8955V30.1885C29.8955 29.7881 29.9384 29.43 30.0241 29.1135C30.1099 28.797 30.2265 28.5132 30.3734 28.2623C30.5204 28.0107 30.6919 27.7894 30.8879 27.5977C31.084 27.4061 31.2902 27.2333 31.5065 27.0801C31.7228 26.9269 31.9447 26.79 32.1711 26.6696C32.398 26.5492 32.6175 26.4382 32.8299 26.3361L33.3136 26.0908C33.5588 25.9685 33.7978 25.8449 34.0304 25.7201C34.2631 25.5958 34.4693 25.4502 34.649 25.285C34.8287 25.1198 34.9731 24.9275 35.0809 24.7093C35.1893 24.4912 35.2436 24.2283 35.2436 23.9224C35.2436 23.5832 35.166 23.2774 35.0109 23.0038C34.8558 22.7301 34.637 22.4962 34.3558 22.302C34.0739 22.1085 33.7341 21.9584 33.3356 21.8518C32.9371 21.7459 32.4951 21.6923 32.009 21.6923C31.4781 21.6923 31.0065 21.7585 30.5941 21.8916C30.1818 22.0246 29.8369 22.2283 29.5588 22.5044C29.2814 22.78 29.0702 23.1293 28.9252 23.5523C28.7801 23.9748 28.7076 24.4742 28.7076 25.0504V25.3323H24.9832V24.9647C24.9832 23.8821 25.137 22.937 25.446 22.128C25.7543 21.319 26.2089 20.6457 26.8091 20.1066C27.41 19.5675 28.1528 19.1639 29.0393 18.8966C29.9258 18.6293 30.9466 18.4956 32.1023 18.4956C33.2581 18.4956 34.1792 18.6141 35.0367 18.8512C35.8943 19.0883 36.6181 19.4338 37.2083 19.8897C37.7984 20.3449 38.2473 20.9035 38.5563 21.5656C38.8646 22.227 39.0191 22.9849 39.0191 23.8386C39.0191 24.3493 38.9661 24.8045 38.8602 25.2049L38.8589 25.2005Z" fill="#FF7223" />
                </svg>
              </button>
            </Link>

            {/* Botón Música (Posicionado en el borde derecho) */}
            <a
              href={getPlaylistUrl(countryId)}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-16 top-[110px] z-20 flex items-center justify-center hover:scale-105 transition-transform drop-shadow-md"
            >
              <img src="/ICONO-MUSIC.png" alt="Música" className="w-10 h-10 object-contain" />
            </a>
          </div>
        </div>

        {/* Textos del Hero */}
        <div className="relative z-10 px-6 pt-18 text-white font-nohemi mt-2">
          <h1 className="text-[36px] font-bold leading-tight tracking-tight drop-shadow-md">{name}:</h1>
          <p className="text-[20px] font-bold -mt-1 pr-4 drop-shadow-md">{subtitle}</p>
        </div>

        {/* Gia y su Mensaje */}
        <div className="absolute top-140 left-60 -rotate-30 w-[300px] h-[340px] z-20 pointer-events-none">
          {/* Mensaje Nube (Usando el asset de la nube con el texto encima) */}
          <div className="absolute bottom-110 rotate-20 right-28 w-[120px] origin-bottom-right drop-shadow-lg">
            <div className="relative">
              <img src="/Paises/NubeParaMensaje.png" alt="Nube" className="w-full h-auto" />
              {giaMessage ? (
                <p className="absolute inset-0 flex items-center justify-center text-center text-[#13522B] font-bold text-[12px] leading-tight px-4 pt-2 pb-6 rotate-[-10deg] font-nohemi">
                  {giaMessage}
                </p>
              ) : null}
            </div>
          </div>

          {/* Gia Imagen (imagen propia de cada país, .gif o .png) */}
          <img
            src={giaSrc}
            alt={giaAlt}
            className="absolute bottom-[-10px] right-[-2px] w-[180px] h-auto object-contain drop-shadow-xl"
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
          {antesDeViajar.map((card) => (
            <MobileAnimatedCard
              key={card.title}
              title={card.title}
              description={<RichText text={card.description} />}
              iconSrc={card.icon.src}
              iconAlt={card.icon.alt}
            />
          ))}
        </div>
      </section>

      {/* SECCIÓN: 3 DESTINOS */}
      <section className="w-full pt-10 pb-10 flex flex-col items-center overflow-hidden bg-[#FFF7E2] -mt-[10px]">
        <h2 className="text-[#13522B] text-3xl font-bold tracking-tight mb-8 font-nohemi text-center px-4">
          3 destinos que no te puedes perder
        </h2>
        {/* Contenedor del Carrusel */}
        <MobileDestinationsCarousel destinations={destinations} />
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
