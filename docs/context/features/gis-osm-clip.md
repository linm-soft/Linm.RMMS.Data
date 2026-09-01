# GIS — nền OSM đã cắt + overlay MapService

> **Slug:** `gis-osm-clip` · **Module:** `Gis` · **Phase:** P1 prod map  
> **Status:** Context — **MFE web clip BFF** (Wave 4 web) · **P2 streets** OpenMapTiles trên `basemap` · demo HTML / native vẫn OSM.org/Google  
> **Skills:** `/implement-gis-map` · `/agent-dev-oms-map` · `/review-map-release`  
> **Parent:** [`gis.md`](gis.md) · data [`map-service.md`](map-service.md) · law [`legal-tech-corridor.md`](legal-tech-corridor.md)  
> **MFE:** `Linm.Web.RMMS.Gis` · **Mobile:** [`patrol-map.md`](patrol-map.md)  
> **Clip pack:** [`../../gis-vn-map/`](../../gis-vn-map/) — SSOT [`map-service.md`](map-service.md) § Clip SSOT

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Một basemap **clip gis.vn** (OSM **imagery**) + chi tiết KCHT/tuần **từ GIS/MapService** |
| Persona | Inspector (JWT) · Guest (không overlay nội bộ) |
| App hiện có | Leaflet OSM/Esri/Carto/Google · patrol MapKit + OSM chips |
| DoD P1 | Default tile tự host · mask HS/TS từ union 34 tỉnh · maxBounds VN (gồm đảo) · JWT overlays · guest không lat/lng TS |

## 2. Design / UI

Giữ chrome MFE GIS (`/agent-dev-oms-map` · `gis-mfe-map-standard.md`): Fit **map-bar** · **cấm** isolate legend bottom · attribution **`RMMS.vn`** · `LeaveConfirmModal`.

**Đổi:** default basemap **không** OSM.org. Chip «OSM» = tile clip. Ẩn Google/Esri trên **release** (demo HTML được giữ tách).

**Cut chỉ Việt Nam (prod):**

| | |
|--|--|
| Mask | Invert: world minus lỗ `ST_Union` 34 tỉnh (đất liền + Hoàng Sa trong Đà Nẵng + Trường Sa trong Khánh Hòa) |
| maxBounds | Lon **102.0–118.0** · Lat **6.8–23.5** · `minZoom` **5** |
| Cấm | Lat min **8.0** (Mục I.2) — cắt Trường Sa (south file = 6.931) · bbox chữ nhật làm `.poly` Osmium · nhét 31 MB GeoJSON vào client |

Guest: [`directions.md`](directions.md) + [`citizen.md`](citizen.md) — không toolbar vẽ TS.

## 3. API

Reuse `gis.md` §3 — **cấm invent**.

| Audience | Gọi |
|----------|-----|
| Guest | Public citizen only — **không** `gis/geojson` |
| Staff JWT | `GET /api/v1/gis/geojson/{layer}` · drawings live Signed |

Draw: [`gis-draw-live.md`](gis-draw-live.md) / google demo = **parity GOVOne**, không phải basemap pháp lý prod.

## 4. Database

Xem [`map-service.md`](map-service.md). Client không giữ polygon chủ quyền trong repo public.

## 5. Events

`asset.updated` → refresh overlay staff. Guest không subscribe track tuần.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MAP-OSM-CDN-01 | **CLOSED web** — `GisListPage` / draw pages BFF clip · native/demo HTML CDN còn |
| GAP-MAP-BOUNDS-01 | **CLOSED web** — maxBounds 102.0–118.0 / 6.8–23.5 / minZoom 5 trên Gis*Page |
| GAP-MAP-MASK-01 | **CLOSED web** — MVT `mask` invert trên MapLibre · file 34 đã ingest |
| GAP-MAP-PARITY-01 | Mobile ≠ web tiles |
| GAP-F-GIS-02 | Google draw parity — **không** dùng làm nền Store |

## 7. Demo checklist

- [x] Prod web: 0 request `openstreetmap.org` (Gis*Page source · live browser DEFER)  
- [x] Mask + bounds (web MFE)  
- [x] P2 street MVT (roads + place names) via BFF `tiles/basemap` · `streetTilesReady`  
- [ ] Staff overlay 401 unsigned  
- [ ] `/review-map-release`
