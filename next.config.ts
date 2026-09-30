import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 exige declarar las calidades permitidas. El proyecto no usa el
    // prop `quality` en ninguna parte, asi que basta la de por defecto.
    qualities: [75],
  },

  /**
   * Netlify empaqueta la function SSR con todo lo que el output file tracing
   * encuentra, y el límite es 250 MB. `getResources.ts` descubre imágenes con
   * `fs.readdirSync` sobre rutas calculadas, así que el tracer no puede probar
   * qué lee: se lleva `public/` entero (235 MB) y el deploy falla por tamaño.
   *
   * Los assets de /public no se leen desde disco en runtime: son URLs públicas
   * que Next sirve por separado, y las funciones de discovery corren en el build
   * de cada ruta. Excluirlos del bundle es seguro y es lo que deja el deploy
   * dentro del límite.
   */
  outputFileTracingExcludes: {
    "*": ["./public/**/*"],
  },
};

export default nextConfig;
