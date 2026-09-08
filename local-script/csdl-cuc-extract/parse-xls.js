const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const files = fs.readdirSync('.').filter(f => f.toLowerCase().endsWith('.xls') || f.toLowerCase().endsWith('.xlsx'));
console.log('XLS_FILES', files);
for (const f of files) {
  const wb = XLSX.readFile(f, { cellDates: true });
  console.log('\n===== WORKBOOK', f, 'sheets=', wb.SheetNames.length, '=====');
  for (const name of wb.SheetNames) {
    const ws = wb.Sheets[name];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
    console.log('\n----- SHEET:', JSON.stringify(name), 'rows=', rows.length, '-----');
    const max = Math.min(rows.length, 40);
    for (let i = 0; i < max; i++) {
      const r = rows[i].map(c => String(c).replace(/\s+/g, ' ').trim()).filter((c, idx, arr) => {
        // keep first 20 non-empty or keep structure
        return true;
      });
      const shown = r.slice(0, 18).join(' | ');
      if (shown.replace(/\|/g,'').trim()) console.log(String(i+1).padStart(3,' ') + ': ' + shown);
    }
    if (rows.length > 40) console.log('... (' + (rows.length-40) + ' more rows)');
  }
}
