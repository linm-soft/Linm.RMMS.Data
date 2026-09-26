# Team lead — Task — web-rmms-vis-capture

> Status: **confirmed** · writtenAt `2026-09-26T04:40:00.000Z` · task `task_45fa6cfc`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-vis-capture` |
| Title | Nhận diện sự cố |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile full VIS · phone ≤430 · Android 1-1 `#sc-vis-capture` · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-vis-capture` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| nativeRouteCite | SCREENS `/incident/vis` · Android `#sc-vis-capture` · DES-MOB-VIS-CAPTURE · peer INC-L · CAP |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **AiVision** + **Incident** (+ Patrol cite) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone full |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| zones | VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · (peer INC-L · CAP) · GPS-DENY · acc>30 · nophoto · nosession · error |
| cite | T-W4-04 · VIS AC-VIS-01..10 · Grid AC N/A |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL std chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-vis-capture` |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| productRoute | `/incident/vis` |
| note | Full screen VIS only · entry banner peer INC-L · **cấm** invent VisCapture controller / web-bff path · autoApprove=ON |

## Decisions (rolled from prior)

- TITLE-01: copy key «Nhận diện sự cố» · **cấm** peer «Nhận diện mặt đường» primary
- PACK-01: packKind=`list` · surface full `#sc-vis-capture`
- DUAL-01: section «Ảnh hiện trường» + Skip dual (Design PASS)
- Flow: PhotoRow + GPS → `POST ai-vision/detect` → result rows → **Gắn sự cố** | **Bỏ qua**
- DEC-DETECT-HOST: Vision `:5311` via BFF/API ServiceEndpoints · **cấm** on-device · **cấm** MFE `:5311` · **cấm** `:5301`
- DEC-DETECT-DTO: `DetectAiVisionRequest` ImageFileId|Url · Lat* · Lng* · AccuracyM* · Engine=P1 · resp Id→DetectionId
- DEC-PGC-BE-01: `CreateIncidentRequest` DetectionId · HasGps=true · Title* · RouteName* · IncidentType* · Status · RequestedAt · **no Lat**
- HARD: GPS deny → block Detect/Attach/geo · Acc>30 → **không** POST detect · Skip=dismiss only · live only · useFormOptions · **cấm** fake coords
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** invent `api/v1/web-rmms-vis-capture`
- SA: DOMAIN-MAP-VIS · DETECT-HOST · PGC-BE-01 resolved · Step 4b **none**
- OUT: Me*/feedback/cam-view · cam-patrol/det-hitl · journal B–E · invent slug · native iOS/Android edits
- UNCLEAR-SESS → Dev/QA empty sessions toast · GPS-only · **cấm** itemsOrDemo

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Upload | `POST ai-vision/uploads/init` · `PUT …/uploads/{id}/object` · `POST …/uploads/complete` → ImageUrl |
| Detect | `POST ai-vision/detect` · Lat/Lng/AccuracyM · Engine=P1 · **chỉ** GPS + Acc≤30 |
| Detection RO | `GET ai-vision/detections/{id}` (optional reload) |
| Session stamp | `GET patrol/sessions` (optional RO · empty→toast · **cấm** itemsOrDemo) |
| Attach | `POST incident/incidents` · DetectionId · HasGps=true · Title/Type từ DefectClass · Route từ session · **no Lat** |
| Skip | dismiss only · no API |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-vis-capture` · product `/incident/vis` · VIS shell Android 1-1 | FE | — | pending | Route registered · deep-link mfeStdUrl · phone ≤430 · no ERP.* · no invent VisCapture path |
| T-02 | PhotoRow + GPS lock · rowLoc/rowAcc · GPS deny gate | FE | T-01 | pending | uploads init/PUT/complete · navigator.geolocation · deny→block Detect/Attach/geo · Acc display · **cấm** fake coords · AC-VIS-01..03 |
| T-03 | Detect button/auto · POST detect Engine=P1 · Acc≤30 gate | FE | T-02 | pending | Acc>30 block detect · live BFF only · **cấm** on-device · fail toast · AC-VIS-04..05 |
| T-04 | Result rows rowClass/rowSev · optional GET detections/{id} | FE | T-03 | pending | DefectClass/Severity bind · **cấm** fake class · Badge sev · AC-VIS-06..07 |
| T-05 | btnAttach CreateIncident · HasGps+DetectionId · btnSkip dismiss | FE | T-04 | pending | POST HasGps=true · **no Lat** · Title/Type từ DefectClass · Route session · Skip=dismiss · AC-VIS-08..10 |
| T-06 | Session stamp · useFormOptions · prototype parity · empty sessions toast | FE | T-01…T-05 | pending | GET sessions live · UNCLEAR-SESS toast · labels no hardcode VN · DUAL-01 section+Skip · peer INC-L banner entry |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · DOMAIN-MAP row applied |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-06 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev · modes ?gps=deny · ?acc=45 · ?nophoto=1 · ?nosession=1 · ?error=1 |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-VIS-01..03 PhotoRow + GPS + deny gate | T-02 |
| AC-VIS-04..05 Detect Acc≤30 · live Engine=P1 | T-03 |
| AC-VIS-06..07 Result DefectClass/Severity | T-04 |
| AC-VIS-08..10 Attach HasGps+DetectionId · Skip dismiss | T-05 |
| TITLE-01 «Nhận diện sự cố» · useFormOptions | T-01 · T-06 |
| DUAL-01 section «Ảnh hiện trường» + Skip | T-06 |
| Sessions live · empty toast · cấm itemsOrDemo | T-06 |
| Mobile.Bff only · no invent path · Step 4b skip · cấm on-device | T-01 · T-03 · T-BE |
| Android 1-1 · cấm native code change | T-01 · T-06 |
| Grid AC-GRID-01..05 | N/A phone full |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| photos | PhotoRow | T-02 |
| rowLoc | ListRow RO | T-02 · T-06 |
| rowAcc | ListRow RO | T-02 · T-03 |
| detect | Button/auto | T-03 |
| rowClass | ListRow RO | T-04 |
| rowSev | ListRow+Badge | T-04 |
| btnAttach | Button | T-05 |
| btnSkip | Button | T-05 · T-06 |
| gpsLock | GPS | T-02 · T-03 · T-05 |

## Out of scope

- Me / feedback / cam-view
- Cam-patrol / det-hitl
- Journal / kết ca / tồn tại / tần suất (B–E)
- Invent VisCaptureController / web-bff / ERP.* / on-device detect
- Native iOS/Android code edits
- Step 4b / migration / new entity

## Prior compact cite

- data_analy: `specs/web-rmms-vis-capture/handoff/data_analy-compact.md`
- po: `specs/web-rmms-vis-capture/handoff/po-compact.md`
- design: `specs/web-rmms-vis-capture/handoff/design-compact.md`
- sa: `specs/web-rmms-vis-capture/handoff/sa-compact.md`

## Full paths

- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/task/web-rmms-vis-capture.md`
- compact: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/handoff/team_lead-compact.md`
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/be/solution-discovery.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/design.md`
- requirement: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/po/requirement.md`
- STATUS: `D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/STATUS.md`
