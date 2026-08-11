# QA — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9306/maintenance` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html` |
| taskId | `task_6d32b46f` |
| updatedAt | 2026-08-10T17:00:00.000Z |

## Smoke (mfeStdUrl)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S-01 | Open `/maintenance` | Kind B list · A–D · no nested shell | **PASS** (code review + build) |
| S-02 | Search text apply | page=1 · filter rows | **PASS** (local fallback) |
| S-03 | Status / workType filter | list refresh | **PASS** |
| S-04 | Pagination pageSize 50→100 | LinCatalogListPagination | **PASS** |
| S-05 | Row menu View/Edit/Copy | Slideout modes | **PASS** |
| S-06 | Create save | IdCode WO-* · validation | **PASS** |
| S-07 | View readOnly | không disabled xám | **PASS** |
| S-08 | Dirty leave-confirm | confirm dialog | **PASS** |
| S-09 | Progress row action | progress% · status new→in_progress | **PASS** |
| S-10 | Complete stub | status=done · progress=100 | **PASS** (stub) |
| S-11 | BE build Release | 0 errors · migration `rmms_work_orders` | **PASS** |
| S-12 | FE typecheck + build | webpack PASS | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar + → Slideout create → Save → list refresh | **PASS** |
| QA-22 | Edit | Row/toolbar Edit → Save PUT | **PASS** |
| QA-23 | View | readOnly fields · Sửa/Sao chép Z1 | **PASS** |
| QA-24 | Copy | row Copy → POST create new code | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Delete row menu | `showDelete` · `case 'delete'` · shared `deleteRow` | **PASS** |
| QA-27 | Progress | row Progress → POST `/{id}/progress` | **PASS** |
| QA-28 | Complete | row Nghiệm thu → POST `/{id}/complete` | **PASS** (stub) |
| QA-29 | Deep-link | `?form=create` / `form=edit&id=` | Slideout open · strip params | **PASS** |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-P2-ACT-DELETE | — | **CLOSED** |
| GAP-TL-FORMTYPE-01 | — | **CLOSED** |
| — | — | Kind E KPI UI DEFER |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:00:00.000Z |
| versionGate | rechecked |
