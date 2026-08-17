# Design — rpt-nhat-ky-tuan-kiem (Nhật ký tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-kiem` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-NKTK-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-kiem` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_ee539f5e`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-kiem/ui/prototype/rpt-nhat-ky-tuan-kiem-prototype.html` |
| prototype | `specs/rpt-nhat-ky-tuan-kiem/ui/prototype/rpt-nhat-ky-tuan-kiem-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/nhat-ky-tuan-kiem` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-kiem` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-log-inspect` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · `task_085844af` · GAP-PO-NKTK-01..04 |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-nhat-ky-tuan-kiem-control-hint.md` · hash `sha256:rpt-nhat-ky-tuan-kiem-context-20260816` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp · **không** regen) |
| updatedAt | `2026-08-16T16:05:00.000Z` |
| taskId | `task_ee539f5e` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** reuse Mẫu 1 `rpt-nhat-ky-tuan-duong` / KPI `rpt-tuan-kiem` · **cấm** clone CRUD `csdl-so-sach`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-nhat-ky-tuan-kiem.md` | Kind E leaf · filter · Xem · lưới · drill · Excel — API plural **stale** |
| CTX-02 | CSDL §3.8 + `docs/context/features/csdl-so-sach.md` | parent list / `InspectionLogBook` · `InspectionEntry` — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-nhat-ky-tuan-kiem-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo (đọc báo cáo, không nhập sổ). Prototype **content-only** zones **A–D** + chart SoCai (modal). **Không** full demo clone. **Không** gộp Mẫu 1 tuần đường / KPI tuần.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + ≥1 dòng) · In (scope modal) · Config **FULL** (`ReportDisplayConfigModal` / `LinReportTableConfigModal` — **cấm** stub/`configHint`) · Excel trên filter cụm hoặc toolbar |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm · **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` (In dùng `window.print` sau modal) |
| View | grid + chart | Drill `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}` |
| Config Kind B | OUT | **Không** bắt `LinCatalogUiSchemaEditorModal` (GAP-PO-NKTK-02) |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Nhật ký tuần kiểm | report | **A Header · B Toolbar+filter · C Grid · D Pagination** + SoCai modal | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-clipboard-check` + title **Nhật ký tuần kiểm** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**Trái (`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap GAP-FILTER-BAR):**

| key | Label | Control (Design chốt) | catalogKind / rule |
|-----|-------|------------------------|---------------------|
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · Exact `FilterRoute` khi chọn · **cấm** free-text · **cấm QL.22** |
| staffId | Cán bộ | `SearchInput` | nva / ttb / lvc / pmd P1 — **cấm** native Select |
| fromDate | Từ | `Date` | trên `InspectionEntry.Date` / `day` |
| toDate | Đến | `Date` | |
| q | Tìm kiếm | `Input` | canonical query `q` · hạng mục · tuyến · cán bộ · số sổ |
| — | **Xem** | Button primary (`onSearch`) | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | **chưa Xem** → toast SSOT, **không** fetch · đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** `ReportChartModal` khi `viewed` + ≥1 dòng + config `showCharts` — catalog: số dòng theo ngày (line) · tuyến (bar/donut) · trạng thái done/open |
| In | print | `LinReportPrintScopeModal` rồi `window.print` · stub OK nếu chưa print engine |
| Sửa config | `fa-cog` | **FULL** column prefs + chart/print/footer — **cấm** stub toast · **cấm** `LinListTableConfigModal` height-only |
| Xuất Excel | export | CSV UTF-8 BOM theo cột đang hiện · file `patrol-log-inspect.csv` · chưa Xem = toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi filter sau Xem → page=1 khi Xem lại.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — Grid

- `listTitle`: **Kết quả nhật ký tuần kiểm**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải nhật ký tuần kiểm.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly

**Grid columns** (PO §7 + controlHint)

| key | Label | Source | controlHint |
|-----|-------|--------|-------------|
| day | Ngày | `InspectionEntry.Date` → `day` | Date |
| route | Tuyến | `InspectionLogBook.RoadCode` | Text |
| workItem | Hạng mục | `WorkItemProposal` | Text |
| result | Kết quả | `ConditionDetail` | Text |
| note | Ghi chú | `RequiredAction` / `ReceiverNote` | Text — **GAP-DS-NKTK-01** prototype cũ thiếu |
| inspectorStaff | Cán bộ | header sổ / P1 `InspectorStaff` | Text |
| kmRange | Km | `KmFrom`–`KmTo` | Text |
| position | Vị trí | `Position` | Text |
| statusLabel | Trạng thái | `DoneAt` → `done` / `open` | badge display |
| bookNo | Số sổ | `BookNo` | Text |
| drill | Nguồn | `bookId` / `entryId` | Button «Mở sổ» → `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}` |

**Chart SoCai:** chỉ khi `viewed === true` và có ≥1 dòng. **Không** KPI 4 card · **không** map.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §6)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Cán bộ (P1)

| value | label |
|-------|-------|
| `` (empty) | Tất cả cán bộ |
| `nva` | Nguyễn Văn A |
| `ttb` | Trần Thị B |
| `lvc` | Lê Văn C |
| `pmd` | Phạm Minh D |

### Tuyến

- Lookup UI = 38 CUC2 + «Tất cả» (empty) · Integration Type A `GET api/v1/integration/road-routes/search`.
- Seed prototype: QL.1 / QL.15 / QL.217 / QL.7 / HCM **OK**.
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

## 4. Interactions

1. Mở `/bao-cao/nhat-ky-tuan-kiem` → empty hint, **không** auto-load lưới.
2. Chọn tuyến/cán bộ/từ–đến/tìm → **Xem** → GET `api/v1/report/patrol-log-inspect`.
3. Làm mới khi `!viewed` → toast, **không** fetch.
4. Xuất Excel → GET `api/v1/report/patrol-log-inspect/export` → `patrol-log-inspect.csv` UTF-8 BOM theo cột hiện.
5. Drill dòng → `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}`.
6. Chart / Print / Config theo §2 toolbar.
7. Đổi page/pageSize sau viewed → refetch cùng applied filters.
8. Enter trên ô tìm = **Xem**.

Auth JWT · tenant · perm `report.nhat-ky-tuan-kiem.read` (FE gate ON · BE stub OK P1).

## 5. Prototype

`specs/rpt-nhat-ky-tuan-kiem/ui/prototype/rpt-nhat-ky-tuan-kiem-prototype.html` — content-only A–D · SearchInput combobox (không native Select filter) · Input tìm · empty đến khi Xem · **12** dòng mẫu `InspectionLogBook`/`InspectionEntry` CUC2 · cột Ghi chú · trạng thái done/open · pagination 50/100/200/500 luôn · SoCai modal analog · Config FULL analog · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-nhat-ky-tuan-kiem/ui/prototype/rpt-nhat-ky-tuan-kiem-prototype.html`

