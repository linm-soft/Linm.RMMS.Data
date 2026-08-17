# SA — solution-discovery — rpt-giay-phep-thi-cong (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-giay-phep-thi-cong` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` — agent tự confirm) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-GPTC-02) |
| Feature Kind | **E** · leaf `/bao-cao/giay-phep-thi-cong` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-giay-phep-thi-cong` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/giay-phep-thi-cong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/giay-phep-thi-cong` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_52e640a2` |
| prior · po | **done** · `po/requirement.md` · `task_9678d5da` |
| prior · data_analy | **done** · `specs/_data-analy/features/rpt-giay-phep-thi-cong-control-hint.md` · hash `sha256:rpt-giay-phep-thi-cong-context-20260816` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| sourceFormReady | **yes** · entity `ConstructionPermit` · CSDL §3.6 |
| sourceFeature | `csdl-so-sach` |
| sourceTables | `ConstructionPermit` |
| taskId | `task_10635f9c` |
| updatedAt | `2026-08-16T04:35:00.000Z` |

> SA **chốt** lookup + query/export contract. Design **chốt** control-map. **Cấm** Dev đổi SearchInput → Select.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_63e7d1ee` (ngắn). Pack này re-audit live BE + Design confirmed.

Context `api/v1/reports/construction-permits` **stale** (GAP-PO-GPTC-01 / GAP-DS-GPTC-03 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — filter `from`/`to` date `yyyy-MM-dd` trên field `day` (`PermitDate`) · **không** persist TZ client · grid Date display local `vi-VN` từ `day` |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById Report |
| sa_shared_table | **share_na** — không schema warehouse / ConstructionPermit EF P1 |
| lookup_share | road-route = **share_read P1** seed CUC2 + Type A Integration **P2** fallback · **cấm** clone catalog vào Report DTO |
| parent_json | **cấm** |
| design_confirm | **approve** (`task_52e640a2`) |
| repo | `beRepo` + `uiRepo` **approve** (STATUS) — Dev được write sau `solution_confirm` |
| autoApprove | **ON** — SA **confirmed** agent (`task_10635f9c`) |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · type `ReportConstructionPermitRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · ConstructionPermit EF **P2** |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getConstructionPermits` / `exportConstructionPermits` |
| Lookup tuyến | **P1** `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` (fallback seed nếu BFF down / rỗng) · **cấm** invent QL.22 · **cấm** copy Integration models vào Report DTO |

**Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Asset` cho slug này (drill = FE route only). **Cấm** `POST /api/v1/construction-permits` trên leaf report.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-GPTC-PREFIX | `GET api/v1/report/construction-permits` + `/construction-permits/export` | **Giữ** — đóng GAP-PO-GPTC-01 / GAP-DS-GPTC-03 · **cấm** `api/v1/reports` | document |
| GAP-SA-GPTC-ENVELOPE | `ApiResponse<ReportPagedResult<ReportConstructionPermitRowDto>>` `{ success, message, data }` · `data.items` + paging · **không** KPI DTO | **Giữ** · BFF proxy raw query-string · **không** envelope mới · **không** KPI hub | document |
| GAP-SA-GPTC-QUERY | Controller query **`status`** + **`type`** + **`q`** + **`search`** · coalesce `status ?? type`, `q ?? search` | Canonical **`status` `routeId` `from` `to` `q` `page` `pageSize`** (GAP-DS-GPTC-04) · BE **giữ** coalesce · FE **gửi** `status`/`q` · **cấm** gửi `type`/`search` sau pack này | FE Dev |
| GAP-SA-GPTC-ROW | `id` `permitId` `permitNo` `day` `route` `stationKm` `investor` `contractor` `workName` `issuer` `issuedAt` `expiresAt` `extendedAt` `status` `statusLabel` | **Giữ** — map nguồn `PermitNo` `PermitDate`=`day` `RouteId`=`route` `StationKm` `Investor` `Contractor` `WorkName` `Issuer` `IssuedAt` `ExpiresAt` `ExtendedAt` | keep |
| GAP-SA-GPTC-STATUS | `status` exact `hieu-luc`/`het-han`/`gia-han` · empty/`all` = all | **Giữ** | keep |
| GAP-SA-GPTC-ROUTE | `FilterRoute` exact + **`QL.1` StartsWith** (match nhầm `QL.10`/`QL.15`/…) | **Exact** `Route` vs `routeId` (case-insensitive) · empty/`all` = all · **cấm** StartsWith `QL.1` | BE Dev |
| GAP-SA-GPTC-DAY | `FilterDay` inclusive `from`/`to` trên `day` (`PermitDate`) | **Giữ** | keep |
| GAP-SA-GPTC-Q | Contains `PermitNo`/`Investor`/`WorkName`/`Contractor` | Canonical **`q`** cùng Contains · **không** bắt buộc search `permitId` P1 | keep |
| GAP-SA-GPTC-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-GPTC-SEED | In-memory **12** dòng CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.10` `QL.8` `QL.9`) · **không** QL.22 | **Giữ** (nằm 8–15 GAP-PO-GPTC-04) | keep |
| GAP-SA-GPTC-EXPORT | CSV UTF-8 BOM `construction-permits.csv` · header `permitNo,day,route,stationKm,investor,workName,issuedAt,expiresAt,status,permitId` · **không** page · cột `status` = **StatusLabel** VN | **IN P1** file BE (default set) · visible-column subset = **FE** từ `columnPrefs` khi viewed (Design ẩn `contractor`/`issuer` default) · export **applied** filters · **cấm** export khi chưa Xem · FE map `validity` → `issuedAt`+`expiresAt` · thêm `contractor`/`issuer`/`extendedAt` khi cột Config bật | BE keep · FE Dev |
| GAP-SA-GPTC-CHART | FE SoCai `trend-count` / `by-status` / `by-route` từ `items` trang | SoCai **client** khi `viewed` + có dòng — KPI TT + tuyến (Design) · **không** API chart P1 | FE |
| GAP-SA-GPTC-DRILL | Live ` /csdl-so-sach?id={permitId}` **thiếu** `kind` | FE `/csdl-so-sach?kind=construction-permits&id={permitId}` top window — **không** Report GetById | FE Dev |
| GAP-SA-GPTC-PERM | Không `[RequirePermission]` | **P1 stub** `report.giay-phep-thi-cong.read` (+ export cùng read) — gắn khi CommonLib ≥ gate · **không** block | document |
| GAP-SA-GPTC-RM | In-memory 12 dòng | **P1 giữ** · ConstructionPermit EF **P2** (GAP-PO-GPTC-07) | document |
| GAP-SA-GPTC-LKP | FE `ROAD_ROUTE_SEED` 38 tuyến + `GET /integration/road-routes/search` fallback seed · strip `QL.22` | **P1 giữ** · Type A Integration **P2** · SearchInput · **cấm** native `<select>` | FE |
| GAP-SA-GPTC-INIT | Không `init-data` | **OUT P1** | FE only |
| GAP-SA-GPTC-FOOTER | Zone D `LinCatalogListPagination` live | **Luôn** hiện — **FE** | FE |
| GAP-SA-GPTC-CONFIG | Live `ReportDisplayConfigModal` + column prefs | **FULL** `LinReportTableConfigModal` analog · **cấm** `LinListTableConfigModal` / `configHint` | FE Dev (parity Design) |

