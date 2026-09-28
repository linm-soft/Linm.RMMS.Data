# Team lead — Task — web-rmms-vis-capture

> Status: **confirmed** · writtenAt `2026-09-27T11:35:00.000Z` · task `task_9ed74d76`  
> skillVersion: `2026.09.05.03` · packKind: `list` · changeScope: `edit_page` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-vis-capture` |
| Title | Nhận diện sự cố |
| Role | `team_lead` |
| changeScope | `edit_page` · **cấm** typed `new_page` |
| formPattern | Mobile full VIS · phone ≤430 · `#sc-vis-capture` · N/A ERP Modal/Slideout · DES-GRID N/A |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/chup-hien-truong` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| productRoute | `/incident/vis` |
| nativeRouteCite | SCREENS `/incident/vis` · `#sc-vis-capture` · DES-MOB-VIS-CAPTURE · peer INC-L · CAP · SSOT=`VisCapturePage` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **AiVision** + **Incident** (+ Patrol cite) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone full |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| editCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B · VisCapturePage |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-vis-capture/ui/prototype/index.html` |
| zones | VIS · #sc-vis-capture · DES-MOB-VIS-CAPTURE · #validationBanner · (peer INC-L · CAP) · GPS-DENY · acc>30 · nophoto · nosession · error · banner |
| cite | VIS AC-VIS-01..12 · Grid AC N/A · Pattern B gates |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · URL std đã live · **không** URL mới) |
| mfeStdRoute | `/chup-hien-truong` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| productRoute | `/incident/vis` |
| note | ROUTE-01 closed · **cấm** `/web-rmms-vis-capture` path · **cấm** invent VisCapture controller / web-bff · autoApprove=ON |

## Decisions (rolled + Delta edit_page)

- changeScope: **edit_page** · giữ Live API / DOMAIN-MAP / DEC-* · **cấm** typed new_page
- TITLE-01 / PACK-01 / DUAL-01: closed prior · giữ copy «Nhận diện sự cố» · section «Ảnh hiện trường» + Skip
- ROUTE-01: std `/chup-hien-truong` · **cấm** `/web-rmms-vis-capture`
- **Delta Pattern B (SUBMIT-VALIDATE):** Detect/Attach **idle-on** · `disabled` **chỉ** khi `detecting`/`attaching` · `#validationBanner` on click (string[]) · Acc>30 **chặn POST trong handler** (không disable idle)
- Align: `/align-mobile-to-mfe` · SSOT=`VisCapturePage` · **cấm** tab/route/icon mới · **cấm** mở android/ios proto
- DEC-DETECT-HOST: Vision `:5311` via BFF/API · **cấm** on-device · **cấm** MFE `:5311`/`:5301`
- DEC-PGC-BE-01: `CreateIncident` DetectionId+HasGps · **no Lat** · Skip=dismiss
- HARD: GPS deny→banner on click · Acc>30 no POST detect · live only · useFormOptions · **cấm** fake coords
- BFF: Mobile.Bff only · users forward if missing · **cấm** web-bff · **cấm** invent path
- SA: DOMAIN-MAP-VIS · DETECT-HOST · PGC-BE-01 resolved · Step 4b **none** · T-BE=N/A invent
- OUT: Me*/feedback/cam-view · invent slug · on-device · Excel · native edits · new_page
- Open: UNCLEAR-VALIDATE-B · UNCLEAR-ALIGN-01 · UNCLEAR-SESS → Dev/QA

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Upload | `POST ai-vision/uploads/init` · `PUT …/uploads/{id}/object` · `POST …/uploads/complete` → ImageUrl |
| Detect | `POST ai-vision/detect` · Lat/Lng/AccuracyM · Engine=P1 · Pattern B: idle-on · Acc>30 block **in handler** |
| Detection RO | `GET ai-vision/detections/{id}` (optional reload) |
| Session stamp | `GET patrol/sessions` (optional RO · empty→toast · **cấm** itemsOrDemo) |
| Attach | `POST incident/incidents` · DetectionId · HasGps=true · Title/Type từ DefectClass · Route từ session · **no Lat** · Pattern B idle-on |
| Skip | dismiss only · no API · disabled chỉ attaching |
| BFF peer | GET `integration/users` (forward if missing) · `road-routes/search` (có) · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Keep route `/chup-hien-truong` · VisCapturePage shell · **cấm** slug mới | FE | — | pending | Route keep · phone ≤430 · no ERP.* · no invent VisCapture path · ROUTE-01 |
| T-02 | PhotoRow + GPS · rowLoc/rowAcc · GPS deny → banner on click | FE | T-01 | pending | uploads* · geolocation · deny→banner (Pattern B) · Acc display · **cấm** fake · AC-VIS-01..03 |
| T-03 | Detect Pattern B · idle-on · disabled chỉ detecting · Acc>30 handler block | FE | T-02 | pending | bỏ `disabled={!canDetect}` · banner on click · Acc>30 no POST · Engine=P1 live · AC-VIS-04..05 · UNCLEAR-VALIDATE-B |
| T-04 | Result rows rowClass/rowSev · optional GET detections/{id} | FE | T-03 | pending | DefectClass/Severity bind · **cấm** fake class · Badge sev · AC-VIS-06..07 |
| T-05 | Attach Pattern B · idle-on · disabled chỉ attaching · Skip dismiss | FE | T-04 | pending | bỏ multi-gate disable · banner on click · POST HasGps · **no Lat** · Skip=dismiss · AC-VIS-08..10 |
| T-06 | #validationBanner · useFormOptions · session toast · align-mobile-to-mfe | FE | T-01…T-05 | pending | banner string[] · UNCLEAR-SESS toast · SSOT VisCapturePage align · **cấm** tab/icon mới · AC-VIS-11..12 · UNCLEAR-ALIGN-01 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration · users forward cite only |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-06 | pending | **chỉ** `/agent-qa*` · modes ?gps=deny · ?acc=45 · ?nophoto=1 · ?nosession=1 · ?error=1 · ?banner=1 |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA
- Align cuối: Dev `/align-mobile-to-mfe` · SSOT=`VisCapturePage`

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-VIS-01..03 PhotoRow + GPS + deny→banner | T-02 |
| AC-VIS-04..05 Detect Pattern B · Acc>30 handler · Engine=P1 | T-03 |
| AC-VIS-06..07 Result DefectClass/Severity | T-04 |
| AC-VIS-08..10 Attach Pattern B · HasGps+DetectionId · Skip | T-05 |
| AC-VIS-11..12 validationBanner · align SSOT | T-06 |
| TITLE-01 · useFormOptions · DUAL-01 | T-01 · T-06 |
| Sessions live · empty toast · cấm itemsOrDemo | T-06 |
| Mobile.Bff only · Step 4b skip · cấm on-device | T-01 · T-03 · T-BE |
| Align-mobile-to-mfe · cấm tab/route/icon mới | T-06 |
| Grid AC-GRID-01..05 | N/A phone full |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| photos | PhotoRow | T-02 |
| rowLoc | ListRow RO | T-02 · T-06 |
| rowAcc | ListRow RO | T-02 · T-03 |
| detect | Button | T-03 |
| rowClass | ListRow RO | T-04 |
| rowSev | ListRow+Badge | T-04 |
| btnAttach | Button | T-05 |
| btnSkip | Button | T-05 |
| gpsLock | GPS | T-02 · T-03 · T-05 |
| validationBanner | Banner | T-03 · T-05 · T-06 |

## Out of scope

- Me / feedback / cam-view · cam-patrol / det-hitl · journal B–E
- Invent VisCaptureController / web-bff / ERP.* / on-device detect
- Native iOS/Android code edits · new tab/route/icon
- Step 4b / migration / new entity · typed `new_page`
- Path `/web-rmms-vis-capture` (ROUTE-01)

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
