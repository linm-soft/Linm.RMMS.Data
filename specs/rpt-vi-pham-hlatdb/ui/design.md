# Design — rpt-vi-pham-hlatdb (Vi phạm HLATĐB)

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-HLATDB-02) |
| Feature Kind | **E** · leaf `/bao-cao/vi-pham-hlatdb` · **không** CRUD form |
| status | `done` |
| design_confirm | **approve** (`autoApprove=ON` — agent tự confirm prototype) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |
| prototype | `specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/vi-pham-hlatdb` |
| mfeStdUrl | `http://localhost:9311/bao-cao/vi-pham-hlatdb` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed`/`done` · `po/requirement.md` · `task_ab8fa516` |
| prior · data_analy | `confirmed`/`done` · `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` · hash `sha256:rpt-vi-pham-hlatdb-context-20260816` · cluster handoff **N/A** |
| autoApprove | **ON** |
| chain | **ON** |
| sourceFormReady | **yes** · entity `RowViolation` · CSDL §3.6 |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `RowViolation` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-16T17:15:00.000Z` |
| taskId | `task_283c81e9` |

**Cấm ERP.*** · **cấm** `ERP.Service.*` · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** prefix `api/v1/reports` (plural) · **cấm** copy CRUD `csdl-so-sach` / `RowViolation` vào leaf này · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B).

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-vi-pham-hlatdb.md` | Kind E leaf · filter tab · tuyến · kỳ · loại VP · Xem · lưới · drill · Excel |
| CTX-02 | parent list pack `csdl-so-sach` | **cấm** copy CRUD sổ 6 |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01 / GAP-PO-HLATDB-02) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu / note |
| DI-02 | `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` 38 tuyến | **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + 2 tab + chart SoCai. **Không** KPI dashboard gộp slug. **Không** full demo clone. Current live (`task_24fb0ec1`) = Kind E leaf đã ship; New = re-prototype A–D khớp PO `task_ab8fa516`.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` · **cấm** hub `ReportListPage` làm trang này |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + ≥1 dòng) · In (stub OK P1) · Config **FULL** (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** `LinListTableConfigModal` / stub / `configHint`) |
| 6 | list_parity | Filter **SearchInput** tab/tuyến/TT + **Date** + **Input** tìm — **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill `/csdl-so-sach?kind=row-violations&id={id}` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Vi phạm HLATĐB | report | **A Header · B Toolbar+filter · C Grid (+ chart modal) · D Pagination** | 1 page leaf · 2 tab |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-exclamation-triangle` + title **Vi phạm HLATĐB** (22px, không clip)
- Badge tuỳ chọn Kind E — không bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-HLATDB-09):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| tab | Tab | `SearchInput` | `ROW_VIOLATION_TAB_LOOKUP` · `detail` Thống kê chi tiết / `summary` Tổng hợp theo tuyến · **cấm** native Select |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · empty=Tất cả · **cấm QL.22** · **cấm** free-text |
| status | Loại / TT vi phạm | `SearchInput` | `phat-hien` / `lap-bb` / `dang-xu-ly` / `da-xu-ly` / `ton-dong` / empty=Tất cả |
| fromDate | Từ ngày | `Date` | kỳ trên `At` (`day`) |
| toDate | Đến ngày | `Date` | kỳ trên `At` (`day`) |
| qSearch | Tìm kiếm | `Input` | tuyến · km · địa bàn · tổ chức · hiện trạng · query **`q`** |
| — | **Xem** | Button primary | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo cột đang hiện · file `row-violations.csv` · `canExport` chỉ khi đã Xem |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | chưa Xem (`!viewed`) → apply+view; đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** khi `viewed === true` + ≥1 dòng — KPI số VP theo TT (`phat-hien`…`ton-dong`) · tab summary: theo tuyến |
| In | print | stub toast OK nếu chưa print engine · không `window.confirm` |
| Sửa config | `fa-cog` | **FULL** column prefs — title «Cấu hình hiển thị báo cáo» · bảng cột List/width/filter/sort/Thêm cột analog · **cấm** stub toast / `configHint` / Kind B schema editor |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi filter rồi Xem → reset page=1. Enter trên Input tìm = Xem.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo · native `<select>`.

### Zone C — Grid

- `listTitle`: **Kết quả báo cáo vi phạm HLATĐB**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — **không** editor
- Hai bộ cột theo `tab` — **cấm** mix CRUD sổ 6

**Tab `detail` (thống kê chi tiết)**

| key | Label | Field nguồn | Default |
|-----|-------|-------------|---------|
| stt | STT | — | luôn |
| day | Ngày | `At` | hiện |
| route | Tuyến | `RouteId` | hiện |
| stationKm | Km | `StationKm` | hiện |
| adminArea | Địa bàn | `AdminArea` | hiện |
| statusLabel | TT / loại VP | `ViolationStatus` | hiện |
| orgName | Tổ chức | `OrgName` | hiện |
| minutesDepot | BB hạt | `MinutesDepot` | hiện |
| minutesCommune | BB xã | `MinutesCommune` | **ẩn** — Config thêm |
| minutesAdmin | BB hành chính | `MinutesAdmin` | **ẩn** — Config thêm |
| currentState | Hiện trạng | `CurrentState` | hiện |
| unitConfirm | Đơn vị xác nhận | `UnitConfirm` | hiện |
| drill | Nguồn | Button «Mở sổ VP» | hiện |

**Tab `summary` (tổng hợp theo tuyến)**

| key | Label | Field | Default |
|-----|-------|-------|---------|
| stt | STT | — | luôn |
| route | Tuyến | group `RouteId` | hiện |
| ticketCount | Số VP | count | hiện |
| outstandingCount | Tồn đọng | count `ViolationStatus=ton-dong` | hiện |
| lastDay | Ngày gần nhất | max `At` | hiện |
| adminArea | Địa bàn | sample / join | hiện |
| drill | Nguồn | mở sổ lọc tuyến | hiện |

**Không** KPI dashboard trên C · **không** map.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**. Prototype analog size-bar = visual only — production **cấm** pageSizeBar component.

## 3. Control-map (Design chốt — từ data-analy + PO §6)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Tab

| value | label |
|-------|-------|
| `detail` | Thống kê chi tiết |
| `summary` | Tổng hợp theo tuyến |

### Tuyến (routeId)

- Lookup UI = **road-route** P1 seed CUC2 (`specs/_data-analy/shared-catalogs/road-route-seed.json`) + «Tất cả tuyến».
- **Cấm** invent / lọc `QL.22`.
- Type A Integration `GET api/v1/integration/road-routes/search` **P2** (SA). P1 in-memory seed.

### Loại / TT vi phạm (status)

| value | label |
|-------|-------|
| `` (empty) | Tất cả |
| `phat-hien` | Phát hiện |
| `lap-bb` | Lập biên bản |
| `dang-xu-ly` | Đang xử lý |
| `da-xu-ly` | Đã xử lý |
| `ton-dong` | Tồn đọng |

## 4. Interactions

1. Mở `/bao-cao/vi-pham-hlatdb` → empty hint, **không** auto-load lưới.
2. Chọn tab/tuyến/TT/từ–đến/q → **Xem** → GET `api/v1/report/row-violations`.
3. Xuất Excel (đã Xem) → GET `api/v1/report/row-violations/export` → `row-violations.csv` UTF-8 BOM theo cột hiện.
4. Drill dòng → `/csdl-so-sach?kind=row-violations&id={id}` (MFE nguồn sổ 6).
5. Chart SoCai khi đã Xem + có dòng · Config FULL · In stub.
6. Đổi page/pageSize sau viewed → refetch cùng applied filters.

## 5. Prototype

`specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html` — content-only A–D + SoCai chart modal + Config cột FULL (cột ẩn BB xã / BB hành chính trên tab detail) · SearchInput combobox tab/tuyến/TT (không native Select filter) · empty đến khi Xem · **12** dòng `RowViolation` CUC2 (**cấm QL.22**) · 2 tab detail/summary · pagination 50/100/200/500 **luôn** · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-vi-pham-hlatdb/ui/prototype/rpt-vi-pham-hlatdb-prototype.html`

