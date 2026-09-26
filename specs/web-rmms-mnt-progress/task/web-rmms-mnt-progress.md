# Team lead — Task — web-rmms-mnt-progress

> Status: **confirmed** · writtenAt `2026-09-26T05:40:00.000Z` · task `task_4b78e867`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-mnt-progress` |
| Title | Tiến độ công việc (WORK-P) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile full/sheet WORK-P · phone ≤430 · Android 1-1 `#sc-mnt-progress` · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-progress` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| productRoute | `/work/progress?id=` · entry peer WORK-L (`web-rmms-work`) |
| nativeRouteCite | Android `#sc-mnt-progress` · SCREENS WORK-P · cite T-W5-02 |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Maintenance** (`maintenance` / `work-orders`) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone form |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-progress/ui/prototype/index.html` |
| zones | WORK-P · WORK-P-GPS · (peer WORK-L entry) · deny GPS · toast · empty WO |
| cite | T-W5-02 · peer list T-W5-01 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-mnt-progress` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| productRoute | `/work/progress?id=` (WORK-P only on std) · entry from WORK-L peer |
| note | STD-NEST Design-closed · **cấm** invent ProgressController / web-bff path · autoApprove=ON |

## Decisions (rolled from prior)

- WORK-P primary DoD · entry peer WORK-L (`web-rmms-work`) · product `/work/progress?id=`
- GPS gate CLOSED: **bắt buộc** cả `submitProgress` + `submitComplete` · deny → disable · **cấm** fake · encode GPS → Note only
- MEDIA P1: `photoLocalIds` local preview optional · **cấm** MediaUrl trên Progress/Complete body · GAP-MEDIA Signed defer P2
- LABEL: badge list chrome (Chờ xử lý / Đang xử lý / Đã hoàn thành / Đã hủy) · `useFormOptions()` · **cấm** hardcode VN
- Body: Progress `{ ProgressPercent, Note? }` · Complete `{ Note? }` · **cấm** lat/lng/media body fields
- Live: `GET work-orders/{id}` · `POST …/progress` · `POST …/complete` · `GET …/init-data`
- DOMAIN-MAP: `web-rmms-mnt-progress` → Maintenance · reuse WorkOrders · **no new** controller
- HARD: Mobile.Bff only · **cấm** web-bff · **cấm** ERP.* · **cấm** Me* · **cấm** invent path
- BFF: Mobile.Bff `:5202` · Step 4b **none** · migration **none**
- OUT: WORK-G/C · Me* · feedback · cam-view · journal/kết ca · list/create WO · invent controller
- demo N/A · **cấm** itemsOrDemo / demo-json

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Prefill | `GET maintenance/work-orders/{id}` |
| Progress | `POST maintenance/work-orders/{id}/progress` · body `{ ProgressPercent, Note? }` |
| Complete | `POST maintenance/work-orders/{id}/complete` · body `{ Note? }` |
| Init | `GET maintenance/work-orders/init-data` (LOOKUP status/workType labels) |
| GPS | `navigator.geolocation` → append summary vào Note · **không** body field |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-mnt-progress` · product `/work/progress?id=` · WORK-P chrome | FE | — | pending | Route registered · deep-link mfeStdUrl · `?id=` required · entry from WORK-L · no ERP.* · no invent Progress path |
| T-02 | Header WO RO · badge list chrome · prefill GET {id} | FE | T-01 | pending | Bind woCode/title/status/route/workType · status labels list chrome · empty/fail toast · AC-P-01 · AC-P-08 |
| T-03 | progressPercent slider/number 0–100 · note · photoLocalIds local | FE | T-02 | pending | Controls bind · local preview only · **cấm** MediaUrl body · AC-P-02 · AC-P-05 |
| T-04 | GPS gate WORK-P-GPS · both CTAs · Note encode | FE | T-02 | pending | geolocation required for submitProgress+submitComplete · deny disable · **cấm** fake · GPS→Note only · AC-P-03 · AC-P-04 |
| T-05 | Wire POST progress/complete · Mobile.Bff · useFormOptions · prototype parity | FE | T-01…T-04 | pending | Live POST · init-data labels · phone≤430 · `#sc-mnt-progress` 1-1 · AC-P-06 · AC-P-07 · AC-P-09 · **cấm** web-bff |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · Domain-map applied · GAP-MEDIA Signed defer P2 |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-05 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-P-01 live GET {id} · header RO · empty/fail toast | T-02 |
| AC-P-02 progressPercent 0–100 · POST progress | T-03 · T-05 |
| AC-P-03 GPS required both CTAs · deny disable · no fake | T-04 |
| AC-P-04 GPS encode Note only · no lat body | T-04 · T-05 |
| AC-P-05 photoLocalIds local · no MediaUrl body | T-03 |
| AC-P-06 POST complete · Note? · GPS gate | T-04 · T-05 |
| AC-P-07 useFormOptions · no hardcode VN · list chrome badge | T-02 · T-05 |
| AC-P-08 phone ≤430 · Android 1-1 `#sc-mnt-progress` · N/A DES-GRID | T-01 · T-05 |
| AC-P-09 Mobile.Bff only · no web-bff · no ERP.* · no Me* | T-05 |
| Step 4b skip · no invent controller | T-01 · T-BE |
| GAP-MEDIA Signed defer P2 | T-BE |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| woCode/title/status/route/workType | Text/Badge RO | T-02 |
| progressPercent | Number/Slider | T-03 · T-05 |
| note | Text | T-03 · T-04 |
| lat/lng/accuracyM | GPS | T-04 |
| photoLocalIds | FileMulti | T-03 |
| submitProgress | Button | T-04 · T-05 |
| submitComplete | Button | T-04 · T-05 |

## Out of scope

- Me / feedback / cam-view
- Journal / kết ca
- WORK-G (log) / WORK-C (chat) full CRUD as primary DoD
- List / create WO form
- Invent ProgressController / slug path / web-bff
- New BE controller · migration · Step 4b
- ERP.* namespaces
- MediaUrl / Signed upload on Progress/Complete body (P2)
- Fake GPS / itemsOrDemo / demo-json
- iOS/Android native edits

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-mnt-progress-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · GPS/MEDIA-P1/LABEL closed prior · GAP-MEDIA Signed defer P2
