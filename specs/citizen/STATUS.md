# STATUS — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/citizen-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/citizen.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/citizen-incidents`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_ae6e4e92` |
| updatedAt | `2026-08-09T14:47:00.455Z` |
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
| 3 | team-lead | task/citizen.md | **done** |
| 4 | dev | implement/citizen.md | **done** |
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
| T-CTX-01 | citizen | docs | — | done | context API Signed |
| T-BE-01 | citizen | api | T-CTX-01 | done | CRUD + public + alias |
| T-BE-02 | citizen | migration | T-BE-01 | done | rmms_citizen_incidents |
| T-BFF-01 | citizen | bff | T-BE-01 | done | proxy |
| T-PERM-01 | citizen | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | citizen | ui | T-BFF-01 | done | A–D · LAYOUT-06 · no Tìm |
| T-UI-FORM-01 | citizen | ui | T-UI-LIST-01 | done | Slideout Z1–Z3 |
| T-QA-01 | citizen | qa | T-UI-FORM-01 | done | scenarios |

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9314/integration/citizen`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/citizen/ui/prototype/citizen-list-prototype.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T14:52:00.000Z |
| versionGate | rechecked |
