# Team lead — Task — web-rmms-mnt-progress

> Status: **confirmed** · writtenAt `2026-09-27T13:50:00.000Z` · task `task_b1a6e7b8`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> changeScope: **edit_page** · deltaCite: `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` (Pattern B)  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-mnt-progress` |
| Title | Tiến độ công việc (WORK-P) — Pattern B edit |
| Role | `team_lead` |
| changeScope | `edit_page` · **cấm** new_page typed CRUD |
| formPattern | Mobile full/sheet WORK-P · phone ≤430 · Android 1-1 `#sc-mnt-progress` · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/cong-viec/tien-do` · **cấm** `/web-rmms-mnt-progress` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| productRoute | `/work/progress?id=` · entry peer WORK-L (`web-rmms-work`) |
| peerStdUrl | `http://localhost:9301/cong-viec` |
| nativeRouteCite | Android `#sc-mnt-progress` · SCREENS WORK-P · cite T-W5-02 |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Maintenance** (`work-orders`) · **cấm ERP.*** |
| bff | `Linm.RMMS.Mobile.Bff` · `mobileApiBase()` / `VITE_MOBILE_API_URL` · **cấm** FE web-bff |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone form |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) · T-BE N/A |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| reviewUrl deny | `…/index.html?deny=1` (CTA enabled · banner on click) |
| zones | WORK-P · WORK-P-GPS · (peer WORK-L) · `#sc-mnt-progress` |
| cite | T-W5-02 · deltaCite SUBMIT-VALIDATE Pattern B |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (giữ route Live — **không** URL mới) |
| mfeStdRoute | `/cong-viec/tien-do` |
| mfeStdUrl | `http://localhost:9301/cong-viec/tien-do` |
| productRoute | `/work/progress?id=` |
| note | STD-NEST Design-closed · **cấm** invent ProgressController / web-bff · **cấm** alias `/web-rmms-mnt-progress` · autoApprove=ON |

## Decisions (rolled from prior + Pattern B)

- changeScope **edit_page** · baseline Live T-01…T-05 **done** · delta Pattern B only
- Delta SUPERSEDED GPS: prior disable-gate → **Pattern B** — CTA `disabled={saving}` only · GPS deny/required → **banner on click** · keys `mnt.progress.gps.*` · **cấm** fake · GPS embed Note · **cấm** lat body
- MEDIA CLOSED-P1 + `capture="environment"` · GAP-MEDIA Signed defer P2 · **cấm** MediaUrl trên Progress/Complete body
- LABEL list-chrome CLOSED · `useFormOptions()` · **cấm** hardcode VN
- Body unchanged: Progress `{ ProgressPercent, Note? }` · Complete `{ Note? }`
- Live unchanged: `GET work-orders/{id}` · `POST …/progress` · `POST …/complete` · `GET …/init-data`
- DOMAIN-MAP: Maintenance · reuse WorkOrders · **no new** controller / DTO / migration
- HARD: Mobile.Bff only · **cấm** web-bff · **cấm** ERP.* · **cấm** Me* · **cấm** invent path
- OUT: list/log/chat/estimate · Me* · journal/kết ca · Excel · invent · web-bff · iOS/Android native
- align last (later): `/align-mobile-to-mfe` · no new tab/route/icon
- demo N/A · **cấm** itemsOrDemo / demo-json

## FormMode ↔ API (unchanged Live)

| Mode | APIs |
|------|------|
| Prefill | `GET maintenance/work-orders/{id}` |
| Progress | `POST maintenance/work-orders/{id}/progress` · `{ ProgressPercent, Note? }` |
| Complete | `POST maintenance/work-orders/{id}/complete` · `{ Note? }` |
| Init | `GET maintenance/work-orders/init-data` |
| GPS | `navigator.geolocation` → Note summary · Pattern B banner on click · **không** body field |
| BFF | Mobile.Bff `:5202` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01…T-05 | WORK-P baseline Live (prior) | FE | — | **done** | Route `/cong-viec/tien-do` · GET/POST Live · chrome · keep |
| T-EDIT-01 | Pattern B CTA | FE | — | **pending** | Bỏ `ctasDisabled` / GPS pre-lock · `disabled={saving}` only trên `submitProgress` + `submitComplete` · AC-P-B1 |
| T-EDIT-02 | Banner validate | FE | T-EDIT-01 | **pending** | GPS deny / required / unavailable → banner **on click** · keys `mnt.progress.gps.*` · **cấm** fake · AC-P-B2 · AC-P-03/04 SUPERSEDED |
| T-EDIT-03 | capture | FE | — | **pending** | `input` + `capture="environment"` trên photoLocalIds · local preview keep · **cấm** MediaUrl body · AC-P-B3 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration · GAP-MEDIA Signed defer P2 |
| T-QA | e2e re-run | QA | T-EDIT-* | **pending** | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |
| T-REV | review | Review | T-QA | **pending** | `/agent-review` after QA |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA
- BE align: **skip** (không phải Dev · T-BE N/A)

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-P-01 live GET {id} · header RO · empty/fail toast | T-01…T-05 **done** (keep) |
| AC-P-02 progressPercent 0–100 · POST progress | keep |
| AC-P-03 / AC-P-04 GPS · **SUPERSEDED Pattern B** | T-EDIT-01 · T-EDIT-02 |
| AC-P-05 photoLocalIds local · no MediaUrl body | keep + T-EDIT-03 |
| AC-P-06 POST complete · Note? | keep · CTA/banner via T-EDIT-* |
| AC-P-07 useFormOptions · list chrome badge | keep |
| AC-P-08 phone ≤430 · `#sc-mnt-progress` 1-1 | keep |
| AC-P-09 Mobile.Bff only · no web-bff · no ERP.* | keep |
| AC-P-B1 CTA disabled=saving only | T-EDIT-01 |
| AC-P-B2 banner on click · `mnt.progress.gps.*` | T-EDIT-02 |
| AC-P-B3 capture=environment | T-EDIT-03 |
| Step 4b skip · no invent controller | T-BE |
| GAP-MEDIA Signed defer P2 | T-BE |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| woCode/title/status/route/workType | Text/Badge RO | keep (T-01…T-05 done) |
| progressPercent | Number/Slider | keep |
| note | Text | keep · GPS summary |
| lat/lng/accuracyM | GPS | T-EDIT-01 · T-EDIT-02 |
| validationBanner | Banner | T-EDIT-02 · NEW Pattern B |
| photoLocalIds | FileMulti | T-EDIT-03 |
| submitProgress | Button | T-EDIT-01 · T-EDIT-02 |
| submitComplete | Button | T-EDIT-01 · T-EDIT-02 |

## Out of scope

- Me / feedback / cam-view · Journal / kết ca
- WORK-G / WORK-C full CRUD as primary DoD
- List / create WO · invent ProgressController / slug `/web-rmms-mnt-progress`
- New BE controller · migration · Step 4b · ERP.* · web-bff
- MediaUrl / Signed upload on body (P2)
- Fake GPS / itemsOrDemo / demo-json
- iOS/Android native edits · new tab/route/icon

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-mnt-progress-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · BANNER-COPY/GPS Pattern B/MEDIA/LABEL closed · GAP-MEDIA Signed defer P2
