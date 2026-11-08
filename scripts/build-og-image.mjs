import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = process.cwd();
const LOGO_PATH = path.join(ROOT_DIR, "public", "OtrosRecursos", "ProjectBanner.png");
const OUTPUT_PATH = path.join(ROOT_DIR, "public", "og-default.jpg");

/**
 * Genera la imagen Open Graph estática por defecto (1200x630) combinando
 * el fondo celeste de marca (#6FC9E6) con el emblema oficial de Rumbo Latam.
 */
const buildDefaultOgImage = async () => {
  const width = 1200;
  const height = 630;

  const resizedLogo = await sharp(LOGO_PATH)
    .resize({ width: 620, height: 490, fit: "inside" })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: { r: 111, g: 201, b: 230 },
    },
  })
    .composite([{ input: resizedLogo, gravity: "center" }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(OUTPUT_PATH);

  console.log(`OG image generated: ${OUTPUT_PATH}`);
};

await buildDefaultOgImage();

