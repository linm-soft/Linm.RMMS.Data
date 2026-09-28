# Team lead — Task — web-rmms-incident

> Status: **confirmed** · writtenAt `2026-09-27T12:35:00.000Z` · task `task_c4b41ce0`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-incident` |
| Title | Sự cố — Pattern B SUBMIT-VALIDATE (INC-N Delta) · giữ INC-L/D |
| Role | `team_lead` |
| changeScope | `edit_page` |
| formPattern | Mobile full phone ≤430 · Pattern B · Android 1-1 · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` (nested mount keep) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Incident** + Patrol + Integration + AiVision(+files) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone · Search+Chip |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA FE-only) · Gap Lat deferred |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident/ui/prototype/index.html` |
| zones | INC-L (keep) · INC-N (Delta Pattern B) · INC-D (keep) · peer INC-V/C/E · GPS-DENY · banner · offline |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · `IncidentCreatePage` |
| cite | prior T-01…T-06 **PASS** (new_page) · NEW T-UI-* Pattern B |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **keep** (edit_page · route đã có) |
| mfeStdRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/van-de/moi` |
| productRoute | `/incident` · `/incident/new` · `/incident/:id` |
| note | **cấm** invent route/tab/icon · **cấm** `/web-rmms-incident` typed new · nested mount keep · autoApprove=ON · Giao việc = `/cong-viec?incidentId=` (AC-GRID-06) |

## Decisions (rolled from prior)

- changeScope: **edit_page** · Pattern B INC-N · **cấm** typed new_page CRUD
- DEC-PB-01: create **disabled chỉ `creating`** · bỏ `disabled={!canCreate}` · `validate.banner` string[] · GPS deny **on-submit** · photos capture giữ
- Banner keys AC-PB-04: asset→`incident.pick.title` · session→`incident.session.empty` · GPS→`incident.gps.deny` (+ modal deny.title/body) · offline→`incident.offline`
- DEC-CREATE-01 keep: `CreateIncidentRequest` · HasGps · **no Lat** · MediaIds max10 · **no DTO change**
- Prior Live INC-L/D + create form shell **PASS** — chỉ Delta Pattern B
- Labels: `useFormOptions()` · **cấm** hardcode VN form
- BFF: Mobile.Bff only · **cấm** web-bff · **cấm** invent IncidentHub
- SA: DOMAIN-MAP-INC keep · Step 4b **none** · Lat MIG deferred (GAP-PGC-BE-01)
- Align cuối: `/align-mobile-to-mfe` · SSOT IncidentCreatePage · **cấm** android/ios proto · no_demo
- OUT: new_page CRUD · Excel · Me* · journal B–E · tab/route/icon mới · invent slug · SearchInput users/routes
- UNCLEAR-PB-BANNER-01: **resolved** (PO AC-PB-04)
- UNCLEAR-SESS → Dev/QA banner · **cấm** itemsOrDemo

## FormMode ↔ API

