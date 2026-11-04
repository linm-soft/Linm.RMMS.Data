"""Gom bộ biển Việt Nam đã gán nhãn vào data/tai-san/{loai}.

Nguồn: huggingface.co/datasets/star092304/Traffic-sign-detection-VietNam
82 mã gộp 4 họ QCVN (cấm, nguy hiểm, hiệu lệnh, chỉ dẫn).
Bỏ đèn tín hiệu và hộp quá nhỏ (cạnh ngắn < 4% ảnh hoặc diện tích < 0.2%).
"""

from __future__ import annotations

import shutil
from collections import Counter
from pathlib import Path

from huggingface_hub import snapshot_download

ROOT = Path(__file__).resolve().parent
CACHE = ROOT / "_cache" / "hf-vn-sign"
REPO = "star092304/Traffic-sign-detection-VietNam"
MIN_SIDE = 0.04
MIN_AREA = 0.002

# Id khớp signClassNames.ts / data.yaml của model YOLO11s Việt Nam.
NAMES = [
    "Cấm vào", "Chỉ được rẽ phải", "Tốc độ tối đa 40 km/h", "Cấm xe tải và xe buýt",
    "Cấm xe tải", "Hạn chế tĩnh không", "Cấm xe ô tô", "Nguy hiểm", "Đi chậm",
    "Nhiều chỗ ngoặt bên phải trước", "Chướng ngại vật trên đường", "Đường có camera giám sát",
    "Tốc độ tối đa 60 km/h", "Cấm xe máy", "Phân làn", "Hạn chế chiều cao", "Cấm bóp còi",
    "Cấm rẽ trái", "Cấm rẽ phải", "Cấm quay đầu", "Cấm quay đầu và rẽ trái",
    "Cấm quay đầu và rẽ phải", "Có đèn tín hiệu phía trước", "Cấm dừng và đỗ xe", "Cấm đỗ xe",
    "Cấm đi thẳng và rẽ phải", "Cấm rẽ trái hoặc rẽ phải", "Chỗ ngoặt nguy hiểm bên trái",
    "Chỗ ngoặt nguy hiểm bên phải", "Giao với đường không ưu tiên", "Giao nhau cùng cấp",
    "Cấm xe máy rẽ trái", "Giao với đường ưu tiên", "Đường người đi bộ", "Đường hẹp bên trái",
    "Đường hẹp bên phải", "Đường hẹp hai bên", "Cấm xe hai bánh và ba bánh", "Gờ giảm tốc",
    "Tốc độ tối đa 50 km/h", "Tốc độ tối đa 70 km/h", "Tốc độ tối đa 80 km/h",
    "Giao đường sắt có rào chắn", "Cấm ô tô quay đầu", "Cấm xe buýt", "Cấm vượt", "Trẻ em",
    "Người đi bộ cắt ngang", "Hết mọi lệnh cấm", "Đi vòng sang trái", "Công trường",
    "Đường một chiều", "Rẽ trái", "Rẽ phải", "Đèn xanh", "Đèn đỏ", "Vòng xuyến",
    "Tốc độ tối đa 10 km/h", "Tốc độ tối đa 100 km/h", "Tốc độ tối đa 110 km/h",
    "Tốc độ tối đa 120 km/h", "Tốc độ tối đa 20 km/h", "Tốc độ tối đa 30 km/h",
    "Tốc độ tối đa 90 km/h", "Dừng lại", "Chỗ quay xe", "Cấm đỗ ngày lẻ", "Cấm đỗ ngày chẵn",
    "Nơi đỗ xe", "Trạm xe buýt", "Bệnh viện", "Cấm ô tô quay đầu và rẽ trái", "Khu vực tai nạn",
    "Đường đôi", "Cấm ô tô rẽ trái", "Dốc lên", "Cầu hẹp", "Đường không bằng phẳng",
    "Hết hạn chế tốc độ 50 km/h", "Khu đông dân cư", "Khu dân cư thưa", "Đường trơn",
]

FAMILY = {}
for i in (
    0, 2, 3, 4, 6, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 31, 37,
    39, 40, 41, 43, 44, 45, 48, 57, 58, 59, 60, 61, 62, 63, 66, 67, 71, 74, 78,
):
    FAMILY[i] = "bien-cam"
