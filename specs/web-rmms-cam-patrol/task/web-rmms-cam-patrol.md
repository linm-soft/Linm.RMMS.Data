# Team lead — Task — web-rmms-cam-patrol

> Status: **confirmed** · writtenAt `2026-09-26T01:30:00.000Z` · task `task_ef34d1a3`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-cam-patrol` |
| Title | Camera tuần (Cam Patrol) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile full CP-01 · phone ≤430 · Android 1-1 · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| productRoute | `/field/cam` |
| nativeRouteCite | SCREENS `/field/cam` · Android `#sc-cam-patrol` · DES-MOB-CAM-PATROL/FINDER/RESULT |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Patrol** + AiVision + Incident · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-patrol/ui/prototype/index.html` |
| zones | CP-01 · DES-MOB-CAM-PATROL · FINDER · RESULT · GPS-DENY · empty · offline · toast |
| cite | T-W3-09 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-cam-patrol` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-patrol` |
| productRoute | `/field/cam` (shell alias nếu hub cần) |
| note | 1 route CP-01 · PatrolType stamp từ ca · **cấm** invent `cam-patrol` path · autoApprove=ON |

## Decisions (rolled from prior)

- CP-01: finder + GPS stamp + detect + confirm/skip · DEC-ENTRY 1 route
- DEC-FRAME: frame thật DoD · fail toast · **cấm** fake class / fake coords
- DEC-SCORE: ẩn % ship (`?ship=1` proto only)
- DEC-DETECT-DTO: `DetectAiVisionRequest` ImageBase64*·Lat*·Lng*·AccuracyM*·Engine=P1 · resp Id→DetectionId · Score OUT ship
- Confirm: `CreateIncidentRequest` DetectionId·HasGps=true·Title*·RouteName*·IncidentType*
- HARD: GPS deny \| Acc>30 → block detect/confirm · ImageBase64 required · skip=dismiss only
- Labels: `useFormOptions()` / `cam.*` · **cấm** hardcode VN form
- Leave: dirty result card → in-app discard · **không** POST · **cấm** native confirm
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** invent cam-patrol controller/path
- Copy: Android `#sc-cam-patrol` 1-1 · **cấm** sửa iOS/Android native
- OUT: Me/cam-view/feedback · journal B–E · Field doors siblings
- SA: DOMAIN-MAP `web-rmms-cam-patrol` → Patrol · Step 4b **none**

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Session stamp | `GET patrol/sessions` (Đang tuần → route/km/PatrolType) |
| Detect | `POST ai-vision/detect` Engine=P1 · ImageBase64* · Lat/Lng/AccuracyM* |
| Detection RO (opt) | `GET ai-vision/detections/{id}` |
| Confirm incident | `POST incident/incidents` DetectionId · HasGps=true · Title* · RouteName* · IncidentType* |
| Skip | client dismiss only · **không** API |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell page `/web-rmms-cam-patrol` · CP-01 shell · product `/field/cam` | FE | — | pending | Route registered · deep-link mfeStdUrl · no ERP.* · no invent path |
| T-02 | Finder DES-MOB-CAM-FINDER · session stamp route/km/type · GPS lat/lng/Acc RO | FE | T-01 | pending | GET sessions Đang tuần · geolocation only · Acc≤30 gate · deny→DES-MOB-GPS-DENY · useFormOptions |
| T-03 | Capture frame → Detect · result card DES-MOB-CAM-RESULT · ẩn score % | FE | T-02 | pending | ImageBase64 non-null · POST detect Engine=P1 · fail toast · card nil · **cấm** fake class |
| T-04 | Confirm tạo sự cố · Skip dismiss · Leave dirty discard | FE | T-03 | pending | POST incident DetectionId HasGps · skip no POST · leave in-app discard |
| T-05 | Wire Mobile.Bff · empty/offline/toast · Android 1-1 parity zones | FE | T-01 | pending | All live APIs via BFF · labels `cam.*` · prototype parity CP-01 · **cấm** native confirm |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) |
| T-QA | cite scenarios · Maestro/e2e slug | QA | T-01…T-05 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| CP-01 finder + stamp + detect + confirm/skip | T-02 · T-03 · T-04 |
| Frame thật · fail toast · no fake class | T-03 |
| GPS deny \| Acc>30 block detect/confirm | T-02 · T-04 |
| Ẩn score % ship | T-03 · T-05 |
| Confirm DetectionId HasGps · Skip dismiss only | T-04 |
| Labels useFormOptions · no hardcode VN | T-02 · T-05 |
| Leave dirty → discard no POST | T-04 · T-05 |
| Android 1-1 · cấm native code change | T-05 |
| Mobile.Bff only · no invent path · Step 4b skip | T-01 · T-05 · T-BE |

## Out of scope

- Me / cam-view / feedback
- Journal / kết ca / tần suất (B–E) · Field doors siblings
- Invent `cam-patrol` API path / CamPatrolController
- New BE controller · migration · Step 4b
- ERP.* namespaces · web-bff client
- iOS/Android native edits
- Score % ship UI

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-cam-patrol-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking) DEC-FRAME · DEC-SCORE · DEC-ENTRY · DEC-DETECT-DTO · DOMAIN-MAP-CAM — resolved prior roles
