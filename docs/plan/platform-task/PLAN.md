# PLAN — Chuẩn hóa Task cho mọi domain (`Linm.Platform.TaskService`)

> **Status:** Draft (context+plan — **chưa** scaffold repo).  
> **Slash khi implement:** `/implement-task-service` · `/integrate-task-service` · `/review-task-service` · chat `/implement-message-service` **trước**.  
> **RMMS:** [`RMMS-TUAN-DUONG.md`](RMMS-TUAN-DUONG.md) · **later** `rmms-task-integrate`.  
> **SSOT:** [`../../context/25-PLATFORM-TASK.md`](../../context/25-PLATFORM-TASK.md) · chat [`../../context/26-MESSAGE-PARCEL.md`](../../context/26-MESSAGE-PARCEL.md)  
> **Nguồn copy:** `D:/Medical/Linm.Web.Medical.WebService` (`TasksController` · `ITaskService` · `MessageEntity` · `SlaService` · `CollaborationHub`)  
> **Pattern repo:** `D:/API-CORE/Linm.Platform.FileService` (API micro-src + BFF NuGet)  
> **Cấm** copy TaskService vào RMMS.WebService / Medical forever. **Cấm** ProjectReference / consumer `local-packages/`.

---

## Mục tiêu

Một **Task platform** (lifecycle · pool · SLA · chat/comment · SignalR) dùng lại Medical, RMMS tuần đường, ERP, QLBD khác — `source` = domain (`patrol` · `incident` · `ticket` · …). Chat UI = parcel `@linm/message` + common tabs — không fork.

---

## Quyết định kiến trúc (chốt plan)

| # | Quyết định | Lý do |
|---|------------|--------|
| D1 | Repo `API-CORE/Linm.Platform.TaskService/` · host `api/src/Task.Api/` · NuGet `Linm.Platform.TaskService.Bff` | Cùng FileService; user name **TaskService** |
| D2 | API route `api/v1/tasks` · BFF consumer `web-bff/api/v1/tasks` | Top 13 prefix; Medical hiện gộp BFF+API trên `web-bff/…/tasks` — **tách** khi extract |
| D3 | Messages **của task** đi theo TaskService (`GET/POST /tasks/{id}/messages`) | Đã vậy trên Medical `ITaskService` |
| D4 | Ticket / incident messages **ở lại** Medical (hoặc domain API) P1 | Không kéo hết MessageEntity ticket/incident vào Task DB |
| D5 | Inbox `GET /messages/conversations` P1 Medical; P2 **federate** task conv từ TaskService (**GAP-PT-INBOX-01**) | Tránh big-bang Message microservice |
| D6 | `ticketId` **optional** — RMMS task độc lập + `source` + `sourceEntityId` (**GAP-PT-TICKET-01**) | Medical đang filter `ticketId`; không bắt buộc parent ticket |
| D7 | IdCode `IIdCodeService.GenerateAsync()` · DateTime UTC · TenantEntity + `company_id` | Top 13 |
| D8 | Schema migration CLI pair `Schema_*` + Designer · Schema ≠ Seed | EF gate |
| D9 | FE Task = `MFE-CORE/Linm.Web.Task` · chat = `@linm/message` parcels | Cấm ChatTab copy vào Field |
| D10 | SignalR hub trên Task.Api `CollaborationHub` group `Task_{id}` | Giữ Medical event names |

---

## Phase 0 — Contract (docs) — **đây**

| # | Task | Repo | DoD |
|---|------|------|-----|
| 0.1 | Hub 25 + feature `platform-task` | RMMS.Data | Extract outline + gaps |
| 0.2 | Hub 26 + `platform-message` | RMMS.Data | Parcel send/expand SSOT |
| 0.3 | PLAN + RMMS-TUAN-DUONG + Rules README/checklist | RMMS.Data + Rules | Slash + queue |

---

## Phase 1 — Common + Message parcel (trước / song song scaffold)

| # | Task | Repo | DoD |
|---|------|------|-----|
| 1.1 | `CommentsTab` thêm `entityType: incident` | common-components | GAP-PT-COMMON-01 |
| 1.2 | `ChatPanel` bỏ cast `ticket\|task` | common | GAP-MSG-CAST-01 |
| 1.3 | `getDetailRoute` nhận `routeMap` / parcel customProps | common + `@linm/message` | GAP-MSG-ROUTE-01 — Medical default, RMMS `/cv` `/sc` |
| 1.4 | `ChatSectionParcel` wrap ChatTab+CommentsTab+useMessages | `Linm.Web.Message` | GAP-MSG-PARCEL-01 · send `fa-paper-plane` · expand TabSlideout + ↗ |
| 1.5 | Gắn CommentsTab trên Task detail (khi có page) | `Linm.Web.Task` | GAP-PT-COMMENT-UI-01 |

**Cấm** sửa `"version"` common. Bump package GitHub Packages.

---

## Phase 2 — Scaffold `Linm.Platform.TaskService`

Analog FileService (`docs/backend-structure.md`):

```
API-CORE/Linm.Platform.TaskService/
  api/src/Task.Api/                 ← api/v1/tasks · sla · hub
  bff/src/Linm.Platform.TaskService.Bff/
  docker-compose · Migrations pair
```

| # | Task | DoD |
|---|------|-----|
| 2.1 | slnx + inner layout C + JWT `company_id` + Serilog `"Serilog"` | Build |
| 2.2 | DB isolated (vd. `linm_tasks`) · TenantEntity | |
| 2.3 | `dotnet ef migrations add Schema_TaskCore` **pair** Designer | `migrations list` + `dotnet build` |
| 2.4 | BFF NuGet + `/init-bff-task` (skill mới hoặc create-bff-api-feature) | Consumer `AddTaskServiceBff()` — cấm clone controller |
| 2.5 | CollaborationHub + CORS shell | JoinTaskRoom / NewMessage / TaskStatusChanged |
| 2.6 | Port / PG host — **chốt** khi scaffold (không đụng File 5018/5458) | STATUS.md |

