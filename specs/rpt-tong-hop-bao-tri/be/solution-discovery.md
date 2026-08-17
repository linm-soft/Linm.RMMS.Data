# SA — solution-discovery — rpt-tong-hop-bao-tri (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tong-hop-bao-tri` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** (`autoApprove=ON`) |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_619e2d31` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-THBT-02) |
| Feature Kind | **E** · leaf `/bao-cao/tong-hop-bao-tri` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-tong-hop-bao-tri` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/tong-hop-bao-tri` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tong-hop-bao-tri` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_8f13ec25`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **confirmed** · `po/requirement.md` · `task_f96f58fc` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tong-hop-bao-tri-control-hint.md` · hash `sha256:rpt-tong-hop-bao-tri-context-20260816` · handoff `specs/_data-analy/clusters/rpt-tong-hop-bao-tri.md` **không tồn tại** — dùng artifact thật |
| sourceFormReady | **yes** (`specs/maintenance/STATUS.md` done · entity `WorkOrderEntity`) |
| sourceFeature | `maintenance` |
| sourceTables | `WorkOrder` / `rmms_work_orders` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_619e2d31` |
| confirmedBy | agent autoApprove · `task_619e2d31` |
| updatedAt | `2026-08-16T21:15:00.000Z` |
| retry | from `sa` · re-audit live BE + MFE · supersede stub SA `task_1d312ce2` |

> SA **chốt** lookup API + query/export/KPI contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** POST/PUT/DELETE WO trên slug này.  
> **Cấm** reuse `GET api/v1/report/worklogs` (Báo cáo công).  
> **Cấm** reuse `GET api/v1/report/maintenance-work-logs` (Nhật ký công việc).  
> **Cấm** reuse `GET api/v1/maintenance/summary` (`MaintenanceSummaryController` — KPI CRUD nguồn, **không** lưới Kind E).

