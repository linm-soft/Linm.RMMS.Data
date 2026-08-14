# STATUS — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| phase | `qa` |
| status | `blocked` |
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
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/citizen-incidents`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_2eb59012` |
| updatedAt | `2026-08-14T14:47:32.578Z` |
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
| 3 | team-lead | task/citizen.md | **done** (ACT+CRUD ids) |
| 4 | dev | implement/citizen.md | **done** |
| 5 | qa | qa/scenarios.md | **blocked** (paused) |
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
| T-CTX-01 | citizen | docs | — | done | context API Signed |
| T-BE-01 | citizen | api | T-CTX-01 | done | CRUD + public + alias |
| T-BE-02 | citizen | migration | T-BE-01 | done | rmms_citizen_incidents |
| T-BFF-01 | citizen | bff | T-BE-01 | done | proxy |
| T-PERM-01 | citizen | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | citizen | ui | T-BFF-01 | done | A–D · LAYOUT-06 · SearchInput status |
| T-UI-FORM-01 | citizen | ui | T-UI-LIST-01 | done | Full-page Z1–Z3 |
| T-QA-01 | citizen | qa | T-UI-FORM-01 | pending | scenarios (next role) |
| T-UI-ACT-01 | citizen | ui | T-UI-FORM-01 | done | toolbar/row → form routes |
| T-BE-CRUD-01 | citizen | api | T-BE-01 | done | verify list/C/U/D |
| T-UI-MAP-FORM | citizen | — | — | n/a | packKind=list |
| T-UI-LKP-01 | citizen | ui | T-UI-FORM-01 | done | SearchInput master |
| T-UI-FIELD-01 | citizen | ui | T-UI-LKP-01 | done | DTO/API field map |
| T-UI-PROD-01 | citizen | ui | T-UI-FORM-01 | done | no Slideout · View `<dl>` |
| T-UI-UX-01 | citizen | ui | T-UI-PROD-01 | done | 4/8/16 · no filterMaxWidthPx |
| T-QA-CRUD-01 | citizen | qa | T-UI-ACT-01 | pending | Create/Edit/View/Delete |

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
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T21:20:00.000Z |
| versionGate | rechecked |
