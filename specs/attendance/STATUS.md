# STATUS — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `crud_gap` |
| gap | `crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/attendance-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/attendance.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` (packet Patrol MFE **không tồn tại** · board ui_repo = Field) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/patrol/attendance-logs`** (**cấm ERP.***) |
| domain | **Patrol** |
| taskId | `task_2e0cffe3` |
| mfeStdRoute | `/patrol/attendance` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |
| dataAnaly | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/attendance-control-hint.md` |
| po.requirement | `specs/attendance/po/requirement.md` |
| design.artifact | `specs/attendance/ui/design.md` |
| sa.artifact | `specs/attendance/be/solution-discovery.md` |
| tl.artifact | `specs/attendance/task/attendance.md` |
| implement.artifact | `specs/attendance/implement/attendance.md` |
| qa.artifact | `specs/attendance/qa/scenarios.md` |
| review.artifact | `specs/attendance/review/findings.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/attendance-list-prototype.html` |
| updatedAt | `2026-08-16T02:21:22.682Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/attendance-control-hint.md` | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/attendance.md | **done** |
| 4 | dev | implement/attendance.md | **done** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet `Linm.Web.RMMS.Field`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| autoApprove | **ON** (run packet `task_2e0cffe3` · roleOnly=`review`) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DA-01 | attendance | data_analy | — | **done** | controlHint SearchInput road-route · GAP QL.22 |
| T-CTX-01 | attendance | docs | — | **done** | context API Signed |
| T-BE-01 | attendance | api | T-CTX-01 | **done** | CRUD attendance-logs |
| T-BE-02 | attendance | migration | T-BE-01 | **done** | rmms_attendance_logs · **no new Schema** |
| T-PERM-01 | attendance | ui+api | T-BE-01 | **done** | FE gate · BE stub |
| T-UI-LIST-01 | attendance | ui | T-BFF-01 | **done** | A–D KEEP · Zone B route + onlyOutZone |
| T-UI-FORM-01 | attendance | ui | T-UI-LIST-01 | **done** | Slideout KEEP · route SearchInput |
| T-QA-01 | attendance | qa | T-UI-FORM-01 | **done** | `task_b9c436be` · re-smoke A–D + delta |
| T-UI-ACT-01 | attendance | ui | T-UI-FORM-01 | **done** | Delete + footer-only |
| T-BE-CRUD-01 | attendance | api | T-BE-01 | **done** | verify C/U/D |
| T-QA-CRUD-01 | attendance | qa | T-UI-ACT-01 | **done** | `task_b9c436be` · C/E/V/Copy/Delete + LKP/VAL |
| T-UI-LKP-01 | attendance | ui | T-PERM-01 | **done** | LKP-01 `GET integration/road-routes/search` |
| T-UI-FIELD-01 | attendance | ui | T-UI-LKP-01 | **done** | field type vs hint · UTC · decimal GPS |
| T-UI-PROD-01 | attendance | ui | T-UI-LKP-01 | **done** | seed `QL.22`→`QL.1` |
| T-UI-UX-01 | attendance | ui | T-UI-LIST-01 | **done** | fa-user-clock · no filterMaxWidthPx |
| T-BE-Q-01 | attendance | api | T-BE-01 | **done** | list `route` · `onlyOutZone` · GPS search |
| T-BE-VAL-01 | attendance | api | T-BE-Q-01 | **done** | Route ∈ road-routes · status allow-list |
| T-BFF-01 | attendance | bff | T-BE-Q-01 | **done** | query passthrough `route` · `onlyOutZone` |
| T-FE-API-01 | attendance | ui | T-BFF-01 | **done** | `getList` params `route` · `onlyOutZone` |

## Blockers / open questions

- P0: none
- P2 `RequirePermission` attr DEFER (GAP-P2-PERM-ATTR) · configHint (GAP-P2-CC-06) · Kind E / Face NFC / Excel DEFER
- roleOnly=`review` **done** (`task_2e0cffe3`) · pipeline complete

