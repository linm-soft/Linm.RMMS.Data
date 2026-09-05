# Implement — so-ts-ditch

| Field | Value |
|-------|-------|
| feature | `so-ts-ditch` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `DITCH` |
| mfeStdRoute | `/so-ts?type=DITCH` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=DITCH` |
| alias | `/so-ts-ditch` → `/so-ts?type=DITCH` |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| taskId | `task_25267e6c` |
| writtenAt | `2026-09-01T11:10:00.000Z` |
| contentHashPrior | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |

## Summary

Kind B catalog list + full-page form (5 cols) for **DITCH** on shared `/so-ts` shell. Persist dumpSpecs P1 · prefix **CD-** · LOOKUP init `ditchTypes` / `culvertShapes` / structure / work / materials / location · name optional · S-LOC-RANGE · LeaveConfirmModal reuse · **no** Step 4b / migration / ERP.*.

## Tasks done

| id | Result |
|----|--------|
| T-CTX-01 | `docs/context/features/so-ts-ditch-filter-bar.md` |
| T-BE-CRUD-01 | `DefaultCodePrefix` CD- · ValidateRequired name optional + `ditch_type_id` · import `ResolveDitchName` |
| T-BE-INIT-01 | init-data LOOKUP arrays |
| T-BFF-01 | proxy only (no BFF logic change) |
| T-UI-LIST-01 | DITCH profile hide/ensure · titles · peer DITCH-only |
| T-UI-FILTER-01 | LinErpListFilterBar type lock · V1–V5 |
| T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels · S-LOC-RANGE km* + 4 XY |
| T-UI-LEAVE-01 | `useFormLeaveGuard` / LeaveConfirmModal (shared) |
| T-UI-HIST-01 | shared History modal |

## FE surfaces

- `AssetListPage.tsx` — DITCH profile / titles / cols / filter
- `AssetFormPage.tsx` — ditch attr section · validation · nameOptional
- `index.tsx` — alias Navigate
- `endpoint.ts` / `lookups.ts` / `dumpSpecLabels.ts`

## BE surfaces

- `RoadAssetService.cs` — prefix · ValidateRequired · GetInitData seeds
- `RoadAssetDtos.cs` — InitData DTO props
- `RoadAssetCatalogHandler.cs` — ResolveDitchName

## Build

- MFE `yarn build` — **PASS** (webpack warnings size only)
- BE `dotnet build` — **PASS** (0 errors)

## Debt / DEFER

- Flatten Schema_* / Step 4b — GAP-DITCH-FLAT-01 P2
- CULVERT_L peer tile mix — DEFER
- Auth permission align — DEFER
- E2E — queued `/agent-qa*` only
