# SA — Solution — web-rmms-patrol-map

> Status: **confirmed** · autoApprove ON · task `task_3fa91036` · 2026-09-30T14:20:00.000Z  
> **changeScope=`edit_page`** · packKind=`map` · **cấm** ERP.* · **cấm** Map.Api · **cấm** invent `PatrolMapController` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** public OSRM/Overpass.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần — chainage · bake tim · check-in sheet |
| Role | `sa` |
| packKind | `map` |
| changeScope | `edit_page` |
| formPattern | Mobile Map / full · phone ≤430 · check-in peer sheet PM-10 · N/A ERP Modal Kind B |
| domain | **Patrol** (`patrol`) · cite **Gis** (tiles · chainage · bake) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `/ban-do-tuan` · mfeStdRoute `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** NgheAnPatrolGpsCatalog «Km 0+000 Nghi Lộc» trên ca thật |

## 0. Delta vs baseline (edit_page)

| Keep (baseline new_page) | New / change (this task) |
|--------------------------|--------------------------|
| PM-00…08 chrome · tiles · sessions next-card · me-dot · basemap/legend | PM-09 Ghim+chainage · PM-10 check-in sheet |
| GET sessions · GET gis/tiles | **GET gis/chainage** (new Gis) · POST check-in + `chainageKm`/`chainageLabel` · bake track overlay |
| **Prior P1 ban** POST check-in/tracks từ map | **Lift for PM-10** — POST check-in + chainage* + GPS raw · tracks POST vẫn **out** |
| Overlay empty / no next-pin | Track = bake centerline `routeCode` cut km · color **`#0A84FF`** · **cấm** màu theo tên |
| DOMAIN-MAP row sessions+tiles | Extend: chainage · check-in fields · bake cite |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-patrol-map` → **Patrol** / `patrol` · cite Gis |
| Rationale | Sessions + check-ins = Patrol · tiles/chainage/bake = Gis — **không** domain Map mới |
| API folder | Reuse `PatrolSessionsController` / check-ins · **extend** Gis (`GisMapController` + `GisRouteBakeService`) · Mobile.Bff proxy |
| **Cấm** | invent `PatrolMapController` · `api/v1/patrol-map` · Map.Api · linm_maps copy · ERP.* · web-bff client từ Mobile MFE · browser project-osrm / Overpass |

**DOMAIN-MAP row (apply / replace prior):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-patrol-map` | Patrol | `patrol` · Live GET sessions + check-ins GET/POST(+chainage*) · cite Gis tiles + **GET gis/chainage** + bake `GisRouteGeoms` · MFE Mobile `/web-rmms-patrol-map` · **cấm** invent PatrolMapController · **cấm** Map.Api · **cấm** POST tracks from map |

→ resolves prior DOMAIN note · extends for chainage/bake.

## 2. FormMode ↔ API

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| PM-00…08 baseline | chrome · map · basemap · legend · next-card · me | GET sessions · GET tiles · Geolocation | — | keep |
| PM-09 pinHere | Button Ghim | Geolocation → **GET gis/chainage?lat&lng&route** | fill chainage* editable | gap>2km → null · user nhập |
| PM-09 chainageKm | Number | chainage GET / user | → POST body | nullable |
| PM-09 chainageLabel | Text | chainage GET / user | → POST body · `fetchLatestKm` | format `QL.n - Km X + Ym` |
| PM-09 planPointLabel | Text | session plan | POST | **≠** km / chainageLabel |
| PM-09 gpsRaw | Number RO | Geolocation | POST lat/lng raw | persist · **cấm** fake · snap≠overwrite pin |
| PM-10 check-in sheet | peer sheet | POST check-ins | yes | GPS raw + chainage* + planPointLabel |
| trackLine | MapLine `#0A84FF` | bake read by routeCode + km cut | — | empty if no bake |
| streets/search | snap name | GET gis/streets/search (MapService BFF) | — | **echo km client only** · **cấm** dùng để tính lý trình |
| Auth | staff JWT | shell | guest → login | |

