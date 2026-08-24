# UX analy — gis-draw-google (Bản đồ hạ tầng)

| Field | Value |
|-------|-------|
| feature | `gis-draw-google` |
| route | `/gis/ha-tang` |
| updatedAt | `2026-08-24T01:10:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Header | Bản đồ hạ tầng — vẽ tài sản · badge API khi BFF |
| Sidebar Lớp | Tree lớp vẽ + **Hầm** · radio target · chỉ lớp đang work |
| Toolbar | **Fit tổng quan** (không «Về QL.22») · nạp seed Excel = fallback |
| Map | Leaflet live · host→bar→legend · pin QCVN CAU/HAM **trùng chú giải** (không vòng trắng) |
| Click pin | Chỉ **Thuộc tính** (mã/tên/geom) · **không** isolate · map vẫn **Tất cả** |
| Status | `DB khu-2-gov` khi API trả inventory |

## Overlay SSOT

- Nguồn: `GET /api/v1/gis/geojson/drawings` merge drawings + **mọi** `rmms_road_assets` plottable (set **khu-2-gov**)
- BRIDGE → lớp `cau` · TUNNEL → lớp `ham` · tuyến km-chain → `tuyen-duong`
- Cấm vẽ placeholder `lat=16,lng=110`
- Thiếu tọa độ: `coordSource=km-copy` (cùng route+km) hoặc `km-lerp` (mốc ≤40 km)
- CSV trùng `code` (vidagis) → import suffix `#n` / merge cùng tên+km
- Vidagis lat/lng **ngoài bbox Nghệ An** (Quảng Ninh / Quảng Trị / 16,110) **không** plot — `coordSource=khu2-corridor` trên tim đường Khu II
- LineString tuyến = vertices corridor QL.1 / QL.48B / CT / QL.HCM · **OSRM routeAlongStreets** (R8) · pin ghim `projectToPath`
- Fit overview ≤13 trên bbox tài sản
- Tree lớp vẽ (cột km, biển báo, …) vẫn hiện để vẽ mới — CSV set không có loại đó thì trống overlay

## GAP

| ID | Note |
|----|------|
| GAP-WEB-EDIT-01 | Context lock cùng turn với wire DB |
| GAP-MAP-ICON | Pin map = pictogram QCVN (`createAssetLeafletIcon`) · legend `assetIconHtml` cùng glyph · cấm vòng trắng |
| DEFER | `pavement_sections` không geom / km lệch Khu 2 — không vẽ mặt đường |
| GAP-MAP-CLICK-INSPECT | Click icon map = inspect + tab Thuộc tính · cấm isolate/ẩn tài sản khác |
