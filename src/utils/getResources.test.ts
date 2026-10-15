// @vitest-environment node
import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { getCountryHeroImage, getCountryResources, getDestinationResources } from "./getResources";
import { listPaises, listDestinos } from "@/data";

const enDisco = (url: string) =>
  existsSync(path.join(process.cwd(), "public", url.replace(/^\/+/, "")));

const PAISES = listPaises().map((pais) => pais.id);
const DESTINOS = listDestinos();

describe("getCountryHeroImage", () => {
  it("cubre todos los países del catálogo", () => {
    expect(PAISES.length).toBeGreaterThan(0);
  });

  it.each(PAISES)("resuelve una portada que existe en disco para %s", (pais) => {
    const hero = getCountryHeroImage(pais);
    expect(hero).not.toBeNull();
    expect(enDisco(hero as string)).toBe(true);
  });

  it("es determinista: dos llamadas seguidas dan la misma imagen", () => {
    for (const pais of PAISES) {
      expect(getCountryHeroImage(pais)).toBe(getCountryHeroImage(pais));
    }
  });

  it("devuelve null para un país inexistente, sin lanzar", () => {
    expect(getCountryHeroImage("atlantis")).toBeNull();
  });
});

describe("getDestinationResources", () => {
  it("tiene destinos que verificar", () => {
    expect(DESTINOS.length).toBeGreaterThan(0);
  });

  it("no devuelve ninguna portada rota", () => {
    const rotas: string[] = [];
    for (const destino of DESTINOS) {
      const { portadaImage } = getDestinationResources(destino);
      if (portadaImage && !enDisco(portadaImage)) {
        rotas.push(`${destino.id} -> ${portadaImage}`);
      }
    }
    expect(rotas).toEqual([]);
  });

  it("no devuelve ninguna imagen de galería rota", () => {
    const rotas: string[] = [];
    for (const destino of DESTINOS) {
      for (const imagen of getDestinationResources(destino).galeriaImages) {
        if (!enDisco(imagen.src)) rotas.push(`${destino.id} -> ${imagen.src}`);
      }
    }
    expect(rotas).toEqual([]);
  });

  it("no deja destinos sin portada", () => {
    const sinPortada = DESTINOS.filter(
      (destino) => !getDestinationResources(destino).portadaImage
    ).map((destino) => destino.id);
    expect(sinPortada).toEqual([]);
  });
});

describe("getCountryResources", () => {
  it("resuelve la Gia de escritorio y la vertical del hero móvil, ambas reales", () => {
    const problemas: string[] = [];
    for (const pais of listPaises()) {
      const { giaImage, giaMovilImage } = getCountryResources(pais);

      if (!giaImage || !enDisco(giaImage)) {
        problemas.push(`${pais.id} -> Gia de escritorio ${giaImage}`);
      }
      if (!giaMovilImage || !enDisco(giaMovilImage)) {
        problemas.push(`${pais.id} -> Gia móvil ${giaMovilImage}`);
      }
      // La vertical declarada en el dato es la que debe llegar al celular.
      if (pais.giaPaisMovil && giaMovilImage !== pais.giaPaisMovil.src) {
        problemas.push(`${pais.id} -> se ignoró ${pais.giaPaisMovil.src}`);
      }
    }
    expect(problemas).toEqual([]);
  });

  it("cae a la Gia de escritorio cuando el país no tiene una vertical", () => {
    // "atlantis" no existe en /public, así que tampoco hay carpeta que descubrir.
    const sinVertical = { ...listPaises()[0], id: "atlantis" };
    delete sinVertical.giaPaisMovil;

    const { giaImage, giaMovilImage } = getCountryResources(sinVertical);

    expect(giaMovilImage).toBe(giaImage);
  });
});
