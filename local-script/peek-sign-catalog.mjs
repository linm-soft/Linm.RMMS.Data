import fs from "fs";
import path from "path";
import { execSync } from "child_process";

function splitCsv(line) {
  const list = [];
  let sb = "";
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (q && i + 1 < line.length && line[i + 1] === '"') {
        sb += '"';
        i++;
      } else q = !q;
    } else if (c === "," && !q) {
      list.push(sb);
      sb = "";
    } else sb += c;
  }
  list.push(sb);
  return list;
}

const raw =
  "d:/AI-QLBD/Linm.RMMS.Data/data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_road_sign.2026.8.23.15.30.csv";
const fd = fs.openSync(raw, "r");
const buf = Buffer.alloc(64 * 1024);
const n = fs.readSync(fd, buf, 0, buf.length, 0);
fs.closeSync(fd);
const lines = buf.slice(0, n).toString("utf8").split(/\r?\n/);
const header = splitCsv(lines[0]).map((h) => h.replace(/^\uFEFF/, "").trim());
console.log("DUMP COLS", header.length);
header.forEach((h, i) => console.log(String(i).padStart(3), h));

let shown = 0;
for (let i = 1; i < lines.length && shown < 3; i++) {
  const row = splitCsv(lines[i]);
  const id = (row[1] || "").trim();
  if (!id || id === "vidagis_id" || id.startsWith("Tên") || id.toLowerCase() === "parentid") continue;
  console.log("\nSAMPLE", id);
  header.forEach((h, j) => {
    const v = (row[j] || "").trim();
    if (v) console.log(" ", h, "=", v);
  });
  shown++;
}
