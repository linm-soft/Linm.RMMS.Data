# Demo control-map (modern MFE) — `ai-vision`

> **Rule:** UI theo **`/erp-form-context`** (Linm shell).  
> Demo HTML mock · **cấm** copy skin GOVOne · **cấm** BE.  
> Nguồn: **product AI / synthetic docs** (`features/ai-vision.md` · `15-SCREEN-AI-MAP.md` · `14-P2` · `07`) — không có màn GOVOne riêng (`RECAPTURE-GAPS` wontfix).  
> **sourceKind:** synthetic · raw feature **product AI** (enrich từ docs · không GOVOne form).

## Kind hint

- **B** CatalogListShell (list detections) + **D** slideout detail/Confirm + **F** map pin defect
- Step 2a-K · 2g control-map · 2t catalog toolbar · leave-confirm dirty
- Host: Mobile **Vấn đề** (upload) · Web **Sự cố** · Dashboard PCI · route MFE `/ai-vision`

## Fields

| Field | type | zone | Control | Notes |
|--------|------|------|---------|-------|
| Tìm kiếm q | text | filter | Search | ID · class · section · incident |
| Đoạn / sectionId | select | filter | Select | SEC-* |
| Class hư hỏng | select | filter | Select | Ổ gà · nứt · bong bật · … (**taxonomy mặt đường** — ≠ TS/AI asset) |
| Severity | select | filter | Select | Critical / High / Medium / Low |
| Trạng thái | select | filter | Select | Draft / IncidentCreated / Dismissed |
| Engine | select | filter | Select | P1 online / P2 local |
| Từ ngày / Đến ngày | date | filter | Date | detectedAt |
| Mã detection | text | list/form | Code | DET-* |
| Class | select | list/form | Select | defectClass |
| Confidence | number | list/form | Qty | 0–1 · % |
| Severity | select | list/form | status | mức ưu tiên |
| lat / lng | number | list/form | Geo | pin map |
| sectionId · routeLabel | text | list/form | Text | đoạn / lý trình |
| bbox | text | form | Text | [x1,y1,x2,y2] overlay |
| modelVersion | text | list/form | readonly | gpt-4o-vision / onnx-rmms-v1 |
| engine | text | list/form | badge | P1 / P2 |
| status | badge | list/form | status | Draft → IncidentCreated / Dismissed |
| incidentCode | text | list/form | readonly | sau Confirm → Vấn đề |
| pciSnapshot | number | form | Qty | optional PCI estimate |
| note | textarea | form | Text | dirty leave-confirm |
| imageUrl | text | form | readonly | mock frame |
| detectedAt / updatedAt | datetime | form | DateTime | local |

## Actions / buttons

| Label | kind | zone | Demo | SSOT |
|-------|------|------|------|------|
| Tìm kiếm | action | filter | Apply filter | FilterBar Search |
| Xóa lọc | action | filter | Clear | FilterBar Clear |
| Upload ảnh tuần tra | action | toolbar/feed | file + mock detect | POST detect |
| Giả lập batch detect | action | toolbar | +N rows P1 | POST batch |
| Toggle engine P1/P2 | action | toolbar | badge modelVersion | Diagnoser switch |
| + Detection manual | create | toolbar | open form create | Catalog Create |
| Làm mới | action | toolbar | reload LS | Refresh |
| Xuất Excel | export | toolbar | toast | export |
| PCI history | action | toolbar | modal PCI table | GET pci-history |
| Reset seed | action | toolbar | reseed | dev |
| Xem / Sửa / Copy | nav | row | slideout | View/Edit/Copy |
| Tạo Vấn đề | action | row/header | modal critical→Incident | defect.detected |
| Dismiss | action | row/header | FP dismiss | discard |
| Lưu nháp | action | footer | localStorage | Save |
| Hủy / Đóng / Quay lại | close | header/footer | leave-confirm | close |
| OSM / Esri / Fit | action | map | basemap + fit | Kind F |

## Demo page rules

1. Layout: upload/preview bbox · filter · list · Leaflet map · Kind D slideout · Confirm modal
2. Seed: ≥3 detections (Critical ổ gà · nứt mai rùa · vá) + 1 P2 local
3. Confirm Critical → `incidentCode` VI-* · pin đỏ Incident
4. Badge **AI support** · **P1 GPT-4o Vision** · P2 ONNX+SAM — **không** hứa mAP P1
5. Phân biệt `ai-asset-detect` (TS mới → Asset)
6. Mọi action click được (toast/modal/form)
7. **Cấm** BE · **cấm** sửa MFE production

## Refs

- `features/ai-vision.md`
- `15-SCREEN-AI-MAP.md` · #3
- `14-P2-AI-VISION-STANDARD.md`
- `ai-vision-actions.md`
