# Implement — so-ts-rest-area

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| role | `dev` · `/agent-dev` |
| taskId | `task_3b431b36` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `REST_AREA` |
| mfeStdRoute | `/so-ts?type=REST_AREA` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=REST_AREA` |
| alias | `/so-ts-rest-area` → redirect |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| migration | none |
| updatedAt | `2026-09-01T04:45:00.000Z` |

## Tasks completed

| id | summary |
|----|---------|
| T-UI-LIST-01 | REST_AREA grid profile · hide type/kmTo/SL/ĐVT/parking · ON+hide-empty chiều dài/DT/cứu hộ/cấp cứu |
| T-UI-FILTER-01 | `so-ts-rest-area-filter-bar.md` · LinErpListFilterBar |
| T-UI-FORM-01 | S-ATTR editable · name←name_work · kmTo ẩn · dumpSpecs merge · prefix DN- |
| T-BE-INIT-01 | init-data delta restAreaWorkTypes/Categories/Owners + buildLocations |
| T-BE-CRUD-01 | ValidateRequired REST_AREA · type_work_id required · name/kmFrom optional |
| T-UI-LEAVE-01 | LeaveConfirmModal (reuse) |
| T-UI-HIST-01 | LinCatalogHistoryModal (reuse) |
| T-CTX-01 | filter-bar context file |

## FE changes

- `AssetListPage.tsx` — REST_AREA profile · testId `rmms-so-ts-rest-area-list`
- `AssetFormPage.tsx` — form section Thông số trạm dừng nghỉ
- `dumpSpecLabels.ts` — labels §4 REST_AREA
- `lookups.ts` · `endpoint.ts` — init-data mapping
- `index.tsx` · `mfe.routes.json` — alias `/so-ts-rest-area`

## BE changes

- `RoadAssetDtos.cs` — RestAreaWorkTypes · RestAreaCategories · RestAreaOwners · BuildLocations
- `RoadAssetService.cs` — LOOKUP seed · init-data · ValidateRequired · prefix `DN-`

## Build

- MFE: `yarn build` PASS
- BE: `dotnet build` PASS

## Debt / defer

- GAP-RA-FLAT-01 flatten dumpSpecs — P2
- GAP-RA-SPLIT-01 import/filter PARKING — handler已有 RefineImportedType; list filter by `?type=REST_AREA`
- Grid hide-empty via schema config — column ON default; empty cells show `—`
