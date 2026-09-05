# Implement — so-ts-median

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| taskId | `task_8711a649` |
| packKind | `list` · Kind B |
| typeCode | `MEDIAN` |
| changeScope | `new_page` |
| mfeStdRoute | `/so-ts?type=MEDIAN` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=MEDIAN` |
| alias | `/so-ts-median` → Navigate |
| API | `api/v1/asset/road-assets` · BFF proxy |
| prefix | `PC-` · GIS `GPC` |
| migration | **none** (dumpSpecs P1 · flatten DEFER) |
| writtenAt | `2026-09-01T17:45:00.000Z` |
| contentHashPrior | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |

## Done (T-*)

| Task | Result |
|------|--------|
| T-CTX-01 | `docs/context/features/so-ts-median-filter-bar.md` |
| T-BE-CRUD-01 | `DefaultCodePrefix` **PC-** · ValidateRequired MEDIAN · import `ResolveMedianName` · cấm IsWeak→đoạn |
| T-BE-INIT-01 | init-data `medianStripTypes[]` · `fenceMaterials[]` · `medianLocations[]` |
| T-BFF-01 | verify proxy only · no BFF logic |
| T-UI-LIST-01 | MEDIAN column profile · titles · hide-empty vị trí/địa danh |
| T-UI-FILTER-01 | type lock MEDIAN · LinErpListFilterBar · cấm nút Tìm |
| T-UI-FORM-01 | S-ATTR editable · Select bool · S-LOC-RANGE kmTo + 4 XY · dumpSpecLabels 10 key |
| T-UI-LEAVE-01 / T-UI-HIST-01 | reuse LeaveConfirmModal · History Modal |
| T-UI-CFG-01 | catalogKind `road-assets` · full editor |

## Verify

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build` | **PASS** |
| Step 4b / migration | **n/a** (SA/TL: none) |
| E2E | queued `/agent-qa*` only |

## Files

### FE (`Linm.Web.RMMS.Asset`)
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/services/asset/dumpSpecLabels.ts`
- `src/services/asset/endpoint.ts` · `lookups.ts`
- `src/index.tsx` (alias)

### BE (`Linm.RMMS.WebService`)
- `RoadAssetDtos.cs` · `RoadAssetService.cs` · `RoadAssetCatalogHandler.cs`

## Debt
- Auth permission align DEFER
- Flatten Schema_* DEFER P2
- E2E QA queued
