# Team lead — Task — web-rmms-cam-patrol

> Status: **confirmed** · writtenAt `2026-09-27T10:55:00.000Z` · task `task_252dd44f`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON · team_lead_confirm: **approve**  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần (Cam Patrol) — Pattern B submit-validate |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile full CP-01 · phone ≤430 · Android 1-1 · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/camera-tuan` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| productRoute | `/field/cam` |
| nativeRouteCite | SCREENS `/field/cam` · Android `#sc-cam-patrol` · DES-MOB-CAM-PATROL/FINDER/RESULT/VALIDATION |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Patrol** + AiVision + Incident · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA keep Live) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` |
| zones | CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · VALIDATION · GPS-DENY · empty · offline · toast |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · Pattern B |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · URL đã ship) |
| mfeStdRoute | `/camera-tuan` |
| mfeStdUrl | `http://localhost:9301/camera-tuan` |
| productRoute | `/field/cam` |
| note | **cấm** `/web-rmms-cam-patrol` · **cấm** invent `cam-patrol` path · 1 route CP-01 · autoApprove=ON |

## Decisions (rolled from prior)

- changeScope: **edit_page** · **cấm** new_page CRUD · keep PO/Design/SA artifacts
- **DEC-PATTERN-B** (delta): `detect` chỉ `disabled={detecting}` · `confirm` chỉ `disabled={confirming}` · **cấm** pre-disable GPS/frame/session/online · banner `string[]` on click · capture **giữ**
- keep: DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · DOMAIN-MAP Live cite
- DEC-DETECT-DTO: `DetectAiVisionRequest` ImageBase64*·Lat*·Lng*·AccuracyM*·Engine=P1 · Id→DetectionId · Score OUT ship
- Confirm: `CreateIncidentRequest` DetectionId·HasGps=true·Title*·RouteName*·IncidentType*
- validationBanner: DES-MOB-CAM-VALIDATION · `lookupStatic` keys có sẵn · báo lỗi khi bấm (không pre-disable)
- GPS Acc≤30 / deny: báo khi bấm detect/confirm (Pattern B) · không lock button trước click
- Labels: `useFormOptions()` / `cam.*` · **cấm** hardcode VN form
- Leave: dirty result card → in-app discard · **không** POST · **cấm** native confirm
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** invent cam-patrol controller/path
- Align end: `/align-mobile-to-mfe` · CamPatrolPage SSOT · no tab/route/icon
- OUT: Me/cam-view · Excel · SearchInput user/route CP-01 · invent cam-patrol · Score % ship
- SA: Step 4b **none** · FE-only Pattern B

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Session stamp | `GET patrol/sessions` (Đang tuần → route/km/PatrolType) — **keep** |
| Detect | `POST ai-vision/detect` Engine=P1 · ImageBase64* · Lat/Lng/AccuracyM* — **keep** |
| Detection RO (opt) | `GET ai-vision/detections/{id}` — **keep** |
| Confirm incident | `POST incident/incidents` DetectionId · HasGps=true · Title* · RouteName* · IncidentType* — **keep** |
| Skip | client dismiss only · **không** API |
| Banner | client `string[]` · **không** API mới |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Pattern B CTA locks · `CamPatrolPage` | FE | — | pending | `detect` `disabled={detecting}` only · `confirm` `disabled={confirming}` only · **cấm** `!canDetect` / pre-disable GPS·frame·session·online · cite SUBMIT-VALIDATE |
| T-02 | validationBanner DES-MOB-CAM-VALIDATION | FE | T-01 | pending | Banner `string[]` on detect/confirm click · `lookupStatic` keys · zone VALIDATION · clear khi valid / sau success |
| T-03 | Keep finder · stamp · GPS · capture | FE | T-01 | pending | CameraViewfinder · GET sessions stamp · geolocation · capture=environment **giữ** · Acc≤30 / deny báo khi bấm · no fake class/coords |
| T-04 | Keep Detect / Confirm / Skip contracts | FE | T-01 | pending | POST detect Engine=P1 · POST incident DetectionId HasGps · skip dismiss no POST · leave dirty discard · ẩn score % ship |
| T-05 | Labels · zones · BFF wire · Android 1-1 | FE | T-02·T-03·T-04 | pending | `useFormOptions` / `cam.*` · Mobile.Bff only · CP-01 zones parity · empty/offline/toast · **cấm** ERP.* · **cấm** native edit |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA keep Live) |
| T-QA | cite Pattern B scenarios · e2e slug | QA | T-01…T-05 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · primary file `src/pages/WebRmmsCamPatrol/CamPatrolPage.tsx`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| Pattern B: detect lock detecting only | T-01 |
| Pattern B: confirm lock confirming only | T-01 |
| Banner string[] on click · no pre-disable | T-02 |
| Capture / finder / stamp / GPS keep | T-03 |
| Frame thật · fail toast · no fake class | T-03 · T-04 |
| Detect/Confirm Live DTO keep · ẩn score % | T-04 |
| Skip dismiss · leave dirty discard | T-04 |
| Labels useFormOptions · Android 1-1 · BFF only | T-05 |
| Step 4b / API mới none | T-BE |

## Out of scope

- Me / cam-view / feedback
- Journal / kết ca / tần suất (B–E) · Field doors siblings
- Invent `cam-patrol` API path / CamPatrolController
- New BE controller · migration · Step 4b
- ERP.* namespaces · web-bff client
- iOS/Android native edits
- Score % ship UI
- New MFE route / tab / icon (keep `/camera-tuan`)
- Re-scan demo / contentHash

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-cam-patrol-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- UNCLEAR-CAM-FRAME: soft keep DEC-FRAME (not blocking)
- Pattern B banner copy: keys `lookupStatic` có sẵn (not blocking)
