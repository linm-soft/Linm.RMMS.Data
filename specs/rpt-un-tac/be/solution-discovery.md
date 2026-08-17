# SA — solution-discovery — rpt-un-tac (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-un-tac` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_b1d0b537` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-UNTAC-02) |
| Feature Kind | **E** · leaf `/bao-cao/un-tac` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-un-tac` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/un-tac` |
| mfeStdUrl | `http://localhost:9311/bao-cao/un-tac` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_e992f75f` |
| prior · po | **confirmed** · `po/requirement.md` · `task_df0cd995` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-un-tac-control-hint.md` · hash `sha256:rpt-un-tac-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_b1d0b537` |
| confirmedBy | agent autoApprove · `task_b1d0b537` |
| updatedAt | `2026-08-16T16:35:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` (`IncidentEntity` · `IncidentType` ∈ {Ùn tắc, Ngập úng}) |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_e49f5eb8` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/congestion` (context cũ — GAP-PO-UNTAC-01 **đóng**).  
**Cấm** reuse `GET report/incidents` (`rpt-su-co`) hay `GET report/traffic-accidents` (`rpt-tngt`) cho leaf này. **Cấm** copy CRUD `incident`. **Cấm** mix TNGT / loại khác trên dataset.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`at` ← `RequestedAt`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only (`TimeOfDay==0`) = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_incidents` type ∈ {Ùn tắc, Ngập úng} (GAP-PO-UNTAC-07) — **không** bảng báo cáo riêng |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_e992f75f`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` · `GetCongestionAsync` / `ExportCongestionCsvAsync` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportCongestionRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `IncidentEntity` → `rmms_incidents` type ∈ {Ùn tắc, Ngập úng} · **cấm** cột `DurationMin` entity P1 |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` · `GET congestion` + `/export` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getCongestion` / `exportCongestion` · page `CongestionReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Incident` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `congestion` làm trang này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_e49f5eb8`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-UNTAC-PREFIX | `GET api/v1/report/congestion` + `/congestion/export` · BFF cùng path | **Giữ** — đóng GAP-PO-UNTAC-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-UNTAC-ENVELOPE | `ApiResponse<ReportPagedResult<ReportCongestionRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-UNTAC-ROW | `id` `code` `route` `km` `type` `durationMin` `status` `at` | **Giữ** — map `IncidentEntity`: `Id` `Code` `RouteName` `KmStart`–`KmEnd` `IncidentType` `Status` `RequestedAt` · `DurationMin` **P1 seed DTO** · drill dùng `id` | keep |
| GAP-SA-UNTAC-TYPE | query `type` exact ignore-case trên `Type` · seed chỉ `Ùn tắc` \| `Ngập úng` | **Giữ** khóa hai loại — **cấm** mix TNGT · FE `CONGESTION_TYPE_LOOKUP` value = `Ùn tắc` / `Ngập úng` · omit type = tất cả trong seed | keep |
| GAP-SA-UNTAC-STATUS-Q | query `status` **có** trên API (`FilterCongestion`) | **Giữ BE** (optional) · Design **không** filter TT → FE **cấm** gửi `status` P1 · cột TT display-only | BE keep · FE cấm filter |
| GAP-SA-UNTAC-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` | **Giữ** GAP-PO-UNTAC-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-UNTAC-SEARCH | Contains `Code`/`Route`/`Type`/`Km`/`Status` · query **`search`** (không alias `q`) | **Giữ** · FE `search` (PO qSearch) · **không** thêm `q` P1 | keep |
| GAP-SA-UNTAC-DATE | `FilterDate` trên `At` · `from` inclusive · `to` date-only → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` | keep |
| GAP-SA-UNTAC-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-UNTAC-EXPORT | CSV UTF-8 BOM `congestion.csv` · header `code,route,km,type,durationMin,status,at,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-UNTAC-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-UNTAC-PERM | Không `[RequirePermission]` | **P1 stub** `report.un-tac.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-UNTAC-RM | In-memory **12** dòng CUC2 map entity type=Ùn tắc\|Ngập úng (`Congestion` c1–c12) | **P1 giữ** · EF `rmms_incidents` **P2** | document |
| GAP-SA-UNTAC-DURATION | `DurationMin` trên DTO + seed · **không** cột entity | **Giữ P1** · entity **DEFER P2** · **cấm** migration P1 | keep |
| GAP-SA-UNTAC-CHART | Không API chart | **Giữ** — SoCai client từ `items` (`by-type` · `by-route`) khi viewed ∧ ≥1 dòng · KPI Dòng · Tuyến · Ùn tắc | FE only |
| GAP-SA-UNTAC-MAP | DOMAIN-MAP `rpt-un-tac` → Report · `report` | **Đóng** — đã có | document |
| GAP-SA-UNTAC-HUB | Hub `ReportListPage` | **Cấm** làm trang leaf — leaf = `CongestionReportPage` | FE keep |
| GAP-SA-UNTAC-KIND-B | — | **Cấm** `LinCatalogUiSchemaEditorModal` / catalog schema seed trên slug này | FE keep |
| GAP-SA-UNTAC-DRAFT | Live `queryParams` gộp draft type/route/from/to/search + `load` phụ thuộc khi `viewed` | **GAP TL/Dev** — Design: đổi filter = draft, lưới giữ applied đến lần **Xem**; tách `applied` vs `draft` (cấm refetch khi gõ filter) | FE Dev |

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
| S-UNTAC | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/un-tac` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số dòng theo loại · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/congestion` |
| Xuất Excel | **API-02** GET `report/congestion/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại | **enum tĩnh FE** `CONGESTION_TYPE_LOOKUP` → query `type` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE congestion/incident rows trên slug này. **Cấm** query `status` từ FE P1 (cột TT display-only). **Cấm** dùng `GET report/incidents` / `traffic-accidents`.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportCongestionRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Congestion (Xem)

