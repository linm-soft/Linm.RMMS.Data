# Design — rpt-cong-van (Công văn đi — đến)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `design` · `/agent-design` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-CV-02) |
| Feature Kind | **E** · leaf `/bao-cao/cong-van` · **không** CRUD form |
| status | `done` |
| design_confirm | **pending** (`autoApprove=OFF` → user Approve board — **không** auto) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-cong-van/ui/prototype/rpt-cong-van-prototype.html` |
| prototype | `specs/rpt-cong-van/ui/prototype/rpt-cong-van-prototype.html` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | `/bao-cao/cong-van` |
| mfeStdUrl | `http://localhost:9311/bao-cao/cong-van` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/report` |
| domain | **Report** |
| prior · po | `confirmed`/`done` · `po/requirement.md` · `task_63988352` |
| prior · data_analy | `done` · `specs/_data-analy/features/rpt-cong-van-control-hint.md` · hash `sha256:rpt-cong-van-context-20260815` |
| autoApprove | **OFF** |
| chain | **ON** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + data-analy stamp) |
| updatedAt | `2026-08-15T22:55:00.000Z` |
| taskId | `task_f917aa5f` |

**Cấm ERP.*** · **cấm** `ERP.Service.*` · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** prefix `api/v1/reports` (plural) · **cấm** copy CRUD `ops`.

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/rpt-cong-van.md` | Kind E leaf · filter kỳ · chiều · đơn vị · Xem · lưới · drill · Excel |
| CTX-02 | parent list pack `ops` | **cấm** copy CRUD vào leaf |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf (GAP-F-RPT-LEAF-01 / GAP-PO-CV-02) |
| DEM-01 | — | **N/A** leaf demo — prototype này |
| DEM-02 | hub `bao-cao/reports.html` | **skip** chrome / sidebar / menu / note |
| DI-02 | `specs/_data-analy/features/rpt-cong-van-control-hint.md` | controlHint SSOT · **done** |
| DI-03 | org-unit Chi cục II.* | **cấm QL.22** trên seed tuyến (N/A filter tuyến P1) |

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Prototype **content-only** zones **A–D** + chart SoCai (report shell). **Không** KPI dashboard gộp slug. **Không** full demo clone.

Live MFE (`OfficialDocsReportPage`) đã Kind E: 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` + SearchInput chiều/đơn vị · Date · Input tìm · Xem mới load · Excel · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Config FULL · chart/print · drill Ops. Design **re-review** control-map + prototype khớp PO query `direction` `orgUnitId` `q` — **không** đổi Kind E → Kind B.

## 1. Kind + UI pattern (UI-Ux P1–7)

| # | Rule | Design chốt |
|---|------|-------------|
| 1 | 1 shell | **1×** `LinPageLayout` kind=`report` — **cấm** nested `CatalogListShell` |
| 2 | Grid | `LinCatalogDataGrid` `resizable: true` (**DEFAULT + kéo cột ON**) |
| 3 | Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw `<table>` production |
| 4 | Flex + skeleton | `.page` flex column · `skeletonRows={8}` · **cấm** blank body / title-clip |
| 5 | Toolbar | `reportToolbar`: Làm mới · Biểu đồ (SoCai khi đã Xem + có dòng) · In (stub OK P1) · Config **FULL** (`LinReportTableConfigModal` — **cấm** stub/configHint toast) |
| 6 | list_parity | Filter **SearchInput** + **Date** + **Input** tìm — **cấm** native `<select>` MFE |
| 7 | tree_master | **N/A** |
| Form | OUT | **cấm** Thêm mới Zone A · **cấm** Resource/Slideout/View=`readOnly` giả form |
| Confirm | toast | `dispatchAppToast` — **cấm** `window.alert` / `window.confirm` |
| View | grid + chart | Drill sang Ops `/ops?id={docId}` |

## 2. Screens / zones A–D

| Screen | FormMode | Zones | Notes |
|--------|----------|-------|-------|
| Công văn đi — đến | report | **A Header · B Toolbar+filter · C Grid (+ chart modal) · D Pagination** | 1 page leaf |
| Form CRUD | — | — | **OUT** |

### Zone A — Header

