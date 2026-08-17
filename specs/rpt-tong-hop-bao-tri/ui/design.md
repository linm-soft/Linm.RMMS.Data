# Design — rpt-tong-hop-bao-tri (Tổng hợp bảo trì)

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-THBT-02) |
| Feature Kind | **E** · leaf `/bao-cao/tong-hop-bao-tri` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_8f13ec25`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tong-hop-bao-tri/ui/prototype/rpt-tong-hop-bao-tri-prototype.html` |
| prototype | `specs/rpt-tong-hop-bao-tri/ui/prototype/rpt-tong-hop-bao-tri-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tong-hop-bao-tri` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tong-hop-bao-tri` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/maintenance-summary` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · `task_f96f58fc` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-tong-hop-bao-tri-control-hint.md` · hash `sha256:rpt-tong-hop-bao-tri-context-20260816` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-16T14:05:00.000Z` |
| taskId | `task_8f13ec25` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports` · **cấm** reuse `maintenance-work-logs` / `worklogs` · **cấm** parent JSON · **cấm** clone CRUD `maintenance`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-tong-hop-bao-tri.md` | Kind E leaf · filter · Xem · lưới · drill · Excel — API plural **stale** |
| CTX-02 | `docs/context/features/maintenance.md` | parent list / `WorkOrder` — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-tong-hop-bao-tri-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + KPI **6** + chart SoCai. **Không** full demo clone. **Không** map InZone (khác `rpt-bao-cao-cong`). **Không** dòng sổ `MaintenanceWorkLog` (khác `rpt-nhat-ky-cong-viec`).

