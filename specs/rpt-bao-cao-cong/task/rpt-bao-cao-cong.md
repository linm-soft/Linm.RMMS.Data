# TL — task pack — rpt-bao-cao-cong (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-BCC-02) |
| Feature Kind | **E** · leaf `/bao-cao/bao-cao-cong` · **không** CRUD form |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/bao-cao-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/bao-cao-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` · DOMAIN-MAP slug `rpt-bao-cao-cong` → kebab `report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** (packet `task_822673c1`) — SA **confirmed** bởi agent · **không** chờ board |
| chain | **ON** → enqueue **Dev** sau TL · Dev **cấm** write đến `confirms.beRepo && uiRepo` |
| prior · data_analy | `done` · `specs/_data-analy/features/rpt-bao-cao-cong-control-hint.md` · hash `sha256:adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab` |
| prior · po | `done` · `po/requirement.md` |
| prior · design | `confirmed` · `ui/design.md` + prototype + reviewUrl |
| prior · sa | `confirmed` (autoApprove ON) · `be/solution-discovery.md` |
| supersedes | stub TL `task_36d8f152` (ngắn) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + SA + data-analy stamp) |
| taskId | `task_822673c1` |
| updatedAt | `2026-08-15T15:05:00.000Z` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · `api/v1/attendance/*` · `api/v1/reports` (plural) · parent JSON · `Linm.Web.ERP.WebService`.  
**Cấm** Resource / Slideout / View=`readOnly` giả form. **T-UI-FORM = OUT**.

> SA chốt lookup API + query/export/KPI. Design chốt control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** thêm query `staffId` P1 (GAP-SA-BCC-STAFF). FE map `staffId` → `search`.

## retry.ssot_rereview (HARD — live page trước Write)

Live: `src/pages/WorklogReportPage/WorklogReportPage.tsx` + `WorklogFilterBar.tsx` · `yarn start:std` **:9311**.

| # | SSOT | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | Grid + `erpReportTableConfigFromDisplay` · **không** set `resizable: true` tường minh trên column | **GAP-TL-BCC-RESIZE** — Dev set `resizable: true` (default ON) từng cột / tableConfig |
| 3 | Footer **luôn** `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar / raw table | Footer **gated** `displayConfig.showFooterPagination ? <LinCatalogListPagination> : undefined` | **GAP-DS-BCC-01 / GAP-SA-BCC-FOOTER / GAP-TL-BCC-FOOTER** — **IN P1** |
| 4 | flex + skeleton | `.page` flex column · `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | `reportToolbar` refresh/chart/print/`onEditConfig` → `ReportDisplayConfigModal` | **PASS** |
| 6 | list_parity SearchInput + Date · **cấm** native `<select>` | `WorklogFilterBar` SearchInput ×4 + `LinErpListFilterBar` Date | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới Zone A | Không form / không add on A | **PASS** |
| Confirm | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | toast error/success · print `window.print` sau modal | **PASS** |
| KPI + map | 4 KPI + SVG P1 | `kpiRow` + `WorklogMapPanel` sau viewed | **PASS** |
| Xem-then-load | chưa Xem = empty hint · không auto list | `viewed` gate + empty copy khớp Design | **PASS** |
| staffId | query `search` · mock enum `nva`/`ttb`/… | `search: staffId` · lookup 4 NV | **PASS** |
| pageSize | 50/100/200/500 | pager SSOT + BE allow-list | **PASS** (giữ) |

**Cấm** Dev chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface — **bắt buộc** đóng footer + resize cùng page.

## T-CTX

| ID | Task | DoD |
|----|------|-----|
| T-CTX-01 | Leaf route `/bao-cao/bao-cao-cong` trước `:id` · pageId `rpt-bao-cao-cong` · testId `rmms-worklog-report` | Align mfeStdUrl `:9311` — packet `:9301` **không** dùng |
| T-CTX-02 | Tách hub `reports` — **không** gộp 3 family trên leaf | GAP-PO-BCC-03 |
| T-CTX-03 | Parent `attendance` giữ CRUD Field — **cấm** copy CRUD | GAP-PO-BCC-04 |
| T-CTX-04 | Persona Hạt trưởng · Khu QLĐB · lãnh đạo · chrome GOVOne **OUT** | skip sidebar/menu/note |

## T-PERM

