# PO — rpt-tngt (Tai nạn giao thông)

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo feature context + data-analy + STATUS `packKind=report` + slug `rpt-*` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form hay `LinCatalogUiSchemaEditorModal`. |
| Feature Kind | **E** · leaf `/bao-cao/tngt` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_c9e6332c` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm board. |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed` · artifact **`specs/_data-analy/features/rpt-tngt-control-hint.md`** (handoff path `specs/rpt-tngt/specs/_data-analy/clusters/rpt-tngt.md` **không tồn tại** — dùng control-hint SSOT) · contentHash `sha256:rpt-tngt-context-20260816` · sourceKind=`feature_context` · **no Excel** |
| sourceFeature | `incident` |
| sourceFormReady | **yes** |
| sourceTables | `rmms_incidents` (`IncidentEntity` · `IncidentType = TNGT`) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T20:20:00.000Z` |
| taskId | `task_c9e6332c` |
| priorChain | `task_46a44cfc` (full pipeline — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `incident`) |

## 1. Goal

Trang **Tai nạn giao thông** — báo cáo Kind **E**, leaf tách hub `reports`. **Một slug · 6 loại thống kê** (tab) — **cấm** 6 feature trùng filter. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · kỳ · mức · loại thống kê · tìm** → bấm **Xem** mới load lưới. Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE Field `/incident?id=`. **Không** CRUD sự cố trên slug này. Loại sự cố **khóa TNGT** — **không** filter type trên leaf.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/tngt` · mfeStdUrl `http://localhost:9311/bao-cao/tngt` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `incident` giữ CRUD. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / pipeline `task_46a44cfc`) | New (PO chốt `task_c9e6332c`) |
|-------|-------------------------------------------|-------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-tngt-prototype.html` | Design **re-review** content-only A–D + chart SoCai + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `TrafficAccidentReportPage` · `/bao-cao/tngt` · `pageId` `rpt-tngt` · testid `rmms-tngt-report` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput loại thống kê/tuyến/mức · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel `traffic-accidents.csv` · `ReportDisplayConfigModal` FULL · chart/print · drill `/incident?id=` · type khóa TNGT · 6 tab `INCIDENT_KIND_LOOKUP` | **Giữ** Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` làm trang này · **cấm** Kind B `LinCatalogUiSchemaEditorModal` · **cấm** 6 slug trùng filter |
| API context | feature context từng ghi plural `reports` **stale** | **`GET api/v1/report/traffic-accidents`** + `/export` (đã có Dev trước — SA/Dev **không** đổi plural) · query `tab` `from` `to` `routeId` `severity` `search` |
| CSDL | `rmms_incidents` type=TNGT · P1 in-memory Report seed 12 dòng | P1 giữ seed map entity; P2 query EF read-model — **không** bảng báo cáo riêng P1 |
| CRUD nguồn | Field `/incident` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | Slug `rpt-tngt` → Report | SA giữ `rpt-tngt` → Report · `api/v1/report` |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ + loại thống kê → **Xem** → lưới mã / tuyến / loại / mức / TT / thời gian.
2. Khu QLĐB tab `serious` (mặc định mức Nghiêm trọng) → Excel theo cột đang hiện.
3. Lãnh đạo tab `half-year` (kỳ 6 tháng) · Config cột FULL rồi In — không stub config.
4. Drill một dòng → `/incident?id={id}` (MFE Field).

