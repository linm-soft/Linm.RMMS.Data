# SA — solution-discovery — rpt-thiet-hai (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-thiet-hai` |
| this role | `sa` · `/agent-sa` |
| status | `done` · **confirmed** |
| solution_confirm | **approve** (`autoApprove=ON` packet `task_fca5a3e7` — agent tự confirm · **không** chờ board) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **bỏ** (GAP-PO-TH-02) |
| Feature Kind | **E** · leaf `/bao-cao/thiet-hai` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-thiet-hai` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/thiet-hai` |
| mfeStdUrl | `http://localhost:9311/bao-cao/thiet-hai` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_242fad5a` |
| prior · po | **confirmed** · `po/requirement.md` · `task_ba6d898c` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-thiet-hai-control-hint.md` · hash `sha256:rpt-thiet-hai-context-20260816` (handoff cluster MD **không tồn tại**) |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| taskId | `task_fca5a3e7` |
| confirmedBy | agent autoApprove · `task_fca5a3e7` |
| updatedAt | `2026-08-16T18:55:00.000Z` |
| sourceFormReady | **yes** |
| sourceFeature | `incident` |
| sourceTables | `rmms_incidents` (`IncidentEntity` · damage lines typed P1) |

> SA **chốt** lookup API + query/export contract. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report`.  
> **Supersedes** stub SA `task_11d09197` (ngắn). Pack này re-audit live BE + Design confirmed.

**Cấm** `GET /api/v1/reports/damage-qty` (context cũ — GAP-PO-TH-01 **đóng**).  
**Cấm** query param `q` trên leaf này (PO/Design — live BE **không** nhận `q`; FE `exportDamageQty` chỉ gửi `search`).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — JSON `DateTimeOffset` ISO (`at`) · filter `from`/`to` parse `DateTimeOffset` · `to` date-only = exclusive end `+1 day` · FE **display** `formatAtVi` / `vi-VN` · **cấm** persist TZ client |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById trên Report |
| sa_shared_table | **share_na** P1 · **P2** query `rmms_incidents` + damage lines (GAP-PO-TH-07) — **không** bảng báo cáo riêng |
| lookup_share | road-route = **share_a** Integration Type A — read-only SearchInput |
| parent_json | **cấm** |
| design_confirm | **approve** (Design self-confirm `task_242fad5a`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (board đã tick — Dev sau `solution_confirm`) |
| autoApprove | **ON** — SA **confirmed** (agent) · enqueue TL |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · `ReportDamageQtyRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · nguồn P2 `IncidentEntity` → `rmms_incidents` + typed damage lines |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getDamageQty` / `exportDamageQty` · page `DamageQtyReportPage` |
| Lookup | **`GET api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |

