# Team-lead — task pack · rpt-tuan-duong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-duong` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-BTD-02) |
| Feature Kind | **E** · leaf `/bao-cao/tuan-duong` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/tuan-duong` |
| route_confirm | **route_a** `/bao-cao/tuan-duong` (live + STATUS + Design · Autopilot ON **không** AskQuestion `route_confirm` · **keep_current**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-road` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** (packet `task_29d588f1`) — Design/SA đã **confirmed** · **không** auto tick `beRepo`/`uiRepo` |
| chain | **ON** → enqueue **dev** sau TL · Dev **cấm** write đến `confirms.beRepo && uiRepo` |
| design_confirm | **approve** (`task_7d300c6b`) |
| solution_confirm | **approve** (`task_87bb6006`) |
| be_repo_confirm | **pending user tick** (STATUS — **không auto**) |
| ui_repo_confirm | **pending user tick** (STATUS — **không auto**) |
| taskId | `task_29d588f1` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| supersedes | stub TL `task_9d72ff3d` (ngắn) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T21:55:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** reuse `GET api/v1/report/patrol-log-road` · **cấm** gộp `PatrolType=inspect` / tuần kiểm · **cấm** parent JSON · **cấm** copy CRUD `patrol` · **cấm** folder domain mới · **cấm** POST/PUT/DELETE `PatrolSession` trên slug này · **cấm** Kind B `LinCatalogUiSchemaEditorModal`.

