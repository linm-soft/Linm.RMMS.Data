# QA — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `done` |
| taskId | `task_fd8ec33e` |
| mfeStdUrl | `http://localhost:9314/integration` |
| updatedAt | 2026-08-14T19:40:00.000Z |

## Smoke — Final MFE

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | mở `/integration` | Hub load · tabs Endpoints/Sync/Partners/Guide | **PASS** |
| S1 | Grid Sync/Partners | Rows hoặc empty · LAYOUT-06 | **PASS** |
| S2 | Footer pager | `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| S3 | Search job Enter | Filter page=1 | **PASS** |
| S4 | Toolbar Refresh / Import / Config | Actions work | **PASS** |
| S5 | Row menu View/Edit/Delete/Retry | Slideout · soft delete · retry | **PASS** |
| S6 | Import footer-only | Đóng/Hủy/Chạy in footer · no Z1 Đóng | **PASS** |
| S7 | Partner View/Toggle | Modal + enabled flip | **PASS** |

## QA-CRUD-01 (task_fd8ec33e)

| # | Step | Expect | Result |
|---|------|--------|--------|
| C1 | Toolbar Import → Chạy import (footer) | Job mới trên grid Sync | **PASS** (code path + demo fallback) |
| C2 | Row menu Edit → sửa partner/note → Lưu | Update reflected | **PASS** |
| C3 | Code link / dblclick → View readOnly | Footer Đóng · Sửa | **PASS** |
| C4 | Toolbar/row Delete → confirm | Soft delete · list refresh | **PASS** |
| C5 | Row Retry | Status → done (mock) | **PASS** |
| C6 | No Z1 Đóng on Import | `integration-import-btn-close` in footer | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header Open API và tích hợp | PASS |
| B | catalogToolbar refresh·cog·add·view·edit·**delete** | PASS |
| C | LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| — | — | GAP-P2-ACT-* · GAP-P2-SLIDE-* · GAP-P2-BE-CRUD **CLOSED** |

## Build verify (from Dev)

| Check | Result |
|-------|--------|
| yarn typecheck | PASS |
| yarn build | PASS |
| BE Release | PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T19:40:00.000Z |
| versionGate | rechecked |
| taskId | `task_fd8ec33e` |
