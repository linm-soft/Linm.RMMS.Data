# Dev — Implement — so-ts-lighting

| Field | Value |
|-------|-------|
| feature | `so-ts-lighting` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| taskId | `task_a04db633` |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `LIGHTING` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=LIGHTING` |
| alias | `/so-ts-lighting` → `/so-ts?type=LIGHTING` |
| API | `api/v1/asset/road-assets` |
| prefix | `CS-` |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-09-02T08:45:00.000Z` |

## FE (MFE)

| Task | File | Status |
|------|------|--------|
| T-UI-LIST-01 | `AssetListPage.tsx` — LIGHTING profile · hide type/kmTo/SL/ĐVT · ensure 9 dump cols · hide-empty | done |
| T-UI-FILTER-01 | `so-ts-lighting-filter-bar.md` | done |
| T-UI-FORM-01 | `AssetFormPage.tsx` — S-ATTR editable · S-LOC-POINT kmFrom only · name optional | done |
| T-UI-LEAVE-01 | LeaveConfirmModal + useAlert (existing) | done |
| T-CTX-01 | context + filter-bar · alias route | done |
| Labels | `dumpSpecLabels.ts` | done |
| Init mapping | `lookups.ts` · `endpoint.ts` | done |
| Route alias | `index.tsx` `so-ts-lighting` | done |

## BE (WebService)

| Task | File | Status |
|------|------|--------|
| T-BE-INIT-01 | `RoadAssetService.cs` — lightingManagementUnits · bulbTypes · transformingStationTypes · controlMethods | done |
| T-BE-CRUD-01 | DefaultCodePrefix `CS-` · name/kmFrom optional LIGHTING | done |
| DTO | `RoadAssetDtos.cs` init-data props | done |

## Gates

- List: LinCatalogUiSchemaEditorModal + buildDynamicGridColumns — no leftover const columns
- Form: CatalogFormShell 5col · cấm tab legacy · cấm Solar*/LampWatt
- BE: cấm ERP.* · no migration (dumpSpecs P1)
- Build: GAP-DEV-BUILD PASS

## Debt / defer

- GAP-LT-FLAT-01: flatten dumpSpecs → DEFER P2
- GAP-AK32-07: Solar*/LampWatt out of scope
- E2E: **PASS** `/agent-qa` · task `task_9519199c` · S0/S1/QA-20 · phase=review

## QA verdict

| Gate | Result |
|------|--------|
| typecheck + build | **PASS** |
| E2E S0/S1/QA-20 | **PASS** · `qa/screens/` |
| Live assert DTM | **PASS** · 0 overflowX |
| Verdict | **PASS** → Review |
