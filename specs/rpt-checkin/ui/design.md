# Design — rpt-checkin (BC Check-in)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-CHK-02) |
| Feature Kind | **E** · leaf `/bao-cao/checkin` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (user APPROVE→CHAIN · `task_b8d33090` enqueue SA) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-checkin/ui/prototype/rpt-checkin-prototype.html` |
| prototype | `specs/rpt-checkin/ui/prototype/rpt-checkin-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/checkin` |
| mfeStdUrl | `http://localhost:9311/bao-cao/checkin` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed`/`done` · `po/requirement.md` · `task_01a6ebc0` |
| prior · data_analy | `done` · `specs/_data-analy/features/rpt-checkin-control-hint.md` · hash `sha256:rpt-checkin-context-20260815` |
| autoApprove | **OFF** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-15T22:30:00.000Z` |
| taskId | `task_6ef4c96a` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON · **cấm** clone CRUD `patrol`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-checkin.md` | Kind E leaf · filter · Xem · lưới · drill · Excel |
| CTX-02 | `docs/context/features/patrol.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01 / GAP-PO-CHK-02) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-checkin-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + chart SoCai (report shell). **Không** KPI 4 · **không** map InZone (`rpt-bao-cao-cong`). **Không** full demo clone.

Khác `rpt-bao-cao-cong`: lưới coverage/điểm/first→last + Excel; Báo cáo công = KPI + map + InZone — **không** gộp.

Live MFE (`CheckinReportPage`) đã Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput loại/tuyến · Date · Xem mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Config FULL · chart/print · drill Patrol. Design **re-review** control-map + prototype + GAP footer luôn hiện — **không** đổi Kind E → Kind B.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (stub OK P1 nếu chưa print engine) · Config **FULL** (`LinReportTableConfigModal` — **cấm** stub/configHint toast) |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm — **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill sang Patrol `/patrol?id={patrolId}` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| BC Check-in | report | **A Header · B Toolbar+filter · C Grid (+ chart modal) · D Pagination** | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-map-marker-alt` + title **BC Check-in** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-CHK-09):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| reportKind | Loại | `SearchInput` | enum `daily` / `patrol` / `worklog` / `coverage` — **cấm** native Select |
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm** free-text · **cấm QL.22** |
| fromDate | Từ ngày | `Date` | |
| toDate | Đến ngày | `Date` | |
| qSearch | Tìm kiếm | `Input` | cán bộ · tuyến (text) |
| — | **Xem** | Button primary | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo cột đang hiện · file `checkins.csv` |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | chưa Xem → apply+view; đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** khi `viewed` + có dòng — catalog: điểm theo ngày (line) · coverage theo tuyến (bar) |
| In | print | stub toast OK nếu chưa print engine (GAP-PO-CHK-05) · không `window.confirm` |
| Sửa config | `fa-cog` | **FULL** column prefs — **cấm** stub toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — Grid

- `listTitle`: **Kết quả báo cáo check-in**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo check-in.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — **không** editor

**Grid columns**

| key | Label | controlHint |
|-----|-------|-------------|
| staff | Cán bộ | Text |
| route | Tuyến | Text |
| day | Ngày | Date (ISO day) |
| points | Điểm | Text number |
| coverage | Coverage | Text number + `%` |
| firstAt | Đầu | Time first→last |
| lastAt | Cuối | Time |
| drill | Nguồn | Button «Mở tuần tra» → `/patrol?id={patrolId}` (top window) |

**Không** KPI 4 · **không** SVG map worklog trên C.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Loại (reportKind)

| value | label |
|-------|-------|
| `daily` | Nhật ký tuần đường (default) |
| `patrol` | Hoạt động tuần kiểm |
| `worklog` | Nhật ký công việc |
| `coverage` | Coverage ≥3 điểm — filter `points >= 3` (GAP-PO-CHK-03) |

### Tuyến (GAP-PO-CHK-04)

- Lookup UI = 38 CUC2 + «Tất cả» (empty).
- Seed QL.1 / QL.15 / QL.217 / HCM / CT.001 / QL.7 / QL.8 / QL.9 / QL.10 **OK** (nằm trong 38).
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

## 4. Interactions

1. Mở `/bao-cao/checkin` → empty hint, **không** auto-load lưới.
2. Chọn loại/tuyến/từ–đến/q → **Xem** → GET `api/v1/report/checkins`.
3. Xuất Excel → GET `api/v1/report/checkins/export` → `checkins.csv` UTF-8 BOM theo cột hiện.
4. Drill dòng → Patrol `/patrol?id=`.
5. Chart SoCai khi đã Xem + có dòng · Config FULL · In stub.
6. Đổi page/pageSize sau viewed → refetch cùng applied filters.
7. Coverage kind: chỉ dòng `points >= 3`.

## 5. Prototype

`specs/rpt-checkin/ui/prototype/rpt-checkin-prototype.html` — content-only A–D + SoCai chart modal + Config cột FULL · SearchInput combobox (không native Select filter) · empty đến khi Xem · **12** dòng CUC2 · pagination 50/100/200/500 **luôn** · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-checkin/ui/prototype/rpt-checkin-prototype.html`

Align live: `http://localhost:9311/bao-cao/checkin` (`yarn start:std` **:9311** — packet `:9301/rpt-checkin` **không** dùng — GAP-PO-CHK-10).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/checkins` | `kind` `routeId` `from` `to` `q`/`search` `page` `pageSize` |
| GET | `/api/v1/report/checkins/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.checkin.read`.

SA: lookup Type A · query in-memory P1 seed 12 · read-model Patrol check-in **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-CHK-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer |
| GAP-DS-CHK-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell |
| GAP-DS-CHK-03 | Prefix **`api/v1/report/checkins`** (khớp GAP-PO-CHK-01) — **cấm** `api/v1/reports` |
| GAP-DS-CHK-04 | Config **FULL** P1 · Chart SoCai khi đã Xem + có dòng · In stub OK |
| GAP-DS-CHK-05 | Coverage = `points >= 3` |
| GAP-DS-CHK-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout · drill `/patrol?id=` |
| GAP-DS-CHK-07 | autoApprove OFF → Design **confirmed** (user Approve) · SA enqueue `task_b8d33090` |
| GAP-DS-CHK-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-CHK-09 | Dashboard KPI / map worklog **không** gộp slug này |
| GAP-DS-CHK-10 | mfeStdUrl **`http://localhost:9311/bao-cao/checkin`** |

## 8. Out of pack

CRUD patrol · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · KPI/map `rpt-bao-cao-cong` · master users thật.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `checkins` in-memory P1 + export CSV.
- Confirm coverage filter `points >= 3` + `PatrolId` drill.
- Roles sau Design = **pending** đến lượt.
- User Approve board → enqueue SA. **Cấm** nhảy TL/Dev/QA khi design chưa confirm.
- Repo BE+UI tick = user (không auto) trước Dev.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
