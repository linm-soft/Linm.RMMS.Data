# Implement — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| status | `done` |
| role | `dev` · `/agent-dev` |
| taskId | `task_3fa71fe6` |
| changeScope | `new_page` |
| packKind | `ai` · Kind B+D |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/predict` |
| mfeStdRoute | `/ai-kd/du-bao-bt` |
| mfeStdUrl | `http://localhost:9303/ai-kd/du-bao-bt` |
| skillVersion | `2026.08.16.01` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-25T00:45:00.000Z` |

## retry.ssot_rereview (Dev · live 2026-08-25 · task_3fa71fe6)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` · cấm nested `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + `buildDynamicGridColumns` · kéo cột default ON | **PASS** |
| 3 | Footer `LinCatalogListPagination` only | **PASS** |
| 4 | flex + skeleton / LAYOUT-06 | **PASS** |
| 5 | Toolbar config FULL · `LinCatalogUiSchemaEditorModal` kind=`ai-predict` | **PASS** |
| 6 | Filter routeId · horizon · topN · scoreMin · Áp dụng/Xóa lọc · **cấm** `filterMaxWidthPx` | **PASS** |
| 7 | KPI strip | **PASS** |
| 8 | BE ui-schema seed `ai-predict` | **PASS** |
| 9 | BE parent `DriversJson` → child `PredictDriverEntity` | **PASS** |
| 10 | list_parity Kind B A–D+F | **PASS** |
| 11 | tree_master? | **n/a** |
| 12 | Form Kind D footer-only + LeaveConfirmModal | **PASS** |
| 13 | View `<dl>` display · cấm Input readOnly xám | **PASS** |
| 14 | Dropdown từ init-data | **PASS** |
| 15 | History `LinCatalogHistoryModal` · cấm custom audit Modal | **PASS** |
| 16 | T-UI-UX cấm `filterMaxWidthPx` / `ErpListHeaderFilters` | **PASS** |
| 17 | no AI badge header | **PASS** |
| 18 | Confirm **không** auto WO | **PASS** |
| 19 | `[RequirePermission]` wire | **PARTIAL** P1 stub TODO comments OK |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06` **PASS**

## Tasks checklist

| Task | Status | Notes |
|------|--------|-------|
| T-PERM-01 | **done** | FE gated · BE TODO stub |
| T-MIG-01 | **done** | verify existing |
| T-MIG-02 | **done** | `20260825120000_Schema_RmmsAiVisionPredictDrivers` |
| T-BE-CRUD-01 | **done** | drivers child · API-01…09 |
| T-BE-INIT-01 | **done** | init-data routes/recommends/drivers |
| T-BE-UISCHEMA-01 | **done** | Registry + Seed `ai-predict` |
| T-BFF-01 | **verify** | proxy live · no delta |
| T-UI-LIST-01 | **done** | A–D+F+KPI · dynamic grid |
| T-UI-CFG-01 | **done** | LinCatalogUiSchemaEditorModal FULL |
| T-UI-FORM-01 | **done** | View dl · footer Chạy lại |
| T-UI-ACT-01 | **done** | batch · predict-one · stubs |
| T-UI-LEAVE-01 | **done** | LeaveConfirmModal |
| T-UI-LKP-01 | **done** | init-data only |
| T-UI-FIELD-01 | **done** | filter query keys |
| T-UI-PROD-01 | **done** | no dev chrome · View dl |
| T-UI-UX-01 | **done** | score badge · no filterMaxWidthPx |
| T-UI-HIST-01 | **done** | LinCatalogHistoryModal |

## Build

| Gate | Command | Result |
|------|---------|--------|
| BE API | `dotnet build …/RMMS.Service.Api.csproj -c Release` | **PASS** 0 err |
| BE BFF | `dotnet build …/LINM.RMMS.AiVision.Bff.csproj -c Release` | **PASS** 0 err |
| MFE typecheck | `yarn typecheck` | **PASS** |
| MFE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (size warnings only) |

## Key paths

### BE
- Entity: `PredictDriverEntity.cs` · `PredictResultEntity.cs` (Drivers nav · drop DriversJson)
- Service: `AiVisionPredictService.cs` — child drivers mapping
- Migration: `20260825120000_Schema_RmmsAiVisionPredictDrivers.cs`
- UiSchema: `CatalogUiSchemaRegistry.AiPredict` · `CatalogUiSchemaSeed.AiPredict()`

### FE
- Page: `src/pages/PredictListPage/PredictListPage.tsx`
- Form: `src/pages/PredictListPage/PredictFormSlideout.tsx`
- Schema kind: `ai-predict` · `useCatalogUiSchema` + `LinCatalogUiSchemaEditorModal`

## Handoff → QA

| Field | Value |
|-------|-------|
| next | `/agent-qa` · e2eQa ON |
| mfeStdUrl | `http://localhost:9303/ai-kd/du-bao-bt` |
| Build | FE+BE **PASS** |

---
<!-- Version meta: skillVersion=2026.08.16.01 · schemaVersion=4 · workflowVersion=2026.08.16.02 · versionGate=ok -->
