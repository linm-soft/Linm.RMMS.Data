# Design — rpt-thiet-hai (Khối lượng thiệt hại)

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog |
| Feature Kind | **E** · leaf `/bao-cao/thiet-hai` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-thiet-hai/ui/prototype/rpt-thiet-hai-prototype.html` |
| prototype | `specs/rpt-thiet-hai/ui/prototype/rpt-thiet-hai-prototype.html` |
| analog | zones A–D (+ chart SoCai) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/thiet-hai` |
| mfeStdUrl | `http://localhost:9311/bao-cao/thiet-hai` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · GAP-PO-TH-01..12 · task `task_ba6d898c` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-thiet-hai-control-hint.md` · hash `sha256:rpt-thiet-hai-context-20260816` |
| live re-audit | `DamageQtyReportPage` + `DamageQtyFilterBar` · 1× `LinPageLayout` kind=`report` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T18:50:00.000Z` |
| taskId | `task_242fad5a` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** `api/v1/rmms/*` · **cấm** copy CRUD `incident` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `LinListTableConfigModal` · **cấm** `configHint` · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` family `damage-qty` làm trang này.

Packet `pack kind: list` + list-form gate **không** áp dụng (GAP-PO-TH-02). SSOT = Kind E `/erp-report-context`.

## 0. Re-review sau PO (`task_ba6d898c`)

PO chốt Kind **E** / `packKind=report`. Design **không** đổi sang catalog CRUD. Current = leaf đã ship `DamageQtyReportPage` (`task_11d09197`); New = giữ DoD Kind E + prototype A–D đủ overlay Config/Chart/skeleton (prototype cũ **thiếu** — GAP đóng ở `task_242fad5a`).

| Surface | Live MFE (`DamageQtyReportPage`) | Design chốt |
|---------|----------------------------------|-------------|
| Shell | 1× `LinPageLayout` kind=`report` · **không** nested CatalogListShell | **Giữ** |
| Filter | `LinErpListFilterBar` + SearchInput tuyến/hạng mục · Date · Input tìm · **Xem** | **Giữ** controlHint PO §6 — **cấm** native Select · **cấm QL.22** |
| Grid | `LinCatalogDataGrid` kéo cột default ON · skeleton 8 | **Giữ** · cột tuyến · hạng mục · KL · ĐVT · ước giá · nguồn · drill |
| Footer | `LinCatalogListPagination` 50/100/200/500 luôn | **Giữ** |
| Config | `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` FULL | **Giữ** — **cấm** height-only / `configHint` / stub |
| Chart | SoCai khi `viewed` ∧ ≥1 dòng (`by-item` · `by-route`) | **Giữ P1** |
| Drill | `/incident?id=` trên `window.top` | **Giữ** |
| Zone A | title «Khối lượng thiệt hại» · **không** Thêm mới | **Giữ** |
| Excel | CSV UTF-8 BOM `damage-qty.csv` · `canExport` khi viewed · cột đang hiện | **Giữ** |
| Print | `LinReportPrintScopeModal` | **Giữ** |
| Chrome | không GOVOne · toast `dispatchAppToast` | **Giữ** |
| API | context cũ plural `reports` **stale** | **`GET api/v1/report/damage-qty`** · query **`search`** không `q` |

Ghi chú TL/Dev (không chặn Design confirm):

| ID | Note |
|----|------|
| DES-TH-01 | Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch. Live `reloadAll` đã khớp. |
| DES-TH-02 | Excel theo filter **đã Xem** + cột đang hiện · `canExport: viewed`. Live `handleExport` đã khớp. |
| DES-TH-03 | Prototype HTML dùng `<table>` analog — production **cấm** raw table / `footerPagination` / `pageSizeBar`. |
| DES-TH-04 | Đổi filter = draft; lưới giữ dữ liệu applied đến lần **Xem** tiếp. Live draft vs applied đã khớp. |
| DES-TH-05 | Prototype trước thiếu overlay Config/Chart/skeleton + chỉ 3 dòng — **đã** bổ sung `task_242fad5a` (12 dòng CUC2). |
| DES-TH-06 | Seed CUC2 · **cấm QL.22**. Ước giá lưới `formatVnd` vi-VN · KL `formatQtyVi`. |

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

Icon `fas fa-cubes` + title **Khối lượng thiệt hại**. **Cấm** Thêm mới / GOVOne logo/bell/Hồ sơ.

### Zone B — Filter + toolbar

`LinErpListFilterBar` — title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-TH-09).

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| routeId | Tuyến | SearchInput | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| type | Hạng mục | SearchInput | `DAMAGE_ITEM_LOOKUP` / `AssetLabel` seed FE P1 — **cấm** native Select |
| fromDate / toDate | Từ / Đến | Date | kỳ báo cáo |
| qSearch | Tìm | Input | query **`search`** — **cấm** param `q` |
| | | **Xem** primary | apply draft → fetch · page=1 |

Toolbar: Làm mới · Xuất Excel · Biểu đồ · In · Config FULL.

Hành vi filter:

1. Đổi control = **draft** — **không** gọi API.
2. **Xem** copy draft → applied → `GET api/v1/report/damage-qty` · page=1 · `viewed=true`.
3. Empty trước Xem: «Chưa xem — nhấn «Xem» để tải báo cáo khối lượng thiệt hại.»
4. Làm mới: chỉ re-fetch applied; nếu chưa Xem → toast, **không** load.
5. Đổi draft sau Xem: lưới giữ dữ liệu cũ đến lần Xem tiếp.
6. Excel: `canExport` chỉ khi đã Xem.

### Zone C — Grid

`LinCatalogDataGrid` kéo cột ON · flex · skeleton. **Cấm** Col1–Col3.

| Grid column | Source field | DTO live | Table | Width gợi ý |
|-------------|--------------|----------|-------|-------------|
| tuyến | `RouteName` | `route` | `rmms_incidents` | 90 |
| hạng mục | `AssetLabel` | `item` | same | 140 |
| KL | typed Qty P1 | `qty` | damage line | 80 |
| ĐVT | typed Unit P1 | `unit` | same | 70 |
| ước giá | typed EstValue P1 | `estValue` | same | 140 |
| nguồn | typed Source P1 | `source` | same | 120 |
| Sự cố (drill) | incident id | `incidentId` | same | 120 |

Drill: `/incident?id=` — **cấm** form CRUD trên slug này.

Empty sau Xem 0 dòng: «Không có dòng phù hợp bộ lọc.»

### Zone D — Pagination

Luôn hiện 50 / 100 / 200 / 500. **Cấm** ẩn khi 0 dòng. **Cấm** footerPagination / pageSizeBar / raw HTML table trên MFE.

### Chart SoCai

Chỉ khi `viewed === true` **và** ≥1 dòng. Series: số dòng theo hạng mục · theo tuyến (`by-item` · `by-route`). KPI: Dòng · Tuyến · Tổng ước giá. **Cấm** gộp dashboard KPI slug khác.

## 3. Prototype

File: `ui/prototype/rpt-thiet-hai-prototype.html`

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
| Perm | `report.thiet-hai.read` (FE gate ON · BE stub OK P1) |
| Xem | `GET api/v1/report/damage-qty?from=&to=&routeId=&type=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/damage-qty/export` |
| tuyến | `GET api/v1/integration/road-routes/search` Type A share Integration |
| enum | hạng mục seed FE P1 khớp damage item / `AssetLabel` |
| P1 data | in-memory Report domain map `IncidentEntity` damage lines (8–15 dòng; prototype **12**; live seed **12**) |
| P2 | EF read-model `rmms_incidents` + damage lines — **không** bảng báo cáo riêng P1 |

**Cấm** domain folder mới · **cấm** plural `reports` · **cấm** POST/PUT/DELETE trên slug này.

SA: giữ DOMAIN-MAP `rpt-thiet-hai` → Report · `api/v1/report` (GAP-PO-TH-01).

## 5. AC Design (map PO DoD)

| ID | AC | Prototype / live |
|----|----|------------------|
| AC-G-01 | Zones A–D | Có |
| AC-G-02 | Xem apply draft → fetch · page=1 | Có |
| AC-G-03 | Drill `/incident?id=` | Toast analog + live `window.top` assign |
| AC-G-04 | Grid kéo cột ON | th cursor + live resizable |
| AC-G-05 | Footer pager luôn 50/100/200/500 | Có |
| AC-G-06 | 1× LinPageLayout report | Live + prototype `data-kind=report` |
| AC-G-07 | Flex + skeleton | Có |
| AC-G-08 | Config FULL · cấm configHint | Modal đủ cột |
| AC-G-09 | Chart SoCai sau Xem ∧ ≥1 dòng | Overlay + live `ReportChartModal` |
| AC-G-10 | Excel khi viewed | `canExport` analog disabled Excel |

## 6. Out of pack

CRUD sự cố trên slug này · Kind B `LinCatalogUiSchemaEditorModal` · GOVOne chrome · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · dashboard KPI gộp · warehouse / migration EF P1 · invent tuyến ngoài CUC2.

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Kind | **E** A–D + SoCai |
| API | `api/v1/report/damage-qty` + `/export` |
| Lookup | road-route Integration Type A · hạng mục seed FE P1 |
| Query | `from` `to` `routeId` `type` `search` `page` `pageSize` — **cấm** `q` |
| P2 | EF `rmms_incidents` + damage lines |
| design_confirm | **approve** |
| Next | sa = **pending** đến lượt · chain ON · **cấm** QA feature khác khi chain này pending |
| Repo tick | BE+UI **đã** approve trên STATUS (không auto trước Dev — đã tick board) |
| This task | `roleOnly=design` · **không** chạy SA trong `task_242fad5a` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T18:50:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-thiet-hai-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| poSkillVersion | 2026.08.15.5 |
| taskId | `task_242fad5a` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