Align live: `http://localhost:9311/bao-cao/vi-pham-hlatdb` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/row-violations` | query `tab` `status` `routeId` `from` `to` `q` `page` `pageSize` |
| GET | `/api/v1/report/row-violations/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A P2 — P1 seed in-memory · **không** copy catalog vào Report |

Context `api/v1/reports/row-violations` **stale**.

Perm: `report.vi-pham-hlatdb.read`. JWT · tenant.

SA: lookup road-route · query in-memory P1 seed **8–15** (live 12) · entity `RowViolation` **P2** EF — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-HLATDB-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer |
| GAP-DS-HLATDB-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell / `LinCatalogUiSchemaEditorModal` |
| GAP-DS-HLATDB-03 | Prefix **`api/v1/report/row-violations`** (khớp GAP-PO-HLATDB-01) — **cấm** `api/v1/reports` |
| GAP-DS-HLATDB-04 | Query **`tab` `status` `routeId` `from` `to` `q`** — đóng alias plural `reports` trên leaf này |
| GAP-DS-HLATDB-05 | Config **FULL** P1 (`LinReportTableConfigModal` / `ReportDisplayConfigModal`) · Chart SoCai khi đã Xem + có dòng · In stub OK |
| GAP-DS-HLATDB-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout · drill `/csdl-so-sach?kind=row-violations&id=` |
| GAP-DS-HLATDB-07 | autoApprove ON → Design **tự confirm** prototype · SA **pending** đến lượt chain (không chạy SA trong task này) |
| GAP-DS-HLATDB-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-HLATDB-09 | Dashboard KPI **không** gộp slug này · seed CUC2 · **cấm QL.22** |
| GAP-DS-HLATDB-10 | mfeStdUrl **`http://localhost:9311/bao-cao/vi-pham-hlatdb`** |
| GAP-DS-HLATDB-11 | Tab `detail` \| `summary` — cột BB xã / BB hành chính **ẩn default** — thêm qua Config |
| GAP-DS-HLATDB-12 | Role Design **không** `yarn build` MFE / `dotnet build` BE — Dev (GAP-DEV-BUILD) |
| GAP-DS-HLATDB-13 | Prototype trước re-review **lệch domain** (copy GP thi công) → **đã thay** mock `RowViolation` |

## 8. Out of pack

CRUD `RowViolation` trên slug này · GOVOne chrome · warehouse schema · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · Integration road-route thật P1 · copy `ConstructionPermit` vào lưới.

## 9. Handoff SA

- Confirm lookup road-route P1 seed CUC2 + query `row-violations` in-memory 8–15 + export CSV theo cột hiện + `tab` detail/summary.
- Confirm query names `tab` `status` `routeId` `from` `to` `q` + drill `kind=row-violations`.
- Confirm P1 in-memory · EF `RowViolation` **P2**.
- Roles sau Design = **pending** đến lượt.
- autoApprove ON → enqueue SA sau `completed` task Design. **Cấm** nhảy TL/Dev/QA khi SA chưa chạy.
- Repo BE+UI tick = đã **approve** trên STATUS (board HARD trước Dev — không auto-uncheck).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
