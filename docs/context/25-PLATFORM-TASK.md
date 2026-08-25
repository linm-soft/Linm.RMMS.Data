# Platform.Task — SSOT công việc dùng chung (Medical → `Linm.Platform.TaskService`)

> **Mục đích:** Tách **quản lý sau hiện trường** khỏi slug tuần đường; extract Task khỏi Medical.WebService để **mọi domain** reuse.  
> **Plan:** [`../plan/platform-task/PLAN.md`](../plan/platform-task/PLAN.md)  
> **Chat SSOT (parcel, không fork):** [`26-MESSAGE-PARCEL.md`](26-MESSAGE-PARCEL.md) · `@linm/message`  
> **Ref:** `D:/Medical/Linm.Web.Medical.Incidents` · `D:/Medical/Linm.Web.Medical.WebService` (`ITaskService` + messages + SLA + SignalR)  
> **Common (đã có — cấm fork):** `ChatTab` · `CommentsTab` · `useMessages` · `signalRService` / `taskGroup` / `HubEvent`  
> **Pattern repo:** `Linm.Platform.FileService` (api + BFF NuGet) · analog `/implement-file-service`  
> **Apply RMMS:** tuần đường ghi ca → **CreateTask** `source=patrol` · MFE tương lai `Linm.Web.Task`  
> **Demo (no BE):** [`../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-web.html`](../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-web.html) · [`…/task/task.html`](../../Linm.RMMS.Demo/src/demo/task/task.html) · [`…/patrol/tuan-duong-mobile.html`](../../Linm.RMMS.Demo/src/demo/patrol/tuan-duong-mobile.html)  
> **Cấm invent API live.** Path dưới = **outline** copy từ Medical; **TaskService chưa repo**.

---

## 1. Tách HARD

| Lớp | Ở đâu | Không |
|-----|--------|------|
| **Hiện trường tuần đường** | RMMS `patrol` / mobile hub-map-pin | CRUD công việc, SLA, chat |
| **Sự cố / Vấn đề** | RMMS `incident` | Copy TaskService vào RMMS.WebService |
| **Công việc + SLA + SignalR task** | **`Linm.Platform.TaskService`** + **Linm.Web.Task** | Copy TaskService vào RMMS / giữ mãi trong Medical.WebService |
| **Chat / comment / inbox** | **`@linm/message`** parcels + common tabs | Hard-code form chat trong Field MFE |

Medical **đang nhúng** Task/SLA/Messages trong `Linm.Web.Medical.WebService` — extract ra platform (giống FileService), không fork UI.

```
[NV tuần đường] ghi điểm · GPS · ảnh
        │  Kết ca / Giao việc
        ▼
[Linm.Platform.TaskService]  source=patrol · sourceEntityId=sessionId|pointId
        │  SignalR Task_{id}  +  Notification fan-out
        │  POST /tasks/{id}/messages  type=message|comment
        ▼
[Linm.Web.Task]  list · pool · SLA · **ChatSectionParcel** (`@linm/message`)
        │
        ▼
[RMMS shell] mount MFE Task · Field chỉ deep-link
[Topbar] MessageCenterParcel · Inbox MessagesInboxParcel
```

---

## 2. Common — UI + realtime (SSOT)

Chi tiết send/expand/parcel: **[`26-MESSAGE-PARCEL.md`](26-MESSAGE-PARCEL.md)**.

| Artifact | Path | Dùng |
|----------|------|------|
| Topbar + inbox | `@linm/message` `MessageCenterParcel` · `MessagesInboxParcel` | Shell — **cấm** clone |
| Chat section (P2 parcel) | `ChatSectionParcel` — **GAP-MSG-PARCEL-01** | Task detail tabs |
| Chat (trao đổi) | `ChatTab` · `entityType: ticket \| task \| incident` · gửi `fa-paper-plane` · expand `TabSlideout` | In-entity |
| Comment (thread) | `CommentsTab` · **hiện chỉ** `ticket \| task` | **GAP-PT-COMMON-01** |
| Hook | `useMessages` · `useConversations` | Join/leave room |
| SignalR | `taskGroup(id)` = `Task_{id}` · `JoinTaskRoom` / `LeaveTaskRoom` | Connection = `@linm/notification` |
| Events | `NewMessage` · `MessageEdited` · `MessageDeleted` · `TaskStatusChanged` · `ReceiveNotification` | |

**Cấm** clone ChatTab vào RMMS Field. Bump common khi thiếu `entityType`.

**Check Medical (2026-08-25):** Task **BE** đủ Get/Create/Update/Delete messages. Incident form dùng `ChatTab`. **Không** có Task*Page trong Incidents MFE (**GAP-PT-UI-01**). `CommentsTab` không gắn page (**GAP-PT-COMMENT-UI-01**).

---

## 3. Medical — cơ chế copy (cite)

**Lifecycle** (`TasksController`):

`created → assigned → in_progress → under_review → completed`  
+ `support_requested` · `collaborative` · `blocked` · `changes_requested` · `cancelled`

**Assign:** `direct` · `pool` · `team` (claim / claim-from-department).

