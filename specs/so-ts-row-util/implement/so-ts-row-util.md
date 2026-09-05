# Implement — so-ts-row-util

| Field | Value |
|-------|-------|
| feature | `so-ts-row-util` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `ROW_UTIL` |
| mfeStdRoute | `/so-ts?type=ROW_UTIL` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=ROW_UTIL` |
| alias | `/so-ts-row-util` → `/so-ts?type=ROW_UTIL` |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| taskId | `task_7396fccf` |
| updatedAt | `2026-09-02T03:15:00.000Z` |

## Delta implemented

### FE (Linm.Web.RMMS.Asset)

- **Route alias:** `so-ts-row-util` → `/so-ts?type=ROW_UTIL` (`index.tsx`)
- **List profile ROW_UTIL:** column hide/ensure · titles · filter placeholder · `rmms-so-ts-row-util-list` (`AssetListPage.tsx`)
- **Form S-ATTR editable:** dump keys HTKT · S-LOC-RANGE (kmFrom+kmTo) · name↔`tencongtrinh_htk` · LeaveConfirmModal reuse (`AssetFormPage.tsx`)
- **dumpSpecLabels:** GAP-ROWUTIL-SPEC-01 keys
- **lookups/endpoint:** `rowUtilWorkTypes` · `rowUtilLocatedWithin` · `rowUtilProtectionTypes` · `rowUtilSupportTypes` · `rowUtilHiringStatuses` · `rowUtilCrossSections`
- **Filter context:** `docs/context/features/so-ts-row-util-filter-bar.md`

### BE (Linm.RMMS.WebService · Asset)

- **Init-data:** 6 LOOKUP arrays (GAP-ROWUTIL-LOOKUP-01) · `RoadAssetDtos` + `RoadAssetService`
- **DefaultCodePrefix:** `HT-` for ROW_UTIL (GAP-ROWUTIL-PREFIX-01)
- **ValidateRequired:** name optional · type_work_id required · kmFrom/kmTo optional (GAP-ROWUTIL-NAME/RANGE-01)
- **Import:** `ResolveRowUtilName` ← `tencongtrinh_htk` (GAP-ROWUTIL-NAME-01)

## Build gate

| Target | Result |
|--------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build` | **PASS** |

## Debt / defer

- flatten dumpSpecs → DB columns: **DEFER P2** (SA)
- hide-empty grid runtime: profile ENSURE only · no runtime empty-cell filter yet (peer types same)

## Next

- QA `/agent-qa*` · e2e queued
