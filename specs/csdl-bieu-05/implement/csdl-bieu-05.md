# Implement — csdl-bieu-05

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Xuất Excel (T-XLS-S05) |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | **`edit_page`** · Wave 1 · **T-XLS-S05** |
| packKind | `list` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-yyyyMMdd-nnnn` |
| route | **KEEP** `/csdl-bieu-05` + hub `?resource=ditches` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ditches` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_e8abedcb` |
| tlTaskId | `task_1a82385e` |
| contentHash | `sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| writtenAt | `2026-09-18T04:00:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** (API + Asset.Bff) |
| migration | **none** @ XLS |
| import | **DEFER P1** · UI ẩn |

## Summary

Delta Xuất Excel trên typed Biểu 05 (KEEP CRUD 18-col · ditchKind/shape/range). Toolbar `catalogToolbar` +Xuất Excel · filter QS (search/province/status/roadCode/kmFrom/kmTo/ditchKind/fromDate/toDate) · filter-all · filename `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · sheet «Biểu 5» · **cấm** merge `so-ts-ditch` · **cấm** Xuất trên `LinErpListFilterBar`. BFF binary proxy KEEP. Import P1 ẩn.

## Tasks DoD (T-XLS-*)

| id | status | notes |
|----|--------|-------|
| T-CTX-XLS-01 | **done** | STATUS + implement sync |
| T-OUT-01 | **done** | Import UI ẩn · DEFER P1 |
| T-XLS-BE-01 | **done** | `ExportAsync` branch `ditches` · OOXML · sheet Biểu 5 |
| T-XLS-BE-02 | **done** | 18 headers control-hint · filter-all · `ditchKind` QS |
| T-XLS-BFF-01 | **done** | BFF `GET …/export` binary proxy KEEP (QS forward) |
| T-XLS-FE-01 | **done** | `onExportExcel` on `fromCatalogToolbar` |
| T-XLS-FE-02 | **done** | download blob + toast · empty=headers-only |
| T-REG-GRID | **done** | typed list/form KEEP · no column reopen |
| T-REG-PEER | **done** | peer deep-link only · no sheet merge |
| T-XLS-QA-01 | pending | queued `/agent-qa*` |

## FE paths

- `src/pages/CsdlBieu05Page/CsdlBieu05Page.tsx` — `handleExportExcel` · toolbar export · `xlsBusy`
- `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` — `exportExcel` + `ditchKind` + fallback `Bieu05_RanhCacLoai_*.xls`

## BE paths

- `CsdlCatalogExcelService.cs` — `Bieu5ExportHeaders` · ditches export · `ditchKind` param
- `CsdlCatalogRecordsController.cs` — `[FromQuery] ditchKind`
- BFF `CsdlCatalogRecordsBffController` — unchanged proxy (QS passthrough)

## APIs

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | — | `…/csdl-records?resource=ditches` | CRUD **KEEP** |
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=ditches&…` | binary · filter-all · ignore page |
| API-XLS-02 | POST | `…/import` | **DEFER P1** |

Filename: `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · Content-Type OOXML spreadsheet · 18 cols:
`code|roadCode|roadName|province|kmFrom|kmTo|side|ditchKind|structure|shape|apertureSize|lengthM|drainageCapacity|builtYear|status|manageUnit|ownerUnit|notes`

## Debt / handoff QA

- GAP-QA-E2E-PW-01 P2 · prior
- T-PERM-01 Auth RequirePermission DEFER
- GAP-CSDL-ORG-01 P2
- Import Excel P1
- AC-XLS-01..09 · AC-GRID-01..05 regression → QA

## Build

- MFE `yarn build` → **PASS** (webpack warnings size only)
- BE `dotnet build` RMMS.Service.Api → **PASS**
- BE `dotnet build` LINM.RMMS.Asset.Bff → **PASS**
