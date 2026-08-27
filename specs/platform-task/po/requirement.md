# PO — Requirement — platform-task

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`platform`** (PO confirm · **không** list/report/master Field) |
| Feature Kind | Platform task hub — list (mine/pool/SLA) + detail lifecycle + **`ChatSectionParcel`** (Trao đổi / Bình luận) |
| gap | GAP-PT-* · GAP-MSG-PARCEL-01 · GAP-MSG-ROUTE-01 (cite analy) |
| mode | `feature_context` · **no Excel** |
| status | `done` |
| requestSource | run packet `task_d91d65a4` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** (Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế) |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role PO |
| prior | data-analy **done** · hash skip · `specs/_data-analy/features/platform-task-control-hint.md` · `platform-task-real-data.md` · contentHash `sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | target `D:\MFE-CORE\Linm.Web.Task` (`@linm/task` · route `/cv` draft) · cite live `Linm.Web.Tasks` + Medical `task/endpoint.ts` |
| mfeStdUrl | `http://localhost:9301/platform-task` |
| backend | cite Medical `ITaskService` / `TasksController` / `SlaController` · **cấm** RMMS.WebService embed Task · TaskService NuGet P2 |
| be_repo_confirm | `approved` (cite Medical until extract) |
| ui_repo_confirm | `approved` (scaffold `@linm/task` from live cite) |
| common | `ChatTab` · `CommentsTab` · `ChatSectionParcel` (`@linm/message`) · `useMessages` · `taskGroup` |
| devSlash | **`/implement-task-service`** · chat prereq **`/implement-message-service`** |
| updatedAt | `2026-08-27T06:10:00.000Z` |
| taskId | `task_d91d65a4` · analy `task_b998f9a3` |

## 1. Goal

Scaffold **Platform.Task** (`new_page`): MFE `@linm/task` với list (Của tôi · Pool · SLA) + detail lifecycle + chat/comment qua **`ChatSectionParcel`** — SSOT gửi tin + expand + ↗; BE bind cite Medical `web-bff/api/v1/tasks` cho đến khi extract `Linm.Platform.TaskService`.

Persona: Lãnh đạo BDTX · VP QLĐB · người nhận việc · điều phối pool/SLA.

**packKind confirm:** `platform` (data-analy đề xuất · PO chốt). **Không** gộp vào Field `patrol` · **không** Grid Kind B catalog Field.

**Chat/message design:** modern parcel (`send` `fa-paper-plane` · `expand` `TabSlideout` · ↗ `routeMap`) — **cấm** fork ChatTab markup vào Field · **cấm** demo mock/localStorage làm SSOT chat.

**Cấm ERP.*** · **cấm** clone Task vào `Linm.RMMS.WebService` · **cấm** `signalRService.start()` trong `@linm/message` · **cấm** `window.alert` / native confirm · **cấm** re-scan demo HTML.

## 2. Current → New (new_page · REQUIRED)

| Layer | Current (live inventory 2026-08-27) | New (delta PO chốt · copy analy) |
|-------|-------------------------------------|----------------------------------|
| Repo MFE | **Chưa** `Linm.Web.Task` / `@linm/task` (**GAP-PT-REPO-01**) | Scaffold `MFE-CORE/Linm.Web.Task` · RMMS route `/cv` draft · `mfeStdUrl` `/platform-task` |
| Medical Incidents | `task/endpoint.ts` client đủ lifecycle + messages · nav `/tasks` stub · **không** Task*Page (**GAP-PT-UI-01**) | Bind cùng API paths trên MFE mới |
| MFE-CORE Tasks (cite UI) | `Linm.Web.Tasks`: `TasksListPage` (list/kanban · stats · filters) · `TaskDetailPage` + `TaskTabs` (ChatTab/CommentsTab inline · checklist P2) | Extract pattern list/detail · **thay** inline chat bằng **`ChatSectionParcel`** `mode=both` |
| Chat parcel | `ChatSectionParcel` đã ship `@linm/message` (prereq `platform-message`) | Mount trên detail tab index 0/1 — **cấm** copy ChatTab vào task MFE |
| CommentsTab mount | Medical detail không mount CommentsTab (**GAP-PT-COMMENT-UI-01**) | Parcel `mode=both` |
| Detail ↗ | Medical hard-code `/tasks/:id` (**GAP-MSG-ROUTE-01**) | Host `routeMap` `task→/cv/:id` (TL `route_confirm`) |
| BE live RMMS | **none** | Consumer cite Medical BFF P1 · `Linm.Platform.TaskService` NuGet P2 — **cấm** embed |
| SLA | `SlaController` `GET /sla/alerts?domain=task` · escalate POST | KPI strip + tab `sla` · derived chip — **cấm** invent alert table |
| Domain source | Medical filter `source` = `created_by_me` \| `from_pool` \| `assigned_by_manager` | RMMS `CreateTask` `source=patrol` + `sourceEntityId` — **GAP-PT-SOURCE-01** SA chốt |
| Field tuần đường | Không chat form trên patrol | Deep-link `/cv/:id?from=patrol&sourceId=` read-only banner — **cấm** session CRUD |
| Demo | `task-app.js` localStorage zones | Zone/tab ref only · **cấm** chrome/GOVOne/mock SignalR note |
| Inbox federate | Medical DB conversations | **DEFER** GAP-PT-INBOX-01 |

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER)

