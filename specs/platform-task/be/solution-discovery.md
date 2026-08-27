# SA — Solution — platform-task (Platform.Task / Công việc dùng chung)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_9e2b3742`)

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| title | Platform.Task / Công việc dùng chung |
| this role | `sa` · `/agent-sa` |
| packKind | **`platform`** — **cấm** Kind B DES-GRID / Field catalog |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | **approve** (`task_38f6d3d3`) |
| solution_confirm | **approve** (autoApprove ON · `task_9e2b3742`) |
| task_kind | **`consumer_cite_p1`** — cite Medical BFF P1 · NuGet `Linm.Platform.TaskService` P2 — **cấm** RMMS embed |
| domain | **Platform TaskService** (extract) — **không** map DOMAIN-MAP RMMS domain mới P1 |
| BackendRoot (RMMS) | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm** clone TasksController · **cấm ERP.*** |
| BE cite (live P1) | `D:/Medical/Linm.Web.Medical.WebService` · `TasksController` · `ITaskService` · `SlaController` |
| BE target (P2) | `API-CORE/Linm.Platform.TaskService` · NuGet `Linm.Platform.TaskService.Bff` |
| MFE cite | `D:\Medical\Linm.Web.Medical.Incidents` (`task/endpoint.ts` · **GAP-PT-UI-01** no Task*Page) |
| MFE target | `D:\MFE-CORE\Linm.Web.Task` (`@linm/task` · route `/cv` draft) |
| MFE cite UI pattern | `D:\MFE-CORE\Linm.Web.Tasks` (`TasksListPage` · `TaskDetailPage`) |
| common | `ChatTab` · `CommentsTab` · **`ChatSectionParcel`** (`@linm/message`) · `useMessages` · `taskGroup` |
| notification | `@linm/notification` owns SignalR `start()` — Message MFE **cấm** `start()` |
| prior · design | **confirmed** · `ui/design.md` + prototype · `task_38f6d3d3` |
| prior · po | **done** · `po/requirement.md` · `task_d91d65a4` |
| prior · data_analy | **done** · `specs/_data-analy/features/platform-task-control-hint.md` · `platform-task-real-data.md` · contentHash `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962` |
| autoApprove | **ON** |
| e2eQa | ON · queued `/agent-qa*` — SA **cấm** e2e / `yarn start:std` / build |
| devSlash | **`/implement-task-service`** · chat prereq **`/implement-message-service`** |
| mfeStdUrl | `http://localhost:9301/platform-task` |
| versionGate | `rechecked` |
| taskId | `task_9e2b3742` |
| confirmedBy | agent autoApprove · `task_9e2b3742` |
| updatedAt | `2026-08-27T06:20:00.000Z` |

**Cấm:** invent `api/v1/rmms/tasks` · `api/v1/td-tk/*` · embed `TasksController` vào `Linm.RMMS.WebService` · re-scan demo · Write MFE/native ở role SA · Step 4b / migration ở role SA · `window.alert` · fork ChatTab vào Field patrol · `signalRService.start()` trong `@linm/message`.

Standards: `platform-task` hub 25 · `implement-task-service` · `ssot-no-duplicate` · `sa-implement-gates` · real-data §B (cite only).

---

## 1. Ownership (DOMAIN-MAP + BFF vs API)

| Layer | Repo / path | P1 | P2 |
|-------|-------------|----|----|
| MFE | `D:\MFE-CORE\Linm.Web.Task` (`@linm/task`) | **scaffold** list/detail + parcel mount | same |
| Common UI | `Linm.Web.Common.Components` · ChatTab / CommentsTab | cite via `@linm/message` parcel | same |
| FE bind | Medical `task/endpoint.ts` → copy/bind on `@linm/task` | **giữ** relative `/tasks` paths | same paths on NuGet BFF |
| BE live | Medical `web-bff/api/v1/tasks` + `sla/*` | **cite** — zero RMMS delta | cutover to TaskService |
| BE extract | `Linm.Platform.TaskService` | **chưa** scaffold | API `api/v1/tasks` · BFF NuGet |
| SignalR | `CollaborationHub` group `Task_{id}` | cite Medical · connection `@linm/notification` | Task.Api hub |
| RMMS DOMAIN-MAP | **N/A P1** — slug `platform-task` **không** thêm domain RMMS | Consumer NuGet only | `AddTaskServiceBff()` |
| Patrol integration | Field `patrol` deep-link only | `?from=patrol&sourceId=` banner · **cấm** session CRUD on task page | `POST /tasks` `domainSource=patrol` |

