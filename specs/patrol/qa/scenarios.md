# QA — scenarios — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9304/patrol` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |
| taskId | `task_e0173ab6` |
| updatedAt | 2026-08-10T17:12:00.000Z |

## Smoke — Final MFE (REQUIRED) — prior giữ

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9304/patrol` | Page load · không 404 | **PASS** (route mount) |
| S1 | Grid visible (demo fallback nếu BFF down) | Rows hoặc empty · **không blank 0px / title clip** | **PASS** (LAYOUT-06) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search Enter (không nút Tìm) | Filter apply · skeleton filter mode | **PASS** |
| S4 | Status Select change | List refetch page=1 | **PASS** |
| S5 | Toolbar Refresh / +Tạo mới / Config | Actions work · Config hint dialog | **PASS** |
| S6 | History toolbar/menu | alert stub OK | **PASS** |
| S7 | Row menu View/Edit/Copy | Slideout modes | **PASS** |
| S8 | Form Create/Edit/View/Copy | Z1–Z3 · View readOnly | **PASS** |
| S9 | No ERP.* path | BASE `/patrol/sessions` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + icon route | PASS |
| B | catalogToolbar refresh·history·cog·add·**delete** | PASS |
| C | SearchTextInput + Select · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar +Tạo → Slideout → Lưu | POST `/sessions` | **PASS** |
| QA-22 | Edit | Toolbar/row Edit → Lưu | GET + PUT | **PASS** |
| QA-23 | View | Toolbar/row View · readOnly | GET | **PASS** |
| QA-24 | Delete row menu | Row Delete confirm → soft DELETE | `showDelete` · `deleteRow` | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-P2-ACT-DELETE | — | **CLOSED** |
| GAP-TL-FORMTYPE-01 | — | **CLOSED** |

## Build verify (from Dev)

| Check | Result |
|-------|--------|
| yarn typecheck | PASS |
| yarn build (LINM_RUN_DEV_LOCAL_BUNDLE=1) | PASS |
| dotnet sln Release | PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:12:00.000Z |
| versionGate | rechecked |
