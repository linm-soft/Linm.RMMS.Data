# SA — solution-discovery — rpt-vi-pham-hlatdb (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` — agent tự confirm) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-HLATDB-02) |
| Feature Kind | **E** · leaf `/bao-cao/vi-pham-hlatdb` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-vi-pham-hlatdb` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/vi-pham-hlatdb` |
| mfeStdUrl | `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_283c81e9` |
| prior · po | **done** · `po/requirement.md` · `task_ab8fa516` |
| prior · data_analy | **done** · `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` · hash `sha256:rpt-vi-pham-hlatdb-context-20260816` · cluster handoff **N/A** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp · SSOT orchestrator mới hơn — **không** regen artifact) |
| autoApprove | **ON** |
| chain | **ON** |
| sourceFormReady | **yes** · entity `RowViolation` · CSDL §3.6 |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `RowViolation` |
| taskId | `task_f49d07d0` |
| updatedAt | `2026-08-16T17:25:00.000Z` |
| report_export | **export_yes** (PO/Design Excel P1 · autoApprove) |
| report_chart | **chart_in_page** (SoCai khi viewed + ≥1 dòng · **không** dashboard slug) |

> SA **chốt** lookup + query/export contract. Design **chốt** control-map. **Cấm** Dev đổi SearchInput → Select.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_24fb0ec1` (ngắn). Pack này re-audit live BE + Design confirmed `task_283c81e9`.

Context `api/v1/reports/row-violations` **stale** (GAP-PO-HLATDB-01 / GAP-DS-HLATDB-03 **đóng**).

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · `beRepo=approve` |
| Domain | Report / `report` · DOMAIN-MAP `rpt-vi-pham-hlatdb` |
| API host | `api/src/RMMS.Service.Api/Domains/Report/` |
| BFF | `bff/domains/report/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Report` · `uiRepo=approve` |
| Response | CommonLib `ApiResponse` / `ReportPagedResult` |
| Auth perm | `report.vi-pham-hlatdb.read` (P1 stub — không block) |
| Persist | P1 in-memory seed · **cấm** parent JSON · RowViolation EF **P2** |
| Out of pack | CRUD sổ 6 · warehouse · Kind B · KPI hub |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_list_only** (`tz_day`) — filter `from`/`to` date `yyyy-MM-dd` trên field `day` (`At`) · **không** persist TZ client · grid Date display local `vi-VN` từ `day` |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không GET/{id} Report · drill = FE route CSDL |
| sa_shared_table | **share_na** — không schema warehouse / RowViolation EF P1 |
| lookup_share | road-route = **share_read P1** seed CUC2 + Type A Integration **P2** fallback · **cấm** clone catalog vào Report DTO |
| parent_json | **cấm** |
| design_confirm | **approve** (`task_283c81e9`) |
| repo | `beRepo` + `uiRepo` **approve** (STATUS) — Dev được write sau `solution_confirm` |
| autoApprove | **ON** — SA **confirmed** agent (`task_f49d07d0`) |

AskQuestion (autoApprove): `sa_tz_gate=tz_list_only` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `report_export=export_yes` · `report_chart=chart_in_page` · `2026-08-16T17:25:00.000Z`

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · type `ReportRowViolationRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · RowViolation EF **P2** |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getRowViolations` / `exportRowViolations` |
| Lookup tuyến | **P1** `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` (fallback seed nếu BFF down / rỗng) · **cấm** invent QL.22 · **cấm** copy Integration models vào Report DTO |

**Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Asset` cho slug này (drill = FE route only). **Cấm** `POST` RowViolation trên leaf report.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain `task_24fb0ec1`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-HLATDB-PREFIX | `GET api/v1/report/row-violations` + `/row-violations/export` | **Giữ** — đóng GAP-PO-HLATDB-01 / GAP-DS-HLATDB-03 · **cấm** `api/v1/reports` | document |
| GAP-SA-HLATDB-ENVELOPE | `ApiResponse<ReportPagedResult<ReportRowViolationRowDto>>` `{ success, message, data }` · `data.items` + paging · **không** KPI DTO | **Giữ** · BFF proxy raw query-string · **không** envelope mới · **không** KPI hub | document |
| GAP-SA-HLATDB-QUERY | Controller query **`tab` `status` `type` `q` `search` `routeId` `from` `to` `page` `pageSize`** · coalesce `status ?? type`, `q ?? search` | Canonical **`tab` `status` `routeId` `from` `to` `q` `page` `pageSize`** (GAP-DS-HLATDB-04) · BE **giữ** coalesce · FE **đã** gửi `status`/`q`/`tab` · **cấm** gửi `type`/`search` sau pack này | FE keep |
| GAP-SA-HLATDB-TAB | `tab` empty → `detail` · `summary` group by `Route` | **Giữ** | keep |
| GAP-SA-HLATDB-ROW | `id` `violationId` `day` `at` `route` `stationKm` `adminArea` `violationStatus` `statusLabel` `orgName` `minutesDepot` `minutesCommune` `minutesAdmin` `currentState` `unitConfirm` `tab` `ticketCount` `outstandingCount` | **Giữ** — map nguồn `At`=`day`/`at` `RouteId`=`route` `StationKm` `AdminArea` `ViolationStatus` `OrgName` `Minutes*` `CurrentState` `UnitConfirm` | keep |
| GAP-SA-HLATDB-STATUS | `status` exact `phat-hien`/`lap-bb`/`dang-xu-ly`/`da-xu-ly`/`ton-dong` · empty/`all` = all | **Giữ** | keep |
| GAP-SA-HLATDB-ROUTE | `FilterRoute` **exact** case-insensitive (live **không** StartsWith) | **Giữ** exact · empty/`all` = all · **cấm** StartsWith `QL.1` | keep |
| GAP-SA-HLATDB-DAY | `FilterDay` inclusive `from`/`to` trên `day` (`At`) | **Giữ** | keep |
| GAP-SA-HLATDB-Q | Contains `Route`/`StationKm`/`AdminArea`/`OrgName`/`CurrentState`/`StatusLabel` | Canonical **`q`** cùng Contains | keep |
| GAP-SA-HLATDB-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-HLATDB-SEED | In-memory **12** dòng CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.10` `QL.8` `QL.9`) · **không** QL.22 | **Giữ** (nằm 8–15 GAP-PO-HLATDB-04) | keep |
| GAP-SA-HLATDB-EXPORT | CSV UTF-8 BOM `row-violations.csv` · header gồm `day,at,route,…,status(=StatusLabel),…,ticketCount,outstandingCount,violationId` · **không** page | **IN P1** file BE (full set) · visible-column subset = **FE** từ `columnPrefs` khi viewed · export **applied** filters · **cấm** export khi chưa Xem | BE keep · FE keep |
| GAP-SA-HLATDB-CHART | FE SoCai `by-status` / `by-route` / `trend-count` từ `items` trang | SoCai **client** khi `viewed` + có dòng — KPI TT + tuyến (Design) · **không** API chart P1 | FE |
| GAP-SA-HLATDB-DRILL | FE `/csdl-so-sach?kind=row-violations&id={violationId}` top window | **Giữ** — **không** Report GetById | FE keep |
| GAP-SA-HLATDB-PERM | Không `[RequirePermission]` | **P1 stub** `report.vi-pham-hlatdb.read` (+ export cùng read) — gắn khi CommonLib ≥ gate · **không** block | document |
| GAP-SA-HLATDB-RM | In-memory 12 dòng | **P1 giữ** · RowViolation EF **P2** (GAP-PO-HLATDB-07) | document |
| GAP-SA-HLATDB-LKP | FE `ROAD_ROUTE_SEED` 38 tuyến + `GET /integration/road-routes/search` fallback seed · strip `QL.22` | **P1 giữ** · Type A Integration **P2** · SearchInput · **cấm** native `<select>` | FE |
| GAP-SA-HLATDB-INIT | Không `init-data` | **OUT P1** — tab/TT = enum tĩnh FE (`ROW_VIOLATION_*_LOOKUP`) · **không** Dropdown BE | FE only |
| GAP-SA-HLATDB-FOOTER | Zone D `LinCatalogListPagination` live | **Luôn** hiện — **FE** | FE |
| GAP-SA-HLATDB-CONFIG | Live `ReportDisplayConfigModal` + column prefs | **FULL** `LinReportTableConfigModal` analog · **cấm** `LinListTableConfigModal` / `configHint` | FE keep |
| GAP-SA-HLATDB-HIDDEN | Live `columnSeeds.visible: true` **mọi** cột detail (BB xã / BB HC hiện default) | Design: `minutesCommune` `minutesAdmin` **ẩn default** — thêm qua Config | FE Dev |
| GAP-SA-HLATDB-LASTDAY | Summary cột key live = `day` label «Ngày gần nhất» | Design key `lastDay` = **alias UI** — **không** thêm field DTO · giữ `day`/`at` | document |

**Không** migration P1. **Không** endpoint path mới. Delta Dev chủ yếu **ẩn default** 2 cột BB.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | FE seed P1 + Integration search | **cấm** copy road-route catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |
| Config | Kind E report | **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-HLATDB | Report A–D + SoCai | Full page `LinPageLayout` kind=`report` | `/bao-cao/vi-pham-hlatdb` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · print stub · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast · cột ẩn default: `minutesCommune` `minutesAdmin` (tab detail) |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng + `showCharts` |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | stub toast OK P1 — **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/row-violations` |
| Xuất Excel | **API-02** GET `report/row-violations/export` |
| SearchInput tuyến | **API-03** GET `integration/road-routes/search` · P1 fallback `ROAD_ROUTE_SEED` |
| SearchInput tab | **enum tĩnh FE** `detail`/`summary` — **không** API |
| SearchInput TT VP | **enum tĩnh FE** `phat-hien`/`lap-bb`/`dang-xu-ly`/`da-xu-ly`/`ton-dong` — **không** API |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE row-violation rows P1 trên slug này.

