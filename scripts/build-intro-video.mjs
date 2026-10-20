// Transcodifica el intro de video a formatos web.
//
// El archivo fuente (`assets/intro/VideoRumbo.MOV`) viene en HEVC/h.265 desde el
// teléfono: Safari lo reproduce, pero Chrome y Firefox no, así que el intro no
// llegaría a la mayoría de los visitantes. Este script genera los dos streams
// que sí cubren todo el mercado:
//
//   public/videos/intro.mp4   H.264 + AAC  (compatibilidad universal, iOS)
//   public/videos/intro.webm  VP9 + Opus   (más liviano en Chrome/Firefox)
//   public/videos/intro-poster.jpg         primer frame, para pintar algo
//                             mientras el navegador decide decodificar.
//
// El audio se conserva en ambos streams por si algún día se quiere subir el
// volumen, pero el autoplay exige arrancar silenciado (política de navegadores).
//
// La fuente vive fuera de /public a propósito: son 8.5 MB de HEVC que nadie
// puede reproducir desde la web, y todo lo que está en /public se despliega.
//
// Requiere ffmpeg-static (devDependency). Uso:
//   node scripts/build-intro-video.mjs
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";

const SRC = "assets/intro/VideoRumbo.MOV";
const OUT_DIR = "public/videos";
const MP4 = path.join(OUT_DIR, "intro.mp4");
const WEBM = path.join(OUT_DIR, "intro.webm");
const POSTER = path.join(OUT_DIR, "intro-poster.jpg");

if (!fs.existsSync(SRC)) {
  console.error(`No existe el archivo fuente: ${SRC}`);
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

const ffmpeg = (args) => execFileSync(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });

// H.264: preset "veryslow" aprieta bastante más que "slow" a cambio de tardar
// un poco más en el build (el clip dura 6 s). CRF 26 en 1080p quedó en ~4.4 MB
// con PSNR 37.7 contra el original: indistinguible para un intro en movimiento.
console.log("→ intro.mp4 (H.264)");
ffmpeg([
  "-y", "-i", SRC,
  "-c:v", "libx264", "-preset", "veryslow", "-crf", "26",
  "-pix_fmt", "yuv420p", "-profile:v", "high", "-level", "4.0",
  "-c:a", "aac", "-b:a", "96k",
  "-movflags", "+faststart",
  MP4,
]);

// VP9: CRF 40 quedó en ~4.2 MB con PSNR 38.4, algo por encima del H.264 y con
// menos bits. Una sola pasada basta para CRF; `-b:v 0` activa el modo de
// calidad constante de libvpx-vp9.
console.log("→ intro.webm (VP9)");
ffmpeg([
  "-y", "-i", SRC,
  "-c:v", "libvpx-vp9", "-pix_fmt", "yuv420p", "-b:v", "0", "-crf", "40",
  "-row-mt", "1", "-deadline", "good", "-cpu-used", "2",
  "-c:a", "libopus", "-b:a", "96k",
  WEBM,
]);

console.log("→ intro-poster.jpg");
ffmpeg(["-y", "-i", SRC, "-frames:v", "1", "-q:v", "3", POSTER]);

for (const f of [MP4, WEBM, POSTER]) {
  const kb = (fs.statSync(f).size / 1024).toFixed(0);
  console.log(`  ${f}: ${kb} KB`);
}
