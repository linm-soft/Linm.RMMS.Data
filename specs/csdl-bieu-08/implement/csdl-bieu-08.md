# Implement — csdl-bieu-08 (edit_page · T-XLS-S08)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `traffic-safety` |
| IdCode | `AT-` |
| formNo | `08` |
| columns | `45` · groups `11` |
| route | `/csdl-bieu-08` · hub `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` · alias `/csdl-bieu-08` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_ed6e77ce` |
| tlTaskId | `task_21f9b30c` |
| contentHash | `sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| writtenAt | `2026-09-18T05:35:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (API + Asset BFF) |
| migration | **none** @ XLS (Schema_CsdlBieu8+11 KEEP) |

## Summary

Closed GAP-BIEU08-XLS-01…06: filtered OOXML export sheet **Biểu 8** · **one_sheet_45** · filename `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · typed import upsert shell+parent+1 child · catalogToolbar Xuất/Nhập on `CsdlBieu08Page`. Empty export = headers-only + toast. Filter QS includes `type`/`assetType`. **Cấm** Xuất trên `LinErpListFilterBar`.

## Tasks DoD

| id | status | notes |
|----|--------|-------|
| T-XLS-BE-01 | **done** | ExportAsync widen · 45 cols · sheet Biểu 8 · filename locked · filter-all |
| T-XLS-BE-02 | **done** | Import commit/preview · MapRow Biểu 8 typed+child · upsert by code · skipBridge |
| T-XLS-BE-03 | **done** | Controller QS + `assetType`/`type` · 422 thiếu resource |
| T-XLS-BFF-01 | **done** | QS + binary/multipart passthrough KEEP (Asset BFF) |
| T-XLS-FE-01 | **done** | toolbar Xuất/Nhập · blob · file · toast · **cấm** alert |
| T-XLS-FE-02 | **done** | filter QS (+type) → export · **0** Xuất on LinErpListFilterBar |
| T-* KEEP | **keep** | typed CRUD 45/11 · Slideout · leave · schema editor |
| T-XLS-QA-01 | **queued** | `/agent-qa*` only · **cấm** e2e @ Dev |

## APIs

| id | method | path |
|----|--------|------|
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=traffic-safety&…` (+assetType/type) |
| API-XLS-02 | POST | `/api/v1/asset/csdl-records/import` multipart · skipBridge · sheetMap Biểu 8 |
| API-XLS-03 | POST | `/api/v1/asset/csdl-records/import/preview` KEEP |

## Files touched

- BE: `CsdlCatalogExcelService.cs` · `CsdlCatalogRecordsController.cs`
- BFF: `CsdlCatalogRecordsBffController.cs` (KEEP — no code change needed)
- FE: `CsdlBieu08Page.tsx` · `csdlService.ts` · `endpoint.ts`

## Debt

- `apiClient.getBlob` strips Content-Disposition → FE fallback filename = PO lock pattern
- Auth RequirePermission DEFER (prior)
- True BIFF `.xls` read unsupported — OOXML (incl. mislabeled `.xls`) OK
- T-XLS-QA-01 queued E2E

## Gaps closed

- GAP-BIEU08-XLS-01 · 02 · 03 · 04 · 05 · 06

## Next

| Role | Need |
|------|------|
| **QA** | T-XLS-QA-01 · S-XLS-EXPORT/IMPORT · scenarios + handoff compact |
| Review | after QA |
