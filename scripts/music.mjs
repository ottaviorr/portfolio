// Gera a playlist do easter egg do MP3: dados das faixas + capas pixeladas.
// Uso: npm run music   (precisa de internet; roda só quando a lista mudar)
// O áudio NÃO fica no site: o player busca a prévia oficial de 30s na Deezer na hora de tocar
// (o link da prévia expira, por isso não dá pra gravar aqui).
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';

// IDs de faixa da Deezer (deezer.com/track/<id>), na ordem da playlist
const IDS = [
  1976903157, // Taylor Swift — Anti-Hero
  2134998287, // Paramore — You First
  3631956112, // Hayley Williams — Showbiz
  3067351021, // Halsey — Lonely is the Muse
  3550943041, // Twenty One Pilots — Drum Show
  3991144381, // Zara Larsson — Blue Moon
  2185094037, // Sabrina Carpenter — Read your Mind
  4228885772, // Marina Sena — Taiobeiras
  3554304411, // ANAVITÓRIA — nosferatu
  4170795662, // Jão — Eu Sempre Volto
];

const COVER = 40; // capa em 40×40 px, exibida grande com image-rendering: pixelated
mkdirSync('public/music', { recursive: true });

const tracks = [];
for (const id of IDS) {
  const t = await (await fetch(`https://api.deezer.com/track/${id}`)).json();
  if (t.error) throw new Error(`faixa ${id}: ${t.error.message}`);
  const img = Buffer.from(await (await fetch(t.album.cover_big)).arrayBuffer());
  // pixel art: reduz pra 40px e limita a 24 cores (cara de jogo antigo, mas reconhecível)
  await sharp(img)
    .resize(COVER, COVER, { kernel: 'nearest' })
    .png({ palette: true, colors: 24, dither: 0 })
    .toFile(`public/music/${id}.png`);
  tracks.push({
    id,
    title: t.title_short,
    artist: t.artist.name,
    album: t.album.title,
    link: t.link,
  });
  console.log(`✓ ${t.artist.name} — ${t.title_short}`);
}
writeFileSync('src/music.json', JSON.stringify(tracks, null, 2) + '\n');
console.log(`✓ src/music.json (${tracks.length} faixas)`);
