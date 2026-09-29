/**
 * Auditoría de assets de /public.
 *
 * No basta con hacer grep: src/utils/getResources.ts descubre imágenes en
 * tiempo de build con fs.readdirSync siguiendo convenciones de carpeta, así que
 * muchos archivos nunca aparecen escritos en el código y aun así se sirven.
 *
 * Este script clasifica cada archivo de /public en tres estados:
 *
 *   LIVE   referenciado de forma estática desde src/ (corpus de texto)
 *   MAYBE  no referenciado, pero dentro de una carpeta que getResources.ts
 *          escanea con readdirSync -> podría alcanzarse en runtime
 *   DEAD   no referenciado y fuera de toda carpeta escaneada -> inalcanzable
 *
 * Sólo DEAD es seguro de borrar. MAYBE requiere revisión manual.
 *
 *   node scripts/audit-assets.mjs                     informe
 *   node scripts/audit-assets.mjs --min-mb 0          sin umbral de tamaño
 *   node scripts/audit-assets.mjs --delete            borra los DEAD
 *
 * Por defecto sólo borra archivos de más de 1 MB: captura casi todo el peso
 * liberado sin tocar el arte pequeño que alguien pueda estar por cablear. Para
 * vaciar también los DEAD pequeños hay que pasar `--min-mb 0`, a conciencia.
 */
import { readdirSync, readFileSync, statSync, unlinkSync } from "node:fs";
import { join, relative, sep } from "node:path";
import process from "node:process";

const DEFAULT_MIN_MB = 1;

const ROOT = process.cwd();
const PUBLIC_DIR = join(ROOT, "public");
const SRC_DIR = join(ROOT, "src");
const IMAGE_RE = /\.(png|jpe?g|webp|gif|svg|lottie|mp4|webm|ttf|woff2?)$/i;
const SKIP_DIRS = new Set([".next", "node_modules", ".git"]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

/** Corpus de texto de todo src/ para buscar referencias estáticas. */
function buildCorpus() {
  const parts = [];
  for (const file of walk(SRC_DIR)) {
    if (IMAGE_RE.test(file)) continue;
    try {
      parts.push(readFileSync(file, "utf8"));
    } catch {
      /* binario o ilegible: se ignora */
    }
  }
  return parts.join("\n");
}

/**
 * Carpetas que getResources.ts puede leer con readdirSync.
 * Sólo mira public/Paises/<carpeta>/, porque ése es el único árbol que recorre.
 */
function fsScannedPrefixes() {
  const paisesDir = join(PUBLIC_DIR, "Paises");
  let dirs = [];
  try {
    dirs = readdirSync(paisesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }
  return dirs.map((name) => `/Paises/${name}/`);
}

const corpus = buildCorpus();
const scannedPrefixes = fsScannedPrefixes();

const files = walk(PUBLIC_DIR).filter((f) => IMAGE_RE.test(f));

const live = [];
const maybe = [];
const dead = [];

for (const file of files) {
  const rel = "/" + relative(PUBLIC_DIR, file).split(sep).join("/");
  const base = rel.slice(rel.lastIndexOf("/") + 1);
  const stem = base.slice(0, base.lastIndexOf("."));
  const size = statSync(file).size;

  const staticRef =
    corpus.includes(rel) || corpus.includes(base) || corpus.includes(stem);
  const fsReachable = scannedPrefixes.some((p) => rel.startsWith(p));

  // `abs` en vez de derivarla de `rel` al borrar: `rel` empieza por "/" y
  // dejarlo pasar por join() depende de cómo normalice cada plataforma.
  const record = { rel, abs: file, size, mb: size / 1024 / 1024 };
  if (staticRef) live.push(record);
  else if (fsReachable) maybe.push(record);
  else dead.push(record);
}

const sum = (list) => list.reduce((acc, r) => acc + r.size, 0);
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1).padStart(8);

const bySize = (a, b) => b.size - a.size;
const deadBytes = sum(dead);

const minMbIndex = process.argv.indexOf("--min-mb");
const minMb =
  minMbIndex === -1 ? DEFAULT_MIN_MB : Number(process.argv[minMbIndex + 1]);
if (!Number.isFinite(minMb) || minMb < 0) {
  console.error(`--min-mb inválido: ${process.argv[minMbIndex + 1]}`);
  process.exit(1);
}
const deadDeletable = dead.filter((r) => r.mb >= minMb);
const deadKept = dead.filter((r) => r.mb < minMb);

console.log("=== AUDITORÍA DE ASSETS ===");
console.log(`Escaneados      : ${files.length}`);
console.log(`LIVE  (estático): ${String(live.length).padStart(4)}  ${mb(sum(live))} MB`);
console.log(`MAYBE (readdir) : ${String(maybe.length).padStart(4)}  ${mb(sum(maybe))} MB`);
console.log(`DEAD  (nunca)   : ${String(dead.length).padStart(4)}  ${mb(deadBytes)} MB`);

console.log(`\n--- DEAD >= ${minMb} MB (borrables) ---`);
for (const r of deadDeletable.sort(bySize)) {
  console.log(`${r.mb.toFixed(2).padStart(7)} MB  ${r.rel}`);
}
if (deadKept.length) {
  console.log(
    `\n--- DEAD < ${minMb} MB (revisar a mano, ${deadKept.length} archivos) ---`
  );
  for (const r of deadKept.sort(bySize)) {
    console.log(`${r.mb.toFixed(2).padStart(7)} MB  ${r.rel}`);
  }
}

// Duplicados exactos: mismo nombre y mismo tamaño en sitios distintos.
const seen = new Map();
const dupes = [];
for (const r of [...live, ...maybe, ...dead]) {
  const key = `${r.rel.slice(r.rel.lastIndexOf("/") + 1)}|${r.size}`;
  if (seen.has(key)) dupes.push([seen.get(key), r]);
  else seen.set(key, r);
}
if (dupes.length) {
  console.log("\n--- DUPLICADOS (mismo nombre y tamaño) ---");
  for (const [a, b] of dupes) {
    console.log(`${a.mb.toFixed(2).padStart(7)} MB  ${a.rel}\n           => ${b.rel}`);
  }
}

console.log(
  `\nReclaimable seguro: ${(deadBytes / 1024 / 1024).toFixed(1)} MB de ${(sum([...live, ...maybe, ...dead]) / 1024 / 1024).toFixed(1)} MB en /public`
);

if (process.argv.includes("--delete")) {
  if (deadDeletable.length === 0) {
    console.log("\nNada que borrar.");
  } else {
    const bytes = sum(deadDeletable);
    console.log(`\nBorrando ${deadDeletable.length} archivos DEAD >= ${minMb} MB...`);
    for (const r of deadDeletable) {
      unlinkSync(r.abs);
      console.log(`  - ${r.rel}`);
    }
    console.log(`Liberados ${(bytes / 1024 / 1024).toFixed(1)} MB`);
  }
}
