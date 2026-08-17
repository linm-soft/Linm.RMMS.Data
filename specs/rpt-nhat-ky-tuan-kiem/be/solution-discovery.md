# SA — solution-discovery — rpt-nhat-ky-tuan-kiem (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-nhat-ky-tuan-kiem` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_c109bd27` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-NKTK-02) |
| Feature Kind | **E** · leaf `/bao-cao/nhat-ky-tuan-kiem` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-nhat-ky-tuan-kiem` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/nhat-ky-tuan-kiem` |
| mfeStdUrl | `http://localhost:9311/bao-cao/nhat-ky-tuan-kiem` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (`task_ee539f5e`) · `ui/design.md` + prototype + reviewUrl · GAP-DS-NKTK-01..12 |
| prior · po | **confirmed** · `po/requirement.md` · `task_085844af` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-nhat-ky-tuan-kiem-control-hint.md` · hash `sha256:rpt-nhat-ky-tuan-kiem-context-20260816` · handoff path `specs/_data-analy/clusters/…` **không tồn tại** — dùng artifact thật |
| sourceFormReady | **yes** (`docs/context/11-CSDL-SO-SACH-DATABASE-API.md` §3.8) |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `InspectionLogBook` · `InspectionEntry` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp · SSOT live lệch — **không** regen) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_c109bd27` |
| confirmedBy | agent autoApprove · `task_c109bd27` |
| updatedAt | `2026-08-16T16:10:00.000Z` |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Cấm** `Linm.Web.ERP.WebService`. **Cấm** POST/PUT/DELETE Inspection* trên slug này.  
> **Cấm** reuse `GET api/v1/report/patrol-log-road` (Mẫu 1) · **cấm** `checkins` · **cấm** KPI `rpt-tuan-kiem`.

**Cấm** `GET /api/v1/reports/patrol-log-inspect` (context cũ — GAP-PO-NKTK-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — row `day` string `yyyy-MM-dd` · filter `from`/`to` inclusive trên `day` (`FilterDay` ordinal) · `inspectedAt` ISO +07 seed P1 (`day` + `T07:30:00+07:00`) · **không** DateTimeOffset trên DTO list P1 bắt buộc UI |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById |
| sa_shared_table | **share_na** — không schema warehouse / EF join bắt buộc P1 (join Inspection* = **P2**) |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design `task_ee539f5e`) |
| repo | `beRepo` + `uiRepo` **pending user tick** trước Dev (**không auto**) — STATUS ghi path repo; **không** coi là Dev-ready chỉ vì SA confirm |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportPatrolLogInspectRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getPatrolLogInspect` / `exportPatrolLogInspect` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `ROAD_ROUTE_LOOKUP_CONFIG` |

**Cấm** clone master road-route dưới Report. **Cấm** API CRUD dưới `Domains/Asset` / sổ sách cho slug này (drill FE only tới MFE nguồn).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev sau Design GAP-DS-NKTK-01 (cột Ghi chú · status done/open):

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-NKTK-PREFIX | `GET api/v1/report/patrol-log-inspect` + `/patrol-log-inspect/export` | **Giữ** — đóng GAP-PO-NKTK-01 · **cấm** `api/v1/reports` | document |
| GAP-SA-NKTK-ENVELOPE | `ApiResponse<ReportPagedResult<ReportPatrolLogInspectRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block trên DTO | document |
| GAP-SA-NKTK-ROW | `id` `bookId` `bookNo` `entryId` `day` `inspectedAt` `route` `inspectorStaffId` `inspectorStaff` `kmFrom` `kmTo` `position` `workItemProposal` `conditionDetail` `estimatedQty` `inspectorOpinion` `receiverNote` `requiredAction` `dueAt` `doneQty` `doneQuality` `doneAt` `status` `statusLabel` | **Giữ P1 trên BE** — map nguồn §3.8. Design alias `workItem`/`result`/`note`/`kmRange` = **cột UI** · **cấm** đổi tên DTO | keep |
| GAP-SA-NKTK-GRID | Live MFE: day · route · workItemProposal · conditionDetail · notes (`requiredAction` \|\| `receiverNote`) · inspectorStaff · kmRange · position · statusLabel · bookNo · drill | **Khớp** PO §7 + Design §2 — Ghi chú P1 **IN** | keep |
| GAP-SA-NKTK-TYPE | Query `type` **bị ignore** (`_ = type`) | **Giữ ignore** · **cấm** map `type` sang check-in / Mẫu 1 | keep |
| GAP-SA-NKTK-STAFF | query **`staffId`** exact `InspectorStaffId` · empty/`all` = all · seed `nva` `ttb` `lvc` `pmd` | **Giữ** · cán bộ = **enum seed FE P1** — **cấm** native Select | keep |
| GAP-SA-NKTK-ROUTE | `FilterRoute` **exact** (không prefix) · empty/`all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `QL.7` `QL.10` `QL.8` `QL.9` | **Giữ** · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` | BE keep · FE lookup |
| GAP-SA-NKTK-SEARCH | Contains `WorkItemProposal`/`ConditionDetail`/`Route`/`InspectorStaff`/`BookNo`/`Position`/`RequiredAction`/`ReceiverNote` · query **`q`** canonical · coalesce `q ?? search` | **Giữ** · FE gửi `q` · alias `search` OK | keep |
| GAP-SA-NKTK-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-NKTK-EXPORT | CSV UTF-8 BOM · filename **`patrol-log-inspect.csv`** · header live: `day,route,inspectorStaff,workItemProposal,conditionDetail,requiredAction,receiverNote,kmFrom,kmTo,position,status,bookNo,entryId,bookId` · **không** page | **IN P1** · FE `subsetCsv` theo cột đang hiện | keep |
| GAP-SA-NKTK-DRILL | Live MFE `drillSource(bookId, entryId)` → `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}` | **LOCK** (GAP-DS-NKTK-12) — **không** `kind=patrol-logs` · **không** API Report GetById | FE keep |
| GAP-SA-NKTK-BOOKID | Seed P1 `BookId = BookNo` (`BK-TK-*`) | **P1 OK** · P2 map `InspectionLogBook.Id` thật khi EF join | document |
| GAP-SA-NKTK-FOOTER | Live `LinCatalogListPagination` luôn | Zone D **luôn** hiện — **FE only** | FE keep |
| GAP-SA-NKTK-PERM | Không `[RequirePermission]` | **P1 stub** `report.nhat-ky-tuan-kiem.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-NKTK-RM | In-memory **12** dòng CUC2 · map InspectionLogBook/Entry fields | **P1 giữ** · EF join `InspectionLogBook`/`InspectionEntry` **P2** | document |
| GAP-SA-NKTK-KPI-MAP | Không KPI dashboard / map trên DTO | **Giữ** — Chart SoCai **client** từ `items` · **cấm** gộp hub `reports` / Mẫu 1 / `rpt-tuan-kiem` | document |
| GAP-SA-NKTK-DOMAIN-MAP | Slug row thiếu trên DOMAIN-MAP trước pack này | **Thêm** `rpt-nhat-ky-tuan-kiem` → Report | BE docs |

**Không** migration. **Không** endpoint mới bắt buộc — live khớp catalog dưới. **Dev** = parity Design (SearchInput · Xem · Config FULL · cột Ghi chú) nếu TL phát hiện lệch; **không** Kind B schema editor.

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
| S-NKTK | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/nhat-ky-tuan-kiem` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | SoCai | toolbar chart | — | SoCai khi viewed + ≥1 dòng (số dòng theo ngày · tuyến · trạng thái done/open) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` stub OK | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/patrol-log-inspect` |
| Xuất Excel | **API-02** GET `report/patrol-log-inspect/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput cán bộ | **enum tĩnh FE** `nva`/`ttb`/`lvc`/`pmd` → query `staffId` |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE InspectionLogBook / InspectionEntry P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportPatrolLogInspectRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Patrol log inspect (Xem)

`GET /api/v1/report/patrol-log-inspect?staffId=&routeId=&from=&to=&q=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/patrol-log-inspect` + cùng query.

| Query | Rule |
|-------|------|
| `staffId` | empty / omit / `all` = all · exact `InspectorStaffId` (`nva`/`ttb`/`lvc`/`pmd`) |
| `routeId` | empty / omit / `all` = all · **exact** `Route` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `q` | Contains hạng mục · kết quả · tuyến · cán bộ · số sổ · vị trí · ghi chú (`RequiredAction`/`ReceiverNote`) · alias `search` nếu `q` trống |
| `type` | **ignored** P1 (compat param) — **cấm** dùng |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportPatrolLogInspectRowDto`: `id` `bookId` `bookNo` `entryId` `day` `inspectedAt` `route` `inspectorStaffId` `inspectorStaff` `kmFrom` `kmTo` `position` `workItemProposal` `conditionDetail` `estimatedQty` `inspectorOpinion` `receiverNote` `requiredAction` `dueAt` `doneQty` `doneQuality` `doneAt` `status` `statusLabel`.

