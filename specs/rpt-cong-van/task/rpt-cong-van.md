# Team-lead — task pack · rpt-cong-van (Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-CV-02) |
| Feature Kind | **E** · leaf `/bao-cao/cong-van` · **không** CRUD form |
| mfeStdRoute | `/bao-cao/cong-van` |
| route_confirm | **route_a** `/bao-cao/cong-van` |
| autoApprove | **OFF** |
| design_confirm | **approve** (board · `task_f917aa5f`) |
| solution_confirm | **approve** (user APPROVE→CHAIN `task_52ae8b34` · prior SA `confirmed`) |
| be_repo_confirm | **pending** — user tick board trước Dev (**không auto**) |
| ui_repo_confirm | **pending** — user tick board trước Dev (**không auto**) |
| taskId | `task_52ae8b34` |
| prior | data_analy `done` · PO `done` · Design `confirmed` · SA `confirmed` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` |
| updatedAt | `2026-08-15T23:15:00.000Z` |
| Recheck | **`tl-retry-ssot-rereview` HARD** trước Dev Write |

**Supersedes** TL `task_6f9f0ca2` (ngắn). Pack này re-audit live + Design/SA confirmed.

**Cấm ERP.*** · **cấm** `Domains/Master` · **cấm** `api/v1/rmms/*` · **cấm** `api/v1/reports` · **cấm** parent JSON · **cấm** copy CRUD `ops`.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/rpt-cong-van/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX |
| Solution | `specs/rpt-cong-van/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · GAP-SA-CV-QUERY |
| Prototype | `ui/prototype/rpt-cong-van-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/rpt-cong-van-control-hint.md` | SearchInput chiều/đơn vị · Date · Input |
| PO | `specs/rpt-cong-van/po/requirement.md` | GAP-PO-CV-01..09 |

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` `1.42.0` | `LinPageLayout` kind=`report` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `SearchInput` · Date SSOT · `LinReportTableConfigModal` |
| **BE** | `Linm.RMMS.WebService` domain **Report** | `api/v1/report` · local `ApiResponse<T>` P1 |
| **Auth** | CommonLib ≥1.4.0 | `[RequirePermission]` stub P1 |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `Lin*` / `OfficialDocsFilterBar` | nested CatalogListShell · raw `<table>` · local pager · native `<select>` |
| HTTP | `apiClient` · `reportEndpoint` re-export | fork ApiClient |
| Lookup | FE enum P1 `ORG_UNIT_LOOKUP` / `OFFICIAL_DOC_DIRECTION_LOOKUP` | copy catalog org-unit vào Report DTO · `GET integration/org-units` P1 |
| BFF | proxy only | business in BFF |
| Persist | in-memory 12 seed P1 | warehouse tables · parent JSON · OfficialDocument EF P1 |
| Dropdown filter | SearchInput enum FE | native `<select>` · init-data |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | `/bao-cao/cong-van` only P1 · **không** `/new` · `/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (DOMAIN-MAP slug `rpt-cong-van` → kebab `report`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `api/domains/report/LINM.RMMS.Report.Models/` |
| `source.bff` | `bff/domains/report/` · `web-bff/api/v1/report/**` |
| `source.persistence` | **không** P1 — in-memory |
| `source.migrations` | **không** |
| Lookup | enum FE P1 · Integration org-unit **P2** |
| FE BASE | `/report` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/rpt-cong-van/ui/prototype/rpt-cong-van-prototype.html` |
| `mfeStdUrl` | `http://localhost:9311/bao-cao/cong-van` |

**Cấm** invent domain folder. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP `BaoCao` = tên cũ).

## API contract (from SA — Dev delta **chỉ** GAP)

Base BE: `api/v1/report` · BFF: `web-bff/api/v1/report` · FE: `/report`.

| id | Method | Path | Live | Dev |
|----|--------|------|------|-----|
| API-00 | GET | `/health` | DONE | keep |
| API-01 | GET | `/official-docs` | DONE in-memory 12 | **GAP-SA-CV-QUERY** coalesce `direction ?? type`, `q ?? search` · canonical thắng nếu cả hai · query `orgUnitId` `from` `to` `page` `pageSize` · **cấm** `routeId` |
| API-02 | GET | `/official-docs/export` | DONE CSV UTF-8 BOM | cùng coalesce · **không** page · header `number,day,subject,direction,orgUnit,orgUnitId,docId` · `direction` = **label** VN |
| init-data | — | — | **OUT P1** | enum tĩnh FE |

Query: pageSize allow `{50,100,200,500}` · invalid → 50. `direction` empty/`all` = all. `orgUnitId` empty/`all` = all.

Envelope `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = file bytes.

**Row DTO** `ReportOfficialDocRowDto`: `id` `docId` `number` `day` `subject` `direction` (`di`/`den`) `directionLabel` `orgUnit` `orgUnitId`.

## Implement gates (from SA)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **tz_day** | filter `from`/`to` date-only trên `day` · grid display `vi-VN` từ `day` |
| XCO | **xco_na** | P1 in-memory |
| SHARE | **share_na** | không tenant table |
| parent_json | **cấm** | — |
| lookup_share | **share_na P1** | org-unit enum FE · Type A **P2** |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components |
| SD-LIB-BE | **required** | ApiResponse Report.Models P1 |
| SD-AUTH | stub | `report.cong-van.read` (list + export) |
| SD-BFF | **required** | proxy QS + headers |
| SD-JOB | n/a | — |
| SD-NO-JSON | **required** | — |
| SD-SEARCH | **required** | Xem mới load · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_day |
| SD-INIT | **out P1** | enum tĩnh |

## DES-GRID → Lin* (HARD · Kind E)

| Zone | Design | Component |
|------|--------|-----------|
| A | Header | `LinPageLayout` kind=`report` · icon `fas fa-envelope-open-text` · title **Công văn đi — đến** · **cấm** Thêm mới |
| B | Filter + reportToolbar | **`LinErpListFilterBar`** (leading SearchInput chiều/đơn vị · Date · Input q · **Xem** = `onSearch`) · Excel toolbar · Làm mới / **Xem biểu đồ** SoCai / In / **Sửa config FULL** — **cấm** stub config |
| C | Grid | `LinCatalogDataGrid` `resizable: true` · STT grid · cột number/day/subject/directionLabel/orgUnit/drill · **không** CRUD ⋯ |
| D | Footer | `LinCatalogListPagination` 50/100/200/500 **luôn** — **cấm** footerPagination / pageSizeBar / raw table |
| Form | OUT | **cấm** Resource/Slideout/View=`readOnly` |

## retry.ssot_rereview (TL live MFE 2026-08-15 · `OfficialDocsReportPage` + FilterBar + BE)

Audit `Linm.Web.RMMS.Report` `OfficialDocsReportPage.tsx` + `OfficialDocsFilterBar.tsx` + `reportEndpoint` + `ReportQueryController` / `ReportService` — **cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface.

| # | Check | Live | Gap |
|---|-------|------|-----|
| 1 | 1× `LinPageLayout` · **cấm** nested CatalogListShell | **PASS** kind=`report` | — |
| 2 | `LinCatalogDataGrid` kéo cột default ON | **implicit** (không set `resizable: true`) | **T-UI-LIST-01** set `resizable: true` explicit |
| 3 | Footer `LinCatalogListPagination` | **PASS** luôn render | — |
| 4 | flex + skeleton | **PASS** `.page` flex · `skeletonRows={8}` | — |
| 5 | reportToolbar + **config FULL** | refresh/chart/print/cog + Excel | **PASS** `ReportDisplayConfigModal` · **cấm** stub |
| 6 | Filter layout | `LinErpListFilterBar` SearchInput + Date + Input | **PASS** · **cấm** native select |
| 7 | tree_master | n/a | — |
| 8 | Form OUT · **cấm** Resource/Slideout/View=readOnly | **PASS** không form route | **T-UI-FORM** giữ OUT |
| 9 | Thêm mới Zone A | **PASS** không nút | — |
| 10 | Xem mới load · empty hint | **PASS** `viewed` | — |
| 11 | Excel sau Xem + applied filters | toolbar **luôn** export · params **draft** | **T-UI-ACT-01** `canExport=viewed` · params = **applied** (`direction`/`orgUnitId`/`from`/`to`/`q`) · subset cột `columnPrefs` khi viewed |
| 12 | Query canonical `direction`/`q` | FE gửi `type`/`search` · BE chỉ `type`/`search` | **T-BE-01** + **T-UI-LIST-01** GAP-SA-CV-QUERY |
| 13 | Lookup SearchInput + empty Tất cả | enum FE **PASS** · onClear | **T-UI-LKP** giữ · **cấm** invent đơn vị / QL.22 / road-route filter |
| 14 | pageSize 50/100/200/500 | FE pager **PASS** · BE allow-list (verify Dev) | — |
| 15 | TZ display local `vi-VN` từ `day` | grid raw ISO `yyyy-MM-dd` | **T-UI-FIELD-01** format `vi-VN` |
| 16 | ERP.* / plural reports | **none** | — |
| 17 | `filterMaxWidthPx={null}` | **PASS** | — |
| 18 | toast · **cấm** alert/confirm | `dispatchAppToast` **PASS** | — |
| 19 | Drill Ops | **PASS** `/ops?id=` top window | **T-UI-ACT** giữ |
| 20 | Chart SoCai client | **PASS** 3 charts từ `items` trang | — |
| 21 | Seed 12 · Chi cục II.* · DRVN · không QL.22 trên filter | **PASS** | — |
| 22 | FE `ReportQueryParams` thiếu `direction`/`q` | chỉ `type`/`search` | **T-UI-LIST-01** extend params + `qs()` |

**Cấm** chỉ sửa query alias nếu còn Excel-before-view / Date display / resizable cùng surface còn GAP.

## Screens (form-type-task-pack · report)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-CV | Report A–D | Full page Kind E | `/bao-cao/cong-van` | report | filter `LinErpListFilterBar` → Xem · refresh · Excel · chart SoCai · config FULL · drill Ops |
| S-FORM | Form CRUD | — | — | — | **OUT P1** |
| S-MOD-CFG | Config FULL | Modal | toolbar cog | — | `ReportDisplayConfigModal` / `LinReportTableConfigModal` |
| S-MOD-CHART | Chart | Modal | toolbar chart | — | `ReportChartModal` khi viewed + có dòng |
| S-MOD-PRINT | In | Modal | toolbar print | — | `LinReportPrintScopeModal` P1 OK (Design stub cũng OK) |

## T-CTX · T-PERM · T-UI-* · T-BE/BFF

| id | page | layer | deps | status live | DoD |
|----|------|-------|------|-------------|-----|
| **T-CTX-01** | rpt-cong-van | docs | — | **done** | Context + controlHint + Design + SA linked · Kind E · prefix `api/v1/report` · **cấm** ERP.* |
| **T-PERM-01** | rpt-cong-van | ui+api | T-CTX-01 | stub | Code `report.cong-van.read` (API-00…02). Gắn `[RequirePermission]` khi CommonLib ≥1.4.0 · **không** block P1 |
| **T-UI-LIST-01** | /bao-cao/cong-van | ui-list | T-PERM-01 | shell **PASS** + **GAP query/resizable** | **Giữ** 1× LinPageLayout · `resizable: true` · LinCatalogListPagination · Zone A title · listTitle Kết quả báo cáo công văn · Xem mới load · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table / Thêm mới A · FE gửi **`direction` `q`** (không `type`/`search` sau pack) · extend `ReportQueryParams` + `qs()` / export QS |
| **T-UI-FORM-01** | — | ui-form | T-UI-LIST-01 | **OUT PASS** | **không** mount CRUD · **cấm** Resource/Slideout/View=`readOnly` |
| **T-UI-RPT-01** | /bao-cao/cong-van | ui | T-PERM-01 | **done** | **`LinErpListFilterBar`** · Xem = `onSearch` · Enter trên Input = Xem |
| **T-UI-RPT-CONFIG-01** | /bao-cao/cong-van | ui | T-UI-RPT-01 | **done** | Config FULL — **cấm** `configHint` |
| **T-UI-RPT-CHART-01** | /bao-cao/cong-van | ui | T-UI-RPT-CONFIG-01 | **done** | SoCai client từ `items` — **cấm** stub toast · **không** API chart |
| **T-UI-ACT-01** | rpt-cong-van | ui | T-UI-LIST-01 | **GAP Excel** | Inventory dưới · Excel **chỉ** khi `viewed` · params **applied** · visible-column subset từ `columnPrefs` (client filter CSV hoặc hide cột trước download) · drill `/ops?id={docId}` |
| **T-UI-LKP-01** | rpt-cong-van | ui | T-UI-LIST-01 | **PASS** | chiều `di`/`den` + empty=Tất cả · đơn vị `CC2.1` `CC2.2` `CC2.3` `DRVN` + empty · **cấm** free-text · **cấm** road-route / QL.22 trên leaf |
| **T-UI-FIELD-01** | rpt-cong-van | ui | T-UI-LIST-01 | **GAP Date display** | from/to = Date SSOT `LinErpListFilterBar` · ISO date-only query · grid `day` display `toLocaleDateString('vi-VN')` (parse day) · **không** editor |
| **T-UI-PROD-01** | rpt-cong-van | ui | T-UI-FORM-01 | **PASS** | Kind E product · form OUT |
| **T-UI-UX-01** | rpt-cong-van | ui | T-UI-LIST-01 | **PASS** | gap 4/8/16 · **cấm** `filterMaxWidth` cap · toast SSOT · title 22px không clip · empty/skeleton không blank body |
| **T-BE-01** | report | api | T-CTX-01 | **GAP coalesce** | Controller + `IReportService`/`GetOfficialDocsAsync`/`ExportOfficialDocsCsvAsync`/`FilterOfficialDocs`: nhận `direction` + `q` · coalesce `direction ?? type`, `q ?? search` · canonical thắng · keep orgUnitId/from/to/page allow-list · **không** migration · **không** path mới |
| **T-BE-02** | export | api | T-BE-01 | **PASS** keep | CSV UTF-8 BOM `official-docs.csv` · label VN trên cột direction |
| **T-BFF-01** | report | bff | T-BE-01 | **PASS** | Proxy GET list + export bytes · QS passthrough raw (alias mới tự forward) · **không** business |
| **T-QA-01** | rpt-cong-van | qa | T-UI-ACT-01 | **done** `task_228ef478` | scenarios · mfeStdUrl · Xem · Excel gated · query direction/q · form OUT · build PASS |
| **T-RV-01** | rpt-cong-van | review | T-QA-01 | pending Review | findings.md |

## T-UI-ACT inventory (P1)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn chiều / đơn vị / kỳ / q | B | draft only | — |
| **Xem** | B | apply draft → page=1 → viewed=true | API-01 |
| Enter trên Input tìm | B | = Xem | same |
| Làm mới | toolbar | nếu viewed reload applied; chưa viewed = apply+view | same |
| Biểu đồ | toolbar | SoCai modal | client `items` |
| In | toolbar | print scope modal (OK) hoặc stub toast | — |
| Sửa config | toolbar | FULL modal | — |
| **Xuất Excel** | toolbar | **chỉ** viewed · applied filters · cột hiện | API-02 |
| Mở công văn | C | top window `/ops?id=` | — (không Report GetById) |
| Đổi page/pageSize | D | refetch applied | API-01 |

## Build (Dev — không chạy ở role TL)

| Gate | Command | When |
|------|---------|------|
| MFE | `cd D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report && yarn build` (+ `yarn typecheck`) | Dev sau GAP FE |
| BE | `dotnet build` trên `Linm.RMMS.WebService` (Report API) | Dev sau GAP-SA-CV-QUERY |

**Cấm** `completed` Dev / handoff QA nếu build fail.

## Out of pack

CRUD công văn · GOVOne chrome · warehouse schema · OfficialDocument EF P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · filter `road-route` · invent QL.22 · KPI hub `reports` · master org-unit thật P1.

## Handoff Dev

- Implement **mọi** GAP cùng surface: query coalesce + FE `direction`/`q` + Excel viewed/applied/columnPrefs + `resizable: true` + day `vi-VN`.
- **Cấm** write đến khi `confirms.beRepo && uiRepo`.
- autoApprove **OFF** · TL **không** await_confirm · Dev **pending** đến user tick repo.
- Roles sau TL = Dev **pending**. **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