### Architecture

| Layer | Choice |
|-------|--------|
| Feature Kind | **Platform task hub** — Kind B list (mine/pool/sla) + Kind E KPI + Kind D detail + **`ChatSectionParcel`** |
| task_kind | **`consumer_cite_p1`** |
| Domain prefix (RMMS) | **none P1** — **cấm** delta API trên RMMS.WebService |
| API (cite P1) | Medical BFF `web-bff/api/v1/tasks` · `sla/alerts` · `sla/tasks/{id}/escalate` |
| API (target P2) | Task.Api `api/v1/tasks` · BFF map 1:1 `web-bff/api/v1/tasks` |
| Persist (P1) | Medical DB `tasks` + `task_*` + `messages` (`entity_type=task`) — **cite only** |
| Persist (P2) | Isolated DB `linm_tasks` · migration `Schema_TaskCore` pair — **Dev/Step 4b later** |
| BFF (RMMS P1) | **N/A** — không proxy mới |
| BFF (RMMS P2) | NuGet `Linm.Platform.TaskService.Bff` — **cấm** ProjectReference / clone controller |
| Auth | reuse Medical / host JWT + role scope (staff/manager/admin) — **cấm** invent `rmms.tasks.*` P1 |
| Tenant | `TenantEntity` + `company_id` (Medical cite · PLAN D7) |

### Route decision

| | Choice |
|--|--------|
| Slug | `platform-task` → packKind **platform** |
| FE routes (draft) | list `/cv` · detail `/cv/:id` · RMMS std `/platform-task` |
| API delta RMMS P1 | **none** |
| Step 4b P1 | **N/A** — consumer cite · **cấm** `/new-endpoint` RMMS · **cấm** `/database-migration` ở role SA |
| Rationale | Live Medical cite + `endpoint.ts` đủ P1 UI scaffold · Dev = `/implement-task-service` |

### BFF vs API (chốt)

| Concern | P1 (this pack Dev) | P2 (extract) |
|---------|-------------------|--------------|
| FE calls | Medical host `web-bff/api/v1/tasks` (via apiClient) | Same path via RMMS BFF NuGet proxy |
| Domain API | Embedded in Medical.WebService today | `Task.Api` `api/v1/tasks` |
| RMMS.WebService | **Không** thêm TasksController | `PackageReference` BFF NuGet only |
| Messages | `GET/POST …/tasks/{id}/messages` on same cite | Same on TaskService |
| SLA | `SlaController` cite | Port to Task.Api |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| Task UI pages | `@linm/task` | **cấm** TaskListPage trong Field RMMS |
| Chat UI | `ChatSectionParcel` `@linm/message` | **cấm** fork ChatTab/CommentsTab markup |
| HTTP FE | Medical `task/endpoint.ts` paths | **giữ** · **cấm** invent RMMS prefix |
| SignalR start | `@linm/notification` | Task MFE join `Task_{id}` only |
| Detail ↗ | host `routeMap` `task→/cv/:id` | **GAP-MSG-ROUTE-01** · TL `route_confirm` |
| Inbox | Medical `MessagesController` | **DEFER** GAP-PT-INBOX-01 federate P2 |

---

## 2. Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_utc_store** | `dueDate` · `createdAt` · `updatedAt` store **UTC** · display local FE | `/review-timezone-implement` | `DateTime? DueDate` Medical cite |
| XCO | **xco_na** | list scoped by role (staff/manager/admin) per Medical `GetTasksAsync` | `/implement-view-cross-company` | không cross-company view form P1 |
| SHARE | **share_tenant** | `TaskEntity : TenantEntity` · filter `company_id` | `/implement-shared-table` | P2 TaskService same pattern |
| Offline | **n/a** | fail → toast · empty thật | — | **cấm** fake demo row · **cấm** silent 5xx |
| Migration | **defer_p2** | `Schema_TaskCore` khi scaffold TaskService | — | **cấm** SA/Dev chạy migration P1 cite pack |
| Step 4b | **N/A** | không endpoint RMMS mới P1 | — | consumer_cite_p1 |

