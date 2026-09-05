# Implement — so-ts-land-row (Dev)

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `LAND_ROW` |
| prefix | `DT-` (GIS short `HT` giữ) |
| mfeStdRoute | `/so-ts?type=LAND_ROW` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=LAND_ROW` |
| alias | `/so-ts-land-row` → Navigate |
| API | `api/v1/asset/road-assets` · BFF proxy |
| domain | Asset · **cấm ERP.*** |
| migration | **none** (dumpSpecs P1 · flatten DEFER) |
| taskId | `task_b507cea8` |
| writtenAt | `2026-09-01T09:30:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |

## new_page.ssot_rereview

**pass** — checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-RANGE · LAYOUT-06 · leave Modal  
gaps closed: GAP-SOTS-COL/FORM/REUSE · GAP-LAND-NAME/LOOKUP/PREFIX/RANGE/ROUTE

## Delta shipped

| Area | Change |
|------|--------|
| BE prefix | `DefaultCodePrefix(LAND_ROW)=DT-` |
| BE validate | name/kmFrom optional · `status_land_lot_id` required · kmTo fill `0` |
| BE init | `landLotStatuses` · `landExploitTypes` · `landAccessPavementTypes` · `landCrossSections` · `landBoolOptions` |
| BE import | `ResolveLandRowName` ← `construction` · cấm IsWeak→đoạn |
| FE list | LAND_ROW profile · ENSURE TT thửa/CQ/L/W/DT/xã/tỉnh · hide type/kmTo/qty |
| FE form | S-ATTR editable dump §4 · ẩn kmTo fill 0 · name←construction · LeaveConfirmModal reuse |
| FE route | alias `/so-ts-land-row` |
| labels | dumpSpecLabels land §4 · `under_managemen` typo giữ |
| filter-bar | `docs/context/features/so-ts-land-row-filter-bar.md` |
| DOMAIN-MAP | row `so-ts-land-row` → Asset |

## Files

### BE (`D:/AI-QLBD/Linm.RMMS.WebService`)
- `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs`
- `api/src/RMMS.Service.Api/Domains/Asset/Services/RoadAssetService.cs`
- `api/src/RMMS.Service.Api/Domains/Asset/Import/RoadAssetCatalogHandler.cs`
- `docs/DOMAIN-MAP.md`

### FE (`D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`)
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/services/asset/dumpSpecLabels.ts`
- `src/services/asset/lookups.ts`
- `src/services/asset/endpoint.ts`
- `src/index.tsx`

### Product
- `docs/context/features/so-ts-land-row-filter-bar.md`

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| BE `dotnet build` | **PASS** 0 errors |

## Debt / defer

- Auth permission align DEFER
- Schema_* flatten DEFER P2 (GAP-LAND-FLAT-01)
- E2E QA queued `/agent-qa*` only
- Step 4b / migration **none** (SA)

## Next

role: qa · `/agent-qa`
