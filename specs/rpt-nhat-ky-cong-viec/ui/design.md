# Design — rpt-nhat-ky-cong-viec (Nhật ký công việc)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-cong-viec` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-NKCV-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-cong-viec` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_ce108fb8`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-cong-viec/ui/prototype/rpt-nhat-ky-cong-viec-prototype.html` |
| prototype | `specs/rpt-nhat-ky-cong-viec/ui/prototype/rpt-nhat-ky-cong-viec-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-cong-viec` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-cong-viec` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/maintenance-work-logs` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · `task_210ffbf8` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-nhat-ky-cong-viec-control-hint.md` · hash `sha256:rpt-nhat-ky-cong-viec-context-20260816` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-16T07:45:00.000Z` |
| taskId | `task_ce108fb8` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** reuse `api/v1/report/worklogs` · **cấm** clone CRUD `maintenance`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-nhat-ky-cong-viec.md` | Kind E leaf · filter · Xem · lưới · drill · Excel — API plural **stale** |
| CTX-02 | `docs/context/features/maintenance.md` + CSDL §3.7 | parent list / entity nguồn — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-nhat-ky-cong-viec-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + chart SoCai (modal). **Không** full demo clone. **Không** KPI 4 / map InZone (`rpt-bao-cao-cong`).

Live MFE (`MaintenanceWorkLogReportPage`) đã Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput tuyến/loại/đội · Date kỳ · Input tìm · **Xem** mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` luôn · Config `ReportDisplayConfigModal` FULL · chart/print. Design **re-review** control-map + prototype + GAP cột PP/kết quả — **không** đổi Kind E → Kind B.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (scope modal) · Config **FULL** (`ReportDisplayConfigModal` / `LinReportTableConfigModal` — **cấm** stub/`configHint`) · Excel trên filter cụm hoặc toolbar |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm · **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` (In dùng `window.print` sau modal) |
| View | grid + chart | Drill `/maintenance?id={workOrderId}` |
| Config Kind B | OUT | **Không** bắt `LinCatalogUiSchemaEditorModal` (GAP-PO-NKCV-11) |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Nhật ký công việc | report | **A Header · B Toolbar+filter · C Grid · D Pagination** + SoCai modal | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-clipboard-list` + title **Nhật ký công việc** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**Trái (`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap GAP-FILTER-BAR):**

| key | Label | Control (Design chốt) | catalogKind / rule |
|-----|-------|------------------------|---------------------|
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm** free-text · **cấm QL.22** |
| workType | Loại việc | `SearchInput` | `repair` / `inspect` / `emergency` — **cấm** native Select |
| teamId | Đội | `SearchInput` | TEAM-1 / TEAM-2 / TEAM-3 — **cấm** native Select |
| fromDate | Từ | `Date` | trên `LoggedAt` / `day` |
| toDate | Đến | `Date` | |
| qSearch | Tìm kiếm | `Input` | WO · hạng mục · tuyến |
| — | **Xem** | Button primary (`onSearch`) | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | **chưa Xem** → toast SSOT, **không** fetch · đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** `ReportChartModal` khi `viewed` + ≥1 dòng + config `showCharts` — catalog: số dòng theo ngày (line) · loại việc (bar) · tuyến (donut) |
| In | print | `LinReportPrintScopeModal` rồi `window.print` |
| Sửa config | `fa-cog` | **FULL** column prefs + chart/print/footer — **cấm** stub toast · **cấm** `LinListTableConfigModal` height-only |
| Xuất Excel | export | CSV UTF-8 BOM theo cột đang hiện · file `maintenance-work-logs.csv` · chưa Xem = toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — Grid

- `listTitle`: **Kết quả nhật ký công việc**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải nhật ký công việc.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT sổ = `Seq` nguồn (không STT trang)
- **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly

**Grid columns** (PO §5 + live keys)

| key | Label | Source | controlHint |
|-----|-------|--------|-------------|
| seq | STT sổ | `MaintenanceWorkLog.Seq` | Text |
| day | Ngày | `LoggedAt` → `day` | Date |
| workOrderCode | WO | `WorkOrder.Code` | Text |
| workName | Hạng mục | `WorkName` | Text |
| locationKm | Km | `LocationKm` | Text |
| quantity | KL | `WorkOrder.Quantity` | Text number |
| unitCode | ĐVT | `WorkOrder.UnitCode` | Text |
| statusLabel | Trạng thái | `WorkOrder.Status` | Text / badge display |
| route | Tuyến | `RoadCode` | Text |
| workTypeLabel | Loại việc | `WorkOrder.WorkType` | Text |
| teamName | Đội | `Office` / team | Text |
| contractor | Nhà thầu | `Contractor` | Text |
| methodSummary | PP | `MethodSummary` | Text — **GAP-DS-NKCV-01** live thiếu |
| mainResult | Kết quả | `MainResult` | Text — **GAP-DS-NKCV-01** live thiếu |
| drill | Nguồn | `workOrderId` | Button «Mở WO» → `/maintenance?id={workOrderId}` (top window) |

**Chart SoCai:** chỉ khi `viewed === true` và có ≥1 dòng. **Không** KPI 4 card · **không** map.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Loại việc

| value | label |
|-------|-------|
| `` (empty) | Tất cả loại việc |
| `repair` | Sửa chữa |
| `inspect` | Kiểm tra |
| `emergency` | Khẩn cấp |

### Đội

| value | label |
|-------|-------|
| `` | Tất cả đội |
| `TEAM-1` | Đội 1 |
| `TEAM-2` | Đội 2 |
| `TEAM-3` | Đội 3 |

### Tuyến (GAP-PO-NKCV-04)

- Lookup UI = 38 CUC2 + «Tất cả» (empty).
- Seed QL.1 / QL.15 / QL.217 / QL.7 / HCM **OK**.
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

## 4. Interactions

1. Mở `/bao-cao/nhat-ky-cong-viec` → empty hint, **không** auto-load lưới.
2. Chọn tuyến/loại/đội/từ–đến/tìm → **Xem** → GET `api/v1/report/maintenance-work-logs`.
3. Làm mới khi `!viewed` → toast, **không** fetch.
4. Xuất Excel → GET `api/v1/report/maintenance-work-logs/export` → `maintenance-work-logs.csv` UTF-8 BOM theo cột hiện.
5. Drill dòng → `/maintenance?id={workOrderId}`.
6. Chart / Print / Config theo §2 toolbar.
7. Đổi page/pageSize sau viewed → refetch cùng applied filters.

## 5. Prototype

`specs/rpt-nhat-ky-cong-viec/ui/prototype/rpt-nhat-ky-cong-viec-prototype.html` — content-only A–D · SearchInput combobox (không native Select filter) · Input tìm · empty đến khi Xem · **12** dòng mẫu `MaintenanceWorkLog` CUC2 · pagination 50/100/200/500 luôn · SoCai toast analog · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-cong-viec/ui/prototype/rpt-nhat-ky-cong-viec-prototype.html`

Align live: `http://localhost:9311/bao-cao/nhat-ky-cong-viec` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/maintenance-work-logs` | `routeId` `workType` `teamId` `from` `to` `q` `page` `pageSize` |
| GET | `/api/v1/report/maintenance-work-logs/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.nhat-ky-cong-viec.read`.

SA: lookup Type A tuyến · query in-memory P1 (12 CUC2) · read-model `MaintenanceWorkLog`/`WorkOrder` **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports` · **cấm** `worklogs`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-NKCV-01 | Live grid **thiếu** cột `methodSummary` / `mainResult` (PO §5) — Dev thêm + Config FULL khi tới lượt |
| GAP-DS-NKCV-02 | Zone D **luôn** `LinCatalogListPagination` — live đã luôn footer · **giữ** |
| GAP-DS-NKCV-03 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell / `LinCatalogUiSchemaEditorModal` bắt buộc |
| GAP-DS-NKCV-04 | Prefix **`api/v1/report/maintenance-work-logs`** (khớp GAP-PO-NKCV-01) |
| GAP-DS-NKCV-05 | Config **FULL** P1 · Chart SoCai khi có data · In = print-scope modal · **cấm** `configHint` |
| GAP-DS-NKCV-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout |
| GAP-DS-NKCV-07 | autoApprove **ON** → Design **tự confirm** · enqueue SA cùng feature · **không** chạy SA trong `roleOnly=design` |
| GAP-DS-NKCV-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-NKCV-09 | Dashboard KPI / KPI 4 / map InZone **không** gộp slug này |
| GAP-DS-NKCV-10 | Làm mới `!viewed` = toast, **không** apply+view (khác một số report leaf) |

## 8. Out of pack

CRUD `maintenance` / WO trên slug này · KPI 4 · map InZone · reuse `WorklogReportPage` / `worklogs` · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · Leaflet · hub family trên leaf này.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `maintenance-work-logs` in-memory P1 + export CSV.
- Confirm row fields gồm `methodSummary` / `mainResult` cho GAP-DS-NKCV-01.
- Roles sau Design = **pending** đến lượt (`sa` enqueue).
- **Cấm** nhảy TL/Dev/QA trong task này.
- Repo BE+UI tick = user (không auto) trước Dev.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