**Cấm** clone master road-route dưới Report. **Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Incident` cho slug này (drill FE only). **Cấm** dùng hub `ReportListPage` family `damage-qty` làm trang này. **Cấm** reuse `GET report/incidents` (`rpt-su-co`) / `GET report/disasters` (`rpt-thien-tai`) cho leaf KL thiệt hại.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_11d09197`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-TH-PREFIX | `GET api/v1/report/damage-qty` + `/damage-qty/export` · BFF cùng path | **Giữ** — đóng GAP-PO-TH-01 / context plural · **cấm** `api/v1/reports` | document |
| GAP-SA-TH-ENVELOPE | `ApiResponse<ReportPagedResult<ReportDamageQtyRowDto>>` `{ success, message, data }` · `data.items` + paging | **Giữ** · BFF proxy raw · **không** envelope mới · **không** KPI block | document |
| GAP-SA-TH-ROW | `id` `incidentId` `route` `item` `qty` `unit` `estValue` `source` `at` | **Giữ** — map P1 typed damage line: `RouteName`→`route` · `AssetLabel`→`item` · Qty/Unit/EstValue/Source · drill `incidentId` | keep |
| GAP-SA-TH-TYPE | query `type` exact ignore-case trên **`Item`** (hạng mục) | **Giữ** · FE `DAMAGE_ITEM_LOOKUP`: Mặt đường / Taluy / Hộ lan / Cống / Biển báo / Rãnh · **cấm** native Select · **cấm** `INCIDENT_TYPE_LOOKUP` | keep |
| GAP-SA-TH-ROUTE | `FilterRoute` **exact** ignore-case · empty / `all` = all · seed `QL.1` `QL.15` `QL.217` `HCM` `CT.001` | **Giữ** GAP-PO-TH-04 · lookup UI = 38 CUC2 + trống · **cấm** invent `QL.22` / `ĐT.*` trên seed report | BE keep · FE lookup |
| GAP-SA-TH-SEARCH | Contains `Route`/`Item`/`Unit`/`Source`/`IncidentId` · query **`search` only** | **Giữ** · FE **cấm** gửi `q` · BE **không** alias `q` (khác disasters) | keep |
| GAP-SA-TH-DATE | `FilterDate` trên `At` · `from` inclusive · `to` date-only (`TimeOfDay==0`) → exclusive `to+1d` | **Giữ** · FE gửi `yyyy-MM-dd` | keep |
| GAP-SA-TH-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-TH-EXPORT | CSV UTF-8 BOM `damage-qty.csv` · header `at,route,item,qty,unit,estValue,source,incidentId,id` · **không** page | **IN P1** · `canExport` chỉ khi FE `viewed` | keep |
| GAP-SA-TH-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE only** | FE Dev |
| GAP-SA-TH-PERM | Không `[RequirePermission]` | **P1 stub** `report.thiet-hai.read` (+ export cùng read) — gắn khi CommonLib ≥1.4.0 · **không** block | document |
| GAP-SA-TH-RM | In-memory **12** dòng CUC2 map entity damage lines | **P1 giữ** · EF `rmms_incidents` + lines **P2** | document |
| GAP-SA-TH-INIT | Không `init-data` hạng mục | **OUT P1** — hạng mục = enum tĩnh FE `DAMAGE_ITEM_LOOKUP` | FE only |
| GAP-SA-TH-CHART | Không API chart | **Giữ** — SoCai client từ `items` (`by-item` · `by-route`) khi viewed ∧ ≥1 dòng | FE only |
| GAP-SA-TH-MAP | DOMAIN-MAP `rpt-thiet-hai` → Report · `report` | **Đóng** — đã có | document |
| GAP-SA-TH-HUB | Hub `ReportListPage` | **Cấm** làm trang leaf — leaf = `DamageQtyReportPage` | FE keep |
| GAP-SA-TH-KIND-B | — | **Cấm** `LinCatalogUiSchemaEditorModal` / catalog schema seed trên slug này | FE keep |
| GAP-SA-TH-Q | Controller **không** bind `q` | **Giữ** GAP-PO-TH-01 — **cấm** thêm alias `q` trên damage-qty | keep |

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
| S-TH | Report A–D + SoCai chart | Full page `LinPageLayout` kind=`report` | `/bao-cao/thiet-hai` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · In · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng (số dòng theo hạng mục · theo tuyến) |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/damage-qty` |
| Xuất Excel | **API-02** GET `report/damage-qty/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` |
| SearchInput hạng mục | **enum tĩnh FE** `DAMAGE_ITEM_LOOKUP` → query `type` (match `Item`) |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE incident/damage rows trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportDamageQtyRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Damage qty (Xem)

`GET /api/v1/report/damage-qty?type=&routeId=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/damage-qty` + cùng query.

| Query | Rule |
|-------|------|
| `type` | exact ignore-case `Item` (hạng mục) · omit = all |
| `routeId` | empty / omit / `all` = all · **exact** ignore-case `Route` |
| `from`/`to` | filter `At` inclusive from · to date-only exclusive +1d |
| `search` | Contains `Route`/`Item`/`Unit`/`Source`/`IncidentId` |
| `q` | **cấm** — không bind |
| `page`/`pageSize` | allow-list **50/100/200/500** |

**Row DTO** `ReportDamageQtyRowDto`: `id` `incidentId` `route` `item` `qty` `unit` `estValue` `source` `at`.

### API-02 — Export damage-qty

`GET /api/v1/report/damage-qty/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `damage-qty.csv`.

### API-LKP-01 — Road routes search (Integration)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=&excludeCode=`  
Item: `code` `name` (FE map `value`/`label`). Report **chỉ consume**. Fallback 38 CUC2 **chỉ** khi BFF down / empty · **cấm** `QL.22`.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo khối lượng thiệt hại.»). Đổi page/pageSize sau viewed = refetch cùng applied filters.
- Đổi filter draft **không** fetch đến **Xem**. Làm mới khi `!viewed` → toast «Chưa xem» — **không** fetch.
- Drill: FE `/incident?id={incidentId}` (`window.top`) — **không** API Report GetById · **không** CRUD trên slug này.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng P1.
- Excel: `canExport` chỉ khi đã Xem · cột đang hiện (FE) · file BE full filtered set.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| type | SearchInput | enum FE → query `type` (filter `Item`) | Mặt đường / Taluy / Hộ lan / Cống / Biển báo / Rãnh — **cấm** native Select |
| routeId | SearchInput | **API-LKP-01** | road-route Type A · trống = tất cả · **cấm** free-text |
| fromDate / toDate | Date | query `from`/`to` | DTO `at` |
| qSearch | Input | query **`search`** | tuyến · hạng mục · ĐVT · nguồn · incidentId |

Grid columns = DTO scalars readonly. **Không** editor.

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.thiet-hai.read` | API-00 · API-01 · API-02 |
| `master.road-routes.read` | API-LKP-01 (Integration, đã stub) |

## Out of pack

CRUD sự cố trên slug này (thuộc `incident`) · GOVOne chrome · warehouse schema · EF `rmms_incidents` P1 · parent JSON · Kind B catalog schema editor · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent tuyến ngoài CUC2 38 · dashboard KPI gộp slug khác · endpoint mới bắt buộc · migration P1 · param `q` trên damage-qty · reuse incidents/disasters APIs.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput hạng mục/tuyến · Date kỳ · Input tìm · Xem mới load · Excel `damage-qty.csv` · Config FULL · SoCai (by-item · by-route) · drill `/incident?id=`.
- autoApprove **ON** → SA **confirmed** (agent) · enqueue TL.
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` (cả hai đã có).
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API.
- Roles sau SA = TL **pending** đến lượt. **Cấm** nhảy QA.
- This task `roleOnly=sa` · **không** chạy TL trong `task_fca5a3e7`.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
