# Design — rpt-tai-san (BC Tài sản)

| Field | Value |
|-------|-------|
| feature | `rpt-tai-san` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog |
| Feature Kind | **E** · leaf `/bao-cao/tai-san` · **không** CRUD |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tai-san/ui/prototype/rpt-tai-san-prototype.html` |
| prototype | `specs/rpt-tai-san/ui/prototype/rpt-tai-san-prototype.html` |
| analog | zones A–D (+ chart SoCai) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tai-san` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tai-san` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · GAP-PO-TS-01..12 · task `task_0fd2c3c0` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-tai-san-control-hint.md` · hash `sha256:rpt-tai-san-context-20260816` |
| live re-audit | `AssetReportPage` + `AssetFilterBar` · 1× `LinPageLayout` kind=`report` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T17:25:00.000Z` |
| taskId | `task_96d0a2fe` |
| sourceFormReady | **yes** |
| sourceFeature | `asset` |
| sourceTables | `rmms_road_assets` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** `api/v1/rmms/*` · **cấm** copy CRUD `asset` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` family `assets` làm trang này.

Packet `pack kind: list` + list-form gate **không** áp dụng (GAP-PO-TS-12). SSOT = Kind E `/erp-report-context`.

## 0. Re-review sau PO (`task_0fd2c3c0`)

PO chốt Kind **E** / `packKind=report`. Design **không** đổi sang catalog CRUD. Current = leaf đã ship `AssetReportPage`; New = giữ DoD Kind E + prototype A–D đủ overlay Config/Chart/skeleton.

| Surface | Live MFE (`AssetReportPage`) | Design chốt |
|---------|------------------------------|-------------|
| Shell | 1× `LinPageLayout` kind=`report` · **không** nested CatalogListShell | **Giữ** |
| Filter | `LinErpListFilterBar` + SearchInput hạng mục/tuyến/TT · Date · Input tìm · **Xem** | **Giữ** controlHint PO §5 — **cấm** native Select |
| Grid | `LinCatalogDataGrid` kéo cột default ON · skeleton 8 | **Giữ** · cột tuyến · hạng mục · SL · ĐVT · TT · cập nhật · nguồn |
| Footer | `LinCatalogListPagination` 50/100/200/500 luôn | **Giữ** |
| Config | `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` FULL | **Giữ** — **cấm** height-only / `configHint` / stub |
| Chart | SoCai khi `viewed` ∧ ≥1 dòng (`by-item` · `by-route`) | **Giữ P1** |
| Drill | `/asset?id=` trên `window.top` | **Giữ** |
| Zone A | title «BC Tài sản» · `fas fa-cubes` · **không** Thêm mới | **Giữ** |
| Excel | CSV UTF-8 BOM `assets.csv` · `canExport` khi viewed · cột đang hiện | **Giữ** |
| Print | `LinReportPrintScopeModal` | **Giữ** |
| Chrome | không GOVOne · toast `dispatchAppToast` | **Giữ** |
| API | context cũ plural `reports` **stale** | **`GET api/v1/report/assets`** |

Ghi chú TL/Dev (không chặn Design confirm):

| ID | Note |
|----|------|
| DES-SC-01 | Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch. Live `reloadAll` đã khớp. |
| DES-SC-02 | Excel theo filter **đã Xem** + cột đang hiện · `canExport: viewed`. |
| DES-SC-03 | Prototype HTML dùng `<table>` analog — production **cấm** raw table / `footerPagination` / `pageSizeBar`. |
| DES-SC-04 | Đổi filter = draft; lưới giữ dữ liệu applied đến lần **Xem** tiếp. |
| DES-SC-05 | Prototype trước thiếu overlay Config/Chart/skeleton — **đã** bổ sung `task_96d0a2fe`. |
| DES-SC-06 | Seed CUC2 · **cấm QL.22**. Cập nhật lưới `formatAtVi` vi-VN. |

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
| View | grid + chart | Drill `/asset?id=` |
| Config | report FULL | `LinReportTableConfigModal` / `ReportDisplayConfigModal` — List · width · filter · sort · Thêm cột · chart flags |

## 2. Zones A–D (+ chart)

### Zone A — Header

Icon `fas fa-cubes` + title **BC Tài sản**. **Cấm** Thêm mới / GOVOne logo/bell/Hồ sơ.

### Zone B — Filter + toolbar

`LinErpListFilterBar` — title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR).

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| type | Hạng mục | SearchInput | enum hạng mục P1 (`Item` DTO) — **cấm** native Select |
| routeId | Tuyến | SearchInput | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| status | Trạng thái | SearchInput | Tốt / Theo dõi / Cần bảo trì (`RoadAssetEntity.Status`) |
| fromDate / toDate | Từ / Đến | Date | `UpdatedAt` |
| qSearch | Tìm | Input | tuyến · hạng mục · TT |
| | | **Xem** primary | apply draft → fetch · page=1 |

Toolbar: Làm mới · Xuất Excel · Biểu đồ · In · Config FULL.

Hành vi filter:

1. Đổi control = **draft** — **không** gọi API.
2. **Xem** copy draft → applied → `GET api/v1/report/assets` · page=1 · `viewed=true`.
3. Empty trước Xem: «Chưa xem — nhấn «Xem» để tải báo cáo tài sản.»
4. Làm mới: chỉ re-fetch applied; nếu chưa Xem → toast, **không** load.
5. Đổi draft sau Xem: lưới giữ dữ liệu cũ đến lần Xem tiếp.
6. Excel: `canExport` chỉ khi đã Xem.

### Zone C — Grid

`LinCatalogDataGrid` kéo cột ON · flex · skeleton. **Cấm** Col1–Col3.

| Grid column | Source field | Table | Width gợi ý |
|-------------|--------------|-------|-------------|
| tuyến | `Route` | `rmms_road_assets` | 90 |
| hạng mục | `Name` / `Type` (P1 DTO `Item`) | same | 140 |
| SL | read-model `Qty` (P1 seed Report) | Report DTO | 80 |
| ĐVT | read-model `Unit` | Report DTO | 70 |
| trạng thái | `Status` → DTO `Condition` | same | 130 |
| cập nhật | `UpdatedAt` | same | 160 · `formatAtVi` vi-VN |
| Nguồn (drill) | id | same | 120 |

Drill: `/asset?id=` — **cấm** form CRUD trên slug này.

Empty sau Xem 0 dòng: «Không có dòng phù hợp bộ lọc.»

### Zone D — Pagination

Luôn hiện 50 / 100 / 200 / 500. **Cấm** ẩn khi 0 dòng. **Cấm** footerPagination / pageSizeBar / raw HTML table trên MFE.

### Chart SoCai

Chỉ khi `viewed === true` **và** ≥1 dòng. Series: số dòng theo hạng mục · theo tuyến. KPI: Dòng · Tuyến · Cần bảo trì. **Cấm** gộp dashboard KPI slug khác.

## 3. Prototype

File: `ui/prototype/rpt-tai-san-prototype.html`

- Content-only A–D + overlay Config / Chart — **không** sidebar/menu/chrome demo.
- 12 dòng seed CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` — **không** `QL.22` / `ĐT.*`).
- Config FULL: List/width/filter/sort/Thêm cột analog `LinReportTableConfigModal`.
- Pager analog 50/100/200/500 (**không** native select filter).
- Skeleton khi Xem.
- Toast · **không** `alert`.
- reviewUrl bắt buộc (meta STATUS).

## 4. Perm / API (handoff SA)

| | |
|--|--|
| Perm | `report.tai-san.read` (FE gate ON · BE stub OK P1) |
| Xem | `GET api/v1/report/assets?from=&to=&routeId=&type=&status=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/assets/export` |
| tuyến | `GET api/v1/integration/road-routes/search` Type A share Integration |
| enum | hạng mục / TT seed FE P1 khớp `RoadAssetEntity.Status` + hạng mục seed |
| P1 data | in-memory Report domain map `RoadAssetEntity` (8–15 dòng; prototype 12) |
| P2 | EF read-model `rmms_road_assets` — **không** bảng báo cáo riêng P1 |

**Cấm** domain folder mới · **cấm** plural `reports` · **cấm** POST/PUT/DELETE trên slug này · **cấm** Finance `api/v1/assets`.

SA: thêm/xác nhận DOMAIN-MAP `rpt-tai-san` → Report · `api/v1/report` (GAP-PO-TS-09).

## 5. AC Design (map PO DoD)

| ID | AC | Prototype / live |
|----|----|------------------|
| AC-G-01 | Zones A–D | Có |
| AC-G-02 | Xem apply draft → fetch · page=1 | Có |
| AC-G-03 | Drill `/asset?id=` | Toast analog + live assign |
| AC-G-04 | Grid kéo cột ON | th cursor + live resizable |
| AC-G-05 | Footer pager luôn 50/100/200/500 | Có |
| AC-G-06 | 1× LinPageLayout report | Live + prototype `data-kind=report` |
| AC-G-07 | Flex + skeleton | Có |
| AC-G-08 | Config FULL · cấm configHint | Modal đủ cột |
| AC-G-09 | Chart SoCai sau Xem ∧ ≥1 dòng | Overlay + live `ReportChartModal` |
| AC-G-10 | Excel khi viewed | `canExport` analog disabled Excel |

## 6. Out of pack

CRUD tài sản trên slug này · Kind B `LinCatalogUiSchemaEditorModal` · GOVOne chrome · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · dashboard KPI gộp · warehouse / migration EF P1 · invent tuyến ngoài CUC2 · Finance TSCĐ.

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Kind | **E** A–D + SoCai |
| API | `api/v1/report/assets` + `/export` |
| Lookup | road-route Integration Type A |
| Query | `from` `to` `routeId` `type` `status` `q`/`search` `page` `pageSize` |
| P2 | EF `rmms_road_assets` |
| design_confirm | **approve** |
| Next | sa = **pending** đến lượt · chain ON · **cấm** QA feature khác khi chain này pending |
| Repo tick | BE+UI **đã** approve trên STATUS (không auto trước Dev — đã tick board) |
| This task | `roleOnly=design` · **không** chạy SA trong `task_96d0a2fe` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T17:25:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-tai-san-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| poSkillVersion | 2026.08.15.5 |
| taskId | `task_96d0a2fe` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
