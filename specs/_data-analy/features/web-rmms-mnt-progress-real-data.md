# Data-analy — real-data bind — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| title | Tiến độ công việc — cập nhật % / Note / hoàn thành |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d447ee27` |
| prefix API | `api/v1/maintenance` |
| prefix BFF web (cite) | `web-bff/api/v1/maintenance` · **cấm** FE gọi |
| prefix BFF mobile (HARD) | `mobile-bff/api/v1` · `:5202` · cùng `{resource}` · **chỉ** `Linm.RMMS.Mobile.Bff` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-progress` |
| domain | **Maintenance** (WorkOrder) |
| contentHash | `sha256:a7e3c91b4d2f6801e5a9b0c3d8f1472e6b5a0d9c4e1f2837a6b5c4d3e2f1098a` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| analyzedAt | `2026-09-25T22:23:32.489Z` |
| demo | **N/A** · **cấm** demo-json / in-app mock SSOT |

## § Scope

| In | Out |
|----|-----|
| WORK-P `/work/progress` · GET detail · POST progress · POST complete · GPS→Note · init-data display | WORK-L list · WORK-G log · WORK-C chat · estimate · Me* · journal/kết ca (`web-rmms-mobile-b…e`) |
| API **Live** WorkOrder progress/complete | Invent `mnt-progress` controller / Progress DTO fork lat/media |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/web-rmms-mnt-progress.md` | — | — |
| `peer` | `docs/context/features/mnt-progress.md` · `web-rmms-work.md` | — | không clone native toast-only |
| `plan` | `docs/plan/web-rmms-mobile/SCREENS.md` · `/work/progress` | — | SSOT |
| `api` | `api/src/.../Maintenance/Controllers/WorkOrdersController.cs` · `{id}/progress` · `{id}/complete` | 404 → toast | toast · **cấm** `window.alert` |
| `bff-web` | `bff/domains/maintenance/.../WorkOrdersBffController.cs` · cite only | — | **cấm** FE web-bff |
| `bff-mobile` | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/maintenance/work-orders/**` | proxy 503 | retry |
| `entity` | `WorkOrderEntity` · table maintenance work orders | — | tenant / soft-delete |
| `dto` | `WorkOrderDtos.cs` · `ProgressWorkOrderRequest` · `CompleteWorkOrderRequest` · `WorkOrderDto` · `WorkOrderInitDataDto` | — | validate 0–100 |
| `domain-map` | `docs/DOMAIN-MAP.md` · Maintenance · row `web-rmms-work` peer | — | **cấm ERP.*** |
| `geo` | `navigator.geolocation` | deny → block nút cần tọa độ | **cấm** fake lat/lng |
| `files` | optional `files/*` / `ai-vision/uploads` | GAP-MEDIA | — |
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
| progressPercent | tiến độ % | Number/Slider | — | detail prefill | `ProgressPercent` POST progress | gap→Live | n/a |
| note | ghi chú | Text | — | detail | `Note` · optional GPS suffix | gap→Live | n/a |
| lat/lng/accuracyM | GPS | GPS | geo | device | **không** body field · encode vào `Note` | gap | n/a |
| photoLocalIds | ảnh | FileMulti | files | — | GAP — **cấm** invent trên Progress body | gap | n/a |
| submitProgress | cập nhật | Button | — | — | `POST …/{id}/progress` `{ ProgressPercent, Note? }` | Live | n/a |
| submitComplete | hoàn thành | Button | — | — | `POST …/{id}/complete` `{ Note? }` · server 100% + `done` | Live | n/a |
| initStatuses | map status | lookup | LOOKUP_STATUS | `GET …/work-orders/init-data` | display only | peer | n/a |
| initWorkTypes | map workType | lookup | LOOKUP_WORKTYPE | init-data | display only | peer | n/a |

**Progress Live body** (`ProgressWorkOrderRequest`): `ProgressPercent` (0–100) · `Note?`.  
Server: nếu status `new` → `in_progress`.

**Complete Live body** (`CompleteWorkOrderRequest`): `Note?`.  
Server: `ProgressPercent=100` · `Status=done`.

**Cấm** invent lat/lng/media trên Progress/Complete body · **cấm** ERP.* · **cấm** fake GPS · **cấm** FE gọi `web-bff`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| LOOKUP_STATUS | `GET maintenance/work-orders/init-data` → `Statuses` | WorkOrderService labels | hardcode VN lệch map |
| LOOKUP_WORKTYPE | init-data → `WorkTypes` | same | hardcode |
| geo | device geolocation | — | fake coords / demo lat |
| files | optional files/ai-vision (GAP) | FileService | persist full URL trên Progress DTO |

## §D — Map / vẽ

N/A — không map canvas. GPS chỉ đọc device → text `Note`.

## §E — FormMode ↔ API

| Mode | Trigger | API |
|------|---------|-----|
| view/prefill | open WORK-P với `id` | `GET …/work-orders/{id}` |
| update progress | primary Cập nhật | `POST …/{id}/progress` |
| complete | Hoàn thành / % = 100 flow | `POST …/{id}/complete` |
| lookup | mount / display map | `GET …/work-orders/init-data` |

## §F — Empty / error

| Case | UX |
|------|----|
| GET 404 | toast · back list |
| POST validate % ngoài 0–100 | inline / toast |
| GPS deny | disable nút cần tọa độ · **cấm** fake |
| BFF 503 | retry toast |
| Network | toast · **cấm** `window.alert` |

## §G — Out of scope / cấm

- List/create WO · messages · summary Kind E
- Tab Cá nhân · iOS/Android native edit
- Route `mobile-bff` trên WebService web-bff controllers
- Demo-json / itemsOrDemo
- Invent controller theo slug feature

## DoR real-data

- [x] §A sources Live cite
- [x] §B bind mọi uiField WORK-P
- [x] FormMode↔API
- [x] Mobile.Bff HARD · cấm web-bff FE
- [x] GPS/media GAP ghi rõ
