"use client";

import BackButton from "@/components/ui/BackButton";

export default function MobileNosotras() {
  return (
    <div className="relative md:hidden min-h-screen bg-azul-claro overflow-hidden font-sans pb-12">
      <div className="absolute w-[176px] h-[176px] left-[277px] top-[272px] bg-[#00BCFF] rounded-full blur-[111px] opacity-70 pointer-events-none" />
      <div className="absolute w-[327px] h-[329px] left-[-82px] top-[600px] bg-[#00BCFF] rounded-full blur-[150px] opacity-70 pointer-events-none" />

      <header className="relative z-10 flex items-center justify-between px-6 pt-5">
        <BackButton />
        <span className="font-nohemi font-normal text-[#fff7e2] text-[30px] leading-[0.83] tracking-[0.3px]">
          Nosotras
        </span>
      </header>

      <div className="relative z-10 mt-12 px-6">
        <div className="relative w-full max-w-[420px] mx-auto aspect-[4/3]">
          <div className="absolute inset-0 bg-[#f8f4e8] rotate-2 rounded-[4px]" />
          <img
            src="/Nosotras/foto-hero-1.png"
            alt="Equipo Rumbo Latam"
            className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rotate-[2.76deg]"
          />
          <img
            src="/Nosotras/hero-badge.svg"
            alt=""
            className="absolute -top-6 -right-2 w-24 h-auto max-w-none -rotate-6"
          />
          <img
            src="/Nosotras/sello-grupo33.svg"
            alt=""
            className="absolute -bottom-10 -left-4 w-28 h-auto max-w-none rotate-[4deg]"
          />
        </div>

        <h1 className="mt-20 text-center font-nohemi font-black text-naranja text-[38px] leading-[0.9] -rotate-[3deg]">
          <span className="block">¿Qué hay detrás</span>
          <span className="block">de este proyecto?</span>
        </h1>
      </div>

      <div className="relative z-10 mt-14 px-6 space-y-10">
        <article className="relative bg-[#fff7e2] rounded-[20px] p-6 shadow-lg">
          <div className="relative h-52 overflow-hidden rounded-xl">
            <img
              src="/Nosotras/card1-foto.png"
              alt="Foto de la tarjeta Enfoque en la experiencia"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="/Nosotras/card1-strip.png"
              alt=""
              className="absolute left-0 bottom-0 w-36 h-auto max-w-none rotate-[-4deg]"
            />
            <img
              src="/Nosotras/card1-sello.svg"
              alt=""
              className="absolute -right-6 -top-6 w-40 h-auto max-w-none rotate-[8deg]"
            />
          </div>
          <h2 className="mt-5 text-center font-nohemi font-black text-naranja text-[28px] leading-[0.9] tracking-[0.28px]">
            <span className="block font-normal">Enfoque en</span>
            <span className="block font-black">la experiencia</span>
          </h2>
          <p className="mt-4 font-sans font-normal text-verde text-base leading-relaxed text-center">
            Diseñamos siempre pensando en las necesidades del viajero, priorizando la accesibilidad, la intuición y la claridad en cada pantalla para que cualquiera pueda trazar su ruta sin fricciones.
          </p>
        </article>

        <article className="relative bg-[#fff7e2] rounded-[20px] p-6 shadow-lg">
          <div className="relative overflow-hidden rounded-xl">
            <div className="relative w-full aspect-[345/340] overflow-visible">
              {/* Ticket top-left */}
              <div className="absolute left-[10.63%] top-[6.09%] w-[67.68%] h-[38.90%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(-6.59deg) scaleX(1.01) scaleY(0.99) skewX(2.07deg)" }}>
                  <img src="/Nosotras/coll-ticket-a.svg" alt="" className="block max-w-none w-full h-[82.6%]" />
                </div>
              </div>

              {/* Photo 152 */}
              <div className="absolute left-[13.51%] top-[7.55%] w-[61.82%] h-[33.17%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(-7.6deg)" }}>
                  <div className="w-[95.48%] h-[76.75%] relative">
                    <img src="/Nosotras/coll-photo-152.png" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" />
                  </div>
                </div>
              </div>

              {/* Ticket middle-right */}
              <div className="absolute left-[46.96%] top-[34.06%] w-[43.04%] h-[58.96%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(-2.8deg) skewX(-1.26deg)" }}>
                  <div className="w-[96.62%] h-[96.53%] relative">
                    <img src="/Nosotras/coll-ticket-b.svg" alt="" className="absolute block inset-0 max-w-none size-full" />
                  </div>
                </div>
              </div>

              {/* Photo 153 */}
              <div className="absolute left-[49.53%] top-[29.24%] w-[36.94%] h-[12.93%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(-0.98deg)" }}>
                  <div className="w-[99.46%] h-[95.08%] relative overflow-hidden pointer-events-none">
                    <img src="/Nosotras/coll-photo-153.png" alt="" className="absolute left-0 top-0 w-full h-[205.34%] max-w-none" />
                  </div>
                </div>
              </div>

              {/* Photo 151 */}
              <div className="absolute left-[48.80%] top-[36.44%] w-[39.14%] h-[52.17%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(-2.25deg)" }}>
                  <div className="w-[95.07%] h-[97.23%] relative">
                    <img src="/Nosotras/coll-photo-151.png" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" />
                  </div>
                </div>
              </div>

              {/* Ticket bottom-left */}
              <div className="absolute left-0 top-[30.21%] w-[42.08%] h-[48.50%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(5.82deg) skewX(-1.26deg)" }}>
                  <div className="w-[87.49%] h-[92.89%] relative">
                    <img src="/Nosotras/coll-ticket-c.svg" alt="" className="absolute block inset-0 max-w-none size-full" />
                  </div>
                </div>
              </div>

              {/* Photo 150 */}
              <div className="absolute left-[2.18%] top-[31.74%] w-[37.13%] h-[43.75%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(6.15deg)" }}>
                  <div className="w-[89.05%] h-[92.30%] relative">
                    <img src="/Nosotras/coll-photo-150.png" alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" />
                  </div>
                </div>
              </div>

              {/* Photo 148 – strip top-right */}
              <div className="absolute left-[6.95%] top-[25.51%] w-[30.78%] h-[13.88%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(7.64deg)" }}>
                  <div className="w-[96.63%] h-[71.69%] relative overflow-hidden pointer-events-none">
                    <img src="/Nosotras/coll-photo-148.png" alt="" className="absolute left-0 top-0 w-full h-[205.34%] max-w-none" />
                  </div>
                </div>
              </div>

              {/* Photo 148 – strip bottom-left */}
              <div className="absolute left-[24.14%] top-[2.06%] w-[35.99%] h-[17.71%] flex items-center justify-center">
                <div className="flex-none" style={{ transform: "rotate(-8.99deg)" }}>
                  <div className="w-[95.89%] h-[69.91%] relative overflow-hidden pointer-events-none">
                    <img src="/Nosotras/coll-photo-148.png" alt="" className="absolute left-0 top-[-91.4%] w-full h-[191.4%] max-w-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="mt-5 text-center font-nohemi font-black text-naranja text-[28px] leading-[0.9] tracking-[0.28px]">
            <span className="block font-normal">Proceso</span>
            <span className="block font-black">creativo</span>
          </h2>
          <p className="mt-4 font-sans font-normal text-verde text-base leading-relaxed text-center">
            Durante la etapa de diseño se combinó investigación, bocetos y prototipos para transformar la idea inicial en una interfaz visualmente atractiva y fácil de usar.
          </p>
        </article>

        <article className="relative bg-[#fff7e2] rounded-[20px] p-6 shadow-lg">
          <div className="relative h-52 overflow-hidden rounded-xl">
            <img
              src="/Nosotras/card3-foto.png"
              alt="Foto de la tarjeta Identidad cultural"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <img
              src="/Nosotras/card3-foto-top.png"
              alt=""
              className="absolute -right-5 -top-8 w-24 h-auto max-w-none rotate-[171.78deg]"
            />
            <img
              src="/Nosotras/card3-sello.svg"
              alt=""
              className="absolute -left-6 -bottom-6 w-40 h-auto max-w-none -rotate-6"
            />
          </div>
          <h2 className="mt-5 text-center font-nohemi font-black text-naranja text-[28px] leading-[0.9] tracking-[0.28px]">
            <span className="block font-normal">Identidad</span>
            <span className="block font-black">cultural</span>
          </h2>
          <p className="mt-4 font-sans font-normal text-verde text-base leading-relaxed text-center">
            Nuestro objetivo es mantener viva la esencia y la riqueza de los destinos latinoamericanos a través de un sistema de diseño que refleje la calidez y diversidad de cada cultura.
          </p>
        </article>
      </div>

      <footer className="relative z-10 mt-14 flex flex-col items-center gap-4 px-6">
        {["Andrea Morán", "Hashlee Petit", "Nataly Cohen", "Mauriany Semprún"].map(
          (name) => (
            <div key={name} className="rounded-[100px] border border-verde px-8 py-2.5">
              <span className="font-nohemi font-normal text-verde text-[25px] leading-none tracking-[0.25px]">
                {name}
              </span>
            </div>
          )
        )}
      </footer>
    </div>
  );
}