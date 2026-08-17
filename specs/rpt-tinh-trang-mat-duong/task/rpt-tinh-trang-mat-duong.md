# Team-lead — rpt-tinh-trang-mat-duong (Tình trạng mặt đường)

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| this role | `team-lead` · `/agent-team-lead` |
| status | `done` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **không** dùng (GAP-PO-PC-12) |
| Feature Kind | **E** · leaf `/bao-cao/tinh-trang-mat-duong` · **không** CRUD |
| formType | `report` |
| changeScope | `edit_page` |
| autoApprove | **ON** |
| chain | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| mfeStdRoute | `/bao-cao/tinh-trang-mat-duong` (**route_confirm** = giữ URL đã chốt pipeline trước · autopilot ON · không đổi) |
| mfeStdUrl | `http://localhost:9311/bao-cao/tinh-trang-mat-duong` (`yarn start:std` :9311) |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_8d173080` |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_91737fc7` |
| prior · po | **confirmed** · `po/requirement.md` · `task_ed6460e0` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tinh-trang-mat-duong-control-hint.md` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO/Design/SA/STATUS — SSOT json `2026.08.16.02` **không** regen) |
| taskId | `task_4a477dab` |
| updatedAt | `2026-08-16T12:50:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `pavement-section` |
| sourceTables | `rmms_pavement_sections` |
| report_export | **IN** (`export_yes`) |
| report_chart | **SoCai** (`by-band` · `by-route`) |
| retry.ssot_rereview | **N/A** — không `retryFrom` |
| roleOnly | `team_lead` — **không** code MFE/BE trong role này |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · `api/v1/reports` (plural) · Kind B `LinCatalogUiSchemaEditorModal` · `LinListTableConfigModal` · `configHint` · nested `CatalogListShell` · hub `ReportListPage` family `pavement-condition` làm leaf · CRUD `pavement-section` trên slug này · `window.alert`/`confirm`/`prompt` · clone pager/grid.

**Cấm** gán mọi page = slash sai: **`devSlash` = `/agent-dev`** + **`/erp-report-context`** (S-PC / S-RPT). **GAP-TL-DEV-ASSIGN-01**.

## 0. Screens (SA + Design)

| id | Surface | Pattern | Route | FormMode | Actions | devSlash |
|----|---------|---------|-------|----------|---------|----------|
| S-PC | Report A–D + SoCai | Full page `LinPageLayout` kind=`report` | `/bao-cao/tinh-trang-mat-duong` | report | draft → **Xem** · Làm mới · Excel · Chart · In · Config FULL · drill | `/agent-dev` + `/erp-report-context` |
| S-FORM | Form CRUD | — | — | — | **OUT** | — |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | toolbar `fa-cog` | — | FULL List/width/filter/sort/Thêm cột | `/agent-dev` |
| S-MOD-CHART | Chart | `ReportChartModal` SoCai | toolbar chart | — | khi viewed ∧ ≥1 dòng | `/agent-dev` |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` | `/agent-dev` |

## 1. source.routes (confirmed)

| Key | Path |
|-----|------|
| leaf | `/bao-cao/tinh-trang-mat-duong` |
| drill | `/asset/pavement-section/{id}` (MFE Asset · `window.top`) |
| alternatives rejected | `/bao-cao/tt-mat-duong` · `/rpt/tinh-trang-mat-duong` — **không** đổi URL đã live |

## 2. ssot.reuse

| Concern | Package / rule |
|---------|----------------|
| Shell | 1× `LinPageLayout` kind=`report` · `data-lin-list-layout="erp-filter-bar"` |
| Filter | `LinErpListFilterBar` · `filter-bar-layout-hard` V1–V5 · leading = **fragment** từng field `div` |
| Grid | `LinCatalogDataGrid` kéo cột **default ON** · `skeletonRows={8}` |
| Footer | **Luôn** `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar / raw table |
| Toolbar | `reportToolbar` + `buildReportListToolbarActions` · `report-toolbar-actions.md` |
| Config | `LinReportTableConfigModal` + `load/saveErpReportDisplayConfig` / `erpReportTableConfigFromDisplay` |
| Chart | SoCai `resolveReportCharts` · `ReportChartModal` / analog `LedgerReportChartModal` |
| HTTP | MFE `reportEndpoint` · `apiClient` · **cấm** fetch ad-hoc |
| Lookup tuyến | `GET api/v1/integration/road-routes/search` · **cấm** clone catalog Report |
| Toast | `dispatchAppToast` / `useAlert` — **cấm** native dialog |

## 3. implement.wire / state

