#!/bin/zsh
# Ghi screenshot App Store iPhone 6.9" vào folder version — không root, không bk.
# Usage: ./capture-ios-iphone-version.sh 01
# Sim iPhone 17 Pro Max 1320×2868 · Release com.drvn.rmms.store · acc rmms-admin.
# Cấm Debug com.drvn.rmms · cấm family iPad.
set -euo pipefail
SLOT="${1:-}"
if [[ ! "$SLOT" =~ ^0[1-9]$ ]]; then
  echo "Usage: $0 01   (01–09)" >&2
  exit 1
fi
UDID="${IOS_SIM_UDID:-518BFF77-0941-448B-8D37-67678F4506C7}"
STORE_OUT="/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/plan/release-mobile/store/out/ios"
VERSION_FOLDER="${IOS_VERSION_FOLDER:-1.0.0-2}"
DEST="${STORE_OUT}/${VERSION_FOLDER}"
OUT="${DEST}/ss-iphone-1320x2868-${SLOT}.png"
mkdir -p "$DEST"
xcrun simctl io "$UDID" screenshot "$OUT"
python3 - "$OUT" << 'PY'
import sys
from pathlib import Path
from PIL import Image
p = Path(sys.argv[1])
im = Image.open(p)
if im.size != (1320, 2868):
    sys.exit(f"GAP-STORE-IMG-02: {im.size} ≠ 1320x2868")
if im.mode != "RGB":
    im.convert("RGB").save(p, "PNG")
print(p)
PY
echo "OK $OUT"
sips -g pixelWidth -g pixelHeight -g hasAlpha "$OUT" | sed -n '2,4p'
