# SA — solution-discovery — rpt-hang-muc-hu-hong (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` — agent tự confirm) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-HH-02) |
| Feature Kind | **E** · leaf `/bao-cao/hang-muc-hu-hong` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-hang-muc-hu-hong` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/hang-muc-hu-hong` |
| mfeStdUrl | `http://localhost:9311/bao-cao/hang-muc-hu-hong` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** · `ui/design.md` + prototype + reviewUrl · `task_35da77de` · design_confirm **approve** |
| prior · po | **confirmed** · `po/requirement.md` · `task_f3810d11` |
| prior · data_analy | **confirmed** · `specs/_data-analy/features/rpt-hang-muc-hu-hong-control-hint.md` · hash `sha256:rpt-hang-muc-hu-hong-context-20260816` · path handoff `specs/_data-analy/clusters/` **N/A** |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **ON** |
| chain | **ON** |
| sourceFormReady | **yes** · `ai-vision` STATUS done |
| sourceFeature | `ai-vision` |
| sourceTables | `rmms_ai_vision_detections` (`AiVisionDetectionEntity`) |
| taskId | `task_ae7bf814` |
| updatedAt | `2026-08-16T05:55:00.000Z` |

> SA **chốt** lookup + query/export contract. Design **chốt** control-map. **Cấm** Dev đổi SearchInput → Select.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report`.  
> **Supersedes** stub SA `task_39d5fcb1` (ngắn). Pack này re-audit live BE + Design confirmed `task_35da77de`.

Context `GET /api/v1/reports/defects` **stale** (GAP-PO-HH-01 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — filter `from`/`to` date `yyyy-MM-dd` trên field `day` (`DetectedAt` → `day`) · **không** persist TZ client · grid Date display local `vi-VN` từ `day` |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById Report |
| sa_shared_table | **share_na** P1 · **P2** join `rmms_ai_vision_detections` (GAP-PO-HH-07) — **không** warehouse schema P1 |
| lookup_share | road-route = **share_a** Integration Type A · FE seed CUC2 fallback · **cấm** clone catalog vào Report DTO |
| parent_json | **cấm** |
| design_confirm | **approve** (`task_35da77de`) |
| repo | `beRepo` + `uiRepo` **approve** trên STATUS (Autopilot + BE ALIGN) — Dev write sau `solution_confirm` |
| autoApprove | **ON** — SA **confirmed** agent (`task_ae7bf814`) |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` · type `ReportDefectRowDto` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · EF `AiVisionDetectionEntity` **P2** |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getDefects` / `exportDefects` |
| Lookup tuyến | **API-LKP-01** `GET api/v1/integration/road-routes/search` + FE `ROAD_ROUTE_SEED` fallback · **cấm** invent QL.22 · **cấm** copy Integration models vào Report DTO |

**Cấm** `Linm.Web.ERP.WebService`. **Cấm** API CRUD `ai-vision` trên slug report. **Cấm** POST/PUT/DELETE defects trên leaf này.

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior chain). Pack **không** rewrite domain / **không** path mới. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-HH-PREFIX | `GET api/v1/report/defects` + `/defects/export` | **Giữ** — đóng GAP-PO-HH-01 · **cấm** `api/v1/reports` | document |
| GAP-SA-HH-ENVELOPE | `ApiResponse<ReportPagedResult<ReportDefectRowDto>>` `{ success, message, data }` · `data.items` + paging · **không** KPI DTO | **Giữ** · BFF proxy raw query-string · **không** envelope mới · **không** KPI hub | document |
| GAP-SA-HH-QUERY | `routeId` `defectClass` `severity` `sourceKind` `from` `to` `search` `page` `pageSize` | **Giữ** canonical `search` (PO/Design `qSearch` UI → query `search`) · **không** alias `q` P1 | keep |
| GAP-SA-HH-ROW | `id` `sourceId` `code` `route` `km` `defectClass` `severity` `sourceKind` `status` `day` `incidentCode` `score` `engine` | **Giữ** — map nguồn `Code` `RouteLabel`=`route` `SectionId`=`km` `DefectClass` `Severity` `SourceKind`/`Engine` `Status` `DetectedAt`=`day` `IncidentCode` `Score` · drill `sourceId` | keep |
| GAP-SA-HH-ROUTE | `FilterRoute` **exact** case-insensitive · empty/`all` = all | **Giữ** — **cấm** StartsWith `QL.1` | keep |
| GAP-SA-HH-DAY | `FilterDay` inclusive `from`/`to` trên `day` | **Giữ** | keep |
| GAP-SA-HH-FILTER | exact `defectClass` / `severity` / `sourceKind` · empty/`all` = all | **Giữ** | keep |
| GAP-SA-HH-SEARCH | Contains `Code` / `Route` / `Km` / `DefectClass` | **Giữ** | keep |
| GAP-SA-HH-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-HH-SEED | In-memory **12** dòng CUC2 (`QL.1` `QL.15` `QL.217` `HCM` `CT.001` `QL.7` `QL.8` `QL.9` `QL.10`) · **không** QL.22 / `ĐT.*` · `SourceId = Id` seed | **Giữ** (GAP-PO-HH-04) | keep |
| GAP-SA-HH-EXPORT | CSV UTF-8 BOM `defects.csv` · header `code,route,km,defectClass,severity,sourceKind,status,day,incidentCode,score,engine,sourceId` · **không** page | **IN P1** file BE (full default set) · visible-column subset = **FE** từ `columnPrefs` khi viewed · export **applied** filters (không draft) · **cấm** export khi chưa Xem | BE keep · **FE Dev** |
| GAP-SA-HH-REFRESH | Live `reloadAll`: nếu `!viewed` gọi `applyAndView` (fetch) | Design DES-HH-01: Làm mới khi chưa Xem → toast «Chưa xem» · **không** fetch | **FE Dev** |
| GAP-SA-HH-EXPORT-DRAFT | Live `handleExport` dùng **draft** (`routeDraft`…) | Design DES-HH-02: Excel theo filter **đã Xem** (`queryParams` applied) | **FE Dev** |
| GAP-SA-HH-CHART | FE SoCai `by-severity` / `by-route` từ `items` trang | SoCai **client** khi `viewed` + ≥1 dòng · KPI strip Dòng · Tuyến · Critical · **không** API chart P1 | FE |
| GAP-SA-HH-DRILL | FE `/ai-vision?id={sourceId}` top window | **Giữ** — **không** Report GetById · **cấm** mở form CRUD trên slug này | FE |
| GAP-SA-HH-PERM | Không `[RequirePermission]` | **P1 stub** `report.hang-muc-hu-hong.read` (+ export cùng read) — gắn khi CommonLib ≥ gate · **không** block | document |
| GAP-SA-HH-RM | In-memory 12 dòng mapped `AiVisionDetectionEntity` | **P1 giữ** · EF join `rmms_ai_vision_detections` **P2** | document |
| GAP-SA-HH-LKP | FE `ROAD_ROUTE_SEED` 38 tuyến + `GET /integration/road-routes/search` fallback seed · strip `QL.22` | **P1 giữ** · Type A Integration · SearchInput · **cấm** native `<select>` | FE |
| GAP-SA-HH-ENUM | `DEFECT_CLASS_LOOKUP` / severity / sourceKind seed FE | **P1 giữ** — **không** API taxonomy | FE |
| GAP-SA-HH-INIT | Không `init-data` Report | **OUT P1** | FE only |
| GAP-SA-HH-FOOTER | Zone D `LinCatalogListPagination` live | **Luôn** hiện — **FE** | FE |
| GAP-SA-HH-CONFIG | Live `ReportDisplayConfigModal` + `erpReportTableConfigFromDisplay` | **FULL** — **cấm** `LinListTableConfigModal` / `configHint` · **cấm** Kind B `LinCatalogUiSchemaEditorModal` | FE |

**Không** migration P1. **Không** endpoint path mới. Dev P1 = siết FE DES-HH-01 / DES-HH-02 (Làm mới / Excel applied). BE API **keep**.

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
| S-HH | Report A–D + SoCai | Full page `LinPageLayout` kind=`report` | `/bao-cao/hang-muc-hu-hong` | report | filter draft → **Xem** load · Làm mới (applied) · Excel applied · chart SoCai · print stub · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `LinReportTableConfigModal` / `ReportDisplayConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng + `showCharts` |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | stub engine OK P1 — **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/defects` |
| Xuất Excel | **API-02** GET `report/defects/export` |
| SearchInput tuyến | **API-LKP-01** GET `integration/road-routes/search` · P1 fallback `ROAD_ROUTE_SEED` |
| SearchInput loại / mức / nguồn | **enum tĩnh FE** — **không** API |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE defect / detection / incident rows P1 trên slug này.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportDefectRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Defects (Xem)

`GET /api/v1/report/defects?routeId=&defectClass=&severity=&sourceKind=&from=&to=&search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/report/defects` + cùng query (forward raw).

| Query | Rule |
|-------|------|
| `routeId` | empty / omit / `all` = all · else **exact** `Route` (case-insensitive) |
| `defectClass` | empty / omit / `all` = all · else exact `DefectClass` |
| `severity` | empty / omit / `all` = all · else exact `Critical` \| `High` \| `Medium` \| `Low` |
| `sourceKind` | empty / omit / `all` = all · else exact `week` \| `AI` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive (`DetectedAt`) |
| `search` | Contains `Code` / `Route` / `Km` / `DefectClass` |
| `page`/`pageSize` | allow-list **50/100/200/500** · invalid pageSize → 50 |

**Row DTO** `ReportDefectRowDto`: `id` `sourceId` `code` `route` `km` `defectClass` `severity` `sourceKind` `status` `day` `incidentCode` `score` `engine`.

Sort: `day` desc · `code` asc.

### API-02 — Export defects

`GET /api/v1/report/defects/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `defects.csv`.