- Icon `fas fa-envelope-open-text` + title **Công văn đi — đến** (22px, không clip)
- Badge tuỳ chọn Kind E — **không** bắt buộc
- **Cấm** Thêm mới / Tạo mới trên A
- **Cấm** clone demo topnav / user menu / theme / GOVOne chrome

### Zone B — Filter + reportToolbar

**`LinErpListFilterBar` · title trái · input + tìm cụm phải · 1 hàng wrap (GAP-FILTER-BAR / GAP-PO-CV):**

| key | Label | Control (Design chốt) | catalogKind |
|-----|-------|------------------------|-------------|
| direction | Chiều | `SearchInput` | enum `di` / `den` / empty=Tất cả — **cấm** native Select |
| orgUnitId | Đơn vị | `SearchInput` | **org-unit** Chi cục II.* + Cục ĐBVN + empty=Tất cả · **cấm** free-text · **cấm** filter tuyến / QL.22 |
| fromDate | Từ ngày | `Date` | kỳ |
| toDate | Đến ngày | `Date` | kỳ |
| qSearch | Tìm kiếm | `Input` | số CV · trích yếu |
| — | **Xem** | Button primary | apply draft → page=1 → load; **chưa Xem** = empty hint · **không** auto-fetch khi đổi draft |
| — | **Xuất Excel** | Button leading | CSV UTF-8 BOM theo cột đang hiện · file `official-docs.csv` · **sau khi có lưới** (đã Xem) |

**Phải / `reportToolbar` (Kind E):**

| Action | Icon | P1 |
|--------|------|-----|
| Làm mới | `fa-sync-alt` | chưa Xem → apply+view; đã Xem → refetch applied |
| Biểu đồ | chart | **SoCai** khi `viewed` + có dòng — catalog: số CV theo ngày (line) · theo chiều đi/đến (bar) · theo đơn vị (donut) |
| In | print | stub toast OK nếu chưa print engine (GAP-PO-CV-06) · không `window.confirm` |
| Sửa config | `fa-cog` | **FULL** column prefs — **cấm** stub toast |

Đổi filter draft **không** tự fetch đến **Xem**. Đổi page/pageSize sau viewed → refetch applied. Đổi filter rồi Xem → reset page=1.

**Cấm trên B:** Hồ sơ · Đăng xuất · Thêm mới · Áp dụng lọc / Xóa lọc demo · native `<select>`.

### Zone C — Grid

- `listTitle`: **Kết quả báo cáo công văn**
- Help: chưa Xem — «Chưa xem — nhấn «Xem» để tải báo cáo công văn.» · đã Xem 0 dòng — «Không có dòng phù hợp bộ lọc.»
- Flex + skeleton 8 hàng khi fetch
- STT do grid · **không** cột CRUD ⋯ / Thêm
- Kéo cột default ON
- Cột readonly — **không** editor

**Grid columns**

| key | Label | controlHint |
|-----|-------|-------------|
| number | Số CV | Text |
| day | Ngày | Date (ISO day) |
| subject | Trích yếu | Text |
| directionLabel | Chiều | Text (Đi / Đến) |
| orgUnit | Đơn vị | Text |
| drill | Nguồn | Button «Mở công văn» → `/ops?id={docId}` (top window) |

**Không** KPI dashboard · **không** map · **không** filter tuyến trên C.

### Zone D — Pagination

`LinCatalogListPagination`: `Tổng: N · Trang x/y` · Hiển thị **50 / 100 / 200 / 500** · FA pager 32×32. `totalCount=0` khi chưa Xem. **Luôn render**. Prototype analog size-bar = visual only — production **cấm** pageSizeBar component.

## 3. Control-map (Design chốt — từ data-analy + PO §4)

**Cấm** Dev đổi SearchInput → Select. Prototype combobox analog SearchInput.

### Chiều (direction)

| value | label |
|-------|-------|
| `` (empty) | Tất cả chiều |
| `di` | Công văn đi |
| `den` | Công văn đến |

### Đơn vị (orgUnitId)

- Lookup UI = org-unit P1 seed: Chi cục QLĐB II.1 / II.2 / II.3 · Cục Đường bộ Việt Nam + «Tất cả».
- **Cấm** invent tuyến `QL.22` / filter `road-route` trên leaf này (GAP-PO out of scope).
- Type A Integration org-unit **P2** (SA).