| ID | New |
|----|-----|
| GAP-PT-REPO-01 | Scaffold `Linm.Web.Task` + `@linm/task` |
| GAP-PT-UI-01 | TaskListPage + TaskDetailPage trên MFE mới |
| GAP-PT-COMMENT-UI-01 | Mount CommentsTab qua `ChatSectionParcel` |
| GAP-MSG-PARCEL-01 | Detail dùng parcel — **không** inline fork |
| GAP-MSG-ROUTE-01 | `routeMap` từ RMMS host |
| GAP-PT-SOURCE-01 | Domain `source=patrol` — SA chốt DTO khi extract |
| GAP-PT-TICKET-01 | `ticketId` optional — RMMS task độc lập |
| GAP-PT-INBOX-01 | **DEFER** federate inbox |
| RMMS embed | **Cấm** copy Task vào RMMS.WebService |

**Không đổi:** Medical `ITaskService` lifecycle map · unified messages `type=message|comment` · SignalR `Task_{id}` · SLA derived `due_date` · toast not alert · IdCode service.

## 3. DoD (đo được)

1. MFE `@linm/task` scaffold · route draft `/cv` · RMMS shell mount `mfeStdUrl` `/platform-task`.
2. List surface: tab segment `mine` · `pool` · `sla` — index SSOT **0/1/2** — **cấm** invent tab thứ 4 P1 (**GAP-TAB-01**).
3. KPI strip (Kind E): Đã gán · Pool · SLA critical · SLA warning — từ `GET /tasks/stats` + `GET /sla/alerts?domain=task`.
4. List row: idCode · title · source chip · status · assignee · SLA chip · priority · pool claim CTA.
5. Detail header: lifecycle chip + action bar (claim · start · submit · complete · block · escalate · cancel).
6. Detail tabs: index **0** Trao đổi · **1** Bình luận — **`ChatSectionParcel`** `mode=both` — **cấm** reorder.
7. Send chat/comment: `fa-paper-plane` · POST `…/tasks/{id}/messages` `type=message|comment` (+ `parent_id`).
8. Expand: `TabSlideout` `fa-expand` · ↗ qua `routeMap` — **cấm** hard-code Medical-only path.
9. Filters: search · status · priority · source · assignmentStrategy — controlHint §5.
10. Empty/4xx/5xx: toast · **cấm** `window.alert` · **cấm** silent empty trên 5xx · **cấm** fake demo row.
11. SignalR: group `Task_{id}` via `@linm/notification` — Message MFE **không** `start()`.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. `yarn build` PASS **ở role Dev** (PO **cấm** build/e2e/start:std).
14. Prereq: `platform-message` / `ChatSectionParcel` export PASS trước detail bind.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/platform-task.md` | feature |
| CTX-02 | `docs/context/25-PLATFORM-TASK.md` | hub task extract |
| CTX-03 | `docs/context/26-MESSAGE-PARCEL.md` | hub chat parcel SSOT |
| PLAN-01 | `docs/plan/platform-task/PLAN.md` | phase scaffold |
| DEM-01 | `Linm.RMMS.Demo/src/demo/task/task.html` + `js/task-app.js` | zone/tab ref · **không** SSOT data · chrome SKIP |
| DI-01 | — | **no Excel** |
| DA-01 | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\platform-task-control-hint.md` | controlHint SSOT |
| DA-02 | `D:\AI-QLBD\Linm.RMMS.Data\specs\_data-analy\features\platform-task-real-data.md` | real-data §A–§F |
| MFE cite API | `D:\Medical\Linm.Web.Medical.Incidents\src\services\task\endpoint.ts` | API client bind |
| MFE cite UI | `D:\MFE-CORE\Linm.Web.Tasks` (`TasksListPage` · `TaskDetailPage` · `TaskTabs`) | UI pattern cite |
| MFE target | `D:\MFE-CORE\Linm.Web.Task` · `http://localhost:9301/platform-task` | scaffold |
| BE cite | Medical `ITaskService` · `TasksController` · `SlaController` | API cite — **không** clone RMMS |
| COMMON | `ChatSectionParcel` `@linm/message` · `ChatTab` / `CommentsTab` common | SSOT chat UI |

