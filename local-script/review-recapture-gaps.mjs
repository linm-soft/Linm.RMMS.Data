import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const base = 'D:/AI-QLBD/Linm.RMMS.Data/docs/context/_raw/legacy-govone';
const rawF = join(base, 'features');
const maps = join(base, 'demo-maps');
const capture = join(base, 'capture');
const ctxF = 'D:/AI-QLBD/Linm.RMMS.Data/docs/context/features';

function hasMaster(slug) {
  return existsSync(join(capture, slug));
}

function countInventory(dir, acc = { inv: 0, form: 0, shot: 0 }) {
  if (!existsSync(dir)) return acc;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) countInventory(p, acc);
    else if (n === 'inventory.json') acc.inv++;
    else if (n === 'form-sample.json' || n === 'form-sample.html') acc.form++;
    else if (n === 'screenshot.png') acc.shot++;
  }
  return acc;
}

const catalog = [
  'asset','pavement-section','gis','gis-draw-google','ai-vision','ai-asset-detect',
  'estimate','predict','patrol','incident','integration','feedback','citizen','users',
  'maintenance','ops','reports','contract','inventory','drone','toc','dashboard',
  'attendance','copilot',
];

console.log('| slug | demo HTML | feature ctx | raw feat | capture master | inv/form/shot | source | gap');
console.log('|------|-----------|-------------|----------|----------------|---------------|--------|-----|');

for (const slug of catalog) {
  const demoPaths = [
    `D:/AI-QLBD/Linm.RMMS.Demo/public/demo/**/${slug}.html`,
  ];
  // simple search
  function findDemo(s) {
    const root = 'D:/AI-QLBD/Linm.RMMS.Demo/public/demo';
    function walk(d) {
      for (const n of readdirSync(d)) {
        const p = join(d, n);
        if (statSync(p).isDirectory()) {
          if (n === 'vendor' || n === '_shared' || n === 'features') continue;
          const x = walk(p);
          if (x) return x;
        } else if (n === `${s}.html`) return p;
      }
      return null;
    }
    return walk(root);
  }
  const demo = findDemo(slug);
  const ctx = existsSync(join(ctxF, slug + '.md'));
  const raw = existsSync(join(rawF, slug + '.md'));
  let rawHead = '';
  let synthesized = false;
  if (raw) {
    const t = readFileSync(join(rawF, slug + '.md'), 'utf8');
    synthesized = /synthesized|Synthetized|module mới|không có màn GOVOne|planned\)/i.test(t);
    rawHead = t.slice(0, 120).replace(/\n/g, ' ');
  }
  const master = hasMaster(slug);
  const counts = master ? countInventory(join(capture, slug)) : { inv: 0, form: 0, shot: 0 };
  const cmap = existsSync(join(maps, slug + '-control-map.md'));
  let gap = [];
  if (!demo) gap.push('no-demo');
  if (!ctx) gap.push('no-ctx');
  if (!raw) gap.push('no-raw');
  if (synthesized) gap.push('synthetic');
  if (master && counts.form === 0 && !['dashboard','reports'].includes(slug)) gap.push('no-form-sample');
  if (master && counts.inv <= 2) gap.push('shallow-capture');
  if (!master && !synthesized && ['asset','patrol','incident','users','reports','maintenance','dashboard','gis-draw-google'].includes(slug)) {
    gap.push('missing-master');
  }
  if (!master && synthesized) gap.push('need-live-if-exists');
  if (slug === 'maintenance' && !master) gap.push('tile-SCDK-not-in-tree');
  if (slug === 'users' && counts.form === 0) gap.push('user-list-form-weak');
  if (slug === 'asset' && counts.form === 0) gap.push('asset-form-create-missing');
  if (slug === 'dashboard' && !demo) gap.push('dashboard-no-demo-page');
  if (slug === 'attendance' || slug === 'copilot') gap.push('context-only');
  if (['ai-vision','ai-asset-detect'].includes(slug)) gap.push('product-AI-no-govone');
  console.log(
    `| ${slug} | ${demo ? 'Y' : 'N'} | ${ctx ? 'Y' : 'N'} | ${raw ? (synthesized ? 'SYN' : 'Y') : 'N'} | ${master ? 'Y' : 'N'} | ${counts.inv}/${counts.form}/${counts.shot} | ${cmap ? 'map' : '-'} | ${gap.join(',') || 'ok-ish'} |`,
  );
}

// left rails summary
console.log('\n## Left-rail / tile menus (from capture)');
for (const m of readdirSync(capture).filter((n) => statSync(join(capture, n)).isDirectory())) {
  const rail = join(capture, m, '_left-rail.json');
  if (!existsSync(rail)) {
    console.log(m + ': (no left-rail)');
    continue;
  }
  const j = JSON.parse(readFileSync(rail, 'utf8'));
  const dump = JSON.stringify(j).slice(0, 400);
  console.log(m + ':', dump);
}
