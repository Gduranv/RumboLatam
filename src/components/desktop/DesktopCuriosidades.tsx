"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ScaleToFitCanvas from "@/components/ui/ScaleToFitCanvas";
import { countriesData } from "@/data/countries";
import { getPais } from "@/data";
import type { Curiosidad } from "@/types";

interface DesktopCuriosidadesProps {
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

const SIGNO_INTERROGACION =
  "M175.596 120.412V122.438H150.735V115.628C150.735 101.809 159.873 97.0921 165.517 94.1688L168.54 92.6075C173.244 90.1825 175.461 89.0531 175.461 85.3658C175.461 81.911 172.102 79.8846 166.592 79.8846C158.663 79.8846 154.9 84.2031 154.9 93.2387V94.8997H125V92.8068C125 68.1582 138.539 56 166.054 56C191.52 56 206 66.3976 206 84.6681C206 100.281 195.417 105.497 188.9 108.686L185.876 110.147C180.702 112.672 175.596 115.163 175.596 120.412ZM176.268 126.425V153H150.063V126.425H176.268Z";

const ESTRELLA_COLAPSADA =
  "M29.999 24.271L16.5 17L30.001 44L43.5 17L29.999 24.271Z";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

interface CuriosityCardProps {
  countryId: string;
  index: number;
  cardX: number;
  curiosidad: Curiosidad;
}

function CuriosityCard({ countryId, index, cardX, curiosidad }: CuriosityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(expanded), 40);
    return () => clearTimeout(t);
  }, [expanded]);

  const imageSrc =
    curiosidad.image.src ||
    `/Paises/${countryId}/Curiosidades/curiosidad${index + 1}.png`;
  const accent = getPais(countryId)?.curiosidadesAccent ?? "#D4AF37";

  return (
    <div
      className="absolute z-[46]"
      style={{
        left: cardX,
        top: 955,
        width: 331,
        height: expanded ? 559 : 246,
        overflow: "hidden",
        transition: "height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {expanded ? (
        /* Card desplegada (estado actual) */
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.98)",
            transformOrigin: "top center",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {/* Banda superior */}
          <div className="absolute rounded-[20px]" style={{ left: 0, top: 0, width: 331, height: 226, background: accent }} />

          {/* Cuerpo blanco con texto centrado en ambos ejes */}
          <div
            className="absolute bg-white rounded-[20px] flex items-center justify-center"
            style={{ left: 17, top: 176, width: 297, height: 353 }}
          >
            <p className="text-center text-[14px] leading-[1.5] text-black font-sans px-5">
              <RichText text={curiosidad.text} />
            </p>
          </div>

          {/* Foto con sombra */}
          <div
            className="absolute rounded-[15px] overflow-hidden bg-[#D9E9EE]"
            style={{ left: 9, top: 10, width: 312, height: 206, boxShadow: "0 4px 2px rgba(0,0,0,0.25)" }}
          >
            <img src={imageSrc} alt={curiosidad.image.alt} className="w-full h-full object-cover" />
          </div>

          {/* Botón dorado */}
          <button
            type="button"
            onClick={() => setExpanded(false)}
            aria-label="Ocultar curiosidad"
            className="absolute cursor-pointer hover:scale-105 transition-transform"
            style={{ left: 135.5, top: 499, width: 60, height: 60 }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill={accent} />
              <path d="M30.4992 35.7294L17 43L30.5008 16L44 43L30.4992 35.7294Z" fill="#FFF7E2" />
            </svg>
          </button>
        </div>
      ) : (
        /* Card colapsada (por defecto): foto en blur con signo "?" y botón dorado */
        <>
          {/* Banda superior */}
          <div className="absolute rounded-[20px]" style={{ left: 0, top: 0, width: 331, height: 226, background: accent }} />

          {/* Foto desenfocada */}
          <div
            className="absolute rounded-[15px] overflow-hidden bg-[#D9E9EE]"
            style={{ left: 9, top: 10, width: 312, height: 206, boxShadow: "0 4px 2px rgba(0,0,0,0.25)" }}
          >
            <img
              src={imageSrc}
              alt={curiosidad.image.alt}
              className="w-full h-full object-cover"
              style={{ filter: "blur(8px)", transform: "scale(1.15)" }}
            />
          </div>

          {/* Tinte dorado translúcido sobre la foto */}
          <div
            className="absolute"
            style={{ left: 9, top: 10, width: 312, height: 206, borderRadius: 15, opacity: 0.12, background: accent }}
          />

          {/* Signo de interrogación */}
          <svg
            className="absolute pointer-events-none"
            width="331"
            height="246"
            viewBox="0 0 331 246"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={SIGNO_INTERROGACION} fill="#FFF7E2" />
          </svg>

          {/* Botón dorado (desplegar) */}
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-label="Ver curiosidad"
            className="absolute cursor-pointer hover:scale-105 transition-transform"
            style={{ left: 135.5, top: 186, width: 60, height: 60 }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="30" fill={accent} />
              <path d={ESTRELLA_COLAPSADA} fill="#FFF7E2" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default function DesktopCuriosidades({ countryId }: DesktopCuriosidadesProps) {
  return (
    <main className="w-full bg-[#A3DBEF] mx-auto relative overflow-hidden hidden md:block">
      <ScaleToFitCanvas height={1920} fullWidth>
      {/* Cintillo superior (como en las demás páginas) */}
      <section className="absolute top-0 left-0 z-[50]" style={{ width: 1280, height: 188 }}>
        <svg width="1280" height="188" viewBox="0 0 1280 188" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H1280V50L640 188L0 50V0Z" fill="#FF7223" />
          <g clipPath="url(#clip0_2256_446)">
            <path d="M702.343 53.3137H693.2L685.438 68.1609L689.025 78.6902L701.288 93.064L710.17 76.7638L711 66.0781L702.343 53.3137ZM702.118 72.7917L699.62 77.5912L696.365 73.2074L695.428 70.466L696.594 66.2098L700.438 66.144L702.343 69.898L702.118 72.7917Z" fill="white" />
            <path d="M656.45 54.3222L655.022 87.5607L646.075 87.0791L649.122 70.2561L640.894 86.4575L632.106 70.3384L635.374 86.4987L626.234 86.0047L626.369 56.1086L635.464 55.5735L640.71 68.6302L647.318 54.8655L656.45 54.3222Z" fill="white" />
            <path d="M622.031 56.3762V85.7249L605.793 84.8069L599.557 57.7181L607.747 57.2283L611.023 78.8425H615.881L613.791 56.8661L622.031 56.3762Z" fill="white" />
            <path d="M602.304 51.1568L596.072 34.6426L573.5 39.5738L574.15 51.3091L568.254 51.7208L568 59.6033L574.62 59.2082L576.215 83.1399L588.254 83.8149L583.351 58.6978L588.389 58.4014L592.944 84.0825L601.147 84.5435L594.699 58.0145L602.3 51.161L602.304 51.1568ZM582.059 50.7658L582.492 45.7646L589.587 44.5215L591.542 50.1072L582.059 50.7658Z" fill="white" />
            <path d="M606.042 139.569L576.657 143.356C576.649 142.788 576.632 141.376 576.616 139.347C576.497 127.175 576.129 90.7837 576.146 86.7869L588.143 87.5196L587.411 127.307L604.852 124.533L606.042 139.569Z" fill="white" />
            <path d="M625.478 111.41C623.781 111.62 621.614 111.892 619.336 112.184L619.103 112.213L615.77 88.8943L593.063 87.783L592.351 121.734L604.549 120.157L603.662 110.455L609.419 109.764L609.44 110.015L611.64 138.849L625.102 137.112L627.89 111.105C627.293 111.184 626.467 111.282 625.478 111.41ZM603.228 105.429L603.69 97.7072L607.902 97.4478L609.162 104.919L603.224 105.429H603.228Z" fill="white" />
            <path d="M665.765 106.38L647.593 108.632L648.877 134.053L656.794 133.033L656.233 126.265L662.065 125.545L662.58 132.287L669.744 131.365L665.761 106.384L665.765 106.38ZM655.869 121.454L656.164 115.057L660.036 114.633L661.668 120.737L655.865 121.454H655.869Z" fill="white" />
            <path d="M702.343 127.159L693.931 128.241L693.06 115.773L687.552 128.822L679.39 117.601L681.292 129.871L673.772 130.843L669.96 105.849C672.316 105.54 680.457 104.482 683.042 104.153L683.05 113.057L700.908 100.169L702.339 127.163L702.343 127.159Z" fill="white" />
            <path d="M680.678 67.9222L688.419 53.3137L660.412 54.0876L659.198 87.8323L683.868 89.0178L684.698 78.9372L680.625 68.0169L680.678 67.9222ZM669.548 81.1064L669.396 75.1297L673.931 74.0718L675.665 80.382L669.548 81.1023V81.1064ZM673.911 66.8437L668.901 67.8152L669.678 61.435L676.148 61.0522L673.907 66.8437H673.911Z" fill="white" />
            <path d="M686.276 106.734L686.808 99.8517L643.303 105.392L643.082 105.421L644.44 134.617L629.53 136.54L632.777 106.738L622.648 108.035L619.565 89.0961L687.123 92.6854L687.356 92.7019L688.035 83.8602L699.849 96.3941L686.276 106.734Z" fill="white" />
          </g>
          <circle cx="133" cy="82" r="32" fill="#FFF7E2" />
          <path d="M140.383 82.287L149 98.5721L117 82.2851L149 66L140.383 82.287Z" fill="#FF7223" />
          <defs>
            <clipPath id="clip0_2256_446">
              <rect width="143" height="108.713" fill="white" transform="translate(568 34.6426)" />
            </clipPath>
          </defs>
        </svg>

        {/* Logo Rumbo Latam → inicio */}
        <Link
          href="/"
          aria-label="Ir al inicio"
          className="absolute block cursor-pointer hover:scale-105 transition-transform"
          style={{ left: 568, top: 34, width: 143, height: 109 }}
        />

        {/* Volver al país (círculo crema del cintillo) */}
        <Link
          href={`/paises/${countryId}`}
          aria-label="Volver al país"
          className="absolute block cursor-pointer hover:scale-105 transition-transform"
          style={{ left: 101, top: 50, width: 64, height: 64 }}
        />
      </section>

      {/* Mapa curiosidades pegado al borde derecho del botón */}
      <div className="absolute left-[131px] top-[69px] w-[1029px] h-[1074px] pointer-events-none z-40">
        <img src="/OtrosRecursos/mapaCuriosidades.png" alt="" width={1029} height={1074} className="w-full h-full object-contain" aria-hidden />
      </div>

      {/* Mano sobre la mitad del mapa */}
      <div className="absolute left-[575.594px] top-0 w-[705px] h-[707px] pointer-events-none z-[45]">
        <svg width="705" height="707" viewBox="0 0 705 707" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1160.95 -871.432L1303.65 -889.588C1303.09 -887.196 1303.46 -885.842 1304.4 -882.336L1521.34 -80.4316C1522.21 -77.1857 1520.18 -77.2143 1518.75 -76.3237L1500.26 -64.5519C1421.42 -4.22192 1341.44 54.6612 1258.85 110.748L915.549 343.845L727.267 468.551L650.141 517.633C578.57 560.77 507.056 601.944 433.363 641.515C400.429 659.191 367.283 673.383 332.139 684.838C306.462 693.208 281.39 698.335 254.711 702.9C234.323 706.395 213.813 707.585 193.588 705.881C187.188 705.333 181.823 698.745 180.979 694.076C179.98 688.486 182.899 681.42 188.638 678.58L234.584 655.833C240.033 653.126 245.37 651.046 249.118 645.677L208.495 657.791C188.018 663.907 168.194 671.09 147.107 673.313L117.427 676.456C107.32 677.531 96.2089 671.617 93.6518 661.621C91.4304 652.907 97.5969 643.778 105.895 639.94L179.897 605.663C184.698 603.441 189.767 601.664 192.357 596.539C154.192 608.531 117.635 619.589 79.0694 626.165C60.3491 629.353 35.8741 630.28 28.8096 614.259C17.7812 589.247 55.8481 581.161 79.1394 571.081L140.47 544.555L147.677 539.839C141.441 539.52 136.658 541.433 131.044 542.992C107.978 549.418 85.6974 556.435 62.1712 560.598C42.3399 564.1 17.3777 568.887 5.12319 555.196C-2.45809 546.722 -1.11455 534.063 5.80598 525.432C11.6178 518.189 19.1673 513.296 27.7932 509.475L106.65 474.599C145.913 455.715 182.265 432.942 216.897 407.357C224.49 401.749 226.205 390.807 219.878 384.956C214.464 379.947 206.275 378.457 199.084 379.679L134.292 390.608C116.751 393.569 98.2522 391.107 84.8326 380.02C75.7854 372.538 71.9169 361.885 74.4318 351.647C76.9467 341.409 85.3369 333.474 96.5091 331.573L135.169 324.985C154.06 321.776 171.899 317.396 190.292 311.488C208.261 305.71 226.264 302.614 245.059 300.472L281.119 296.363C352.646 291.023 413.566 251.619 465.949 204.075C495.098 177.614 521.8 150.315 546.14 119.383L611.133 36.7587C658.607 -23.5896 702.307 -85.7023 741.887 -151.703L844.398 -322.567L1160.95 -871.47L1160.95 -871.432Z" fill="#E89C9E" />
          <path d="M251.349 295.728L113.395 418.782C108.055 423.546 107.643 432.054 112.475 437.785L300.757 661.098C305.589 666.829 313.836 667.613 319.176 662.849L457.13 539.795C462.47 535.031 462.882 526.523 458.05 520.792L269.768 297.479C264.936 291.748 256.689 290.964 251.349 295.728Z" fill="#FF7223" />
          <path d="M369.543 415.448L458.012 520.377C462.824 526.084 462.409 534.635 457.091 539.379L324.673 657.496C453.419 529.883 369.543 415.448 369.543 415.448Z" fill="#D84F0A" fillOpacity="0.5" />
          <path d="M201.255 543.151L112.786 438.223C107.974 432.515 108.388 423.964 113.706 419.22L246.124 301.104C117.379 428.717 201.255 543.151 201.255 543.151Z" fill="#D84F0A" fillOpacity="0.5" />
          <path d="M310.843 488.109L312.655 490.259L288.17 512.1L282.079 504.875C269.718 490.214 274.499 477.182 277.443 469.123L279.024 464.81C281.488 458.106 282.661 454.959 279.363 451.048C276.273 447.382 271.151 448.184 265.725 453.025C257.916 459.99 258.073 467.877 266.155 477.463L267.641 479.225L238.193 505.492L236.321 503.272C214.274 477.123 216.733 452.33 243.832 428.158C268.912 405.786 292.473 404.096 308.816 423.479C322.781 440.042 317.023 454.872 313.457 463.981L311.786 468.188C308.949 475.412 306.148 482.541 310.843 488.109ZM316.883 493.898L340.653 522.091L314.845 545.112L291.074 516.919L316.883 493.898Z" fill="#FFF7E2" />
          <path d="M280.463 279.568L131.745 388.67C125.987 392.894 124.828 401.295 129.155 407.435L297.763 646.681C302.09 652.821 310.265 654.375 316.022 650.151L464.741 541.049C470.498 536.825 471.658 528.424 467.33 522.284L298.723 283.038C294.395 276.898 286.221 275.344 280.463 279.568Z" fill="#13522B" />
          <path d="M388.102 409.453L467.327 521.868C471.636 527.982 470.471 536.427 464.737 540.633L321.986 645.357C461.9 530.866 388.102 409.453 388.102 409.453Z" fill="#04411B" />
          <path d="M208.648 520.314L129.423 407.899C125.114 401.785 126.279 393.34 132.013 389.134L274.764 284.41C134.85 398.901 208.648 520.314 208.648 520.314Z" fill="#04411B" />
          <path d="M323.035 476.016L324.658 478.319L298.262 497.683L292.807 489.943C281.738 474.237 287.662 461.758 291.313 454.039L293.273 449.909C296.324 443.49 297.774 440.479 294.82 436.288C292.053 432.361 286.863 432.675 281.013 436.966C272.595 443.142 272.059 450.981 279.296 461.251L280.627 463.139L248.881 486.428L247.204 484.049C227.461 456.034 232.097 431.67 261.311 410.239C288.348 390.403 312.051 390.943 326.685 411.708C339.191 429.454 332.133 443.624 327.767 452.325L325.728 456.342C322.257 463.241 318.831 470.05 323.035 476.016ZM328.564 482.326L349.851 512.531L322.028 532.942L300.742 502.737L328.564 482.326Z" fill="#FFF7E2" />
          <path d="M293.364 249.016L139.385 350.145C133.424 354.06 131.882 362.365 135.942 368.695L294.117 615.35C298.176 621.68 306.299 623.638 312.26 619.724L466.24 518.595C472.201 514.68 473.742 506.375 469.683 500.045L311.507 253.39C307.448 247.059 299.325 245.102 293.364 249.016Z" fill="#70B694" />
          <path d="M395.375 383.734L469.698 499.631C473.74 505.935 472.191 514.282 466.255 518.181L318.454 615.251C463.852 508.316 395.375 383.734 395.375 383.734Z" fill="#4BA67A" />
          <path d="M210.516 485.067L136.194 369.171C132.151 362.867 133.701 354.519 139.637 350.62L287.437 253.55C142.039 360.486 210.516 485.067 210.516 485.067Z" fill="#4BA67A" />
          <path d="M327.162 446.725L328.685 449.099L301.355 467.048L296.238 459.069C285.854 442.876 292.355 430.751 296.362 423.251L298.513 419.238C301.861 413.001 303.45 410.077 300.679 405.756C298.083 401.708 292.867 401.759 286.811 405.737C278.095 411.461 277.203 419.238 283.993 429.825L285.241 431.772L252.372 453.359L250.8 450.907C232.278 422.024 238.025 398.003 268.272 378.138C296.266 359.752 319.997 361.481 333.726 382.89C345.458 401.185 337.743 414.937 332.975 423.379L330.75 427.275C326.959 433.969 323.218 440.575 327.162 446.725ZM332.419 453.285L352.388 484.426L323.582 503.345L303.612 472.204L332.419 453.285Z" fill="#FFF7E2" />
          <path d="M320.762 244.599L158.373 331.585C152.086 334.952 149.81 343.087 153.288 349.754L288.823 609.539C292.301 616.206 300.217 618.881 306.503 615.514L468.893 528.529C475.179 525.161 477.455 517.027 473.977 510.36L338.442 250.574C334.964 243.907 327.048 241.232 320.762 244.599Z" fill="#FF7223" />
          <path d="M410.346 387.882L474.03 509.948C477.494 516.588 475.206 524.764 468.946 528.117L313.073 611.612C467.433 518.077 410.346 387.882 410.346 387.882Z" fill="#D84F0A" fillOpacity="0.5" />
          <path d="M217.18 472.315L153.496 350.249C150.032 343.609 152.32 335.433 158.581 332.08L314.453 248.585C160.093 342.12 217.18 472.315 217.18 472.315Z" fill="#D84F0A" fillOpacity="0.5" />
          <path d="M336.78 444.535L338.085 447.036L309.263 462.475L304.878 454.07C295.981 437.016 303.537 425.519 308.199 418.406L310.699 414.602C314.59 408.688 316.433 405.917 314.059 401.367C311.835 397.103 306.635 396.688 300.248 400.11C291.056 405.034 289.474 412.7 295.292 423.851L296.361 425.901L261.697 444.469L260.35 441.886C244.479 411.466 252.347 388.054 284.246 370.967C313.769 355.152 337.25 358.993 349.014 381.541C359.067 400.81 350.156 413.818 344.654 421.802L342.089 425.483C337.717 431.812 333.401 438.058 336.78 444.535ZM341.431 451.539L358.542 484.337L328.162 500.61L311.051 467.812L341.431 451.539Z" fill="#FFF7E2" />
          <path d="M381.408 258.126L207.171 317.943C200.426 320.259 196.874 327.923 199.238 335.061L291.356 613.221C293.72 620.359 301.105 624.269 307.85 621.953L482.087 562.137C488.832 559.821 492.384 552.157 490.019 545.019L397.902 266.859C395.538 259.721 388.153 255.811 381.408 258.126Z" fill="#FF7223" />
          <path d="M446.853 413.921L490.137 544.62C492.491 551.729 488.921 559.432 482.204 561.738L314.959 619.155C482.322 551.585 446.853 413.921 446.853 413.921Z" fill="#D84F0A" fillOpacity="0.5" />
          <path d="M242.646 466.282L199.363 335.583C197.009 328.474 200.578 320.771 207.295 318.464L374.541 261.048C207.178 328.617 242.646 466.282 242.646 466.282Z" fill="#D84F0A" fillOpacity="0.5" />
          <path d="M365.154 458.042L366.04 460.719L335.116 471.336L332.135 462.337C326.088 444.076 335.391 433.94 341.132 427.667L344.21 424.313C348.999 419.1 351.263 416.661 349.65 411.788C348.138 407.223 343.072 405.98 336.218 408.333C326.356 411.718 323.565 419.032 327.519 430.972L328.246 433.167L291.053 445.935L290.137 443.17C279.35 410.598 290.871 388.75 325.097 377C356.774 366.125 379.336 373.682 387.332 397.825C394.164 418.456 383.283 429.867 376.571 436.865L373.449 440.088C368.118 445.633 362.857 451.106 365.154 458.042ZM368.621 465.7L380.251 500.818L347.654 512.008L336.024 476.891L368.621 465.7Z" fill="#FFF7E2" />
        </svg>
      </div>

      {/* Título y descripción de la sección (iguales para todos los países) */}
      <div className="absolute z-[46] pointer-events-none" style={{ left: 67, top: 358, width: 405 }}>
        <h1 className="font-nohemi leading-[0.88] text-[#13522B] text-[100px]">
          <span className="font-bold">Datos</span>
          <br aria-hidden />
          <span className="font-normal">curiosos</span>
        </h1>
      </div>
      <div className="absolute z-[46] pointer-events-none" style={{ left: 67, top: 562, width: 460 }}>
        <p className="text-[16px] leading-[1.5] text-[#13522B] font-sans">
          Descubre los <span className="font-extrabold">detalles únicos y asombrosos</span> sobre cultura, naturaleza y sociedad que hacen especial a cada país y enriquecerán el recorrido a tu destino ideal.
        </p>
      </div>

      {/* Fondo arena rumbo de la sección (1418 x 735, arriba del footer) */}
      <div
        className="absolute bg-[#FFF7E2] rounded-[50px] z-[46] pointer-events-none"
        style={{ left: -69, top: 815, width: 1418, height: 735 }}
      />

      {/* Encabezado: bandera + nombre del país */}
      <div
        className="absolute z-[46] flex items-center gap-3"
        style={{ left: 98, top: 858 }}
      >
        <img
          src={countriesData[countryId]?.flagPath ?? "/OtrosRecursos/ICONOCURIOSIDADES.png"}
          alt={`Bandera de ${getPais(countryId)?.name ?? countryId}`}
          className="w-[67px] h-[68px] rounded-full object-cover border-4 border-white shadow-sm"
        />
        <h2
          className="font-nohemi font-bold text-[48px] leading-none"
          style={{ color: getPais(countryId)?.curiosidadesNameColor ?? "#13522B" }}
        >
          {getPais(countryId)?.name ?? countryId}
        </h2>
      </div>

      {/* Cards de datos curiosos: colapsadas por defecto (blur + "?"), click en el botón para desplegar */}
      {(getPais(countryId)?.curiosidades ?? []).map((curiosidad, index) => {
        const cardXs = [98, 474, 851];
        const cardX = cardXs[index];
        return (
          <CuriosityCard
            key={curiosidad.text}
            countryId={countryId}
            index={index}
            cardX={cardX}
            curiosidad={curiosidad}
          />
        );
      })}

      {/* Footer */}
      <footer className="w-full absolute left-0 right-0 bottom-0 z-10" style={{ height: 360 }}>
        <div className="absolute left-0 top-0 w-full overflow-hidden leading-none" style={{ height: 360 }}>
          <svg width="100%" height="360" viewBox="0 0 1280 360" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={WAVE_CLARA} fill="#6CC6E6" />
          </svg>
        </div>
        <div className="absolute left-0 top-[106px] w-full overflow-hidden leading-none" style={{ height: 254 }}>
          <svg width="100%" height="254" viewBox="0 0 1280 254" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={WAVE_OSCURA} fill="#4BB3D7" />
          </svg>
        </div>

        <div className="relative flex items-center justify-between px-6 pt-[249px] pb-6">
          <div className="text-white text-[18px] leading-snug tracking-wide font-sans text-left">
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
      </ScaleToFitCanvas>
    </main>
  );
}