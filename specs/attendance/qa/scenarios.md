# QA — scenarios — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| status | `done` |
| taskId | `task_13e76e73` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |
| updatedAt | 2026-08-10T16:22:00.000Z |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9304/patrol/attendance` | Page load · không 404 | **PASS** (route mount) |
| S1 | Grid visible (demo fallback nếu BFF down) | Rows hoặc empty · **không blank 0px / title clip** | **PASS** (LAYOUT-06) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search Enter (không nút Tìm) | Filter apply · skeleton filter mode | **PASS** |
| S4 | Status Select change | List refetch page=1 | **PASS** |
| S5 | Toolbar Refresh / +Tạo mới / Config | Actions work · Config hint dialog | **PASS** |
| S6 | History toolbar/menu | alert stub OK | **PASS** |
| S7 | Row menu View/Edit/Copy/**Delete** | Slideout modes · Delete confirm → soft delete | **PASS** |
| S8 | Form Create/Edit/View/Copy | Footer-only Hủy/Lưu · View Đóng/Sửa/Sao chép · no Z1 top actions | **PASS** |
| S9 | No ERP.* path | BASE `/patrol/attendance-logs` · BE `Linm.RMMS.WebService` | **PASS** |

## QA-CRUD-01 (task_13e76e73)

| # | Step | Expect | Result |
|---|------|--------|--------|
| C1 | Toolbar +Thêm → Create → Lưu (footer) | Row mới trên grid | **PASS** (code path + demo fallback) |
| C2 | Row menu Edit → sửa field → Lưu | Update reflected | **PASS** |
| C3 | Code link / dblclick → View readOnly | Footer Đóng · Sửa · Sao chép | **PASS** |
| C4 | Row menu Copy → Lưu | New code created | **PASS** |
| C5 | Toolbar/row Delete → confirm | Soft delete · toast · list refresh | **PASS** |
| C6 | No duplicate Save on form top | `attendance-btn-save-top` absent | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + icon map-marker | PASS |
| B | catalogToolbar refresh·history·cog·add·**delete** | PASS |
| C | SearchTextInput + Select · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| — | — | GAP-P2-ACT-DELETE · GAP-P2-SLIDE-* **CLOSED** this turn |

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
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.2 |
| rulesVersion | 2026.08.10.3 |
| generatedAt | 2026-08-10T16:22:00.000Z |
| versionGate | rechecked |
| taskId | `task_13e76e73` |
