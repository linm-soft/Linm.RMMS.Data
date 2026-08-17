# Team-lead — task pack · rpt-kiem-tra-cau (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-KTC-02) |
| Feature Kind | **E** · leaf `/bao-cao/kiem-tra-cau` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/kiem-tra-cau` |
| route_confirm | **route_a** `/bao-cao/kiem-tra-cau` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_9afa1df7`) |
| solution_confirm | **approve** (`task_edf6b5d7`) |
| be_repo_confirm | **pending** — user tick board **trước Dev write** · `Linm.RMMS.WebService` (**không auto**) |
| ui_repo_confirm | **pending** — user tick board **trước Dev write** · MFE `Linm.Web.RMMS.Report` (**không auto**) |
| taskId | `task_f162e08e` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T14:20:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL stub `task_5462552a` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_9afa1df7` / `task_edf6b5d7`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `csdl-so-sach` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** POST/PUT/DELETE phiếu KT trên slug này.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-kiem-tra-cau/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-KTC-01/02/04 |
| Solution | `specs/rpt-kiem-tra-cau/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-KTC-* |
| Prototype | `ui/prototype/rpt-kiem-tra-cau-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-kiem-tra-cau-control-hint.md` | SearchInput tab/tuyến/cầu/loại · Date · Input |
| PO | `specs/rpt-kiem-tra-cau/po/requirement.md` | GAP-PO-KTC-01..11 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `BridgeInspectionFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient · query `q` riêng P1 |
| Lookup | FE `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` fallback · `BRIDGE_LOOKUP` enum | copy catalog road-route vào Report DTO · invent QL.22 |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 phiếu + 12 dòng kết quả P1 | warehouse tables · parent JSON · EF join P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |
| Summary | BE `GroupBy(BridgeId)` khi `tab=summary` | FE tự GroupBy trùng |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/kiem-tra-cau` only P1 · **không** `/new` · `/:id` · **không** 3 route tab |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-kiem-tra-cau` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 phiếu + 12 line CUC2 |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume · cầu enum FE |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-kiem-tra-cau/ui/prototype/rpt-kiem-tra-cau-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/kiem-tra-cau` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ — **không** đổi repo). **Cấm** `Linm.Web.ERP.WebService`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/bridge-inspections` | DONE in-memory 12+12 · query `tab` `type` `routeId` `bridgeId` `from` `to` `search` `page` `pageSize` | **keep** · **cấm** alias `q` P1 · FilterRoute **exact** · `tab=summary` BE GroupBy |
| API-02 | GET | `/bridge-inspections/export` | DONE CSV UTF-8 BOM · filename **`bridge-inspections.csv`** · **không** page | **keep** BE · **FE** params **applied** + `canExport: viewed` · subset cột tab hiện tại |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback · filter `QL.22` | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | tab + loại phiếu + cầu enum tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId` `bridgeId` `type`. `tab`: omit/`ticket` = phiếu · `result` = dòng kết quả · `summary` = aggregate.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportBridgeInspectionRowDto`: `id` `inspectionId` `ticketNo` `bridgeId` `bridgeName` `route` `adminArea` `day` `inspectionKind` `inspectionKindLabel` `tab` `component` `componentLabel` `damageDesc` `proposedAction` `priority` `priorityLabel` `photoCount` `ticketCount` `highPriorityCount`.

Summary: `id` = `sum-{bridgeId}` · `ticketCount` · `highPriorityCount` · `day` = lần KT gần nhất · `inspectionId` = phiếu đó.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` date-only trên `day` · grid display `vi-VN` từ `day` |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** P1 | EF join passport/inspection/line **P2** |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.kiem-tra-cau.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | filter date-only · display vi-VN |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-archway` · title **Kiểm tra cầu** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tab/tuyến/cầu/loại · Date · Input qSearch · **Xem** = `onSearch`) · Excel toolbar · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột theo **applied** `tab` · drill phiếu KT · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `BridgeInspectionReportPage` + `BridgeInspectionFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `BridgeInspectionReportPage.tsx` + `BridgeInspectionFilterBar.tsx` + `reportEndpoint` + `ReportQueryController` / `ReportService.FilterBridgeInspections` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem · `totalCount=0`) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` per tab | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput ×4 + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem»…» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: `if (!viewed) applyAndView()` → **fetch** | **T-UI-ACT-01** DES-KTC-01 — toast «Chưa xem» · **không** load |
| 12 | Excel sau Xem + applied filters | `canExport: viewed` · `handleExport` dùng applied (`tab`/`routeId`/…) · `subsetCsv` cột tab | **PASS** DES-KTC-02 |
| 13 | Đổi tab sau viewed | SearchInput chỉ `setTabDraft` — cột/`tab` **không** đổi đến khi Xem | **PASS** DES-KTC-04 / GAP-SA-KTC-TAB — **cấm** refetch tab ngay (khác `rpt-dem-xe`) |
| 14 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP` + tab/kind enum + `BRIDGE_LOOKUP` | **T-UI-LKP** giữ |
| 15 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 16 | TZ display local `vi-VN` từ `day` | live `formatDayVi` trên cột Ngày / KT gần nhất | **PASS** |
| 17 | ERP.* / plural reports | **none** | — |
| 18 | `filterMaxWidthPx={null}` | **PASS** | — |
| 19 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 20 | Drill CSDL sổ phiếu KT | live `/csdl-so-sach?kind=bridge-inspections&id=` top window · `inspectionId \|\| id` | **PASS keep live** — Design `/asset/...` = host prefix · **không** đổi path MFE P1 (GAP-SA-KTC-DRILL) |
| 21 | Chart SoCai client | **PASS** by-kind / by-route khi viewed + có dòng | **T-UI-RPT-CHART-01** KPI live = Dòng · Khẩn — Design KPI **Dòng · Tuyến · Ưu tiên cao** |
| 22 | Seed 12 · CUC2 · không QL.22 | **PASS** BE `t1`–`t12` / `r1`–`r12` | keep |
| 23 | `FilterRoute` | live **exact** case-insensitive · empty/`all` = all | **PASS keep exact** |
| 24 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 25 | Query canonical `search` + `tab` + `type` | FE gửi `search` + `tab` + `type` (không `q`) | **PASS** giữ |
| 26 | Summary BE aggregate | **PASS** `GroupBy(BridgeId)` · **cấm** FE GroupBy trùng | keep |
| 27 | Một slug 3 tab | route `bao-cao/kiem-tra-cau` only | **PASS** |

