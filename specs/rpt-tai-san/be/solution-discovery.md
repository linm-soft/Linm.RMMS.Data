# SA — solution-discovery — rpt-tai-san (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tai-san` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_5d70c2dc` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-TS-12) |
| Feature Kind | **E** · leaf `/bao-cao/tai-san` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-tai-san` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/tai-san` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tai-san` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_96d0a2fe` |
| prior · po | **confirmed** · `po/requirement.md` · `task_0fd2c3c0` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tai-san-control-hint.md` · hash `sha256:rpt-tai-san-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_5d70c2dc` |
| confirmedBy | agent autoApprove · `task_5d70c2dc` |
| updatedAt | `2026-08-16T17:30:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `asset` |
| sourceTables | `rmms_road_assets` (`RoadAssetEntity`) |
| sa_tz_gate | `tz_day` |
| sa_xco_gate | `xco_na` |
| sa_shared_table | `share_na` P1 · P2 `share_tenant` trên `rmms_road_assets` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA ngắn (prior `task_2bd835ed` header). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/assets` (context cũ — GAP-PO-TS-01 **đóng**).  
**Cấm** Finance `api/v1/assets` (TSCĐ). **Cấm** copy CRUD `api/v1/asset/road-assets` vào slug này.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`updatedAt` ← `RoadAssetEntity.UpdatedAt`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_road_assets` (GAP-PO-TS-06) — **không** bảng báo cáo riêng |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_96d0a2fe`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `RoadAssetEntity` → `rmms_road_assets` |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getAssets` / `exportAssets` · page `AssetReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Asset` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `assets` làm trang này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có**. Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-TS-PREFIX | `GET api/v1/report/assets` + `/assets/export` · BFF cùng path | **Giữ** — đóng GAP-PO-TS-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-TS-ENVELOPE | `ApiResponse<ReportPagedResult<ReportAssetRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-TS-ROW | `id` `route` `item` `qty` `unit` `condition` `updatedAt` | **Giữ** — map `RoadAssetEntity`: `Id` `Route` `Name`/`Type`→`Item` · `Status`→`Condition` · `UpdatedAt` · P1 `Qty`/`Unit` **chỉ** trên DTO (entity **không** cột Qty) · drill dùng `id` | keep |
| GAP-SA-TS-TYPE | query `type` exact ignore-case trên `Item` **trừ khi** value ∈ `{summary,by-route,by-org,by-item}` (hub kind — **ignore**) | **Giữ** · FE SearchInput hạng mục P1 (`Mặt đường` / `Biển báo` / `Cống` / `Hộ lan` / `Cầu` / `Sơn kẻ đường` / `Taluy` / `Cột Km` / `Đèn`) · **cấm** gửi hub kind trên leaf | keep |
| GAP-SA-TS-STATUS | `status` exact ignore-case trên `Condition` · `all` = all | **Giữ** · Tốt / Theo dõi / Cần bảo trì | keep |
| GAP-SA-TS-PERIOD | query `period` accepted, **không** slice (`_ = period`) | **P1 giữ** | document |
| GAP-SA-TS-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` | **Giữ** GAP-PO-TS-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-TS-SEARCH | Contains `Item`/`Route`/`Condition` · query **`search`** | **Giữ** · Design/context ghi `q` **stale** — **khóa `search`** · FE live `AssetReportPage` gửi `search` · **cấm** query `q` riêng P1 (endpoint `qs` có thể set `q` nhưng BE **không** đọc) | keep |
| GAP-SA-TS-DATE | `FilterDate` trên `UpdatedAt` · `from` inclusive · `to` date-only (`TimeOfDay==0`) → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` | keep |
| GAP-SA-TS-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-TS-EXPORT | CSV UTF-8 BOM `assets.csv` · header `route,item,qty,unit,condition,updatedAt,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-TS-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-TS-PERM | Không `[RequirePermission]` | **P1 stub** `report.tai-san.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-TS-RM | In-memory **12** dòng CUC2 map entity | **P1 giữ** · EF `rmms_road_assets` **P2** | document |
| GAP-SA-TS-INIT | Không `init-data` assets | **OUT P1** — hạng mục/TT = enum tĩnh FE | FE only |
| GAP-SA-TS-CHART | Không API chart | **Giữ** — SoCai client từ `items` (`by-item` · `by-route`) khi viewed ∧ ≥1 dòng | FE only |
| GAP-SA-TS-MAP | DOMAIN-MAP slug `rpt-tai-san` | **Đóng** — đã có `rpt-tai-san` → Report · `api/v1/report` (GAP-PO-TS-09) | document |
| GAP-SA-TS-HUB | Hub `ReportListPage` family `assets` + `AssetReportKinds` | **Cấm** làm trang leaf — leaf = `AssetReportPage` · `type` hub kind **ignore** trên FilterAssets | FE keep |

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
| S-TS | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/tai-san` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số dòng theo hạng mục · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/assets` |
| Xuất Excel | **API-02** GET `report/assets/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput hạng mục / TT | **enum tĩnh FE** → query `type` / `status` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE asset rows trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportAssetRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Assets (Xem)

`GET /api/v1/report/assets?type=&routeId=&status=&from=&to=&search=&period=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/assets` + cùng query.

| Query | Rule |
|-------|------|
| `type` | exact ignore-case `Item` · omit = all · **ignore** nếu ∈ `{summary,by-route,by-org,by-item}` |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `status` | exact ignore-case `Condition` · `all` = all |
| `from`/`to` | filter `UpdatedAt` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Item`/`Route`/`Condition` |
| `period` | accept · **không** slice P1 |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportAssetRowDto`: `id` `route` `item` `qty` `unit` `condition` `updatedAt`.

### API-02 — Export assets

`GET /api/v1/report/assets/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `assets.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo tài sản.»). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Drill: FE `/asset?id={id}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| type | SearchInput | enum FE → query `type` | hạng mục P1 (`Item`) — **cấm** native Select · **cấm** hub `AssetReportKinds` trên leaf |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| status | SearchInput | enum FE → query `status` | Tốt / Theo dõi / Cần bảo trì |
| fromDate / toDate | Date | query `from`/`to` | `UpdatedAt` |
| qSearch | Input | query **`search`** (không `q`) | tuyến · hạng mục · TT |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.tai-san.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD tài sản trên slug này (thuộc `asset`) · GOVOne chrome · warehouse schema · EF `rmms_road_assets` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1 · Finance TSCĐ.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput hạng mục/tuyến/TT · Xem mới load · Excel `assets.csv` · Config FULL · SoCai · drill `/asset?id=`.
- Query search **khóa `search`** — Design `q` không bind BE.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
