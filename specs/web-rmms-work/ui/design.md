# Design — web-rmms-work

| Field | Value |
|-------|-------|
| feature | `web-rmms-work` |
| title | Danh sách công việc |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autoApprove=ON) |
| design_confirm | **approve** (`task_bb98583f`) |
| changeScope | `new_page` |
| packKind | **`list`** (PO · UI = **phone WORK-L** · **≠** Kind B desktop) |
| lane | `web` |
| stack | `web_mfe_phone` · `Linm.Web.RMMS.Mobile` · `max-width: 430px` |
| formPattern | Mobile **list / full** · **không** ERP Modal/Slideout Kind B · **không** master create |
| DES-GRID / LinErpListFilterBar | **N/A** — phone chips · **cấm** clone |
| Report AC / DES-RPT | **N/A** |
| shared_grid_example | **N/A** (phone) |
| real_view_parity | **v1** |
| peerStdUrl | `http://localhost:9301/web-rmms-work` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| mfeStdRoute | `/web-rmms-work` |
| productRoute | `/work` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list` |
| demo | **N/A** · hash skip · **cấm** re-scan (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Maintenance · Mobile.Bff `:5202` · **cấm ERP.*** |
| controlHint | `specs/_data-analy/features/web-rmms-work-control-hint.md` |
| realData | `specs/_data-analy/features/web-rmms-work-real-data.md` · §A+§B PASS |
| prior | PO `confirmed` · `handoff/po-compact.md` · contentHash `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |
| autoApprove | **ON** |
| e2eQa | ON queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở Design |
| `devSlash` | `/agent-dev` |
| updatedAt | `2026-09-26T05:02:00.000Z` |
| taskId | `task_bb98583f` |
| skillId | `agent-design` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |

**Cấm:** Dev/BE trước confirm (đã autoApprove) · ERP.* · iOS/Android native dual ship · Kind B DES-GRID · `LinErpListFilterBar` · invent `me*` / feedback / cam-view · FAB create WO trên list · invent slug controller · fake GPS · hardcode label keys ngoài `useFormOptions` · native `alert`/`confirm` · re-scan demo · `yarn build` / e2e / start:std ở role này · gộp CRUD peer vào DoD slug.

## 0. Context / Demo

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/web-rmms-work.md` | Tab Work list |
| CTX-02 | `docs/plan/web-rmms-mobile/SCREENS.md` | `/work` + peers |
| CTX-03 | `docs/plan/web-rmms-mobile/PLAN.md` · TASKS T-W5-01 | MntListView |
| DEM | — | **N/A** · hash skip · ref zone only `#sc-mnt-list` (peer mnt-list / mobile-p1) |
| DA-01 / DA-02 | `_data-analy/features/web-rmms-work-{control-hint,real-data}.md` | inventory + §B |
| PO | `po/requirement.md` | AC-L-01…12 · chips live · no FAB |
| tokens | `docs/mobile-tokens.json` | primary `#0C84C0` · phone 430 |

## 1. Pattern & ownership

| | |
|--|--|
| Frame | Phone **430px** · tokens primary `#0C84C0` · label **13** · field **≥16** (**GAP-TYP-01**) · Android 1-1 visual `#sc-mnt-list` |
| WORK-L owns | search · chips status/workType · hub estimate · CardList · peer action icons · empty/toast |
| Peer owns | WORK-P/G/C/E CRUD + GPS (progress only) |
| Shell owns | TabBar · login overlay |
| DES-LEAVE | **N/A** — list không form dirty |
| Out | Me* · feedback · cam-view · journal B–E · Kind E summary · web-bff · create FAB |

## 2. Screens / zones

| Zone | Route | Surface | Wire |
|------|-------|---------|------|
| **WORK-L** | product `/work` · std `/web-rmms-work` | Full list | Search · chips · hub · cards · actions |
| **WORK-P** | `/work/progress?id=` | Peer | Nav only · `web-rmms-mnt-progress` |
| **WORK-G** | `/work/log?id=` | Peer | Nav only · `web-rmms-mnt-log` |
| **WORK-C** | `/work/chat?id=` | Peer | Nav only · `web-rmms-mnt-chat` |
| **WORK-E** | `/work/estimate/:id` | Peer | Nav only · estimate |

### IA

```
(auth) Tab Work / Home tile → WORK-L (/work · std /web-rmms-work)
  search → GET work-orders?search=
  chips status|workType → GET live (init-data LOOKUP)
  hub.estimate → /work/estimate/:id (peer) · **no** FAB create
  card.action.progress → /work/progress?id={woId}
  card.action.log      → /work/log?id={woId}
  card.action.chat     → /work/chat?id={woId}
  card.action.estimate → /work/estimate/{woId}
  back → Home / shell
```

### STD-NEST (closed — was UNCLEAR-STD-NEST)

