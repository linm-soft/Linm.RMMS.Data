# Implement — so-ts-noise-barrier (Dev)

| Field | Value |
|-------|-------|
| feature | `so-ts-noise-barrier` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `NOISE_BARRIER` |
| prefix | `TC-` (GIS short `TC`) |
| mfeStdRoute | `/so-ts?type=NOISE_BARRIER` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| alias | `/so-ts-noise-barrier` → Navigate |
| API | `api/v1/asset/road-assets` · BFF proxy |
| domain | Asset · **cấm ERP.*** |
| migration | **none** (dumpSpecs P1 · flatten DEFER) |
| taskId | `task_b276d797` |
| writtenAt | `2026-09-01T10:30:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |

## new_page.ssot_rereview

**pass** — checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · S-LOC-RANGE · LAYOUT-06 · leave Modal  
gaps closed: GAP-SOTS-COL/FORM/REUSE · GAP-NB-NAME/LOOKUP/PREFIX/RANGE/ROUTE

## Delta shipped

| Area | Change |
|------|--------|
| BE prefix | `DefaultCodePrefix(NOISE_BARRIER)=TC-` |
| BE validate | name optional · kmFrom required · `type_noise_barrier_id` required |
| BE init | `noiseBarrierTypes[]` · `noiseBarrierVitriOptions[]` |
| BE import | `ResolveNoiseBarrierName` · cấm IsWeak→đoạn |
| FE list | NOISE_BARRIER profile · ENSURE loại tường/cao/dài/tỉnh · show kmTo · hide-empty vitri/xã |
| FE form | S-ATTR editable · S-LOC-RANGE km* + 4 XY · name optional · LeaveConfirmModal reuse |
| FE route | alias `/so-ts-noise-barrier` |
| labels | dumpSpecLabels `type_noise_barrier_id` · `average_height` · `actual_length` «thực tế» |
| filter-bar | `docs/context/features/so-ts-noise-barrier-filter-bar.md` |
| DOMAIN-MAP | row `so-ts-noise-barrier` → Asset |

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
- `docs/context/features/so-ts-noise-barrier-filter-bar.md`

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| BE `dotnet build` | **PASS** 0 errors |

## Debt / defer

- Auth permission align DEFER
- Schema_* flatten DEFER P2 (GAP-NB-FLAT-01)
- E2E QA queued `/agent-qa*` only
- Step 4b / migration **none** (SA)

## Next

role: qa · `/agent-qa`
