# SA — solution-discovery — rpt-nhat-ky-cong-viec (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-cong-viec` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_4b89298e` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-NKCV-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-cong-viec` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-nhat-ky-cong-viec` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/nhat-ky-cong-viec` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-cong-viec` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_ce108fb8`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **confirmed** · `po/requirement.md` · `task_210ffbf8` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-nhat-ky-cong-viec-control-hint.md` · hash `sha256:rpt-nhat-ky-cong-viec-context-20260816` · handoff path `specs/_data-analy/clusters/…` **không tồn tại** — dùng artifact thật |
| sourceFormReady | **yes** (`specs/maintenance/STATUS.md` done · CSDL §3.7) |
| sourceFeature | `maintenance` |
| sourceTables | `MaintenanceWorkLog` · `WorkOrder` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_4b89298e` |
| confirmedBy | agent autoApprove · `task_4b89298e` |
| updatedAt | `2026-08-16T14:50:00.000Z` |
| retry | from `sa` · re-audit live BE + MFE · supersede stub SA `task_bdec4f7e` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** POST/PUT/DELETE WO / nhật ký trên slug này.  
> **Cấm** reuse `GET api/v1/report/worklogs` (Báo cáo công · KPI/map).

**Cấm** `GET /api/v1/reports/work-logs` (context cũ — GAP-PO-NKCV-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — row `day` string `yyyy-MM-dd` · filter `from`/`to` inclusive trên `day` (`FilterDay` ordinal) · `loggedAt` ISO +07 seed P1 · **không** DateTimeOffset trên DTO list P1 bắt buộc UI |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / EF join bắt buộc P1 (GAP-PO-NKCV-07 = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_ce108fb8`) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportMaintenanceWorkLogRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getMaintenanceWorkLogs` / `exportMaintenanceWorkLogs` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `searchRoadRoutes` / `ROAD_ROUTE_LOOKUP_CONFIG` |

**Cấm** clone master road-route dưới Report. **Cấm** API CRUD dưới `Domains/Maintenance` cho slug này (drill FE only tới MFE nguồn).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-NKCV-PREFIX | `GET api/v1/report/maintenance-work-logs` + `/maintenance-work-logs/export` | **Giữ** — đóng GAP-PO-NKCV-01 · **cấm** `api/v1/reports` · **cấm** `worklogs` | document |
| GAP-SA-NKCV-ENVELOPE | `ApiResponse<ReportPagedResult<ReportMaintenanceWorkLogRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block trên DTO | document |
| GAP-SA-NKCV-ROW | `id` `workLogId` `seq` `day` `loggedAt` `route` `workOrderId` `workOrderCode` `workName` `locationKm` `quantity` `unitCode` `status` `statusLabel` `workType` `workTypeLabel` `teamId` `teamName` `contractor` `office` `methodSummary` `mainResult` | **Giữ P1 trên BE** — DTO **đã có** PP/kết quả | keep |
| GAP-SA-NKCV-GRID | Live MFE **thiếu** cột `methodSummary` / `mainResult` (Design GAP-DS-NKCV-01) | **IN Dev** — thêm 2 cột + seed config FULL · **cấm** Col1–Col3 | FE Dev |
| GAP-SA-NKCV-TYPE | query **`workType`** canonical · coalesce `workType ?? type` · empty/`all` = all · values `repair`/`inspect`/`emergency` | **Giữ** · FE gửi `workType` · **cấm** dùng `type` làm tab | keep |
| GAP-SA-NKCV-TEAM | query **`teamId`** exact · empty/`all` = all · seed `TEAM-1` `TEAM-2` `TEAM-3` | **Giữ** · đội = **enum seed FE P1** | keep |
| GAP-SA-NKCV-ROUTE | `FilterRoute` **exact** (không prefix) · empty/`all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `QL.7` `QL.10` `QL.8` `QL.9` `CT.001` | **Giữ** GAP-PO-NKCV-04 · lookup UI = 38 CUC2 + trống · `CT.001` **nằm CUC2** · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-NKCV-SEARCH | Contains `WorkOrderCode`/`WorkName`/`Route`/`TeamName`/`Contractor`/`MainResult` · query **`q`** canonical · coalesce `q ?? search` | **Giữ** · FE gửi `q` · alias `search` OK | keep |
| GAP-SA-NKCV-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-NKCV-EXPORT | CSV UTF-8 BOM · filename **`maintenance-work-logs.csv`** · header đủ cột union · **không** page | **IN P1** · FE map theo cột đang hiện | keep |
| GAP-SA-NKCV-DRILL | Live MFE `drillSource` → `/maintenance?id={workOrderId}` (top window) · seed `WorkOrderId` = mã WO | **LOCK live** — **không** API Report GetById | FE keep |
| GAP-SA-NKCV-FOOTER | Live `LinCatalogListPagination` | Zone D **luôn** hiện — **FE only** | FE Dev |
| GAP-SA-NKCV-PERM | Không `[RequirePermission]` | **P1 stub** `report.nhat-ky-cong-viec.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-NKCV-RM | In-memory **12** dòng CUC2 · DTO đã map `MethodSummary`/`MainResult` | **P1 giữ** · EF join `MaintenanceWorkLog`/`WorkOrder` **P2** | document |
| GAP-SA-NKCV-KPI-MAP | Không KPI dashboard / map InZone trên DTO | **Giữ** — Chart SoCai **client** từ `items` · **cấm** gộp `rpt-bao-cao-cong` | document |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới. **Dev FE** = GAP-SA-NKCV-GRID.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| Config | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | FULL — **cấm** `LinListTableConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `configHint` |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |
| Chart | client từ `items` | **không** API chart riêng P1 |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-NKCV | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/nhat-ky-cong-viec` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng (số dòng theo ngày · loại việc · tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` stub OK | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/maintenance-work-logs` |
| Xuất Excel | **API-02** GET `report/maintenance-work-logs/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại việc | **enum tĩnh FE** `repair`/`inspect`/`emergency` → query `workType` |
| SearchInput đội | **enum tĩnh FE** `TEAM-1`/`TEAM-2`/`TEAM-3` → query `teamId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE work-log / WO P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportMaintenanceWorkLogRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Maintenance work logs (Xem)

`GET /api/v1/report/maintenance-work-logs?workType=&type=&routeId=&teamId=&from=&to=&q=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/maintenance-work-logs` + cùng query.

| Query | Rule |
|-------|------|
| `workType` | empty / omit / `all` = all · exact `WorkType` (`repair`/`inspect`/`emergency`) · alias `type` nếu `workType` trống |
| `routeId` | empty / omit / `all` = all · **exact** `Route` |
| `teamId` | empty / omit / `all` = all · exact `TeamId` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `q` | Contains WO · hạng mục · tuyến · đội · nhà thầu · kết quả · alias `search` nếu `q` trống |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportMaintenanceWorkLogRowDto`: `id` `workLogId` `seq` `day` `loggedAt` `route` `workOrderId` `workOrderCode` `workName` `locationKm` `quantity` `unitCode` `status` `statusLabel` `workType` `workTypeLabel` `teamId` `teamName` `contractor` `office` `methodSummary` `mainResult`.

Grid P1 bắt buộc gồm `methodSummary` (PP) + `mainResult` (kết quả) — BE đã có; FE Dev thêm cột.

### API-02 — Export maintenance work logs

`GET /api/v1/report/maintenance-work-logs/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `maintenance-work-logs.csv`.

Header P1 (live):

`seq,day,route,workOrderCode,workName,locationKm,quantity,unitCode,status,workType,teamName,contractor,office,methodSummary,mainResult,workLogId,workOrderId`

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- **Xem** copy draft → applied → page=1 · `viewed=true`.
- Làm mới: chỉ re-fetch applied; nếu `!viewed` → toast, **không** load (GAP-DS-NKCV-10).
- Drill: FE `/maintenance?id={workOrderId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| workType | SearchInput | enum FE → query `workType` | `repair`/`inspect`/`emergency` — **cấm** native Select |
| teamId | SearchInput | enum FE → query `teamId` | `TEAM-1`/`TEAM-2`/`TEAM-3` — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | trên `day` |
| qSearch | Input | query `q` | WO · hạng mục · tuyến |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.nhat-ky-cong-viec.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD `maintenance` / WO trên slug này · KPI 4 · map InZone · reuse `WorklogReportPage` / `api/v1/report/worklogs` · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI slug khác · endpoint mới bắt buộc · POST/PUT/DELETE.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput · Xem mới load · Excel UTF-8 BOM · Config FULL report modal · SoCai · drill `/maintenance?id=` · **cột PP + kết quả**.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task = `roleOnly=sa` · **không** chạy TL trong `task_4b89298e`.

## Build (this role)

SA **không** sửa MFE/BE runtime. Verify = live contract audit (controller · service · DTO · BFF · MFE endpoint + grid GAP). DOMAIN-MAP slug row. **Không** `yarn build` / `dotnet build` trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
