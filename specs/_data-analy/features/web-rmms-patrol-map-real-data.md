# Data-analy — real-data bind — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — chainage · bake tim · check-in fields |
| packKind | `map` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_a63fcbbb` |
| prefix API | `api/v1/patrol` · `api/v1/gis` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** Map.Api |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `/ban-do-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| domain | **Patrol** + **Gis** (tiles · chainage · bake) |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.28.3` |
| analyzedAt | `2026-09-30T13:50:00.000Z` |
| demo | **N/A** · **cấm** demo-json / OMS mock SSOT · **cấm** nhãn `NgheAnPatrolGpsCatalog` trên ca thật |
| mapGate | `/agent-dev-oms-map` |

## § Delta Current vs New

| Area | Current | New |
|------|---------|-----|
| Check-in | `planPointLabel` dùng như km | +`chainageKm` +`chainageLabel` · Schema_* pair · `planPointLabel` ≠ km |
| fetchLatestKm | `planPointLabel` | **`chainageLabel`** |
| Chainage | không | `GET gis/chainage?lat&lng&route` |
| Bake / nét | màu theo userName (Thị B/Tuấn) | bake OSRM local · nét = tim cắt km · bỏ hard-code màu tên |
| streets/search | — | snap tên + echo km client · **không** tính lý trình |
| UI Ghim | pin | chainage fill editable · GPS raw persist · snap ≠ overwrite pin |

## § Scope map

| In | Out |
|----|-----|
| PM-00…10 · sessions · tiles · chainage GET · check-in fields · bake overlay | Map.Api · linm_maps copy · ERP.* · public OSRM/Overpass · demo Nghi Lộc trên ca thật |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-patrol-map.md` § Delta | — | — |
| `api` | `PatrolSessionsController` · GET sessions | empty next-card | toast · cấm alert |
| `api` | Patrol check-ins GET/POST · entity + **chainageKm/Label** | — | Schema_* SA |
| `api` | **`GET gis/chainage`** (new) · Gis domain | null km → user nhập | toast |
| `api-tiles` | Mobile.Bff `GisTilesController` | blank basemap | retry · cấm OSM.org |
| `api` | `GET gis/streets/search` | no name | echo km only |
| `derived` | `GisRouteBakeService` · OSRM `127.0.0.1:5000/route` | no bake → empty nét | **cấm** project-osrm |
| `entity` | `rmms_user_route_segments` · KM_POST assets | Admin/MANAGER no clip | segment miss |
| `geo` | device Geolocation | deny → disable pin/locate | **cấm** fake |
| `code` | `PatrolMapPage.tsx` · `CheckInSheet.tsx` · `camPatrol/endpoint.fetchLatestKm` | — | Current baseline |
| `domain-map` | Patrol + Gis · row `web-rmms-patrol-map` | — | SA extend chainage |
| `demo` | — | N/A | **cấm** NgheAnPatrolGpsCatalog labels on live ca |
| `catalog` | — | — | useFormOptions labels |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.* | chrome | Button/Text | LOOKUP_STATIC | — | nav | yes | PatrolMapView |
| map.host | map | Map | — | `gis/tiles/…` | — | yes | yes |
| basemap.* | chips | Chip | LOOKUP_STATIC | local | — | yes | yes |
| locate.me | vị trí | Button | — | Geolocation | — | yes | yes |
| legend.* | isolate | Chip | LOOKUP_STATIC | client | — | yes | yes |
| next.card | điểm tiếp | Card RO | — | `GET patrol/sessions` | — | yes | yes |
| pin.here | ghim | Button | LOOKUP_STATIC | Geolocation → **`GET gis/chainage`** | fill chainage* | enhance | enhance |
| chainage.km | lý trình số | Number | — | chainage API | `chainageKm` | new | new |
| chainage.label | lý trình nhãn | Text | — | chainage API | `chainageLabel` | new | new |
| plan.point | điểm KH | Text | — | session plan | `planPointLabel` ≠ km | yes | yes |
| gps.raw | GPS thô | Number RO | — | Geolocation | `lat`/`lng` (raw) | yes | yes |
| checkin.post | ghi điểm | Button | — | — | POST check-in + chainage* + GPS | peer sheet | yes |
| track.line | nét ca | MapLine | — | bake centerline by `routeCode` + km cut | — | enhance | enhance |
| latest.km | stamp km | Text RO | — | check-ins **`chainageLabel`** | — | enhance `fetchLatestKm` | enhance |

**Cấm** invent Map.Api · **cấm** tính km qua streets/search · **cấm** fake GPS · **cấm** hardcode màu theo tên · **cấm** ERP.*.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | `useFormOptions` / copy | PLAN · SCREENS | hardcode VN · Đường/Phố EN |
| sessions | `GET patrol/sessions` | Patrol | — |
| tiles | `gis/tiles/…` | Gis | OSM.org |
| chainage | `GET gis/chainage` | KM_POST + bake + segments | public Overpass |
| streets | `gis/streets/search` | MapService | dùng để tính lý trình |

## §D — Map / vẽ (packKind=map · GAP-DA-MAP-01)

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet GIS clip stack · `/agent-dev-oms-map` R1–R11 · MFE Tiêu chuẩn/Vệ tinh |
| Tools | Pin (Ghim) · me-dot · **không** draw polygon P1 |
| Layer | tiles MVT · check-in pins · **bake centerline** overlay cắt km |
| Load | `GET sessions` · `GET check-ins` · tiles · bake geom by routeCode |
| Save | POST check-in: GPS raw + chainageKm/Label · **cấm** overwrite pin by snap |
| Pick | Ghim → chainage suggest → user edit → save |
| OSRM | Bake **BE** `127.0.0.1:5000` · **cấm** browser Overpass · **cấm** project-osrm.org |
| Fit / lines | Fit ca · line levels R7b · **cấm** màu nét theo «Thị B»/«Tuấn» |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| ActiveSession | sessions | peer open/close | GET | next-card |
| ChainageSuggest | gis/chainage | Ghim | GET | fill Number/Text editable |
| CheckInSaved | check-ins | user | POST | pin + label |
| TrackGeom | bake + km cut | BE + client | bake read | polyline |
| BasemapStyle | local | user | — | chips |
| MeFix | Geolocation | device | — | me-dot |

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: Ghim→chainage editable · fetchLatestKm=chainageLabel · bake nét · no demo Nghi Lộc · copy § Delta |
| Design | PM-09/10 · ô chainage · bỏ màu tên · reviewUrl delta |
| SA | Schema_* chainageKm/Label · `GET gis/chainage` · DOMAIN-MAP · bake OSRM local · segment clip |
| TL | T-UI pin/chainage · T-BE Schema + chainage + bake · T-FE fetchLatestKm |
| Dev | Mobile MFE + RMMS WebService only · Step 4d/4m map |
| QA | gap>2km null · Admin no clip · streets/search không đổi km · cấm public OSRM |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` · `rulesVersion=2026.09.28.3` · `analyzedAt=2026-09-30T13:50:00.000Z` · `taskId=task_a63fcbbb`
