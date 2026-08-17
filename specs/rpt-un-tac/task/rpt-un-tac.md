# Team-lead — task pack · rpt-un-tac (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-UNTAC-02) |
| Feature Kind | **E** · leaf `/bao-cao/un-tac` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/un-tac` |
| route_confirm | **route_a** `/bao-cao/un-tac` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_e992f75f`) |
| solution_confirm | **approve** (`task_b1d0b537`) |
| be_repo_confirm | **approve** (BE `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (MFE `Linm.Web.RMMS.Report`) |
| taskId | `task_cec813d0` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T16:40:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL stub `task_e49f5eb8` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_e992f75f` / `task_b1d0b537`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `incident` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** mix TNGT · **cấm** reuse `GET report/incidents` / `traffic-accidents` · **cấm** Kind B `LinCatalogUiSchemaEditorModal`.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-un-tac/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-UNTAC-01..09 |
| Solution | `specs/rpt-un-tac/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-UNTAC-* |
| Prototype | `ui/prototype/rpt-un-tac-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-un-tac-control-hint.md` | SearchInput loại/tuyến · Date · Input |
| PO | `specs/rpt-un-tac/po/requirement.md` | GAP-PO-UNTAC-01..12 |

Cluster Excel handoff `specs/rpt-un-tac/specs/_data-analy/clusters/rpt-un-tac.md` **không tồn tại** — SSOT = control-hint.

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | analog `CongestionReportPage` leaf | nested CatalogListShell · raw `<table>` trên MFE · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` · hub `ReportListPage` family `congestion` làm trang này |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | `ROAD_ROUTE_LOOKUP_CONFIG` + `GET /integration/road-routes/search` · `CONGESTION_TYPE_LOOKUP` Ùn tắc / Ngập úng | copy catalog road-route vào Report DTO · invent QL.22 · mix TNGT |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · EF `rmms_incidents` P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |
| Config | report FULL | Kind B schema seed / `buildDynamicGridColumns` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/un-tac` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-un-tac` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 mapped `IncidentEntity` type ∈ {Ùn tắc, Ngập úng} |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-un-tac/ui/prototype/rpt-un-tac-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/un-tac` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report`. **Cấm** `Linm.Web.ERP.WebService`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/congestion` | DONE in-memory 12 · query `type` `routeId` `status` `from` `to` `search` `page` `pageSize` | **keep** · **cấm** alias `q` P1 · FilterRoute **exact** · FE **cấm** gửi `status` P1 · **cấm** `GET report/incidents` |
| API-02 | GET | `/congestion/export` | DONE CSV UTF-8 BOM `congestion.csv` full filtered set | **keep** BE · **FE** subset cột hiện + **applied** filters |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | enum loại tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId`. `routeId` **exact** `Route` case-insensitive. `type` exact ignore-case `Ùn tắc` \| `Ngập úng`.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportCongestionRowDto`: `id` `code` `route` `km` `type` `durationMin` `status` `at`.

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
| SD-AUTH | stub | `report.un-tac.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-traffic-light` · title **Ùn tắc / ngập úng** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput loại/tuyến · Date · Input qSearch · **Xem** = `onSearch`) · Excel · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột Design · drill Field · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `CongestionReportPage` + `CongestionFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `CongestionReportPage.tsx` + `CongestionFilterBar.tsx` + `reportEndpoint` + DOMAIN-MAP `rpt-un-tac` → Report — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell · pageId `rpt-un-tac` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` (List/width/filter/sort/Thêm cột) | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput loại + tuyến + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem» để tải báo cáo ùn tắc / ngập úng.» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: toast «Chưa xem» · **không** fetch | **PASS** DES-UNTAC-01 |
| 12 | Excel sau Xem + applied filters | `canExport: viewed` · `handleExport` applied (`type` `routeId` `from` `to` `search`) · subset `columnPrefs` · filename `congestion.csv` | **PASS** DES-UNTAC-02 |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` · `CONGESTION_TYPE_LOOKUP` Ùn tắc / Ngập úng | **T-UI-LKP** giữ |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | TZ display `formatAtVi` vi-VN từ `at` | live `formatAtVi(row.at)` | **PASS** T-UI-FIELD |
| 16 | ERP.* / plural reports | **none** trên leaf · FE `/report/congestion` | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** · print = `LinReportPrintScopeModal` | — |
| 19 | Drill Field | live `/incident?id=` top window · `row.id` | **PASS** giữ |
| 20 | Chart SoCai client | **PASS** by-type / by-route khi viewed + có dòng · KPI Dòng · Tuyến · Ùn tắc | — |
| 21 | Seed 12 · CUC2 · không QL.22 | **PASS** BE congestion seed · tuyến CUC2 | keep |
| 22 | `FilterRoute` exact | SA live exact case-insensitive · empty/`all` = all | **PASS** T-BE keep |
| 23 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 24 | Query canonical `search` | FE gửi `search` (không `q`) | **PASS** giữ |
| 25 | Type khóa Ùn tắc \| Ngập úng | FE `CONGESTION_TYPE_LOOKUP` · **cấm** TNGT trên leaf | **PASS** |
| 26 | FE **không** gửi `status` | queryParams không có `status` · cột TT display-only | **PASS** GAP-SA-UNTAC-STATUS-Q |
| 27 | Draft vs applied | state `*Draft` bind filter · `queryParams` chỉ applied (`type` `routeId` `fromDate` `toDate` `search` `page` `pageSize`) · `applyAndView` copy draft→applied | **PASS** — **đóng GAP-SA-UNTAC-DRAFT** trên live · Dev **verify keep** (không regress refetch khi gõ filter) |
| 28 | Hub `ReportListPage` | leaf riêng `CongestionReportPage` | **cấm** dùng hub family làm trang này |

**GAP cùng surface (Dev):**

| ID | Surface | DoD Dev |
|----|---------|---------|
| **GAP-SA-UNTAC-DRAFT** | Filter vs `queryParams` | **Đóng trên live TL audit** — `queryParams` **không** gộp draft. Dev **verify keep**: đổi loại/tuyến/kỳ/tìm **không** gọi `getCongestion` đến **Xem**; pager/Làm mới dùng applied. **Cấm** gộp lại draft vào `useMemo` query. |

Còn lại: **verify keep** Kind E. **Cấm** rewrite Kind E → Kind B. **Không** path API mới. **Không** migration P1.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-UNTAC | Report A–D | Full page Kind E | `/bao-cao/un-tac` | report | filter `LinErpListFilterBar` → Xem · refresh (applied) · Excel applied · chart SoCai · config FULL · drill Field |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-un-tac | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-un-tac | ui+api | T-CTX-01 | stub | Code `report.un-tac.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/un-tac | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title Ùn tắc / ngập úng · listTitle cùng · Xem mới load · cột Design (code/route/km/type/durationMin/status/at/drill) · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** (không `q`) · **verify keep** GAP-SA-UNTAC-DRAFT |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/un-tac | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/un-tac | ui | T-UI-RPT-01 | **done analog** | Config FULL — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/un-tac | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — KPI Dòng · Tuyến · Ùn tắc · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-un-tac | ui | T-UI-LIST-01 | **PASS** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** fetch · Excel **chỉ** khi `viewed` · params **applied** · subset CSV theo `columnPrefs` · drill `/incident?id={id}` top window |
| **T-UI-LKP-01** | rpt-un-tac | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · loại enum FE Ùn tắc/Ngập úng + empty · **cấm** native select · **cấm** invent QL.22 · **cấm** TNGT |
| **T-UI-FIELD-01** | rpt-un-tac | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · grid `at` `formatAtVi` `vi-VN` · cột Nguồn = drill (không editor) · `durationMin` display-only · cột TT display-only |
| **T-UI-PROD-01** | rpt-un-tac | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT · testid `rmms-congestion-report` · route `/bao-cao/un-tac` · pageId `rpt-un-tac` |
| **T-UI-UX-01** | rpt-un-tac | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/congestion` · FilterRoute exact · FilterDate `At` · pageSize allow-list · seed 12 · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM `congestion.csv` full default header SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-QA-01** | rpt-un-tac | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Làm mới gated · Excel applied · draft/applied · form OUT · build PASS |
| **T-RV-01** | rpt-un-tac | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn loại / tuyến / kỳ / tìm | B | draft only | — |
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
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev verify keep GAP-SA-UNTAC-DRAFT — **bắt buộc PASS** trước completed |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail. Role TL **docs-only** — không `yarn build` / `dotnet build`.

## Out of pack

CRUD sự cố trên slug này · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · mix TNGT · reuse `GET report/incidents` / `traffic-accidents` · ITS/TOC overlay P3 · DurationMin entity P1.

## Handoff Dev

- Implement **verify keep** Kind E + **GAP-SA-UNTAC-DRAFT** (đã đóng live — không regress). **Không** đổi API path / **không** FilterRoute / **không** migration.
- Ghi `retry.ssot_rereview` trên implement MD trước Write.
- `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve → Dev **được write**.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.
- This task `roleOnly=team_lead` · **không** chạy Dev trong `task_cec813d0`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
