# PO — rpt-bao-cao-cong (Báo cáo công)

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP slug `rpt-bao-cao-cong` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/bao-cao-cong` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_85aae5bd` · `/agent-qldb-workflow` · `roleOnly=po` · chain ON · autoApprove **OFF** |
| autoApprove | **OFF** — Design/SA/Review **await_confirm** trên board (user Approve). Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-bao-cao-cong-control-hint.md`** (handoff path `specs/_data-analy/clusters/rpt-bao-cao-cong.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab` · **no Excel cluster** · sourceKind=`feature_context` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-15T14:45:00.000Z` |
| taskId | `task_85aae5bd` |
| priorChain | `task_36d8f152` (full pipeline autoApprove ON — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `attendance`) |

## 1. Goal

Trang **Báo cáo công** — Kind **E** leaf tách khỏi hub `reports` (`/bao-cao`). Filter kỳ tuần/tháng · tuyến · NV · zone · từ/đến → **Xem** mới load lưới + KPI 4 + map điểm. **Xuất Excel** CSV UTF-8 BOM. Config cột FULL. Drill dòng về MFE Field `/patrol/attendance`. Align MFE `Linm.Web.RMMS.Report` · BE `D:/AI-QLBD/Linm.RMMS.WebService` domain **Report** · prefix **`api/v1/report`**.

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo.

**Không** CRUD. Parent list pack `attendance` giữ CRUD trên Field. **Cấm** Thêm mới Zone A. **Cấm** `window.alert`/`confirm`. Chrome GOVOne **OUT**.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/attendance/*` (context cũ) · **cấm** parent JSON.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_36d8f152`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ KPI/map SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `WorklogReportPage` `/bao-cao/bao-cao-cong` · 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · SearchInput kỳ/tuyến/NV/zone · Date · Excel · Config FULL · KPI 4 · SVG map · drill attendance | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form |
| API | `GET api/v1/report/worklogs` + `/worklogs/export` · in-memory P1 · lookup Integration road-routes | **Không** đổi prefix · SA confirm lookup Type A · query read-model AttendanceLog P2 nếu nặng — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/attendance/report` | **Bỏ** — GAP-PO-BCC-01 chốt `report/worklogs` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report` |
| Map | P1 SVG lat/lng (không Leaflet dep MFE) | **Giữ SVG P1** — Leaflet = P2 |

## 3. DoD (đo được)

1. **Xem** mới load lưới · đổi filter → page=1 · empty hint khi chưa Xem.
2. Zone A: title «Báo cáo công» — **cấm** Thêm mới trên A.
3. Zone B: SearchInput kỳ/tuyến/NV/zone · Date từ/đến · toolbar Xem · Làm mới · In · Config FULL (`LinReportTableConfigModal` — **cấm** stub/configHint) · Xuất Excel.
4. Zone C: `LinCatalogDataGrid` kéo cột default ON · summary + điểm · InZone% · first→last · drill `attendanceId` → `/patrol/attendance`.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table.
6. KPI 4: số ca · InZone% · lệch zone · điểm TB.
7. Map P1: SVG lat/lng (không thêm Leaflet dep).
8. Excel: CSV UTF-8 BOM theo cột đang hiện.
9. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
10. Live: title + toolbar + grid/empty **không** blank/title-clip.
11. Dev gate: FE `yarn build` (+ `yarn typecheck` nếu có) PASS · BE `dotnet build` PASS khi đụng API.
12. **Cấm** `ERP.*` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/attendance/*`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-bao-cao-cong.md` | feature Kind E |
| CTX-02 | `docs/context/features/attendance.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-bao-cao-cong.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-bao-cao-cong-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/bao-cao-cong` · `http://localhost:9311/bao-cao/bao-cao-cong` | UI (start:std **:9311** — packet :9301 **không** dùng) |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| periodMode | Kỳ | `SearchInput` | enum `week`/`month` |
| fromDate | Từ ngày | `Date` | |
| toDate | Đến ngày | `Date` | |
| routeId | Tuyến | `SearchInput` | **road-route** · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| staffId | Nhân viên | `SearchInput` | mock enum P1 (không master users CUC2) |
| zone | Zone | `SearchInput` | enum `all` / `out` |

Grid (readonly): summary + điểm · InZone% · first→last · drill. **Không** editor. Display enum InZone trên lưới — không form field.

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/worklogs` |
| Excel | `GET api/v1/report/worklogs/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm: `report.bao-cao-cong.read`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-BCC-01 | API **`api/v1/report/worklogs`** (+ `/export`) — **đóng** context `GET /api/v1/attendance/report`. **Cấm** `api/v1/attendance/*`. |
| GAP-PO-BCC-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. |
| GAP-PO-BCC-03 | Leaf slug + route `/bao-cao/bao-cao-cong` tách hub `reports` (GAP-F-RPT-LEAF-01). Hub giữ 3 family; trang này **không** gộp 3 family hub. |
| GAP-PO-BCC-04 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill sang Field attendance. |
| GAP-PO-BCC-05 | Map **SVG P1** · Leaflet **P2** (không dep MFE). |
| GAP-PO-BCC-06 | Seed tuyến **CUC2 38** · **cấm** invent `QL.22` / `ĐT.*`. Prior seed QL.1 / QL.15 / QL.217 OK nếu nằm trong 38. |
| GAP-PO-BCC-07 | Config cột **FULL** P1 — **cấm** stub toast. Chart/In: SoCai nếu KPI; In stub OK nếu chưa print engine. |
| GAP-PO-BCC-08 | Read-model EF join AttendanceLog **P2** — P1 in-memory seed chấp nhận (review prior). |
| GAP-PO-BCC-09 | Dashboard KPI **không** gộp slug này. |
| GAP-PO-BCC-10 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |

## 7. Out of pack

CRUD attendance · GOVOne chrome · Leaflet P1 · warehouse schema · parent JSON · Kind B nested CatalogListShell · `ERP.*` · `api/v1/rmms/*` · invent tuyến ngoài CUC2 38 · master users thật.

## 8. Handoff Design

- Prototype **content-only** zones **A–D** (+ KPI/map report shell; `list-shell-prototype.md` analog) · **skip** note/sidebar/menu/chrome demo · **không** full demo clone · + `reviewUrl`.
- controlHint bảng §5 → Design Control · **không** đổi SearchInput → Select.
- autoApprove **OFF** → Design xong **dừng `await_confirm`** · user Approve board mới enqueue SA.
- Roles sau PO = **pending** đến lượt. **Cấm** nhảy QA khi Design/SA/TL/Dev còn pending.
- Repo BE+UI tick = user (không auto) trước Dev.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-15T14:45:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
