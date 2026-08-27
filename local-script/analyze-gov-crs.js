const fs = require('fs');
const readline = require('readline');
const path =
  'D:/AI-QLBD/Linm.RMMS.WebService/api/src/RMMS.Service.Api/data/import/sets/gov-vn/road_assets.csv';

function parse(v) {
  v = String(v || '')
    .trim()
    .replace(',', '.');
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}
function dp(n) {
  const s = n.toFixed(10).replace(/0+$/, '');
  const i = s.indexOf('.');
  return i < 0 ? 0 : s.length - i - 1;
}
function coarse01(n) {
  return Math.abs(n * 100 - Math.round(n * 100)) < 1e-6;
}
function splitCsv(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"' && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ',') {
      out.push(cur);
      cur = '';
    } else cur += c;
  }
  out.push(cur);
  return out;
}
function bump(map, k) {
  map[k] = (map[k] || 0) + 1;
}

const byType = {};
const coarseByType = {};
const fineByType = {};
let n = 0;
let empty = 0;
let ph = 0;
let metres = 0;
let swapped = 0;
let degOk = 0;
let degOut = 0;
let coarse = 0;
let fine = 0;
let dp2 = 0;
let dp3 = 0;
let latMin = 999;
let latMax = -999;
let lngMin = 999;
let lngMax = -999;
const samplesCoarse = [];
const samplesFine = [];

const rl = readline.createInterface({
  input: fs.createReadStream(path, { encoding: 'utf8' }),
});
let header = null;
let iLat = -1;
let iLng = -1;
let iType = -1;
let iName = -1;
let iCode = -1;
let iRoute = -1;

rl.on('line', (line) => {
  if (line.charCodeAt(0) === 0xfeff) line = line.slice(1);
  if (!header) {
    header = splitCsv(line);
    iLat = header.indexOf('lat');
    iLng = header.indexOf('lng');
    iType = header.indexOf('type');
    iName = header.indexOf('name');
    iCode = header.indexOf('code');
    iRoute = header.indexOf('route');
    return;
  }
  n++;
  const f = splitCsv(line);
  const lat = parse(f[iLat]);
  const lng = parse(f[iLng]);
  const t = f[iType] || '';
  if (lat == null || lng == null) {
    empty++;
    return;
  }
  if (Math.abs(lat - 16) < 1e-4 && Math.abs(lng - 110) < 1e-4) {
    ph++;
    return;
  }
  if (Math.abs(lat) >= 10000 || Math.abs(lng) >= 10000) {
    metres++;
    return;
  }
  let la = lat;
  let ln = lng;
  if ((la < 8 || la > 23.6) && ln >= 8 && ln <= 23.6 && la >= 102 && la <= 110.5) {
    swapped++;
    const tmp = la;
    la = ln;
    ln = tmp;
  }
  if (la >= 8 && la <= 23.6 && ln >= 102 && ln <= 110.5) {
    degOk++;
    bump(byType, t);
    if (la < latMin) latMin = la;
    if (la > latMax) latMax = la;
    if (ln < lngMin) lngMin = ln;
    if (ln > lngMax) lngMax = ln;
    const d = Math.max(dp(la), dp(ln));
    if (coarse01(la) && coarse01(ln)) {
      coarse++;
      bump(coarseByType, t);
      if (samplesCoarse.length < 6)
        samplesCoarse.push([f[iCode], t, f[iName], la, ln, f[iRoute]]);
    } else if (d <= 2) dp2++;
    else if (d === 3) dp3++;
    else {
      fine++;
      bump(fineByType, t);
      if (samplesFine.length < 6) samplesFine.push([f[iCode], t, f[iName], la, ln, f[iRoute]]);
    }
  } else degOut++;
});

rl.on('close', () => {
  const top = (obj, m) =>
    Object.entries(obj)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(
        ([k, v]) =>
          `${k}\t${v}\tof ${m[k] || 0}\t${((100 * v) / (m[k] || 1)).toFixed(1)}%`,
      )
      .join('\n');
  console.log(
    JSON.stringify(
      {
        rows: n,
        empty,
        placeholder_16_110: ph,
        metres_ge_10000: metres,
        swapped_axis: swapped,
        deg_in_vn_bbox: degOk,
        deg_out_bbox: degOut,
        coarse_001: coarse,
        coarse_pct: +(100 * (coarse / Math.max(degOk, 1))).toFixed(1),
        fine_dp_ge4: fine,
        fine_pct: +(100 * (fine / Math.max(degOk, 1))).toFixed(1),
        dp2,
        dp3,
        bbox: [latMin, latMax, lngMin, lngMax],
      },
      null,
      2,
    ),
  );
  console.log('--- coarse by type ---');
  console.log(top(coarseByType, byType));
  console.log('--- fine by type ---');
  console.log(top(fineByType, byType));
  console.log('samples coarse', samplesCoarse);
  console.log('samples fine', samplesFine);
});
