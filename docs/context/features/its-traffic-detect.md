# ITS phát hiện biển báo / cọc tiêu — Feature Context

> **Slug:** `its-traffic-detect` · **Module:** AiVision × Iot × Asset × Gis  
> **Phase:** P1 **Demo UI confirm** · P2 edge+PostGIS+SignalR · P2.1 CCTV GPU  
> **Status:** Demo (confirm page #1)  
> **Kind:** **B** list + **D** slideout + **F** map — Confirmed shell: `/erp-form-context` + `/ai-form-context`  
> **SSOT kiến trúc:** [`../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`](../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md)  
> **GPU / chi phí:** [`../17-GPU-VNSO-COST-STANDARD.md`](../17-GPU-VNSO-COST-STANDARD.md) · [`../10-YOLO-SERVER-REQUIREMENTS.md`](../10-YOLO-SERVER-REQUIREMENTS.md)  

> **Control-map:** [`../_raw/legacy-govone/demo-maps/its-traffic-detect-control-map.md`](../_raw/legacy-govone/demo-maps/its-traffic-detect-control-map.md)  
> **Demo:** `Linm.RMMS.Demo/public/demo/ai-vision/its-traffic-detect.html`  
> **Skill:** `/ai-form-context` · design wire + pilot sample  
> **≠** `ai-vision` (mặt đường) · `ai-asset-detect` (dedupe demo 25 m · taxonomy rộng) · `toc` (ùn tắc P3)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Detect **biển báo** · **cọc tiêu** · chuẩn hóa tọa độ · **dedupe 10 m** · map realtime · Confirm → Asset |
| Persona | Tuần đường · GIS · ITS ops |
| Outcome | `traffic_object` candidate → optional Asset |
| Engine P1 | Edge/mock + HITL Confirm |
| Engine P2 | YOLOv8-nano ONNX/TFLite/CoreML + PostGIS |
| IdCode | `ITS-YYYYMMDD-NNNN` |

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
| GET | `/api/v1/ml-models/current` |

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

**Open:** `yarn start:static` → http://localhost:5180/ai-vision/its-traffic-detect.html  
hoặc path đầy đủ `/demo/ai-vision/its-traffic-detect.html` khi webpack.
