# SA — solution-discovery — rpt-nhat-ky-tuan-duong (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-duong` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_b2d605ba` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-NKTD-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-duong` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-nhat-ky-tuan-duong` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/nhat-ky-tuan-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-duong` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_a78a8a06`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **confirmed** · `po/requirement.md` · `task_072cb5c8` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-nhat-ky-tuan-duong-control-hint.md` · hash `sha256:rpt-nhat-ky-tuan-duong-context-20260816` · handoff path `specs/_data-analy/clusters/…` **không tồn tại** — dùng artifact thật |
| sourceFormReady | **yes** (`docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.1) |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `PatrolLogBook` · `PatrolLogEntry` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp · SSOT live lệch — **không** regen) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_b2d605ba` |
| confirmedBy | agent autoApprove · `task_b2d605ba` |
| updatedAt | `2026-08-16T15:30:00.000Z` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** POST/PUT/DELETE PatrolLog* trên slug này.  
> **Cấm** reuse `GET api/v1/report/checkins` (`rpt-checkin` PatrolSession) · **cấm** InspectionLog / Mẫu 8 tuần kiểm.

**Cấm** `GET /api/v1/reports/patrol-log-road` (context cũ — GAP-PO-NKTD-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — row `day` string `yyyy-MM-dd` · filter `from`/`to` inclusive trên `day` (`FilterDay` ordinal) · `checkedAt` ISO +07 seed P1 (`day` + `T07:30:00+07:00`) · **không** DateTimeOffset trên DTO list P1 bắt buộc UI |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / EF join bắt buộc P1 (GAP-PO-NKTD-07 = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_a78a8a06`) |
| repo | `beRepo` + `uiRepo` **pending user tick** trước Dev (**không auto**) — STATUS ghi path repo; **không** coi là Dev-ready chỉ vì SA confirm |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportPatrolLogRoadRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getPatrolLogRoad` / `exportPatrolLogRoad` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `ROAD_ROUTE_LOOKUP_CONFIG` |

**Cấm** clone master road-route dưới Report. **Cấm** API CRUD dưới `Domains/Asset` / sổ sách cho slug này (drill FE only tới MFE nguồn).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain `task_0e294d3d`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-NKTD-PREFIX | `GET api/v1/report/patrol-log-road` + `/patrol-log-road/export` | **Giữ** — đóng GAP-PO-NKTD-01 · **cấm** `api/v1/reports` | document |
| GAP-SA-NKTD-ENVELOPE | `ApiResponse<ReportPagedResult<ReportPatrolLogRoadRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block trên DTO | document |
| GAP-SA-NKTD-ROW | `id` `bookId` `bookNo` `entryId` `day` `checkedAt` `route` `patrolStaffId` `patrolStaff` `locationKm` `locationText` `weatherAndEvent` `onSiteAction` `supervisorNote` `status` `statusLabel` | **Giữ P1 trên BE** — gồm `locationText` (GAP-DS-NKTD-01) | keep |
| GAP-SA-NKTD-GRID | Live MFE cột: day · route · patrolStaff · locationKm · weatherAndEvent · onSiteAction · statusLabel · bookNo · locationText · drill | **Khớp** PO §5 + Design — **không** thiếu cột P1 | keep |
| GAP-SA-NKTD-TYPE | Query `type` **bị ignore** (`_ = type`) — **không** dùng làm tab / loại phiên | **Giữ ignore** · **cấm** map `type` sang check-in coverage | keep |
| GAP-SA-NKTD-STAFF | query **`staffId`** exact `PatrolStaffId` · empty/`all` = all · seed `nva` `ttb` `lvc` `pmd` | **Giữ** · cán bộ = **enum seed FE P1** (`WORKLOG_STAFF_LOOKUP`) — **cấm** native Select | keep |
| GAP-SA-NKTD-ROUTE | `FilterRoute` **exact** (không prefix) · empty/`all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `QL.7` `QL.10` `QL.8` `QL.9` | **Giữ** GAP-PO-NKTD-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-NKTD-SEARCH | Contains `WeatherAndEvent`/`OnSiteAction`/`Route`/`PatrolStaff`/`BookNo`/`LocationText` · query **`q`** canonical · coalesce `q ?? search` | **Giữ** · FE gửi `q` · alias `search` OK | keep |
| GAP-SA-NKTD-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-NKTD-EXPORT | CSV UTF-8 BOM · filename **`patrol-log-road.csv`** · header live: `day,route,patrolStaff,locationKm,locationText,weatherAndEvent,onSiteAction,status,bookNo,entryId,bookId` · **không** page | **IN P1** · FE `subsetCsv` theo cột đang hiện | keep |
| GAP-SA-NKTD-DRILL | Live MFE `drillSource(bookId, entryId)` → `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` | **LOCK live** — **không** API Report GetById | FE keep |
| GAP-SA-NKTD-BOOKID | Seed P1 `BookId = BookNo` (`BK-TD-*`) | **P1 OK** · P2 map `PatrolLogBook.Id` thật khi EF join | document |
| GAP-SA-NKTD-FOOTER | Live `LinCatalogListPagination` luôn | Zone D **luôn** hiện — **FE only** | FE keep |
| GAP-SA-NKTD-PERM | Không `[RequirePermission]` | **P1 stub** `report.nhat-ky-tuan-duong.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-NKTD-RM | In-memory **12** dòng CUC2 · map PatrolLogBook/Entry fields | **P1 giữ** · EF join `PatrolLogBook`/`PatrolLogEntry` **P2** | document |
| GAP-SA-NKTD-KPI-MAP | Không KPI dashboard / map trên DTO | **Giữ** — Chart SoCai **client** từ `items` · **cấm** gộp hub `reports` / `rpt-checkin` | document |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới. **Dev** = parity Design (SearchInput · Xem · Config FULL) nếu TL phát hiện lệch; **không** Kind B schema editor.

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
| S-NKTD | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/nhat-ky-tuan-duong` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng (số dòng theo ngày · tuyến · trạng thái signed/pending) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` stub OK | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/patrol-log-road` |
| Xuất Excel | **API-02** GET `report/patrol-log-road/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput cán bộ | **enum tĩnh FE** `nva`/`ttb`/`lvc`/`pmd` → query `staffId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE PatrolLogBook / PatrolLogEntry P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportPatrolLogRoadRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Patrol log road (Xem)

`GET /api/v1/report/patrol-log-road?staffId=&routeId=&from=&to=&q=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/patrol-log-road` + cùng query.

| Query | Rule |
|-------|------|
| `staffId` | empty / omit / `all` = all · exact `PatrolStaffId` (`nva`/`ttb`/`lvc`/`pmd`) |
| `routeId` | empty / omit / `all` = all · **exact** `Route` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `q` | Contains nội dung · xử lý · tuyến · cán bộ · số sổ · vị trí · alias `search` nếu `q` trống |
| `type` | **ignored** P1 (compat param) — **cấm** dùng |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportPatrolLogRoadRowDto`: `id` `bookId` `bookNo` `entryId` `day` `checkedAt` `route` `patrolStaffId` `patrolStaff` `locationKm` `locationText` `weatherAndEvent` `onSiteAction` `supervisorNote` `status` `statusLabel`.

Grid P1 bắt buộc gồm `locationText` (Vị trí) + drill `bookId`/`entryId`.

### API-02 — Export patrol log road

`GET /api/v1/report/patrol-log-road/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `patrol-log-road.csv`.

Header P1 (live):

`day,route,patrolStaff,locationKm,locationText,weatherAndEvent,onSiteAction,status,bookNo,entryId,bookId`

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- **Xem** copy draft → applied → page=1 · `viewed=true`.
- Làm mới: chỉ re-fetch applied; nếu `!viewed` → toast, **không** load (GAP-DS-NKTD-10).
- Drill: FE `/asset/csdl-so-sach?kind=patrol-logs&id={bookId}` (+ `entryId` nếu route hỗ trợ) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| staffId | SearchInput | enum FE → query `staffId` | `nva`/`ttb`/`lvc`/`pmd` — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | trên `day` |
| qSearch | Input | query `q` | nội dung · tuyến · cán bộ · số sổ |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.nhat-ky-tuan-duong.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD `csdl-so-sach` / PatrolLog* trên slug này · Mẫu 8 tuần kiểm · `rpt-checkin` PatrolSession · KPI 4 · map · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI slug khác · endpoint mới bắt buộc · POST/PUT/DELETE · reuse `type` như check-in.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tuyến/cán bộ · Xem mới load · Excel UTF-8 BOM · Config FULL report modal · SoCai · drill `/asset/csdl-so-sach?kind=patrol-logs&id=` · cột Vị trí `locationText`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task = `roleOnly=sa` · **không** chạy TL trong `task_b2d605ba`.

## Build (this role)

SA **không** sửa MFE/BE runtime. Verify = live contract audit (controller · service · DTO · BFF · MFE endpoint + grid). DOMAIN-MAP slug row. **Không** `yarn build` / `dotnet build` trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
