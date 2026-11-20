// One-off: converts client photos (downloaded from the client's site) to WebP. Usage: node scripts/images.mjs <srcDir>
import sharp from "sharp";
const src = process.argv[2];
const jobs = [
  ["img/bilyk.jpg", "bilyk", [500]],
  ["doc/d0.jpg", "slipetskyi", [640]],
  ["img/photo_2024-03-28_08-51-47-e1711618515280.jpg", "vysotskyi", [640]],
  ["doc/d2.jpg", "kulyk", [500]],
  ["doc/d6.jpg", "shulipa", [640]],
  ["doc/d8.jpg", "petrushko", [500]],
  ["doc/d9.jpg", "marharian", [640]],
  ["img/contacts_-scaled.jpg", "reception", [800, 1400]],
];
for (const [f, name, widths] of jobs) {
  for (const w of widths) {
    const p = f.startsWith("img/bilyk") ? src + "/img/bilyk-e1665133556498.jpg" : src + "/" + f;
    const out = `public/img/${name}-${w}.webp`;
    const info = await sharp(p).resize({ width: w, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    console.log(out, info.width, info.height, info.size);
  }
}
