# STATUS — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| phase | `dev` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/patrol-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/patrol/sessions`** (**cấm ERP.***) |
| domain | **Patrol** |
| taskId | `task_d496cfeb` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |
| dataAnaly | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/patrol-control-hint.md` |
| po.requirement | `specs/patrol/po/requirement.md` |
| design.artifact | `specs/patrol/ui/design.md` |
| sa.artifact | `specs/patrol/be/solution-discovery.md` |
| tl.artifact | `specs/patrol/task/patrol.md` |
| implement.artifact | `specs/patrol/implement/patrol.md` |
| qa.artifact | `specs/patrol/qa/scenarios.md` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| designSkillVersion | `2026.08.14.5` |
| designWorkflowVersion | `2026.08.14.5` |
| designRulesVersion | `2026.08.14.9` |
| saSkillVersion | `2026.08.14.5` |
| saWorkflowVersion | `2026.08.14.5` |
| saRulesVersion | `2026.08.14.9` |
| tlSkillVersion | `2026.08.14.5` |
| tlWorkflowVersion | `2026.08.14.5` |
| tlRulesVersion | `2026.08.14.9` |
| qaSkillVersion | `2026.08.14.5` |
| qaWorkflowVersion | `2026.08.14.5` |
| qaRulesVersion | `2026.08.14.9` |
| reviewSkillVersion | `2026.08.14.5` |
| reviewWorkflowVersion | `2026.08.14.5` |
| reviewRulesVersion | `2026.08.14.9` |
| updatedAt | `2026-08-16T04:05:53.632Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/patrol-control-hint.md` | **done** (`task_36ea7fa2`) |
| 1 | po | po/requirement.md | **done** (`task_af761fcc`) |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** (`task_5e7961be`) |
| 2.2 | sa | be/solution-discovery.md | **done** (`task_91df2c14`) |
| 3 | team-lead | task/patrol.md | **done** (`task_a4508318`) |
| 4 | dev | implement/patrol.md | **blocked** (paused) |
| 5 | qa | qa/scenarios.md | **done** (`task_8178afb0`) |
| 6 | review | review/findings.md | **done** (`task_d496cfeb`) |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (`autoApprove=ON` · agent self-confirm `task_5e7961be`) |
| solution_confirm | **approve** (`autoApprove=ON` · agent self-confirm `task_91df2c14`) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Field`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (`autoApprove=ON` · agent self-confirm `task_d496cfeb`) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DA-01 | patrol | data_analy | — | **done** | controlHint SearchInput road-route |
| T-CTX-01 | patrol | docs | T-DA-01 | **done** | verify |
| T-BE-01 | patrol | api | T-CTX-01 | **done** | CRUD sessions |
| T-BE-02 | patrol | migration | T-BE-01 | **done** | rmms_patrol_sessions · **không** schema mới |
| T-PERM-01 | patrol | ui+api | T-BE-01 | **done** | FE gate · BE stub |
| T-UI-ACT-01 | patrol | ui | T-UI-FORM-01 | **done** | inventory P1 · delta filter → LIST |
| T-BE-CRUD-01 | patrol | api | T-BE-01 | **done** | C/U/D verify |
| T-UI-MAP-FORM | patrol | — | — | n/a | packKind=list |
| T-BE-Q-01 | patrol | api | T-BE-01 | **done** | `?route=` exact |
| T-BE-VAL-01 | patrol | api | T-BE-Q-01 | **done** | Route ∈ 38 · enum VN |
| T-BFF-01 | patrol | bff | T-BE-Q-01 | **done** | `QueryString` passthrough |
| T-FE-API-01 | patrol | ui | T-BFF-01 | **done** | getList `route` |
| T-UI-LKP-01 | patrol | ui | T-PERM-01 | **done** | SearchInput road-route form+filter |
| T-UI-FIELD-01 | patrol | ui | T-UI-LKP-01 | **done** | controlHint ↔ DTO |
| T-UI-PROD-01 | patrol | ui | T-UI-LKP-01 | **done** | seed QL.1/HCM · cấm Slideout |
| T-UI-LIST-01 | patrol | ui | T-FE-API-01 · T-UI-LKP-01 | **done** | A–D KEEP · filter route |
| T-UI-FORM-01 | patrol | ui | T-UI-LKP-01 | **done** | SearchInput route · footer-only |
| T-UI-UX-01 | patrol | ui | T-UI-LIST-01 | **done** | constitution · footer-only |
| T-QA-01 | patrol | qa | T-UI-FORM-01 | **done** | A–D + smoke · `task_8178afb0` |
| T-QA-CRUD-01 | patrol | qa | T-UI-ACT-01 | **done** | C/E/V/Copy/D + LKP/VAL · P0 none |

## Blockers / open questions