## Links

- data-analy → po → ui → be → task → implement → qa → review
- PO: `specs/attendance/po/requirement.md`
- Design: `specs/attendance/ui/design.md`
- Prototype: `specs/attendance/ui/prototype/attendance-list-prototype.html`
- SA: `specs/attendance/be/solution-discovery.md`
- TL: `specs/attendance/task/attendance.md`
- Implement: `specs/attendance/implement/attendance.md`
- QA: `specs/attendance/qa/scenarios.md`
- Review: `specs/attendance/review/findings.md`
- controlHint: `specs/_data-analy/features/attendance-control-hint.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/patrol/attendance`

## Retry

- from: `data_analy` · at: `2026-08-14T16:14:26.796Z` · board user Retry step
- data_analy completed: `2026-08-14T16:40:00.000Z` · task_66bae191 · next=`po`
- po completed: `2026-08-14T16:45:00.000Z` · task_be41b753 · next=`design`
- design await_confirm: `2026-08-14T16:50:00.000Z` · task_dcdef46b
- sa await_confirm: `2026-08-14T16:55:00.000Z` · task_9869676e
- board Approve design+sa → team-lead: `2026-08-14T17:00:00.000Z`
- team_lead completed: `2026-08-14T17:05:00.000Z` · task_96c3edd5 · next=`dev`
- dev completed: `2026-08-14T17:00:00.000Z` · task_47f14701 · next=`qa`
- qa completed: `2026-08-14T17:30:00.000Z` · task_35eccf28 · next=`review`
- review completed: `2026-08-14T17:45:00.000Z` · task_3b8b3994 · pipeline complete
- qa re-run completed: `2026-08-16T02:20:00.000Z` · task_b9c436be · next=`review`
- review completed: `2026-08-16T02:30:00.000Z` · task_2e0cffe3 · pipeline complete

## Resume / closeout

- closeout Data-analy: `task_66bae191` · roleOnly=`data_analy` · at: `2026-08-14T16:40:00.000Z`
- closeout PO: `task_be41b753` · roleOnly=`po` · at: `2026-08-14T16:45:00.000Z`
- closeout Design: `task_dcdef46b` · roleOnly=`design` · at: `2026-08-14T16:50:00.000Z`
- closeout SA: `task_9869676e` · roleOnly=`sa` · at: `2026-08-14T16:55:00.000Z`
- closeout Team-lead: `task_96c3edd5` · roleOnly=`team_lead` · at: `2026-08-14T17:05:00.000Z`
- closeout Dev: `task_47f14701` · roleOnly=`dev` · `/agent-dev` · at: `2026-08-14T17:00:00.000Z`
- closeout QA: `task_35eccf28` · roleOnly=`qa` · `/agent-qa` · T-QA-01 / T-QA-CRUD-01 PASS · yarn typecheck+build PASS · next=`review` · at: `2026-08-14T17:30:00.000Z`
- closeout Review: `task_3b8b3994` · roleOnly=`review` · `/agent-review` · **approve** autopilot · yarn typecheck+build PASS · pipeline complete · at: `2026-08-14T17:45:00.000Z`
- closeout QA: `task_b9c436be` · roleOnly=`qa` · `/agent-qa` · T-QA-01 / T-QA-CRUD-01 PASS · yarn typecheck+build PASS · next=`review` · at: `2026-08-16T02:20:00.000Z`
- closeout Review: `task_2e0cffe3` · roleOnly=`review` · `/agent-review` · **approve** autopilot · yarn typecheck+build PASS · pipeline complete · at: `2026-08-16T02:30:00.000Z`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-16T02:30:00.000Z |
| versionGate | rechecked |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.14.5 |
| dataAnalyRulesVersion | 2026.08.14.9 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| teamLeadSkillVersion | 2026.08.14.5 |
| devSkillVersion | 2026.08.14.5 |
| qaSkillVersion | 2026.08.14.5 |
| reviewSkillVersion | 2026.08.14.5 |
