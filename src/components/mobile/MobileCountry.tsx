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
    <main className="w-full min-h-screen bg-[#FDF9EC] flex flex-col overflow-x-hidden relative pb-12 block md:hidden">
      
      {/* HEADER HERO (Imagen Principal) */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex flex-col justify-between overflow-hidden">
        {/* Fondo de País y Gradiente */}
        <div className="absolute top-0 left-0 w-full h-[600px] z-10">
          {/* Foto de País */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={countryInfo.heroImage}
              alt={`Foto de ${countryInfo.name}`}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Gradiente sutil para oscurecer la imagen y asegurar lectura del texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent -z-10" />

          {/* Textos del Hero */}
          <div className="absolute left-[20px] top-[140px] text-white z-10 font-nohemi">
            <h1 className="text-[32px] font-bold leading-tight tracking-tight">{countryInfo.name}:</h1>
            <p className="text-[16px] font-bold mt-1 pr-4">{countryInfo.subtitle}</p>
          </div>
        </div>

        {/* Top Navbar (Logo y Botones) */}
        <div className="relative z-20 w-full flex items-center justify-between px-4 pt-4">
          <Link href="/">
            <button className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full shadow-lg">
              <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
                <path d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z" fill="#FF7223" />
              </svg>
            </button>
          </Link>
          
          <img src="/Paises/LogoReducido.png" alt="Rumbo Latam" className="w-[120px] h-auto object-contain" />

          {/* Botón About */}
          <button className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full shadow-lg">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
              <path d="M42.5681 25.2113L38.6574 29.4615L36.8007 31.4774L36.7817 49.5541C36.7817 49.6201 36.7817 49.6819 36.7741 49.7438H33.1709V41.029H30.3764V49.7438H26.6896C26.6706 49.616 26.663 49.4799 26.663 49.348V31.4733L24.7191 29.3997L20.8311 25.2526C20.8311 25.2526 20.8538 25.2237 20.8652 25.2072C22.3954 23.2944 22.403 23.2903 23.3788 22.1401L28.0223 27.1777H31.7167H35.411L40.0584 22.1401C41.0304 23.2903 41.038 23.2944 42.5681 25.2072V25.2113Z" fill="#FF7223" />
              <path d="M34.4278 15H28.9716L26.2417 20.1324L28.9716 25.2648H34.4278L37.1577 20.1324L34.4278 15Z" fill="#FF7223" />
            </svg>
          </button>
        </div>

        {/* Botón flotante de Spotify */}
        <a
          href="https://open.spotify.com/playlist/5bywhsxxSqQbOoneg9vdPI?si=UEAJ74YLRTihwv_shlzdEw&utm_source=whatsapp&pi=BKfbh5UxS_yP8"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 z-30 hover:scale-105 transition-transform drop-shadow-2xl"
        >
          <svg width="64" height="64" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M127.934 65.5855C127.402 69.1115 125.438 72.483 122.838 75.7435C119.904 79.4115 116.185 82.9375 112.837 86.4078C108.458 90.786 104.072 95.1765 99.6987 99.5546L99.5813 99.6719C93.4723 105.742 87.0359 112.331 80.7662 118.389C75.2749 123.415 68.7643 129.67 60.8331 127.589C54.8599 126.033 48.6088 119.778 42.4751 113.708C38.5156 109.75 34.55 105.773 30.6029 101.839C26.9215 98.159 23.3141 94.5651 19.6141 90.8662C15.0493 86.1732 9.59501 81.2084 5.42555 76.0337C4.48047 74.8481 3.59099 73.6501 2.79415 72.4336C-1.08499 66.5303 -0.825558 61.0098 2.95476 55.3781C6.593 49.8946 11.7817 45.0843 16.4453 40.3356C27.9221 29.0723 38.6515 17.6299 50.4125 6.75557C54.2793 3.38398 58.9553 0.0247003 63.8598 0C73.5206 0.111151 82.6131 11.9426 89.4449 18.2288C97.6294 26.4046 105.468 34.2346 113.702 42.4598C119.576 48.8078 128.916 56.2365 127.927 65.5855H127.934Z" fill="#70B694" />
            <path d="M83.9535 39.1438L52.278 47.6654V72.1866L47.917 69.6549L39.6707 74.4529V84.0552L47.917 88.8531L57.8434 83.8637L57.8372 57.0392L78.3943 50.9691L78.3819 65.709L74.0271 63.1772L65.7747 67.9753V77.5775L74.0271 82.3755L83.9535 77.3861V39.1438Z" fill="#FFF7E2" />
          </svg>
        </a>
      </section>

      {/* SECCIÓN: ANTES DE VIAJAR */}
      <section className="w-full bg-[#13522B] px-4 py-12 relative z-10 -mt-6 rounded-t-3xl shadow-2xl">
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
      <section className="w-full pt-16 pb-12 flex flex-col items-center overflow-hidden">
        <h2 className="text-[#13522B] text-3xl font-bold tracking-tight mb-8 font-nohemi text-center px-4">
          3 destinos que no te puedes perder
        </h2>
        <MobileDestinationsCarousel destinations={countryInfo.destinations} />
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-[-200px] sm:mt-[-150px] relative z-10 px-6 pb-8 flex flex-col items-center gap-6">
        <Image src="/Paises/LogoURBE.png" alt="Logo URBE" width={100} height={50} className="object-contain drop-shadow-md" />
        
        <div className="text-[#1D799B] text-[14px] leading-relaxed tracking-wide font-sans text-center bg-white/50 p-4 rounded-xl backdrop-blur-sm shadow-sm w-full max-w-sm">
          <p className="font-bold">© 2026 Rumbo Latam.</p>
          <p className="font-medium">Trabajo Especial de Grado - URBE.</p>
          <p className="font-medium">Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
