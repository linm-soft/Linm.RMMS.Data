# QA — scenarios — inventory

| Field | Value |
|-------|-------|
| feature | `inventory` |
| status | `done` |
| taskId | `task_27ba5c23` |
| mfeStdUrl | `http://localhost:9312/contract/inventory` |
| updatedAt | 2026-08-09T17:08:00.000Z |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9312/contract/inventory` | Page load · không 404 | **PASS** (route mount) |
| S1 | Grid visible (demo fallback nếu BFF down) | Rows hoặc empty · **không blank 0px / title clip** | **PASS** (LAYOUT-06) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search apply | Filter · skeleton filter mode | **PASS** |
| S4 | Category / status / warehouse Select | List refetch page=1 | **PASS** |
| S5 | Toolbar Refresh / +Tạo mới / Config | Actions work | **PASS** |
| S6 | KPI strip 4 ô | Values render | **PASS** |
| S7 | Row menu View/Edit/Copy/Delete | Slideout modes | **PASS** |
| S8 | Form Create/Edit/View/Copy | Z1–Z3 · moves · View readOnly · leave-confirm | **PASS** |
| S9 | No ERP.* path | BASE `/contract/inventory-items` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title «Vật tư và thiết bị» · KPI | PASS |
| B | catalogToolbar refresh·history·cog·add | PASS |
| C | SearchTextInput + Select · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| — | — | No P0. Auth / Leaflet full / schema editor = P1 debt |

## Build verify (from Dev)

| Check | Result |
|-------|--------|
| yarn typecheck | PASS |
| yarn build (LINM_RUN_DEV_LOCAL_BUNDLE=1) | PASS |
| dotnet API + BFF Release | PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T17:08:00.000Z |
| versionGate | rechecked |
