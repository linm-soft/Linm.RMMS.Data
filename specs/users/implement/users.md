# Implement — users

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| taskId | `task_a49a5149` |
| autoApprove | `ON` |
| updatedAt | `2026-09-18T16:40:00.000Z` |
| delta | chức vụ lookup `jobTitleCode` · GAP-F-USR-05 |
| cite | `job-title.md` §5b |

## KEEP

Prior A–D (route filter · CRUD · MultiSearchCsv · View `<dl>` · full-page) — **không rewrite**.

## Delta — job-title (T-*-JOB)

| id | status | notes |
|----|--------|-------|
| T-BE-JOB-01 | **done** | ADD `job_title_code` · DTO `JobTitleCode`+denorm `JobTitle` · `?jobTitleCode=` · soft ResolveName stub |
| T-BFF-JOB-01 | **done** | users QS forward (passthrough) · `JobTitlesBffController` proxy LKP |
| T-UI-JOB-01 | **done** | Zone B SearchInput Chức vụ · col Chức vụ ≠ roleCode · form SearchInput peer org · View `<dl>` |
| T-UI-LKP-JOB | **done** | `JOB_TITLE_LOOKUP_CONFIG` → `/integration/job-titles/search` · seed 19 fallback |
| T-QA-JOB-01 / QA-JOB-CRUD | **pending** | role QA (queued) |

## APIs

| Mode | API |
|------|-----|
| List+filter | `GET …/users?jobTitleCode=` |
| Create/Copy | `POST …/users` + `jobTitleCode` → denorm JobTitle |
| Edit | `PUT …/users/{id}` + `jobTitleCode` |
| View | `GET …/users/{id}` |
| LKP | `GET …/job-titles` + `/search` (stub seed · GAP-JOB-05) |

## Verify

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| BE `dotnet build` | **PASS** (0 error) |
| E2E | **cấm** role Dev · queued `/agent-qa*` |

## Debt / GAP

| ID | Note |
|----|------|
| GAP-JOB-05 | catalog master chưa live · stub OK |
| GAP-JOB-06 | ProfileTab out P1 |
| GAP-F-USR-01 | Auth permission P2 |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| contentHashAnaly | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| generatedAt | 2026-09-18T16:40:00.000Z |
