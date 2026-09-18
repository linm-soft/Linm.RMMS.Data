# Implement — csdl-bieu-02 (edit_page · T-XLS-S02)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `bridges` |
| columns | `48` |
| IdCode | `BR-` |
| route | hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-02` · `route_a` keep |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_a201197f` |
| tlTaskId | `task_b5696c4c` |
| contentHash | `sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| writtenAt | `2026-09-18T02:05:52.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (API + Asset BFF) |
| migration | **none** @ XLS (typed KEEP) |

## Summary

Closed GAP-BIEU02-XLS-01/02/04: filtered OOXML export sheet **Biểu 2** · 48 cols · GPS×3 · filename `Bieu02_ThongKeCau_{yyyyMMdd}.xls` · filter-all · catalogToolbar Xuất on `CsdlBieu02Page` · Import **DEFER P1 ẩn**. Empty export = headers-only + toast. Typed CRUD 48 KEEP · **cấm** reopen / filter-bar export / ERP.*.

## Tasks DoD

| id | status | notes |
|----|--------|-------|
| T-XLS-BE-01 | **done** | ExportAsync bridges · 48-col · sheet Biểu 2 · `.xls` · filter-all |
| T-XLS-BE-02 | **done** | Controller QS + `beamType` · 422 thiếu resource |
| T-XLS-IMP | **OUT** | Import DEFER P1 · UI ẩn · GAP-BIEU02-XLS-03 deferred |
| T-XLS-BFF-01 | **done** | QS + binary passthrough KEEP (ms-excel / spreadsheet) |
| T-XLS-FE-01 | **done** | toolbar Xuất · blob · toast · Import ẩn |
| T-XLS-FE-02 | **done** | filter QS incl. beamType · **0** Xuất on LinErpListFilterBar |
| T-* KEEP | **keep** | typed CRUD / grid / filter / form / leave |
| T-XLS-QA-01 | **pending** | queued `/agent-qa*` only — **cấm** e2e @ Dev |

## APIs

| id | method | path |
|----|--------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=bridges&…` |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import` — **DEFER P1** |
| BFF | GET | `/web-bff/api/v1/asset/csdl-records/export` · binary proxy |

Export QS (= list): `resource` · `search` · `province` · `status` · `roadCode` · `kmFrom`/`kmTo` · `fromDate`/`toDate` · `beamType` · **ignore page/pageSize**.

## Files touched

- BE: `CsdlCatalogExcelService.cs` · `CsdlCatalogRecordsController.cs`
- BFF: `CsdlCatalogRecordsBffController.cs` (verified KEEP — no code change)
- FE: `CsdlBieu02Page.tsx` · `csdlService.ts` · `endpoint.ts`

## Debt

- `apiClient.getBlob` strips Content-Disposition → FE fallback filename = SA lock pattern
- Auth RequirePermission DEFER (prior)
- Import P1 · GAP-BIEU02-XLS-03
- residual P2: GAP-QA-E2E-PW-01 · org

## Gaps closed

- GAP-BIEU02-XLS-01 · XLS-02 · XLS-04
- GAP-BIEU02-XLS-03 tracked DEFER

## Next

| Role | Need |
|------|------|
| QA | T-XLS-QA-01 · `/agent-qa*` · S-XLS-EXPORT |
| Review | after QA |
