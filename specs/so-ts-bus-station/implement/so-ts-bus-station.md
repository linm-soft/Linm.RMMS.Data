# Implement — so-ts-bus-station

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `BUS_STATION` |
| taskId | `task_adc64d49` |
| mfeStdRoute | `/so-ts?type=BUS_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| alias | `/so-ts-bus-station` → `/so-ts?type=BUS_STATION` |
| API | `api/v1/asset/road-assets` |
| migration | **none** |
| writtenAt | `2026-09-01T04:00:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** (`Linm.RMMS.WebService.sln`) |
| e2eQa | queued `/agent-qa*` only — **not run** |

## Delta shipped

| Area | Change |
|------|--------|
| BE init | `busStationWorkTypes[]` · `busStationOwners[]` · `busStationBuildingGrades[]` · `busStationBuildLocations[]` · `busStationClassifications[]` (seed ∪ dump) |
| BE CRUD | BUS_STATION validate: name/kmFrom optional · `type_work_id` required · prefix `BX-` · **no** IsWeak→đoạn |
| FE list | Profile hide type/kmTo/qty/unit + peer cols · **ON+hide-empty** type_work/owner/site_area/main_route/total_floors/building_grade · titles Bến xe |
| FE form | S-ATTR editable dump §4 · Dropdown LOOKUP · name←`name_terminal` «Tên bến» · ẩn kmTo/SL/ĐVT · LeaveConfirmModal reuse |
| Route | alias Navigate `/so-ts-bus-station` |
| CTX | `so-ts-bus-station-filter-bar.md` |
| Labels | dumpSpecLabels owner_id · main_transportation_route · total_area_floors · building_grade_id · classification |

## Files (key)

**MFE** `Linm.Web.RMMS.Asset`
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/services/asset/dumpSpecLabels.ts` · `lookups.ts` · `endpoint.ts`
- `src/index.tsx` · `mfe.routes.json`

**BE** `Linm.RMMS.WebService`
- `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs`
- `api/src/RMMS.Service.Api/Domains/Asset/Services/RoadAssetService.cs`

**Data**
- `docs/context/features/so-ts-bus-station-filter-bar.md`

## GAP close

GAP-SOTS-COL/FORM/REUSE · GAP-BX-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE · T-UI-* pack — **closed** P1 · flatten DEFER P2

## new_page.ssot_rereview

**pass** · grid profile · filter-bar V1–V5 context · form 5col · leave Modal · dumpSpecLabels · init LOOKUP · LinCatalogUiSchemaEditorModal + buildDynamicGridColumns

## Debt / QA

- E2E T-QA-* queued QA only
- Auth perm align DEFER
- Grid classification OFF default (form ON)

## Next

role: `qa` · `/agent-qa*` · scenarios + e2e on mfeStdUrl