for i in (
    5, 7, 8, 9, 10, 22, 27, 28, 29, 30, 32, 34, 35, 36, 38, 42, 46, 47, 50, 72, 73, 75, 76, 77, 81,
):
    FAMILY[i] = "bien-nguy-hiem"
for i in (1, 14, 33, 49, 52, 53, 56, 64):
    FAMILY[i] = "bien-hieu-lenh"
for i in (11, 51, 65, 68, 69, 70, 79, 80):
    FAMILY[i] = "bien-chi-dan"
SKIP = {54, 55}  # đèn xanh / đèn đỏ — không phải tấm biển

SU_CO = [
    "o-ga", "nut-doc", "nut-ngang", "nut-mai-rua", "chay-nhua", "bong-bat",
    "lun-vet-banh", "va-duong", "hu-mep", "sat-lo",
    "bien-do", "bien-mat", "bien-che", "bien-mo", "cot-bien-hong",
]
TAI_SAN_EMPTY = ["bien-phu", "gia-long-mon", "ho-lan", "cot-km", "coc-tieu"]


def keep_box(w: float, h: float) -> bool:
    return min(w, h) >= MIN_SIDE and (w * h) >= MIN_AREA


def link_or_copy(src: Path, dst: Path) -> None:
    if dst.exists():
        return
    try:
        os_link(src, dst)
    except OSError:
        shutil.copy2(src, dst)


def os_link(src: Path, dst: Path) -> None:
    import os
    os.link(src, dst)


