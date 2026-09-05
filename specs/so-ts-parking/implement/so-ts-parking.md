# Implement — so-ts-parking (Dev)

| Field | Value |
|-------|-------|
| feature | `so-ts-parking` |
| role | `dev` · `/agent-dev` |
| taskId | `task_422a6c9f` |
| changeScope | `new_page` |
| packKind | `list` |
| status | **done** |
| mfeStdRoute | `/so-ts?type=PARKING` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=PARKING` |
| aliasRoute | `/so-ts-parking` → redirect |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-09-01T05:00:00.000Z` |

## T-UI-LIST-01 · Grid profile PARKING

- `AssetListPage`: `PARKING_HIDE_COLS` / `PARKING_ENSURE_COLS` · hide type/kmTo/SL/ĐVT · ON+hide-empty chiều dài/DT/bãi đỗ/cứu hộ/cấp cứu
- Grid cols `parking_lot` · `total_parking_lot` · `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal`
- Title «Sổ TS — Bãi đỗ xe» · listTitle «Danh sách bãi đỗ xe» · testId `rmms-so-ts-parking-list`

## T-UI-FILTER-01

- Filter bar parity REST_AREA · context `docs/context/features/so-ts-parking-filter-bar.md`
- `LinErpListFilterBar` · type lock PARKING · V1–V5

## T-UI-FORM-01 · S-ATTR editable

- `AssetFormPage`: section «Thông số bãi đỗ xe» · `PARKING_ATTR_KEYS` · name←`name_work` · kmTo ẩn · parking_lot/total_parking_lot ON
- LOOKUP: `parkingWorkTypes` · `parkingCategories` · `parkingOwners` · reuse office/auxiliary/buildLocations

## T-BE-INIT-01 · GAP-PK-LOOKUP-01

- `RoadAssetInitDataDto`: `ParkingWorkTypes` · `ParkingCategories` · `ParkingOwners`
- `RoadAssetService`: seed + dump distinct · GetInitDataAsync delta

## T-BE-CRUD-01 · GAP-PK-NAME/POINT

- Validate PARKING: type/route/status + `type_work_id` required · name/kmFrom optional · **cấm** ép kmTo

## T-UI-LEAVE-01 / T-UI-HIST-01

- Reuse `LeaveConfirmModal` + `useAlert` (existing)

## Route alias

- `index.tsx`: `/so-ts-parking` → `/so-ts?type=PARKING`

## Debt / defer

- GAP-PK-FLAT-01: dumpSpecs P1 · no Schema_* flatten
- GAP-PK-SPLIT-01 import filter: existing `RefineImportedType` in handler (no change this turn)
- UI schema hide-empty per-column: SchemaConfig user-tunable via F modal

## Files touched

| Repo | Path |
|------|------|
| MFE | `src/index.tsx` · `AssetListPage.tsx` · `AssetFormPage.tsx` · `lookups.ts` · `endpoint.ts` · `dumpSpecLabels.ts` |
| BE | `RoadAssetDtos.cs` · `RoadAssetService.cs` |
| Data | `docs/context/features/so-ts-parking-filter-bar.md` |
