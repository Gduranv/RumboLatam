"use client";

import Link from "next/link";
import { useState } from "react";
import { NosotrasModal } from "@/components/modals/NosotrasModal";

interface CountryHeaderButtonsProps {
  backUrl?: string;
  countryId?: string;
  hideCuriosidades?: boolean;
}

export default function CountryHeaderButtons({
  backUrl = "/",
  countryId,
  hideCuriosidades = false,
}: CountryHeaderButtonsProps) {
  const [isNosotrasOpen, setIsNosotrasOpen] = useState(false);

  return (
    <>
      {/* Botón Flecha Atrás */}
      <Link href={backUrl}>
        <button className="absolute top-[50px] left-[101px] z-30 hover:scale-105 transition-transform cursor-pointer">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
            <path d="M39.383 32.287L48 48.5721L16 32.2851L48 16L39.383 32.287Z" fill="#FF7223" />
          </svg>
        </button>
      </Link>

      {/* Botón Curiosidades (ICONOCURIOSIDADES) */}
      {!hideCuriosidades && (
        <Link href={countryId ? `/paises/${countryId}/curiosidades` : "/"}>
          <button
            type="button"
            aria-label="Curiosidades"
            className="absolute top-[50px] right-[100px] z-30 hover:scale-105 transition-transform cursor-pointer"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
              <path d="M40.1373 44.466H23.863V50.9565H40.1373V44.466Z" fill="#FF7223" />
              <path d="M40.1376 13.0441H23.8634L15.7259 27.1381L23.8634 41.232H40.1376L48.2744 27.1381L40.1376 13.0441ZM33.253 35.7831H29.8898V32.4294H33.253V35.7831ZM38.8589 25.2005C38.7524 25.6009 38.6118 25.9552 38.4359 26.2636C38.26 26.5719 38.0569 26.8405 37.8262 27.0694C37.5954 27.2982 37.3533 27.4994 37.0998 27.6728C36.847 27.8462 36.5922 27.9975 36.3369 28.1261C36.0815 28.2547 35.8419 28.3701 35.6175 28.4723L35.1578 28.6866C34.917 28.797 34.6818 28.9105 34.4535 29.0265C34.2246 29.1431 34.0216 29.2736 33.8438 29.4187C33.666 29.5637 33.5229 29.7264 33.4151 29.9061C33.3066 30.0858 33.2524 30.2963 33.2524 30.5372V31.1072H29.8955V30.1885C29.8955 29.7881 29.9384 29.43 30.0241 29.1135C30.1099 28.797 30.2265 28.5132 30.3734 28.2623C30.5204 28.0107 30.6919 27.7894 30.8879 27.5977C31.084 27.4061 31.2902 27.2333 31.5065 27.0801C31.7228 26.9269 31.9447 26.79 32.1711 26.6696C32.398 26.5492 32.6175 26.4382 32.8299 26.3361L33.3136 26.0908C33.5588 25.9685 33.7978 25.8449 34.0304 25.7201C34.2631 25.5958 34.4693 25.4502 34.649 25.285C34.8287 25.1198 34.9731 24.9275 35.0809 24.7093C35.1893 24.4912 35.2436 24.2283 35.2436 23.9224C35.2436 23.5832 35.166 23.2774 35.0109 23.0038C34.8558 22.7301 34.637 22.4962 34.3558 22.302C34.0739 22.1085 33.7341 21.9584 33.3356 21.8518C32.9371 21.7459 32.4951 21.6923 32.009 21.6923C31.4781 21.6923 31.0065 21.7585 30.5941 21.8916C30.1818 22.0246 29.8369 22.2283 29.5588 22.5044C29.2814 22.78 29.0702 23.1293 28.9252 23.5523C28.7801 23.9748 28.7076 24.4742 28.7076 25.0504V25.3323H24.9832V24.9647C24.9832 23.8821 25.137 22.937 25.446 22.128C25.7543 21.319 26.2089 20.6457 26.8091 20.1066C27.41 19.5675 28.1528 19.1639 29.0393 18.8966C29.9258 18.6293 30.9466 18.4956 32.1023 18.4956C33.2581 18.4956 34.1792 18.6141 35.0367 18.8512C35.8943 19.0883 36.6181 19.4338 37.2083 19.8897C37.7984 20.3449 38.2473 20.9035 38.5563 21.5656C38.8646 22.227 39.0191 22.9849 39.0191 23.8386C39.0191 24.3493 38.9661 24.8045 38.8602 25.2049L38.8589 25.2005Z" fill="#FF7223" />
            </svg>
          </button>
        </Link>
      )}

      {/* Botón About */}
      <button 
        onClick={() => setIsNosotrasOpen(true)}
        className="absolute top-[50px] right-[187px] z-30 hover:scale-105 transition-transform cursor-pointer"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="#FFF7E2" />
          <path d="M42.5681 25.2113L38.6574 29.4615L36.8007 31.4774L36.7817 49.5541C36.7817 49.6201 36.7817 49.6819 36.7741 49.7438H33.1709V41.029H30.3764V49.7438H26.6896C26.6706 49.616 26.663 49.4799 26.663 49.348V31.4733L24.7191 29.3997L20.8311 25.2526C20.8311 25.2526 20.8538 25.2237 20.8652 25.2072C22.3954 23.2944 22.403 23.2903 23.3788 22.1401L28.0223 27.1777H31.7167H35.411L40.0584 22.1401C41.0304 23.2903 41.038 23.2944 42.5681 25.2072V25.2113Z" fill="#FF7223" />
          <path d="M34.4278 15H28.9716L26.2417 20.1324L28.9716 25.2648H34.4278L37.1577 20.1324L34.4278 15Z" fill="#FF7223" />
        </svg>
      </button>

      {/* Nosotras Modal */}
      {isNosotrasOpen && (
        <NosotrasModal onClose={() => setIsNosotrasOpen(false)} />
      )}
    </>
  );
}
