# STATUS — rmms-task-integrate

| Field | Value |
|-------|-------|
| feature | `rmms-task-integrate` |
| phase | `data_analy` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `platform` |
| runMode | `implement` |
| blockedReason | **later** — đợi `platform-message` + `platform-task` done |
| context | `docs/plan/platform-task/RMMS-TUAN-DUONG.md` · hub 24 tuần đường |
| dependsOn | `platform-message` · `platform-task` |
| apply | patrol `source=patrol` · incident `source=incident` · Field deep-link `/cv` |
| skill | `/integrate-task-service` · `/integrate-message-service` (`client_scope`) |
| updatedAt | `2026-08-25T15:21:56.869Z` |
## Pipeline

| Step | Agent | Status |
|------|-------|--------|
| * | * | **blocked** — không enqueue auto-run |

## Unblock

Khi TaskService + ChatSectionParcel xanh: set `status=pending` · `/integrate-task-service` RMMS BFF NuGet · **cấm** ChatTab trong Field.
