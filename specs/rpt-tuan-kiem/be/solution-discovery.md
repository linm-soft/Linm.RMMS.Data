# SA — solution-discovery — rpt-tuan-kiem (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tuan-kiem` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_d41e61c7` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-BTK-02) |
| Feature Kind | **E** · leaf `/bao-cao/tuan-kiem` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-tuan-kiem` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/tuan-kiem` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tuan-kiem` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_5c57e047`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **confirmed** · `po/requirement.md` · `task_f58e9de2` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tuan-kiem-control-hint.md` · hash `sha256:rpt-tuan-kiem-context-20260816` · handoff path `specs/rpt-tuan-kiem/specs/_data-analy/clusters/rpt-tuan-kiem.md` **không tồn tại** — dùng artifact thật |
| sourceFormReady | **yes** (`PatrolSessionEntity`) |
| sourceFeature | `patrol` |
| sourceTables | `PatrolSession` / `rmms_patrol_sessions` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp · SSOT live lệch — **không** regen) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_d41e61c7` |
| confirmedBy | agent autoApprove · `task_d41e61c7` |
| updatedAt | `2026-08-16T22:40:00.000Z` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** POST/PUT/DELETE `PatrolSession` trên slug này.  
> **Cấm** reuse `GET api/v1/report/patrol-log-inspect` (`rpt-nhat-ky-tuan-kiem` sổ) · **cấm** gộp `PatrolType=road` / tuần đường vào lưới.