Align live: `http://localhost:9311/bao-cao/nhat-ky-tuan-kiem` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/patrol-log-inspect` | `routeId` `staffId` `from` `to` `q` `page` `pageSize` |
| GET | `/api/v1/report/patrol-log-inspect/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.nhat-ky-tuan-kiem.read`.

SA: lookup Type A tuyến · query in-memory P1 (12 CUC2) · read-model `InspectionLogBook`/`InspectionEntry` **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports` · **cấm** PatrolLogBook / PatrolSession trên slug này.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-NKTK-01 | Prototype trước copy Mẫu 1 (title/cột tuần đường, thiếu Ghi chú, status signed/pending) — **đóng** ở prototype này. |
| GAP-DS-NKTK-02 | Zone D **luôn** `LinCatalogListPagination` — **giữ** |
| GAP-DS-NKTK-03 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell / `LinCatalogUiSchemaEditorModal` bắt buộc |
| GAP-DS-NKTK-04 | Prefix **`api/v1/report/patrol-log-inspect`** (khớp GAP-PO-NKTK-01) — **đóng** context plural `reports` |
| GAP-DS-NKTK-05 | Config **FULL** P1 · Chart SoCai khi có data · In = print-scope modal · **cấm** `configHint` |
| GAP-DS-NKTK-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout |
| GAP-DS-NKTK-07 | autoApprove **ON** → Design **tự confirm** · enqueue SA cùng feature · **không** chạy SA trong `roleOnly=design` |
| GAP-DS-NKTK-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-NKTK-09 | Dashboard KPI **không** gộp slug này · **không** gộp Mẫu 1 / `rpt-tuan-kiem` |
| GAP-DS-NKTK-10 | Làm mới `!viewed` = toast, **không** apply+view |
| GAP-DS-NKTK-11 | Seed 12 CUC2 · **cấm QL.22** · P1 in-memory OK |
| GAP-DS-NKTK-12 | Drill query `entry=` (PO) — **không** `kind=patrol-logs` |

## 8. Out of pack

CRUD `csdl-so-sach` / Inspection* trên slug này · Mẫu 1 tuần đường · `rpt-tuan-kiem` KPI · Dashboard KPI gộp · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · Leaflet · hub family trên leaf này.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `patrol-log-inspect` in-memory P1 + export CSV.
- Confirm row fields gồm `workItem` / `result` / `note` / `position` / `kmRange` / `bookId` / `entryId` cho drill.
- Roles sau Design = **pending** đến lượt (`sa` enqueue).
- **Cấm** nhảy TL/Dev/QA trong task này.
- Repo BE+UI tick = user (không auto) trước Dev.
- Build gate: Design **không** sửa MFE/BE → `yarn build` / `dotnet build` **N/A** role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
