# Data-analy — controlHint — platform-task (Platform.Task / Công việc dùng chung)

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| packKind | `platform` (đề xuất · **không** list/report/master RMMS Field) |
| mode | `feature_context` (new_page · **no Excel** · CTX hub 25/26 + live Medical cite + demo zone ref) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962` |
| headerFingerprint | `sha256:platform-task-mfe-v1` |
| analyzedAt | `2026-08-26T23:01:00.000Z` |
| cluster | — (không Excel) |
| taskId | `task_b998f9a3` |
| autoApprove | `ON` |
| beRepo | cite Medical `ITaskService` + `TasksController` + `SlaController` · **cấm** RMMS.WebService embed Task |
| uiRepo | `D:\Medical\Linm.Web.Medical.Incidents` (`task/endpoint.ts` · **thiếu** Task*Page) → target `MFE-CORE/Linm.Web.Task` |
| common | `ChatTab` · `CommentsTab` · `ChatSectionParcel` (`@linm/message`) · `useMessages` · `taskGroup` |
| devSlash | `/implement-task-service` · chat parcel `/implement-message-service` (prereq) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **không** invent RMMS task path.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.  
> **Cấm** `window.alert` · **cấm** clone ChatTab vào Field tuần đường.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> **DEM N/A** (`platform-pack-live-mfe`) — demo `task.html` chỉ zone/tab ref · **cấm** SSOT data.

## Sources

| Source | Path | Note |
|--------|------|------|
| Context | `docs/context/features/platform-task.md` | Kind B list + D detail · packKind platform |
| Hub task | `docs/context/25-PLATFORM-TASK.md` | Medical → TaskService extract · gaps |
| Hub chat | `docs/context/26-MESSAGE-PARCEL.md` | ChatSectionParcel · send/expand SSOT |
| Plan | `docs/plan/platform-task/PLAN.md` | Phase scaffold · **cấm** invent RMMS path |
| MFE live (cite) | `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` | API client đủ lifecycle · **GAP-PT-UI-01** không Task*Page |
| BE cite | `D:\Medical\Linm.Web.Medical.WebService\src\Controllers\TasksController.cs` | `web-bff/api/v1/tasks` |
| BE cite | `D:\Medical\Linm.Web.Medical.WebService\src\Services\ITaskService.cs` | lifecycle + messages |
| BE cite | `D:\Medical\Linm.Web.Medical.WebService\src\Controllers\SlaController.cs` | `sla/alerts` · `sla/tasks/{id}/escalate` |
| Demo zone ref | `Linm.RMMS.Demo/src/demo/task/task.html` · `js/task-app.js` | mine/pool/sla tabs · KPI · detail tabs — **không** SSOT data |
| Target MFE | `MFE-CORE/Linm.Web.Task` (`@linm/task`) | **GAP-PT-REPO-01** chưa scaffold |

Normalized header (no Excel):

`idCode|title|status|priority|source|assignee|dueDate|slaSeverity|assignmentStrategy`

## § Delta Current vs New (`new_page`)

| ID | Current (2026-08-27 inventory) | New (SSOT hub 25 + CTX) | Surface |
|----|--------------------------------|-------------------------|---------|
| GAP-PT-REPO-01 | Chưa repo `Linm.Platform.TaskService` / `Linm.Web.Task` | Scaffold API + BFF NuGet + MFE `@linm/task` route `/cv` | platform |
| GAP-PT-UI-01 | Medical Incidents: `task/endpoint.ts` + nav `/tasks` stub · **không** TaskListPage/TaskDetailPage | Kind B list + Kind D detail + SLA strip | MFE |
| GAP-PT-COMMENT-UI-01 | `CommentsTab` không mount task form | Mount qua `ChatSectionParcel` `mode=both` | detail |
| GAP-MSG-PARCEL-01 | Thiếu `ChatSectionParcel` export | Wrap ChatTab+CommentsTab+useMessages | detail |
| GAP-MSG-ROUTE-01 | Medical hard-code `/tasks/:id` | RMMS `routeMap` `task=/cv/:id` (TL `route_confirm`) | ↗ expand |
| GAP-PT-SOURCE-01 | Medical `source` query = `created_by_me` \| `from_pool` \| `assigned_by_manager` | RMMS domain `source=patrol` + `sourceEntityId` trên CreateTask — **SA chốt** khi extract | BE + list filter |
| GAP-PT-TICKET-01 | `ticketId` optional filter | RMMS task độc lập — **không** bắt ticket parent | create |
| GAP-PT-INBOX-01 | Conversations Medical DB | **DEFER** federate TaskService P2 | inbox |
| RMMS embed | **cấm** copy Task vào `Linm.RMMS.WebService` | Consumer BFF NuGet only | BE |

**Không** đổi: Medical `ITaskService` lifecycle map · unified messages `type=message|comment` · SignalR `Task_{id}` · SLA derived `due_date` · toast not alert.

**Cấm** chat CRUD trên Field `patrol` — deep-link `?from=patrol&sourceId=` only.

## Kind / zones (handoff Design)

Pack **platform** = Kind **B** list (mine + pool views) + Kind **E** SLA KPI strip + Kind **D** detail tabs. Demo HTML = zone ref — **cấm** clone chrome/topnav.

| Zone | Pattern | DoD |
|------|---------|-----|
| A | KPI strip (Kind E) | Đã gán · Pool · SLA critical · SLA warning — từ `GET /tasks/stats` + `GET /sla/alerts?domain=task` |
| B | Tab switcher | Của tôi · Pool chờ nhận · Cảnh báo SLA — **không** invent tab thứ 4 P1 |
| C | List (Kind B) | Row: idCode · title · source chip · status · assignee · SLA chip · priority chip |
| D | Detail header (Kind D) | Lifecycle status · priority · due · claim/start CTAs · escalate SLA |
| E | Detail tabs | `ChatSectionParcel` Trao đổi + Bình luận — hub 26 §3 |
| Skip chrome | — | logo · GOVOne · demo «SignalR mock» note · Field chat form |

## Control hint — list filters (Zone B/C)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| listMode | Chế độ xem | `Tab` (segment) | enum task-list-mode | `mine` · `pool` · `sla` — demo ref · map query not localStorage |
| search | Tìm kiếm | `SearchTextInput` | text | title · description · idCode — `GET /tasks?search=` |
| status | Trạng thái | `Dropdown` | enum task-status | lifecycle Medical |
| priority | Ưu tiên | `Dropdown` | enum task-priority | low · medium · high · critical |
| source | Nguồn / phạm vi | `Dropdown` | enum task-source-filter | Medical: `created_by_me` \| `from_pool` \| `assigned_by_manager` · RMMS domain `patrol` = **GAP-PT-SOURCE-01** |
| assignmentStrategy | Chiến lược gán | `Dropdown` | enum task-assignment-strategy | direct · pool · team |
| assigneeId | Người nhận | `SearchInput` | users | manager filter · P2 Integration |
| category | Danh mục | `Dropdown` | enum task-category | optional · FormsService options |
| ticketId | Ticket liên kết | `Text` readonly | — | optional parent · RMMS thường null |

## Control hint — list row / grid (Zone C)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| idCode | Mã | `Text` readonly | IdCode service — **cấm** Guid display |
| title | Tiêu đề | `Text` readonly | click → detail |
| status | Trạng thái | `Text` readonly | status chip |
| priority | Ưu tiên | `Text` readonly | priority chip color |
| assigneeName | Người nhận | `Text` readonly | «chưa gán» pool |
| dueDate | Hạn | `Date` readonly | local display UTC store |
| slaSeverity | SLA | `Text` readonly | derived critical/warning/none — **cấm** bảng alert |
| sourceLabel | Nguồn | `Text` readonly | domain source P2 · filter source P1 |
| claimAction | Nhận việc | action primary | pool row · `PATCH …/claim` |

## Control hint — detail header + lifecycle (Zone D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| idCode | Mã | `Text` readonly | | header |
| title | Tiêu đề | `Text` readonly | * | View · Edit = `Text` |
| description | Mô tả | `Text` | | textarea D14/M16 |
| status | Trạng thái | `Text` readonly | * | lifecycle chip + timeline |
| priority | Ưu tiên | `Dropdown` | * | enum task-priority |
| progress | Tiến độ | `Text` (number) | | 0–100 · `PATCH …/progress` |
| assigneeName | Người nhận | `Text` readonly | | pool → claim CTA |
| dueDate | Hạn xử lý | `Date` | | ISO UTC |
| slaSeverity | SLA | `Text` readonly | | chip critical/warning |
| assignmentStrategy | Gán | `Dropdown` | * | direct · pool · team |
| claimTask | Nhận việc | action | | pool unassigned · `PATCH …/claim` |
| startTask | Bắt đầu | action | | `PATCH …/start` |
| submitReview | Gửi duyệt | action | | `PATCH …/submit` |
| completeTask | Hoàn thành | action | | `PATCH …/complete` |
| blockTask | Chặn | action | | `PATCH …/block` + reason `Text` |
| escalateSla | Leo thang SLA | action warn | | `POST /sla/tasks/{id}/escalate` |
| cancelTask | Hủy | action danger | | manager · `DELETE …/tasks/{id}` body reason |

## Control hint — chat / comment (Zone E · `ChatSectionParcel`)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| messageBody | Nhắn tin | `Text` | * | ChatTab · send `fa-paper-plane` |
| sendChat | Gửi | action `fa-paper-plane` | * | `POST …/tasks/{id}/messages` `type=message` |
| commentBody | Bình luận | `Text` | * | CommentsTab thread |
| sendComment | Gửi Comment | action `fa-paper-plane` | * | `type=comment` · `parent_id` |
| expandPanel | Mở rộng | action `fa-expand` | | `TabSlideout` |
| detailLink | Chi tiết entity | action ↗ | | routeMap — inbox only on parcel |

Chi tiết bind: `platform-task-real-data.md` §B messages · cross-ref `platform-message-real-data.md` prefix `tasks`.

`controlHint=UNCLEAR`: **none**.

## § Tab index (HARD · GAP-TAB-01)

Demo `task-app.js` + CTX + hub 26. Role sau **cấm** reorder / invent tab.

### Surface A — List page (`/cv` draft)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `mine` | Của tôi | list mode |
| 1 | `pool` | Pool chờ nhận | list mode |
| 2 | `sla` | Cảnh báo SLA | list mode |

### Surface B — Detail page (`/cv/:id`)

| Index | id | VN | Kind |
|-------|-----|-----|------|
| 0 | `chat` | Trao đổi | form tab (`ChatSectionParcel` ChatTab) |
| 1 | `comments` | Bình luận | form tab (`ChatSectionParcel` CommentsTab) |

Detail **cấm** CRUD session tuần đường — query `?from=patrol&sourceId=` read-only handoff.

## Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| task-status | Medical lifecycle | `created` · `assigned` · `in_progress` · `under_review` · `completed` · `support_requested` · `collaborative` · `blocked` · `changes_requested` · `cancelled` |
| task-priority | FormsService `TaskPriorityOptions` | `low` · `medium` · `high` · `critical` |
| task-assignment-strategy | Medical | `direct` · `pool` · `team` |
| task-source-filter | Medical query `source` | `created_by_me` · `from_pool` · `assigned_by_manager` — **≠** domain `patrol` |
| task-list-mode | CTX + demo ref | `mine` · `pool` · `sla` |
| message-type | static | `message` · `comment` — hub 26 |

Không CUC2 master list pack. **Cấm** Dropdown cứng từ demo localStorage.

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `platform-task` / `platform` (PO confirm) |
| phase_from / phase_to | data_analy → po |
| STATUS | data-analy **done** · chain `roleOnly=po` |
| Context / Demo / DI | CTX + hub 25/26 · demo zone ref only · DI none |
| controlHint / UNCLEAR | this file · **none** |
| real-data | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\platform-task-real-data.md` |
| Screens / Pattern / devSlash | List+pool+SLA+Detail · `/implement-task-service` |
| Open questions | `route_confirm` `/cv` · GAP-PT-SOURCE-01 domain source column |
| Next AskQuestion | PO: packKind confirm · queue second sau `platform-message` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-26T23:01:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| taskId | `task_b998f9a3` |