AskQuestion (autoApprove=ON · không chờ board): `task_kind=consumer_cite_p1` · `sa_tz_gate=tz_utc_store` · `sa_xco_gate=xco_na` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-27T06:20:00.000Z`.

---

## 3. Form data analysis (platform task — REQUIRED)

Không Kind B Field catalog form. Surfaces = Design §2 · controlHint = data-analy (không đoán).

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| S-LIST `mine` | KPI + filters + list rows | api cite `GET /tasks` | **không** RMMS form entity |
| S-LIST `pool` | pool rows + claim CTA | api cite `GET /tasks/pool` | — |
| S-LIST `sla` | SLA alert rows | api cite `GET /sla/alerts?domain=task` | derived · **cấm** invent alert table |
| S-DETAIL View | header + info + lifecycle actions | api cite `GET /tasks/{id}` | TaskResponseDto cite |
| S-DETAIL Edit | title · description · priority · dueDate | api `PUT /tasks/{id}` | partial update |
| S-CHAT-SECTION | parcel tabs 0/1 | api messages cite | `entityType=task` |
| S-HANDOFF | read-only banner | query `?from=patrol&sourceId=` | **cấm** session CRUD |

### FormMode ↔ API (HARD)

| Surface / FormMode | UI action | Method + path (cite) | Body / query | Notes |
|--------------------|-----------|----------------------|--------------|-------|
| List · mine | load + filter | `GET /tasks` | `search` · `status` · `priority` · `source` · `assignmentStrategy` · `page` · `pageSize` | `source` = scope filter Medical (**≠** domainSource) |
| List · pool | load pool | `GET /tasks/pool` | `skills?` | claim per row |
| List · sla | load alerts | `GET /sla/alerts?domain=task` | `severity?` | tab index 2 |
| KPI assigned | card | `GET /tasks/stats` | — | role-scoped |
| KPI pool | card | `GET /tasks/pool/stats` | — | |
| KPI sla critical/warning | cards | `GET /sla/alerts?domain=task&severity=critical\|warning` | — | derived |
| Detail View | load | `GET /tasks/{id}` | — | 404 → toast · `/cv` |
| Detail Edit | save fields | `PUT /tasks/{id}` | `UpdateTaskDto` fields | title · description · priority · dueDate · tags |
| Create (P2 patrol) | handoff | `POST /tasks` | `CreateTaskDto` + **domainSource** §4 | P1 UI **không** create on task page |
| Claim | pool CTA | `PATCH /tasks/{id}/claim` | — | list + detail |
| Start | lifecycle | `PATCH /tasks/{id}/start` | — | |
| Submit | lifecycle | `PATCH /tasks/{id}/submit` | — | |
| Complete | lifecycle | `PATCH /tasks/{id}/complete` | — | |
| Block | lifecycle | `PATCH /tasks/{id}/block` | `{ reason }` | Modal reason |
| Escalate SLA | lifecycle | `POST /sla/tasks/{id}/escalate` | — | warn action |
| Cancel | lifecycle | `DELETE /tasks/{id}` | `{ reason }` | manager |
| Progress P2 | optional | `PATCH /tasks/{id}/progress` | `{ progress, note? }` | UI P2 |
| Chat load | parcel tab 0 | `GET /tasks/{id}/messages?type=message` | — | ChatSectionParcel |
| Chat send | fa-paper-plane | `POST /tasks/{id}/messages` | `content` · `type=message` | |
| Comment load | parcel tab 1 | `GET /tasks/{id}/messages?type=comment` | — | |
| Comment send | Gửi Comment | `POST /tasks/{id}/messages` | `content` · `type=comment` · `parent_id?` | |
| SignalR | live refresh | hub `Task_{id}` | `NewMessage` · `TaskStatusChanged` | `@linm/notification` |

### List mode → API (HARD · GAP-TAB-01)

| listMode (tab index) | API call |
|----------------------|----------|
| 0 `mine` | `GET /tasks` (+ optional filters) |
| 1 `pool` | `GET /tasks/pool` |
| 2 `sla` | `GET /sla/alerts?domain=task` |

### Prefix map (Medical BFF — consumer giữ khi NuGet extract)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/tasks` |
| Pool | `GET /web-bff/api/v1/tasks/pool` |
| Stats | `GET /web-bff/api/v1/tasks/stats` · `/pool/stats` |
| Detail | `GET /web-bff/api/v1/tasks/{id}` |
| Create | `POST /web-bff/api/v1/tasks` |
| Update | `PUT /web-bff/api/v1/tasks/{id}` |
| Cancel | `DELETE /web-bff/api/v1/tasks/{id}` |
| Lifecycle | `PATCH /web-bff/api/v1/tasks/{id}/{action}` |
| Messages | `GET/POST /web-bff/api/v1/tasks/{id}/messages` |
| SLA alerts | `GET /web-bff/api/v1/sla/alerts?domain=task` |
| SLA escalate | `POST /web-bff/api/v1/sla/tasks/{id}/escalate` |

