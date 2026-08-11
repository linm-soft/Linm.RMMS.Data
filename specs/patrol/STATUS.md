# STATUS — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| phase | `dev` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/patrol-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/patrol.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Patrol` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/patrol/sessions`** (**cấm ERP.***) |
| domain | **Patrol** |
| taskId | `task_e0173ab6` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| updatedAt | `2026-08-10T17:00:29.860Z` |
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
| 3 | team-lead | task/patrol.md | **done** (T-UI-ACT-01 · T-BE-CRUD-01 stamped) |
| 4 | dev | implement/patrol.md | **done** (T-UI-ACT-01 · T-BE-CRUD-01) |
| 5 | qa | qa/scenarios.md | **done** (T-QA-CRUD-01) |
| 6 | review | review/findings.md | **done** (approve · autopilot) |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (autopilot) |
| solution_confirm | **approve** (autopilot) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Patrol`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | patrol | docs | — | done | context API Signed |
| T-BE-01 | patrol | api | T-CTX-01 | done | CRUD sessions |
| T-BE-02 | patrol | migration | T-BE-01 | done | rmms_patrol_sessions |
| T-BFF-01 | patrol | bff | T-BE-01 | done | proxy |
| T-PERM-01 | patrol | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | patrol | ui | T-BFF-01 | done | A–D · LAYOUT-06 · no Tìm |
| T-UI-FORM-01 | patrol | ui | T-UI-LIST-01 | done | Slideout Z1–Z3 |
| T-UI-ACT-01 | patrol | ui | T-UI-FORM-01 | done | Delete toolbar + row menu |
| T-BE-CRUD-01 | patrol | api | T-BE-01 | done | verify API-01…05 |
| T-UI-MAP-FORM | patrol | — | — | n/a | packKind=list |
| T-QA-01 | patrol | qa | T-UI-FORM-01 | done | scenarios |
| T-QA-CRUD-01 | patrol | qa | T-UI-ACT-01 | done | C/E/V/D + row actions |

## Blockers / open questions

- GAP-P2-ACT-DELETE · GAP-TL-FORMTYPE-01 **CLOSED**

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/patrol`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:15:00.000Z |
| versionGate | rechecked |