> SA chốt lookup API + query/export. Design chốt control-map. **Cấm** Dev đoán Text vs SearchInput.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-tuan-duong/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · GAP-DS-BTD-01..12 |
| Solution | `specs/rpt-tuan-duong/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-BTD-* |
| Prototype | `ui/prototype/rpt-tuan-duong-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-tuan-duong-control-hint.md` | SearchInput tuyến/trạng thái/NV · Date · Input |
| PO | `specs/rpt-tuan-duong/po/requirement.md` | GAP-PO-BTD-01..12 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `PatrolRoadFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` |
| HTTP | `apiClient` · `reportEndpoint` re-export · query **`q`** | fork ApiClient · reuse `patrol-log-road` / tuần kiểm |
| Lookup | `ROAD_ROUTE_LOOKUP_CONFIG` + Integration search · `PATROL_SESSION_STATUS_LOOKUP` · `WORKLOG_STAFF_LOOKUP` FE | copy catalog road-route vào Report DTO · invent QL.22 |
| BFF | proxy only | business in BFF |
| Persist | in-memory 14 `road` + 1 `inspect` excluded P1 | warehouse tables · parent JSON · EF join P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data BE bắt buộc P1 |
| Config | report table modal FULL | Kind B catalog schema editor |
| Export / chart / print | `reportToolbar` (`buildRmmsReportToolbar`) | `<Button>` Excel trong filter · stub toast config/chart |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/tuan-duong` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-tuan-duong` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory `PatrolRoad` seed |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume · status/NV enum FE |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tuan-duong/ui/prototype/rpt-tuan-duong-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/tuan-duong` |
| `devSlash` | **`/agent-dev`** + `/erp-report-context` (S-RPT) — **cấm** gán map/ai/camera slash |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ — **không** đổi repo). **Cấm** `Linm.Web.ERP.WebService`. **Cấm** gộp `rpt-nhat-ky-tuan-duong` / tuần kiểm.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/patrol-road` | DONE in-memory · query `staffId` `routeId` `status` `from` `to` `q` `page` `pageSize` · alias `search` · `type` **ignored** · hard-filter `PatrolType=road` | **keep** · FilterRoute **exact** · FE gửi **`q`** |
| API-02 | GET | `/patrol-road/export` | DONE CSV UTF-8 BOM · filename **`patrol-road.csv`** · **không** page | **keep** BE · FE `canExport: viewed` · subset cột đang hiện |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback · filter `QL.22` | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | status + NV enum tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId` `staffId` `status`. Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportPatrolRoadRowDto`: `id` `sessionId` `code` `day` `startedAt` `route` `staffId` `userName` `patrolType` `patrolTypeLabel` `checkInCount` `coveragePercent` `status` `statusLabel` `offlineQueued` `note`.

Export header P1 (live): `day,code,route,userName,patrolType,checkInCount,coveragePercent,status,offlineQueued,note,sessionId`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` date-only trên `day` · grid display `vi-VN` từ `day` · `startedAt` ISO +07 seed |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** P1 | EF `rmms_patrol_sessions` **P2** |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.tuan-duong.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | filter date-only · display vi-VN |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E — **không** Kind B `tl-grid-task-template`)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-road` · title **Báo cáo tuần đường** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (`filter-bar-layout-hard` V1–V5 · SearchInput tuyến/trạng thái/NV · Date · Input qSearch · **Xem** = `onSearch`) · Excel **toolbar** · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config · **cấm** Excel trên filter |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột PO/Design · drill phiên · **không** CRUD ⋯ · **không** Company/QL/Km |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `PatrolRoadReportPage` + `PatrolRoadFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `src/pages/PatrolRoadReportPage/PatrolRoadReportPage.tsx` + `PatrolRoadFilterBar.tsx` + `reportEndpoint.getPatrolRoad` / `exportPatrolRoad` + `ReportQueryController` `patrol-road` + `ReportService.FilterPatrolRoad` + BFF `patrol-road` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** `kind="report"` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + `visibleColumns` map `resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem · `totalCount=0`) | — |
| 4 | flex + skeleton | **PASS** `.page` flex column · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | `buildRmmsReportToolbar` refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout V1–V5 | `data-lin-list-layout="erp-filter-bar"` · `LinErpListFilterBar` leading fragment SearchInput ×3 + Date + Input · **Xem** = `onSearch` · **0** Excel/In trên bar | **PASS** |
| 7 | list_parity SearchInput · **cấm** native `<select>` | **PASS** | — |
| 8 | tree_master | n/a P1 | Company→QL→Km **OUT** |
| 9 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** / **T-UI-LEAVE-01** OUT |
| 10 | Thêm mới Zone A | **PASS** không nút | — |
| 11 | Xem mới load · empty hint | **PASS** `viewed` · «Chưa xem — nhấn «Xem» để tải báo cáo tuần đường.» | — |
| 12 | Làm mới khi `!viewed` | live `reloadAll`: toast + **return** · **không** fetch | **PASS** (GAP-DS-BTD-10) |
| 13 | Excel sau Xem + applied + toolbar | `canExport: viewed` · `onExport` toolbar · filename `patrol-road.csv` · `CSV_COL_BY_GRID` | **PASS** |
| 14 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` filter `QL.22` · status enum · staff nva/ttb/lvc/pmd | **PASS** |
| 15 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 16 | TZ display local `vi-VN` từ `day` | live `formatDayVi` | **PASS** |
| 17 | ERP.* / plural reports | **none** | — |
| 18 | `filterMaxWidthPx={null}` | **PASS** | — |
| 19 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** · print `window.print` sau modal | — |
| 20 | Drill phiên | live `/patrol?id={sessionId}` | **PASS keep** |
| 21 | Chart SoCai client | **PASS** trend/by-status/by-route khi viewed + ≥1 dòng · KPI Phiên · Tuyến · Offline | keep |
| 22 | Seed 14 road + 1 inspect excluded · CUC2 · không QL.22 | BE `pr1`–`pr13`+`pr15` road · `pr14` `TK-*` inspect · Filter `PatrolType==road` | **PASS** |
| 23 | `FilterRoute` | live **exact** · empty/`all` = all | **PASS keep exact** |
| 24 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 25 | Query canonical `q` | FE gửi `q` + `staffId` + `routeId` + `status` | **PASS** giữ |
| 26 | Cột lưới PO §5 | day · code · route · userName · patrolTypeLabel · checkInCount · coveragePercent · statusLabel · offlineQueued · note · drill | **PASS** |
| 27 | `type` query | BE ignore · FE không gửi | **PASS** |
| 28 | Chỉ `PatrolType=road` trên lưới | FilterPatrolRoad hard-filter | **PASS** |
| 29 | Prefix | `reportEndpoint` `/patrol-road` | **PASS** — **cấm** `api/v1/reports` |

