# Design — rpt-tinh-trang-mat-duong (Tình trạng mặt đường)

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog |
| Feature Kind | **E** · leaf `/bao-cao/tinh-trang-mat-duong` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tinh-trang-mat-duong/ui/prototype/rpt-tinh-trang-mat-duong-prototype.html` |
| prototype | `specs/rpt-tinh-trang-mat-duong/ui/prototype/rpt-tinh-trang-mat-duong-prototype.html` |
| analog | zones A–D (+ chart SoCai) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tinh-trang-mat-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tinh-trang-mat-duong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · GAP-PO-PC-01..12 · task `task_ed6460e0` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-tinh-trang-mat-duong-control-hint.md` · hash `sha256:rpt-tinh-trang-mat-duong-context-20260816` |
| live re-audit | `PavementConditionReportPage` + `PavementConditionFilterBar` · 1× `LinPageLayout` kind=`report` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T19:35:00.000Z` |
| taskId | `task_91737fc7` |
| sourceFormReady | **yes** |
| sourceFeature | `pavement-section` |
| sourceTables | `rmms_pavement_sections` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** `api/v1/rmms/*` · **cấm** copy CRUD `pavement-section` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` family `pavement-condition` làm trang này.

Packet `pack kind: list` + list-form gate **không** áp dụng (GAP-PO-PC-12). SSOT = Kind E `/erp-report-context`.

## 0. Re-review sau PO (`task_ed6460e0`)

PO chốt Kind **E** / `packKind=report`. Design **không** đổi sang catalog CRUD. Current = leaf đã ship `PavementConditionReportPage` (`task_8ea2e70d`); New = giữ DoD Kind E + prototype A–D đủ overlay Config/Chart/skeleton (Config FULL List/width/filter/sort/Thêm cột — đóng GAP prototype stub width-only).

| Surface | Live MFE (`PavementConditionReportPage`) | Design chốt |
|---------|------------------------------------------|-------------|
| Shell | 1× `LinPageLayout` kind=`report` · **không** nested CatalogListShell | **Giữ** |
| Filter | `LinErpListFilterBar` + SearchInput tuyến / PCI band · Date kỳ đo · Input tìm · **Xem** | **Giữ** controlHint PO §5 — **cấm** native Select · **cấm QL.22** |
| Grid | `LinCatalogDataGrid` kéo cột default ON · skeleton 8 | **Giữ** · cột đoạn · tuyến · kmFrom · kmTo · PCI · band · lớp · ngày đo · drill |
| Footer | `LinCatalogListPagination` 50/100/200/500 luôn | **Giữ** |
| Config | `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` FULL | **Giữ** — **cấm** height-only / `configHint` / stub |
| Chart | SoCai khi `viewed` ∧ ≥1 dòng (`by-band` · `by-route`) | **Giữ P1** |
| Drill | `/asset/pavement-section/{id}` trên `window.top` | **Giữ** |
| Zone A | title «Tình trạng mặt đường» · **không** Thêm mới | **Giữ** |
| Excel | CSV UTF-8 BOM `pavement-condition.csv` · `canExport` khi viewed · cột đang hiện | **Giữ** |
| Print | `LinReportPrintScopeModal` | **Giữ** |
| Chrome | không GOVOne · toast `dispatchAppToast` | **Giữ** |
| API | context cũ plural `reports` **stale** · PO ghi `q` | **`GET api/v1/report/pavement-condition`** · query **`search`** — **cấm** param `q` (khớp live + analog Kind E) |

Ghi chú TL/Dev (không chặn Design confirm):

| ID | Note |
|----|------|
| DES-PC-01 | Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch. Live `reloadAll` đã khớp. |
| DES-PC-02 | Excel theo filter **đã Xem** + cột đang hiện · `canExport: viewed`. Live `handleExport` đã khớp. |
| DES-PC-03 | Chart chỉ `viewed` ∧ ≥1 dòng (`by-band` · `by-route`). Live `canChart` đã khớp. |
| DES-PC-04 | Prototype HTML dùng `<table>` analog — production **cấm** raw table / `footerPagination` / `pageSizeBar`. |
| DES-PC-05 | Đổi filter = draft; lưới giữ dữ liệu applied đến lần **Xem** tiếp. Live draft vs applied đã khớp. |
| DES-PC-06 | Seed CUC2 · **cấm QL.22**. PCI `formatPci` vi-VN · ngày đo `formatAtVi` vi-VN. |
| DES-PC-07 | Query tìm **`search`** (không `q`) — đóng lệch PO lookup table vs live `PavementConditionReportPage`. |
| DES-PC-08 | Prototype Config trước thiếu filter/sort/Thêm cột — **đã** bổ sung `task_91737fc7`. |

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
| View | grid + chart | Drill `/asset/pavement-section/{id}` |
| Config | report FULL | `LinReportTableConfigModal` / `ReportDisplayConfigModal` — List · width · filter · sort · Thêm cột · chart flags |

## 2. Zones A–D (+ chart)

### Zone A — Header

Icon `fas fa-road` + title **Tình trạng mặt đường**. **Cấm** Thêm mới / GOVOne logo/bell/Hồ sơ.

### Zone B — Filter + toolbar

`LinErpListFilterBar` — title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-PC-03).

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| routeId | Tuyến | SearchInput | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| pciBand | PCI band | SearchInput | tot / kha / tb / kem / rat-kem — **cấm** native Select |
| fromDate / toDate | Từ / Đến | Date | kỳ đo `MeasuredAt` |
| qSearch | Tìm | Input | query **`search`** — **cấm** param `q` |
| | | **Xem** primary | apply draft → fetch · page=1 |

Toolbar: Làm mới · Xuất Excel · Biểu đồ · In · Config FULL.

Hành vi filter:

1. Đổi control = **draft** — **không** gọi API.
2. **Xem** copy draft → applied → `GET api/v1/report/pavement-condition` · page=1 · `viewed=true`.
3. Empty trước Xem: «Chưa xem — nhấn «Xem» để tải báo cáo tình trạng mặt đường.»
4. Làm mới: chỉ re-fetch applied; nếu chưa Xem → toast, **không** load.
5. Đổi draft sau Xem: lưới giữ dữ liệu cũ đến lần Xem tiếp.
6. Excel: `canExport` chỉ khi đã Xem.

### Zone C — Grid

`LinCatalogDataGrid` kéo cột ON · flex · skeleton. **Cấm** Col1–Col3.

| Grid column | Source field | DTO live | Table | Width gợi ý |
|-------------|--------------|----------|-------|-------------|
| đoạn / mã | `Code` | `code` | `rmms_pavement_sections` | 140 |
| tuyến | `RoadName` | `route` | same | 90 |
| Từ Km | `KmFrom` | `kmFrom` | same | 90 |
| Đến Km | `KmTo` | `kmTo` | same | 90 |
| PCI | `Pci` | `pci` | same | 80 |
| Band | derived `Pci` | `pciBandLabel` | Report DTO | 110 |
| lớp | `LayerCode` | `layerCode` | same | 110 |
| ngày đo | `MeasuredAt` | `measuredAt` | same | 120 |
| nguồn (drill) | `Id` | `id` | same | 140 |

Drill: `/asset/pavement-section/{id}` — **cấm** form CRUD trên slug này. Label nút live: «Mở Biểu 1».

Empty sau Xem 0 dòng: «Không có dòng phù hợp bộ lọc.»

### Zone D — Pagination

Luôn hiện 50 / 100 / 200 / 500. **Cấm** ẩn khi 0 dòng. **Cấm** footerPagination / pageSizeBar / raw HTML table trên MFE.

### Chart SoCai

Chỉ khi `viewed === true` **và** ≥1 dòng. Series: số đoạn theo PCI band · theo tuyến (`by-band` · `by-route`). KPI: Đoạn · Tuyến · PCI TB. **Cấm** gộp dashboard KPI slug khác.

## 3. Prototype

File: `ui/prototype/rpt-tinh-trang-mat-duong-prototype.html`

- Content-only A–D + overlay Config / Chart — **không** sidebar/menu/chrome demo.
- 12 dòng seed CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` — **không** `QL.22` / `ĐT.*`).
- Config FULL: List/width/filter/sort/Thêm cột analog `LinReportTableConfigModal`.
- Pager analog 50/100/200/500 (**không** native select filter).
- Skeleton 8 hàng khi Xem.
- Toast · **không** `alert`.
- reviewUrl bắt buộc (meta STATUS).

## 4. Perm / API (handoff SA)

| | |
|--|--|
| Perm | `report.tinh-trang-mat-duong.read` (FE gate ON · BE stub OK P1) |
| Xem | `GET api/v1/report/pavement-condition?from=&to=&routeId=&pciBand=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/pavement-condition/export` |
| tuyến | `GET api/v1/integration/road-routes/search` Type A share Integration |
| enum | PCI band seed FE P1 tot / kha / tb / kem / rat-kem |
| P1 data | in-memory Report domain map `PavementSectionEntity` (8–15 dòng; prototype **12**; live seed map Code/RoadName/Km/Pci/LayerCode/MeasuredAt) |
| P2 | EF read-model `rmms_pavement_sections` — **không** bảng báo cáo riêng P1 |

**Cấm** domain folder mới · **cấm** plural `reports` · **cấm** POST/PUT/DELETE trên slug này.

SA: giữ DOMAIN-MAP `rpt-tinh-trang-mat-duong` → Report · `api/v1/report` (GAP-PO-PC-01 / GAP-PO-PC-09). Live alias query `type` = `pciBand` — SA xác nhận giữ hoặc gỡ.

## 5. AC Design (map PO DoD)

| ID | AC | Prototype / live |
|----|----|------------------|
| AC-G-01 | Zones A–D | Có |
| AC-G-02 | Xem apply draft → fetch · page=1 | Có |
| AC-G-03 | Drill `/asset/pavement-section/{id}` | Toast analog + live `window.top` assign |
| AC-G-04 | Grid kéo cột ON | th cursor + live resizable |
| AC-G-05 | Footer pager luôn 50/100/200/500 | Có |
| AC-G-06 | 1× LinPageLayout report | Live + prototype `data-kind=report` |
| AC-G-07 | Flex + skeleton | Có |
| AC-G-08 | Config FULL · cấm configHint | Modal đủ cột |
| AC-G-09 | Chart SoCai sau Xem ∧ ≥1 dòng | Overlay + live `ReportChartModal` |
| AC-G-10 | Excel khi viewed | `canExport` analog disabled Excel |

## 6. Out of pack

CRUD đoạn mặt đường trên slug này · Kind B `LinCatalogUiSchemaEditorModal` · GOVOne chrome · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · dashboard KPI gộp · warehouse / migration EF P1 · invent tuyến ngoài CUC2 · Form Biểu 1 PCI trên leaf này.

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Kind | **E** A–D + SoCai |
| API | `api/v1/report/pavement-condition` + `/export` |
| Lookup | road-route Integration Type A · PCI band seed FE P1 |
| Query | `from` `to` `routeId` `pciBand` `search` `page` `pageSize` — **cấm** `q` |
| P2 | EF `rmms_pavement_sections` |
| design_confirm | **approve** |
| Next | sa = **pending** đến lượt · chain ON · **cấm** QA feature khác khi chain này pending |
| Repo tick | BE+UI **đã** approve trên STATUS (không auto trước Dev — đã tick board) |
| This task | `roleOnly=design` · **không** chạy SA trong `task_91737fc7` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T19:35:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-tinh-trang-mat-duong-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| poSkillVersion | 2026.08.15.5 |
| taskId | `task_91737fc7` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
