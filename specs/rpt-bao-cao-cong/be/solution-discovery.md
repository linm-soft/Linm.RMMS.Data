# SA — solution-discovery — rpt-bao-cao-cong (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-bao-cao-cong` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (autoApprove **ON** · packet `task_822673c1` — agent tự confirm · enqueue TL) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-BCC-02) |
| Feature Kind | **E** · leaf `/bao-cao/bao-cao-cong` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-bao-cao-cong` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/bao-cao-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/bao-cao-cong` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (user APPROVE→CHAIN · `task_05cde6c5` / prior `task_28b5b565`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **done** · `po/requirement.md` · `task_85aae5bd` |
| prior · data_analy | **done** · `specs/_data-analy/features/rpt-bao-cao-cong-control-hint.md` · hash `sha256:adee6dfd21215b78652930c09de2de8735f0482a8279dc650cf5e3f3945122ab` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** (`task_822673c1`) |
| taskId | `task_05cde6c5` |
| updatedAt | `2026-08-15T15:05:00.000Z` |

> SA **chốt** lookup API + query/export/KPI contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/attendance/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_36d8f152` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `api/v1/attendance/report` (context cũ — GAP-PO-BCC-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_required** — JSON `DateTimeOffset` ISO (`firstAt`/`lastAt`) · filter `from`/`to` date `yyyy-MM-dd` trên field `day` · FE **display** local (`toLocaleString('vi-VN')`) · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / AttendanceLog join bắt buộc P1 |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (board APPROVE→CHAIN) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **ON** — SA **confirmed** (packet `task_822673c1`) |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getWorklogs` / `exportWorklogs` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Patrol` cho slug này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_36d8f152`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-BCC-PREFIX | `GET api/v1/report/worklogs` + `/worklogs/export` | **Giữ** — đóng GAP-PO-BCC-01 / GAP-DS-BCC-03 · **cấm** `attendance/report` | document |
| GAP-SA-BCC-ENVELOPE | `ApiResponse<ReportWorklogPagedResult>` `{ success, message, data }` · `data.kpis` + paged items | **Giữ** · BFF proxy raw · **không** envelope mới | document |
| GAP-SA-BCC-KPI | `kpis.shiftCount` `inZonePct` `outZoneCount` `avgPoints` trên **full filtered** (không page) | **Giữ** — khớp Design KPI 4 | keep |
| GAP-SA-BCC-ROW | `id` `attendanceId` `staff` `staffId` `route` `day` `points` `inZonePct` `zoneStatus` `firstAt` `lastAt` `lat` `lng` | **Giữ** — SVG map dùng `lat`/`lng` · drill dùng `attendanceId` | keep |
| GAP-SA-BCC-ZONE | query `zone=out` → `ZoneStatus == "out"`; empty/`all` = không gửi | **Giữ** Design Zone filter | keep |
| GAP-SA-BCC-STAFF | **không** query `staffId` · FE map `staffId` → `search` (Contains `Staff`/`StaffId`/`Route`/`AttendanceId`) | **P1 giữ** — **cấm** thêm query `staffId` P1 · mock enum FE (`nva`/`ttb`/…) khớp seed `StaffId` | document · FE keep |
| GAP-SA-BCC-PERIOD | query `type`/`period` accepted, **không** slice seed | **P1 giữ** — kỳ UI auto-fill `from`/`to` trên FE (tuần T2–CN · tháng 1→cuối) | document · FE |
| GAP-SA-BCC-ROUTE | `FilterRoute` prefix-match · empty = all · seed `QL.1` `QL.15` `QL.217` | **Giữ** GAP-PO-BCC-06 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-BCC-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-BCC-EXPORT | CSV UTF-8 BOM `worklogs.csv` · header EN · **không** page | **IN P1** · cột CSV: staff,route,day,points,inZonePct,zoneStatus,firstAt,lastAt,lat,lng,attendanceId | keep |
| GAP-SA-BCC-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` (GAP-DS-BCC-01) — **FE only** | FE Dev |
| GAP-SA-BCC-PERM | Không `[RequirePermission]` | **P1 stub** `report.bao-cao-cong.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-BCC-RM | In-memory 12 dòng | **P1 giữ** · AttendanceLog EF join **P2** (GAP-PO-BCC-08) | document |
| GAP-SA-BCC-LEAFLET | Row có lat/lng | Map **SVG P1** · Leaflet **P2** | FE |
| GAP-SA-BCC-INIT | Không `init-data` worklogs | **OUT P1** — kỳ/zone/staff mock = enum tĩnh FE | FE only |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| Staff | mock enum P1 | **cấm** bind master users CUC2 |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-BCC | Report A–D + KPI + SVG map | Full page `LinPageLayout` kind=`report` | `/bao-cao/bao-cao-cong` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · print-scope · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng + `showCharts` |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | rồi `window.print` — **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/worklogs` |
| Xuất Excel | **API-02** GET `report/worklogs/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput kỳ / zone / NV | **enum tĩnh FE** — **không** API |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE worklog rows P1.

## API catalog

Envelope JSON: `ApiResponse<ReportWorklogPagedResult>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages, kpis } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Worklogs (Xem)

`GET /api/v1/report/worklogs?type=&routeId=&from=&to=&search=&period=&zone=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/worklogs` + cùng query.

| Query | Rule |
|-------|------|
| `routeId` | empty / omit = all · prefix-match `Route` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `search` | staff filter P1 (FE `staffId`) · Contains `Staff`/`StaffId`/`Route`/`AttendanceId` |
| `zone` | `out` = chỉ lệch zone · omit/`all` = tất cả |
| `type`/`period` | accept · **không** slice P1 |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportWorklogRowDto`: `id` `attendanceId` `staff` `staffId` `route` `day` `points` `inZonePct` `zoneStatus` (`in`/`out`) `firstAt` `lastAt` `lat` `lng`.

**KPI DTO** `ReportWorklogKpiDto` (full filtered set): `shiftCount` = count · `inZonePct` = round avg row `InZonePct` · `outZoneCount` = count `zoneStatus==out` · `avgPoints` = round 1 decimal avg `Points`.

### API-02 — Export worklogs

`GET /api/v1/report/worklogs/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `worklogs.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- `zone=out` only; `all` không gửi query `zone`.
- Drill: FE ` /patrol/attendance?id={attendanceId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại (Design SoCai) — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| periodMode | SearchInput | enum FE `week`/`month` → query `type`/`period` (no slice) + auto `from`/`to` | static |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| staffId | SearchInput | **không API** · query `search` | mock enum P1 |
| zone | SearchInput | query `zone` | enum `all`/`out` |
| fromDate / toDate | Date | query `from`/`to` | |

Grid columns = DTO scalars readonly. Zone = Dropdown **display** `in`/`out` — không editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.bao-cao-cong.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD attendance · GOVOne chrome · Leaflet P1 · warehouse schema · AttendanceLog EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/attendance/*` · invent tuyến ngoài CUC2 38 · master users thật · dashboard KPI gộp slug này · query `staffId` riêng P1 · hub 3 family trên leaf này.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E + KPI/map) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination (GAP-DS-BCC-01) · SearchInput · Xem mới load · Excel `worklogs.csv` · Config FULL · SVG map · drill Field.
- autoApprove **ON** (`task_822673c1`) → SA **confirmed** · TL pack emitted.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (đã approve).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau TL = Dev **pending** (repo tick) · QA/Review pending. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