**Không** GAP P1 cùng surface. Dev = verify `confirms.beRepo && uiRepo` + build + ghi implement · **không** rewrite Kind E · **không** Kind B schema.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions | devSlash |
|----|---------|---------|-------|----------|---------|----------|
| S-BTD | Report A–D + SoCai | Full page Kind E | `/bao-cao/tuan-duong` | report | filter `LinErpListFilterBar` → Xem · refresh gated · Excel toolbar · chart SoCai · config FULL · drill phiên | `/agent-dev` + `/erp-report-context` |
| S-FORM | Form CRUD | — | — | — | **OUT P1** | — |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub | `/agent-dev` |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng | `/agent-dev` |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK | `/agent-dev` |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD | devSlash |
|----|------|-------|------|-------------|-----|----------|
| **T-CTX-01** | rpt-tuan-duong | docs | — | **done** | Context + controlHint + Design + SA · Kind E · prefix `api/v1/report` · **cấm** ERP.* · **cấm** `reports/patrol-road` · **cấm** `patrol-log-road` | — |
| **T-PERM-01** | rpt-tuan-duong | ui+api | T-CTX-01 | stub | Code `report.tuan-duong.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 | `/agent-dev` |
| **T-UI-LIST-01** | /bao-cao/tuan-duong | ui-list | T-PERM-01 | **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title Báo cáo tuần đường · Xem mới load · cột PO §5 · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A / Company-QL-Km · FE gửi **`q`** | `/agent-dev` |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` | — |
| **T-UI-LEAVE-01** | — | ui | T-UI-FORM-01 | **OUT** | không dirty form · **cấm** `window.alert`/`confirm` (toast + print modal) | — |
| **T-UI-RPT-01** | /bao-cao/tuan-duong | ui | T-PERM-01 | **PASS** | **`LinErpListFilterBar`** + **filter-bar-layout-hard V1–V5** · Xem = `onSearch` · Enter trên Input = Xem · **cấm** `LinListFilterField` / wrapper / Excel trên bar | `/agent-dev` |
| **T-UI-RPT-TB-01** | /bao-cao/tuan-duong | ui | T-UI-RPT-01 | **PASS** | Common actions **chỉ** `reportToolbar` (Làm mới · Chart · In · Config · Xuất Excel) · **cấm** filter button extra · GAP-FILTER-BAR-08 | `/agent-dev` |
| **T-UI-RPT-CONFIG-01** | /bao-cao/tuan-duong | ui | T-UI-RPT-01 | **done analog** | Config FULL `load/saveErpReportDisplayConfig` — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor | `/agent-dev` |
| **T-UI-RPT-EXPORT-01** | /bao-cao/tuan-duong | ui | T-UI-RPT-TB-01 | **PASS** | `report_export=export_yes` · toolbar `onExport` · viewed only · `patrol-road.csv` UTF-8 BOM subset | `/agent-dev` |
| **T-UI-RPT-CHART-01** | /bao-cao/tuan-duong | ui | T-UI-RPT-CONFIG-01 | **PASS** | SoCai client từ `items` — số phiên theo ngày · trạng thái · tuyến · **cấm** stub toast · **không** API chart · **cấm** KPI 4 card / map | `/agent-dev` |
| **T-UI-ACT-01** | rpt-tuan-duong | ui | T-UI-LIST-01 | **PASS gated** | Inventory dưới · Làm mới `!viewed` toast · Excel **chỉ** khi viewed | `/agent-dev` |
| **T-UI-LKP-01** | rpt-tuan-duong | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · trạng thái CI enum · NV nva/ttb/lvc/pmd · **cấm** native select · **cấm** invent QL.22 | `/agent-dev` |
| **T-UI-FIELD-01** | rpt-tuan-duong | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · grid `day` `formatDayVi` · cột DTO scalars readonly | `/agent-dev` |
| **T-UI-PROD-01** | rpt-tuan-duong | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT | `/agent-dev` |
| **T-UI-UX-01** | rpt-tuan-duong | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title không clip · empty/skeleton không blank body (`tl-list-shell-height` analog report) | `/agent-dev` |
| **T-BE-01** / **T-BE-RPT-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/patrol-road` · FilterRoute **exact** · FilterDay · pageSize allow-list · seed 14 road · **không** migration · **không** path mới | `/agent-dev` |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM filename `patrol-road.csv` · header union SA · **không** page | `/agent-dev` |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business | `/agent-dev` |
| **T-LKP-01** | integration | api | T-CTX-01 | **PASS consume** | `GET api/v1/integration/road-routes/search` · Report **không** clone master | `/agent-dev` |
| **T-QA-01** / **T-QA-RPT-01** | rpt-tuan-duong | qa | T-UI-LIST-01 | **PASS** (`task_0388f9a2`) | scenarios Kind E · mfeStdUrl · Xem · filter V1+V5 · Excel toolbar · chỉ `road` · form OUT · typecheck+build PASS | `/agent-qa` |
| **T-RV-01** | rpt-tuan-duong | review | T-QA-01 | **PASS** (`task_d55bdf4e`) | findings.md · review_confirm **approve** · P0 none · yarn typecheck+build PASS | `/agent-review` |

## T-UI-LIST (A–D · Kind E)

| Zone | Task | DoD |
|------|------|-----|
| A | Header icon `fas fa-road` + title **Báo cáo tuần đường** 22px không clip | **Cấm** Thêm mới / Tạo mới trên A |
| B | `LinErpListFilterBar` title trái · input + tìm cụm phải · 1 hàng wrap | GAP-FILTER-BAR / GAP-PO-BTD-09 |
| C | `listTitle` **Kết quả tuần đường** · `LinCatalogDataGrid` | skeleton 8 · **cấm** cột CRUD ⋯ · **cấm** Company/QL/Km |
| D | **Luôn** `LinCatalogListPagination` 50/100/200/500 · `totalCount=0` khi chưa Xem | **Cấm** ẩn D |

Empty: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo tuần đường.» · viewed 0 dòng — «Không có dòng phù hợp bộ lọc.»

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / trạng thái / NV / kỳ / tìm | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied · subset cột hiện | API-02 |
| Mở phiên | C | top window `/patrol?id={sessionId}` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## T-UI-LKP

| Field | controlHint | API / source | catalogKind |
|-------|-------------|--------------|-------------|
| routeId | SearchInput | **API-LKP-01** `GET api/v1/integration/road-routes/search` · fallback 38 CUC2 khi BFF down/empty | road-route Type A · trống=tất cả · **cấm** free-text · **cấm** `QL.22` |
| status | SearchInput | enum FE `in_progress`/`done`/`missed`/`offline` → query `status` | **cấm** native Select |
| staffId | SearchInput | enum FE `nva`/`ttb`/`lvc`/`pmd` → query `staffId` | **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` `yyyy-MM-dd` trên `day` | |
| qSearch | Input | query `q` Contains Code/Route/UserName/Note | |

