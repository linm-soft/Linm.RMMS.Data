# Design — rpt-tuan-kiem (Báo cáo tuần kiểm)

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-kiem` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-BTK-02) |
| Feature Kind | **E** · leaf `/bao-cao/tuan-kiem` · **không** CRUD form |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_5c57e047`) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tuan-kiem/ui/prototype/rpt-tuan-kiem-prototype.html` |
| prototype | `specs/rpt-tuan-kiem/ui/prototype/rpt-tuan-kiem-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/tuan-kiem` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tuan-kiem` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report/patrol-inspect` |
| domain | **Report** |
| prior · po | `confirmed` · `po/requirement.md` · `task_f58e9de2` · GAP-PO-BTK-01..12 |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/rpt-tuan-kiem-control-hint.md` · hash `sha256:rpt-tuan-kiem-context-20260816` |
| autoApprove | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp · SSOT live lệch — **không** regen) |
| updatedAt | `2026-08-16T22:35:00.000Z` |
| taskId | `task_5c57e047` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** reuse `patrol-log-inspect` / nhật ký sổ · **cấm** gộp tuần đường (`PatrolType=road`) · **cấm** copy CRUD `patrol`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-tuan-kiem.md` | Kind E leaf · API plural **stale** → Design/SA giữ singular `report/patrol-inspect` |
| CTX-02 | `docs/context/features/patrol.md` | parent list / `PatrolSession` — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu |
| DI-02 | `specs/_data-analy/features/rpt-tuan-kiem-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | CUC2 `road-route-seed.json` | 38 tuyến Type A · **cấm QL.22** |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + chart SoCai (modal). **Không** full demo clone. **Không** gộp `rpt-nhat-ky-tuan-kiem`.

Live MFE (`PatrolInspectReportPage`) Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput tuyến/trạng thái CI/NV · Date kỳ · Input tìm · **Xem** mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` luôn · Config `ReportDisplayConfigModal` FULL · chart SoCai. Design **re-review** control-map + prototype (SearchInput analog, **không** native `<select>`) — **không** đổi Kind E → Kind B.

Context Filter «công ty → QL → Km» / cây Company→QL→Km = **OUT P1** (GAP-PO-BTK-12 · entity không có field).

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (scope modal) · Config **FULL** (`ReportDisplayConfigModal` / `LinReportTableConfigModal` — **cấm** stub/`configHint`) · Excel trên filter cụm hoặc toolbar |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm · **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A P1** — Company→QL→Km **OUT** (GAP-PO-BTK-12) |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` (In dùng `window.print` sau modal) |
| View | grid + chart | Drill `/patrol?id={sessionId}` |
| Config Kind B | OUT | **Không** bắt `LinCatalogUiSchemaEditorModal` (GAP-PO-BTK-11) |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Báo cáo tuần kiểm | report | **A Header · B Toolbar+filter · C Grid · D Pagination** + SoCai modal | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-clipboard-check` + title **Báo cáo tuần kiểm** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**Trái (`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap GAP-FILTER-BAR / GAP-PO-BTK-09):**

Title cụm trái: **Bộ lọc**. Inputs cụm phải:

| key | Label | Control (Design chốt) | catalogKind / rule |
|-----|-------|------------------------|---------------------|
| routeId | Tuyến | `SearchInput` | **road-route** 38 CUC2 + empty=Tất cả · **cấm** free-text · **cấm QL.22** |
| status | Trạng thái CI | `SearchInput` | enum `in_progress` / `done` / `missed` / `offline` — **cấm** native Select |
| staffId | Nhân viên | `SearchInput` | nva / ttb / lvc / pmd P1 — **cấm** native Select |
| fromDate | Từ | `Date` | trên `PlannedDate` / `day` |
| toDate | Đến | `Date` | |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · NV · ghi chú |
| — | **Xem** | Button primary (`onSearch`) | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | **chưa Xem** → toast SSOT, **không** fetch · đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** `ReportChartModal` khi `viewed` + ≥1 dòng + config `showCharts` — catalog: số phiên theo tuyến (bar) · theo trạng thái |
| In | print | `LinReportPrintScopeModal` rồi `window.print` · stub OK nếu chưa print engine |
| Sửa config | `fa-cog` | **FULL** column prefs + chart/print/footer — **cấm** stub toast · **cấm** `LinListTableConfigModal` height-only |
| Xuất Excel | export | CSV UTF-8 BOM theo cột đang hiện · file `patrol-inspect.csv` · chưa Xem = toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi filter sau Xem → page=1 khi Xem lại.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo.

### Zone C — Grid

- `listTitle`: **Kết quả tuần kiểm**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo tuần kiểm.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — **cấm** Company / QL / Km riêng P1

**Grid columns** (PO §5)

| key | Label | Source | controlHint |
|-----|-------|--------|-------------|
| day | Ngày | `PatrolSession.PlannedDate` → `day` | Date |
| code | Mã phiên | `Code` | Text |
| route | Tuyến | `Route` | Text |
| userName | Nhân viên | `UserName` | Text |
| patrolType | Loại tuần | `PatrolType` (`inspect` = Tuần kiểm) | Text |
| checkInCount | Điểm CI | `CheckInCount` | Number |
| coveragePercent | Coverage % | `CoveragePercent` | Number |
| status | Trạng thái | `Status` | badge display |
| offlineQueued | Offline | `OfflineQueued` | Text Có/Không |
| note | Ghi chú | `Note` | Text |
| drill | Nguồn | `Id` → `sessionId` | Button «Mở phiên» → `/patrol?id={sessionId}` |

**Chart SoCai:** chỉ khi `viewed === true` và có ≥1 dòng. **Không** KPI 4 card · **không** map.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**.

