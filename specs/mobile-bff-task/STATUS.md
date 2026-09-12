# STATUS — mobile-bff-task

| Field | Value |
|-------|-------|
| feature | `mobile-bff-task` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `list` |
| stack | `native_dual` |
| skill | `/integrate-task-service` `client_scope=mobile` |
| context | `docs/context/features/mobile-bff-task.md` |
| plan | `docs/plan/mobile-bff-platform-integrate/PLAN.md` |
| blockedBy | `mobile-bff-map` + `mobile-bff-file` BFF verify · peer `platform-message` |
| mfe | — (native · **cấm** mfeStdUrl) |
| ios | `Linm.RMMS.Mobile.iOS` |
| android | `Linm.RMMS.Mobile.Android` |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/tasks/*` |
| backend | TaskService `:5020` — **cấm ERP.*** · **cấm** gộp `mnt-list` |
| updatedAt | `2026-09-12T06:35:22.829Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 3 | team-lead | `task/mobile-bff-task.md` | **pending** |
| 4a | dev | NuGet Task BFF + rewrite | **pending** |
| 4b | dev | `/integrate-task-service` dual OS | **pending** |
| 5 | qa | — | **pending** |
| 6 | review | — | **pending** |
## Blockers / open questions

- **P1:** không enqueue Dev đến Map+File BFF (`T-MAP-BFF-05` + `T-FILE-BFF-05`) PASS.
- Chat: `/integrate-message-service` `client_scope=mobile` — **cấm** fork `mnt-chat`.
- `mnt-list` = WO RMMS — **giữ**.

## Links

- Web: `AddLinmTaskServiceBff` Version `1.0.0` (pin `/upgrade-common-lib` lúc chạy)
- PLAN RMMS: `docs/plan/platform-task/RMMS-TUAN-DUONG.md`
