# SA — solution-discovery — rpt-tngt (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tngt` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_9e257166` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-TNGT-02) |
| Feature Kind | **E** · leaf `/bao-cao/tngt` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-tngt` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/tngt` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tngt` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_95e8c936` |
| prior · po | **confirmed** · `po/requirement.md` · `task_c9e6332c` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tngt-control-hint.md` · hash `sha256:rpt-tngt-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_9e257166` |
| confirmedBy | agent autoApprove · `task_9e257166` |
| updatedAt | `2026-08-16T20:22:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` (`IncidentEntity` · `IncidentType = TNGT`) |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_46a44cfc` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/traffic-accidents` (context cũ — GAP-PO-TNGT-01 **đóng**).  
**Cấm** reuse `GET report/incidents` (`rpt-su-co`) cho leaf TNGT. **Cấm** copy CRUD `incident`. **Cấm** 6 slug trùng filter.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`at` ← `RequestedAt`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only (`TimeOfDay==0`) = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_incidents` type=TNGT (GAP-PO-TNGT-07) — **không** bảng báo cáo riêng |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_95e8c936`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` · `GetTrafficAccidentsAsync` / `ExportTrafficAccidentsCsvAsync` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportIncidentRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `IncidentEntity` → `rmms_incidents` type=TNGT |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` · `GET traffic-accidents` + `/export` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getTrafficAccidents` / `exportTrafficAccidents` · page `TrafficAccidentReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Incident` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `traffic-accidents` làm trang này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_46a44cfc`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-TNGT-PREFIX | `GET api/v1/report/traffic-accidents` + `/traffic-accidents/export` · BFF cùng path | **Giữ** — đóng GAP-PO-TNGT-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-TNGT-ENVELOPE | `ApiResponse<ReportPagedResult<ReportIncidentRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-TNGT-ROW | `id` `code` `route` `type` `severity` `status` `at` | **Giữ** — map `IncidentEntity`: `Id` `Code` `RouteName` `IncidentType` `Severity` `Status` `RequestedAt` · drill dùng `id` | keep |
| GAP-SA-TNGT-TYPE | query `type` **bị bỏ** (`_ = type`) · seed **luôn** `Type=TNGT` | **Giữ** khóa TNGT — **cấm** filter loại sự cố trên leaf · **cấm** FE gửi `type` đổi loại · **cấm** `GET report/incidents` | keep |
| GAP-SA-TNGT-TAB | query `tab` default `monthly` · **chỉ** tab `serious` + severity trống → gán `Nghiêm trọng` trên BE | **Giữ** · 6 tab **một** slug: `monthly` · `half-year` · `serious` · `compare` · `summary` · `stats` · **không** 6 endpoint · half-year / compare / summary / stats = **cùng row set** + filter FE (kỳ) — **không** aggregation API P1 | keep |
| GAP-SA-TNGT-SEV | `severity` exact ignore-case trên `Severity` | **Giữ** SearchInput Cao / TB / Nghiêm trọng / Thấp · tab `serious` default FE+BE | keep |
| GAP-SA-TNGT-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` | **Giữ** GAP-PO-TNGT-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-TNGT-SEARCH | Contains `Code`/`Route`/`Type`/`Status` · query **`search`** (không alias `q`) | **Giữ** · FE `search` (PO qSearch) · **không** thêm `q` P1 | keep |
| GAP-SA-TNGT-DATE | `FilterDate` trên `At` · `from` inclusive · `to` date-only → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` · tab `half-year` = FE set from = to − 6 tháng **trước** Xem | keep |
| GAP-SA-TNGT-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-TNGT-EXPORT | CSV UTF-8 BOM `traffic-accidents.csv` · header `code,route,type,severity,status,at,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-TNGT-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-TNGT-PERM | Không `[RequirePermission]` | **P1 stub** `report.tngt.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-TNGT-RM | In-memory **12** dòng CUC2 map entity type=TNGT (`TrafficAccidents` t1–t12) | **P1 giữ** · EF `rmms_incidents` **P2** | document |
| GAP-SA-TNGT-INIT | Không `init-data` tab/mức | **OUT P1** — loại thống kê + mức = enum tĩnh FE | FE only |
| GAP-SA-TNGT-CHART | Không API chart | **Giữ** — SoCai client từ `items` (`by-severity` · `by-route`) khi viewed ∧ ≥1 dòng | FE only |
| GAP-SA-TNGT-MAP | DOMAIN-MAP `rpt-tngt` → Report · `report` | **Đóng** — đã có | document |
| GAP-SA-TNGT-HUB | Hub `ReportListPage` | **Cấm** làm trang leaf — leaf = `TrafficAccidentReportPage` | FE keep |
| GAP-SA-TNGT-KIND-B | — | **Cấm** `LinCatalogUiSchemaEditorModal` / catalog schema seed trên slug này | FE keep |

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
| S-TNGT | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/tngt` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số dòng theo mức · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/traffic-accidents` |
| Xuất Excel | **API-02** GET `report/traffic-accidents/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại thống kê | **enum tĩnh FE** → query `tab` |
| SearchInput mức | **enum tĩnh FE** → query `severity` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE traffic-accident/incident rows trên slug này. **Cấm** query `status` trên API traffic-accidents P1 (cột TT display-only). **Cấm** dùng query `type` để đổi loại sự cố.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportIncidentRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Traffic accidents (Xem)

`GET /api/v1/report/traffic-accidents?tab=&type=&routeId=&severity=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/traffic-accidents` + cùng query.

| Query | Rule |
|-------|------|
| `tab` | `monthly` (default) · `half-year` · `serious` · `compare` · `summary` · `stats` · `serious` + `severity` trống → BE gán `Nghiêm trọng` |
| `type` | **ignored** P1 — dataset khóa TNGT |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `severity` | exact ignore-case `Severity` · omit = all (trừ tab serious default) |
| `from`/`to` | filter `At` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Code`/`Route`/`Type`/`Status` |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportIncidentRowDto`: `id` `code` `route` `type` `severity` `status` `at`.

### API-02 — Export traffic accidents

`GET /api/v1/report/traffic-accidents/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `traffic-accidents.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo TNGT.»). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Tab `half-year`: FE set kỳ 6 tháng trên draft **trước** Xem — BE không tự cắt 6 tháng khi `tab=half-year` nếu `from`/`to` đã gửi.
- Drill: FE `/incident?id={id}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| tab | SearchInput | enum FE → query `tab` | monthly · half-year · serious · compare · summary · stats — **cấm** native Select · **cấm** 6 feature |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| severity | SearchInput | enum FE → query `severity` | Cao / TB / Nghiêm trọng / Thấp |
| fromDate / toDate | Date | query `from`/`to` | `RequestedAt` / DTO `at` |
| qSearch | Input | query `search` | mã · tuyến · TT |

Grid columns = DTO scalars readonly. **Không** editor. Cột loại = `type` luôn TNGT display-only.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.tngt.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD sự cố trên slug này (thuộc `incident`) · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1 · tách 6 slug · filter loại sự cố · reuse `GET report/incidents`.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tab/tuyến/mức · Date kỳ · Input tìm · Xem mới load · Excel `traffic-accidents.csv` · Config FULL · SoCai (by-severity · by-route) · drill `/incident?id=` · type khóa TNGT · 6 tab một slug.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task `roleOnly=sa` · **không** chạy TL trong `task_9e257166`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
