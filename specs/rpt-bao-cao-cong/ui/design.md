# Design — rpt-bao-cao-cong (Báo cáo công)

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-BCC-02) |
| Feature Kind | **E** · leaf `/bao-cao/bao-cao-cong` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (user APPROVE→CHAIN · `task_05cde6c5`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-bao-cao-cong/ui/prototype/rpt-bao-cao-cong-prototype.html` |
| prototype | `specs/rpt-bao-cao-cong/ui/prototype/rpt-bao-cao-cong-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/bao-cao-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/bao-cao-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · `task_85aae5bd` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-bao-cao-cong-control-hint.md` · hash `sha256:adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab` |
| autoApprove | **OFF** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-15T14:50:00.000Z` |
| taskId | `task_28b5b565` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/attendance/*` · **cấm** parent JSON · **cấm** clone CRUD `attendance`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-bao-cao-cong.md` | Kind E leaf · filter · Xem · lưới · drill · Excel |
| CTX-02 | `docs/context/features/attendance.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-PO-BCC-03) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-bao-cao-cong-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + KPI 4 + map SVG (SoCai report shell). **Không** full demo clone.

Live MFE (`WorklogReportPage`) đã Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput · Date · Xem mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` (điều kiện `showFooterPagination`) · KPI 4 · SVG map · drill Field · Config FULL · chart/print. Design **re-review** control-map + prototype + GAP footer luôn hiện — **không** đổi Kind E → Kind B.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production · **cấm** ẩn D qua `showFooterPagination=false` (GAP-DS-BCC-01) |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (scope modal) · Config **FULL** (`ReportDisplayConfigModal` / `LinReportTableConfigModal` — **cấm** stub/configHint toast) |
| 6 | list_parity | Filter **SearchInput** + **Date** · **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` (In dùng `window.print` sau modal — không confirm native) |
| View | grid + KPI + map | Drill sang Field `/patrol/attendance` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Báo cáo công | report | **A Header · B Toolbar+filter · C KPI+map+Grid · D Pagination** | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-user-clock` + title **Báo cáo công** (22px, không clip)
- Badge tuỳ chọn: Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**Trái (`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap GAP-FILTER-BAR):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| periodMode | Kỳ | `SearchInput` | enum `week` / `month` — đổi kỳ **auto-fill** from/to (tuần T2–CN · tháng 1→cuối tháng) |
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm** free-text · **cấm QL.22** |
| staffId | Nhân viên | `SearchInput` | mock enum P1 (không master users CUC2) · empty=Tất cả |
| zone | Zone | `SearchInput` | enum `all` / `out` (`all` = Tất cả · `out` = Chỉ lệch zone) |
| fromDate | Từ ngày | `Date` | `LinErpListFilterBar` date range |
| toDate | Đến ngày | `Date` | |
| — | **Xem** | Button primary (`onSearch`) | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo cột đang hiện · file `worklogs.csv` |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | chưa Xem → apply+view; đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** `ReportChartModal` khi `viewed` + có dòng + config `showCharts` — catalog: InZone % theo ngày (line) · Ca theo tuyến (bar) · Cơ cấu zone (donut) |
| In | print | `LinReportPrintScopeModal` rồi `window.print` — **không** stub toast nếu đã có modal |
| Sửa config | `fa-cog` | **FULL** column prefs + chart/print/footer flags — **cấm** stub toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo (gộp Xem + clear từng SearchInput).

### Zone C — KPI + map + Grid

- `listTitle`: **Kết quả báo cáo công**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo công.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — Zone = Dropdown **display** (không editor)

**KPI 4** (chỉ sau Xem):

| Card | Field | Notes |
|------|-------|-------|
| Số ca | `kpis.shiftCount` | |
| InZone % | `kpis.inZonePct` | suffix `%` |
| Lệch zone | `kpis.outZoneCount` | |
| Điểm TB | `kpis.avgPoints` | |

**Map P1:** SVG lat/lng (`WorklogMapPanel`) — chấm xanh trong zone · đỏ lệch zone. **Leaflet = P2** (không dep MFE). Ẩn khi chưa Xem hoặc 0 dòng.

**Grid columns**

| key | Label | controlHint |
|-----|-------|-------------|
| staff | Cán bộ | Text |
| route | Tuyến | Text |
| day | Ngày | Date (ISO day) |
| points | Điểm | Text number |
| inZonePct | InZone % | Text number + `%` |
| zoneStatus | Zone | Dropdown display `in`/`out` → Trong zone / Lệch zone |
| firstAt | Đầu | DateTime first→last |
| lastAt | Cuối | DateTime |
| drill | Nguồn | Button «Mở chấm công» → `/patrol/attendance?id={attendanceId}` (top window) |

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render** (GAP-DS-BCC-01).

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Kỳ

| value | label |
|-------|-------|
| `month` | Tháng (default) |
| `week` | Tuần |

### Zone filter

| value | label |
|-------|-------|
| `all` | Tất cả (default · query **không** gửi `zone`) |
| `out` | Chỉ lệch zone (`zone=out`) |

### Tuyến (GAP-PO-BCC-06)

- Lookup UI = 38 CUC2 + «Tất cả» (empty).
- Seed prior QL.1 / QL.15 / QL.217 **OK** nếu nằm trong 38.
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

### Nhân viên P1

Mock enum (ví dụ Nguyễn Văn A / Trần Thị B) — **không** bind master users CUC2 P1.

## 4. Interactions

1. Mở `/bao-cao/bao-cao-cong` → empty hint, **không** auto-load KPI/map/grid.
2. Chọn kỳ/tuyến/NV/zone/từ–đến → **Xem** → GET `api/v1/report/worklogs`.
3. Xuất Excel → GET `api/v1/report/worklogs/export` → `worklogs.csv` UTF-8 BOM theo cột hiện.
4. Drill dòng → Field attendance.
5. Chart / Print / Config theo §2 toolbar.
6. Đổi page/pageSize sau viewed → refetch cùng applied filters.

## 5. Prototype

`specs/rpt-bao-cao-cong/ui/prototype/rpt-bao-cao-cong-prototype.html` — content-only A–D + KPI + SVG map · SearchInput combobox (không native Select filter) · empty đến khi Xem · 12 dòng mẫu AttendanceLog · pagination 50/100/200/500 · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-bao-cao-cong/ui/prototype/rpt-bao-cao-cong-prototype.html`

Align live: `http://localhost:9311/bao-cao/bao-cao-cong` (`yarn start:std` **:9311** — packet :9301 **không** dùng).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/worklogs` | `type`/`period` `routeId` `from` `to` `search` `zone` `page` `pageSize` · kpis + items |
| GET | `/api/v1/report/worklogs/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.bao-cao-cong.read`.

SA: lookup Type A · query in-memory P1 · read-model AttendanceLog **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/attendance/*`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-BCC-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer khi `showFooterPagination=false` (live hiện điều kiện config → Dev sửa khi tới lượt) |
| GAP-DS-BCC-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell |
| GAP-DS-BCC-03 | Prefix **`api/v1/report/worklogs`** (khớp GAP-PO-BCC-01) |
| GAP-DS-BCC-04 | Config **FULL** P1 · Chart SoCai khi có data · In = print-scope modal |
| GAP-DS-BCC-05 | Map **SVG P1** · Leaflet **P2** |
| GAP-DS-BCC-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout |
| GAP-DS-BCC-07 | autoApprove OFF → **await_confirm** · **không** enqueue SA |
| GAP-DS-BCC-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-BCC-09 | Dashboard KPI **không** gộp slug này |

## 8. Out of pack

CRUD attendance · GOVOne chrome · Leaflet P1 · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/attendance/*` · invent tuyến ngoài CUC2 38 · master users thật · hub 3 family trên leaf này.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `worklogs` in-memory P1 + export CSV.
- Confirm kpis shape + lat/lng trên row cho SVG.
- Roles sau Design = **pending** đến lượt.
- User Approve board → enqueue SA. **Cấm** nhảy TL/Dev/QA khi design chưa confirm.
- Repo BE+UI tick = user (không auto) trước Dev.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
