"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import RichText from "@/components/ui/RichText";
import ScaleToFitCanvas from "@/components/ui/ScaleToFitCanvas";
import { getPais } from "@/data";
import { countriesData } from "@/data/countries";
import type { Curiosidad } from "@/types";

interface MobileCuriosidadesProps {
  countryId: string;
  /** Una entrada por curiosidad, ya resuelta por la ruta. `null` = sin foto. */
  curiosidadImages: (string | null)[];
}

/**
 * Lienzo de diseño: frame "curiosidades venezuela" de Figma (430 x 827).
 *
 * Es el alto mínimo. El lienzo se escala al ancho del móvil, así que con 827 el
 * pie puede quedarte a media pantalla o, en móviles muy altos, empujado fuera
 * del corte. Por eso el alto se recalcula en runtime (ver `useEffect`) para que
 * el pie termine siempre exactamente en el borde inferior de la pantalla.
 */
const CANVAS_WIDTH = 430;
const CANVAS_HEIGHT = 827;

/** Alto del pie, igual que en `DesktopCuriosidades` (360 de alto all��). */
const FOOTER_HEIGHT = 126;

/** Geometría de la tarjeta: la del componente de desktop (331 x 246) a escala 0.3415. */
const CARD_WIDTH = 113.026;
const CARD_COLLAPSED_HEIGHT = 84.002;
const BAND_HEIGHT = 77.172;
const CARD_RADIUS = 6.83;
const PHOTO_WIDTH = 106.53;
const PHOTO_HEIGHT = 70.34;
const PHOTO_RADIUS = 5.12;
/** Botón dorado de la tarjeta: 60px en desktop * 0.3415. */
const BUTTON_SIZE = 20.488;

const PLACEHOLDER_IMG = "/OtrosRecursos/ICONOCURIOSIDADES.png";

/** Cintillo naranja superior (566 x 187 en Figma). */
const CINTILLO_PATH = "M0 0H566V49.734L283 187L0 49.734V0Z";

/** Ondas del pie: las mismas de `DesktopCuriosidades`, estiradas a los 430px. */
const WAVE_CLARA =
  "M537.429 118.794C907.142 186.777 1192.14 73.119 1286.62 -2.68535e-05L1320.87 287.959L-147.616 462.622L-193.841 73.9826C77.1612 -0.5204 344.775 70.3079 537.429 118.794Z";

const WAVE_OSCURA =
  "M615.38 109.615C244.235 153.05 -49.2977 70.2141 -142.392 -4.53375e-06L-171.579 224.213L1293.98 451.28L1347.75 104.267C1078.1 24.3806 809.034 75.2464 615.38 109.615Z";

const URBE_PATHS = [
  "M66.2181 8.37983C67.6276 8.38815 68.4894 11.0123 67.6046 11.5945L54.9647 11.9397C54.5242 15.2001 53.5053 18.003 51.2991 20.4733L71.117 20.7062C72.4538 20.7228 73.1356 22.3073 72.9249 23.3636C72.7142 24.4199 71.906 25.1809 70.6497 25.1809L45.0251 25.1227L42.7652 20.3485C45.0519 20.1864 46.9938 18.8348 48.2693 16.7471C50.5024 13.0875 50.5828 8.31329 48.6332 4.46235C47.1968 1.63028 44.5693 0.0250284 41.551 0.0250284L14.9956 0.0333458L13.9844 8.25507L20.8521 24.8316L15.5969 24.8524L8.90925 8.22596L9.93577 0.0291871L1.43253 7.62939e-05L0 8.32993L10.3494 33.3153L33.1741 33.3029L22.7941 8.42558L39.8886 8.18438C40.9343 8.16774 41.5165 9.249 41.4399 10.1057C41.3518 11.1079 40.739 11.8191 39.6473 11.8274L27.693 11.8939L30.9181 19.9244L34.848 19.8952L40.3215 33.4734L75.2575 33.2862C79.8347 33.2613 82.7802 28.2625 83.5195 23.8709C84.4809 18.1278 81.7346 12.8546 76.5139 11.4115L77.0808 8.07625C77.7396 4.18372 75.2767 0.378517 71.343 0.349406L51.6783 0.199693C53.6547 2.81135 54.7042 5.17348 54.551 8.31329L66.2181 8.38399V8.37983Z",
  "M91.1341 11.8606C89.9314 11.8523 88.6597 10.9997 88.4835 9.8977C88.3265 8.89545 89.4104 8.10946 90.2646 8.10946L104 8.06371L103.985 0.133095L87.1238 0.0582389C84.9481 0.0499215 83.1211 0.756899 82.1827 3.0317C81.3477 5.21917 81.1485 7.67696 81.5583 10.1181C85.4078 11.8273 87.2923 15.8613 87.0548 20.5772H103.805L103.908 11.9355L91.1341 11.8564V11.8606Z",
  "M96.3431 33.3154L102.659 25.1394L87.1275 25.0895C86.5414 28.6119 84.8714 30.9324 82.5771 33.2946L96.3431 33.3154Z",
];

