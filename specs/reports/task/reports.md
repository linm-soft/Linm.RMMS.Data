# Team-lead — task pack · reports (Kind E)

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-RPT-07 / GAP-DS-RPT-01) |
| Feature Kind | **E** · 3 loại P1 · **không** CRUD form |
| mfeStdRoute | `/bao-cao` |
| route_confirm | **route_a** `/bao-cao` |
| autoApprove | **ON** (executor packet `task_85ad644c` · tự confirm SA) |
| design_confirm | **approve** (board · `task_1d2ba27e`) |
| solution_confirm | **approve** (autoApprove ON · packet prior SA `confirmed`) |
| be_repo_confirm | **pending** — user tick board trước Dev (**không auto**) |
| ui_repo_confirm | **pending** — user tick board trước Dev (**không auto**) |
| taskId | `task_85ad644c` |
| prior | data_analy `done` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-15T08:20:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL `task_51457ed6` (ngắn). Pack này re-audit live + Design/SA confirmed.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/reports/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX |
| Solution | `specs/reports/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · lookup Type A |
| Prototype | `ui/prototype/reports-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/reports-control-hint.md` | SearchInput family/kind/route/period · Date · SearchTextInput |
| PO | `specs/reports/po/requirement.md` | GAP-PO-RPT-01..07 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` kind=`report` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · `SearchTextInput` · Date SSOT |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `ErpListHeaderFilters` / `Button` | nested CatalogListShell · raw `<table>` · local pager |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | Integration road-routes search | copy catalog vào Report DTO |
| BFF | proxy only | business in BFF |
| Persist | in-memory seed P1 | warehouse tables · parent JSON |
| Dropdown filter | SearchInput enum FE | native `<select>` · init-data |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao` only P1 · `/bao-cao/new` · `/:id` redirect list |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory |
| `source.migrations` | **không** |
| Lookup | `GET api/v1/integration/road-routes/search` |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports/ui/prototype/reports-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ).

## API contract (from SA — Dev delta **chỉ** GAP)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/assets` | DONE in-memory | keep · query `type` `routeId` `search` `period` `page` `pageSize` |
| API-02 | GET | `/incidents` | DONE | keep + `from` `to` |
| API-03 | GET | `/checkins` | DONE | keep + `from` `to` |
| API-04 | GET | `/checkins/export` | DONE CSV UTF-8 BOM | keep · **không** page · header EN |
| API-LKP-01 | GET | `/integration/road-routes/search` | Integration | consume only · FE fallback 38 CUC2 |
| init-data | — | — | **OUT P1** | enum tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. `routeId` empty/`all` = all. `QL.1` prefix-match seed `QL.1A`. `type`/`period` accept + ignore slice P1.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_required** | JSON DateTimeOffset ISO · FE display `toLocaleString('vi-VN')` |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** | không tenant table |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Type A |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.read` · `report.export` |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_required |
| SD-INIT | **out P1** | enum tĩnh |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-chart-bar` · title **Báo cáo Web** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (leading SearchInput family/kind/route/period · period/date · **Xem** = `onSearch`) · Excel chỉ check-in · toolbar Làm mới / **Xem biểu đồ** (SoCai modal) / In / **Sửa config FULL** — **cấm** `ErpListHeaderFilters` + nút Tìm · **cấm** stub |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · STT grid · cột theo family · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | redirect `/bao-cao` |

## retry.ssot_rereview (TL live MFE 2026-08-15 · `ReportListPage` + Form + BE)

Audit `Linm.Web.RMMS.Report` `ReportListPage.tsx` + `ReportFormPage` + Report API/BFF — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `resizable: true` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/print | **PASS** — `LinReportTableConfigModal` + `ReportChartModal` · **cấm** stub |
| 6 | Filter layout | — | **PASS** — `LinErpListFilterBar` · Date Lin* (**T-UI-FIELD-01**) |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | `ReportFormPage` Navigate list **PASS** | **T-UI-FORM** giữ |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 11 | Excel check-in only | **PASS** | — |
| 12 | Grid Dropdown display condition/severity/status | live **plain Text** | **T-UI-FIELD-02** display map label (không editor) |
| 13 | Lookup 38 + empty | seed fallback **PASS** · cấm QL.22 | **T-UI-LKP** giữ Type A |
| 14 | pageSize 50/100/200/500 | FE + BE allow-list **PASS** (verify) | — |
| 15 | TZ display local | `formatTs` vi-VN **PASS** | — |
| 16 | ERP.* / plural reports | **none** | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |

**Cấm** chỉ sửa Date nếu còn Dropdown display / Form redirect / Excel cùng surface còn GAP.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-RPT | Report A–D | Full page Kind E | `/bao-cao` | report | filter `LinErpListFilterBar` → Xem · refresh · Excel check-in · chart SoCai · config FULL |
| S-FORM | Form CRUD | — | `/bao-cao/new` · `/:id` | — | **OUT P1** redirect |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `LinReportTableConfigModal` (grid+footer+chart) |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | reports | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | reports | ui+api | T-CTX-01 | stub | Codes `report.read` (API-00…03) · `report.export` (API-04) · `master.road-routes.read` (LKP). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1. FE hide Excel nếu không `report.export` (optional P1). |
| **T-UI-LIST-01** | /bao-cao | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · grid kéo cột · LinCatalogListPagination · filterCols=4 · Zone A title · listTitle theo family · Xem mới load · đổi family → viewed=false · clear grid · page=1 · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A |
| **T-UI-FORM-01** | /bao-cao/new | ui-form | T-UI-LIST-01 | redirect **PASS** | Giữ `Navigate` list · **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` giả form |
| **T-UI-RPT-01** | /bao-cao | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · **cấm** `ErpListHeaderFilters` + nút Tìm (`po-design-report-standard`) |
| **T-UI-RPT-CONFIG-01** | /bao-cao | ui | T-UI-RPT-01 | **done** | **`LinReportTableConfigModal` FULL** · `load/saveErpReportDisplayConfig` — **cấm** `configHint` |
| **T-UI-RPT-CHART-01** | /bao-cao | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai: `resolveReportCharts` · `ReportChartModal` (`socai-report-ref`) — **cấm** stub toast |
| **T-UI-ACT-01** | reports | ui | T-UI-LIST-01 | **done** | Inventory · Enter = Xem · Excel checkins · chart/config **không** stub |
| **T-UI-LKP-01** | reports | ui | T-UI-LIST-01 | **PASS** | family/kind/period = SearchInput enum tĩnh Design §3 · route = API-LKP-01 + seed 38 fallback **chỉ** khi BFF down/empty · empty = Tất cả · **cấm** free-text · **cấm** invent `ĐT.538`/`ĐT.217`/`CT.01` vào 38 · **cấm** `QL.22` |
| **T-UI-FIELD-01** | reports | ui | T-UI-LIST-01 | **GAP Date** | fromDate/toDate = controlHint **Date** (component SSOT common-components nếu export; nếu package chưa export Date named → wrap `LinListFilterField` + labelled date **không** raw unstyled native ngoài field) · **ẩn** khi family=`assets` · ISO date-only query `from`/`to` |
| **T-UI-FIELD-02** | reports | ui | T-UI-LIST-01 | **GAP display** | Grid `condition`/`severity`/`status` = **Dropdown display** (label VN, readonly) — **không** editor |
| **T-UI-PROD-01** | reports | ui | T-UI-FORM-01 | **PASS** | Kind E product · form scaffold OUT · **cấm** Resource/Slideout/View=readOnly |
| **T-UI-UX-01** | reports | ui | T-UI-LIST-01 | **PASS** + Date | gap 4/8/16 · **cấm** `filterMaxWidth` · toast SSOT · title 22px không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS** | Giữ query in-memory API-01…03 · allow-list pageSize · route QL.1 prefix · search Contains CI · from/to rules SA · **không** slice type/period · **không** migration · **không** endpoint mới nếu live khớp |
| **T-BE-02** | export | api | T-BE-01 | **PASS** | API-04 CSV UTF-8 BOM `checkins.csv` · content-type `text/csv; charset=utf-8` |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough · **không** business |
| **T-QA-01** | reports | qa | T-UI-FIELD-01 | pending QA | scenarios · mfeStdUrl · Xem · Excel · Date ẩn assets · form redirect |
| **T-RV-01** | reports | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn Loại BC | B | SearchInput family · reset kind · viewed=false | — (không fetch) |
| Chọn loại BC / tuyến / kỳ / date / q | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01/02/03 theo family |
| Enter trên SearchTextInput | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload; chưa viewed = apply+view | same |
| Biểu đồ | toolbar | `LedgerReportChartModal` (SoCai) | charts[] / includeChartData |
| In | toolbar | print scope (SoCai pattern) | — |
| Sửa config | toolbar | `LinReportTableConfigModal` FULL | persist display config |
| **Xuất Excel** | B | blob download `checkins.csv` | API-04 |
| Page / pageSize | D | refetch applied filters | list |
| Form new/id | route | redirect list | — |
| Hồ sơ / Đăng xuất / Catalog 172 | — | **SKIP** | — |

**Cấm** POST/PUT/DELETE report rows P1.

## T-UI-LKP · T-UI-FIELD bind

| Field key | controlHint | API / source | catalogKind |
|-----------|-------------|--------------|-------------|
| reportFamily | SearchInput | enum FE `assets`/`incidents`/`checkins` | static |
| reportKind | SearchInput | enum theo family Design §3 | static |
| routeId | SearchInput | API-LKP-01 | road-route Type A |
| periodMode | SearchInput | enum `day`/`month`/`quarter`/`year` | static |
| fromDate / toDate | Date | query `from`/`to` | ẩn assets |
| qSearch | SearchTextInput | query `search` | text |
| Grid scalars | Text / Date display | DTO | readonly |
| condition / severity / status | Dropdown **display** | DTO string | no editor |

### reportKind labels (Design §3 — Dev bind)

| family | values |
|--------|--------|
| assets | `summary` Tổng hợp chung · `by-route` Thống kê theo tuyến · `by-org` Thống kê theo doanh nghiệp · `by-item` Tổng hợp theo hạng mục |
| incidents | `monthly` Thống kê TNGT hàng tháng · `half-year` Tổng hợp TNGT 6 tháng · `serious` Báo cáo TNGT nghiêm trọng · `compare` So sánh TNGT |
| checkins | `daily` Nhật ký tuần đường · `patrol` Hoạt động tuần kiểm · `worklog` Nhật ký công việc · `coverage` Coverage check-in ≥3 điểm/ngày |

## T-BE / T-BFF detail

| Item | Spec |
|------|------|
| Prefix | **`api/v1/report`** singular |
| Assets row | `id` `route` `item` `qty` `unit` `condition` `updatedAt` |
| Incidents row | `id` `code` `route` `type` `severity` `status` `at` |
| Checkins row | `id` `staff` `route` `points` `coverage` `day` `firstAt` `lastAt` |
| search | assets item/route/condition · incidents code/route/type/status · checkins staff/route |
| dates | incidents `at` · checkins `day` yyyy-MM-dd · `to` date-only → end exclusive next day (incidents) |
| BFF | proxy-only · export content-type |
| Seed | demo mã `QL.1A`/`ĐT.538`/`ĐT.217`/`CT.01` **P1 giữ** · không join EF |

## list_parity / form

- list_parity Kind E A–D — **PASS** trừ Date SSOT + Dropdown display
- form checklist — **OUT P1** (redirect)
- tree_master — n/a
- tl-list-shell-height — flex page **PASS**

## Out of pack

Warehouse · join live Asset/Incident/Patrol EF · GOVOne 172 · dashboard KPI · RAG/AI · Excel assets/incidents · Chart/Print real · Kind B CRUD · `api/v1/reports` · ERP.*.

## Handoff → Dev

1. **Không** rewrite shell đã PASS (LinPageLayout · grid kéo cột · pagination · SearchInput · Xem · Excel · form redirect).
2. Cùng surface GAP: **Date** from/to (T-UI-FIELD-01) · Dropdown display condition/severity/status (T-UI-FIELD-02) · verify BE/BFF keep.
3. Bind enum value + label VN Design §3.
4. Chỉ repo `Linm.RMMS.WebService` domain **Report** — **cấm ERP.***
5. Dev **cấm** start đến `confirms.beRepo && uiRepo` (user tick — **không auto**).
6. VERIFY: MFE `yarn typecheck` + `yarn build` PASS · BE `dotnet build` nếu đụng API — ghi implement § Build. Fail → **cấm** `completed` / handoff QA (**GAP-DEV-BUILD-***).

Roles sau TL = **pending** đến lượt. Chain ON → enqueue **dev** cùng feature `reports`.

### T-UI-FILTER-01 — Hub `/bao-cao` search toolbar (pilot 2026-08-30)

**status:** pending  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - /filter-bar-context · /erp-filter-form · filter-bar-layout-hard · /filter-dates-context
  - context: `docs/context/features/reports-filter-bar.md`
  - peer: `docs/context/features/org-route-scope.md` — **cấm** invent API gán km

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · data-lin-list-layout="erp-filter-bar"
  ui_layout: title trái · mọi input + 🔍 cụm phải · wrap từng field
  http: Tuyến `road-routes/search` + `routeKind` ≠ NHANH/TRANH/GOM · Khu `org-units/search?kind=REG` · Đoạn nhãn riêng (dump KM* tạm)

**implement.filter:**
  page: **chỉ** `ReportListPage` / `ReportFilterBar.tsx` · **cấm** batch mọi leaf FilterBar
  leading: family · kind · **tuyến chính** · **khu REG** · **đoạn** · search
  cascade: tuyến → khu → đoạn · clear child khi đổi parent
  cấm: đưa `Km 0+000…` vào dropdown Tuyến · mix Sở vào Khu

**DoD:**
- [ ] Context fields 1:1 §1 trên `/bao-cao`
- [ ] Dropdown Tuyến chỉ QL/HCM/CT — không `KM0+*`
- [ ] Có field Khu + Đoạn · 🔍 Xem work
- [ ] V1–V5 `filter-bar-layout-hard` PASS
- [ ] `yarn build` PASS · **cấm** Schema/seed dump

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current · skillId=agent-team-lead -->
