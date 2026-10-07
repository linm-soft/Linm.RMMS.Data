# Team lead — Task — web-rmms-patrol-map

> Status: **confirmed** · writtenAt `2026-09-30T14:30:00.000Z` · task `task_a073cb2b`  
> skillVersion: `2026.09.05.03` · packKind: `map` · formType: `map` · autoApprove: ON  
> **changeScope=`edit_page`** · **cấm** xóa baseline notes · **cấm** implement code · **cấm** e2e / yarn build / start:std · **cấm** ERP.* · **cấm** Map.Api.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần — chainage · bake track · check-in sheet |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile Map / full · phone ≤430 · check-in peer sheet PM-10 · N/A ERP Modal Kind B · DES-GRID N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| productRoute | `/patrol-map` · alias `/field/map` · product cite `/ban-do-tuan` |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` · Supervise Bản đồ |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Patrol** + cite **Gis** · **cấm ERP.*** · **cấm Map.Api** · **cấm** invent `PatrolMapController` |
| demo | N/A · **cấm** NgheAnPatrolGpsCatalog «Km 0+000 Nghi Lộc» trên ca thật · **cấm** OMS/demo-json SSOT |
| DES-GRID / LinErpListFilterBar | N/A phone Map |
| Step 4b / migration | **Dev** · `Schema_PatrolCheckInChainage` · TL **cấm** chạy |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| peerStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| real_view_parity | `v1` |
| zones | PM-00…PM-10 (keep 00–08 · delta 09/10) |
| contentHash | `sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf` |
| mapGate | `/agent-dev-oms-map` R1–R11 |
| nextSlash | `/agent-dev-oms-map` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (edit_page · keep existing URL · autoApprove=ON) |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| productRoute | `/patrol-map` · shell `/field/map` · cite `/ban-do-tuan` |
| note | URL đã có baseline · **không** invent path mới · **cấm** PatrolMapController |

## Decisions (delta + rolled)

- Keep baseline PM-00…08: chrome · tiles · sessions next-card · me-dot · basemap/legend · empty next-pin
- Delta PM-09: Ghim → GET `gis/chainage` → `chainageKm`/`chainageLabel` editable · gap>2km null · GPS raw persist · snap≠overwrite pin · `planPointLabel`≠km · `fetchLatestKm`←`chainageLabel`
- Delta PM-10: check-in peer sheet · POST check-ins + chainage* + GPS raw · dirty → **LeaveConfirmModal**
- Track: bake `routeCode` cut km · color **`#0A84FF`** · **cấm** màu theo tên
- Bake OSRM: BE only `127.0.0.1:5000` · **cấm** project-osrm · **cấm** Overpass browser · **cấm** OSM.org tiles
- BFF: tiles/streets → MapService · **gis/chainage → RMMS ApiBase** (không MapService)
- Schema: `Schema_PatrolCheckInChainage` · `ChainageKm double?` · `ChainageLabel varchar(128)?` · **cấm** `*Json` bag
- Labels: `useFormOptions()` / `patrolMap.*` · **cấm** hardcode VN · **cấm** fake GPS · **cấm** native iOS/Android edit
- FormMode↔API: API-01…07 (SA) · chainage NEW · check-in enhance · bake reuse
- packKind **map** · **cấm** Kind B list template · **cấm** `LinErpListFilterBar`

## FormMode ↔ API

| Mode / zone | APIs |
|-------------|------|
| Live / next-card | `GET patrol/sessions` (reuse) |
| Tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` (reuse) |
| Check-ins list / stamp | `GET …/check-ins` · `fetchLatestKm`←`chainageLabel` |
| Check-in save PM-10 | `POST …/check-ins` + `chainageKm`/`chainageLabel` + GPS raw + `planPointLabel` |
| Ghim / chainage PM-09 | `GET gis/chainage?lat&lng&route` (**NEW**) |
| streets/search | snap name + echo client km only · **cấm** tính lý trình |
| Track overlay | bake geojson/routes by `routeCode` · `#0A84FF` |
| BFF | Mobile.Bff `:5202` · chainage→ApiBase · **cấm** web-bff · **cấm** ERP.* |

## Tasks (form-type-task-pack §2b map)

