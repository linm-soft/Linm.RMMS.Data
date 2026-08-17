# Implement — estimate

| Field | Value |
|-------|-------|
| feature | `estimate` |
| status | `done` |
| role | `dev` · `/agent-dev` |
| taskId | `task_5554ab03` (qa fix implement) · prior `task_674bb928` · plan `task_552b72f8` |
| changeScope | `new_page` |
| packKind | `ai` · Kind B+D |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/estimates` · ui-schema `ai-estimates` |
| mfeStdRoute | `/ai-vision/estimate` |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| skillVersion | `2026.08.17.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.17.05` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T16:51:40.000Z` |

## retry.ssot_rereview (HARD · trước Write · qaFix implement)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` only | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` · LAYOUT-06 | **PASS** |
| 4 | Toolbar from-incident / from-defects / export · **no AI badge** | **PASS** |
| 5 | Filter **`LinErpListFilterBar`** · status · sourceType · from/to — **cấm** `ErpListHeaderFilters` | **PASS** (T-UI-FILTER-01) |
| 6 | `LinCatalogDataGrid` kéo cột default ON | **PASS** |
| 7 | Config FULL · `LinCatalogUiSchemaEditorModal` + `useCatalogUiSchema` + `buildDynamicGridColumns` · **no** `configHint` / Zone F | **PASS** (qa fix) |
| 8 | History `useCatalogHistoryModal` | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form slideout footer-only + lines + confirm Modal | **PASS** |
| 11 | Dropdown từ init-data only | **PASS** |
| 12 | leave-confirm dirty | **PASS** |
| 13 | BE Registry+Seed `ai-estimates` · **cấm ERP.*** | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke` **PASS**  
`implement.config_full` = `LinCatalogUiSchemaEditorModal` + catalogKind `ai-estimates` **PASS**

## Tasks checklist

| Task | Status | Notes |
|------|--------|-------|
| T-CTX-01 | **done** | path `ai-vision/estimates` · route locked |
| T-PERM-01 | **done** | `ai-vision.estimates.*` FE permissions |
| T-MIG-01 | **done** | `20260817100000_Schema_RmmsAiVisionEstimates` |
| T-BE-CRUD-01 | **done** | API-01…09 · EstimateAudit + EstimateLine · **no** `*LinesJson` |
| T-BFF-01 | **done** | `AiVisionEstimatesBffController` proxy-only |
| T-UI-LIST-01 | **done** | A–D · no AI badge |
| T-UI-FILTER-01 | **done** | `LinErpListFilterBar` · context `estimate-filter-bar.md` · sourceType + dates |
| T-UI-FORM-01 | **done** | Kind D · lines · footer only |
| T-UI-ACT-01 | **done** | from-incident/defects · confirm · draft · attach stub · export |
| T-UI-LEAVE-01 | **done** | LeaveConfirmModal |
| T-UI-UX-01 | **done** | View readOnly · money vi-VN |
| T-UI-CONFIG-01 | **done** | Config FULL · `ai-estimates` · GAP-P2-CC-06 CLOSED |

## QA fix implement (`task_5554ab03`)

| Gap | Fix |
|-----|-----|
| GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01 | Removed `configHint` · wired `LinCatalogUiSchemaEditorModal` |
| R-CFG-02 | `uiColumns` + `buildDynamicGridColumns(schema, uiColumns)` |
| GAP-SA-EST-02/03 | BE `CatalogUiSchemaRegistry.AiEstimates` + `CatalogUiSchemaSeed.AiEstimates()` |

### FE paths added
- `src/hooks/useCatalogUiSchema.ts`
- `src/services/catalogUiSchema/catalogUiSchemaService.ts`
- `src/utils/bootstrapCatalogUiSchema.ts`
- `src/utils/catalogUiSchemaGrid.ts`

### BE paths touched
- `CatalogUiSchemaRegistry.cs` · const + Supported
- `CatalogUiSchemaSeed.cs` · `AiEstimates()` seed 8 cột

## Build

| Gate | Command | Result |
|------|---------|--------|
| BE API | `dotnet build …/RMMS.Service.Api.csproj` | **PASS** 0 err (2026-08-17 qa-fix) |
| MFE typecheck | `yarn typecheck` | **PASS** |
| MFE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (size warnings only) |

## Key paths

### BE
- Entity: `EstimateAuditEntity.cs` · `EstimateLineEntity.cs`
- DTOs: `EstimateDtos.cs`
- Service: `IAiVisionEstimateService` · `AiVisionEstimateService`
- Controller: `AiVisionEstimatesController`
- BFF: `AiVisionEstimatesBffController`
- Migration: `20260817100000_Schema_RmmsAiVisionEstimates.cs`
- DI: `AiVisionDomainRegistration.cs`
- DbContext: `AppDbContext` DbSets + fluent
- Ui-schema: `CatalogUiSchemaRegistry` / `CatalogUiSchemaSeed` · kind `ai-estimates`

### FE
- Page: `src/pages/EstimateListPage/`
- Services: `src/services/estimate/` · `src/services/catalogUiSchema/`
- Demo store: `src/demo/estimateStore.ts`
- Route: `/ai-vision/estimate` (before `:id`)
- Dev nav: `devRoutes.ts`

## Notes

- Attach Công việc = toast stub P1 · **no auto WO**
- UnitPriceCatalog DEFER P2
- Legacy `/api/v1/ai-estimate/*` → reconciled `api/v1/ai-vision/estimates`

## Handoff → QA

| Field | Value |
|-------|-------|
| next | `/agent-qa` · e2eQa **ON** · start:std + docker + screens |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| must | **QA-CFG PASS** · modal schema · no `configHint` |
| Build | FE+BE **PASS** |

## Prior QA verdict (`task_482fbe3a` · e2eQa ON) — superseded by fix

| Field | Value |
|-------|-------|
| verdict | **FAIL** (prior) |
| P0 | GAP-P2-CC-06 — **fixed** in `task_5554ab03` |
| evidence | `specs/estimate/qa/screens/QA-CFG.png` · re-capture required |

---
<!-- Version meta: skillVersion=2026.08.17.03 · schemaVersion=1 · workflowVersion=2026.08.17.05 · versionGate=ok · skillId=agent-dev -->
