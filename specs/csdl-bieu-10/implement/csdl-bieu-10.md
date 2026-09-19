# Implement — csdl-bieu-10 (CSDL Biểu 10 — Kè, tường chắn)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
| role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` · `T-XLS-S10` |
| packKind | `list` |
| resource | `retaining-walls` |
| formNo | `10` |
| IdCode | `KE-yyyyMMdd-nnnn` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| alias | `/csdl-bieu-10` |
| hub | `/so-ts/csdl-so-sach?resource=retaining-walls` |
| peer | `/so-ts-retaining` toolbar deep-link · ≠ merge |
| taskId | `task_4dfcfa0a` |
| priorTyped | `task_db0c0344` |
| contentHashPrior | `sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302` |
| buildMfe | **PASS** (`yarn build`) |
| buildBe | **PASS** (`dotnet build` Api + Asset.Bff) |
| writtenAt | `2026-09-18T06:35:00.000Z` |

## Delta delivered (edit_page T-XLS-S10)

| Area | Done |
|------|------|
| Export | GET `…/csdl-records/export?resource=retaining-walls` · sheet **Biểu 10** · **21 cols** · crest* cùng hàng · `Bieu10_KeTuongChan_{yyyyMMdd}.xls` |
| Import | POST `…/import` multipart · sheetMap Biểu 10 · upsert by code · import_now |
| Filter QS | list filters + `side` + `wallKind` · ignore page · filter-all cap |
| height_alias | Excel/UI `heightM` ↔ entity `WidthM` · Create.HeightM → WidthM · **cấm** BFF remap |
| Toolbar | catalogToolbar Xuất/Nhập · **cấm** LinErpListFilterBar export |
| Typed keep | Schema_CsdlBieu10 · 21/2 Slideout · **cấm** reopen |
| Migration | **none** @ XLS |

## FE

- `CsdlBieu10Page` — `onExportExcel` / `onImportExcel` via `fromCatalogToolbar`
- `csdlService.exportExcel` + `endpoint.exportExcel` — `wallKind` QS + filename fallback
- Hidden file input `rmms-csdl-bieu-10-list-import-file`
- Typed CRUD / Slideout / schema-config **unchanged**

## BE

- `CsdlCatalogExcelService` — Bieu10ExportHeaders (21) · ExportAsync branch · MapRowToCreate/Validate/ToUpdate · upsert retaining-walls
- `CsdlCatalogRecordsController.Export` — `[FromQuery] wallKind`
- Interface `ICsdlCatalogExcelService.ExportAsync` + `wallKind`
- Entity/migration **KEEP** Schema_CsdlBieu10

## BFF

- `CsdlCatalogRecordsBffController` — proxy QS (incl. wallKind) + multipart import + binary export · **no** height remap

## APIs

| Method | Path | Notes |
|--------|------|-------|
| GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` | `resource=retaining-walls` · KEEP |
| GET | `…/export?resource=retaining-walls` | binary OOXML · filtered · +wallKind |
| POST | `…/import` · `…/import/preview` | multipart · sheet Biểu 10 |
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

list-form quality · GAP-FILTER-BAR-08 · GAP-BIEU10-XLS-01…07 · yarn build PASS · dotnet build PASS · **cấm** e2e @ Dev

## Debt

- Auth wire DEFER · migrate apply env (prior) · GAP-QA-E2E-PW-01 · org SearchInput P2

## Next

- QA: scenarios + e2e S-XLS · review