Copy **logic** từ Medical `TaskService` / `SlaService` / message mapper — **không** fork skill Linm.

### Outline route (Task.Api — không `web-bff`)

| Method | Path | Việc |
|--------|------|------|
| GET/POST | `/api/v1/tasks` | List (`source`, optional `ticketId`) / create |
| GET | `/api/v1/tasks/pool` · `/stats` · `/pool/stats` | Pool · KPI |
| GET | `/api/v1/tasks/{id}` | Detail |
| PATCH | `…/claim` · `start` · `progress` · `submit` · `complete` · `approve` · `block` · … | Lifecycle Medical |
| GET/POST/PUT/DELETE | `…/tasks/{id}/messages` | Chat + comment |
| GET/POST/PATCH | `…/tasks/{id}/subtasks` | Checklist |
| GET | `/api/v1/sla/alerts?domain=task` | Derived `due_date` |
| POST | `/api/v1/sla/tasks/{id}/escalate` | Leo thang |
| GET | `/api/v1/tasks/conversations` (P2) | Inbox slice **task** cho federate |

BFF map 1-1 dưới `web-bff/api/v1/…`.

---

## Phase 3 — Extract Medical → consumer

| # | Task | DoD |
|---|------|-----|
| 3.1 | Medical BFF `PackageReference` TaskService.Bff | Cùng route FE `/tasks` — **zero** change path nếu proxy giữ `web-bff/api/v1/tasks` |
| 3.2 | Dual-write hoặc cutover DB tasks+task_*+messages(entity_type=task) | Script `local-script/` · Seed riêng |
| 3.3 | Gỡ `ITaskService` / `TasksController` khỏi Medical.WebService | Medical chỉ incident/ticket |
| 3.4 | Task FE pages (GAP-PT-UI-01) trong `Linm.Web.Task` hoặc Medical host parcel | Nav `/tasks` work |
| 3.5 | Incident CreateTask / link `source=incident` | Optional ticket parent |

Rollback: Medical giữ controller đến khi NuGet + data cutover green.

---

## Phase 4 — Inbox federation (GAP-PT-INBOX-01)

Medical `MessagesController` hôm nay UNION ticket + task + incident + subscriptions.

Sau tách DB:

```
[@linm/message]
    GET /messages/conversations  →  BFF host
         ├─ Medical  entityType=ticket|incident
         └─ TaskService  entityType=task
    merge by lastMessageAt · unread sum
```

| # | Task | DoD |
|---|------|-----|
| 4.1 | Task.Api conversations task-only | Participant = creator/assignee/collaborator/sender |
| 4.2 | Shell/Home BFF merge hoặc Notification BFF | Một envelope cho MessageCenter |
| 4.3 | unread-count cộng 2 nguồn | Badge đúng |

**Không** bắt buộc Platform.MessageService P1.

---

## Phase 5 — RMMS / mọi domain

| # | Task | DoD |
|---|------|-----|
| 5.1 | RMMS BFF NuGet TaskService.Bff | Cấm copy entity Task vào RMMS |
| 5.2 | Patrol Kết ca / điểm Cấp bách → `POST /tasks` `source=patrol` `sourceEntityId=` session\|point | Hub 24 · 25 §5 |
| 5.3 | MFE Field deep-link `/cv/:id` — **cấm** ChatTab trong Field | 26 §1 |
| 5.4 | `Linm.Web.Task` list/pool/SLA + `ChatSectionParcel` | Kind B + D |
| 5.5 | Mobile: capture patrol · việc/chat = Task sibling + Mobile.Bff proxy | GAP-TD-CHANNEL-01 dual native+web |
| 5.6 | ERP / product khác: cùng NuGet · `source=` + RBAC JWT | Reuse |

`source` registry (SA chốt **GAP-PT-SOURCE-01**): `patrol` · `incident` · `ticket` · `maintenance` · `ops` · …

---

## Phase 6 — Skill + ops

| # | Task | DoD |
|---|------|-----|
| 6.1 | `/implement-platform-task` trong Rules | GAP-PT-SKILL-01 · trỏ FileService analog |
| 6.2 | `/init-bff-task` | Consumer one-liner |
| 6.3 | STATUS.md TaskService (port · DB · cutover) | Như FileService |

---

## Thứ tự phụ thuộc

```
0.docs
  → 1.common + ChatSectionParcel
    → 2.scaffold TaskService + Schema pair
      → 3.Medical consume + cutover
        → 4.inbox federate
          → 5.RMMS patrol CreateTask + Linm.Web.Task
            → 6.skill
```

1 có thể song song 2. **Cấm** RMMS CreateTask trước 2.4 NuGet.

---

## Out of scope (P1)

- Platform.MessageService riêng (inbox-only DB)
- Native iOS/Android ChatTab kit (align sau Signed web)
- Bắt buộc ticket parent trên mọi task
- Invent RMMS `api/v1/td-tk/…` cho chat

---

## Risks

| Risk | Mitigation |
|------|------------|
| Inbox trống task sau cutover | Phase 4 trước khi gỡ Medical Messages task branch |
| Medical FE `/tasks` 404 | 3.4 pages hoặc redirect parcel |
| Route ↗ sai domain | 1.3 routeMap bắt buộc trước RMMS shell |
| SLA job 2 chỗ | SlaNotificationJob chỉ trên Task.Api |
