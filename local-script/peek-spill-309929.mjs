import fs from "fs";

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

function peek(path, needle) {
  const fd = fs.openSync(path, "r");
  const st = fs.fstatSync(fd);
  const chunk = 8 * 1024 * 1024;
  let pos = 0;
  let carry = "";
  let header = null;
  const hits = [];
  while (pos < st.size && hits.length < 3) {
    const n = Math.min(chunk, st.size - pos);
    const buf = Buffer.alloc(n);
    fs.readSync(fd, buf, 0, n, pos);
    pos += n;
    const text = carry + buf.toString("utf8");
    const lines = text.split(/\r?\n/);
    carry = lines.pop() || "";
    for (const line of lines) {
      if (!header) {
        header = splitCsv(line).map((h) => h.replace(/^\uFEFF/, "").trim());
        continue;
      }
      if (line.includes(needle)) hits.push(splitCsv(line));
    }
  }
  fs.closeSync(fd);
  return { header, hits };
}

const dump = peek(
  "d:/AI-QLBD/Linm.RMMS.Data/data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_spill_way.2026.8.23.15.17.csv",
  "spill_way_309929",
);
console.log("DUMP hits", dump.hits.length);
if (dump.hits[0]) {
  dump.header.forEach((h, i) => {
    const v = (dump.hits[0][i] || "").trim();
    if (v) console.log(" ", h, "=", v);
  });
}

const csv = peek(
  "d:/AI-QLBD/Linm.RMMS.WebService/api/src/RMMS.Service.Api/data/import/sets/gov-vn/road_assets.csv",
  "spill_way_309929",
);
console.log("\nCSV");
if (csv.hits[0]) {
  csv.header.forEach((h, i) => console.log(" ", h, "=", (csv.hits[0][i] || "").trim()));
} else console.log(" not in assembled");
