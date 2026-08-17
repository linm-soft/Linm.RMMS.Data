# PO — rpt-thiet-hai (Khối lượng thiệt hại)

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo feature context + data-analy + STATUS `packKind=report` + slug `rpt-*` → Report. **Cấm** Design/TL/Dev chuyển sang CRUD list/form hay `LinCatalogUiSchemaEditorModal`. |
| Feature Kind | **E** · leaf `/bao-cao/thiet-hai` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_ba6d898c` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm board. |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`confirmed` · artifact **`specs/_data-analy/features/rpt-thiet-hai-control-hint.md`** (handoff path `specs/rpt-thiet-hai/specs/_data-analy/clusters/rpt-thiet-hai.md` **không tồn tại** — dùng control-hint SSOT) · contentHash `sha256:rpt-thiet-hai-context-20260816` · sourceKind=`feature_context` |
| sourceFeature | `incident` |
| sourceFormReady | **yes** |
| sourceTables | `rmms_incidents` (`IncidentEntity` · damage lines typed P1) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T18:45:00.000Z` |
| taskId | `task_ba6d898c` |
| priorChain | `task_11d09197` (full pipeline — leaf + API đã có; PO này re-spec Design re-review, **không** clone CRUD `incident`) |

## 1. Goal

Trang **Khối lượng thiệt hại** — báo cáo Kind **E**, leaf tách hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · hạng mục · kỳ · tìm** → bấm **Xem** mới load lưới. Xuất Excel theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE Field `/incident?id=`. **Không** CRUD sự cố trên slug này. Bảng KL — **không** form ghi nhận hiện trường.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/thiet-hai` · mfeStdUrl `http://localhost:9311/bao-cao/thiet-hai` (`yarn start:std` port **9311**).
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `incident` giữ CRUD. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne (logo/bell/Hồ sơ/Đổi MK) **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / pipeline `task_11d09197`) | New (PO chốt `task_ba6d898c`) |
|-------|-------------------------------------------|-------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` · prototype `ui/prototype/rpt-thiet-hai-prototype.html` | Design **re-review** content-only A–D + chart SoCai + reviewUrl (edit_page — không clone chrome) |
| MFE | Leaf `DamageQtyReportPage` · `/bao-cao/thiet-hai` · `pageId` `rpt-thiet-hai` · testid `rmms-damage-qty-report` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tuyến/hạng mục · Date kỳ · Input tìm · **Xem** mới fetch · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel `damage-qty.csv` · `ReportDisplayConfigModal` FULL · chart/print · drill `/incident?id=` | **Giữ** Kind E · **cấm** nested CatalogListShell · **cấm** hub `ReportListPage` làm trang này · **cấm** Kind B `LinCatalogUiSchemaEditorModal` |
| API context | `GET /api/v1/reports/damage-qty` **stale** trong feature context | **`GET /api/v1/report/damage-qty`** + `/export` (đã có Dev trước — SA/Dev **không** đổi plural) · query `search` **không** `q` |
| CSDL | `rmms_incidents` · damage lines typed P1 seed in-memory Report | P1 giữ seed map entity; P2 query EF read-model — **không** bảng báo cáo riêng P1 |
| CRUD nguồn | Field `/incident` | **Không** expose trên trang báo cáo |
| DOMAIN-MAP | Slug `rpt-thiet-hai` → Report | SA giữ `rpt-thiet-hai` → Report · `api/v1/report` |

## 3. Personas / journeys

1. Hạt trưởng chọn tuyến + kỳ → **Xem** → lưới KL / ĐVT / ước giá.
2. Khu QLĐB lọc hạng mục → Excel theo cột đang hiện.
3. Lãnh đạo Config cột FULL rồi In (browser print) — không stub config.
4. Drill một dòng → `/incident?id={incidentId}` (MFE Field).

## 4. DoD (PO)

1. Đổi filter chỉ **draft**; **Xem** mới gọi `GET api/v1/report/damage-qty`. Làm mới = re-fetch filter đã Xem; `!viewed` → toast «Chưa xem» (không native alert).
2. Zone A: title «Khối lượng thiệt hại» — **cấm** Thêm mới / Resource / Slideout / View=readOnly giả form.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** (CUC2, **cấm QL.22**) · SearchInput **hạng mục** (`AssetLabel` / lookup item) · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** `LinListTableConfigModal` / `configHint` / stub).
4. Zone C: `LinCatalogDataGrid` kéo cột default **ON** · cột tuyến · hạng mục · KL · ĐVT · ước giá · nguồn · drill · skeleton 8.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table footer.
6. Chart SoCai: chỉ khi `viewed === true` và ≥1 dòng (KPI SoCai, không gộp dashboard slug khác).
7. Excel: CSV UTF-8 BOM `damage-qty.csv` · `canExport` chỉ khi đã Xem · subset cột đang hiện.
8. 1× `LinPageLayout` kind=`report` · flex+skeleton · toolbar config.
9. Auth JWT · tenant · perm `report.thiet-hai.read`.
10. Dev (role sau): MFE `yarn build` PASS · BE `dotnet build` PASS nếu đụng API — **không** thuộc role PO này.
11. **Cấm ERP.*** · plural `reports`.

## 5. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-thiet-hai.md` | feature Kind E — API plural `reports` **stale** |
| CTX-02 | `docs/context/features/incident.md` | parent list — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-thiet-hai.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-thiet-hai-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/thiet-hai` · `http://localhost:9311/bao-cao/thiet-hai` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 6. controlHint (chốt từ data-analy — không giả định thêm)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| type | Hạng mục | `SearchInput` | enum/lookup `AssetLabel` / `DAMAGE_ITEM_LOOKUP` seed FE P1 — **cấm** native Select |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | kỳ báo cáo |
| qSearch | Tìm | `Input` | query **`search`** — **cấm** param `q` |

