# Dev — Implement — so-ts-slope-protect

| | |
|--|--|
| Feature | `so-ts-slope-protect` |
| Title | Sổ TS — Bảo vệ mái dốc |
| Role | `dev` · `/agent-dev` |
| taskId | `task_91ce2ce8` |
| changeScope | `new_page` |
| packKind | `list` · Kind B |
| typeCode | `SLOPE_PROTECT` |
| status | **done** |
| mfeStdUrl | `http://localhost:9301/so-ts?type=SLOPE_PROTECT` |
| aliasUrl | `http://localhost:9301/so-ts-slope-protect` |
| updatedAt | `2026-09-02T01:55:00.000Z` |

## Summary

Profile SLOPE_PROTECT trên live `/so-ts?type=SLOPE_PROTECT` + alias `/so-ts-slope-protect`. API giữ `api/v1/asset/road-assets` · dumpSpecs P1 · prefix `MD-` · init LOOKUP protectionTypes/slopeClassifications/locationOptions.

## FE (MFE)

| Area | Path | Notes |
|------|------|-------|
| List profile | `AssetListPage.tsx` | SLOPE_PROTECT_HIDE/ENSURE · cols protection_type_id/slope_classification_id · title/filter |
| Form S-ATTR | `AssetFormPage.tsx` | Editable dump · S-LOC-RANGE 4 XY · name optional |
| Labels | `dumpSpecLabels.ts` | GAP-SLOPE-SPEC-01 5 key |
| Route alias | `index.tsx` | `/so-ts-slope-protect` → `?type=SLOPE_PROTECT` |
| Init types | `endpoint.ts` · `lookups.ts` | protectionTypes · slopeClassifications |
| Filter context | `docs/context/features/so-ts-slope-protect-filter-bar.md` | T-UI-FILTER-01 |

## BE (Linm.RMMS.WebService)

| Area | Path | Notes |
|------|------|-------|
| Init-data | `RoadAssetService.cs` | protectionTypes[] · slopeClassifications[] · reuse locationOptions |
| DTO | `RoadAssetDtos.cs` | ProtectionTypes · SlopeClassifications |
| Prefix | `DefaultCodePrefix` | `MD-` GAP-SLOPE-PREFIX-01 |
| Validate | `ValidateRequired` | name optional · kmFrom required · protection_type_id required |

## Build verify

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build` | **PASS** |

## Debt / defer

- flatten dumpSpecs → Schema_* P2 (GAP-SLOPE-FLAT-01)
- Auth perm align DEFER
- E2E queued `/agent-qa*`

## new_page.ssot_rereview

**pass** — list profile · filter-bar V1–V5 · form 5col S-ATTR · S-LOC-RANGE · LeaveConfirmModal (reuse) · LAYOUT-06