FE client cite: `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` (relative `/tasks` on apiClient).

### Field map (ui → wire) — controlHint SSOT

| uiField | Label VN | controlHint | Wire | Notes |
|---------|----------|-------------|------|-------|
| listMode | Chế độ xem | Tab | client → API map §above | index 0/1/2 HARD |
| search | Tìm kiếm | SearchTextInput | `GET /tasks?search=` | |
| status | Trạng thái | Dropdown | `GET /tasks?status=` | enum task-status |
| priority | Ưu tiên | Dropdown | `GET /tasks?priority=` | enum task-priority |
| sourceFilter | Phạm vi | Dropdown | `GET /tasks?source=` | `created_by_me` \| `from_pool` \| `assigned_by_manager` — **≠** domainSource |
| assignmentStrategy | Chiến lược gán | Dropdown | `GET /tasks?assignmentStrategy=` | direct · pool · team |
| idCode | Mã | Text readonly | `TaskResponseDto.idCode` | **cấm** Guid display |
| title | Tiêu đề | Text | GET/PUT `title` | click → detail |
| description | Mô tả | Text | GET/PUT `description` | D14/M16 |
| statusChip | Trạng thái | Text readonly | lifecycle PATCH | chip |
| priorityChip | Ưu tiên | Dropdown | GET/PUT `priority` | |
| assigneeName | Người nhận | Text readonly | claim PATCH | «chưa gán» pool |
| dueDate | Hạn | Date | GET/POST/PUT `dueDate` | UTC store |
| slaSeverity | SLA | Text readonly | derived + escalate | chip |
| sourceLabel | Nguồn | Text readonly | `domainSource` display P2 | P1 empty/hidden if absent |
| claimAction | Nhận việc | action | `PATCH …/claim` | pool row |
| messageBody | Nhắn tin | Text | POST `content` `type=message` | parcel |
| sendChat | Gửi | action fa-paper-plane | POST messages | |
| commentBody | Bình luận | Text | POST `type=comment` | |
| sendComment | Gửi Comment | action fa-paper-plane | same POST | |
| chatSection | Trao đổi + Bình luận | parcel | GET/POST messages | **GAP-MSG-PARCEL-01** |

`controlHint=UNCLEAR`: **none**.

### Tab index (HARD · GAP-TAB-01)

**List (`/cv`):**

| Index | id | VN | API |
|-------|-----|-----|-----|
| 0 | `mine` | Của tôi | `GET /tasks` |
| 1 | `pool` | Pool chờ nhận | `GET /tasks/pool` |
| 2 | `sla` | Cảnh báo SLA | `GET /sla/alerts?domain=task` |

**Detail (`/cv/:id`):**

| Index | id | VN | Component |
|-------|-----|-----|-----------|
| 0 | `chat` | Trao đổi | `ChatSectionParcel` → ChatTab |
| 1 | `comments` | Bình luận | `ChatSectionParcel` → CommentsTab |

**Cấm** reorder / invent tab P1.

### ChatSectionParcel mount (Design §5 — SA chốt contract)

```ts
interface TaskDetailChatProps {
  entityType: 'task';
  entityId: string;
  onNavigate: (path: string) => void;
  mode?: 'both';
  routeMap?: { task?: (id: string) => string };
  detailRoute?: string;
}
```

RMMS host inject (proposed — TL `route_confirm`):

```ts
routeMap={{ task: (id) => `/cv/${id}` }}
```

---

## 4. GAP-PT-SOURCE-01 — CreateTaskDto domain source (SA chốt)

Medical hiện tại **không** có cột domain source trên `TaskEntity` · query `source=` trên `GET /tasks` là **list scope filter** (`created_by_me` \| `from_pool` \| `assigned_by_manager`) — **giữ nguyên** · **cấm** overload `source` cho domain.

### Quy ước tên (TaskService scaffold P2)

