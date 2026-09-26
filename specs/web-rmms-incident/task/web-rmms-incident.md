# Team lead — Task — web-rmms-incident

> Status: **confirmed** · writtenAt `2026-09-26T04:25:00.000Z` · task `task_7553d7f3`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-incident` |
| Title | Sự cố — list / tạo / chi tiết (INC-L · INC-N · INC-D) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile full INC-L/N/D · phone ≤430 · Android 1-1 · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` (nested mount) |
| nativeRouteCite | SCREENS incident-list / create / detail · peer vis/chat/estimate |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Incident** + Patrol + Integration + AiVision(+files) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone · Search+Chip |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) · Gap Lat deferred |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| zones | INC-L · INC-N · INC-D · (peer INC-V · INC-C · INC-E) · GPS-DENY · empty · offline · toast |
| cite | T-W4-01 / T-W4-02 / T-W4-03 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-incident` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident` |
| productRoute | `/incident` (list) · `/incident/new` (create) · `/incident/:id` (detail) |
| note | Nested mount INC-L/N/D · **cấm** invent IncidentHub / web-bff path · autoApprove=ON |

## Decisions (rolled from prior)

- INC-L: Search+Chip status/severity · CardList · FAB → `/incident/new` · live `GET incident/incidents`
- INC-N: asset LookupGrid · kind Segment · checklist local→Description · PhotoRow/detect · session stamp · GPS lock · severity · create · draft offline peer
- INC-D: detail bind · close `POST …/close` Note optional
- DEC-CREATE-01: `CreateIncidentRequest` · **HasGps=true** · **no Lat col** (PGC-BE-01) · MediaIds guids max10 · DetectionId opt
- HARD: GPS deny → block Create/Detect/geo · Acc≤30 detect · sessions live-only · **cấm** fake coords · **cấm** itemsOrDemo
- Labels: `useFormOptions()` · **cấm** hardcode VN form
- Nested: std `/web-rmms-incident` + product `/incident|/new|/:id` (UNCLEAR-STD-NEST resolved Design)
- Peer INC-V/C/E: nav-only · **không** primary WO CRUD
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** invent IncidentHub controller/path
- SA: DOMAIN-MAP-INC + PGC-BE-01 resolved · Step 4b **none** · Lat MIG deferred
- OUT: Me/feedback/cam-view · journal B–E · invent slug · primary WO CRUD · native iOS/Android edits
- UNCLEAR-SESS → Dev/QA empty sessions toast

## FormMode ↔ API

| Mode | APIs |
|------|------|
| List | `GET incident/incidents` · query search/status/severity (client Chip OK) |
| Create | `POST incident/incidents` · HasGps=true · MediaIds · IncidentType · Title · RouteName · Severity · Description (checklist) · DetectionId opt |
| Detail | `GET incident/incidents/{id}` |
| Close | `POST incident/incidents/{id}/close` · Note optional |
| Session stamp | `GET patrol/sessions` (live Đang tuần · empty→toast · **cấm** itemsOrDemo) |
| Asset types | `GET integration/asset-types` |
| Photos | `POST` uploads / `files/*` (AiVision+files) |
| Detect | `POST ai-vision/detect` · GPS Acc≤30 · deny→block |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-incident` · nested `/incident` `/new` `/:id` · INC-L shell | FE | — | pending | Route registered · deep-link mfeStdUrl · nested mount · no ERP.* · no invent hub path |
| T-02 | INC-L list · Search+Chip · CardList · FAB · empty/offline | FE | T-01 | pending | GET incidents live · card Title/Type/Code/Route/Km/Status/**HasGps** · **no Lat** · FAB→new · useFormOptions · AC-GRID-01..05 |
| T-03 | INC-N create · asset · kind · checklist · photos · session · GPS · severity · draft | FE | T-01 | pending | LookupGrid asset-types · Segment kind · checklist→Description · MediaIds≤10 · sessions live · GPS deny block · draft peer offline · AC-CREATE-01..07 |
| T-04 | INC-N detect + POST create · HasGps · DetectionId opt | FE | T-03 | pending | detect Acc≤30 · POST HasGps=true · **no Lat** · fail toast · **cấm** fake coords |
| T-05 | INC-D detail + close · peer nav INC-V/C/E | FE | T-01 | pending | GET{id} bind · POST close Note opt · peer nav-only · AC-DETAIL-01..03 |
| T-06 | Wire Mobile.Bff · labels · Android 1-1 parity · empty sessions toast | FE | T-01…T-05 | pending | All live via BFF · prototype parity · UNCLEAR-SESS toast · **cấm** itemsOrDemo |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · Lat MIG deferred |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-06 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-GRID-01..05 list Search+Chip+Card+FAB+HasGps | T-02 |
| AC-CREATE-01..07 create GPS/session/checklist/photos/detect/HasGps | T-03 · T-04 |
| AC-DETAIL-01..03 detail + close | T-05 |
| Nested `/new` `/:id` mount | T-01 |
| GPS deny block Create/Detect | T-03 · T-04 |
| Sessions live · empty toast · cấm itemsOrDemo | T-03 · T-06 |
| useFormOptions · no hardcode VN | T-02…T-06 |
| Mobile.Bff only · no invent path · Step 4b skip | T-01 · T-06 · T-BE |
| Peer INC-V/C/E nav-only · no WO CRUD | T-05 |
| Android 1-1 · cấm native code change | T-06 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| search/filters | Search+Chip | T-02 |
| list.card | CardList | T-02 |
| fab | FAB | T-02 |
| assetPick | LookupGrid | T-03 |
| kind | Segment | T-03 |
| checklist | CheckboxGroup | T-03 |
| photos/detect | PhotoRow/Button | T-03 · T-04 |
| sessionStamp | Text RO | T-03 · T-06 |
| gpsLock | GPS | T-03 · T-04 |
| severity/create/draft | Select/Button | T-03 · T-04 |
| detail.close | Button | T-05 |

## Out of scope

- Me / feedback / cam-view
- Journal / kết ca / tồn tại / tần suất (B–E)
- Invent IncidentHub / slug controller / web-bff
- New BE controller · migration · Step 4b · Lat column MIG
- ERP.* namespaces
- Primary WO CRUD · peer INC-V/C/E as full screens in this pack
- iOS/Android native edits
- Fake coords / itemsOrDemo sessions

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-incident-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) DOMAIN-MAP-INC · PGC-BE-01 · CHK-01 · PEER-VIS · STD-NEST — resolved prior
- UNCLEAR-SESS → Dev/QA empty sessions toast · **cấm** itemsOrDemo
