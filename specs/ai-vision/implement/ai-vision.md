# Implement — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| status | `done` |
| taskId | `task_d52ac8ac` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| mfeStdRoute | `/ai-vision` |
| mfeStdUrl | `http://localhost:9303/ai-vision` |
| updatedAt | `2026-08-23T16:52:00.000Z` |

## Edit delta (`task_d52ac8ac`)

| gap | fix |
|-----|-----|
| GAP-L3-REAL-DATA | `specs/_data-analy/features/ai-vision-real-data.md` |
| GAP-FILTER-SECTION | `AiVisionListPage` Dropdown `sectionId` + query param |
| GAP-TOOLBAR-DETECT | `beforeToolbar` P1/P2 stub → `aiVisionService.detect` |
| GAP-STATUS-LABEL | `statusLabel()` in grid column |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · tree_master? n/a · form  
gaps fixed prior turn: **GAP-P2-LAYOUT-06** AppLayout/StandaloneShell + page flex · default pageSize 50 · badges → `beforeToolbar`  
resume `task_b46e4425`: live re-audit — **no new gaps** · then: **fix_all**  
resume `task_bdc9d324`: live re-audit — **no new gaps** · STATUS PO drift corrected · verify re-run PASS  
resume `task_bc9cfb1a`: live re-audit — **no new gaps** · packKind→`ai` · STATUS sync · VERIFY PASS · queue completed

| checklist | result | notes |
|-----------|--------|-------|
| tl-grid-ssot | pass | 1× LinPageLayout · no nested CatalogListShell |
| footer | pass | `LinCatalogListPagination` via `footer` — no `footerPagination` |
| pageSizeBar | pass | none in grid body |
| flex+skeleton | pass | `useServerPagedListLoading` · skeletonRows=8 |
| LAYOUT-06 | pass | `height: calc(var(--app-height…))` · shell definite height · `:has([data-catalog-list-page])` |
| toolbar | pass | refresh · history · config · +Thêm · row actions |
| SearchTextInput | pass | filter Zone B |
| LinCatalogDataGrid | pass | columnDefs · paginateClient=false (server page) · pageSize default 50 |
| tree_master | n/a | not tree |
| form | pass | C/E/V/Copy + Critical→incident |
| gaps | none blocking | schema editor = local hint modal (IAM later) |

## Paths

| Layer | Path |
|-------|------|
| List | `Linm.Web.RMMS.AiVision/src/pages/AiVisionListPage/` |
| Form | `.../AiVisionFormPage/` |
| Layout | `src/components/layout/AppLayout/` · `src/standalone/StandaloneShell.module.css` |
| Perms | `src/hooks/useAiVisionPermissions.ts` |
| Client | `src/services/aiVision/*` |
| Entity/API | `Linm.RMMS.WebService` Domains/AiVision |
| BFF | `bff/domains/ai-vision/.../AiVisionDetectionsBffController.cs` |
| Migration | `20260808144715_Schema_RmmsSystemSettings.cs` creates `rmms_ai_vision_detections` (snapshot + entity wired) |

## Verify

| Gate | Result | When |
|------|--------|------|
| FE `yarn typecheck` | PASS | `task_bc9cfb1a` |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS (size warnings only) | `task_bc9cfb1a` |
| BE API `dotnet build` Release | PASS 0 errors | `task_bc9cfb1a` |
| BE BFF `dotnet build` Release | PASS 0 errors | `task_bc9cfb1a` |

## Task status

| id | status |
|----|--------|
| T-UI-LIST | done |
| T-UI-LIST-02 | done |
| T-UI-FORM | done |
| T-BE-01 | done |
| T-BE-02 | done |
| T-BE-03 | done |

## Unit test nợ

- API/BFF integration tests — pending (localStorage fallback covers FE smoke)

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
