# Design — rpt-dem-xe (Đếm xe)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-DX-02) |
| Feature Kind | **E** · leaf `/bao-cao/dem-xe` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · run packet `task_626bc166`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-dem-xe/ui/prototype/rpt-dem-xe-prototype.html` |
| prototype | `specs/rpt-dem-xe/ui/prototype/rpt-dem-xe-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/dem-xe` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dem-xe` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `done` · `po/requirement.md` · `task_45faf47e` |
| prior · data_analy | `done` · `specs/_data-analy/features/rpt-dem-xe-control-hint.md` · hash `sha256:rpt-dem-xe-context-20260815` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-15T16:40:00.000Z` |
| taskId | `task_626bc166` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON CRUD · **cấm** clone CRUD `csdl-so-sach`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-dem-xe.md` | Kind E leaf · filter · Xem · lưới · drill · Excel |
| CTX-02 | parent `csdl-so-sach` | sổ nguồn — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01 / GAP-PO-DX-02) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-dem-xe-control-hint.md` | controlHint SSOT · **done** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |
| DI-04 | CSDL §3.4 | `TrafficCountSummary` 1 row / trạm / kỳ · ~18 class + `TotalCars` |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + 3 tab + chart SoCai. **Không** full demo clone. **Không** KPI dashboard slug khác.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (browser print / stub toast P1) · Config **FULL** (`LinReportTableConfigModal` — **cấm** stub/configHint toast) |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm — **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill `/csdl-so-sach?kind=traffic-counts&id=` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Đếm xe | report | **A Header · B Toolbar+filter · C Grid (+ chart modal) · D Pagination** | 1 page leaf · 3 tab |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-car` + title **Đếm xe** (22px, không clip)
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / GOVOne chrome (logo/bell/Hồ sơ/Đổi MK)

### Zone B — Filter + reportToolbar

**`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-DX-05):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| viewTab | Bảng | `SearchInput` | `kq` / `b1` / `b2` — **cấm** native Select |
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm QL.22** |
| stationId | Điểm đếm | `SearchInput` | count-station seed P1 + empty=Tất cả |
| fromDate | Từ | `Date` | kỳ |
| toDate | Đến | `Date` | kỳ |
| qSearch | Tìm kiếm | `Input` | trạm · tuyến |
| — | **Xem** | Button primary | apply draft → page=1 → load; **chưa Xem** = empty hint |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo **tab đang xem** |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | chưa Xem → apply+view; đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** khi `viewed` + ≥1 dòng — tổng theo ngày (line) · theo tuyến (bar) |
| In | print | `window.print` hoặc stub toast · không `window.confirm` |
| Sửa config | `fa-cog` | **FULL** column prefs theo tab — **cấm** stub toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi tab sau viewed **không** bắt Xem lại — cùng payload, cột FE khác (GAP-PO-DX-03).

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — Grid

- `listTitle` theo tab: **Kết quả đếm xe** · **Bảng B.1 — phân loại xe** · **Tổng hợp B.2 theo tuyến**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo đếm xe.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON · cột readonly

**Tab KQ**

| key | Label | controlHint |
|-----|-------|-------------|
| station | Điểm đếm | Text |
| route | Tuyến | Text |
| day | Kỳ / ngày | Date |
| total | Tổng xe | Number (`TotalCars`) |
| peak | Giờ cao điểm | Text |
| drill | Nguồn | Button «Mở sổ đếm xe» → `/csdl-so-sach?kind=traffic-counts&id={id}` |

**Tab B.1** — cùng DTO, thêm ~18 class xe (sổ 4 Excel/Word). Prototype P1 hiện nhóm chính; Dev map đủ class từ DTO:

| key | Label |
|-----|-------|
| station / day | Điểm đếm · ngày |
| bike | Xe đạp |
| moto | Xe máy |
| car | Xe con |
| taxi | Taxi |
| minibus | Minibus |
| bus | Bus |
| coachS / coachL | Xe khách nhỏ / lớn |
| lightTruck / midTruck / heavyTruck | Tải nhẹ / trung / nặng |
| container / tractor | Container / đầu kéo |
| agri / special / military | Nông nghiệp / chuyên dùng / quân sự |
| other | Khác |
| total | Tổng |

**Tab B.2** — aggregate theo `routeId` (+ kỳ nếu SA chốt): tuyến · cộng dồn class + tổng · AADT ước (P2; P1 có thể ẩn hoặc = tổng/kỳ).

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype datalist analog SearchInput.

### Bảng (viewTab)

| value | label |
|-------|-------|
| `kq` | KQ đếm xe (default) |
| `b1` | Bảng B.1 |
| `b2` | Tổng hợp B.2 |

### Tuyến (GAP-PO-DX-04)

- Lookup UI = 38 CUC2 + «Tất cả» (empty).
- Seed prototype: QL.1 / QL.15 / QL.217 / HCM / CT.001 / QL.7 / QL.8 / QL.9 / QL.10 **OK**.
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

### Điểm đếm

Seed P1 FE enum (không invent master ERP). Empty = tất cả.

## 4. Interactions

1. Mở `/bao-cao/dem-xe` → empty hint, **không** auto-load lưới.
2. Chọn tab/tuyến/điểm/từ–đến/q → **Xem** → GET `api/v1/report/traffic-counts?from=&to=&routeId=&stationId=&q=&tab=&page=&pageSize=`.
3. Xuất Excel → GET `api/v1/report/traffic-counts/export` → `traffic-counts.csv` / `traffic-counts-b1.csv` / `traffic-counts-b2.csv` UTF-8 BOM.
4. Drill dòng → `/csdl-so-sach?kind=traffic-counts&id=` (top window).
5. Chart SoCai khi đã Xem + có dòng · Config FULL · In.
6. Đổi page/pageSize sau viewed → refetch cùng applied filters.
7. B.2: aggregate cùng payload list theo tuyến (SA chốt FE vs BE).

## 5. Prototype

`specs/rpt-dem-xe/ui/prototype/rpt-dem-xe-prototype.html` — content-only A–D + 3 tab + SoCai chart overlay + Config cột FULL · SearchInput analog (không native Select) · empty đến khi Xem · **12** dòng CUC2 · pagination 50/100/200/500 **luôn** · Làm mới · In · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-dem-xe/ui/prototype/rpt-dem-xe-prototype.html`

