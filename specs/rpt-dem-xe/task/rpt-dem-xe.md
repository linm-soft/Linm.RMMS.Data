# Team-lead — task pack · rpt-dem-xe (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-DX-02) |
| Feature Kind | **E** · leaf `/bao-cao/dem-xe` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/dem-xe` |
| route_confirm | **route_a** `/bao-cao/dem-xe` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_626bc166`) |
| solution_confirm | **approve** (`task_26cc7b79`) |
| be_repo_confirm | **pending** — user tick board **trước Dev write** · `Linm.RMMS.WebService` (**không auto**) |
| ui_repo_confirm | **pending** — user tick board **trước Dev write** · MFE `Linm.Web.RMMS.Report` (**không auto**) |
| taskId | `task_05761cf7` |
| prior | data_analy `done` · PO `done` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T07:05:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL stub `task_d8caf0e9` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_626bc166` / `task_26cc7b79`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `csdl-so-sach` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** expose `POST /api/v1/traffic-counts` trên slug này.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-dem-xe/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-DX-01/02/03 |
| Solution | `specs/rpt-dem-xe/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-DX-* |
| Prototype | `ui/prototype/rpt-dem-xe-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-dem-xe-control-hint.md` | SearchInput bảng/tuyến/điểm · Date · Input |
| PO | `specs/rpt-dem-xe/po/requirement.md` | GAP-PO-DX-01..10 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` `1.43.0` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `TrafficCountFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient · query `tab` / `q` trên traffic-counts |
| Lookup | FE `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` fallback · `COUNT_STATION_LOOKUP` enum | copy catalog road-route vào Report DTO · invent QL.22 |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · EF `TrafficCountSummary` P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |
| B.2 | BE `type=b2` GroupBy Route | FE tự cộng khi đã gọi `type=b2` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/dem-xe` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-dem-xe` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 `tc1`–`tc12` CUC2 |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume · điểm đếm enum FE |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-dem-xe/ui/prototype/rpt-dem-xe-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/dem-xe` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ — **không** đổi repo). **Cấm** `Linm.Web.ERP.WebService`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/traffic-counts` | DONE in-memory 12 · query `type` `routeId` `stationId` `from` `to` `search` `page` `pageSize` | **keep** · **cấm** alias `q` / `tab` P1 · FilterRoute **exact** (live; SearchInput code — **cấm** prefix `QL.1` match `QL.10`) |
| API-02 | GET | `/traffic-counts/export` | DONE CSV UTF-8 BOM · filename theo `type` · **không** page | **keep** BE · **FE** params **applied** + `canExport: viewed` |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback · filter `QL.22` | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | tab + điểm đếm enum tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId` `stationId`. `type`: omit/`kq`/`b1` = detail · `b2` = BE aggregate.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportTrafficCountRowDto`: `id` `sourceId` `stationId` `station` `route` `day` `motorcycle` `car` `miniBus` `bus` `lightTruck` `heavyTruck` `container` `bicycle` `other` `totalCars` `peakHour` `aadt`.

B.2: `station`/`stationId`/`sourceId` empty · `day` = `{min}..{max}` · `aadt` = `totalCars` · `id` = `agg-{route}` · **không** drill sổ.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_na** / display **tz_day** | filter `from`/`to` date-only trên `day` · grid display `vi-VN` từ `day` (range B.2 format 2 đầu) |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** P1 | EF `TrafficCountSummary` **P2** |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.dem-xe.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | filter date-only · display vi-VN |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-car` · title **Đếm xe** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput bảng/tuyến/điểm · Date · Input qSearch · **Xem** = `onSearch`) · Excel toolbar · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột theo **applied** `viewTab` · drill CSDL chỉ tab KQ · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `TrafficCountReportPage` + `TrafficCountFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `TrafficCountReportPage.tsx` + `TrafficCountFilterBar.tsx` + `reportEndpoint` + `ReportQueryController` / `ReportService.FilterTrafficCounts` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem · `totalCount=0`) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` per tab | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput ×3 + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem»…» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: `if (!viewed) applyAndView()` → **fetch** | **T-UI-ACT-01** DES-DX-01 — toast «Chưa xem» · **không** load |
| 12 | Excel sau Xem + applied filters | `canExport` **không** truyền (`buildRmmsReportToolbar` hiện Excel luôn) · `handleExport` dùng **draft** (`tabDraft`/`routeDraft`…) | **T-UI-ACT-01** DES-DX-02 — `canExport: viewed` · params = `queryParams` applied (`type` `routeId` `stationId` `from` `to` `search`) · filename theo **applied** `viewTab` |
| 13 | Đổi tab sau viewed | SearchInput chỉ `setTabDraft` — cột/`type` **không** đổi đến khi Xem | **T-UI-ACT-01** DES-DX-03 / GAP-SA-DX-TYPE — khi `viewed`: set `viewTab` + `tabDraft` + `page=1` → refetch `type` (B.2 payload BE) · **không** apply draft route/station/kỳ/search · **không** bắt Xem lại |
| 14 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP` + tab enum + `COUNT_STATION_LOOKUP` 12 trạm | **T-UI-LKP** giữ |
| 15 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 16 | TZ display local `vi-VN` từ `day` | live `row.day` raw ISO · B.2 `min..max` raw | **T-UI-FIELD-01** `formatDayVi` (KQ/B.1) · range B.2 `formatDayVi(min) → formatDayVi(max)` |
| 17 | ERP.* / plural reports | **none** | — |
| 18 | `filterMaxWidthPx={null}` | **PASS** | — |
| 19 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 20 | Drill CSDL sổ 4 | live `/csdl-so-sach?kind=traffic-counts&id=` top window · `sourceId \|\| id` · **chỉ** cột KQ | **PASS** · B.2 **không** drill (không `sourceId`) |
| 21 | Chart SoCai client | **PASS** trend-total / by-route khi viewed + có dòng | — |
| 22 | Seed 12 · CUC2 · không QL.22 | **PASS** BE `tc1`–`tc12` | keep |
| 23 | `FilterRoute` | live **exact** case-insensitive · empty/`all` = all | **PASS keep exact** — SA «prefix-match» **bỏ** (prefix `QL.1` = `QL.10`) |
| 24 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 25 | Query canonical `search` + `type` | FE gửi `search` + `type` (không `q`/`tab`) | **PASS** giữ |
| 26 | B.2 BE aggregate | **PASS** `GroupBy(Route)` · **cấm** FE GroupBy trùng | keep |
| 27 | ~18 class Excel sổ 4 | DTO P1 nhóm chính (motorcycle/car/…) | **P2** — **không** invent field DTO P1 |

