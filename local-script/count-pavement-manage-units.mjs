import fs from 'fs';

const p =
  'D:/AI-QLBD/Linm.RMMS.WebService/api/src/RMMS.Service.Api/data/import/sets/gov-vn/pavement_sections.csv';
const raw = fs.readFileSync(p, 'utf8');
const lines = raw.split(/\r?\n/).filter(Boolean);

function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQ = !inQ;
      continue;
    }
    if (c === ',' && !inQ) {
      out.push(cur);
      cur = '';
      continue;
    }
    cur += c;
  }
  out.push(cur);
  return out;
}

const header = parseCsvLine(lines[0]);
const idx = Object.fromEntries(header.map((h, i) => [h, i]));
const mu = new Map();
const cu = new Map();
const ou = new Map();
let n = 0;
for (const line of lines.slice(1)) {
  const r = parseCsvLine(line);
  if (r.length < 14) continue;
  n++;
  const m = (r[idx.manage_unit] || '').trim() || '(empty)';
  const c = (r[idx.construction_unit] || '').trim() || '(empty)';
  const o = (r[idx.owner_unit] || '').trim() || '(empty)';
  mu.set(m, (mu.get(m) || 0) + 1);
  cu.set(c, (cu.get(c) || 0) + 1);
  ou.set(o, (ou.get(o) || 0) + 1);
}

const classify = (name) => {
  if (name.startsWith('Khu Quản lý')) return 'ORG_REG';
  if (name.startsWith('Sở ')) return 'PARTNER_SO';
  if (/BOT/i.test(name)) return 'PARTNER_BOT';
  if (name === '(empty)' || name === 'Chưa rõ') return 'EMPTY';
  return 'OTHER';
};

const buckets = { ORG_REG: 0, PARTNER_SO: 0, PARTNER_BOT: 0, EMPTY: 0, OTHER: 0 };
const byKind = { ORG_REG: [], PARTNER_SO: [], PARTNER_BOT: [], EMPTY: [], OTHER: [] };
for (const [k, v] of mu) {
  const kind = classify(k);
  buckets[kind] += v;
  byKind[kind].push([k, v]);
}

console.log(JSON.stringify({ rows: n, unique: mu.size, buckets, byKind }, null, 2));
console.log('--- construction unique', cu.size);
for (const [k, v] of [...cu.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(String(v).padStart(5), k);
}
console.log('--- owner unique', ou.size);
for (const [k, v] of [...ou.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(String(v).padStart(5), k);
}
