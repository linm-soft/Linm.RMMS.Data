# Implement — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| updatedAt | 2026-08-08T08:30:00.000Z |

## FE (`Linm.Web.RMMS.Asset`)

| Item | Result |
|------|--------|
| List | `AssetListPage` · `LinPageLayout kind=catalog` · search + type · row menu View/Edit/Copy |
| Form | `AssetFormPage` · create/edit/view/copy · View `readOnly` |
| Client | `/rmms/road-assets` + localStorage fallback seed |
| Store | `src/demo/roadAssetStore.ts` |
| typecheck | **PASS** (`yarn typecheck`) |
| build | **PASS** (`LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build`) |

## BE (`Linm.Web.ERP.WebService`)

| Item | Result |
|------|--------|
| Entity | `RoadAssetEntity` · table `rmms_road_assets` |
| API | `RmmsRoadAssetsController` · `api/v1/rmms/road-assets` |
| Service | `IRoadAssetService` / `RoadAssetService` |
| BFF | `RmmsBffController` · `web-bff/api/v1/rmms` |
| Migration | `20260808082842_Schema_RmmsRoadAssets` |
| API build | **PASS** (0 errors) |
| Master BFF build | **PASS** |

## Debt

- Full Leaflet map shell (Kind F) — OUT this list pack
- Unaccent/trigram search BE — P2 (`GAP-P1-SEARCH` defer if DB lacks extension)
- Apply migration on target DB still required at deploy (`dotnet ef database update`)

## Verify evidence

```
yarn typecheck → exit 0
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → webpack compiled
dotnet build ERP.Service.Api → 0 Error(s)
dotnet build ERP.Master.Bff → 0 Error(s)
dotnet ef migrations add Schema_RmmsRoadAssets → Done
```
