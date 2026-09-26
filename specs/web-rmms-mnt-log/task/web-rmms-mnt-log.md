# Team lead — Task — web-rmms-mnt-log

> Status: **confirmed** · writtenAt `2026-09-26T06:15:00.000Z` · task `task_9337e60f`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> **Cấm** xóa file này · **cấm** implement trong role team_lead · **cấm** e2e / yarn build / start:std.

| | |
|--|--|
| Feature | `web-rmms-mnt-log` |
| Title | Nhật ký công việc (WORK-G) |
| Role | `team_lead` |
| changeScope | `new_page` |
| formPattern | Mobile full/sheet WORK-G · phone ≤430 · Android 1-1 `#sc-mnt-log` · N/A ERP Modal/Slideout |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mnt-log` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| productRoute | `/work/log?id=` · entry peer WORK-L (`web-rmms-work`) |
| nativeRouteCite | Android `#sc-mnt-log` · SCREENS WORK-G · cite T-W5-03 |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` · domain **Maintenance** (`maintenance` / `work-orders`) · **cấm ERP.*** |
| demo | N/A · hash skip · **cấm** rescan |
| DES-GRID / LinErpListFilterBar | N/A phone timeline |
| Step 4b / migration | **skip** · API Mới / entity: **none** (SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mnt-log/ui/prototype/index.html` |
| zones | WORK-G · (peer WORK-L entry) · emptyState · timeline RO · **cấm** GPS · **cấm** write CTA |
| cite | T-W5-03 · peer list T-W5-01 · progress T-W5-02 |
| nextSlash | `/agent-dev` · roleOnly stop (GAP-PKT-ROLE-01) |

## route_confirm

| Field | Value |
|-------|-------|
| action | **confirm** (new_page · URL chưa có trong MFE) |
| mfeStdRoute | `/web-rmms-mnt-log` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| productRoute | `/work/log?id=` (WORK-G only on std) · entry from WORK-L peer · mọi status khi có `id` |
| note | STD-NEST Design-closed · **cấm** invent `/logs` · LogController · web-bff path · autoApprove=ON |

## Decisions (rolled from prior)

- WORK-G primary DoD · entry peer WORK-L (`web-rmms-work`) · product `/work/log?id=` · mọi status + id
- Timeline P1: **client-derive** Signed `WorkOrderDto` (CreatedAt/DueAt/Description/ProgressPercent/Note/UpdatedAt/Status) · sort **newest-first** · **cấm** invent `GET …/logs`
- RO only: **cấm** POST · **cấm** primary write CTA · progress/complete/chat = peers
- GPS: **không** capture trên WORK-G · **cấm** fake
- LABEL: `useFormOptions()` + init-data SSOT · GAP-MOB-MNT-LOG-LABEL-01 → Dev map · **cấm** hardcode VN · **cấm** Me*
- Live: `GET work-orders/{id}` · `GET …/init-data` · Mobile.Bff only
- DOMAIN-MAP: `web-rmms-mnt-log` → Maintenance · reuse WorkOrders · **no new** controller
- HARD: Mobile.Bff only · **cấm** web-bff · **cấm** ERP.* · **cấm** Me* · **cấm** invent path
- BFF: Mobile.Bff `:5202` · Step 4b **none** · migration **none**
- OUT: progress/chat/estimate · Me* · feedback · cam-view · journal/kết ca · list/create WO · invent `/logs` · POST
- demo N/A · **cấm** itemsOrDemo / demo-json
- UNCLEAR HIST/ENTRY/SORT/LABEL/DMAP: **CLOSED** prior

## FormMode ↔ API

| Mode | APIs |
|------|------|
| Prefill | `GET maintenance/work-orders/{id}` |
| Derive | **none** (client from Signed DTO after GET OK) · newest-first |
| Init | `GET maintenance/work-orders/init-data` (LOOKUP status/workType labels) |
| Write | **N/A** · **cấm** POST on this slug |
| GPS | **N/A** · **cấm** capture / fake |
| BFF | Mobile.Bff `:5202` `mobile-bff/api/v1` · no new controller · Step 4b skip |

### Derive row map (Dev contract)

| Row id | Condition | Stamp |
|--------|-----------|-------|
| `row.created` | always | `CreatedAt` |
| `row.due` | `DueAt` set | `DueAt` |
| `row.description` | Description non-empty | `CreatedAt` |
| `row.progress` | ProgressPercent > 0 **or** status in_progress/done | `UpdatedAt` |
| `row.note` | Note non-empty | `UpdatedAt` |
| `row.done` | status `done` | `UpdatedAt` |

## Tasks

| id | page / slice | role | deps | status | DoD (slim) |
|----|--------------|------|------|--------|------------|
| T-01 | Route + shell `/web-rmms-mnt-log` · product `/work/log?id=` · WORK-G chrome | FE | — | pending | Route registered · deep-link mfeStdUrl · `?id=` required · entry WORK-L mọi status · no ERP.* · no invent `/logs` |
| T-02 | Header WO RO · badge · prefill GET {id} | FE | T-01 | pending | Bind woCode/title/status/route/workType · init-data + useFormOptions · empty/fail · AC-HDR-01 · AC-LBL-01 |
| T-03 | Timeline client-derive · newest-first · RO | FE | T-02 | pending | Derive 6-row map · omit empty · sort newest-first · **cấm** invent `/logs` · AC-TL-01..03 |
| T-04 | emptyState · fail · Mobile.Bff wire · prototype parity · no write/GPS | FE | T-01…T-03 | pending | thiếu id / GET fail / 0 rows · phone≤430 · `#sc-mnt-log` 1-1 · **cấm** POST/GPS/web-bff · AC-RO-01 · AC-BFF-01 · AC-GPS-01 |
| T-BE | — | — | — | **N/A** | No new API / entity / migration (SA) · DOMAIN-MAP applied · HIST/DMAP CLOSED |
| T-QA | cite scenarios · e2e slug | QA | T-01…T-04 | pending | **chỉ** `/agent-qa*` · **cấm** e2e ở TL/Dev |

### Assignee

- Impl: `/agent-dev` · MFE cwd `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile`
- QA E2E: queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở team_lead
- Review: `/agent-review` after QA

## Acceptance map (PO → T-*)

| AC | Owner task |
|----|------------|
| AC-TL-01 derive timeline from Signed DTO · no invent `/logs` | T-03 |
| AC-TL-02 newest-first sort | T-03 |
| AC-TL-03 omit empty optional rows (due/desc/note) | T-03 |
| AC-HDR-01 live GET {id} · header RO | T-02 |
| AC-RO-01 no POST · no write CTA · empty/fail states | T-04 |
| AC-BFF-01 Mobile.Bff only · no web-bff · no ERP.* | T-04 |
| AC-GPS-01 no GPS capture · no fake | T-04 |
| AC-LBL-01 useFormOptions + init-data · no hardcode VN | T-02 · T-04 |
| phone ≤430 · Android 1-1 `#sc-mnt-log` · N/A DES-GRID | T-01 · T-04 |
| Step 4b skip · no invent controller | T-01 · T-BE |
| GAP-MOB-MNT-LOG-LABEL-01 Dev map | T-02 |

## Inventory → T-*

| id | controlHint | T-* |
|----|-------------|-----|
| woCode/title/status/route/workType | Text/Badge RO | T-02 |
| timeline + rows | Timeline RO | T-03 |
| emptyState | Empty | T-04 |
| primaryWrite | N/A | T-04 (deny) |

## Out of scope

- Me / feedback / cam-view
- Journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b…e`)
- WORK-P (progress) / WORK-C (chat) write as primary DoD
- List / create WO form
- Invent `/logs` · LogController · slug path · web-bff
- New BE controller · migration · Step 4b
- ERP.* namespaces
- POST progress/complete/messages on this slug
- Fake GPS / itemsOrDemo / demo-json
- iOS/Android native edits

## Prior artifacts

| Role | Compact | Full |
|------|---------|------|
| data_analy | `handoff/data_analy-compact.md` | `_data-analy/features/web-rmms-mnt-log-control-hint.md` · `…-real-data.md` |
| po | `handoff/po-compact.md` | `po/requirement.md` |
| design | `handoff/design-compact.md` | `ui/design.md` + prototype |
| sa | `handoff/sa-compact.md` | `be/solution-discovery.md` |

## UNCLEAR

- (none blocking TL) · HIST/ENTRY/SORT/LABEL/DMAP CLOSED · LABEL-01 Dev map only