| Topic | Rule |
|-------|------|
| Filter draft vs applied | Đổi control = draft **không** fetch. **Xem** copy draft → applied → GET list · `page=1` · `viewed=true`. |
| Empty !viewed | «Chưa xem — nhấn «Xem» để tải báo cáo tình trạng mặt đường.» |
| Làm mới | Chỉ re-fetch applied. `!viewed` → toast «Chưa xem» · **không** fetch. |
| Pager | Đổi page/pageSize sau viewed = refetch cùng applied. |
| Query | `pciBand` + alias `type` (cùng value) · `routeId` · `from`/`to` · **`search`** (**cấm** `q`) · `page`/`pageSize` ∈ {50,100,200,500} |
| Excel | `canExport` chỉ khi viewed · toolbar `onExport` · CSV UTF-8 BOM `pavement-condition.csv` |
| Chart | `canChart` = viewed ∧ items.length≥1 · client từ `items` · **không** API chart P1 |
| Drill | `/asset/pavement-section/{id}` · **không** GetById Report |
| TZ | FE gửi `yyyy-MM-dd` · display `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| PCI band | enum FE `tot` `kha` `tb` `kem` `rat-kem` — **cấm** native Select · **cấm** init-data P1 |
| Tuyến | SearchInput Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** · fallback 38 CUC2 chỉ khi BFF down/empty |
| Perm | FE gate `report.tinh-trang-mat-duong.read` · BE stub P1 đến CommonLib ≥1.4.0 |

## 4. Task pack (`form-type-task-pack` §2d + SA handoff quality gates)

Deps: T-CTX-01 → T-PERM-01 ∥ T-BE-RPT-01 → T-BFF-01 → T-UI-* → T-BUILD-01. T-QA-RPT-01 = **QA role** (pending). **T-UI-FORM-01** = **OUT**. **T-UI-LEAVE-01** = N/A (không dirty form). **Không** `tl-grid-task-template` Kind B / `LinCatalogUiSchemaEditorModal`.

| id | layer | devSlash | notes / DoD |
|----|-------|----------|-------------|
| T-CTX-01 | docs | — | Context + controlHint + Design A–D + SA API catalog. Query **`search`**. Prefix **`api/v1/report`**. Source `rmms_pavement_sections` P2. |
| T-PERM-01 | ui+be | `/agent-dev` | `report.tinh-trang-mat-duong.read` (list+export). Lookup `master.road-routes.read` Integration. BE `[RequirePermission]` **stub P1**. |
| T-BE-RPT-01 | api | `/agent-dev` | **Keep** `GET api/v1/report/pavement-condition` + `/export`. `ReportQueryController` · `IReportService.GetPavementConditionAsync` / `ExportPavementConditionCsvAsync`. Envelope `ApiResponse<ReportPagedResult<ReportPavementConditionRowDto>>`. Filter: `pciBand` exact ignore-case · `type` alias · `routeId` exact · `from` inclusive · `to` date-only exclusive +1d · `search` Contains Code/Route/LayerCode/StructureType/Status/PciBandLabel · pageSize allow-list. Seed **12** CUC2 P1 · **cấm** migration · **cấm** ERP.* · **cấm** endpoint mới bắt buộc. File: `Domains/Report/` + `LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs`. |
| T-BFF-01 | bff | `/agent-dev` | `ReportBffController` Forward **cùng path + query-string**. Prefix `web-bff/api/v1/report`. **Không** business. |
| T-UI-LIST-01 | ui | `/agent-dev` + `/erp-report-context` | Kind **E** zones A–D (**không** Kind B schema). Zone A title «Tình trạng mặt đường» `fas fa-road` · **cấm** Thêm mới. Zone C `LinCatalogDataGrid` resizable ON · cột `code` `route` `kmFrom` `kmTo` `pci` `pciBandLabel` `layerCode` `measuredAt` + drill `id`. Zone D **luôn** `LinCatalogListPagination`. 1× `LinPageLayout`. Flex + skeleton. DES-PC-01…08. Shell height: live title+toolbar+grid/empty visible (**GAP-P2-LAYOUT-06** analog report). |
| T-UI-FORM-01 | — | — | **OUT** — **cấm** Resource/Slideout/View=readOnly · **cấm** Form Biểu 1 trên leaf. |
| T-UI-ACT-01 | ui | `/agent-dev` | Inventory: Xem · Làm mới · Excel · Chart · In · Config · drill «Mở Biểu 1» — mỗi nút handler thật. **Cấm** stub toast «chưa làm». |
| T-UI-LKP-01 | ui | `/agent-dev` | SearchInput tuyến → API-LKP-01. SearchInput PCI band → enum FE. **Cấm** `KIND_LABEL` tuyến hardcode khi BFF OK. **Cấm QL.22**. |
| T-UI-FIELD-01 | ui | `/agent-dev` | controlHint: routeId SearchInput · pciBand SearchInput · from/to Date · qSearch Input → query **`search`**. Grid = DTO scalars readonly. PCI `formatPci` · ngày `formatAtVi`. |
| T-UI-PROD-01 | ui | `/agent-dev` | End-user: **cấm** note Dev / chrome demo / seed badge trên page. `demo-to-real-enduser`. |
| T-UI-UX-01 | ui | `/agent-dev` | `dev-ui-ux-constitution` · Kind E không form 5-cột. Toast overlay. **GAP-DEV-UX-01**. |
| T-UI-RPT-01 | ui | `/agent-dev` | `LinErpListFilterBar` + **filter-bar-layout-hard V1–V5**: fragment leading · `data-lin-list-layout="erp-filter-bar"` · 1 hàng wrap · **0** action trên bar · 🔍 = Xem (`onSearch`). **Cấm** `ErpListHeaderFilters` · wrapper bọc cả leading · `LinListFilterField` · nút Xem/Excel trên bar. **GAP-FILTER-BAR-01/07/08**. |
| T-UI-RPT-TB-01 | ui | `/agent-dev` | Common actions **chỉ** `reportToolbar`: Làm mới · Chart · Xuất Excel · In · Config. Thứ tự 2C. **Cấm** filter button. **GAP-DEV-RPT-TB-01**. |
| T-UI-RPT-CONFIG-01 | ui | `/agent-dev` | `LinReportTableConfigModal` FULL (grid+footer+chart flags) · `load/saveErpReportDisplayConfig`. **Cấm** `configHint` · **cấm** chỉ `LinListTableConfigModal` · **cấm** Kind B schema editor. **GAP-P2-REPORT-CONFIG-01**. |
| T-UI-RPT-EXPORT-01 | ui | `/agent-dev` | `report_export=export_yes` · toolbar `onExport` · `canExport: viewed` · BE CSV BOM `pavement-condition.csv`. **Cấm** `<Button>` trong filter. |
| T-UI-RPT-CHART-01 | ui | `/agent-dev` | SoCai `by-band` · `by-route` · KPI Đoạn · Tuyến · PCI TB từ `items` khi viewed ∧ ≥1 dòng. **Cấm** stub toast · **cấm** API chart P1 · **cấm** gộp dashboard slug khác. |
| T-LIB-01 | lib | — | **N/A trừ khi** package thiếu `onExport` trên `buildReportListToolbarActions` — khi đó upgrade Common, **cấm** clone toolbar. |
| T-BUILD-01 | gate | `/agent-dev` | MFE `yarn typecheck` + `yarn build` PASS. Nếu đụng API: BE `dotnet build` PASS (`Linm.RMMS.WebService`). Fail → 1× auto-fix · **cấm** `completed` QA. Ghi implement § Build. |
| T-QA-RPT-01 | qa | `/agent-qa` | Search work · filter V1+V5 · export/chart trên toolbar · pager luôn · drill · **0** Excel trên filter. **Pending** đến role QA. |

## 5. implement.init_data

PCI band = **enum tĩnh FE** (`PCI_BAND_LOOKUP`) — SA **OUT** init-data P1. Tuyến = Integration search, **không** LOOKUP_STATIC khi API sống. **Cấm** `KIND_LABEL` invent tuyến ngoài 38 CUC2.

## 6. GAP TL

| ID | Decision |
|----|----------|
| GAP-TL-FORMTYPE-01 | Pack **report** đủ T-UI-RPT-01/TB/CONFIG/EXPORT/CHART + T-PERM + T-BE-RPT + T-UI-UX |
| GAP-TL-DEV-ASSIGN-01 | `devSlash=/agent-dev` + `/erp-report-context` — **không** OMS/ai-detect |
| GAP-TL-GRID-MAP-01 | Kind E — **không** paste Kind B `tl-grid-task-template` / schema editor |
| GAP-TL-LEAVE-01 | N/A — không dirty form trên leaf |
| GAP-TL-ROUTE-01 | Route giữ `/bao-cao/tinh-trang-mat-duong` (đã live + PO/Design/SA) |
| GAP-TL-DROPDOWN-01 | Tuyến từ BE search · PCI enum FE (SA) |
| GAP-SA-PC-* | Dev **giữ** live contract; không rewrite domain |

## 7. Out of pack (TL)

CRUD trên slug · migration P1 · warehouse · `ERP.*` · plural `reports` · Kind B catalog config · Form Biểu 1 trên leaf · invent `QL.22` · dashboard KPI gộp · retry ssot_rereview (không retryFrom).

## 8. Handoff Dev (`task` kế · pending)

- Role **chỉ** `/agent-dev` + `/erp-report-context`. Load Design + SA + task này. **Cấm** assume.
- Repo: `confirms.beRepo && uiRepo` **đã approve**. `solution_confirm` **approve**.
- edit_page: Current = `PavementConditionReportPage` (`task_8ea2e70d`); New = đóng GAP filter V1–V5 / toolbar / search=`search` / Config FULL / SoCai — **không** page mới.
- BE write **chỉ** `D:/AI-QLBD/Linm.RMMS.WebService` domain Report. Step 4b nếu đụng API.
- Build HARD trước implement `completed`. Chain enqueue **QA** sau Dev `completed`. Roles QA/Review = **pending** đến lượt.
- Role TL **không** sửa MFE/BE — VERIFY GATE build **N/A**.

<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
