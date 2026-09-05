# Implement — so-ts-guardrail

| Field | Value |
|-------|-------|
| feature | `so-ts-guardrail` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` · Kind B |
| typeCode | `GUARDRAIL` |
| taskId | `task_a0431186` |
| mfeStdRoute | `/so-ts?type=GUARDRAIL` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=GUARDRAIL` |
| alias | `/so-ts-guardrail` → redirect |
| API | `api/v1/asset/road-assets` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-09-01T17:00:00.000Z` |

## Summary

GUARDRAIL profile trên `AssetListPage` / `AssetFormPage` (reuse Kind B shell — cấm fork). Alias route `/so-ts-guardrail`. BE init-data delta + prefix `HL-` + validation name optional / RANGE.

## FE changes

| Area | File | Notes |
|------|------|-------|
| Route alias | `src/index.tsx` | `/so-ts-guardrail` → `?type=GUARDRAIL` |
| List profile | `AssetListPage.tsx` | GUARDRAIL hide/ensure cols · grid columns · filter placeholder · testId `rmms-so-ts-guardrail-list` |
| Form S-ATTR | `AssetFormPage.tsx` | Editable dumpSpecs · reflective Number · S-LOC-RANGE XY · name optional |
| Init types | `endpoint.ts` · `lookups.ts` | `guardrailTypes` · `guardrailMaterials` · `installationPurposes` |
| Labels | `dumpSpecLabels.ts` | `installation_purpose_id` · reflective SL |
| Filter context | `docs/context/features/so-ts-guardrail-filter-bar.md` | T-UI-FILTER-01 · T-CTX-01 |

## BE changes (Step 4b — init-data only, no migration)

| Area | File | Notes |
|------|------|-------|
| DTO | `RoadAssetDtos.cs` | GuardrailTypes · GuardrailMaterials · InstallationPurposes |
| Service | `RoadAssetService.cs` | LOOKUP seed + init-data · `DefaultCodePrefix` `HL-` · ValidateRequired GUARDRAIL |

## Tasks mapped

| Task | Status |
|------|--------|
| T-UI-LIST-01 | done — GUARDRAIL grid profile |
| T-UI-FILTER-01 | done — filter-bar context |
| T-UI-FORM-01 | done — S-ATTR editable · dumpSpecLabels |
| T-BE-INIT-01 | done — guardrail lookups init-data |
| T-BE-CRUD-01 | done — name optional · HL- prefix |
| T-UI-LEAVE-01 | inherit — LeaveConfirmModal existing |
| T-UI-HIST-01 | inherit — useAlert existing |
| T-GR-08 | done — alias `/so-ts-guardrail` |

## Debt / defer

- GAP-GUARDRAIL-FLAT-01: flatten DB DEFER P2
- E2E: queued `/agent-qa*`

## Verify

```bash
cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset && yarn build
cd D:/AI-QLBD/Linm.RMMS.WebService/api/src/RMMS.Service.Api && dotnet build
```
