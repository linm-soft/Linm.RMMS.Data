# SA — solution-discovery — rpt-su-co (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-su-co` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_e98abc5b` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-SC-02) |
| Feature Kind | **E** · leaf `/bao-cao/su-co` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-su-co` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/su-co` |
| mfeStdUrl | `http://localhost:9311/bao-cao/su-co` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_6b0f9f87` |
| prior · po | **confirmed** · `po/requirement.md` · `task_608c596b` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-su-co-control-hint.md` · hash `sha256:rpt-su-co-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_e98abc5b` |
| confirmedBy | agent autoApprove · `task_e98abc5b` |
| updatedAt | `2026-08-16T16:55:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` (`IncidentEntity`) |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_4906443c` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/incidents` (context cũ — GAP-PO-SC-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`at` ← `RequestedAt`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_incidents` (GAP-PO-SC-06) — **không** bảng báo cáo riêng |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_6b0f9f87`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `IncidentEntity` → `rmms_incidents` |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getIncidents` / `exportIncidents` · page `IncidentReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Incident` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `incidents` làm trang này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_4906443c`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-SC-PREFIX | `GET api/v1/report/incidents` + `/incidents/export` · BFF cùng path | **Giữ** — đóng GAP-PO-SC-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-SC-ENVELOPE | `ApiResponse<ReportPagedResult<ReportIncidentRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-SC-ROW | `id` `code` `route` `type` `severity` `status` `at` | **Giữ** — map `IncidentEntity`: `Id` `Code` `RouteName` `IncidentType` `Severity` `Status` `RequestedAt` · drill dùng `id` | keep |
| GAP-SA-SC-TYPE | query `type` exact ignore-case trên `Type` (loại sự cố) | **Giữ** · FE `INCIDENT_TYPE_LOOKUP` (Ổ gà / Nứt dọc / Sạt lở / TNGT / Ngập úng / Vi phạm HL) · **cấm** `INCIDENT_KIND_LOOKUP` monthly/half-year trên leaf | keep |
| GAP-SA-SC-SEV-ST | `severity` `status` exact ignore-case | **Giữ** · Cao/TB/Nghiêm trọng/Thấp · Mở/Đang xử lý/Đóng | keep |
| GAP-SA-SC-PERIOD | query `period` accepted, **không** slice (`_ = period`) | **P1 giữ** | document |
| GAP-SA-SC-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` | **Giữ** GAP-PO-SC-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-SC-SEARCH | Contains `Code`/`Route`/`Type`/`Status` · query `search` | **Giữ** · PO ghi mã·tuyến·loại — live thêm `Status` **OK** · **cấm** query `q` riêng P1 | keep |
| GAP-SA-SC-DATE | `FilterDate` trên `At` · `from` inclusive · `to` date-only (`TimeOfDay==0`) → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` | keep |
| GAP-SA-SC-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-SC-EXPORT | CSV UTF-8 BOM `incidents.csv` · header `code,route,type,severity,status,at,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-SC-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-SC-PERM | Không `[RequirePermission]` | **P1 stub** `report.su-co.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-SC-RM | In-memory **12** dòng CUC2 map entity | **P1 giữ** · EF `rmms_incidents` **P2** | document |
| GAP-SA-SC-INIT | Không `init-data` incidents | **OUT P1** — loại/mức/TT = enum tĩnh FE | FE only |
| GAP-SA-SC-CHART | Không API chart | **Giữ** — SoCai client từ `items` (by-severity · by-route) khi viewed ∧ ≥1 dòng | FE only |
| GAP-SA-SC-MAP | DOMAIN-MAP thiếu slug `rpt-su-co` | **Đóng** — thêm `rpt-su-co` → Report · `api/v1/report` (GAP-PO-SC-09) | this pack |
| GAP-SA-SC-HUB | Hub `ReportListPage` family `incidents` + `INCIDENT_KIND_LOOKUP` | **Cấm** làm trang leaf — leaf = `IncidentReportPage` | FE keep |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |
| Chart | client từ `items` | **không** API chart riêng P1 |
| Config | report FULL | `ReportDisplayConfigModal` / `LinReportTableConfigModal` — **cấm** Kind B `LinCatalogUiSchemaEditorModal` · **cấm** `LinListTableConfigModal` · **cấm** `configHint` |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-SC | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/su-co` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số dòng theo mức · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/incidents` |
| Xuất Excel | **API-02** GET `report/incidents/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại / mức / TT | **enum tĩnh FE** → query `type` / `severity` / `status` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE incident rows trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportIncidentRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Incidents (Xem)

`GET /api/v1/report/incidents?type=&routeId=&severity=&status=&from=&to=&search=&period=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/incidents` + cùng query.

| Query | Rule |
|-------|------|
| `type` | exact ignore-case `Type` (loại sự cố) · omit = all |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `severity` | exact ignore-case |
| `status` | exact ignore-case |
| `from`/`to` | filter `At` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Code`/`Route`/`Type`/`Status` |
| `period` | accept · **không** slice P1 |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportIncidentRowDto`: `id` `code` `route` `type` `severity` `status` `at`.

### API-02 — Export incidents

`GET /api/v1/report/incidents/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `incidents.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem»…»). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Drill: FE `/incident?id={id}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| type | SearchInput | enum FE → query `type` | IncidentType seed — **cấm** native Select · **cấm** `INCIDENT_KIND_LOOKUP` trên leaf |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| severity | SearchInput | enum FE → query `severity` | Cao / TB / Nghiêm trọng / Thấp |
| status | SearchInput | enum FE → query `status` | Mở / Đang xử lý / Đóng |
| fromDate / toDate | Date | query `from`/`to` | `RequestedAt` / DTO `at` |
| qSearch | Input | query `search` | mã · tuyến · loại (+ TT live) |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.su-co.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD sự cố trên slug này (thuộc `incident`) · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput loại/tuyến/mức/TT · Xem mới load · Excel `incidents.csv` · Config FULL · SoCai · drill `/incident?id=`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
