# Implement — so-ts-count-station

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| role | `dev` · `/agent-dev` |
| taskId | `task_b90cdece` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| prefix | `THC-` (keep GIS · GAP-COUNT-GIS-01) |
| mfeStdRoute | `/so-ts?type=COUNT_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=COUNT_STATION` |
| alias | `/so-ts-count-station` → Navigate `?type=COUNT_STATION` |
| API | `api/v1/asset/road-assets` · BFF proxy |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-09-01T08:00:00.000Z` |
| new_page.ssot_rereview | **pass** · list profile · filter V1–V5 · form 5col · leave Modal · S-ATTR agency/name_en/lane/speed/coord |

## Delta implemented

| Task | Status | Notes |
|------|--------|-------|
| T-CTX-01 | done | `so-ts-count-station-filter-bar.md` · DOMAIN-MAP row |
| T-BE-INIT-01 | done | `countAgencies[]` LOOKUP_STATIC agency_id |
| T-BE-CRUD-01 | done | COUNT ValidateRequired name/kmFrom optional · ResolveCountStationName · prefix THC- |
| T-UI-LIST-01 | done | COUNT grid profile · ON+hide-empty ĐVQL/EN/làn/tốc độ · hide type/kmTo/qty/unit |
| T-UI-FILTER-01 | done | LinErpListFilterBar · type lock · V1–V5 |
| T-UI-FORM-01 | done | S-ATTR editable · name←name_vi · kmTo ẩn · coord→lat/lng |
| T-UI-LEAVE-01 | done | LeaveConfirmModal + useFormLeaveGuard (reuse) |
| T-UI-HIST-01 | done | History Modal reuse · cấm invent API |
| T-UI-ACT-01 | done | alias route `/so-ts-count-station` |
| T-UI-LKP-01 | done | LOOKUP_STATIC countAgencies · label «Trạm đếm» |
| T-UI-FIELD-01 | done | dumpSpecLabels §4 COUNT keys + parseLatLngPair |

## Files changed

**MFE** (`D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`):
- `src/pages/AssetListPage/AssetListPage.tsx` — COUNT list profile + columns + filter
- `src/pages/AssetFormPage/AssetFormPage.tsx` — COUNT S-ATTR + coord parse + name_vi
- `src/services/asset/dumpSpecLabels.ts` — COUNT labels + parseLatLngPair
- `src/services/asset/lookups.ts` · `endpoint.ts` — init-data countAgencies
- `src/index.tsx` — alias `/so-ts-count-station`

**BE** (`D:/AI-QLBD/Linm.RMMS.WebService`):
- `RoadAssetDtos.cs` — CountAgencies
- `RoadAssetService.cs` — seed + LoadDumpSpec + COUNT ValidateRequired + THC-
- `RoadAssetCatalogHandler.cs` — ResolveCountStationName (name_vi · IsWeak)
- `docs/DOMAIN-MAP.md` — so-ts-count-station → Asset

**Context**:
- `docs/context/features/so-ts-count-station-filter-bar.md`

## Debt / defer

- migration none (dumpSpecs P1 · flatten P2 · GAP-COUNT-FLAT-01)
- GIS slug DEFER · Auth perm codes DEFER
- E2E queued `/agent-qa*` only
- rebuild TX→THC historical codes debt (prefix keep THC- for new)
