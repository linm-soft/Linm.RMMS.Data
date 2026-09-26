# Team lead — Task — web-rmms-patrol-map

> Status: **confirmed** · writtenAt `2026-09-26T04:00:00.000Z` · task `task_c952b382`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-patrol-map` |
| Title | Bản đồ tuần (Patrol Map) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile Map / full · phone ≤430 · Android 1-1 · N/A ERP Modal/Slideout · no master form · no POST check-in/tracks P1 |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| productRoute | `/patrol-map` · alias `/field/map` (shell) |
| nativeRouteCite | SCREENS `/patrol-map` · `/field/map` · Supervise Bản đồ |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Patrol** + cite Gis tiles · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** OMS/demo-json SSOT · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone Map |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html` |
| zones | PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08 |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-patrol-map` |
| mfeStdUrl | `http://localhost:9301/web-rmms-patrol-map` |
| productRoute | `/patrol-map` · shell alias `/field/map` |
| note | 1 page Mobile Map · entry Home/Field/Supervise · **cấm** invent PatrolMapController · autoApprove=ON |

## Decisions (rolled from prior)

- PM-00…08: chrome + mapHost + basemap×2 + locate + legend isolate + next-card Route + GPS me-dot + toast check-in
- Overlay P1: **empty tracks** · **no next-pin** (DTO no lat/lng) · next-card = Route text only · **cấm** invent tracks/OMS
- Live: `GET patrol/sessions` (Đang tuần) · `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf`
- Check-in: **toast only** P1 · sheet/POST = peer OUT
- GPS: `navigator.geolocation` · deny → hide me / disable locate · map vẫn mở · **cấm** fake
- Labels: `useFormOptions()` / `patrolMap.*` · **cấm** hardcode VN · chrome copy `/gis/live`
- REMOVED: Fit / Đường / Phố · me* · journal/kết ca · check-in sheet · Field doors deep · invent PatrolMapController
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** ERP.*
- Copy: Android 1-1 · **cấm** sửa iOS/Android native
- SA: DOMAIN-MAP `web-rmms-patrol-map` → Patrol · OVERLAY-GEOM · STD-PORT :9301 **resolved** · Step 4b **none**

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Live session / next-card | `GET patrol/sessions` (Đang tuần → Route text) |
| Basemap tiles | `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| Check-in | client toast only · **không** POST P1 |
| Locate / me-dot | `navigator.geolocation` client · **không** API write |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-patrol-map` · PM chrome nav/title/checkin | FE | — | pending | Route registered · deep-link mfeStdUrl · product `/patrol-map` · no ERP.* · no invent path |
| T-02 | mapHost + MVT tiles + basemap Tiêu chuẩn\|Vệ tinh | FE | T-01 | pending | GET gis/tiles · no OSM.org · switch basemap · phone ≤430 |
| T-03 | Locate + GPS me-dot + locate popup | FE | T-02 | pending | geolocation only · deny hide me/disable locate · map opens · **cấm** fake |
| T-04 | Legend×4 isolate + next-card Route · overlay empty | FE | T-02 | pending | GET sessions Đang tuần · Route text · empty tracks · **no** next-pin · **cấm** invent geom |
| T-05 | Toast check-in · BFF wire · labels · Android 1-1 parity | FE | T-01…T-04 | pending | toast only P1 · Mobile.Bff · `patrolMap.*` · prototype PM zones · **cấm** native edit |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) |
| T-QA | cite scenarios · Maestro/e2e slug | QA | T-01…T-05 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| Map + Live sessions + tiles | T-02 · T-04 |
| Basemap Tiêu chuẩn\|Vệ tinh · locate | T-02 · T-03 |
| Legend isolate · next-card Route | T-04 |
| GPS real · deny hide me · map opens | T-03 |
| Toast check-in only P1 · no POST | T-05 |
| Overlay empty tracks · no invent pin | T-04 |
| Labels useFormOptions · no hardcode VN | T-05 |
| Android 1-1 · cấm native code change | T-05 |
| Mobile.Bff only · no invent controller · Step 4b skip | T-01 · T-05 · T-BE |
| Chrome copy /gis/live · no Fit/Đường/Phố | T-01 · T-05 |

## Out of scope

- Me* · journal / kết ca / tồn tại / tần suất (mobile-b…e)
- Check-in sheet / POST · tracks POST
- Field doors deep · Fit / Đường / Phố
- Invent PatrolMapController / OMS demo SSOT
- New BE controller · migration · Step 4b
- ERP.* namespaces · web-bff client
- iOS/Android native edits

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-patrol-map-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking) · UNCLEAR-DOMAIN-MAP-PATROL-MAP · OVERLAY-GEOM · STD-PORT — resolved SA