Normalized header (analy): `idCode|title|status|priority|source|assignee|dueDate|slaSeverity|assignmentStrategy`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

`controlHint=UNCLEAR`: **none**.

### List filters (Zone B/C)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| listMode | Chế độ xem | `Tab` (segment) | enum task-list-mode | `mine` · `pool` · `sla` |
| search | Tìm kiếm | `SearchTextInput` | text | `GET /tasks?search=` |
| status | Trạng thái | `Dropdown` | enum task-status | lifecycle Medical |
| priority | Ưu tiên | `Dropdown` | enum task-priority | low · medium · high · critical |
| source | Nguồn / phạm vi | `Dropdown` | enum task-source-filter | Medical query · **≠** domain `patrol` |
| assignmentStrategy | Chiến lược gán | `Dropdown` | enum task-assignment-strategy | direct · pool · team |
| assigneeId | Người nhận | `SearchInput` | users | manager filter · P2 |
| category | Danh mục | `Dropdown` | enum task-category | optional |
| ticketId | Ticket liên kết | `Text` readonly | — | optional · RMMS thường null |

### List row (Zone C)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| idCode | Mã | `Text` readonly | IdCode — **cấm** Guid display |
| title | Tiêu đề | `Text` readonly | click → detail |
| status | Trạng thái | `Text` readonly | status chip |
| priority | Ưu tiên | `Text` readonly | priority chip |
| assigneeName | Người nhận | `Text` readonly | «chưa gán» pool |
| dueDate | Hạn | `Date` readonly | local display UTC store |
| slaSeverity | SLA | `Text` readonly | critical/warning/none |
| sourceLabel | Nguồn | `Text` readonly | GAP-PT-SOURCE-01 P2 |
| claimAction | Nhận việc | action primary | pool · `PATCH …/claim` |

### Detail header + lifecycle (Zone D)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| idCode | Mã | `Text` readonly | | header |
| title | Tiêu đề | `Text` | * | View · Edit |
| description | Mô tả | `Text` | | textarea D14/M16 |
| status | Trạng thái | `Text` readonly | * | chip + timeline |
| priority | Ưu tiên | `Dropdown` | * | enum task-priority |
| progress | Tiến độ | `Text` (number) | | 0–100 · P2 UI |
| assigneeName | Người nhận | `Text` readonly | | pool → claim CTA |
| dueDate | Hạn xử lý | `Date` | | ISO UTC |
| slaSeverity | SLA | `Text` readonly | | chip |
| assignmentStrategy | Gán | `Dropdown` | * | direct · pool · team |
| claimTask | Nhận việc | action | | pool · `PATCH …/claim` |
| startTask | Bắt đầu | action | | `PATCH …/start` |
| submitReview | Gửi duyệt | action | | `PATCH …/submit` |
| completeTask | Hoàn thành | action | | `PATCH …/complete` |
| blockTask | Chặn | action | | `PATCH …/block` + reason |
| escalateSla | Leo thang SLA | action warn | | `POST /sla/tasks/{id}/escalate` |
| cancelTask | Hủy | action danger | | manager · `DELETE …/tasks/{id}` |

