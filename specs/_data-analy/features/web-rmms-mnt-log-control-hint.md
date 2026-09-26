# Data-analy — controlHint — web-rmms-mnt-log

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-log` |
| title | Nhật ký công việc — timeline readonly WorkOrder |
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
| contentHash | `sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` |
| analyzedAt | `2026-09-25T22:54:54.759Z` |
| demo | **N/A** |
| realData | `specs/_data-analy/features/web-rmms-mnt-log-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Maintenance** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| mfeStdRoute | `/web-rmms-mnt-log` |
| productRoute | `/work/log` |
| taskId | `task_cdb5230d` |
| phoneFrame | `max-width: 430px` |
| formPattern | Mobile full / sheet · **không** ERP Modal/Slideout Kind B desktop |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** schema.  
> Nhãn UI: `useFormOptions()` / copy key — **cấm** hardcode tiếng Việt trên form.  
> **Cấm** nhét màn vào MFE desktop · **cấm** iOS/Android native.

## Sources

| Source | Path | note |
|--------|------|------|
| CTX | `docs/context/features/web-rmms-mnt-log.md` | greenfield · this run |
| Peer CTX | `docs/context/features/mnt-log.md` · `web-rmms-work.md` · `web-rmms-mnt-progress.md` | native toast · Work peers |
| Screens | `docs/plan/web-rmms-mobile/SCREENS.md` · `/work/log` | SSOT readonly |
| Plan / Tasks | `PLAN.md` · `TASKS.md` T-W5-03 | `MntLogView` |
| BE | `WorkOrdersController` · `WorkOrdersBffController` | Live GET/{id} · **không** `/logs` |
| DTO | `WorkOrderDto` · `WorkOrderInitDataDto` | Live derive timeline |
| DOMAIN-MAP | Maintenance · `api/v1/maintenance` | cite · **cấm ERP.*** |

## Screens (ids)

| id | route | surface |
|----|-------|---------|
| WORK-G | `/work/log` · std `/web-rmms-mnt-log` | screen/sheet nhật ký **readonly** |
| WORK-L | `/work` · peer `web-rmms-work` | entry card — **không** implement trong slug này |

**Out:** WORK-P progress · WORK-C chat · Me* · feedback · cam-view · journal/kết ca/tồn tại/tần suất (`web-rmms-mobile-b…e`).

## ControlHint inventory

| uiField | screen | controlHint | catalogKind / notes |
|---------|--------|-------------|---------------------|
| topBarTitle | WORK-G | Text | copy key «Nhật ký» / «Nhật ký xử lý» / «Nhật ký công việc» |
| backNav | WORK-G | Button/Nav | → `web-rmms-work` list |
| woCode | WORK-G | Text readonly | từ GET `{id}` · `Code` |
| woTitle | WORK-G | Text readonly | `Title` |
| woStatus | WORK-G | Text/Badge RO | `Status` · map init-data / list chrome (GAP-LABEL) |
| woRouteName | WORK-G | Text readonly | `RouteName` optional |
| woWorkType | WORK-G | Text readonly | `WorkType` · init-data |
| timeline | WORK-G | Timeline list | **derived** rows từ DTO — **không** POST |
| row.created | WORK-G | TimelineItem RO | always · `CreatedAt` · title key tạo CV |
| row.due | WORK-G | TimelineItem RO | nếu `DueAt` · hạn |
| row.description | WORK-G | TimelineItem RO | nếu `Description` |
| row.progress | WORK-G | TimelineItem RO | nếu % > 0 hoặc in_progress/done · `UpdatedAt` |
| row.note | WORK-G | TimelineItem RO | nếu `Note` · `UpdatedAt` |
| row.done | WORK-G | TimelineItem RO | nếu status `done` · `UpdatedAt` |
| emptyState | WORK-G | Empty | thiếu id / GET fail · copy «Chưa có nhật ký» · **cấm** demo fallback |
| primaryWrite | WORK-G | — | **N/A** — **cấm** Primary write CTA trên slug này |

## Filter / grid (desktop HARD)

| | |
|--|--|
| LinErpListFilterBar / DES-GRID-* | **N/A** — phone Work peer screen · **không** Kind B desktop grid |

## GPS

| Màn | Rule |
|-----|------|
| WORK-G | **không** bắt GPS (SCREENS `/work/log`) · **cấm** fake coords |
| WORK-L peer | không bắt GPS trên list |
| Detect AI / Field journal | **out** — `web-rmms-mobile-b…e` / vis — không thuộc slug này |

## UNCLEAR

| id | Issue | Action |
|----|-------|--------|
| UNCLEAR-ENTRY | Entry mọi status hay chỉ `done` (peer toast `#i-list`) | PO chốt · default: mọi status có id |
| UNCLEAR-SORT | newest-first vs oldest-first | Design zone · default newest-first |
| UNCLEAR-LABEL-MAP | init-data ≠ list chrome status VN | PO/Design 1 map · FE `useFormOptions` |
| UNCLEAR-HIST-API | History Signed sau này? | SA — P1 derive only · **cấm** invent `/logs` |

## Handoff

| Role | Dùng |
|------|------|
| PO | Screens WORK-G · DoD Live RO · derive timeline · useFormOptions · out peers |
| Design | Phone 430 · Android 1-1 · zone WORK-G · prototype reviewUrl · no desktop grid |
| SA | Giữ Live GET/{id} · Mobile.Bff proxy · GAP history · **cấm** invent `/logs` |
| Team-lead / Dev | Bind §B real-data · **cấm** web-bff client |

## DoR

- [x] changeScope=`new_page` · packKind=`list`
- [x] controlHint inventory đủ field WORK-G
- [x] real-data song song
- [x] demo N/A · **cấm** demo SSOT
- [x] BE Maintenance Live cite · **cấm ERP.***

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T22:54:54.759Z`
