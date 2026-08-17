# Design — rpt-giay-phep-thi-cong (Giấy phép thi công)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-GPTC-02) |
| Feature Kind | **E** · leaf `/bao-cao/giay-phep-thi-cong` · **không** CRUD form |
| status | `done` |
| design_confirm | **approve** (`autoApprove=ON` — agent tự confirm prototype) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-giay-phep-thi-cong/ui/prototype/rpt-giay-phep-thi-cong-prototype.html` |
| prototype | `specs/rpt-giay-phep-thi-cong/ui/prototype/rpt-giay-phep-thi-cong-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/giay-phep-thi-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/giay-phep-thi-cong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed`/`done` · `po/requirement.md` · `task_9678d5da` |
| prior · data_analy | `confirmed`/`done` · `specs/_data-analy/features/rpt-giay-phep-thi-cong-control-hint.md` · hash `sha256:rpt-giay-phep-thi-cong-context-20260816` |
| autoApprove | **ON** |
| chain | **ON** |
| sourceFormReady | **yes** · entity `ConstructionPermit` · CSDL §3.6 |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `ConstructionPermit` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-16T04:30:00.000Z` |
| taskId | `task_52e640a2` |

**Cấm ERP.*** · **cấm** `ERP.Service.*` · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** prefix `api/v1/reports` (plural) · **cấm** copy CRUD `csdl-so-sach` / `POST /api/v1/construction-permits` vào leaf này.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-giay-phep-thi-cong.md` | Kind E leaf · filter tuyến · kỳ · TT GP · Xem · lưới · drill · Excel |
| CTX-02 | parent list pack `csdl-so-sach` | **cấm** copy CRUD cấp phép |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01 / GAP-PO-GPTC-02) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu / note |
| DI-02 | `specs/_data-analy/features/rpt-giay-phep-thi-cong-control-hint.md` | controlHint SSOT · **done** |
| DI-03 | CUC2 `road-route-seed.json` 38 tuyến | **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + chart SoCai (report shell). **Không** KPI dashboard gộp slug. **Không** full demo clone.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (stub OK P1) · Config **FULL** (`LinReportTableConfigModal` — **cấm** `LinListTableConfigModal` / stub / `configHint`) |
| 6 | list_parity | Filter **SearchInput** tuyến/TT + **Date** + **Input** tìm — **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form cấp phép |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill `/csdl-so-sach?kind=construction-permits&id={id}` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Giấy phép thi công | report | **A Header · B Toolbar+filter · C Grid (+ chart modal) · D Pagination** | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-file-signature` + title **Giấy phép thi công** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-GPTC):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · empty=Tất cả · **cấm QL.22** · **cấm** native Select |
| status | Trạng thái GP | `SearchInput` | enum `hieu-luc` / `het-han` / `gia-han` / empty=Tất cả |
| fromDate | Từ ngày | `Date` | kỳ trên `PermitDate` |
| toDate | Đến ngày | `Date` | kỳ trên `PermitDate` |
| qSearch | Tìm kiếm | `Input` | số GP · CĐT · công trình |
| — | **Xem** | Button primary | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo cột đang hiện · file `construction-permits.csv` · **sau khi có lưới** (đã Xem) |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | chưa Xem → apply+view; đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** khi `viewed` + có dòng — KPI: số GP theo TT (`hieu-luc`/`het-han`/`gia-han`) · theo tuyến |
| In | print | stub toast OK nếu chưa print engine · không `window.confirm` |
| Sửa config | `fa-cog` | **FULL** column prefs — title analog «Cấu hình hiển thị danh mục» / report modal · **cấm** stub toast / `configHint` |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi filter rồi Xem → reset page=1.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo · native `<select>`.

### Zone C — Grid

- `listTitle`: **Kết quả báo cáo giấy phép thi công**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo giấy phép thi công.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — **không** editor

**Grid columns** (default visible trừ ghi chú ẩn)

| key | Label | Field nguồn | Default |
|-----|-------|-------------|---------|
| stt | STT | — | luôn |
| permitNo | Số GP | `PermitNo` | hiện |
| permitDate | Ngày GP | `PermitDate` | hiện |
| route | Tuyến | `RouteId` / mã CUC2 | hiện |
| stationKm | Km | `StationKm` | hiện |
| investor | Chủ đầu tư | `Investor` | hiện |
| workName | Công trình | `WorkName` | hiện |
| validity | Hiệu lực | `IssuedAt` → `ExpiresAt` (+ `ExtendedAt`) | hiện |
| statusLabel | TT | `hieu-luc` / `het-han` / `gia-han` | hiện |
| contractor | Nhà thầu | `Contractor` | **ẩn** — Config thêm |
| issuer | Cơ quan cấp | `Issuer` | **ẩn** — Config thêm |
| drill | Nguồn | Button «Mở sổ GP» | hiện |