**Cấm** chỉ sửa Làm mới nếu KPI chart cùng surface còn GAP.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-KTC | Report A–D + 3 tab | Full page Kind E | `/bao-cao/kiem-tra-cau` | report | filter `LinErpListFilterBar` → Xem · tab draft đến Xem · refresh (applied) · Excel applied · chart SoCai · config FULL · drill phiếu |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` theo tab — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-kiem-tra-cau | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-kiem-tra-cau | ui+api | T-CTX-01 | stub | Code `report.kiem-tra-cau.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/kiem-tra-cau | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title Kiểm tra cầu · Xem mới load · cột phiếu / kết quả / tổng hợp theo **applied** `tab` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** + **`tab`** + **`type`** (không `q`) |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/kiem-tra-cau | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/kiem-tra-cau | ui | T-UI-RPT-01 | **done analog** | Config FULL theo tab — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/kiem-tra-cau | ui | T-UI-RPT-CONFIG-01 | **GAP KPI** | SoCai client từ `items` — KPI **Dòng · Tuyến · Ưu tiên cao** · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-kiem-tra-cau | ui | T-UI-LIST-01 | **GAP DES-KTC-01** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** `applyAndView` · Excel **chỉ** khi viewed (đã PASS) · đổi tab = draft đến Xem (đã PASS) |
| **T-UI-LKP-01** | rpt-kiem-tra-cau | ui | T-UI-LIST-01 | **PASS** | tab `ticket`/`result`/`summary` SearchInput · tuyến SearchInput road-route CUC2 + empty=Tất cả · cầu enum FE + empty · loại phiếu enum + empty · **cấm** native select · **cấm** invent QL.22 |
| **T-UI-FIELD-01** | rpt-kiem-tra-cau | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · grid `day` `formatDayVi` `vi-VN` · cột = DTO scalars readonly |
| **T-UI-PROD-01** | rpt-kiem-tra-cau | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT |
| **T-UI-UX-01** | rpt-kiem-tra-cau | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/bridge-inspections` · FilterRoute **exact** · FilterDay · tab summary GroupBy · pageSize allow-list · seed 12 · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM filename `bridge-inspections.csv` · header union SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-LKP-01** | integration | api | T-CTX-01 | **PASS consume** | `GET api/v1/integration/road-routes/search` · Report **không** clone master |
| **T-QA-01** | rpt-kiem-tra-cau | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Làm mới gated · Excel applied · tab draft · form OUT · build PASS |
| **T-RV-01** | rpt-kiem-tra-cau | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / cầu / loại / kỳ / tìm | B | draft only | — |
| Chọn tab (kể cả đã viewed) | B | draft only — **không** đổi cột đến Xem | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal theo tab | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · subset cột tab | API-02 |
| Mở phiếu KT | C | top window `/csdl-so-sach?kind=bridge-inspections&id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev sau GAP FE DES-KTC-01 + KPI chart |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD passport / phiếu KT trên slug này · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · FilterRoute prefix · query `q` · tách 3 tab thành 3 route · đổi drill path sang `/asset/...` P1.

## Handoff Dev

- Implement **mọi** GAP cùng surface: DES-KTC-01 Làm mới (toast «Chưa xem», **không** `applyAndView`) · T-UI-RPT-CHART-01 KPI **Dòng · Tuyến · Ưu tiên cao**.
- **Không** đổi API path / **không** FilterRoute (đã exact) / **không** migration / **không** FE GroupBy summary / **không** refetch tab ngay khi viewed.
- Dev **write** chỉ khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (board tick BE+UI — **không auto** trong TL).
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