| Decision | Rule |
|----------|------|
| Product nest | Mobile MFE mounts peers under `/work/*` |
| Query id | progress / log / chat dùng **`?id={woId}`** |
| Estimate | path param **`/work/estimate/:id`** |
| Std entry | `/web-rmms-work` = **WORK-L only** · **không** nest std peer dưới `/web-rmms-work/*` |
| Peer std packs | riêng (`web-rmms-mnt-progress` …) — nav product route, không gộp DoD |

## 3. Field inventory (Control = controlHint)

| uiField | screen | controlHint | Required | Bind / notes |
|---------|--------|-------------|----------|--------------|
| screenTitle | WORK-L | Text | * | copy key «Danh sách công việc» |
| back | WORK-L | IconButton | * | Home / shell |
| filter.open | WORK-L | IconButton | opt | sheet phụ · chips vẫn primary |
| search | WORK-L | SearchInput | * | query `search` · debounce |
| filter.status | WORK-L | Chip/Select | * | init-data · live GET |
| filter.workType | WORK-L | Chip/Select | * | init-data · live GET |
| hub.estimate | WORK-L | HubRow | * | nav peer estimate |
| list.card | WORK-L | CardList | * | `GET maintenance/work-orders` pageSize=50 |
| card.title | WORK-L | Text | * | `Title` |
| card.code | WORK-L | Text | * | `Code` |
| card.assignee | WORK-L | Text | * | `AssigneeName` · `TeamName` |
| card.dueAt | WORK-L | Text | * | `DueAt` |
| card.route | WORK-L | Text | | `RouteName` · IncidentId cite |
| card.status | WORK-L | Badge/StatusBar | * | `Status` · `ProgressPercent` |
| card.workType | WORK-L | Badge | | `WorkType` |
| action.progress | WORK-L | IconButton | * | `/work/progress?id=` |
| action.log | WORK-L | IconButton | * | `/work/log?id=` |
| action.chat | WORK-L | IconButton | * | `/work/chat?id=` |
| action.estimate | WORK-L | IconButton | | `/work/estimate/:id` |
| empty | WORK-L | EmptyState | | 0 rows |
| toast.fail | WORK-L | Toast | | load error · **cấm** `window.alert` |

**Labels:** `useFormOptions()` / copy keys — prototype hiện nhãn VN để review; Dev wire key.  
**GPS:** WORK-L **không** bắt buộc · peer progress owns · **cấm** fake.  
**Status map:** `new`→Chờ xử lý · `in_progress`→Đang xử lý · `done`→Hoàn thành · `cancelled`→Đã hủy.  
**WorkType cite:** `repair` · `inspect` · `emergency`.

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Path | `specs/web-rmms-work/ui/prototype/index.html` |
| Zone | `#sc-mnt-list` · `data-zone=WORK-L` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list` |
| Parity | Android 1-1 peer `#sc-mnt-list` + **chips live** (PO FILTER-P1) · 2 sample cards · hub · 4 actions · **no FAB** |
| Board | autoApprove=ON → `design_confirm=approve` |

## 5. Brand / typography

| Token | Hex / size |
|-------|------------|
| Primary / Deep | `#0C84C0` / `#086A9A` |
| Success / Warn | `#3CB448` / `#FCB43C` |
| Surface | `#F2F2F7` |
| label / field / nav | **13** / **≥16** / **17** |
| control height | **44** |

## 6. AC map (list)

| AC | Design coverage |
|----|-----------------|
| AC-L-01…04 | live list + search + chips + card binds |
| AC-L-05…06 | hub + peer actions · STD-NEST closed |
| AC-L-07 | **no** FAB / create control trên WORK-L |
| AC-L-08…12 | useFormOptions · phone 430 · mobile-bff · no GPS fake · no Me* |

## 7. API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `maintenance/work-orders` | search/status/workType · pageSize=50 |
| GET | `maintenance/work-orders/init-data` | chip LOOKUP |
| GET | `maintenance/work-orders/{id}` | cite peer header |

App base `{BffBase}/mobile-bff/api/v1`. **Cấm** invent `web-rmms-work/*` controller.

## 8. Open → next · Handoff SA

| id | Owner |
|----|-------|
| UNCLEAR-DOMAIN-MAP-WORK | SA add DOMAIN-MAP row |
| UNCLEAR-MSG-VS-COMMENT | SA cite Live |
| closed | FILTER-P1 · PEER-SPLIT · CREATE-FROM · **STD-NEST** |

| Field | Value |
|-------|-------|
| Next slash | `/agent-sa` |
| Chain | roleOnly=design · **không** start SA turn này (**GAP-PKT-ROLE-01**) |
| Compact | `handoff/design-compact.md` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |
| versionGate | `ok` |
| design_confirm | `approve` |
| writtenAt | `2026-09-26T05:02:00.000Z` |
