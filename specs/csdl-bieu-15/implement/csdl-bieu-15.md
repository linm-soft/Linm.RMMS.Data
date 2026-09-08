# Implement — csdl-bieu-15

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `ops-facilities` |
| formNo | `15` |
| IdCode | `OF-` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hub | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| taskId | `task_e6ad9bf7` |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| updatedAt | `2026-09-05T15:45:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-15` → Asset |
| T-CTX-01 | context sync (lane web · phase implement) |
| T-BE-01 | `CsdlBieu15Entity` + EF 1:1 Facility*/Area*/Equipment* flat |
| T-BE-02 | Migration `Schema_CsdlBieu15` (`rmms_csdl_bieu15`) |
| T-BE-03..06 | Service branch `ops-facilities` · DTO typed · IdCode `OF-` · facilityKind filter · soft-delete reuse · UiSchema seed |
| T-BFF-01 | proxy only (unchanged `CsdlCatalogRecordsBffController`) |
| T-PERM-01 | reuse `asset.csdl-records.*` |
| T-UI-* | Kind B list + Kind D Slideout Z1–Z3 · FilterBar · buildDynamicGridColumns · LeaveConfirm · hub NEW formNo 15 |

## APIs

- `GET/POST/PUT/DELETE` `/api/v1/asset/csdl-records` · `resource=ops-facilities`
- BFF `/web-bff/api/v1/asset/csdl-records` proxy
- LKP `GET /api/v1/integration/road-routes/search`
- list filter: `facilityKind` (+ search/province/status/roadCode/km*)

## Debt / defer

- Auth RequirePermission wire DEFER
- org SearchInput manageUnit P2
- XLS OUT · peer toolbar none_p1 · map none
- Snapshot EF full regen optional (hand migration present)
- Apply migration DB runtime (Step 4b artifact ready)

## Verify

- MFE `yarn build` PASS · chunk `csdl-bieu-15`
- BE `dotnet build` PASS · 0 errors
- **cấm** e2e / start:std @ Dev (queued QA)
