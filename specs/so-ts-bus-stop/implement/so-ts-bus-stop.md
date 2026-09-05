# Implement — so-ts-bus-stop (Dev)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `BUS_STOP` |
| prefix | `DX-` |
| mfeStdRoute | `/so-ts?type=BUS_STOP` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STOP` |
| alias | `/so-ts-bus-stop` → Navigate |
| API | `api/v1/asset/road-assets` · BFF proxy |
| domain | Asset · **cấm ERP.*** |
| migration | **none** (dumpSpecs P1) |
| taskId | `task_4efb408d` |
| writtenAt | `2026-09-01T08:30:00.000Z` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |

## new_page.ssot_rereview

**pass** — checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · LAYOUT-06 · leave Modal  
gaps closed: GAP-SOTS-COL/FORM/REUSE · GAP-DD-NAME/SPEC/POINT/LOOKUP/PREFIX/LEAVE/ROUTE

## Delta shipped

| Area | Change |
|------|--------|
| BE prefix | `DefaultCodePrefix(BUS_STOP)=DX-` |
| BE validate | name/kmFrom optional · `type_work_id` required |
| BE init | `busStopWorkTypes` · `busStopManagementUnits` · `busStopPavementTypes` · `busStopShelterStructures` · `busStopCrossSections` · `busStopBoolOptions` |
| BE import | `ResolveBusStopName` ← `station_name` |
| FE list | BUS_STOP profile · ENSURE type_work/management/bay/ghế/nhà chờ · hide type/kmTo/qty |
| FE form | S-ATTR editable dump §4 · ẩn kmTo · name←station_name · LeaveConfirmModal reuse |
| FE route | alias `/so-ts-bus-stop` |
| labels | dumpSpecLabels bay/shelter/escape · station_name «Tên điểm» |
| filter-bar | `docs/context/features/so-ts-bus-stop-filter-bar.md` |
| DOMAIN-MAP | row `so-ts-bus-stop` → Asset |

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
- `docs/context/features/so-ts-bus-stop-filter-bar.md`
- `docs/context/features/so-ts-bus-stop.md` (lane web → done)

## Build

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| BE `dotnet build` | **PASS** 0 errors |

## Debt / defer

- Auth permission align DEFER
- Schema_* flatten DEFER P2
- E2E QA queued `/agent-qa*` only

## Next

role: qa · `/agent-qa`