| Code | Surfaces | P1 |
|------|----------|----|
| `report.bao-cao-cong.read` | GET health · worklogs · worklogs/export · FE page | stub — gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 (GAP-SA-BCC-PERM) |
| `master.road-routes.read` | GET integration/road-routes/search | Integration đã stub — Report **consume only** |

Export **cùng** `read` — **không** perm `export` riêng P1.

## T-UI-LIST (A–D · Kind E)

| Zone | Task | DoD |
|------|------|-----|
| A | Header icon `fas fa-user-clock` + title **Báo cáo công** 22px không clip | **Cấm** Thêm mới / Tạo mới trên A |
| B | `LinErpListFilterBar` title trái · input + tìm cụm phải · 1 hàng wrap | GAP-FILTER-BAR / GAP-PO-BCC-10 |
| C | `listTitle` **Kết quả báo cáo công** · KPI 4 · SVG map · `LinCatalogDataGrid` | skeleton 8 · STT grid · **cấm** cột CRUD ⋯ |
| D | **Luôn** `LinCatalogListPagination` 50/100/200/500 · `totalCount=0` khi chưa Xem | **Cấm** ẩn D qua `showFooterPagination=false` |

Empty: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo công.» · viewed 0 dòng — «Không có dòng phù hợp bộ lọc.»

## T-UI-FORM

**OUT** — không Resource · không Slideout · không View=`readOnly`. **Cấm** Dev tạo form CRUD worklog.

## T-UI-ACT

| Action | Binding | Rule |
|--------|---------|------|
| **Xem** | `onSearch` filter bar | apply draft → page=1 → `viewed=true` → API-01 · **cấm** fetch khi đổi draft |
| **Xuất Excel** | leading Button | API-02 · file `worklogs.csv` UTF-8 BOM · toast success/fail |
| **Làm mới** | `reportToolbar.onRefresh` | chưa Xem → apply+view · đã Xem → refetch applied |
| **Biểu đồ** | SoCai `ReportChartModal` | khi `viewed` + có dòng + `showCharts` · client series từ `items` trang hiện tại · **không** API chart P1 |
| **In** | `LinReportPrintScopeModal` rồi `window.print` | **cấm** `window.confirm` · allPages refetch batch |
| **Config** | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | **FULL** P1 — **cấm** stub/configHint toast |
| Drill | button «Mở chấm công» | top window `/patrol/attendance?id={attendanceId}` · **không** GetById Report |
| Page/pageSize | Zone D | sau viewed → refetch cùng applied filters |

## T-UI-LKP

| Field | controlHint | API / source | catalogKind |
|-------|-------------|--------------|-------------|
| periodMode | SearchInput | enum FE `week`/`month` → query `type`/`period` (no slice P1) + auto `from`/`to` (T2–CN · 1→cuối tháng) | static |
| routeId | SearchInput | **API-LKP-01** `GET api/v1/integration/road-routes/search` · fallback 38 CUC2 khi BFF down/empty | road-route Type A · trống=tất cả · **cấm** free-text · **cấm** `QL.22` |
| staffId | SearchInput | **không API** · mock `nva`/`ttb`/`lvc`/`pmd` · query `search` | static P1 · **cấm** master users CUC2 |
| zone | SearchInput | enum `all`/`out` · `all` **không** gửi query `zone` | static |
| fromDate / toDate | Date | query `from`/`to` `yyyy-MM-dd` trên `day` | |

**Cấm** Dev đổi SearchInput → native Select.

## T-UI-FIELD

Grid columns = DTO scalars **readonly**. Zone = Dropdown **display** `in`/`out` → Trong zone / Lệch zone — **không** editor.

| key | Label | Type / display |
|-----|-------|----------------|
| staff | Cán bộ | Text |
| route | Tuyến | Text |
| day | Ngày | Date ISO day |
| points | Điểm | number |
| inZonePct | InZone % | number + `%` |
| zoneStatus | Zone | Dropdown display |
| firstAt | Đầu | DateTimeOffset ISO → `toLocaleString('vi-VN')` |
| lastAt | Cuối | DateTimeOffset local display |
| drill | Nguồn | Button — không persist |

KPI (full filtered set, không page): `shiftCount` · `inZonePct` · `outZoneCount` · `avgPoints`.

TZ: JSON DateTimeOffset · FE display local · **cấm** persist TZ client (sa_tz_gate).

## T-UI-PROD

