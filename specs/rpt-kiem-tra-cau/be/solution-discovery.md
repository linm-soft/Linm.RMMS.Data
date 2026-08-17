# SA — solution-discovery — rpt-kiem-tra-cau (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-kiem-tra-cau` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_edf6b5d7` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-KTC-02) |
| Feature Kind | **E** · leaf `/bao-cao/kiem-tra-cau` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-kiem-tra-cau` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/kiem-tra-cau` |
| mfeStdUrl | `http://localhost:9311/bao-cao/kiem-tra-cau` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_9afa1df7`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **confirmed** · `po/requirement.md` · `task_d07b1adc` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-kiem-tra-cau-control-hint.md` · hash `sha256:rpt-kiem-tra-cau-context-20260816` |
| sourceFormReady | **yes** (`docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.5) |
| sourceTables | `BridgePassport` · `BridgeInspection` · `BridgeInspectionLine` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_edf6b5d7` |
| confirmedBy | agent autoApprove · `task_edf6b5d7` |
| updatedAt | `2026-08-16T14:20:00.000Z` |
| retry | from `sa` · re-audit live BE + MFE · supersede stub SA `task_5462552a` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** POST/PUT/DELETE phiếu KT trên slug này.

**Cấm** `GET /api/v1/reports/bridge-inspections` (context cũ — GAP-PO-KTC-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — row `day` string `yyyy-MM-dd` · filter `from`/`to` inclusive trên `day` (`FilterDay` ordinal) · **không** DateTimeOffset trên DTO P1 |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / EF join bắt buộc P1 (GAP-PO-KTC-07 = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_9afa1df7`) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportBridgeInspectionRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getBridgeInspections` / `exportBridgeInspections` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** API CRUD dưới `Domains/Asset` cho slug này (drill FE only tới CSDL sổ phiếu KT).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-KTC-PREFIX | `GET api/v1/report/bridge-inspections` + `/bridge-inspections/export` | **Giữ** — đóng GAP-PO-KTC-01 · **cấm** `api/v1/reports` | document |
| GAP-SA-KTC-ENVELOPE | `ApiResponse<ReportPagedResult<ReportBridgeInspectionRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-KTC-ROW | `id` `inspectionId` `ticketNo` `bridgeId` `bridgeName` `route` `adminArea` `day` `inspectionKind` `inspectionKindLabel` `tab` `component` `componentLabel` `damageDesc` `proposedAction` `priority` `priorityLabel` `photoCount` `ticketCount` `highPriorityCount` | **Giữ P1** — drill dùng `inspectionId` · **cấm** Col1–Col3 | keep |
| GAP-SA-KTC-TAB | query **`tab`** · omit/`ticket` = 12 phiếu · `result` = 12 dòng kết quả · `summary` = **BE GroupBy `BridgeId`** trên tập phiếu đã lọc | **Giữ** · FE `tab` → query `tab` · **cấm** 3 route / 3 feature | keep |
| GAP-SA-KTC-TYPE | query **`type`** = `inspectionKind` (`dinh-ky`/`dot-xuat`/`truoc-mua`) · empty/`all` = all | **Giữ** · **không** dùng `type` làm tab (khác `rpt-dem-xe`) | keep |
| GAP-SA-KTC-ROUTE | `FilterRoute` **exact** (không prefix) · empty/`all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `QL.7` `QL.8` `QL.9` `QL.10` | **Giữ** GAP-PO-KTC-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-KTC-BRIDGE | `bridgeId` exact · empty/`all` = all · seed `BR-*` CUC2 P1 | **Giữ** · cầu = **enum seed FE P1** (không master ERP) | keep |
| GAP-SA-KTC-SEARCH | Contains `TicketNo`/`BridgeName`/`Route`/`AdminArea`/`DamageDesc`/`ComponentLabel` · query `search` | **Giữ** · **cấm** query `q` riêng P1 | keep |
| GAP-SA-KTC-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-KTC-EXPORT | CSV UTF-8 BOM · filename **`bridge-inspections.csv`** (một file mọi tab) · header đủ cột union · **không** page | **IN P1** · FE map cột theo tab đang hiện | keep |
| GAP-SA-KTC-SUMMARY | BE `GroupBy(BridgeId)` · `TicketCount` = số phiếu đã lọc · `HighPriorityCount` = số line `priority=immediate` cùng cầu (seed kết quả, **không** re-filter kỳ trên count P1) · `InspectionId` = phiếu `Day` max · `Id` = `sum-{bridgeId}` | **Giữ BE aggregate** — **cấm** FE tự GroupBy nếu đã gọi `tab=summary` | keep |
| GAP-SA-KTC-DRILL | Live MFE `drillSource` → `/csdl-so-sach?kind=bridge-inspections&id={inspectionId}` (top window) | **LOCK live** — **không** API Report GetById. PO/Design `/asset/csdl-so-sach` = host prefix tùy shell — **không** đổi path MFE P1 | FE keep |
| GAP-SA-KTC-FOOTER | Live `LinCatalogListPagination` | Zone D **luôn** hiện — **FE only** | FE Dev |
| GAP-SA-KTC-PERM | Không `[RequirePermission]` | **P1 stub** `report.kiem-tra-cau.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-KTC-RM | In-memory **12** phiếu + **12** dòng kết quả CUC2 | **P1 giữ** · EF join passport/inspection/line **P2** (GAP-PO-KTC-07) | document |
| GAP-SA-KTC-INIT | Không `init-data` bridges | **OUT P1** — cầu enum tĩnh FE (`BRIDGE_LOOKUP`) | FE only |
| GAP-SA-KTC-KPI-MAP | Không KPI dashboard trên DTO | **Giữ** — Chart SoCai **client** từ `items` | document |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| Config | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | FULL theo tab — **cấm** `LinListTableConfigModal` · **cấm** `LinCatalogUiSchemaEditorModal` (Kind B) · **cấm** `configHint` |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | Integration search | **cấm** copy catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |
| Chart | client từ `items` | **không** API chart riêng P1 |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-KTC | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/kiem-tra-cau` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | toolbar `fa-cog` | — | **FULL** P1 theo tab — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng (số phiếu theo loại · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` stub OK | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/bridge-inspections` |
| Xuất Excel | **API-02** GET `report/bridge-inspections/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput tab | **enum tĩnh FE** `ticket`/`result`/`summary` → query `tab` |
| SearchInput loại phiếu | **enum tĩnh FE** `dinh-ky`/`dot-xuat`/`truoc-mua` → query `type` |
| SearchInput cầu | **enum seed FE P1** → query `bridgeId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE inspection rows P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportBridgeInspectionRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Bridge inspections (Xem)

`GET /api/v1/report/bridge-inspections?tab=&type=&routeId=&bridgeId=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/bridge-inspections` + cùng query.

| Query | Rule |
|-------|------|
| `tab` | `ticket` (default / omit) = phiếu · `result` = dòng kết quả · `summary` = aggregate theo cầu |
| `type` | empty / omit / `all` = all · exact `InspectionKind` |
| `routeId` | empty / omit / `all` = all · **exact** `Route` |
| `bridgeId` | empty / omit / `all` = all · exact `BridgeId` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `search` | Contains số phiếu · tên cầu · tuyến · địa bàn · hư hỏng · bộ phận |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportBridgeInspectionRowDto`: `id` `inspectionId` `ticketNo` `bridgeId` `bridgeName` `route` `adminArea` `day` `inspectionKind` `inspectionKindLabel` `tab` `component` `componentLabel` `damageDesc` `proposedAction` `priority` `priorityLabel` `photoCount` `ticketCount` `highPriorityCount`.

**Tab phiếu:** scalar phiếu; line fields empty.  
**Tab kết quả:** đủ line (`component*` `damageDesc` `proposedAction` `priority*` `photoCount`).  
**Tab tổng hợp:** `id` = `sum-{bridgeId}` · `ticketCount` · `highPriorityCount` · `day` = lần KT gần nhất · `inspectionId` = phiếu đó.

### API-02 — Export bridge inspections

`GET /api/v1/report/bridge-inspections/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `bridge-inspections.csv`.

Header P1 (union mọi tab):

`ticketNo,day,route,bridgeName,bridgeId,adminArea,inspectionKind,component,damageDesc,proposedAction,priority,photoCount,ticketCount,highPriorityCount,inspectionId`

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft (kể cả **tab**) **không** fetch đến **Xem**.
- **Xem** copy draft → applied → page=1 · `viewed=true`.
- Làm mới: chỉ re-fetch applied; nếu `!viewed` → toast, **không** load.
- Drill: FE `/csdl-so-sach?kind=bridge-inspections&id={inspectionId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| tab | SearchInput | enum FE → query `tab` | `ticket`/`result`/`summary` — **cấm** native Select · **cấm** 3 route |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| bridgeId | SearchInput | enum FE P1 | bridge seed CUC2 · trống = tất cả |
| inspectionKind | SearchInput | enum FE → query `type` | `dinh-ky`/`dot-xuat`/`truoc-mua` — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | |
| qSearch | Input | query `search` | số phiếu · cầu · tuyến |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.kiem-tra-cau.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD passport / phiếu KT · tách 3 tab thành 3 feature / 3 route · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · master users thật · dashboard KPI slug khác · endpoint mới bắt buộc · query `q` trên BE.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput · Xem mới load · Excel UTF-8 BOM · Config FULL report modal · SoCai · drill `/csdl-so-sach?kind=bridge-inspections&id=`.
- `tab=summary` = BE GroupBy (không FE GroupBy trùng).
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task = `roleOnly=sa` · **không** chạy TL trong `task_edf6b5d7`.

## Build (this role)

SA **không** sửa MFE/BE. Verify = live contract audit (controller · service · DTO · BFF · MFE endpoint). **Không** `yarn build` / `dotnet build` trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
