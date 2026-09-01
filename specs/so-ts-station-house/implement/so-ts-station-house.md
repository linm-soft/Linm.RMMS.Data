# Implement — so-ts-station-house

| Field | Value |
|-------|-------|
| feature | `so-ts-station-house` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `STATION_HOUSE` |
| taskId | `task_44057caa` |
| mfeStdRoute | `/so-ts?type=STATION_HOUSE` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=STATION_HOUSE` |
| alias | `/so-ts-station-house` → `/so-ts?type=STATION_HOUSE` |
| API | `api/v1/asset/road-assets` |
| migration | **none** |
| writtenAt | `2026-09-01T08:50:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** |
| e2eQa | queued `/agent-qa*` only — **not run** |

## Delta shipped

| Area | Change |
|------|--------|
| BE init | `stationWorkTypes` · `stationBuildLocations` · `officeBuildingGrades` · `auxiliaryWorksGrades` (+ seed ∪ dump distinct) |
| BE CRUD | STATION_HOUSE validate: name/kmFrom optional · `type_work_id` required · prefix `NH-` · **no** IsWeak→đoạn |
| FE list | Profile hide type/kmTo/qty/unit + low-fill DT/cấp/vật tư/khuôn viên/build_location · ensure `type_work_id` · titles Nhà hạt |
| FE form | S-ATTR editable dump §4 · Dropdown LOOKUP · name←`name_building` · ẩn kmTo/SL/ĐVT · LeaveConfirmModal reuse |
| Route | alias Navigate board |
| CTX | `so-ts-station-house-filter-bar.md` · context track `dev=done` |

## Files (key)

**MFE** `Linm.Web.RMMS.Asset`
- `src/pages/AssetListPage/AssetListPage.tsx`
- `src/pages/AssetFormPage/AssetFormPage.tsx`
- `src/services/asset/dumpSpecLabels.ts` · `lookups.ts` · `endpoint.ts`
- `src/index.tsx`

**BE** `Linm.RMMS.WebService`
- `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs`
- `api/src/RMMS.Service.Api/Domains/Asset/Services/RoadAssetService.cs`

**Data**
- `docs/context/features/so-ts-station-house-filter-bar.md`
- `docs/context/features/so-ts-station-house.md`

## GAP close

GAP-SOTS-COL/FORM/REUSE · GAP-SH-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE — **closed** P1 · flatten DEFER P2

## new_page.ssot_rereview

**pass** · checklist: grid profile · filter-bar V1–V5 context · form 5col · leave Modal · dumpSpecLabels · init LOOKUP

## Debt / QA

- Auth perm align DEFER
- E2E T-QA-* queued QA only
- SchemaConfig user may re-enable hide-low-fill cols

## Next

role: `qa` · `/agent-qa*` · scenarios + e2e on mfeStdUrl
