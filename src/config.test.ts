import { describe, expect, it } from "vitest";
import {
  DEFAULT_SITE_URL,
  resolveGoogleVerification,
  resolveSiteUrl,
} from "./config";

describe("config SEO", () => {
  it("usa https://rumbolatam.netlify.app por defecto cuando no hay variables de entorno", () => {
    expect(DEFAULT_SITE_URL).toBe("https://rumbolatam.netlify.app");
    expect(resolveSiteUrl({})).toBe("https://rumbolatam.netlify.app");
  });

  it("prioriza SITE_URL sobre NEXT_PUBLIC_SITE_URL y URL de Netlify y quita barras finales", () => {
    expect(
      resolveSiteUrl({
        SITE_URL: "https://rumbolatam.com///",
        NEXT_PUBLIC_SITE_URL: "https://otro.netlify.app/",
        URL: "https://deploy.netlify.app/",
      })
    ).toBe("https://rumbolatam.com");
  });

  it("usa URL de Netlify cuando SITE_URL no está definida", () => {
    expect(
      resolveSiteUrl({
        URL: "https://rumbolatam.netlify.app/",
      })
    ).toBe("https://rumbolatam.netlify.app");
  });

  it("ignora cadenas vacías en variables de entorno", () => {
    expect(
      resolveSiteUrl({
        SITE_URL: "   ",
        URL: "",
      })
    ).toBe("https://rumbolatam.netlify.app");
  });

  it("normaliza el token de verificación de Google Search Console", () => {
    expect(resolveGoogleVerification({})).toBeUndefined();
    expect(resolveGoogleVerification({ GOOGLE_SITE_VERIFICATION: "  " })).toBeUndefined();
    expect(
      resolveGoogleVerification({ GOOGLE_SITE_VERIFICATION: " abc123xyz " })
    ).toBe("abc123xyz");
  });
});

