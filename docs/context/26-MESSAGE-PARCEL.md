# Chat / Message parcel — SSOT (`@linm/message`)

> **Mục đích:** Một chỗ cho **inbox + chat section** (gửi + expand). Task / ticket / incident / tuần đường **không** fork UI.  
> **MFE:** `D:/MFE-CORE/Linm.Web.Message` (`@linm/message`)  
> **Common (cấm fork):** `ChatTab` · `CommentsTab` · `ChatPanel` · `MessageCenter` · `useMessages` · `TabSlideout`  
> **Mount SSOT:** `topbarParcels.ts` → `TOPBAR_MESSAGE_PARCEL` · `MESSAGES_INBOX_PARCEL`  
> **Task BE:** [`25-PLATFORM-TASK.md`](25-PLATFORM-TASK.md) · plan [`../plan/platform-task/PLAN.md`](../plan/platform-task/PLAN.md)  
> **Cấm** `signalRService.start()` trong Message — connection **owned** bởi `@linm/notification`.  
> **Cấm invent API live RMMS.** Path dưới = cite Medical / common.

---

## 1. Tách HARD — chat ≠ task CRUD

| Lớp | Ở đâu | Không |
|-----|--------|------|
| **Inbox + topbar tin nhắn** | Parcel `@linm/message` | Clone MessageCenter vào Task / Field / Medical page |
| **Chat section trên entity** | Common `ChatTab` / `CommentsTab` + `useMessages` · **P1 parcel** `ChatSectionParcel` (GAP-MSG-PARCEL-01) | Form textarea tự viết trong Field MFE |
| **Lưu tin + room SignalR** | Host entity API (`…/{tasks\|tickets\|medical-incidents}/{id}/messages`) + hub group | RMMS Patrol tự bảng chat |
| **CRUD công việc / SLA** | `Linm.Platform.TaskService` | Nhét lifecycle task vào Message MFE |

```
[Topbar]  MessageCenterParcel  fa-comments + badge
              │ click item → Slideout ChatPanel (send + ↗ expand detail)
              │ footer → /messages
              ▼
[Inbox]   MessagesInboxParcel  list + ChatPanel
              │ ↗ / Chi tiết → entity route (task / ticket / incident)
              ▼
[Entity]  ChatSection  ChatTab (message) + CommentsTab (comment thread)
              │ POST …/{prefix}/{id}/messages  type=message|comment
              ▼
[Hub]     Task_{id} / Ticket_{id} / Incident_{id}  NewMessage
```

---

## 2. Parcels đã có (`Linm.Web.Message`)

Export từ `src/message.tsx`. Shell: `MessageParcelShell` = Redux + `fetchUnreadMessageCount` + `signalRService.onReconnected` — **không** start hub.

| Parcel | Export | Mount | UI |
|--------|--------|-------|-----|
| **MessageCenterParcel** | `MessageCenter` (common) | Topbar `TOPBAR_MESSAGE_PARCEL` | Icon `fa-comments` · badge unread · dropdown list |
| **MessagesInboxParcel** | `MessagesInboxPage` | Home `MessagesPageParcelHost` · `MESSAGES_INBOX_PARCEL` | `/messages` · list + `ChatPanel` |

**Host:** `Linm.Web.Home` inbox; Topbar slot `@linm/nav`. Domain MFE **cấm** re-implement dropdown tin nhắn.

### 2.1 MessageCenter — send / expand (đã hỗ trợ)

| Hành vi | Control | Kết quả |
|---------|---------|---------|
| Mở inbox rút | `fa-comments` · `aria-expanded` | Fetch conversations · **không** xóa badge cho đến khi chọn |
| Gửi trong slideout | `ChatTab` submit `fa-paper-plane` **Gửi** | `useMessages` → `POST …/messages` `type=message` |
| Expand chat UI | `TabSlideout` `fa-expand` / `fa-compress` | Full slideout desktop / slide-up mobile |
| Expand **ra entity** | Nút `fa-external-link-alt` (↗) trên item | `getDetailRoute` → `/tasks/:id` · `/tickets/:id` · `/medical-incidents/:id` |
| Click thân item | — | Đóng dropdown · Slideout `ChatPanel` · mark-read |
| Xem tất cả | Footer | `onNavigate('/messages')` |

### 2.2 ChatPanel (inbox + slideout)

Header: icon entity · code · title · status · nút **Chi tiết** `fa-external-link-alt`.  
Body: `ChatTab` + `useMessages(entityType, entityId)`.

**GAP-MSG-CAST-01:** `ChatPanel` ép `entityType as 'ticket' \| 'task'` khi truyền `ChatTab` — **mất `incident`**. ChatTab props đã nhận `incident`. Sửa = bỏ cast.