**Cấm** `GET /api/v1/reports/patrol-inspect` (context cũ — GAP-PO-BTK-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — row `day` string `yyyy-MM-dd` (map `PatrolSession.PlannedDate`) · filter `from`/`to` inclusive trên `day` (`FilterDay` ordinal) · `startedAt` ISO +07 seed P1 · **không** DateTimeOffset trên DTO list P1 bắt buộc UI |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById Report |
| sa_shared_table | **share_na** — không schema warehouse / EF `PatrolSession` bắt buộc P1 (GAP-PO-BTK-07 = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_5c57e047`) |
| repo | `beRepo` + `uiRepo` **pending user tick** trước Dev (**không auto**) — STATUS ghi path repo; **không** coi là Dev-ready chỉ vì SA confirm |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` · `GetPatrolInspectAsync` / `ExportPatrolInspectCsvAsync` / `FilterPatrolInspect` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · **reuse** `ReportPatrolRoadRowDto` (cùng scalar; **không** DTO class mới P1) |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` · `patrol-inspect` + `/export` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getPatrolInspect` / `exportPatrolInspect` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** API CRUD dưới `Domains/Patrol` cho slug này (drill FE only tới MFE nguồn `/patrol`).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain `task_afa75ec9`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-BTK-PREFIX | `GET api/v1/report/patrol-inspect` + `/patrol-inspect/export` | **Giữ** — đóng GAP-PO-BTK-01 · **cấm** `api/v1/reports` · **cấm** reuse `patrol-log-inspect` | document |
| GAP-SA-BTK-ENVELOPE | `ApiResponse<ReportPagedResult<ReportPatrolRoadRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block trên DTO | document |
| GAP-SA-BTK-ROW | `id` `sessionId` `code` `day` `startedAt` `route` `staffId` `userName` `patrolType` `patrolTypeLabel` `checkInCount` `coveragePercent` `status` `statusLabel` `offlineQueued` `note` | **Giữ P1 trên BE** — map `PatrolSessionEntity` scalars | keep |
| GAP-SA-BTK-GRID | Live MFE: day · code · route · userName · patrolTypeLabel · checkInCount · coveragePercent · statusLabel · offlineQueued · note · drill | **Khớp** PO §5 + Design — **không** thiếu cột P1 · **cấm** Company/QL/Km | keep |
| GAP-SA-BTK-TYPE | Query `type` **bị ignore** (`_ = type`) · lưới **hard-filter** `PatrolType=inspect` | **Giữ ignore `type`** · **cấm** dùng `type` để gộp road · seed `TD-*` (`pi14`) **excluded** | keep |
| GAP-SA-BTK-STAFF | query **`staffId`** exact `StaffId` · empty/`all` = all · seed `nva` `ttb` `lvc` `pmd` | **Giữ** · NV = **enum seed FE P1** — **cấm** native Select | keep |
| GAP-SA-BTK-STATUS | query **`status`** exact `Status` · empty/`all` = all · `in_progress`/`done`/`missed`/`offline` | **Giữ** · SearchInput enum FE | keep |
| GAP-SA-BTK-ROUTE | `FilterRoute` **exact** (không prefix) · empty/`all` = all · seed CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.10` `QL.8` `QL.9` `QL.46`) | **Giữ** GAP-PO-BTK-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-BTK-SEARCH | Contains `Code`/`Route`/`UserName`/`Note` · query **`q`** canonical · coalesce `q ?? search` | **Giữ** · FE gửi `q` · alias `search` OK | keep |
| GAP-SA-BTK-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-BTK-EXPORT | CSV UTF-8 BOM · filename **`patrol-inspect.csv`** · header live: `day,code,route,userName,patrolType,checkInCount,coveragePercent,status,offlineQueued,note,sessionId` · **không** page | **IN P1** · FE `subsetCsv` theo cột đang hiện | keep |
| GAP-SA-BTK-DRILL | Live MFE `drillSource(sessionId)` → `/patrol?id={sessionId}` · seed P1 `SessionId = Code` (`TK-*`) | **LOCK live P1** — **không** API Report GetById · P2 map `PatrolSession.Id` thật khi EF | FE keep |
| GAP-SA-BTK-FOOTER | Live `LinCatalogListPagination` luôn | Zone D **luôn** hiện — **FE only** | FE keep |
| GAP-SA-BTK-PERM | Không `[RequirePermission]` | **P1 stub** `report.tuan-kiem.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-BTK-RM | In-memory **15** seed (14 `inspect` + 1 `road` excluded) · filter `PatrolType=inspect` | **P1 giữ** · EF `rmms_patrol_sessions` **P2** | document |
| GAP-SA-BTK-KPI-MAP | Không KPI dashboard / map trên DTO | **Giữ** — Chart SoCai **client** từ `items` (số phiên theo tuyến · theo trạng thái) · **cấm** gộp hub `reports` / `rpt-nhat-ky-tuan-kiem` / tuần đường | document |
| GAP-SA-BTK-CONFIG | Live `ReportDisplayConfigModal` FULL | **Giữ** — **cấm** `LinListTableConfigModal` / `configHint` / bắt `LinCatalogUiSchemaEditorModal` | FE keep |

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
| S-BTK | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/tuan-kiem` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng (số phiên theo tuyến · theo trạng thái) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` stub OK | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/patrol-inspect` |
| Xuất Excel | **API-02** GET `report/patrol-inspect/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput trạng thái CI | **enum tĩnh FE** `in_progress`/`done`/`missed`/`offline` → query `status` |
| SearchInput nhân viên | **enum tĩnh FE** `nva`/`ttb`/`lvc`/`pmd` → query `staffId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE `PatrolSession` P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportPatrolRoadRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Patrol inspect sessions (Xem)

`GET /api/v1/report/patrol-inspect?staffId=&routeId=&status=&from=&to=&q=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/patrol-inspect` + cùng query.

| Query | Rule |
|-------|------|
| `staffId` | empty / omit / `all` = all · exact `StaffId` (`nva`/`ttb`/`lvc`/`pmd`) |
| `routeId` | empty / omit / `all` = all · **exact** `Route` |
| `status` | empty / omit / `all` = all · exact `Status` (`in_progress`/`done`/`missed`/`offline`) |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive (`PlannedDate`) |
| `q` | Contains mã · tuyến · NV · ghi chú · alias `search` nếu `q` trống |
| `type` | **ignored** P1 (compat param) — **cấm** dùng để gộp road |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportPatrolRoadRowDto`: `id` `sessionId` `code` `day` `startedAt` `route` `staffId` `userName` `patrolType` `patrolTypeLabel` `checkInCount` `coveragePercent` `status` `statusLabel` `offlineQueued` `note`.

Server **luôn** `Where PatrolType == inspect`. Grid P1 bắt buộc gồm `patrolTypeLabel` + drill `sessionId`. `RowPi`: `TD-*` → `road` (excluded); `TK-*` → `inspect`.

### API-02 — Export patrol inspect

`GET /api/v1/report/patrol-inspect/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `patrol-inspect.csv`.

Header P1 (live):

`day,code,route,userName,patrolType,checkInCount,coveragePercent,status,offlineQueued,note,sessionId`

(`patrolType` cột CSV = **label** `PatrolTypeLabel`; `offlineQueued` = `1`/`0`.)

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- **Xem** copy draft → applied → page=1 · `viewed=true`.
- Làm mới: chỉ re-fetch applied; nếu `!viewed` → toast, **không** load (GAP-DS-BTK-10).
- Drill: FE `/patrol?id={sessionId}` — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Lưới **chỉ** phiên `inspect` — seed road (`pi14` / `TD-*`) **không** vào `items`.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| status | SearchInput | enum FE → query `status` | `in_progress`/`done`/`missed`/`offline` — **cấm** native Select |
| staffId | SearchInput | enum FE → query `staffId` | `nva`/`ttb`/`lvc`/`pmd` — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | trên `day` / `PlannedDate` |
| qSearch | Input | query `q` | mã · tuyến · NV · ghi chú |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.tuan-kiem.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Seed P1 (LOCKED)

14 inspect (`pi1`–`pi13` + `pi15`, mã `TK-*`) + `pi14` (`TD-20260726-001`) **road excluded**. Tuyến CUC2 · **cấm QL.22**.

## Out of pack

CRUD `patrol` / session trên slug này · Nhật ký sổ `InspectionLogBook`/`InspectionLogEntry` · reuse `patrol-log-inspect` · gộp tuần đường (`road`) · cột Company/QL/Km P1 · Dashboard KPI gộp · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · endpoint mới bắt buộc · POST/PUT/DELETE · reuse query `type` như check-in.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tuyến/trạng thái/NV · Xem mới load · Excel UTF-8 BOM `patrol-inspect.csv` · Config FULL report modal · SoCai · drill `/patrol?id=` · cột Loại tuần · chỉ `PatrolType=inspect`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task = `roleOnly=sa` · **không** chạy TL trong `task_d41e61c7`.

## Build (this role)

SA **không** sửa MFE/BE runtime. Verify = live contract audit (`ReportQueryController` · `ReportService.FilterPatrolInspect` · `ReportPatrolRoadRowDto` · BFF `patrol-inspect` · MFE `PatrolInspectReportPage` + `reportEndpoint.getPatrolInspect`). DOMAIN-MAP slug row. **Không** `yarn build` / `dotnet build` trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