Sáu loại thống kê trên **một** slug: `monthly` · `half-year` · `serious` · `compare` · `summary` · `stats`.

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/traffic-accidents`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «Tai nạn giao thông» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **loại thống kê** (`tab`) · SearchInput **tuyến** (CUC2, **cấm QL.22**) · SearchInput **mức** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột mã · tuyến · loại · mức · trạng thái · thời gian · drill · skeleton 8.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Tab `serious` mặc định mức **Nghiêm trọng**; tab `half-year` kỳ **6 tháng**.
7. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
8. Excel: CSV UTF-8 BOM `traffic-accidents.csv` · `canExport` chỉ khi đã Xem · subset cột đang hiện.
9. 1× `LinPageLayout` kind=`report` · flex+skeleton · toolbar config.
10. Auth JWT · tenant · perm `report.tngt.read` (P1 stub chấp nhận).
11. Loại sự cố **khóa TNGT** — không filter type trên leaf.
12. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
13. **Cấm ERP.*** · plural `reports`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-tngt.md` | feature Kind E — API plural `reports` **stale** |
| CTX-02 | `docs/context/features/incident.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-tngt.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-tngt-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/tngt` · `http://localhost:9311/bao-cao/tngt` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 6. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| tab | Loại thống kê | `SearchInput` | `monthly` · `half-year` · `serious` · `compare` · `summary` · `stats` — **cấm** native Select · **cấm** 6 feature |
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| severity | Mức | `SearchInput` | Cao / TB / Nghiêm trọng / Thấp — tab `serious` mặc định **Nghiêm trọng** |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | `RequestedAt` / DTO `at` · tab `half-year` = 6 tháng |
| qSearch | Tìm kiếm | `Input` | mã · tuyến · query **`search`** |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/traffic-accidents?tab=&from=&to=&routeId=&severity=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/traffic-accidents/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại thống kê / mức | enum seed FE P1 |

Perm: `report.tngt.read`. Context plural `api/v1/reports/traffic-accidents` **stale** → singular DOMAIN-MAP.

## 7. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field | DTO live | Table |
|-------------|--------------|----------|-------|
| mã | `Code` | `code` | `rmms_incidents` |
| tuyến | `RouteName` | `route` / `routeName` | same |
| loại | `IncidentType` | `type` (= TNGT) | same |
| mức | `Severity` | `severity` | same |
| trạng thái | `Status` | `status` | same |
| thời gian | `RequestedAt` | `at` · TZ `formatAtVi` | same |
| drill | incident id | `id` | `/incident?id=` |

Seed P1: **8–15** dòng (implement hiện **12**) map domain Incident type=TNGT. Không CRUD.

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
| AC-G-09 | Một slug · 6 tab — **cấm** tách 6 feature |
| AC-G-10 | Type khóa TNGT — **cấm** filter loại sự cố trên leaf |

## 9. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-TNGT-01 | API **`api/v1/report/traffic-accidents`** (+ `/export`) — **đóng** context `GET /api/v1/reports/traffic-accidents`. **Cấm** `api/v1/reports`. Query `search` không `q`. |
| GAP-PO-TNGT-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/tngt` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-TNGT-03 | `sourceFormReady=yes` · nguồn `incident` / `rmms_incidents`. **Cấm** copy CRUD sự cố. |
| GAP-PO-TNGT-04 | Seed CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-TNGT-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. |
| GAP-PO-TNGT-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/incident?id=`. |
| GAP-PO-TNGT-07 | Read-model EF **P2** — P1 in-memory Report domain 12 dòng TNGT chấp nhận. |
| GAP-PO-TNGT-08 | mfeStdUrl **`http://localhost:9311/bao-cao/tngt`**. Dashboard KPI **không** gộp slug này. |
| GAP-PO-TNGT-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-TNGT-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev (board đã approve sẵn). |
| GAP-PO-TNGT-11 | Cluster MD handoff không có file → SSOT = control-hint + context. |
| GAP-PO-TNGT-12 | edit_page: Current = leaf đã ship `task_46a44cfc`; New = giữ DoD Kind E, Design re-prototype A–D. |
| GAP-PO-TNGT-13 | Một slug · 6 loại thống kê. Tab `serious` / `half-year` theo control-hint. Type khóa TNGT. |

## 10. Out of scope (PO)

- CRUD sự cố trên slug này (thuộc `incident`).
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Demo chrome / clone full GOVOne.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal`.
- Lifecycle `/erp-feature` (dùng `/agent-qldb-workflow` + `/erp-report-context` Kind E).
- Migration EF P1.
- `ERP.*` · `api/v1/rmms/*` · `api/v1/reports`.
- Invent tuyến ngoài CUC2 38.
- Tách 6 feature/tab thành 6 slug.
- Filter loại sự cố (không phải TNGT) trên leaf này.

## 11. Handoff Design (role kế — **pending**)

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §6 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/traffic-accidents` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| Enqueue | **design** sau queue task PO `task_c9e6332c` `completed` |

Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T20:20:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-tngt-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_c9e6332c` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
