# ITS phát hiện biển báo / cọc tiêu — Feature Context

> **Slug:** `its-traffic-detect` · **Module:** AiVision × Iot × Asset × Gis × Camera × Incident  
> **Phase:** P1 **Demo UI confirm** · P2 train **P2-A** + GPU infer · P2.1 CCTV IP 1 FPS  
> **Status:** Demo (confirm page #1) · **train/gim/mất + mobile OTA** locked 2026-08-19 (`/hey-linm`)  
> **Kind:** **B** list + **D** slideout + **F** map — Confirmed shell: `/erp-form-context` + `/ai-form-context`  
> **SSOT kiến trúc:** [`../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`](../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) · P2 license [`../14-P2-AI-VISION-STANDARD.md`](../14-P2-AI-VISION-STANDARD.md)  
> **GPU / chi phí:** [`../17-GPU-VNSO-COST-STANDARD.md`](../17-GPU-VNSO-COST-STANDARD.md) · [`../10-YOLO-SERVER-REQUIREMENTS.md`](../10-YOLO-SERVER-REQUIREMENTS.md) · [`../../gpu-model/gpu.md`](../../gpu-model/gpu.md)  
> **Train + export (arch):** [`../../tinh-nang/Tai_lieu_Nhan_dien_Bien_bao_Giao_thong.md`](../../tinh-nang/Tai_lieu_Nhan_dien_Bien_bao_Giao_thong.md)  
> **Peer:** [`ai-asset-detect.md`](ai-asset-detect.md) (candidate rộng) · [`camera-connect.md`](camera-connect.md) (IP · JPEG) · [`incident.md`](incident.md) (sự cố mất) · [`ai-vision.md`](ai-vision.md) (10 class mặt đường — **cấm trộn**)  

> **Control-map:** [`../_raw/legacy-govone/demo-maps/ai-its/bb-ct-control-map.md`](../_raw/legacy-govone/demo-maps/ai-its/bb-ct-control-map.md)  
> **Demo:** `Linm.RMMS.Demo/public/demo/ai-its/bb-ct.html`  
> **Skill:** `/ai-form-context` · design wire + pilot sample  
> **≠** `ai-vision` (mặt đường) · `ai-asset-detect` (dedupe demo 25 m · taxonomy rộng) · `toc` (ùn tắc P3)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Detect **biển báo** · **cọc tiêu** (+ taxonomy mở rộng) · chuẩn hóa tọa độ · **dedupe 10 m** · map realtime · **user gim hoặc auto gim** → Asset · **sự cố mất** = đối soát Asset kỳ vọng (không train class «mất») |
| Persona | Tuần đường · GIS · ITS ops · AI/ML (train online) |
| Outcome | `traffic_object` candidate → Confirm / auto → Asset · thiếu detect tại điểm kỳ vọng → Draft Incident |
| Engine P1 | Edge/mock + HITL Confirm (**cấm** auto-create Asset) |
| Engine P2 | **P2-A mặc định** YOLOX / RTMDet / RT-DETR → ONNX (+ TFLite/CoreML on-device) · PostGIS · GPU worker tách API |
| Engine P2-B | Ultralytics **Enterprise** only — **cấm** YOLOv5/v8 AGPL prod (MakerViet VIA = **lab bootstrap**) |
| IdCode | `ITS-YYYYMMDD-NNNN` · Incident `VD-yyyyMMdd-nnnn` khi mất |

## 2. Design / UI (erp + AI)

| Screen | Kind | Zones |
|--------|------|-------|
| List candidates | **B** | KPI · toolbar · FilterBar (Tìm/Xóa lọc) · grid STT + row menu |
| Form observation | **D** | Z1 toolbar · Z2a nearby/score banner · Z2b frame AI · Z2c fields · Z3 Lưu · leave-confirm |
| Map pins | **F** | Leaflet · legend old/AI/near/confirmed · OSM/Esri/Fit |

**AI layer (bắt buộc):** badge AI · engine P1/P2 · score% · modelVersion · nearby &lt;10 m · Confirm modal HITL · **không** hứa mAP P1.

## 3. API (skeleton — demo không gọi)

| Method | Path |
|--------|------|
| POST | `/api/v1/its/observations` · `/bulk` |
| GET | `/api/v1/its/objects` |
| POST | `/api/v1/its/objects/{id}/confirm-asset` · `/dismiss` |
| GET | `/api/v1/ml-models/current?platform=android_tflite\|ios_mlmodel&family=its_traffic_v1` | Version + sha256 + URL (`16` §6.3) |
| GET | `/api/v1/ml-models/{version}/artifact` | Presign / redirect file |
| POST | `/api/v1/ml-models` | Admin publish · `its.ml_models.admin` |

## 4. Database (design)

`its.traffic_objects` · `its.observation_rays` · GIST · `ST_DWithin` 10 m — chi tiết doc `16`.

## 5. Events

`its.object.upserted` · `its.object.confirmed_asset` · offline bulk.

## 6. Gaps

| ID | Notes |
|----|-------|
| GAP-ITS-01 | Closed on **this demo** (10 m); legacy `ai-asset-detect` still 25 m |
| GAP-ITS-02 | Closed seed: `coc_tieu` present |
| GAP-ITS-03 | BE MISSING |
| GAP-AI-HITL-01 | Confirm modal OK on demo |
| GAP-ITS-LIC-01 | MakerViet / VIA YOLOv5s + Ultralytics AGPL = **lab only** · prod = P2-A Apache hoặc P2-B Enterprise |
| GAP-ITS-DATA-01 | VIA ~11k ảnh · 6 class đua số (`stop`/`left`/…) **≠** taxonomy RMMS `bien_bao`/`coc_tieu` — không deploy weights VIA |
| GAP-ITS-SEC-01 | Ảnh tuyến / cam Chi cục **cấm** Colab · Roboflow public · Drive ngoài — NAS/MinIO + CVAT VPC |
| GAP-ITS-GIM-01 | P1 Confirm bắt buộc · P2 auto chỉ khi score ≥ ngưỡng **và** không nearby 10 m |
| GAP-ITS-MISS-01 | «Mất tài sản» = reconcile Asset kỳ vọng vs 0 detect / N phút — **không** thêm class YOLO |
| GAP-ITS-OTA-01 | Mobile xe **P1** = online HITL · OTA TFLite/CoreML = **P2** (§14) — chưa code native |
| GAP-P2-* | Align MFE after Signed |

## 7. Demo checklist (page #1)

- [x] Kind B+D+F shell modern Linm
- [x] Taxonomy bien_bao / coc_tieu
- [x] Dedupe **10 m** + nearby banner
- [x] IdCode ITS-*
- [x] Search filter work · refresh toolbar only
- [x] View/Edit/Copy/Confirm/Dismiss · leave dirty
- [x] Map Leaflet live
- [x] Sign-off checklist localStorage
- [x] Catalog hub + `demoCatalog.ts`
- [ ] Khách ký Signed → `/qlbd-align-mfe`

**Open:** `yarn start:static` → http://localhost:5180/ai-its/bb-ct.html  
hoặc path đầy đủ `/demo/ai-its/bb-ct.html` khi webpack.

## 8. Hai đầu ra (cấm gộp 1 model)

| Đầu | Nhận diện | Kết quả map | Policy gim |
|-----|-----------|-------------|------------|
| **A — Tài sản** | Class ITS `bien_bao` · `coc_tieu` (+ hộ lan / cột Km khi gán nhãn) | Pin Asset mới hoặc `lastSeen` | P1 user Confirm · P2 auto nếu score ≥ ngưỡng **và** không trùng **10 m** (`ST_DWithin` geography) |
| **B — Sự cố mất** | **Không** train class «mất» | Asset kỳ vọng tại cam/Km **không** thấy trong cửa sổ thời gian | User gim đúng điểm **hoặc** cam IP cố định → Draft Incident (`POST /api/v1/incident/incidents`) · HITL Confirm |

**Cấm:** trộn 10 class mặt đường (`pothole`…) vào taxonomy ITS (`14` §3 · `ai-vision`).  
**Cấm:** invent endpoint «missing-detect» — dùng observation hiện có + Asset nearby + Incident create.

## 9. Train online (GPU đã confirm) + bảo mật data

**Chốt:** Train **cloud/VPC / PAYG** → export ONNX → pin worker infer. Máy infer 24/7 (M1) **không** train (`gpu-model/gpu.md`).

| Bước | Việc | Pass |
|------|------|------|
| 0 | License **P2-A** (YOLOX/RTMDet) · VIA YOLOv5 **lab** | `manifest.json` `option=P2-A` |
| 1 | `classes.yaml` khớp gán nhãn — 1 class / bbox | Không dùng 6 class VIA trên prod |
| 2 | Ảnh + nhãn trên MinIO/NAS private · CVAT VPC | **Cấm** ảnh đơn vị lên Colab/Roboflow public |
| 3 | (Tuỳ) VIA zip public — chỉ test CUDA/pipeline | Không pin `modelVersion` prod |
| 4 | Fine-tune P2-A · `imgsz` 640 · **tắt VM** sau export | `model.onnx` + `classes.yaml` + `manifest.json` + mAP |
| 5 | Pin worker + `sha256` · queue Redis | API **không** block GPU (`10` R6) |

Artifact bàn giao Dev (`14` §5) — **không** copy dataset thô vào DMS / git:

```json
{
  "modelVersion": "rmms-its-v1-2026.08",
  "option": "P2-A",
  "framework": "yolox",
  "imgsz": 640,
  "runtime": "onnxruntime-gpu",
  "licenseNote": "Apache-2.0 — không dùng Ultralytics AGPL"
}
```

| Rule bảo mật | Làm |
|--------------|-----|
| Ảnh gốc | Object storage tenant · meta `sectionId` · GPS · `cameraId` |
| Credential cam (IP/user/pass) | `{RulesRoot}/.env` / secret — **cấm** chat / commit |
| Frame prod | Presign `init → PUT → complete` — cấm base64 lớn qua BFF |
| Weights | Artifact private = IP đơn vị |
| Quyền ảnh | Bên A / Chi cục (`14` §7) — VIA MIT chỉ bộ đua số |

VIA lab: [traffic-sign-detection-yolov5](https://via.makerviet.org/vi/models/traffic-sign-detection-yolov5/) · dataset [v1.0](https://github.com/makerhanoi/via-datasets/releases/tag/v1.0).  
Export nền tảng (ONNX / CoreML / TFLite): tài liệu `Tai_lieu_Nhan_dien_Bien_bao_Giao_thong.md` §5 — **sau** train P2-A, không dùng weights MakerViet.

## 10. Camera IP → detect → gim

Nguồn frame = `camera-connect` (IP đã Test). Model **không** «biết IP».

```
Cam IP (Test + JPEG P1.5 · RTSP 1 FPS P2)
  → POST /api/v1/cameras/connect/snapshot
  → MinIO imageUrl (presign)
  → Redis → Its.GpuWorker (ONNX)
  → POST /api/v1/its/observations
       ├─ nearby cùng class < 10 m → UPDATE lastSeen (không tạo trùng)
       ├─ không nearby + P1 → Draft · user Confirm (`/confirm-asset`)
       ├─ không nearby + P2 score OK → auto pin Asset
       └─ Asset kỳ vọng tại điểm cam/Km · 0 detect / N phút → Draft Incident
```

| Nguồn | API đã có (cấm invent) |
|-------|------------------------|
| Snapshot cam | `POST /api/v1/cameras/connect/test` · `/connect/snapshot` |
| Observation | `POST /api/v1/its/observations` · `/bulk` |
| Object / gim | `GET /api/v1/its/objects` · `POST …/confirm-asset` · `/dismiss` |
| Model pin | `GET /api/v1/ml-models/current` |
| Peer candidate rộng | `POST /api/v1/ai-vision/detect-assets` · `GET …/nearby` · `POST …/{id}/confirm` |
| Sự cố | `POST /api/v1/incident/incidents` |

**User gim đúng điểm:** tuần đường / GIS thả pin → cùng observation (`lat`/`lng` + `routeId`) → Confirm. **Cấm** tọa độ cứng.  
**Cấm:** SDK Hikvision trong MFE AI · seed/fake hit khi cam down.

Implement infer: `/implement-ai-detect-run` (backend first) · camera `/agent-dev-camera-connect` · UI `/agent-dev-ai-detect` (cấm chrome P1/P2/score / `alert`).

## 11. Taxonomy class ITS (train)

| id | `class` | Ghi chú |
|----|---------|---------|
| 0 | `bien_bao` | Core P2 |
| 1 | `coc_tieu` | Core P2 |
| 2+ | `ho_lan` · `cot_km` | Mở rộng khi có nhãn QA — cùng file `classes.yaml` |

VIA (`stop`/`left`/…) **không** map 1:1 vào bảng này.

## 12. DoD pack train + gim (user tự train)

- [ ] P2-A (hoặc P2-B Enterprise) ghi trong `manifest`
- [ ] Dataset đơn vị trên storage private — không Colab public
- [ ] ONNX + `classes.yaml` + `manifest` + mAP bàn giao
- [ ] 1 cam IP thật → ≥1 Draft · `imageUrl` ≠ `mock://`
- [ ] Dedupe 10 m · P1 không auto-create Asset
- [ ] P2 auto gim chỉ khi score + không nearby
- [ ] 0 detect tại Asset kỳ vọng → Draft Incident (HITL) — không class YOLO «mất»
- [ ] OTA: 3 artifact + sha256 · mobile check-version · rollback `is_active` (`16` §16)

## 13. Pilot P1 — data public (script)

`local-script/its-public-pilot/` — tải HF biển VN → `out/p1-test-pack` (HITL).  
Free: **Kaggle / Colab T4**. A100 chỉ fine-tune. **Cấm** ảnh Chi cục trên notebook.

## 14. Mobile xe — upgrade `modelVersion` (OTA)

**P1 (`mobile-p1`):** AI **online** + HITL (`POST …/detect-assets` · Confirm). **Cấm** YOLO/TFLite/CoreML trên máy · **cấm** train offline.  
**P2:** on-device infer + OTA. API = `16` §6.3 — **cấm** invent path / nhét model vào kit UI.

```
Train P2-A → export .onnx + .tflite + .mlmodel + sha256
  → POST /api/v1/ml-models   (its.ml_models.admin)
  → App xe (Wi-Fi, không 4G bắt buộc):
       GET /api/v1/ml-models/current?platform=ios_mlmodel|android_tflite&family=its_traffic_v1
       nếu modelVersion ≠ local → GET …/{version}/artifact (presign)
       kiểm sha256 → iOS MLModel.compileModel → .mlmodelc (Application Support)
                    → Android swap file TFLite (app files)
       ghi local modelVersion · infer CameraX / Vision
  → fail sha256 / compile → giữ bản cũ · registry is_active flip = rollback
```

| Platform | File | Runtime | Lưu |
|----------|------|---------|-----|
| iOS | `.mlmodel` → `.mlmodelc` | Vision + CoreML | Application Support — **không** bundle-only (cấm chỉ nhét Xcode như tài liệu lab) |
| Android | `.tflite` | TFLite Task Vision | `files/` — **không** chỉ `assets/` immut |
| Server worker | `.onnx` | ONNX-GPU | Pin M1 — **không** OTA lên điện thoại |

`family`: `its_traffic_v1` (biển/cọc) **tách** `rmms-det-v1` (10 class mặt đường). App xe chỉ kéo family ITS.  
Payload observation P2 **phải** gửi `modelVersion` đang chạy trên máy (`16` §6.2).

| Cấm | Lý do |
|-----|--------|
| OTA trên P1 / store listing Gói 1 | `mobile-p1` OUT · YOLO local DEFER |
| Tải model lúc đang tuần 4G yếu | Chỉ Wi-Fi / dock hạt · queue khi offline |
| Kit `Linm*` chứa weights | Kit = UI · VM/API/model ở app |
| Pin `modelVersion` prod từ pack Colab/VIA | Lab ≠ registry `is_active` |

Mobile BFF: cùng prefix Web `api/v1/ml-models` khi Signed — **cấm** `web-bff/…/ml-models` mới nếu DOMAIN-MAP chưa có.
