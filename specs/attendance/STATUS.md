# STATUS — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| phase | `qa` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `crud_gap` |
| gap | `crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/attendance-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/attendance.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (packet Patrol MFE **không tồn tại** · board ui_repo = Field) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/patrol/attendance-logs`** (**cấm ERP.***) |
| domain | **Patrol** |
| taskId | `task_c33a0de3` |
| mfeStdRoute | `/patrol/attendance` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |
| updatedAt | `2026-08-14T14:47:32.624Z` |
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
| 3 | team-lead | task/attendance.md | **done** (ACT+CRUD ids) |
| 4 | dev | implement/attendance.md | **done** |
| 5 | qa | qa/scenarios.md | **blocked** (paused) |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (prior · autopilot) |
| solution_confirm | **approve** (prior · autopilot) |
| be_repo_confirm | **approve** (packet `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet `Linm.Web.RMMS.Field`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | attendance | docs | — | done | context API Signed |
| T-BE-01 | attendance | api | T-CTX-01 | done | CRUD attendance-logs |
| T-BE-02 | attendance | migration | T-BE-01 | done | rmms_attendance_logs |
| T-BFF-01 | attendance | bff | T-BE-01 | done | proxy |
| T-PERM-01 | attendance | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-UI-LIST-01 | attendance | ui | T-BFF-01 | done | A–D · LAYOUT-06 · **no rewrite** |
| T-UI-FORM-01 | attendance | ui | T-UI-LIST-01 | done | Slideout footer-only |
| T-QA-01 | attendance | qa | T-UI-FORM-01 | done | scenarios |
| T-UI-ACT-01 | attendance | ui | T-UI-FORM-01 | **done** | Delete + footer-only |
| T-BE-CRUD-01 | attendance | api | T-BE-01 | **done** | verify C/U/D |
| T-QA-CRUD-01 | attendance | qa | T-UI-ACT-01 | **done** | Create→Delete smoke |

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/patrol/attendance`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-14T21:10:00.000Z |
| versionGate | rechecked |