## 4. Interactions

1. Mở `/bao-cao/cong-van` → empty hint, **không** auto-load lưới.
2. Chọn chiều/đơn vị/từ–đến/q → **Xem** → GET `api/v1/report/official-docs`.
3. Xuất Excel (đã Xem) → GET `api/v1/report/official-docs/export` → `official-docs.csv` UTF-8 BOM theo cột hiện.
4. Drill dòng → Ops `/ops?id=`.
5. Chart SoCai khi đã Xem + có dòng · Config FULL · In stub.
6. Đổi page/pageSize sau viewed → refetch cùng applied filters.

## 5. Prototype

`specs/rpt-cong-van/ui/prototype/rpt-cong-van-prototype.html` — content-only A–D + SoCai chart modal + Config cột FULL · SearchInput combobox (không native Select filter) · empty đến khi Xem · **12** dòng OfficialDocument (Chi cục II.* · Cục ĐBVN · đi/đến) · pagination 50/100/200/500 **luôn** · **skip** chrome.

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-cong-van/ui/prototype/rpt-cong-van-prototype.html`

Align live: `http://localhost:9311/bao-cao/cong-van` (`yarn start:std` **:9311** — packet `:9301/rpt-cong-van` **không** dùng — GAP-PO-CV-03).

## 6. API (handoff SA — Design không chốt contract mới)

| Method | Path | Notes |
|--------|------|-------|
| GET | `/api/v1/report/official-docs` | query `from` `to` `direction` `orgUnitId` `q` `page` `pageSize` |
| GET | `/api/v1/report/official-docs/export` | CSV UTF-8 BOM |
| GET | org-unit search | Type A P2 — P1 seed in-memory · **không** copy catalog vào Report |

Context `api/v1/reports/official-docs` **stale**. Alias query `type`/`search` **không** dùng — khớp PO `direction`/`q`.

Perm: `report.cong-van.read`. JWT · tenant.

SA: lookup org-unit · query in-memory P1 seed 8–15 · entity OfficialDocument **P2** EF — **cấm** warehouse schema bắt buộc P1 · **cấm** `api/v1/reports`.

## 7. GAP Design

| ID | Decision |
|----|----------|
| GAP-DS-CV-01 | Zone D **luôn** `LinCatalogListPagination` — **cấm** ẩn footer |
| GAP-DS-CV-02 | Pack **report** / Kind E — **không** Kind B CRUD / nested CatalogListShell |
| GAP-DS-CV-03 | Prefix **`api/v1/report/official-docs`** (khớp GAP-PO-CV-01) — **cấm** `api/v1/reports` |
| GAP-DS-CV-04 | Query **`direction` `orgUnitId` `q`** — đóng alias `type`/`search`/`routeId` trên leaf này |
| GAP-DS-CV-05 | Config **FULL** P1 · Chart SoCai khi đã Xem + có dòng · In stub OK |
| GAP-DS-CV-06 | Form OUT · cấm Thêm mới A · cấm Resource/Slideout · drill `/ops?id=` |
| GAP-DS-CV-07 | autoApprove OFF → Design **await_confirm** · **không** auto-confirm · SA **pending** đến user Approve board |
| GAP-DS-CV-08 | controlHint SearchInput giữ nguyên — **cấm** đổi Select |
| GAP-DS-CV-09 | Dashboard KPI **không** gộp slug này · **không** filter tuyến P1 |
| GAP-DS-CV-10 | mfeStdUrl **`http://localhost:9311/bao-cao/cong-van`** |

## 8. Out of pack

CRUD công văn · GOVOne chrome · warehouse schema · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · filter `road-route` · invent QL.22 · KPI hub `reports` · master org-unit thật P1.

## 9. Handoff SA

- Confirm lookup org-unit P1 seed + query `official-docs` in-memory 8–15 + export CSV theo cột hiện.
- Confirm query names `from` `to` `direction` `orgUnitId` `q` + `docId` drill Ops.
- Confirm P1 in-memory · EF OfficialDocument **P2**.
- Roles sau Design = **pending** đến lượt.
- User Approve board → enqueue SA. **Cấm** nhảy TL/Dev/QA khi design chưa confirm.
- Repo BE+UI tick = user (không auto) trước Dev.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