### Live / delta endpoints

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/patrol/sessions` | PatrolSessionsController | **Live** reuse |
| API-02 | GET | `mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | GisTilesController → MapService | **Live** reuse |
| API-03 | GET | `mobile-bff/api/v1/patrol/sessions/{id}/check-ins` (peer path Live) | Patrol check-ins | **Live** · bind `chainageLabel` → fetchLatestKm |
| API-04 | POST | `mobile-bff/api/v1/patrol/sessions/{id}/check-ins` | CreatePatrolCheckInRequest + **chainage*** | **Enhance** |
| API-05 | GET | `mobile-bff/api/v1/gis/chainage?lat&lng&route` | **NEW** GisMapController → KM_POST + bake + `rmms_user_route_segments` | **New** |
| API-06 | GET | `mobile-bff/api/v1/gis/streets/search` | GisTilesController → MapService | **Live** · name only |
| API-07 | GET | Gis bake/geojson|routes (existing Gis surfaces) | `GisRouteGeoms` / OverlayBakedRoutes | **Live** reuse · empty ok |

### API-05: GET /api/v1/gis/chainage

| | |
|--|--|
| Purpose | Gợi ý lý trình từ pin GPS trên tuyến |
| Permission | JWT staff · Admin/MANAGER **no** segment clip |
| Tenant | X-Company-Id (existing Patrol/Gis) |
| Request | query: `lat:double` · `lng:double` · `route:string` (routeCode) |
| Response | `chainageKm:number|null` · `chainageLabel:string|null` · `gapM:number` · null pair when gap>2km |
| Errors | 401 · 404 route · 503 bake/KM_POST miss → toast · user nhập tay |
| Form surfaces | PM-09 Ghim fill |
| Field map | UI `chainageKm`→`chainageKm` · `chainageLabel`→`chainageLabel` |
| Context | `docs/context/features/web-rmms-patrol-map.md` § Delta |
| Demo | **N/A** |
| data-import | none (GPS + KM_POST assets) |
| Migration | none on this endpoint · uses existing KM_POST / bake / segments |
| BFF | **Forward RMMS ApiBase** — **không** MapService · **không** block như tiles/streets |

### API-04 enhance: POST check-ins + chainage*

| | |
|--|--|
| Purpose | Lưu điểm check-in kèm lý trình (scalar) |
| Request add | `chainageKm:double?` · `chainageLabel:string?` · keep `planPointLabel` · `lat`/`lng` GPS raw |
| Response | PatrolCheckInDto + chainage* |
| Persist | `rmms_patrol_check_ins` columns — **cấm** parent `*Json` bag |
| Field map | `planPointLabel`≠km · `fetchLatestKm`←`chainageLabel` |
| Migration | **`Schema_PatrolCheckInChainage`** (Dev Step 4b) |

### Overlay / track

| Layer | Decision |
|-------|----------|
| Track polyline | Bake centerline by `routeCode` · cut km · style **`#0A84FF`** (Design closed UNCLEAR-TRACK-STYLE) · **cấm** màu theo userName |
| Next-pin | vẫn omit nếu DTO sessions không có lat/lng · next-card = Route text |
| Me-dot / pin | Geolocation · deny → disable Ghim/locate · map vẫn mở |
| OSRM | **BE only** `GisRouteBakeService` → `127.0.0.1:5000/route` · **cấm** project-osrm.org · **cấm** Overpass browser |

