# Implement — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_98b1aa0e` |
| gap | `crud_formtype` |
| updatedAt | 2026-08-10T16:10:00.000Z |
| versionGate | rechecked |

## retry.ssot_rereview: **pass** (task_98b1aa0e)

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · tree_master? n/a · form  
gaps closed this turn:
- GAP-TL-FORMTYPE-01 — stamped T-UI-ACT-01 · T-BE-CRUD-01 · T-QA-CRUD-01
- GAP-P2-ACT-DELETE — toolbar + row menu Delete → `assetService.delete` (API-05)
then: **fix_all** after Delete wire

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · cog · add · **delete** |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist Z1–Z3 | **PASS** `AssetFormSlideout` |
| FormType pack ACT/CRUD/QA | **PASS** |
| GAP-P2-ACT-\* | **none** remaining |

## Done this turn (task_98b1aa0e · CRUD gap)

| Task | Result |
|------|--------|
| T-UI-ACT-01 | Wired Delete toolbar + row menu · inventory stamped |
| T-BE-CRUD-01 | Verified API-01…05 · domain Asset · no Write delta BE |
| T-QA-CRUD-01 | scenarios.md Create→Edit→View→Delete + row Delete |
| T-UI-LIST-01 | **không** rewrite |
| T-UI-MAP-FORM | n/a (list) |
| Verify | typecheck + webpack + API + BFF **PASS** |

## Paths (confirmed)

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` |
| MFE list | `pages/AssetListPage/AssetListPage.tsx` |
| MFE form | `pages/AssetListPage/AssetFormSlideout.tsx` |
| Perm | `services/asset/permissions.ts` |
| mfeStdRoute | `/asset` |
| mfeStdUrl | `http://localhost:9301/asset` |

**Cấm** ERP.* — void.

## Verify (task_98b1aa0e · 2026-08-10)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 0 errors · size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
dotnet build RMMS.Service.Bff -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE (CommonLib NuGet) |
| SD-LIB-BE | Local ApiResponse stub → CommonLib |
| Excel | Catalog toolbar preset chưa có excel action — P1 out of pack |
| History API | Stub client empty — wire real `/document-history` khi Auth/event sẵn |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T16:10:00.000Z |
| versionGate | rechecked |
| taskId | `task_98b1aa0e` |
