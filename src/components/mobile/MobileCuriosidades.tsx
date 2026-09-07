import Link from "next/link";
import { countriesData } from "@/data/countries";
import { getPais } from "@/data";

interface MobileCuriosidadesProps {
  countryId: string;
}

const WAVE_CLARA =
  "M537.429 118.794C907.142 186.777 1192.14 73.119 1286.62 -2.68535e-05L1320.87 287.959L-147.616 462.622L-193.841 73.9826C77.1612 -0.5204 344.775 70.3079 537.429 118.794Z";

const WAVE_OSCURA =
  "M615.38 109.615C244.235 153.05 -49.2977 70.2141 -142.392 -4.53375e-06L-171.579 224.213L1293.98 451.28L1347.75 104.267C1078.1 24.3806 809.034 75.2464 615.38 109.615Z";

const URBE_PATHS = [
  "M66.2181 8.37983C67.6276 8.38815 68.4894 11.0123 67.6046 11.5945L54.9647 11.9397C54.5242 15.2001 53.5053 18.003 51.2991 20.4733L71.117 20.7062C72.4538 20.7228 73.1356 22.3073 72.9249 23.3636C72.7142 24.4199 71.906 25.1809 70.6497 25.1809L45.0251 25.1227L42.7652 20.3485C45.0519 20.1864 46.9938 18.8348 48.2693 16.7471C50.5024 13.0875 50.5828 8.31329 48.6332 4.46235C47.1968 1.63028 44.5693 0.0250284 41.551 0.0250284L14.9956 0.0333458L13.9844 8.25507L20.8521 24.8316L15.5969 24.8524L8.90925 8.22596L9.93577 0.0291871L1.43253 7.62939e-05L0 8.32993L10.3494 33.3153L33.1741 33.3029L22.7941 8.42558L39.8886 8.18438C40.9343 8.16774 41.5165 9.249 41.4399 10.1057C41.3518 11.1079 40.739 11.8191 39.6473 11.8274L27.693 11.8939L30.9181 19.9244L34.848 19.8952L40.3215 33.4734L75.2575 33.2862C79.8347 33.2613 82.7802 28.2625 83.5195 23.8709C84.4809 18.1278 81.7346 12.8546 76.5139 11.4115L77.0808 8.07625C77.7396 4.18372 75.2767 0.378517 71.343 0.349406L51.6783 0.199693C53.6547 2.81135 54.7042 5.17348 54.551 8.31329L66.2181 8.38399V8.37983Z",
  "M91.1341 11.8606C89.9314 11.8523 88.6597 10.9997 88.4835 9.8977C88.3265 8.89545 89.4104 8.10946 90.2646 8.10946L104 8.06371L103.985 0.133095L87.1238 0.0582389C84.9481 0.0499215 83.1211 0.756899 82.1827 3.0317C81.3477 5.21917 81.1485 7.67696 81.5583 10.1181C85.4078 11.8273 87.2923 15.8613 87.0548 20.5772H103.805L103.908 11.9355L91.1341 11.8564V11.8606Z",
  "M96.3431 33.3154L102.659 25.1394L87.1275 25.0895C86.5414 28.6119 84.8714 30.9324 82.5771 33.2946L96.3431 33.3154Z",
];

