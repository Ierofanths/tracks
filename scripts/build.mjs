// Checks every track in library/ and, without --check, builds the website into _site/:
//   _site/index.json            the list the app and the gallery read
//   _site/library/<collection>/<id>/track.*  the picture
//   _site/library/<collection>/<id>/thumb.jpg  a small picture for the gallery
// A track is a folder  library/<collection>/<id>/  with  track.json  and  track.png (or track.jpg).
// There are two collections: library/official/ (made by the maintainers) and library/public/ (uploaded by everybody).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const LIB = path.join(ROOT, 'library');
const OUT = path.join(ROOT, '_site');
const CHECK_ONLY = process.argv.includes('--check');

const SQUARE = 200;                 // every square is 200 x 200 px
const MAX_SQUARES = 8;              // at most 8 columns and 8 rows
const MAX_BYTES = 4 * 1024 * 1024;  // 4 MB per picture
const LICENSES = ['CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0', 'CC-BY-NC-4.0', 'CC-BY-NC-SA-4.0'];
const ROBOTS = ['tpbot-edu', 'tpbot'];
const COLLECTIONS = ['official', 'public'];
const ID = /^[a-z0-9][a-z0-9-]{1,48}$/;

const errors = [];
const fail = (id, msg) => errors.push(`${id}: ${msg}`);
const isSquare = (a, cols, rows) => Array.isArray(a) && a.length === 2 && Number.isInteger(a[0]) && Number.isInteger(a[1]) && a[0] >= 0 && a[1] >= 0 && a[0] < cols && a[1] < rows;
const text = (o) => o && typeof o === 'object' && typeof o.en === 'string' && o.en.trim() !== '';

if (!fs.existsSync(LIB)) { console.error('There is no library/ folder.'); process.exit(1); }
const entries = [];

const todo = [];
for (const name of fs.readdirSync(LIB).sort()) {
  if (name.startsWith('.') || !fs.statSync(path.join(LIB, name)).isDirectory()) continue;
  if (!COLLECTIONS.includes(name)) { fail(name, `this must be inside library/public/ (or library/official/ for the maintainers). Move the folder into library/public/${name}`); continue; }
  for (const id of fs.readdirSync(path.join(LIB, name)).sort()) if (!id.startsWith('.')) todo.push({ collection: name, id });
}
const seen = new Map();

for (const { collection, id } of todo) {
  const dir = path.join(LIB, collection, id);
  if (!fs.statSync(dir).isDirectory()) continue;
  const label = `${collection}/${id}`;
  if (seen.has(id)) { fail(label, `the name "${id}" is already used by ${seen.get(id)}; choose another folder name`); continue; }
  seen.set(id, label);
  if (!ID.test(id)) { fail(label, 'the folder name must use only lowercase letters, numbers and dashes (2 to 49 characters), e.g. farm-8x6'); continue; }
  const jsonFile = path.join(dir, 'track.json');
  const pics = ['track.png', 'track.jpg', 'track.jpeg'].filter((f) => fs.existsSync(path.join(dir, f)));
  if (!fs.existsSync(jsonFile)) { fail(label, 'track.json is missing'); continue; }
  if (pics.length !== 1) { fail(label, pics.length ? 'there is more than one picture: keep only one of track.png / track.jpg' : 'the picture is missing: add track.png or track.jpg'); continue; }
  let meta;
  try { meta = JSON.parse(fs.readFileSync(jsonFile, 'utf8')); } catch (e) { fail(label, 'track.json is not valid JSON (' + e.message + ')'); continue; }

  const picPath = path.join(dir, pics[0]);
  if (fs.statSync(picPath).size > MAX_BYTES) fail(label, `${pics[0]} is larger than 4 MB`);
  let info;
  try { info = await sharp(picPath).metadata(); } catch (e) { fail(label, pics[0] + ' is not a readable picture'); continue; }
  const { width, height } = info;
  if (width % SQUARE || height % SQUARE) { fail(label, `the picture is ${width} x ${height} px; both sizes must be a multiple of ${SQUARE} (every square is ${SQUARE} x ${SQUARE} px), e.g. 1600 x 1200 for 8 x 6 squares`); continue; }
  const cols = width / SQUARE, rows = height / SQUARE;
  if (cols < 2 || rows < 2 || cols > MAX_SQUARES || rows > MAX_SQUARES) { fail(label, `the picture has ${cols} x ${rows} squares; use between 2 and ${MAX_SQUARES} in each direction`); continue; }

  if (!text(meta.title)) fail(label, 'title.en is required (title.el is welcome)');
  if (typeof meta.author !== 'string' || !meta.author.trim()) fail(label, 'author is required (your name or your school or organisation)');
  if (!LICENSES.includes(meta.license)) fail(label, `license must be one of ${LICENSES.join(', ')}`);
  if (meta.tags !== undefined && !(Array.isArray(meta.tags) && meta.tags.every((t) => typeof t === 'string'))) fail(label, 'tags must be a list of words');
  if (meta.robots !== undefined && !(Array.isArray(meta.robots) && meta.robots.every((r) => ROBOTS.includes(r)))) fail(label, `robots may only contain: ${ROBOTS.join(', ')}`);
  const targets = meta.targets || [], traps = meta.traps || [];
  if (!targets.every((q) => isSquare(q, cols, rows))) fail(label, `every target must be [column, row] inside the ${cols} x ${rows} squares (counting from 0)`);
  if (!traps.every((q) => isSquare(q, cols, rows))) fail(label, `every trap must be [column, row] inside the ${cols} x ${rows} squares (counting from 0)`);
  const key = (q) => q.join(',');
  if (targets.some((q) => traps.map(key).includes(key(q)))) fail(label, 'a square cannot be both a target and a trap');
  if (meta.start !== undefined) {
    const s = meta.start;
    if (!(s && isSquare([s.col, s.row], cols, rows))) fail(label, `start must have col and row inside the ${cols} x ${rows} squares (counting from 0)`);
    else if (![undefined, 0, 90, 180, 270].includes(s.heading)) fail(label, 'start.heading must be 0 (up), 90 (right), 180 (down) or 270 (left)');
    else if (traps.map(key).includes(key([s.col, s.row]))) fail(label, 'the start square cannot be a trap');
  }

  entries.push({
    id, collection, title: meta.title, description: meta.description || { en: '' }, author: meta.author, license: meta.license,
    tags: meta.tags || [], robots: meta.robots || [], cols, rows,
    image: `library/${collection}/${id}/${pics[0]}`, thumb: `library/${collection}/${id}/thumb.jpg`,
    start: meta.start, targets, traps,
    _pic: picPath,
  });
}

