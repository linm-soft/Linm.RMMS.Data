# PO — rpt-tong-hop-bao-tri (Tổng hợp bảo trì)

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — **không** Kind B catalog list/CRUD |
| packKindNote | Run packet ghi `list` · **SSOT lệch** → PO **chốt `report`** theo context + data-analy + slug `rpt-tong-hop-bao-tri` → domain **Report**. **Cấm** Design/TL/Dev chuyển sang CRUD list/form. |
| Feature Kind | **E** · leaf `/bao-cao/tong-hop-bao-tri` · **không** CRUD form |
| status | `done` |
| requestSource | run packet `task_f96f58fc` · `/agent-qldb-workflow` · `roleOnly=po` · `/agent-po` · chain ON · autoApprove **ON** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| prior · data_analy | status=`done`/`confirmed` · artifact **`specs/_data-analy/features/rpt-tong-hop-bao-tri-control-hint.md`** (handoff path `specs/rpt-tong-hop-bao-tri/specs/_data-analy/clusters/rpt-tong-hop-bao-tri.md` **không tồn tại** — dùng artifact thật) · contentHash `sha256:rpt-tong-hop-bao-tri-context-20260816` · **no Excel cluster** · sourceKind=`feature_context` |
| sourceFeature | `maintenance` |
| sourceTables | `WorkOrder` (`rmms_work_orders`) |
| sourceFormReady | **yes** (`specs/maintenance/STATUS.md` done · entity `WorkOrderEntity` — không TBD / Col1–Col3) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp data-analy stamp · không mismatch) |
| updatedAt | `2026-08-16T13:55:00.000Z` |
| taskId | `task_f96f58fc` |
| priorChain | `task_1d312ce2` (pipeline autoApprove ON — leaf + API + KPI 6 đã có; PO này re-spec Design re-review, **không** clone CRUD `maintenance`) |

## 1. Goal

Trang **Tổng hợp bảo trì** — Kind **E** leaf tách khỏi hub `reports`. Persona: Hạt trưởng · Khu QLĐB · lãnh đạo. Filter **tuyến · loại việc · đơn vị · kỳ · tìm** → bấm **Xem** mới load **KPI 6 thẻ** (aggregation trên tập đã lọc) + lưới **WO tóm tắt**. Xuất Excel CSV UTF-8 BOM theo cột đang hiện. Config cột FULL. Chart SoCai khi đã Xem và có ≥1 dòng. Drill dòng về MFE nguồn `/maintenance?id={workOrderId}`.

**Khác** `rpt-nhat-ky-cong-viec`: **không** dòng sổ `MaintenanceWorkLog` · **cấm** reuse `GET api/v1/report/maintenance-work-logs`.  
**Khác** `rpt-bao-cao-cong`: **không** KPI ca chấm công · **không** map InZone · **cấm** reuse `GET api/v1/report/worklogs`.

Align:

- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route `/bao-cao/tong-hop-bao-tri` · mfeStdUrl `http://localhost:9311/bao-cao/tong-hop-bao-tri` · `yarn start:std` **:9311**.
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Report** · prefix **`api/v1/report`**. **Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports`.

Parent list pack `maintenance` giữ CRUD công việc. **Cấm** copy CRUD vào slug này. **Cấm** Thêm mới Zone A. **Cấm** `window.alert` / `window.confirm`. Chrome GOVOne **OUT**.

## 2. Current → New (edit_page)

| Layer | Current (live / prior chain `task_1d312ce2`) | New (delta PO này — Design re-review) |
|-------|-----------------------------------------------|----------------------------------------|
| Demo | N/A · hub `bao-cao/reports.html` | Prototype content-only A–D (+ KPI 6 + chart SoCai) · **skip** chrome/sidebar/menu · leaf HTML khi Design |
| MFE | `MaintenanceSummaryReportPage` `/bao-cao/tong-hop-bao-tri` · 1× `LinPageLayout` kind=`report` · `LinErpListFilterBar` · SearchInput tuyến/loại/đơn vị · Date kỳ · Input tìm · **Xem** mới fetch · KPI 6 · `LinCatalogDataGrid` kéo cột · `LinCatalogListPagination` · Excel · Config FULL · drill WO · chart SoCai | **Giữ** Kind E · Design prototype + `reviewUrl` · **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table · **cấm** Thêm mới Zone A · **cấm** Resource/Slideout form · **cấm** `LinListTableConfigModal` / `configHint` · **cấm** gộp nhật ký `maintenance-work-logs` / `worklogs` |
| API | `GET api/v1/report/maintenance-summary` + `/export` · P1 in-memory seed **15** CUC2 · KPI trên filtered set · FilterRoute exact | **Không** đổi prefix · SA confirm lookup Type A tuyến Integration · query read-model `WorkOrder` **P2** — **không** bắt schema warehouse P1 |
| Context API | `GET /api/v1/reports/maintenance-summary` | **Bỏ** — GAP-PO-THBT-01 chốt singular `report/maintenance-summary` |
| Prefix | DOMAIN-MAP singular Report | **`api/v1/report`** |
| BE | `Linm.RMMS.WebService` · Report · **cấm ERP.*** | STATUS `backend` = path + `api/v1/report/maintenance-summary` |
| Nguồn | `WorkOrder` · `sourceFormReady=yes` | **Không** expose CRUD trên trang báo cáo · **cấm** cột KL/ĐVT (`Quantity`/`UnitCode` **không** trên `WorkOrderEntity` P1) |
| Chart | SoCai khi đã Xem + có dòng · series theo tuyến | **Giữ P1** — KPI 6 bắt buộc (Tổng · Mới · Đang làm · Hoàn thành · Hủy · Khẩn cấp `WorkType=emergency`) |

## 3. DoD (đo được)

1. Đổi filter chỉ là **draft**; **Xem** mới gọi `GET api/v1/report/maintenance-summary`. Làm mới = re-fetch cùng filter đã Xem. **Làm mới khi chưa Xem** = toast SSOT, **không** fetch. Đổi filter sau Xem → page=1 khi Xem lại. Empty hint khi chưa Xem.
2. Zone A: title «Tổng hợp bảo trì» — **cấm** Thêm mới trên A.
3. Zone B: `LinErpListFilterBar` 1 hàng wrap — SearchInput **tuyến** · **loại việc** · **đơn vị** · Date **từ/đến** · Input **tìm** · **Xem** · Làm mới · In · Excel · Config FULL (`LinReportTableConfigModal` / `ReportDisplayConfigModal` — **cấm** stub/`configHint` · **cấm** `LinListTableConfigModal` height-only).
4. Zone C: KPI **6 thẻ** trên tập đã lọc (không chỉ trang hiện tại) + `LinCatalogDataGrid` kéo cột default **ON** · skeleton · cột §5 · drill `/maintenance?id={workOrderId}`.
5. Zone D: `LinCatalogListPagination` 50/100/200/500 **luôn** hiện — **cấm** footerPagination / pageSizeBar / raw table.
6. Chart SoCai: chỉ khi `viewed === true` và có ≥1 dòng (gồm series đếm WO theo tuyến).
7. Excel: CSV UTF-8 BOM theo cột đang hiện.
8. 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell.
9. Live: title + toolbar + KPI/grid/empty **không** blank/title-clip.
10. Auth JWT · tenant · perm `report.tong-hop-bao-tri.read` (FE gate ON · BE stub OK P1).
11. Dev: `yarn build` MFE PASS (+ `yarn typecheck` nếu có) · `dotnet build` BE PASS khi đụng API — ghi implement § Build.
12. **Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** plural `api/v1/reports` · **cấm** reuse `maintenance-work-logs` / `worklogs`.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/rpt-tong-hop-bao-tri.md` | feature Kind E — API plural `reports/maintenance-summary` **stale** |
| CTX-02 | `docs/context/features/maintenance.md` | parent list / entity nguồn `WorkOrder` — **cấm** copy CRUD |
| CTX-03 | hub `docs/context/features/reports.md` | tách leaf |
| DEM-01 | — | **N/A** leaf demo — Design prototype |
| DEM-02 | hub `bao-cao/reports.html` | không clone chrome |
| DI-01 | — | **no Excel cluster** (handoff `clusters/rpt-tong-hop-bao-tri.md` N/A) |
| DI-02 | `specs/_data-analy/features/rpt-tong-hop-bao-tri-control-hint.md` | controlHint SSOT · **confirmed** |
| DI-03 | `specs/_data-analy/shared-catalogs` CUC2 `road-route-seed.json` | 38 tuyến · **cấm QL.22** |
| MFE | `Linm.Web.RMMS.Report` `/bao-cao/tong-hop-bao-tri` · `http://localhost:9311/bao-cao/tong-hop-bao-tri` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Report · `api/v1/report` | API · BFF `web-bff/api/v1/report` |

