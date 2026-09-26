# Feature context — web-rmms-gis

> **Slug:** `web-rmms-gis` · **Wave:** W1 Bản đồ tài sản (map overlay TS/SC · corridor · GPS me-dot)  
> **Status:** draft → data_analy · **packKind:** `list` · **changeScope:** `new_page`  
> **Demo:** N/A (master · **cấm** demo HTML / mock SSOT / GisMapDemoOverlay)  
> **MFE:** `Linm.Web.RMMS.Mobile` · khung phone `max-width` 430px · **cấm** nhét vào MFE desktop Asset/Gis/Camera  
> **BE:** `Linm.RMMS.WebService` + Mobile.Bff `:5202` · **cấm ERP.*** / Domains/Master  
> **mfeStdRoute:** `/web-rmms-gis` · **mfeStdUrl:** `http://localhost:9301/web-rmms-gis`  
> **Native route cite:** SCREENS `/gis` · **Queue:** `/agent-qldb-workflow` · **cấm** sửa iOS/Android  
> **Peer CTX:** `gis-map.md` (mobile P1) · SCREENS `/gis` · hub entry `web-rmms-asset-hub` AH-06

## 1. Mục tiêu

Màn **Bản đồ tài sản** 1-1 Android: MapLibre/clip tile BFF · pin tài sản (`ts`) · pin sự cố · hành lang · legend isolate · fit · basemap chips · search · focus từ detail (`?focus={id}`). GPS chỉ chấm “vị trí của bạn” — **không** ghi DB. Tab Cá nhân / `me*` **bỏ**. Field 2 cửa + nhật ký / kết ca / tồn tại / tần suất = peer shell / `web-rmms-mobile-a`…`e` — **out**.

## 2. Màn Map (ids)

| Id | Route / zone | Việc |
|----|--------------|------|
| GIS-00 | phone frame | ≤430px · Android icon/layout 1-1 |
| GIS-01 | top bar | Back → Hub (`/asset` / `web-rmms-asset-hub`) · title copy `gisMap.title` |
| GIS-02 | trailing | Android **Danh sách** → `/asset/list` · iOS cite **Lớp** toast P1 (parity GAP) |
| GIS-03 | search | filter local / `search` query trên geojson · copy key placeholder |
| GIS-04 | map host | full-bleed map · clip MVT tiles · **cấm** Leaflet-as-app / OSM.org world |
| GIS-05 | basemap bar | chips Tiêu chuẩn · Vệ tinh · Fit toàn tuyến (local) |
| GIS-06 | legend | isolate Tất cả · Tài sản · Sự cố · (Hành lang GAP dual) |
| GIS-07 | GPS me-dot | `navigator.geolocation` · deny → không vẽ me · map vẫn mở · **cấm** fake |
| GIS-08 | focus pin | `?focus=` → `GET asset/road-assets/{id}` · center Lat/Lng · thiếu → fit all |
| GIS-09 | pin popup | TS/SC properties · tap → detail peer (nav only) |

**Out:** `/me*` · feedback · cam-view · draw CRUD · heatmap PCI · Cesium Twin · camera ITS · Field doors deep · journal / findings / close / frequency (b–e) · invent `api/v1/gis-map` · Web Kind F sidebar.

### Entry (SCREENS / peers)

| From | Nav |
|------|-----|
| Hub row bản đồ | `/gis` · std `/web-rmms-gis` |
| Asset detail Ghim | `/gis?focus={id}` |
| Incident CTA | shared overlay · pin từ `gis/geojson/incidents` |

## 3. Nguồn SSOT (cite)

| Source | Path |
|--------|------|
| Screens / GPS / BFF | `docs/plan/web-rmms-mobile/SCREENS.md` · `/gis` Bản đồ tài sản |
| Peer mobile CTX | `docs/context/features/gis-map.md` |
| BFF table | `specs/_data-analy/gis-map-bff-endpoints.md` |
| Hub entry | `docs/context/features/web-rmms-asset-hub.md` · AH-06 |
| DOMAIN-MAP | **Gis** (+ cite Asset focus) · **GAP** slug `web-rmms-gis` chưa có row |
| BFF | Mobile.Bff `mobile-bff/api/v1` `:5202` · tiles `GisTilesController` → MapService |

## 4. API Live (prefix) — Map only

| Surface | Prefix / path |
|---------|----------------|
| Mobile BFF | `http://localhost:5202` · `mobile-bff/api/v1` |
| Pin TS | `GET gis/geojson/all` · client layer `ts` |
| Pin SC | `GET gis/geojson/incidents` |
| Corridor | `GET gis/geojson/tuyen-duong?lod=corridor` |
| Layers | `GET gis/layers` · sheet P2 · toast P1 |
| Basemap cfg | `GET gis/basemap-config` (optional) |
| Tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Focus | `GET asset/road-assets/{id}` |
| Query | `bbox` · `route` · `search` · `lod` · `skip` · `take` |
| Web BFF | **cite only** — **cấm** base client |
| Invent | **cấm** `GET api/v1/gis-map` / dedicated GisMapMobileController |

GPS: Geolocation me-dot only · **cấm** POST track/check-in từ map P1 · deny không bịa lat/lng.

## 5. HARD rules (product)

| Rule | |
|------|--|
| Layout | Android icon/tab/layout 1-1 · phone `max-width` 430 |
| Tab me | **cấm** render `me*` |
| Nhãn | `useFormOptions()` / copy key · **cấm** hardcode tiếng Việt trên form |
| BFF | ONLY Mobile.Bff `:5202` · **cấm** Route `mobile-bff` trên WebService web-bff controllers |
| BE | ONLY `Linm.RMMS.WebService` + DOMAIN-MAP · **cấm ERP.*** |
| Native | **cấm** sửa iOS/Android |
| Scope | **cấm** gộp draw/heatmap/Twin · **cấm** gộp Field/journal b–e |
| Peer | SC pin = GIS geojson · **cấm** invent Lat trên IncidentDto |

## 6. Persona

| Zone | Ai |
|------|-----|
| Map | Tuần đường · Hạt QLĐB · staff session |
| Guest | → login peer · không map data |

## 7. Gaps / UNCLEAR

| ID | Default |
|----|---------|
| UNCLEAR-DOMAIN-MAP-GIS | SA thêm DOMAIN-MAP row `web-rmms-gis` → Gis (+ Asset cite) |
| UNCLEAR-STD-ROUTE | SCREENS `/gis` vs mfeStdRoute `/web-rmms-gis` — follow STATUS URL |
| GAP-MOB-GIS-SEARCH-01 | search parity iOS/Android — local/toast P1 · **cấm invent** search API |
| GAP-MOB-GIS-LAYER-01 | Lớp sheet P2 · toast P1 |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | legend Hành lang dual |
| GAP-MOB-GIS-SC-01 | SC = `gis/geojson/incidents` only |
| GAP-MOB-GIS-FOCUS-01 | thiếu coords → fit all |

<!-- context: web-rmms-gis · data_analy task_5161ca5d · 2026-09-25 -->

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `done` | `done` | `2026-09-25T17:14:32.910Z` |
| mobile | — | — | — |
