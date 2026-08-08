# -*- coding: utf-8 -*-
"""Parse DRVN co-cau-to-chuc HTML → stdout tree lines."""
import html
import re
import sys
from pathlib import Path

src = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(r"C:/Users/LINHDINH/AppData/Local/Temp/drvn-org.html")
raw = src.read_bytes()
text = None
for enc in ("utf-8", "utf-8-sig", "cp1258", "latin-1"):
    try:
        cand = raw.decode(enc)
    except UnicodeDecodeError:
        continue
    if "Khu" in cand:
        text = cand
        print(f"# enc={enc} bytes={len(raw)}", flush=True)
        break
if text is None:
    text = raw.decode("utf-8", errors="replace")
    print("# enc=utf8-replace", flush=True)

text = re.sub(r"<script[\s\S]*?</script>", " ", text, flags=re.I)
text = re.sub(r"<style[\s\S]*?</style>", " ", text, flags=re.I)
text = re.sub(r"<[^>]+>", "\n", text)
text = html.unescape(text)
lines = [ln.strip() for ln in text.splitlines() if ln.strip()]

needles = (
    "Cơ quan",
    "Khu Quản",
    "Văn phòng",
    "Phòng ",
    "Ban quản",
    "Trung tâm",
    "Trường Cao",
    "LÃNH",
    "CƠ CẤU",
    "ĐƠN VỊ",
    "Quản lý đường bộ",
)
out = []
seen = set()
for ln in lines:
    if len(ln) >= 150:
        continue
    if any(n in ln for n in needles):
        if ln not in seen:
            seen.add(ln)
            out.append(ln)

print("\n".join(out))
