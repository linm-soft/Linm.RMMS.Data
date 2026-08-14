# QA — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9304/maintenance` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html` |
| taskId | `task_d4dee8dc` |
| updatedAt | 2026-08-14T20:20:00.000Z |

## Smoke (mfeStdUrl)

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S-01 | Open `/maintenance` | Kind B list · A–D · no nested shell | **PASS** (code review + build) |
| S-02 | Search text apply | page=1 · filter rows | **PASS** (local fallback) |
| S-03 | Status / workType filter | list refresh | **PASS** |
| S-04 | Pagination pageSize 50→100 | LinCatalogListPagination | **PASS** |
| S-05 | Row menu View/Edit/Copy | Full-page form routes | **PASS** |
| S-06 | Create save | IdCode WO-* · validation | **PASS** |
| S-07 | View display | `<dl>` · không Input readOnly | **PASS** |
| S-08 | Dirty leave-confirm | confirm dialog | **PASS** |
| S-09 | Progress row action | progress% · status new→in_progress | **PASS** |
| S-10 | Complete stub | status=done · progress=100 | **PASS** (stub) |
| S-11 | BE build Release | 0 errors · migration `rmms_work_orders` | **PASS** |
| S-12 | FE typecheck + build | webpack PASS | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar + → `/maintenance/new` → Save → list | **PASS** |
| QA-22 | Edit | Row/toolbar Edit → `/:id?mode=edit` → PUT | **PASS** |
| QA-23 | View | display `<dl>` · Sửa/Sao chép | **PASS** |
| QA-24 | Copy | row Copy → `/new?copyFrom=` → POST | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Delete row menu | `showDelete` · `case 'delete'` · shared `deleteRow` | **PASS** |
| QA-27 | Progress | row Progress → POST `/{id}/progress` | **PASS** |
| QA-28 | Complete | row Nghiệm thu → POST `/{id}/complete` | **PASS** (stub) |
| QA-29 | Deep-link | `?form=create` / `form=edit&id=` | Redirect form page | **PASS** |
| QA-30 | Lookup | Filter status/workType SearchInput | **PASS** |
| QA-31 | Prod | Không Slideout / Kind D / Resource | **PASS** |

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
| generatedAt | 2026-08-14T20:20:00.000Z |
| versionGate | rechecked |
