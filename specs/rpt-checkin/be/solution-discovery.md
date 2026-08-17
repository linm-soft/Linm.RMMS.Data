# SA — solution-discovery — rpt-checkin (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-checkin` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_ab20304f` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-CHK-02) |
| Feature Kind | **E** · leaf `/bao-cao/checkin` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-checkin` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/checkin` |
| mfeStdUrl | `http://localhost:9311/bao-cao/checkin` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (user APPROVE→CHAIN · `task_6ef4c96a`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **done** · `po/requirement.md` · `task_01a6ebc0` |
| prior · data_analy | **done** · `specs/_data-analy/features/rpt-checkin-control-hint.md` · hash `sha256:rpt-checkin-context-20260815` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** (packet TL `task_ab20304f` — supersede STATUS OFF) |
| chain | **ON** |
| taskId | `task_b8d33090` |
| confirmedBy | agent autoApprove · `task_ab20304f` |
| updatedAt | `2026-08-15T15:40:00.000Z` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_2a9cab80` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/checkins` (context cũ — GAP-PO-CHK-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_required** — JSON `DateTimeOffset` ISO (`firstAt`/`lastAt`) · filter `from`/`to` date `yyyy-MM-dd` trên field `day` · FE **display** local (`toLocaleString('vi-VN')`) · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / Patrol check-in join bắt buộc P1 |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (board APPROVE→CHAIN) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL `task_ab20304f` |

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
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getCheckins` / `exportCheckins` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Patrol` cho slug này (drill FE only).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_2a9cab80`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-CHK-PREFIX | `GET api/v1/report/checkins` + `/checkins/export` | **Giữ** — đóng GAP-PO-CHK-01 / GAP-DS-CHK-03 · **cấm** `api/v1/reports` | document |
| GAP-SA-CHK-ENVELOPE | `ApiResponse<ReportPagedResult<ReportCheckinRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block (khác worklogs) | document |
| GAP-SA-CHK-ROW | `id` `patrolId` `staff` `route` `points` `coverage` `day` `firstAt` `lastAt` | **Giữ** — drill dùng `patrolId` · **không** lat/lng P1 | keep |
| GAP-SA-CHK-KIND | query `type` · `coverage` → `Points >= 3`; `daily`/`patrol`/`worklog` **không** slice seed | **Giữ** GAP-PO-CHK-03 / GAP-DS-CHK-05 · FE gửi `type` = `kindDraft` | keep |
| GAP-SA-CHK-PERIOD | query `period` accepted, **không** slice | **P1 giữ** | document |
| GAP-SA-CHK-ROUTE | `FilterRoute` prefix-match · empty = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.8` `QL.9` `QL.10` | **Giữ** GAP-PO-CHK-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-CHK-SEARCH | Contains `Staff`/`Route`/`PatrolId` · query `search` (FE `q` map `search`) | **Giữ** · **cấm** query `q` riêng P1 | keep |
| GAP-SA-CHK-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-CHK-EXPORT | CSV UTF-8 BOM `checkins.csv` · header EN · **không** page | **IN P1** · cột: staff,route,points,coverage,day,firstAt,lastAt,patrolId | keep |
| GAP-SA-CHK-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` (GAP-DS-CHK-01) — **FE only** | FE Dev |
| GAP-SA-CHK-PERM | Không `[RequirePermission]` | **P1 stub** `report.checkin.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-CHK-RM | In-memory **12** dòng CUC2 | **P1 giữ** · Patrol check-in EF join **P2** (GAP-PO-CHK-07) | document |
| GAP-SA-CHK-INIT | Không `init-data` checkins | **OUT P1** — loại = enum tĩnh FE | FE only |
| GAP-SA-CHK-KPI-MAP | Không KPI / lat-lng trên DTO | **Giữ** — **cấm** gộp `rpt-bao-cao-cong` | document |

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

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-CHK | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/checkin` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In stub · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (điểm theo ngày · coverage theo tuyến) |
| S-MOD-PRINT | In | stub toast P1 (GAP-PO-CHK-05) | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/checkins` |
| Xuất Excel | **API-02** GET `report/checkins/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput loại | **enum tĩnh FE** `daily`/`patrol`/`worklog`/`coverage` → query `type` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE checkin rows P1.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportCheckinRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Checkins (Xem)

`GET /api/v1/report/checkins?type=&routeId=&from=&to=&search=&period=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/checkins` + cùng query.

| Query | Rule |
|-------|------|
| `type` | `coverage` = chỉ `points >= 3` · `daily`/`patrol`/`worklog`/omit = không slice coverage |
| `routeId` | empty / omit = all · prefix-match `Route` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `search` | Contains `Staff`/`Route`/`PatrolId` |
| `period` | accept · **không** slice P1 |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportCheckinRowDto`: `id` `patrolId` `staff` `route` `points` `coverage` `day` `firstAt` `lastAt`.

### API-02 — Export checkins

`GET /api/v1/report/checkins/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `checkins.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- `type=coverage` only slices `points >= 3`; other kinds không đổi seed semantics P1.
- Drill: FE `/patrol?id={patrolId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại (Design SoCai) — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| reportKind | SearchInput | enum FE → query `type` | `daily`/`patrol`/`worklog`/`coverage` — **cấm** native Select |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| fromDate / toDate | Date | query `from`/`to` | |
| qSearch | Input | query `search` | cán bộ · tuyến (text) |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.checkin.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD patrol · GOVOne chrome · warehouse schema · Patrol EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · master users thật · dashboard KPI / map `rpt-bao-cao-cong` · lat/lng / KPI 4 trên slug này · endpoint mới bắt buộc.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination (GAP-DS-CHK-01) · SearchInput · Xem mới load · Excel `checkins.csv` · Config FULL · SoCai · drill `/patrol?id=`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
