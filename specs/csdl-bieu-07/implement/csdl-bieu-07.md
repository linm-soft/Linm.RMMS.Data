# Implement — csdl-bieu-07

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Xuất Excel (T-XLS-S07) |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | **`edit_page`** · Wave 1 · **T-XLS-S07** |
| packKind | `list` |
| resource | `shoulders-fences` |
| formNo | `07` |
| columns | `20` |
| IdCode | `LE-` |
| route | **KEEP** `/csdl-bieu-07` + hub `?resource=shoulders-fences` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_5db71cfd` |
| tlTaskId | `task_f95a30db` |
| contentHash | `sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| writtenAt | `2026-09-18T04:50:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** (API + Asset.Bff) |
| migration | **none** @ XLS |
| import | **DEFER P1** · UI ẩn |

## Summary

Delta Xuất Excel trên typed Biểu 07 (KEEP CRUD 20-col · 3 khối lề/taluy/HR · FenceLengthM↔km · SlopeClearingM). Toolbar `catalogToolbar` +Xuất Excel · filter QS (search/province/status/side/fenceKind/roadCode/kmFrom/kmTo/fromDate/toDate) · filter-all · filename `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · sheet «Biểu 7» · **cấm** merge `SHOULDER` · **cấm** Xuất trên `LinErpListFilterBar`. BFF binary proxy KEEP. Import P1 ẩn. `AllowedPageSizes` +`10000` để export filter-all cap thật.

## Tasks DoD (T-XLS-*)

| id | status | notes |
|----|--------|-------|
| T-KEEP | **done** | typed CRUD / 3 khối / Schema_CsdlBieu7 KEEP |
| T-XLS-BE-01 | **done** | `ExportAsync` branch `shoulders-fences` · OOXML · sheet Biểu 7 · 20 cols |
| T-XLS-BE-02 | **done** | filename · Content-Disposition · empty headers-only · `side`/`fenceKind` QS |
| T-XLS-BFF-01 | **done** | BFF `GET …/export` binary proxy KEEP (QS forward) |
| T-XLS-FE-01 | **done** | `onExportExcel` on `fromCatalogToolbar` · Import ẩn |
| T-XLS-FE-02 | **done** | download blob + toast · filter QS · ignore page |
| T-XLS-QA-01 | pending | queued `/agent-qa*` |

## FE paths

- `src/pages/CsdlBieu07Page/CsdlBieu07Page.tsx` — `handleExportExcel` · toolbar export · `xlsBusy`
- `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` — `exportExcel` + `side`/`fenceKind` + fallback `Bieu07_LeTaluyHangRao_*.xls`

## BE paths

- `CsdlCatalogExcelService.cs` — `Bieu7ExportHeaders` · shoulders-fences export · `side`/`fenceKind`
- `CsdlCatalogRecordsController.cs` — `[FromQuery] side` · `fenceKind`
- `CsdlCatalogService.cs` — `AllowedPageSizes` +`10_000` (export filter-all)
- BFF `CsdlCatalogRecordsBffController` — unchanged proxy (QS passthrough)

## APIs

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | — | `…/csdl-records?resource=shoulders-fences` | CRUD **KEEP** |
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=shoulders-fences&…` | binary · filter-all · ignore page |
| API-XLS-02 | POST | `…/import` | **DEFER P1** |

Filename: `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xls` · Content-Type OOXML spreadsheet · 20 cols:
`code|roadCode|roadName|province|kmFrom|kmTo|side|shoulderStructure|shoulderLengthM|shoulderWidthM|shoulderAreaM2|slopeLengthM|slopeAreaM2|fenceKind|fencePostCount|fenceLengthKm|builtYear|status|manageUnit|notes`

## Debt / handoff QA

- GAP-QA-E2E-PW-01 P2 · prior
- T-PERM-01 Auth RequirePermission DEFER
- Import Excel P1
- AC-XLS-01..09 · AC-GRID-01..05 regression → QA
- GAP-BIEU07-XLS-03 Import DEFER

## Cấm (verified)

ERP.* · reopen typed 20-col · filter-bar Xuất · merge SHOULDER sheet · streaming · Import wire P0 · e2e @ Dev
