# Data-analy — controlHint — web-rmms-work

| Field | Value |
|-------|-------|
| feature | `web-rmms-work` |
| title | Danh sách công việc |
| packKind | `list` |
| changeScope | `new_page` |
| mode | `feature_context` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| versionGate | `ok` |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |
| analyzedAt | `2026-09-25T21:53:27.279Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-work-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **Maintenance** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| mfeStdRoute | `/web-rmms-work` |
| productRoute | `/work` |
| taskId | `task_c4e186f9` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full · Android 1-1 · **không** ERP Modal/Slideout Kind B desktop |
| bff | `Linm.RMMS.Mobile.Bff` · `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1` · **cấm** web-bff |
| priorPeer | `mnt-list` · `maintenance` · `web-rmms-mnt-progress` · `web-rmms-mnt-log` · `web-rmms-mnt-chat` · estimate · home |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype reviewUrl. SA **cite** Live `maintenance/work-orders` · **cấm** invent `web-rmms-work` controller.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** tab Cá nhân · **cấm** iOS/Android · **cấm** fake GPS · **cấm** journal/kết ca/tồn tại/tần suất (B–E).  
> **Không** form tạo trên list (tạo từ estimate peer).

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-work.md` | **created this run** · hash gate |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` | Tab Work `/work` (+ progress/log/chat peer) |
| Plan/task | `PLAN.md` Tab work · `TASKS.md` T-W5-01 | `MntListView` |
| Peer CTX | `mnt-list.md` · `maintenance.md` | DES-MOB-MNT-LIST · Live WO |
| Peer | mnt-progress · mnt-log · mnt-chat · estimate · home | nav siblings |
| DOMAIN-MAP | Maintenance | **GAP** slug `web-rmms-work` |
| Prototype | `specs/mobile-p1/ui/prototype/android/index.html` `#sc-mnt-list` | Design 1-1 only · **không** demo SSOT ship |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| WORK-L | `/work` · std `/web-rmms-work` | List search · status/workType chips · cards · hub estimate · peer action icons |
| WORK-P | `/work/progress` | Peer `web-rmms-mnt-progress` |
| WORK-G | `/work/log` | Peer `web-rmms-mnt-log` |
| WORK-C | `/work/chat` | Peer `web-rmms-mnt-chat` |
| WORK-E | `/work/estimate/:id` | Peer estimate |

**Out:** Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent Work*Controller cho slug này · web-bff client · create WO form trên list · Kind E KPI `maintenance/summary`.

## ControlHint inventory

### WORK-L — List

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| screenTitle | WORK-L | Text | copy key «Danh sách công việc» · useFormOptions |
| back | WORK-L | IconButton | nav Home / shell |
| filter.open | WORK-L | IconButton | Lọc · P1 toast hoặc sheet status/workType · Design chốt |
| search | WORK-L | SearchInput | query `search` · placeholder copy key |
| hub.estimate | WORK-L | HubRow/Button | «Giao việc xử lý» → peer estimate `#sc-estimate` |
| filter.status | WORK-L | Select/Chip | LOOKUP / init-data → `status` |
| filter.workType | WORK-L | Select/Chip | LOOKUP / init-data → `workType` |
| list | WORK-L | CardList | `GET maintenance/work-orders` · pageSize=50 |
| card.title | WORK-L | Text | `Title` |
| card.code | WORK-L | Text | `Code` / IdCode |
| card.assigner | WORK-L | Text | assigner display (DTO Live) |
| card.assignee | WORK-L | Text | `AssigneeName` · `TeamName` |
| card.dueAt | WORK-L | Text | `DueAt` |
| card.incident | WORK-L | Text | `IncidentId` / link cite |
| card.route | WORK-L | Text | `RouteName` |
| card.status | WORK-L | Badge/StatusBar | `Status` · `ProgressPercent` |
| card.workType | WORK-L | Badge | `WorkType` |
| action.progress | WORK-L | IconButton | nav peer `/work/progress?id=` · `#i-sync` |
| action.log | WORK-L | IconButton | nav peer `/work/log` |
| action.chat | WORK-L | IconButton | nav peer `/work/chat` |
| action.estimate | WORK-L | IconButton | nav peer estimate |
| empty | WORK-L | EmptyState | copy key |
| toast.fail | WORK-L | Toast | load error · **cấm** `window.alert` |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone list chips · **không** Kind B desktop grid primary |
| WORK-L filters | mobile Search + status/workType · pageSize=50 |

## GPS

| Màn | Rule |
|-----|------|
| WORK-L | **không** bắt buộc GPS để load/list |
| WORK-P (peer) | Geolocation → nhúng `Note` · deny → chặn nút cập nhật cần tọa độ (peer DoD) · GAP-MOB-MNT-PROG-GPS-01 |
| WORK-G / WORK-C | GPS: không |

## API (cite Live — SA confirm DTO)

| Method | Path | Note |
|--------|------|------|
| GET | `maintenance/work-orders` | list filters search/status/workType |
| GET | `maintenance/work-orders/init-data` | lookup status/workType |
| GET | `maintenance/work-orders/{id}` | cite peer header |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** invent path theo slug `web-rmms-work`.

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-DOMAIN-MAP-WORK | DOMAIN-MAP chưa có row `web-rmms-work` | SA thêm · Maintenance · MFE `/web-rmms-work` |
| UNCLEAR-FILTER-P1 | mnt-list: filter sheet toast P1 vs chips live | Design/PO chốt chips vs toast-only |
| UNCLEAR-PEER-SPLIT | progress/log/chat/estimate in/out pack | P1 core = WORK-L · peer nav OK · không gộp CRUD peer vào slug |
| UNCLEAR-MSG-VS-COMMENT | SCREENS `…/messages` vs maintenance `comments` DEFER | SA cite Live message path · **cấm** invent |
| UNCLEAR-STD-NEST | std deep peer mounts vs query `?id=` | Design/Dev: mount list + peer routes Mobile MFE |
| UNCLEAR-CREATE-FROM | Không create trên list | estimate peer tạo WO · **cấm** FAB invent create |

## Handoff

| Role | Dùng |
|------|------|
| PO | WORK-L DoD · live list · no create on list · no Me · useFormOptions · peer nav |
| Design | Phone 430 · Android 1-1 `#sc-mnt-list` · zones WORK-* · prototype + reviewUrl |
| SA | Cite Live maintenance/work-orders · Mobile.Bff · DOMAIN-MAP row · **cấm** ERP.* |
| TL/Dev | Wire Mobile MFE only · BFF `:5202` · live list · **cấm** web-bff |
| QA | empty list · filter search · peer nav · no fake coords · no Me · no web-bff · no create FAB |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T21:53:27.279Z`
