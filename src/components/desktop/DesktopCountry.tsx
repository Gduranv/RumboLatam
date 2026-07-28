import Image from "next/image";
import Link from "next/link";
import AnimatedCard from "@/components/cards/AnimatedCard";
import DestinationsCarousel from "@/components/carousels/DestinationsCarousel";
import CountryHeaderButtons from "@/components/ui/CountryHeaderButtons";
import { countriesData } from "@/data/countries";

interface DesktopCountryProps {
  countryId: string;
}

export default function DesktopCountry({ countryId }: DesktopCountryProps) {
  const countryInfo = countriesData[countryId] || {
    name: countryId.charAt(0).toUpperCase() + countryId.slice(1),
    subtitle: "Explora la magia de este destino.",
    heroImage: "/Paises/Venezuela/FotoVenezuela.png",
    giaImage: "/Paises/Venezuela/giasaludovnz.png",
    destinations: []
  };

  return (
    <main className="w-full min-w-[1024px] h-[2800px] bg-[#FDF9EC] mx-auto relative overflow-hidden hidden md:block">
      {/* Capa 3: Sección verde ("Antes de viajar") apilada detrás */}
      <div
        className="absolute top-0 left-0 w-full h-[1683px] bg-[#13522B] z-0 pt-[980px]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 1531px, 50% 1683px, 0 1531px)' }}
      >
        <h2 className="text-white text-center text-[40px] font-bold tracking-tight font-nohemi">Antes de viajar:</h2>

        {/* Grid de Tarjetas */}
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 w-fit mx-auto place-items-center">

          <AnimatedCard
            title="Moneda"
            description={
              <>
                El bolívar (VES) es la moneda oficial, aunque el uso del dólar estadounidense (USD) en efectivo está ampliamente extendido en comercios y servicios.
              </>
            }
            iconSrc="/Paises/icon moneda.png"
            iconAlt="Icono Moneda"
          />

          <AnimatedCard
            title="Gastronomía"
            description={
              <>
                Predomina una cocina basada en el maíz, las carnes sazonadas y los quesos frescos, caracterizada por un balance perfecto de sabores intensos
              </>
            }
            iconSrc="/Paises/icono gastronomia.png"
            iconAlt="Icono Gastronomía"
          />

          <AnimatedCard
            title="Idioma"
            description={
              <>
                <strong>Español,</strong> hablado con una calidez única y lleno de expresiones coloquiales icónicas que te harán sentir como en casa.
              </>
            }
            iconSrc="/Paises/idioma.png"
            iconAlt="Icono Idioma"
          />

          <AnimatedCard
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
      </div>

      {/* Capa 2: Imagen (Hero) */}
      <div
        className="absolute top-0 left-0 w-full h-[911px] z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 765px, 50% 911px, 0 765px)' }}
      >
        {/* Fondo de País */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={countryInfo.heroImage}
            alt={`Foto de ${countryInfo.name}`}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Textos del Hero */}
        <div className="absolute left-[56px] top-[420px] text-white z-10 font-nohemi">
          <h1 className="text-[56px] font-bold leading-tight tracking-tight">{countryInfo.name}:</h1>
          <p className="text-[24px] font-bold mt-1">{countryInfo.subtitle}</p>
        </div>

        {/* Gia (Posicionada al fondo para que el clip-path en V la recorte automáticamente) */}
        <div className="absolute right-[-70px] bottom-0 w-[525px] h-[545px] z-10 group cursor-pointer scale-[1.2] origin-bottom">
          {/* Gia Animada (Siempre visible) */}
          <Image
            src="/Paises/Venezuela/giacortada.gif"
            alt="Gia"
            fill
            unoptimized
            className="object-contain"
          />
          {/* Nube de Saludo (Aparece al hacer hover) */}
          <div className="absolute top-[-10%] left-[0%] w-[220px] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 pointer-events-none">
            <Image
              src={countryInfo.giaImage}
              alt="Gia Saluda"
              width={220}
              height={150}
              unoptimized
              className="object-contain w-full h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Capa 1: Header (Superpuesto, con efecto de pico ajustado) */}
      <section
        className="relative w-full h-[188px] bg-[#FF7223] z-20 flex items-center justify-center"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50px, 50% 100%, 0 50px)' }}
      >
        <Link href="/">
          <div className="relative w-[380px] h-[120px] ml-10 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Image
              src="/Paises/logoBlanco.png"
              alt="Logo Rumbo Latam"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </section>

      {/* Componente Cliente para manejar los botones Atrás y About con su Modal */}
      <CountryHeaderButtons />

      {/* Botón Playlist (Superpuesto entre la foto y la sección verde a la izquierda) */}
      {/* Calculado en top-[719px] para que cruce exactamente la línea diagonal */}
      <a
        href="https://open.spotify.com/playlist/5bywhsxxSqQbOoneg9vdPI?si=UEAJ74YLRTihwv_shlzdEw&utm_source=whatsapp&pi=BKfbh5UxS_yP8"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[719px] left-[56px] z-30 hover:scale-105 transition-transform cursor-pointer block"
      >
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M127.934 65.5855C127.402 69.1115 125.438 72.483 122.838 75.7435C119.904 79.4115 116.185 82.9375 112.837 86.4078C108.458 90.786 104.072 95.1765 99.6987 99.5546L99.5813 99.6719C93.4723 105.742 87.0359 112.331 80.7662 118.389C75.2749 123.415 68.7643 129.67 60.8331 127.589C54.8599 126.033 48.6088 119.778 42.4751 113.708C38.5156 109.75 34.55 105.773 30.6029 101.839C26.9215 98.159 23.3141 94.5651 19.6141 90.8662C15.0493 86.1732 9.59501 81.2084 5.42555 76.0337C4.48047 74.8481 3.59099 73.6501 2.79415 72.4336C-1.08499 66.5303 -0.825558 61.0098 2.95476 55.3781C6.593 49.8946 11.7817 45.0843 16.4453 40.3356C27.9221 29.0723 38.6515 17.6299 50.4125 6.75557C54.2793 3.38398 58.9553 0.0247003 63.8598 0C73.5206 0.111151 82.6131 11.9426 89.4449 18.2288C97.6294 26.4046 105.468 34.2346 113.702 42.4598C119.576 48.8078 128.916 56.2365 127.927 65.5855H127.934Z" fill="#70B694" />
          <path d="M83.9535 39.1438L52.278 47.6654V72.1866L47.917 69.6549L39.6707 74.4529V84.0552L47.917 88.8531L57.8434 83.8637L57.8372 57.0392L78.3943 50.9691L78.3819 65.709L74.0271 63.1772L65.7747 67.9753V77.5775L74.0271 82.3755L83.9535 77.3861V39.1438Z" fill="#FFF7E2" />
        </svg>
      </a>

      {/* Capa 5: Sección 3 Destinos (Entre la capa verde y el footer) */}
      <section className="absolute top-[1683px] left-0 w-full z-20 flex flex-col items-center pt-10 pb-8">
        <h2 className="text-[#13522B] text-[40px] font-bold tracking-tight mb-8 font-nohemi">
          3 destinos que no te puedes perder
        </h2>

        {/* Contenedor del Carrusel */}
        <DestinationsCarousel destinations={countryInfo.destinations} />
      </section>

      {/* Capa 4: Footer - Ola azul claro (SVG nativo exportado de Figma) */}
      <div className="absolute left-0 w-full z-0 pointer-events-none" style={{ top: '2493px' }}>
        <svg width="100%" height="307" viewBox="0 0 1280 307" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M605.858 118.794C975.571 186.778 1260.57 73.1191 1355.05 9.52168e-05L1389.3 500L-79.1868 500L-125.412 73.9828C145.59 -0.520278 413.204 70.308 605.858 118.794Z" fill="#A3DBEF" />
        </svg>
      </div>

      {/* Capa 5: Footer - Ola azul más oscuro (SVG nativo) */}
      <div className="absolute left-0 bottom-0 w-full z-0 pointer-events-none">
        <svg width="100%" height="160" viewBox="0 0 1280 160" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M628.381 109.615C257.236 153.05 -36.2972 70.2141 -129.392 -4.53375e-06L-158.578 224.213L1306.98 451.28L1360.75 104.267C1091.1 24.3806 822.034 75.2464 628.381 109.615Z" fill="#7DCBE7" />
        </svg>
      </div>

      {/* Contenido del Footer (Textos y Logo) */}
      <div className="absolute left-0 bottom-[100px] w-full px-[140px] z-10 flex items-center justify-between">
        <div className="text-[#1D799B] text-[16px] leading-snug tracking-wide font-sans">
          <p className="font-bold">© 2026 Rumbo Latam.</p>
          <p className="font-medium">Trabajo Especial de Grado - URBE.</p>
          <p className="font-medium">Todos los derechos reservados.</p>
        </div>
        <div className="relative w-[100px] h-[50px]">
          {/* Aquí irá el logo de URBE cuando se proporcione */}
          {<Image src="/Paises/LogoURBE.png" alt="Logo URBE" fill className="object-contain" />}
        </div>
      </div>
    </main>
  );
}