/** Signo de interrogación, con las coordenadas del componente de desktop (viewBox 331 x 246). */
const SIGNO_INTERROGACION =
  "M175.596 120.412V122.438H150.735V115.628C150.735 101.809 159.873 97.0921 165.517 94.1688L168.54 92.6075C173.244 90.1825 175.461 89.0531 175.461 85.3658C175.461 81.911 172.102 79.8846 166.592 79.8846C158.663 79.8846 154.9 84.2031 154.9 93.2387V94.8997H125V92.8068C125 68.1582 138.539 56 166.054 56C191.52 56 206 66.3976 206 84.6681C206 100.281 195.417 105.497 188.9 108.686L185.876 110.147C180.702 112.672 175.596 115.163 175.596 120.412ZM176.268 126.425V153H150.063V126.425H176.268Z";

/** Botón colapsado: estrella hacia abajo (despliega). Expandido: chevron hacia arriba. */
const ESTRELLA_COLLAPSADA =
  "M29.999 24.271L16.5 17L30.001 44L43.5 17L29.999 24.271Z";
const CHEVRON_EXPANDIDA =
  "M30.4992 35.7294L17 43L30.5008 16L44 43L30.4992 35.7294Z";

const DESCRIPCION =
  "Descubre los **detalles únicos y asombrosos** sobre cultura, naturaleza y sociedad que hacen especial a cada país y enriquecerán el recorrido a tu destino ideal.";

interface CuriosityCardProps {
  accent: string;
  imageSrc: string;
  curiosidad: Curiosidad;
  onOpen: () => void;
}

/**
 * Tarjeta de curiosidad en su estado colapsado (idéntica a Figma): banda de
 * acento, foto con tinte, signo "?" y botón dorado. Al pulsarla se abre el
 * panel inferior con el texto completo; la tarjeta no cambia de tamaño.
 */
function CuriosityCard({
  accent,
  imageSrc,
  curiosidad,
  onOpen,
}: CuriosityCardProps) {
  return (
    <article
      className="relative shrink-0"
      style={{ width: CARD_WIDTH, height: CARD_COLLAPSED_HEIGHT }}
    >
      {/* Banda de acento + foto */}
      <div className="relative" style={{ height: BAND_HEIGHT }}>
        <span
          className="absolute inset-0"
          style={{ background: accent, borderRadius: CARD_RADIUS }}
        />
        <span
          className="absolute left-1/2 top-[3.42px] block -translate-x-1/2 overflow-hidden bg-[#D9E9EE]"
          style={{
            width: PHOTO_WIDTH,
            height: PHOTO_HEIGHT,
            borderRadius: PHOTO_RADIUS,
            boxShadow: "0 1.37px 0.68px rgba(0,0,0,0.25)",
          }}
        >
          <img
            src={imageSrc}
            alt=""
            aria-hidden
            className="size-full object-cover blur-[2px]"
          />
          <span
            className="absolute inset-0"
            style={{ background: accent, opacity: 0.12 }}
          />
        </span>

        {/* Signo de interrogación + botón de desplegar */}
        <div className="pointer-events-none absolute inset-0">
          <svg
            className="absolute inset-0"
            width={CARD_WIDTH}
            height={CARD_COLLAPSED_HEIGHT}
            viewBox="0 0 331 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={SIGNO_INTERROGACION} fill="#FFF7E2" />
          </svg>
          <svg
            className="absolute left-1/2 top-[63.51px] -translate-x-1/2"
            width={BUTTON_SIZE}
            height={BUTTON_SIZE}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="30" fill={accent} />
            <path d={ESTRELLA_COLLAPSADA} fill="#FFF7E2" />
          </svg>
        </div>
      </div>

      {/* Zona táctil de toda la tarjeta */}
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-label={`Ver curiosidad: ${curiosidad.image.alt}`}
        className="absolute inset-0 z-10 cursor-pointer active:scale-[0.98] transition-transform"
      />
    </article>
  );
}