| Gate | Rule |
|------|------|
| Shell | 1× LinPageLayout kind=`report` |
| Grid | LinCatalogDataGrid · kéo cột ON · **cấm** raw `<table>` production |
| Footer | luôn LinCatalogListPagination · **cấm** footerPagination / pageSizeBar |
| HTTP | `apiClient` SSOT · `reportEndpoint` re-export only |
| Lookup | **cấm** copy road-route catalog vào Report DTO |
| Persist | in-memory P1 · **cấm** parent JSON · **cấm** warehouse tables |
| Prefix | **`api/v1/report`** · **cấm** `attendance/report` |
| Map | SVG P1 · Leaflet **P2** (không dep MFE) |
| init-data | **OUT P1** |

## T-UI-UX (`dev-ui-ux-constitution`)

1. Title không clip · live toolbar + grid/empty không blank.  
2. Filter wrap 1 hàng.  
3. Chưa Xem không KPI/map.  
4. Toast không native alert.  
5. Drill Field attendance — không modal CRUD.  
6. Config FULL.  
7. Chart SoCai 3: line InZone% theo ngày · bar ca theo tuyến · donut zone.

## T-BE / T-BFF

**Không** endpoint mới bắt buộc · **không** migration P1 · **không** folder domain mới.

| ID | Layer | Path / contract | Dev action |
|----|-------|-----------------|------------|
| T-BE-01 | API | `Domains/Report/Controllers/ReportQueryController.cs` · `GET api/v1/report/worklogs` | **Giữ** envelope `ApiResponse<ReportWorklogPagedResult>` `{ success, message, data }` + `data.kpis` + paged items |
| T-BE-02 | API | `GET api/v1/report/worklogs/export` | CSV UTF-8 BOM `worklogs.csv` · header EN · **không** page · cột: staff,route,day,points,inZonePct,zoneStatus,firstAt,lastAt,lat,lng,attendanceId |
| T-BE-03 | Query | `routeId` prefix-match · `from`/`to` inclusive · `search` Contains Staff/StaffId/Route/AttendanceId · `zone=out` · `type`/`period` accept no slice · pageSize allow `{50,100,200,500}` invalid→50 | **Giữ** · **cấm** param `staffId` P1 |
| T-BE-04 | Seed | 12 dòng in-memory · routes `QL.1` `QL.15` `QL.217` (trong CUC2 38) | **Giữ** · AttendanceLog EF **P2** |
| T-BE-05 | DTO | `ReportWorklogRowDto` + `ReportWorklogKpiDto` trong `LINM.RMMS.Report.Models` | **Giữ** · lat/lng cho SVG |
| T-BE-06 | Health | `GET api/v1/report/health` | giữ, không bắt UI |
| T-BFF-01 | BFF | `ReportBffController` proxy query-string + auth/company headers | **không** business · raw envelope |
| T-LKP-01 | Integration | `GET api/v1/integration/road-routes/search` · BFF `web-bff/api/v1/integration/road-routes/search` | Report consume · **cấm** clone master dưới Report |
| T-PERM-01 | stub | `report.bao-cao-cong.read` | document only P1 |

## Dev backlog (IN P1 — cùng surface)

| ID | Layer | Task |
|----|-------|------|
| GAP-TL-BCC-FOOTER | FE | Zone D **luôn** render `LinCatalogListPagination` — bỏ gate `displayConfig.showFooterPagination` (config flag có thể giữ cho print/chart, **không** ẩn pager) |
| GAP-TL-BCC-RESIZE | FE | Cột grid `resizable: true` default ON |
| GAP-TL-BCC-VERIFY | FE/BE | `yarn build` + `yarn typecheck` MFE · `dotnet build` API+BFF nếu đụng file BE · ghi implement § Build |

**OUT P1:** Leaflet · warehouse · EF AttendanceLog join · query `staffId` · master users · CRUD · `ERP.*` · dashboard KPI gộp slug.

## Handoff Dev

- Implement đúng DoD + 4 gates: lookup master · field type/BE · **cấm** Resource/Slideout/View=readOnly · UI-Ux.  
- **Cấm** Dev đến khi `confirms.beRepo && uiRepo` (user tick board — **không auto**). Chain enqueue Dev = **pending** cho đến tick.  
- Build HARD: FAIL → 1× auto-fix · vẫn fail → AskQuestion `build_fail_confirm` · **cấm** `completed` / handoff QA.  
- Roles sau Dev = **pending**.

## Build (role TL — không đụng code)

TL **docs-only**. Verify live compile thuộc Dev khi đóng GAP footer/resize. Prior implement `task_36d8f152` đã PASS yarn/dotnet — không regress trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