**Không** migration P1. **Không** endpoint path mới — chỉ **siết** `FilterRoute` exact + FE query/drill/config.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | FE seed P1 + Integration search | **cấm** copy road-route catalog vào Report DTO |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-GPTC | Report A–D + SoCai | Full page `LinPageLayout` kind=`report` | `/bao-cao/giay-phep-thi-cong` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · print stub · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast · cột ẩn default: `contractor` `issuer` |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng + `showCharts` |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | stub toast OK P1 — **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/construction-permits` |
| Xuất Excel | **API-02** GET `report/construction-permits/export` |
| SearchInput tuyến | **API-03** GET `integration/road-routes/search` · P1 fallback `ROAD_ROUTE_SEED` |
| SearchInput TT GP | **enum tĩnh FE** `hieu-luc`/`het-han`/`gia-han` — **không** API |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE construction-permit rows P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportConstructionPermitRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Construction permits (Xem)

`GET /api/v1/report/construction-permits?status=&routeId=&from=&to=&q=&page=&pageSize=`  
Alias (compat live): `type` ≡ `status` · `search` ≡ `q` — coalesce **canonical thắng** nếu cả hai.  
BFF `GET web-bff/api/v1/report/construction-permits` + cùng query (forward raw).

| Query | Rule |
|-------|------|
| `status` | empty / omit / `all` = all · else exact `hieu-luc` \| `het-han` \| `gia-han` (case-insensitive) trên `Status` |
| `routeId` | empty / omit / `all` = all · else **exact** `Route` (case-insensitive) — **cấm** StartsWith `QL.1` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive (`PermitDate`) |
| `q` | Contains `PermitNo` / `Investor` / `WorkName` / `Contractor` |
| `page`/`pageSize` | allow-list **50/100/200/500** |
| `type`/`search` | **legacy alias** — BE coalesce; FE **không** gửi sau pack này |

**Row DTO** `ReportConstructionPermitRowDto`: `id` `permitId` `permitNo` `day` `route` `stationKm` `investor` `contractor` `workName` `issuer` `issuedAt` `expiresAt` `extendedAt` `status` `statusLabel`.

Sort: `day` desc · `permitNo` asc.

### API-02 — Export construction-permits

`GET /api/v1/report/construction-permits/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `construction-permits.csv`.  
CSV `status` column = **StatusLabel** (Còn hiệu lực / Hết hạn / Đã gia hạn).

