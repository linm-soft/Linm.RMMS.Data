# Data-analy — real-data bind — web-rmms-ui-align

| Field | Value |
|-------|-------|
| feature | `web-rmms-ui-align` |
| title | Align UI Home · tab · Field · Me — live Mobile.Bff |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| taskId | `task_428b7f20` |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · host `http://localhost:5202` |
| prefix BFF web (cite only) | `web-bff/api/v1/*` · **không** base client MFE này |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `D:/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-ui-align` |
| domain | Shell chrome + cite peer DOMAIN-MAP (Auth · Notification · Patrol · Incident · Maintenance · Asset · Gis · AiVision · Camera …) |
| contentHash | `sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-26T06:39:04.505Z` |
| demo | **N/A** · golden prototype = zone ref only · **cấm** demo-json / in-app mock SSOT |

## § Scope

| In | Out |
|----|-----|
| TabBar 5 · Home/Field/Incident/Work/Me chrome · align DES-MOB-* tới routes đã có | Product route mới · invent controller · ERP.* · Web BFF client · MapService `:5021` browser · sửa iOS/Android |
| Live auth · profile · notification · sessions badge · gis/tiles · peer list/detail APIs | Mock list · dummy in-memory |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-ui-align.md` | — | — |
| `peer` | `web-rmms-shell.md` · `web-rmms-home.md` · `mobile-bff-map.md` · peer web-rmms-* CTX | n/a | deep owners |
| `prototype` | `specs/mobile-p1/ui/prototype/android/index.html` · `ios/index.html` · zone ids | — | UI ref only · **không** data SSOT |
| `api` | Auth · Notification · Patrol sessions · peer DOMAIN-MAP resources | empty list UI / badge=0 | toast · **cấm** `window.alert` |
| `bff` | Mobile.Bff `:5202` · `GisTilesController` · `MobileApiProxyController` · Auth/Files rewrite | 503 | retry |
| `domain-map` | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · feature slug → 15 domain | — | **cấm ERP.*** · **cấm** invent slug API |
| `catalog` | LOOKUP_STATIC copy · peer Integration catalogs | — | hardcode VN label |
| `geo` | device Geolocation trên deep map/check-in | deny → block coords CTA | **cấm** fake lat/lng |
| `demo` | — | N/A | **cấm** mock SSOT |

## §B — Bind field (HARD) — chrome + Me

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| tab.items | tab.* | TabBar | LOOKUP_STATIC | — | route switch | shell | android/ios 5-tab |
| login.user | login.user | Text | — | — | `POST auth/login` body | yes | n/a |
| login.pass | login.pass | Password | — | — | login body | yes | n/a |
| session | session | derived | — | `POST auth/login` · `POST auth/refresh-token` | JWT | yes | n/a |
| profile.displayName | me.profile.name | Text RO | — | `GET auth/profile` | — | yes | n/a |
| notify.unread | me.notify.badge | Number RO | — | `GET notification/overview` | tap `/web-rmms-ops` | yes | n/a |
| home.guest.faq | home.guest.faq | Static/Nav | LOOKUP_STATIC | — | — | yes | n/a |
| home.guest.privacy | home.guest.privacy | Static/Nav | LOOKUP_STATIC | — | — | yes | n/a |
| home.quick.* / grid.* | home.* | Button/Nav | — | — | existing routes | yes | n/a |
| field.doorPatrol | field.door.patrol | Button/Nav | — | optional `GET patrol/sessions` | `/web-rmms-field` door | yes | n/a |
| field.doorInspect | field.door.inspect | Button/Nav | — | optional sessions | door inspect | yes | n/a |
| me.offlineQueue | me.offline | Button/Nav | — | peer offline queue | `/web-rmms-offline` | yes | n/a |
| me.signal | me.signal | Text RO | derived | — | — | yes | n/a |
| me.feedback | me.feedback | Button/Nav | — | peer | feedback route | gap? | n/a |
| me.camView | me.camView | Button/Nav | — | peer Camera | cam-view | gap? | n/a |
| me.settings | me.settings | Button toast | — | — | toast only | yes | prototype |
| me.logout | me.logout | Button | — | — | clear JWT / logout | yes | n/a |
| map.tileUrl | map.tiles | Map tiles | geo | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | — | yes | TileUrl BFF |
| map.overlay | map.overlay | Map | geo | `GET gis/clusters` · `gis/geojson` via Mobile proxy | — | peer | n/a |
| incident.list | incident.* | List | — | peer `GET incident/incidents` | — | yes | cite peer |
| work.list | mnt.* | List | — | peer `GET maintenance/work-orders` | — | yes | cite peer |
| asset.list | asset.* | List | — | peer `GET asset/road-assets` | — | yes | cite peer |
| attendance.* | att.* | List/Form | — | peer `attendance-logs` | peer write | yes | cite |
| nghiemThu.* | nt.* | List/Form | — | peer `nghiem-thu` | peer write | yes | cite |

**Cấm** invent UI-align domain CRUD · **cấm** ERP.* · **cấm** fake GPS · **cấm** hardcode VN form labels · **cấm** mock list khi BFF đã có GET.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC | FE `useFormOptions` / LinmCopy `tab.*` · `me.*` · `home.*` | CTX + prototype labels | hardcode VN |
| road-route | `GET mobile-bff/api/v1/integration/road-routes` | Integration | free-text khi đã master |
| asset-types | `GET …/integration/asset-types` | Integration | Dropdown cứng demo |
| profile | `GET auth/profile` | Auth | invent user API |
| notify | `GET notification/overview` | Notification | invent inbox CRUD trên Me |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| Engine | Mobile.Bff clip tiles · cite `mobile-bff-map.md` · `GisTilesController` |
| Surfaces | DES-MOB-PAT-MAP · DES-MOB-GIS (+ peer map screens) |
| Tools | Base Đường/Phố/Vệ tinh · Fit toàn tuyến — **đúng** prototype · **không** invent draw tools mới trên slug này |
| Layer | peer GIS catalog codes |
| Load tiles | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Load overlay | `gis/clusters` · `gis/geojson` via Mobile proxy → RMMS Gis |
| Save | peer map features only · UI-align **không** POST geometry mới |
| Pick | peer |
| HARD | **cấm** browser gọi MapService `:5021` · **cấm** Web BFF tile · **cấm** OSM.org làm TileUrl SSOT |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| AuthJWT | session | login/logout | auth/* | guest vs staff · Me |
| ActiveTab | shell | user | — | TabBar 5 highlight |
| UnreadBadge | notification | mark-read peer | overview | Home/Me → ops |
| OfflineQueueCount | local queue + peer sync | offline peer | peer replay | Me badge |
| ActivePatrolDoor | patrol sessions | Field peer | GET sessions | door badges |

`progress: shell session + tab + peer lifecycles` — không invent WO/incident state machine trên slug này.

## §F — Handoff

| Role | Need |
|------|------|
| PO | DoD «màn mở = data thật» · resolve GAP-DA-UIALIGN-ME-01 · tab copy |
| Design | control-map khớp §B · prototype zone ids · reviewUrl · 5-tab |
| SA | **giữ** path đã cite · không migration mới cho chrome |
| Dev | Align MFE only · Mobile.Bff live · **cấm** mock |
| QA | Parity DES-MOB-* · tiles via `:5202` · settings toast · 5 tabs |

## Version footer

skillVersion=`2026.09.05.03` · schemaVersion=`2` · contentHash=`sha256:554b56d529a010b6225fe92fc369904fd070a80f12503c35e914643f82bcfe4b` · rulesVersion=`2026.09.25.2` · status=`done`
