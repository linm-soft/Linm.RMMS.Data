# Team-lead — task pack · rpt-tngt (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-TNGT-02) |
| Feature Kind | **E** · leaf `/bao-cao/tngt` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/tngt` |
| route_confirm | **route_a** `/bao-cao/tngt` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_95e8c936`) |
| solution_confirm | **approve** (`task_9e257166`) |
| be_repo_confirm | **approve** (run packet BE `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet MFE `Linm.Web.RMMS.Report`) |
| taskId | `task_e0d454a5` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T20:25:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL stub `task_46a44cfc` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_95e8c936` / `task_9e257166`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `incident` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** 6 slug trùng filter · **cấm** `GET report/incidents` cho leaf này.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-tngt/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-TNGT-01..09 |
| Solution | `specs/rpt-tngt/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-TNGT-* |
| Prototype | `ui/prototype/rpt-tngt-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-tngt-control-hint.md` | SearchInput tab/tuyến/mức · Date · Input |
| PO | `specs/rpt-tngt/po/requirement.md` | GAP-PO-TNGT-01..13 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | analog `TrafficAccidentReportPage` leaf | nested CatalogListShell · raw `<table>` trên MFE · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` · hub `ReportListPage` family `traffic-accidents` làm trang này |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | `ROAD_ROUTE_LOOKUP_CONFIG` + `GET /integration/road-routes/search` fallback · `INCIDENT_KIND_LOOKUP` **6 tab trên leaf** · `INCIDENT_SEVERITY_LOOKUP` | copy catalog road-route vào Report DTO · invent QL.22 · filter loại sự cố (type) trên leaf |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · EF `rmms_incidents` P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |
| Config | report FULL | Kind B schema seed / `buildDynamicGridColumns` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/tngt` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-tngt` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 mapped `IncidentEntity` type=TNGT |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tngt/ui/prototype/rpt-tngt-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/tngt` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/traffic-accidents` | DONE in-memory 12 · query `tab` `type`(ignored) `routeId` `severity` `from` `to` `search` `page` `pageSize` | **keep** · **cấm** alias `q` P1 · FilterRoute **exact** · **cấm** `GET report/incidents` |
| API-02 | GET | `/traffic-accidents/export` | DONE CSV UTF-8 BOM `traffic-accidents.csv` full filtered set | **keep** BE · **FE** subset cột hiện + **applied** filters |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | enum tab/mức tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId`. `routeId` **exact** `Route` case-insensitive. `tab=serious` + `severity` trống → BE gán `Nghiêm trọng`. Query `type` **ignored** — dataset khóa TNGT.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportIncidentRowDto`: `id` `code` `route` `type` `severity` `status` `at`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` parse DateTimeOffset · `to` date-only exclusive +1d · grid `formatAtVi` vi-VN từ `at` |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** P1 | EF `rmms_incidents` **P2** |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.tngt.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-car-crash` · title **Tai nạn giao thông** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tab/tuyến/mức · Date · Input qSearch · **Xem** = `onSearch`) · Excel · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột Design · drill Field · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `TrafficAccidentReportPage` + `TrafficAccidentFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `TrafficAccidentReportPage.tsx` + `TrafficAccidentFilterBar.tsx` + `reportEndpoint` + DOMAIN-MAP `rpt-tngt` → Report — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell · pageId `rpt-tngt` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` (List/width/filter/sort/Thêm cột) | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput ×3 (tab/tuyến/mức) + Date + Input · **cấm** native select · **cấm** filter type sự cố | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem» để tải báo cáo TNGT.» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: toast «Chưa xem» · **không** fetch | **PASS** DES-TNGT-01 |
| 12 | Excel sau Xem + applied filters | `canExport: viewed` · `handleExport` applied (`tab` `routeId` `severity` `from` `to` `search`) · subset `columnPrefs` · filename `traffic-accidents.csv` | **PASS** DES-TNGT-02 |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` filter `QL.22` · severity enum · tab = `INCIDENT_KIND_LOOKUP` 6 giá trị **trên leaf** (đúng Design DES-TNGT-09) | **T-UI-LKP** giữ |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | TZ display `formatAtVi` vi-VN từ `at` | live `formatAtVi(row.at)` | **PASS** T-UI-FIELD |
| 16 | ERP.* / plural reports | **none** trên leaf · FE `/report/traffic-accidents` | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** · print = `LinReportPrintScopeModal` | — |
| 19 | Drill Field | live `/incident?id=` top window · `row.id` | **PASS** giữ |
| 20 | Chart SoCai client | **PASS** by-severity / by-route khi viewed + có dòng · KPI Dòng · Tuyến · Nghiêm trọng | — |
| 21 | Seed 12 · CUC2 · không QL.22 | **PASS** BE `t1`–`t12` · `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` | keep |
| 22 | `FilterRoute` exact | SA live exact case-insensitive · empty/`all` = all | **PASS** T-BE keep |
| 23 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 24 | Query canonical `search` | FE gửi `search` (không `q`) | **PASS** giữ |
| 25 | Type khóa TNGT | FE `LOCKED_TYPE='TNGT'` gửi query `type` · BE `_ = type` ignore | **PASS** · **cấm** SearchInput loại sự cố |
| 26 | 6 tab một slug | `INCIDENT_KIND_LOOKUP` monthly / half-year / serious / compare / summary / stats | **PASS** · **cấm** tách 6 feature |
| 27 | Tab `serious` / `half-year` default | **Xem** apply: serious → mức «Nghiêm trọng» nếu trống; half-year → `halfYearRange()` | **GAP-TL-TNGT-01** — Design DES-TNGT-07 muốn **draft** khi đổi tab (không chờ Xem). Live chỉ apply lúc Xem. BE serious+severity trống vẫn gán Nghiêm trọng. |
| 28 | Hub `ReportListPage` | leaf riêng `TrafficAccidentReportPage` | **cấm** dùng hub family làm trang này |

**GAP cùng surface (Dev bắt buộc đóng, không chỉ verify keep):**

| ID | Surface | DoD Dev |
|----|---------|---------|
| **GAP-TL-TNGT-01** | FilterBar tab draft | Đổi tab `serious` (draft): nếu mức trống → điền **Nghiêm trọng**. Đổi tab `half-year` (draft): kỳ **6 tháng** (`from` = `to` − 6 tháng) **trước** Xem. Không fetch. Không đổi applied grid. |

Còn lại: **verify keep** Kind E. **Cấm** rewrite Kind E → Kind B.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-TNGT | Report A–D | Full page Kind E | `/bao-cao/tngt` | report | filter `LinErpListFilterBar` → Xem · refresh (applied) · Excel applied · chart SoCai · config FULL · drill Field |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-tngt | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-tngt | ui+api | T-CTX-01 | stub | Code `report.tngt.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/tngt | ui-list | T-PERM-01 | shell **PASS** + **GAP-TL-TNGT-01** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title Tai nạn giao thông · listTitle cùng · Xem mới load · cột Design (code/route/type/severity/status/at/drill) · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** (không `q`) · đóng GAP-TL-TNGT-01 |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/tngt | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/tngt | ui | T-UI-RPT-01 | **done analog** | Config FULL — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/tngt | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — KPI Dòng · Tuyến · Nghiêm trọng · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-tngt | ui | T-UI-LIST-01 | **PASS** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** fetch · Excel **chỉ** khi `viewed` (`canExport: viewed`) · params **applied** (`tab` `routeId` `severity` `from` `to` `search`) · subset CSV theo `columnPrefs` · drill `/incident?id={id}` top window |
| **T-UI-LKP-01** | rpt-tngt | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · tab 6 giá trị `INCIDENT_KIND_LOOKUP` trên leaf · mức enum FE + empty · **cấm** native select · **cấm** invent QL.22 · **cấm** SearchInput loại sự cố |
| **T-UI-FIELD-01** | rpt-tngt | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · grid `at` `formatAtVi` `vi-VN` · cột Nguồn = drill (không editor) · cột loại display-only TNGT |
| **T-UI-PROD-01** | rpt-tngt | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT · testid `rmms-tngt-report` · route `/bao-cao/tngt` · pageId `rpt-tngt` |
| **T-UI-UX-01** | rpt-tngt | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/traffic-accidents` · FilterRoute exact · FilterDate `At` · pageSize allow-list · seed 12 · type ignored · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM `traffic-accidents.csv` full default header SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-QA-01** | rpt-tngt | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Làm mới gated · Excel applied · GAP-TL-TNGT-01 · form OUT · build PASS |
| **T-RV-01** | rpt-tngt | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn loại thống kê / tuyến / mức / kỳ / tìm | B | draft only | — |
| Đổi tab `serious` / `half-year` | B | **GAP-TL-TNGT-01** default mức / kỳ trên **draft** | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · cột hiện | API-02 |
| Mở sự cố | C | top window `/incident?id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev đóng GAP-TL-TNGT-01 + verify keep — **bắt buộc PASS** trước completed |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD sự cố trên slug này · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · tách 6 slug · filter loại sự cố · reuse `GET report/incidents`.

## Handoff Dev

- Implement **đóng GAP-TL-TNGT-01** (draft tab serious/half-year) rồi **verify keep** toàn surface Kind E. **Không** đổi API path / **không** FilterRoute / **không** migration.
- `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve → Dev **được write**.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
