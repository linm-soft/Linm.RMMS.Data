# Implement — csdl-bieu-12 (edit_page · T-XLS-S12)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Xuất Excel (Wave 1 T-XLS-S12) |
| this role | `dev` · `/agent-dev` · `/implement-export-import-excel` |
| status | **done** |
| changeScope | **`edit_page`** |
| packKind | `list` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** keep typed |
| IdCode | `CX-yyyyMMdd-nnnn` (**keep**) |
| peer | **none** · **cấm** invent so-ts-green |
| route | `route_a` keep · `/csdl-bieu-12` + hub `?resource=green-assets` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| hubRoute | `/so-ts/csdl-so-sach?resource=green-assets` |
| domain | Asset · **cấm ERP.*** |
| entity/migration | Schema_CsdlBieu12 **keep** · **none** new |
| taskId | `task_051369c1` |
| tlTaskId | `task_f750c146` |
| saTaskId | `task_b183ffe0` |
| contentHashPrior | `sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a` |
| headerFingerprintPrior | `sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a` |
| updatedAt | `2026-09-18T01:00:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (Api + Asset.Bff) |
| e2eQa | queued `/agent-qa*` only |

## § Delta delivered (XLS P0)

### FE (MFE Asset)
- `CsdlBieu12Page` · `catalogToolbar` **+Xuất Excel** (`fa-file-excel`) · zone S-XLS-EXPORT / DES-GRID-B
- `handleExportExcel` → `csdlService.exportExcel` · filter QS (search/province/status/side/roadCode/km/fromDate/toDate) · **no page**
- Download `Bieu12_CayXanh_{yyyyMMdd}.xls` (endpoint fallback)
- Empty → toast info header-only · fail → toast error · **≠** stub done
- Import Excel **DEFER P1 ẩn** · **không** `onImportExcel`
- **Cấm** Xuất trên `LinErpListFilterBar`
- Typed CRUD / Slideout / UiSchema **unchanged**

### BE (Linm.RMMS.WebService)
- `CsdlCatalogExcelService.ExportAsync` · branch `green-assets`
- Sheet **Biểu 12** · **15** headers SSOT · khóm+cỏ cùng hàng · **1 sheet**
- Filename Content-Disposition `Bieu12_CayXanh_{yyyyMMdd}.xls`
- filter-all · pageSize cap · soft-delete via catalog list · **cấm** streaming
- **No** new entity/migration · Import **OUT P1**

### BFF
- `GET web-bff/api/v1/asset/csdl-records/export` · proxy binary **keep** (T-XLS-S12-BFF-01 verify)

## Task matrix

| ID | Status |
|----|--------|
| T-XLS-S12-BE-01 | **done** |
| T-XLS-S12-BFF-01 | **done** (proxy verify) |
| T-XLS-S12-FE-01 | **done** |
| T-XLS-S12-FE-02 | **done** |
| T-XLS-S12-QA-01 | pending QA |
| T-XLS-S12-BE-02 | **OUT / DEFER P1** |
| Typed T-* prior | **done** · **cấm** reopen |

## APIs

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/asset/csdl-records/export?resource=green-assets` + filter QS | binary · filter-all |
| * | `/api/v1/asset/csdl-records…` | CRUD **keep** |
| POST | `…/import` | **DEFER P1** |

Header (15): `code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

## Files touched

| Path | Change |
|------|--------|
| `…/CsdlCatalogExcelService.cs` | Bieu12 headers + export branch |
| `…/CsdlCatalogRecordsBffController.cs` | keep (export proxy) |
| `src/pages/CsdlBieu12Page/CsdlBieu12Page.tsx` | toolbar Xuất + handler |
| `src/services/csdlSoSach/endpoint.ts` | filename fallback green-assets |

## Debt / DEFER

- Import Excel P1
- Auth wire stub (reuse)
- QA e2e T-XLS-S12-QA-01
- manageUnit org-unit P2 (typed prior)

## Cấm respected

ERP.* · invent so-ts-green · reopen typed CRUD · toast stub=done · filter-bar export · 2-sheet · streaming · Import P0 · migration @ XLS · e2e/start:std @ Dev