## 3. Control-map (Design chốt — từ data-analy + PO §5)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Trạng thái CI

| value | label |
|-------|-------|
| `` (empty) | Tất cả trạng thái |
| `in_progress` | Đang tuần |
| `done` | Hoàn thành |
| `missed` | Bỏ sót |
| `offline` | Offline queue |

### Nhân viên (P1)

| value | label |
|-------|-------|
| `` (empty) | Tất cả nhân viên |
| `nva` | Nguyễn Văn A |
| `ttb` | Trần Thị B |
| `lvc` | Lê Văn C |
| `pmd` | Phạm Minh D |

### Tuyến (GAP-PO-BTK-04)

- Lookup UI = 38 CUC2 + «Tất cả» (empty) · Integration Type A `GET api/v1/integration/road-routes/search`.
- Seed prototype: QL.1 / QL.15 / QL.217 / QL.7 / QL.8 / QL.9 / QL.10 / HCM / CT.001 **OK**.
- **Cấm** invent `QL.22` / `ĐT.*` ngoài CUC2.

## 4. Interactions

1. Mở `/bao-cao/tuan-kiem` → empty hint, **không** auto-load lưới.
2. Chọn tuyến/trạng thái/NV/từ–đến/tìm → **Xem** → GET `api/v1/report/patrol-inspect`.
3. Làm mới khi `!viewed` → toast, **không** fetch.
4. Xuất Excel → GET `api/v1/report/patrol-inspect/export` → `patrol-inspect.csv` UTF-8 BOM theo cột hiện.
5. Drill dòng → `/patrol?id={sessionId}`.
6. Chart / Print / Config theo §2 toolbar.
7. Đổi page/pageSize sau viewed → refetch cùng applied filters.
8. Enter trên ô tìm = **Xem**.
9. Lưới **chỉ** `PatrolType=inspect` — seed road **excluded**.

Auth JWT · tenant · perm `report.tuan-kiem.read` (FE gate ON · BE stub OK P1).

## 5. Prototype

`specs/rpt-tuan-kiem/ui/prototype/rpt-tuan-kiem-prototype.html` — content-only A–D · title trái / input cụm phải · SearchInput combobox (không native Select filter) · Input tìm · empty đến khi Xem · **14** dòng mẫu `PatrolSession` `inspect` CUC2 (+ 1 `road` **không** vào lưới) · cột Loại tuần = Tuần kiểm · pagination 50/100/200/500 luôn · SoCai modal analog · Config FULL analog · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-tuan-kiem/ui/prototype/rpt-tuan-kiem-prototype.html`

Align live: `http://localhost:9311/bao-cao/tuan-kiem` (`yarn start:std` **:9311**).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/patrol-inspect` | `routeId` `status` `staffId` `from` `to` `q` `page` `pageSize` |
| GET | `/api/v1/report/patrol-inspect/export` | CSV UTF-8 BOM |
| GET | `/api/v1/integration/road-routes/search` | Type A — **không** copy catalog vào Report |

Perm: `report.tuan-kiem.read`.

SA: lookup Type A tuyến · query in-memory P1 (14 CUC2 `inspect`) · read-model `PatrolSession` **P2** — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports` · **cấm** `patrol-log-inspect`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-BTK-01 | Prototype trước copy tuần đường (`type=road`, filter `!== road`, Excel `patrol-road`) — **đóng** ở prototype này (14 `inspect` · 1 road excluded · SearchInput analog · SoCai modal · Config FULL analog · Excel `patrol-inspect`). |
| GAP-DS-BTK-02 | Zone D **luôn** `LinCatalogListPagination` — **giữ** |
| GAP-DS-BTK-03 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell / `LinCatalogUiSchemaEditorModal` bắt buộc |
| GAP-DS-BTK-04 | Prefix **`api/v1/report/patrol-inspect`** (khớp GAP-PO-BTK-01) — **đóng** context plural `reports` |
| GAP-DS-BTK-05 | Config **FULL** P1 · Chart SoCai khi có data · In = print-scope modal · **cấm** `configHint` |
| GAP-DS-BTK-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout |
| GAP-DS-BTK-07 | autoApprove **ON** → Design **tự confirm** · enqueue SA cùng feature · **không** chạy SA trong `roleOnly=design` |
| GAP-DS-BTK-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-BTK-09 | Dashboard KPI **không** gộp slug này · **không** gộp nhật ký tuần kiểm / tuần đường |
| GAP-DS-BTK-10 | Làm mới `!viewed` = toast, **không** apply+view |
| GAP-DS-BTK-11 | Seed **14** CUC2 `inspect` · **cấm QL.22** · 1 road excluded · P1 in-memory OK |
| GAP-DS-BTK-12 | Tree Company→QL→Km **OUT P1** — **cấm** cột Company/QL/Km trên lưới |

## 8. Out of pack

CRUD `patrol` / session trên slug này · Nhật ký sổ `InspectionLogBook` · reuse `patrol-log-inspect` · gộp tuần đường (`road`) · cột Company/QL/Km P1 · Dashboard KPI gộp · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · Leaflet · hub family trên leaf này.

## 9. Handoff SA

- Confirm lookup road-route Type A + query `patrol-inspect` in-memory P1 + export CSV.
- Confirm row fields gồm `sessionId` / `patrolType=inspect` cho drill `/patrol?id=`.
- Roles sau Design = **pending** đến lượt (`sa` enqueue).
- **Cấm** nhảy TL/Dev/QA trong task này.
- Repo BE+UI tick = user (không auto) trước Dev.
- Build gate: Design **không** sửa MFE/BE → `yarn build` / `dotnet build` **N/A** role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
