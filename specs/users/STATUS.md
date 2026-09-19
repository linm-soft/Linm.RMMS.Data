# STATUS — users

| Field | Value |
|-------|-------|
| feature | `users` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/users-demo.html` → `integration/users.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/users.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/users`** + LKP `job-titles` (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_e4c84ce6` |
| qaTaskId | `task_9d0370d3` |
| reviewTaskId | `task_e4c84ce6` |
| analyTaskId | `task_8c25b03b` |
| poTaskId | `task_e3d2b6f8` |
| designTaskId | `task_141a68a1` |
| saTaskId | `task_9e90aa92` |
| teamLeadTaskId | `task_8149b4c8` |
| title | Users — chức vụ lookup (job-title) |
| mfeStdRoute | `/integration/users` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| dataAnaly | `specs/_data-analy/features/users-control-hint.md` + `users-real-data.md` |
| handoffCompact | `specs/users/handoff/review-compact.md` |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |
| updatedAt | `2026-09-18T16:51:45.833Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — (review released · pipeline complete) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | control-hint + real-data + compact | **done** |
| 1 | po | po/requirement.md (KEEP + delta job-title) + po-compact | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl + design-compact | **confirmed** |
| 2.2 | sa | be/solution-discovery.md + sa-compact | **confirmed** |
| 3 | team-lead | task/users.md + team_lead-compact | **confirmed** |
| 4 | dev | implement/users.md + dev-compact | **confirmed** |
| 5 | qa | qa/scenarios.md + qa-compact · e2e S0,S1,QA-20 | **confirmed** |
| 6 | review | review/findings.md + review-compact | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (`Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (`Linm.Web.RMMS.Integration`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| route_confirm | **approve** `/integration/users` (KEEP) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|--------|-------|-------|
| T-DA-01 | users | data_analy | — | **done** | controlHint SearchInput org-unit + road-route |
| T-DA-02 | users | data_analy | — | **done** | `task_8c25b03b` · edit_page · job-title §5b · GAP-F-USR-05 · compact PASS |
| T-PO-01 | users | po | T-DA-02 | **done** | `task_e3d2b6f8` · KEEP + delta chức vụ · AC-G-09 · po-compact PASS |
| T-DES-01 | users | design | T-PO-01 | **done** | `task_141a68a1` · KEEP + delta job-title · prototype · design-compact PASS |
| T-SA-01 | users | sa | T-DES-01 | **done** | `task_9e90aa92` · KEEP + delta jobTitleCode · FormMode↔API · sa-compact PASS |
| T-TL-01 | users | team_lead | T-SA-01 | **done** | `task_8149b4c8` · KEEP + emit T-*-JOB · team_lead-compact PASS |
| T-CTX-01 | users | docs | T-DA-01 | **done** | Kind B LinPageLayout |
| T-PERM-01 | users | ui+api | T-CTX-01 | FE **done** · BE stub | `integration.users.read\|create\|update\|delete` |
| T-BE-01 | users | api | T-CTX-01 | **done** | `?route=` + validate RoutesCsv / OrgCode / ManagedUserIdsCsv |
| T-BE-02 | users | migration | T-BE-01 | **n/a** | Schema_RmmsUsers DONE |
| T-BFF-01 | users | bff | T-BE-01 | **done** | QS forward `route` |
| T-UI-LIST-01 | users | ui | T-BFF-01 | **done** | shell + filter tuyến SearchInput |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | **done** | full-page · View `<dl>` |
| T-UI-ACT-01 | users | ui | T-UI-LIST-01 | **done** | Đổi MK · Phân tuyến / Cán bộ QL SearchInput |
| T-UI-MAP-FORM | users | ui | T-UI-FORM-01 | **done** | routesCsv SearchInput multi |
| T-UI-LKP-01 | users | ui | T-BE-CRUD-01 | **done** | road-route + users |
| T-UI-FIELD-01 | users | ui | T-UI-MAP-FORM | **done** | cấm Text `routesCsv` |
| T-UI-PROD-01 | users | ui | T-UI-FORM-01 | **done** | cấm Resource/Slideout/View=readOnly |
| T-UI-UX-01 | users | ui | T-UI-LIST-01 | **done** | spacing · Lin confirm |
| T-BE-CRUD-01 | users | api | T-BE-01 | **done** | CRUD + validate |
| T-QA-01 | users | qa | T-UI-FORM-01 | **done** | scenarios.md · list A–D + `?route=` |
| QA-CRUD | users | qa | T-UI-ACT-01 | **done** | Create/Edit/View + assign SearchInput + pwd + delete |
| T-BE-JOB-01 | users | api | T-SA-01 | **done** | migration job_title_code · DTO · denorm · `?jobTitleCode=` · soft validate |
| T-BFF-JOB-01 | users | bff | T-BE-JOB-01 | **done** | QS forward jobTitleCode · proxy LKP |
| T-UI-JOB-01 | users | ui | T-SA-01 | **done** | Zone B filter + col Chức vụ + form SearchInput jobTitleCode |
| T-UI-LKP-JOB | users | ui | T-BE-JOB-01 | **done** | wire LKP job-titles (stub OK) |
| T-QA-JOB-01 | users | qa | T-UI-JOB-01 | **done** | `task_9d0370d3` · e2e S0/S1 + Chức vụ filter |
| QA-JOB-CRUD | users | qa | T-UI-JOB-01 | **done** | form SearchInput + API schema · empty seed |
| T-REV-01 | users | review | T-QA-JOB-01 | **done** | `task_e4c84ce6` · findings · review_confirm=approve |

## Blockers / open questions

- GAP-F-USR-05 chức vụ lookup — **CLOSED** (staff · Review approve)
- GAP-JOB-05 catalog API stub live (seed 19) · soft OK · Accept
- GAP-JOB-06 ProfileTab — boundary · P1 không block staff · Accept
- GAP-F-USR-01 Auth tách — **P2 không block** · Accept
- History API stub P1 — **không block** · Accept

## Links

- data_analy → po → design → sa → task → implement → qa → review
- DOMAIN-MAP: `users` → Integration · LKP `job-titles`
- mfeStdUrl: `http://localhost:9314/integration/users`
- PO: `specs/users/po/requirement.md` (**KEEP** · delta job-title) · **confirmed**
- Design: `specs/users/ui/design.md` (**KEEP** · delta) · **confirmed**
- SA: `specs/users/be/solution-discovery.md` (**KEEP** · delta) · **confirmed**
- TL: `specs/users/task/users.md` (**KEEP** · delta T-*-JOB) · **done**
- Dev: `specs/users/implement/users.md` · **confirmed**
- QA: `specs/users/qa/scenarios.md` · **done** · compact `handoff/qa-compact.md`
- Review: `specs/users/review/findings.md` · **confirmed** · `task_e4c84ce6`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html`
- controlHint: `specs/_data-analy/features/users-control-hint.md`
- realData: `specs/_data-analy/features/users-real-data.md`
- compact: `specs/users/handoff/review-compact.md`

## Retry

- from: `design` · at: `2026-08-15T01:47:54.076Z` · board user Retry step

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:55:00.000Z |
| versionGate | rechecked |
| reviewSkillVersion | 2026.08.08.21 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.15.1 |
| dataAnalyRulesVersion | 2026.08.15.2 |
| dataAnalyContentHash | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| saSkillVersion | 2026.08.08.21 |
| teamLeadSkillVersion | 2026.08.09.02 |
| devSkillVersion | 2026.08.09.02 |
| qaSkillVersion | 2026.08.08.21 |
