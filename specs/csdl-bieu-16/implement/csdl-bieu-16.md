# Implement — csdl-bieu-16

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao · T-XLS-S16 export |
| this role | `dev` · `/agent-dev` · `/implement-export-import-excel` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · flatten 1 row/nhánh |
| IdCode | `IX-` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| alias | `/csdl-bieu-16` |
| hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| taskId | `task_ba6998df` |
| priorTyped | `task_71eac21e` / review `task_628c95a5` **keep** |
| tlTaskId | `task_1793bfbe` |
| contentHash | `sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072` |
| headerFingerprint | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| updatedAt | `2026-09-18T03:15:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (Api + Asset.Bff) |

## Done (T-XLS-S16-*)

| id | Result |
|----|--------|
| T-XLS-S16-BE-01 | `CsdlCatalogExcelService` branch `interchanges` · sheet **Biểu 16** · **39** cols · flatten 1 row/nhánh · `header_blank` · filter QS `interchangeType`/`kmMain` · filename `Bieu16_NutGiao_{yyyyMMdd}.xls` |
| T-XLS-S16-BFF-01 | BFF export proxy reuse (`BuildExportPath` + QS) · no new logic |
| T-XLS-S16-FE-01 | `CsdlBieu16Page` catalogToolbar **Xuất Excel** · binary download · filter QS |
| T-XLS-S16-FE-02 | Import **ẩn** · **cấm** filter-bar export · toast success/fail (không stub) · empty-file OK toast |
| typed KEEP | Schema_CsdlBieu16+Branch · CRUD · Slideout · **cấm** reopen · **cấm** migration |

## Headers SSOT (39)

`code|name|roadCode|roadName|province|kmMain|kmAux|interchangeType|trafficOrg|mainBedWidth|mainSurfaceWidth|mainMedianWidth|mainLaneCount|branchName|branchKmFrom|branchKmTo|branchSide|branchDirection|branchLength|branchBedWidth|branchSurfaceWidth|branchMedianWidth|branchRadius|atgtSign|atgtMarking|atgtIsland|atgtLight|status|yearBuilt|manageUnit|notes|lat|lng|updatedBy|updatedAt|isActive|branchCount|formNo|side`

## APIs

- CRUD keep: `GET/POST/PUT/DELETE` `/api/v1/asset/csdl-records?resource=interchanges`
- Export: `GET /api/v1/asset/csdl-records/export?resource=interchanges` (+ filter QS · no page)
- BFF: `/web-bff/api/v1/asset/csdl-records/export` proxy binary

## Files touched

| Layer | Path |
|-------|------|
| BE | `…/Services/CsdlCatalogExcelService.cs` · `…/Controllers/CsdlCatalogRecordsController.cs` |
| FE | `src/pages/CsdlBieu16Page/CsdlBieu16Page.tsx` · `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` |

## Debt / defer

- Import P1 (`T-XLS-S16-BE-02` OUT)
- Auth RequirePermission stub
- e2e → `/agent-qa*` only

## Verify

- MFE `yarn build` PASS
- BE `dotnet build` Api + Asset.Bff PASS · 0 errors
- **cấm** e2e / start:std @ Dev (queued QA)
