# Implement — rpt-tai-san (Dev · task_6e230152)

| Field | Value |
|-------|-------|
| feature | `rpt-tai-san` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) — board `list` **stale** (GAP-PO-TS-12) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tai-san` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tai-san` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` · **cấm ERP.*** |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_6e230152` |
| prior TL | `task_ff0f5655` · confirmed |
| updatedAt | `2026-08-16T17:45:00.000Z` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · `api/v1/reports` (plural) · Kind B `LinCatalogUiSchemaEditorModal` · rewrite Kind E → Kind B. **T-UI-FORM = OUT**.

**Action:** **verify keep** toàn surface (TL: không GAP FE bắt buộc). **Không** path API mới · **không** FilterRoute đổi · **không** migration · **không** folder domain mới.

## retry.ssot_rereview (live trước Write · 2026-08-16)

Live: `src/pages/AssetReportPage/AssetReportPage.tsx` + `AssetFilterBar.tsx` · route `bao-cao/tai-san` · `pageId` `rpt-tai-san` · `testid` `rmms-asset-report`.

| # | SSOT | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | 1× `kind="report"` | **PASS** |
| 2 | `LinCatalogDataGrid` kéo cột default ON | `tableConfig.resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` | **PASS** |
| 3 | Footer luôn `LinCatalogListPagination` | luôn render · total 0 khi `!viewed` | **PASS** |
| 4 | flex + skeleton | `.page` flex · `skeletonRows={8}` | **PASS** |
| 5 | reportToolbar + config FULL | `buildRmmsReportToolbar` + `ReportDisplayConfigModal` | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema |
| 6 | `LinErpListFilterBar` SearchInput ×3 + Date + Input | `AssetFilterBar` · **cấm** native `<select>` | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Resource/Slideout/View=`readOnly` | không form route | **PASS** |
| 9 | Zone A không Thêm mới | header title + icon `fas fa-cubes` | **PASS** |
| 10 | Xem mới load · empty hint | `viewed` · hint «Chưa xem — nhấn «Xem»…» | **PASS** |
| 11 | Làm mới `!viewed` | toast «Chưa xem» · không fetch | **PASS** |
| 12 | Excel viewed + applied + subset cột | `canExport: viewed` · `type` `routeId` `status` `from` `to` `search` · `subsetAssetsCsv` | **PASS** |
| 13 | Lookup SearchInput empty=Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` + enum hạng mục/TT | **PASS** |
| 14 | pageSize 50/100/200/500 | FE pager + BE `AllowedPageSizes` | **PASS keep** |
| 15 | TZ `formatAtVi` vi-VN `updatedAt` | live | **PASS** |
| 16 | ERP.* / plural reports trên leaf | none | **PASS** |
| 17 | `filterMaxWidthPx={null}` | live | **PASS** |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` | **PASS** |
| 19 | Drill Field `/asset?id=` top window | `drillAsset` | **PASS** |
| 20 | Chart SoCai client | KPI Dòng · Tuyến · Cần bảo trì | **PASS** |
| 21 | Query `search` không `q` | `queryParams.search` · `exportAssets` `search` | **PASS** |
| 22 | leftover Kind B `buildDynamicGridColumns` | `const columns` Kind E OK | **PASS** · **cấm** đổi Kind B |
| 23 | Hub `AssetReportKinds` trên leaf filter | không gắn | **PASS** |

**Write:** không patch FE (không GAP cùng surface).

## T-BE / T-BFF (Step 4b — keep, không đụng file)

| ID | Path | Action |
|----|------|--------|
| T-BE-01 | `GET api/v1/report/assets` | **keep** `FilterAssets` type/routeId/status/from/to/**search** · FilterRoute exact · FilterDate `UpdatedAt` · pageSize allow-list · seed 12 |
| T-BE-02 | `GET api/v1/report/assets/export` | **keep** CSV UTF-8 BOM `assets.csv` full filtered set |
| T-BFF-01 | `ReportBffController` `assets` + `assets/export` | **keep** Forward QS raw |
| T-LKP-01 | `GET api/v1/integration/road-routes/search` | **keep** consume · Report không clone catalog |
| DOMAIN-MAP | `rpt-tai-san` → Report kebab `report` | **keep** |
| migration | — | **không** |
| `/new-endpoint` | — | **không** path mới P1 |
| `/create-bff-api-feature` | — | BFF đã có · **không** tạo mới |
| `/database-migration` | — | **không** |

**Cấm** `Linm.Web.ERP.WebService` · `ERP.*`. Hub `ReportListPage` family `assets` giữ; leaf `/bao-cao/tai-san` không dùng hub làm trang.

## T-UI DoD map

| ID | Result |
|----|--------|
| T-CTX-01 | **keep** |
| T-PERM-01 | stub `report.tai-san.read` · **không** block P1 |
| T-UI-LIST-01 | **PASS keep** |
| T-UI-FORM-01 | **OUT PASS** |
| T-UI-RPT-01 | **PASS** Xem = `onSearch` · Enter Input = Xem |
| T-UI-RPT-CONFIG-01 | **PASS analog** |
| T-UI-RPT-CHART-01 | **PASS** |
| T-UI-ACT-01 | **PASS** |
| T-UI-LKP-01 | **PASS** |
| T-UI-FIELD-01 | **PASS** |
| T-UI-PROD-01 | **PASS** |
| T-UI-UX-01 | **PASS** |
| T-BE-01 / T-BE-02 / T-BFF-01 / T-LKP-01 | **PASS keep** |

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit` · exit 0) |
| MFE `yarn build` | **PASS** (webpack 5.109.2 · 3 size warnings only · `linm-rmms-report.81c3b45b.js`) |
| BE `dotnet build` | **skipped** — Dev **không** đụng API/BFF file (TL: chỉ khi đụng API) |

## Handoff QA

Roles sau = **pending**. Chain QA (`T-QA-01`) cùng feature. **Cấm** nhảy Review trước QA. `autoApprove=ON` enqueue QA sau `completed` task này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