## 5. controlHint (PO chốt — từ data-analy)

| Field key | Label | controlHint | catalogKind / rule |
|-----------|-------|-------------|--------------------|
| routeId | Tuyến | `SearchInput` | **road-route** · 38 tuyến CUC2 · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| workType | Loại việc | `SearchInput` | `repair` / `inspect` / `emergency` — **cấm** native Select |
| teamId | Đơn vị | `SearchInput` | TEAM-1 / TEAM-2 / TEAM-3 — **cấm** native Select |
| fromDate / toDate | Từ / Đến (kỳ) | `Date` | trên `DueAt` / `day` |
| qSearch | Tìm kiếm | `Input` | WO · tiêu đề · tuyến |

Grid (readonly — **cấm** Col1–Col3 placeholder · **cấm** Quantity/UnitCode):

| Grid column | Source field | Table |
|-------------|--------------|-------|
| Hạn | `DueAt` → `day` | `WorkOrder` |
| Mã WO | `Code` | `WorkOrder` |
| Tiêu đề | `Title` | `WorkOrder` |
| Tuyến | `RouteName` | `WorkOrder` |
| Loại việc | `WorkType` | `WorkOrder` |
| Trạng thái | `Status` | `WorkOrder` |
| Đơn vị | `TeamName` | `WorkOrder` |
| Cán bộ | `AssigneeName` | `WorkOrder` |
| Tiến độ % | `ProgressPercent` | `WorkOrder` |
| SLA (h) | `SlaHours` | `WorkOrder` |
| Sự cố | `IncidentId` | `WorkOrder` |
| drill | `workOrderId` | `WorkOrder` |

KPI 6 (aggregation filtered set):

| Thẻ | Rule |
|-----|------|
| Tổng WO | count |
| Mới | `Status` new |
| Đang làm | in progress |
| Hoàn thành | done |
| Hủy | cancelled |
| Khẩn cấp | `WorkType=emergency` |

Lookup API (đề xuất SA — PO không đổi prefix):

| Lookup | API |
|--------|-----|
| Xem | `GET api/v1/report/maintenance-summary?routeId=&workType=&teamId=&from=&to=&q=&page=&pageSize=` |
| Excel | `GET api/v1/report/maintenance-summary/export` |
| tuyến | `GET api/v1/integration/road-routes/search` |
| loại việc / đơn vị | enum seed FE P1 |

Perm: `report.tong-hop-bao-tri.read`.

Seed P1: **15** dòng mapped `WorkOrder` · tuyến **CUC2** · **cấm QL.22**.

Drill: `/maintenance?id={workOrderId}`.

## 6. GAP PO