**GAP-MSG-ROUTE-01:** `getDetailRoute` **hard-code Medical** (`/medical-incidents/:id`, `/tasks/:id`). RMMS cần `/cv/:id` · `/sc/:id` (chốt `route-vn-abbr`). Host phải inject **route map** (prop / parcel customProps) — cấm if-domain trong common.

---

## 3. Chat section trên Task (in-entity)

Medical **BE** đã unified: `ITaskService` Get/Create/Update/Delete messages · `type=message|comment` · `parent_id` thread · SignalR `NewMessage` group `Task_{id}` · fan-out `GetParticipantIdsAsync`.

Medical **FE Incidents:**

| Surface | Dùng chat/comment? |
|---------|-------------------|
| Incident form tab Trao đổi | **Có** — `ChatTab` + `useMessages('incident', id)` |
| Nav `/tasks` + `task/endpoint.ts` | API client **đủ** lifecycle + messages |
| Task list/detail page | **Không có** trong Incidents MFE — **GAP-PT-UI-01** |
| `CommentsTab` | Re-export shared — **không** page nào import — **GAP-PT-COMMENT-UI-01** |

`useMessages` tách `type=message` → `ChatTab` · `type=comment` → `CommentsTab` (tree `parentId`). Join room: `JoinTaskRoom` / `JoinTicketRoom` / `JoinIncidentRoom`.

Common `messageEndpoint` prefix:

| entityType | BFF path (cite Medical) |
|------------|-------------------------|
| `task` | `/tasks/{id}/messages` |
| `ticket` | `/tickets/{id}/messages` |
| `incident` | `/medical-incidents/{id}/messages` |

Inbox aggregator: Medical `MessagesController` `GET /messages/conversations` · `unread-count` — participant = creator/assignee/collaborator + subscription + sender.

---

## 4. Send icon + expand — contract UI (SSOT)

Mọi chat section (parcel hoặc tab) **phải** giữ:

| Slot | Icon / control | Common |
|------|----------------|--------|
| Gửi chat | `fa-paper-plane` + label Gửi | `ChatTab` footer `Button type=submit` |
| Gửi comment / reply | `fa-paper-plane` Gửi · Gửi Comment | `CommentsTab` |
| Expand panel | `fa-expand` / `fa-compress` | `TabSlideout` `showExpandButton` (default on) |
| Expand entity | `fa-external-link-alt` + «Chi tiết» | `ChatPanel` · MessageCenter item ↗ |
| Mute | `fa-bell` / `fa-bell-slash` | `headerLeft` TabSlideout · `useEntitySubscription` |
| Load more | cuộn lên / vuốt | ChatTab `onLoadMore` |
| Toast | `useAppToast` | **Cấm** `window.alert` |

**P1 parcel mới (GAP-MSG-PARCEL-01):** `ChatSectionParcel` trong `@linm/message`.

Props (outline — chốt khi implement):

- `entityType` · `entityId` · `onNavigate` · `mode?: 'chat' | 'comments' | 'both'`
- `detailRoute?` (override GAP-MSG-ROUTE-01) hoặc `routeMap` từ shell
- Wrap `ChatTab` + `CommentsTab` + `useMessages` — **cấm** copy markup

Task MFE `Linm.Web.Task` **mount parcel**, không import ChatTab trực tiếp (tránh lệch version). Incident Medical có thể giữ ChatTab in-page đến khi cutover parcel.

---

## 5. SignalR + unread

| | |
|--|--|
| Connection start | `@linm/notification` only |
| Message reconnect | `MessageParcelShell` → `fetchUnreadMessageCount` |
| Inbox live | `HubEvent.NewMessage` → refresh list / preview |
| Entity live | `useMessages` join/leave room |
| Unread | `GET /messages/unread-count` · mark-read on open conv |

---

## 6. Gaps

| ID | |
|----|--|
| GAP-MSG-PARCEL-01 | Chưa `ChatSectionParcel` — Task/Field chưa mount được chat SSOT |
| GAP-MSG-ROUTE-01 | `getDetailRoute` Medical-hardcoded |
| GAP-MSG-CAST-01 | ChatPanel ép `ticket\|task`, drop incident |
| GAP-PT-COMMON-01 | `CommentsTab` thiếu `incident` |
| GAP-PT-UI-01 | Medical không có Task*Page dù nav `/tasks` |
| GAP-PT-COMMENT-UI-01 | CommentsTab không gắn task/incident form |
| GAP-PT-INBOX-01 | Conversations nằm Medical DB — sau extract TaskService phải **federate** inbox (xem PLAN) |

---

## 7. Apply domain

| Domain | Chat | Task |
|--------|------|------|
| Medical | Incident `ChatTab` · inbox parcel | Extract → consume TaskService |
| RMMS | Parcel only · Field deep-link Task | `CreateTask` `source=patrol` |
| ERP / khác | Cùng parcel + `source=` | Cùng TaskService NuGet BFF |

**Cấm** clone `Linm.Web.Message` per product.
