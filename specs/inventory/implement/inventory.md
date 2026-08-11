# Implement — inventory

| Field | Value |
|-------|-------|
| feature | `inventory` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| taskId | `task_27ba5c23` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/inventory-items` |
| mfeStdRoute | `/contract/inventory` |
| mfeStdUrl | `http://localhost:9312/contract/inventory` |
| updatedAt | 2026-08-09T17:05:00.000Z |

## retry.ssot_rereview (HARD)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — no nested CatalogListShell | **PASS** (`InventoryListPage.tsx`) |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| 3 | Flex + `useServerPagedListLoading` + LAYOUT-06 shells | **PASS** |
| 4 | Toolbar catalog refresh · history · config · add | **PASS** |
| 5 | Filter SearchTextInput + category/status/warehouse Select | **PASS** |
| 6 | `LinCatalogDataGrid` + column resize | **PASS** |
| 7 | Zone F schema editor | stub hint (Feedback-style) · debt P1 |
| 8 | History modal stub | **PASS** |
| 9 | tree_master | n/a |
| 10 | Form Create/Edit/View/Copy + move lines | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke`

## Tasks

| id | status | Notes |
|----|--------|-------|
| T-CTX-01 | **done** | context API table → DOMAIN-MAP contract routes |
| T-BE-01 | **done** | InventoryItemsController + InventoryItemsService · XCO · KPI |
| T-BE-02 | **done** | `rmms_inventory_items` + `rmms_inventory_moves` · migration `Schema_RmmsInventoryItems` |
| T-BFF-01 | **done** | InventoryItemsBffController proxy |
| T-PERM-01 | **done** | FE permissions + BE TODO RequirePermission stub |
| T-UI-LIST-01 | **done** | Kind B catalog A–D + KPI strip |
| T-UI-FORM-01 | **done** | Slideout Z1–Z3 + move lines |
| T-QA-01 | **done** | see `qa/scenarios.md` |

## Paths confirmed

| Layer | Path |
|-------|------|
| Entity | `Persistence/Entities/InventoryItemEntity.cs` · `InventoryMoveEntity.cs` |
| Migration | `Migrations/20260809165900_Schema_RmmsInventoryItems.cs` |
| API | `Domains/Contract/Controllers/InventoryItemsController.cs` |
| BFF | `Contract.Bff/Controllers/InventoryItemsBffController.cs` |
| MFE list | `pages/InventoryListPage/InventoryListPage.tsx` |
| MFE form | `pages/InventoryListPage/InventoryFormSlideout.tsx` |
| FE service | `services/inventory/*` |

## Verify gate

| Gate | Command | Result |
|------|---------|--------|
| FE typecheck | `yarn typecheck` | **PASS** |
| FE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (size warnings only) |
| API build | `dotnet build RMMS.Service.Api -c Release` | **PASS** 0 err |
| BFF build | `dotnet build RMMS.Service.Bff -c Release` | **PASS** 0 err |

## Gaps / nợ

- `[RequirePermission]` chờ CommonLib NuGet
- Catalog UI schema editor for inventory — stub hint
- Leaflet GPS Kind F full — DEFER (toast/stub)
- Excel / Timescale / Asset sync / platform events — DEFER
- Duyệt phiếu — toast defer

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T17:05:00.000Z |
| versionGate | rechecked |
