#!/usr/bin/env python3
"""Pilot: tải dataset public VN → pack P1 test (không train Ultralytics).

Chỉ data mở. Cấm ảnh tuyến / cam Chi cục.
SSOT: docs/context/features/its-traffic-detect.md §8–§12 · 17 GPU.
"""
from __future__ import annotations

import argparse
import json
import os
import platform
import shutil
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path

HF_SIGNS = "star092304/Traffic-sign-detection-VietNam"
VIA_ZIP = (
    "https://github.com/makerhanoi/via-datasets/releases/download/v1.0/"
    "via-trafficsign-20210321.zip"
)
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".bmp", ".webp"}


def utc_now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def detect_env() -> dict:
    gpu = "none"
    try:
        out = subprocess.check_output(
            ["nvidia-smi", "--query-gpu=name,memory.total", "--format=csv,noheader"],
            text=True,
            stderr=subprocess.DEVNULL,
        ).strip()
        if out:
            gpu = out.splitlines()[0].strip()
    except (OSError, subprocess.CalledProcessError):
        pass
    return {
        "os": platform.platform(),
        "python": sys.version.split()[0],
        "gpu": gpu,
        "colab": os.path.isdir("/content"),
        "kaggle": os.path.isdir("/kaggle"),
        "a100": "A100" in gpu.upper(),
    }


def ensure_dir(p: Path) -> Path:
    p.mkdir(parents=True, exist_ok=True)
    return p


def download_hf(repo: str, dest: Path) -> Path:
    from huggingface_hub import snapshot_download

    ensure_dir(dest)
    print(f"# HF snapshot {repo} → {dest}", flush=True)
    path = snapshot_download(repo_id=repo, repo_type="dataset", local_dir=str(dest))
    return Path(path)


def download_via(dest: Path) -> Path:
    import urllib.request
    import zipfile

    ensure_dir(dest)
    zip_path = dest / "via-trafficsign-20210321.zip"
    if not zip_path.exists():
        print(f"# VIA wget {VIA_ZIP}", flush=True)
        urllib.request.urlretrieve(VIA_ZIP, zip_path)
    extract = dest / "extracted"
    if not extract.exists():
        with zipfile.ZipFile(zip_path) as zf:
            zf.extractall(extract)
    return extract


def iter_images(root: Path) -> list[Path]:
    files = [p for p in root.rglob("*") if p.is_file() and p.suffix.lower() in IMAGE_EXT]
    files.sort()
    return files


def sibling_label(img: Path) -> Path | None:
    for labels_name in ("labels", "Labels", "label"):
        try:
            rel = img.relative_to(img.parents[1] if img.parent.name.lower().startswith("image") else img.parent)
        except ValueError:
            rel = Path(img.name)
        cand = img.parent.parent / labels_name / rel.with_suffix(".txt")
        if cand.is_file():
            return cand
    same = img.with_suffix(".txt")
    if same.is_file():
        return same
    # images/train/x.jpg → labels/train/x.txt
    parts = list(img.parts)
    for i, part in enumerate(parts):
        if part.lower() in ("images", "image", "imgs"):
            parts[i] = "labels"
            alt = Path(*parts).with_suffix(".txt")
            if alt.is_file():
                return alt
    return None


def remap_yolo_line(line: str) -> str | None:
    bits = line.strip().split()
    if len(bits) < 5:
        return None
    # class xc yc w h  →  0 xc yc w h  (TRAFFIC_SIGN)
    return " ".join(["0", *bits[1:5]])


def write_yolo_remap(images: list[Path], yolo_root: Path, max_n: int) -> int:
    img_dir = ensure_dir(yolo_root / "images" / "train")
    lab_dir = ensure_dir(yolo_root / "labels" / "train")
    n = 0
    for src in images:
        if n >= max_n:
            break
        label = sibling_label(src)
        dest_img = img_dir / f"{n:05d}{src.suffix.lower()}"
        dest_lab = lab_dir / f"{n:05d}.txt"
        shutil.copy2(src, dest_img)
        lines_out = []
        if label and label.is_file():
            for raw in label.read_text(encoding="utf-8", errors="replace").splitlines():
                mapped = remap_yolo_line(raw)
                if mapped:
                    lines_out.append(mapped)
        dest_lab.write_text("\n".join(lines_out) + ("\n" if lines_out else ""), encoding="utf-8")
        n += 1
    yaml = {
        "path": str(yolo_root.resolve()),
        "train": "images/train",
        "val": "images/train",
        "names": {0: "TRAFFIC_SIGN"},
    }
    try:
        import yaml as yml

        (yolo_root / "classes.yaml").write_text(yml.safe_dump(yaml, allow_unicode=True), encoding="utf-8")
    except Exception:
        (yolo_root / "classes.yaml").write_text(
            "names:\n  0: TRAFFIC_SIGN\n", encoding="utf-8"
        )
    return n


