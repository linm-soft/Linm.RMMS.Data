# TL — task pack — rpt-checkin (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-CHK-02) |
| Feature Kind | **E** · leaf `/bao-cao/checkin` · **không** CRUD form |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/checkin` |
| mfeStdUrl | `http://localhost:9311/bao-cao/checkin` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` · DOMAIN-MAP slug `rpt-checkin` → kebab `report` |
| BFF | `web-bff/api/v1/report` |
| autoApprove | **ON** (packet `task_ab20304f`) — SA **confirmed** bởi agent · **không** chờ board |
| chain | **ON** → enqueue **Dev** sau TL · Dev **cấm** write đến `confirms.beRepo && uiRepo` |
| prior · data_analy | `done` · `specs/_data-analy/features/rpt-checkin-control-hint.md` · hash `sha256:rpt-checkin-context-20260815` |
| prior · po | `done` · `po/requirement.md` · `task_01a6ebc0` |
| prior · design | `confirmed` · `ui/design.md` + prototype + reviewUrl · `task_6ef4c96a` |
| prior · sa | `confirmed` (autoApprove ON) · `be/solution-discovery.md` · `task_b8d33090` |
| supersedes | stub TL `task_2a9cab80` (ngắn) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + SA + data-analy stamp) |
| taskId | `task_ab20304f` |
| updatedAt | `2026-08-15T15:40:00.000Z` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · `api/v1/reports` (plural) · parent JSON · `Linm.Web.ERP.WebService`.  
**Cấm** Resource / Slideout / View=`readOnly` giả form. **T-UI-FORM = OUT**.  
**Cấm** gộp KPI 4 / map InZone `rpt-bao-cao-cong` vào slug này.

> SA chốt lookup API + query/export. Design chốt control-map. **Cấm** Dev đoán Text vs SearchInput.

## retry.ssot_rereview (HARD — live page trước Write)

Live: `src/pages/CheckinReportPage/CheckinReportPage.tsx` + `CheckinFilterBar.tsx` · `yarn start:std` **:9311** · `http://localhost:9311/bao-cao/checkin`.

| # | SSOT | Live | Verdict |
|---|------|------|---------|
| 1 | 1× `LinPageLayout` kind=`report` · **cấm** nested `CatalogListShell` | 1× `kind="report"` · không CatalogListShell | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | Grid + `erpReportTableConfigFromDisplay` · **không** set `resizable: true` tường minh trên từng cột | **GAP-TL-CHK-RESIZE** — Dev set `resizable: true` (default ON) từng cột / tableConfig |
| 3 | Footer **luôn** `LinCatalogListPagination` · **cấm** footerPagination / pageSizeBar / raw table | `footer={<LinCatalogListPagination …>}` **không** gate `showFooterPagination` | **PASS** (GAP-DS-CHK-01 / GAP-SA-CHK-FOOTER **đóng** live) |
| 4 | flex + skeleton | `.page` flex column · `skeletonRows={8}` | **PASS** |
| 5 | toolbar config FULL | `reportToolbar` refresh/chart/print/`onEditConfig` → `ReportDisplayConfigModal` | **PASS** |
| 6 | list_parity SearchInput + Date + Input · **cấm** native `<select>` | `CheckinFilterBar` SearchInput loại/tuyến · Date range · Input search | **PASS** |
| 7 | tree_master | N/A Kind E | **N/A** |
| Form | **OUT** · **cấm** Thêm mới Zone A | Không form / không add on A | **PASS** |
| Confirm | `dispatchAppToast` · **cấm** `window.alert`/`confirm` | toast error/success · print `LinReportPrintScopeModal` rồi `window.print` | **PASS** |
| Xem-then-load | chưa Xem = empty hint · không auto list | `viewed` gate + empty copy khớp Design | **PASS** |
| pageSize | 50/100/200/500 | pager SSOT + BE allow-list | **PASS** (giữ) |
| Prefix | `api/v1/report/checkins` | `reportEndpoint.getCheckins` / `exportCheckins` | **PASS** — **cấm** `api/v1/reports` |
| Coverage | `type=coverage` → `points >= 3` | FE gửi `type: kind` · BE slice | **PASS** (giữ) |
| Drill | `/patrol?id={patrolId}` | `drillPatrol` top window | **PASS** |

**Cấm** Dev chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface — đóng resize cùng page nếu sửa.

## T-CTX