| Mode | APIs |
|------|------|
| List | `GET incident/incidents` · keep INC-L |
| Create | `POST incident/incidents` · HasGps=true · MediaIds · **no DTO change** · Pattern B client-only |
| Detail | `GET incident/incidents/{id}` · keep |
| Close | `POST incident/incidents/{id}/close` · keep |
| Session stamp | `GET patrol/sessions` · empty→banner key · **cấm** itemsOrDemo |
| Asset types | `GET integration/asset-types` |
| Photos | `POST` uploads / `files/*` · capture=environment giữ |
| Detect | `POST ai-vision/detect` · Acc≤30 · deny on-submit |
| BFF | Mobile.Bff `:5202` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01…T-06 | prior Live INC-L/N/D · route · BFF | FE | — | **PASS** | Keep prior new_page DoD · **cấm** regress L/D |
| T-UI-VAL-B-01 | INC-N Pattern B · create always-on · validate.banner | FE | T-01…T-06 | pending | Bỏ `disabled={!canCreate}` · disabled chỉ `creating` · banner string[] on click · AC-PB-01/03 · SSOT IncidentCreatePage |
| T-UI-ACC-01 | Banner keys useFormOptions AC-PB-04 | FE | T-UI-VAL-B-01 | pending | asset/session/GPS/offline keys đúng · **cấm** hardcode VN · AC-PB-04 |
| T-UI-GPS-B-01 | GPS deny on-submit · cấm khóa nút | FE | T-UI-VAL-B-01 | pending | Deny→banner/modal on submit · CTA không disabled vì GPS · AC-CREATE-05 edit · AC-PB-02 |
| T-UI-ALIGN-01 | align-mobile-to-mfe no_demo · parity prototype | FE | T-UI-VAL-B-01…T-UI-GPS-B-01 | pending | `/align-mobile-to-mfe` · prototype modes ?gps=deny · ?nosession=1 · **cấm** tab/route/icon mới · **cấm** native |
| T-UI-PHOTO-01 | INC-L thumb + INC-D gallery `mediaIds` | FE | — | **done** | 72×72 · `+N` · rỗng «Chưa có ảnh» · gallery trước Peer · `files/{id}/object` · **cấm** pin · **cấm** cache tuần đường |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA FE-only) · Lat MIG deferred |
| T-QA-VAL-B-01 | cite AC-PB + e2e slug | QA | T-UI-* | pending | **chỉ** `/agent-qa*` · S Pattern B · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-GRID-01..05 keep INC-L | T-01…T-06 PASS · **cấm** regress |
| AC-CREATE-01..07 keep (GPS=on-submit) | T-UI-GPS-B-01 · T-UI-VAL-B-01 |
| AC-PB-01 create always-on | T-UI-VAL-B-01 |
| AC-PB-02 GPS không khóa nút | T-UI-GPS-B-01 |
| AC-PB-03 banner string[] | T-UI-VAL-B-01 |
| AC-PB-04 banner keys | T-UI-ACC-01 |
| AC-DETAIL-01..03 keep | T-01…T-06 PASS |
| HasGps · no Lat · MediaIds≤10 · no DTO | keep DEC-CREATE-01 · T-BE N/A |
| Mobile.Bff only · Step 4b skip | T-UI-ALIGN-01 · T-BE |
| Align no_demo · cấm native | T-UI-ALIGN-01 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| create | Button Pattern B | T-UI-VAL-B-01 |
| validate.banner | Banner string[] | T-UI-VAL-B-01 · T-UI-ACC-01 |
| gpsLock | GPS deny on-submit | T-UI-GPS-B-01 |
| gps.deny.modal | Modal | T-UI-GPS-B-01 · T-UI-ACC-01 |
| photos | Sheet `IncidentCaptureSheet` · Hủy/Lưu · pin · nhiều ảnh · nhận diện để sau | T-UI-CAPTURE-01 |
| assetPick | LookupGrid | keep · miss→banner T-UI-VAL-B-01 |
| sessionStamp | Text RO | keep · empty→banner T-UI-VAL-B-01 |
| list/filters/fab | Search+Chip+Card+FAB | keep PASS |
| card.thumb / detail.photos | Image `mediaIds` · files object | T-UI-PHOTO-01 |
| detail.close | Button | keep PASS |

## Out of scope

- Typed new_page CRUD / re-scaffold INC-L/D
- Me / feedback / cam-view · journal B–E
- Invent IncidentHub / slug / web-bff
- New BE controller · migration · Step 4b · Lat column MIG
- ERP.* · DES-GRID / Excel / export
- Tab / route / icon mới · native iOS/Android edits
- Fake coords / itemsOrDemo sessions

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-incident-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · UNCLEAR-PB-BANNER-01 **resolved**
- UNCLEAR-SESS → Dev/QA banner · GAP-PGC-BE-01 Lat deferred (no MIG)