## 3. BFF vs API — UNCLEAR-CHAINAGE-BFF **resolved**

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | Sole FE entry |
| GisTilesController | **chỉ** `gis/tiles/*` + `gis/streets/search` → MapService |
| MobileApiProxy | Forward `gis/chainage` (+ patrol/*) → **RMMS ApiBase** · **cấm** nhét chainage vào MapService path |
| RMMS.Service.Api Gis | Owner `GET gis/chainage` · bake · segments clip |
| RMMS Patrol | Owner sessions + check-ins (+ Schema chainage columns) |
| web-bff | cite only · **not** Mobile client base |

**Fail:** 503/network → toast + retry · map trống vẫn mở · chainage null → user nhập · **cấm** `window.alert` · **cấm** mock Nghi Lộc SSOT.

## 4. Entity / migration — UNCLEAR-SCHEMA-PAIR **resolved**

| Item | Decision |
|------|----------|
| Table | `rmms_patrol_check_ins` (existing) |
| Columns | `ChainageKm` `double precision NULL` · `ChainageLabel` `varchar(128) NULL` |
| Migration name | **`Schema_PatrolCheckInChainage`** |
| DTO | `PatrolCheckInDto` + `CreatePatrolCheckInRequest` add pair · keep `PlanPointLabel` separate |
| Seed | none |
| EF run | **skip at SA** · Dev Step 4b only |
| New entity / controller invent | **none** (extend GisMapController + Patrol check-in DTO) |
| Persist gate | scalar columns only · **cấm** `*ChainageJson` |

## 5. Implement gates (autoApprove ON)

| Gate | Decision | Slash |
|------|----------|-------|
| `sa_tz_gate` | **approve** — `CreatedAt` UTC persist · display local via form-datetime | `/review-timezone-implement` |
| `sa_xco_gate` | **tenant_keep** — reuse company JWT + `rmms_user_route_segments` clip · Admin/MANAGER no clip · **cấm** invent cross-company API | `/implement-view-cross-company` |
| `sa_shared_table` | **N/A** — no new shared table | `/implement-shared-table` |

## 6. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| PM-00…10 | Map owns · phone 430 · Android 1-1 cite · **cấm** sửa iOS/Android native |
| Control = controlHint | Ghim→chainage · Number/Text editable · planPointLabel≠km · fetchLatestKm←chainageLabel |
| Track | MapLine `#0A84FF` · bake · R1–R11 `/agent-dev-oms-map` · MFE clip tiles · **cấm** OSM.org |
| Labels | `useFormOptions` / `patrolMap.*` · **cấm** hardcode VN |
| DES-GRID / LinErpListFilterBar | **N/A** phone Map |
| Out | POST tracks · public OSRM · Map.Api · ERP.* · demo Nghi Lộc · name-based track color |

## 7. FormType pack (map)

| Surface | Pattern | Filter bar | Notes |
|---------|---------|------------|-------|
| S-MAP | Mobile Map / full | N/A | PM-00…09 |
| S-SHEET | check-in peer sheet | N/A | PM-10 · POST check-in |
| Report/export/chart | N/A | — | — |

## 8. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-CHAINAGE-BFF | **resolved** — BFF proxy → RMMS Api · not MapService |
| UNCLEAR-SCHEMA-PAIR | **resolved** — `Schema_PatrolCheckInChainage` · `ChainageKm`/`ChainageLabel` |
| UNCLEAR-TRACK-STYLE | **closed Design** `#0A84FF` |
| (baseline) DOMAIN / OVERLAY / STD-PORT | keep resolved |

## 9. Handoff → team_lead

| Field | Value |
|-------|-------|
| next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |
| FormMode↔API | GET sessions/tiles/check-ins · GET gis/chainage · POST check-in+chainage* · streets echo · bake read |
| entity/migration | `Schema_PatrolCheckInChainage` · Step 4b Dev |
| TZ/XCO/SHARE | approve / tenant_keep / N/A |
| T-* hint | T-BE Schema+chainage endpoint · T-BFF proxy exception · T-UI Ghim/chainage/sheet · T-FE fetchLatestKm · T-MAP bake track `#0A84FF` |
| devSlash | `/agent-dev` · mapGate `/agent-dev-oms-map` |
| e2eQa | ON queued — **chỉ** `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` · `solution_confirm=approve` · `writtenAt=2026-09-30T14:20:00.000Z` · `taskId=task_3fa91036` · `changeScope=edit_page` · `packKind=map`
