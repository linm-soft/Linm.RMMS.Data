# Implement — csdl-bieu-04

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Xuất Excel (T-XLS-S04) |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | **`edit_page`** · Wave 1 · **T-XLS-S04** |
| packKind | `list` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-yyyyMMdd-nnnn` |
| route | **KEEP** `/csdl-bieu-04` + hub `?resource=culverts` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_421286ef` |
| tlTaskId | `task_7925d902` |
| contentHash | `sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9` |
| headerFingerprint | `sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.17.3` |
| writtenAt | `2026-09-18T03:45:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** |
| migration | **none** @ XLS |
| import | **DEFER P1** · UI ẩn |

## Summary

Delta Xuất Excel trên typed Biểu 04 (KEEP CRUD 17-col · GPS four_xy). Toolbar `catalogToolbar` +Xuất Excel · filter QS · filter-all · filename `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · sheet «Biểu 4» · **cấm** merge `so-ts-culvert-x` · **cấm** Xuất trên `LinErpListFilterBar`. BFF binary proxy KEEP. Import P1 ẩn.

## Tasks DoD (T-XLS-*)

| id | status | notes |
|----|--------|-------|
| T-CTX-XLS-01 | **done** | STATUS + implement sync |
| T-OUT-01 | **done** | Import UI ẩn · DEFER P1 |
| T-XLS-BE-01 | **done** | `ExportAsync` branch `culverts` · OOXML · sheet Biểu 4 |
| T-XLS-BE-02 | **done** | headers control-hint · GPS four_xy · filter-all · kmPoint QS |
| T-XLS-BFF-01 | **done** | BFF `GET …/export` binary proxy KEEP |
| T-XLS-FE-01 | **done** | `onExportExcel` on `fromCatalogToolbar` |
| T-XLS-FE-02 | **done** | download blob + toast · empty=headers-only |
| T-REG-GRID | **done** | typed list/form KEEP · no column reopen |
| T-REG-PEER | **done** | peer deep-link only · no sheet merge |
| T-XLS-QA-01 | pending | queued `/agent-qa*` |

## FE paths

- `src/pages/CsdlBieu04Page/CsdlBieu04Page.tsx` — `handleExportExcel` · toolbar export
- `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` — `exportExcel` + `kmPoint` + fallback filename

## BE paths

- `CsdlCatalogExcelService.cs` — `Bieu4ExportHeaders` · culverts export · `kmPoint` param
- `CsdlCatalogRecordsController.cs` — `[FromQuery] kmPoint`
- BFF `CsdlCatalogRecordsBffController` — unchanged proxy

## APIs

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01..05 | — | `…/csdl-records?resource=culverts` | CRUD **KEEP** |
| API-XLS-01 | GET | `/api/v1/asset/csdl-records/export?resource=culverts&…` | binary · filter-all · ignore page |
| API-XLS-02 | POST | `…/import` | **DEFER P1** |

Filename: `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · Content-Type OOXML spreadsheet.

## Debt / handoff QA

- GAP-QA-E2E-PW-01 P2 · prior
- T-PERM-01 Auth RequirePermission DEFER
- GAP-CSDL-ORG-01 P2
- Import Excel P1
- AC-XLS-01..09 · AC-GRID-01..05 regression → QA

## Build

| Gate | Result |
|------|--------|
| `yarn build` (MFE Asset) | **PASS** (size warnings only) |
| `dotnet build` (Linm.RMMS.WebService.sln) | **PASS** (1 pre-existing CS0105) |

<!-- Version meta: skillId=agent-dev skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.17.3 versionGate=ok contentHash=sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9 changeScope=edit_page taskId=task_421286ef -->
