const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function dumpSheet(ws, name) {
  const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
  const ref = ws['!ref'] || '';
  const merges = (ws['!merges'] || []).length;
  let maxCol = 0;
  rows.forEach(r => { if (r.length > maxCol) maxCol = r.length; });
  const out = [];
  out.push(`# SHEET ${name}`);
  out.push(`ref=${ref} maxCol=${maxCol} rows=${rows.length} merges=${merges}`);
  // dump first 8 rows fully
  const n = Math.min(rows.length, 8);
  for (let i = 0; i < n; i++) {
    const r = rows[i];
    out.push(`ROW ${i+1}:`);
    for (let c = 0; c < maxCol; c++) {
      const v = String(r[c] ?? '').replace(/\s+/g, ' ').trim();
      if (v) out.push(`  [${c+1}] ${v}`);
    }
  }
  return out.join('\n');
}

const f = fs.readdirSync('.').find(x => x.toLowerCase().endsWith('.xls'));
const wb = XLSX.readFile(f, { cellDates: true });
let all = 'WORKBOOK ' + f + ' SHEETS ' + wb.SheetNames.length + '\n\n';
for (const name of wb.SheetNames) {
  all += dumpSheet(wb.Sheets[name], name) + '\n\n';
}
fs.writeFileSync('xls-headers.txt', all, 'utf8');
console.log('WROTE xls-headers.txt bytes=' + all.length);
console.log('SHEETS:');
wb.SheetNames.forEach((n,i)=>console.log((i+1)+'. '+n));