| id | page / slice | role | deps | status | devSlash | DoD (slim) |
|----|--------------|------|------|--------|----------|------------|
| T-BE-GIS-01 | GET `gis/chainage` + BFF ApiBase proxy · enhance POST check-ins + chainage* · `Schema_PatrolCheckInChainage` Step 4b · DOMAIN-MAP extend · bake cite | Dev | — | pending | `/agent-dev` (BE) | API-05 Live · POST body scalars · migration columns · **cấm** PatrolMapController · **cấm** Map.Api · **cấm** `*Json` · OSRM local only |
| T-PERM-01 | Permission JWT staff map/check-in/chainage · Admin/MANAGER no segment clip | Dev | T-BE-GIS-01 | pending | `/agent-dev` | codes on GET chainage + POST check-in · X-Company-Id keep |
| T-UI-MAP-01 | Full-page map delta PM-09 · Ghim→chainage fill · track bake `#0A84FF` · tiles/basemap · R1–R11 · attachVnClipBasemap | Dev | T-BE-GIS-01 | pending | **`/agent-dev-oms-map`** | Live Leaflet · **cấm** OSM.org · phone ≤430 · gap>2km null · snap≠overwrite · no name color · no demo Nghi Lộc · mapGate PASS |
| T-UI-MAP-FORM-01 | PM-10 check-in peer sheet · editable chainage* · planPointLabel · GPS RO · submit POST · dirty → LeaveConfirmModal | Dev | T-BE-GIS-01 · T-UI-MAP-01 | pending | **`/agent-dev-oms-map`** | LeaveConfirmModal · **cấm** `window.alert`/`confirm` · planPointLabel≠km · fetchLatestKm stamp |
| T-UI-UX-01 | UI-Ux constitution + mobile map chrome · labels `patrolMap.*` · Android 1-1 cite · **cấm** native edit | Dev | T-UI-MAP-01 | pending | `/agent-dev-oms-map` | GAP-DEV-UX-01 · useFormOptions · no hardcode VN |
| T-UI-RESP-01 | Phone map ≤430 · D/T/M smoke (no desktop Kind B) | Dev | T-UI-MAP-01 | pending | `/dev-web-responsive` + `/dev-ui-review` | layout fill · no grey under map (R4b) |
| T-QA-MAP-01 | Scenarios Ghim→chainage→POST · track color · R1–R11 · leave Modal · no demo | QA | T-UI-MAP-* · T-BE-GIS-01 | pending | `/agent-qa*` | **chỉ** QA chạy e2e · cite T-QA-FORM-01 on sheet submit |

### Assignee

- Impl primary: **`/agent-dev-oms-map`** (T-UI-MAP-*) · BE slice `/agent-dev` (T-BE-GIS-01 · Step 4b)
- MFE cwd: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- BE cwd: `D:/AI-QLBD/Linm.RMMS.WebService` · BFF `Linm.RMMS.Mobile.Bff`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

### ssot.reuse / implement.wire (HOW)

| Area | Reuse | Wire | State |
|------|-------|------|-------|
| Basemap / clip | GIS common `attachVnClipBasemap` · MVT tiles | BFF tiles → MapService | basemap chip |
| Chainage | KM_POST + bake + `rmms_user_route_segments` (BE) | Ghim → GET chainage → form fields | editable override |
| Check-in | PatrolSessions check-ins | sheet submit → POST + chainage* + GPS raw | dirty guard Modal |
| Track | `GisRouteGeoms` / OverlayBakedRoutes | overlay MapLine `#0A84FF` | empty ok |
| Labels | `useFormOptions` / `patrolMap.*` | no KIND_LABEL hardcode | — |

**Cấm Dev:** clone linm_maps · public OSRM · invent controller · ERP.* · native repo edit · Kind B list/grid template.

## Acceptance map (PO AC-MAP → T-*)

| AC / DoD | Owner |
|----------|-------|
| AC-MAP-01…08 · mapGate R1–R11 | T-UI-MAP-01 · T-QA-MAP-01 |
| Ghim → GET chainage → editable | T-BE-GIS-01 · T-UI-MAP-01 · T-UI-MAP-FORM-01 |
| POST + GPS raw + chainage* | T-BE-GIS-01 · T-UI-MAP-FORM-01 |
| fetchLatestKm ← chainageLabel | T-UI-MAP-01 · T-UI-MAP-FORM-01 |
| bake track `#0A84FF` · no name color | T-UI-MAP-01 |
| planPointLabel ≠ km | T-UI-MAP-FORM-01 |
| no demo Nghi Lộc · no OSM.org | T-UI-MAP-01 · T-QA-MAP-01 |
| Schema_* · Step 4b | T-BE-GIS-01 |
| LeaveConfirmModal | T-UI-MAP-FORM-01 |
| Mobile.Bff · no ERP.* | T-BE-GIS-01 · T-UI-MAP-01 |

## Out of scope

- Kind B list / DES-GRID / LinErpListFilterBar / report
- Invent PatrolMapController / Map.Api / linm_maps copy
- Public OSRM / Overpass browser / OSM.org tiles
- Tracks POST from map · next-pin invent
- Me* journal / kết ca (mobile-b…e) beyond sheet
- iOS/Android native code edits
- TL/Dev run e2e / yarn build / start:std (QA only)

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-patrol-map-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none) · CHAINAGE-BFF · SCHEMA-PAIR · TRACK-STYLE resolved SA/Design