### Chat / comment (Zone E · `ChatSectionParcel`)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| messageBody | Nhắn tin | `Text` | * | ChatTab · send `fa-paper-plane` |
| sendChat | Gửi | action `fa-paper-plane` | * | `POST …/messages` `type=message` |
| commentBody | Bình luận | `Text` | * | CommentsTab thread |
| sendComment | Gửi Comment | action `fa-paper-plane` | * | `type=comment` · `parent_id` |
| expandPanel | Mở rộng | action `fa-expand` | | `TabSlideout` |
| detailLink | Chi tiết entity | action ↗ | | routeMap — inbox only on parcel |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| uiField | GET / write | sameMfe |
|---------|-------------|---------|
| listMode | client route → `GET /tasks` \| `/tasks/pool` \| `/sla/alerts` | **gap** scaffold |
| search/status/priority/source | `GET /tasks?…` | **gap** |
| idCode/title/status/… | detail `GET /tasks/{id}` | **gap** |
| poolList | `GET /tasks/pool` + claim PATCH | **gap** |
| kpi* | stats + sla alerts GET | **gap** |
| messageBody / sendChat | `GET/POST /tasks/{id}/messages` | yes via parcel |
| commentBody / sendComment | same POST `type=comment` | **gap** mount |
| chatSection | parcel wrap | **no** — host mount |

