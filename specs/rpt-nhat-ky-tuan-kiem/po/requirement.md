# PO — rpt-nhat-ky-tuan-kiem (Nhật ký tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-kiem` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E**) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-kiem` · **không** CRUD form |
| status | `done` · **confirmed** (`autoApprove=ON`) |
| taskId | `task_085844af` |
| autoApprove | **ON** |
| chain | **ON** · **roleOnly=po** (Design+ giữ **pending** đến lượt) |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `InspectionLogBook` · `InspectionEntry` |
| sourceFormReady | **yes** (`docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.8) |
| prior.dataAnaly | `confirmed` · `specs/_data-analy/features/rpt-nhat-ky-tuan-kiem-control-hint.md` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T08:58:00.000Z` |

## 1. Goal

Trang **Nhật ký tuần kiểm** (Mẫu 8 — TT 41 Điều 20 · PL VIII): Kind **E** leaf trên MFE Report. Người dùng lọc tuyến · cán bộ · kỳ · từ khóa, bấm **Xem** thì lưới đọc `InspectionEntry` gắn `InspectionLogBook`. Xuất Excel CSV UTF-8 BOM. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill về sổ nguồn CSDL.

**Khác** `rpt-nhat-ky-tuan-duong` (Mẫu 1 `PatrolLogBook`). **Khác** `rpt-tuan-kiem` (KPI tuần). **Cấm** copy CRUD từ `csdl-so-sach`. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

| Align | Value |
|-------|-------|
| Product | `D:/AI-QLBD/Linm.RMMS.Data` |
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `http://localhost:9311/bao-cao/nhat-ky-tuan-kiem` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/report/patrol-log-inspect`** |
| Cấm | `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` ERP · **`api/v1/reports`** (plural stale) |

## 2. Persona / nguồn

| | |
|--|--|
| Persona | Hạt trưởng · Khu QLĐB · lãnh đạo (đọc báo cáo, không nhập sổ) |
| Nhập liệu | `csdl-so-sach` / patrol — `POST /api/v1/inspection-logs/books` + entries |
| Read-model | Query entries theo tuyến · ngày · tenant — không bảng báo cáo riêng P1 |

## 3. Current → New

| Layer | Current | New (PO chốt) |
|-------|---------|----------------|
| Demo | N/A | Prototype A–D content-only (Design) |
| MFE | leaf Kind E (pipeline trước) | Giữ leaf `PatrolLogInspectReportPage` · route `/bao-cao/nhat-ky-tuan-kiem` |
| API | context từng ghi `api/v1/reports/...` | **canonical** `GET api/v1/report/patrol-log-inspect` + `/export` |
| Nguồn | CSDL §3.8 sẵn cột | P1 seed in-memory 12 dòng CUC2 · P2 join EF `Inspection*` |
| CRUD | không trên report | giữ — chỉ đọc |

## 4. User stories

1. Là lãnh đạo, tôi lọc tuyến/cán bộ/kỳ rồi **Xem** để thấy dòng tuần kiểm Mẫu 8.
2. Là hạt trưởng, tôi xuất Excel đúng cột đang hiện (sau config).
3. Tôi bấm drill để mở sổ nguồn `csdl-so-sach` đúng `bookId` + `entryId`.
4. Chưa bấm Xem: lưới empty + hint, **không** GET. Làm mới khi chưa Xem → toast, không fetch.

## 5. Zones A–D (Kind E)

| Zone | DoD |
|------|-----|
| A | Title «Nhật ký tuần kiểm» · **cấm** Thêm mới |
| B | `LinErpListFilterBar` title trái · cụm filter phải (GAP-FILTER-BAR). SearchInput tuyến (`road-route`) + cán bộ · Date from/to · Input tìm · **Xem**. Toolbar: Làm mới · Chart · Excel · In · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal`) — **cấm** `configHint` · **cấm** `LinListTableConfigModal` · **cấm** Kind B `LinCatalogUiSchemaEditorModal` (đây không phải catalog list) |
| C | `LinCatalogDataGrid` kéo cột default ON · skeleton · empty chưa Xem |
| D | `LinCatalogListPagination` 50/100/200/500 **luôn** — cấm `footerPagination` / `pageSizeBar` / raw table |

