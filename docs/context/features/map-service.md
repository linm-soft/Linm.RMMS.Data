# MapService — dữ liệu gis.vn / CSDL nhà nước

> **Slug:** `map-service` · **Module:** Platform GIS · **Phase:** P1 (ingest+clip) / P1.5 (tile prod)  
> **Status:** Context · **chưa có repo** `RMMS.MapService`  
> **Skills:** `/implement-map-service` · `/data-gov-integration` · `/new-service`  
> **Peers:** [`gis.md`](gis.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · [`import-gov-ssot.md`](import-gov-ssot.md) · [`legal-tech-corridor.md`](legal-tech-corridor.md)  
> **Customer file:** [`../../tai-lieu/all-info-app-map.md`](../../tai-lieu/all-info-app-map.md)

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | SSOT **ranh giới + clip OSM** + lớp nghiệp vụ từ **import gov** — không OSM.org / Google làm pháp lý |
| Persona | GIS admin · Dev BE · Pháp chế (file gis.vn) |
| App hiện có | GIS API trên `RMMS.WebService` `api/v1/gis/*` — **chưa** ingest gis.vn · MFE còn CDN OSM/Esri/Google |
| DoD P1 | File gis.vn 34 tỉnh (HS/TS) trong pipeline · Osmium clip · tile **tự host** · GIST · guest không GeoJSON TS |

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
| National/province MultiPolygon | gis.vn GeoJSON khách giao | **GAP** — chưa entity Signed |
| Clip mask | Derived gis.vn | **GAP** |
| Road/KCHT | `gov-vn` import | Live import SSOT |
| OSM streets | PBF clipped → tile cache | **GAP** |

SRID 4326 + GIST. VN-2000 = transform khi nộp hồ sơ — không thay 4326 runtime.

## 5. Events

Import gov xong → rebuild overlay MVT. Clip PBF mới → invalidate tile cache.

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MAP-SVC-01 | Chưa repo/module MapService ingest gis.vn |
| GAP-MAP-OSM-CDN-01 | MFE Gis*Page OSM.org / Esri / Carto / Google |
| GAP-MAP-GISVN-01 | Chưa file 34 tỉnh khách |
| GOV-IMP-* | `/data-gov-integration` — cấm seed đủ ô |

## 7. Demo checklist

- [ ] Khách giao geojson gis.vn  
- [ ] Osmium extract documented  
- [ ] Prod tile URL nội bộ  
- [ ] Không gọi `tile.openstreetmap.org`
