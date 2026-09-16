# Trao đổi sự cố — Feature Context (mobile)

> **Slug:** `incident-chat` · **Module:** Incident · **Phase:** P1 mobile chat  
> **Status:** Live · `/edit-mobile-feature` + `/integrate-message-mobile`  
> **Kind:** Full screen `#sc-incident-chat` (packKind sheet → screen)  
> **packKind:** screen (chat style) · entry `incident-list` `#i-chat`  
> **Cấm** toast-only · **cấm** invent `api/v1/incident-chat` · **cấm** kit VM/API

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Tap Trao đổi trên card sự cố → màn chat (bubble + composer paper-plane) · GET/POST messages qua Mobile.Bff |
| Persona | Tuần đường · tuần kiểm · điều phối hiện trường |
| DoD | Dual OS `#sc-incident-chat` · kit `LinmChatThread` + `LinmChatComposer` · BFF `incident/incidents/{id}/messages` · **cấm** revert toast |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| `#sc-incident-chat` | Full screen | TopBar title · subtitle incident · thread bubbles (mine/theirs) · composer paper-plane |
| Entry | Parent list | `incident-list` card `#i-chat` / `btn-inc-chat-{id}` |

## 3. API

| Method | Path | Note |
|--------|------|------|
| GET | `mobile-bff/api/v1/incident/incidents/{id}/messages?type=message` | List · `isMine` |
| POST | `mobile-bff/api/v1/incident/incidents/{id}/messages` | Body `{ content, type: "message" }` |

Domain: `api/v1/incident/incidents/{id}/messages`. EntityType `incident`. `parentId` = reply only.

## 4. Database

`rmms_incident_messages` · TenantEntity · FK `IncidentId` cascade.

## 5. Events

P1 HTTP only. Hub = Notification — **cấm** kit start SignalR.

## 6. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `incident-list` | Entry `#i-chat` + parent list |
| `incident-detail` | Chi tiết — **OUT** chat |
| `mnt-chat` | Trao đổi công việc (parallel) — **không** gộp |
| `platform-message` | Parcel chat generic — **không** mount Field |

## 7. Gaps

| ID | Default |
|----|---------|
| GAP-MOB-EDIT-01 | Lock packet — **cấm** worker revert `#i-chat` về toast |
| GAP-MOB-INC-CHAT-API-01 | **CLOSED** — live `GET\|POST …/messages` (không invent `…/comments`) |
