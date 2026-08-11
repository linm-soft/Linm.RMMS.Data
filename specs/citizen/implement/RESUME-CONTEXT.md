# RESUME-CONTEXT — citizen

> Completed · 2026-08-09T14:52:00.000Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_ae6e4e92` |
| alias | `citizen` |
| title | Cổng người dân |
| status | **done** (full_pipeline · review approve) |
| mfeRoot | `D:\AI-QLBD` |
| beRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| notes | slash=/agent-qldb-workflow · packKind=list · mfeStdUrl=http://localhost:9314/integration/citizen |

## Pipeline

All steps **done**: po → design → sa → team-lead → dev → qa → review.

## Verify

- yarn typecheck PASS
- LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build PASS
- dotnet build Linm.RMMS.WebService.sln -c Release PASS
