import { describe, expect, it } from "vitest";
import { buildGoogleMapsSearchUrl, getHotelMapsUrl } from "./googleMaps";

describe("googleMaps", () => {
  it("codifica la búsqueda y normaliza espacios", () => {
    expect(buildGoogleMapsSearchUrl("  Do Mirante   Río ")).toBe(
      "https://www.google.com/maps/search/?api=1&query=Do%20Mirante%20R%C3%ADo"
    );
  });

  it("incluye tipo, nombre, destino y país", () => {
    const url = getHotelMapsUrl({ name: "Lira", tipo: "Hotel" }, "Jardín Botánico de Curitiba", "Brasil");
    expect(decodeURIComponent(url)).toContain("Hotel Lira Jardín Botánico de Curitiba Brasil");
  });

  it("respeta un link explícito del dato", () => {
    const link = "https://maps.app.goo.gl/abc";
    expect(getHotelMapsUrl({ name: "X", tipo: "Hotel", link }, "Destino")).toBe(link);
  });
});
