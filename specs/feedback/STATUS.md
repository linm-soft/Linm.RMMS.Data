# STATUS — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/feedback-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/feedback.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/feedbacks`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_d242eb29` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| updatedAt | `2026-08-09T16:04:20.000Z` |
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
| 3 | team-lead | task/feedback.md | **done** |
| 4 | dev | implement/feedback.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **done** (approve · autopilot) |

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
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:13:00.000Z |
| versionGate | rechecked |

<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