## Form / screen → data inventory

| Screen / FormMode | Fields (UI) | Source type | Persist entity | Notes |
|-------------------|-------------|-------------|----------------|-------|
| S-HLATDB filter | tab · routeId · status · fromDate · toDate · qSearch | query | — | draft đến **Xem** |
| S-HLATDB grid detail | day · route · stationKm · adminArea · statusLabel · orgName · minutes* · currentState · unitConfirm · drill | derived (read-model) | `RowViolation` P2 | P1 seed |
| S-HLATDB grid summary | route · ticketCount · outstandingCount · day (max At) · adminArea · drill | derived aggregate | same | group `Route` |
| S-FORM | — | — | — | OUT |

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportRowViolationRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

| | |
|--|--|
| Purpose | Health Report domain |
| Permission | `report.vi-pham-hlatdb.read` (stub) |
| Tenant | X-Company-Id |
| Request | — |
| Response | health DTO |
| Errors | 503 |
| Form surfaces | none (ops) |
| Context docs | `docs/context/features/rpt-vi-pham-hlatdb.md` |
| Demo HTML | **N/A** (packKind report · prototype Design) |
| data-import | **N/A** — no Excel cluster |
| Migration | none |

### API-01 — Row violations (Xem)

`GET /api/v1/report/row-violations?tab=&status=&routeId=&from=&to=&q=&page=&pageSize=`  
Alias (compat live): `type` ≡ `status` · `search` ≡ `q` — coalesce **canonical thắng** nếu cả hai.  
BFF `GET web-bff/api/v1/report/row-violations` + cùng query (forward raw).

