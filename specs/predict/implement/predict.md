# Implement — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| status | `done` |
| role | `dev` · `/agent-dev` |
| taskId | `task_90d55af6` |
| changeScope | `new_page` |
| packKind | `ai` · Kind B+D |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/predict` |
| mfeStdRoute | `/ai-vision/predict` |
| mfeStdUrl | `http://localhost:9303/ai-vision/predict` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T17:40:00.000Z` |

## retry.ssot_rereview (HARD · trước Write)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` only · `paginateClient=false` | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` · LAYOUT-06 | **PASS** |
| 4 | Toolbar batch/export/dashboard/sort · **no AI badge** (`ai-chrome-skip`) | **PASS** |
| 5 | Filter route Dropdown + horizon/topN/scoreMin — **cấm nút Tìm** | **PASS** |
| 6 | `LinCatalogDataGrid` · score/model cột · KPI strip | **PASS** |
| 7 | Zone F config stub | **PASS** |
| 8 | History modal (section audit) + catalog history hook | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form Kind D slideout · drivers/chart/note/audit · footer only | **PASS** |
| 11 | Dropdown từ init-data only | **PASS** |
| 12 | leave-confirm dirty note | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke` **PASS**

## Tasks checklist

| Task | Status | Notes |
|------|--------|-------|
| T-CTX-01 | **done** | path `ai-vision/predict` · route before `:id` |
| T-PERM-01 | **done** | `ai-vision.predict.read\|create\|update\|delete\|run` |
| T-MIG-01 | **done** | `20260817180000_Schema_RmmsAiVisionPredict` |
| T-BE-CRUD-01 | **done** | priority-list · init · section CRUD · note · batch · history · seed 8 |
| T-BFF-01 | **done** | `AiVisionPredictBffController` proxy-only |
| T-UI-LIST-01 | **done** | A–D · KPI · no AI badge |
| T-UI-FORM-01 | **done** | Kind D · readonly features · note edit |
| T-UI-ACT-01 | **done** | batch · re-predict · major stub · attach stub · export/dashboard stub |
| T-UI-LEAVE-01 | **done** | LeaveConfirmModal on dirty note |
| T-UI-UX-01 | **done** | score badge · chart stub bars · copy section id |

## Build

| Gate | Command | Result |
|------|---------|--------|
| BE API | `dotnet build …/RMMS.Service.Api.csproj -c Release` | **PASS** 0 err |
| BE BFF | `dotnet build …/LINM.RMMS.AiVision.Bff.csproj -c Release` | **PASS** 0 err |
| MFE typecheck | `yarn typecheck` | **PASS** |
| MFE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (size warnings only) |

## Key paths

### BE
- DTOs: `api/domains/ai-vision/LINM.RMMS.AiVision.Models/DTOs/PredictDtos.cs`
- Entity: `PredictResultEntity.cs` · `PredictAuditEntity.cs`
- Service: `IAiVisionPredictService` · `AiVisionPredictService`
- Controller: `AiVisionPredictController` · `api/v1/ai-vision/predict`
- BFF: `AiVisionPredictBffController` · `web-bff/api/v1/ai-vision/predict/...`
- Migration: `20260817180000_Schema_RmmsAiVisionPredict.cs`
- DI: `AiVisionDomainRegistration.cs`
- DbContext: `AppDbContext` DbSets + fluent (CompanyCode+SectionId unique · tenant filter)

### FE
- Page: `src/pages/PredictListPage/`
- Services: `src/services/predict/`
- Demo store: `src/demo/predictStore.ts` (8 sections từ predict-data.js)
- Route: `/ai-vision/predict` (before `:id`)
- Dev nav: `devRoutes.ts` · label `AI dự báo bảo trì`
- pageId=`predict` · testId=`rmms-predict-list`

## Notes

- API domain **AiVision** · **cấm** `api/v1/ai-predict`
- Gắn kế hoạch BT / Ưu tiên đại tu / Export / Dashboard = toast stub
- Model chỉ trong cột/field — **không** badge AI trên header
- FE `withFallback` → local `predictStore` khi BFF/API offline

## Handoff → QA

| Field | Value |
|-------|-------|
| next | `/agent-qa` · static (e2eQa OFF) |
| mfeStdUrl | `http://localhost:9303/ai-vision/predict` |
| Build | FE+BE **PASS** |

---
<!-- Version meta: skillVersion=2026.08.16.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.16.02 · versionGate=ok -->
