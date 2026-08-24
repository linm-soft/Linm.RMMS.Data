# Implement — its-anpr-overload

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| status | `done` |
| skillVersion | `2026.08.24.01` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.24.01` |
| versionGate | `ok` |
| mfeStdRoute | `/its-anpr-overload` |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |
| taskId | `task_524f0c3e` (QA-fix) · `task_9afb76f4` (initial) |
| updatedAt | `2026-08-25T01:45:00.000Z` |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** |
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| BE `dotnet build Linm.RMMS.WebService.sln` | **PASS** 0 errors (no BE changes) |
| local-deploy `@linm/rmms-ai-vision` | **PASS** `1.2.0-dev.39` · `_manifest.json` synced |

## FE paths

- `src/demo/itsAnprStore.ts`
- `src/services/itsAnpr/*`
- `src/pages/ItsAnprOverloadListPage/*`
- `src/index.tsx` routes `/its-anpr-overload` + `/ai-vision/its-anpr-overload`
- `src/dev/devRoutes.ts`
- `src/hooks/useCatalogUiSchema.ts` · `src/utils/bootstrapCatalogUiSchema.ts`

## BE paths

- Entity `AiVisionAnprEventEntity` · table `rmms_ai_vision_anpr_events`
- DTOs `AnprEventDtos.cs`
- `AiVisionAnprEventsController` · Service · BFF
- Migration `20260817120000_Schema_RmmsAiVisionAnprEvents` (verified exists)
- `CatalogUiSchemaRegistry.ItsAnprOverload` + `CatalogUiSchemaSeed.ItsAnprOverload()`
- DOMAIN-MAP slug `its-anpr-overload`

## Tasks (Dev role — task_9afb76f4)

| id | status |
|----|--------|
| T-BE-UI-SCHEMA-01 | done |
| T-UI-CONFIG-01 | done |
| T-UI-LIST-01 | done |
| T-UI-UX-01 | done |
| T-UI-FORM-01 | done |
| T-UI-ACT-01 | done |
| T-UI-LKP-01 | done |
| T-UI-FIELD-01 | done |
| T-UI-PROD-01 | done |
| T-UI-LEAVE-01 | done |
| T-UI-AI-01 | done |
| T-UI-AI-FORM-01 | done |
| T-BE-CRUD-01 | done |
| T-BE-INIT-01 | done |
| T-BE-LOOKUP-01 | done |
| T-BE-CONFIRM-STUB | done |
| T-MIG-01 | done |
| T-BFF-01 | done |
| T-PERM-01 | done |

## retry.ssot_rereview (Dev — 2026-08-24)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× LinPageLayout — cấm nested CatalogListShell | **PASS** |
| 2 | LinCatalogDataGrid + `buildDynamicGridColumns` + kéo cột default ON | **PASS** |
| 3 | Footer LinCatalogListPagination — cấm footerPagination / pageSizeBar | **PASS** |
| 4 | Flex root + useServerPagedListLoading + LAYOUT-06 | **PASS** |
| 5 | Toolbar catalog: refresh · history · config fa-cog · domain actions | **PASS** |
| 6 | Filter Zone B: SearchInput biển số + Dropdown camera/status | **PASS** |
| 7 | Zone F Config FULL LinCatalogUiSchemaEditorModal | **PASS** |
| 8 | History stub OK | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form slideout footer-only + LeaveConfirm + Confirm/Dismiss | **PASS** |
| 11 | Dropdown options từ init-data only | **PASS** |
| 12 | S-DETECT panel ①②③ | **PASS** |
| 13 | No AI badge header | **PASS** |
| 14 | Cấm filterMaxWidthPx on LinPageLayout | **PASS** |
| 15 | BE CatalogUiSchema seed `its-anpr-overload` | **PASS** |

**Gaps closed:** GAP-SA-ANPR-UI-SCHEMA-01 · GAP-TL-CONFIG-01 · GAP-TL-UX-01

## QA-fix implement (Dev — task_524f0c3e · 2026-08-25)

| # | Gap | Fix |
|---|-----|-----|
| 1 | GAP-QA-FILTER-01 | `LinErpListFilterBar` + `hideDateRange` thay `ErpListHeaderFilters` · Áp dụng/Xóa lọc |
| 2 | GAP-QA-DEMO-01 | Confirm modal bỏ «stub» · message user-friendly |
| 3 | GAP-DEV-CONFIG-LEFTOVER-01 | Xóa dead `.configHint*` CSS |
| 4 | GAP-QA-PAGES-01 | `deploy.ps1` → local-deploy-page `1.2.0-dev.39` |

## retry.ssot_rereview (QA-fix — 2026-08-25)

| # | Check | Result |
|---|-------|--------|
| 1 | 1× LinPageLayout — cấm nested CatalogListShell | **PASS** |
| 2 | LinCatalogDataGrid + `buildDynamicGridColumns` + kéo cột default ON | **PASS** |
| 3 | Footer LinCatalogListPagination — cấm footerPagination / pageSizeBar | **PASS** |
| 4 | Flex root + useServerPagedListLoading + LAYOUT-06 | **PASS** |
| 5 | Toolbar catalog: refresh · history · config fa-cog · domain actions | **PASS** |
| 6 | Filter Zone B: `LinErpListFilterBar` search + camera/status · Áp dụng/Xóa lọc | **PASS** |
| 7 | Zone F Config FULL LinCatalogUiSchemaEditorModal | **PASS** |
| 8 | History stub OK | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form slideout footer-only + LeaveConfirm + Confirm/Dismiss | **PASS** |
| 11 | Dropdown options từ init-data only | **PASS** |
| 12 | S-DETECT panel ①②③ | **PASS** |
| 13 | No AI badge header | **PASS** |
| 14 | Cấm filterMaxWidthPx on LinPageLayout | **PASS** |
| 15 | BE CatalogUiSchema seed `its-anpr-overload` | **PASS** |
| 16 | Confirm modal — cấm «stub» trên UI | **PASS** |
| 17 | Route `/its-anpr-overload` + `ai-its/toc-do-qt` · testid `rmms-its-anpr-overload-list-page` | **PASS** |

**Gaps closed (QA-fix):** GAP-QA-FILTER-01 · GAP-QA-DEMO-01 · GAP-DEV-CONFIG-LEFTOVER-01 · GAP-QA-PAGES-01 (pre re-QA)

## Version meta

skillId=agent-dev · skillVersion=2026.08.24.01 · schemaVersion=4 · workflowVersion=2026.08.24.01 · versionGate=ok

---
<!-- Version meta: skillVersion=2026.08.24.01 · schemaVersion=4 · workflowVersion=2026.08.24.01 · versionGate=ok -->