| | |
|--|--|
| Purpose | Paged report Kind E — detail rows hoặc summary theo tuyến |
| Permission | `report.vi-pham-hlatdb.read` |
| Tenant | X-Company-Id · companyCode (P1 seed không filter tenant table) |
| Request | query dưới |
| Response | `ReportPagedResult<ReportRowViolationRowDto>` |
| Errors | 401 JWT · 200 empty items |
| Form surfaces | Xem · pager · chart client |
| Field map | bảng dưới |
| Context docs | `docs/context/features/rpt-vi-pham-hlatdb.md` §3 · CSDL §3.6 |
| Demo HTML | prototype `ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |
| data-import | **N/A** — seed in-memory ReportService `RowViolations` 12 dòng |
| Sample row | `RV-20260801-001` · `QL.1` · `Km12+150` · `phat-hien` |
| Migration | none P1 |

| Query | Rule |
|-------|------|
| `tab` | empty / omit → `detail` · `summary` = group by `Route` |
| `status` | empty / omit / `all` = all · else exact `phat-hien` \| `lap-bb` \| `dang-xu-ly` \| `da-xu-ly` \| `ton-dong` trên `ViolationStatus` |
| `routeId` | empty / omit / `all` = all · else **exact** `Route` (case-insensitive) — **cấm** StartsWith |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive (`At`) |
| `q` | Contains tuyến · km · địa bàn · tổ chức · hiện trạng · StatusLabel |
| `page`/`pageSize` | allow-list **50/100/200/500** |
| `type`/`search` | **legacy alias** — BE coalesce; FE **không** gửi sau pack này |

**Row DTO** `ReportRowViolationRowDto`: `id` `violationId` `day` `at` `route` `stationKm` `adminArea` `violationStatus` `statusLabel` `orgName` `minutesDepot` `minutesCommune` `minutesAdmin` `currentState` `unitConfirm` `tab` `ticketCount` `outstandingCount`.

Sort detail: `day` desc · `route` asc. Sort summary: `route` asc.

Field map UI → DTO → nguồn:

| uiField | dtoField | source |
|---------|----------|--------|
| day / lastDay | `day` | `At` |
| route | `route` | `RouteId` |
| stationKm | `stationKm` | `StationKm` |
| adminArea | `adminArea` | `AdminArea` |
| statusLabel | `statusLabel` | `ViolationStatus` label |
| orgName | `orgName` | `OrgName` |
| minutesDepot | `minutesDepot` | `MinutesDepot` |
| minutesCommune | `minutesCommune` | `MinutesCommune` |
| minutesAdmin | `minutesAdmin` | `MinutesAdmin` |
| currentState | `currentState` | `CurrentState` |
| unitConfirm | `unitConfirm` | `UnitConfirm` |
| ticketCount | `ticketCount` | count group |
| outstandingCount | `outstandingCount` | count `ton-dong` |
| drill | `violationId` | id sổ 6 |

### API-02 — Export row-violations

`GET /api/v1/report/row-violations/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `row-violations.csv`.  
CSV `status` column = **StatusLabel** (Phát hiện / Lập biên bản / …).

