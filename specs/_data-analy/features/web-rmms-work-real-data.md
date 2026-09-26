# Data-analy — real-data bind — web-rmms-work

| Field | Value |
|-------|-------|
| feature | `web-rmms-work` |
| title | Danh sách công việc |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c4e186f9` |
| prefix API | `api/v1` · resource `maintenance` |
| prefix BFF web (cite) | `web-bff/api/v1/maintenance` · **không** base client |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| bffRepo | `Linm.RMMS.Mobile.Bff` · **cấm** Route mobile-bff trên web-bff controllers |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-work` |
| productRoute | `/work` |
| domain | **Maintenance** (WorkOrder) · cite AiVision (peer progress media) |
| contentHash | `sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T21:53:27.279Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT / fake GPS |

## § Scope

| In | Out |
|----|-----|
| WORK-L list search/status/workType · cards · hub estimate · peer nav icons | Me tab · cam-view · feedback |
| Live `GET maintenance/work-orders` · `init-data` · cite `{id}` | invent controller/path `web-rmms-work/*` |
| Mobile.Bff proxy only | web-bff client base · ERP.* · iOS/Android |
| Peer nav progress/log/chat/estimate | gộp CRUD progress/log/chat/create WO primary vào slug |
| | journal / kết ca / tồn tại / tần suất (B–E) · Kind E `summary` |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-work.md` | — | created this run |
| `peer-context` | `mnt-list.md` · `maintenance.md` | — | DES + Live WO |
| `plan` | `SCREENS.md` Tab Work · `PLAN.md` · TASKS T-W5-01 | — | SSOT |
| `api-list` | `GET maintenance/work-orders` | EmptyState | toast fail |
| `api-init` | `GET maintenance/work-orders/init-data` | chips fallback LOOKUP | toast |
| `api-detail` | `GET maintenance/work-orders/{id}` | cite peer | toast |
| `domain-map` | Maintenance | — | **GAP** slug · **cấm ERP.*** |
| `catalog` | useFormOptions + init-data status/workType | — | **cấm** hardcode VN form |
| `demo` | — | N/A | **cấm** demo SSOT ship |
| `geo` | peer progress only | deny → peer block | **cấm** fake trên list |

## §B — Bind field (HARD)

### List WORK-L

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| search | tìm công việc | SearchInput | — | query `search` | — | Live | n/a |
| filter.status | trạng thái | Chip/Select | LOOKUP / init-data | `status` | — | Live | n/a |
| filter.workType | loại CV | Chip/Select | LOOKUP / init-data | `workType` | — | Live | n/a |
| hub.estimate | giao việc | HubRow | — | — | nav estimate | peer | n/a |
| card.title | tiêu đề | Text | — | `Title` | — | SCREENS | n/a |
| card.code | mã | Text | — | `Code` | — | Live | n/a |
| card.assignee | người/đội | Text | — | `AssigneeName` · `TeamName` | — | Live | n/a |
| card.dueAt | hạn | Text | — | `DueAt` | — | Live | n/a |
| card.route | tuyến | Text | — | `RouteName` | — | Live | n/a |
| card.status | trạng thái | Badge | LOOKUP | `Status` · `ProgressPercent` | — | Live | n/a |
| card.workType | loại | Badge | LOOKUP | `WorkType` | — | Live | n/a |
| action.progress | tiến độ | IconButton | — | — | nav peer progress | peer | n/a |
| action.log | nhật ký | IconButton | — | — | nav peer log | peer | n/a |
| action.chat | chat | IconButton | — | — | nav peer chat | peer | n/a |

**List query (cite Live / SCREENS):** `search` · `status` · `workType` · `page=1` · `pageSize=50`.

**Enum cite (maintenance Design):** status `new` / `in_progress` / `done` / `cancelled` · workType `repair` / `inspect` / `emergency`.

**Cấm** ERP.* · **cấm** fake GPS · **cấm** itemsOrDemo · **cấm** invent slug DTO/path · **cấm** hardcode VN labels · **cấm** FAB create trên list.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATIC / init-data | `GET maintenance/work-orders/init-data` + FE `useFormOptions` | CTX + SCREENS + peer | hardcode label VN |
| work-orders | `GET maintenance/work-orders` | DOMAIN-MAP Maintenance | invent flat `/work-orders` |
| profile | `GET auth/profile` | Auth cite shell | invent user API trong Work |

## §D — Map / vẽ

| Mục | Ghi |
|-----|-----|
| map | **không** draw GIS trên WORK-L |
| GPS | list N/A · peer progress Note embed only |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| list Status/WorkType | Maintenance Live | filter chips | GET list | cards |
| ProgressPercent | Maintenance Live | peer progress | POST progress (peer) | card bar RO trên list |
| create WO | estimate peer | estimate flow | POST work-orders (peer) | hub nav · **không** list create |
| complete | peer | complete | POST complete (peer) | list refresh |

`progress: list → peer progress|log|chat|estimate` · peer ngoài core DoD.

## §F — Handoff

| Role | Packet |
|------|--------|
| PO | DoD WORK-L · live API · no Me · no create on list · BFF mobile only |
| Design | control-map §B · phone 430 · Android 1-1 `#sc-mnt-list` · reviewUrl |
| SA | Cite Live Maintenance work-orders · DOMAIN-MAP row · Mobile.Bff · **cấm** invent path · **cấm** ERP.* |
| Dev web mobile | `Linm.Web.RMMS.Mobile` · `VITE_MOBILE_API_URL` `:5202` · live list |
| QA | empty list · search/filter · peer nav · no fake · no web-bff · no create FAB |

## Gaps (cite)

| id | Note |
|----|------|
| GAP-DA-WORK-CTX-01 | CTX `web-rmms-work.md` thiếu lúc start → **created** từ SCREENS + peer |
| GAP-DOMAIN-MAP-WORK | slug `web-rmms-work` chưa có row DOMAIN-MAP |
| GAP-MOB-MNT-PROG-GPS-01 | peer progress: GPS vào Note · chưa cột lat riêng |
| GAP-PEER-MNT | progress/log/chat/estimate = peer · không gộp primary vào slug |
| GAP-MSG-COMMENT | messages vs comments DEFER — SA cite Live |
| GAP-FILTER-P1 | filter sheet toast vs live chips — Design chốt |
| GAP-STD-NEST | std peer mounts — Design/Dev chốt |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T21:53:27.279Z`
