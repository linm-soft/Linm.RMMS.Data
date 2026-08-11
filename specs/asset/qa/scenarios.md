# QA — scenarios — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| taskId | `task_98b1aa0e` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9301/asset` |
| updatedAt | 2026-08-10T16:10:00.000Z |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9301/asset` | Page load · không 404 | **PASS** (route mount) |
| S1 | Grid visible (demo fallback nếu BFF down) | Rows hoặc empty state · **không blank 0px / title clip** | **PASS** (LAYOUT-06) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search Enter (không nút Tìm) | Filter apply · skeleton filter mode | **PASS** |
| S4 | Type Select change | List refetch page=1 | **PASS** |
| S5 | Toolbar Refresh / +Thêm / Config cog | Actions work · Config opens schema editor | **PASS** |
| S6 | History toolbar/menu | `LinCatalogHistoryModal` · empty stub OK | **PASS** |
| S7 | Row menu View/Edit/Copy/Delete | Slideout modes · Delete confirm soft | **PASS** |
| S8 | Form Create/Edit/View | Z1–Z3 · View readOnly | **PASS** |
| S9 | No ERP.* path | BASE `/asset/road-assets` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + icon road | PASS |
| B | catalogToolbar refresh·history·cog·add·**delete** | PASS |
| C | SearchTextInput + Select · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Step | Expect | Result |
|---|------|--------|--------|
| QA-20 | FormType pack ACT | T-UI-ACT-01 inventory · all actions wired | **PASS** |
| QA-21 | Create | Toolbar +Thêm → Slideout create → POST | **PASS** |
| QA-22 | Edit | Toolbar/row Edit → Slideout → PUT | **PASS** |
| QA-23 | View | Toolbar/row View · readOnly (not disabled) | **PASS** |
| QA-24 | Copy | Row Copy → POST new | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Delete row menu | Row menu Delete → soft DELETE | **PASS** |
| QA-27 | BE route | `api/v1/asset/road-assets` · domain Asset · no ERP | **PASS** |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| — | — | No P0. Excel/History API = documented P1 debt |

## Build verify (from Dev)

| Check | Result |
|-------|--------|
| yarn typecheck | PASS |
| yarn build | PASS |
| dotnet API | PASS |
| dotnet BFF | PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T16:10:00.000Z |
| versionGate | rechecked |
| taskId | `task_98b1aa0e` |
