# Review findings — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| this role | `review` · `/agent-review` |
| status | `approve` |
| taskId | `task_1d66d0dc` |
| autoApprove | ON → **confirm** (không chờ board) |
| packKind | `list` Kind B A–D + Zone F schema · form full-page C/E/V/Copy |
| prior · qa | `confirmed` · `qa/scenarios.md` · P0 none |
| mfeStdUrl | `http://localhost:9304/maintenance` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| reviewedAt | `2026-08-16T01:10:00.000Z` |
| method | static live MFE + BE contract · QA scenarios · SSOT list/form gates |

## Verdict

**Approve** (autopilot). List Kind B + full-page form khớp Design/TL/Dev/QA. Config FULL (Zone F schema) PASS. Lookup init-data PASS. Không P0. Build MFE PASS this role.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog · cấm nested `CatalogListShell` | `MaintenanceListPage` 1× layout | **PASS** |
| 2 | `LinCatalogDataGrid` + `buildDynamicGridColumns` | list columns từ schema | **PASS** |
| 3 | Footer `LinCatalogListPagination` only | cấm footerPagination / pageSizeBar | **PASS** |
| 4 | Flex root + skeleton | `.page` + `skeletonRows={8}` | **PASS** |
| 5 | Zone F `LinCatalogUiSchemaEditorModal` · cấm `LinListTableConfigModal` / `configHint` | catalogKind=`work-orders` | **PASS** |
| 6 | Routes `/maintenance` `/new` `/:id/edit` `/:id/copy` `/:id` | `index.tsx` | **PASS** |
| 7 | Form View `<dl>` · cấm Input readOnly / Slideout / Resource | `data-testid=rmms-maintenance-form-view` | **PASS** |
| 8 | T-UI-LKP `lookups.ts` init-data · cấm `maintenanceStore` SSOT | Design §3.3 fallback only | **PASS** |
| 9 | FE BASE `/maintenance/work-orders` · BE `api/v1/maintenance/work-orders` + BFF init-data | endpoint + WorkOrdersController + Bff | **PASS** |
| 10 | Seed list keys Mã·Tuyến·Loại·Đội·Cán bộ·Hạn·Trạng thái·Tiến độ + field `description` | `CatalogUiSchemaSeed.WorkOrders` | **PASS** |
| 11 | Cấm ERP.* / `api/v1/rmms/*` | void | **PASS** |

## Findings

| ID | Sev | Status | Note |
|----|-----|--------|------|
| F-01 | — | closed | Zone F schema editor thay `configHint` |
| F-02 | — | closed | BE seed `work-orders` Integration registry |
| F-03 | info | open | GAP-RPT-SRC-WO-01 Quantity/UnitCode — **out of this list pack** |
| F-04 | P2 | open | SD-AUTH `[RequirePermission]` stub CommonLib ≥1.4.0 |
| F-05 | P1 | open | History API stub `/document-history` |
| F-06 | P2 | open | Form leave-confirm vẫn `window.confirm` (list delete overlay+toast) |
| F-07 | — | closed | QA `task_707b2054` T-QA-CRUD-01 · P0 none |

**P0:** none — **cấm** reopen Dev/QA.

## Build gate (`task_1d66d0dc`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Field) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings · 0 errors) |
| BE write this role | **n/a** — Review không đụng API |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · chain close pipeline (no next role) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T01:10:00.000Z |
| versionGate | rechecked |
