# Implement — csdl-bieu-11 (CSDL Biểu 11 — Hệ thống chiếu sáng)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` · `T-XLS-S11` |
| packKind | `list` |
| resource | `lighting-systems` |
| formNo | `11` |
| IdCode | `LT-yyyyMMdd-nnnn` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| alias | `/csdl-bieu-11` |
| hub | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| peer | `/so-ts-lighting` toolbar deep-link · ≠ merge |
| taskId | `task_e7125d74` |
| priorTyped | `task_049ab5a3` |
| tlTaskId | `task_c9c5462f` |
| contentHashPrior | `sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| buildMfe | **PASS** (`yarn build`) |
| buildBe | **PASS** (`dotnet build` Api + Asset.Bff) |
| writtenAt | `2026-09-18T07:10:00.000Z` |

## Delta delivered (edit_page T-XLS-S11)

| Area | Done |
|------|------|
| Export | GET `…/csdl-records/export?resource=lighting-systems` · sheet **Biểu 11** · **24 cols** · LED+NLMT cùng hàng · `Bieu11_ChieuSang_{yyyyMMdd}.xls` |
| Import | POST `…/import` multipart · sheetMap Biểu 11 · upsert by code · import_now · validate `gridStatus` |
| Filter QS | list filters + `side` + `gridStatus` · ignore page · filter-all cap |
| Toolbar | catalogToolbar Xuất/Nhập · **cấm** LinErpListFilterBar export |
| Typed keep | Schema_CsdlBieu11 · 24/2 Slideout · **cấm** reopen |
| Migration | **none** @ XLS |

## FE

- `CsdlBieu11Page` — `onExportExcel` / `onImportExcel` via `fromCatalogToolbar`
- `csdlService.exportExcel` + `endpoint.exportExcel` — `gridStatus` QS + filename fallback `Bieu11_ChieuSang_*`
- Hidden file input `rmms-csdl-bieu-11-list-import-file`
- Typed CRUD / Slideout / schema-config **unchanged**

## BE

- `CsdlCatalogExcelService` — Bieu11ExportHeaders (24) · ExportAsync branch · MapRowToCreate/Validate/ToUpdate · upsert lighting-systems
- `CsdlCatalogRecordsController.Export` — `[FromQuery] gridStatus`
- Interface `ICsdlCatalogExcelService.ExportAsync` + `gridStatus`
- Entity/migration **KEEP** Schema_CsdlBieu11

## BFF

- `CsdlCatalogRecordsBffController` — proxy QS (incl. gridStatus) + multipart import + binary export · **no** business remap

## APIs

| Method | Path | Notes |
|--------|------|-------|
| GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` | `resource=lighting-systems` · KEEP |
| GET | `…/export?resource=lighting-systems` | binary OOXML · filtered · +gridStatus/side |
| POST | `…/import` · `…/import/preview` | multipart · sheet Biểu 11 |
| BFF | `/web-bff/api/v1/asset/csdl-records/**` | proxy only |

## Task matrix (Dev XLS)

| id | status |
|----|--------|
| T-XLS-BE-01..03 | **done** |
| T-XLS-BFF-01 | **done** (proxy keep) |
| T-XLS-FE-01/02 | **done** |
| T-XLS-QA-01 | queued `/agent-qa*` |
| Typed T-* prior | KEEP done |

## Gates

list-form quality · GAP-FILTER-BAR-08 · GAP-BIEU11-XLS-01…07 · yarn build PASS · dotnet build PASS · **cấm** e2e @ Dev

## Debt

- Auth wire DEFER · migrate apply env (prior) · GAP-QA-E2E-PW-01 · org SearchInput P2

## Next

- QA: scenarios + e2e S-XLS · review
