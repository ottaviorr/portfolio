// Gera a capa em dither (azul + rosa) de cada projeto e o fundo da Trajetória.
// Uso: npm run dither   → lê src/assets/projects/<slug>/desktop-1.png e escreve cover.png na mesma pasta.
// 540px exibido a ~2x: ponto de ~2px. Mais fino que isso cintila na rolagem (reamostragem
// subpixel); mais grosso vira pixelão. 6 cores, do escuro ao claro.
import sharp from 'sharp';
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const W = 540;
const H = 338;
// escuro → claro
const PALETTE = [
  [0x07, 0x0b, 0x14], // bg
  [0x06, 0x71, 0xb7], // blue
  [0x67, 0xa3, 0xd9], // blue-light
  [0xf8, 0xb7, 0xcd], // pink
  [0xf6, 0xd2, 0xe0], // pink-light
  [0xc8, 0xe7, 0xf5], // ice
];
const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

function dither(gray, w, h, palette = PALETTE) {
  const levels = palette.length - 1;
  const out = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const v = (gray[y * w + x] / 255) * levels;
      const threshold = (BAYER[y % 8][x % 8] + 0.5) / 64;
      const idx = Math.min(levels, Math.floor(v) + (v % 1 > threshold ? 1 : 0));
      out.set(palette[idx], (y * w + x) * 3);
    }
  }
  return out;
}

const root = 'src/assets/projects';
for (const slug of readdirSync(root)) {
  const src = join(root, slug, 'desktop-1.png');
  if (!existsSync(src)) continue;
  const gray = await sharp(src).resize(W, H, { fit: 'cover', position: 'top' }).grayscale().normalise().raw().toBuffer();
  await sharp(dither(gray, W, H), { raw: { width: W, height: H, channels: 3 } })
    .png({ palette: true, colors: PALETTE.length })
    .toFile(join(root, slug, 'cover.png'));
  console.log(`✓ ${slug}/cover.png`);
}

// Fundo da Trajetória: azul à esquerda, rosa à direita, com uma onda no meio.
// Paleta sem o fundo escuro, pra texto escuro ler bem por cima.
const FIELD = [
  [0x06, 0x71, 0xb7], // blue
  [0x67, 0xa3, 0xd9], // blue-light
  [0xf8, 0xb7, 0xcd], // pink
  [0xf6, 0xd2, 0xe0], // pink-light
];
const FW = 960;
const FH = 540;
const field = Buffer.alloc(FW * FH);
for (let y = 0; y < FH; y++) {
  for (let x = 0; x < FW; x++) {
    const u = x / FW, v = y / FH;
    const wave = 0.18 * Math.sin(v * Math.PI * 2 + u * 4) + 0.08 * Math.sin(u * 11 - v * 7);
    field[y * FW + x] = Math.round(Math.min(1, Math.max(0, u * 1.1 - 0.05 + wave)) * 255);
  }
}
await sharp(dither(field, FW, FH, FIELD), { raw: { width: FW, height: FH, channels: 3 } })
  .png({ palette: true, colors: FIELD.length })
  .toFile('src/assets/path-dither.png');
console.log('✓ path-dither.png');
