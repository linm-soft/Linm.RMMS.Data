# PO — rpt-checkin (BC Check-in)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + DOMAIN-MAP slug `rpt-checkin` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/checkin` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_01a6ebc0` · `/agent-qldb-workflow` · `roleOnly=po` · chain ON · autoApprove **OFF** |
| autoApprove | **OFF** — Design/SA/Review **await_confirm** trên board (user Approve). Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-checkin-control-hint.md`** (handoff path `specs/_data-analy/clusters/rpt-checkin.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:rpt-checkin-context-20260815` · **no Excel cluster** · sourceKind=`feature_context` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-15T22:20:00.000Z` |
| taskId | `task_01a6ebc0` |
| priorChain | `task_2a9cab80` (full pipeline autoApprove ON — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `patrol`) |

## 1. Goal

Trang **BC Check-in** — Kind **E** leaf tách khỏi hub `reports` (`/bao-cao`). Filter loại · tuyến · từ/đến · search → **Xem** mới load lưới. **Xuất Excel** CSV UTF-8 BOM. Config cột FULL. Chart SoCai khi đã Xem + có dòng. Drill dòng về MFE Patrol `/patrol?id=`. Align MFE `Linm.Web.RMMS.Report` · BE `D:/AI-QLBD/Linm.RMMS.WebService` domain **Report** · prefix **`api/v1/report`**.

Persona: Hạt trưởng · Khu QLĐB · lãnh đạo.

**Không** CRUD. Parent list pack `patrol` giữ CRUD trên Field. **Cấm** Thêm mới Zone A. **Cấm** `window.alert`/`confirm`. Chrome GOVOne **OUT**.

Khác `rpt-bao-cao-cong`: đây là lưới coverage/điểm/first→last + Excel; Báo cáo công = KPI 4 + map + InZone — **không** gộp map/KPI worklog vào slug này.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_2a9cab80`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ chart SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `CheckinReportPage` `/bao-cao/checkin` · 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · SearchInput loại/tuyến · Date · Input search · Excel · Config FULL · chart/print · drill patrol | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form |
| API | `GET api/v1/report/checkins` + `/checkins/export` · in-memory P1 seed 12 CUC2 · `PatrolId` · coverage `points >= 3` | **Không** đổi prefix · SA confirm lookup Type A tuyến Integration · query read-model Patrol check-in P2 nếu nặng — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/reports/checkins` | **Bỏ** — GAP-PO-CHK-01 chốt `report/checkins` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report` |
| Chart | SoCai khi đã Xem + có dòng | **Giữ P1** — không KPI/map worklog |

## 3. DoD (đo được)

1. **Xem** mới load lưới · đổi filter → page=1 · empty hint khi chưa Xem.
2. Zone A: title «BC Check-in» — **cấm** Thêm mới trên A.
3. Zone B: SearchInput loại (`daily`/`patrol`/`worklog`/`coverage`) · SearchInput tuyến · Date từ/đến · Input tìm (cán bộ · tuyến) · toolbar Xem · Làm mới · In · Config FULL (`LinReportTableConfigModal` — **cấm** stub/configHint) · Xuất Excel.
4. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · cán bộ · tuyến · ngày · điểm · coverage · first→last · drill `patrolId` → `/patrol?id=`.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Chart SoCai khi đã Xem + có dòng (không gộp KPI/map `rpt-bao-cao-cong`).
7. Excel: CSV UTF-8 BOM theo cột đang hiện.
8. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
9. Live: title + toolbar + grid/empty **không** blank/title-clip.
10. Dev gate: FE `yarn build` (+ `yarn typecheck` nếu có) PASS · BE `dotnet build` PASS khi đụng API.
11. **Cấm** `ERP.*` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural).
12. Coverage kind filter: `points >= 3` (GAP-PO-CHK-03).

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-checkin.md` | feature Kind E |
| CTX-02 | `docs/context/features/patrol.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-checkin.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-checkin-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/checkin` · `http://localhost:9311/bao-cao/checkin` | UI (start:std **:9311** — packet :9301 **không** dùng) |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| reportKind | Loại | `SearchInput` | enum `daily` / `patrol` / `worklog` / `coverage` — **cấm** native Select |
| fromDate | Từ ngày | `Date` | |
| toDate | Đến ngày | `Date` | |
| routeId | Tuyến | `SearchInput` | **road-route** · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| qSearch | Tìm kiếm | `Input` | cán bộ · tuyến (text) |

Grid (readonly): cán bộ · tuyến · ngày · điểm · coverage · first→last · drill. **Không** editor.

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/checkins` |
| Excel | `GET api/v1/report/checkins/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |

Perm: `report.checkin.read`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-CHK-01 | API **`api/v1/report/checkins`** (+ `/export`) — **đóng** context `GET /api/v1/reports/checkins`. **Cấm** `api/v1/reports`. |
| GAP-PO-CHK-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/checkin` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** KPI/map worklog. |
| GAP-PO-CHK-03 | Coverage kind = `points >= 3`. |
| GAP-PO-CHK-04 | Seed **12** dòng CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-CHK-05 | Config cột **FULL** P1 — **cấm** stub toast. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. In stub OK nếu chưa print engine. |
| GAP-PO-CHK-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill sang Patrol `/patrol?id=`. |
| GAP-PO-CHK-07 | Read-model EF join Patrol check-in **P2** — P1 in-memory seed chấp nhận (review prior). |
| GAP-PO-CHK-08 | Dashboard KPI **không** gộp slug này. |
| GAP-PO-CHK-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-CHK-10 | mfeStdUrl **`http://localhost:9311/bao-cao/checkin`** — packet `localhost:9301/rpt-checkin` **không** dùng. |

## 7. Out of pack

CRUD patrol · GOVOne chrome · warehouse schema · parent JSON · Kind B nested CatalogListShell · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · KPI/map `rpt-bao-cao-cong` · master users thật.

## 8. Handoff Design

- Prototype **content-only** zones **A–D** (+ chart SoCai report shell; `list-shell-prototype.md` analog) · **skip** note/sidebar/menu/chrome demo · **không** full demo clone · + `reviewUrl`.
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
| generatedAt | 2026-08-15T22:20:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-checkin-context-20260815 |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
