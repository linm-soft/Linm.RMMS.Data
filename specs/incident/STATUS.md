# STATUS — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| phase | `data_analy` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/incident-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/incident/incidents`** (**cấm ERP.***) |
| domain | **Incident** |
| taskId | `task_28ef1042` |
| mfeStdRoute | `/incident` |
| mfeStdUrl | `http://localhost:9304/incident` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| updatedAt | `2026-08-21T05:30:32.945Z` |
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
| 3 | team-lead | task/incident.md | **done** |
| 4 | dev | implement/incident.md | **pending** |
| 5 | qa | qa/scenarios.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Field`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot · task_28ef1042 · FormType) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | incident | docs | — | done | context API Signed |
| T-BE-01 | incident | api | T-CTX-01 | done | CRUD + assign/close |
| T-BE-02 | incident | migration | T-BE-01 | done | rmms_incidents |
| T-BFF-01 | incident | bff | T-BE-01 | done | proxy |
| T-PERM-01 | incident | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | incident | ui | T-BFF-01 | done | A–D · LAYOUT-06 |
| T-UI-FORM-01 | incident | ui | T-UI-LIST-01 | done | Slideout Z1–Z3 |
| T-UI-ACT-01 | incident | ui | T-UI-FORM-01 | done | Delete + assign/close API pair |
| T-BE-CRUD-01 | incident | api | T-BE-01 | done | verify API-01…07 |
| T-UI-MAP-FORM | — | — | — | n/a | packKind=list |
| T-QA-01 | incident | qa | T-UI-FORM-01 | done | scenarios |
| T-QA-CRUD-01 | incident | qa | T-UI-ACT-01 | done | C/E/V/D + row actions |

## Blockers / open questions

- **GAP-RPT-SRC-INC-*** — `rpt-thien-tai` DamageSummary · `rpt-thiet-hai` dòng KL/ĐVT · `rpt-un-tac` DurationMin · `rpt-tngt` type · `rpt-hang-muc-hu-hong` DefectItem — `specs/_form-type/REPORT-SOURCE-FIELD-GAPS.md`

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/incident`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html`

## Resume / closeout

- resume: `task_28ef1042` · FormType CRUD gap · at: `2026-08-14T12:20:00.000Z`
- GAP-P2-ACT-DELETE · GAP-P2-ACT-ASSIGN-CLOSE · GAP-TL-FORMTYPE-01 **CLOSED**
- MFE SSOT: `Linm.Web.RMMS.Field` (`Linm.Web.RMMS.Incident` không tồn tại)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T12:20:00.000Z |
| versionGate | rechecked |

<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
