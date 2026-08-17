# Team-lead — task pack · rpt-thiet-hai (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-TH-02) |
| Feature Kind | **E** · leaf `/bao-cao/thiet-hai` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/thiet-hai` |
| route_confirm | **route_a** `/bao-cao/thiet-hai` (autopilot ON · STATUS + Design đã chốt · **không** AskQuestion) |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_242fad5a`) |
| solution_confirm | **approve** (`task_fca5a3e7`) |
| be_repo_confirm | **approve** (run packet BE `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet MFE `Linm.Web.RMMS.Report`) |
| taskId | `task_6a3804e7` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T19:00:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |
| `devSlash` | **`/agent-dev`** + `/erp-report-context` (S-RPT · `agent-dev-assign`) — **cấm** `/agent-dev-ai-detect` / OMS / camera |

**Supersedes** TL stub `task_11d09197` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_242fad5a` / `task_fca5a3e7`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `incident` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** Kind B `LinCatalogUiSchemaEditorModal`.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-thiet-hai/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-TH-01..06 |
| Solution | `specs/rpt-thiet-hai/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-TH-* |
| Prototype | `ui/prototype/rpt-thiet-hai-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-thiet-hai-control-hint.md` | SearchInput tuyến/hạng mục · Date · Input |
| PO | `specs/rpt-thiet-hai/po/requirement.md` | GAP-PO-TH-01..12 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` · `buildRmmsReportToolbar` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | analog `IncidentReportPage` / `DamageQtyReportPage` leaf | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` · hub `ReportListPage` family `damage-qty` làm trang này · `LinListFilterField` · Excel trên filter bar |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient · gửi `q` trên leaf này |
| Lookup | `ROAD_ROUTE_LOOKUP_CONFIG` + `GET /integration/road-routes/search` fallback · `DAMAGE_ITEM_LOOKUP` | copy catalog road-route vào Report DTO · invent QL.22 · `INCIDENT_TYPE_LOOKUP` / `DISASTER_TYPE_LOOKUP` trên leaf này |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · EF `rmms_incidents` P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data BE hạng mục |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/thiet-hai` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-thiet-hai` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 mapped Incident damage lines |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-thiet-hai/ui/prototype/rpt-thiet-hai-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/thiet-hai` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/damage-qty` | DONE in-memory 12 · query `type` `routeId` `from` `to` `search` `page` `pageSize` | **keep** · FE **chỉ** `search` · FilterRoute **exact** · **cấm** bind/gửi `q` |
| API-02 | GET | `/damage-qty/export` | DONE CSV UTF-8 BOM `damage-qty.csv` full filtered set | **keep** BE · **FE** subset cột hiện + **applied** filters |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | enum hạng mục tĩnh FE `DAMAGE_ITEM_LOOKUP` |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId`. `routeId` **exact** `Route` case-insensitive. `type` exact ignore-case `Item`. **Không** alias `q`.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportDamageQtyRowDto`: `id` `incidentId` `route` `item` `qty` `unit` `estValue` `source` `at`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` parse DateTimeOffset · `to` date-only exclusive +1d · FE display vi-VN trên KL/ước giá (`formatQtyVi` / `formatVnd`) · DTO `at` không cột lưới P1 |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** P1 | EF `rmms_incidents` **P2** |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.thiet-hai.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E report — **không** Kind B catalog schema)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-cubes` · title **Khối lượng thiệt hại** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tuyến/hạng mục · Date · Input qSearch · **Xem** = `onSearch`) · Excel · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config · **cấm** Excel trên filter |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột tuyến · hạng mục · KL · ĐVT · ước giá · nguồn · drill · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` · **T-UI-FORM** OUT · **T-UI-LEAVE-01** N/A (không dirty form) |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `DamageQtyReportPage` + `DamageQtyFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `DamageQtyReportPage.tsx` + `DamageQtyFilterBar.tsx` + `reportEndpoint.getDamageQty` / `exportDamageQty` + DOMAIN-MAP `rpt-thiet-hai` → Report — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | `buildRmmsReportToolbar` refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout HARD V1–V5 | `LinErpListFilterBar` · `data-lin-list-layout="erp-filter-bar"` · SearchInput tuyến+hạng mục + Date + Input · **Xem** = `onSearch` · **0** Excel trên bar | **PASS** T-UI-RPT-01 |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem» để tải báo cáo khối lượng thiệt hại.» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: toast «Chưa xem» · **không** fetch | **PASS** DES-TH-01 |
| 12 | Excel sau Xem + applied filters | `canExport: viewed` · `handleExport` applied (`type` `routeId` `from` `to` `search`) · subset `columnPrefs` · `damage-qty.csv` · **không** `q` | **PASS** DES-TH-02 · T-UI-RPT-EXPORT-01 |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` filter `QL.22` · `DAMAGE_ITEM_LOOKUP` Mặt đường/Taluy/Hộ lan/Cống/Biển báo/Rãnh | **T-UI-LKP** giữ |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | KL / ước giá vi-VN | live `formatQtyVi` / `formatVnd` | **PASS** T-UI-FIELD |
| 16 | ERP.* / plural reports | **none** trên leaf | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 19 | Drill Field | live `/incident?id=` top window · `row.incidentId` · «Mở sự cố» | **PASS** giữ |
| 20 | Chart SoCai client | **PASS** by-item / by-route khi viewed + có dòng · KPI Dòng · Tuyến · Ước giá | T-UI-RPT-CHART-01 |
| 21 | Seed 12 · CUC2 · không QL.22 | **PASS** BE (SA) | keep |
| 22 | `FilterRoute` exact | SA live exact case-insensitive · empty/`all` = all | **PASS** T-BE keep |
| 23 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 24 | Query canonical `search` | FE list `qs(params)` không set `q` khi page không truyền `q` · export **chỉ** `search` | **PASS** giữ · **cấm** thêm `params.q` trên leaf |
| 25 | Hub family `damage-qty` | chỉ `FAMILY` column prefs + **không** `ReportListPage` làm leaf | **cấm** gắn hub làm trang này |
| 26 | `INCIDENT_TYPE_LOOKUP` trên leaf | **không** — dùng `DAMAGE_ITEM_LOOKUP` | **PASS** |
| 27 | Toolbar vs filter | Excel/In/Chart/Config trên `reportToolbar` | **PASS** T-UI-RPT-TB-01 |