Align live: `http://localhost:9311/bao-cao/dem-xe` (`yarn start:std` **:9311** — packet `:9301/rpt-dem-xe` **không** dùng — GAP-PO-DX-08).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/traffic-counts` | `from` `to` `routeId` `stationId` `q` `tab` `page` `pageSize` |
| GET | `/api/v1/report/traffic-counts/export` | CSV UTF-8 BOM theo tab |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.dem-xe.read`.

SA: lookup Type A · query in-memory P1 seed **12** · B.2 aggregate route · read-model EF `TrafficCountSummary` **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports` · **cấm** expose `POST /api/v1/traffic-counts` trên trang này.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-DX-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer |
| GAP-DS-DX-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell |
| GAP-DS-DX-03 | Prefix **`api/v1/report/traffic-counts`** (khớp GAP-PO-DX-01) — **cấm** `api/v1/reports` |
| GAP-DS-DX-04 | Config **FULL** P1 · Chart SoCai khi đã Xem + có dòng · In OK |
| GAP-DS-DX-05 | 3 tab cùng DTO; B.2 aggregate tuyến |
| GAP-DS-DX-06 | Form OUT · cấm Thêm mới A · drill `/csdl-so-sach?kind=traffic-counts&id=` |
| GAP-DS-DX-07 | autoApprove **ON** → Design **confirmed** (agent) · enqueue SA |
| GAP-DS-DX-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-DX-09 | Dashboard KPI **không** gộp slug này |
| GAP-DS-DX-10 | mfeStdUrl **`http://localhost:9311/bao-cao/dem-xe`** |
| GAP-DS-DX-11 | Seed **12** CUC2 · **cấm QL.22** |

## 8. Out of pack

CRUD sổ đếm xe / TNGT · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · master users thật · lifecycle `/erp-feature`.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `traffic-counts` in-memory P1 seed 12 + export CSV theo tab.
- Confirm B.2 aggregate `routeId` (FE hoặc BE) + `id` drill sổ 4.
- Roles TL/Dev/QA/Review = **pending** đến lượt.
- **autoApprove ON** → Design confirmed · chain enqueue **sa**.
- Repo BE+UI tick = user (không auto) **trước Dev**.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
