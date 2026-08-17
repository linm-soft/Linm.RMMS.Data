# SA — solution-discovery — rpt-dem-xe (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-dem-xe` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_26cc7b79` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-DX-02) |
| Feature Kind | **E** · leaf `/bao-cao/dem-xe` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-dem-xe` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/dem-xe` |
| mfeStdUrl | `http://localhost:9311/bao-cao/dem-xe` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_626bc166`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **done** · `po/requirement.md` · `task_45faf47e` |
| prior · data_analy | **done** · `specs/_data-analy/features/rpt-dem-xe-control-hint.md` · hash `sha256:rpt-dem-xe-context-20260815` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_26cc7b79` |
| confirmedBy | agent autoApprove · `task_26cc7b79` |
| updatedAt | `2026-08-16T06:30:00.000Z` |
| retry | from `sa` · re-audit live BE + MFE · supersede stub SA `task_d8caf0e9` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** expose `POST /api/v1/traffic-counts` trên slug này.

**Cấm** `GET /api/v1/reports/traffic-counts` (context cũ — GAP-PO-DX-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** — row `day` string `yyyy-MM-dd` · filter `from`/`to` inclusive trên `day` · **không** DateTimeOffset trên DTO P1 |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / EF `TrafficCountSummary` bắt buộc P1 (GAP-PO-DX-07 = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_626bc166`) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportTrafficCountRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getTrafficCounts` / `exportTrafficCounts` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** API dưới `Domains/Asset` cho slug này (drill FE only tới CSDL sổ 4).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior pipeline). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-DX-PREFIX | `GET api/v1/report/traffic-counts` + `/traffic-counts/export` | **Giữ** — đóng GAP-PO-DX-01 / GAP-DS-DX-03 · **cấm** `api/v1/reports` | document |
| GAP-SA-DX-ENVELOPE | `ApiResponse<ReportPagedResult<ReportTrafficCountRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-DX-ROW | `id` `sourceId` `stationId` `station` `route` `day` `motorcycle` `car` `miniBus` `bus` `lightTruck` `heavyTruck` `container` `bicycle` `other` `totalCars` `peakHour` `aadt` | **Giữ P1** — drill dùng `sourceId` (fallback `id`) · Design ~18 class Excel sổ 4 **P2** (không đổi DTO P1) | keep |
| GAP-SA-DX-TYPE | query **`type`** · `kq`/omit = detail rows · `b1` = cùng detail (cột FE khác) · `b2` = **BE aggregate theo `Route`** | **Giữ** · FE `viewTab` → `type` · **cấm** query `tab` trên BE | keep |
| GAP-SA-DX-ROUTE | `FilterRoute` prefix-match · empty = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.8` `QL.9` `QL.10` | **Giữ** GAP-PO-DX-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-DX-STATION | `stationId` exact (ignore `all`) · empty = all | **Giữ** · điểm đếm = **enum seed FE P1** (không master ERP) | keep |
| GAP-SA-DX-SEARCH | Contains `Station`/`Route`/`StationId` · query `search` (FE `qSearch` map `search`) | **Giữ** · **cấm** query `q` riêng P1 trên traffic-counts | keep |
| GAP-SA-DX-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-DX-EXPORT | CSV UTF-8 BOM · filename `traffic-counts.csv` / `traffic-counts-b1.csv` / `traffic-counts-b2.csv` · **không** page · B.2 header khác (không station) | **IN P1** | keep |
| GAP-SA-DX-B2 | BE `GroupBy(Route)` · `station`/`stationId`/`sourceId` empty · `day` = `min..max` · `aadt` = `totalCars` (P1 proxy) · `id` = `agg-{route}` | **Giữ BE aggregate** — **cấm** FE tự cộng nếu đã gọi `type=b2` | keep |
| GAP-SA-DX-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` (GAP-DS-DX-01) — **FE only** | FE Dev |
| GAP-SA-DX-PERM | Không `[RequirePermission]` | **P1 stub** `report.dem-xe.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-DX-RM | In-memory **12** dòng CUC2 (`tc1`–`tc12`) | **P1 giữ** · EF `TrafficCountSummary` **P2** (GAP-PO-DX-07) | document |
| GAP-SA-DX-INIT | Không `init-data` stations | **OUT P1** — điểm đếm enum tĩnh FE | FE only |
| GAP-SA-DX-KPI-MAP | Không KPI dashboard trên DTO | **Giữ** — Chart SoCai **client** từ `items` | document |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| Config | `LinReportTableConfigModal` | FULL theo tab — **cấm** `LinListTableConfigModal` · **cấm** `configHint` |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |
| Chart | client từ `items` | **không** API chart riêng P1 |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-DX | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/dem-xe` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 theo tab — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` / SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng (tổng theo ngày line · theo tuyến bar) |
| S-MOD-PRINT | In | `window.print` hoặc stub toast | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/traffic-counts` |
| Xuất Excel | **API-02** GET `report/traffic-counts/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput bảng | **enum tĩnh FE** `kq`/`b1`/`b2` → query `type` |
| SearchInput điểm đếm | **enum seed FE P1** → query `stationId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE traffic-count rows P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportTrafficCountRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Traffic counts (Xem)

`GET /api/v1/report/traffic-counts?type=&routeId=&stationId=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/traffic-counts` + cùng query.

| Query | Rule |
|-------|------|
| `type` | `kq` (default / omit) = detail · `b1` = cùng detail · `b2` = aggregate theo tuyến |
| `routeId` | empty / omit = all · prefix-match `Route` |
| `stationId` | empty / omit / `all` = all · exact `StationId` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `search` | Contains `Station`/`Route`/`StationId` |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportTrafficCountRowDto`: `id` `sourceId` `stationId` `station` `route` `day` `motorcycle` `car` `miniBus` `bus` `lightTruck` `heavyTruck` `container` `bicycle` `other` `totalCars` `peakHour` `aadt`.

B.2: `station`/`stationId`/`sourceId` empty · `day` = `{min}..{max}` trong kỳ đã lọc · `aadt` = `totalCars` (P1 proxy, không chia ngày).

### API-02 — Export traffic counts

`GET /api/v1/report/traffic-counts/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM**.

| `type` | Filename | Header |
|--------|----------|--------|
| `kq` / omit | `traffic-counts.csv` | station,stationId,route,day,motorcycle,car,miniBus,bus,lightTruck,heavyTruck,container,bicycle,other,totalCars,peakHour,sourceId |
| `b1` | `traffic-counts-b1.csv` | cùng detail header |
| `b2` | `traffic-counts-b2.csv` | route,motorcycle,car,miniBus,bus,lightTruck,heavyTruck,container,bicycle,other,totalCars,aadt |

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- Đổi tab sau viewed: refetch với `type` mới (B.2 payload khác) — **không** bắt user bấm Xem lại nếu Design đã chốt cùng applied filters.
- Drill: FE `/csdl-so-sach?kind=traffic-counts&id={sourceId}` (top window) — **không** API Report GetById. B.2 không drill sổ (không `sourceId`).
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| viewTab | SearchInput | enum FE → query `type` | `kq`/`b1`/`b2` — **cấm** native Select |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| stationId | SearchInput | enum FE P1 | count-station seed · trống = tất cả |
| fromDate / toDate | Date | query `from`/`to` | |
| qSearch | Input | query `search` | trạm · tuyến (text) |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.dem-xe.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD sổ đếm xe / TNGT · GOVOne chrome · warehouse schema · EF `TrafficCountSummary` P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · master users thật · dashboard KPI slug khác · 18 class Excel đầy đủ P1 (P2) · endpoint mới bắt buộc · query `tab` trên BE.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination (GAP-DS-DX-01) · SearchInput · Xem mới load · Excel filename theo tab · Config FULL `LinReportTableConfigModal` · SoCai · drill `/csdl-so-sach?kind=traffic-counts&id=`.
- B.2 = BE `type=b2` (không FE GroupBy trùng).
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
