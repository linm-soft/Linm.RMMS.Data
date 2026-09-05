# Implement — so-ts-pontoon (Sổ TS — Cầu phao)

| Field | Value |
|-------|-------|
| feature | `so-ts-pontoon` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| taskId | `task_65e6ce12` |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `PONTOON` |
| mfeStdRoute | `/so-ts?type=PONTOON` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=PONTOON` |
| alias | `/so-ts-pontoon` → redirect |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| updatedAt | `2026-09-02T07:30:00.000Z` |

## Delta implemented

| Task | Surface | Result |
|------|---------|--------|
| T-CTX-01 | filter-bar context | `docs/context/features/so-ts-pontoon-filter-bar.md` |
| T-BE-INIT-01 | init-data | `pontoonWorkLevels[]` · `pontoonBridgeTypes[]` |
| T-BE-CRUD-01 | validation + prefix | `CP-` · name/kmFrom optional · `pontoon_bridge_type_id` required |
| T-UI-LIST-01 | grid profile | hide type/kmTo/qty/unit · ensure pontoon attrs |
| T-UI-FILTER-01 | filter bar | reuse Kind B shell · type lock PONTOON |
| T-UI-FORM-01 | form S-ATTR | editable dump keys · `name` ← `name_pontoon_bridge` · ẩn kmTo |
| T-UI-LEAVE-01 | leave | LeaveConfirmModal (existing) |

## Files touched

**MFE:** `AssetListPage.tsx` · `AssetFormPage.tsx` · `dumpSpecLabels.ts` · `endpoint.ts` · `lookups.ts` · `index.tsx`  
**BE:** `RoadAssetService.cs` · `RoadAssetDtos.cs`

## Build

- MFE: `yarn build` PASS
- BE: `dotnet build` PASS

## GAP closed

GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-PON-NAME-01 · GAP-PON-SPEC-01 · GAP-PON-POINT-01 · GAP-PON-LOOKUP-01 · GAP-PON-LEAVE-01 (reuse)

## Deferred

GAP-PON-ROUTE-01 alias redirect only (board) · flatten P2 · Auth DEFER · QA e2e queued