**Prefix map** (Medical BFF — consumer giữ khi NuGet extract):

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/tasks` |
| Pool | `GET /web-bff/api/v1/tasks/pool` |
| Stats | `GET /web-bff/api/v1/tasks/stats` · `/pool/stats` |
| Detail | `GET /web-bff/api/v1/tasks/{id}` |
| Lifecycle | `PATCH /web-bff/api/v1/tasks/{id}/{action}` |
| Messages | `GET/POST /web-bff/api/v1/tasks/{id}/messages` |
| SLA | `GET /web-bff/api/v1/sla/alerts?domain=task` · `POST …/escalate` |

### Lookup / enum (handoff SA)

| catalogKind | Source | Notes |
|-------------|--------|-------|
| task-status | Medical lifecycle | `created` … `cancelled` |
| task-priority | FormsService | low · medium · high · critical |
| task-assignment-strategy | Medical | direct · pool · team |
| task-source-filter | Medical query | `created_by_me` · `from_pool` · `assigned_by_manager` |
| task-list-mode | CTX + demo ref | mine · pool · sla |
| message-type | static | message · comment |

## 6. Grid AC / Report AC

| Section | Status |
|---------|--------|
| § Grid list AC (Field Kind B catalog) | **N/A** — packKind `platform` · zones A–E là layout task, **không** Field grid catalog (**GAP-PO-GRID-01**) |
| § Report AC | **N/A** — **không** report/dashboard (**GAP-PO-RPT-01**) |

### Platform task AC (thay Grid/Report)

| ID | AC |
|----|-----|
| AC-T-01 | List tabs mine/pool/sla — index 0/1/2 không reorder |
| AC-T-02 | KPI strip từ stats + sla alerts |
| AC-T-03 | Row bind idCode · SLA chip · pool claim |
| AC-T-04 | Detail lifecycle actions theo `ITaskService` map |
| AC-T-05 | Detail chat tabs = `ChatSectionParcel` index 0/1 |
| AC-T-06 | Send = `fa-paper-plane` · expand = TabSlideout · ↗ = routeMap |
| AC-T-07 | Toast — **cấm** `window.alert` |
| AC-T-08 | Typography label 13 · input D14/M16 |
| AC-T-09 | Empty list thật · **cấm** fake demo row |
| AC-T-10 | Field patrol chỉ deep-link — **cấm** chat form |

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL / mount | Actions | devSlash |
|---------|---------|----------|-------------|---------|----------|
| S-LIST | Platform list + KPI strip (zones A–C) | filter | `/cv` draft · `mfeStdUrl` `/platform-task` | tab mine/pool/sla · filter · row click | `/implement-task-service` |
| S-DETAIL | Kind D header + tabs (zones D–E) | view/edit lifecycle | `/cv/:id` | claim/start/submit/complete/block/escalate/cancel | `/implement-task-service` |
| S-CHAT-SECTION | Parcel in-entity | compose send | `ChatSectionParcel` on detail | Trao đổi · Bình luận · mute · expand | `/implement-message-service` |
| S-HANDOFF | Read-only banner | — | `?from=patrol&sourceId=` | **cấm** session CRUD | — |
| S-SKIP | — | — | Field tuần đường | **Cấm** chat form — deep-link Task only | — |

**Cấm** clone demo chrome (logo · GOVOne · mock SignalR note).

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Composer draft non-empty · đóng tab / navigate away | `LeaveConfirmModal` + leave guard (parcel) | `window.confirm` / native dialog |
| API 4xx/5xx · lifecycle fail | `useAppToast` / `useAlert` | `window.alert` / `prompt` |
| Cancel/block reason | `Modal` + reason `Text` | native dialog |
| SignalR down | reconnect → refresh list/detail | Message MFE `start()` |
| detail 404 | toast · navigate `/cv` | silent fail |

## 9. Open questions — PO chốt (autopilot)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-PO-PK-01 | packKind list vs platform | **`platform`** — task hub, không Field catalog |
| GAP-PO-BE-01 | RMMS.WebService Task embed? | **Cấm** · cite Medical P1 · NuGet P2 |
| GAP-PO-ROUTE-01 | RMMS `/cv` path | **IN P1** draft · exact = TL `route_confirm` sau Design |
| GAP-PO-SOURCE-01 | Domain `source=patrol` | **IN** CreateTask — SA chốt DTO (**GAP-PT-SOURCE-01**) |
| GAP-PO-MSG-01 | Inline ChatTab vs parcel | **`ChatSectionParcel` only** — prereq `platform-message` |
| GAP-PO-QUEUE-01 | Queue vs platform-message | **second** — sau `platform-message` sticky done |
| GAP-PO-FIELD-01 | Chat trên Field | **Cấm** — deep-link `/cv/:id` only |
| GAP-PO-DEMO-01 | Re-scan demo? | **Cấm** — hash skip · đọc control-hint + real-data |
| GAP-PO-INBOX-01 | Federate inbox | **DEFER** GAP-PT-INBOX-01 |
| GAP-PO-SUBTASK-01 | Checklist tab P1? | **OUT P1** — subtasks API cite · UI P2 |

## 10. Out of scope (this pack)

- GAP-PT-INBOX-01 federate inbox / Message.Api P1
- `rmms-task-integrate` Field chat · patrol CreateTask embed
- Clone demo chrome · mock SignalR · localStorage task SSOT
- Invent RMMS task API (`api/v1/rmms/tasks` · `td-tk/*`)
- RMMS.WebService TasksController embed
- ERP.* paths
- Re-scan demo HTML / crawl DemoRoot
- Subtasks/checklist UI P1 (API cite only)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`platform`** |
| Kind / surfaces | List (mine/pool/sla) + KPI strip + detail lifecycle + **ChatSectionParcel** tabs |
| Prototype | content-only list/detail/chat zones · **skip** logo · GOVOne · demo mock |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput ngoài bảng |
| Screens | §7 · Leave §8 · Platform AC §6 |
| Tab index list | 0 mine · 1 pool · 2 sla |
| Tab index detail chat | 0 Trao đổi · 1 Bình luận (parcel) |
| peerStdUrl | `http://localhost:9301/platform-task` |
| BE | cite Medical only · **cấm** invent RMMS task path |
| routeMap | Design ghi prop shape · TL chốt RMMS `/cv` |
| prereq | `platform-message` / `ChatSectionParcel` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T06:10:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:3090b2b000bd6de1f400c259e6e737fcbb64e4aa6b6227c2828d9d77a5d65962 |
| headerFingerprintPrior | sha256:platform-task-mfe-v1 |
| orchestratorSkillVersion | 2026.08.25.01 |
| orchestratorWorkflowVersion | 2026.08.25.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.25.01 |
| dataAnalyRulesVersion | 2026.08.25.4 |
| taskId | `task_d91d65a4` |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=1 · workflowVersion=2026.08.25.01 · rulesVersion=2026.08.25.4 · versionGate=rechecked -->
