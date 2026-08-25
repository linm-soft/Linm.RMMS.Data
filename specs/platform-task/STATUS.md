# STATUS — platform-task

| Field | Value |
|-------|-------|
| feature | `platform-task` |
| phase | `data_analy` |
| status | `pending` |
| changeScope | `new_page` |
| packKind | `platform` |
| demo | `N/A` (cite live Medical Task + `ITaskService` · **cấm** `task.html` SSOT) |
| mfe | Cite `D:/Medical/Linm.Web.Medical.Incidents` đến khi `{MFE}` `Linm.Web.Task` |
| backend | Cite Medical `ITaskService` → extract `{TaskServiceRoot}` — **cấm** RMMS.WebService embed |
| runMode | `implement` |
| queue | **second** — sau `platform-message` sticky done / await_confirm |
| context | `docs/context/features/platform-task.md` · hub `docs/context/25-PLATFORM-TASK.md` |
| plan | `{RulesRoot}/docs/plan/linm-task-service/README.md` · `{DocsRoot}/docs/plan/platform-task/PLAN.md` |
| skill | `/implement-task-service` · `/integrate-task-service` · `/review-task-service` |
| updatedAt | `2026-08-25T14:32:00.000Z` |

## Pipeline

| Step | Agent | Status |
|------|-------|--------|
| 0 | data_analy | **pending** |
| 1–6 | po → review | **pending** |

## Confirms

| Gate | Value |
|------|-------|
| autoApprove | **ON** |

## Notes

Scaffold TaskService + chat parcel. **Không** gồm RMMS patrol/incident CreateTask — slug `rmms-task-integrate` **blocked**.
