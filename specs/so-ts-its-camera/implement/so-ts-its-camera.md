# Dev — Implement — so-ts-its-camera

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| taskId | `task_43028f8c` |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `ITS_CAMERA` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| alias | `/so-ts-its-camera` → `/so-ts?type=ITS_CAMERA` |
| API | `api/v1/asset/road-assets` |
| prefix | `IT-` |
| build | MFE `yarn build` PASS · BE `dotnet build` PASS |
| updatedAt | `2026-09-02T09:30:00.000Z` |

## FE (MFE)

| Task | File | Status |
|------|------|--------|
| T-UI-LIST-01 | `AssetListPage.tsx` — ITS_CAMERA profile · hide type/kmTo/SL/ĐVT · 9 dump cols · hide-empty | done |
| T-UI-FILTER-01 | `so-ts-its-camera-filter-bar.md` | done |
| T-UI-FORM-01 | `AssetFormPage.tsx` — S-ATTR editable · S-LOC-POINT kmFrom only · name optional | done |
| T-UI-LEAVE-01 | LeaveConfirmModal + useAlert (existing) | done |
| T-CTX-01 | context + filter-bar · alias route | done |
| Labels | `dumpSpecLabels.ts` | done |
| Init mapping | `lookups.ts` · `endpoint.ts` | done |
| Route alias | `index.tsx` `so-ts-its-camera` | done |

## BE (WebService)

| Task | File | Status |
|------|------|--------|
| T-BE-INIT-01 | `RoadAssetService.cs` — itsManagementCenterTypes · itsCentralControlLocations | done |
| T-BE-CRUD-01 | DefaultCodePrefix `IT-` · name/kmFrom optional ITS_CAMERA | done |
| DTO | `RoadAssetDtos.cs` init-data props | done |

## Gates

- List: LinCatalogUiSchemaEditorModal + buildDynamicGridColumns — no leftover const columns
- Form: CatalogFormShell 5col · cấm tab legacy · cấm camera-connect merge
- BE: cấm ERP.* · no migration (dumpSpecs P1)
- Build: GAP-DEV-BUILD PASS

## Debt / defer

- GAP-ITS-FLAT-01: flatten dumpSpecs → DEFER P2
- GAP-ITS-CAM-01: camera-connect out of scope
- E2E: queued `/agent-qa*`
