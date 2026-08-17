# Team-lead — task pack · rpt-giay-phep-thi-cong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-GPTC-02) |
| Feature Kind | **E** · leaf `/bao-cao/giay-phep-thi-cong` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/giay-phep-thi-cong` |
| route_confirm | **route_a** `/bao-cao/giay-phep-thi-cong` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_52e640a2`) |
| solution_confirm | **approve** (`task_10635f9c`) |
| be_repo_confirm | **approve** (run packet BE `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet MFE `Linm.Web.RMMS.Report`) |
| taskId | `task_a1db737d` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T04:40:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL `task_63e7d1ee` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `csdl-so-sach` / `POST /api/v1/construction-permits`.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-giay-phep-thi-cong/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX |
| Solution | `specs/rpt-giay-phep-thi-cong/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-GPTC-ROUTE / DRILL / EXPORT |
| Prototype | `ui/prototype/rpt-giay-phep-thi-cong-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-giay-phep-thi-cong-control-hint.md` | SearchInput tuyến/TT · Date · Input |
| PO | `specs/rpt-giay-phep-thi-cong/po/requirement.md` | GAP-PO-GPTC-01..10 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` `1.43.0` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `ConstructionPermitFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | FE `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` fallback | copy catalog road-route vào Report DTO · invent QL.22 |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · ConstructionPermit EF P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/giay-phep-thi-cong` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-giay-phep-thi-cong` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route **P2** |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-giay-phep-thi-cong/ui/prototype/rpt-giay-phep-thi-cong-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/giay-phep-thi-cong` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ).

## API contract (from SA — Dev delta **chỉ** GAP)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/construction-permits` | DONE in-memory 12 · coalesce `status ?? type`, `q ?? search` | **GAP-SA-GPTC-ROUTE** `FilterRoute` **exact** (cấm StartsWith `QL.1`) · keep query `status` `routeId` `from` `to` `q` `page` `pageSize` · FE **gửi** `status`/`q` (**cấm** `type`/`search`) |
| API-02 | GET | `/construction-permits/export` | DONE CSV UTF-8 BOM | **IN P1** header thêm `contractor,issuer,extendedAt` (sau `workName` / trước `status`) để Config cột ẩn có thể subset · **không** page · `status` = **StatusLabel** VN |
| API-03 | GET | `/integration/road-routes/search` | FE consume + seed fallback | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | enum TT tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. `status` empty/`all` = all. `routeId` empty/`all` = all · **exact** `Route`.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportConstructionPermitRowDto`: `id` `permitId` `permitNo` `day` `route` `stationKm` `investor` `contractor` `workName` `issuer` `issuedAt` `expiresAt` `extendedAt` `status` `statusLabel`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` date-only trên `day` (`PermitDate`) · grid display `vi-VN` từ `day` |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** | không tenant table |
| parent_json | **cấm** | — |
| lookup_share | **share_read P1** | road-route seed + Type A **P2** |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.giay-phep-thi-cong.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | SearchInput seed + enum TT |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-file-signature` · title **Giấy phép thi công** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tuyến/TT · Date · Input q · **Xem** = `onSearch`) · Excel · Làm mới / **Xem biểu đồ** SoCai / In / **Sửa config FULL** — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · STT grid · cột Design · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `ConstructionPermitReportPage` + FilterBar + BE)

Audit `Linm.Web.RMMS.Report` `ConstructionPermitReportPage.tsx` + `ConstructionPermitFilterBar.tsx` + `reportEndpoint` + `ReportQueryController` / `ReportService` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate localStorage | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render · 50/100/200/500 | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + column prefs | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` · **GAP** cột ẩn default `contractor`/`issuer` chưa seed |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 11 | Excel sau Xem + applied filters | `canExport=viewed` · params **applied** `status`/`q` · subset `columnPrefs` | **T-UI-ACT-01** map CSV thiếu `contractor`/`issuer`/`extendedAt` khi Config bật · BE header thiếu 3 cột |
| 12 | Query canonical `status`/`q` | FE **PASS** gửi `status`/`q` (không `type`/`search`) · BE coalesce **PASS** | giữ · **cấm** regress gửi alias |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP` strip QL.22 · enum TT **PASS** | **T-UI-LKP** giữ |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | TZ display local `vi-VN` từ `day` | `formatDayVi` **PASS** | **T-UI-FIELD-01** Hiệu lực chưa hiện `ExtendedAt` khi có |
| 16 | ERP.* / plural reports | **none** | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 19 | Drill CSDL sổ | live `/csdl-so-sach?id=` **thiếu** `kind` | **T-UI-ACT-01** GAP-SA-GPTC-DRILL |
| 20 | Chart SoCai client | **PASS** 3 charts từ `items` khi viewed + có dòng | — |
| 21 | Seed 12 · CUC2 · không QL.22 | **PASS** BE rows | — |
| 22 | `FilterRoute` exact | live exact **hoặc** `QL.1` StartsWith → match `QL.10`/`QL.15`/`QL.217` | **T-BE-01** GAP-SA-GPTC-ROUTE — sửa helper **exact only** (dùng chung Report; không giữ StartsWith) |
| 23 | Grid cột ẩn default | live không có `contractor`/`issuer` trong `columns` | **T-UI-LIST-01** thêm cột + default `visible: false` + Config «Thêm cột» |
| 24 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns` / `LinCatalogUiSchemaEditorModal`) | **cấm** đổi sang Kind B catalog schema |

