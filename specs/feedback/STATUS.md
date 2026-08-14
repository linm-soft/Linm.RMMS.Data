# STATUS — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| phase | `dev` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `list` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/feedback-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/feedback.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| mfeStdRoute | `/integration/feedback` |
| mfeStdUrl | `http://localhost:9314/integration/feedback` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/feedbacks`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_4ff7bc4b` |
| skillVersion | `2026.08.10.2` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.10.2` |
| updatedAt | `2026-08-14T14:47:32.820Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/feedback.md | **done** (ACT+CRUD ids) |
| 4 | dev | implement/feedback.md | **blocked** (paused) |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (autopilot) |
| solution_confirm | **approve** (autopilot) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Integration`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | feedback | docs | — | done | context API Signed |
| T-BE-01 | feedback | api | T-CTX-01 | done | CRUD feedbacks |
| T-BE-02 | feedback | migration | T-BE-01 | done | rmms_app_feedbacks |
| T-BFF-01 | feedback | bff | T-BE-01 | done | proxy |
| T-PERM-01 | feedback | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | feedback | ui | T-BFF-01 | done | A–D · LAYOUT-06 · no Tìm |
| T-UI-FORM-01 | feedback | ui | T-UI-LIST-01 | done | Slideout Z1–Z3 |
| T-QA-01 | feedback | qa | T-UI-FORM-01 | done | scenarios |
| T-UI-ACT-01 | feedback | ui | T-UI-FORM-01 | done | toolbar/row Delete · footer-only |
| T-BE-CRUD-01 | feedback | api | T-BE-01 | done | verify list/C/U/D |
| T-UI-MAP-FORM | feedback | — | — | n/a | packKind=list |
| T-QA-CRUD-01 | feedback | qa | T-UI-ACT-01 | done | Create/Edit/View/Delete |

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9314/integration/feedback`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/feedback/ui/prototype/feedback-list-prototype.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T19:20:00.000Z |
| versionGate | rechecked |

<!-- Version meta: skillVersion=2026.08.10.2 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.2 · versionGate=ok -->