| ID | Decision |
|----|----------|
| GAP-PO-THBT-01 | API **`api/v1/report/maintenance-summary`** (+ `/export`) — **đóng** context `GET /api/v1/reports/maintenance-summary`. **Cấm** `api/v1/reports`. **Cấm** reuse `maintenance-work-logs` / `worklogs`. |
| GAP-PO-THBT-02 | Pack kind board `list` → **bỏ** · dùng **`report` / Kind E**. Leaf `/bao-cao/tong-hop-bao-tri` tách hub `reports` (GAP-F-RPT-LEAF-01). **Không** CRUD catalog Kind B. |
| GAP-PO-THBT-03 | `sourceFormReady=yes` · nguồn `maintenance` `WorkOrder`. **Cấm** copy CRUD WO. |
| GAP-PO-THBT-04 | Seed **15** CUC2 (38 tuyến) · FilterRoute **exact** · **cấm** invent `QL.22` / `ĐT.*`. |
| GAP-PO-THBT-05 | Config cột **FULL** P1 — **cấm** stub toast/`configHint`. Footer pager **luôn** hiện. Chart SoCai khi đã Xem + có dòng. In stub OK nếu chưa print engine. |
| GAP-PO-THBT-06 | **Không** CRUD · **không** form Resource/Slideout · View-as-form **OUT**. Drill `/maintenance?id=`. |
| GAP-PO-THBT-07 | Read-model EF join `rmms_work_orders` **P2** — P1 in-memory Report domain chấp nhận. |
| GAP-PO-THBT-08 | mfeStdUrl **`http://localhost:9311/bao-cao/tong-hop-bao-tri`**. Dashboard KPI **không** gộp slug này. KPI **6** bắt buộc trên trang này. |
| GAP-PO-THBT-09 | Filter layout: title trái · input + tìm cụm phải · `LinErpListFilterBar` 1 hàng wrap (GAP-FILTER-BAR). |
| GAP-PO-THBT-10 | autoApprove **ON** — Design/SA/Review tự confirm khi tới lượt · **không** auto tick BE+UI repo trước Dev. |
| GAP-PO-THBT-11 | Config report: `LinReportTableConfigModal` / `ReportDisplayConfigModal` — **không** bắt `LinCatalogUiSchemaEditorModal` (đó là Kind B catalog). |
| GAP-PO-THBT-12 | Quantity/UnitCode **OUT P1** — **cấm** bịa cột KL/ĐVT trên lưới. |

## 7. Grid AC (REQUIRED · report list surface)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar/filter · C KPI+Grid · D Pagination** |
| AC-G-02 | **Xem** apply draft → fetch · page=1 · Làm mới `!viewed` = toast không fetch |
| AC-G-03 | Drill dòng → `/maintenance?id={workOrderId}` |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 **luôn** |
| AC-G-06 | 1× `LinPageLayout` kind=`report` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton load — **cấm** blank body |
| AC-G-08 | Config cột FULL — **cấm** `LinListTableConfigModal` / `configHint` |
| AC-G-09 | Cột lưới đúng §5 (Hạn · Mã · Tiêu đề · Tuyến · Loại · TT · Đơn vị · Cán bộ · Tiến độ · SLA · Sự cố) |
| AC-G-10 | KPI 6 thẻ trên filtered set · **cấm** chỉ đếm trang hiện tại |

## 8. Out of pack

- CRUD `maintenance` / WO trên slug này.
- Dòng sổ `MaintenanceWorkLog` · reuse `maintenance-work-logs`.
- KPI ca / map InZone · reuse `WorklogReportPage` / `api/v1/report/worklogs`.
- Cột KL/ĐVT (`Quantity`/`UnitCode`) P1.
- Dashboard KPI gộp slug khác.
- Publish domain events.
- Warehouse schema P1.
- GOVOne chrome · parent JSON.
- Kind B nested CatalogListShell · `LinCatalogUiSchemaEditorModal` bắt buộc (catalog Kind B — report dùng report table config FULL).
- Lifecycle `/erp-feature`.
- `ERP.*` · `api/v1/rmms/*` · `api/v1/reports`.
- Invent tuyến ngoài CUC2 38.

## 9. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | **E** report A–D + KPI 6 + chart SoCai (**không** Kind B form/CRUD) |
| Prototype | content-only zones A–D (+ KPI + chart) · analog `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome demo · **không** full demo clone |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | bảng §5 — **không** đổi SearchInput → Select |
| BE | `api/v1/report/maintenance-summary` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** `maintenance-work-logs` / `worklogs` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |
| Chain | **ON** · pick cùng feature đến hết pipeline — **cấm** QA feature khác khi chain này còn pending |
| This task | `roleOnly=po` · **không** chạy Design trong task `task_f96f58fc` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.5 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T13:55:00.000Z |
| versionGate | keep_current |
| contentHashPriorDataAnaly | sha256:rpt-tong-hop-bao-tri-context-20260816 |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorRulesVersion | 2026.08.15.8 |
| dataAnalySkillVersion | 2026.08.15.5 |
| dataAnalyWorkflowVersion | 2026.08.15.5 |
| dataAnalyRulesVersion | 2026.08.15.8 |
| taskId | `task_f96f58fc` |

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
