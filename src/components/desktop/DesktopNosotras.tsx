"use client";

import type { CSSProperties } from "react";
import ScaleToFitCanvas from "@/components/ui/ScaleToFitCanvas";
import BackButton from "@/components/ui/BackButton";

export default function DesktopNosotras() {
  const bgScene: CSSProperties = {
    filter: "blur(4.65px)",
    maskImage: "url(/Nosotras/bg-mask.svg)",
    WebkitMaskImage: "url(/Nosotras/bg-mask.svg)",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "0.166px 0.166px",
    WebkitMaskPosition: "0.166px 0.166px",
    maskSize: "1825.845px 963.642px",
    WebkitMaskSize: "1825.845px 963.642px",
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
    <main className="hidden md:block w-full bg-azul-claro mx-auto relative overflow-hidden font-sans">
      {/* Botón atrás — navega al historial anterior */}
      <div className="absolute top-[50px] left-[101px] z-50">
        <BackButton />
      </div>
      <ScaleToFitCanvas height={1664} fullWidth>
        <div className="relative w-[1280px] h-[1664px] shrink-0 bg-azul-claro overflow-hidden">
          {/* Ellipse 21 – glow derecho */}
          <div className="absolute left-[973px] top-[849px] w-[532px] h-[499px] pointer-events-none">
            <div className="absolute inset-[-44.51%_-41.75%]">
              <img
                src="/Nosotras/ellipse-21.svg"
                alt=""
                className="block size-full max-w-none"
              />
            </div>
          </div>

          {/* Fondo escena enmascarado (Capa_1) */}
          <div className="absolute left-[-294px] top-[-38px] w-[1826px] h-[1023px] overflow-hidden pointer-events-none">
            <div className="absolute inset-0" style={bgScene}>
              <img
                src="/Nosotras/fondo.png"
                alt=""
                className="absolute inset-0 h-full w-full max-w-none"
              />
            </div>
          </div>

          {/* Polaroid izquierdo – respaldo crema 2.76deg */}
          <div className="absolute flex items-center justify-center left-[208px] top-[192px] w-[601.5px] h-[425.423px] pointer-events-none">
            <div className="flex-none rotate-[2.76deg]">
              <div className="relative w-[583.005px] h-[397.786px] bg-[#f8f4e8]" />
            </div>
          </div>

          {/* Polaroid izquierdo – foto (image 145) */}
          <div className="absolute flex items-center justify-center left-[217.41px] top-[200.42px] w-[582.707px] h-[407.789px] pointer-events-none">
            <div className="flex-none rotate-[2.76deg]">
              <div className="relative w-[565px] h-[381px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src="/Nosotras/foto-hero-1.png"
                    alt="Foto del equipo Rumbo Latam"
                    className="absolute h-[111.22%] left-0 max-w-none top-[-6.66%] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Polaroid izquierdo – respaldo crema -4.01deg (encima) */}
          <div className="absolute flex items-center justify-center left-[314px] top-[248px] w-[609.401px] h-[437.591px] pointer-events-none">
            <div className="flex-none w-[583.005px] h-[397.786px] bg-[#f8f4e8] -rotate-[4.01deg]" />
          </div>

          {/* Badge emblema verde */}
          <div className="absolute flex items-center justify-center left-[741px] top-[269px] w-[146.429px] h-[90.237px] pointer-events-none">
            <div className="flex-none overflow-hidden w-[140px] h-[78px] -rotate-[5.14deg]">
              <img
                src="/Nosotras/hero-badge.svg"
                alt=""
                className="size-full max-w-none"
              />
            </div>
          </div>

          {/* Título */}
          <div className="absolute flex items-center justify-center left-[363px] top-[601.45px] w-[365.627px] h-[96.906px] -translate-y-1/2 pointer-events-none">
            <div className="flex-none -rotate-[3.57deg]">
              <div className="relative flex flex-col justify-center leading-[0] text-[0px] w-[361.687px] h-[74.515px] text-naranja">
                <p className="not-italic text-[40px] mb-0">
                  <span className="font-nohemi font-black leading-[0.88]">
                    ¿Qué hay detrás
                    <br aria-hidden="true" />
                  </span>
                  <span className="font-nohemi font-normal leading-[0.88]">de </span>
                  <span className="font-nohemi font-normal leading-[0.88]">este proyecto?</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sello Grupo 33 */}
          <div className="absolute flex items-center justify-center left-[343.04px] top-[306px] w-[150.56px] h-[119px] pointer-events-none">
            <div className="flex-none -rotate-[4.21deg]">
              <img
                src="/Nosotras/sello-grupo33.svg"
                alt=""
                className="block max-w-none w-[143px] h-[108.713px]"
              />
            </div>
          </div>

          {/* Polaroid derecho – respaldo azul */}
          <div className="absolute flex items-center justify-center left-[709px] top-[381px] w-[417px] h-[374.844px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(-6.77deg) skewX(-0.17deg)" }}>
              <div className="relative w-[381.497px] h-[332.044px] bg-[#bde0ec]" />
            </div>
          </div>

          {/* Polaroid derecho – foto (image 146) */}
          <div className="absolute flex items-center justify-center left-[716.94px] top-[392.15px] w-[395.285px] h-[315.465px] pointer-events-none">
            <div className="flex-none -rotate-[6.83deg]">
              <div className="relative w-[365.302px] h-[273.977px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    src="/Nosotras/foto-hero-2.png"
                    alt="Polaroid de Rumbo Latam"
                    className="absolute h-[177.96%] left-[0.36%] max-w-none top-[-26.65%] w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sello 2026 */}
          <div className="absolute flex items-center justify-center left-[1041.36px] top-[679.54px] w-[63.629px] h-[26.013px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(-6.57deg) skewX(-0.17deg)" }}>
              <img
                src="/Nosotras/sello-2026.svg"
                alt=""
                className="block max-w-none w-[61.9109px] h-[19.0437px]"
              />
            </div>
          </div>

          {/* Badge VZLA compuesto */}
          <div className="absolute left-[789px] top-[312px] w-[71.863px] h-[57.618px] -rotate-[11.78deg] pointer-events-none">
            <div className="absolute inset-0" style={vzlaMask("9.024px 1.878px")}>
              <img
                src="/Nosotras/vzla-flag.svg"
                alt=""
                className="absolute block inset-0 max-w-none size-full"
              />
            </div>
            <div className="absolute inset-[36.34%_46.65%_55.75%_46.65%]" style={vzlaMask("-23.542px -20.408px")}>
              <img
                src="/Nosotras/vzla-star.svg"
                alt=""
                className="absolute block inset-0 max-w-none size-full"
              />
            </div>
            <div className="absolute inset-[39.17%_56.32%_36.52%_25.17%]" style={vzlaMask("-10.367px -22.927px")}>
              <img
                src="/Nosotras/vzla-grpB.svg"
                alt=""
                className="absolute block inset-0 max-w-none size-full"
              />
            </div>
            <div className="absolute inset-[39.17%_25.17%_36.52%_56.32%]" style={vzlaMask("-29.855px -18.862px")}>
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

          {/* Fondos de tarjetas */}
          <div className="absolute bg-[#fff7e2] rounded-[20px] left-[66px] top-[988px] w-[355.965px] h-[395.124px]" />
          <div className="absolute bg-[#fff7e2] rounded-[20px] left-[461.74px] top-[988px] w-[355.965px] h-[395.124px]" />
          <div className="absolute bg-[#fff7e2] rounded-[20px] left-[857.48px] top-[988px] w-[355.965px] h-[395.124px]" />

          {/* Card 1 – sello (vector) */}
          <div className="absolute flex items-center justify-center left-[88.5px] top-[1267px] w-[294.506px] h-[243.5px] pointer-events-none">
            <div
              className="flex-none"
              style={{ transform: "scaleY(-1) rotate(-174.4deg) skewX(-2.38deg)" }}
            >
              <img
                src="/Nosotras/card1-sello.svg"
                alt=""
                className="block max-w-none w-[0px] h-[0px]"
              />
            </div>
          </div>

          {/* Card 1 – foto (cropped from source) */}
          <div className="absolute flex items-center justify-center left-[105px] top-[1274px] w-[263.524px] h-[218.685px] pointer-events-none">
            <div className="flex-none -rotate-[6.34deg]">
              <div className="w-[243.7px] h-[192.943px] relative overflow-hidden shadow-[0_0_0_10px_#BDE0EC,0_18px_36px_rgba(0,0,0,0.28)]">
                <img
                  src="/Nosotras/card1-foto.png"
                  alt="Foto de la tarjeta Enfoque en la experiencia"
                  className="absolute left-0 top-[-25.63%] w-full h-[189.44%] max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Card 1 – strip */}
          <div className="absolute flex items-center justify-center left-[178px] top-[1240px] w-[144.042px] h-[84.205px] pointer-events-none">
            <div className="flex-none" style={{ transform: "scaleY(-1) rotate(-172.71deg)" }}>
              <div className="w-[136.593px] h-[67.424px] relative">
                <img
                  src="/Nosotras/card1-strip.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>


          {/* Card 2 – collage (5 fotos + 3 tickets) */}
          <div className="absolute left-[486.76px] top-[1205px] w-[344.75px] h-[339.14px] pointer-events-none">
            {/* Ticket top-left (imgGroup36) */}
            <div className="absolute flex items-center justify-center left-[36.66px] top-[20.67px] w-[233.32px] h-[131.92px]">
              <div
                className="flex-none"
                style={{ transform: "rotate(-6.59deg) scaleX(1.01) scaleY(0.99) skewX(2.07deg)" }}
              >
                <img
                  src="/Nosotras/coll-ticket-a.svg"
                  alt=""
                  className="block max-w-none w-[217.10px] h-[108.96px]"
                />
              </div>
            </div>

            {/* Photo 152 */}
            <div className="absolute flex items-center justify-center left-[46.58px] top-[25.6px] w-[213.12px] h-[112.48px]">
              <div className="flex-none" style={{ transform: "rotate(-7.6deg)" }}>
                <div className="w-[203.49px] h-[86.32px] relative">
                  <img
                    src="/Nosotras/coll-photo-152.png"
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Ticket middle-right (imgGroup37) */}
            <div className="absolute flex items-center justify-center left-[161.87px] top-[115.56px] w-[148.37px] h-[199.92px]">
              <div className="flex-none" style={{ transform: "rotate(-2.8deg) skewX(-1.26deg)" }}>
                <div className="relative w-[143.349px] h-[192.995px]">
                  <div className="absolute inset-[0_-2.79%_-4.15%_-2.79%]">
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
            <div className="absolute flex items-center justify-center left-[170.70px] top-[99.14px] w-[127.35px] h-[43.84px]">
              <div className="flex-none" style={{ transform: "rotate(-0.98deg)" }}>
                <div className="w-[126.66px] h-[41.68px] relative overflow-hidden pointer-events-none">
                  <img
                    src="/Nosotras/coll-photo-153.png"
                    alt=""
                    className="absolute left-0 top-0 w-full h-[205.34%] max-w-none"
                  />
                </div>
              </div>
            </div>

            {/* Photo 151 */}
            <div className="absolute flex items-center justify-center left-[168.22px] top-[123.59px] w-[134.93px] h-[176.90px]">
              <div className="flex-none" style={{ transform: "rotate(-2.25deg)" }}>
                <div className="w-[128.29px] h-[172.00px] relative">
                  <img
                    src="/Nosotras/coll-photo-151.png"
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Ticket bottom-left (imgGroup38) */}
            <div className="absolute flex items-center justify-center left-[0px] top-[102.45px] w-[145.05px] h-[164.46px]">
              <div className="flex-none" style={{ transform: "rotate(5.82deg) skewX(-1.26deg)" }}>
                <div className="relative w-[126.894px] h-[152.759px]">
                  <div className="absolute inset-[0_-3.15%_-5.24%_-3.15%]">
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
            <div className="absolute flex items-center justify-center left-[7.51px] top-[107.64px] w-[128.02px] h-[148.36px]">
              <div className="flex-none" style={{ transform: "rotate(6.15deg)" }}>
                <div className="w-[114.00px] h-[136.93px] relative">
                  <img
                    src="/Nosotras/coll-photo-150.png"
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Photo 148 – strip top-right (src imgImage153) */}
            <div className="absolute flex items-center justify-center left-[23.97px] top-[86.51px] w-[106.12px] h-[47.08px]">
              <div className="flex-none" style={{ transform: "rotate(7.64deg)" }}>
                <div className="w-[102.55px] h-[33.75px] relative overflow-hidden pointer-events-none">
                  <img
                    src="/Nosotras/coll-photo-153.png"
                    alt=""
                    className="absolute left-0 top-0 w-full h-[205.34%] max-w-none"
                  />
                </div>
              </div>
            </div>

            {/* Photo 148 – strip bottom-left */}
            <div className="absolute flex items-center justify-center left-[83.24px] top-[7px] w-[124.06px] h-[60.07px]">
              <div className="flex-none" style={{ transform: "rotate(-8.99deg)" }}>
                <div className="w-[118.96px] h-[42.00px] relative overflow-hidden pointer-events-none">
                  <img
                    src="/Nosotras/coll-photo-148.png"
                    alt=""
                    className="absolute left-0 top-[-91.4%] w-full h-[191.4%] max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 – foto (cropped from source) */}
          <div className="absolute flex items-center justify-center left-[906px] top-[1273.22px] w-[259.69px] h-[188.58px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(-6.03deg)" }}>
              <div className="w-[243.83px] h-[163.88px] relative overflow-hidden shadow-[0_0_0_10px_#BDE0EC,0_20px_10px_rgba(0,0,0,0.12)]">
                <img
                  src="/Nosotras/card3-foto.png"
                  alt="Foto de la tarjeta Identidad cultural"
                  className="absolute left-0 top-0 w-[100.84%] h-full max-w-none"
                />
              </div>
            </div>
          </div>

          {/* Card 3 – foto-top */}
          <div className="absolute flex items-center justify-center left-[952px] top-[1195px] w-[167.43px] h-[167.43px] pointer-events-none">
            <div className="flex-none" style={{ transform: "rotate(171.78deg)" }}>
              <div className="relative w-[147.82px] h-[147.82px]">
                <img
                  src="/Nosotras/card3-foto-top.png"
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Card titles */}
          <div className="absolute left-[241.5px] top-[1050px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-center w-[261px] h-[80px] pointer-events-none">
            <p className="font-nohemi font-normal text-naranja text-[35px] leading-[0.83] tracking-[0.35px] mb-0">Enfoque en </p>
            <p className="font-nohemi font-black text-naranja text-[35px] leading-[0.83] tracking-[0.35px] mb-0">la experiencia</p>
          </div>
          <div className="absolute left-[calc(50%-2px)] top-[1050px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-center w-[154px] h-[52px] pointer-events-none">
            <p className="font-nohemi font-normal text-naranja text-[35px] leading-[0.83] tracking-[0.35px] mb-0">Proceso</p>
            <p className="font-nohemi font-black text-naranja text-[35px] leading-[0.83] tracking-[0.35px] mb-0">creativo</p>
          </div>
          <div className="absolute left-[1035.5px] top-[1050px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-center w-[167px] h-[80px] pointer-events-none">
            <p className="font-nohemi font-normal text-naranja text-[35px] leading-[0.83] tracking-[0.35px] mb-0">Identidad</p>
            <p className="font-nohemi font-black text-naranja text-[35px] leading-[0.83] tracking-[0.35px] mb-0">cultural</p>
          </div>

          {/* Card descriptions */}
          <div className="absolute left-[99px] top-[1162px] -translate-y-1/2 flex flex-col justify-center w-[302px] h-[106px] font-sans font-normal text-verde text-[16px] tracking-[0.16px] pointer-events-none">
            <p className="leading-[1.5] mb-0">Diseñamos siempre pensando en las necesidades del viajero, priorizando la accesibilidad, la intuición y la claridad en cada pantalla para que cualquiera pueda trazar su ruta sin fricciones.</p>
          </div>
          <div className="absolute left-[488px] top-[1151px] -translate-y-1/2 flex flex-col justify-center w-[308px] h-[84px] font-sans font-normal text-verde text-[16px] tracking-[0.16px] pointer-events-none">
            <p className="leading-[1.5] mb-0">Durante la etapa de diseño se combinó investigación, bocetos y prototipos para transformar la idea inicial en una interfaz visualmente atractiva y fácil de usar.</p>
          </div>
          <div className="absolute left-[889px] top-[1165px] -translate-y-1/2 flex flex-col justify-center w-[293px] h-[112px] font-sans font-normal text-verde text-[16px] tracking-[0.16px] pointer-events-none">
            <p className="leading-[1.5] mb-0">Nuestro objetivo es mantener viva la esencia y la riqueza de los destinos latinoamericanos a través de un sistema de diseño que refleje la calidez y diversidad de cada cultura.</p>
          </div>

          {/* Título */}
          <div className="absolute left-[1075px] top-[85px] w-[138px] h-[31px] flex flex-col justify-center text-center pointer-events-none">
            <p className="font-nohemi font-normal text-[#fff7e2] text-[30px] leading-[0.83] tracking-[0.3px] mb-0">Nosotras</p>
          </div>

          {/* Footer pills + names */}
          <div className="absolute border border-verde rounded-[100px] left-[105px] top-[1568px] w-[201px] h-[42px]" />
          <div className="absolute border border-verde rounded-[100px] left-[373px] top-[1569px] w-[195px] h-[42px]" />
          <div className="absolute border border-verde rounded-[100px] left-[634px] top-[1569px] w-[195px] h-[42px]" />
          <div className="absolute border border-verde rounded-[100px] left-[894px] top-[1569px] w-[265px] h-[42px]" />

          <div className="absolute left-[120px] top-[1590px] -translate-y-1/2 w-[177px] h-[80px] flex flex-col justify-center">
            <span className="font-nohemi font-normal text-verde text-[25px] leading-[0.83] tracking-[0.25px]">Andrea Morán</span>
          </div>
          <div className="absolute left-[393px] top-[1590px] -translate-y-1/2 w-[164px] h-[80px] flex flex-col justify-center">
            <span className="font-nohemi font-normal text-verde text-[25px] leading-[0.83] tracking-[0.25px]">Hashlee Petit</span>
          </div>
          <div className="absolute left-[653px] top-[1590px] -translate-y-1/2 w-[167px] h-[80px] flex flex-col justify-center">
            <span className="font-nohemi font-normal text-verde text-[25px] leading-[0.83] tracking-[0.25px]">Nataly Cohen</span>
          </div>
          <div className="absolute left-[916px] top-[1590px] -translate-y-1/2 w-[243px] h-[80px] flex flex-col justify-center">
            <span className="font-nohemi font-normal text-verde text-[25px] leading-[0.83] tracking-[0.25px]">Mauriany Semprún</span>
          </div>
        </div>
      </ScaleToFitCanvas>
    </main>
  );
}