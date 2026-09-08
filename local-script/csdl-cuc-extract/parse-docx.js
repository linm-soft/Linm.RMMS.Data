const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { spawnSync } = require('child_process');

const docxFiles = fs.readdirSync('.').filter(f => f.toLowerCase().endsWith('.docx'));
const unzipDir = path.join('.', '_docx_unzip');
fs.mkdirSync(unzipDir, { recursive: true });

function extractDocx(file) {
  const safe = file.replace(/[^\w.\-]+/g, '_').slice(0, 80);
  const dest = path.join(unzipDir, safe);
  fs.mkdirSync(dest, { recursive: true });
  // copy as zip
  const zip = dest + '.zip';
  fs.copyFileSync(file, zip);
  try {
    execSync(`tar -xf "${zip}" -C "${dest}"`, { stdio: 'pipe' });
  } catch (e) {
    try { execSync(`powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zip}' -DestinationPath '${dest}' -Force"`, {stdio:'pipe'}); } catch(e2) {}
  }
  const xmlPath = path.join(dest, 'word', 'document.xml');
  if (!fs.existsSync(xmlPath)) return { file, text: 'NO_DOCUMENT_XML' };
  let xml = fs.readFileSync(xmlPath, 'utf8');
  // paragraphs
  const paras = [];
  xml.replace(/<w:p[\s\S]*?<\/w:p>/g, (p) => {
    const texts = [];
    p.replace(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g, (_, t) => {
      texts.push(t.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"'));
      return '';
    });
    const line = texts.join('').replace(/\s+/g,' ').trim();
    if (line) paras.push(line);
    return '';
  });
  return { file, paras };
}

let out = '';
for (const f of docxFiles) {
  const r = extractDocx(f);
  out += '\n\n======== FILE: ' + f + ' paras=' + (r.paras ? r.paras.length : 0) + ' ========\n';
  if (r.text) out += r.text + '\n';
  else {
    const take = r.paras.slice(0, 80);
    take.forEach((p,i) => out += (i+1) + ': ' + p + '\n');
    if (r.paras.length > 80) out += '... (' + (r.paras.length-80) + ' more)\n';
  }
}
fs.writeFileSync('docx-text.txt', out, 'utf8');
console.log('WROTE docx-text.txt bytes=' + out.length + ' files=' + docxFiles.length);
docxFiles.forEach(f => console.log('DOCX ' + f));
