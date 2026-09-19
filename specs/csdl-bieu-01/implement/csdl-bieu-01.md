# Implement — csdl-bieu-01 (edit_page · T-XLS-S01)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `pavement-sections` |
| IdCode | `MD-` |
| route | `/csdl-bieu-01` · hub `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-01` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_742f5820` |
| contentHash | `sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| writtenAt | `2026-09-18T01:25:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (API + Asset BFF) |
| migration | **none** @ XLS (typed KEEP) |

## Summary

Closed GAP-BIEU01-XLS-EXP-01 / IMP-01 / UI-01: filtered OOXML export sheet **Biểu 1** · filename `Bieu01_PhanLoaiMatDuong_{yyyyMMdd}.xls` · typed import upsert · catalogToolbar Xuất/Nhập on `CsdlBieu01Page`. Empty export = headers-only + toast info.

## Tasks DoD

| id | status | notes |
|----|--------|-------|
| T-XLS-BE-01 | **done** | ExportAsync · filter · typed cols · OOXML · filename locked |
| T-XLS-BE-02 | **done** | Import commit upsert shell+typed · skipBridge · sheet Biểu 1 |
| T-XLS-BE-03 | **done** | Controller QS search/province/status/roadCode/kmFrom/kmTo (+from/toDate) |
| T-XLS-BFF-01 | **done** | QS + binary/multipart passthrough · ms-excel detect |
| T-XLS-FE-01 | **done** | toolbar Xuất/Nhập · blob · file · toast · **cấm** alert |
| T-XLS-FE-02 | **done** | filter QS → export · **0** Xuất on LinErpListFilterBar |
| T-* KEEP | **keep** | typed CRUD / grid / filter / form / leave |
| T-XLS-QA-01 | **done** | `/agent-qa` `task_795fd15b` · E2E PASS |

## APIs

| id | method | path |
|----|--------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=pavement-sections&…` |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import?resource=…` (multipart · skipBridge) |
| API-XLS-03 | POST | `/api/v1/asset/csdl-records/import/preview` KEEP |

## Files touched

- BE: `CsdlCatalogExcelService.cs` · `CsdlCatalogRecordsController.cs`
- BFF: `CsdlCatalogRecordsBffController.cs`
- FE: `CsdlBieu01Page.tsx` · `buildRmmsGenericToolbar.tsx` · `csdlService.ts` · `endpoint.ts`

## Debt

- `apiClient.getBlob` strips Content-Disposition → FE fallback filename = PO lock pattern
- Auth RequirePermission DEFER (prior)
- True BIFF `.xls` read unsupported — OOXML (incl. mislabeled `.xls`) OK
- GAP-QA-E2E-PW-01 P2 prior

## Gaps closed

- GAP-BIEU01-XLS-EXP-01 · IMP-01 · UI-01

## QA verdict

| Field | Value |
|-------|-------|
| taskId | `task_795fd15b` |
| verdict | **PASS** |
| e2e | S0/S1/QA-20 + S-XLS-EXPORT/IMPORT · `qa/scenarios.md` |
| next | `/agent-review` · **cấm** phase=done @ QA |
