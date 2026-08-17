# Design — rpt-hang-muc-hu-hong (Hạng mục hư hỏng)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog |
| Feature Kind | **E** · leaf `/bao-cao/hang-muc-hu-hong` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · không chờ board) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-hang-muc-hu-hong/ui/prototype/rpt-hang-muc-hu-hong-prototype.html` |
| prototype | `specs/rpt-hang-muc-hu-hong/ui/prototype/rpt-hang-muc-hu-hong-prototype.html` |
| analog | zones A–D (+ chart SoCai) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/hang-muc-hu-hong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/hang-muc-hu-hong` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · task `task_f3810d11` · GAP-PO-HH-01..10 |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-hang-muc-hu-hong-control-hint.md` · hash `sha256:rpt-hang-muc-hu-hong-context-20260816` |
| live re-audit | `DefectReportPage` + `DefectFilterBar` · 1× `LinPageLayout` kind=`report` |
| autoApprove | **ON** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T05:40:00.000Z` |
| taskId | `task_35da77de` |

**Cấm ERP.*** · **cấm** `api/v1/reports` · **cấm** `api/v1/rmms/*` · **cấm** clone CRUD `ai-vision` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `LinListTableConfigModal` · **cấm** `configHint`.

## 0. Re-review sau PO (`task_f3810d11`)

PO chốt Kind **E** / `packKind=report` (board `list` **bỏ**). Design **không** đổi sang catalog CRUD.

| Surface | Live MFE (`DefectReportPage`) | Design chốt |
|---------|-------------------------------|-------------|
| Shell | 1× `LinPageLayout` kind=`report` · **không** nested CatalogListShell | **Giữ** |
| Filter | `LinErpListFilterBar` + SearchInput tuyến/loại/mức/nguồn · Date · Input tìm · **Xem** | **Giữ** controlHint PO §5 |
| Grid | `LinCatalogDataGrid` kéo cột default ON · skeleton 8 | **Giữ** |
| Footer | `LinCatalogListPagination` 50/100/200/500 luôn | **Giữ** |
| Config | `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` FULL | **Giữ** — **cấm** height-only modal |
| Chart | SoCai khi `viewed` ∧ ≥1 dòng | **Giữ P1** |
| Drill | `/ai-vision?id=` | **Giữ** |
| Zone A | title «Hạng mục hư hỏng» · **không** Thêm mới | **Giữ** |
| Excel | `defects.csv` UTF-8 BOM | **Giữ** — cột **đang hiện** sau Config |
| Print | `LinReportPrintScopeModal` + `window.print` | stub engine OK |
| Chrome | không GOVOne · toast `dispatchAppToast` | **Giữ** |

Ghi chú TL/Dev (không chặn Design confirm):

| ID | Note |
|----|------|
| DES-HH-01 | Làm mới khi `!viewed` hiện gọi `applyAndView` — PO: Làm mới = re-fetch **filter đã Xem**. Chốt: **không** fetch nếu chưa Xem (toast «Chưa xem»). |
| DES-HH-02 | Export hiện theo **draft** filter — chốt Excel theo filter **đã Xem** (cùng query lưới) trừ khi user bấm Xem trước. |
| DES-HH-03 | Prototype HTML dùng `<table>` analog lưới — production **cấm** raw table / `footerPagination` / `pageSizeBar`. |

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
| View | grid + chart | Drill `/ai-vision?id={sourceId}` |
| Config | report FULL | `LinReportTableConfigModal` / `ReportDisplayConfigModal` — List · width · filter · sort · Thêm cột · chart flags |

## 2. Zones A–D (+ chart)

### Zone A — Header

Icon `fas fa-road` + title **Hạng mục hư hỏng**. **Cấm** Thêm mới / GOVOne logo/bell/Hồ sơ. **Cấm** badge P1/P2/score trên chrome.

### Zone B — Filter + toolbar

`LinErpListFilterBar` — title trái · input + tìm cụm phải · 1 hàng wrap (GAP-PO-HH-09 / GAP-FILTER-BAR).

| key | Label | Control | catalogKind / rule |
|-----|-------|---------|-------------------|
| routeId | Tuyến | SearchInput | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| defectClass | Loại hạng mục | SearchInput | taxonomy AI enum seed FE P1 |
| severity | Mức | SearchInput | Critical / High / Medium / Low — **cấm** native Select |
| sourceKind | Nguồn | SearchInput | week / AI |
| fromDate / toDate | Từ / Đến | Date | kỳ |
| qSearch | Tìm | Input | mã DET · tuyến · km |
| | | **Xem** primary | apply draft → fetch · page=1 |

Toolbar (Zone B / page toolbar): Làm mới · Xuất Excel · Biểu đồ · In · Config FULL.