| | |
|--|--|
| Purpose | Excel/CSV theo bộ lọc applied |
| Permission | cùng read |
| Tenant | same |
| Request | same filter API-01, no page |
| Response | file bytes |
| Errors | 401 |
| Form surfaces | reportToolbar Xuất Excel · `canExport` chỉ khi viewed |
| Context docs | same |
| Demo HTML | prototype Excel analog |
| data-import | N/A |
| Migration | none |

### API-03 — Road-route search (lookup, Integration — **không** Report)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/integration/road-routes/search`.  
P1: FE gọi; nếu fail/rỗng → `ROAD_ROUTE_SEED` 38 tuyến CUC2 · **cấm QL.22**. **Không** copy catalog vào Report domain.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng **applied** filters.
- Đổi filter draft **không** fetch đến **Xem**. Đổi filter rồi Xem → `page=1`.
- Làm mới: `!viewed` → apply+view; đã Xem → refetch applied.
- Drill: FE `/csdl-so-sach?kind=row-violations&id={violationId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng.
- Excel: chỉ khi `viewed` · params = **applied** (không draft lệch lưới).
- Config: Kind E FULL — **cấm** Kind B schema editor.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| tab | SearchInput | **không API** | `detail` / `summary` |
| routeId | SearchInput | P1 seed + **API-03** P2 | **road-route** · empty=Tất cả · **cấm QL.22** |
| status | SearchInput | **không API** · query `status` | enum dưới / empty=Tất cả |
| fromDate / toDate | Date | query `from`/`to` | trên `At`=`day` |
| qSearch | Input | query `q` | tuyến · km · địa bàn · tổ chức · hiện trạng |

Grid columns = DTO scalars readonly + drill button. **Cấm** editor.

Tab:

| value | label |
|-------|-------|
| `detail` | Thống kê chi tiết |
| `summary` | Tổng hợp theo tuyến |

Trạng thái VP:

| value | label |
|-------|-------|
| `` (empty) | Tất cả |
| `phat-hien` | Phát hiện |
| `lap-bb` | Lập biên bản |
| `dang-xu-ly` | Đang xử lý |
| `da-xu-ly` | Đã xử lý |
| `ton-dong` | Tồn đọng |

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.vi-pham-hlatdb.read` | API-00 · API-01 · API-02 |

Lookup API-03 dùng perm Integration road-route (domain khác) — không gắn perm Report.

## Out of pack

CRUD `RowViolation` · `POST` catalog sổ 6 · GOVOne chrome · warehouse schema · RowViolation EF P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · Resource/Slideout · `[RequirePermission]` block P1 · API chart riêng.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF · **T-UI-RPT-01 · T-UI-RPT-CONFIG-01 · T-UI-RPT-TB-01 · T-UI-RPT-EXPORT-01 · T-UI-RPT-CHART-01**. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tab/tuyến/TT · Xem mới load · Excel `row-violations.csv` · Config FULL · query `tab`/`status`/`q` · drill `kind=row-violations` · `FilterRoute` exact (đã live) · **ẩn default** BB xã / BB hành chính.
- autoApprove **ON** → SA **confirmed** (`task_f49d07d0`). Chain enqueue **team-lead**.
- Dev write: `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve.
- Build (khi Dev): FE `yarn build` (+ typecheck nếu có) · BE `dotnet build` nếu đụng API. Role SA **không** yarn/dotnet.
- Roles sau TL = Dev **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