**Cấm** chỉ sửa drill nếu còn FilterRoute / cột ẩn / CSV cùng surface còn GAP.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-GPTC | Report A–D | Full page Kind E | `/bao-cao/giay-phep-thi-cong` | report | filter `LinErpListFilterBar` → Xem · refresh · Excel · chart SoCai · config FULL · drill CSDL |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — title «Cấu hình hiển thị danh mục» nếu SSOT modal hỗ trợ · **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-giay-phep-thi-cong | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-giay-phep-thi-cong | ui+api | T-CTX-01 | stub | Code `report.giay-phep-thi-cong.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/giay-phep-thi-cong | ui-list | T-PERM-01 | shell **PASS** + **GAP cột ẩn** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title · listTitle Kết quả báo cáo giấy phép thi công · Xem mới load · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`status` `q`** · thêm cột `contractor` (Nhà thầu) · `issuer` (Cơ quan cấp) default **ẩn** · Config FULL thêm cột |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/giay-phep-thi-cong | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/giay-phep-thi-cong | ui | T-UI-RPT-01 | **done analog** + **GAP seed ẩn** | Config FULL — **cấm** `configHint` / `LinListTableConfigModal` · seed default hidden contractor/issuer |
| **T-UI-RPT-CHART-01** | /bao-cao/giay-phep-thi-cong | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — KPI TT + tuyến · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-giay-phep-thi-cong | ui | T-UI-LIST-01 | **GAP drill + CSV map** | Inventory dưới · Excel **chỉ** khi `viewed` · params **applied** · `CSV_COL_BY_GRID`: `validity`→`issuedAt`+`expiresAt` (+`extendedAt` nếu hiện) · `contractor`/`issuer` khi visible · drill `/csdl-so-sach?kind=construction-permits&id={permitId}` top window |
| **T-UI-LKP-01** | rpt-giay-phep-thi-cong | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · TT `hieu-luc`/`het-han`/`gia-han` + empty · **cấm** native select · **cấm** invent QL.22 |
| **T-UI-FIELD-01** | rpt-giay-phep-thi-cong | ui | T-UI-LIST-01 | **GAP ExtendedAt** | from/to Date SSOT · ISO date-only query · grid `day` `vi-VN` · Hiệu lực `IssuedAt` → `ExpiresAt` · nếu `extendedAt` khác rỗng thì hiện gia hạn (Design) · **không** editor |
| **T-UI-PROD-01** | rpt-giay-phep-thi-cong | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT |
| **T-UI-UX-01** | rpt-giay-phep-thi-cong | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **GAP FilterRoute** | `FilterRoute`: **exact** `Route` vs `routeId` case-insensitive · empty/`all` = all · **cấm** `StartsWith("QL.1")` · keep coalesce status/q · pageSize allow-list · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **GAP header extra cols** | CSV UTF-8 BOM `construction-permits.csv` · thêm `contractor,issuer,extendedAt` vào default file · `status` = StatusLabel |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-QA-01** | rpt-giay-phep-thi-cong | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Excel gated · query status/q · FilterRoute exact · drill kind · form OUT · build PASS |
| **T-RV-01** | rpt-giay-phep-thi-cong | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / TT / kỳ / q | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; chưa viewed = apply+view | same |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · cột hiện | API-02 |
| Mở sổ GP | C | top window `/csdl-so-sach?kind=construction-permits&id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev sau GAP FE |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | Dev sau GAP-SA-GPTC-ROUTE / export header |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD cấp phép · `POST /api/v1/construction-permits` · CRUD `RowViolation` · GOVOne chrome · warehouse schema · ConstructionPermit EF P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · `LinCatalogUiSchemaEditorModal` (Kind B only).

## Handoff Dev

- Implement **mọi** GAP cùng surface: `FilterRoute` exact · drill `kind=construction-permits` · cột ẩn contractor/issuer + Config · Hiệu lực + `ExtendedAt` · CSV header + `CSV_COL_BY_GRID`.
- `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve → Dev **được write**.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
