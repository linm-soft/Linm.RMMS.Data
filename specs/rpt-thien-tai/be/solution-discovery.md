# SA — solution-discovery — rpt-thien-tai (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-thien-tai` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_11c414f1` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-TT-11) |
| Feature Kind | **E** · leaf `/bao-cao/thien-tai` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-thien-tai` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/thien-tai` |
| mfeStdUrl | `http://localhost:9311/bao-cao/thien-tai` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_8236dc10` |
| prior · po | **confirmed** · `po/requirement.md` · `task_601aadfd` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-thien-tai-control-hint.md` · hash `sha256:rpt-thien-tai-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_11c414f1` |
| confirmedBy | agent autoApprove · `task_11c414f1` |
| updatedAt | `2026-08-16T18:20:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` (`IncidentEntity`) |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_b580eac0` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/disasters` (context cũ — GAP-PO-TT-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`at` ← `RequestedAt`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_incidents` type=disaster (GAP-PO-TT-06) — **không** bảng báo cáo riêng |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_8236dc10`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportDisasterRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `IncidentEntity` → `rmms_incidents` |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getDisasters` / `exportDisasters` · page `DisasterReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Incident` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `disasters` làm trang này. **Cấm** reuse `GET report/incidents` (`rpt-su-co`) cho leaf thiên tai.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_b580eac0`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-TT-PREFIX | `GET api/v1/report/disasters` + `/disasters/export` · BFF cùng path | **Giữ** — đóng GAP-PO-TT-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-TT-ENVELOPE | `ApiResponse<ReportPagedResult<ReportDisasterRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-TT-ROW | `id` `route` `type` `kmRange` `severity` `damageSummary` `at` | **Giữ** — map `IncidentEntity`: `Id` `RouteName` `IncidentType` `KmStart`–`KmEnd` `Severity` `Description` `RequestedAt` · drill dùng `id` | keep |
| GAP-SA-TT-TYPE | query `type` exact ignore-case trên `Type` | **Giữ** · FE enum Bão / Lũ / Sạt lở / Ngập úng / Lốc / Sét · **cấm** `INCIDENT_TYPE_LOOKUP` ổ gà/TNGT trên leaf này | keep |
| GAP-SA-TT-SEV | `severity` **trên DTO/grid** — **không** query filter mức | **Giữ** GAP-PO-TT (filter mức thuộc `rpt-su-co`) | keep |
| GAP-SA-TT-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` | **Giữ** GAP-PO-TT-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-TT-SEARCH | Contains `Route`/`Type`/`KmRange`/`DamageSummary` · query `search` **hoặc** alias `q` (BE gộp) | **Giữ** · FE ưu tiên `search` (PO qSearch) · **không** bắt thêm query riêng P1 | keep |
| GAP-SA-TT-DATE | `FilterDate` trên `At` · `from` inclusive · `to` date-only (`TimeOfDay==0`) → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` | keep |
| GAP-SA-TT-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-TT-EXPORT | CSV UTF-8 BOM `disasters.csv` · header `at,route,type,kmRange,severity,damageSummary,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-TT-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-TT-PERM | Không `[RequirePermission]` | **P1 stub** `report.thien-tai.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-TT-RM | In-memory **12** dòng CUC2 map entity type=disaster | **P1 giữ** · EF `rmms_incidents` **P2** | document |
| GAP-SA-TT-INIT | Không `init-data` disasters | **OUT P1** — loại = enum tĩnh FE | FE only |
| GAP-SA-TT-CHART | Không API chart | **Giữ** — SoCai client từ `items` (by-type · by-route) khi viewed ∧ ≥1 dòng | FE only |
| GAP-SA-TT-MAP | DOMAIN-MAP `rpt-thien-tai` → Report · `report` | **Đóng** — đã có | document |
| GAP-SA-TT-HUB | Hub `ReportListPage` | **Cấm** làm trang leaf — leaf = `DisasterReportPage` | FE keep |
| GAP-SA-TT-KIND-B | — | **Cấm** `LinCatalogUiSchemaEditorModal` / catalog schema seed trên slug này | FE keep |

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
| S-TT | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/thien-tai` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số dòng theo loại · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/disasters` |
| Xuất Excel | **API-02** GET `report/disasters/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại sự kiện | **enum tĩnh FE** → query `type` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE disaster/incident rows trên slug này. **Cấm** query `severity`/`status` trên API disasters P1.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportDisasterRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Disasters (Xem)

`GET /api/v1/report/disasters?type=&routeId=&from=&to=&search=&q=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/disasters` + cùng query.

| Query | Rule |
|-------|------|
| `type` | exact ignore-case `Type` (loại thiên tai) · omit = all |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `from`/`to` | filter `At` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Route`/`Type`/`KmRange`/`DamageSummary` |
| `q` | alias `search` khi `search` trống (live BE) |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportDisasterRowDto`: `id` `route` `type` `kmRange` `severity` `damageSummary` `at`.

### API-02 — Export disasters

`GET /api/v1/report/disasters/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `disasters.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo thiên tai.»). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Drill: FE `/incident?id={id}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| type | SearchInput | enum FE → query `type` | Bão / Lũ / Sạt lở / Ngập úng / Lốc / Sét — **cấm** native Select |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| fromDate / toDate | Date | query `from`/`to` | `RequestedAt` / DTO `at` |
| qSearch | Input | query `search` (`q` alias BE) | tuyến · loại · km · thiệt hại |

Grid columns = DTO scalars readonly. **Không** editor. Cột mức = `severity` display-only.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.thien-tai.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD sự cố trên slug này (thuộc `incident`) · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1 · filter mức/TT trên slug này (`rpt-su-co`).

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput loại/tuyến · Date kỳ · Input tìm · Xem mới load · Excel `disasters.csv` · Config FULL · SoCai (by-type · by-route) · drill `/incident?id=`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task `roleOnly=sa` · **không** chạy TL trong `task_11c414f1`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
