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
});

