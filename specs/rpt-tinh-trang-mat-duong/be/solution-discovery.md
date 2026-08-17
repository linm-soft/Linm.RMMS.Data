# SA — solution-discovery — rpt-tinh-trang-mat-duong (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-tinh-trang-mat-duong` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_8d173080` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-PC-12) |
| Feature Kind | **E** · leaf `/bao-cao/tinh-trang-mat-duong` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-tinh-trang-mat-duong` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/tinh-trang-mat-duong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/tinh-trang-mat-duong` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_91737fc7` |
| prior · po | **confirmed** · `po/requirement.md` · `task_ed6460e0` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-tinh-trang-mat-duong-control-hint.md` · hash `sha256:rpt-tinh-trang-mat-duong-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_8d173080` |
| confirmedBy | agent autoApprove · `task_8d173080` |
| updatedAt | `2026-08-16T19:40:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `pavement-section` |
| sourceTables | `rmms_pavement_sections` (`PavementSectionEntity`) |
| sa_tz_gate | `tz_day` |
| sa_xco_gate | `xco_na` |
| sa_shared_table | `share_na` P1 · P2 `share_tenant` trên `rmms_pavement_sections` |
| report_export | **IN** — `GET …/pavement-condition/export` CSV UTF-8 BOM `pavement-condition.csv` (Design confirmed · autoApprove ON · **không** assume stub) |
| report_chart | **SoCai** — client từ `items` khi `viewed` ∧ ≥1 dòng (`by-band` · `by-route`) · **không** API chart P1 |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA ngắn (header-only). Pack này re-audit live BE + Design confirmed `task_91737fc7`.

**Cấm** `GET /api/v1/reports/pavement-condition` (context cũ — GAP-PO-PC-01 **đóng**).  
**Cấm** copy CRUD `api/v1/asset` pavement-section vào slug này.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`measuredAt` ← `PavementSectionEntity.MeasuredAt`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only (`TimeOfDay==0`) = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_pavement_sections` (GAP-PO-PC-06) — **không** bảng báo cáo riêng · **không** migration warehouse |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_91737fc7`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` · `GET pavement-condition` + `GET pavement-condition/export` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` · `GetPavementConditionAsync` / `ExportPavementConditionCsvAsync` / `FilterPavementCondition` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportPavementConditionRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `PavementSectionEntity` → `rmms_pavement_sections` |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` · Forward query-string |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getPavementCondition` / `exportPavementCondition` · page `PavementConditionReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Asset` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `pavement-condition` làm trang này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (`task_8ea2e70d`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-PC-PREFIX | `GET api/v1/report/pavement-condition` + `/pavement-condition/export` · BFF cùng path | **Giữ** — đóng GAP-PO-PC-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-PC-ENVELOPE | `ApiResponse<ReportPagedResult<ReportPavementConditionRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-PC-ROW | `id` `code` `route` `kmFrom` `kmTo` `lengthKm` `pci` `pciBand` `pciBandLabel` `layerCode` `structureType` `status` `measuredAt` | **Giữ** — map `PavementSectionEntity`: `Id` `Code` `RoadName`→`Route` `KmFrom` `KmTo` `Pci` `LayerCode` `MeasuredAt` · `pciBand`/`pciBandLabel` derived · drill dùng `id` | keep |
| GAP-SA-PC-BAND | `pciBand` exact ignore-case trên `PciBand` · empty = all · FE enum `tot` `kha` `tb` `kem` `rat-kem` | **Giữ** · P1 seed đã gắn band · P2 derive: tot≥85 · kha 70–84 · tb 55–69 · kem 40–54 · rat-kem&lt;40 · **cấm** native Select | keep |
| GAP-SA-PC-TYPE | query `type` = **alias** `pciBand` khi `pciBand` trống (`band = pciBand ?? type`) · leaf gửi **cả hai** cùng value | **Giữ alias** (Design hỏi keep/gỡ → **keep** compat hub/qs) · primary SSOT = `pciBand` · **cấm** bind param `q` | keep |
| GAP-SA-PC-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` | **Giữ** GAP-PO-PC-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-PC-SEARCH | Contains `Code`/`Route`/`LayerCode`/`StructureType`/`Status`/`PciBandLabel` · query **`search`** | **Giữ** · PO lookup table ghi `q` **stale** (GAP Design DES-PC-07) — **khóa `search`** · FE live gửi `search` · **cấm** query `q` riêng P1 | keep |
| GAP-SA-PC-DATE | `FilterDate` trên `MeasuredAt` · `from` inclusive · `to` date-only → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` | keep |
| GAP-SA-PC-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-PC-EXPORT | CSV UTF-8 BOM `pavement-condition.csv` · header `code,route,kmFrom,kmTo,lengthKm,pci,pciBand,pciBandLabel,layerCode,structureType,status,measuredAt,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-PC-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-PC-PERM | Không `[RequirePermission]` | **P1 stub** `report.tinh-trang-mat-duong.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-PC-RM | In-memory **12** dòng CUC2 map entity | **P1 giữ** · EF `rmms_pavement_sections` **P2** | document |
| GAP-SA-PC-INIT | Không `init-data` PCI band | **OUT P1** — PCI band = enum tĩnh FE `PCI_BAND_LOOKUP` | FE only |
| GAP-SA-PC-CHART | Không API chart | **Giữ** — SoCai client từ `items` (`by-band` · `by-route`) khi viewed ∧ ≥1 dòng | FE only |
| GAP-SA-PC-MAP | DOMAIN-MAP slug `rpt-tinh-trang-mat-duong` | **Đóng** — đã có → Report · `api/v1/report` (GAP-PO-PC-09) | document |
| GAP-SA-PC-HUB | Hub `ReportListPage` family `pavement-condition` | **Cấm** làm trang leaf — leaf = `PavementConditionReportPage` | FE keep |
| GAP-SA-PC-DRILL | Seed `id` = `pc1`…`pc12` | Drill FE `/asset/pavement-section/{id}` · **không** GetById Report · P2 id = PK nguồn | FE keep · P2 BE |

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
| Config | report FULL | `ReportDisplayConfigModal` / `LinReportTableConfigModal` — List · width · filter · sort · Thêm cột · **cấm** Kind B `LinCatalogUiSchemaEditorModal` · **cấm** `LinListTableConfigModal` · **cấm** `configHint` |
| Filter | `LinErpListFilterBar` | title trái · input cụm phải · 1 hàng wrap (`filter-bar-layout-hard`) · export **không** nằm filter — toolbar `reportToolbar` |
| Export | reportToolbar | Excel CSV · In `LinReportPrintScopeModal` |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-PC | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/tinh-trang-mat-duong` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A · **cấm** Form Biểu 1 trên leaf |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số đoạn theo PCI band · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/pavement-condition` |
| Xuất Excel | **API-02** GET `report/pavement-condition/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput PCI band | **enum tĩnh FE** → query `pciBand` (+ alias `type`) |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE pavement rows trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportPavementConditionRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Pavement condition (Xem)

`GET /api/v1/report/pavement-condition?pciBand=&type=&routeId=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/pavement-condition` + cùng query.

| Query | Rule |
|-------|------|
| `pciBand` | exact ignore-case `PciBand` · omit = all |
| `type` | **alias** — dùng khi `pciBand` trống · leaf gửi cùng `pciBand` |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `from`/`to` | filter `MeasuredAt` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Code`/`Route`/`LayerCode`/`StructureType`/`Status`/`PciBandLabel` |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportPavementConditionRowDto`: `id` `code` `route` `kmFrom` `kmTo` `lengthKm` `pci` `pciBand` `pciBandLabel` `layerCode` `structureType` `status` `measuredAt`.

### API-02 — Export pavement condition

`GET /api/v1/report/pavement-condition/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `pavement-condition.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo tình trạng mặt đường.»). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Drill: FE `/asset/pavement-section/{id}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text · **cấm QL.22** |
| pciBand | SearchInput | enum FE → query `pciBand` (+ alias `type`) | tot / kha / tb / kem / rat-kem — **cấm** native Select |
| fromDate / toDate | Date | query `from`/`to` | `MeasuredAt` |
| qSearch | Input | query **`search`** (không `q`) | mã · tuyến · lớp |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.tinh-trang-mat-duong.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD đoạn mặt đường trên slug này (thuộc `pavement-section`) · GOVOne chrome · warehouse schema · EF `rmms_pavement_sections` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1 · Form Biểu 1 PCI trên leaf.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tuyến/PCI band · Xem mới load · Excel `pavement-condition.csv` · Config FULL · SoCai · drill `/asset/pavement-section/{id}`.
- Query search **khóa `search`** — PO `q` không bind BE. Query PCI **`pciBand`** + alias `type` **giữ**.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- Role này **không** sửa MFE/BE — VERIFY GATE build **N/A**.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
