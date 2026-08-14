# Implement — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `done` |
| taskId | `task_df075284` |
| mfeStdRoute | `/drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| updatedAt | 2026-08-14T19:20:00.000Z |
| changeScope | `edit_page` · FormType ACT+CRUD |

## retry.ssot_rereview

| Check | Result |
|-------|--------|
| 1× LinPageLayout | **pass** — list only, no nested CatalogListShell |
| LinCatalogDataGrid + column drag default | **pass** |
| Footer LinCatalogListPagination | **pass** — no footerPagination / pageSizeBar / raw table |
| flex + skeleton | **pass** — `useServerPagedListLoading` |
| toolbar config / search work / row menu | **pass** |
| form C/E/V/Copy + artifacts | **pass** |
| GAP-P2-LAYOUT-06 | **pass** — catalog shell |
| T-UI-ACT-01 inventory wired | **pass** — Delete toolbar+row · Hủy job · row pair stubs |
| T-BE-CRUD-01 list/get/create/update/soft-delete | **pass** (verify — no extra BE Write) |

Live re-audit before Write: Delete was the remaining surface gap (service+API already existed). Wired same surface extras (artifacts/incident/GIS/Excel/AiVision stubs) instead of patching only Delete.

## FormType delta (task_df075284)

| Task | Notes |
|------|-------|
| T-UI-ACT-01 | `canDelete`/`onDelete` toolbar · `showDelete` row menu · `deleteRow` · form Hủy job · Sửa in footer (view) |
| T-BE-CRUD-01 | Verified `DroneScansController` GET list/id · POST · PUT · DELETE soft · process · artifacts · BFF proxy · domain Drone |
| T-UI-MAP-FORM | n/a (packKind=list) |
| T-QA-CRUD-01 | Smoke Create/Edit/View/Delete + row actions |

## FE changes

| Path | Notes |
|------|-------|
| `src/pages/DroneListPage/DroneListPage.tsx` | Delete + row action inventory pair |
| `src/pages/DroneFormPage/DroneFormPage.tsx` | Hủy job · view Sửa footer-only |

## BE changes (Step 4b)

No Write delta — CRUD already in `Linm.RMMS.WebService` domain Drone (`api/v1/drone/scans`). Verify-only this turn.

## Verify

| Gate | Result |
|------|--------|
| FE typecheck | **PASS** |
| FE build (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** (size warnings only) |
| BE API Release | **PASS** |
| BE BFF Release | **PASS** |

## Debt

- Cesium live viewer P3 · real upload/worker PDAL · IAM permissions · event bus DEFER

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| workflowVersion | 2026.08.09.02 |
| versionGate | ok |
