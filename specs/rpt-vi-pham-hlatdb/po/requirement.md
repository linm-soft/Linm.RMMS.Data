# PO — rpt-vi-pham-hlatdb (Vi phạm HLATĐB)

| Field | Value |
|-------|-------|
| feature | `rpt-vi-pham-hlatdb` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo feature context + data-analy + STATUS `packKind=report` + slug `rpt-*` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form hay `LinCatalogUiSchemaEditorModal`. |
| Feature Kind | **E** · leaf `/bao-cao/vi-pham-hlatdb` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_ab8fa516` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm board. |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed` · artifact **`specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md`** (handoff path `specs/_data-analy/clusters/rpt-vi-pham-hlatdb.md` **không tồn tại** — dùng control-hint SSOT) · contentHash `sha256:rpt-vi-pham-hlatdb-context-20260816` · sourceKind=`feature_context` · **no Excel** |
| sourceFeature | `csdl-so-sach` |
| sourceFormReady | **yes** |
| sourceTables | `RowViolation` (`rmms_csdl_catalog_records` kind `row-violations` · field typed CSDL §3.6) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T16:55:00.000Z` |
| taskId | `task_ab8fa516` |
| priorChain | `task_24fb0ec1` (full pipeline — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `RowViolation`) |

## 1. Goal

Trang **Vi phạm HLATĐB** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tab · tuyến · kỳ · loại/TT vi phạm · tìm** → bấm **Xem** mới load lưới. Hai tab: **thống kê chi tiết** (`detail`) · **tổng hợp theo tuyến** (`summary`). Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về CSDL sổ 6 `/csdl-so-sach?kind=row-violations&id=`. **Không** CRUD `RowViolation` trên slug này.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/vi-pham-hlatdb` · mfeStdUrl `http://localhost:9311/bao-cao/vi-pham-hlatdb` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `csdl-so-sach` giữ CRUD sổ 6. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**. Dashboard KPI **không** gộp slug này.

## 2. Current → New (edit_page)

| Layer | Current (live / pipeline `task_24fb0ec1`) | New (PO chốt `task_ab8fa516`) |
|-------|-------------------------------------------|-------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-vi-pham-hlatdb-prototype.html` | Design **re-review** content-only A–D + 2 tab + chart SoCai + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `RowViolationReportPage` · `/bao-cao/vi-pham-hlatdb` · `pageId` `rpt-vi-pham-hlatdb` · testid `rmms-row-violation-report` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tab/tuyến/TT · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel UTF-8 BOM `row-violations.csv` · `ReportDisplayConfigModal` FULL · chart/print · drill `/csdl-so-sach?kind=row-violations&id=` · `RowViolationFilterBar` | **Giữ** Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` làm trang này · **cấm** Kind B `LinCatalogUiSchemaEditorModal` |
| API context | feature context từng ghi plural `reports/row-violations` **stale** | **`GET api/v1/report/row-violations`** + `/export` (đã có Dev trước — SA/Dev **không** đổi plural) · query `tab` `status` `routeId` `from` `to` `q` `page` `pageSize` |
| CSDL | `RowViolation` typed §3.6 · P1 in-memory Report seed 12 dòng CUC2 | P1 giữ seed map entity; P2 query EF read-model — **không** bảng báo cáo riêng P1 · **không** migration P1 |
| CRUD nguồn | CSDL sổ 6 `row-violations` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | Slug `rpt-vi-pham-hlatdb` → Report | SA giữ `rpt-vi-pham-hlatdb` → Report · `api/v1/report` |

## 3. Personas / journeys

1. Hạt trưởng chọn tab chi tiết + tuyến + kỳ + TT VP → **Xem** → lưới ngày / tuyến / km / địa bàn / TT / tổ chức / BB / hiện trạng / ĐV XN.
2. Khu QLĐB chọn tab tổng hợp theo tuyến → lưới tuyến · số VP · tồn đọng · ngày gần nhất.
3. Lãnh đạo Config cột FULL rồi In / Excel — không stub config.
4. Drill một dòng → `/csdl-so-sach?kind=row-violations&id={id}`.

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/row-violations`. Chưa Xem: empty hint «Chưa xem — nhấn «Xem»…» (không native alert). Làm mới = apply nếu `!viewed`, else re-fetch.
2. Zone A: title «Vi phạm HLATĐB» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tab** (`ROW_VIOLATION_TAB_LOOKUP`) · SearchInput **tuyến** (CUC2, **cấm QL.22**) · SearchInput **TT VP** (`phat-hien`/`lap-bb`/`dang-xu-ly`/`da-xu-ly`/`ton-dong`) · Date **từ/đến** trên `At` · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột typed (không Col*) · skeleton 8 · drill.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM `row-violations.csv` · `canExport` chỉ khi đã Xem · subset cột đang hiện.
8. 1× `LinPageLayout` kind=`report` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.vi-pham-hlatdb.read` (P1 stub chấp nhận).
10. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-vi-pham-hlatdb.md` | feature Kind E — API plural `reports` **stale** |
| CTX-02 | `docs/context/features/csdl-so-sach.md` + `11-CSDL-SO-SACH-DATABASE-API.md` §3.6 | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-vi-pham-hlatdb.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-vi-pham-hlatdb-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/vi-pham-hlatdb` · `http://localhost:9311/bao-cao/vi-pham-hlatdb` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 6. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| tab | Tab | `SearchInput` | `detail` Thống kê chi tiết / `summary` Tổng hợp theo tuyến · **cấm** native Select |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| status | Loại / TT vi phạm | `SearchInput` | `phat-hien` / `lap-bb` / `dang-xu-ly` / `da-xu-ly` / `ton-dong` / empty=Tất cả |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `At` (`day`) |
| qSearch | Tìm kiếm | `Input` | tuyến · km · địa bàn · tổ chức · hiện trạng · query **`q`** |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/row-violations?tab=&status=&routeId=&from=&to=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/row-violations/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| tab / TT | enum seed FE `ROW_VIOLATION_TAB_LOOKUP` / `ROW_VIOLATION_STATUS_LOOKUP` P1 |

