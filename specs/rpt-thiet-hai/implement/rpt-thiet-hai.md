# Implement — rpt-thiet-hai (Dev · task_e47eaa07)

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** Kind **E** (AnalyticsReportShell) — **cấm** Kind B |
| mfeStdRoute | `/bao-cao/thiet-hai` |
| mfeStdUrl | `http://localhost:9311/bao-cao/thiet-hai` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_e47eaa07` |
| prior | TL `task_6a3804e7` **confirmed** · `retry.ssot_rereview` PASS |
| autoApprove | **ON** |
| updatedAt | `2026-08-16T12:05:00.000Z` |

**Verify keep** (không GAP FE bắt buộc). **Không** path API mới · **không** FilterRoute · **không** migration · **không** Kind B schema editor.

## retry.ssot_rereview (live trước Write · 2026-08-16)

Re-audit `DamageQtyReportPage.tsx` + `DamageQtyFilterBar.tsx` + `reportEndpoint.getDamageQty` / `exportDamageQty` + DOMAIN-MAP `rpt-thiet-hai` → Report.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** `kind="report"` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + config FULL | **PASS** `buildRmmsReportToolbar` + `ReportDisplayConfigModal` | **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter `LinErpListFilterBar` V1–V5 | **PASS** SearchInput tuyến+hạng mục · Date · Input · Xem=`onSearch` · 0 Excel trên bar | — |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | T-UI-FORM OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem»…» | — |
| 11 | Làm mới khi `!viewed` | **PASS** toast «Chưa xem» · không fetch | DES-TH-01 |
| 12 | Excel sau Xem + applied | **PASS** `canExport: viewed` · `search` not `q` · `damage-qty.csv` · subset `columnPrefs` | DES-TH-02 |
| 13 | Lookup SearchInput · **cấm QL.22** | **PASS** `ROAD_ROUTE_LOOKUP_CONFIG` filter · `DAMAGE_ITEM_LOOKUP` | — |
| 14 | pageSize 50/100/200/500 | **PASS** `LinCatalogListPagination` + BE allow-list | — |
| 15 | KL / ước giá vi-VN | **PASS** `formatQtyVi` / `formatVnd` | — |
| 16 | ERP.* / `api/v1/reports` | **none** trên leaf | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | **PASS** `dispatchAppToast` | — |
| 19 | Drill Field | **PASS** `/incident?id=` top window · `incidentId` | — |
| 20 | Chart SoCai | **PASS** by-item / by-route · KPI Dòng · Tuyến · Ước giá | — |
| 21 | leftover Kind B schema | Kind E `const columns` **OK** | **cấm** `buildDynamicGridColumns` |
| 22 | Query canonical `search` | **PASS** list `qs` không set `q` (page không truyền `q`) · export chỉ `search` | — |
| 23 | Toolbar vs filter | Excel/In/Chart/Config trên `reportToolbar` | **PASS** |

**Không** GAP cùng surface — **không** patch rewrite.

## FE (HOW)

| Surface | Implementation |
|---------|----------------|
| Route | `src/index.tsx` `bao-cao/thiet-hai` → `DamageQtyReportPage` |
| pageId / testid | `rpt-thiet-hai` · `rmms-damage-qty-report` |
| Filter | `DamageQtyFilterBar` · draft vs applied · Enter = Xem |
| List | `reportService.getDamageQty` → `GET /report/damage-qty` |
| Export | `exportDamageQty` blob → subset CSV UTF-8 BOM |
| State | `*Draft` vs `routeId` `type` `search` `fromDate` `toDate` · `viewed` · `page`/`pageSize` · `columnPrefs` · `displayConfig` |

## BE / BFF Step 4b (keep — không file mới)

| Layer | Path | Note |
|-------|------|------|
| DOMAIN-MAP | `rpt-thiet-hai` → Report kebab `report` | **cấm** ERP.* |
| API | `GET api/v1/report/damage-qty` · `/damage-qty/export` | `ReportQueryController` · **không** `q` |
| BFF | `web-bff/api/v1/report/damage-qty` (+ export) | `ReportBffController` Forward QS |
| Persist | in-memory 12 seed | **không** migration |
| Auth | stub `report.thiet-hai.read` | **không** block P1 |

**Không** đụng API P1 → **không** `dotnet build` bắt buộc (BE không đổi).

## Build

| Gate | Result |
|------|--------|
| MFE `yarn typecheck` | **PASS** (`tsc --noEmit`) |
| MFE `yarn build` | **PASS** webpack 5.109.2 · `linm-rmms-report.10106aec.js` · 3 size warnings |
| BE `dotnet build` | **N/A** — Dev không sửa API/DTO/BFF |

## Handoff

- Role **dev** `task_e47eaa07` **completed**.
- QA = **pending** (`qa/scenarios.md`) · Review = **pending**.
- **Cấm** chạy QA trong task này (`roleOnly=dev`).
- autoApprove ON → enqueue QA ở board/chain sau completed.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