`GET /api/v1/report/congestion?type=&routeId=&status=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/congestion` + cùng query.

| Query | Rule |
|-------|------|
| `type` | exact ignore-case `Type` · `Ùn tắc` \| `Ngập úng` · omit = all in seed |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `status` | exact ignore-case `Status` · **FE không gửi P1** |
| `from`/`to` | filter `At` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Code`/`Route`/`Type`/`Km`/`Status` |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportCongestionRowDto`: `id` `code` `route` `km` `type` `durationMin` `status` `at`.

### API-02 — Export congestion

`GET /api/v1/report/congestion/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `congestion.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo ùn tắc / ngập úng.»). Đổi page/pageSize sau viewed = refetch cùng **applied** filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Drill: FE `/incident?id={id}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.
- Dataset P1 seed **chỉ** Ùn tắc / Ngập úng — **cấm** TNGT trên leaf.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| type | SearchInput | enum FE → query `type` | `CONGESTION_TYPE_LOOKUP` Ùn tắc / Ngập úng · trống = tất cả · **cấm** native Select · **cấm** TNGT |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| fromDate / toDate | Date | query `from`/`to` | `RequestedAt` / DTO `at` |
| qSearch | Input | query `search` | mã · tuyến · loại · km |

Grid columns = DTO scalars readonly. **Không** editor. Cột thời lượng = `durationMin` P1 DTO.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.un-tac.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD sự cố trên slug này (thuộc `incident`) · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1 · cột DurationMin entity P1 · mix TNGT · reuse `GET report/incidents` / `traffic-accidents` · ITS/TOC overlay P3 · filter trạng thái trên UI P1.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput loại/tuyến · Date kỳ · Input tìm · Xem mới load · Excel `congestion.csv` · Config FULL · SoCai (by-type · by-route) · drill `/incident?id=` · type khóa Ùn tắc\|Ngập úng · **GAP-SA-UNTAC-DRAFT** tách applied/draft.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task `roleOnly=sa` · **không** chạy TL trong `task_b1d0b537`.
- Role này **docs-only** — không đụng API/MFE code → không `yarn build` / `dotnet build`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
