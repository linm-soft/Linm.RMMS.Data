# Implement — so-ts-toll

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
| role | `dev` · `/agent-dev` |
| taskId | `task_177ba123` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `TOLL` |
| mfeStdRoute | `/so-ts?type=TOLL` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=TOLL` |
| alias | `/so-ts-toll` → Navigate `?type=TOLL` |
| API | `api/v1/asset/road-assets` · BFF proxy |
| build | MFE `yarn build` PASS · BE `dotnet build Linm.RMMS.WebService.sln` PASS |
| updatedAt | `2026-09-01T05:30:00.000Z` |

## Delta implemented

| Task | Status | Notes |
|------|--------|-------|
| T-CTX-01 | done | `so-ts-toll-filter-bar.md` created |
| T-BE-INIT-01 | done | init-data tollWeightingMethods + 5 toll lookup arrays |
| T-BE-CRUD-01 | done | TOLL validation: name optional · kmFrom optional · weighting_method required |
| T-UI-LIST-01 | done | TOLL grid profile · hide type/kmTo/qty/unit/auxiliary_works_grade_id |
| T-UI-FILTER-01 | done | LinErpListFilterBar · type lock TOLL · V1–V5 |
| T-UI-FORM-01 | done | S-ATTR editable · S-ATTR-WIDTH · name←station_name · kmTo hidden |
| T-UI-LEAVE-01 | done | reuse LeaveConfirmModal + useFormLeaveGuard |
| T-UI-ACT-01 | done | alias route `/so-ts-toll` |
| T-UI-LKP-01 | done | LOOKUP_STATIC from init-data |
| T-UI-FIELD-01 | done | dumpSpecLabels toll keys |

## Files changed

**MFE** (`D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset`):
- `src/pages/AssetListPage/AssetListPage.tsx` — TOLL list profile + columns + filter
- `src/pages/AssetFormPage/AssetFormPage.tsx` — TOLL form S-ATTR + S-ATTR-WIDTH
- `src/services/asset/dumpSpecLabels.ts` — toll labels
- `src/services/asset/lookups.ts` · `endpoint.ts` — init-data toll arrays
- `src/index.tsx` — alias `/so-ts-toll`

**BE** (`D:/AI-QLBD/Linm.RMMS.WebService`):
- `RoadAssetDtos.cs` — Toll* init-data properties
- `RoadAssetService.cs` — seeds + LoadDumpSpec + TOLL ValidateRequiredFields

**Context**:
- `docs/context/features/so-ts-toll-filter-bar.md`

## Debt / defer

- migration none (dumpSpecs P1 · flatten P2)
- Auth perm codes DEFER
- E2E queued `/agent-qa*`