def main() -> None:
    print("download", REPO)
    snapshot_download(repo_id=REPO, repo_type="dataset", local_dir=CACHE)
    zip_path = CACHE / "traffic-sign-detection-vietnam.zip"
    unzipped = CACHE / "unzipped"
    already = unzipped.exists() and any(unzipped.rglob("*.txt"))
    if zip_path.exists() and not already:
        print("unzip", zip_path.stat().st_size)
        shutil.unpack_archive(zip_path, unzipped)
    labels = [p for p in unzipped.rglob("*.txt") if p.parent.name == "labels"]
    print("label files", len(labels))

    counts: Counter[str] = Counter()
    dropped_small = 0
    dropped_light = 0
    images_used: Counter[str] = Counter()

    for folder in list(FAMILY.values()):
        out = ROOT / "tai-san" / folder
        (out / "images").mkdir(parents=True, exist_ok=True)
        (out / "labels").mkdir(parents=True, exist_ok=True)
        (out / "classes.txt").write_text(folder + "\n", encoding="utf-8")

    for label in labels:
        if label.name in {"classes.txt", "README.md"}:
            continue
        rows = []
        for line in label.read_text(encoding="utf-8", errors="ignore").splitlines():
            parts = line.split()
            if len(parts) < 5:
                continue
            try:
                cid = int(float(parts[0]))
                x, y, w, h = map(float, parts[1:5])
            except ValueError:
                continue
            if cid in SKIP:
                dropped_light += 1
                continue
            family = FAMILY.get(cid)
            if family is None:
                continue
            if not keep_box(w, h):
                dropped_small += 1
                continue
            rows.append((family, f"0 {x:.6f} {y:.6f} {w:.6f} {h:.6f}", cid))
        if not rows:
            continue
        image = None
        for ext in (".jpg", ".jpeg", ".png", ".webp", ".JPG"):
            cand = label.with_suffix(ext)
            if cand.exists():
                image = cand
                break
            alt = label.parent.parent / "images" / (label.stem + ext)
            if alt.exists():
                image = alt
                break
        if image is None:
            continue
        by_family: dict[str, list[str]] = {}
        for family, row, cid in rows:
            by_family.setdefault(family, []).append(row)
            counts[family] += 1
            counts[f"id:{cid}"] += 1
        for family, lines in by_family.items():
            dest_img = ROOT / "tai-san" / family / "images" / image.name
            dest_lbl = ROOT / "tai-san" / family / "labels" / f"{image.stem}.txt"
            # Ảnh trùng tên giữa train/val/test: gắn thêm hash thư mục cha.
            if dest_img.exists() and dest_img.stat().st_size != image.stat().st_size:
                stem = f"{image.parent.parent.name}-{image.stem}"
                dest_img = dest_img.with_name(stem + dest_img.suffix)
                dest_lbl = dest_lbl.with_name(stem + ".txt")
            link_or_copy(image, dest_img)
            dest_lbl.write_text("\n".join(lines) + "\n", encoding="utf-8")
            images_used[family] += 1

    for folder in TAI_SAN_EMPTY:
        out = ROOT / "tai-san" / folder
        out.mkdir(parents=True, exist_ok=True)
        (out / "classes.txt").write_text(folder + "\n", encoding="utf-8")
        note = out / "CHUA-CO-ANH.md"
        if not note.exists():
            note.write_text(
                "Chưa có bộ ảnh Việt Nam đã gán nhãn cho loại này.\n"
                "Không đổ ảnh nước ngoài vào đây.\n",
                encoding="utf-8",
            )
    for folder in SU_CO:
        out = ROOT / "su-co" / folder
        out.mkdir(parents=True, exist_ok=True)
        (out / "classes.txt").write_text(folder + "\n", encoding="utf-8")
        note = out / "CHUA-CO-ANH.md"
        if not note.exists():
            note.write_text(
                "Chưa có bộ ảnh hiện trường Việt Nam đã gán nhãn cho sự cố này.\n"
                "Ảnh biển trong data/tai-san là biển còn đọc được, không phải sự cố.\n"
                "Không dùng RDD hay ảnh nước ngoài.\n",
                encoding="utf-8",
            )

    lines = [
        "# Bộ data biển báo Việt Nam — đã gán nhãn",
        "",
        f"Nguồn: https://huggingface.co/datasets/{REPO}",
        "Ảnh: đường phố Việt Nam, nhãn YOLO có sẵn (82 mã).",
        "License bộ ảnh: trang Hugging Face không ghi. Model YOLO11s đi kèm ghi Apache-2.0. Dùng nội bộ để train, chưa phát hành lại.",
        "",
        "Gộp 82 mã về 4 họ để khỏi học từng mã hiếm (nhiều mã dưới 100 hộp).",
        f"Bỏ hộp quá nhỏ: cạnh ngắn < {MIN_SIDE:.0%} ảnh hoặc diện tích < {MIN_AREA:.1%}.",
        "Bỏ lớp Đèn xanh và Đèn đỏ (không phải tấm biển).",
        "Mỗi thư mục là một lớp. File nhãn dùng class id 0.",
        "",
        "| Thư mục | Ảnh | Hộp giữ lại |",
        "|---|---:|---:|",
    ]
    for folder in ("bien-cam", "bien-nguy-hiem", "bien-hieu-lenh", "bien-chi-dan"):
        lines.append(f"| `tai-san/{folder}` | {images_used[folder]} | {counts[folder]} |")
    lines += [
        "",
        f"Hộp bỏ vì quá nhỏ: {dropped_small}. Hộp đèn tín hiệu bỏ: {dropped_light}.",
        "",
        "## Họ ← mã gốc",
        "",
    ]
    by = {}
    for cid, family in sorted(FAMILY.items()):
        by.setdefault(family, []).append(f"{cid} {NAMES[cid]}")
    for family, items in by.items():
        lines.append(f"### {family}")
        lines.append("")
        for item in items:
            lines.append(f"- {item} ({counts[f'id:{item.split()[0]}']} hộp)")
        lines.append("")
    lines += [
        "## Chưa có ảnh",
        "",
        "`tai-san/bien-phu`, `gia-long-mon`, `ho-lan`, `cot-km`, `coc-tieu`: bộ công khai không gán các loại này.",
        "`su-co/*`: không có bộ sự cố mặt đường hoặc biển hỏng đã gán nhãn, chỉ ảnh Việt Nam.",
        "",
    ]
    (ROOT / "NGUON.md").write_text("\n".join(lines), encoding="utf-8")
    print("done", dict(images_used), "small", dropped_small, "light", dropped_light)


if __name__ == "__main__":
    main()
