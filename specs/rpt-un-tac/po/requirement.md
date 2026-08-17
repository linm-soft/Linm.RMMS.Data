# PO — rpt-un-tac (Ùn tắc / ngập úng)

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo feature context + data-analy + STATUS `packKind=report` + slug `rpt-*` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form hay `LinCatalogUiSchemaEditorModal`. |
| Feature Kind | **E** · leaf `/bao-cao/un-tac` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_df0cd995` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm board. |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed` · artifact **`specs/_data-analy/features/rpt-un-tac-control-hint.md`** (handoff path `specs/rpt-un-tac/specs/_data-analy/clusters/rpt-un-tac.md` **không tồn tại** — dùng control-hint SSOT) · contentHash `sha256:rpt-un-tac-context-20260816` · sourceKind=`feature_context` · **no Excel** |
| sourceFeature | `incident` |
| sourceFormReady | **yes** |
| sourceTables | `rmms_incidents` (`IncidentEntity` · `IncidentType` ∈ {Ùn tắc, Ngập úng}) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T16:05:00.000Z` |
| taskId | `task_df0cd995` |
| priorChain | `task_e49f5eb8` (full pipeline — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `incident`) |

## 1. Goal

Trang **Ùn tắc / ngập úng** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **loại · tuyến · kỳ · tìm** → bấm **Xem** mới load lưới. Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE Field `/incident?id=`. **Không** CRUD sự cố trên slug này. Loại sự cố **khóa** tập {Ùn tắc, Ngập úng} — filter **loại** trên leaf chỉ hai giá trị này (không TNGT / loại khác).

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/un-tac` · mfeStdUrl `http://localhost:9311/bao-cao/un-tac` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `incident` giữ CRUD. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**. ITS/TOC overlay **DEFER P3**.

## 2. Current → New (edit_page)

| Layer | Current (live / pipeline `task_e49f5eb8`) | New (PO chốt `task_df0cd995`) |
|-------|-------------------------------------------|-------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-un-tac-prototype.html` | Design **re-review** content-only A–D + chart SoCai + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `CongestionReportPage` · `/bao-cao/un-tac` · `pageId` `rpt-un-tac` · testid `rmms-congestion-report` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput loại/tuyến · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel UTF-8 BOM · `ReportDisplayConfigModal` FULL · chart/print · drill `/incident?id=` · `CongestionFilterBar` | **Giữ** Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` làm trang này · **cấm** Kind B `LinCatalogUiSchemaEditorModal` |
| API context | feature context từng ghi plural `reports/congestion` **stale** | **`GET api/v1/report/congestion`** + `/export` (đã có Dev trước — SA/Dev **không** đổi plural) · query `from` `to` `routeId` `type` `search` |
| CSDL | `rmms_incidents` type ∈ {Ùn tắc, Ngập úng} · P1 in-memory Report seed 12 dòng · `DurationMin` trên Report DTO | P1 giữ seed map entity; P2 query EF read-model — **không** bảng báo cáo riêng P1 · **không** migration `rmms_incidents` P1 cho DurationMin |
| CRUD nguồn | Field `/incident` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | Slug `rpt-un-tac` → Report | SA giữ `rpt-un-tac` → Report · `api/v1/report` |

## 3. Personas / journeys

1. Hạt trưởng chọn loại (Ùn tắc hoặc Ngập úng) + tuyến + kỳ → **Xem** → lưới mã / tuyến / km / loại / thời lượng / TT / thời điểm.
2. Khu QLĐB lọc tuyến CUC2 → Excel theo cột đang hiện.
3. Lãnh đạo Config cột FULL rồi In — không stub config.
4. Drill một dòng → `/incident?id={id}` (MFE Field).

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/congestion`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «Ùn tắc / ngập úng» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **loại** (`CONGESTION_TYPE_LOOKUP`) · SearchInput **tuyến** (CUC2, **cấm QL.22**) · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột mã · tuyến · km · loại · thời lượng · trạng thái · thời điểm · drill · skeleton 8.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM (tên file live `congestion.csv` hoặc tương đương) · `canExport` chỉ khi đã Xem · subset cột đang hiện.
8. 1× `LinPageLayout` kind=`report` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.un-tac.read` (P1 stub chấp nhận).
10. DurationMin: P1 trên Report DTO / seed — **không** bắt buộc cột entity P1.
11. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
12. **Cấm ERP.*** · plural `reports`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-un-tac.md` | feature Kind E — API plural `reports` **stale** |
| CTX-02 | `docs/context/features/incident.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-un-tac.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-un-tac-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/un-tac` · `http://localhost:9311/bao-cao/un-tac` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 6. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| type | Loại | `SearchInput` | Ùn tắc / Ngập úng · enum FE `CONGESTION_TYPE_LOOKUP` · **cấm** native Select |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · loại · km · query **`search`** |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/congestion?from=&to=&routeId=&type=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/congestion/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại | enum seed FE `CONGESTION_TYPE_LOOKUP` P1 |