### API-03 — Road-route search (lookup, Integration — **không** Report)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/integration/road-routes/search`.  
P1: FE gọi; nếu fail/rỗng → `ROAD_ROUTE_SEED` 38 tuyến CUC2 · **cấm QL.22**. **Không** copy catalog vào Report domain.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng **applied** filters.
- Đổi filter draft **không** fetch đến **Xem**. Đổi filter rồi Xem → `page=1`.
- Drill: FE `/csdl-so-sach?kind=construction-permits&id={permitId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng.
- Excel: chỉ khi `viewed` · params = **applied** (không draft lệch lưới).

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | P1 seed + **API-03** P2 | **road-route** · empty=Tất cả · **cấm QL.22** |
| status | SearchInput | **không API** · query `status` | enum `hieu-luc`/`het-han`/`gia-han` / empty=Tất cả |
| fromDate / toDate | Date | query `from`/`to` | trên `PermitDate`=`day` |
| qSearch | Input | query `q` | số GP · CĐT · công trình |

Grid columns = DTO scalars readonly + drill button. **Cấm** editor.

Trạng thái GP:

| value | label |
|-------|-------|
| `` (empty) | Tất cả trạng thái |
| `hieu-luc` | Còn hiệu lực |
| `het-han` | Hết hạn |
| `gia-han` | Đã gia hạn |

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.giay-phep-thi-cong.read` | API-00 · API-01 · API-02 |

Lookup API-03 dùng perm Integration road-route (domain khác) — không gắn perm Report.

## Out of pack

CRUD cấp phép · `POST /api/v1/construction-permits` · CRUD `RowViolation` · GOVOne chrome · warehouse schema · ConstructionPermit EF P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · Resource/Slideout · `[RequirePermission]` block P1.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tuyến/TT · Xem mới load · Excel `construction-permits.csv` · Config FULL · query `status`/`q` · drill `kind=construction-permits` · `FilterRoute` exact.
- autoApprove **ON** → SA **confirmed** (`task_10635f9c`). Chain enqueue **team-lead**.
- Dev write: `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API (GAP-SA-GPTC-ROUTE).
- Roles sau TL = Dev **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
