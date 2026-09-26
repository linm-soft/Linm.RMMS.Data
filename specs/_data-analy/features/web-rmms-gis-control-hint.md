# Data-analy — controlHint — web-rmms-gis

| Field | Value |
|-------|-------|
| feature | `web-rmms-gis` |
| title | Bản đồ tài sản — overlay TS/SC · corridor · GPS me-dot |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| analyzedAt | `2026-09-25T16:50:00.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-gis-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Gis** · cite Asset focus · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-gis` |
| mfeStdRoute | `/web-rmms-gis` |
| nativeRouteCite | SCREENS `/gis` |
| taskId | `task_5161ca5d` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Map / full · **không** ERP Modal/Slideout Kind B · **không** form master · **không** CRUD/draw trên map P1 |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Map vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-gis.md` | new · written this run |
| Peer CTX | `docs/context/features/gis-map.md` | zones DES-MOB-GIS · API live |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/gis` · GPS me-dot |
| BFF table | `specs/_data-analy/gis-map-bff-endpoints.md` | mobile-bff gis/* |
| Hub entry | `docs/context/features/web-rmms-asset-hub.md` | AH-06 → `/gis` |
| DOMAIN-MAP | Gis + cite Asset | **GAP** slug `web-rmms-gis` chưa có row |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF base · **cấm** Route mobile-bff trên web-bff controllers |

## Screens Map (ids)

| id | route / zone | surface |
|----|--------------|---------|
| GIS-00 | phone | frame ≤430 · Android 1-1 |
| GIS-01 | top bar | back → Hub · title |
| GIS-02 | trailing | Danh sách → list · Lớp toast P1 |
| GIS-03 | search | geojson `search` / local filter |
| GIS-04 | map host | tiles + overlays |
| GIS-05 | basemap bar | chips + Fit local |
| GIS-06 | legend | isolate all/ts/sc/(corridor) |
| GIS-07 | GPS me-dot | Geolocation · no DB write |
| GIS-08 | focus | `?focus=` + road-assets/{id} |
| GIS-09 | pin popup | TS/SC props · nav detail peer |

**Out:** `/me*` · feedback · cam-view · draw · heatmap · Twin · Field 2 cửa deep · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · invent `gis-map` API.

## ControlHint inventory (Map)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | GIS-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | GIS-01 | Button/Nav | → Hub / `web-rmms-asset-hub` · copy `gisMap.nav.back` |
| title | GIS-01 | Text RO | copy `gisMap.title` |
| trailingList | GIS-02 | Button/Nav | → `/asset/list` · Android · `gisMap.nav.list` |
| trailingLayers | GIS-02 | Button | toast P1 · `GET gis/layers` cite · sheet P2 |
| search | GIS-03 | Search | query `search` · `gisMap.search.placeholder` |
| mapHost | GIS-04 | Map | MVT `gis/tiles/…` · overlay geojson |
| basemapStd | GIS-05 | Chip | local basemap switch · copy key |
| basemapSat | GIS-05 | Chip | local · **cấm** OSM.org world |
| fitAll | GIS-05 | Button | local fit · no API |
| legendAll | GIS-06 | Chip | isolate all |
| legendTs | GIS-06 | Chip | layer `ts` client |
| legendSc | GIS-06 | Chip | incidents overlay |
| legendCorridor | GIS-06 | Chip | corridor · GAP dual |
| gpsMe | GIS-07 | MapMarker | Geolocation · deny → hide me-dot |
| focusPin | GIS-08 | MapMarker | Lat/Lng from asset GetById |
| pinPopup | GIS-09 | Popup | code/name/route/km · nav peer |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Map · **không** Kind B desktop grid |
| Map search | GIS-03 overlay · **cấm** ERP list filter bar |

## GPS

| Màn | Rule |
|-----|------|
| GIS-07 me-dot | `navigator.geolocation` · deny → không vẽ me · **cấm** fake 0,0 |
| Map open | vẫn mở khi deny GPS |
| Write | **không** POST track/check-in/detect từ map P1 |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-GIS | DOMAIN-MAP chưa có row `web-rmms-gis` | SA thêm row · domain Gis · cite Asset |
| UNCLEAR-STD-ROUTE | SCREENS `/gis` vs mfeStdRoute `/web-rmms-gis` | Design/Dev: std URL packet · map alias `/gis` nếu shell cần |
| GAP-MOB-GIS-SEARCH-01 | search chrome parity | PO/Design · local/toast · **cấm invent** search API |
| GAP-MOB-GIS-LAYER-01 | Lớp sheet P2 | Design · toast P1 |
| GAP-MOB-GIS-SC-01 | Incident no Lat/Lng | SC = `gis/geojson/incidents` only |

## Handoff

| Role | Dùng |
|------|------|
| PO | Map overlays · legend · GPS me · focus · DoD · no me · no draw |
| Design | Phone 430 · zones GIS-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff only · **cấm** invent gis-map path |
| TL/Dev | Wire Mobile MFE Map only · tiles + geojson · peers hub/list/detail |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T16:50:00.000Z`
