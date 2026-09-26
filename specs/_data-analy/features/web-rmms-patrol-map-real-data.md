# Data-analy — real-data bind — web-rmms-patrol-map

| Field | Value |
|-------|-------|
| feature | `web-rmms-patrol-map` |
| title | Bản đồ tuần — ca đang chạy · me-dot · toast check-in |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_842327d7` |
| prefix API | `api/v1/patrol` · resource **`sessions`** (GET) · cite `gis/tiles` |
| prefix BFF web (cite) | `web-bff/api/v1/patrol/sessions` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| domain | **Patrol** · cite **Gis** (tiles/basemap) |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T03:28:33.000Z` |
| demo | **N/A** · **cấm** demo-json / OMS mock SSOT / in-app mock |

## § Scope map

| In | Out |
|----|-----|
| PM-00…08 · sessions GET · tiles · me-dot · basemap/legend · next-card · toast check-in | check-in POST · tracks/coverage invent · journal/kết ca/tồn tại/tần suất · Field doors CRUD · `/me*` · ERP.* |
| API **Live** `GET patrol/sessions` · `GET gis/tiles/…` | API **Mới** PatrolMapController · POST tracks P1 |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-patrol-map.md` | — | — |
| `peer-context` | `docs/context/features/patrol-map.md` · chrome `/gis/live` | — | cite only · **cấm** demo OMS bind |
| `plan` | `docs/plan/web-rmms-mobile/PLAN.md` · PatrolMapView | — | bỏ tab me |
| `screens` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/patrol-map` | — | BFF + GPS |
| `bff-table` | `specs/_data-analy/patrol-map-bff-endpoints.md` | — | tracks P2 |
| `peer` | `web-rmms-gis` · home · field · supervise · mobile-a…e | n/a | deep/out owners |
| `api` | `PatrolSessionsController` · GET list | empty next-card · map vẫn mở | toast · **cấm** `window.alert` |
| `api-tiles` | Mobile.Bff `GisTilesController` · `gis/tiles/…` | blank basemap | retry · **cấm** OSM.org |
| `bff` | Mobile.Bff `:5202` · proxy patrol + tiles | 503 | retry |
| `domain-map` | Patrol (+ Gis cite) | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | — (không master form) | — | labels via `useFormOptions` |
| `geo` | device Geolocation | deny → hide me / disable locate | **cấm** fake lat/lng |
| `demo` | — | N/A | **cấm** demo SSOT / map-oms bind |

## §B — Bind field (HARD) — Patrol map

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| nav.back | back | Button/Nav | LOOKUP_STATIC copy | — | nav peer entry | home/field/supervise | PatrolMapView |
| nav.title | ca đang chạy | Text RO | LOOKUP_STATIC | — | — | — | title |
| nav.checkin | ghi điểm tuần | Button | LOOKUP_STATIC | — | toast only · **cấm** POST | peer check-in | toast P1 |
| map.host | map | Map | — | `gis/tiles/…` | — | peer gis chrome | GisClipMapView |
| basemap.std | tiêu chuẩn | Chip | LOOKUP_STATIC | local paint | — | peer gis | CLIP_STYLE |
| basemap.sat | vệ tinh | Chip | LOOKUP_STATIC | local paint | — | peer gis | CLIP_STYLE |
| locate.me | vị trí của tôi | Button | — | Geolocation | — | — | locate |
| legend.* | isolate | Chip | LOOKUP_STATIC | client layers | — | — | legend |
| next.card | điểm tiếp theo | Card RO | — | `GET patrol/sessions` filter `Đang tuần` · `Route` | — | SCREENS | next card |
| next.checkin | ghi điểm tuần | Button | LOOKUP_STATIC | — | toast only | peer | toast |
| gps.me | me-dot | MapMarker | — | Geolocation | — | — | me pin |
| locate.popup | vị trí của bạn | Popup | LOOKUP_STATIC | lat/lng live | — | map-inspect-popup | popup |

**Cấm** invent PatrolMap / tracks / coverage P1 · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN labels · **cấm** POST check-in từ map · **cấm** demo OMS geometry SSOT.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `patrolMap.*` | PLAN · SCREENS · peer `/gis/live` | hardcode label VN · Đường/Phố/Fit EN |
| sessions | `GET patrol/sessions` | Patrol | invent write từ map |
| tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Gis · Mobile.Bff | OSM.org world · AddLinmMapServiceBffControllers misuse |
| files | — | — | persist full URL trên map |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **yes** · full host · MVT tiles · basemap chips |
| overlay | P1 **không** POST `tracks` · geometry = empty hoặc UNCLEAR-OVERLAY-GEOM · **cấm** demo OMS SSOT |
| GPS | me-dot + locate · deny blocks · **cấm** fake |
| Draw | **cấm** draw/CRUD GIS trên patrol-map P1 |
| Check-in | toast · owner = peer sheet |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| ActiveSession | patrol sessions | peer A open/close | GET sessions | next-card Route / empty |
| BasemapStyle | local | user chip | — | Tiêu chuẩn/Vệ tinh |
| LegendIsolate | local | user chip | — | layer visibility |
| MeFix | Geolocation | device | — | me-dot / popup |
| CheckinToast | UI only | user tap | — | toast · no POST |

`progress: map chrome` — không session lifecycle write / WO / incident trên feature này.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD: map + sessions + toast · Live tiles · no deep CRUD · chrome `/gis/live` |
| Design | PM zones · Android 1-1 · reviewUrl · no Fit/Đường chips |
| SA | Add DOMAIN-MAP `web-rmms-patrol-map` · confirm Mobile.Bff sessions+tiles |
| TL | Tasks map scaffold + entry routes |
| Dev | Implement Mobile MFE map only · VITE_MOBILE_API_URL `:5202` |
| QA | sessions empty/error · GPS deny · toast no POST · phone 430 · no web-bff |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-26T03:28:33.000Z`
