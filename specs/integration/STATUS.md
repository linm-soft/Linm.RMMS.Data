# STATUS — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| phase | `dev` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/integration-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/integration.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| mfeStdRoute | `/integration` |
| mfeStdUrl | `http://localhost:9314/integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/*`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_fd8ec33e` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| updatedAt | `2026-08-14T14:47:32.764Z` |
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
| 3 | team-lead | task/integration.md | **done** (ACT/CRUD ids) |
| 4 | dev | implement/integration.md | **blocked** (paused) |
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
| T-CTX-01 | integration | docs | — | done | context API Signed |
| T-BE-01 | integration | api | T-CTX-01 | done | sync-jobs · partners · import |
| T-BE-02 | integration | migration | T-BE-01 | done | rmms_sync_jobs · rmms_partner_adapters |
| T-BFF-01 | integration | bff | T-BE-01 | done | proxy hub |
| T-PERM-01 | integration | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | integration | ui | T-BFF-01 | done | Kind G hub · A–D Sync/Partners |
| T-UI-FORM-01 | integration | ui | T-UI-LIST-01 | done | Import slideout Z1–Z3 |
| T-QA-01 | integration | qa | T-UI-FORM-01 | done | scenarios |
| T-UI-ACT-01 | integration | ui | T-UI-FORM-01 | done | toolbar/row View/Edit/Delete · Retry/Toggle |
| T-BE-CRUD-01 | integration | api | T-BE-01 | done | list/get/C/U/D + partner getById |
| T-UI-MAP-FORM | integration | — | — | n/a | packKind=list |
| T-QA-CRUD-01 | integration | qa | T-UI-ACT-01 | done | C/E/V/D + row actions |

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