Live MFE (`MaintenanceSummaryReportPage`) đã Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput tuyến/loại/đơn vị · Date · Xem mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · KPI 6 · drill WO · Config FULL (`ReportDisplayConfigModal`) · `ReportChartModal` SoCai · print-scope. Design **re-review** control-map + prototype 15 dòng CUC2 + GAP chart/config analog — **không** đổi Kind E → Kind B.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (`LinReportPrintScopeModal`) · Config **FULL** (`ReportDisplayConfigModal` / `LinReportTableConfigModal`) — **cấm** stub/`configHint` · **cấm** `LinListTableConfigModal` height-only · **cấm** bắt `LinCatalogUiSchemaEditorModal` (Kind B) |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm — **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` (In dùng `window.print` sau modal) |
| View | KPI + grid + chart | Drill sang Maintenance `/maintenance?id={workOrderId}` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Tổng hợp bảo trì | report | **A Header · B Toolbar+filter · C KPI+Grid · D Pagination** | 1 page leaf + chart modal |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-tools` + title **Tổng hợp bảo trì** (22px, không clip)
- Badge tuỳ chọn Kind E
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**Trái (`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap GAP-FILTER-BAR):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm** free-text · **cấm QL.22** · FilterRoute **exact** |
| workType | Loại việc | `SearchInput` | `repair` / `inspect` / `emergency` — **cấm** native Select |
| teamId | Đơn vị | `SearchInput` | TEAM-1 / TEAM-2 / TEAM-3 — **cấm** native Select |
| fromDate | Từ ngày | `Date` | trên `DueAt` / `day` |
| toDate | Đến ngày | `Date` | |
| qSearch | Tìm kiếm | `Input` | WO · tiêu đề · tuyến |
| — | **Xem** | Button primary (`onSearch`) | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo cột đang hiện · file `maintenance-summary.csv` |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | **chưa Xem** → toast SSOT, **không** fetch · đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** `ReportChartModal` khi `viewed` + có ≥1 dòng + config `showCharts` — catalog: Số WO theo ngày (line) · Theo loại việc (bar) · Theo tuyến / series dự án (donut) |
| In | print | `LinReportPrintScopeModal` rồi `window.print` |
| Sửa config | `fa-cog` | **FULL** column prefs + chart/print/footer flags — **cấm** stub toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi filter sau Xem → page=1 khi Xem lại. Đổi page/pageSize sau viewed → refetch applied.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — KPI + Grid

- `listTitle`: **Kết quả tổng hợp bảo trì**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải tổng hợp bảo trì.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — **cấm** Quantity/UnitCode / KL/ĐVT P1

**KPI 6** (chỉ sau Xem · aggregation **filtered set**, không chỉ trang hiện tại):

| Card | Field | Rule |
|------|-------|------|
| Tổng WO | `kpis.totalCount` | count |
| Mới | `kpis.newCount` | `Status` new |
| Đang làm | `kpis.inProgressCount` | in progress |
| Hoàn thành | `kpis.doneCount` | done |
| Hủy | `kpis.cancelledCount` | cancelled |
| Khẩn cấp | `kpis.emergencyCount` | `WorkType=emergency` |

**Grid columns**

| key | Label | Source | controlHint |
|-----|-------|--------|-------------|
| day | Hạn | `DueAt` → `day` | Date |
| code | Mã WO | `Code` | Text |
| title | Tiêu đề | `Title` | Text |
| route | Tuyến | `RouteName` | Text |
| workTypeLabel | Loại việc | `WorkType` | Text display repair/inspect/emergency |
| statusLabel | Trạng thái | `Status` | Text display |
| teamName | Đơn vị | `TeamName` | Text |
| assigneeName | Cán bộ | `AssigneeName` | Text |
| progressPercent | Tiến độ % | `ProgressPercent` | Text number |
| slaHours | SLA (h) | `SlaHours` | Text number |
| incidentId | Sự cố | `IncidentId` | Text |
| drill | Nguồn | `workOrderId` | Button «Mở WO» → `/maintenance?id={workOrderId}` (top window) |

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Loại việc

| value | label |
|-------|-------|
| `` | Tất cả loại việc (default) |
| `repair` | Sửa chữa |
| `inspect` | Kiểm tra |
| `emergency` | Khẩn cấp |

### Đơn vị

| value | label |
|-------|-------|
| `` | Tất cả đơn vị (default) |
| `TEAM-1` | Đội QL.1 |
| `TEAM-2` | Đội QL.15 |
| `TEAM-3` | Đội QL.217 |

### Tuyến (GAP-PO-THBT-04)

- Lookup UI = 38 CUC2 + «Tất cả» (empty).
- Seed QL.1 / QL.15 / QL.217 / HCM / QL.7 **OK** (nằm trong 38).
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

## 4. Interactions

1. Mở `/bao-cao/tong-hop-bao-tri` → empty hint, **không** auto-load KPI/grid/chart.
2. Chọn tuyến/loại/đơn vị/từ–đến/tìm → **Xem** → GET `api/v1/report/maintenance-summary`.
3. Làm mới khi `!viewed` → toast «Chưa xem — nhấn «Xem» để tải tổng hợp bảo trì» · **không** fetch.
4. Xuất Excel → GET `api/v1/report/maintenance-summary/export` → `maintenance-summary.csv` UTF-8 BOM theo cột hiện · chưa Xem → toast «Nhấn «Xem» trước khi xuất Excel».
5. Drill dòng → Field `/maintenance?id={workOrderId}`.
6. Chart / Print / Config theo §2 toolbar. Chart chỉ khi `viewed === true` và ≥1 dòng.
7. Đổi page/pageSize sau viewed → refetch cùng applied filters.

## 5. Prototype

`specs/rpt-tong-hop-bao-tri/ui/prototype/rpt-tong-hop-bao-tri-prototype.html` — content-only A–D + KPI 6 + chart SoCai analog · SearchInput combobox (không native Select filter) · empty đến khi Xem · **15** dòng mẫu `WorkOrder` CUC2 · pagination 50/100/200/500 luôn · Config FULL analog · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tong-hop-bao-tri/ui/prototype/rpt-tong-hop-bao-tri-prototype.html`

Align live: `http://localhost:9311/bao-cao/tong-hop-bao-tri` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/maintenance-summary` | `routeId` `workType` `teamId` `from` `to` `q` `page` `pageSize` · kpis + items |
| GET | `/api/v1/report/maintenance-summary/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.tong-hop-bao-tri.read` (FE gate ON · BE stub OK P1).

SA: lookup Type A tuyến Integration · query in-memory P1 seed **15** · read-model EF `rmms_work_orders` **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports` · **cấm** `maintenance-work-logs` / `worklogs`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-THBT-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer |
| GAP-DS-THBT-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell / `LinCatalogUiSchemaEditorModal` bắt buộc |
| GAP-DS-THBT-03 | Prefix **`api/v1/report/maintenance-summary`** (+ `/export`) — khớp GAP-PO-THBT-01 · **đóng** context plural |
| GAP-DS-THBT-04 | Config **FULL** P1 · Chart SoCai khi đã Xem + có dòng · In = print-scope modal |
| GAP-DS-THBT-05 | KPI **6** trên filtered set — **cấm** chỉ đếm trang hiện tại |
| GAP-DS-THBT-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout |
| GAP-DS-THBT-07 | autoApprove **ON** → Design **tự confirm** · enqueue **SA** (không TL/Dev trong task này) |
| GAP-DS-THBT-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-THBT-09 | Dashboard KPI **không** gộp slug này |
| GAP-DS-THBT-10 | Quantity/UnitCode **OUT P1** |
| GAP-DS-THBT-11 | Prototype prior (`task_1d312ce2`) thiếu chart/config analog + chỉ 3 dòng — **re-issue** 15 CUC2 |

## 8. Out of pack

CRUD `maintenance` / WO trên slug này · dòng sổ `MaintenanceWorkLog` · KPI ca / map InZone · cột KL/ĐVT P1 · Dashboard KPI gộp slug khác · warehouse schema P1 · GOVOne chrome · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · lifecycle `/erp-feature`.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `maintenance-summary` in-memory P1 + export CSV + kpis 6 trên filtered set.
- Confirm P2 EF join `rmms_work_orders`.
- Roles sau Design = **pending** đến lượt. Chain ON → enqueue **SA** (`roleOnly=sa`).
- **Cấm** nhảy TL/Dev/QA khi SA chưa tới lượt.
- Repo BE+UI đã tick packet — Dev vẫn chỉ sau SA+TL.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
