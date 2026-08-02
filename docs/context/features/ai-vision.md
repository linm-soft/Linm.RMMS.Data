# AI kiểm định mặt đường — Feature Context

> **Slug:** `ai-vision` · **Module:** `AiVision`  
> **Phase:** P1 = GPT-4o Vision online · **P2 = local ONNX detector + SAM (optional)**  
> **Status:** Demo  
> **sourceKind:** product AI (legacy packet · không GOVOne leaf)  
> **SSOT P2:** [`14-P2-AI-VISION-STANDARD.md`](../14-P2-AI-VISION-STANDARD.md)  
> **Sources:** `RMMS` §3 · `07` §3 · `08` · `09` · `10` · `13` · `14` · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Demo:** `Linm.RMMS.Demo/src/demo/ai-vision/ai-vision.html` · control-map `demo-maps/ai-vision-control-map.md`  
> **Gắn màn:** Mobile **Vấn đề** (chụp) · Web **Sự cố** · Giám sát bản đồ

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Thu thập camera AI / line scan / 360 / GPS / IMU → nhận diện ổ gà, nứt dọc/ngang/mai rùa, bong bật, lún vệt, chảy nhựa, vá, sụt lề, hư mép → PCI/IRI/SCI · mức ưu tiên |
| Persona | Tuần đường · BA · AI lead |
| App hiện có | — (mới; overlay lên Vấn đề/Incident — giữ UX ghi nhận) |
| DoD P1 | Adapter online Vision · lưu detection · cost trong alert ~$200/tháng |
| DoD P2 | Theo `14` §9 — model ONNX · worker GPU · GPT fallback |
| AI support | **P1** GPT-4o Vision · **P2** ONNX detector + SAM |

## 2. Design / UI

| Screen | Pattern | Zones | Gắn app |
|--------|---------|-------|---------|
| Upload / kết quả detect | Full feed | Ảnh · bbox · class · confidence · engine badge | Từ Vấn đề «Thêm» / Upload demo |
| List detections | Kind **B** CatalogList | Filter section/class/sev/date/engine · grid · row actions | Web Sự cố / AiVision |
| Detail detection | Kind **D** slideout | Fields + leave-confirm dirty · Confirm Vấn đề | Incident |
| Map pins | Kind **F** | Leaflet OSM/Esri · Draft / Critical / Incident pins | Giám sát bản đồ |
| PCI history | Modal | Chart/table theo sectionId | Báo cáo / Asset đoạn |
| Confirm → tạo Vấn đề | Modal | Preview Critical · mã VI-* | Incident |

**P1 UI:** badge `AI support` · `P1 online (GPT-4o Vision)` — không hiện train local · không hứa mAP.  
**P2 UI:** badge `P2 local` · `modelVersion` onnx · phân biệt online fallback.

**Kind ERP:** B + D + F · shell Linm modern (`/erp-form-context`) · skip GOVOne chrome.

### Control-map (demo)

| Zone | Controls |
|------|----------|
| Toolbar | Upload · batch · toggle P1/P2 · create · PCI · refresh · export · reset |
| Filter | q · section · class · severity · status · engine · from/to |
| List | DET id · class · score · sev · section · route · status · model · incident · actions |
| Map | pin + OSM/Esri/Fit |
| Form | class · conf · sev · lat/lng · section · route · PCI · bbox · note · incidentCode |
| Actions | View/Edit/Copy · Tạo Vấn đề · Dismiss · Lưu nháp · leave-confirm |

## 3. API (skeleton — Demo không implement BE)

| Method | Path | Mô tả |
|--------|------|-------|
| POST | `/api/v1/ai-vision/detect` | 1 ảnh |
| POST | `/api/v1/ai-vision/batch` | Batch |
| POST | `/api/v1/ai-vision/segment` | P2 SAM |
| POST | `/api/v1/ai-vision/calculate-pci` | PCI |
| GET | `/api/v1/ai-vision/defects?sectionId=&from=&to=` | List |
| GET | `/api/v1/ai-vision/pci-history/{sectionId}` | History |

Adapter: `IDefectDiagnoser` → P1 `Gpt4oVisionDiagnoser` · P2 `OnnxDetectorDiagnoser` (alias `YoloOnnxDiagnoser`).

**P2 stack suggest:** **P2-A** Apache (YOLOX/RTMDet/RT-DETR) **hoặc** **P2-B** Ultralytics Enterprise — xem `14` §2.

**BE align:** Chưa Signed → **DEFER** scaffold endpoint. Khi Signed → `/align-demo-mfe` + Step 4b.

## 4. Database

| Entity / table | Notes |
|----------------|-------|
| `ai_vision.detections` | class, score, bbox, imageUrl, sectionId, modelVersion, severity, status |
| `ai_vision.pci_history` | sectionId, pci, at |

Object storage: MinIO raw images.

## 5. Events

`defect.detected` → Incident (nếu critical / Confirm user) · Gis · Asset section PCI.

**Liên quan (không gộp slug):** phát hiện **TS/thiết bị mới** từ camera tuần đường → [`ai-asset-detect.md`](ai-asset-detect.md) (tạo Asset, không tạo Vấn đề).

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-F-AIV-01 Dataset ≥20k + train P2 | OUT P1 · sau gate (`14`) |
| GAP-F-AIV-02 Token budget | Alert $200/tháng (`08`) |
| GAP-F-AIV-03 License P2-A vs P2-B | Chốt HĐ trước train (`14` §7) |

## 7. Demo checklist

- [x] Flow ảnh → kết quả class rõ (demo interactive)
- [x] Badge P1 online vs P2 local (toggle + seed DET-904)
- [x] Link tạo Vấn đề từ detection critical
- [x] Không hứa mAP local trong P1
- [x] PCI history mock
- [x] Map live Leaflet pin
- [x] Phân biệt `ai-asset-detect`
- [x] Dev catalog `/demo/p/ai-vision` · domain `ai-vision`

**Sign-off UI:** localStorage `tn-demo:ai-vision:signed` trên demo page.