def export_p1_pack(images: list[Path], dest: Path, max_n: int, source: str) -> Path:
    img_out = ensure_dir(dest / "images")
    rows = []
    n = 0
    for src in images:
        if n >= max_n:
            break
        name = f"p1-{n:03d}{src.suffix.lower()}"
        shutil.copy2(src, img_out / name)
        rows.append(
            {
                "file": f"images/{name}",
                "expectedClass": "TRAFFIC_SIGN",
                "assetType": "TRAFFIC_SIGN",
                "incidentHint": None,
                "source": source,
                "note": "P1 HITL — Confirm bắt buộc · cấm auto-create Asset",
            }
        )
        n += 1
    manifest = {
        "pack": "rmms-p1-public-pilot",
        "createdAt": utc_now(),
        "purpose": "Test P1 detect (GPT / upload frame) — public images only",
        "count": n,
        "licenseNote": "Community open dataset — kiểm LICENSE trước dùng ngoài lab. Không phải ảnh Chi cục.",
        "ssot": "docs/context/features/its-traffic-detect.md",
        "items": rows,
    }
    (dest / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    return dest


def main() -> int:
    ap = argparse.ArgumentParser(description="ITS public-data pilot → P1 test pack")
    ap.add_argument("--root", type=Path, default=Path(__file__).resolve().parent)
    ap.add_argument("--pack", choices=("signs", "via", "both"), default="signs")
    ap.add_argument("--max-images", type=int, default=40, help="Số ảnh pack P1 (mặc định 40)")
    ap.add_argument("--max-yolo", type=int, default=400, help="Số ảnh remap YOLO (lab)")
    ap.add_argument("--skip-download", action="store_true")
    args = ap.parse_args()

    root = args.root
    data = ensure_dir(root / "data")
    out = ensure_dir(root / "out")
    env = detect_env()
    print("# env", json.dumps(env, ensure_ascii=False), flush=True)
    if env["colab"] or env["kaggle"]:
        print("# platform=FREE_NOTEBOOK — đủ P1 pack + smoke · không train prod", flush=True)
    elif env["a100"]:
        print("# platform=A100 — được fine-tune P2-A · tắt VM sau export", flush=True)
    else:
        print("# platform=CPU/local — chỉ download + export pack", flush=True)

    images: list[Path] = []
    source = HF_SIGNS

    if args.pack in ("signs", "both"):
        hf_dir = data / "hf-vn-signs"
        if not args.skip_download or not any(hf_dir.rglob("*")):
            try:
                download_hf(HF_SIGNS, hf_dir)
            except Exception as exc:
                print(f"! HF download failed: {exc}", file=sys.stderr)
                print("  pip install -r requirements.txt · hoặc --pack via", file=sys.stderr)
                if args.pack == "signs":
                    return 2
        images = iter_images(hf_dir)
        source = HF_SIGNS

    if (args.pack == "via" or (args.pack == "both" and len(images) < 10)) and (
        not images or args.pack == "via"
    ):
        via_dir = data / "via"
        if not args.skip_download:
            download_via(via_dir)
        images = iter_images(via_dir)
        source = "VIA-trafficsign-20210321"
        print("# VIA = lab pipeline only · 6 class đua ≠ TRAFFIC_SIGN VN", flush=True)

    if not images:
        print("! Không tìm thấy ảnh sau download", file=sys.stderr)
        return 3

    print(f"# found {len(images)} images from {source}", flush=True)
    p1 = export_p1_pack(images, out / "p1-test-pack", args.max_images, source)
    n_yolo = write_yolo_remap(images, out / "yolo-remap", args.max_yolo)
    print(f"# P1 pack → {p1} ({args.max_images} ảnh)", flush=True)
    print(f"# YOLO remap TRAFFIC_SIGN → {out / 'yolo-remap'} ({n_yolo} ảnh)", flush=True)
    print("# Next P1: upload out/p1-test-pack/images vào detect-assets / demo AI (HITL Confirm)", flush=True)
    print("# Cấm: Colab với ảnh QL.1 · pin modelVersion prod từ pack này", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
