# STATUS — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/citizen-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/citizen.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| mfeStdRoute | `/integration/citizen` |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/nhan-dan-incidents`** (**cấm ERP.***) |
| domain | **Integration** |
| po.requirement | `specs/citizen/po/requirement.md` |
| dataAnaly.controlHint | `specs/_data-analy/features/citizen-control-hint.md` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/citizen/ui/prototype/citizen-list-prototype.html` |
| sa.solution | `specs/citizen/be/solution-discovery.md` |
| tl.task | `specs/citizen/task/citizen.md` |
| implement | `specs/citizen/implement/citizen.md` |
| qa.scenarios | `specs/citizen/qa/scenarios.md` |
| review.artifact | `specs/citizen/review/findings.md` |
| taskId | `task_50a2ff4d` |
| updatedAt | `2026-08-16T02:28:43.858Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/features/citizen-control-hint.md` | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/citizen.md | **done** |
| 4 | dev | implement/citizen.md | **done** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Integration`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| autoApprove | **ON** (packet `task_50a2ff4d`) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DA-01 | citizen | data_analy | — | **done** | controlHint · GAP-DA-CIT-ROAD |
| T-CTX-01 | citizen | docs | T-DA-01 | **done** | inbox Kind B · `?road=` · LKP road-routes |
| T-BE-01 | citizen | api | T-CTX-01 | **done** | GAP-SA-CIT-Q01 `road` exact |
| T-BE-VAL-01 | citizen | api | T-BE-01 | **done** | Road catalog · enum 5/6 · Source=`citizen` |
| T-BE-02 | citizen | migration | T-BE-01 | **n/a** | schema `rmms_citizen_incidents` đã có |
| T-BFF-01 | citizen | bff | T-BE-01 | **done** | QueryString passthrough `road` |
| T-FE-API-01 | citizen | ui | T-BFF-01 | **done** | `getList` param `road` |
| T-PERM-01 | citizen | ui+api | T-BE-01 | **done** | `integration.citizen-incidents.*` live |
| T-UI-LIST-01 | citizen | ui | T-FE-API-01 | **done** | Zone B SearchInput road · không rewrite shell |
| T-UI-FORM-01 | citizen | ui | T-UI-LIST-01 | **done** | full-page **5 cột** `data-form-cols="5"` · header chrome · GAP-P2-FORM-GRID-05 |
| T-QA-01 | citizen | qa | T-UI-UX-01 | **done** | `qa/scenarios.md` · `task_88a84739` |
| T-UI-ACT-01 | citizen | ui | T-UI-FORM-01 | **done** | filter road · Delete giữ |
| T-BE-CRUD-01 | citizen | api | T-BE-01 | **done** | CRUD + Q01 + VAL |
| T-UI-MAP-FORM | citizen | — | — | n/a | packKind=list · map P2 |
| T-UI-LKP-01 | citizen | ui | T-UI-FORM-01 | **done** | road-route SearchInput IN P1 |
| T-UI-FIELD-01 | citizen | ui | T-UI-LKP-01 | **done** | |
| T-UI-PROD-01 | citizen | ui | T-UI-FORM-01 | **done** | seed `QL.1` |
| T-UI-UX-01 | citizen | ui | T-UI-PROD-01 | **done** | constitution · Full 5 cột · cấm 2-cột Slideout |
| T-QA-CRUD-01 | citizen | qa | T-UI-ACT-01 | **done** | Create→Edit→View→Delete + filter road |
| T-REVIEW-01 | citizen | review | T-QA-01 | **done** | `review/findings.md` · approve · `task_50a2ff4d` |

## Blockers / open questions

- P0: none
- P1 Q01 / LKP / VAL **CLOSED** (Dev + QA + Review).
- GAP-P2-FORM-GRID-05 **CLOSED** 2026-08-15 — `CitizenFormPage` 5 cột + header chrome.
- GAP-DEV-CONFIG-PLACEHOLDER-01 **P2 Accept** — `configHint` chưa `LinCatalogUiSchemaEditorModal`.
- Kind G public / Leaflet / OTP / media presign / Incident adapter = **P2 / OUT**.
- GAP-P2-PERM-ATTR `[RequirePermission]` **Accept**.
- roleOnly=`review` **done** · pipeline complete.

## Links

- data-analy → po → ui → be → task → implement → qa → review
- Review: `D:/AI-QLBD/Linm.RMMS.Data/specs/citizen/review/findings.md`
- qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/citizen/qa/scenarios.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9314/integration/citizen`

## Retry

- from: `data_analy` · at: `2026-08-14T16:14:53.735Z` · board user Retry step
- completed: `data_analy` · at: `2026-08-14T16:45:00.000Z` · `task_067181fe`
- completed: `po` · at: `2026-08-14T17:20:00.000Z` · `task_a77e191e`
- completed: `design` · at: `2026-08-14T17:30:00.000Z` · `task_5c19b559`
- completed: `sa` · at: `2026-08-14T17:21:00.000Z` · `task_de8336cd`
- completed: `team_lead` · at: `2026-08-14T17:40:00.000Z` · `task_02c1095b`
- completed: `dev` · at: `2026-08-15T00:40:00.000Z` · `task_49b91f68` · Q01+VAL+LKP · build PASS
- completed: `qa` · at: `2026-08-16T02:35:00.000Z` · `task_88a84739` · T-QA-01 + CRUD · typecheck/build PASS
- completed: `review` · at: `2026-08-16T09:30:00.000+07:00` · `task_50a2ff4d` · approve autopilot · yarn typecheck+build PASS

## Resume / closeout

- closeout QA: `task_88a84739` · roleOnly=`qa` · `/agent-qa` · verdict **PASS** · yarn typecheck+build PASS · handoff Review pending · at: `2026-08-16T02:35:00.000Z`
- closeout Review: `task_50a2ff4d` · roleOnly=`review` · `/agent-review` · **approve** autopilot · yarn typecheck+build PASS · pipeline **complete** · at: `2026-08-16T09:30:00.000+07:00`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.15.19 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| dataAnalySkillVersion | 2026.08.15.19 |
| dataAnalyWorkflowVersion | 2026.08.15.19 |
| dataAnalyRulesVersion | 2026.08.16.02 |
| poSkillVersion | 2026.08.15.19 |
| poWorkflowVersion | 2026.08.15.19 |
| poRulesVersion | 2026.08.16.02 |
| designSkillVersion | 2026.08.15.19 |
| designWorkflowVersion | 2026.08.15.19 |
| designRulesVersion | 2026.08.16.02 |
| saSkillVersion | 2026.08.15.19 |
| saWorkflowVersion | 2026.08.15.19 |
| saRulesVersion | 2026.08.16.02 |
| teamLeadSkillVersion | 2026.08.15.19 |
| teamLeadWorkflowVersion | 2026.08.15.19 |
| teamLeadRulesVersion | 2026.08.16.02 |
| devSkillVersion | 2026.08.15.19 |
| devWorkflowVersion | 2026.08.15.19 |
| devRulesVersion | 2026.08.16.02 |
| qaSkillVersion | 2026.08.15.19 |
| qaWorkflowVersion | 2026.08.15.19 |
| qaRulesVersion | 2026.08.16.02 |
| reviewSkillVersion | 2026.08.15.19 |
| reviewWorkflowVersion | 2026.08.15.19 |
| reviewRulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T09:30:00.000+07:00 |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
