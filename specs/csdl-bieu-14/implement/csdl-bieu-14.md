# Implement — csdl-bieu-14

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) · T-XLS-S14 export |
| this role | `dev` · `/agent-dev` · `/implement-export-import-excel` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `its-systems` |
| formNo | `14` |
| IdCode | `IT-` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| alias | `/csdl-bieu-14` |
| hub | `/so-ts/csdl-so-sach?resource=its-systems` |
| taskId | `task_5163dcca` |
| priorTyped | `task_936065ca` **keep** |
| tlTaskId | `task_bb5bd3be` |
| contentHash | `sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| updatedAt | `2026-09-18T09:00:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (Api + Asset.Bff) |

## Done (T-XLS-S14-*)

| id | Result |
|----|--------|
| T-XLS-S14-BE-01 | `CsdlCatalogExcelService` branch `its-systems` · sheet **Biểu 14** · **21** cols · filter-all · `deviceType` QS · filename `Bieu14_HeThongITS_{yyyyMMdd}.xls` |
| T-XLS-S14-BFF-01 | BFF export proxy reuse (`BuildExportPath` + QS) · no new logic |
| T-XLS-S14-FE-01 | `CsdlBieu14Page` catalogToolbar **Xuất Excel** · binary download · filter QS (search/province/status/side/deviceType/road/km/date) |
| T-XLS-S14-FE-02 | Import **ẩn** · **cấm** filter-bar export · toast success/fail (không stub) · empty-file OK toast |
| typed KEEP | Schema_CsdlBieu14 · CRUD · UiSchema · Slideout · **cấm** reopen new_page |

## Headers SSOT (21)

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

## APIs

- CRUD keep: `GET/POST/PUT/DELETE` `/api/v1/asset/csdl-records?resource=its-systems`
- Export: `GET /api/v1/asset/csdl-records/export?resource=its-systems` (+ filter QS · no page)
- BFF: `/web-bff/api/v1/asset/csdl-records/export` proxy binary

## Files touched

| Layer | Path |
|-------|------|
| BE | `…/Services/CsdlCatalogExcelService.cs` · `…/Controllers/CsdlCatalogRecordsController.cs` |
| FE | `src/pages/CsdlBieu14Page/CsdlBieu14Page.tsx` · `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` |

## Debt / defer

- Import P1 (`T-XLS-S14-BE-02` OUT)
- Auth RequirePermission stub
- manageUnit P2 (không trong 21 export)
- e2e → `/agent-qa*` only

## Verify

- MFE `yarn build` **PASS** · chunk `csdl-bieu-14`
- BE `dotnet build` RMMS.Service.Api **PASS** · LINM.RMMS.Asset.Bff **PASS**
- **cấm** e2e / start:std @ Dev
