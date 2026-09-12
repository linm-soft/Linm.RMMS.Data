# Mobile.Bff × MapService — Feature Context

> **Slug:** `mobile-bff-map` · **Module:** Platform GIS · **Phase:** P1  
> **Status:** Context · pipeline `tl` / `pending`  
> **Skills:** `/implement-map-stack` Wave 2–3 · `/implement-gis-map` native **sau** BFF  
> **Peers:** [`map-service.md`](map-service.md) · [`gis-osm-clip.md`](gis-osm-clip.md) · [`gis-map.md`](gis-map.md) · [`patrol-map.md`](patrol-map.md)  
> **Host:** `Linm.RMMS.Mobile.Bff` · **cấm** invent `api/v1/map-service/*`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tile clip MapService cùng origin Mobile.Bff; overlay/clusters vẫn RMMS Gis |
| Persona | Inspector JWT · guest basemap |
| App hiện có | `gis-map` / `patrol-map` gọi `mobile-bff/api/v1/gis/*` catch-all → WebService |
| DoD P1 | `GET …/gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService `:5021` · JWT overlay · **0** OSM.org trên tile URL app |

## 2. Design / UI

Không màn mới. Wave 3: `TileUrl` native = `{BffBase}/mobile-bff/api/v1/gis/tiles/…`. Wave 4 UI clip = `/implement-gis-map` / `/edit-mobile-feature` — **không** gộp slug này.

## 3. API

Reuse Signed GIS. **Cấm invent.**

| Path app | BFF | Downstream |
|----------|-----|------------|
| `gis/tiles/{layer}/{z}/{x}/{y}.pbf` | MapService proxy (parity Web `GisBffController`) | `{MapService}/api/v1/gis/tiles/…` |
| `gis/clusters` · `gis/geojson` · drawings | catch-all / explicit | RMMS `api/v1/gis/*` `{AssetDb}` |

**Cấm** `AddLinmMapServiceBffControllers` (duplicate `gis`). **Cấm** `{MapDb}` thứ 2 cho mobile.

## 4. Database

Same `{MapDb}` `linm_maps` + RMMS AppDb. **Cấm** copy 650k TS sang MapService.

## 5. Events

Không.

## 6. Gaps

| ID | Default |
|----|--------|
| GAP-MOB-BFF-MAP-01 | Mobile.Bff chưa `ServiceEndpoints:MapService` |
| GAP-MAP-OSM-CDN-01 | Native còn CDN nếu TileUrl chưa BFF clip |
| GAP-MOB-BFF-MAP-02 | Catch-all `gis/tiles` hiện đi RMMS, không clip |

## 7. Demo checklist

- [ ] curl tile qua `:5202` (guest `basemap` · overlay 401 không JWT)  
- [ ] iOS + Android TileUrl BFF · **cấm** `openstreetmap.org`

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-12T09:45:27.545Z` |
