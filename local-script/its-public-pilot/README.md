# ITS public-data pilot — P1 test pack

Tải **dataset mở** → thư mục ảnh + `manifest.json` để test P1 (upload frame / GPT detect / HITL Confirm).

**Cấm** ảnh tuyến Chi cục / cam IP lên Colab. SSOT: `docs/context/features/its-traffic-detect.md`.

## Nền tảng — cái nào free (pilot)

| Nền tảng | GPU | Free? | Dùng cho pack này |
|----------|-----|-------|-------------------|
| **Kaggle Notebook** | T4 / P100 · ~30h/tuần | **Có** — ổn nhất | Download + remap + (tuỳ) smoke train |
| **Google Colab Free** | T4 15GB · ngắt phiên | **Có** — đủ P1 | `--max-images 40` |
| Máy local CPU | — | Có | Chỉ download + export |
| **VNSO A100-40** PAYG | A100 | **Không** (~29–59kđ/h) | Fine-tune P2-A thật · tắt VM |
| Colab Pro A100 | A100 | Trả phí | Không mặc định |

**Chốt pilot P1:** chạy **Kaggle hoặc Colab Free** — không cần A100. A100 chỉ khi bạn fine-tune Wave A (HF 82 class → `TRAFFIC_SIGN`).

RDD2022 (~47k) **không** nằm trong script này (nặng). P1 mặt đường: tải tay [sekilab/RoadDamageDetector](https://github.com/sekilab/RoadDamageDetector) trên A100 sau.

## Chạy

```bash
cd local-script/its-public-pilot
chmod +x run_pilot.sh
./run_pilot.sh --pack signs --max-images 40
```

Colab / Kaggle (1 cell):

```python
# Upload folder its-public-pilot hoặc clone repo Data
%cd /content   # hoặc /kaggle/working
# !unzip its-public-pilot.zip
%pip install -q huggingface_hub PyYAML Pillow
!python run_pilot.py --pack signs --max-images 40
```

A100 (dataset **trên VM**, không upload 10 GB từ laptop):

```bash
./run_pilot.sh --pack signs --max-images 200 --max-yolo 8000
# rồi fine-tune P2-A YOLOX trên out/yolo-remap · tắt VM
```

| Cờ | Ý nghĩa |
|----|---------|
| `--pack signs` | HF 82 biển VN (mặc định) |
| `--pack via` | VIA đua số — chỉ test pipeline |
| `--pack both` | HF rồi fallback VIA |
| `--max-images N` | Số JPEG trong `out/p1-test-pack` |
| `--skip-download` | Dùng cache `data/` |

## Output (gitignore)

| Path | Dùng |
|------|------|
| `out/p1-test-pack/images/` | Kéo vào demo / presign → `POST …/detect-assets` |
| `out/p1-test-pack/manifest.json` | `expectedClass=TRAFFIC_SIGN` · HITL |
| `out/yolo-remap/` | `classes.yaml` 1 class — lab train sau |

## Nguồn

- https://huggingface.co/datasets/star092304/Traffic-sign-detection-VietNam  
- VIA (lab): https://github.com/makerhanoi/via-datasets/releases/tag/v1.0  

Không commit `data/` · `out/`. Không nhét token vào script.

OTA app xe (P2, không phải pack này): `docs/context/features/its-traffic-detect.md` §14 · `GET /api/v1/ml-models/current`.
