# MapService — dữ liệu gis.vn / CSDL nhà nước

> **Slug:** `map-service` · **Module:** Platform GIS · **Phase:** P1 (ingest+clip) / P1.5 (tile prod)  
> **Status:** Stack Wave 1 **done** · Wave 2 **web BFF done** (mobile pending) · Wave 4 **web done** (iOS/Android pending) · **P2 streets done** (`streetTilesReady`) — host **`Linm.Platform.MapService`** (`API-CORE`) · Docker `:5021` · Web BFF NuGet **1.1.0** tiles `web-bff/api/v1/gis/tiles/…` · MFE clip BFF MVT + OpenMapTiles roads/names  
> **Confirmed (2026-09-01):** `svc_host=new_svc` · `service_kind=api` · `src_style=micro_src` · **platform service** (không RMMS domain)  
> **Skills:** `/implement-map-stack` (entry) · `/implement-map-service` · `/data-gov-integration` · `/new-service` · next Wave 2 mobile BFF · Wave 3 `/implement-map-stack` integrate · Wave 4 native `/implement-gis-map`  
> **Implement plan (BE→BFF→UI):** [`../../plan/map-service/README.md`](../../plan/map-service/README.md)  
> **Platform STATUS:** `D:/API-CORE/Linm.Platform.MapService/docs/STATUS.md`  
> **Peers:** [`gis.md`](gis.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · [`import-gov-ssot.md`](import-gov-ssot.md) · [`legal-tech-corridor.md`](legal-tech-corridor.md)  
> **Customer file:** [`../../tai-lieu/all-info-app-map.md`](../../tai-lieu/all-info-app-map.md)  
> **gis.vn pack (DocsRoot):** [`../../gis-vn-map/`](../../gis-vn-map/) — SSOT clip = `Việt Nam (tỉnh thành) - 34.geojson`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | SSOT **ranh giới + clip OSM** + lớp nghiệp vụ từ **import gov** — không OSM.org / Google làm pháp lý |
| Persona | GIS admin · Dev BE · Pháp chế (file gis.vn) |
| App hiện có | Platform `Linm.Platform.MapService` `api/v1/gis/*` (tiles/clip) · RMMS.WebService GIS giữ drawings/PCI — **cấm** hai bảng `VietnamBoundaries` |
| DoD P1 | File gis.vn 34 tỉnh (HS/TS) **trong pipeline** · Osmium clip · tile **tự host** · GIST · guest không GeoJSON TS · map **chỉ hiện Việt Nam** |

**Host:** `Linm.Platform.MapService` (Ask `new_svc` + platform 2026-09-01). Layout C `api/src/Map.Api/` + BFF lib `Linm.Platform.MapService.Bff` **1.1.0** (Web.Bff **đã** `AddLinmMapServiceBff` · tiles trên `GisBffController` · **cấm** `AddLinmMapServiceBffControllers`). Overlay KCHT vẫn `/data-gov-integration` trên RMMS. **Cấm** hai bảng `VietnamBoundaries`.

| | |
|--|--|
| API | `http://localhost:5021` |
| PostGIS | `localhost:5461` · DB `linm_maps` · image `postgis/postgis:16-3.4-alpine` |
| Migration | `20260831222902_Schema_GisBoundary` **applied** |

## 2. Design / UI

Không MFE riêng. Admin ingest = hosted `Map:IngestOnStartup` (file mount `/clip/vietnam-34.geojson`). User map → [`gis-osm-clip.md`](gis-osm-clip.md) — MFE Gis*Page **clip BFF** (MapLibre MVT) · **0** OSM.org.

## 3. API

**Cấm invent** `api/v1/map-service/*`.

Reuse Signed GIS (MapService):

| Method | Path | Ghi chú |
|--------|------|---------|
| GET | `/health` | Anonymous |
| GET | `/api/v1/gis/health` | `boundaryCount` · `clipMaskReady` · `streetTilesReady` |
| GET | `/api/v1/gis/basemap-config` | Guest · `provider=map-service-clip-osm` khi P2 ready · maxBounds 102–118 / **6.8–23.5** · minZoom 5 |
| GET | `/api/v1/gis/layers` | Guest thấy lớp public; inspector thêm overlay |
| GET | `/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Guest: `basemap`/`boundaries`/`mask`/`notices`. Inspector: `routes`/`assets`/`cameras`/`patrol` |
| GET | `/api/v1/gis/geojson/{layer}?bbox=` | JWT inspector; **cấm** guest |

Heatmap PCI / drawings / **clusters (pin theo view)** = **RMMS.WebService** Gis — không chuyển MapService.

**Pin theo viewport** (gộp PLAN C.3 → [`../../plan/map-service/README.md`](../../plan/map-service/README.md) § Pin):

| z | Hiện |
|---|------|
| ≤ 8 | Bubble + count |
| 9–13 | Theo tuyến trong bbox |
| ≥ 14 | Pin bbox · take 100 · cap 2000 |

Chỉ dump WGS-84. **Cấm** 650k GeoJSON · **cấm** km-lerp. Guest không pin TS.

Import KCHT: pipeline [`import-gov-ssot.md`](import-gov-ssot.md) — **cấm** OSM POI làm sổ TS.

Tile URL prod = BFF cùng origin — **GAP-MAP-OSM-CDN-01** đến khi MFE cắt xong. Live API nội bộ: `http://localhost:5021/api/v1/gis/tiles/basemap/{z}/{x}/{y}.pbf` (verify 200 MVT).

## 4. Database

Isolated PostGIS `linm_maps` (không Auth DB · không RMMS AppDbContext):

| Concept | Nguồn | Status |
|---------|-------|--------|
| National/province MultiPolygon | [`../../gis-vn-map/`](../../gis-vn-map/) `Việt Nam (tỉnh thành) - 34.geojson` · 34 MultiPolygon · 31.7 MB | **Ingested 2026-09-01** · `vietnam_boundaries` count=34 · GIST `"Geom"` |
| Clip mask | `ST_Union` 34 → invert world-minus-VN (đất liền + HS + TS) | **Ready** · `clip_masks` count=1 |
| Road/KCHT overlay | `gov-vn` import → `overlay_features` | **Trống** — `/data-gov-integration` |
| OSM streets | PBF clipped → `Map:OsmTileCacheRoot` `vietnam.mbtiles` | **Ready 2026-09-01** — Osmium + Planetiler z12 · `streetTilesReady=true` |
| Forbidden geofence | Bảng `forbidden_geofences` | **Không** public GeoJSON |

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
| GAP-MAP-SVC-01 | **CLOSED** — ingest 34 + mask + MVT + guest 401 · **P2 streets** MBTiles (`MAP-P2-01`) |
| GAP-MAP-OSM-CDN-01 | **CLOSED web MFE** — Gis*Page BFF clip; native / demo HTML OSM.org còn |
| GAP-MAP-GISVN-01 | **CLOSED file** — `docs/gis-vn-map/Việt Nam (tỉnh thành) - 34.geojson` |
| GAP-MAP-TILE-500 | **CLOSED 2026-09-01** — SQLite MBTiles NRE concurrent · clip MVT · sea bg / layer order |
| GOV-IMP-* | `/data-gov-integration` — overlay `overlay_features` trống |

## 7. Demo checklist

- [x] Khách giao geojson gis.vn (`docs/gis-vn-map/` · 34 tỉnh)  
- [x] Platform repo + Schema applied + ingest 34 + mask (Docker `:5021`)  
- [x] Tile MVT nội bộ (`basemap` 200)  
- [x] Osmium extract **documented** (`local-script/osmium-clip.sh`) · `/clip/vietnam.poly` written  
- [x] Web BFF same-origin tiles (`web-bff/api/v1/gis/tiles/basemap/…` 200 · guest overlay 401)  
- [x] Osmium extract **ran** + Planetiler MBTiles z12 (`streetTilesReady` · layers transportation/place)  
- [x] Prod tile URL **BFF** cùng origin (MFE Wave 4 web)  
- [x] Không gọi `tile.openstreetmap.org` (MFE Gis*Page source)
