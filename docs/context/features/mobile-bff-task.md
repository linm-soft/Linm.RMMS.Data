# Mobile.Bff × TaskService — Feature Context

> **Slug:** `mobile-bff-task` · **Module:** Platform Task · **Phase:** P1 BFF · UI P1.5  
> **Status:** Context · pipeline `tl` / `pending` · **P1 sau Map+File**  
> **Skills:** `/integrate-task-service` `client_scope=mobile` · chain `/integrate-message-service`  
> **Peers:** [`platform-task.md`](platform-task.md) · [`mnt-list.md`](mnt-list.md) · [PLAN platform-task](../../plan/platform-task/PLAN.md)  
> **Cấm** CRUD task trên Field · **cấm** gộp `mnt-list` (WO RMMS) thành TaskService

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Mobile.Bff `mobile-bff/api/v1/tasks/*` → TaskService `:5020` |
| Persona | Người nhận việc sau hiện trường |
| App hiện có | `mnt-list` / `mnt-chat` = **maintenance WO** RMMS — **giữ** |
| DoD BFF | NuGet + rewrite + curl list 401/200 · **chưa** = UI native done |

## 2. Design / UI

**DEFER** đến BFF verify. Dual OS cùng turn. Kit chrome only. Origin quad `systemCode` + `source` + `sourceEntityType` + `sourceEntityId`.

## 3. API

Reuse TaskService. **Cấm invent** `api/v1/mobile-tasks`.

| App path | BFF | Downstream |
|----------|-----|------------|
| `tasks/*` | `AddLinmTaskServiceBff` + controllers + rewrite `mobile-bff` → `web-bff` | `{TaskService}/api/v1/tasks/*` |

Chat task = `/integrate-message-service` — **không** fork `mnt-chat`.

## 4. Database

TaskService DB. **Cấm** copy bảng task vào RMMS.

## 5. Events

SignalR Task.Api — app **sau** BFF. P1 BFF không bắt buộc hub.

## 6. Gaps

| ID | Default |
|----|--------|
| GAP-MOB-BFF-TASK-01 | Chưa NuGet Task trên Mobile.Bff |
| GAP-PT-SOURCE-01 | Filter `source` ≠ Medical `scope` |
| GAP-MOB-BFF-TASK-02 | Blocked Message + `platform-task` web |

## 7. Demo checklist

- [ ] BFF build + curl `tasks` qua `:5202`  
- [ ] Native list/detail **sau** BFF — dual OS
