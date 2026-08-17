# Implement — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| this role | `dev` · `/agent-dev` |
| status | `completed` |
| changeScope | `edit_page` · GAP-TL-ROUTE-01 |
| packKind | `list` |
| taskId | `task_96b1864b` |
| autoApprove | ON |
| updatedAt | `2026-08-16T01:35:00.000Z` |
| versionGate | rechecked |

## retry.ssot_rereview (HARD — after Write)

Live: `PavementSectionPage.tsx` · `PavementSectionFormPage.tsx` · `index.tsx` · `useCatalogUiSchema` · `buildDynamicGridColumns`. Audit `2026-08-16T01:35:00.000Z`.

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | 1× `LinPageLayout` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `tableConfig` + `catalogListTableConfigFromSchema` | **PASS** |
| 3 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` / raw table | footer only `LinCatalogListPagination` | **PASS** |
| 4 | Flex + skeleton + LAYOUT-06 | `data-catalog-list-page` · `skeletonRows={8}` · `useServerPagedListLoading` | **PASS** |
| 5 | Toolbar catalog: refresh · history stub · config · create · delete (perm) · **cấm** Thêm mới trên A | `catalogToolbar` | **PASS** |
| 6 | Filter Zone B: SearchText + SearchInput tỉnh/status · Text road · Number kmFrom/kmTo · date range | present · GET query khớp SA | **PASS** |
| 7 | Grid schema-driven — cấm leftover `const columns` / `LinCatalogDataColumn[]` sau đổi import | `columns={buildDynamicGridColumns(schema, uiColumns)}` | **PASS** |
| 8 | Zone F `LinCatalogUiSchemaEditorModal` title schema · kind=`pavement-sections` — **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột | present · `CATALOG_KIND` | **PASS** |
| 9 | list_parity Kind B | A–D + F | **PASS** |
| 10 | tree_master? | n/a | n/a |
| 11 | Form full-page C/E/V/Copy — cấm Resource / Slideout | `PavementSectionFormPage` · `CatalogFormShell` | **PASS** |
| 12 | View = `<dl>` — cấm Input `readOnly`/disabled xám | `data-testid=…-view-dl` | **PASS** |
| 13 | Lookup SearchInput master FE | list+form province/status/structure/roadClass/layer | **PASS** |
| 14 | PCI 0–100 · Layer default `mat-duong` · measuredAt Date | form validate + `toMeasuredAtIso` UTC | **PASS** |
| 15 | Dedicated routes `/asset/pavement-section/:id/edit` · `/:id/copy` | `index.tsx` + pathname mode + list/form navigate | **PASS** (GAP-TL-ROUTE-01 **CLOSED**) |
| 16 | Leave-confirm dirty | `window.confirm` khi dirty | **PASS** |
| 17 | History stub | `LinCatalogHistoryModal` | **PASS** (OUT API) |

**implement.list_parity.layout** = `flex-root + LAYOUT-06`.  
Query alias `?mode=` / `copyFrom` **giữ** cho deep-link cũ — SSOT navigate = path `/edit` `/copy`.

## Task results (this role)

| id | Result |
|----|--------|
| T-CTX-01 | **done** — context routes + GAP-TL-ROUTE-01 closed · STATUS backend Asset |
| T-PERM-01 | **verify** — FE `asset.pavement-sections.*` · BE `[RequirePermission]` OUT |
| T-BE-CRUD-01 | **verify / no-op** — API-01..05 live · **không** regen PCI mig |
| T-BE-TZ-01 | **verify** — list `fromDate`/`toDate` · form `toMeasuredAtIso` `T00:00:00.000Z` |
| T-BE-UISCHEMA-01 | **verify** — seed `pavement-sections` |
| T-BFF-01 | **verify** — Asset BFF proxy CRUD · ui-schema không clone |
| T-UI-LIST-01 | **verify / no-op** — A–D không rewrite |
| T-UI-CFG-01 | **verify** — `LinCatalogUiSchemaEditorModal` |
| T-UI-FORM-01 | **done** — GAP-TL-ROUTE-01 dedicated `/edit` `/copy` |
| T-UI-LEAVE-01 | **verify** — dirty confirm |
| T-UI-ACT-01 | **done** — row/toolbar navigate dedicated paths |
| T-UI-LKP-01 | **verify** — FE constants |
| T-UI-FIELD-01 | **verify** — DTO ↔ control-map |
| T-UI-PROD-01 | **verify** — no Resource/Slideout/View=readOnly |
| T-UI-UX-01 | **verify** — Lin* |
| T-UI-HIST-01 | **verify** — stub keep |

## Delta this turn

| Layer | Change |
|-------|--------|
| MFE routes | `asset/pavement-section/:id/edit` · `/:id/copy` (parity Asset) |
| Form mode | pathname SSOT + `?mode=` alias |
| List nav | View `/:id` · Edit `/:id/edit` · Copy `/:id/copy` |
| BE | **no write** — verify only (CRUD/PCI/schema/TZ/XCO/SHARE already ship) |
| ERP.* | **none** |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/v1/asset/pavement-sections` |
| Ui-schema | `api/v1/integration/catalogs/pavement-sections/ui-schema` |
| BFF | `web-bff/api/v1/asset/pavement-sections` |
| MFE list | `pages/PavementSectionPage/PavementSectionPage.tsx` |
| MFE form | `pages/PavementSectionPage/PavementSectionFormPage.tsx` |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |

## Build

```
yarn build → PASS (webpack 5.109.2 compiled with 3 size warnings)
dotnet build RMMS.Service.Api -c Release → PASS (0 Error(s))
dotnet build LINM.RMMS.Asset.Bff -c Release → PASS (0 Error(s))
```

## Debt

| ID | Note |
|----|------|
| SD-AUTH | `[RequirePermission]` TODO BE |
| Excel import/export | OUT pack stub |
| History API | Stub client empty |

## Handoff → QA (`/agent-qa`)

| Field | Value |
|-------|-------|
| Next | QA **pending** chain · autoApprove ON · roleOnly=`qa` |
| Delta | dedicated edit/copy routes |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-16T01:35:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| teamLeadSkillVersion | 2026.08.09.02 |
| saSkillVersion | 2026.08.15.15 |
| designSkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| contentHashPriorDataAnaly | sha256:pavement-section-delta-pci-20260816 |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.15.25 · versionGate=rechecked -->
