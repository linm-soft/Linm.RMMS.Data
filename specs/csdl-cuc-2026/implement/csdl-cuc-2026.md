# Dev — Implement — csdl-cuc-2026

> Status: **done** · task `task_461e8b48` · role `dev` · packKind `list` · Kind **G** hub  
> Written: `2026-09-07T04:00:00.000Z` · autoApprove ON · e2eQa queued (`/agent-qa*` only)

| Field | Value |
|-------|-------|
| feature | `csdl-cuc-2026` |
| title | CSDL Cục — hub KPI/catalog 16+10 + Import Excel |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| mfeStdRoute | `/csdl-cuc-2026` |
| mfeStdUrl | `http://localhost:9301/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |

## T-* done

| id | Result |
|----|--------|
| T-01 | Catalog DTO widen `formNo`/`kind`/`titleVn` + `bieuCount`/`soCount` = **16/10** |
| T-02 | `POST …/import/preview` multipart + sheetMap + skipBridge |
| T-03 | `POST …/import` commit → `CreateAsync` shell/typed |
| T-04 | `GET …/export?resource=` CSV UTF-8 BOM |
| T-05 | BFF proxy multipart import + export file pass-through |
| T-06 | Alias route `/csdl-cuc-2026` ↔ hub `CsdlSoSachPage` |
| T-07 | Hub Kind G zones A–D · tabs · search · KPI API · cards formNo |
| T-08 | `CsdlImportModal` + Export/Refresh toolbar |
| T-09 | Deep-link typed only (existing `TYPED_RESOURCE_ROUTES`) |

## APIs

| Op | Path |
|----|------|
| catalog | `GET /web-bff/api/v1/asset/csdl-records/catalog?search=` |
| import preview | `POST /web-bff/api/v1/asset/csdl-records/import/preview` |
| import commit | `POST /web-bff/api/v1/asset/csdl-records/import` |
| export | `GET /web-bff/api/v1/asset/csdl-records/export?resource=` |

## FE files

- `src/pages/CsdlSoSachPage/CsdlSoSachPage.tsx` · `CsdlImportModal.tsx`
- `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` · `responseModel.ts`
- `src/demo/csdlSoSachStore.ts` (SO 1–10 + `route-strip-maps`)
- `src/index.tsx` route alias · `devRoutes.ts` · `StandaloneMockTopbar.tsx`

## BE files

- `CsdlCatalogDtos.cs` · `CsdlCatalogService.GetCatalogAsync` · `CsdlCatalogExcelService.cs`
- `CsdlCatalogRecordsController.cs` · `CsdlCatalogRecordsBffController.cs`

## VERIFY

| Check | Result |
|-------|--------|
| MFE `yarn build` | **PASS** (webpack warnings size only) |
| API `dotnet build` | **PASS** |
| BFF `dotnet build` | **PASS** |

## Debt / handoff QA

- `.xls` binary → 422 VN (use `.xlsx`/`.csv`)
- Import typed rows may 422 nếu thiếu cột bắt buộc typed — preview báo lỗi
- E2E **cấm** ở Dev — queued `/agent-qa*`

## GAP close (Dev)

| ID | Status |
|----|--------|
| GAP-CSDL-CUC-01/02 | **CLOSED** hub 16+10 |
| GAP-CSDL-XLS-01 | **CLOSED** import/export + BFF |
| GAP-CUC-ROUTE-01 | **CLOSED** alias |
| GAP-TYP-01 | **CLOSED** typography 13/14/16 |

<!-- implement schemaVersion=1 role=dev feature=csdl-cuc-2026 taskId=task_461e8b48 -->