| Field (DTO) | Column (DB) | Type | Required | Notes |
|-------------|-------------|------|----------|-------|
| `DomainSource` | `domain_source` | `varchar(50)` | optional create · indexed P2 | Originating product domain |
| `SourceEntityType` | `source_entity_type` | `varchar(50)` | optional | Subtype within domain |
| `SourceEntityId` | `source_entity_id` | `uuid` nullable | optional | FK logical — **không** DB FK cross-domain P1 |

### `DomainSource` registry (closed enum — extend via PLAN)

| value | Producer | `SourceEntityType` examples |
|-------|----------|----------------------------|
| `patrol` | RMMS Field tuần đường | `patrol_session` · `patrol_point` |
| `incident` | RMMS / Medical incident | `incident` |
| `ticket` | Medical ticket | `ticket` |
| `maintenance` | BDTX maintenance | `maintenance_order` |
| `ops` | Ops hub | `ops_item` |

**Cấm** dùng `created_by_me` / `from_pool` / `assigned_by_manager` làm `DomainSource`.

### CreateTaskDto delta (P2 `Linm.Platform.TaskService` only)

Thêm vào `CreateTaskDto` / `TaskResponseDto` / `TaskListItemDto` khi scaffold (migration `Schema_TaskCore`):

```csharp
/// <summary>Originating domain — e.g. patrol, incident, ticket. NOT the list filter "source".</summary>
[MaxLength(50)]
public string? DomainSource { get; set; }

[MaxLength(50)]
public string? SourceEntityType { get; set; }

public Guid? SourceEntityId { get; set; }
```

`TaskListItemDto` thêm `SourceLabel` (derived server-side, max 100) cho chip cột **Nguồn** — map VN: `patrol` → «Tuần đường» · `incident` → «Sự cố» · …

### List filter domain (P2 — **không** P1 Dev)

| Query param | Values | Notes |
|-------------|--------|-------|
| `domainSource` | `patrol` \| `incident` \| … | **NEW** query — **cấm** reuse `source` |
| `source` (existing) | `created_by_me` \| `from_pool` \| `assigned_by_manager` | Medical scope filter — **unchanged** |

P1 UI: cột `sourceLabel` **ẩn** hoặc empty khi DTO chưa có `domainSource` (Medical cite).

### RMMS patrol CreateTask example (P2 — `rmms-task-integrate` later)

```json
POST /web-bff/api/v1/tasks
{
  "title": "Xử lý điểm Cấp bách — QL.1 km 12",
  "description": "Từ kết ca tuần đường",
  "priority": "high",
  "assignmentStrategy": "pool",
  "dueDate": "2026-08-28T10:00:00Z",
  "domainSource": "patrol",
  "sourceEntityType": "patrol_session",
  "sourceEntityId": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
}
```

**GAP-PT-TICKET-01:** `ticketId` **optional** — RMMS task độc lập · **không** bắt parent ticket.

Handoff query (P1 UI only): `GET /cv/:id?from=patrol&sourceId={sessionId}` — banner read-only · **cấm** create task on task page P1.

---

## 5. API catalog (cite Medical P1 — **không** delta RMMS)

Base: Medical BFF `web-bff/api/v1`. Demo: **N/A** (packKind=platform).

### API-01: GET `/tasks` · **CITE LIVE**

| | |
|--|--|
| Purpose | List mine + filters |
| Permission | Medical role scope (staff/manager/admin) |
| Request | `status?` · `priority?` · `search?` · `category?` · `assignmentStrategy?` · `source?` · `ticketId?` · `page` · `pageSize` |
| Response | `TaskPagedResult` · `TaskListItemDto` |
| Errors | 4xx/5xx → toast · **cấm** silent empty 5xx |
| UI | DES-PT-FILTER · DES-PT-LIST (tab `mine`) |
| Live | `TasksController.GetTasks` · `taskEndpoint.getTasks` |
| gates | tz_utc_store · xco_na · share_tenant |
| Migration | defer P2 |

### API-02: GET `/tasks/pool` · **CITE LIVE**

| | |
|--|--|
| Purpose | Pool unassigned tasks |
| Request | `skills?` |
| Response | `TaskResponseDto[]` |
| UI | DES-PT-LIST (tab `pool`) · claim CTA |
| Live | `GetPoolTasks` · `getPoolTasks` |

### API-03: GET `/tasks/stats` · GET `/tasks/pool/stats` · **CITE LIVE**

| | |
|--|--|
| Purpose | KPI strip |
| UI | DES-PT-KPI |
| Live | `GetStats` · `GetPoolStats` |

