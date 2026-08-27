# Platform.Message parcel / Chat section — Feature Context

> **Slug:** `platform-message` · **Module:** Platform · **Phase:** P1 SSOT / P2 parcel + generic route  
> **Status:** Context  
> **Kind:** Topbar dropdown + Kind D tab (chat/comment) + inbox page  
> **packKind:** platform — **không** gộp `patrol` / `incident`  
> **Sources:** [`../26-MESSAGE-PARCEL.md`](../26-MESSAGE-PARCEL.md) · `D:/MFE-CORE/Linm.Web.Message` · common ChatTab/CommentsTab/MessageCenter  
> **MFE:** `@linm/message` **đã có** — bổ sung `ChatSectionParcel` (GAP-MSG-PARCEL-01)  
> **BE inbox:** Medical `GET /web-bff/api/v1/messages/conversations` — **cấm** invent RMMS path  
> **Chrome:** skip GOVOne · **cấm** `window.alert`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | SSOT gửi tin + expand (panel + ↗ entity) cho mọi domain dùng Task/ticket/incident |
| Persona | Người nhận việc · điều phối · NV tuần đường (chỉ đọc deep-link) |
| App hiện có | Medical MessageCenter + inbox + incident ChatTab |
| DoD P1 docs | Hub 26 + mount table + send/expand contract |
| DoD P2 | `ChatSectionParcel` · route map host · CommentsTab `incident` · Task MFE mount |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Topbar tin nhắn | Parcel | `fa-comments` · badge · list · ↗ · slideout ChatPanel |
| `/messages` | Parcel inbox | ConversationList + ChatPanel (send + Chi tiết) |
| Tab Trao đổi trên task | ChatSection | `ChatTab` `fa-paper-plane` · `TabSlideout` expand |
| Tab Bình luận | ChatSection | `CommentsTab` thread `parent_id` · Gửi Comment |

Handoff tuần đường: **cấm** chat trên Field — mở Task detail / parcel.

## 3. API

Cite Medical + hub 26 §3. Live RMMS: không.

## 4. Database

`messages` (`entity_type` + `entity_id` + `type` message\|comment). Inbox = query participant. Sau extract Task: **GAP-PT-INBOX-01**.

## 5. Events

`NewMessage` · `MessageEdited` · `MessageDeleted`. Connection = Notification MFE.

## 6. Gaps

Xem [`../26-MESSAGE-PARCEL.md`](../26-MESSAGE-PARCEL.md) §6.

## 7. Demo checklist

- [x] Demo Task HTML chat/comment (`task/task.html`) — mock, không parcel
- [x] Align MFE `@linm/message` ChatSectionParcel (Dev task_992a4353)
- [ ] Genericize ↗ routes khỏi Medical

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa` | `blocked` · e2e FAIL | `2026-08-25T17:56:00.000Z` |