### API-LKP-01 — Road-route search (lookup, Integration — **không** Report)

`GET /api/v1/integration/road-routes/search?search=&page=&pageSize=`  
BFF `GET web-bff/api/v1/integration/road-routes/search`.  
P1: FE gọi; nếu fail/rỗng → `ROAD_ROUTE_SEED` 38 tuyến CUC2 · **cấm QL.22**. **Không** copy catalog vào Report domain.

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint «Chưa xem — nhấn «Xem» để tải báo cáo.»). Đổi page/pageSize sau viewed = refetch cùng **applied** filters.
- Đổi filter draft **không** fetch đến **Xem**. Đổi filter rồi Xem → `page=1`.
- Làm mới: chỉ re-fetch **applied**; nếu chưa Xem → toast, **không** load (DES-HH-01).
- Excel: chỉ khi `viewed` · params = **applied** (DES-HH-02).
- Drill: FE `/ai-vision?id={sourceId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng.

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| routeId | SearchInput | P1 seed + **API-LKP-01** | **road-route** · empty=Tất cả · **cấm QL.22** |
| defectClass | SearchInput | **không API** · query `defectClass` | taxonomy AI enum FE |
| severity | SearchInput | **không API** · query `severity` | Critical / High / Medium / Low |
| sourceKind | SearchInput | **không API** · query `sourceKind` | week / AI |
| fromDate / toDate | Date | query `from`/`to` | trên `DetectedAt`=`day` |
| qSearch | Input | query `search` | mã DET · tuyến · km |

Grid columns = DTO scalars readonly + drill button. **Cấm** editor.

Mức:

| value | label |
|-------|-------|
| `` (empty) | Tất cả mức |
| `Critical` | Critical |
| `High` | High |
| `Medium` | Medium |
| `Low` | Low |

Nguồn:

| value | label |
|-------|-------|
| `` (empty) | Tất cả nguồn |
| `week` | week |
| `AI` | AI |

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.hang-muc-hu-hong.read` | API-00 · API-01 · API-02 |

Lookup API-LKP-01 dùng perm Integration road-route (domain khác) — không gắn perm Report.

## Out of pack

CRUD detections / incident trên slug này · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · Resource/Slideout · `[RequirePermission]` block P1 · API chart riêng.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput tuyến/loại/mức/nguồn · Xem mới load · Excel `defects.csv` **applied** · Config FULL · DES-HH-01 Làm mới · DES-HH-02 Excel · drill `/ai-vision?id=` · **không** path API mới P1.
- autoApprove **ON** → SA **confirmed** (`task_ae7bf814`). Chain enqueue **team-lead**.
- Dev write: `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API (P1 expected **không** đụng BE).
- Roles sau TL = Dev **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
