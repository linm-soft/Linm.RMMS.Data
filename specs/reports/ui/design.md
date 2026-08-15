# Design — reports (Báo cáo Web · Kind E)

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-RPT-07) |
| Feature Kind | **E** · 3 loại P1 · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (user APPROVE→CHAIN · enqueue SA `task_e70f2904`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports/ui/prototype/reports-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `done` · `specs/_data-analy/features/reports-control-hint.md` · hash `sha256:5d30e1a7796fe50fb67b8444809805e826017017337ddc328ac0b1fcdbaadbdf` |
| autoApprove | **OFF** (`task_1d2ba27e`) → **không** tự confirm · SA **không** enqueue đến khi user Approve |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-15T08:15:00.000Z` |
| taskId | `task_1d2ba27e` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/reports.md` | Kind E · 3 loại Web · tách `dashboard` |
| CTX-02 | demo-maps `reports-control-map.md` | Select/Text **stale** vs SearchInput |
| CTX-03 | `reports-actions.md` | 172 — **OUT P1** UI |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/reports-demo.html` | redirect |
| DEM-02 | `bao-cao/reports.html` + js | Visual SSOT content — **skip** chrome / sidebar / Catalog 172 / footer GOVOne / Ban.TK / checklist khách |
| DI-02 | `specs/_data-analy/features/reports-control-hint.md` | controlHint SSOT · **no Excel cluster** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · trống = tất cả |

Persona: Hạt trưởng · quản lý (Web). Prototype **content-only** zones A–D.

Live MFE (`ReportListPage`) đã gần Kind E: 1× `LinPageLayout` kind=`report` · SearchInput · Date ẩn assets · Xem mới load · Excel check-in · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination`. Design **chốt** control-map + prototype review — **không** đổi Kind E → Kind B.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ stub · In stub · Sửa config |
| 6 | list_parity | Filter **SearchInput** / **SearchTextInput** / **Date** · **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT P1 | `/bao-cao/new` · `/:id` redirect list (GAP-PO-RPT-03) · **cấm** Thêm mới Zone A |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` |
| View | grid | **cấm** Resource/Slideout/View=`readOnly` giả form |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Báo cáo Web | report | **A Header · B Toolbar+filter · C Grid · D Pagination** | 1 page · family đổi cột C |
| Form CRUD | — | — | **OUT P1** |

### Zone A — Header

- Icon `fas fa-chart-bar` + title **Báo cáo Web** (22px, không clip)
- Badge tuỳ chọn: Kind E · P1 3 loại — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme Sáng-Tối

### Zone B — Filter + reportToolbar

**Trái (filter · `ErpListHeaderFilters` filterCols=4):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| reportFamily | Loại BC | `SearchInput` | enum `assets` / `incidents` / `checkins` — **cấm** tab Catalog 172 · **cấm** native Select |
| reportKind | Loại báo cáo | `SearchInput` | enum theo family (bảng dưới) |
| routeId | Tuyến | `SearchInput` | **road-route** 38 + empty=Tất cả · **cấm** free-text |
| periodMode | Kỳ báo cáo | `SearchInput` | enum `day` / `month` / `quarter` / `year` |
| fromDate | Từ ngày | `Date` | **ẩn** khi family=`assets` |
| toDate | Đến ngày | `Date` | **ẩn** khi family=`assets` |
| qSearch | Tìm kiếm | `SearchTextInput` | hạng mục · mã · cán bộ · Enter = Xem |
| — | **Xem** | Button primary | apply draft → page=1 → load; **chưa Xem** = empty hint |
| — | **Xuất Excel** | Button | **chỉ** khi family draft/applied = `checkins` |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | reload nếu đã Xem; chưa Xem thì apply+view |
| Biểu đồ | chart | **stub toast** (GAP-PO-RPT-05) |
| In | print | **stub toast** |
| Sửa config | `fa-cog` | hint kéo cột ON (không column-picker warehouse) |

Đổi family → reset kind về option đầu family · **viewed=false** · clear grid · page=1. Đổi filter draft **không** tự fetch cho đến **Xem**.

**Cấm trên B (P1):** Hồ sơ · Đăng xuất · Catalog 172 · Dashboard nav chrome · Áp dụng lọc / Xóa lọc demo (gộp vào Xem + clear từng SearchInput).

### Zone C — Grid

- Card title theo family: **Kết quả báo cáo tài sản** / **sự cố** / **check-in**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột **đổi theo family** (readonly; Dropdown **display** chỉ condition/severity/status — không editor)

**assets**

| key | Label | controlHint |
|-----|-------|-------------|
| route | Tuyến | Text |
| item | Hạng mục | Text |
| qty | SL | Text number |
| unit | ĐVT | Text |
| condition | Tình trạng | Dropdown display (Tốt · TB · Kém) |
| updatedAt | Cập nhật | Date |

**incidents**

| key | Label | controlHint |
|-----|-------|-------------|
| code | Mã | Text |
| route | Tuyến | Text |
| type | Loại | Text |
| severity | Mức độ | Dropdown display |
| status | Trạng thái | Dropdown display |
| at | Thời điểm | Date |

**checkins**

| key | Label | controlHint |
|-----|-------|-------------|
| staff | Cán bộ | Text |
| route | Tuyến | Text |
| points | Điểm | Text number |
| coverage | Coverage % | Text number |
| day | Ngày | Date |
| firstAt | Đầu | Date |
| lastAt | Cuối | Date |

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Demo HTML Select = stale.

### reportKind theo family

| family | values (value → label) |
|--------|------------------------|
| assets | `summary` Tổng hợp chung · `by-route` Thống kê theo tuyến · `by-org` Thống kê theo doanh nghiệp · `by-item` Tổng hợp theo hạng mục |
| incidents | `monthly` Thống kê TNGT hàng tháng · `half-year` Tổng hợp TNGT 6 tháng · `serious` Báo cáo TNGT nghiêm trọng · `compare` So sánh TNGT |
| checkins | `daily` Nhật ký tuần đường · `patrol` Hoạt động tuần kiểm · `worklog` Nhật ký công việc · `coverage` Coverage check-in ≥3 điểm/ngày |

### Tuyến (GAP-PO-RPT-02)

- Lookup UI = 38 CUC2 + «Tất cả» (empty).
- User chọn `QL.1` → query alias seed demo `QL.1A` nếu BE in-memory còn mã demo.
- **Cấm** invent `ĐT.538` / `ĐT.217` / `CT.01` vào master 38 (`CT.001` khác mã).

## 4. Interactions

1. Mở `/bao-cao` → empty hint, **không** auto-load.
2. Chọn family/kind/route/period/(dates)/q → **Xem** → GET `api/v1/report/{assets|incidents|checkins}`.
3. Check-in + Xuất Excel → GET `api/v1/report/checkins/export` → file `checkins.csv` UTF-8 BOM.
4. Chart / Print / Config → toast / modal hint P1.
5. Đổi page/pageSize sau khi viewed → refetch cùng applied filters.

## 5. Prototype

`specs/reports/ui/prototype/reports-prototype.html` — content-only A–D · SearchInput combobox (không native Select) · Date ẩn assets · Excel chỉ check-in · empty đến khi Xem · pagination 50/100/200/500.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports/ui/prototype/reports-prototype.html`

## 6. API (handoff SA — Design không chốt contract)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/assets` | `type` `routeId` `search` `period` `page` `pageSize` |
| GET | `/api/v1/report/incidents` | + `from` `to` |
| GET | `/api/v1/report/checkins` | + `from` `to` |
| GET | `/api/v1/report/checkins/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

SA: lookup Type A · query in-memory P1 · **cấm** warehouse schema bắt buộc.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-RPT-01 | Pack **report** / Kind E — **không** Kind B CRUD |
| GAP-DS-RPT-02 | Demo tabs + Catalog 172 → MFE **SearchInput family** · Catalog **OUT** |
| GAP-DS-RPT-03 | KPI row demo **OUT P1** MFE (không trên A–D product) |
| GAP-DS-RPT-04 | Prefix **`api/v1/report`** (khớp GAP-PO-RPT-01) |
| GAP-DS-RPT-05 | Chart/Print/Config stub P1 |
| GAP-DS-RPT-06 | Form OUT · cấm Thêm mới A |
| GAP-DS-RPT-07 | autoApprove OFF → **await_confirm** |

## 8. Out of pack

Legacy GOVOne rail · 172 catalog dump · RAG/AI trên BC · gộp `dashboard` · nested CatalogListShell · ERP.* · `api/v1/reports`.

## 9. Handoff SA

- Confirm lookup road-route Type A + query in-memory.
- Roles sau Design = **pending** đến lượt.
- User Approve board → enqueue SA. **Cấm** nhảy TL/Dev/QA khi design chưa confirm.
- Repo BE+UI tick = user (không auto) trước Dev.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
