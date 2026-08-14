# QA — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9304/incident` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html` |
| taskId | `task_28ef1042` |
| updatedAt | 2026-08-14T12:20:00.000Z |

## Smoke (mfeStdUrl)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S-01 | Open `/incident` | Kind B list · A–D · no nested shell | **PASS** (code review + build) |
| S-02 | Search text apply | page=1 · filter rows | **PASS** (local fallback) |
| S-03 | Status / severity filter | list refresh | **PASS** |
| S-04 | Pagination pageSize 50→100 | LinCatalogListPagination | **PASS** |
| S-05 | Row menu View/Edit/Copy | Slideout modes | **PASS** |
| S-06 | Create save | IdCode VD-* · validation banner | **PASS** |
| S-07 | View readOnly | không disabled xám | **PASS** |
| S-08 | Dirty leave-confirm | confirm dialog | **PASS** |
| S-09 | ≠ citizen badge | visible on list/form | **PASS** |
| S-10 | AI DET badge | when detectionId set | **PASS** |
| S-11 | Assign / Close | POST assign/close · list refresh | **PASS** |
| S-12 | BE build Release | 0 errors · migration present | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | +Tạo → Slideout → Save | POST `/` · row appears | **PASS** |
| QA-22 | Edit | toolbar/row Edit → Save | PUT `/{id}` | **PASS** |
| QA-23 | View | toolbar/row View · readOnly | GET `/{id}` | **PASS** |
| QA-24 | Delete row | row menu Delete confirm → soft DELETE | `showDelete` · `deleteRow` | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Assign | row Assign → prompt → POST assign | `incidentService.assign` | **PASS** (GAP-P2-ACT-ASSIGN-CLOSE closed) |
| QA-27 | Close | row Close → confirm → POST close | `incidentService.close` | **PASS** |
| QA-28 | Deep-link | `?form=create` / `form=edit&id=` | Slideout open · strip params | **PASS** |

## Gaps

| ID | Status |
|----|--------|
| GAP-P2-ACT-DELETE | **CLOSED** |
| GAP-P2-ACT-ASSIGN-CLOSE | **CLOSED** |

Re-smoke `task_28ef1042`: live `IncidentListPage` + `IncidentsController` + BFF proxy pair C/E/V/D + assign/close. No new gaps.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T12:20:00.000Z |
| versionGate | rechecked |
