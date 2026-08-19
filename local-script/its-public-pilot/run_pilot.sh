#!/usr/bin/env bash
# Pilot public data → P1 test pack. Chạy trên Colab / Kaggle / A100 / máy local.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

python3 -m pip install -q -r requirements.txt
exec python3 run_pilot.py "$@"
