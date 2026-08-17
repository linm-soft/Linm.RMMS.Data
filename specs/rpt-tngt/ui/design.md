# Design — rpt-tngt (Tai nạn giao thông)

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog |
| Feature Kind | **E** · leaf `/bao-cao/tngt` · **không** CRUD |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tngt/ui/prototype/rpt-tngt-prototype.html` |
| prototype | `specs/rpt-tngt/ui/prototype/rpt-tngt-prototype.html` |
| analog | zones A–D (+ chart SoCai) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tngt` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tngt` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · GAP-PO-TNGT-01..13 · task `task_c9e6332c` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-tngt-control-hint.md` · hash `sha256:rpt-tngt-context-20260816` |
| live re-audit | `TrafficAccidentReportPage` + `TrafficAccidentFilterBar` · 1× `LinPageLayout` kind=`report` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T20:30:00.000Z` |
| taskId | `task_95e8c936` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** `api/v1/rmms/*` · **cấm** copy CRUD `incident` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` làm trang này · **cấm** 6 slug trùng filter.

Packet `pack kind: list` + list-form gate **không** áp dụng (GAP-PO-TNGT-02). SSOT = Kind E `/erp-report-context`.

## 0. Re-review sau PO (`task_c9e6332c`)

PO chốt Kind **E** / `packKind=report`. Design **không** đổi sang catalog CRUD. Current = leaf đã ship `TrafficAccidentReportPage` (`task_46a44cfc`); New = giữ DoD Kind E + prototype A–D đủ overlay Config/Chart/Print/skeleton + 6 loại thống kê trên **một** slug.

| Surface | Live MFE (`TrafficAccidentReportPage`) | Design chốt |
|---------|----------------------------------------|-------------|
| Shell | 1× `LinPageLayout` kind=`report` · pageId `rpt-tngt` · testid `rmms-tngt-report` · **không** nested CatalogListShell | **Giữ** |
| Filter | `LinErpListFilterBar` + SearchInput loại thống kê / tuyến / mức · Date kỳ · Input tìm · **Xem** | **Giữ** controlHint PO §6 — **cấm** native Select · **cấm** filter loại sự cố (khóa TNGT) |
| Grid | `LinCatalogDataGrid` kéo cột default ON · skeleton 8 | **Giữ** · cột mã · tuyến · loại · mức · TT · thời gian · drill |
| Footer | `LinCatalogListPagination` 50/100/200/500 luôn | **Giữ** |
| Config | `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` FULL | **Giữ** — **cấm** height-only / `configHint` / stub / Kind B schema editor |
| Chart | SoCai `by-severity` · `by-route` khi `viewed` ∧ ≥1 dòng | **Giữ P1** |
| Drill | `/incident?id=` · «Mở sự cố» | **Giữ** |
| Zone A | title «Tai nạn giao thông» · `fas fa-car-crash` · **không** Thêm mới | **Giữ** |
| Excel | CSV UTF-8 BOM `traffic-accidents.csv` · `canExport` khi viewed · cột đang hiện | **Giữ** |
| Print | `LinReportPrintScopeModal` | **Giữ** |
| Chrome | không GOVOne · toast `dispatchAppToast` | **Giữ** |
| API | context cũ plural `reports` **stale** | **`GET api/v1/report/traffic-accidents`** + `/export` |
| Tabs | `INCIDENT_KIND_LOOKUP` 6 giá trị trên 1 slug | **Giữ** — **cấm** tách 6 feature |

Ghi chú TL/Dev (không chặn Design confirm):

| ID | Note |
|----|------|
| DES-TNGT-01 | Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch. |
| DES-TNGT-02 | Excel theo filter **đã Xem** + cột đang hiện · `canExport: viewed`. |
| DES-TNGT-03 | Prototype HTML dùng `<table>` analog — production **cấm** raw table / `footerPagination` / `pageSizeBar`. |
| DES-TNGT-04 | Đổi filter = draft; lưới giữ dữ liệu applied đến lần **Xem** tiếp. |
| DES-TNGT-05 | Prototype `task_95e8c936` overlay In analog `LinReportPrintScopeModal` + Config filter/sort analog. |
| DES-TNGT-06 | Seed CUC2 · **cấm QL.22**. Thời gian lưới `formatAtVi` vi-VN (`RequestedAt` / DTO `at`). |
| DES-TNGT-07 | Tab `serious` mặc định mức **Nghiêm trọng**; tab `half-year` kỳ **6 tháng**. |
| DES-TNGT-08 | Loại sự cố **khóa TNGT** — không SearchInput type sự cố trên leaf. |
| DES-TNGT-09 | Một slug · 6 tab: `monthly` · `half-year` · `serious` · `compare` · `summary` · `stats`. |

## 1. Kind + UI pattern

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` default ON |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 |
| 4 | Flex + skeleton | `.page` flex · `skeletonRows={8}` — **cấm** blank body |
| 5 | Toolbar | Xem (trên filter bar) · Làm mới · Biểu đồ SoCai · In · Config **FULL** · Excel |
| 6 | list_parity | SearchInput + Date + Input — **cấm** native `<select>` filter |
| Form | OUT | **cấm** Thêm mới · Resource · Slideout · View-as-form |
| Confirm | toast | **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill `/incident?id=` |
| Config | report FULL | `LinReportTableConfigModal` / `ReportDisplayConfigModal` — List · width · filter · sort · Thêm cột · chart flags |

## 2. Zones A–D (+ chart)

### Zone A — Header

Icon `fas fa-car-crash` + title **Tai nạn giao thông**. **Cấm** Thêm mới / GOVOne logo/bell/Hồ sơ.

### Zone B — Filter + toolbar

`LinErpListFilterBar` — title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR).

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| tab | Loại thống kê | SearchInput | `monthly` · `half-year` · `serious` · `compare` · `summary` · `stats` — **cấm** native Select · **cấm** 6 feature |
| routeId | Tuyến | SearchInput | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| severity | Mức | SearchInput | Cao / TB / Nghiêm trọng / Thấp — tab `serious` mặc định **Nghiêm trọng** |
| fromDate / toDate | Từ / Đến | Date | `RequestedAt` / DTO `at` · tab `half-year` = 6 tháng |
| qSearch | Tìm | Input | mã · tuyến · query **`search`** |
| | | **Xem** primary | apply draft → fetch · page=1 |

Toolbar: Làm mới · Xuất Excel · Biểu đồ · In · Config FULL.

Hành vi filter:

1. Đổi control = **draft** — **không** gọi API.
2. **Xem** copy draft → applied → `GET api/v1/report/traffic-accidents` · page=1 · `viewed=true`.
3. Empty trước Xem: «Chưa xem — nhấn «Xem» để tải báo cáo TNGT.»
4. Làm mới: chỉ re-fetch applied; nếu chưa Xem → toast, **không** load.
5. Đổi draft sau Xem: lưới giữ dữ liệu cũ đến lần Xem tiếp.
6. Excel: `canExport` chỉ khi đã Xem.
7. Đổi tab `serious` (draft): điền mức **Nghiêm trọng** nếu mức đang trống.
8. Đổi tab `half-year` (draft): kỳ **6 tháng** (from = to − 6 tháng).

### Zone C — Grid

`LinCatalogDataGrid` kéo cột ON · flex · skeleton. **Cấm** Col1–Col3.

| Grid column | Source field | Table | Width gợi ý |
|-------------|--------------|-------|-------------|
| mã | `Code` → DTO `code` | `rmms_incidents` | 120 |
| tuyến | `RouteName` → DTO `route` / `routeName` | same | 90 |
| loại | `IncidentType` → DTO `type` (= TNGT) | same | 90 |
| mức | `Severity` → DTO `severity` | same | 130 |
| trạng thái | `Status` → DTO `status` | same | 120 |
| thời gian | `RequestedAt` → DTO `at` | same | 160 · `formatAtVi` vi-VN |
| Nguồn (drill) | id | same | 120 |

Drill: `/incident?id=` — **cấm** form CRUD trên slug này.

Empty sau Xem 0 dòng: «Không có dòng phù hợp bộ lọc.»

### Zone D — Pagination

Luôn hiện 50 / 100 / 200 / 500. **Cấm** ẩn khi 0 dòng. **Cấm** footerPagination / pageSizeBar / raw HTML table trên MFE.

### Chart SoCai

Chỉ khi `viewed === true` **và** ≥1 dòng. Series: số dòng theo mức (`by-severity`) · theo tuyến (`by-route`). KPI: Dòng · Tuyến · Nghiêm trọng. **Cấm** gộp dashboard KPI slug khác.

## 3. Prototype

File: `ui/prototype/rpt-tngt-prototype.html`

- Content-only A–D + overlay Config / Chart / In — **không** sidebar/menu/chrome demo.
- 12 dòng seed CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` — **không** `QL.22` / `ĐT.*`).
- Config FULL: List/width/filter/sort/Thêm cột analog `LinReportTableConfigModal`.
- In analog `LinReportPrintScopeModal` (trang hiện / tất cả).
- Pager analog 50/100/200/500 (**không** native select filter).
- Skeleton khi Xem.
- Toast · **không** `alert`.
- 6 loại thống kê SearchInput analog (datalist) trên **một** slug.
- reviewUrl bắt buộc (meta STATUS).

## 4. Perm / API (handoff SA)

| | |
|--|--|
| Perm | `report.tngt.read` (FE gate ON · BE stub OK P1) |
| Xem | `GET api/v1/report/traffic-accidents?tab=&from=&to=&routeId=&severity=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/traffic-accidents/export` |
| tuyến | `GET api/v1/integration/road-routes/search` Type A share Integration |
| enum | loại thống kê / mức seed FE P1 |
| P1 data | in-memory Report domain map `IncidentEntity` type=TNGT (8–15 dòng; live + prototype 12) |
| P2 | EF read-model `rmms_incidents` — **không** bảng báo cáo riêng P1 |

**Cấm** domain folder mới · **cấm** plural `reports` · **cấm** POST/PUT/DELETE trên slug này.

SA: xác nhận DOMAIN-MAP `rpt-tngt` → Report · `api/v1/report` (GAP-PO-TNGT-01).

## 5. AC Design (map PO DoD)

| ID | AC | Prototype / live |
|----|----|------------------|
| AC-G-01 | Zones A–D | Có |
| AC-G-02 | Xem apply draft → fetch · page=1 | Có |
| AC-G-03 | Drill `/incident?id=` | Toast analog + live assign |
| AC-G-04 | Grid kéo cột ON | th cursor + live resizable |
| AC-G-05 | Footer pager luôn 50/100/200/500 | Có |
| AC-G-06 | 1× LinPageLayout report | Live + prototype `data-kind=report` |
| AC-G-07 | Flex + skeleton | Có |
| AC-G-08 | Config FULL · cấm configHint · cấm Kind B schema editor | Modal đủ cột |
| AC-G-09 | Một slug · 6 tab | datalist + live `INCIDENT_KIND_LOOKUP` |
| AC-G-10 | Type khóa TNGT — cấm filter loại sự cố | Không field type |
| AC-G-11 | Chart SoCai sau Xem ∧ ≥1 dòng | Overlay + live `ReportChartModal` |
| AC-G-12 | Excel khi viewed | `canExport` analog disabled Excel |
| AC-G-13 | In analog print scope | Overlay + live `LinReportPrintScopeModal` |
| AC-G-14 | Tab `serious` / `half-year` default | Prototype + Dev giữ live |

## 6. Out of pack

CRUD sự cố trên slug này · Kind B `LinCatalogUiSchemaEditorModal` · GOVOne chrome · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · dashboard KPI gộp · filter loại sự cố · tách 6 slug · migration EF P1 · invent tuyến ngoài CUC2 / `QL.22`.

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Kind | **E** A–D + SoCai |
| API | `api/v1/report/traffic-accidents` + `/export` |
| Lookup | road-route Integration Type A · tab/mức enum FE P1 |
| Query | `tab` `from` `to` `routeId` `severity` `search` `page` `pageSize` |
| P2 | EF `rmms_incidents` type=TNGT |
| design_confirm | **approve** |
| Next | sa = **pending** đến lượt · chain ON · **cấm** QA feature khác khi chain này pending |
| Repo tick | BE+UI **đã** approve trên STATUS (không auto trước Dev — đã tick board) |
| This task | `roleOnly=design` · **không** chạy SA trong `task_95e8c936` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T20:30:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-tngt-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| poSkillVersion | 2026.08.15.5 |
| dataAnalySkillVersion | 2026.08.15.5 |
| taskId | `task_95e8c936` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
