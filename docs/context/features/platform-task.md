# Platform.Task / Công việc dùng chung — Feature Context

> **Slug:** `platform-task` · **Module:** Platform · **Phase:** P1 demo / P2 extract `Linm.Platform.TaskService`  
> **Status:** Context + Demo  
> **Kind:** B list + D detail tabs (chat/comment) + SLA strip  
> **packKind:** platform — **không** gộp vào `patrol`  
> **Sources:** Medical QLCV · [`../25-PLATFORM-TASK.md`](../25-PLATFORM-TASK.md) · chat [`../26-MESSAGE-PARCEL.md`](../26-MESSAGE-PARCEL.md) · [PLAN](../../plan/platform-task/PLAN.md)  
> **MFE (tương lai):** `Linm.Web.Task` · route `/cv` (chốt `route-vn-abbr` khi scaffold)  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/task/task.html` · catalog `slug=platform-task`  
> **BE:** **chưa** — outline Medical `web-bff/api/v1/tasks` · **cấm** invent path RMMS  
> **Chrome:** skip GOVOne · **cấm** `window.alert`

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Công việc sau hiện trường: assign/pool · lifecycle · chat/comment · SLA realtime |
| Persona | Lãnh đạo BDTX · VP QLĐB · người nhận việc |
| App hiện có | Medical QLCV (nhúng WebService) — extract platform |
| DoD demo | List+pool+SLA · Giao việc từ tuần đường · Trao đổi + Bình luận · toast |
| DoD P2 | Repo `Linm.Platform.TaskService` + BFF NuGet + SignalR · RMMS/Medical consume · `ChatSectionParcel` |

## 2. Design / UI

| Screen | Pattern | Zones |
|--------|---------|-------|
| Công việc của tôi | Kind B | Filter status/priority/source · grid · SLA chip |
| Pool | Kind B | Claim CTA |
| Cảnh báo SLA | Kind E strip | critical / warning từ due_date |
| Chi tiết | Kind D | Header lifecycle · tab Trao đổi / Bình luận qua **`ChatSectionParcel`** (send `fa-paper-plane` · expand `TabSlideout` + ↗) |

Handoff tuần đường: query `?from=patrol&sourceId=` — **cấm** CRUD session trên trang này.

## 3. API

**Live RMMS:** không. Cite Medical + hub 25 §4.

## 4. Database (P2 extract)

`tasks` · `task_collaborators` · `task_subtasks` · `task_activities` · `messages` (entity_type=task). TenantEntity. SLA = derived.

## 5. Events

SignalR `Task_{id}`: `NewMessage` · `TaskStatusChanged`. Notification `DispatchTaskAssigned` / `DispatchNewMessage`.

## 6. Gaps

Xem [`../25-PLATFORM-TASK.md`](../25-PLATFORM-TASK.md) §6.

## 7. Demo checklist

- [x] HTML `task/task.html`
- [x] localStorage share với tuần đường web/mobile
- [ ] Signed → `/align-demo-mfe` **không** vào Field MFE

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `data_analy` | `pending` | `2026-08-25T14:32:00.000Z` |
| mobile | — | — | RMMS later (`rmms-task-integrate`) |