Lookup SA (không đổi controlHint):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/damage-qty?from=&to=&routeId=&type=&search=&page=&pageSize=` |
| Excel | `GET api/v1/report/damage-qty/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| hạng mục | enum seed FE P1 (khớp damage item / `AssetLabel`) |

Perm: `report.thiet-hai.read`.

## 7. Grid ← form nguồn (cấm Col1–Col3)

| Grid column | Source field (entity / typed P1) | DTO live | Table |
|-------------|----------------------------------|----------|-------|
| tuyến | `RouteName` | `route` | `rmms_incidents` |
| hạng mục | `AssetLabel` | `item` | same |
| KL | typed Qty P1 | `qty` | same / damage line |
| ĐVT | typed Unit P1 | `unit` | same |
| ước giá | typed EstValue P1 | `estValue` | same |
| nguồn | typed Source P1 | `source` | same |
| drill | incident id | `incidentId` | `/incident?id=` |

Seed P1: **8–15** dòng (implement hiện **12**) map domain Incident damage lines. Không CRUD.

## 8. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 |
| AC-G-03 | Drill dòng → `/incident?id={incidentId}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` / Kind B schema editor |

## 9. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-TH-01 | API **`api/v1/report/damage-qty`** (+ `/export`) — **đóng** context `GET /api/v1/reports/damage-qty`. **Cấm** `api/v1/reports`. Query `search` không `q`. |
| GAP-PO-TH-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/thiet-hai` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-TH-03 | `sourceFormReady=yes` · nguồn `incident` / `rmms_incidents`. **Cấm** copy CRUD sự cố. |
| GAP-PO-TH-04 | Seed CUC2 (38 tuyến) · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-TH-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. |
| GAP-PO-TH-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/incident?id=`. |
| GAP-PO-TH-07 | Read-model EF join incident damage lines **P2** — P1 in-memory Report domain chấp nhận. |
| GAP-PO-TH-08 | mfeStdUrl **`http://localhost:9311/bao-cao/thiet-hai`**. Dashboard KPI **không** gộp slug này. |
| GAP-PO-TH-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-TH-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev (board đã approve sẵn). |
| GAP-PO-TH-11 | Cluster MD handoff không có file → SSOT = control-hint + context. |
| GAP-PO-TH-12 | edit_page: Current = leaf đã ship `task_11d09197`; New = giữ DoD Kind E, Design re-prototype A–D. |

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

## 11. Handoff Design (role kế — **pending**)

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §6 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/damage-qty` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| Enqueue | **design** sau queue task PO `task_ba6d898c` `completed` |

Repo BE+UI đã tick trên STATUS (board — Dev chỉ sau `confirms.beRepo && uiRepo`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T18:45:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-thiet-hai-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_ba6d898c` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
