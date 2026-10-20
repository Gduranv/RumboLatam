import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * Packs multiple PNG buffers into a valid ICO binary format.
 * Compatible with all modern and legacy browsers.
 */
function createIco(pngEntries) {
  const numImages = pngEntries.length;
  const headerLen = 6;
  const dirEntryLen = 16;
  let offset = headerLen + dirEntryLen * numImages;

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type (1 = icon)
  header.writeUInt16LE(numImages, 4);

  const entries = [];
  for (const { width, height, buffer } of pngEntries) {
    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(width >= 256 ? 0 : width, 0);
    entry.writeUInt8(height >= 256 ? 0 : height, 1);
    entry.writeUInt8(0, 2); // color palette (0 = no palette)
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel (32-bit RGBA)
    entry.writeUInt32LE(buffer.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset from start of file
    entries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngEntries.map((p) => p.buffer)]);
}

/**
 * Creates an orange icon with the white Rumbo logo centered inside.
 * @param {number} size - Output width and height in px
 * @param {number} cornerRadius - Radius for rounded corners (0 for full solid square)
 * @param {number} paddingPercent - Margin around the logo (e.g. 0.12 = 12%)
 */
async function createRumboIcon(logoBuffer, size, cornerRadius = 0, paddingPercent = 0.12) {
  const padding = Math.round(size * paddingPercent);
  const innerSize = size - padding * 2;

  // Resize white logo to fit inside inner area
  const resizedLogo = await sharp(logoBuffer)
    .resize(innerSize, innerSize, { fit: 'inside' })
    .toBuffer();

  let backgroundSvg;
  if (cornerRadius > 0) {
    backgroundSvg = Buffer.from(
      `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${cornerRadius}" ry="${cornerRadius}" fill="#FF7223" /></svg>`
    );
  } else {
    backgroundSvg = Buffer.from(
      `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" fill="#FF7223" /></svg>`
    );
  }

  return sharp(backgroundSvg)
    .composite([{ input: resizedLogo, gravity: 'centre' }])
    .png()
    .toBuffer();
}

async function main() {
  const logoPath = 'public/Paises/LogoReducido.png';
  if (!fs.existsSync(logoPath)) {
    throw new Error(`Logo not found at ${logoPath}`);
  }
  const logoBuffer = fs.readFileSync(logoPath);

  console.log('Generating Rumbo Latam favicons and app icons...');

  // 1. High-resolution base 512x512 icon (squircle radius ~100px)
  const icon512Squircle = await createRumboIcon(logoBuffer, 512, 104, 0.12);
  const icon512Square = await createRumboIcon(logoBuffer, 512, 0, 0.14);

  // 2. 192x192 icon for Android / PWA
  const icon192 = await createRumboIcon(logoBuffer, 192, 38, 0.12);

  // 3. 180x180 icon for Apple Touch Icon (solid square - iOS masks it automatically)
  const appleIcon180 = await createRumboIcon(logoBuffer, 180, 0, 0.14);

  // 4. Desktop icons: 48x48, 32x32, 16x16 with squircle corners
  const icon48 = await createRumboIcon(logoBuffer, 48, 10, 0.12);
  const icon32 = await createRumboIcon(logoBuffer, 32, 7, 0.12);
  const icon16 = await createRumboIcon(logoBuffer, 16, 3, 0.10);

  // 5. Generate multi-resolution ICO file (contains 16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
  ]);

  // Destination directories
  const publicDir = 'public';
  const appDir = 'src/app';

  // Write ICO
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✔ favicon.ico written to src/app/ and public/');

  // Write Next.js App Router icons
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon32);
  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), icon32);
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), icon16);
  console.log('✔ icon.png (32x32) written to src/app/ and public/');

  // Write Apple Touch icons (Next.js automatically detects apple-icon.png in src/app)
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleIcon180);
  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), appleIcon180);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIcon180);
  console.log('✔ apple-icon.png (180x180) written to src/app/ and public/');

  // Write Android / PWA icons
  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192);
  fs.writeFileSync(path.join(publicDir, 'icon-512.png'), icon512Squircle);
  console.log('✔ icon-192.png & icon-512.png written to public/');

  // Write Web App Manifest
  const manifest = {
    name: 'Rumbo Latam',
    short_name: 'Rumbo Latam',
    description: 'Guía de viaje interactiva por América Latina',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDF9EC',
    theme_color: '#FF7223',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  };

  fs.writeFileSync(
    path.join(publicDir, 'manifest.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('✔ manifest.webmanifest written to public/');

  console.log('All favicon and app icon assets generated successfully!');
}

main().catch(console.error);