Hành vi filter:

1. Đổi control = **draft** — **không** gọi API.
2. **Xem** copy draft → applied → `GET api/v1/report/defects` · page=1 · `viewed=true`.
3. Empty trước Xem: «Chưa xem — nhấn «Xem» để tải báo cáo.»
4. Làm mới: chỉ re-fetch applied; nếu chưa Xem → toast, **không** load.
5. Đổi draft sau Xem: lưới giữ dữ liệu cũ đến lần Xem tiếp.

### Zone C — Grid

`LinCatalogDataGrid` kéo cột ON · flex · skeleton load.

| Grid column | Source field | Width gợi ý |
|-------------|--------------|-------------|
| Mã | `Code` | 110 |
| Tuyến | `RouteLabel` | 90 |
| Km | `SectionId` | 110 |
| Hạng mục | `DefectClass` | 140 |
| Mức | `Severity` | 90 |
| Nguồn | `SourceKind` / `Engine` | 80 |
| TT | `Status` | 130 |
| Ngày | `DetectedAt` | 110 |
| Incident | `IncidentCode` | 110 |
| Score | `Score` | 80 |
| Nguồn AI (drill) | `sourceId` | 130 |

**Cấm** Col1–Col3 placeholder. Drill: `/ai-vision?id=` — **cấm** mở form CRUD trên slug này.

Empty sau Xem 0 dòng: «Không có dòng phù hợp bộ lọc.»

### Zone D — Pagination

Luôn hiện 50 / 100 / 200 / 500. **Cấm** ẩn khi 0 dòng. **Cấm** footerPagination / pageSizeBar / raw HTML table trên MFE.

### Chart SoCai

Chỉ khi `viewed === true` **và** ≥1 dòng. Series: số dòng theo mức · theo tuyến. KPI strip: Dòng · Tuyến · Critical. **Cấm** gộp dashboard KPI slug khác.

## 3. Prototype

File: `ui/prototype/rpt-hang-muc-hu-hong-prototype.html`

- Content-only A–D + overlay Config / Chart — **không** sidebar/menu/chrome demo.
- 12 dòng seed CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.8` `QL.9` `QL.10` — **không** `QL.22` / `ĐT.*`).
- Config FULL: đủ cột lưới + List/width analog.
- Pager analog nút 50/100/200/500 (**không** native select filter).
- Skeleton khi Xem.
- Toast · **không** `alert`.
- reviewUrl bắt buộc (meta STATUS).

## 4. Perm / API (handoff SA)

| | |
|--|--|
| Perm | `report.hang-muc-hu-hong.read` (FE gate ON · BE stub OK P1) |
| Xem | `GET api/v1/report/defects?from=&to=&routeId=&defectClass=&severity=&sourceKind=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/defects/export` |
| tuyến | `GET api/v1/integration/road-routes/search` Type A share Integration |
| enum | loại / mức / nguồn seed FE P1 |
| P1 data | in-memory 12 mapped `AiVisionDetectionEntity` |
| P2 | EF read-model `rmms_ai_vision_detections` — **không** warehouse schema P1 |

**Cấm** domain folder mới · **cấm** plural `reports`.

## 5. AC Design (map PO AC-G)

| ID | AC | Prototype / live |
|----|----|------------------|
| AC-G-01 | Zones A–D | Có |
| AC-G-02 | Xem apply draft → fetch · page=1 | Có |
| AC-G-03 | Drill `/ai-vision?id=` | Toast analog + live assign |
| AC-G-04 | Grid kéo cột ON | th cursor + live resizable |
| AC-G-05 | Footer pager luôn 50/100/200/500 | Có |
| AC-G-06 | 1× LinPageLayout report | Live + prototype `data-kind=report` |
| AC-G-07 | Flex + skeleton | Có |
| AC-G-08 | Config FULL · cấm configHint | Modal đủ cột |

## 6. Out of pack

CRUD detections/incident · Kind B `LinCatalogUiSchemaEditorModal` · GOVOne chrome · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · dashboard KPI gộp · warehouse P1 · invent tuyến ngoài CUC2.

## 7. Handoff → SA

| Field | Value |
|-------|-------|
| Kind | **E** A–D + SoCai |
| API | `api/v1/report/defects` + `/export` |
| Lookup | road-route Integration Type A |
| P2 | join `rmms_ai_vision_detections` |
| design_confirm | **approve** |
| Next | sa = **pending** đến lượt · chain ON · **cấm** QA feature khác khi chain này pending |
| Repo tick | BE+UI **không auto** trước Dev |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:40:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-hang-muc-hu-hong-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| poSkillVersion | 2026.08.15.5 |
| taskId | `task_35da77de` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
