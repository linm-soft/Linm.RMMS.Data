# Implement — csdl-bieu-16

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child `branches[]` + ATGT |
| IdCode | `IX-` |
| child | `branches[]` embed · **min_1** · replace-all PUT |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` |
| hub | `/so-ts/csdl-so-sach?resource=interchanges` |
| taskId | `task_71eac21e` |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| updatedAt | `2026-09-05T17:45:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |

## Done (T-*)

| id | Result |
|----|--------|
| T-DM-01 | DOMAIN-MAP `csdl-bieu-16` → Asset |
| T-CTX-01 | context sync (lane web · phase implement) |
| T-BE-01 | `CsdlBieu16Entity` + `CsdlBieu16BranchEntity` + EF 1:1 / 1–n |
| T-BE-02 | Migration `Schema_CsdlBieu16` (`rmms_csdl_bieu16` + `rmms_csdl_bieu16_branch`) |
| T-BE-03..06 | Service `interchanges` · DTO typed + `branches[]` · IdCode `IX-` · min_1 · filters · soft-delete · UiSchema seed |
| T-BFF-01 | proxy only (`CsdlCatalogRecordsBffController` verified) |
| T-PERM-01 | reuse `asset.csdl-records.*` |
| T-UI-* | Kind B list + Kind D Slideout 5 section + BRANCH · FilterBar · `buildDynamicGridColumns` · LeaveConfirm · hub NEW formNo 16 |

## APIs

- `GET/POST/PUT/DELETE` `/api/v1/asset/csdl-records` · `resource=interchanges`
- BFF `/web-bff/api/v1/asset/csdl-records` proxy
- LKP `GET /api/v1/integration/road-routes/search`
- list filter: `interchangeType` · `kmMain` (+ search/province/status/roadCode)
- create/update embed `branches[]` · PUT replace-all · list `branchCount`

## FE

- Alias page `CsdlBieu16Page` · route `/csdl-bieu-16`
- Hub card `interchanges` → alias · TYPED_RESOURCE_ROUTES
- Form: Định danh · Đặc trưng nút · Nhánh child min_1 · ATGT qty · Quản lý
- catalogKind `interchanges` · Zone F `LinCatalogUiSchemaEditorModal`

## Debt / defer

- Auth RequirePermission wire DEFER
- org SearchInput manageUnit P2
- XLS OUT · peer toolbar none_p1 · map none
- Apply migration DB runtime (Step 4b artifact ready)
- e2e → `/agent-qa*` only

## Verify

- MFE `yarn build` PASS · chunk `csdl-bieu-16`
- BE `dotnet build Linm.RMMS.WebService.sln` PASS · 0 errors
- **cấm** e2e / start:std @ Dev (queued QA)
