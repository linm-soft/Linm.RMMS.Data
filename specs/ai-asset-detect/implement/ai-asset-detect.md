# Implement — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| status | `completed` |
| role | `dev` · `/agent-dev` (+ ai-detect · oms-map kept) |
| taskId | `task_5c4b82f2` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass `ai` (Kind B+D+F) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision` |
| mfeStdRoute | `/ai-vision/ai-asset-detect` |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| updatedAt | `2026-09-06T17:15:00.000Z` |

## retry.ssot_rereview (HARD · trước Write)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` only | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` · LAYOUT-06 | **PASS** |
| 4 | Toolbar catalog + domain (detect · map · nearby · **Reconcile mất** · export) | **PASS** |
| 5 | Filter `LinErpListFilterBar` + **missOnly** — cấm nút Tìm | **PASS** |
| 6 | `LinCatalogDataGrid` kéo cột default ON | **PASS** |
| 7 | Zone F `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns` | **PASS** |
| 8 | History stub · **cấm** window.alert | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form slideout footer-only + Confirm/Dismiss/**Miss** + LeaveConfirmModal | **PASS** |
| 11 | Dropdown từ init-data only | **PASS** |
| 12 | Map overlay + FileUpload/`imageFileId` | **PASS** |
| 13 | **0** badge `AI` header | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke`  
`retry.ssot_rereview` = **pass**

## Tasks DoD (edit_page delta)

| Task | Status | Notes |
|------|--------|-------|
| T-MIG-01 | **done** (prior) | base Schema kept |
| T-MIG-FILE-01 | **done** | `20260906165946_Schema_RmmsAiVisionAssetCandidates_ImageFileId` · Up trimmed to ImageFileId+Miss* only |
| T-SEED-ITS_CAMERA | **done** (prior) | kept |
| T-BE-CRUD-01 | **done** | + `missOnly` · DTO ImageFileId/Miss* |
| T-BE-INIT-01 | **done** (prior) | kept |
| T-BE-AI-01 | **done** (prior) | dedupe 25 m kept |
| T-BE-CONFIRM-ASSET | **done** (prior) | kept |
| T-BE-MISS-01 | **done** | API-12 POST `/{id}/miss` → `IIncidentRecordService` |
| T-BE-FILE-01 | **done** | persist `ImageFileId` · ImageUrl derived/legacy |
| T-BFF-01 | **done** | proxy `…/miss` |
| T-PERM-01 | **done** | FE `canMiss` · BE TODO RequirePermission miss |
| T-UI-LIST-01 | **done** | miss/imageFileId columns · 0 AI badge |
| T-UI-FILTER-01 | **done** | missOnly Checkbox trên LinErpListFilterBar |
| T-UI-CFG-01 | **done** | LinCatalogUiSchemaEditorModal |
| T-UI-FORM-01 | **done** | slideout + imageFileId field |
| T-UI-LEAVE-01 | **done** | LeaveConfirmModal (prior + kept) |
| T-UI-MISS-01 | **done** | Reconcile · row Mất? · Miss Modal |
| T-UI-FILE-01 | **done** | attach → uploadId as imageFileId |
| T-UI-AI-01 / AI-FORM / MAP | **done** (prior + wire) | kept |

## Build

| Gate | Command | Result |
|------|---------|--------|
| BE API | `dotnet build …/RMMS.Service.Api.csproj` | **PASS** 0 err |
| BE AiVision BFF | `dotnet build …/LINM.RMMS.AiVision.Bff.csproj` | **PASS** 0 err |
| BE BFF host | `dotnet build …/RMMS.Service.Bff.csproj` | **PASS** 0 err (1 unrelated warn) |
| MFE typecheck | `yarn typecheck` | **PASS** |
| MFE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** |

## Key paths

### BE
- Entity: `AiVisionAssetCandidateEntity` (+ ImageFileId · MissFlag · ExpectedAssetId · MissWindowMin · IncidentDraftId)
- Service: `AiVisionAssetCandidateService` (+ missOnly · MissAsync)
- API: `AiVisionAssetCandidatesController` POST `/{id}/miss`
- BFF: `AiVisionAssetCandidatesBffController` miss proxy
- Migration: `20260906165946_Schema_RmmsAiVisionAssetCandidates_ImageFileId`

### FE
- Page: `src/pages/AiAssetDetectListPage/`
- Services: `src/services/aiAssetDetect/` (+ miss · missOnly · imageFileId · canMiss)

## Gates applied

| Gate | Decision | Implement |
|------|----------|-----------|
| TZ | tz_required | from/to · DetectedAt · miss window |
| XCO | xco_get_only | GetById + miss/confirm/dismiss |
| SHARE | share_tenant | CompanyCode filter |

## Debt / follow-up

- FileService resign URL on GET — P1 persists ImageFileId; preview via upload ImageUrl / FE files BFF (L-04 full resign when FileService client lands)
- `[RequirePermission]` live NuGet align (stub comments)
- E2E: queued `/agent-qa*` only — **not** run in Dev

## Handoff → QA

| Field | Value |
|-------|-------|
| next | `/agent-qa` · roleOnly |
| smoke | missOnly · Reconcile · Miss Modal · imageFileId · Leave · CRUD · detect · map |
| route | `/ai-vision/ai-asset-detect` |
| APIs | `/ai-vision/asset-candidates` (+missOnly) · `POST …/{id}/miss` · files reuse |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T17:15:00.000Z |
| versionGate | ok |
| taskId | `task_5c4b82f2` |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
