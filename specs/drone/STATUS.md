# STATUS — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/drone-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/drone.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Drone` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/drone` (DOMAIN-MAP — **cấm ERP.***) |
| taskId | `task_e4372bbe` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| mfeStdRoute | `/drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| updatedAt | `2026-08-09T15:48:35.891Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — board / Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | RUN PACKET · **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.Drone` |
| design_confirm | approve | Autopilot · prototype + reviewUrl |
| solution_confirm | approve | Autopilot · RMMS Drone domain |
| review_confirm | approve | Autopilot · findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | `_data-analy/features/drone-control-hint.md` | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/drone.md | **done** |
| 4 | dev | implement/drone.md | **done** |
| 5 | qa | qa/scenarios.md | **done** |
| 6 | review | review/findings.md | **done** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | drone | team_lead | — | done | Context/demo/controlHint |
| T-PERM-01 | drone | dev | — | done | useDronePermissions |
| T-UI-LIST | /drone | dev | T-PERM-01 | done | LinCatalogDataGrid + LinCatalogListPagination |
| T-UI-FORM | /drone/:id | dev | T-UI-LIST | done | C/E/V/Copy + artifacts |
| T-BE-01 | scans | dev | — | done | Entity+DTO+Service+Controller |
| T-BE-02 | scans | dev | T-BE-01 | done | BFF proxy |
| T-BE-03 | scans | dev | T-BE-01 | done | Schema_RmmsDroneScans |
| T-QA-01 | drone | qa | T-UI-FORM,T-BE-02 | done | scenarios.md |
| T-RV-01 | drone | review | T-QA-01 | done | findings.md |

## Blockers / open questions

- None. Follow-up: Cesium live (F-01) · real upload/worker (F-02) · IAM (F-03).

## Links

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- controlHint: `specs/_data-analy/features/drone-control-hint.md`
- implement: `specs/drone/implement/drone.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/drone/ui/prototype/drone-list-prototype.html`

## Verify

| Gate | Result |
|------|--------|
| FE typecheck | PASS |
| FE build (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS |
| BE API Release | PASS |
| BE BFF Release | PASS |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
