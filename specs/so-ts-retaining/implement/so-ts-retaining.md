# Implement — so-ts-retaining (Dev)

| Field | Value |
|-------|-------|
| feature | `so-ts-retaining` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RETAINING` |
| prefix | `KE-` (GIS short `KE`) |
| mfeStdRoute | `/so-ts?type=RETAINING` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RETAINING` |
| alias | `/so-ts-retaining` → Navigate |
| API | `api/v1/asset/road-assets` · BFF proxy |
| domain | Asset · **cấm ERP.*** |
| migration | **none** (dumpSpecs P1 · flatten DEFER · SA) |
| taskId | `task_16d90833` |
| writtenAt | `2026-09-02T01:20:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |

## new_page.ssot_rereview

**pass** — checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-RANGE · LAYOUT-06 · leave Modal  
gaps closed: GAP-SOTS-COL/FORM/REUSE · GAP-RETAINING-NAME/LOOKUP/PREFIX/RANGE/ROUTE/SPEC/ASSETTYPE/PEER

## Delta shipped

| Area | Change |
|------|--------|
| BE prefix | `DefaultCodePrefix(RETAINING)=KE-` |
| BE validate | name optional · kmFrom required · `retaining_wall_type_id` required |
| BE init | `retainingWallTypes[]` · `materialTypes[]` · `foundationTypes[]` · `locationOptions[]` · `dumpAssetTypes[]` |
| BE import | `ResolveRetainingName` · fallback loại tường+km · cấm IsWeak→đoạn |
| FE list | RETAINING profile · ENSURE loại tường/VL/dài/cao/số đoạn/móng · show kmTo · hide-empty vị trí/asset_type/địa danh |
| FE form | S-ATTR editable · S-LOC-RANGE km* + 4 XY · name optional · LeaveConfirmModal reuse |
| FE route | alias `/so-ts-retaining` |
| labels | dumpSpecLabels 8 key RETAINING (+ shared `number`/`location_id`/`average_height`) |
| filter-bar | `docs/context/features/so-ts-retaining-filter-bar.md` |
| DOMAIN-MAP | row `so-ts-retaining` → Asset |

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
- `docs/context/features/so-ts-retaining-filter-bar.md`
- `docs/context/features/so-ts-retaining.md` (tracking)

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build` | **PASS** 0 errors |

## Debt / defer

- Auth permission align DEFER
- Schema_* flatten DEFER P2 (GAP-RETAINING-FLAT-01)
- E2E QA queued `/agent-qa*` only
- Step 4b / migration **none** (SA chốt dumpSpecs P1)

## Next

role: qa · `/agent-qa*`
