#!/bin/zsh
# Ghi screenshot Play phone vào folder version — không root, không bk.
# Usage: ./capture-play-phone-version.sh 01
# Hiện đúng màn trên emulator 1080×1920 rồi chạy. Acc rmms-admin. Cấm w3Debug.
set -euo pipefail
SLOT="${1:-}"
if [[ ! "$SLOT" =~ ^0[1-9]$ ]]; then
  echo "Usage: $0 01   (01–09)" >&2
  exit 1
fi
SERIAL="${ANDROID_SERIAL:-emulator-5554}"
STORE_OUT="/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/plan/release-mobile/store/out/android"
VERSION_FOLDER="${PLAY_VERSION_FOLDER:-1.0.0-3}"
DEST="${STORE_OUT}/${VERSION_FOLDER}"
OUT="${DEST}/play-phone-1080x1920-${SLOT}.png"
mkdir -p "$DEST"
SIZE="$(adb -s "$SERIAL" shell wm size | tr -d '\r')"
if [[ "$SIZE" != *"1080x1920"* ]]; then
  echo "GAP-STORE-IMG-02: emulator phải 1080x1920 — $SIZE" >&2
  exit 1
fi
adb -s "$SERIAL" exec-out screencap -p > "$OUT"
python3 - "$OUT" << 'PY'
import sys
from pathlib import Path
from PIL import Image
p = Path(sys.argv[1])
im = Image.open(p)
if im.size != (1080, 1920):
    sys.exit(f"GAP-STORE-IMG-02: {im.size} ≠ 1080x1920")
if im.mode != "RGB":
    im.convert("RGB").save(p, "PNG")
print(p)
PY
echo "OK $OUT"
sips -g pixelWidth -g pixelHeight -g hasAlpha "$OUT" | sed -n '2,4p'
