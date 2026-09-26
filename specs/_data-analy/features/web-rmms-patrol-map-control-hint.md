# Data-analy — controlHint — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — ca đang chạy · me-dot · toast check-in |
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
| analyzedAt | `2026-09-26T03:28:33.000Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-patrol-map-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · cite **Gis** tiles · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` |
| taskId | `task_842327d7` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile Map / full · **không** ERP Modal/Slideout Kind B · **không** form master · **không** POST check-in/tracks P1 |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** DOMAIN-MAP row.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét phone Map vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-patrol-map.md` | new · written this run |
| Peer CTX | `docs/context/features/patrol-map.md` | chrome `/gis/live` · DES-MOB-PAT-MAP |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | `6f74282b…` · `/patrol-map` |
| Plan | `docs/plan/web-rmms-mobile/PLAN.md` | `60d75d5b…` · `PatrolMapView` |
| Peer gis | `docs/context/features/web-rmms-gis.md` | tiles · basemap chips |
| Peer entry | home · field tileMap · supervise SUP-03 | nav in |
| BFF table | `specs/_data-analy/patrol-map-bff-endpoints.md` | sessions Live · tracks P2 |
| DOMAIN-MAP | Patrol + cite Gis | **GAP** slug `web-rmms-patrol-map` |
| BFF | Mobile.Bff `:5202` · `mobile-bff/api/v1` | **cấm** Web BFF client · **cấm** Route mobile-bff trên web-bff |

## Screens Map (ids)

| id | route / zone | surface |
|----|--------------|---------|
| PM-00 | phone | frame ≤430 · Android 1-1 |
| PM-01 | top bar | back · title · trailing Ghi điểm tuần |
| PM-02 | map host | tiles + overlay ca |
| PM-03 | basemap bar | Tiêu chuẩn \| Vệ tinh · locate |
| PM-04 | legend | isolate all/track/done/next |
| PM-05 | next card | điểm tiếp theo · Route |
| PM-06 | GPS me-dot | Geolocation · no DB write |
| PM-07 | locate popup | Vị trí của bạn · GPS |
| PM-08 | entry | Home / Field / Supervise |

**Out:** `/me*` · feedback · cam-view · journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b`…`e`) · Field 2 cửa deep · check-in sheet POST · invent tracks/coverage/patrol-map API · draw GIS · ERP.*.

## ControlHint inventory (Map)

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| phoneFrame | PM-00 | Layout | `max-width: 430px` · center desktop review |
| navBack | PM-01 | Button/Nav | → Home/Field/Supervise · copy key |
| title | PM-01 | Text RO | copy `patrolMap.title` · Ca đang chạy |
| trailingCheckin | PM-01 | Button | toast P1 · **cấm** sheet · peer check-in owner |
| mapHost | PM-02 | Map | MVT `gis/tiles/…` · overlay · **cấm** OSM.org world |
| basemapStd | PM-03 | Chip | Tiêu chuẩn · copy key · **cấm** Đường/Phố EN |
| basemapSat | PM-03 | Chip | Vệ tinh · local paint |
| locateMe | PM-03 | Button | Geolocation · deny → disable · toast · **cấm** alert |
| legendAll | PM-04 | Chip | isolate all |
| legendTrack | PM-04 | Chip | hành trình · P1 no POST tracks |
| legendDone | PM-04 | Chip | đã ghi điểm tuần |
| legendNext | PM-04 | Chip | điểm kế tiếp |
| nextCard | PM-05 | Card RO | `Route` từ `GET patrol/sessions` filter `Đang tuần` |
| nextCheckin | PM-05 | Button | toast P1 · same trailing rule |
| gpsMe | PM-06 | MapMarker | live fix · **cấm** fake 0,0 |
| locatePopup | PM-07 | Popup | Tên: Vị trí của bạn · GPS: · cite map-inspect-popup |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Map · **không** Kind B desktop grid |
| Map chrome | PM-03…04 chips · **cấm** ERP list filter bar · **cấm** Fit/Toàn tuyến chip |

## GPS

| Màn | Rule |
|-----|------|
| PM-06 me-dot · PM-03 locate | `navigator.geolocation` · deny → ẩn me / disable locate · **cấm** fake |
| Map open | vẫn mở khi deny GPS |
| Write | **không** POST track/check-in từ map P1 · toast only |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-PATROL-MAP | DOMAIN-MAP chưa có row `web-rmms-patrol-map` | SA thêm row · Patrol (+ cite Gis) · MFE `/web-rmms-patrol-map` |
| UNCLEAR-OVERLAY-GEOM | P1 cấm POST tracks · demo N/A · không OMS SSOT | Design/SA: empty overlay vs session detail pins nếu Live · **cấm** invent tracks |
| UNCLEAR-STD-PORT | PLAN native vs packet `:9301/web-rmms-patrol-map` | Design/Dev follow STATUS `mfeStdUrl` |

## Handoff

| Role | Dùng |
|------|------|
| PO | Map DoD · Live sessions · toast check-in · no deep CRUD · chrome `/gis/live` |
| Design | Phone 430 · zones PM-* · Android 1-1 · prototype+reviewUrl |
| SA | DOMAIN-MAP row · Mobile.Bff sessions + gis/tiles · **cấm** invent PatrolMapController |
| TL/Dev | Wire Mobile MFE map only · check-in/tracks = peer/P2 |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T03:28:33.000Z`
