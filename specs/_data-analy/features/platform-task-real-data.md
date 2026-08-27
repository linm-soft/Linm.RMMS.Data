# Real-data bind — platform-task (Platform.Task / Công việc dùng chung)

| | |
|---|---|
| feature | `platform-task` |
| packKind | `platform` |
| changeScope | `new_page` |
| taskId | `task_b998f9a3` |
| prefix | Medical BFF `web-bff/api/v1` (cite) · **cấm** invent RMMS task API |
| beRepo | cite Medical `ITaskService` · **cấm** `Linm.RMMS.WebService` TasksController embed |
| uiRepo | `D:\Medical\Linm.Web.Medical.Incidents` (`task/endpoint.ts`) → target `MFE-CORE/Linm.Web.Task` |
| map | `none` |

## § Delta Current vs New (`new_page` · `task_b998f9a3`)

| ID | Current | New |
|----|---------|-----|
| GAP-DA-REAL | Stub draft only | §A–§F cite Medical + common + hub 25 |
| MFE UI | `endpoint.ts` client only · **GAP-PT-UI-01** | `Linm.Web.Task` pages bind same paths |
| BE live RMMS | **none** | TaskService NuGet consumer P2 — **cấm** embed P1 |
| Domain source | Medical filter `source` ≠ `patrol` | `CreateTaskDto` + column **GAP-PT-SOURCE-01** SA |
| Chat | BE unified messages live | `ChatSectionParcel` FE — prereq `platform-message` |
| Demo | `task-app.js` localStorage | zone/tab ref only — **cấm** SSOT (**GAP-DA-REAL-03**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `api` · list | `Medical\Linm.Web.Medical.WebService\src\Controllers\TasksController.cs` `GET /tasks` · FE `task\endpoint.ts` `getTasks` | list trống · KPI 0 | 4xx → toast · **cấm** `window.alert` · **cấm** silent empty nếu 5xx |
| `api` · pool | `TasksController` `GET /tasks/pool` · `getPoolTasks` | pool trống | toast |
| `api` · stats | `GET /tasks/stats` · `GET /tasks/pool/stats` | KPI 0 | toast |
| `api` · detail | `GET /tasks/{id}` · `getTaskById` | — | 404 → toast · redirect list |
| `api` · create | `POST /tasks` · `createTask` | — | validation toast |
| `api` · lifecycle | `PATCH …/claim` · `/start` · `/submit` · `/complete` · `/block` · … | — | 422 business rule toast |
| `api` · messages | `GET/POST/PUT/DELETE …/tasks/{id}/messages` · `ITaskService` | ChatTab empty | 404 task → toast |
| `api` · subtasks | `GET/POST/PATCH/DELETE …/tasks/{id}/subtasks` | checklist trống | toast |
| `api` · SLA alerts | `SlaController` `GET /sla/alerts?domain=task` | strip ẩn / 0 | toast |
| `api` · SLA escalate | `POST /sla/tasks/{id}/escalate` | — | toast success |
| `derived` · SLA chip | `SlaService` classify `due_date` vs UTC | no chip | — |
| `derived` · live | SignalR `CollaborationHub` group `Task_{id}` · `NewMessage` · `TaskStatusChanged` | — | reconnect via `@linm/notification` · **cấm** Message MFE `start()` |
| `demo` · zone ref | `Linm.RMMS.Demo/src/demo/task/js/task-app.js` | — | **cấm** bind demo-json |

`sourceCite` = file **có trong repo**. Inventory = live Medical service + MFE endpoint client (**chưa** `Linm.Web.Task` page).

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| listMode | Chế độ | Tab | task-list-mode | client route/query maps to API below | — | **no** page | n/a |
| search | Tìm | SearchTextInput | — | `GET /tasks?search=` | — | **gap** | n/a |
| status | Trạng thái | Dropdown | task-status | `GET /tasks?status=` | — | **gap** | n/a |
| priority | Ưu tiên | Dropdown | task-priority | `GET /tasks?priority=` | — | **gap** | n/a |
| sourceFilter | Phạm vi | Dropdown | task-source-filter | `GET /tasks?source=` (`created_by_me` \| `from_pool` \| `assigned_by_manager`) | — | **gap** | n/a |
| assignmentStrategy | Gán | Dropdown | task-assignment-strategy | `GET /tasks?assignmentStrategy=` | — | **gap** | n/a |
| idCode | Mã | Text readonly | — | `TaskResponseDto.idCode` | — | **gap** | n/a |
| title | Tiêu đề | Text | — | detail GET | `title` POST/PUT | **gap** | n/a |
| description | Mô tả | Text | — | detail GET | `description` | **gap** | n/a |
| statusChip | Trạng thái | Text readonly | task-status | detail GET | lifecycle PATCH actions | **gap** | n/a |
| priorityChip | Ưu tiên | Dropdown | task-priority | detail GET | `priority` PUT | **gap** | n/a |
| progress | Tiến độ | Text number | — | detail GET | `progress` PATCH `…/progress` | **gap** | n/a |
| assigneeName | Người nhận | Text readonly | — | detail GET | claim PATCH `…/claim` | **gap** | n/a |
| dueDate | Hạn | Date | — | detail GET `dueDate` | `dueDate` create/update | **gap** | n/a |
| slaSeverity | SLA | Text readonly | — | derived + `GET /sla/alerts?domain=task&severity=` | escalate POST | **gap** | n/a |
| poolList | Pool | list | — | `GET /tasks/pool` | claim PATCH | **gap** | n/a |
| kpiAssigned | Đã gán | Text readonly | — | `GET /tasks/stats` | — | **gap** | n/a |
| kpiPool | Pool | Text readonly | — | `GET /tasks/pool/stats` | — | **gap** | n/a |
| kpiSlaCritical | SLA quá hạn | Text readonly | — | `GET /sla/alerts?domain=task&severity=critical` | — | **gap** | n/a |
| kpiSlaWarning | SLA &lt; 24h | Text readonly | — | `GET /sla/alerts?domain=task&severity=warning` | — | **gap** | n/a |
| messageBody | Nhắn tin | Text | — | `GET /tasks/{id}/messages?type=message` | `content` · `type=message` POST | yes (`ChatTab` via parcel) | n/a |
| sendChat | Gửi | action | — | — | `POST /tasks/{id}/messages` | yes | n/a |
| commentBody | Bình luận | Text | — | `GET /tasks/{id}/messages?type=comment` | `content` · `type=comment` · `parent_id` | **gap** mount | n/a |
| sendComment | Gửi Comment | action | — | — | same POST | **gap** mount | n/a |
| chatSection | Trao đổi + Bình luận | parcel | — | same GET messages | same POST | **no** — `ChatSectionParcel` | n/a |
| subtasks | Checklist | list | — | `GET /tasks/{id}/subtasks` | POST/PATCH/DELETE subtasks | **gap** P2 UI | n/a |

**Prefix map** (Medical BFF — consumer giữ khi NuGet extract):

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/tasks` |
| Pool | `GET /web-bff/api/v1/tasks/pool` |
| Stats | `GET /web-bff/api/v1/tasks/stats` · `/pool/stats` |
| Detail | `GET /web-bff/api/v1/tasks/{id}` |
| Create | `POST /web-bff/api/v1/tasks` |
| Update | `PUT /web-bff/api/v1/tasks/{id}` |
| Cancel | `DELETE /web-bff/api/v1/tasks/{id}` |
| Claim / Start / … | `PATCH /web-bff/api/v1/tasks/{id}/{action}` |
| Messages | `GET/POST /web-bff/api/v1/tasks/{id}/messages` |
| SLA alerts | `GET /web-bff/api/v1/sla/alerts?domain=task` |
| SLA escalate | `POST /web-bff/api/v1/sla/tasks/{id}/escalate` |

FE client: `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` (relative `/tasks` on apiClient).

**List mode → API mapping** (P1 Design chốt query):

| listMode | API call |
|----------|----------|
| `mine` | `GET /tasks` default role scope + optional filters |
| `pool` | `GET /tasks/pool` |
| `sla` | `GET /sla/alerts?domain=task` (+ optional severity filter client) |

**Cấm** invent `api/v1/rmms/tasks` · `api/v1/td-tk/*` · embed `TasksController` vào `Linm.RMMS.WebService`.

**GAP-PT-SOURCE-01:** RMMS `CreateTask` `source=patrol` + `sourceEntityId` — **chưa** trên Medical `CreateTaskDto` · SA chốt khi `Linm.Platform.TaskService` scaffold.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| task-status | closed enum Medical lifecycle | hub 25 §3 | invent status |
| task-priority | `FormsService.TaskPriorityOptions` | low · medium · high · critical | demo `S.PRI` |
| task-assignment-strategy | closed | direct · pool · team | — |
| task-source-filter | query `source=` Medical | `created_by_me` · `from_pool` · `assigned_by_manager` | nhầm với domain `patrol` |
| task-list-mode | UI only | mine · pool · sla | localStorage demo |
| message-type | query `type=` | message · comment | invent type |

## §D — Map / vẽ

`map: none` — Task list/detail **không** map canvas P1. Field `patrol` deep-link only.

Handoff query: `?from=patrol&sourceId={sessionId|pointId}` — read-only context banner · **cấm** session CRUD on task page.

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| status | `TaskResponseDto.status` | assignee · manager · system | `PATCH …/claim` · `/start` · `/submit` · `/approve` · `/block` · `/complete` · `/cancel` | header chip + action bar |
| progress | `progress` 0–100 | assignee | `PATCH …/progress` | progress display P2 |
| assignmentStrategy | DTO | creator | create only · claim changes assignee | pool CTA |
| slaSeverity | derived `due_date` | system clock | `GET /sla/alerts` · `POST …/escalate` | KPI + row chip |
| unread messages | subscription | open chat | mark-read via message parcel | badge on entity — inbox federate P2 |

Lifecycle map (cite `TasksController` header):

`created → assigned → in_progress → under_review → completed`  
+ `support_requested` · `collaborative` · `blocked` · `changes_requested` · `cancelled`

SignalR: group `Task_{id}` events `NewMessage` · `MessageEdited` · `MessageDeleted` · `TaskStatusChanged`.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «task = Medical cite until TaskService» · packKind `platform` · queue second |
| Design | control-map khớp §B · Kind B+D+E zones · **cấm** demo mock data SSOT |
| SA | **giữ path đã cite** · TaskService NuGet P2 · GAP-PT-SOURCE-01 · **cấm** RMMS embed |
| Dev | `/implement-task-service` · prereq `ChatSectionParcel` · **không** trong `roleOnly=data_analy` |
| QA | queued `/agent-qa*` — list/pool/SLA/detail/chat/claim · no alert |

## § Empty / fail

| Case | Behavior |
|------|----------|
| list empty | empty copy · **cấm** fake row demo |
| pool empty | «Không có việc trong pool» |
| SLA alerts empty | KPI 0 · tab sla list trống |
| detail 404 | toast · navigate `/cv` |
| messages empty | ChatTab / CommentsTab empty state common |
| 4xx lifecycle | toast business message |
| 5xx list | toast error · **cấm** silent empty |
| SignalR down | stale list until refresh · hub owned `@linm/notification` |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Demo-json / localStorage task làm SSOT | Cite Medical `TasksController` + `endpoint.ts` |
| RMMS.WebService Task embed | `Linm.Platform.TaskService` NuGet consumer |
| `task.html` mock làm API contract | zone/tab ref only (`platform-pack-live-mfe`) |
| ChatTab fork trong Field patrol | deep-link `/cv/:id` + `ChatSectionParcel` |
| `window.alert` | `useAppToast` / `useAlert` |
| Invent RMMS live path | Medical BFF outline until extract |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-26T23:01:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| taskId | `task_b998f9a3` |
