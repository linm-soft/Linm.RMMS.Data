# Design — rpt-nhat-ky-tuan-duong (Nhật ký tuần đường)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-NKTD-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-duong` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_a78a8a06`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| prototype | `specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-log-road` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · `task_072cb5c8` · GAP-PO-NKTD-01..12 |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` · hash `sha256:rpt-nhat-ky-tuan-duong-context-20260816` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp · SSOT live lệch — **không** regen) |
| updatedAt | `2026-08-16T08:25:00.000Z` |
| taskId | `task_a78a8a06` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** reuse tuần kiểm / check-in · **cấm** clone CRUD `csdl-so-sach`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-nhat-ky-tuan-duong.md` | Kind E leaf · filter · Xem · lưới · drill · Excel — API plural **stale** |
| CTX-02 | CSDL §3.1 + `docs/context/features/csdl-so-sach.md` | parent list / entity nguồn — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + chart SoCai (modal). **Không** full demo clone. **Không** gộp Mẫu 8 / `rpt-checkin`.

Live MFE (`PatrolLogRoadReportPage`) đã Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput tuyến/cán bộ · Date kỳ · Input tìm · **Xem** mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` luôn · Config `ReportDisplayConfigModal` FULL · chart/print · cột đủ PO §5 (kể cả Vị trí). Design **re-review** control-map + prototype (SearchInput analog, **không** native `<select>`) — **không** đổi Kind E → Kind B.

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
| View | grid + chart | Drill `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` (+ `entryId` nếu route hỗ trợ) |
| Config Kind B | OUT | **Không** bắt `LinCatalogUiSchemaEditorModal` (GAP-PO-NKTD-11) |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Nhật ký tuần đường | report | **A Header · B Toolbar+filter · C Grid · D Pagination** + SoCai modal | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-road` + title **Nhật ký tuần đường** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**Trái (`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap GAP-FILTER-BAR):**

| key | Label | Control (Design chốt) | catalogKind / rule |
|-----|-------|------------------------|---------------------|
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm** free-text · **cấm QL.22** |
| staffId | Cán bộ | `SearchInput` | nva / ttb / lvc / pmd P1 — **cấm** native Select |
| fromDate | Từ | `Date` | trên `CheckedAt` / `day` |
| toDate | Đến | `Date` | |
| qSearch | Tìm kiếm | `Input` | nội dung · tuyến · cán bộ · số sổ |
| — | **Xem** | Button primary (`onSearch`) | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | **chưa Xem** → toast SSOT, **không** fetch · đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** `ReportChartModal` khi `viewed` + ≥1 dòng + config `showCharts` — catalog: số dòng theo ngày (line) · tuyến (bar/donut) · trạng thái signed/pending |
| In | print | `LinReportPrintScopeModal` rồi `window.print` · stub OK nếu chưa print engine |
| Sửa config | `fa-cog` | **FULL** column prefs + chart/print/footer — **cấm** stub toast · **cấm** `LinListTableConfigModal` height-only |
| Xuất Excel | export | CSV UTF-8 BOM theo cột đang hiện · file `patrol-log-road.csv` · chưa Xem = toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi filter sau Xem → page=1 khi Xem lại.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — Grid

- `listTitle`: **Kết quả nhật ký tuần đường**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải nhật ký tuần đường.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly

**Grid columns** (PO §5 + live keys)

| key | Label | Source | controlHint |
|-----|-------|--------|-------------|
| day | Ngày | `PatrolLogEntry.CheckedAt` → `day` | Date |
| route | Tuyến | `PatrolLogBook.RoadCode` | Text |
| patrolStaff | Cán bộ | `PatrolLogBook.PatrolStaff` | Text |
| locationKm | Km | `PatrolLogEntry.Km` | Text |
| weatherAndEvent | Nội dung nhật ký | `WeatherAndEvent` | Text |
| onSiteAction | Xử lý tại chỗ | `OnSiteAction` | Text |
| statusLabel | Trạng thái | `SupervisorSignedAt` → `signed`/`pending` | badge display |
| bookNo | Số sổ | `PatrolLogBook.BookNo` | Text |
| locationText | Vị trí | `LocationText` | Text — **GAP-DS-NKTD-01** prototype cũ thiếu; live MFE **đã có** |
| drill | Nguồn | `bookId` / `entryId` | Button «Mở sổ» → `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` |

