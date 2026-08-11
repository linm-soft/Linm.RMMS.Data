# STATUS — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| phase | `dev` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/maintenance-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/maintenance.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Maintenance` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/maintenance/work-orders`** (**cấm ERP.***) |
| domain | **Maintenance** |
| updatedAt | `2026-08-10T16:52:15.764Z` |
| taskId | `task_6d32b46f` |
| autoApprove | `ON` |
| mfeStdRoute | `/maintenance` |
| mfeStdUrl | `http://localhost:9306/maintenance` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Confirms

| Gate | Value |
|------|-------|
| design | approve (autopilot) |
| sa | approve (autopilot) |
| review | approve (autopilot · FormType) |
| beRepo | true |
| uiRepo | true |
| autoApprove | ON |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/maintenance.md | **done** (FormType ACT/CRUD stamped) |
| 4 | dev | implement/maintenance.md | **done** (T-UI-ACT-01 · T-BE-CRUD-01) |
| 5 | qa | qa/scenarios.md | **done** (T-QA-CRUD-01) |
| 6 | review | review/findings.md | **done** (approve · autopilot FormType) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | docs | dev | — | **done** | API Signed + nested route |
| T-BE-01 | api | dev | T-CTX-01 | **done** | WorkOrder CRUD + progress/complete |
| T-BE-02 | migration | dev | T-BE-01 | **done** | `20260810011933_Schema_RmmsWorkOrders` |
| T-BFF-01 | bff | dev | T-BE-01 | **done** | WorkOrdersBffController |
| T-PERM-01 | ui+api | dev | T-BE-01 | **done** | permissions.ts + TODO attr |
| T-UI-LIST-01 | ui | dev | T-BFF-01 | **done** | Zones A–D · **không** rewrite |
| T-UI-FORM-01 | ui | dev | T-UI-LIST-01 | **done** | Slideout Z1–Z3 |
| T-UI-ACT-01 | ui | dev | T-UI-FORM-01 | **done** | Delete toolbar + row menu |
| T-BE-CRUD-01 | api | dev | T-BE-01 | **done** | verify API-01…07 |
| T-UI-MAP-FORM | — | — | — | **n/a** | packKind=list |
| T-QA-01 | qa | qa | T-UI-FORM-01 | **done** | scenarios |
| T-QA-CRUD-01 | qa | qa | T-UI-ACT-01 | **done** | C/E/V/D + row actions |

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9306/maintenance`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html`

## Resume / closeout

- resume: `task_6d32b46f` · FormType CRUD gap · at: `2026-08-10T17:00:00.000Z`
- GAP-P2-ACT-DELETE · GAP-TL-FORMTYPE-01 **CLOSED**

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |
