# Implement — csdl-bieu-09 (Dev)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB · T-XLS-S09 |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** KEEP |
| IdCode | `MK-` KEEP |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-09` |
| hub | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| peerSoTs | **none** |
| taskId | `task_6056af24` |
| priorDev | `task_b449f5f6` (typed CRUD done) |
| contentHashPrior | `sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01` |
| writtenAt | `2026-09-18T06:00:00.000Z` |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` — **cấm** e2e @ Dev) |
| migration | **none mới** · Schema_CsdlBieu9 KEEP |

## Delta (edit_page T-XLS-S09)

| id | Result |
|----|--------|
| T-XLS-BE-01 | `ExportAsync` · resource `boundary-markers` · sheet **Biểu 9** · **17** cols · filename `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` · OOXML |
| T-XLS-BE-02 | Import Commit upsert by `code` · validate `markerKind` RoadLimit/GPMB · MapRow typed Length/Width/Area/Qty/CompletedYear |
| T-XLS-BE-03 | Controller export QS + `markerKind` · filter-all ignore page · respect_filter |
| T-XLS-BFF-01 | BFF proxy KEEP · QS/multipart as-is · binary FileContentResult |
| T-XLS-FE-01 | catalogToolbar **Xuất/Nhập Excel** · toast real · hidden file input |
| T-XLS-FE-02 | export QS = list filters + `markerKind` · **cấm** Xuất trên `LinErpListFilterBar` |
| T-XLS-QA-01 | queued QA |

## Keep (typed prior — **cấm** reopen)

T-UI-* · T-BE-CRUD/UISCHEMA · Slideout 17/2 · LeaveConfirm · `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns` · Schema_CsdlBieu9

## APIs

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=boundary-markers&…` | binary · 1 sheet 17 · filter QS |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import` | multipart · sheetMap `Biểu 9` → boundary-markers |
| CRUD | — | `…/csdl-records?resource=boundary-markers` | KEEP |
| BFF | — | `web-bff/api/v1/asset/csdl-records/**` | FE BASE `/asset/csdl-records` |

### Export columns (17)

`code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes`

## FE files

- `src/pages/CsdlBieu09Page/CsdlBieu09Page.tsx` — toolbar export/import + filter QS
- `src/services/csdlSoSach/endpoint.ts` — `markerKind` QS + filename fallback Biểu 09
- `src/services/csdlSoSach/csdlService.ts` — type `markerKind`

## BE files

- `CsdlCatalogExcelService.cs` — Bieu9 headers/export/import/GuessResource/Validate
- `CsdlCatalogRecordsController.cs` — export bind `markerKind`
- BFF — no code change (proxy already)

## Build gate

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** (webpack size warnings only) |
| MFE `yarn typecheck` | **PASS** |
| BE `dotnet build` Linm.RMMS.WebService.sln | **PASS** 0 err · 1 warn Program.cs CS0105 prior |
| e2e / start:std | **skipped** (QA queue) |

## Gaps closed

GAP-BIEU09-XLS-01…06 · GAP-FILTER-BAR-08 (no filter-bar export)

## Debt

- Auth `RequirePermission` wire DEFER (T-PERM stub)
- Content-Disposition filename prefer over FE fallback (peer same)
- T-XLS-QA-01 @ `/agent-qa*`

## Cấm kept

ERP.* · invent API · filter-bar export · 12+8 · 2-sheet invent · reopen typed · toast stub=done · e2e @ Dev · migration mới
