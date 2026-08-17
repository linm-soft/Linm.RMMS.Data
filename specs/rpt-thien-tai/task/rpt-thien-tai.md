# Team-lead — task pack · rpt-thien-tai (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-thien-tai` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-TT-11) |
| Feature Kind | **E** · leaf `/bao-cao/thien-tai` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/thien-tai` |
| route_confirm | **route_a** `/bao-cao/thien-tai` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_8236dc10`) |
| solution_confirm | **approve** (`task_11c414f1`) |
| be_repo_confirm | **approve** (run packet BE `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet MFE `Linm.Web.RMMS.Report`) |
| taskId | `task_02212445` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T18:30:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL stub `task_b580eac0` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_8236dc10` / `task_11c414f1`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `incident` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** Kind B `LinCatalogUiSchemaEditorModal`.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-thien-tai/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-TT-01..07 |
| Solution | `specs/rpt-thien-tai/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-TT-* |
| Prototype | `ui/prototype/rpt-thien-tai-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-thien-tai-control-hint.md` | SearchInput tuyến/loại · Date · Input |
| PO | `specs/rpt-thien-tai/po/requirement.md` | GAP-PO-TT-01..11 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | analog `IncidentReportPage` / `DisasterReportPage` leaf | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` · hub `ReportListPage` family `disasters` làm trang này |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | `ROAD_ROUTE_LOOKUP_CONFIG` + `GET /integration/road-routes/search` fallback · `DISASTER_TYPE_LOOKUP` | copy catalog road-route vào Report DTO · invent QL.22 · `INCIDENT_TYPE_LOOKUP` (ổ gà/TNGT) trên leaf này |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · EF `rmms_incidents` P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/thien-tai` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-thien-tai` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 mapped `IncidentEntity` type=disaster |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-thien-tai/ui/prototype/rpt-thien-tai-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/thien-tai` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/disasters` | DONE in-memory 12 · query `type` `routeId` `from` `to` `search` `q` `page` `pageSize` | **keep** · FE ưu tiên `search` · FilterRoute **exact** · **cấm** query `severity`/`status` P1 |
| API-02 | GET | `/disasters/export` | DONE CSV UTF-8 BOM `disasters.csv` full filtered set | **keep** BE · **FE** subset cột hiện + **applied** filters |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | enum loại thiên tai tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId` `type`. `routeId` **exact** `Route` case-insensitive. `q` alias `search` khi `search` trống (BE).

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportDisasterRowDto`: `id` `route` `type` `kmRange` `severity` `damageSummary` `at`.

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
| SD-AUTH | stub | `report.thien-tai.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-cloud-showers-heavy` · title **Thiên tai, bão lũ** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tuyến/loại · Date · Input qSearch · **Xem** = `onSearch`) · Excel · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột Design · drill Field · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `DisasterReportPage` + `DisasterFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `DisasterReportPage.tsx` + `DisasterFilterBar.tsx` + `reportEndpoint` + DOMAIN-MAP `rpt-thien-tai` → Report — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `ReportColumnConfigGrid` (List/Hiện/Rộng/Filter/Sort) + `columnPrefs` | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput tuyến+loại + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem» để tải báo cáo thiên tai.» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: toast «Chưa xem» · **không** fetch | **PASS** DES-TT-01 |
| 12 | Excel sau Xem + applied filters | `canExport: viewed` · `handleExport` applied (`type` `routeId` `from` `to` `search`) · subset `columnPrefs` · `disasters.csv` | **PASS** DES-TT-02 |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` filter `QL.22` · `DISASTER_TYPE_LOOKUP` Bão/Lũ/Sạt lở/Ngập úng/Lốc/Sét | **T-UI-LKP** giữ |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | TZ display `formatAtVi` vi-VN từ `at` | live `formatAtVi(row.at)` | **PASS** T-UI-FIELD |
| 16 | ERP.* / plural reports | **none** trên leaf | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 19 | Drill Field | live `/incident?id=` top window · `row.id` · «Mở sự cố» | **PASS** giữ |
| 20 | Chart SoCai client | **PASS** by-type / by-route khi viewed + có dòng · KPI Dòng · Tuyến · Nghiêm trọng | — |
| 21 | Seed 12 · CUC2 · không QL.22 | **PASS** BE (SA) | keep |
| 22 | `FilterRoute` exact | SA live exact case-insensitive · empty/`all` = all | **PASS** T-BE keep |
| 23 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 24 | Query canonical `search` | FE gửi `search` (không `q`) | **PASS** giữ |
| 25 | Hub family `disasters` | chỉ `FAMILY` column prefs + **không** `ReportListPage` làm leaf | **cấm** gắn hub làm trang này |
| 26 | Filter mức/TT | **không** trên `DisasterFilterBar` | **PASS** (thuộc `rpt-su-co`) |
| 27 | `INCIDENT_TYPE_LOOKUP` trên leaf | **không** — dùng `DISASTER_TYPE_LOOKUP` | **PASS** |

**Không** GAP FE bắt buộc cùng surface — Dev **verify keep** + build PASS. **Cấm** rewrite Kind E → Kind B.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-TT | Report A–D | Full page Kind E | `/bao-cao/thien-tai` | report | filter `LinErpListFilterBar` → Xem · refresh (applied) · Excel applied · chart SoCai · config FULL · drill Field |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-thien-tai | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-thien-tai | ui+api | T-CTX-01 | stub | Code `report.thien-tai.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/thien-tai | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title «Thiên tai, bão lũ» · Xem mới load · cột ngày/tuyến/loại/kmRange/mức/thiệt hại/drill · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** (không `q`) |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/thien-tai | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/thien-tai | ui | T-UI-RPT-01 | **done analog** | Config FULL — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/thien-tai | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — KPI Dòng · Tuyến · Nghiêm trọng · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-thien-tai | ui | T-UI-LIST-01 | **PASS** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** fetch · Excel **chỉ** khi `viewed` (`canExport: viewed`) · params **applied** (`type` `routeId` `from` `to` `search`) · subset CSV theo `columnPrefs` · drill `/incident?id={id}` top window |
| **T-UI-LKP-01** | rpt-thien-tai | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · loại `DISASTER_TYPE_LOOKUP` + empty · **cấm** native select · **cấm** invent QL.22 · **cấm** `INCIDENT_TYPE_LOOKUP` trên leaf |
| **T-UI-FIELD-01** | rpt-thien-tai | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · grid `at` `formatAtVi` `vi-VN` · cột Nguồn = drill (không editor) · `severity` display-only |
| **T-UI-PROD-01** | rpt-thien-tai | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT · testid `rmms-disaster-report` · route `/bao-cao/thien-tai` · pageId `rpt-thien-tai` |
| **T-UI-UX-01** | rpt-thien-tai | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/disasters` · FilterRoute exact · FilterDate `At` · pageSize allow-list · seed 12 · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM `disasters.csv` full default header SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-QA-01** | rpt-thien-tai | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Làm mới gated · Excel applied · form OUT · build PASS |
| **T-RV-01** | rpt-thien-tai | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / loại / kỳ / tìm | B | draft only | — |
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
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev verify keep — **bắt buộc PASS** trước completed |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD sự cố trên slug này · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · filter mức/TT trên slug này.

## Handoff Dev

- Implement **verify keep** toàn surface Kind E (không GAP FE bắt buộc sau re-audit). **Không** đổi API path / **không** FilterRoute / **không** migration.
- `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve → Dev **được write**.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.
- This task `roleOnly=team_lead` · **không** chạy Dev trong `task_02212445`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