// On GitHub the problems are also shown as red notes on the pull request and in a summary table.
const onGitHub = process.env.GITHUB_ACTIONS === 'true';
const summary = (md) => { if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + '\n'); };
if (errors.length) {
  console.error('\nThese tracks need a small fix:\n');
  errors.forEach((e) => console.error('  - ' + e));
  console.error('\n' + errors.length + ' problem(s). See CONTRIBUTING.md for the rules.');
  if (onGitHub) {
    for (const e of errors) {
      const id = e.split(':')[0], msg = e.slice(id.length + 2);
      const file = fs.existsSync(path.join(LIB, id, 'track.json')) ? `library/${id}/track.json` : `library/${id}`;
      console.log(`::error file=${file},title=This track needs a small fix::${msg.replace(/\r?\n/g, ' ')}`);
    }
  }
  summary('## ✗ Some tracks need a small fix\n\n| Track | What to fix |\n| --- | --- |\n' + errors.map((e) => { const id = e.split(':')[0]; return `| \`${id}\` | ${e.slice(id.length + 2)} |`; }).join('\n') + '\n\nRules: see CONTRIBUTING.md. Upload the corrected file into the same folder and this check runs again.');
  process.exit(1);
}
console.log(`${entries.length} track(s) checked: all good.`);
summary('## ✓ ' + entries.length + ' track(s) checked: all good\n\n| Track | Folder | Squares | Author | Licence |\n| --- | --- | --- | --- | --- |\n' + entries.map((e) => `| \`${e.id}\` | ${e.collection} | ${e.cols} × ${e.rows} | ${e.author} | ${e.license} |`).join('\n'));
if (CHECK_ONLY) process.exit(0);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'library'), { recursive: true });
entries.sort((a, b) => COLLECTIONS.indexOf(a.collection) - COLLECTIONS.indexOf(b.collection) || a.id.localeCompare(b.id));
for (const e of entries) {
  const dest = path.join(OUT, path.dirname(e.image));
  fs.mkdirSync(dest, { recursive: true });
  fs.copyFileSync(e._pic, path.join(OUT, e.image));
  await sharp(e._pic).resize({ width: 480, height: 360, fit: 'inside' }).flatten({ background: '#ffffff' }).jpeg({ quality: 80 }).toFile(path.join(OUT, e.thumb));
  delete e._pic;
}
fs.writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({ version: 2, collections: COLLECTIONS, generated: new Date().toISOString(), squarePx: SQUARE, tracks: entries }, null, 1) + '\n');
const web = path.join(ROOT, 'web');
if (fs.existsSync(web)) fs.cpSync(web, OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');
console.log('Built _site/ with index.json, ' + entries.length + ' picture(s) and thumbnails.');
