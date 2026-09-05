# Implement — so-ts-ems-post

| Field | Value |
|-------|-------|
| feature | `so-ts-ems-post` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| taskId | `task_abebc1f1` |
| typeCode | `EMS_POST` |
| mfeStdRoute | `/so-ts?type=EMS_POST` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=EMS_POST` |
| aliasRoute | `/so-ts-ems-post` → redirect |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |

## Delta implemented

| Task | Surface | Notes |
|------|---------|-------|
| T-UI-LIST-01 | `AssetListPage.tsx` | EMS_POST profile · hide/show cols · titles |
| T-UI-FILTER-01 | filter-bar context + list | `so-ts-ems-post-filter-bar.md` |
| T-UI-FORM-01 | `AssetFormPage.tsx` | S-ATTR editable · name←name_station · kmTo ẩn |
| T-UI-LEAVE-01 | existing | LeaveConfirmModal reuse |
| T-BE-INIT-01 | `RoadAssetService.cs` | `OwnerOptions` · `StationTypeOptions` |
| T-BE-CRUD-01 | validate + import | EMS_POST name/ point guards · `ResolveEmsPostName` |
| T-CTX-01 | filter-bar.md | created |
| GAP-EMS-ROUTE-01 | `index.tsx` | alias redirect |

## GAP closed

GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-EMS-NAME-01 · GAP-EMS-SPEC-01 · GAP-EMS-POINT-01 · GAP-EMS-LOOKUP-01 · GAP-EMS-ROUTE-01 · GAP-EMS-LEAVE-01 (reuse)

## Verify

- `yarn build` MFE PASS
- `dotnet build` BE PASS
- QA verdict **PASS** · e2e S0/S1/QA-20 · `task_bffa06d6`
