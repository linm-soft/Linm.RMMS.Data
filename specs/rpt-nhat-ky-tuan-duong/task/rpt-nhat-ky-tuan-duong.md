# Team-lead — task pack · rpt-nhat-ky-tuan-duong (Kind E)

> **CR 2026-09-17 PDF Wave B:** delta pack [`rpt-nhat-ky-tuan-duong-cr-pdf.md`](./rpt-nhat-ky-tuan-duong-cr-pdf.md) · `task_8cbb2073` · **giữ** shell dưới · **cấm** overwrite Kind E scaffold bằng CRUD.
> Wave A prior TL: `task_646fa977` (live PASS shell) — Wave B **chỉ** load sổ + drill + SIGN + HDSD.

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-NKTD-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-duong` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` |
| route_confirm | **route_a** `/bao-cao/nhat-ky-tuan-duong` · alias `/bao-cao/nk-td` (**giữ** · URL không mới · autoApprove) |
| autoApprove | **ON** |
| design_confirm | **confirmed** (`task_6d170bb5` Wave B) |
| solution_confirm | **confirmed** (`task_5f0a988e` Wave B) |
| be_repo_confirm | **yes** — STATUS `Linm.RMMS.WebService` |
| ui_repo_confirm | **yes** — STATUS `Linm.Web.RMMS.Report` |
| taskId | `task_8cbb2073` |
| cr | `nktd-pdf-20260917` · Wave B · cite `SRC-NKTD-PDF` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-09-18T17:55:00.000Z` |
| Recheck | Wave B: **không** full `tl-retry-ssot-rereview` rewrite · Dev verify shell + delta DoD CR |

**Wave A** re-audit live Kind E shell (`task_646fa977`) — **PASS giữ**. **Wave B** Dev = CR delta pack (§ T-BE-RPT-01 · T-FE-02 · SIGN · HDSD).

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** reuse `api/v1/report/checkins` · **cấm** InspectionLog / Mẫu 8 · **cấm** parent JSON · **cấm** copy CRUD `csdl-so-sach` · **cấm** path API mới P1 · **cấm** folder domain mới · **cấm** POST/PUT/DELETE PatrolLog* trên slug này.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-nhat-ky-tuan-duong/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · GAP-DS-NKTD-01..11 |
| Solution | `specs/rpt-nhat-ky-tuan-duong/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-NKTD-* |
| Prototype | `ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` | SearchInput tuyến/cán bộ · Date · Input |
| PO | `specs/rpt-nhat-ky-tuan-duong/po/requirement.md` | GAP-PO-NKTD-01..12 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `PatrolLogRoadFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` |
| HTTP | `apiClient` · `reportEndpoint` re-export · query **`q`** | fork ApiClient · reuse check-in / tuần kiểm |
| Lookup | `ROAD_ROUTE_LOOKUP_CONFIG` + Integration search · `WORKLOG_STAFF_LOOKUP` FE | copy catalog road-route vào Report DTO · invent QL.22 |
| BFF | proxy only | business in BFF |
| Persist | Wave B: consume Csdl* sổ `patrol-logs` · empty=`[]` · **cấm** seed | warehouse tables · parent JSON · seed fallback |
| Dropdown filter | SearchInput | native `<select>` · init-data |
| Config | report table modal FULL | Kind B catalog schema editor |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/nhat-ky-tuan-duong` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-nhat-ky-tuan-duong` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | Wave B: `rmms_csdl_*` + So02 entries · **cấm** check-in seed fallback |
| `source.migrations` | **không** (migration=none) |
| Lookup | Integration road-route Type A · staff SearchInput P1 |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ — **không** đổi repo). **Cấm** `Linm.Web.ERP.WebService`. **Cấm** gộp `rpt-nhat-ky-tuan-kiem` / `rpt-checkin`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/patrol-log-road` | Wave A DONE path · Wave B **đổi load** → sổ · query `staffId` `routeId` `from` `to` `q` `page` `pageSize` · `type` ignored | **keep path** · FilterRoute exact · FE **`q`** · empty=`[]` · **cấm** seed |
| API-02 | GET | `/patrol-log-road/export` | CSV UTF-8 BOM · `patrol-log-road.csv` · **không** page | **keep** · cùng filter sổ · cột `locationText`/`supervisorNote` |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback · filter `QL.22` | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | cán bộ enum tĩnh FE `nva`/`ttb`/`lvc`/`pmd` |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId` `staffId`. Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportPatrolLogRoadRowDto`: `id` `bookId` `bookNo` `entryId` `day` `checkedAt` `route` `patrolStaffId` `patrolStaff` `locationKm` `locationText` `weatherAndEvent` `onSiteAction` `supervisorNote` `status` `statusLabel`.

Export header P1 (live): `day,route,patrolStaff,locationKm,locationText,weatherAndEvent,onSiteAction,status,bookNo,entryId,bookId`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` day bounds trên **`EventAt`** · display `vi-VN` |
| XCO | **xco_na** | Wave B consume Csdl* |
| SHARE | **share_na** P1 | lookup road-route `share_a` riêng |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.nhat-ky-tuan-duong.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | filter date-only · display vi-VN |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-road` · title **Nhật ký tuần đường** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tuyến/cán bộ · Date · Input qSearch · **Xem** = `onSearch`) · Excel · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột PO/Design **gồm locationText** · drill sổ · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `PatrolLogRoadReportPage` + `PatrolLogRoadFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `PatrolLogRoadReportPage.tsx` + `PatrolLogRoadFilterBar.tsx` + `reportEndpoint.getPatrolLogRoad` + `ReportQueryController` / export — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem · `totalCount=0`) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput ×2 + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem»…» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: toast + **return** · **không** fetch | **PASS** |
| 12 | Excel sau Xem + applied filters | `canExport: viewed` · `q` + applied · filename `patrol-log-road.csv` · `CSV_COL_BY_GRID` gồm `locationText` | **PASS** |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP_CONFIG` + `WORKLOG_STAFF_LOOKUP` · không `QL.22` trên page | **PASS** |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | TZ display local `vi-VN` từ `day` | live `formatDayVi` | **PASS** |
| 16 | ERP.* / plural reports | **none** | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** · print `window.print` sau modal | — |
| 19 | Drill sổ | Wave A: `?kind=` · **Wave B FAIL** → T-FE-02 `/csdl-so-02` hoặc `?resource=patrol-logs&id=` · **cấm** `?kind=` | **GAP-NKTD-DRILL-01** |
| 20 | Chart SoCai client | **PASS** trend/by-status/by-route khi viewed + có dòng · KPI Dòng · Tuyến · Đã ký | keep · live từ sổ items |
| 21 | Seed 12 · CUC2 | Wave A PASS seed · **Wave B FAIL** nếu còn seed khi sổ query chạy | **GAP-NKTD-SRC-01** → T-BE-RPT-01 |
| 22 | `FilterRoute` | live **exact** · empty/`all` = all | **PASS keep exact** |
| 23 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 24 | Query canonical `q` | FE gửi `q` + `staffId` + `routeId` | **PASS** giữ |
| 25 | **Cột Vị trí** | DTO + grid `locationText` **có** | **PASS** (GAP-DS-NKTD-01 đóng live) |
| 26 | Cột lưới PO §5 | day · route · patrolStaff · locationKm · weatherAndEvent · onSiteAction · statusLabel · bookNo · locationText · drill | **PASS** |
| 27 | `type` query | BE ignore · FE không gửi | **PASS** |

**Wave A:** shell PASS. **Wave B GAP P1:** SRC-01 · DRILL-01 · SIGN-01 (PRINT-01 = P2). Dev = CR delta + yarn build · **không** rewrite Kind E · **không** Kind B schema.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-NKTD | Report A–D + SoCai | Full page Kind E | `/bao-cao/nhat-ky-tuan-duong` | report | filter `LinErpListFilterBar` → Xem · refresh gated · Excel applied · chart SoCai · config FULL · drill sổ |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-nhat-ky-tuan-duong | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* · **cấm** `reports/patrol-log-road` |
| **T-PERM-01** | rpt-nhat-ky-tuan-duong | ui+api | T-CTX-01 | stub | Code `report.nhat-ky-tuan-duong.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/nhat-ky-tuan-duong | ui-list | T-PERM-01 | **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title Nhật ký tuần đường · Xem mới load · cột gồm `locationText` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`q`** |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/nhat-ky-tuan-duong | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/nhat-ky-tuan-duong | ui | T-UI-RPT-01 | **done analog** | Config FULL — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/nhat-ky-tuan-duong | ui | T-UI-RPT-CONFIG-01 | **PASS** | SoCai client từ `items` — số dòng theo ngày · trạng thái · tuyến · **cấm** stub toast · **không** API chart · **cấm** KPI 4 / map InZone |
| **T-UI-ACT-01** | rpt-nhat-ky-tuan-duong | ui | T-UI-LIST-01 | **PASS gated** | Inventory dưới · Làm mới `!viewed` toast · Excel **chỉ** khi viewed · `CSV_COL_BY_GRID` gồm `locationText` |
| **T-UI-LKP-01** | rpt-nhat-ky-tuan-duong | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · cán bộ nva/ttb/lvc/pmd · **cấm** native select · **cấm** invent QL.22 |
| **T-UI-FIELD-01** | rpt-nhat-ky-tuan-duong | ui | T-UI-LIST-01 | **PASS** | from/to Date SSOT · ISO date-only query · grid `day` `formatDayVi` · cột DTO scalars readonly |
| **T-UI-PROD-01** | rpt-nhat-ky-tuan-duong | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT |
| **T-UI-UX-01** | rpt-nhat-ky-tuan-duong | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/patrol-log-road` · FilterRoute **exact** · FilterDay · pageSize allow-list · seed 12 · DTO có `locationText` · **không** migration · **không** path mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM filename `patrol-log-road.csv` · header union SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-LKP-01** | integration | api | T-CTX-01 | **PASS consume** | `GET api/v1/integration/road-routes/search` · Report **không** clone master |
| **T-QA-01** | rpt-nhat-ky-tuan-duong | qa | T-UI-LIST-01 | pending QA | scenarios Kind E · mfeStdUrl · Xem · Làm mới gated · Excel · cột Vị trí · form OUT · build PASS |
| **T-RV-01** | rpt-nhat-ky-tuan-duong | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / cán bộ / kỳ / tìm | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied · subset cột hiện | API-02 |
| Mở sổ | C | Wave B: `/csdl-so-02` **hoặc** hub `?resource=patrol-logs&id=` (+ entry) · **cấm** `?kind=` | — (T-FE-02) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev verify (P1 expected **không** đổi FE trừ GAP mới) |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

TL **không** sửa MFE/BE runtime. Verify = live SSOT re-review (page · filter · endpoint · controller · export · BFF).

## Out of pack

CRUD `csdl-so-sach` / PatrolLog* trên slug này · Mẫu 8 tuần kiểm · `rpt-checkin` PatrolSession · KPI 4 · map InZone · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · dashboard KPI slug khác · `[RequirePermission]` block P1 · API chart riêng · path API mới P1 · FilterRoute prefix.

## Handoff Dev (Wave B · `task_8cbb2073`)

- Shell Kind E **giữ** — Dev làm **CR delta** [`rpt-nhat-ky-tuan-duong-cr-pdf.md`](./rpt-nhat-ky-tuan-duong-cr-pdf.md): **T-BE-RPT-01** → **T-BE-02** → **T-UI-RPT-*** / **T-FE-02** / **T-HDSD-01**.
- **Cấm** rewrite Kind E · Kind B schema · path API mới · migration · FilterRoute prefix · ERP.* · seed fallback · drill `?kind=`.
- `devSlash` = **`/agent-dev`** (+ `/erp-report-context` · `filter-bar-pipeline` trước Write filter).
- Dev: STATUS be/ui repo **yes** · **yarn build** (+ typecheck) PASS · `dotnet build` khi đụng API · ghi implement.
- autoApprove **ON** → enqueue **dev** sau TL `completed`. QA/Review **pending**. e2e **chỉ** `/agent-qa*`.
- This task = `roleOnly=team_lead` · **không** chạy Dev trong `task_8cbb2073`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · changeScope=edit_page · cr=nktd-pdf-20260917 · taskId=task_8cbb2073 -->
