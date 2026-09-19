# Implement — csdl-bieu-15

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho · T-XLS-S15 export |
| this role | `dev` · `/agent-dev` · `/implement-export-import-excel` |
| status | **done** |
| changeScope | `edit_page` |
| packKind | `list` |
| resource | `ops-facilities` |
| formNo | `15` |
| IdCode | `OF-` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| alias | `/csdl-bieu-15` |
| hub | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| taskId | `task_88a1f9c1` |
| priorTyped | `task_e6ad9bf7` **keep** |
| tlTaskId | `task_ad295ce2` |
| contentHash | `sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| updatedAt | `2026-09-18T02:40:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** (Api + Asset.Bff) |

## Done (T-XLS-S15-*)

| id | Result |
|----|--------|
| T-XLS-S15-BE-01 | `CsdlCatalogExcelService` branch `ops-facilities` · sheet **Biểu 15** · **20** cols · filter-all · `facilityKind` QS · filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` |
| T-XLS-S15-BFF-01 | BFF export proxy reuse (`BuildExportPath` + QS) · no new logic |
| T-XLS-S15-FE-01 | `CsdlBieu15Page` catalogToolbar **Xuất Excel** · binary download · filter QS (search/province/status/facilityKind/road/km/date) |
| T-XLS-S15-FE-02 | Import **ẩn** · **cấm** filter-bar export · toast success/fail (không stub) · empty-file OK toast |
| typed KEEP | Schema_CsdlBieu15 · CRUD · UiSchema · Slideout · **cấm** reopen new_page · **cấm** migration |

## Headers SSOT (20)

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

## APIs

- CRUD keep: `GET/POST/PUT/DELETE` `/api/v1/asset/csdl-records?resource=ops-facilities`
- Export: `GET /api/v1/asset/csdl-records/export?resource=ops-facilities` (+ filter QS · no page)
- BFF: `/web-bff/api/v1/asset/csdl-records/export` proxy binary

## Files touched

| Layer | Path |
|-------|------|
| BE | `…/Services/CsdlCatalogExcelService.cs` · `…/Controllers/CsdlCatalogRecordsController.cs` |
| FE | `src/pages/CsdlBieu15Page/CsdlBieu15Page.tsx` · `src/services/csdlSoSach/endpoint.ts` · `csdlService.ts` |

## Debt / defer

- Import P1 (`T-XLS-S15-BE-02` OUT)
- Auth RequirePermission stub
- e2e → `/agent-qa*` only

## Notes — encoding (2026-09-18 · `/edit-web-feature`)

Standalone chrome UTF-8: `src/dev/devRoutes.ts` · `StandaloneMockTopbar` đọc `DEV_MODULES` (không duplicate VN) · `index.tsx` Suspense `Đang tải…`. Live title/nav **Biểu 15 — TMC / thu phí / hạt / kho** · **cấm** `Biá»ƒu`. Gate: `utf8-source-gate.md` · **GAP-DEV-VI-ENC-01**.

## Verify

- MFE `yarn build` **PASS**
- BE `dotnet build` Linm.RMMS.WebService.sln **PASS**
- **cấm** e2e / start:std @ Dev
- `rg` mojibake `src/` = 0
