# Implement — so-ts-rail-cross (Sổ TS — Giao cắt đường sắt)

| Field | Value |
|-------|-------|
| feature | `so-ts-rail-cross` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| taskId | `task_73072d33` |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RAIL_CROSS` |
| mfeStdRoute | `/so-ts?type=RAIL_CROSS` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| alias | `/so-ts-rail-cross` → redirect |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| updatedAt | `2026-09-02T07:45:00.000Z` |

## Delta implemented

| Task | Surface | Result |
|------|---------|--------|
| T-CTX-01 | filter-bar context | `docs/context/features/so-ts-rail-cross-filter-bar.md` |
| T-BE-INIT-01 | init-data | `railCrossProtectionTypes[]` · `railCrossTrafficControlMethods[]` |
| T-BE-CRUD-01 | validation + prefix + import | `DS-` · name ← `name_crossing` · kmFrom optional · cấm ép kmTo |
| T-UI-LIST-01 | grid profile | hide type/kmTo/qty/unit · ensure protection/traffic/waiting cols |
| T-UI-FILTER-01 | filter bar | Kind B shell · type lock RAIL_CROSS |
| T-UI-FORM-01 | form S-ATTR | editable dump keys · `name` ← `name_crossing` · ẩn kmTo |
| T-UI-LEAVE-01 | leave | LeaveConfirmModal (existing) |

## Files touched

**MFE:** `AssetListPage.tsx` · `AssetFormPage.tsx` · `dumpSpecLabels.ts` · `endpoint.ts` · `lookups.ts` · `index.tsx`  
**BE:** `RoadAssetService.cs` · `RoadAssetDtos.cs` · `RoadAssetCatalogHandler.cs`

## Build

- MFE: `yarn build` PASS
- BE: `dotnet build` PASS

## GAP closed

GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-RC-NAME-01 · GAP-RC-SPEC-01 · GAP-RC-POINT-01 · GAP-RC-LOOKUP-01 · GAP-RC-PREFIX-01 · GAP-RC-LEAVE-01 (reuse)

## Deferred

GAP-RC-ROUTE-01 alias redirect only (board) · flatten P2 · Auth DEFER · QA e2e queued
