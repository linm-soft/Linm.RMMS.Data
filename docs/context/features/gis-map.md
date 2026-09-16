# Context — gis-map (mobile · Xem trên bản đồ)

| Field | Value |
|-------|-------|
| feature | `gis-map` |
| title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| des | `DES-MOB-GIS` · map shell `DES-MOB-OMS-GIS` |
| demo | `#sc-gis-map` · `specs/mobile-p1/ui/prototype/{ios,android}/index.html` · `map-oms.js` `initGis` |
| packKind | **`map`** |
| changeScope | `new_page` |
| parent | `asset-hub` tile/row · peers: `asset-detail` CTA · `incident-list` seg · `incident-detail` CTA |
| domain | Gis · Asset (focus pin) — CTX web `gis.md` · peer `asset-hub.md` · `asset.md` |
| BE | `Linm.RMMS.WebService` · DOMAIN-MAP **Gis** (+ Asset GetById) — **cấm ERP.*** |
| BFF | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/gis/*` · `asset/road-assets/{id}` |
| peers | `gis.md` · `map-service.md` · `asset-hub.md` · `asset-detail.md` · `patrol-map.md` (OMS twin pattern) |

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Bản đồ tài sản**: clip gis.vn (MapLibre `GisClipMapView`) · overlay ghim TS QCVN + SC · hành lang · isolate legend · fit · entry hub / detail / incident |
| Persona | Tuần đường · Hạt QLĐB IV |
| Entry | Hub tile **Xem trên bản đồ** `#i-scope` · hub row · detail **Ghim trên bản đồ** · incident seg/CTA |
| DoD P1 | Dual `#sc-gis-map` · **iOS MapLibre clip** `{TileUrl}` BFF MVT (**cấm** MapKit world · **cấm** WebView HTML · **cấm** OSM.org/Esri/Google tile) · GET `gis/tiles/{layer}/{z}/{x}/{y}.pbf` · `gis/clusters` · `gis/geojson/*` · live-only · fail/empty → map trống + toast · map **vẫn mở** · **cấm** GisMapDemoOverlay · **cấm** mfeStdUrl · **cấm** invent `api/v1/gis-map` |

## 2. Design / UI (`#sc-gis-map`)

| Zone | Pattern | DES-ID | Notes |
|------|---------|--------|-------|
| Nav | TopBar | — | Back → `asset-hub` · title **Bản đồ tài sản** |
| Trailing iOS | TextButton **Lớp** | — | toast P1 «Lớp tài sản / sự cố · chú giải» |
| Trailing Android | TextButton **Danh sách** | — | `go('asset-list')` |
| Search (iOS) | overlay glass | — | placeholder **Tìm tài sản, sự cố…** · `#i-search` · filter/toast P1 |
| Map host | full Map | `DES-MOB-OMS-GIS` | **iOS SSOT** `GisClipMapView` (MapLibre · clip 97–118 / 6.8–23.5 · HS/TS) · Android OSM/clip **cùng tile BFF** · **cấm** Leaflet WebView · **cấm** MapKit world |
| Basemap bar | Chip ×2 + Fit | — | **Tiêu chuẩn** · **Vệ tinh** (cùng MVT clip) · **Toàn tuyến** (mobile) · **cấm** chip Đường/Phố OSM.org |
| Legend | Chip isolate | — | **Tất cả** · **Tài sản** · **Sự cố** · (**Hành lang** iOS only — dual GAP) |

**Không** gộp: web Kind F sidebar 20 actions · heatmap PCI · Cesium Twin · gis-draw · camera ITS slideout.

## 3. API (mobile BFF — cấm invent path `gis-map`)

| Method | `{BffPrefix}` path | Downstream | Status |
|--------|-------------------|------------|--------|
| GET | `gis/geojson/{layer}` | `GisMapController.GetGeoJson` | **Live** — overlay (`all` · type layers · `incidents`) |
| GET | `gis/geojson/tuyen-duong` / `lod=corridor` | corridor polylines | **Live** |
| GET | `gis/layers` | layer catalog | **Live** · Lớp sheet **P2** · toast P1 |
| GET | `gis/basemap-config` | basemap hints | **Live** · OMS tiles local P1 OK |
| GET | `gis/tiles/{layer}/{z}/{x}/{y}.pbf` | MapService clip MVT (`basemap`/`boundaries`/`mask`) | **Live** — nền clip |
| GET | `gis/clusters` | cụm viewport / national z≤8 | **Live** — pin + pict QCVN (`LinmAssetKchtPict`) |
| GET | `gis/heatmap/pci` | PCI | **OUT** P1 mobile |
| GET | `asset/road-assets/{id}` | focus pin from detail | **Live** |
| POST/PUT/DELETE | `gis/drawings*` | draw CRUD | **OUT** — owner web `gis-draw-*` |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/gis-map` · ERP.* · web-bff path.

**SC pin note:** `IncidentDto` **không** có `Lat`/`Lng` — overlay SC P1 = GIS `geojson/incidents` (inventory/seed) · **cấm invent** lat trên Incident · **cấm** dùng `incident/incidents` làm pin geometry P1.

## 4. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `asset-hub` | Parent / back |
| `asset` / `#sc-asset-list` | Android trailing Danh sách |
| `asset-detail` | Entry CTA Ghim · pass Id/Lat/Lng |
| `incident-list` / `incident-detail` | Entry seg/CTA · shared_action |
| `patrol-map` | OMS twin pattern · **không** gộp |
| web `gis` | Kind F monitor · **OUT** mobile slug |

## 5. Demo SSOT (`map-oms.js`)

| Layer | Demo |
|-------|------|
| Corridor | `PATROL_WAYPOINTS` OSRM polyline · isolate `corridor` |
| TS pin | `ts1` @ 11.530,109.004 · popup **TS-20260810-014 · Cống ngang · QL.1 Km 1556+000** |
| TS pin 2 | `ts2` @ 11.470,108.995 |
| SC pin | `sc1` @ 11.510,109.001 · popup **SC-2401 · Nứt mặt đường · QL.1 Km 1556+080** |
| Title | Bản đồ tài sản |
| Hub CTA | Xem trên bản đồ · `#i-scope` |

## 6. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-GIS-SEARCH-01 | iOS search overlay vs Android thiếu — PO/Design parity · P1 filter local / toast · **cấm invent** search API |
| GAP-MOB-GIS-LAYER-01 | iOS **Lớp** toast · Android **Danh sách** — dual chrome OK · layers sheet **P2** |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | iOS legend **Hành lang** · Android thiếu — Design dual |
| GAP-MOB-GIS-SC-01 | Incident domain no Lat/Lng · SC overlay = `gis/geojson/incidents` · demo fallback |
| GAP-MOB-GIS-FOCUS-01 | Nav từ detail pass Id → GET by id center · thiếu coords → fit all |
| GAP-MOB-IOS-MAP-HOST-01 | **closed** — mọi map iOS reuse `GisClipMapView` · `#sc-patrol-map` + HITL `photo-geo-capture` · `task_1f6d86c4` |

## 7. Cấm

- Invent `GET api/v1/gis-map` / dedicated GisMapController trên Mobile.Bff  
- ERP.* · `mfeStdUrl` · WebView HTML Leaflet-as-app  
- Watermark Gói · device label · ship `GIS_ASSETS` hardcode khi BFF live (`GAP-MOB-REAL-02`)  
- Gộp draw / heatmap / Twin / camera live vào slug  
- Start sibling list/detail/incident (`GAP-MOB-ACT-06`) · enqueue basemap/legend/fit (`GAP-MOB-ACT-07`)  
- MapKit / OSM.org / Esri / Google làm nền iOS · fork style clip khác `#sc-gis-map`

<!-- context: gis-map mobile P1 · data_analy 2026-08-31 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-13T04:06:00.000Z` |
