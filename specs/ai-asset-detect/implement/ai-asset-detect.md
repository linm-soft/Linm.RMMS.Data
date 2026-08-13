# Implement — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| status | `completed` |
| role | `dev` · `/agent-dev` |
| taskId | `task_c4b4decb` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass `ai` (Kind B+D+F) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision` |
| mfeStdRoute | `/ai-vision/ai-asset-detect` |
| updatedAt | `2026-08-12T15:00:00.000Z` |

## retry.ssot_rereview (HARD · trước Write)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` only | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` · LAYOUT-06 | **PASS** |
| 4 | Toolbar catalog + domain (sim-frame · nearby · export · reset-seed) | **PASS** |
| 5 | Filter SearchTextInput + Zone B — **cấm nút Tìm** | **PASS** (Enter/onSearch + Xóa lọc) |
| 6 | `LinCatalogDataGrid` kéo cột default ON | **PASS** |
| 7 | Zone F config stub modal | **PASS** |
| 8 | History stub | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form slideout footer-only + Confirm/Dismiss | **PASS** |
| 11 | Dropdown từ init-data only | **PASS** |
| 12 | Map overlay pins + Fit + basemap | **PASS** |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke`

## Tasks DoD

| Task | Status | Notes |
|------|--------|-------|
| T-MIG-01 | **done** | `20260812150000_Schema_RmmsAiVisionAssetCandidates` · Source/SourceRef on road_assets |
| T-SEED-ITS_CAMERA | **done** | migration InsertData + seed JSON (Persistence + Data) |
| T-BE-CRUD-01 | **done** | API-01…06 · pageSize 50/100/200/500 · soft-delete Draft |
| T-BE-INIT-01 | **done** | API-02 init-data 8 class / status / engine |
| T-BE-AI-01 | **done** | API-07/08 stub · API-09 Haversine · config NearbyRadiusMeters=25 |
| T-BE-CONFIRM-ASSET | **done** | API-10/11 · `IRoadAssetService` · CodePrefix `TS-AI-` · Source=`ai-asset-detect` |
| T-BFF-01 | **done** | `AiVisionAssetCandidatesBffController` proxy-only |
| T-PERM-01 | **done** | FE perms module · BE TODO RequirePermission comments |
| T-UI-LIST-01 | **done** | route `/ai-vision/ai-asset-detect` · A–D |
| T-UI-FORM-01 | **done** | Slideout C/E/V/Copy footer-only |
| T-UI-ACT-01 | **done** | inventory wired |
| T-UI-AI-01 | **done** | Giả lập frame |
| T-UI-AI-FORM-01 | **done** | Confirm/Dismiss modals · Nearby ack |
| T-UI-MAP-01 | **done** | Leaflet CDN overlay · OSM/Esri · Fit |

## Build

| Gate | Command | Result |
|------|---------|--------|
| BE API | `dotnet build …/RMMS.Service.Api.csproj` | **PASS** 0 err |
| BE BFF | `dotnet build …/RMMS.Service.Bff.csproj` | **PASS** 0 err |
| MFE typecheck | `yarn typecheck` (AiVision) | **PASS** |
| MFE build | `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (local `.env` API localhost → bypass guard) |

## Key paths

### BE
- Entity: `api/shared/RMMS.Service.Persistence/Entities/AiVisionAssetCandidateEntity.cs`
- Service: `api/src/RMMS.Service.Api/Domains/AiVision/Services/AiVisionAssetCandidateService.cs`
- Controllers: `…/Controllers/AiVisionAssetCandidatesController.cs` · `AiVisionDetectAssetsController.cs`
- BFF: `bff/domains/ai-vision/…/AiVisionAssetCandidatesBffController.cs`
- Migration: `…/Migrations/20260812150000_Schema_RmmsAiVisionAssetCandidates.cs`

### FE (AiVision MFE — **không** Master)
- Page: `src/pages/AiAssetDetectListPage/`
- Services: `src/services/aiAssetDetect/`
- Route: `src/index.tsx` · `ai-vision/ai-asset-detect` **before** `:id`

## Gates applied

| Gate | Decision | Implement |
|------|----------|-----------|
| TZ | tz_required | from/to UTC day bounds · DetectedAt UTC |
| XCO | xco_get_only | GetById + confirm/dismiss load IgnoreQueryFilters + AllowedCompanyIds |
| SHARE | share_tenant | HasQueryFilter CompanyCode |

## Handoff → QA

| Field | Value |
|-------|-------|
| next | `/agent-qa` · roleOnly · `qa/scenarios.md` |
| smoke | Create→Edit→View→Copy→Delete Draft · Sim frame · Confirm→Asset · Dismiss · Map pins · search/filter/paging |
| route | `/ai-vision/ai-asset-detect` |
| APIs | `/ai-vision/asset-candidates` · `/detect-assets` |

## QA verdict (`task_c86da81c` · 2026-08-12T15:10:00.000Z)

| Field | Value |
|-------|-------|
| verdict | **PASS** (handoff Review) |
| artifact | `specs/ai-asset-detect/qa/scenarios.md` |
| build re-verify | FE typecheck+build · BE API+BFF **PASS** |
| open | **GAP-QA-ACT-DELETE-01** → **CLOSED** in Review `task_b86293c4` (toolbar+row Draft-only delete) |
| mfeStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |

## Review fix (`task_b86293c4` · 2026-08-12T15:20:00.000Z)

| Field | Value |
|-------|-------|
| gap | GAP-QA-ACT-DELETE-01 |
| change | `AiAssetDetectListPage` · `canDelete`/`onDelete` + row `showDelete`/`delete` · Draft-only |
| build | FE typecheck+build · BE API+BFF **PASS** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| generatedAt | 2026-08-12T15:00:00.000Z |
| versionGate | ok |
| taskId | `task_c4b4decb` |

---
<!-- Version meta: skillVersion=2026.08.10.2 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
