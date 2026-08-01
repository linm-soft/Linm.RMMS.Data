# AI kiểm định mặt đường — Feature Context

> **Slug:** `ai-vision` · **Module:** `AiVision`  
> **Phase:** P1 = GPT-4o Vision online · **P2 = local ONNX detector + SAM (optional)**  
> **Status:** Demo  
> **SSOT P2:** [`14-P2-AI-VISION-STANDARD.md`](../14-P2-AI-VISION-STANDARD.md)  
> **Sources:** `RMMS` §3 · `07` §3 · `08` · `09` · `10` · `13` · `14` · [`15-SCREEN-AI-MAP.md`](../15-SCREEN-AI-MAP.md)  
> **Demo:** `Linm.RMMS.Demo/src/demo` (std) / docs features  
> **Gắn màn:** Mobile **Vấn đề** (chụp) · Web **Sự cố** · Giám sát bản đồ

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Thu thập camera AI / line scan / 360 / GPS / IMU → nhận diện ổ gà, nứt dọc/ngang/mai rùa, bong bật, lún vệt, chảy nhựa, vá, sụt lề, hư mép → PCI/IRI/SCI · mức ưu tiên |
| Persona | Tuần đường · BA · AI lead |
| App hiện có | — (mới; overlay lên Vấn đề/Incident — giữ UX ghi nhận) |
| DoD P1 | Adapter online Vision · lưu detection · cost trong alert ~$200/tháng |
| DoD P2 | Theo `14` §9 — model ONNX · worker GPU · GPT fallback |

## 2. Design / UI

| Screen | Pattern | Zones | Gắn app |
|--------|---------|-------|---------|
| Upload / kết quả detect | Full / Slideout | Ảnh · bbox · class · confidence | Từ Vấn đề «Thêm» |
| List detections | Full | Filter section/date · grid · map pin | Web Sự cố / Dashboard |
| PCI history | Full | Chart + table | Báo cáo / Asset đoạn |
| Confirm → tạo Vấn đề | Modal | Preview critical | Incident |

**P1 UI:** «AI online (GPT-4o Vision)» — không hiện train local.  
**P2 UI:** badge `modelVersion` · phân biệt online fallback.

## 3. API

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

## 4. Database

| Entity / table | Notes |
|----------------|-------|
| `ai_vision.detections` | class, score, bbox, imageUrl, sectionId, modelVersion |
| `ai_vision.pci_history` | sectionId, pci, at |

Object storage: MinIO raw images.

## 5. Events

`defect.detected` → Incident (nếu critical) · Gis · Asset.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-F-AIV-01 Dataset ≥20k + train P2 | OUT P1 · sau gate (`14`) |
| GAP-F-AIV-02 Token budget | Alert $200/tháng (`08`) |
| GAP-F-AIV-03 License P2-A vs P2-B | Chốt HĐ trước train (`14` §7) |

## 7. Demo checklist

- [ ] Flow ảnh → kết quả class rõ
- [ ] Badge P1 online vs P2 local
- [ ] Link tạo Vấn đề từ detection critical
- [ ] Không hứa mAP local trong P1