**Cấm** Dev đổi SearchInput → native Select.

## T-UI-FIELD

Grid columns = DTO scalars **readonly**. **Không** editor.

| key | Label | Type / display |
|-----|-------|----------------|
| day | Ngày | Date ISO day → `formatDayVi` |
| code | Mã phiên | Text |
| route | Tuyến | Text |
| userName | Nhân viên | Text |
| patrolTypeLabel | Loại tuần | Text (`road` = Tuần đường) |
| checkInCount | Điểm CI | number |
| coveragePercent | Coverage % | number |
| statusLabel | Trạng thái | badge display |
| offlineQueued | Offline | Có/Không |
| note | Ghi chú | Text |
| drill | Nguồn | Button «Mở phiên» — không persist |

## T-UI-PROD

| Gate | Rule |
|------|------|
| Shell | 1× LinPageLayout kind=`report` |
| Grid | LinCatalogDataGrid · kéo cột ON · **cấm** raw `<table>` production |
| Footer | luôn LinCatalogListPagination · **cấm** footerPagination / pageSizeBar |
| HTTP | `apiClient` SSOT · `reportEndpoint` re-export only |
| Lookup | **cấm** copy road-route catalog vào Report DTO |
| Persist | in-memory P1 · **cấm** parent JSON · **cấm** warehouse tables |
| Prefix | **`api/v1/report`** · **cấm** `api/v1/reports` |
| Chart | client từ `items` · **không** API chart P1 |
| init-data | **OUT P1** — status/NV = enum tĩnh FE |
| Config Kind B | **OUT** — không `LinCatalogUiSchemaEditorModal` |

