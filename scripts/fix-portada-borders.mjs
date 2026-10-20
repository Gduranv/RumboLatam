// Fix: elimina la transparencia incrustada en las portadas.
//
// Varias portadas se exportaron desde la herramienta de diseño con la máscara del
// hero ya quemada en el píxel: cuñas en "V" transparentes en las esquinas
// inferiores, bandas superiores transparentes y hairlines laterales con alfa
// parcial. Sobre los fondos verdes de las tarjetas y los heroes eso se ve como
// un "borde verde" alrededor de la foto.
//
// Este script re esas zonas con contenido real de la propia imagen
// (reflejo espejo de la banda opaca contigua, costura invisible) y deja cada
// portada como un rectángulo 100% opaco. Es idempotente: una portada ya opaca
// se toma y se re escribe.
//
// Uso: node scripts/fix-portada-borders.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public");
const DRY = process.argv.includes("--dry");
const SOLIDO = 250; // alfa mínima para considerar un píxel opaco
const BANDA = 96; // altura/ancho máximo del reflejo espejo

// Todas las imágenes cuyo nombre o carpeta contiene "portada".
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full);
    else if (/\.(webp|png|jpe?g|avif)$/i.test(e.name) && /portada/i.test(path.relative(ROOT, full))) {
      files.push(path.relative(ROOT, full).replaceAll("\\", "/"));
    }
  }
})(ROOT);

/** Copia el píxel fuente en un destino, forzando alfa opaca. */
function copiar(px, ch, W, xDst, yDst, xSrc, ySrc) {
  const d = (yDst * W + xDst) * ch;
  const s = (ySrc * W + xSrc) * ch;
  px[d] = px[s];
  px[d + 1] = px[s + 1];
  px[d + 2] = px[s + 2];
  px[d + 3] = 255;
}

/** Reflejo espejo de la banda contigua: el píxel 0 del relleno continúa
 *  exactamente con el píxel opaco más cercano, y el espejo evita costuras duras.
 *  `dir` apunta hacia el contenido opaco (+1 = hacia la derecha/abajo). */
function srcIndex(base, i, B, dir) {
  const t = i % (2 * B);
  const off = t < B ? t : 2 * B - 1 - t;
  return base + dir * off;
}

for (const ref of files.sort()) {
  const file = path.join(ROOT, ref);
  // Se lee con fs.readFileSync y no pasando la ruta a sharp: sharp mantiene el
  // handle del archivo abierto y en Windows eso bloquea la escritura posterior.
  const input = fs.readFileSync(file);
  const { data: px, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: ch } = info;
  const A = (x, y) => px[(y * W + x) * ch + 3];
  const opacoEnColumna = (x) => { for (let y = 0; y < H; y++) if (A(x, y) >= SOLIDO) return true; return false; };
  const opacoEnFila = (y) => { for (let x = 0; x < W; x++) if (A(x, y) >= SOLIDO) return true; return false; };

  let cambios = 0;

  // 1) Cuña inferior: por columna, rellena hacia abajo desde el borde opaco.
  for (let x = 0; x < W; x++) {
    let y0 = H;
    for (let y = H - 1; y >= 0 && A(x, y) < SOLIDO; y--) y0 = y;
    if (y0 === 0 || y0 === H || !opacoEnColumna(x)) continue; // columna sin ancla opaca: la resuelve el paso 3
    const B = Math.min(BANDA, y0);
    for (let i = 0; i < H - y0; i++) copiar(px, ch, W, x, y0 + i, x, srcIndex(y0 - 1, i, B, -1));
    cambios += H - y0;
  }

  // 2) Banda superior: por columna, rellena hacia arriba.
  for (let x = 0; x < W; x++) {
    let y1 = -1;
    for (let y = 0; y < H && A(x, y) < SOLIDO; y++) y1 = y;
    if (y1 < 0 || y1 === H - 1 || !opacoEnColumna(x)) continue;
    const B = Math.min(BANDA, H - 1 - y1);
    for (let i = 0; i <= y1; i++) copiar(px, ch, W, x, y1 - i, x, srcIndex(y1 + 1, i, B, +1));
    cambios += y1 + 1;
  }

  // 3) Bordes laterales: por fila, rellena hacia afuera desde el píxel opaco.
  for (let y = 0; y < H; y++) {
    if (!opacoEnFila(y)) continue;
    let x0 = W;
    for (let x = 0; x < W && A(x, y) < SOLIDO; x++) x0 = x;
    if (x0 > 0 && x0 < W) {
      const B = Math.min(BANDA, W - 1 - x0);
      for (let i = 0; i < x0; i++) copiar(px, ch, W, x0 - 1 - i, y, srcIndex(x0, i, B, +1), y);
      cambios += x0;
    }
    let x1 = -1;
    for (let x = W - 1; x >= 0 && A(x, y) < SOLIDO; x--) x1 = x;
    if (x1 >= 0 && x1 < W - 1) {
      const B = Math.min(BANDA, x1 + 1);
      for (let i = 0; i < W - 1 - x1; i++) copiar(px, ch, W, x1 + 1 + i, y, srcIndex(x1, i, B, -1), y);
      cambios += W - 1 - x1;
    }
  }

  // 4) Alfa final opaca en todo el lienzo (los píxeles semitransparentes
  //    residuales ya tienen color real debajo).
  for (let i = 3; i < px.length; i += ch) px[i] = 255;

  if (!cambios) {
    console.log(`  = ${ref} (ya opaca, sin cambios)`);
    continue;
  }
  if (DRY) {
    console.log(`  ~ ${ref} (dry: ${cambios} px rellenados)`);
    continue;
  }

  const ext = path.extname(ref).toLowerCase();
  const encoder = sharp(px, { raw: { width: W, height: H, channels: ch } });
  // Se escribe directo sobre el destino: el original ya está leído en memoria.
  // Si Windows bloquea el archivo (antivirus/indexador), se reintenta vía .tmp.
  try {
    if (ext === ".png") await encoder.png({ compressionLevel: 9 }).toFile(file);
    else await encoder.webp({ quality: 90 }).toFile(file);
  } catch {
    const tmp = file + ".tmp";
    if (ext === ".png") await sharp(px, { raw: { width: W, height: H, channels: ch } }).png({ compressionLevel: 9 }).toFile(tmp);
    else await sharp(px, { raw: { width: W, height: H, channels: ch } }).webp({ quality: 90 }).toFile(tmp);
    for (let intento = 0; ; intento++) {
      try {
        fs.renameSync(tmp, file);
        break;
      } catch (e) {
        if (intento >= 4) {
          fs.copyFileSync(tmp, file);
          fs.rmSync(tmp);
          break;
        }
        await new Promise((r) => setTimeout(r, 250 * (intento + 1)));
      }
    }
  }
  console.log(`  ✓ ${ref} (${cambios.toLocaleString("es")} px rellenados)`);
}

console.log(DRY ? "\nDry run: no se escribió nada." : "\nListo.");