Grid P1 bắt buộc gồm Ghi chú (`requiredAction` / `receiverNote`) + `position` + `kmFrom`/`kmTo` + drill `bookId`/`entryId`. `status` = `done` khi `DoneAt` có giá trị · `open` khi trống.

### API-02 — Export patrol log inspect

`GET /api/v1/report/patrol-log-inspect/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `patrol-log-inspect.csv`.

Header P1 (live):

`day,route,inspectorStaff,workItemProposal,conditionDetail,requiredAction,receiverNote,kmFrom,kmTo,position,status,bookNo,entryId,bookId`

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**.
- **Xem** copy draft → applied → page=1 · `viewed=true`.
- Làm mới: chỉ re-fetch applied; nếu `!viewed` → toast, **không** load (GAP-DS-NKTK-10).
- Drill: FE `/asset/csdl-so-sach?kind=inspection-logs&id={bookId}&entry={entryId}` — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| staffId | SearchInput | enum FE → query `staffId` | `nva`/`ttb`/`lvc`/`pmd` — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | trên `day` |
| qSearch | Input | query `q` | hạng mục · tuyến · cán bộ · số sổ · ghi chú |

Grid columns = DTO scalars readonly (+ FE computed `kmRange` / `notes`). **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.nhat-ky-tuan-kiem.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD `csdl-so-sach` / Inspection* trên slug này · Mẫu 1 tuần đường · `rpt-tuan-kiem` KPI · `rpt-checkin` PatrolSession · KPI 4 · map · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI slug khác · endpoint mới bắt buộc · POST/PUT/DELETE · reuse `type` như check-in.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tuyến/cán bộ · Xem mới load · Excel UTF-8 BOM · Config FULL report modal · SoCai · drill `/asset/csdl-so-sach?kind=inspection-logs&id=&entry=` · cột Ghi chú · DTO `workItemProposal`/`conditionDetail`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm`.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task = `roleOnly=sa` · **không** chạy TL trong `task_c109bd27`.

## Build (this role)

SA **không** sửa MFE/BE runtime. Verify = live contract audit (controller · service · DTO · BFF · MFE endpoint + grid + drill). DOMAIN-MAP slug row. **Không** `yarn build` / `dotnet build` trong role này.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