Perm: `report.un-tac.read`. Context plural `GET /api/v1/reports/congestion` **stale** → singular DOMAIN-MAP.

## 7. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | DTO live | Table |
|-------------|--------------|----------|-------|
| mã | `Code` | `code` | `rmms_incidents` |
| tuyến | `RouteName` | `route` / `routeName` | same |
| km | `KmStart`–`KmEnd` | `km` | same |
| loại | `IncidentType` ∈ {Ùn tắc, Ngập úng} | `type` | same |
| thời lượng | `DurationMin` P1 Report seed | `durationMin` | Report DTO (entity column DEFER P2) |
| trạng thái | `Status` | `status` | same |
| thời điểm | `RequestedAt` | `at` · TZ `formatAtVi` | same |
| drill | incident id | `id` | `/incident?id=` |

Seed P1: **8–15** dòng (implement hiện **12**) map domain Incident type=congestion|flood. Không CRUD.

## 8. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 |
| AC-G-03 | Drill dòng → `/incident?id={id}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema editor |
| AC-G-09 | Filter loại chỉ Ùn tắc \| Ngập úng — **cấm** mix TNGT trên leaf |
| AC-G-10 | `DurationMin` P1 DTO — **cấm** bắt buộc migration entity P1 |

## 9. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-UNTAC-01 | API **`api/v1/report/congestion`** (+ `/export`) — **đóng** context `GET /api/v1/reports/congestion`. **Cấm** `api/v1/reports`. Query `search` không `q`. |
| GAP-PO-UNTAC-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/un-tac` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-UNTAC-03 | `sourceFormReady=yes` · nguồn `incident` / `rmms_incidents`. **Cấm** copy CRUD sự cố. |
| GAP-PO-UNTAC-04 | Seed CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-UNTAC-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. |
| GAP-PO-UNTAC-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/incident?id=`. |
| GAP-PO-UNTAC-07 | Read-model EF **P2** — P1 in-memory Report domain 12 dòng congestion|flood chấp nhận. DurationMin entity **DEFER P2**. |
| GAP-PO-UNTAC-08 | mfeStdUrl **`http://localhost:9311/bao-cao/un-tac`**. Dashboard KPI **không** gộp slug này. ITS/TOC overlay **P3**. |
| GAP-PO-UNTAC-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-UNTAC-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev (board đã approve sẵn). |
| GAP-PO-UNTAC-11 | Cluster MD handoff không có file → SSOT = control-hint + context. |
| GAP-PO-UNTAC-12 | edit_page: Current = leaf đã ship `task_e49f5eb8`; New = giữ DoD Kind E, Design re-prototype A–D. |

## 10. Out of scope (PO)

- CRUD sự cố trên slug này (thuộc `incident`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal`.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1 · cột `DurationMin` trên `rmms_incidents` P1.
- `ERP.*` · `api/v1/rmms/*` · `api/v1/reports`.
- Invent tuyến ngoài CUC2 38.
- ITS/TOC overlay (P3).
- Mix loại sự cố ngoài Ùn tắc / Ngập úng trên leaf này.

## 11. Handoff Design (role kế — **pending**)

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §6 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/congestion` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| Enqueue | **design** sau queue task PO `task_df0cd995` `completed` |

Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T16:05:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-un-tac-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_df0cd995` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
