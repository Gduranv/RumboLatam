import Link from "next/link";
import { listPaises } from "@/data";
import { cleanRichText } from "@/lib/seo/text";

/**
 * Renderiza el encabezado principal h1 y el directorio semántico accesible
 * de países y destinos para rastreadores web y lectores de pantalla sin alterar
 * el diseño visual del mapa interactivo.
 */
export const HomeSeoSummary = () => {
  const paises = listPaises();

  return (
    <section className="sr-only" aria-label="Resumen y directorio de Rumbo Latam">
      <h1>Rumbo Latam: Guía de Viaje Interactiva por América Latina</h1>
      <p>
        Explora los rincones imperdibles de Latinoamérica con información sobre
        moneda, idioma, gastronomía, estaciones, clima, transporte, hospedaje,
        fauna autóctona, actividades y curiosidades culturales de cada país.
      </p>
      <nav aria-label="Directorio de países y destinos turísticos">
        <Link href="/nosotras">Sobre Nosotras y el Proyecto Rumbo Latam</Link>
        <ul>
          {paises.map((pais) => (
            <li key={pais.id}>
              <Link href={`/paises/${pais.id}`}>
                {pais.name} — {cleanRichText(pais.subtitle)}
              </Link>
              {pais.curiosidades.length > 0 ? (
                <Link href={`/paises/${pais.id}/curiosidades`}>
                  Curiosidades de {pais.name}
                </Link>
              ) : null}
              {pais.destinos.length > 0 ? (
                <ul>
                  {pais.destinos.map((destino) => (
                    <li key={destino.id}>
                      <Link href={`/destinos/${destino.id}`}>
                        {destino.title} ({destino.tag}, {pais.name})
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

