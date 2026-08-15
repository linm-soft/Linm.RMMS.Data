# SA — solution-discovery — reports (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `reports` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_85ad644c` · agent confirm · chain TL) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-RPT-07 / GAP-DS-RPT-01) |
| Feature Kind | **E** · 3 loại P1 · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `reports` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao` |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| prior · design | **confirmed** (user APPROVE→CHAIN · `task_1d2ba27e`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **confirmed** · `po/requirement.md` · `task_323faa8f` |
| prior · data_analy | **done** · `specs/_data-analy/features/reports-control-hint.md` · hash `sha256:5d30e1a7796fe50fb67b8444809805e826017017337ddc328ac0b1fcdbaadbdf` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| taskId | `task_e70f2904` |
| updatedAt | `2026-08-15T08:30:00.000Z` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE repo live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).

**Supersedes** SA `task_51457ed6` (ngắn, autoApprove ON). Pack này re-audit live + Design confirmed.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_required** — JSON `DateTimeOffset` ISO · filter `from`/`to` parse ISO/date · FE **display** local (`toLocaleString('vi-VN')`) · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema report bắt buộc P1 |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (board APPROVE→CHAIN · `task_1d2ba27e`) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **ON** (confirm SA · `task_85ad644c`) |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (`task_51457ed6`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-RPT-PREFIX | `api/v1/report` singular | **Giữ** — đóng GAP-DA-RPT-PREFIX / GAP-PO-RPT-01 | document |
| GAP-SA-RPT-KIND | Query `type` accepted, **không** slice seed | **P1 giữ** — `type` = reportKind FE; cùng seed mọi kind (by-org / monthly… **OUT** aggregation) | document · **cấm** invent warehouse group |
| GAP-SA-RPT-PERIOD | Query `period` accepted, **không** slice | **P1 giữ** — kỳ UI; cắt ngày = `from`/`to` (ẩn assets) | document |
| GAP-SA-RPT-ROUTE | `QL.1` prefix-match `QL.1A`; empty/`all` = all | **Giữ** GAP-PO-RPT-02 · lookup UI = 38 CUC2 + trống · **cấm** invent `ĐT.*`/`CT.01` vào 38 | BE keep · FE lookup |
| GAP-SA-RPT-SEED | In-memory demo mã `QL.1A`/`ĐT.538`/`ĐT.217`/`CT.01` | **P1 giữ** seed · **không** join EF Asset/Incident/Patrol | document |
| GAP-SA-RPT-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-RPT-EXPORT | CSV UTF-8 BOM `checkins.csv` · header EN | **IN P1** file bytes · header EN **giữ** (interop) · **không** page | keep |
| GAP-SA-RPT-INIT | Không `init-data` | **OUT P1** — family/kind/period = enum tĩnh FE (Design §3) | FE only |
| GAP-SA-RPT-FORM | `ReportFormPage` scaffold | **OUT P1** — redirect list (GAP-PO-RPT-03) | FE |
| GAP-SA-RPT-LKP | FE `/integration/road-routes/search` + seed fallback 38 | **Giữ** Type A · fallback **chỉ** khi BFF down / empty · **cấm** `QL.22` | FE keep |
| GAP-SA-RPT-PERM | Không `[RequirePermission]` | **P1 stub** `report.read` / `report.export` — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-RPT-ENVELOPE | Local `ApiResponse<T>` trong Report.Models | **P1 giữ** `{ success, message, data }` · BFF proxy raw · **không** envelope mới | document |

**Không** migration. **Không** endpoint mới bắt buộc nếu live khớp catalog dưới.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-RPT | Report A–D | Full page `LinPageLayout` kind=`report` | `/bao-cao` | report | filter draft → **Xem** load · refresh · Excel check-in · chart/print/config stub |
| S-FORM | Form CRUD | — | `/bao-cao/new` · `/:id` | — | **OUT P1** redirect list |
| S-MOD-CFG | Column hint | Modal/toast | toolbar `fa-cog` | — | hint kéo cột ON — **không** warehouse picker |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem family=assets | **API-01** GET `report/assets` |
| Xem family=incidents | **API-02** GET `report/incidents` |
| Xem family=checkins | **API-03** GET `report/checkins` |
| Xuất Excel check-in | **API-04** GET `report/checkins/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput family/kind/period | **enum tĩnh FE** — **không** API |
| Health | **API-00** GET `report/health` (giữ) |

**Cấm** POST/PUT/DELETE report rows P1. **Cấm** Resource/Slideout/View=`readOnly` giả form.

## API catalog

Query chung (API-01…03): `type` `routeId` `search` `period` `page` `pageSize`. API-02/03 thêm `from` `to`. pageSize allow-list **50/100/200/500**.

Envelope JSON: `ApiResponse<ReportPagedResult<T>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Assets

`GET /api/v1/report/assets?type=&routeId=&search=&period=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/assets` + cùng query.  
Row: `id` `route` `item` `qty` `unit` `condition` `updatedAt`.

### API-02 — Incidents

`GET /api/v1/report/incidents?type=&routeId=&from=&to=&search=&period=&page=&pageSize=`  
Row: `id` `code` `route` `type` `severity` `status` `at`.

### API-03 — Checkins

`GET /api/v1/report/checkins` — cùng filter date.  
Row: `id` `staff` `route` `points` `coverage` `day` `firstAt` `lastAt`.

### API-04 — Export check-ins

`GET /api/v1/report/checkins/export` — `text/csv; charset=utf-8` · UTF-8 **BOM** · filename `checkins.csv` · **không** `page`/`pageSize` · cùng filter API-03.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**.

## Query rules (LOCKED)

- `routeId` empty / `all` = all routes.
- User chọn CUC2 `QL.1` → match seed `QL.1A` (`StartsWith("QL.1")` live) — GAP-PO-RPT-02.
- `search` Contains case-insensitive: assets item/route/condition · incidents code/route/type/status · checkins staff/route.
- `from`/`to`: incidents filter `at`; checkins filter `day` (string `yyyy-MM-dd`). `to` date-only → end exclusive next day (incidents).
- `type` / `period`: **accept + ignore slice** P1.
- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page sau viewed = refetch cùng applied filters.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| reportFamily | SearchInput | enum FE `assets`/`incidents`/`checkins` | static |
| reportKind | SearchInput | enum FE theo family (Design §3) | static |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| periodMode | SearchInput | enum FE day/month/quarter/year | static |
| fromDate / toDate | Date | query `from`/`to` | ẩn assets |
| qSearch | SearchTextInput | query `search` | text |

Grid columns = DTO scalars readonly. Dropdown **display only** trên `condition`/`severity`/`status` — không editor, không init-data.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.read` | API-00…03 |
| `report.export` | API-04 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

Warehouse tables · join live Asset/Incident/Patrol EF · GOVOne catalog 172 · dashboard KPI API (`dashboard` slug riêng) · RAG/AI · Excel assets/incidents · Chart/Print real · Kind B CRUD · `api/v1/reports` · ERP.*.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT / redirect.
- DoD: 1× LinPageLayout · grid kéo cột · LinCatalogListPagination · SearchInput · Xem mới load · Excel chỉ check-in.
- autoApprove **ON** (`task_85ad644c`) → SA **confirmed** · chain TL **done**. Roles sau TL = **pending**.
- Dev **cấm** đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (solution đã approve; repo tick = user).
- Build: FE `yarn build` + `yarn typecheck` · BE `dotnet build` khi đụng API.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
