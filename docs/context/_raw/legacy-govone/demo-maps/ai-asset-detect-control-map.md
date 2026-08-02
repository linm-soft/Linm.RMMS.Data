# Demo control-map (modern MFE) — `ai-asset-detect`

> **Rule:** UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne · **cấm** BE.  
> Nguồn: synthetic/docs + `features/ai-asset-detect.md` · `15-SCREEN-AI-MAP.md` (legacy shallow GOVOne không có màn riêng).

## Kind hint

- **B** CatalogListShell (list candidate AI) + **D** slideout form Create/Edit/View/Copy + **F** map pin «AI new»
- Step 2a-K · 2g control-map · 2t catalog toolbar · leave-confirm (form dirty)
- Host: Patrol monitor + Asset giám sát TS · route MFE `/ai-vision/ai-asset-detect` (align AiVision)

## Fields

| Field | type | zone | Control | Notes |
|--------|------|------|---------|-------|
| Tìm kiếm q | text | filter | Search | ID · loại · tuyến · trip · mã Asset |
| Tuyến | select | filter | Select | QL1 / QL22 / QL14 / ALL |
| Loại TS | select | filter | Select | Taxonomy **riêng** (biển báo, hộ lan, cột Km/H, đèn, camera ITS…) — **không** class ổ gà |
| Trạng thái | select | filter | Select | Draft / Confirmed / Dismissed |
| Từ ngày / Đến ngày | date | filter | Date | detectedAt |
| Mã candidate | text | list/form | Code | AC-* |
| Loại TS/thiết bị | select | list/form | Select | assetClass |
| Score | number | list/form | Money/Qty | 0–1 · hiển thị % |
| lat / lng | number | list/form | Geo | Point pin |
| Tuyến / lý trình | text | list/form | Text | routeId + routeLabel |
| sectionId | text | form | Text | optional |
| patrolTripId | text | form | Text | chuyến tuần đường |
| bbox | text | form | Text | [x1,y1,x2,y2] |
| modelVersion | text | list/form | readonly | gpt-4o-vision / onnx-asset |
| status | select | list/form | status badge | Draft → Confirmed / Dismissed |
| assetCode | text | list/form | readonly | sau Confirm |
| nearbyRisk | flag | list/map | warn | cùng class &lt;25m |
| note | textarea | form | Text | dirty leave-confirm |
| detectedAt / updatedAt | datetime | form | DateTime | local display |
| imageUrl | text | form meta | readonly | mock frame |

## Actions / buttons

| Label | kind | zone | Demo | SSOT |
|-------|------|------|------|------|
| Tìm kiếm | action | filter | Apply filter — **must work** | FilterBar Search |
| Xóa lọc | action | filter | Clear | FilterBar Clear |
| + Tạo candidate | create | toolbar | open form create | Catalog Create |
| Giả lập frame mới | action | toolbar/feed | POST detect mock | detect-assets |
| Giả lập trùng nearby | action | toolbar/feed | nearby risk row | dedupe demo |
| Làm mới list | action | toolbar | reload localStorage | Refresh |
| Xuất Excel | export | toolbar | toast stub | export |
| Reset seed | action | toolbar | reseed 4 rows | dev only |
| Xem | nav | row | form view | open View |
| Sửa | action | row/header | form edit | open Edit |
| Copy | action | row | form copy → id mới | open Copy |
| Confirm | action | row/header | modal → Asset draft | confirm API |
| Dismiss | action | row/header | status Dismissed | dismiss API |
| Lưu nháp | action | footer | localStorage | FormActions Save |
| Hủy / Đóng / Quay lại | close | header/footer | leave-confirm dirty | Modal close |
| Copy mã | action | header | clipboard | stub |
| OSM / Esri / Fit | action | map | basemap + fit | Kind F map |

## Demo page rules

1. Layout: feed mock + filter/search + list + Leaflet map + Kind D slideout
2. Mock **3 draft** (biển báo, hộ lan, cột Km) + **1 nearby** risk
3. Confirm → `assetCode` + pin xanh (source=ai-asset-detect)
4. Badge **AI support** · **P1 GPT-4o Vision** · P2 ONNX asset-class — **không** hứa mAP P1
5. Phân biệt rõ `ai-vision` (hư mặt đường → Vấn đề)
6. Mọi action trong bảng phải click được (toast/modal/form)
7. **Cấm** BE · **cấm** sửa MFE production

## Refs

- `features/ai-asset-detect.md`
- `15-SCREEN-AI-MAP.md` · #3b
- `ai-asset-detect-actions.md`
