# Team lead — Task — web-rmms-work

> Status: **confirmed** · writtenAt `2026-09-26T05:10:00.000Z` · task `task_67584d10`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-work` |
| Title | Danh sách công việc |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile list/full WORK-L · phone ≤430 · Android 1-1 `#sc-mnt-list` · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` · peers `/work/progress?id=` · `/work/log?id=` · `/work/chat?id=` · `/work/estimate/:id` |
| nativeRouteCite | Android `#sc-mnt-list` · SCREENS Tab Work · cite T-W5-01 |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Maintenance** (`maintenance` / `work-orders`) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone · Search+Chip live |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list` |
| zones | WORK-L · (peer WORK-P · WORK-G · WORK-C · WORK-E) · empty · offline · toast |
| cite | T-W5-01 · peers T-W5-02/03/04 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` (WORK-L only on std) · nest peers `/work/progress|log|chat?id=` · `/work/estimate/:id` |
| note | STD-NEST Design-closed · **cấm** invent WorkListController / web-bff path · autoApprove=ON |

## Decisions (rolled from prior)

- WORK-L primary DoD · peers WORK-P/G/C/E **nav-only** (PEER-SPLIT)
- FILTER-P1: chips status/workType **live** từ init-data · **không** toast-only
- CREATE-FROM: estimate peer tạo WO · **cấm** FAB / create form trên list
- STD-NEST: product `/work/*` · std `/web-rmms-work` = WORK-L only
- Live: `GET maintenance/work-orders` · `GET …/init-data` · GET{id}/messages/progress cite peer
- MSG-VS-COMMENT: Live **messages** · **cấm** invent comments
- DOMAIN-MAP: `web-rmms-work` → Maintenance · reuse WorkOrdersController · **no new** controller
- HARD: useFormOptions · **cấm** fake GPS · **cấm** Me* · **cấm** web-bff · **cấm** ERP.*
- Labels: `useFormOptions()` · **cấm** hardcode VN form
- BFF: Mobile.Bff only · Step 4b **none** · migration **none**
- OUT: Me*/feedback/cam-view · journal B–E · invent slug · Kind E summary · native iOS/Android edits
- Carry peer: GAP-MOB-MNT-PROG-GPS-01 (progress Note GPS) — **không** primary WORK-L

## FormMode ↔ API

| Mode | APIs |
|------|------|
| List | `GET maintenance/work-orders` · query `search` · `status` · `workType` · `page=1` · `pageSize=50` |
| Init chips | `GET maintenance/work-orders/init-data` (LOOKUP status/workType) |
| Detail cite | `GET maintenance/work-orders/{id}` — peer header |
| Messages cite | `GET/POST …/{id}/messages` — peer WORK-C · **cấm** `/comments` |
| Progress cite | `POST …/{id}/progress` — peer WORK-P |
| Create cite | `POST …/work-orders` — peer estimate · **không** list |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-work` · product `/work` · WORK-L chrome | FE | — | pending | Route registered · deep-link mfeStdUrl · STD-NEST peers mountable · no ERP.* · no invent WorkList path |
| T-02 | WORK-L Search + chips status/workType · live filter · empty | FE | T-01 | pending | GET list live · GET init-data chips · FILTER-P1 live · debounce search · EmptyState · fail Toast · **cấm** itemsOrDemo · AC-L-01…03 |
| T-03 | CardList bind Title/Code/Assignee/Due/Route/Status/%/WorkType | FE | T-02 | pending | Card fields §B · ProgressPercent · Status/WorkType enum cite · offline toast · AC-L-04 · AC-L-09 phone≤430 |
| T-04 | Hub estimate + peer actions progress/log/chat/estimate | FE | T-01 | pending | Hub→estimate · icons→`/work/progress|log|chat?id=` · `/work/estimate/:id` · **no FAB** · AC-L-05…07 · AC-L-12 no Me* |
| T-05 | Wire Mobile.Bff · useFormOptions · Android 1-1 `#sc-mnt-list` · no fake GPS | FE | T-01…T-04 | pending | All live via BFF `:5202` · labels copy key · prototype parity · AC-L-08 · AC-L-10 · AC-L-11 · **cấm** web-bff |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · Domain-map applied |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-05 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-L-01 live GET work-orders · empty/fail toast | T-02 |
| AC-L-02 SearchInput debounce `search` | T-02 |
| AC-L-03 chips status/workType live init-data | T-02 |
| AC-L-04 Card field bind §B | T-03 |
| AC-L-05 Hub estimate nav | T-04 |
| AC-L-06 peer action icons nav | T-04 |
| AC-L-07 no FAB create on list | T-04 |
| AC-L-08 useFormOptions · no hardcode VN | T-05 |
| AC-L-09 phone ≤430 · Android 1-1 · N/A DES-GRID | T-03 · T-05 |
| AC-L-10 Mobile.Bff only · no web-bff | T-05 |
| AC-L-11 no fake GPS on list | T-05 |
| AC-L-12 no Me*/feedback/cam-view | T-04 |
| Nested STD-NEST peers | T-01 · T-04 |
| Step 4b skip · no invent controller | T-01 · T-BE |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| search | SearchInput | T-02 |
| filter.status | Chip | T-02 |
| filter.workType | Chip | T-02 |
| hub.estimate | HubRow | T-04 |
| list.card | CardList | T-03 |
| action.progress | IconButton | T-04 |
| action.log | IconButton | T-04 |
| action.chat | IconButton | T-04 |
| action.estimate | IconButton | T-04 |

## Out of scope

- Me / feedback / cam-view
- Journal / kết ca / tồn tại / tần suất (B–E)
- FAB / create WO form trên WORK-L
- Invent WorkListController / slug path / web-bff
- New BE controller · migration · Step 4b
- ERP.* namespaces
- Peer WORK-P/G/C/E full CRUD as primary DoD
- Kind E `maintenance/summary`
- iOS/Android native edits
- Fake GPS / itemsOrDemo / demo-json
- Invent `/comments` (use Live messages peer)

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-work-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) DOMAIN-MAP-WORK · MSG-VS-COMMENT · FILTER-P1 · PEER-SPLIT · CREATE-FROM · STD-NEST — resolved prior
- GAP-MOB-MNT-PROG-GPS-01 → carry peer progress · **không** block WORK-L
