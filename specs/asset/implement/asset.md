# Implement — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| changeScope | `edit_page` |
| taskId | `task_71340357` |
| gap | `formtype_quality` (LKP/FIELD/PROD/UX) |
| updatedAt | `2026-08-14T13:54:00.000Z` |
| versionGate | rechecked |

## retry.ssot_rereview: **pass** (task_71340357 · live re-audit trước Write)

Live `AssetListPage` + `AssetFormPage` — quality gates vs `form-type-task-pack` / pavement-section parity.

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `form-type-task-pack` · tree_master? n/a · form  
gaps closed this turn:
- GAP-TL-QUALITY-01 — stamped T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01
- GAP-P2-PROD-SLIDEOUT — removed `AssetFormSlideout` · full-page `AssetFormPage` · View `<dl>`
- GAP-P2-LKP-SELECT — type/status `SearchInput` master (cấm native Select catalog)
- GAP-P2-UX-FILTER-WIDTH — removed `filterMaxWidthPx`
then: **fix_all** same surface (list filter + form + routes)

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + column resize default ON | **PASS** |
| Footer `LinCatalogListPagination` | **PASS** |
| flex + skeleton + **LAYOUT-06** | **PASS** |
| toolbar `catalogToolbar` | **PASS** · refresh · history · cog · add · delete |
| filter SearchTextInput — no Tìm btn | **PASS** |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form checklist | **PASS** `AssetFormPage` · View `<dl>` |
| FormType pack ACT/CRUD/QA | **PASS** ACT/CRUD · QA pending role |
| GAP-P2-ACT-\* | **none** remaining |
| T-UI-LKP / FIELD / PROD / UX | **PASS** |

## Done this turn (task_71340357 · quality gates)

| Task | Result |
|------|--------|
| T-UI-LKP-01 | `services/asset/lookups.ts` · SearchInput type (list+form) + status (form) |
| T-UI-FIELD-01 | Fields map `AssetDto` / Create·Update · MoneyInput valueVnd · Input numbers lat/lng |
| T-UI-PROD-01 | Removed Slideout · View `<dl>` · routes `/asset/new` · `/asset/:id` |
| T-UI-UX-01 | spacing 4/8/16 · no `filterMaxWidthPx` · Lin* |
| T-UI-FORM-01 | Full page C/E/V/Copy (updated from Slideout) |
| T-UI-ACT-01 | Navigate form page · Delete toolbar/row/form |
| T-BE-CRUD-01 | Verify API-01…05 · no Write delta BE |
| T-UI-LIST-01 | Filter SearchInput · **không** rewrite shell |
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
| MFE form | `pages/AssetFormPage/AssetFormPage.tsx` |
| Lookups | `services/asset/lookups.ts` |
| Perm | `services/asset/permissions.ts` |
| mfeStdRoute | `/asset` |
| mfeStdUrl | `http://localhost:9301/asset` |

**Cấm** ERP.* — void.

## Verify (task_71340357 · 2026-08-14)

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
| form-init-data | master constants TYPE/STATUS (OUT remote init) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T13:54:00.000Z |
| versionGate | rechecked |
| taskId | `task_71340357` |