**1** `LinPageLayout` — **cấm** nested `CatalogListShell`.

## 6. Filter (controlHint — data-analy)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|---------------------|
| `routeId` | Tuyến | `SearchInput` | **road-route** · Integration Type A · **cấm** native select · **cấm QL.22** |
| `staffId` | Cán bộ | `SearchInput` | nva/ttb/lvc/pmd P1 |
| `fromDate` / `toDate` | Kỳ | `Date` | trên `InspectionEntry.Date` |
| `q` | Tìm kiếm | `Input` | canonical query `q` · hạng mục · tuyến · cán bộ · số sổ · Enter = Xem |

Draft filter trên UI; **Xem** mới GET. Exact `FilterRoute` khi chọn tuyến.

## 7. Grid ← form nguồn (§3.8)

| Cột lưới | Field nguồn |
|----------|-------------|
| Ngày | `InspectionEntry.Date` → `day` |
| Tuyến | `InspectionLogBook.RoadCode` |
| Hạng mục | `WorkItemProposal` |
| Kết quả | `ConditionDetail` |
| Ghi chú | `RequiredAction` / `ReceiverNote` |
| Cán bộ | header sổ / P1 `InspectorStaff` |
| Km | `KmFrom`–`KmTo` |
| Vị trí | `Position` |
| Trạng thái | `DoneAt` → `done` / `open` |
| Số sổ | `BookNo` |
| Nguồn | drill |

Drill: `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}`.

## 8. API / perm / BE

| Method | Path | Mô tả |
|--------|------|-------|
| GET | `api/v1/report/patrol-log-inspect?from=&to=&routeId=&staffId=&q=&page=&pageSize=` | paged Xem |
| GET | `api/v1/report/patrol-log-inspect/export` | Excel/CSV UTF-8 BOM |

Lookup tuyến: `GET api/v1/integration/road-routes/search`.

Auth JWT · tenant · perm `report.nhat-ky-tuan-kiem.read`. **Cấm ERP.***

P1: in-memory seed. P2: EF join `InspectionLogBook`/`InspectionEntry` — không chặn PO DoD.

## 9. DoD (PO → Design/TL/Dev)

1. Draft filter; **Xem** mới GET. Làm mới chưa Xem = toast, không fetch.
2. Zone A title «Nhật ký tuần kiểm» — cấm Thêm mới.
3. Zone B `LinErpListFilterBar` + Xem · Làm mới · In · Excel · Config FULL · Chart SoCai khi đã Xem + ≥1 dòng.
4. Zone C `LinCatalogDataGrid` kéo cột ON · cột mục 7 · drill sổ.
5. Zone D pager 50/100/200/500 luôn.
6. Query canonical `q`. FilterRoute exact. **Cấm** QL.22.
7. Không Resource/Slideout/View=readOnly form trên UI report.
8. MFE `yarn build` PASS trước Dev `completed` (role Dev, không phải PO).

## 10. GAP

| ID | Chốt |
|----|------|
| GAP-PO-NKTK-01 | Prefix `api/v1/report` không plural |
| GAP-PO-NKTK-02 | packKind **report** Kind E — không Kind B catalog schema editor |
| GAP-PO-NKTK-03 | P1 seed in-memory · join EF Inspection* = P2 |
| GAP-F-RPT-LEAF-01 | Leaf slug + route `/bao-cao/nhat-ky-tuan-kiem` tách hub `reports` |
| GAP-FILTER-BAR | 1 hàng wrap title trái · input cụm phải |
| GAP-PO-NKTK-04 | Khác Mẫu 1 tuần đường và KPI `rpt-tuan-kiem` |

## 11. Out of scope

CRUD sổ · dashboard KPI gộp slug này · publish event · chrome GOVOne · demo full clone.

## 12. Handoff

→ Design: prototype A–D content-only + `reviewUrl` · map controlHint. SA: lookup API singular `report`. TL/Dev: Kind E report config FULL.

**roleOnly=po** — không chạy Design trong task `task_085844af`.

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