**Chart SoCai:** chỉ khi `viewed === true` và có ≥1 dòng. **Không** KPI 4 card · **không** map.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Cán bộ (P1)

| value | label |
|-------|-------|
| `` (empty) | Tất cả cán bộ |
| `nva` | Nguyễn Văn A |
| `ttb` | Trần Thị B |
| `lvc` | Lê Văn C |
| `pmd` | Phạm Minh D |

### Tuyến (GAP-PO-NKTD-04)

- Lookup UI = 38 CUC2 + «Tất cả» (empty) · Integration Type A `GET api/v1/integration/road-routes/search`.
- Seed prototype: QL.1 / QL.15 / QL.217 / QL.7 / HCM **OK**.
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

## 4. Interactions

1. Mở `/bao-cao/nhat-ky-tuan-duong` → empty hint, **không** auto-load lưới.
2. Chọn tuyến/cán bộ/từ–đến/tìm → **Xem** → GET `api/v1/report/patrol-log-road`.
3. Làm mới khi `!viewed` → toast, **không** fetch.
4. Xuất Excel → GET `api/v1/report/patrol-log-road/export` → `patrol-log-road.csv` UTF-8 BOM theo cột hiện.
5. Drill dòng → `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` (kèm `entryId` nếu route hỗ trợ).
6. Chart / Print / Config theo §2 toolbar.
7. Đổi page/pageSize sau viewed → refetch cùng applied filters.
8. Enter trên ô tìm = **Xem**.

Auth JWT · tenant · perm `report.nhat-ky-tuan-duong.read` (FE gate ON · BE stub OK P1).

## 5. Prototype

`specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html` — content-only A–D · SearchInput combobox (không native Select filter) · Input tìm · empty đến khi Xem · **12** dòng mẫu `PatrolLogBook`/`PatrolLogEntry` CUC2 · cột Vị trí · pagination 50/100/200/500 luôn · SoCai modal analog · Config FULL analog · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-duong/ui/prototype/rpt-nhat-ky-tuan-duong-prototype.html`

Align live: `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/patrol-log-road` | `routeId` `staffId` `from` `to` `q` `page` `pageSize` |
| GET | `/api/v1/report/patrol-log-road/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.nhat-ky-tuan-duong.read`.

SA: lookup Type A tuyến · query in-memory P1 (12 CUC2) · read-model `PatrolLogBook`/`PatrolLogEntry` **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports` · **cấm** InspectionLog / PatrolSession.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-NKTD-01 | Prototype trước dùng native `<select>` + thiếu cột Vị trí — **đóng** ở prototype này. Live MFE đã SearchInput + `locationText`. |
| GAP-DS-NKTD-02 | Zone D **luôn** `LinCatalogListPagination` — live đã luôn footer · **giữ** |
| GAP-DS-NKTD-03 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell / `LinCatalogUiSchemaEditorModal` bắt buộc |
| GAP-DS-NKTD-04 | Prefix **`api/v1/report/patrol-log-road`** (khớp GAP-PO-NKTD-01) — **đóng** context plural `reports` |
| GAP-DS-NKTD-05 | Config **FULL** P1 · Chart SoCai khi có data · In = print-scope modal · **cấm** `configHint` |
| GAP-DS-NKTD-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout |
| GAP-DS-NKTD-07 | autoApprove **ON** → Design **tự confirm** · enqueue SA cùng feature · **không** chạy SA trong `roleOnly=design` |
| GAP-DS-NKTD-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-NKTD-09 | Dashboard KPI **không** gộp slug này · **không** gộp Mẫu 8 / check-in |
| GAP-DS-NKTD-10 | Làm mới `!viewed` = toast, **không** apply+view |
| GAP-DS-NKTD-11 | Seed 12 CUC2 · **cấm QL.22** · P1 in-memory OK |

## 8. Out of pack

CRUD `csdl-so-sach` / PatrolLog* trên slug này · Mẫu 8 tuần kiểm · `rpt-checkin` PatrolSession · Dashboard KPI gộp · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · Leaflet · hub family trên leaf này.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `patrol-log-road` in-memory P1 + export CSV.
- Confirm row fields gồm `locationText` / `bookId` / `entryId` cho drill.
- Roles sau Design = **pending** đến lượt (`sa` enqueue).
- **Cấm** nhảy TL/Dev/QA trong task này.
- Repo BE+UI tick = user (không auto) trước Dev.
- Build gate: Design **không** sửa MFE/BE → `yarn build` / `dotnet build` **N/A** role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
