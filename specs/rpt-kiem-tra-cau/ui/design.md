# Design — rpt-kiem-tra-cau (Kiểm tra cầu)

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog |
| Feature Kind | **E** · leaf `/bao-cao/kiem-tra-cau` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-kiem-tra-cau/ui/prototype/rpt-kiem-tra-cau-prototype.html` |
| prototype | `specs/rpt-kiem-tra-cau/ui/prototype/rpt-kiem-tra-cau-prototype.html` |
| analog | zones A–D (+ chart SoCai) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/kiem-tra-cau` |
| mfeStdUrl | `http://localhost:9311/bao-cao/kiem-tra-cau` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/bridge-inspections` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · GAP-PO-KTC-01..11 |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-kiem-tra-cau-control-hint.md` · hash `sha256:rpt-kiem-tra-cau-context-20260816` |
| live re-audit | `BridgeInspectionReportPage` + `BridgeInspectionFilterBar` · 1× `LinPageLayout` kind=`report` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T07:30:00.000Z` |
| taskId | `task_9afa1df7` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** `api/v1/rmms/*` · **cấm** copy CRUD `csdl-so-sach` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** tách 3 tab thành 3 route.

## 0. Re-review sau PO (`task_d07b1adc`)

PO chốt Kind **E** / `packKind=report` (board `list` **bỏ**). Design **không** đổi sang catalog CRUD.

| Surface | Live MFE (`BridgeInspectionReportPage`) | Design chốt |
|---------|------------------------------------------|-------------|
| Shell | 1× `LinPageLayout` kind=`report` · **không** nested CatalogListShell | **Giữ** |
| Filter | `LinErpListFilterBar` + SearchInput tab/tuyến/cầu/loại · Date · Input tìm · **Xem** | **Giữ** controlHint PO §5 — **cấm** native Select |
| Grid | `LinCatalogDataGrid` kéo cột default ON · skeleton | **Giữ** · cột theo **tab** |
| Footer | `LinCatalogListPagination` 50/100/200/500 luôn | **Giữ** |
| Config | `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` FULL | **Giữ** — **cấm** height-only / `configHint` |
| Chart | SoCai khi `viewed` ∧ ≥1 dòng | **Giữ P1** |
| Drill | `/asset/csdl-so-sach?kind=bridge-inspections&id=` | **Giữ** |
| Zone A | title «Kiểm tra cầu» · **không** Thêm mới | **Giữ** |
| Excel | CSV UTF-8 BOM theo cột đang hiện trên tab | **Giữ** |
| Print | `LinReportPrintScopeModal` stub OK | **Giữ** |
| Chrome | không GOVOne · toast `dispatchAppToast` | **Giữ** |

Ghi chú TL/Dev (không chặn Design confirm):

| ID | Note |
|----|------|
| DES-KTC-01 | Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch. |
| DES-KTC-02 | Excel theo filter **đã Xem** + cột đang hiện của tab hiện tại. |
| DES-KTC-03 | Prototype HTML dùng `<table>` analog — production **cấm** raw table / `footerPagination` / `pageSizeBar`. |
| DES-KTC-04 | Một slug · 3 tab `ticket` \| `result` \| `summary` — đổi tab = draft; **Xem** mới đổi cột lưới. |
| DES-KTC-05 | Prototype cũ thiếu overlay Config/Chart/skeleton — **đã** bổ sung task này. |

## 1. Kind + UI pattern

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` default ON |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 |
| 4 | Flex + skeleton | `.page` flex · skeleton 8 — **cấm** blank body |
| 5 | Toolbar | Xem (trên filter bar) · Làm mới · Biểu đồ SoCai · In · Config **FULL** · Excel |
| 6 | list_parity | SearchInput + Date + Input — **cấm** native `<select>` filter |
| Form | OUT | **cấm** Thêm mới · Resource · Slideout · View-as-form |
| Confirm | toast | **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill `/asset/csdl-so-sach?kind=bridge-inspections&id=` |
| Config | report FULL | `LinReportTableConfigModal` / `ReportDisplayConfigModal` — List · width · filter · sort · Thêm cột · chart flags |

## 2. Zones A–D (+ chart)

### Zone A — Header

Icon `fas fa-archway` + title **Kiểm tra cầu**. **Cấm** Thêm mới / GOVOne logo/bell/Hồ sơ.

### Zone B — Filter + toolbar

`LinErpListFilterBar` — title trái · input + tìm cụm phải · 1 hàng wrap (GAP-PO-KTC-09 / GAP-FILTER-BAR).

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| tab | Tab | SearchInput | `ticket` / `result` / `summary` — **cấm** native Select · **cấm** 3 route |
| routeId | Tuyến | SearchInput | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| bridgeId | Cầu | SearchInput | seed cầu CUC2 P1 · trống = tất cả |
| inspectionKind | Loại phiếu | SearchInput | `dinh-ky` / `dot-xuat` / `truoc-mua` — **cấm** native Select |
| fromDate / toDate | Từ / Đến | Date | kỳ |
| qSearch | Tìm | Input | số phiếu · cầu · tuyến |
| | | **Xem** primary | apply draft → fetch · page=1 |

Toolbar: Làm mới · Xuất Excel · Biểu đồ · In · Config FULL.

Hành vi filter:

1. Đổi control = **draft** — **không** gọi API.
2. **Xem** copy draft → applied → `GET api/v1/report/bridge-inspections` · page=1 · `viewed=true`.
3. Empty trước Xem: «Chưa xem — nhấn «Xem» để tải báo cáo kiểm tra cầu.»
4. Làm mới: chỉ re-fetch applied; nếu chưa Xem → toast, **không** load.
5. Đổi draft sau Xem: lưới giữ dữ liệu cũ đến lần Xem tiếp.

### Zone C — Grid

`LinCatalogDataGrid` kéo cột ON · flex · skeleton. **Cấm** Col1–Col3.

**Tab phiếu (`ticket`):**

| Grid column | Source field | Width gợi ý |
|-------------|--------------|-------------|
| Số phiếu | `Id` / ticketNo | 120 |
| Ngày KT | `InspectedAt` | 110 |
| Tuyến | `RoadCode` | 90 |
| Cầu | `BridgeId` → passport name | 140 |
| Địa bàn | `AdminArea` | 120 |
| Loại phiếu | inspectionKind | 130 |
| Nguồn (drill) | inspectionId | 130 |

**Tab kết quả (`result`):**

| Grid column | Source field | Width gợi ý |
|-------------|--------------|-------------|
| Số phiếu | ticketNo | 120 |
| Ngày KT | `InspectedAt` | 110 |
| Cầu | passport name | 140 |
| Bộ phận | line part | 140 |
| Hư hỏng | `DamageDesc` | 180 |
| Đề xuất | `ProposedActionQty` | 120 |
| Ưu tiên | `Priority` | 90 |
| Ảnh | `PhotoIds` count | 70 |
| Nguồn (drill) | inspectionId | 130 |

**Tab tổng hợp (`summary`):**

| Grid column | Source field | Width gợi ý |
|-------------|--------------|-------------|
| Cầu | passport name | 140 |
| Tuyến | `RoadCode` | 90 |
| Số phiếu | aggregate | 90 |
| Lần KT gần nhất | max `InspectedAt` | 130 |
| Ưu tiên cao | count High | 110 |
| Nguồn (drill) | last inspectionId | 130 |

Drill: `/asset/csdl-so-sach?kind=bridge-inspections&id=` — **cấm** form CRUD trên slug này.

Empty sau Xem 0 dòng: «Không có dòng phù hợp bộ lọc.»

### Zone D — Pagination

Luôn hiện 50 / 100 / 200 / 500. **Cấm** ẩn khi 0 dòng. **Cấm** footerPagination / pageSizeBar / raw HTML table trên MFE.

### Chart SoCai

Chỉ khi `viewed === true` **và** ≥1 dòng. Series: số phiếu theo loại · theo tuyến. KPI: Dòng · Tuyến · Ưu tiên cao. **Cấm** gộp dashboard KPI slug khác.

## 3. Prototype

File: `ui/prototype/rpt-kiem-tra-cau-prototype.html`

- Content-only A–D + overlay Config / Chart — **không** sidebar/menu/chrome demo.
- 12 phiếu seed CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `QL.7` `QL.8` `QL.9` `QL.10` — **không** `QL.22` / `ĐT.*`).
- 3 tab đổi cột sau **Xem**.
- Config FULL: List/width/filter/sort/Thêm cột analog.
- Pager analog 50/100/200/500 (**không** native select filter).
- Skeleton khi Xem.
- Toast · **không** `alert`.
- reviewUrl bắt buộc (meta STATUS).

## 4. Perm / API (handoff SA)

| | |
|--|--|
| Perm | `report.kiem-tra-cau.read` (FE gate ON · BE stub OK P1) |
| Xem | `GET api/v1/report/bridge-inspections?tab=&routeId=&bridgeId=&type=&from=&to=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/bridge-inspections/export` |
| tuyến | `GET api/v1/integration/road-routes/search` Type A share Integration |
| enum | tab / loại phiếu / cầu seed FE P1 |
| P1 data | in-memory 12 phiếu + dòng kết quả + tổng hợp group-by cầu |
| P2 | EF join `BridgePassport` / `BridgeInspection` / `BridgeInspectionLine` — **không** warehouse P1 |

**Cấm** domain folder mới · **cấm** plural `reports` · **cấm** POST/PUT/DELETE trên slug này.

## 5. AC Design (map PO AC-G)

| ID | AC | Prototype / live |
|----|----|------------------|
| AC-G-01 | Zones A–D | Có |
| AC-G-02 | Xem apply draft → fetch · page=1 | Có |
| AC-G-03 | Drill `/asset/csdl-so-sach?kind=bridge-inspections&id=` | Toast analog + live |
| AC-G-04 | Grid kéo cột ON | th cursor + live resizable |
| AC-G-05 | Footer pager luôn 50/100/200/500 | Có |
| AC-G-06 | 1× LinPageLayout report | Live + prototype `data-kind=report` |
| AC-G-07 | Flex + skeleton | Có |
| AC-G-08 | Config FULL · cấm configHint | Modal đủ cột |
| AC-G-09 | Tab đổi cột đúng §2 | Prototype 3 bộ cột |

## 6. Out of pack

CRUD passport / phiếu KT · tách 3 feature · Kind B `LinCatalogUiSchemaEditorModal` · GOVOne chrome · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · dashboard KPI gộp · warehouse P1 · invent tuyến ngoài CUC2.

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Kind | **E** A–D + SoCai |
| API | `api/v1/report/bridge-inspections` + `/export` |
| Lookup | road-route Integration Type A |
| Query | `tab` `routeId` `bridgeId` `type` `from` `to` `search` `page` `pageSize` |
| P2 | join passport / inspection / line |
| design_confirm | **approve** |
| Next | sa = **pending** đến lượt · chain ON · **cấm** QA feature khác khi chain này pending |
| Repo tick | BE+UI **không auto** trước Dev |
| This task | `roleOnly=design` · **không** chạy SA trong `task_9afa1df7` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T07:30:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-kiem-tra-cau-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| poSkillVersion | 2026.08.15.5 |
| taskId | `task_9afa1df7` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
