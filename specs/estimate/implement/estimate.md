# Implement — estimate

| Field | Value |
|-------|-------|
| feature | `estimate` |
| status | `done` |
| role | `dev` · `/agent-dev` |
| taskId | `task_674bb928` |
| changeScope | `new_page` |
| packKind | `ai` · Kind B+D |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/estimates` |
| mfeStdRoute | `/ai-vision/estimate` |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| skillVersion | `2026.08.16.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T09:04:00.000Z` |

## retry.ssot_rereview (HARD · trước Write)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` only | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` · LAYOUT-06 | **PASS** |
| 4 | Toolbar from-incident / from-defects / export · **no AI badge** | **PASS** |
| 5 | Filter **`LinErpListFilterBar`** + `estimate-filter-bar.md` · status · sourceType · from/to — **cấm** `ErpListHeaderFilters` / nút Tìm | **PASS** (T-UI-FILTER-01) |
| 6 | `LinCatalogDataGrid` kéo cột default ON | **PASS** |
| 7 | Zone F config stub | **PASS** |
| 8 | History `useCatalogHistoryModal` | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form slideout footer-only + lines + confirm Modal | **PASS** |
| 11 | Dropdown từ init-data only | **PASS** |
| 12 | leave-confirm dirty | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke` **PASS**

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

## Build

| Gate | Command | Result |
|------|---------|--------|
| BE API | `dotnet build …/RMMS.Service.Api.csproj` | **PASS** 0 err |
| BE BFF | `dotnet build …/LINM.RMMS.AiVision.Bff.csproj` | **PASS** 0 err |
| MFE typecheck | `yarn typecheck` | **PASS** (2026-08-17 filter-bar) |
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

### FE
- Page: `src/pages/EstimateListPage/`
- Services: `src/services/estimate/`
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
| next | `/agent-qa` · static (e2eQa OFF) |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| Build | FE+BE **PASS** |

## QA verdict (`task_482fbe3a` · e2eQa ON)

| Field | Value |
|-------|-------|
| verdict | **FAIL** |
| method | e2e runtime · start:std + docker + screens |
| P0 | **GAP-P2-CC-06** / **GAP-DEV-CONFIG-PLACEHOLDER-01** — still `configHint` Zone F · need Config FULL (`LinCatalogUiSchemaEditorModal` + seed `ai-estimates`) |
| evidence | `specs/estimate/qa/screens/QA-CFG.png` · `qa/scenarios.md` |
| next | `/agent-dev` retry Config FULL · Review **blocked** |

---
<!-- Version meta: skillVersion=2026.08.16.01 · schemaVersion=1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