- GAP-SA-PAT-* + GAP-TL-PAT-* **closed** Dev `task_4f8ea737`
- QA `task_8178afb0` **done** · P0 none
- Review `task_d496cfeb` **done** · `review_confirm=approve` · pipeline complete
- Kind E+F map/tracks **P2** · GAP-QA-PAT-CODE-DISABLED **P2** (form code `disabled`) · SD-AUTH **P2**

## Links

- data-analy → po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/patrol`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html`
- solution: `specs/patrol/be/solution-discovery.md`
- task: `specs/patrol/task/patrol.md`
- implement: `specs/patrol/implement/patrol.md`
- qa: `specs/patrol/qa/scenarios.md`

## Retry

- from: `data_analy` · at: `2026-08-14T17:50:00.000Z` · board user Retry step · **closed** `task_36ea7fa2`
- completed role: `po` · `task_af761fcc` · at: `2026-08-14T18:00:00.000Z`
- completed role: `design` · `task_5e7961be` · at: `2026-08-14T18:10:00.000Z`
- completed role: `sa` · `task_91df2c14` · at: `2026-08-14T18:20:00.000Z`
- completed role: `team_lead` · `task_a4508318` · at: `2026-08-14T18:40:00.000Z`
- completed role: `dev` · `task_4f8ea737` · at: `2026-08-14T18:20:00.000Z`
- completed role: `qa` · `task_8178afb0` · at: `2026-08-15T01:20:00.000Z`
- completed role: `review` · `task_d496cfeb` · at: `2026-08-15T01:25:00.000Z`

## Resume / closeout

- closeout Data-analy: `task_36ea7fa2` · roleOnly=`data_analy` · controlHint · hash `1d25897d8f…` · PO **pending** chain · at: `2026-08-14T17:50:00.000Z`
- closeout PO: `task_af761fcc` · roleOnly=`po` · `/agent-po` · GAP-PO-PAT-01..07 chốt · Design **pending** chain · at: `2026-08-14T18:00:00.000Z`
- closeout Design: `task_5e7961be` · roleOnly=`design` · `/agent-design` · full-page + SearchInput `road-route` · reviewUrl prototype · `design_confirm=approve` · SA **pending** chain · autoApprove **ON** · at: `2026-08-14T18:10:00.000Z`
- closeout SA: `task_91df2c14` · roleOnly=`sa` · `/agent-sa` · solution **confirmed** · LKP-01 Integration `road-routes/search` · API-01 `?route=` · validate catalog · enum VN · TL **pending** chain · autoApprove **ON** · at: `2026-08-14T18:20:00.000Z`
- closeout Team-lead: `task_a4508318` · roleOnly=`team_lead` · `/agent-team-lead` · T-BE-Q-01/VAL/LKP/LIST-ext/FORM-ext · Dev **pending** chain · autoApprove **ON** · at: `2026-08-14T18:40:00.000Z`
- closeout Dev: `task_4f8ea737` · roleOnly=`dev` · `/agent-dev` · GAP-SA-PAT-* + GAP-TL-PAT-* đóng · yarn/dotnet build PASS · QA **pending** chain · autoApprove **ON** · at: `2026-08-14T18:20:00.000Z`
- closeout QA: `task_8178afb0` · roleOnly=`qa` · `/agent-qa` · T-QA-01/CRUD PASS · P0 none · yarn typecheck+build PASS · Review **pending** chain · autoApprove **ON** · at: `2026-08-15T01:20:00.000Z`
- closeout Review: `task_d496cfeb` · roleOnly=`review` · `/agent-review` · live re-audit PASS · P0 none · yarn typecheck+build PASS · `review_confirm=approve` · pipeline **complete** · autoApprove **ON** · at: `2026-08-15T01:25:00.000Z`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-15T01:25:00.000Z |
| versionGate | rechecked |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.14.5 |
| dataAnalyRulesVersion | 2026.08.14.9 |
| poSkillVersion | 2026.08.14.5 |
| poWorkflowVersion | 2026.08.14.5 |
| poRulesVersion | 2026.08.14.9 |
| designSkillVersion | 2026.08.14.5 |
| designWorkflowVersion | 2026.08.14.5 |
| designRulesVersion | 2026.08.14.9 |
| saSkillVersion | 2026.08.14.5 |
| saWorkflowVersion | 2026.08.14.5 |
| saRulesVersion | 2026.08.14.9 |
| tlSkillVersion | 2026.08.14.5 |
| tlWorkflowVersion | 2026.08.14.5 |
| tlRulesVersion | 2026.08.14.9 |
| qaSkillVersion | 2026.08.14.5 |
| qaWorkflowVersion | 2026.08.14.5 |
| qaRulesVersion | 2026.08.14.9 |