Perm: `report.vi-pham-hlatdb.read`. Context plural `GET /api/v1/reports/row-violations` **stale** → singular DOMAIN-MAP.

## 7. Grid ← form nguồn (cấm Col1–Col3)

**Tab `detail` (thống kê chi tiết)**

| Grid column | Source field | DTO live | Table |
|-------------|--------------|----------|-------|
| Ngày | `At` | `day` / `at` | `RowViolation` |
| Tuyến | `RouteId` | `route` | same |
| Km | `StationKm` | `stationKm` | same |
| Địa bàn | `AdminArea` | `adminArea` | same |
| TT / loại VP | `ViolationStatus` | `statusLabel` / `violationStatus` | same |
| Tổ chức | `OrgName` | `orgName` | same |
| BB hạt | `MinutesDepot` | `minutesDepot` | same |
| BB xã | `MinutesCommune` | `minutesCommune` | same |
| BB hành chính | `MinutesAdmin` | `minutesAdmin` | same |
| Hiện trạng | `CurrentState` | `currentState` | same |
| Đơn vị xác nhận | `UnitConfirm` | `unitConfirm` | same |
| drill | id sổ VP | `violationId` / `id` | `/csdl-so-sach?kind=row-violations&id=` |

**Tab `summary` (tổng hợp theo tuyến)** — aggregate cùng nguồn: tuyến · số VP (`ticketCount`) · tồn đọng (`outstandingCount` · `ViolationStatus=ton-dong`) · ngày gần nhất (`At`/`day`) · địa bàn · drill.

Seed P1: **8–15** dòng (implement hiện **12**) map domain RowViolation. Không CRUD.

## 8. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 |
| AC-G-03 | Drill dòng → `/csdl-so-sach?kind=row-violations&id={id}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema editor |
| AC-G-09 | Hai tab `detail` \| `summary` — **cấm** mix CRUD sổ 6 trên leaf |
| AC-G-10 | Query `q` + `tab` trên API Report — **cấm** plural `reports` |

## 9. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-HLATDB-01 | API **`api/v1/report/row-violations`** (+ `/export`) — **đóng** context `GET /api/v1/reports/row-violations`. **Cấm** `api/v1/reports`. Query `q` (không đổi `search`). |
| GAP-PO-HLATDB-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/vi-pham-hlatdb` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-HLATDB-03 | `sourceFormReady=yes` · nguồn `csdl-so-sach` / `RowViolation` §3.6. **Cấm** copy CRUD sổ 6. |
| GAP-PO-HLATDB-04 | Seed CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-HLATDB-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. |
| GAP-PO-HLATDB-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill CSDL sổ 6. |
| GAP-PO-HLATDB-07 | Read-model EF **P2** — P1 in-memory Report domain 12 dòng chấp nhận. |
| GAP-PO-HLATDB-08 | mfeStdUrl **`http://localhost:9311/bao-cao/vi-pham-hlatdb`**. Dashboard KPI **không** gộp slug này. |
| GAP-PO-HLATDB-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-HLATDB-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev (board đã approve sẵn). |
| GAP-PO-HLATDB-11 | Cluster MD handoff không có file → SSOT = control-hint + context. |
| GAP-PO-HLATDB-12 | edit_page: Current = leaf đã ship `task_24fb0ec1`; New = giữ DoD Kind E, Design re-prototype A–D. |

## 10. Out of scope (PO)

- CRUD `RowViolation` trên slug này (thuộc `csdl-so-sach`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal`.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1.
- `ERP.*` · `api/v1/rmms/*` · `api/v1/reports`.
- Invent tuyến ngoài CUC2 38.
- Copy giấy phép thi công (`ConstructionPermit`) vào lưới này.

## 11. Handoff Design (role kế — **pending**)

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + 2 tab + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §6 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/row-violations` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| Enqueue | **design** sau queue task PO `task_ab8fa516` `completed` |

Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T16:55:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-vi-pham-hlatdb-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_ab8fa516` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
