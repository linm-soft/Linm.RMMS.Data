# Design — web-rmms-gis

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| title | Bản đồ tài sản — overlay TS/SC · corridor · GPS me-dot |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_3df79b80`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone Map** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **Map / full** · **không** ERP Modal/Slideout Kind B · **không** master form · **không** draw/CRUD map P1 |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Map · **cấm** clone filter bar |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone Map) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-gis` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| mfeStdRoute | `/web-rmms-gis` |
| nativeRouteCite | SCREENS `/gis` · alias nếu shell cần |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Gis (+cite Asset focus) · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-gis-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-gis-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-25T17:20:00.000Z` |
| taskId | `task_3df79b80` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual · Kind B DES-GRID · `LinErpListFilterBar` · invent `api/v1/gis-map` · Web BFF base client · draw/heatmap/Twin/Field b–e · `me*` / feedback / cam-view · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · Leaflet-as-app / OSM.org world.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-gis.md` | feature Map |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/gis` · GPS me-dot |
| CTX-03 | `docs/context/features/gis-map.md` | peer zones · API live |
| CTX-04 | `docs/context/features/web-rmms-asset-hub.md` | AH-06 → `/gis` |
| DEM | — | **N/A** · hash skip |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-gis-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC-MAP-01…12 |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** · Android icon/layout **1-1** |
| Map owns | **GIS-00…09** · tiles MVT · geojson overlays · legend isolate · basemap+fit local · search · layers toast P1 · focus · GPS me-dot RO · pin popup |
| Peer owns | Hub `/asset` · list `/asset/list` · detail · login · Field a…e · shell TabBar · draw/heatmap owners |
| DES-LEAVE | **N/A** — Map không form dirty |
| Out | `/me*` · feedback · cam-view · draw · heatmap · Twin · Field 2-door deep · journal/kết ca/tồn tại/tần suất (b–e) · invent gis-map path |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **GIS-00** | phone | Frame | max-width 430 · center desktop review · Android 1-1 |
| **GIS-01** | top bar | Header | navBack → Hub (`web-rmms-asset-hub` / `/asset`) · title `gisMap.title` |
| **GIS-02** | trailing | Actions | list → `/asset/list` · layers toast P1 (`GET gis/layers`) · sheet P2 |
| **GIS-03** | search | Search | `gis/geojson/*?search=` và/hoặc local · **cấm invent** search API |
| **GIS-04** | map host | Map | MVT `gis/tiles/…` + overlays · **cấm** OSM.org world |
| **GIS-05** | basemap bar | Chips | Tiêu chuẩn · Vệ tinh (local) · Fit (local, no API) · optional `gis/basemap-config` |
| **GIS-06** | legend | Chips | isolate all / ts / sc / corridor |
| **GIS-07** | GPS me-dot | MapMarker | Geolocation · deny → hide · map mở · **cấm** fake / POST |
| **GIS-08** | focus | MapMarker | `?focus=` + `GET asset/road-assets/{id}` · thiếu coords → fit all |
| **GIS-09** | pin popup | Popup | props TS/SC · nav detail peer |

### IA

```
(auth staff) → GIS-00 + GIS-01 back/title + GIS-02 list/layers
  + GIS-03 search
  + GIS-04 map (tiles + overlays)
  + GIS-05 basemap/fit local
  + GIS-06 legend isolate
  + GIS-07 me-dot (grant) | hide (deny)
  + GIS-08 focus pin when ?focus=
  + GIS-09 popup → detail peer
(guest) → login peer · không silent empty map shell
Leave: Hub · list · detail · login only
```

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| phoneFrame | GIS-00 | Layout | * | max-width 430 · center review |
| navBack | GIS-01 | Button/Nav | * | → Hub · `gisMap.nav.back` |
| title | GIS-01 | Text RO | * | `gisMap.title` |
| trailingList | GIS-02 | Button/Nav | * | → `/asset/list` · `gisMap.nav.list` |
| trailingLayers | GIS-02 | Button | * | toast P1 · `GET gis/layers` · sheet P2 |
| search | GIS-03 | Search | * | `?search=` / local · `gisMap.search.placeholder` |
| mapHost | GIS-04 | Map | * | MVT + geojson overlays |
| basemapStd | GIS-05 | Chip | * | local switch |
| basemapSat | GIS-05 | Chip | * | local · **cấm** OSM.org world |
| fitAll | GIS-05 | Button | * | local fit · no API |
| legendAll | GIS-06 | Chip | * | isolate all |
| legendTs | GIS-06 | Chip | * | layer `ts` · `GET gis/geojson/all` |
| legendSc | GIS-06 | Chip | * | `GET gis/geojson/incidents` |
| legendCorridor | GIS-06 | Chip | * | `GET gis/geojson/tuyen-duong?lod=corridor` |
| gpsMe | GIS-07 | MapMarker | * | Geolocation · deny hide |
| focusPin | GIS-08 | MapMarker | opt | Lat/Lng from GetById |
| pinPopup | GIS-09 | Popup | * | props · nav detail |

**Labels:** `useFormOptions()` / copy keys `gisMap.*` — prototype hiện nhãn nghiệp vụ VN để review; Dev wire key.  
**GPS:** me-dot only · deny → hide · map mở · **cấm** fake 0,0 · **cấm** POST track/check-in P1.  
**REMOVED:** me / me-profile / me-settings / feedback / cam-view / draw / heatmap.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/index.html` |
| Zones | GIS-00 · GIS-01 · GIS-02 · GIS-03 · GIS-04 · GIS-05 · GIS-06 · GIS-07 · GIS-08 · GIS-09 |
| Form | **none** master · Map chrome only |
| Grid/filter desktop | **N/A** |
| SSOT | `design-prototype-review` · `design-real-view-parity` · control-hint · mobile-tokens |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html` |
| **peerStdUrl** | `http://localhost:9301/web-rmms-gis` |
| **real_view_parity** | `v1` |

### Wire

```
GIS-00: phoneFrame 430
GIS-01: [‹ back] title Bản đồ tài sản
GIS-02: [☰ list] [▦ layers toast P1]
GIS-03: search input → geojson ?search= / local
GIS-04: map host (MVT cite + overlays) · static proto (cấm OSM-as-app)
GIS-05: [Tiêu chuẩn] [Vệ tinh] [Fit]
GIS-06: [Tất cả] [Tài sản] [Sự cố] [Hành lang]
GIS-07: me-dot · board GPS deny ẩn
GIS-08: focus pin · board Focus
GIS-09: popup props + [Xem chi tiết] → detail peer
Board: Staff+GPS | GPS deny | Focus | Empty | Layers toast | Overlay error
```

## 5. API map (cite real-data §B)

| Action | API |
|--------|-----|
| Overlay TS | `GET mobile-bff/api/v1/gis/geojson/all` |
| Overlay SC | `GET mobile-bff/api/v1/gis/geojson/incidents` |
| Corridor | `GET mobile-bff/api/v1/gis/geojson/tuyen-duong?lod=corridor` |
| Tiles | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Layers cite | `GET mobile-bff/api/v1/gis/layers` · toast P1 |
| Basemap cfg | `GET mobile-bff/api/v1/gis/basemap-config` (optional) |
| Focus | `GET mobile-bff/api/v1/asset/road-assets/{id}` |
| Search | query on geojson · **cấm invent** search endpoint |
| Fit / basemap chips | local · no API |
| GPS | browser Geolocation · no DB write |
| Nav | Hub · list · detail · login peers |

**BFF:** Mobile.Bff `:5202` · `mobile-bff/api/v1` · **cấm** Web BFF base client · **cấm ERP.*** · **cấm** invent `gis-map`.  
Empty/error overlay → toast in-app · **cấm** `window.alert` · map vẫn mở.

## 6. DES checklist

| ID | Result |
|----|--------|
| DES-A zones GIS-* | **PASS** |
| DES-B control = controlHint | **PASS** |
| DES-C prototype + reviewUrl | **PASS** |
| DES-D Leave dirty | **N/A** (no Map form) |
| DES-GRID / DES-RPT | **N/A** phone Map |
| real_view_parity | **v1** |
| Android 1-1 / no me* / no draw | **PASS** |
| AC-MAP-01…12 cite PO | **PASS** (Design surface) |

## 7. UNCLEAR (carry)

| id | Action |
|----|--------|
| UNCLEAR-DOMAIN-MAP-GIS | SA thêm DOMAIN-MAP row `web-rmms-gis` · Gis + cite Asset |
| UNCLEAR-STD-ROUTE | **follow STATUS** `mfeStdRoute=/web-rmms-gis` · alias `/gis` nếu shell cần |
| GAP-MOB-GIS-SEARCH-01 | local/`?search=` on geojson · **cấm invent** |
| GAP-MOB-GIS-LAYER-01 | toast P1 · sheet P2 |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | legend corridor chip · dual cite CTX |
| GAP-MOB-GIS-SC-01 | SC = `gis/geojson/incidents` only |
| GAP-MOB-GIS-FOCUS-01 | thiếu Lat/Lng → fit all |

## 8. Handoff

| Role | Need |
|------|------|
| SA | DOMAIN-MAP row · Mobile.Bff paths confirm · tiles · **cấm** invent gis-map |
| TL | Tasks Map page + overlay wires · peers hub/list/detail |
| Dev | `/agent-dev` · MFE Mobile Map only · `VITE_MOBILE_API_URL` · no web-bff |
| QA | Overlays empty/fail · GPS deny · focus · phone 430 · no me* · e2e queued |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `updatedAt=2026-09-25T17:20:00.000Z` · `design_confirm=approve` · `taskId=task_3df79b80`