export default function MobileCuriosidades({ countryId }: MobileCuriosidadesProps) {
  return (
    <main className="w-full min-h-screen bg-[#A3DBEF] flex flex-col overflow-hidden relative md:hidden">
      {/* Flecha hacia atrás */}
      <Link
        href={`/paises/${countryId}`}
        className="absolute left-4 top-4 z-50 hover:scale-105 transition-transform cursor-pointer"
        aria-label="Volver al país"
      >
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#FF7223" />
          <path d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z" fill="#FFF7E2" />
        </svg>
      </Link>

      {/* Mapa curiosidades pegado al borde derecho del botón */}
      <div className="absolute left-16 top-4 w-[1029px] h-[1074px] pointer-events-none z-40">
        <img src="/OtrosRecursos/mapaCuriosidades.png" alt="" width={1029} height={1074} className="w-full h-full object-contain" aria-hidden />
      </div>

      {/* Título y descripción de la sección (iguales para todos los países) */}
      <div className="relative z-[46] px-6 pt-24">
        <h1 className="font-nohemi leading-[0.9] text-[#13522B] text-[44px] pointer-events-none">
          <span className="font-bold">Datos</span>
          <br aria-hidden />
          <span className="font-normal">curiosos</span>
        </h1>
        <p className="mt-3 text-[14px] leading-[1.5] text-[#13522B] font-sans w-[85%]">
          Descubre los <span className="font-extrabold">detalles únicos y asombrosos</span> sobre cultura, naturaleza y sociedad que hacen especial a cada país y enriquecerán el recorrido a tu destino ideal.
        </p>
      </div>

      {/* Sección de curiosidades (sobre panel color arena rumbo) */}
      <section className="relative z-[46] mt-8 mx-4 mb-8 bg-[#FFF7E2] rounded-[32px] px-4 py-6">
        <div className="flex items-center gap-3 mb-6 pl-2">
          <img
            src={countriesData[countryId]?.flagPath ?? "/OtrosRecursos/ICONOCURIOSIDADES.png"}
            alt={`Bandera de ${getPais(countryId)?.name ?? countryId}`}
            className="w-14 h-14 rounded-full object-cover border-4 border-white shadow-sm"
          />
          <h2 className="font-nohemi font-bold text-[#13522B] text-[28px]">
            {getPais(countryId)?.name ?? countryId}
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {(getPais(countryId)?.curiosidades ?? []).map((curiosidad, index) => {
            const imageSrc =
              curiosidad.image.src ||
              `/Paises/${countryId}/Curiosidades/curiosidad${index + 1}.png`;
            return (
              <div key={curiosidad.text} className="bg-white rounded-[20px] p-3 pb-8 shadow-sm relative">
                <div className="relative">
                  <div className="absolute -left-[9px] -right-[9px] -top-[10px] h-[216px] bg-[#D4AF37] rounded-[20px]" />
                  <div className="relative rounded-[15px] overflow-hidden bg-[#D9E9EE] aspect-[312/206] w-full shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
                    <img src={imageSrc} alt={curiosidad.image.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="mt-4 text-center text-[14px] leading-[1.5] text-black font-sans px-3">
                  {curiosidad.text}
                </p>
                <div className="mt-4 flex justify-center">
                  <svg width="44" height="44" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#D4AF37" />
                    <path d="M30.4992 35.7294L17 43L30.5008 16L44 43L30.4992 35.7294Z" fill="#FFF7E2" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full relative z-10 mt-auto">
        <div className="absolute left-0 top-0 w-full overflow-hidden leading-none" style={{ height: 120 }}>
          <svg width="100%" height="120" viewBox="0 0 1280 360" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={WAVE_CLARA} fill="#6CC6E6" />
          </svg>
        </div>
        <div className="absolute left-0 top-[60px] w-full overflow-hidden leading-none" style={{ height: 140 }}>
          <svg width="100%" height="140" viewBox="0 0 1280 254" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={WAVE_OSCURA} fill="#4BB3D7" />
          </svg>
        </div>

        <div className="relative flex items-center justify-between px-6 pt-16 pb-6">
          <div className="text-white text-[10px] leading-snug tracking-wide font-sans text-left">
            <p className="font-extrabold">© 2026 Rumbo Latam.</p>
            <p className="font-medium">Trabajo Especial de Grado - URBE.</p>
            <p className="font-medium">Todos los derechos reservados.</p>
          </div>
          <div className="w-[70px] text-white">
            <svg width="70" height="23" viewBox="0 0 104 33.4734" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              {URBE_PATHS.map((d) => (
                <path key={d} d={d} fill="white" />
              ))}
            </svg>
          </div>
        </div>
      </footer>
    </main>
  );
}