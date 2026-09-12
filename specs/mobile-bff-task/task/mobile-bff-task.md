# Tasks — mobile-bff-task (P1 — sau Map + File)

**Không start** đến `T-MAP-BFF-05` + `T-FILE-BFF-05` PASS.  
**Execute:** `/integrate-task-service` AskQuestion `client_scope=mobile`.

| id | layer | Việc | DoD |
|----|-------|------|-----|
| T-TASK-BFF-01 | bff | PackageReference `Linm.Platform.TaskService.Bff` pin parity Web · `AddLinmTaskServiceBff` + controllers | **cấm** ProjectReference · **cấm** clone TasksController |
| T-TASK-BFF-02 | bff | Rewrite `mobile-bff/api/v1/tasks` → `web-bff/api/v1/tasks` · catch-all skip `tasks/` | không nuốt sang RMMS |
| T-TASK-BFF-03 | bff | `ServiceEndpoints:TaskService` `:5020` · Docker + compose | appsettings |
| T-TASK-BFF-04 | bff | `dotnet build` · curl list `:5202` | PASS |
| T-TASK-APP-01 | app | Dual OS list/detail kit chrome · VM → Mobile.Bff `tasks` | **cấm** 1 OS · **cấm** Task.Api host |
| T-TASK-APP-02 | app | Create/deep-link origin quad · **cấm** CRUD task trên patrol/incident form | origin-link-fields |
| T-TASK-MSG-01 | app | `/integrate-message-service` `client_scope=mobile` | **cấm** fork mnt-chat |
| T-TASK-QA-01 | qa | e2e list+detail dual OS | sau APP |

`mnt-list` / `mnt-progress` / `mnt-chat` **không** đổi path P1.