| ID | Task | DoD |
|----|------|-----|
| T-CTX-01 | Leaf route `/bao-cao/checkin` trước `:id` · pageId `rpt-checkin` · testId `rmms-checkin-report` | Align mfeStdUrl `:9311` — packet `:9301/rpt-checkin` **không** dùng (GAP-PO-CHK-10) |
| T-CTX-02 | Tách hub `reports` — **không** gộp KPI/map worklog trên leaf | GAP-PO-CHK-02 / GAP-PO-CHK-08 |
| T-CTX-03 | Parent `patrol` giữ CRUD Field — **cấm** copy CRUD | GAP-PO-CHK-06 |
| T-CTX-04 | Persona Hạt trưởng · Khu QLĐB · lãnh đạo · chrome GOVOne **OUT** | skip sidebar/menu/note |

## T-PERM

| Code | Surfaces | P1 |
|------|----------|----|
| `report.checkin.read` | GET health · checkins · checkins/export · FE page | stub — gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 (GAP-SA-CHK-PERM) |
| `master.road-routes.read` | GET integration/road-routes/search | Integration đã stub — Report **consume only** |

Export **cùng** `read` — **không** perm `export` riêng P1.

## T-UI-LIST (A–D · Kind E)

| Zone | Task | DoD |
|------|------|-----|
| A | Header icon `fas fa-map-marker-alt` + title **BC Check-in** 22px không clip | **Cấm** Thêm mới / Tạo mới trên A |
| B | `LinErpListFilterBar` title trái · input + tìm cụm phải · 1 hàng wrap | GAP-FILTER-BAR / GAP-PO-CHK-09 |
| C | `listTitle` **Kết quả báo cáo check-in** · `LinCatalogDataGrid` | skeleton 8 · STT grid · **cấm** cột CRUD ⋯ · **cấm** KPI/map worklog |
| D | **Luôn** `LinCatalogListPagination` 50/100/200/500 · `totalCount=0` khi chưa Xem | **Cấm** ẩn D · live **PASS** — giữ |

Empty: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo check-in.» · viewed 0 dòng — «Không có dòng phù hợp bộ lọc.»

## T-UI-FORM

**OUT** — không Resource · không Slideout · không View=`readOnly`. **Cấm** Dev tạo form CRUD check-in / patrol trên slug này.

## T-UI-ACT

| Action | Binding | Rule |
|--------|---------|------|
| **Xem** | `onSearch` filter bar | apply draft → page=1 → `viewed=true` → API-01 · **cấm** fetch khi đổi draft |
| **Xuất Excel** | leading Button | API-02 · file `checkins.csv` UTF-8 BOM · toast success/fail |
| **Làm mới** | `reportToolbar.onRefresh` | chưa Xem → apply+view · đã Xem → refetch applied |
| **Biểu đồ** | SoCai `ReportChartModal` | khi `viewed` + có dòng + `showCharts` · client series từ `items` trang hiện tại · **không** API chart P1 · catalog: điểm theo ngày (line) · coverage theo tuyến (bar) |
| **In** | `LinReportPrintScopeModal` rồi `window.print` | **cấm** `window.confirm` · allPages refetch batch · stub toast **không** bắt nếu modal đã có |
| **Config** | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | **FULL** P1 — **cấm** stub/configHint toast |
| Drill | button «Mở tuần tra» | top window `/patrol?id={patrolId}` · **không** GetById Report |
| Page/pageSize | Zone D | sau viewed → refetch cùng applied filters |

## T-UI-LKP

| Field | controlHint | API / source | catalogKind |
|-------|-------------|--------------|-------------|
| reportKind | SearchInput | enum FE `daily`/`patrol`/`worklog`/`coverage` → query `type` (+ `period` no slice P1) | static — **cấm** native Select |
| routeId | SearchInput | **API-LKP-01** `GET api/v1/integration/road-routes/search` · fallback 38 CUC2 khi BFF down/empty | road-route Type A · trống=tất cả · **cấm** free-text · **cấm** `QL.22` |
| fromDate / toDate | Date | query `from`/`to` `yyyy-MM-dd` trên `day` | |
| qSearch | Input | query `search` Contains Staff/Route/PatrolId | cán bộ · tuyến (text) |

**Cấm** Dev đổi SearchInput → native Select.

## T-UI-FIELD

Grid columns = DTO scalars **readonly**. **Không** editor.

