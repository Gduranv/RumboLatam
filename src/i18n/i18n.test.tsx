// @vitest-environment jsdom
import React from "react";
import { describe, expect, it, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { listPaises, listDestinos } from "@/data";
import {
  LocaleProvider,
  useLocale,
  getUiStrings,
  getNosotrasStrings,
  getLocalizedPais,
  getLocalizedDestino,
} from "@/i18n";

/**
 * Componente auxiliar de prueba para verificar el contexto de idioma.
 */
const TestConsumer = () => {
  const { locale, setLocale } = useLocale();
  return (
    <div>
      <span data-testid="current-locale">{locale}</span>
      <button onClick={() => setLocale("en")}>Set EN</button>
      <button onClick={() => setLocale("pt")}>Set PT</button>
      <button onClick={() => setLocale("es")}>Set ES</button>
    </div>
  );
};

describe("sistema i18n (LocaleProvider, diccionarios UI, países y destinos)", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("inicia en 'es' por defecto y persiste cambios a 'en' y 'pt' en localStorage", () => {
    render(
      <LocaleProvider>
        <TestConsumer />
      </LocaleProvider>
    );

    expect(screen.getByTestId("current-locale").textContent).toBe("es");

    fireEvent.click(screen.getByText("Set EN"));
    expect(screen.getByTestId("current-locale").textContent).toBe("en");
    expect(window.localStorage.getItem("rumbo-latam-locale")).toBe("en");

    fireEvent.click(screen.getByText("Set PT"));
    expect(screen.getByTestId("current-locale").textContent).toBe("pt");
    expect(window.localStorage.getItem("rumbo-latam-locale")).toBe("pt");
  });

  it("recupera el idioma guardado en localStorage y hace fallback a 'es' si es inválido", () => {
    window.localStorage.setItem("rumbo-latam-locale", "pt");
    const { unmount } = render(
      <LocaleProvider>
        <TestConsumer />
      </LocaleProvider>
    );
    expect(screen.getByTestId("current-locale").textContent).toBe("pt");
    unmount();

    window.localStorage.setItem("rumbo-latam-locale", "fr-invalid");
    render(
      <LocaleProvider>
        <TestConsumer />
      </LocaleProvider>
    );
    expect(screen.getByTestId("current-locale").textContent).toBe("es");
  });

  it("provee cadenas de interfaz (UI) y de Nosotras en es, en y pt", () => {
    const uiEs = getUiStrings("es");
    const uiEn = getUiStrings("en");
    const uiPt = getUiStrings("pt");

    expect(uiEs.beforeTravelingTitle).toBe("Antes de viajar:");
    expect(uiEn.beforeTravelingTitle).toBe("Before traveling:");
    expect(uiPt.beforeTravelingTitle).toBe("Antes de viajar:");

    expect(uiEs.topDestinationsTitle).not.toBe(uiEn.topDestinationsTitle);
    expect(uiEs.travelerManualTitle).not.toBe(uiEn.travelerManualTitle);
    expect(uiEs.seeMore).toBe("Ver más");
    expect(uiEn.seeMore).toBe("See more");
    expect(uiPt.seeMore).toBe("Ver mais");

    const nosEs = getNosotrasStrings("es");
    const nosEn = getNosotrasStrings("en");
    const nosPt = getNosotrasStrings("pt");

    expect(nosEs.cards).toHaveLength(3);
    expect(nosEn.cards).toHaveLength(3);
    expect(nosPt.cards).toHaveLength(3);
    expect(nosEs.title).not.toBe(nosEn.title);
    expect(nosEs.title).not.toBe(nosPt.title);
  });

  it("traduce los 8 países en 'en' y 'pt' manteniendo intacta la estructura de datos", () => {
    const paises = listPaises();
    expect(paises).toHaveLength(8);

    for (const base of paises) {
      const esPais = getLocalizedPais(base.id, "es");
      const enPais = getLocalizedPais(base.id, "en");
      const ptPais = getLocalizedPais(base.id, "pt");

      expect(esPais).toBeDefined();
      expect(enPais).toBeDefined();
      expect(ptPais).toBeDefined();

      if (!esPais || !enPais || !ptPais) continue;

      expect(enPais.antesDeViajar).toHaveLength(esPais.antesDeViajar.length);
      expect(ptPais.antesDeViajar).toHaveLength(esPais.antesDeViajar.length);
      expect(enPais.destinos).toHaveLength(esPais.destinos.length);
      expect(ptPais.destinos).toHaveLength(esPais.destinos.length);
      expect(enPais.curiosidades).toHaveLength(esPais.curiosidades.length);
      expect(ptPais.curiosidades).toHaveLength(esPais.curiosidades.length);

      expect(enPais.subtitle, `${base.id} en.subtitle`).not.toBe(esPais.subtitle);
      expect(ptPais.subtitle, `${base.id} pt.subtitle`).not.toBe(esPais.subtitle);
      expect(enPais.giaMessage, `${base.id} en.giaMessage`).not.toBe(esPais.giaMessage);
      expect(ptPais.giaMessage, `${base.id} pt.giaMessage`).not.toBe(esPais.giaMessage);

      for (let i = 0; i < esPais.antesDeViajar.length; i++) {
        expect(enPais.antesDeViajar[i].description.trim()).not.toBe("");
        expect(ptPais.antesDeViajar[i].description.trim()).not.toBe("");
        expect(enPais.antesDeViajar[i].description).not.toBe(
          esPais.antesDeViajar[i].description
        );
      }

      for (let i = 0; i < esPais.curiosidades.length; i++) {
        expect(enPais.curiosidades[i].text.trim()).not.toBe("");
        expect(ptPais.curiosidades[i].text.trim()).not.toBe("");
        expect(enPais.curiosidades[i].text).not.toBe(esPais.curiosidades[i].text);
      }
    }
  });

  it("traduce los 24 destinos en 'en' y 'pt' manteniendo intacta la estructura de datos", () => {
    const destinos = listDestinos();
    expect(destinos).toHaveLength(24);

    for (const base of destinos) {
      const esDest = getLocalizedDestino(base.id, "es");
      const enDest = getLocalizedDestino(base.id, "en");
      const ptDest = getLocalizedDestino(base.id, "pt");

      expect(esDest).toBeDefined();
      expect(enDest).toBeDefined();
      expect(ptDest).toBeDefined();

      if (!esDest || !enDest || !ptDest) continue;

      expect(enDest.manualDelViajero).toHaveLength(esDest.manualDelViajero.length);
      expect(ptDest.manualDelViajero).toHaveLength(esDest.manualDelViajero.length);
      expect(enDest.hospedaje.hoteles).toHaveLength(esDest.hospedaje.hoteles.length);
      expect(ptDest.hospedaje.hoteles).toHaveLength(esDest.hospedaje.hoteles.length);

      expect(enDest.tag.trim(), `${base.id} en.tag`).not.toBe("");
      expect(ptDest.tag.trim(), `${base.id} pt.tag`).not.toBe("");
      expect(enDest.animales.description, `${base.id} en.animales`).not.toBe(
        esDest.animales.description
      );
      expect(ptDest.animales.description, `${base.id} pt.animales`).not.toBe(
        esDest.animales.description
      );
      expect(enDest.actividades.description, `${base.id} en.actividades`).not.toBe(
        esDest.actividades.description
      );
      expect(ptDest.actividades.description, `${base.id} pt.actividades`).not.toBe(
        esDest.actividades.description
      );

      for (let i = 0; i < esDest.manualDelViajero.length; i++) {
        expect(enDest.manualDelViajero[i].description).not.toBe(
          esDest.manualDelViajero[i].description
        );
        expect(ptDest.manualDelViajero[i].description).not.toBe(
          esDest.manualDelViajero[i].description
        );
      }
    }
  });

  it("garantiza que la etiqueta/descripción de Hierve el Agua traduce 'Maravilla geológica' y no se sustituye por la ubicación geográfica", () => {
    const esHierve = getLocalizedDestino("hierve-el-agua", "es");
    const enHierve = getLocalizedDestino("hierve-el-agua", "en");
    const ptHierve = getLocalizedDestino("hierve-el-agua", "pt");

    expect(esHierve?.tag).toBe("Maravilla geológica");
    expect(enHierve?.tag).toBe("Geological wonder");
    expect(ptHierve?.tag).toBe("Maravilha geológica");

    // Verificar que bajo ningún concepto se reemplace por la ubicación del lugar
    expect(enHierve?.tag).not.toContain("San Lorenzo Albarradas");
    expect(enHierve?.tag).not.toContain("Oaxaca");
    expect(ptHierve?.tag).not.toContain("San Lorenzo Albarradas");
    expect(ptHierve?.tag).not.toContain("Oaxaca");
  });

  it("garantiza que cada uno de los 24 destinos traduce fielmente su tag conceptual en vez de usar la ubicación geográfica", () => {
    const forbiddenLocations = [
      "Santa Cruz, Patagonia",
      "Humahuaca, Jujuy",
      "Puerto Iguazú, Misiones",
      "Curitiba, Paraná",
      "Barreirinhas, Maranhão",
      "Barra de Guaratiba, Rio de Janeiro",
      "Puerto Río Tranquilo, Aysén",
      "Lo Barnechea, Metropolitan Region",
      "Lo Barnechea, Região Metropolitana",
      "Pucón, La Araucanía",
      "Sierra Nevada de Santa Marta, Magdalena",
      "Caldas, Quindío & Risaralda",
      "Caldas, Quindío e Risaralda",
      "Ipiales, Nariño",
      "San Lorenzo Albarradas, Oaxaca",
      "Miguel Hidalgo, Mexico City",
      "Miguel Hidalgo, Cidade do México",
      "Riviera Maya, Quintana Roo",
      "Paracas, Ica",
      "Canchis / Quispicanchi, Cusco",
      "Ica, Peru",
      "La Altagracia, Eastern Coast",
      "La Altagracia, Costa Leste",
      "Santo Domingo Este",
      "La Romana",
      "Bolívar State, Gran Sabana",
      "Estado Bolívar, Gran Sabana",
      "Tovar Municipality, Aragua State",
      "Município Tovar, Estado Aragua",
      "San Esteban National Park, Carabobo",
      "Parque Nacional San Esteban, Carabobo",
    ];

    const expectedTags: Record<string, { es: string; en: string; pt: string }> = {
      "parque-nacional-los-glaciares": {
        es: "Gigante helado",
        en: "Frozen giant",
        pt: "Gigante congelado",
      },
      "serrania-de-hornocal": {
        es: "Prisma ancestral",
        en: "Ancestral prism",
        pt: "Prisma ancestral",
      },
      "cataratas-del-iguazu": {
        es: "Maravilla natural",
        en: "Natural wonder",
        pt: "Maravilha natural",
      },
      "jardin-botanico-curitiba": {
        es: "Invernadero icónico",
        en: "Iconic greenhouse",
        pt: "Estufa icônica",
      },
      "lencois-maranhenses": {
        es: "Desierto inundado",
        en: "Flooded desert",
        pt: "Deserto inundado",
      },
      "pedra-do-telegrafo": {
        es: "Abismo visual",
        en: "Visual abyss",
        pt: "Abismo visual",
      },
      "capillas-de-marmol": {
        es: "Catedrales del lago",
        en: "Lake cathedrals",
        pt: "Catedrais do lago",
      },
      "valle-nevado": {
        es: "Cumbre Alpina",
        en: "Alpine summit",
        pt: "Cume alpino",
      },
      "volcan-villarrica": {
        es: "Guardián activo",
        en: "Active guardian",
        pt: "Guardião ativo",
      },
      "ciudad-perdida": {
        es: "Rastro arqueológico",
        en: "Archaeological trace",
        pt: "Vestígio arqueológico",
      },
      "eje-cafetero": {
        es: "Paisaje cultural",
        en: "Cultural landscape",
        pt: "Paisagem cultural",
      },
      "santuario-las-lajas": {
        es: "Templo místico",
        en: "Mystical temple",
        pt: "Templo místico",
      },
      "hierve-el-agua": {
        es: "Maravilla geológica",
        en: "Geological wonder",
        pt: "Maravilha geológica",
      },
      "castillo-de-chapultepec": {
        es: "Palacio Histórico",
        en: "Historic Palace",
        pt: "Palácio Histórico",
      },
      tulum: {
        es: "Ruinas caribeñas",
        en: "Caribbean ruins",
        pt: "Ruínas caribenhas",
      },
      "isla-ballestas": {
        es: "Refugio marino",
        en: "Marine refuge",
        pt: "Refúgio marinho",
      },
      "montana-7-colores": {
        es: "Arcoíris mineral",
        en: "Mineral rainbow",
        pt: "Arco-íris mineral",
      },
      "oasis-huacachina": {
        es: "Espejismo natural",
        en: "Natural mirage",
        pt: "Miragem natural",
      },
      "punta-cana": {
        es: "Edén caribeño",
        en: "Caribbean Eden",
        pt: "Éden caribenho",
      },
      "parque-3-ojos": {
        es: "Caverna mística",
        en: "Mystical cavern",
        pt: "Caverna mística",
      },
      "altos-de-chavon": {
        es: "Villa renacentista",
        en: "Renaissance village",
        pt: "Vila renascentista",
      },
      canaima: {
        es: "Patrimonio natural",
        en: "Natural heritage",
        pt: "Patrimônio natural",
      },
      "colonia-tovar": {
        es: "Rincón alemán",
        en: "German corner",
        pt: "Recanto alemão",
      },
      "isla-larga": {
        es: "Refugio caribeño",
        en: "Caribbean refuge",
        pt: "Refúgio caribenho",
      },
    };

    for (const [id, expected] of Object.entries(expectedTags)) {
      const esDest = getLocalizedDestino(id, "es");
      const enDest = getLocalizedDestino(id, "en");
      const ptDest = getLocalizedDestino(id, "pt");

      expect(esDest?.tag, `${id} es tag`).toBe(expected.es);
      expect(enDest?.tag, `${id} en tag`).toBe(expected.en);
      expect(ptDest?.tag, `${id} pt tag`).toBe(expected.pt);

      expect(forbiddenLocations).not.toContain(enDest?.tag);
      expect(forbiddenLocations).not.toContain(ptDest?.tag);
    }
  });
});

