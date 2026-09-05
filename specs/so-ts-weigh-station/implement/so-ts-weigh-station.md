# Implement — so-ts-weigh-station

| Field | Value |
|-------|-------|
| feature | `so-ts-weigh-station` |
| role | `dev` · `/agent-dev` |
| taskId | `task_fc027d60` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` |
| prefix | `TFP-` (shared TOLL · GAP-WEIGH-PREFIX-01) |
| mfeStdRoute | `/so-ts?type=WEIGH_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=WEIGH_STATION` |
| alias | `/so-ts-weigh-station` → Navigate `?type=WEIGH_STATION` |
| API | `api/v1/asset/road-assets` · BFF proxy |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-09-01T07:00:00.000Z` |
| new_page.ssot_rereview | **pass** · list profile · filter V1–V5 · form 5col · leave Modal · S-ATTR approaching_road |

## Delta implemented

| Task | Status | Notes |
|------|--------|-------|
| T-CTX-01 | done | `so-ts-weigh-station-filter-bar.md` |
| T-BE-INIT-01 | done | weighManagementUnits · weighEquipmentTypes · weighPavementTypes · weighBoolOptions |
| T-BE-CRUD-01 | done | WEIGH ValidateRequired name/kmFrom optional · ResolveWeighStationName · prefix TFP- |
| T-UI-LIST-01 | done | WEIGH grid profile · ON+hide-empty TB/tải/ĐVQL/DT · length_approaching OFF |
| T-UI-FILTER-01 | done | LinErpListFilterBar · type lock · V1–V5 |
| T-UI-FORM-01 | done | S-ATTR editable · Đường vào gộp · name←station_name · kmTo ẩn |
| T-UI-LEAVE-01 | done | LeaveConfirmModal + useFormLeaveGuard (reuse) |
| T-UI-HIST-01 | done | History Modal reuse · cấm invent API |
| T-UI-ACT-01 | done | alias route `/so-ts-weigh-station` |
| T-UI-LKP-01 | done | LOOKUP_STATIC from init-data |
| T-UI-FIELD-01 | done | dumpSpecLabels §4 WEIGH keys |

## Files changed

**MFE** (`D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`):
- `src/pages/AssetListPage/AssetListPage.tsx` — WEIGH list profile + columns + filter
- `src/pages/AssetFormPage/AssetFormPage.tsx` — WEIGH S-ATTR + approaching_road
- `src/services/asset/dumpSpecLabels.ts` — WEIGH labels
- `src/services/asset/lookups.ts` · `endpoint.ts` — init-data weigh* arrays
- `src/index.tsx` — alias `/so-ts-weigh-station`

**BE** (`D:/AI-QLBD/Linm.RMMS.WebService`):
- `RoadAssetDtos.cs` — Weigh* init-data properties
- `RoadAssetService.cs` — seeds + LoadDumpSpec + WEIGH ValidateRequired + TFP- prefix
- `RoadAssetCatalogHandler.cs` — ResolveWeighStationName (station_name · IsWeak)

**Context**:
- `docs/context/features/so-ts-weigh-station-filter-bar.md`

## Debt / defer

- migration none (dumpSpecs P1 · flatten P2 · GAP-WEIGH-FLAT-01)
- Auth perm codes DEFER
- E2E queued `/agent-qa*` only
