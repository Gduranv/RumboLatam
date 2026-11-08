import { serializeJsonLd } from "@/lib/seo/jsonLd";

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Renderiza un bloque de datos estructurados Schema.org (JSON-LD) serializado
 * de forma segura dentro del HTML generado en el servidor.
 */
export const JsonLd = ({ data }: JsonLdProps) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(data),
      }}
    />
  );
};

