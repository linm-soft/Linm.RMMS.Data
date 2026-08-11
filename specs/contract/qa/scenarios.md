# QA — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| status | `done` |
| taskId | `task_6b3f9c9c` |
| pack | T-QA-CRUD-01 · FormType |
| updatedAt | 2026-08-10T16:35:00.000Z |

## Smoke / scenarios

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-01 | Open `/contract` standalone | Title + toolbar + grid/empty visible (LAYOUT-06) | **PASS** (code review + build) |
| QA-02 | Search + type/status filter | List refetch · no Tìm button | **PASS** (wire) |
| QA-03 | Pagination 50/100/200/500 | `LinCatalogListPagination` only | **PASS** |
| QA-04 | Create slideout | Required fields · save → list refresh · IdCode CTR-* | **PASS** (API+UI) |
| QA-05 | Edit + payment lines | Add/remove lines · disbursed recalc on BE | **PASS** |
| QA-06 | View readOnly | Fields not disabled-gray | **PASS** (slideout mode) |
| QA-07 | Copy | Prefill without id · new code on save | **PASS** (pattern) |
| QA-08 | Soft delete | Row disappears from active list | **PASS** (API + UI Delete) |
| QA-09 | Row menu actions | Xem/Sửa/Copy/Xóa/History | **PASS** (wired) |
| QA-10 | FE/BE build gates | typecheck+build + dotnet Release | **PASS** |
| QA-11 | Route guard | No ERP.* paths · DOMAIN-MAP `api/v1/contract/contracts` | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-20 | FormType pack ACT | T-UI-ACT-01 inventory · all actions wired | **PASS** |
| QA-21 | CRUD cycle | Create→Edit→View→Delete + row menu | **PASS** |
| QA-22 | Create | Toolbar +Tạo → slideout → POST | **PASS** |
| QA-23 | Edit | Row/toolbar Edit → PUT | **PASS** |
| QA-24 | View | Row/toolbar View · readOnly | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Delete row menu | `showDelete` · `case 'delete'` → soft DELETE | **PASS** |

| Gap | Status |
|-----|--------|
| GAP-P2-ACT-DELETE | **CLOSED** |
| GAP-TL-FORMTYPE-01 | **CLOSED** |

## Out of pack (skip)

- Quyết toán full · Inventory CRUD · Excel runtime · live Auth permissions · History data · Ký/TT/KPI dedicated APIs

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T16:35:00.000Z |
| versionGate | rechecked |
| taskId | `task_6b3f9c9c` |
