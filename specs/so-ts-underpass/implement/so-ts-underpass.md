# Implement — so-ts-underpass

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `UNDERPASS` |
| mfeStdRoute | `/so-ts?type=UNDERPASS` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` |
| alias | `/so-ts-underpass` → `/so-ts?type=UNDERPASS` |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| taskId | `task_5069938c` |
| writtenAt | `2026-09-01T11:50:00.000Z` |
| contentHashPrior | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |

## Summary

Kind B catalog list + full-page form (5 cols) for **UNDERPASS** on shared `/so-ts` shell. Persist dumpSpecs P1 · prefix **CC-** · LOOKUP init `culvertTypes` / `constructionTypes` / `structureTypes` / wingwall / pavement · name ← tencongchui (fallback name_underpass, trống OK) · **S-LOC-POINT** (ẩn kmTo) · LeaveConfirmModal reuse · **no** Step 4b / migration / ERP.*.

## Tasks done

| id | Result |
|----|--------|
| T-CTX-01 | `docs/context/features/so-ts-underpass-filter-bar.md` |
| T-BE-CRUD-01 | `DefaultCodePrefix` CC- · ValidateRequired name/kmFrom optional + `culvert_type_id` · import `ResolveUnderpassName` |
| T-BE-INIT-01 | init-data LOOKUP arrays (culvert/construction/structure/wingwall/pavement) |
| T-BFF-01 | proxy only (no BFF logic change) |
| T-UI-LIST-01 | UNDERPASS profile hide/ensure · titles · peer UNDERPASS-only |
| T-UI-FILTER-01 | LinErpListFilterBar type lock · V1–V5 context |
| T-UI-FORM-01 | S-ATTR editable · dumpSpecLabels · S-LOC-POINT ẩn kmTo |
| T-UI-LEAVE-01 | `useFormLeaveGuard` / LeaveConfirmModal (shared) |
| T-UI-HIST-01 | shared History modal |

## FE surfaces

- `AssetListPage.tsx` — UNDERPASS profile / titles / cols / filter
- `AssetFormPage.tsx` — underpass attr section · validation · nameOptional · Point
- `index.tsx` — alias Navigate
- `endpoint.ts` / `lookups.ts` / `dumpSpecLabels.ts`

## BE surfaces

- `RoadAssetService.cs` — prefix · ValidateRequired · GetInitData seeds
- `RoadAssetDtos.cs` — InitData DTO props
- `RoadAssetCatalogHandler.cs` — ResolveUnderpassName

## Build

- MFE `yarn build` — **PASS** (webpack warnings size only)
- MFE `yarn typecheck` — **PASS**
- BE `dotnet build` — **PASS** (0 errors)

## Debt / DEFER

- Flatten Schema_* / Step 4b — GAP-UP-FLAT-01 P2
- Auth permission align — DEFER
- E2E — queued `/agent-qa*` only
