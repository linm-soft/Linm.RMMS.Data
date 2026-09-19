# handoff-compact — sa → team_lead

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `sa` |
| status | `PASS` |
| taskId | `task_9e90aa92` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued qa) |
| solution_confirm | `approve` |
| skillVersion | `2026.08.08.21` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `team_lead` |
| full | `specs/users/be/solution-discovery.md` |

## Artifacts

| Kind | Path |
|------|------|
| solution | `specs/users/be/solution-discovery.md` (**KEEP** + delta) |
| design | `specs/users/ui/design.md` (**confirmed**) |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| seed | `job-title-seed.json` (19) |
| mfe | `/integration/users` |
| be | Integration · `users` + LKP `job-titles` · **cấm ERP.*** |

## Delta (mandatory)

- Persist **`jobTitleCode`** → col `job_title_code` · denorm `JobTitle` = catalog name
- List: `?jobTitleCode=` · DTO expose code+name · col Chức vụ **≠** roleCode
- FormMode: Create/Edit/Copy POST/PUT + code · View GET · Zone B LKP SearchInput
- LKP `api/v1/integration/job-titles` (+`/search`) · BFF same · soft GAP-JOB-05 stub OK
- Migration ADD column · **không** bảng mới · SHARE=`tenant_keep`
- **cấm** invent package · master CRUD job-title · ProfileTab P1 (GAP-JOB-06 boundary)

## FormMode ↔ API

| Mode | API |
|------|-----|
| List+filter | `GET …/users?jobTitleCode=` |
| Create/Copy | `POST …/users` + `jobTitleCode` |
| Edit | `PUT …/users/{id}` + `jobTitleCode` |
| View | `GET …/users/{id}` |
| LKP | `GET …/job-titles/search` |

## Gates

tz_na · xco_na · tenant_a · share_a(job-title master)

## GAP

| ID | Sev | SA |
|----|-----|-----|
| GAP-F-USR-05 | P1 | IN solution |
| GAP-DA-USR-JOBTITLE-UI/API | P0 | → TL/Dev T-UI-JOB / T-BE-JOB |
| GAP-JOB-05 | soft | stub OK |
| GAP-JOB-06 | boundary | Profile out P1 |
| GAP-F-USR-01 | P2 | no block |

## TL emit

T-BE-JOB-01 · T-BFF-JOB-01 · T-UI-JOB-01 · T-UI-LKP-JOB · KEEP prior DONE

## UNCLEAR

— none (Autopilot)

## DoR

solution=yes · FormMode↔API=yes · entity+migration=yes · BFF=yes · LKP=yes · solution_confirm=approve · KEEP+delta=yes
