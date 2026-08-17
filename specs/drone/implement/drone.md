# Implement — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| status | `done` |
| taskId | `task_12c629c0` |
| mfeStdRoute | `/drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| updatedAt | 2026-08-16T02:40:00.000Z |
| changeScope | `edit_page` · FormType ACT+CRUD + list schema |

## retry.ssot_rereview

| Check | Result |
|-------|--------|
| 1× LinPageLayout | **pass** — list only, no nested CatalogListShell |
| LinCatalogDataGrid + column drag default | **pass** |
| Footer LinCatalogListPagination | **pass** — no footerPagination / pageSizeBar / raw table |
| flex + skeleton | **pass** — `useServerPagedListLoading` + `.gridWrap` |
| toolbar config / search work / row menu | **pass** — `LinCatalogUiSchemaEditorModal` |
| form C/E/V/Copy + artifacts | **pass** — view body · footer Sửa |
| GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01 | **pass** — removed `configHint` |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | **pass** — `useCatalogUiSchema` + `buildDynamicGridColumns` |
| T-UI-LKP / T-UI-FIELD | **pass** — form `SearchInput` · Input date/number |
| T-UI-ACT-01 inventory wired | **pass** |
| T-BE-CRUD-01 list/get/create/update/soft-delete | **pass** (verify) |

Live re-audit before Write: remaining surface was list config placeholder + broken filter identifiers after lookup extract. Closed schema+filter+lookup together.

## FormType delta (task_12c629c0)

| Task | Notes |
|------|-------|
| T-UI-LIST | Kind B + schema editor `drone-scans` |
| T-UI-FORM | C/E/V/Copy · view dedicated + footer Sửa |
| T-UI-LKP | `src/services/drone/lookups.ts` + form SearchInput |
| T-UI-FIELD | date / number / SearchInput |
| T-UI-PROD / T-UI-UX | LinListFilterField · toast · skeleton |
| T-UI-ACT-01 | Delete toolbar+row · Hủy job · row pair stubs |
| T-BE-CRUD-01 | Verified scans CRUD (no extra Write) |
| T-BE-SCHEMA | `CatalogUiSchemaRegistry.DroneScans` + seed |

## FE changes

| Path | Notes |
|------|-------|
| `src/pages/DroneListPage/DroneListPage.tsx` | schema modal · dynamic columns · LinListFilterField/Select |
| `src/pages/DroneFormPage/DroneFormPage.tsx` | SearchInput lookups · view footer Sửa |
| `src/services/drone/lookups.ts` | master lookup configs |
| `src/hooks/useCatalogUiSchema.ts` | GET schema |
| `src/services/catalogUiSchema/` | BFF `/integration/catalogs/{kind}/ui-schema` |
| `src/utils/bootstrapCatalogUiSchema.ts` | `buildDynamicGridColumns` |

## BE changes (Step 4b)

| Path | Notes |
|------|-------|
| `CatalogUiSchemaRegistry.cs` | `drone-scans` |
| `CatalogUiSchemaSeed.cs` | seed list columns |
| BFF | existing Integration catalog ui-schema proxy |

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
