"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import ScaleToFitCanvas from "@/components/ui/ScaleToFitCanvas";
import BackButton from "@/components/ui/BackButton";

/**
 * Réplica del frame mobile de Figma "Nosotras" (node 935:11092).
 * Lienzo fijo de 430x932px que se escala al ancho del viewport (fullWidth) para
 * que nunca quede una franja del fondo del main a la derecha.
 * Todas las coordenadas son absolutas dentro del lienzo y provienen de la metadata del nodo.
 */
export default function MobileNosotras() {
  const bgScene: CSSProperties = {
    filter: "blur(4.65px)",
    maskImage: "url(/Nosotras/bg-mask.svg)",
    WebkitMaskImage: "url(/Nosotras/bg-mask.svg)",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "0.088px 0.088px",
    WebkitMaskPosition: "0.088px 0.088px",
    maskSize: "975.917px 513.377px",
    WebkitMaskSize: "975.917px 513.377px",
  };

  const vzlaMask = (position: string): CSSProperties => ({
    maskImage: "url(/Nosotras/vzla-mask.svg)",
    WebkitMaskImage: "url(/Nosotras/vzla-mask.svg)",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "53.797px 53.674px",
    WebkitMaskSize: "53.797px 53.674px",
    maskPosition: position,
    WebkitMaskPosition: position,
  });

  return (
    <main className="md:hidden w-full min-h-screen bg-azul-claro relative font-sans">
      <ScaleToFitCanvas height={932} width={430} fullWidth>
        <div className="relative w-[430px] h-[932px] shrink-0 bg-azul-claro overflow-hidden">
          {/* Ellipse 22 – glow derecho */}
          <div className="absolute left-[281px] top-[455px] w-[280px] h-[263px] pointer-events-none">
            <div className="absolute inset-[-84.45%_-79.32%]">
              <img
                src="/Nosotras/ellipse-22.svg"
                alt=""
                className="block size-full max-w-none"
              />
            </div>
          </div>

          {/* Ellipse 23 – glow inferior izquierdo */}
          <div className="absolute left-[-134px] top-[707px] w-[314px] h-[303px] pointer-events-none">
            <div className="absolute inset-[-73.3%_-70.73%]">
              <img
                src="/Nosotras/ellipse-23.svg"
                alt=""
                className="block size-full max-w-none"
              />
            </div>
          </div>

          {/* Fondo escena enmascarado */}
          <div className="absolute left-[-380px] top-[-17px] w-[976px] h-[545px] overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={bgScene}>
              <img
                src="/Nosotras/fondo.png"
                alt=""
                className="absolute inset-0 h-full w-full max-w-none"
              />
            </div>
          </div>

          {/* Polaroid izquierdo – respaldo crema 2.76deg */}
          <div className="absolute flex items-center justify-center left-[55.38px] top-[180px] w-[231.63px] h-[163.83px] pointer-events-none">
            <div className="flex-none rotate-[2.76deg]">
              <div className="relative w-[224.51px] h-[153.18px] bg-[#f8f4e8]" />
            </div>
          </div>

          {/* Polaroid izquierdo – foto */}
          <div className="absolute flex items-center justify-center left-[58.7px] top-[183.24px] w-[224.4px] h-[157.04px] pointer-events-none">
            <div className="flex-none rotate-[2.76deg]">
              <div className="relative w-[217.58px] h-[146.72px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src="/Nosotras/foto-hero-1.png"
                    alt="Equipo Rumbo Latam"
                    className="absolute h-[111.22%] left-0 max-w-none top-[-6.66%] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Polaroid izquierdo – respaldo crema -4.01deg (encima) */}
          <div className="absolute flex items-center justify-center left-[88.82px] top-[217.27px] w-[234.68px] h-[168.51px] pointer-events-none">
            <div className="flex-none w-[224.51px] h-[153.18px] bg-[#f8f4e8] -rotate-[4.01deg]" />
          </div>

          {/* Logo Rumbo Latam → inicio */}
          <div className="absolute flex items-center justify-center left-[101.88px] top-[229.6px] w-[65.76px] h-[51.5px]">
            <Link
              href="/"
              aria-label="Ir al inicio"
              className="block cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex-none -rotate-[3.25deg]">
                <img
                  src="/Nosotras/logo.svg"
                  alt="Rumbo Latam"
                  className="block max-w-none w-[63.14px] h-[48px]"
                />
              </div>
            </Link>
          </div>

          {/* Badge emblema verde */}
          <div className="absolute flex items-center justify-center left-[253.25px] top-[214.49px] w-[56.39px] h-[34.75px] pointer-events-none">
            <div className="flex-none overflow-hidden w-[53.91px] h-[30.04px] -rotate-[5.14deg]">
              <img
                src="/Nosotras/hero-badge.svg"
                alt=""
                className="size-full max-w-none"
              />
            </div>
          </div>

          {/* Badge VZLA compuesto (escala 0.385 del grupo de desktop) */}
          <div className="absolute flex items-center justify-center left-[271.74px] top-[231.24px] w-[27.67px] h-[22.19px] pointer-events-none">
            <div
              className="flex-none relative w-[71.863px] h-[57.618px]"
              style={{ transform: "scale(0.385) rotate(-11.78deg)" }}
            >
              <div
                className="absolute inset-0"
                style={vzlaMask("9.024px 1.878px")}
              >
                <img
                  src="/Nosotras/vzla-flag.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div
                className="absolute inset-[36.34%_46.65%_55.75%_46.65%]"
                style={vzlaMask("-23.542px -20.408px")}
              >
                <img
                  src="/Nosotras/vzla-star.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div
                className="absolute inset-[39.17%_56.32%_36.52%_25.17%]"
                style={vzlaMask("-10.367px -22.927px")}
              >
                <img
                  src="/Nosotras/vzla-grpB.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div
                className="absolute inset-[39.17%_25.17%_36.52%_56.32%]"
                style={vzlaMask("-29.855px -18.862px")}
              >
                <img
                  src="/Nosotras/vzla-grpC.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div className="absolute inset-[79.33%_24%_17.89%_73.63%]">
                <img
                  src="/Nosotras/vzla-vec1.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div className="absolute inset-[20.37%_25.07%_3.32%_16.51%]">
                <img
                  src="/Nosotras/vzla-vec2.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div className="absolute inset-[3.51%_17.15%_17.69%_25.49%]">
                <img
                  src="/Nosotras/vzla-vec3.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
              <div className="absolute inset-[3.5%_17.16%_17.69%_25.48%]">
                <img
                  src="/Nosotras/vzla-grp4.svg"
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                />
              </div>
            </div>
          </div>

          {/* Polaroid derecho – respaldo azul */}
          <div className="absolute flex items-center justify-center left-[240.93px] top-[267.99px] w-[140.94px] h-[126.7px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-6.77deg) skewX(-0.17deg)" }}
            >
              <div className="relative w-[128.94px] h-[112.23px] bg-[#bde0ec]" />
            </div>
          </div>

          {/* Polaroid derecho – foto */}
          <div className="absolute flex items-center justify-center left-[243.62px] top-[271.23px] w-[133.6px] h-[106.63px] pointer-events-none">
            <div className="flex-none -rotate-[6.83deg]">
              <div className="relative w-[123.47px] h-[92.6px]">
                <img
                  src="/Nosotras/foto-hero-2.png"
                  alt="Polaroid de Rumbo Latam"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                />
              </div>
            </div>
          </div>

          {/* Sello 2026 */}
          <div className="absolute flex items-center justify-center left-[353.27px] top-[356.08px] w-[21.51px] h-[8.79px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-6.57deg) skewX(-0.17deg)" }}
            >
              <img
                src="/Nosotras/sello-2026.svg"
                alt=""
                className="block max-w-none w-[20.93px] h-[6.44px]"
              />
            </div>
          </div>

          {/* Título */}
          <div className="absolute flex items-center justify-center left-[107.69px] top-[327.7px] w-[140.8px] h-[37.32px] pointer-events-none">
            <div className="flex-none -rotate-[3.57deg]">
              <div className="relative flex flex-col justify-center leading-[0] text-[0px] w-[139.28px] h-[28.7px] text-naranja">
                <p className="not-italic text-[13px] mb-0">
                  <span className="font-nohemi font-black leading-[0.88]">
                    ¿Qué hay detrás
                    <br aria-hidden="true" />
                  </span>
                  <span className="font-nohemi font-normal leading-[0.88]">
                    de{" "}
                  </span>
                  <span className="font-nohemi font-normal leading-[0.88]">
                    este proyecto?
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Fondos de tarjetas */}
          <div className="absolute bg-[#fff7e2] rounded-[20px] left-[20px] top-[558px] w-[123px] h-[248px]" />
          <div className="absolute bg-[#fff7e2] rounded-[20px] left-[153px] top-[558px] w-[123px] h-[248px]" />
          <div className="absolute bg-[#fff7e2] rounded-[20px] left-[287px] top-[558px] w-[123px] h-[248px]" />

          {/* Card 1 – foto (anillo #BDE0EC + sombra, igual que desktop) */}
          <div className="absolute flex items-center justify-center left-[29.2px] top-[742.8px] w-[96.63px] h-[80.19px] pointer-events-none">
            <div className="flex-none rotate-[6.34deg]">
              <div className="relative w-[89.36px] h-[70.75px] overflow-hidden box-content border-t-[12px] border-b-[8px] border-x-[4px] border-[#BDE0EC] shadow-[0_6.6px_13.2px_rgba(0,0,0,0.28)]">
                <img
                  src="/Nosotras/card1-foto.png"
                  alt="Foto de la tarjeta Enfoque en la experiencia"
                  className="absolute left-0 top-[-25.63%] w-full h-[189.44%] max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Card 1 – strip */}
          <div className="absolute flex items-center justify-center left-[54.6px] top-[721px] w-[55.52px] h-[32.46px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "scaleY(-1) rotate(-180deg)" }}
            >
              <div className="relative w-[52.65px] h-[25.99px]">
                <img
                  src="/Nosotras/card1-strip.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Card 2 – collage (3 tickets + 5 fotos) */}
          {/* Ticket top-left */}
          <div className="absolute flex items-center justify-center left-[165px] top-[715px] w-[101.26px] h-[67.44px] pointer-events-none">
            <div
              className="flex-none"
              style={{
                transform:
                  "rotate(-6.59deg) scaleX(1.01) scaleY(0.99) skewX(2.07deg)",
              }}
            >
              <img
                src="/Nosotras/coll-ticket-a.svg"
                alt=""
                className="block max-w-none w-[84.5px] h-[42.41px]"
              />
            </div>
          </div>

          {/* Photo 152 */}
          <div className="absolute flex items-center justify-center left-[174px] top-[727px] w-[82.95px] h-[43.78px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(-7.6deg)" }}>
              <div className="relative w-[79.2px] h-[33.6px]">
                <img
                  src="/Nosotras/coll-photo-152.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Ticket middle-right */}
          <div className="absolute flex items-center justify-center left-[218px] top-[762px] w-[57.75px] h-[77.82px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-2.8deg) skewX(-1.26deg)" }}
            >
              <div className="relative w-[55.8px] h-[75.12px]">
                <div className="absolute inset-[-3.99%_-7.17%_-6.66%_-7.17%]">
                  <img
                    src="/Nosotras/coll-ticket-b.svg"
                    alt=""
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Photo 153 */}
          <div className="absolute flex items-center justify-center left-[222px] top-[753px] w-[49.57px] h-[17.06px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-0.98deg)" }}
            >
              <div className="relative w-[49.3px] h-[16.22px] overflow-hidden">
                <img
                  src="/Nosotras/coll-photo-153.png"
                  alt=""
                  className="absolute left-0 top-0 w-full h-[205.34%] max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Photo 151 */}
          <div className="absolute flex items-center justify-center left-[220px] top-[765px] w-[52.52px] h-[68.85px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-2.25deg)" }}
            >
              <div className="relative w-[49.93px] h-[66.95px]">
                <img
                  src="/Nosotras/coll-photo-151.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Ticket bottom-left */}
          <div className="absolute flex items-center justify-center left-[154px] top-[762px] w-[56.46px] h-[64.01px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(5.82deg) skewX(-1.26deg)" }}
            >
              <div className="relative w-[49.39px] h-[59.46px]">
                <div className="absolute inset-[-6.73%_-8.1%]">
                  <img
                    src="/Nosotras/coll-ticket-c.svg"
                    alt=""
                    className="block max-w-none size-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Photo 150 */}
          <div className="absolute flex items-center justify-center left-[157px] top-[765px] w-[49.83px] h-[57.74px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(6.15deg)" }}>
              <div className="relative w-[44.37px] h-[53.3px]">
                <img
                  src="/Nosotras/coll-photo-150.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Photo 148 – strip top-right (src coll-photo-153) */}
          <div className="absolute flex items-center justify-center left-[166px] top-[750px] w-[41.31px] h-[18.32px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(7.64deg)" }}>
              <div className="relative w-[39.92px] h-[13.14px] overflow-hidden">
                <img
                  src="/Nosotras/coll-photo-153.png"
                  alt=""
                  className="absolute left-0 top-0 w-full h-[205.34%] max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Photo 148 – strip bottom-left */}
          <div className="absolute flex items-center justify-center left-[191px] top-[715px] w-[48.29px] h-[23.38px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-8.99deg)" }}
            >
              <div className="relative w-[46.3px] h-[16.35px] overflow-hidden">
                <img
                  src="/Nosotras/coll-photo-148.png"
                  alt=""
                  className="absolute left-0 top-[-91.4%] w-full h-[191.4%] max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Card 3 – foto (anillo #BDE0EC + sombra, igual que desktop) */}
          <div className="absolute flex items-center justify-center left-[299.2px] top-[743px] w-[102.44px] h-[74.39px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(-6.03deg)" }}
            >
              <div className="relative w-[96.19px] h-[64.65px] overflow-hidden shadow-[0_0_0_3.94px_#BDE0EC,0_7.9px_3.9px_rgba(0,0,0,0.12)]">
                <img
                  src="/Nosotras/card3-foto.png"
                  alt="Foto de la tarjeta Identidad cultural"
                  className="absolute left-0 top-0 w-[100.84%] h-full max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Card 3 – foto-top */}
          <div className="absolute flex items-center justify-center left-[317.4px] top-[712.1px] w-[66.05px] h-[66.05px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "rotate(171.78deg)" }}
            >
              <div className="relative w-[58.31px] h-[58.31px]">
                <img
                  src="/Nosotras/card3-foto-top.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Títulos de tarjeta */}
          <div className="absolute left-[29px] top-[579px] flex flex-col justify-center text-center w-[107px] h-[24px] pointer-events-none">
            <p className="font-nohemi font-normal text-naranja text-[13px] leading-[0.83] tracking-[0.13px] mb-0">
              Enfoque en
            </p>
            <p className="font-nohemi font-black text-naranja text-[13px] leading-[0.83] tracking-[0.13px] mb-0">
              la experiencia
            </p>
          </div>
          <div className="absolute left-[170px] top-[579px] flex flex-col justify-center text-center w-[89px] h-[24px] pointer-events-none">
            <p className="font-nohemi font-normal text-naranja text-[13px] leading-[0.83] tracking-[0.13px] mb-0">
              Proceso
            </p>
            <p className="font-nohemi font-black text-naranja text-[13px] leading-[0.83] tracking-[0.13px] mb-0">
              creativo
            </p>
          </div>
          <div className="absolute left-[304px] top-[579px] flex flex-col justify-center text-center w-[89px] h-[24px] pointer-events-none">
            <p className="font-nohemi font-normal text-naranja text-[13px] leading-[0.83] tracking-[0.13px] mb-0">
              Identidad
            </p>
            <p className="font-nohemi font-black text-naranja text-[13px] leading-[0.83] tracking-[0.13px] mb-0">
              cultural
            </p>
          </div>

          {/* Descripciones de tarjeta */}
          <div className="absolute left-[34px] top-[619px] flex flex-col justify-center text-center w-[96px] h-[87px] font-sans font-normal text-verde text-[7px] tracking-[0.07px] pointer-events-none">
            <p className="leading-[1.5] mb-0">
              Diseñamos siempre pensando en las necesidades del viajero,
              priorizando la accesibilidad, la intuición y la claridad en cada
              pantalla para que cualquiera pueda trazar su ruta sin fricciones.
            </p>
          </div>
          <div className="absolute left-[167px] top-[619px] flex flex-col justify-center text-center w-[96px] h-[78px] font-sans font-normal text-verde text-[7px] tracking-[0.07px] pointer-events-none">
            <p className="leading-[1.5] mb-0">
              Durante la etapa de diseño se combinó investigación, bocetos y
              prototipos para transformar la idea inicial en una interfaz
              visualmente atractiva y fácil de usar.
            </p>
          </div>
          <div className="absolute left-[300px] top-[619px] flex flex-col justify-center text-center w-[96px] h-[87px] font-sans font-normal text-verde text-[7px] tracking-[0.07px] pointer-events-none">
            <p className="leading-[1.5] mb-0">
              Nuestro objetivo es mantener viva la esencia y la riqueza de los
              destinos latinoamericanos a través de un sistema de diseño que
              refleje la calidez y diversidad de cada cultura.
            </p>
          </div>

          {/* Nombres del equipo – pills */}
          <div className="absolute border border-verde rounded-[100px] left-[24px] top-[878px] w-[84px] h-[18px]" />
          <div className="absolute border border-verde rounded-[100px] left-[118px] top-[878px] w-[82px] h-[17px]" />
          <div className="absolute border border-verde rounded-[100px] left-[210px] top-[878px] w-[78px] h-[17px]" />
          <div className="absolute border border-verde rounded-[100px] left-[298px] top-[878px] w-[108px] h-[17px]" />

          <div className="absolute left-[31px] top-[878px] flex items-center justify-center text-center w-[70px] h-[19px] pointer-events-none">
            <span className="font-nohemi font-normal text-verde text-[10px] leading-[0.83] tracking-[0.1px]">
              Andrea Morán
            </span>
          </div>
          <div className="absolute left-[124px] top-[878px] flex items-center justify-center text-center w-[70px] h-[19px] pointer-events-none">
            <span className="font-nohemi font-normal text-verde text-[10px] leading-[0.83] tracking-[0.1px]">
              Hashlee Petit
            </span>
          </div>
          <div className="absolute left-[213px] top-[878px] flex items-center justify-center text-center w-[71px] h-[19px] pointer-events-none">
            <span className="font-nohemi font-normal text-verde text-[10px] leading-[0.83] tracking-[0.1px]">
              Nataly Cohen
            </span>
          </div>
          <div className="absolute left-[300px] top-[878px] flex items-center justify-center text-center w-[104px] h-[19px] pointer-events-none">
            <span className="font-nohemi font-normal text-verde text-[10px] leading-[0.83] tracking-[0.1px]">
              Mauriany Semprún
            </span>
          </div>

          {/* Encabezado */}
          <div className="absolute left-[20px] top-[71px] z-50">
            <BackButton size={40} />
          </div>
          <div className="absolute left-[322px] top-[89px] flex items-center justify-center text-center w-[88px] h-[10px] pointer-events-none">
            <p className="font-nohemi font-normal text-[#fff7e2] text-[15px] leading-[0.83] tracking-[0.15px] mb-0">
              Nosotras
            </p>
          </div>
        </div>
      </ScaleToFitCanvas>
    </main>
  );
}
