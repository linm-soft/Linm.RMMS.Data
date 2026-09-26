# PO — requirement — web-rmms-gis

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| title | Bản đồ tài sản — overlay TS/SC · corridor · GPS me-dot |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone `max-width: 430px` · **không** ERP Modal/Slideout · **không** master form · **không** draw/CRUD map P1 |
| lane | `web` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| writtenAt | `2026-09-25T17:05:00.000Z` |
| demo | **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-gis` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| nativeRouteCite | SCREENS `/gis` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · `mobile-bff/api/v1` · domain **Gis** (+ Asset focus) · **cấm ERP.*** |
| prior | data_analy `confirmed` · compact `handoff/data_analy-compact.md` |
| DES-GRID / LinErpListFilterBar | **N/A** — phone Map |

> Nhãn UI: `useFormOptions()` / copy `gisMap.*` — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** demo HTML / GisMapDemoOverlay / invent `api/v1/gis-map` · **cấm** sửa iOS/Android · **cấm** Web BFF base client.

## 1. Goal

Staff (Tuần đường / Hạt QLĐB) mở **Bản đồ tài sản** 1-1 Android trên Mobile MFE: tiles MVT + overlay pin TS/SC + corridor, legend isolate, basemap chips, search, focus từ detail, GPS me-dot RO. Không ghi DB từ map P1. Tab `me*` **bỏ**. Field doors / journal / kết ca / tồn tại / tần suất = peer shell (`web-rmms-mobile-a`…`e`) — **out**.

## 2. Screens / zones

| Id | Zone | Behavior (AC) |
|----|------|----------------|
| GIS-00 | phone frame | ≤430px · Android icon/layout 1-1 · center desktop review |
| GIS-01 | top bar | Back → Hub (`web-rmms-asset-hub` / `/asset`) · title `gisMap.title` |
| GIS-02 | trailing | **Danh sách** → `/asset/list` · **Lớp** toast P1 (`GET gis/layers` cite) · sheet P2 |
| GIS-03 | search | `gis/geojson/*?search=` và/hoặc local filter · placeholder copy key · **cấm invent** search API (GAP-MOB-GIS-SEARCH-01) |
| GIS-04 | map host | full-bleed · MVT `gis/tiles/…` + overlays · **cấm** OSM.org world / Leaflet-as-app |
| GIS-05 | basemap bar | chips Tiêu chuẩn · Vệ tinh (local) · Fit toàn tuyến (local, no API) |
| GIS-06 | legend | isolate Tất cả · Tài sản (`ts`) · Sự cố · Hành lang (GAP dual) |
| GIS-07 | GPS me-dot | `navigator.geolocation` · deny → hide me · map vẫn mở · **cấm** fake 0,0 · **cấm** POST track/check-in P1 |
| GIS-08 | focus | `?focus={id}` → `GET asset/road-assets/{id}` · center Lat/Lng · thiếu coords → fit all (GAP-MOB-GIS-FOCUS-01) |
| GIS-09 | pin popup | props TS/SC · tap → detail peer (nav only) |

**Entry:** Hub AH-06 → `/gis` (alias) / std `/web-rmms-gis` · Asset detail Ghim → `/gis?focus={id}` · Incident CTA dùng `gis/geojson/incidents` (GAP-MOB-GIS-SC-01).

## 3. Inventory (controlHint) — copy analy

| uiField | controlHint | notes |
|---------|-------------|-------|
| navBack | Button/Nav | → Hub |
| title | Text RO | `gisMap.title` |
| trailingList | Button/Nav | → `/asset/list` |
| trailingLayers | Button | toast P1 · sheet P2 |
| search | Search | geojson `?search=` |
| mapHost | Map | tiles + overlays |
| basemapStd / basemapSat / fitAll | Chip/Button | local |
| legendAll / legendTs / legendSc / legendCorridor | Chip | isolate |
| gpsMe | MapMarker | Geolocation RO |
| focusPin | MapMarker | road-assets/{id} |
| pinPopup | Popup | nav detail peer |

## 4. Acceptance criteria

### Map AC (packKind=list · Map surface — Grid AC N/A)

| ID | Criterion |
|----|-----------|
| AC-MAP-01 | Phone ≤430 · Android 1-1 chrome · std URL `http://localhost:9301/web-rmms-gis` |
| AC-MAP-02 | Load tiles via Mobile.Bff `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` · overlay `geojson/all` · `incidents` · `tuyen-duong?lod=corridor` |
| AC-MAP-03 | Legend isolate switches client layers without invent API |
| AC-MAP-04 | Basemap chips + Fit local; optional `GET gis/basemap-config` |
| AC-MAP-05 | Search filters geojson (`search` query / local) · no invented search endpoint |
| AC-MAP-06 | Layers trailing: toast P1; sheet P2 using `GET gis/layers` |
| AC-MAP-07 | GPS me-dot grant/deny rules · map opens on deny · no fake coords · no DB write |
| AC-MAP-08 | `?focus=` centers from Asset GetById; missing coords → fit all |
| AC-MAP-09 | Pin popup shows props · nav to list/detail peers only |
| AC-MAP-10 | Empty/error overlay → toast · **cấm** `window.alert` · map vẫn mở |
| AC-MAP-11 | Auth required; guest → login peer |
| AC-MAP-12 | **Không** render `me*` · feedback · cam-view · draw · heatmap · Twin · Field b–e |

### Leave / nav

| From | To |
|------|-----|
| Back | Hub `web-rmms-asset-hub` |
| Trailing list | `/asset/list` peer |
| Popup / focus exit | asset detail peer |
| Guest | login peer |

### Labels / copy

| Rule |
|------|
| Tất cả nhãn qua `useFormOptions()` / LinmCopy `gisMap.*` |
| **Cấm** hardcode chuỗi VN trên form/chrome map |

### BFF / BE HARD

| Rule |
|------|
| Client base **chỉ** Mobile.Bff `:5202` `mobile-bff/api/v1` |
| **Cấm** Route `mobile-bff` trên web-bff controllers · **cấm** invent `gis-map` |
| **Cấm ERP.*** · DOMAIN-MAP Gis (+ Asset cite) — SA thêm row slug (UNCLEAR-DOMAIN-MAP-GIS) |
| SC pin **chỉ** `gis/geojson/incidents` — **cấm** pin từ `incident/incidents` thiếu Lat/Lng |

## 5. Out of scope (P1)

- `/me` · `/me-profile` · `/me-settings` · feedback · cam-view  
- Draw CRUD · heatmap PCI · Cesium Twin · clusters UI P2  
- Field 2 cửa · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-a`…`e`)  
- Desktop Kind B grid / LinErpListFilterBar · Web Kind F sidebar  
- Demo-json / in-app mock SSOT · sửa native iOS/Android  

## 6. Gaps / UNCLEAR (carry → Design/SA)

| ID | Owner | Default |
|----|-------|---------|
| UNCLEAR-DOMAIN-MAP-GIS | SA | Thêm DOMAIN-MAP row `web-rmms-gis` → Gis (+ Asset) |
| UNCLEAR-STD-ROUTE | Design/Dev | Std URL `/web-rmms-gis` · alias `/gis` nếu shell cần |
| GAP-MOB-GIS-SEARCH-01 | Design | local/toast P1 · **cấm invent** search API |
| GAP-MOB-GIS-LAYER-01 | Design | toast P1 · sheet P2 |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | Design | legend Hành lang dual |
| GAP-MOB-GIS-SC-01 | SA/Dev | SC = geojson incidents only |
| GAP-MOB-GIS-FOCUS-01 | Dev | thiếu coords → fit all |

## 7. Definition of Done (PO → Design)

- [x] changeScope=`new_page` · packKind=`list` · Map formPattern confirmed  
- [x] Screens GIS-00…09 + inventory controlHint  
- [x] Map AC + Leave + Out + Gaps documented  
- [x] real-data §A+§B reused (hash skip · **cấm** re-scan demo)  
- [x] Labels / BFF / GPS / no-me HARD rules  
- [ ] Design: phone prototype + `reviewUrl` · zones GIS-* · Android 1-1  
- [ ] SA: DOMAIN-MAP row · confirm Mobile.Bff paths  

## 8. Handoff — Design

| Need | Detail |
|------|--------|
| Zones | GIS-00…09 ids only · phone 430 |
| Controls | inventory §3 · Map AC §4 |
| Copy keys | `gisMap.*` |
| Gaps | SEARCH/LAYER/CORRIDOR · toast P1 |
| reviewUrl | required trên design.md |
| Cấm | me* · draw · desktop grid · invent API |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `writtenAt=2026-09-25T17:05:00.000Z` · `autoApprove=ON`
