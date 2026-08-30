# MapService — dữ liệu gis.vn / CSDL nhà nước

> **Slug:** `map-service` · **Module:** Platform GIS · **Phase:** P1 (ingest+clip) / P1.5 (tile prod)  
> **Status:** Context · **chưa có repo** `RMMS.MapService`  
> **Skills:** `/implement-map-stack` (entry) · `/implement-map-service` · `/data-gov-integration` · `/new-service`  
> **Implement plan (BE→BFF→UI):** [`../../plan/map-service/README.md`](../../plan/map-service/README.md)  
> **Peers:** [`gis.md`](gis.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · [`import-gov-ssot.md`](import-gov-ssot.md) · [`legal-tech-corridor.md`](legal-tech-corridor.md)  
> **Customer file:** [`../../tai-lieu/all-info-app-map.md`](../../tai-lieu/all-info-app-map.md)  
> **gis.vn pack (DocsRoot):** [`../../gis-vn-map/`](../../gis-vn-map/) — SSOT clip = `Việt Nam (tỉnh thành) - 34.geojson`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | SSOT **ranh giới + clip OSM** + lớp nghiệp vụ từ **import gov** — không OSM.org / Google làm pháp lý |
| Persona | GIS admin · Dev BE · Pháp chế (file gis.vn) |
| App hiện có | GIS API trên `RMMS.WebService` `api/v1/gis/*` — file 34 tỉnh **đã giao** · **chưa** ingest PostGIS · MFE còn CDN OSM/Esri/Google |
| DoD P1 | File gis.vn 34 tỉnh (HS/TS) **trong pipeline** · Osmium clip · tile **tự host** · GIST · guest không GeoJSON TS · map **chỉ hiện Việt Nam** |

**Host:** Ask `/new-service` **hoặc** module GIS hiện có — **cấm** hai bảng `VietnamBoundaries` song song.

## 2. Design / UI

Không MFE riêng. Admin ingest = job/internal (sau). User map → [`gis-osm-clip.md`](gis-osm-clip.md).

## 3. API

**Cấm invent** `api/v1/map-service/*`.

Reuse Signed GIS:

| Method | Path | Ghi chú |
|--------|------|---------|
| GET | `/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Prod phải là **clip**, không OSM.org |
| GET | `/api/v1/gis/geojson/{layer}?bbox=` | JWT inspector; **cấm** guest |
| GET | `/api/v1/gis/heatmap/pci` | Staff |

Import KCHT: pipeline [`import-gov-ssot.md`](import-gov-ssot.md) — **cấm** OSM POI làm sổ TS.

Tile URL prod = BFF/cùng origin — **GAP-MAP-OSM-CDN-01** đến khi cắt xong.

## 4. Database

PostGIS (đã bật trên RMMS):

| Concept | Nguồn | Status |
|---------|-------|--------|
| National/province MultiPolygon | [`../../gis-vn-map/`](../../gis-vn-map/) `Việt Nam (tỉnh thành) - 34.geojson` · 34 MultiPolygon · 31.7 MB | File **đã giao** · entity PostGIS **chưa** Signed |
| Clip mask | `ST_Union` 34 → 1 lỗ invert (đất liền + HS + TS) | **GAP** — chưa derive |
| Road/KCHT | `gov-vn` import | Live import SSOT |
| OSM streets | PBF clipped → tile cache | **GAP** |

SRID 4326 + GIST. VN-2000 = transform khi nộp hồ sơ — không thay 4326 runtime.

### Clip SSOT (analy 2026-08-30)

| | |
|--|--|
| **Dùng cắt** | `docs/gis-vn-map/Việt Nam (tỉnh thành) - 34.geojson` — gis.vn sau sáp nhập · 34 tỉnh/TP |
| Union bbox | Lon **102.144–117.393** · Lat **6.931–23.393** (WGS-84) |
| maxBounds camera | Lon **102.0–118.0** · Lat **6.8–23.5** · `minZoom` **5** — **cấm** Lat min = 8.0 (Mục I.2 khách) vì cắt mất Trường Sa |
| Hoàng Sa | Trong đa giác **Đà Nẵng** (sáp Quảng Nam) — east 112.777 |
| Trường Sa | Trong đa giác **Khánh Hòa** (sáp Ninh Thuận) — east 117.393 · south 6.931 |
| Không clip | `Provinces_included_Paracel_SpratlyIslands.geojson` (65 feature · 63 tỉnh cũ — đối soát Note HS/TS) · `dvhcvn.json` (cây 63/696/10047 · **không** geom) |

**Cấm** nhét 31 MB GeoJSON vào MFE / binary Store. Dissolve + `.poly` + mask ở BE/job; client chỉ nhận tile clip + mask đã render.

## 5. Events

Import gov xong → rebuild overlay MVT. Clip PBF mới → invalidate tile cache.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MAP-SVC-01 | File 34 **đã có** — chưa ingest PostGIS / Osmium / tile clip |
| GAP-MAP-OSM-CDN-01 | MFE Gis*Page OSM.org / Esri / Carto / Google |
| GAP-MAP-GISVN-01 | **CLOSED file** — `docs/gis-vn-map/Việt Nam (tỉnh thành) - 34.geojson` |
| GOV-IMP-* | `/data-gov-integration` — cấm seed đủ ô |

## 7. Demo checklist

- [x] Khách giao geojson gis.vn (`docs/gis-vn-map/` · 34 tỉnh)  
- [ ] Osmium extract documented  
- [ ] Prod tile URL nội bộ  
- [ ] Không gọi `tile.openstreetmap.org`