**Messages** (unified): `type=message` (chat) \| `type=comment` (thread `parent_id`).  
`POST …/tasks/{id}/messages` → hub `NewMessage` + `DispatchNewMessageAsync`.

**SLA:** không bảng alert. `SlaService` tính từ `due_date` vs UTC · `SlaNotificationJob` hosted.  
`GET sla/alerts?domain=task` · `POST sla/tasks/{id}/escalate`.

**IdCode:** `IIdCodeService.GenerateAsync()` — cấm Guid/Random (Top 13).

---

## 4. Target layout (chưa scaffold)

```
API-CORE/Linm.Platform.TaskService/
  api/src/Task.Api/                         ← api/v1/tasks · sla · CollaborationHub
  bff/src/Linm.Platform.TaskService.Bff/    ← web-bff/api/v1/tasks  NuGet
MFE-CORE/Linm.Web.Task/                     ← @linm/task
MFE-CORE/Linm.Web.Message/                  ← @linm/message (đã có) + ChatSectionParcel
```

Consumer (Medical, RMMS, ERP): BFF **NuGet** `Linm.Platform.TaskService.Bff` (cấm ProjectReference / `local-packages/`).  
Skill khi implement: `/implement-file-service` analog · `/create-bff-api-feature` · `/init-bff-notification` · **chưa có** `/implement-platform-task`.

### Outline route (từ Medical — Platform đổi host)

| Method | Path (BFF consumer) | Việc |
|--------|---------------------|------|
| GET/POST | `/web-bff/api/v1/tasks` | List / create |
| GET | `/web-bff/api/v1/tasks/pool` · `/stats` | Pool · KPI |
| GET | `/web-bff/api/v1/tasks/{id}` | Detail |
| PATCH | `…/claim` · `start` · `submit` · `approve` · `block` · … | Lifecycle |
| GET/POST | `…/tasks/{id}/messages?type=` | Chat + comment |
| GET | `/web-bff/api/v1/sla/alerts?domain=task` | SLA |
| POST | `/web-bff/api/v1/sla/tasks/{id}/escalate` | Leo thang |
| GET | `/web-bff/api/v1/messages/conversations` | Inbox — Medical P1; **federate** P2 (**GAP-PT-INBOX-01**) |

Domain API host: `api/v1/…` (không `web-bff` trên Task.Api). **RMMS Patrol không** thêm các path này.

**RMMS bind:** `CreateTaskDto.source = "patrol"` · `sourceEntityType` / `sourceEntityId` (session hoặc điểm) — field `source` đã có trên Medical GetTasks; SA chốt tên cột khi extract.

---

## 5. RMMS apply (P1 demo / P2 BE)

| Từ tuần đường | Task |
|---------------|------|
| Kết ca · điểm Cấp bách | Auto/confirm **Giao việc** · `priority` map đỏ/cam/vàng |
| Điểm Kế hoạch năm | Task due = kỳ kế hoạch · không SLA 24–48h |
| Hạt trưởng duyệt ca | Không thay Task — vẫn `supervise` / session |
| Sửa chữa BDTX | Assignee = đơn vị HĐ · pool Khu |

Mobile: capture ở `patrol-*` · danh sách việc / chat = màn sibling **Task** (demo `tuan-duong-mobile` tab Việc). Native align sau Signed `Linm.Web.Task` + Mobile.Bff proxy.

---

## 6. Gaps

| ID | |
|----|--|
| GAP-PT-REPO-01 | Chưa repo `Linm.Platform.TaskService` / `Linm.Web.Task` |
| GAP-PT-SKILL-01 | ~~Chưa slash~~ — `/implement-task-service` · `/integrate-task-service` · `/review-task-service` |
| GAP-PT-COMMON-01 | `CommentsTab` thiếu `incident` (ChatTab đã có) |
| GAP-PT-SOURCE-01 | SA: `source` + `sourceEntityId` cho patrol/incident |
| GAP-PT-TICKET-01 | Medical filter `ticketId` — RMMS **không** bắt Ticket; task độc lập + source |
| GAP-PT-UI-01 | Medical Incidents: nav `/tasks` + `task/endpoint.ts`, **không** Task*Page |
| GAP-PT-COMMENT-UI-01 | `CommentsTab` không gắn form task/incident |
| GAP-PT-INBOX-01 | Conversations Medical DB — federate sau extract |
| GAP-MSG-* | Parcel / route / cast — hub 26 |
| GAP-TD-CHANNEL-01 | Dual native + web — hub 24 |

---

## 7. Demo checklist

- [x] Web tuần đường: ca · dropdown hiện trường · màu ưu tiên · Kết ca / Giao việc
- [x] Platform.Task demo: list · pool · SLA · chat · comment thread · toast (cấm `alert`)
- [x] Mobile frame: ghi điểm lớn · offline · việc + SLA + chat
- [ ] Align MFE `Linm.Web.Task` + `ChatSectionParcel` sau Signed
- [ ] Scaffold `Linm.Platform.TaskService` — PLAN Phase 2 · skill mới / `/hey-linm` scaffold