**Không** KPI dashboard trên C · **không** map.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**. Prototype analog size-bar = visual only — production **cấm** pageSizeBar component.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Tuyến (routeId)

- Lookup UI = **road-route** P1 seed CUC2 (`specs/_data-analy/shared-catalogs/road-route-seed.json`) + «Tất cả tuyến».
- **Cấm** invent / lọc `QL.22`.
- Type A Integration `GET api/v1/integration/road-routes/search` **P2** (SA). P1 in-memory seed.

### Trạng thái GP (status)

| value | label |
|-------|-------|
| `` (empty) | Tất cả trạng thái |
| `hieu-luc` | Còn hiệu lực |
| `het-han` | Hết hạn |
| `gia-han` | Đã gia hạn |

## 4. Interactions

1. Mở `/bao-cao/giay-phep-thi-cong` → empty hint, **không** auto-load lưới.
2. Chọn tuyến/TT/từ–đến/q → **Xem** → GET `api/v1/report/construction-permits`.
3. Xuất Excel (đã Xem) → GET `api/v1/report/construction-permits/export` → `construction-permits.csv` UTF-8 BOM theo cột hiện.
4. Drill dòng → `/csdl-so-sach?kind=construction-permits&id={id}` (MFE nguồn sổ).
5. Chart SoCai khi đã Xem + có dòng · Config FULL · In stub.
6. Đổi page/pageSize sau viewed → refetch cùng applied filters.

## 5. Prototype

`specs/rpt-giay-phep-thi-cong/ui/prototype/rpt-giay-phep-thi-cong-prototype.html` — content-only A–D + SoCai chart modal + Config cột FULL (cột ẩn Nhà thầu / Cơ quan cấp) · SearchInput combobox (không native Select filter) · empty đến khi Xem · **12** dòng `ConstructionPermit` CUC2 (**cấm QL.22**) · pagination 50/100/200/500 **luôn** · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-giay-phep-thi-cong/ui/prototype/rpt-giay-phep-thi-cong-prototype.html`

Align live: `http://localhost:9311/bao-cao/giay-phep-thi-cong` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/construction-permits` | query `from` `to` `routeId` `status` `q` `page` `pageSize` |
| GET | `/api/v1/report/construction-permits/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A P2 — P1 seed in-memory · **không** copy catalog vào Report |

Context `api/v1/reports/construction-permits` **stale**.

Perm: `report.giay-phep-thi-cong.read`. JWT · tenant.

SA: lookup road-route · query in-memory P1 seed **8–15** · entity `ConstructionPermit` **P2** EF — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-GPTC-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer |
| GAP-DS-GPTC-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell |
| GAP-DS-GPTC-03 | Prefix **`api/v1/report/construction-permits`** (khớp GAP-PO-GPTC-01) — **cấm** `api/v1/reports` |
| GAP-DS-GPTC-04 | Query **`from` `to` `routeId` `status` `q`** — đóng alias plural `reports` trên leaf này |
| GAP-DS-GPTC-05 | Config **FULL** P1 (`LinReportTableConfigModal`) · Chart SoCai khi đã Xem + có dòng · In stub OK |
| GAP-DS-GPTC-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout · drill `/csdl-so-sach?kind=construction-permits&id=` |
| GAP-DS-GPTC-07 | autoApprove ON → Design **tự confirm** prototype · SA **pending** đến lượt chain (không chạy SA trong task này) |
| GAP-DS-GPTC-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-GPTC-09 | Dashboard KPI **không** gộp slug này · seed CUC2 · **cấm QL.22** |
| GAP-DS-GPTC-10 | mfeStdUrl **`http://localhost:9311/bao-cao/giay-phep-thi-cong`** |
| GAP-DS-GPTC-11 | Cột Nhà thầu / Cơ quan cấp **ẩn default** — thêm qua Config |
| GAP-DS-GPTC-12 | Role Design **không** `yarn build` MFE / `dotnet build` BE — Dev |

## 8. Out of pack

CRUD cấp phép · `POST /api/v1/construction-permits` · CRUD `RowViolation` · GOVOne chrome · warehouse schema · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · Integration road-route thật P1.

## 9. Handoff SA

- Confirm lookup road-route P1 seed CUC2 + query `construction-permits` in-memory 8–15 + export CSV theo cột hiện.
- Confirm query names `from` `to` `routeId` `status` `q` + drill `kind=construction-permits`.
- Confirm P1 in-memory · EF `ConstructionPermit` **P2**.
- Roles sau Design = **pending** đến lượt.
- autoApprove ON → enqueue SA sau `completed` task Design. **Cấm** nhảy TL/Dev/QA khi SA chưa chạy.
- Repo BE+UI tick = đã **approve** trên STATUS (board HARD trước Dev — không auto-uncheck).

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
