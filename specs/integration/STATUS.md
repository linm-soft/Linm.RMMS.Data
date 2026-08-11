# STATUS — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/integration-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/integration.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/*`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_805cde43` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| updatedAt | `2026-08-09T16:33:58.521Z` |
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
| 3 | team-lead | task/integration.md | **done** |
| 4 | dev | implement/integration.md | **done** |
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
| T-CTX-01 | integration | docs | — | done | context API Signed |
| T-BE-01 | integration | api | T-CTX-01 | done | sync-jobs · partners · import |
| T-BE-02 | integration | migration | T-BE-01 | done | rmms_sync_jobs · rmms_partner_adapters |
| T-BFF-01 | integration | bff | T-BE-01 | done | proxy hub |
| T-PERM-01 | integration | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | integration | ui | T-BFF-01 | done | Kind G hub · A–D Sync/Partners |
| T-UI-FORM-01 | integration | ui | T-UI-LIST-01 | done | Import slideout Z1–Z3 |
| T-QA-01 | integration | qa | T-UI-FORM-01 | done | scenarios |

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9314/integration`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/integration/ui/prototype/integration-hub-prototype.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:48:00.000Z |
| versionGate | rechecked |

<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