**Cấm** `GET /api/v1/reports/maintenance-summary` (context cũ — GAP-PO-THBT-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — row `day` string `yyyy-MM-dd` từ `DueAt` · filter `from`/`to` inclusive trên `day` (`FilterDay` ordinal) · **không** DateTimeOffset trên DTO list P1 |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById Report |
| sa_shared_table | **share_na** — không schema warehouse / EF join bắt buộc P1 (GAP-PO-THBT-07 = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_8f13ec25`) |
| repo | `beRepo` + `uiRepo` **true** (packet) — Dev vẫn sau SA+TL |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` · `GetMaintenanceSummaryAsync` / `ExportMaintenanceSummaryCsvAsync` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportMaintenanceSummaryRowDto` · `ReportMaintenanceSummaryKpiDto` · `ReportMaintenanceSummaryPagedResult` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` · `GET maintenance-summary` + `/export` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getMaintenanceSummary` / `exportMaintenanceSummary` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `searchRoadRoutes` |

**Cấm** clone master road-route dưới Report. **Cấm** API CRUD dưới `Domains/Maintenance` cho slug này (drill FE only tới MFE nguồn).

## Live BE vs this pack (delta)

Query + export + KPI envelope + BFF proxy + MFE Kind E **đã có** (prior chain `task_1d312ce2`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-THBT-PREFIX | `GET api/v1/report/maintenance-summary` + `/maintenance-summary/export` | **Giữ** — đóng GAP-PO-THBT-01 · **cấm** `api/v1/reports` · **cấm** `worklogs` / `maintenance-work-logs` · **cấm** `api/v1/maintenance/summary` | document |
| GAP-SA-THBT-ENVELOPE | `ApiResponse<ReportMaintenanceSummaryPagedResult>` `{ success, message, data }` · `data.items` + paging + **`data.kpis`** | **Giữ** · BFF proxy raw · **không** envelope mới | keep |
| GAP-SA-THBT-KPI | `BuildMaintenanceSummaryKpis` trên **full filtered set** (trước `Page`) · 6 field: `totalCount` `newCount` `inProgressCount` `doneCount` `cancelledCount` `emergencyCount` | **LOCK** — KPI **không** chỉ đếm trang hiện tại · `emergencyCount` = `WorkType==emergency` | keep |
| GAP-SA-THBT-ROW | `id` `workOrderId` `code` `title` `day` `route` `workType` `workTypeLabel` `status` `statusLabel` `teamId` `teamName` `assigneeName` `progressPercent` `slaHours` `incidentId` | **Giữ P1** · **cấm** Quantity/UnitCode | keep |
| GAP-SA-THBT-GRID | Live MFE cột khớp Design §2 (Hạn…Sự cố + drill) · `LinCatalogDataColumn` + `ReportDisplayConfigModal` | **Giữ Kind E** — **cấm** bắt `LinCatalogUiSchemaEditorModal` / `CatalogUiSchemaRegistry` (GAP-PO-THBT-11) · **cấm** `LinListTableConfigModal` / `configHint` | FE keep |
| GAP-SA-THBT-TYPE | query **`workType`** canonical · coalesce `workType ?? type` · empty/`all` = all · `repair`/`inspect`/`emergency` | **Giữ** · FE gửi `workType` | keep |
| GAP-SA-THBT-TEAM | query **`teamId`** exact · empty/`all` = all · seed `TEAM-1` `TEAM-2` `TEAM-3` | **Giữ** · đội = **enum seed FE P1** | keep |
| GAP-SA-THBT-ROUTE | `FilterRoute` **exact** · empty/`all` = all · seed 15 WO: `QL.1` `QL.15` `QL.217` `HCM` `QL.7` `QL.10` `QL.8` `QL.9` `CT.001` | **Giữ** GAP-PO-THBT-04 · lookup UI = 38 CUC2 + trống · `CT.001` **nằm CUC2** · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-THBT-SEARCH | Contains `Code`/`Title`/`Route`/`TeamName`/`AssigneeName`/`IncidentId` · query **`q`** · coalesce `q ?? search` | **Giữ** · FE gửi `q` | keep |
| GAP-SA-THBT-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-THBT-EXPORT | CSV UTF-8 BOM · filename **`maintenance-summary.csv`** · header union cột · **không** page | **IN P1** · FE map theo cột đang hiện | keep |
| GAP-SA-THBT-DRILL | Live MFE `drillSource` → `/maintenance?id={workOrderId}` (top window) | **LOCK** — **không** API Report GetById | FE keep |
| GAP-SA-THBT-CHART | `ReportChartModal` SoCai khi `viewed` + ≥1 dòng · series **client** từ `items` + KPI strip từ `kpis` | **Giữ** · **không** API chart riêng P1 | FE keep |
| GAP-SA-THBT-PERM | Không `[RequirePermission]` | **P1 stub** `report.tong-hop-bao-tri.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-THBT-RM | In-memory **15** dòng CUC2 | **P1 giữ** · EF join `rmms_work_orders` **P2** | document |
| GAP-SA-THBT-SEED | 15 `RowMs` mapped WO | **Giữ** · **cấm** clone seed nhật ký `MaintenanceWorkLogs` | keep |

**Không** migration P1. **Không** endpoint mới bắt buộc — live khớp catalog dưới.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| Config | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | FULL — **cấm** `LinListTableConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `configHint` |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |
| Chart | client từ `items` + `kpis` | **không** API chart riêng P1 |
| KPI | server `data.kpis` filtered set | **cấm** FE tự đếm chỉ `items` trang hiện tại cho 6 thẻ |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-THBT | Report A–D + KPI 6 + SoCai | Full page `LinPageLayout` kind=`report` | `/bao-cao/tong-hop-bao-tri` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` stub OK | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/maintenance-summary` |
| Xuất Excel | **API-02** GET `report/maintenance-summary/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại việc | **enum tĩnh FE** `repair`/`inspect`/`emergency` → query `workType` |
| SearchInput đơn vị | **enum tĩnh FE** `TEAM-1`/`TEAM-2`/`TEAM-3` → query `teamId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE WO P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportMaintenanceSummaryPagedResult>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages, kpis } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Maintenance summary (Xem)

`GET /api/v1/report/maintenance-summary?workType=&type=&routeId=&teamId=&from=&to=&q=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/maintenance-summary` + cùng query.

| Query | Rule |
|-------|------|
| `workType` | empty / omit / `all` = all · exact `WorkType` (`repair`/`inspect`/`emergency`) · alias `type` nếu `workType` trống |
| `routeId` | empty / omit / `all` = all · **exact** `Route` |
| `teamId` | empty / omit / `all` = all · exact `TeamId` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `q` | Contains WO · tiêu đề · tuyến · đội · cán bộ · sự cố · alias `search` nếu `q` trống |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportMaintenanceSummaryRowDto`: `id` `workOrderId` `code` `title` `day` `route` `workType` `workTypeLabel` `status` `statusLabel` `teamId` `teamName` `assigneeName` `progressPercent` `slaHours` `incidentId`.

**KPI DTO** `ReportMaintenanceSummaryKpiDto` (aggregation **filtered set**):

| Field | Rule |
|-------|------|
| `totalCount` | count rows |
| `newCount` | `Status==new` |
| `inProgressCount` | `Status==in_progress` |
| `doneCount` | `Status==done` |
| `cancelledCount` | `Status==cancelled` |
| `emergencyCount` | `WorkType==emergency` |

### API-02 — Export maintenance summary

`GET /api/v1/report/maintenance-summary/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `maintenance-summary.csv`.

Header P1 (live):

`day,code,title,route,workType,status,teamName,assigneeName,progressPercent,slaHours,incidentId,workOrderId`

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- **Xem** copy draft → applied → page=1 · `viewed=true`.
- Làm mới: chỉ re-fetch applied; nếu `!viewed` → toast, **không** load.
- Excel khi `!viewed` → toast, **không** gọi export.
- Drill: FE `/maintenance?id={workOrderId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` + `kpis` — **không** API chart riêng P1.
- KPI 6 thẻ: **chỉ** bind `data.kpis` sau Xem.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| workType | SearchInput | enum FE → query `workType` | `repair`/`inspect`/`emergency` — **cấm** native Select |
| teamId | SearchInput | enum FE → query `teamId` | `TEAM-1`/`TEAM-2`/`TEAM-3` — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | trên `day` / `DueAt` |
| qSearch | Input | query `q` | WO · tiêu đề · tuyến |

Grid columns = DTO scalars readonly. **Không** editor. Drill = button FE.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.tong-hop-bao-tri.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD `maintenance` / WO trên slug này · dòng sổ `MaintenanceWorkLog` · reuse `maintenance-work-logs` · KPI ca / map InZone · reuse `worklogs` · `GET api/v1/maintenance/summary` · cột KL/ĐVT P1 · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B `LinCatalogUiSchemaEditorModal` bắt buộc · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI slug khác · endpoint mới bắt buộc · POST/PUT/DELETE.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E + KPI 6) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput · Xem mới load · Excel UTF-8 BOM · Config FULL report modal · SoCai · drill `/maintenance?id=` · KPI 6 từ `data.kpis` filtered set.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task = `roleOnly=sa` · **không** chạy TL trong `task_619e2d31`.

## Build (this role)

SA **không** sửa MFE/BE runtime. Verify = live contract audit (`ReportQueryController` · `ReportService` seed 15 + KPI trên filtered set · DTO · BFF · MFE `getMaintenanceSummary` + KPI 6 + Config FULL). DOMAIN-MAP slug row. **Không** `yarn build` / `dotnet build` trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