**Cấm** chỉ sửa Làm mới nếu Excel draft / tab-after-viewed / `formatDayVi` cùng surface còn GAP.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-DX | Report A–D + 3 tab | Full page Kind E | `/bao-cao/dem-xe` | report | filter `LinErpListFilterBar` → Xem · tab refetch khi viewed · refresh (applied) · Excel applied · chart SoCai · config FULL · drill CSDL KQ |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` theo tab — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-dem-xe | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-dem-xe | ui+api | T-CTX-01 | stub | Code `report.dem-xe.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/dem-xe | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title Đếm xe · listTitle theo tab · Xem mới load · cột KQ (station/route/day/totalCars/peakHour/drill) · B.1 (station/day + class DTO + total) · B.2 (route + class + total + aadt) · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** + **`type`** (không `q`/`tab`) |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/dem-xe | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/dem-xe | ui | T-UI-RPT-01 | **done analog** | Config FULL theo tab — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/dem-xe | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — KPI Dòng · Tổng xe · Tuyến · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-dem-xe | ui | T-UI-LIST-01 | **GAP DES-DX-01/02/03** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** `applyAndView` · Excel **chỉ** khi `viewed` (`canExport: viewed`) · params **applied** · đổi tab khi viewed → refetch `type` ngay |
| **T-UI-LKP-01** | rpt-dem-xe | ui | T-UI-LIST-01 | **PASS** | bảng `kq`/`b1`/`b2` SearchInput · tuyến SearchInput road-route CUC2 + empty=Tất cả · điểm đếm enum FE + empty · **cấm** native select · **cấm** invent QL.22 |
| **T-UI-FIELD-01** | rpt-dem-xe | ui | T-UI-LIST-01 | **GAP day vi-VN** | from/to Date SSOT · ISO date-only query · grid `day` `formatDayVi` `vi-VN` · B.2 range `a → b` · class columns = DTO scalars readonly |
| **T-UI-PROD-01** | rpt-dem-xe | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT |
| **T-UI-UX-01** | rpt-dem-xe | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/traffic-counts` · FilterRoute **exact** · FilterDay · type b2 GroupBy · pageSize allow-list · seed 12 · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM filename theo type · full default header SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-LKP-01** | integration | api | T-CTX-01 | **PASS consume** | `GET api/v1/integration/road-routes/search` · Report **không** clone master |
| **T-QA-01** | rpt-dem-xe | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Làm mới gated · Excel applied · tab refetch · form OUT · build PASS |
| **T-RV-01** | rpt-dem-xe | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / điểm / kỳ / tìm | B | draft only | — |
| Chọn bảng (tab) **chưa** viewed | B | draft only | — |
| Chọn bảng **đã** viewed | B | set applied `viewTab` + page=1 · **không** apply draft khác | API-01 `type` |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal theo tab | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · filename applied tab | API-02 |
| Mở sổ đếm xe | C (KQ) | top window `/csdl-so-sach?kind=traffic-counts&id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev sau GAP FE DES-DX-01/02/03 + formatDayVi |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD sổ đếm xe / TNGT trên slug này · GOVOne chrome · warehouse schema · EF `TrafficCountSummary` P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · 18 class Excel đầy đủ P1 · FilterRoute prefix · query `tab`/`q`.

## Handoff Dev

- Implement **mọi** GAP cùng surface: DES-DX-01 Làm mới · DES-DX-02 Excel applied + `canExport: viewed` · DES-DX-03 tab refetch khi viewed · `formatDayVi` cột Ngày (+ range B.2).
- **Không** đổi API path / **không** FilterRoute (đã exact) / **không** migration / **không** FE GroupBy B.2.
- Dev **write** chỉ khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (board tick BE+UI — **không auto** trong TL).
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
