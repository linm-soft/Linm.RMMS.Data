# STATUS — rpt-un-tac

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| phase | `done` |
| status | `done` |
| packKind | `report` |
| changeScope | `edit_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/rpt-un-tac.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/un-tac` |
| mfeStdUrl | `http://localhost:9311/bao-cao/un-tac` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` · DOMAIN-MAP — **cấm ERP.*** |
| prototype.artifact | `specs/rpt-un-tac/ui/prototype/rpt-un-tac-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-un-tac/ui/prototype/rpt-un-tac-prototype.html` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_56e8bd90` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` |
| updatedAt | `2026-08-16T16:34:36.874Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Confirms

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **approve** | packet `Linm.RMMS.WebService` |
| uiRepo | **approve** | MFE `Linm.Web.RMMS.Report` |
| autoApprove | **ON** | run packet `task_56e8bd90` |
| design_confirm | **approve** | Design `task_e992f75f` · autoApprove ON · reviewUrl prototype |
| solution_confirm | **approve** | SA `task_b1d0b537` · autoApprove ON · `be/solution-discovery.md` |
| review_confirm | **approve** | Review `task_56e8bd90` · autoApprove ON · `review/findings.md` PASS |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/features/rpt-un-tac-control-hint.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/rpt-un-tac.md | **confirmed** |
| 4 | dev | implement/rpt-un-tac.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | `/bao-cao/un-tac` | docs | — | **done** | |
| T-PERM-01 | `/bao-cao/un-tac` | api | T-CTX-01 | **stub** | report.un-tac.read |
| T-UI-LIST-01 | `/bao-cao/un-tac` | ui | T-PERM-01 | **pass** | Kind E · verify keep draft/applied |
| T-UI-FORM-01 | — | ui | — | **OUT** | |
| T-UI-ACT-01 | `/bao-cao/un-tac` | ui | T-UI-LIST-01 | **pass** | |
| T-UI-LKP-01 | `/bao-cao/un-tac` | ui | T-UI-LIST-01 | **pass** | loại/tuyến SearchInput |
| T-UI-FIELD-01 | `/bao-cao/un-tac` | ui | T-UI-LIST-01 | **pass** | Date + formatAtVi |
| T-UI-PROD-01 | `/bao-cao/un-tac` | ui | T-UI-FORM-01 | **pass** | rmms-congestion-report |
| T-UI-UX-01 | `/bao-cao/un-tac` | ui | T-UI-LIST-01 | **pass** | toast |
| T-BE-01 | `/bao-cao/un-tac` | api | T-CTX-01 | **done** | congestion keep |
| T-BE-02 | `/bao-cao/un-tac` | seed | T-BE-01 | **done** | 12 |
| T-BFF-01 | `/bao-cao/un-tac` | bff | T-BE-01 | **done** | |
| T-QA-01 | `/bao-cao/un-tac` | qa | T-UI-ACT-01 | **done** | `task_fd873c85` · P0 none |
| T-RV-01 | `/bao-cao/un-tac` | review | T-QA-01 | **done** | `task_56e8bd90` · PASS · pipeline closed |
| task_e49f5eb8 | `/bao-cao/un-tac` | chain | — | **completed** | full pipeline trước · build PASS |
| task_df0cd995 | `/bao-cao/un-tac` | po | data-analy confirmed | **completed** | roleOnly=po · enqueue **design** |
| task_e992f75f | `/bao-cao/un-tac` | design | PO confirmed | **completed** | roleOnly=design · enqueue **sa** |
| task_b1d0b537 | `/bao-cao/un-tac` | sa | design confirmed | **completed** | roleOnly=sa · enqueue **team-lead** |
| task_cec813d0 | `/bao-cao/un-tac` | team_lead | SA confirmed | **completed** | roleOnly=team_lead · enqueue **dev** |
| task_df3abdf0 | `/bao-cao/un-tac` | dev | TL confirmed | **completed** | roleOnly=dev · `/agent-dev` · MFE build PASS · enqueue **qa** |
| task_fd873c85 | `/bao-cao/un-tac` | qa | Dev confirmed | **completed** | roleOnly=qa · `/agent-qa` · MFE build PASS · enqueue **review** |
| task_56e8bd90 | `/bao-cao/un-tac` | review | QA confirmed | **completed** | roleOnly=review · `/agent-review` · autoApprove ON · MFE build PASS · **không** enqueue |

## Blockers / open questions

- **GAP-SA-UNTAC-DRAFT**: **đóng** (Dev verify keep · QA confirm · Review confirm).
- Pipeline hết Review — **không** role kế.

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9311/bao-cao/un-tac`
- mfeStdRoute: `/bao-cao/un-tac`
- po: `specs/rpt-un-tac/po/requirement.md`
- design: `specs/rpt-un-tac/ui/design.md`
- prototype: `specs/rpt-un-tac/ui/prototype/rpt-un-tac-prototype.html`
- sa: `specs/rpt-un-tac/be/solution-discovery.md`
- task: `specs/rpt-un-tac/task/rpt-un-tac.md`
- implement: `specs/rpt-un-tac/implement/rpt-un-tac.md`
- qa: `specs/rpt-un-tac/qa/scenarios.md`
- review: `specs/rpt-un-tac/review/findings.md`
- data-analy: `specs/_data-analy/features/rpt-un-tac-control-hint.md`

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
