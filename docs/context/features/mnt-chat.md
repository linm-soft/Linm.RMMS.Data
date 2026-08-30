# Trao đổi công việc — Feature Context

> **Slug:** `mnt-chat` · **Module:** Maintenance · **Phase:** P1 mobile chat  
> **Status:** Live · `/edit-mobile-feature` + `/integrate-message-service` `client_scope=mobile` `surfaces=chat_section`  
> **Kind:** Full screen `#sc-mnt-chat` (packKind sheet → screen)  
> **packKind:** screen (chat style) · entry `mnt-list` `#i-chat`  
> **Cấm** toast-only · **cấm** invent `api/v1/mnt-chat` · **cấm** kit VM/API

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tap Trao đổi trên card công việc → màn chat (bubble + composer paper-plane) · GET/POST messages qua Mobile.Bff |
| Persona | Người nhận việc · điều phối |
| DoD | Dual OS `#sc-mnt-chat` · kit `LinmChatThread` + `LinmChatComposer` · BFF `maintenance/work-orders/{id}/messages` · **cấm** revert toast |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| `#sc-mnt-chat` | Full screen | TopBar title · subtitle WO · thread bubbles (mine/theirs) · composer paper-plane |
| Entry | Parent list | `mnt-list` card `#i-chat` / `btn-mnt-chat-{id}` |

## 3. API

| Method | Path | Note |
|--------|------|------|
| GET | `mobile-bff/api/v1/maintenance/work-orders/{id}/messages?type=message` | List · `isMine` |
| POST | `mobile-bff/api/v1/maintenance/work-orders/{id}/messages` | Body `{ content, type: "message" }` |

Domain: `api/v1/maintenance/work-orders/{id}/messages`. EntityType `work-order`. `parentId` = reply only.

## 4. Database

`rmms_work_order_messages` · TenantEntity · FK `WorkOrderId` cascade.

## 5. Events

P1 HTTP only. Hub = Notification — **cấm** kit start SignalR.

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `dev` | `await_confirm` | `2026-08-29T18:29:10.561Z` |
