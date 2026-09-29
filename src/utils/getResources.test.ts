// @vitest-environment node
import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { getCountryHeroImage, getDestinationResources } from "./getResources";
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