| key | Label | Type / display |
|-----|-------|----------------|
| staff | Cán bộ | Text |
| route | Tuyến | Text |
| day | Ngày | Date ISO day |
| points | Điểm | number |
| coverage | Coverage | number + `%` |
| firstAt | Đầu | DateTimeOffset ISO → `toLocaleString('vi-VN')` |
| lastAt | Cuối | DateTimeOffset local display |
| drill | Nguồn | Button — không persist |

TZ: JSON DateTimeOffset · FE display local · **cấm** persist TZ client (sa_tz_gate).  
**Không** lat/lng / KPI 4 trên DTO P1.

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
| init-data | **OUT P1** — loại = enum tĩnh FE |

## T-UI-UX (`dev-ui-ux-constitution`)

1. Title không clip · live toolbar + grid/empty không blank.  
2. Filter wrap 1 hàng.  
3. Chưa Xem không lưới dữ liệu (empty hint).  
4. Toast không native alert.  
5. Drill Patrol Field — không modal CRUD.  
6. Config FULL.  
7. Chart SoCai 2: line điểm theo ngày · bar coverage theo tuyến.

## T-BE / T-BFF

**Không** endpoint mới bắt buộc · **không** migration P1 · **không** folder domain mới.

| ID | Layer | Path / contract | Dev action |
|----|-------|-----------------|------------|
| T-BE-01 | API | `Domains/Report/Controllers/ReportQueryController.cs` · `GET api/v1/report/checkins` | **Giữ** envelope `ApiResponse<ReportPagedResult<ReportCheckinRowDto>>` `{ success, message, data }` · `data.items` + paging · **không** KPI block |
| T-BE-02 | API | `GET api/v1/report/checkins/export` | CSV UTF-8 BOM `checkins.csv` · header EN · **không** page · cột: staff,route,points,coverage,day,firstAt,lastAt,patrolId |
| T-BE-03 | Query | `type=coverage` → `Points >= 3` · other kinds không slice · `routeId` prefix-match · `from`/`to` inclusive · `search` Contains Staff/Route/PatrolId · `period` accept no slice · pageSize allow `{50,100,200,500}` invalid→50 | **Giữ** · **cấm** query `q` riêng P1 (FE map `q` → `search`) |
| T-BE-04 | Seed | 12 dòng in-memory CUC2 · routes `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.8` `QL.9` `QL.10` | **Giữ** · **cấm** invent `QL.22` · Patrol check-in EF **P2** |
| T-BE-05 | DTO | `ReportCheckinRowDto`: `id` `patrolId` `staff` `route` `points` `coverage` `day` `firstAt` `lastAt` | **Giữ** · **cấm** lat/lng P1 |
| T-BE-06 | Health | `GET api/v1/report/health` | giữ, không bắt UI |
| T-BFF-01 | BFF | `ReportBffController` `checkins` + `checkins/export` proxy query-string + auth/company headers | **không** business · raw envelope |
| T-LKP-01 | Integration | `GET api/v1/integration/road-routes/search` · BFF `web-bff/api/v1/integration/road-routes/search` | Report consume · **cấm** clone master dưới Report |
| T-PERM-01 | stub | `report.checkin.read` | document only P1 |

## Dev backlog (IN P1 — cùng surface)

| ID | Layer | Task |
|----|-------|------|
| GAP-TL-CHK-RESIZE | FE | Cột grid `resizable: true` default ON (tường minh trên column defs / tableConfig) |
| GAP-TL-CHK-VERIFY | FE/BE | `yarn build` + `yarn typecheck` MFE · `dotnet build` API+BFF nếu đụng file BE · ghi implement § Build |

**OUT P1:** warehouse · EF Patrol join · CRUD · `ERP.*` · `api/v1/reports` · KPI/map `rpt-bao-cao-cong` · master users · invent tuyến ngoài CUC2 38.

## Handoff Dev

- Implement đúng DoD + 4 gates: lookup master · field type/BE · **cấm** Resource/Slideout/View=readOnly · UI-Ux.  
- **Cấm** Dev đến khi `confirms.beRepo && uiRepo` (user tick board — **không auto**). Chain enqueue Dev = **pending** cho đến tick.  
- Build HARD: FAIL → 1× auto-fix · vẫn fail → AskQuestion `build_fail_confirm` · **cấm** `completed` / handoff QA.  
- Roles sau Dev = **pending**.

## Build (role TL — không đụng code)

TL **docs-only**. Verify live compile thuộc Dev khi đóng GAP resize. Prior implement `task_2a9cab80` đã PASS yarn/dotnet — không regress trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
