# Team-lead — task pack · rpt-hang-muc-hu-hong (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-hang-muc-hu-hong` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-HH-02) |
| Feature Kind | **E** · leaf `/bao-cao/hang-muc-hu-hong` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/hang-muc-hu-hong` |
| route_confirm | **route_a** `/bao-cao/hang-muc-hu-hong` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_35da77de`) |
| solution_confirm | **approve** (`task_ae7bf814`) |
| be_repo_confirm | **approve** (run packet BE `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (run packet MFE `Linm.Web.RMMS.Report`) |
| taskId | `task_986c322d` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-16T06:15:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL stub `task_39d5fcb1` (ngắn). Pack này re-audit live MFE/BE + Design/SA confirmed `task_35da77de` / `task_ae7bf814`.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `ai-vision` · **cấm** path API mới P1 · **cấm** folder domain mới.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-hang-muc-hu-hong/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · DES-HH-01/02 |
| Solution | `specs/rpt-hang-muc-hu-hong/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-HH-* |
| Prototype | `ui/prototype/rpt-hang-muc-hu-hong-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-hang-muc-hu-hong-control-hint.md` | SearchInput tuyến/loại/mức/nguồn · Date · Input |
| PO | `specs/rpt-hang-muc-hu-hong/po/requirement.md` | GAP-PO-HH-01..10 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` `1.43.0` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `ReportDisplayConfigModal` analog `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `DefectFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` · `LinListTableConfigModal` · `configHint` · Kind B `LinCatalogUiSchemaEditorModal` |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | FE `ROAD_ROUTE_SEED` + `GET /integration/road-routes/search` fallback | copy catalog road-route vào Report DTO · invent QL.22 |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · EF `rmms_ai_vision_detections` P1 |
| Dropdown filter | SearchInput | native `<select>` · init-data |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/hang-muc-hu-hong` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-hang-muc-hu-hong` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory 12 mapped `AiVisionDetectionEntity` |
| `source.migrations` | **không** |
| Lookup | seed CUC2 P1 · Integration road-route Type A consume |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-hang-muc-hu-hong/ui/prototype/rpt-hang-muc-hu-hong-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/hang-muc-hu-hong` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report`.

## API contract (from SA — Dev P1 **không** path mới)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/defects` | DONE in-memory 12 · query `routeId` `defectClass` `severity` `sourceKind` `from` `to` `search` `page` `pageSize` | **keep** · **cấm** alias `q` P1 · FilterRoute **exact** (đã live) |
| API-02 | GET | `/defects/export` | DONE CSV UTF-8 BOM `defects.csv` full default set | **keep** BE · **FE** subset cột hiện + **applied** filters (DES-HH-02) |
| API-LKP-01 | GET | `/integration/road-routes/search` | FE consume + seed fallback | keep · **không** copy catalog Report |
| init-data | — | — | **OUT P1** | enum loại/mức/nguồn tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. Empty/`all` = all trên `routeId` `defectClass` `severity` `sourceKind`. `routeId` **exact** `Route` case-insensitive.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportDefectRowDto`: `id` `sourceId` `code` `route` `km` `defectClass` `severity` `sourceKind` `status` `day` `incidentCode` `score` `engine`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` date-only trên `day` · grid display `vi-VN` từ `day` |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** P1 | EF join **P2** |
| parent_json | **cấm** | — |
| lookup_share | **share_a** | road-route Integration Type A + FE seed CUC2 |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.hang-muc-hu-hong.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | SearchInput seed + enum FE |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-road` · title **Hạng mục hư hỏng** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (SearchInput tuyến/loại/mức/nguồn · Date · Input qSearch · **Xem** = `onSearch`) · Excel · Làm mới · Biểu đồ SoCai · In · Config FULL — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · cột Design · drill AI · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-16 · `DefectReportPage` + `DefectFilterBar` + BE)

Audit `Linm.Web.RMMS.Report` `DefectReportPage.tsx` + `DefectFilterBar.tsx` + `reportEndpoint` + `ReportQueryController` / `ReportService` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` · 1 shell | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **PASS** `tableConfig.resizable: true` + migrate `RESIZE_DEFAULT_ON_MIGRATED` | — |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render (kể cả chưa Xem) | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel · `ReportDisplayConfigModal` + `columnPrefs` | **PASS analog** · **cấm** `LinListTableConfigModal` / `configHint` / Kind B `LinCatalogUiSchemaEditorModal` |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput ×4 + Date + Input · **cấm** native select | **PASS** |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` · hint «Chưa xem — nhấn «Xem»…» | — |
| 11 | Làm mới khi `!viewed` | live `reloadAll`: `if (!viewed) applyAndView()` → **fetch** | **T-UI-ACT-01** DES-HH-01 / GAP-SA-HH-REFRESH — toast «Chưa xem» · **không** load |
| 12 | Excel sau Xem + applied filters | `canExport` **không** truyền (`buildRmmsReportToolbar` hiện Excel luôn) · `handleExport` dùng **draft** (`routeDraft`…) | **T-UI-ACT-01** DES-HH-02 / GAP-SA-HH-EXPORT-DRAFT — `canExport: viewed` · params = `queryParams` applied · subset `columnPrefs` khi viewed |
| 13 | Lookup SearchInput + empty Tất cả · **cấm QL.22** | `ROAD_ROUTE_LOOKUP` + enum class/severity/source | **T-UI-LKP** giữ |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list | keep |
| 15 | TZ display local `vi-VN` từ `day` | live `row.day` raw ISO | **T-UI-FIELD-01** `formatDayVi` như GPTC/OfficialDocs |
| 16 | ERP.* / plural reports | **none** | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 19 | Drill AI Vision | live `/ai-vision?id=` top window · `sourceId \|\| id` | **PASS** giữ |
| 20 | Chart SoCai client | **PASS** by-severity / by-route khi viewed + có dòng | — |
| 21 | Seed 12 · CUC2 · không QL.22 | **PASS** BE (SA) | keep |
| 22 | `FilterRoute` exact | live exact case-insensitive · empty/`all` = all | **PASS** T-BE keep |
| 23 | leftover `const columns` / `LinCatalogDataColumn` | **OK** Kind E report (không Kind B `buildDynamicGridColumns`) | **cấm** đổi sang Kind B catalog schema |
| 24 | Query canonical `search` | FE gửi `search` (không `q`) | **PASS** giữ |

**Cấm** chỉ sửa Làm mới nếu Excel draft / `formatDayVi` cùng surface còn GAP.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-HH | Report A–D | Full page Kind E | `/bao-cao/hang-muc-hu-hong` | report | filter `LinErpListFilterBar` → Xem · refresh (applied) · Excel applied · chart SoCai · config FULL · drill AI |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` analog `LinReportTableConfigModal` — **cấm** stub |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-hang-muc-hu-hong | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-hang-muc-hu-hong | ui+api | T-CTX-01 | stub | Code `report.hang-muc-hu-hong.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/hang-muc-hu-hong | ui-list | T-PERM-01 | shell **PASS** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title · listTitle Hạng mục hư hỏng · Xem mới load · cột Design (code/route/km/defectClass/severity/sourceKind/status/day/incidentCode/score/drill) · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`search`** (không `q`) |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/hang-muc-hu-hong | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/hang-muc-hu-hong | ui | T-UI-RPT-01 | **done analog** | Config FULL — **cấm** `configHint` / `LinListTableConfigModal` / Kind B schema editor |
| **T-UI-RPT-CHART-01** | /bao-cao/hang-muc-hu-hong | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — KPI Dòng · Tuyến · Critical · **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-hang-muc-hu-hong | ui | T-UI-LIST-01 | **GAP DES-HH-01/02** | Inventory dưới · Làm mới: chưa Xem → toast «Chưa xem» **không** `applyAndView` · Excel **chỉ** khi `viewed` (`canExport: viewed`) · params **applied** (`routeId` `defectClass` `severity` `sourceKind` `from` `to` `search`) · subset CSV theo `columnPrefs` · drill `/ai-vision?id={sourceId}` top window |
| **T-UI-LKP-01** | rpt-hang-muc-hu-hong | ui | T-UI-LIST-01 | **PASS** | tuyến SearchInput road-route CUC2 + empty=Tất cả · loại/mức/nguồn enum FE + empty · **cấm** native select · **cấm** invent QL.22 |
| **T-UI-FIELD-01** | rpt-hang-muc-hu-hong | ui | T-UI-LIST-01 | **GAP day vi-VN** | from/to Date SSOT · ISO date-only query · grid `day` `formatDayVi` `vi-VN` · Nguồn cột = `sourceKind` (engine cùng DTO, không editor) |
| **T-UI-PROD-01** | rpt-hang-muc-hu-hong | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT |
| **T-UI-UX-01** | rpt-hang-muc-hu-hong | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **PASS keep** | `GET api/v1/report/defects` · FilterRoute exact · FilterDay · pageSize allow-list · seed 12 · **không** migration · **không** path mới · **không** folder domain mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS keep** | CSV UTF-8 BOM `defects.csv` full default header SA · **không** page |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw · **không** business |
| **T-QA-01** | rpt-hang-muc-hu-hong | qa | T-UI-ACT-01 | pending QA | scenarios · mfeStdUrl · Xem · Làm mới gated · Excel applied · form OUT · build PASS |
| **T-RV-01** | rpt-hang-muc-hu-hong | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn tuyến / loại / mức / nguồn / kỳ / tìm | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; **chưa viewed = toast, không fetch** | API-01 only when viewed |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · cột hiện | API-02 |
| Mở AI Vision | C | top window `/ai-vision?id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev sau GAP FE DES-HH-01/02 + formatDayVi |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | **chỉ nếu** Dev đụng API — P1 expected **không** đụng BE |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD detections / incident trên slug này · GOVOne chrome · warehouse schema · EF join P1 · parent JSON · Kind B · `LinCatalogUiSchemaEditorModal` · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · invent QL.22 · KPI hub `reports` · `[RequirePermission]` block P1 · API chart riêng · path API mới P1.

## Handoff Dev

- Implement **mọi** GAP cùng surface: DES-HH-01 Làm mới · DES-HH-02 Excel applied + `canExport: viewed` + CSV subset `columnPrefs` · `formatDayVi` cột Ngày.
- **Không** đổi API path / **không** FilterRoute (đã exact) / **không** migration.
- `confirms.beRepo && uiRepo` **đã** approve + `solution_confirm` approve → Dev **được write**.
- autoApprove **ON** → enqueue **dev** sau `completed` task TL. Roles QA/Review = **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
