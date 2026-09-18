# handoff-compact — dev → qa

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `dev` |
| status | `PASS` |
| taskId | `task_a49a5149` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued qa) |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| skillVersion | `2026.08.09.02` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `qa` |
| full | `specs/users/implement/users.md` |

## Artifacts

| Kind | Path |
|------|------|
| implement | `specs/users/implement/users.md` (**KEEP** + delta T-*-JOB) |
| mfe | `Linm.Web.RMMS.Integration` · `/integration/users` |
| be | `Linm.RMMS.WebService` · Integration · **cấm ERP.*** |

## Done (this role)

| id | layer |
|----|-------|
| T-BE-JOB-01 | api · migration `JobTitleCode` · filter · soft denorm |
| T-BFF-JOB-01 | bff · QS + `job-titles` proxy |
| T-UI-JOB-01 | ui · filter + col + form SearchInput |
| T-UI-LKP-JOB | ui · LKP stub/seed OK |

## FormMode ↔ API

List `?jobTitleCode=` · Create/Edit + code · View GET · LKP `job-titles/search`

## Verify

| Gate | Result |
|------|--------|
| yarn build | **PASS** |
| dotnet build | **PASS** |
| e2e | **queued** qa only |

## Debt

| ID | Note |
|----|------|
| GAP-JOB-05 | stub catalog |
| GAP-JOB-06 | Profile out P1 |
| T-QA-JOB-01 / QA-JOB-CRUD | pending qa |

## UNCLEAR

— none

## DoR

implement=yes · T-*-JOB=done · build=PASS · compact=yes · cấm e2e-dev=yes · KEEP+delta=yes
