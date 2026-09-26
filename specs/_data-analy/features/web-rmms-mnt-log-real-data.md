# Data-analy — real-data bind — web-rmms-mnt-log

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-log` |
| title | Nhật ký công việc — timeline readonly WorkOrder |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_cdb5230d` |
| prefix API | `api/v1/maintenance` |
| prefix BFF web (cite) | `web-bff/api/v1/maintenance` · **cấm** FE gọi |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` · **chỉ** `Linm.RMMS.Mobile.Bff` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-log` |
| domain | **Maintenance** (WorkOrder) |
| contentHash | `sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T22:54:54.759Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope

| In | Out |
|----|-----|
| WORK-G `/work/log` · GET detail · init-data display · client-derive timeline | WORK-L list · WORK-P progress/complete · WORK-C chat · estimate · Me* · journal/kết ca (`web-rmms-mobile-b…e`) |
| API **Live** WorkOrder GET/{id} · init-data | Invent `mnt-log` / `…/logs` / `WorkOrderProgress` history controller |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mnt-log.md` | — | — |
| `peer` | `docs/context/features/mnt-log.md` · `web-rmms-work.md` · `web-rmms-mnt-progress.md` | — | không clone native toast-only |
| `plan` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/work/log` | — | SSOT readonly |
| `api` | `api/src/.../Maintenance/Controllers/WorkOrdersController.cs` · GET `{id}` · init-data | 404 → empty + toast | toast · **cấm** `window.alert` |
| `bff-web` | `bff/domains/maintenance/.../WorkOrdersBffController.cs` · cite only | — | **cấm** FE web-bff |
| `bff-mobile` | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders/**` | proxy 503 | retry |
| `entity` | `WorkOrderEntity` · table maintenance work orders | — | tenant / soft-delete |
| `dto` | `WorkOrderDtos.cs` · `WorkOrderDto` · `WorkOrderInitDataDto` | — | derive only Signed fields |
| `domain-map` | `docs/DOMAIN-MAP.md` · Maintenance · peer `web-rmms-work` / `web-rmms-mnt-progress` | — | **cấm ERP.*** · GAP-DMAP slug row |
| `geo` | — | N/A trên WORK-G | **cấm** fake lat/lng |
| `demo` | — | N/A | **cấm** demo SSOT |

## §B — Bind field (HARD)

| uiField | Label (key) | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------------|-------------|-------------|-----|-------------|---------|------------|
| wo.byId | chi tiết WO | detail | — | `GET …/maintenance/work-orders/{id}` | — | peer work | n/a (new std) |
| woCode | mã | Text RO | — | detail | `Code` | peer | n/a |
| woTitle | tiêu đề | Text RO | — | detail | `Title` | peer | n/a |
| woStatus | trạng thái | Badge RO | LOOKUP_STATUS | detail · init-data | `Status` | peer | n/a |
| woRouteName | tuyến | Text RO | — | detail | `RouteName` | peer | n/a |
| woWorkType | loại CV | Text RO | LOOKUP_WORKTYPE | detail · init-data | `WorkType` | peer | n/a |
| timeline | nhật ký | Timeline | — | detail → client derive | **không** write | gap→derive | n/a |
| row.created | tạo CV | TimelineItem | — | `CreatedAt` | — | derive | n/a |
| row.due | hạn | TimelineItem | — | `DueAt` (if set) | — | derive | n/a |
| row.description | mô tả | TimelineItem | — | `Description` | — | derive | n/a |
| row.progress | tiến độ % | TimelineItem | — | `ProgressPercent` · `UpdatedAt` · status | — | derive | n/a |
| row.note | ghi chú | TimelineItem | — | `Note` · `UpdatedAt` | — | derive | n/a |
| row.done | hoàn thành | TimelineItem | — | status=`done` · `UpdatedAt` | — | derive | n/a |
| emptyState | trống | Empty | — | missing id / GET fail | — | — | n/a |
| initStatuses | map status | lookup | LOOKUP_STATUS | `GET …/work-orders/init-data` | display only | peer | n/a |
| initWorkTypes | map workType | lookup | LOOKUP_WORKTYPE | init-data | display only | peer | n/a |

**Read Live:** `WorkOrderDto` Signed fields dùng derive: `CreatedAt` · `DueAt` · `Description` · `ProgressPercent` · `Note` · `UpdatedAt` · `Status` · `Code` · `Title` · `RouteName` · `WorkType`.

**Write:** **không** — **cấm** POST progress/complete/messages trên slug này (peers).

**Cấm** invent `GET …/logs` · `WorkOrderProgress` table API · ERP.* · fake GPS · FE gọi `web-bff`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATUS | `GET maintenance/work-orders/init-data` → `Statuses` | WorkOrderService labels | hardcode VN lệch map |
| LOOKUP_WORKTYPE | init-data → `WorkTypes` | same | hardcode |
| geo | N/A WORK-G | — | fake coords / demo lat |

## §D — Map / vẽ

N/A — không map canvas · không GPS capture trên nhật ký.

## §E — FormMode ↔ API

| Mode | Trigger | API |
|------|---------|-----|
| view/prefill | open WORK-G với `id` | `GET …/work-orders/{id}` |
| derive | after GET OK | client timeline rows (no extra API) |
| lookup | mount / display map | `GET …/work-orders/init-data` |
| write | — | **N/A** |

## §F — Empty / error

| Case | UX |
|------|----|
| thiếu `id` | empty «Chưa có nhật ký» · back list |
| GET 404 | empty + toast · back list |
| BFF 503 | retry toast |
| Network | toast · **cấm** `window.alert` |
| timeline 0 rows (edge) | empty copy · **cấm** demo fallback |

## §G — Out of scope / cấm

- POST progress / complete · messages · list/create WO · Kind E summary
- Tab Cá nhân · iOS/Android native edit
- Route `mobile-bff` trên WebService web-bff controllers
- Demo-json / itemsOrDemo
- Invent controller / history path theo slug feature
- Patrol journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b…e`)

## DoR real-data

- [x] §A sources Live cite
- [x] §B bind mọi uiField WORK-G
- [x] FormMode↔API (read-only)
- [x] Mobile.Bff HARD · cấm web-bff FE
- [x] History GAP ghi rõ · cấm invent `/logs`

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=2` · `contentHash=sha256:b8f4e2a19c7d5036e0a1b2c3d4e5f67890123456789abcdef0123456789abcd` · `rulesVersion=2026.09.25.2` · `analyzedAt=2026-09-25T22:54:54.759Z`