## T-UI-UX (`dev-ui-ux-constitution`)

1. Title không clip · live toolbar + grid/empty không blank.  
2. Filter wrap 1 hàng · cụm input phải.  
3. Chưa Xem không lưới dữ liệu (empty hint).  
4. Toast không native alert.  
5. Drill Patrol Field — không modal CRUD.  
6. Config FULL.  
7. Chart SoCai: line phiên theo ngày · bar/donut trạng thái · tuyến.

## T-BE / T-BFF

**Không** endpoint mới bắt buộc · **không** migration P1 · **không** folder domain mới.

| ID | Layer | Path / contract | Dev action |
|----|-------|-----------------|------------|
| T-BE-01 | API | `Domains/Report/Controllers/ReportQueryController.cs` · `GET api/v1/report/patrol-road` | **Giữ** envelope · FilterPatrolRoad `PatrolType=road` · **cấm** gộp inspect |
| T-BE-02 | API | `GET api/v1/report/patrol-road/export` | CSV UTF-8 BOM `patrol-road.csv` · **không** page |
| T-BE-03 | Query | `staffId`/`routeId` exact · `status` exact · `from`/`to` inclusive day · `q` Contains · `type` ignore · pageSize `{50,100,200,500}` | **Giữ** |
| T-BE-04 | Seed | 14 phiên `road` CUC2 + 1 inspect excluded (`pr14`) | **Giữ** · **cấm** invent `QL.22` · EF **P2** |
| T-BE-05 | DTO | `ReportPatrolRoadRowDto` scalars SA | **Giữ** · **cấm** Company/QL/Km P1 |
| T-BE-06 | Health | `GET api/v1/report/health` | giữ, không bắt UI |
| T-BFF-01 | BFF | `ReportBffController` `patrol-road` + `patrol-road/export` | **không** business · raw envelope |
| T-LKP-01 | Integration | `GET api/v1/integration/road-routes/search` | Report consume |
| T-PERM-01 | stub | `report.tuan-duong.read` | document only P1 |

## Dev backlog (IN P1)

| ID | Layer | Task |
|----|-------|------|
| GAP-TL-BTD-VERIFY | FE/BE | `yarn build` + `yarn typecheck` MFE · `dotnet build` **chỉ nếu** đụng API · ghi implement § Build + `retry.ssot_rereview` |

**OUT P1:** warehouse · EF PatrolSession join · CRUD · `ERP.*` · `api/v1/reports` · nhật ký sổ · tuần kiểm lưới · Kind B schema editor · invent tuyến ngoài CUC2 38.

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev verify (P1 expected **không** đổi FE trừ GAP mới) |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

TL **không** sửa MFE/BE runtime. Verify = live SSOT re-review (page · filter · endpoint · controller · export · BFF). Role TL **docs-only** — yarn/dotnet **N/A**.

## Out of pack

CRUD `patrol` / session trên slug này · Nhật ký sổ `PatrolLogBook` · reuse `patrol-log-road` · gộp tuần kiểm (`inspect`) · cột Company/QL/Km P1 · Dashboard KPI gộp · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · dashboard KPI slug khác · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · FilterRoute prefix · `/agent-dev-oms-map` / ai-detect / camera.

## Handoff Dev

- Live **PASS** Kind E — **không** rewrite · **không** Kind B schema · **không** path API mới · **không** migration · **không** FilterRoute prefix.
- Dev: **cấm** write đến `confirms.beRepo && uiRepo` (user tick board — **không auto**) · `devSlash=/agent-dev` + `/erp-report-context` · **yarn build** (+ typecheck) PASS · `dotnet build` **chỉ nếu** đụng API · ghi implement § Build + `retry.ssot_rereview`.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.
- This task = `roleOnly=team_lead` · **không** chạy Dev trong `task_29d588f1`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