**Không** GAP FE bắt buộc cùng surface — Dev **verify keep** + build PASS. **Cấm** rewrite Kind E → Kind B.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions | `devSlash` |
|----|---------|---------|-------|----------|---------|------------|
| S-TH | Report A–D | Full page Kind E | `/bao-cao/thiet-hai` | report | filter `LinErpListFilterBar` → Xem · refresh (applied) · Excel applied · chart SoCai · config FULL · drill Field | **`/agent-dev`** |
| S-FORM | Form CRUD | — | — | — | **OUT P1** | — |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub | `/agent-dev` |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng | `/agent-dev` |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK | `/agent-dev` |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF (form-type-task-pack §2d)

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-thiet-hai | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-thiet-hai | ui+api | T-CTX-01 | stub | Code `report.thiet-hai.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/thiet-hai | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title «Khối lượng thiệt hại» · Xem mới load · cột tuyến/hạng mục/KL/ĐVT/ước giá/nguồn/drill · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** (không `q`) |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-LEAVE-01** | — | ui | — | **N/A PASS** | không dirty form trên slug · **cấm** `window.alert`/`confirm` nếu thêm modal |
| **T-UI-RPT-01** | /bao-cao/thiet-hai | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** + **`filter-bar-layout-hard`** V1–V5 · fragment leading · `data-lin-list-layout="erp-filter-bar"` · 1 hàng wrap · **0** action Excel trên bar · Xem = `onSearch` · Enter trên Input = Xem — **cấm** `LinListFilterField` / wrapper Tìm |
| **T-UI-RPT-TB-01** | /bao-cao/thiet-hai | ui | T-UI-RPT-01 | **done** | Common actions **chỉ** `reportToolbar` (`buildRmmsReportToolbar`: Làm mới · Chart · In · Config · Xuất Excel) · **`report-toolbar-actions`** — **cấm** filter button · GAP-FILTER-BAR-08 |
| **T-UI-RPT-CONFIG-01** | /bao-cao/thiet-hai | ui | T-UI-RPT-01 | **done analog** | Config FULL `ReportDisplayConfigModal` + `load/saveErpReportDisplayConfig` — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-EXPORT-01** | /bao-cao/thiet-hai | ui | T-UI-RPT-TB-01 | **done** | `report_export=export_yes` · `onExport` toolbar · `canExport: viewed` · applied filters · subset cột · `damage-qty.csv` · **cấm** `<Button>` Excel trong filter |
| **T-UI-RPT-CHART-01** | /bao-cao/thiet-hai | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` (`resolveReportCharts` · by-item · by-route) · KPI Dòng · Tuyến · Ước giá · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-thiet-hai | ui | T-UI-LIST-01 | **PASS** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** fetch · Excel **chỉ** khi `viewed` · params **applied** · drill `/incident?id={incidentId}` top window |
| **T-UI-LKP-01** | rpt-thiet-hai | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · hạng mục `DAMAGE_ITEM_LOOKUP` + empty · **cấm** native select · **cấm** invent QL.22 · **cấm** `INCIDENT_TYPE_LOOKUP` trên leaf |
| **T-UI-FIELD-01** | rpt-thiet-hai | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · KL `formatQtyVi` · ước giá `formatVnd` · cột Nguồn = text · drill không editor |
| **T-UI-PROD-01** | rpt-thiet-hai | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT · testid `rmms-damage-qty-report` · route `/bao-cao/thiet-hai` · pageId `rpt-thiet-hai` |
| **T-UI-UX-01** | rpt-thiet-hai | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · empty/skeleton không blank body |
| **T-BE-01** / **T-BE-RPT-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/damage-qty` · FilterRoute exact · FilterDate `At` · pageSize allow-list · seed 12 · **không** migration · **không** path mới · **không** folder domain mới · **không** alias `q` |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM `damage-qty.csv` full default header SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-QA-01** / **T-QA-RPT-01** | rpt-thiet-hai | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · filter V1+V5 · Xem · Làm mới gated · Excel/In trên toolbar · form OUT · build PASS |
| **T-RV-01** | rpt-thiet-hai | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / hạng mục / kỳ / tìm | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · cột hiện | API-02 |
| Mở sự cố | C | top window `/incident?id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## implement.wire / implement.state (HOW — Dev)

| Layer | HOW |
|-------|-----|
| UI→BE | `DamageQtyReportPage` `viewed` gate → `reportService.getDamageQty` → `reportEndpoint` `/report/damage-qty` → BFF `web-bff/api/v1/report/damage-qty` → `ReportQueryController` |
| state | draft (`*Draft`) vs applied (`routeId` `type` `search` `fromDate` `toDate`) · `viewed` · `page`/`pageSize` · `columnPrefs` · `displayConfig` |
| BFF | query-string + auth/company headers · **không** map DTO |
| lookup | SearchInput config only · **cấm** KIND_LABEL hardcode ngoài `DAMAGE_ITEM_LOOKUP` |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev verify keep — **bắt buộc PASS** trước completed |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD sự cố trên slug này · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · param `q` trên damage-qty · reuse `GET report/incidents` / `GET report/disasters`.

## Handoff Dev

- Implement **verify keep** toàn surface Kind E (không GAP FE bắt buộc sau re-audit). **Không** đổi API path / **không** FilterRoute / **không** migration.
- `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve → Dev **được write**.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.
- This task `roleOnly=team_lead` · **không** chạy Dev trong `task_6a3804e7`.
- Dev slash: **`/agent-dev`**.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