export default function MobileCuriosidades({
  countryId,
  curiosidadImages,
}: MobileCuriosidadesProps) {
  /** Curiosidad abierta en el panel inferior, o null si todas están cerradas. */
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  /** Estado de la transición: false = fuera de pantalla, true = dentro. */
  const [shown, setShown] = useState(false);
  /** Timer que desmonta el panel una vez Terminada la animación de salida. */
  const animTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pais = getPais(countryId);
  const curiosidades = pais?.curiosidades ?? [];
  const accent = pais?.curiosidadesAccent ?? "#D4AF37";
  const nameColor = pais?.curiosidadesNameColor ?? "#13522B";
  const curiosidadAbierta = openIndex !== null ? curiosidades[openIndex] : null;
  const imagenAbierta = openIndex !== null ? curiosidadImages[openIndex] : null;

  // El panel se monta ya desplazado hacia abajo y entra en el siguiente frame,
  // así la transición se reproduce (si no, no habría nada que animar).
  const abrir = (index: number) => {
    if (animTimer.current) clearTimeout(animTimer.current);
    setOpenIndex(index);
    setShown(false);
    animTimer.current = setTimeout(() => setShown(true), 20);
  };

  // Se mantiene montado hasta que termina la salida, y luego se desmonta.
  const cerrar = () => {
    setShown(false);
    animTimer.current = setTimeout(() => {
      setOpenIndex(null);
      animTimer.current = null;
    }, 400);
  };

  useEffect(
    () => () => {
      if (animTimer.current) clearTimeout(animTimer.current);
    },
    [],
  );

  // Escape cierra y el fondo no se desplaza mientras el panel está abierto.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cerrar();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openIndex]);

  // El pie va anclado al fondo del lienzo, así que el alto del lienzo es lo que
  // decide dónde termina. Con `fullWidth` el alto renderizado es
  // `ancho_disponible * CANVAS_HEIGHT / CANVAS_WIDTH`; para que el pie quede
  // justo en el borde inferior de la pantalla hace falta
  // `CANVAS_HEIGHT = alto_ventana * CANVAS_WIDTH / ancho_ventana`.
  const [canvasHeight, setCanvasHeight] = useState(CANVAS_HEIGHT);

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (!vw) return;
      const needed = Math.ceil((window.innerHeight * CANVAS_WIDTH) / vw);
      setCanvasHeight(Math.max(CANVAS_HEIGHT, needed));
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <main className="w-full bg-[#A3DBEF] relative overflow-hidden md:hidden">
      <ScaleToFitCanvas height={canvasHeight} width={CANVAS_WIDTH} fullWidth>
        {/* Mapa de la sección (blueprint, 12% de opacidad) */}
        <div
          className="absolute pointer-events-none"
          style={{ left: 22, top: 174, width: 381.699, height: 390.769 }}
        >
          <img
            src="/OtrosRecursos/mapaCuriosidades.png"
            alt=""
            width={1029}
            height={1074}
            className="size-full object-contain"
            aria-hidden
          />
        </div>

        {/* Cintillo naranja superior */}
        <svg
          className="absolute z-[46] pointer-events-none"
          width="566"
          height="187"
          viewBox="0 0 566 187"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ left: -67, top: -2 }}
        >
          <path d={CINTILLO_PATH} fill="#FF7223" />
        </svg>

        {/* Logo Rumbo Latam */}
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="absolute z-[48] block cursor-pointer hover:scale-105 transition-transform"
          style={{ left: 170, top: 69, width: 91.231, height: 69.357 }}
        >
          <img
            src="/Curiosidades/logo-rumbo.svg"
            alt="Rumbo Latam"
            className="size-full"
          />
        </Link>

        {/* Volver al país (círculo crema con flecha naranja) */}
        <Link
          href={`/paises/${countryId}`}
          aria-label="Volver al país"
          className="absolute z-[48] block cursor-pointer hover:scale-105 transition-transform"
          style={{ left: 17, top: 71, width: 40, height: 40 }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="20" fill="#FFF7E2" />
            <path
              d="M24.4894 20.1806L28.5 27.8578L12 20.1789L28.5 12.5L24.4894 20.1806Z"
              fill="#FF7223"
            />
          </svg>
        </Link>

        {/* Mano sobre la mitad superior del mapa */}
        <div
          className="absolute pointer-events-none"
          style={{ left: 228, top: 98, width: 227.39, height: 229 }}
        >
          <img
            src="/Curiosidades/mano-curiosidades.svg"
            alt=""
            aria-hidden
            className="size-full"
          />
        </div>

        {/* Título y descripción de la sección (iguales para todos los países) */}
        <div
          className="absolute z-[46] pointer-events-none"
          style={{ left: 20, top: 283 }}
        >
          <h1 className="font-nohemi leading-[0.855] text-[50px] text-[#13522B]">
            <span className="font-bold">Datos</span>
            <br aria-hidden />
            <span className="font-normal">curiosos</span>
          </h1>
        </div>

        {/* Regla decorativa a la derecha del título */}
        <div
          className="absolute z-[46] pointer-events-none rounded-full"
          style={{
            left: 191.423,
            top: 362.65,
            width: 170.557,
            height: 1.732,
            background: "#6DB2CB",
            opacity: 0.55,
          }}
        />

        <div
          className="absolute z-[46] pointer-events-none"
          style={{ left: 20, top: 371.309, width: 300 }}
        >
          <p className="text-[15px] leading-[1.45] text-[#13522B] font-sans">
            <RichText text={DESCRIPCION} />
          </p>
        </div>

        {/* Fondo arena rumbo de la sección (736 de ancho, sangra por ambos lados).
            Se ancla abajo para que su borde inferior quede siempre tapado por las
            ondas del pie, sin importar cuánto se baje el pie. */}
        <div
          className="absolute bg-[#FFF7E2] rounded-[50px] z-[46] pointer-events-none"
          style={{
            left: -121,
            top: 512,
            bottom: FOOTER_HEIGHT + 55,
            width: 736,
          }}
        />

        {/* Contenedor para centrar verticalmente dentro de la caja crema */}
        <div
          className="absolute inset-x-0 z-[47] flex flex-col justify-center"
          style={{
            top: 512,
            bottom: FOOTER_HEIGHT + 55,
          }}
        >
          {/* Encabezado: bandera + nombre del país */}
          <div className="flex items-center pl-[31px] mb-[9px]">
            <div
              className="flex size-[23.022px] items-center justify-center rounded-full"
              style={{ background: nameColor }}
            >
              <img
                src={countriesData[countryId]?.flagPath ?? PLACEHOLDER_IMG}
                alt={`Bandera de ${pais?.name ?? countryId}`}
                className="size-[20.313px] rounded-full object-cover"
              />
            </div>
            <h2
              className="ml-[3.86px] font-nohemi font-semibold text-[16.251px] leading-[1.5]"
              style={{ color: nameColor }}
            >
              {pais?.name ?? countryId}
            </h2>
          </div>

          {/* Tarjetas colapsadas */}
          <div className="flex items-start justify-center gap-[15.37px]">
            {curiosidades.map((curiosidad: Curiosidad, index: number) => (
              <CuriosityCard
                key={curiosidad.text}
                accent={accent}
                imageSrc={curiosidadImages[index] ?? PLACEHOLDER_IMG}
                curiosidad={curiosidad}
                onOpen={() => abrir(index)}
              />
            ))}
          </div>
        </div>

        {/* Footer: mismo marcado que DesktopCuriosidades (ondas 1280 + URBE inline),
          escalado a los 430px y anclado al fondo del lienzo. */}
        <footer
          className="absolute inset-x-0 bottom-0 z-[46] bg-[#A3DBEF]"
          style={{ height: FOOTER_HEIGHT }}
        >
          <div
            className="absolute left-0 bottom-0 w-full overflow-hidden leading-none"
            style={{ height: FOOTER_HEIGHT }}
          >
            <svg
              width="100%"
              height="126"
              viewBox="0 0 1280 360"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={WAVE_CLARA} fill="#6CC6E6" />
            </svg>
          </div>
          <div
            className="absolute left-0 bottom-0 w-full overflow-hidden leading-none"
            style={{ height: 89 }}
          >
            <svg
              width="100%"
              height="89"
              viewBox="0 0 1280 254"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={WAVE_OSCURA} fill="#4BB3D7" />
            </svg>
          </div>

          <div className="absolute bottom-[10px] left-0 w-full flex items-center justify-between px-[30px]">
            <div className="text-white text-[9px] leading-[1.3] tracking-wide font-sans text-left">
              <p className="font-extrabold">© 2026 Rumbo Latam.</p>
              <p className="font-medium">Trabajo Especial de Grado - URBE.</p>
              <p className="font-medium">Todos los derechos reservados.</p>
            </div>
            <div className="w-[61px] shrink-0 text-white">
              <svg
                width="61"
                height="19.633"
                viewBox="0 0 104 33.4734"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {URBE_PATHS.map((d) => (
                  <path key={d} d={d} fill="white" />
                ))}
              </svg>
            </div>
          </div>
          {/* Parche para ocultar cualquier línea subpíxel del fondo en móviles */}
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#4BB3D7] -z-10" />
        </footer>
      </ScaleToFitCanvas>

      {/* Parche global: cubrir subpíxeles en el borde inferior del <main> */}
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-[#4BB3D7] z-[40]" />

      {/*
        El lienzo está escalado con `transform: scale()`, así que un `fixed`
        dentro de él quedaría encerrado en el lienzo 430px. El panel se
        renderiza en un portal a `document.body` para ocupar la pantalla real.
      */}
      {openIndex !== null &&
        curiosidadAbierta &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Curiosidad"
            className="fixed inset-0 z-[100]"
          >
            {/* Fondo: oscurece y desenfoca todo lo que queda arriba */}
            <button
              type="button"
              onClick={cerrar}
              aria-label="Cerrar curiosidad"
              className="absolute inset-0 w-full cursor-default bg-[#0B2E1B]/35 backdrop-blur-md transition-opacity duration-[400ms]"
              style={{ opacity: shown ? 1 : 0 }}
            />

            {/* Panel que sube desde el borde inferior */}
            <div
              className="absolute inset-x-0 bottom-0 max-h-[88svh] overflow-y-auto overscroll-contain rounded-t-[32px] bg-white shadow-[0_-12px_40px_rgba(0,0,0,0.28)]"
              style={{
                transform: shown ? "translateY(0)" : "translateY(110%)",
                transition: "transform 450ms cubic-bezier(0.32, 0.72, 0, 1)",
              }}
            >
              {/* Tirador */}
              <div className="flex justify-center pt-3 pb-1">
                <span className="block h-1 w-10 rounded-full bg-[#13522B]/20" />
              </div>

              {/* Banda de acento con la foto. El alto lo decide la propia foto
                  (`h-auto`): con una banda fija de 188px el recuadro quedaba en
                  2.35:1 y `object-cover` recortaba la imagen al abrir el panel. */}
              <div
                className="relative mx-4 mt-2 rounded-[20px] p-4"
                style={{ background: accent }}
              >
                <div
                  className="overflow-hidden rounded-[16px] bg-[#D9E9EE]"
                  style={{ boxShadow: "0 4px 2px rgba(0,0,0,0.25)" }}
                >
                  <img
                    src={imagenAbierta ?? PLACEHOLDER_IMG}
                    alt={curiosidadAbierta.image.alt}
                    className="block w-full h-auto"
                  />
                </div>
              </div>

              {/* Texto de la curiosidad + botón para cerrar */}
              <div className="px-6 pt-6 pb-8">
                <p className="text-center text-[14px] leading-[1.5] text-black font-sans">
                  <RichText text={curiosidadAbierta.text} />
                </p>
                <button
                  type="button"
                  onClick={cerrar}
                  aria-label="Cerrar curiosidad"
                  className="mx-auto mt-6 block size-14 cursor-pointer hover:scale-105 transition-transform"
                >
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="30" cy="30" r="30" fill={accent} />
                    <path d={CHEVRON_EXPANDIDA} fill="#FFF7E2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </main>
  );
}