### API-04: GET `/sla/alerts?domain=task` · **CITE LIVE**

| | |
|--|--|
| Purpose | SLA tab + KPI severity cards |
| Request | `severity?` = `critical` \| `warning` |
| Response | derived from `due_date` — **cấm** invent alert table |
| UI | DES-PT-KPI · DES-PT-LIST (tab `sla`) |
| Live | `SlaController` |

### API-05: GET `/tasks/{id}` · **CITE LIVE**

| | |
|--|--|
| Purpose | Detail View |
| Errors | 404 → toast · navigate `/cv` |
| UI | DES-PT-DETAIL-* |
| Live | `GetTaskById` |

### API-06: PUT `/tasks/{id}` · **CITE LIVE**

| | |
|--|--|
| Purpose | Detail Edit partial fields |
| Body | `UpdateTaskDto` |
| Live | `UpdateTask` |

### API-07: POST `/tasks` · **CITE LIVE** (create · P2 patrol primary consumer)

| | |
|--|--|
| Purpose | Create task |
| Body | `CreateTaskDto` + P2 `domainSource` / `sourceEntityType` / `sourceEntityId` |
| Live | `CreateTask` · Medical DTO today **without** domain fields — additive P2 only |
| P1 UI | **OUT** — no create form on `@linm/task` pages |

### API-08: PATCH lifecycle · **CITE LIVE**

| Action | Path |
|--------|------|
| claim | `PATCH /tasks/{id}/claim` |
| start | `PATCH /tasks/{id}/start` |
| submit | `PATCH /tasks/{id}/submit` |
| complete | `PATCH /tasks/{id}/complete` |
| block | `PATCH /tasks/{id}/block` |
| progress | `PATCH /tasks/{id}/progress` |

UI: DES-PT-DETAIL-ACT

### API-09: DELETE `/tasks/{id}` · **CITE LIVE**

| | |
|--|--|
| Purpose | Cancel with reason |
| Body | `{ reason }` |
| UI | cancelTask action |

### API-10: POST `/sla/tasks/{id}/escalate` · **CITE LIVE**

| | |
|--|--|
| Purpose | SLA escalate |
| UI | escalateSla warn action |

### API-11: GET/POST `/tasks/{id}/messages` · **CITE LIVE**

| | |
|--|--|
| Purpose | Chat + comment via parcel |
| Query | `type=message\|comment` |
| Body POST | `content` · `type` · `parent_id?` |
| UI | DES-MSG-SEC-* |
| Live | `ITaskService` messages · cross-ref `platform-message` API-04/05 |

### API-12: Subtasks · **CITE LIVE · UI OUT P1**

| | |
|--|--|
| Paths | `GET/POST/PATCH/DELETE …/tasks/{id}/subtasks` |
| P1 | API cite only · checklist tab **OUT** |

### FormType pack (`platform`)

| Surface | Pattern | Endpoint |
|---------|---------|----------|
| List mine/pool/sla | Kind B + E KPI | API-01…04 |
| Detail lifecycle | Kind D | API-05…10 |
| Chat section | Parcel tabs | API-11 |
| Field catalog grid | **OUT** | — |
| RMMS TasksController embed | **OUT P1** | — |

---

## 6. Entity / migration outline (P2 — SA document only · Step 4b N/A P1)

**Cấm** chạy migration ở role SA / P1 Dev cite pack.

| Table | Notes |
|-------|-------|
| `tasks` | TenantEntity · + P2 cols `domain_source` · `source_entity_type` · `source_entity_id` |
| `task_collaborators` | cite Medical |
| `task_subtasks` | cite Medical · UI P2 |
| `task_activities` | cite Medical |
| `messages` | `entity_type=task` unified messages |

Migration pair: `Schema_TaskCore` + Designer (PLAN Phase 2.3) — **queued** TaskService scaffold · **không** RMMS `Schema_*`.

SLA: **derived** from `due_date` — **cấm** `sla_alerts` table.

---

## 7. Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string (RMMS) | **none** — pack không ghi RMMS entity P1 |
| Child tables (RMMS) | **n/a** P1 |
| Medical / TaskService | flat scalar columns cite `TaskEntity` — **cấm** JSON blob task fields |
| Migration P1 | **none** |
| T-BE-API / T-BE-MIG (RMMS) | **n/a** P1 |

---

## 8. Gaps (SA chốt — align PO/Design)

