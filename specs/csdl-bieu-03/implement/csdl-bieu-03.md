# Implement — csdl-bieu-03 (CSDL Biểu 03 — Xuất Excel T-XLS-S03)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | **`edit_page`** · epic Wave 1 · **T-XLS-S03** |
| packKind | `list` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-yyyyMMdd-nnnn` |
| mfeStdRoute | `/so-ts/csdl-so-sach` · alias `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu3Entity` · **KEEP** · **no new migration** |
| taskId | `task_310ad88c` |
| tlTaskId | `task_28ddf784` |
| contentHash | `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` |
| headerFingerprint | `sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8` |
| writtenAt | `2026-09-18T02:50:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** |

## Decisions locked (no controlHint change)

- changeScope **edit_page** · typed CRUD 42-col **KEEP** · **cấm** reopen
- Q-XLS-SCOPE **filtered** · FILENAME `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · Import **DEFER P1**
- XLS-TUBE: **1 Excel row = 1 ống** (+ GPS) · keep two_rows CRUD
- golden: sheet **Biểu 3** · 42 cols · GPS×3 · **cấm** 12+8
- filter: **cấm** Xuất trên `LinErpListFilterBar` (GAP-FILTER-BAR-08)
- API prefix KEEP `api/v1/asset/csdl-records` · BFF binary proxy · **cấm ERP.***
- migration **none** @ XLS · gates tz_na / xco_get_only / share_tenant

## FE (Linm.Web.RMMS.Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlBieu03Page/CsdlBieu03Page.tsx` · `onExportExcel` + busy |
| Service | `csdlService.exportExcel` · `endpoint.exportExcel` (+ `tunnelClass`/`tubeCount` · filename fallback) |
| Toolbar | `fromCatalogToolbar` · catalogToolbar Xuất Excel · **cấm** Import P0 · **cấm** filter-bar export |
| Typed KEEP | Slideout · filters · `buildDynamicGridColumns` · schema editor |

## BE (Linm.RMMS.WebService)

| Item | Path / note |
|------|-------------|
| Excel | `CsdlCatalogExcelService.ExportAsync` · branch `road-tunnels` · sheet Biểu 3 · 42 headers |
| Controller | `CsdlCatalogRecordsController.Export` · QS `tunnelClass`/`tubeCount` |
| Mode | filter-all · pageSize cap 10_000 · ignore client page |
| Empty | headers-only OOXML · valid file |
| Filename | `Bieu03_HamDuongBo_{yyyyMMdd}.xls` |
| BFF | `CsdlCatalogRecordsBffController` binary pass-through **KEEP** (QS forward) |
| Migration | **none** |

## Task matrix status

| Task | Status |
|------|--------|
| T-CTX-XLS-01 · T-OUT-01 | **done** (Import UI ẩn) |
| T-XLS-BE-01 · T-XLS-BE-02 | **done** |
| T-XLS-BFF-01 | **done** (existing proxy) |
| T-XLS-FE-01 · T-XLS-FE-02 | **done** |
| T-XLS-QA-01 | pending `/agent-qa*` |
| T-REG-GRID/TUBE | verify-only · typed unchanged |

## Gaps

| id | Status |
|----|--------|
| GAP-BIEU03-XLS-01 (toolbar) | **closed** |
| GAP-BIEU03-XLS-02 (export binary) | **closed** |
| GAP-BIEU03-XLS-03 (import) | DEFER P1 |
| GAP-BIEU03-XLS-04 (filter-all) | **closed** |
| GAP-BIEU03-XLS-05 (tube-row) | **closed** |

## Build gate

- MFE `yarn build` → **PASS** (asset-size warnings only)
- BE `dotnet build Linm.RMMS.WebService.sln` → **PASS** 0 errors
- **Cấm** e2e / `start:std` ở Dev (queued QA)

## Debt

- getBlob may strip Content-Disposition · FE fallback filename OK
- Auth wire `asset.csdl-records.*` DEFER
- Import Excel P1
- GAP-CSDL-ORG-01 SearchInput org P2

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.09.05.03 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.17.3 |
| packKind | list |
| next | QA `/agent-qa*` · T-XLS-QA-01 |
