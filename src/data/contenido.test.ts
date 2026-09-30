// @vitest-environment node
import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";

import { getPais, listPaises, listDestinos, isValidPais, isValidDestino } from "@/data";
import { countriesData } from "@/data/countries";
import { existe, getCountryResources, getDestinationResources } from "@/utils/getResources";

const enDisco = (url: string) =>
  existsSync(path.join(process.cwd(), "public", url.replace(/^\/+/, "")));

const PAISES = listPaises();
const DESTINOS = listDestinos();

/** Faltantes de foto confirmados en la auditoría; no son bugs de datos. */
const FALTANTES_DE_FOTO: Record<string, string[]> = {
  "altos-de-chavon": ["galeria", "hospedaje", "animales", "actividades"],
  "eje-cafetero": ["galeria"],
  "castillo-de-chapultepec": ["galeria", "hospedaje", "actividades"],
  "hierve-el-agua": ["hospedaje"],
};

describe("registro de países", () => {
  it("el id del dato coincide con la clave del registro", () => {
    for (const pais of PAISES) {
      expect(isValidPais(pais.id)).toBe(true);
      expect(getPais(pais.id)).toBe(pais);
    }
  });

  it("el nombre coincide con countriesData (el mapa del home)", () => {
    for (const pais of PAISES) {
      expect(countriesData[pais.id]?.name).toBe(pais.name);
    }
  });

  it("no hay países en countriesData que no estén en el registro central", () => {
    const sueltos = Object.keys(countriesData).filter((id) => !isValidPais(id));
    expect(sueltos).toEqual([]);
  });

  it("el país declara todo su contenido (nada de copy-paste de Venezuela)", () => {
    for (const pais of PAISES) {
      expect(pais.name.trim(), pais.id).not.toBe("");
      expect(pais.subtitle.trim(), pais.id).not.toBe("");
      expect(pais.giaMessage.trim(), pais.id).not.toBe("");
      expect(pais.antesDeViajar.length, pais.id).toBeGreaterThan(0);
      expect(pais.curiosidades.length, pais.id).toBeGreaterThan(0);
      for (const card of pais.antesDeViajar) {
        expect(card.title.trim(), pais.id).not.toBe("");
        expect(card.description.trim(), pais.id).not.toBe("");
      }
      for (const curiosidad of pais.curiosidades) {
        expect(curiosidad.text.trim(), pais.id).not.toBe("");
      }
    }
  });

  it("cada destino resumido apunta a un destino real del país", () => {
    for (const pais of PAISES) {
      for (const resumen of pais.destinos) {
        const destino = DESTINOS.find((d) => d.id === resumen.id);
        expect(destino, `${pais.id} -> ${resumen.id}`).toBeDefined();
        expect(destino?.paisId, resumen.id).toBe(pais.id);
        expect(resumen.image.src, resumen.id).toBe(destino?.hero.src);
      }
    }
  });

  it("la ruta de cada curiosidad resuelve a un archivo o cae en el placeholder", () => {
    for (const pais of PAISES) {
      const { curiosidadImages } = getCountryResources(pais);
      expect(curiosidadImages.length, pais.id).toBe(pais.curiosidades.length);
      for (const [index, src] of curiosidadImages.entries()) {
        if (src === null) continue; // sin foto: la UI usa ICONOCURIOSIDADES.png
        expect(enDisco(src), `${pais.id} curiosidad ${index + 1}`).toBe(true);
      }
    }
  });

  it("el hero y la Gia del país resuelven a un archivo existente", () => {
    for (const pais of PAISES) {
      const { heroImage, giaImage } = getCountryResources(pais);
      expect(heroImage, pais.id).not.toBeNull();
      expect(enDisco(heroImage as string), pais.id).toBe(true);
      expect(giaImage, pais.id).not.toBeNull();
      expect(enDisco(giaImage as string), pais.id).toBe(true);
    }
  });
});

describe("contrato de destinos", () => {
  it("cada destino pertenece a un país del registro", () => {
    for (const destino of DESTINOS) {
      expect(isValidDestino(destino.id)).toBe(true);
      expect(isValidPais(destino.paisId), destino.id).toBe(true);
    }
  });

  it("el contenido obligatorio está completo", () => {
    for (const destino of DESTINOS) {
      expect(destino.name.trim(), destino.id).not.toBe("");
      expect(destino.tag.trim(), destino.id).not.toBe("");
      expect(destino.hero.src.trim(), destino.id).not.toBe("");
      expect(destino.manualDelViajero.length, destino.id).toBeGreaterThan(0);
      expect(destino.hospedaje.hoteles.length, destino.id).toBeGreaterThan(0);
      for (const card of destino.manualDelViajero) {
        expect(card.title.trim(), destino.id).not.toBe("");
        expect(card.description.trim(), destino.id).not.toBe("");
        expect(existe(card.icon.src), `${destino.id} icono "${card.title}"`).toBe(true);
      }
      for (const hotel of destino.hospedaje.hoteles) {
        expect(hotel.name.trim(), destino.id).not.toBe("");
        expect(hotel.estrellas, `${destino.id} -> ${hotel.name}`).toBeGreaterThanOrEqual(0);
        expect(hotel.estrellas, `${destino.id} -> ${hotel.name}`).toBeLessThanOrEqual(5);
      }
    }
  });

  it("toda imagen resuelta existe en disco, aunque el dato apunte a una ruta vieja", () => {
    // Los destinos de Venezuela todavía declaran rutas anteriores a la mudanza de
    // assets; el resolver las ignora y usa su carpeta. Lo que no se permite es que
    // algo roto llegue a la pantalla.
    const rotas: string[] = [];
    for (const destino of DESTINOS) {
      const recursos = getDestinationResources(destino);
      const resueltas = [
        ...recursos.galeriaImages.map((i) => i.src),
        ...recursos.animalesImages,
        ...recursos.actividadesImages,
        ...recursos.hospedajeImages,
        ...(recursos.portadaImage ? [recursos.portadaImage] : []),
      ];
      for (const url of resueltas) {
        if (!enDisco(url)) rotas.push(`${destino.id} -> ${url}`);
      }
    }
    expect(rotas).toEqual([]);
  });

  it("toda sección sin foto es un faltante conocido, no una sorpresa", () => {
    const sinFoto: string[] = [];
    for (const destino of DESTINOS) {
      const recursos = getDestinationResources(destino);
      const secciones: Array<[string, string[]]> = [
        ["galeria", recursos.galeriaImages.map((i) => i.src)],
        ["hospedaje", recursos.hospedajeImages],
        ["animales", recursos.animalesImages],
        ["actividades", recursos.actividadesImages],
      ];
      for (const [seccion, imagenes] of secciones) {
        if (imagenes.length) continue;
        if (FALTANTES_DE_FOTO[destino.id]?.includes(seccion)) continue;
        sinFoto.push(`${destino.id}/${seccion}`);
      }
    }
    expect(sinFoto).toEqual([]);
  });
});