| ID | Decision P1 |
|----|-------------|
| GAP-PT-REPO-01 | **CLOSE** — scaffold `@linm/task` · `/implement-task-service` |
| GAP-PT-UI-01 | **CLOSE** — TaskListPage + TaskDetailPage bind `endpoint.ts` |
| GAP-PT-COMMENT-UI-01 | **CLOSE** — `ChatSectionParcel` `mode=both` |
| GAP-MSG-PARCEL-01 | **CLOSE** — prereq `platform-message` parcel export |
| GAP-MSG-ROUTE-01 | **CLOSE** — host `routeMap` `task→/cv/:id` · TL `route_confirm` |
| GAP-PT-SOURCE-01 | **CLOSE** — `DomainSource` + `SourceEntityType` + `SourceEntityId` on TaskService DTO/entity P2 · query `domainSource` P2 · **cấm** overload `source` filter |
| GAP-PT-TICKET-01 | **CLOSE** — `ticketId` optional |
| GAP-PT-INBOX-01 | **DEFER** — federate inbox P2 |
| GAP-TAB-01 | **KEEP** — list 0/1/2 · detail chat 0/1 |
| GAP-TYP-01 | **CLOSE** — label 13 · input D14/M16 |
| RMMS embed | **Cấm** copy Task vào RMMS.WebService |
| Subtasks UI | **OUT P1** — API cite only |

---

## 9. Live vs delta (audit SA 2026-08-27)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `Linm.Web.Task` repo | **MISSING** | **DELTA** scaffold `@linm/task` |
| Medical `task/endpoint.ts` | **LIVE** | **Giữ paths** bind on new MFE |
| Medical Task*Page | **MISSING** | **DELTA** new pages cite `Linm.Web.Tasks` pattern |
| `ChatSectionParcel` | **LIVE** (`platform-message` done) | **Mount** on detail |
| Medical tasks API | **LIVE** cite | **Giữ** · **cấm** clone RMMS |
| `domain_source` columns | **MISSING** | **DELTA P2** TaskService scaffold only |
| RMMS TasksController | **không** | **Cấm** tạo P1 |
| SLA derived | **LIVE** cite | **Giữ** |
| SignalR `Task_{id}` | **LIVE** cite | **Giữ** via `@linm/notification` |

---

## 10. Handoff → Team Lead

| Field | Value |
|-------|-------|
| Next slash | `/agent-team-lead` |
| packKind | **`platform`** — **cấm** Kind B list gates / DES-GRID |
| Dev slash | **`/implement-task-service`** |
| Task pack (outline) | T-CTX · T-SCAFFOLD-TASK-MFE · T-LIST-MINE-POOL-SLA · T-DETAIL-LIFECYCLE · T-PARCEL-MOUNT · T-ROUTEMAP · T-HANDOFF-BANNER · T-TYP · T-QA-TASK · **cấm** T-BE-API RMMS P1 · **cấm** T-UI-GRID |
| route_confirm | TL chốt `/cv` · `/cv/:id` · RMMS `/platform-task` |
| be_repo_confirm | consumer cite Medical P1 · TaskService NuGet P2 · **cấm** RMMS embed |
| ui_repo_confirm | `D:\MFE-CORE\Linm.Web.Task` scaffold from `Linm.Web.Tasks` + `endpoint.ts` |
| GAP-PT-SOURCE-01 | locked §4 — Dev **không** đổi tên field |
| Chain | autoApprove=ON → TL **pending** enqueue |
| e2eQa | ON · **chỉ** `/agent-qa*` chạy e2e / start:std |

Canonical paths:

- UI target: `D:\MFE-CORE\Linm.Web.Task`
- UI cite: `D:\MFE-CORE\Linm.Web.Tasks` · `D:\Medical\Linm.Web.Medical.Incidents\src\services\task`
- Parcel: `D:\MFE-CORE\Linm.Web.Message` (`ChatSectionParcel`)
- BE cite: `D:\Medical\Linm.Web.Medical.WebService`
- BE target P2: `API-CORE/Linm.Platform.TaskService`
- RMMS BackendRoot (no delta P1): `D:\AI-QLBD\Linm.RMMS.WebService`
- Product specs: `D:\AI-QLBD\Linm.RMMS.Data\specs\platform-task`

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.25.7 |
| generatedAt | 2026-08-27T06:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| real_view_parity | v1 |
| taskId | `task_9e2b3742` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.25.7 versionGate=rechecked -->
