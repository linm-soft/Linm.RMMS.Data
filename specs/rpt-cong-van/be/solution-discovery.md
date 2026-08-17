# SA — solution-discovery — rpt-cong-van (report pack · Kind E)

| Field | Value |
|-------|-------|
| feature | `rpt-cong-van` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` |
| solution_confirm | **approve** (user APPROVE→CHAIN `task_52ae8b34` · không auto-confirm agent) |
| changeScope | `edit_page` |
| packKind | **`report`** (Kind **E** AnalyticsReportShell) — packet board `list` **stale** (GAP-PO-CV-02) |
| Feature Kind | **E** · leaf `/bao-cao/cong-van` · **không** CRUD form |
| domain | **Report** (DOMAIN-MAP slug `rpt-cong-van` → kebab `report`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · `/bao-cao/cong-van` |
| mfeStdUrl | `http://localhost:9311/bao-cao/cong-van` |
| prefix | **`api/v1/report`** · BFF **`web-bff/api/v1/report`** |
| prior · design | **confirmed** (user APPROVE→CHAIN · `task_f917aa5f` → `task_0caf0bac`) · `ui/design.md` + prototype + reviewUrl |
| prior · po | **done** · `po/requirement.md` · `task_63988352` |
| prior · data_analy | **done** · `specs/_data-analy/features/rpt-cong-van-control-hint.md` · hash `sha256:rpt-cong-van-context-20260815` |
| skillVersion | `2026.08.15.5` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.15.5` |
| rulesVersion | `2026.08.15.8` |
| versionGate | `keep_current` (khớp PO + Design + data-analy stamp) |
| autoApprove | **OFF** |
| chain | **ON** |
| taskId | `task_0caf0bac` |
| updatedAt | `2026-08-15T16:00:00.000Z` |

> SA **chốt** lookup + query/export contract. Design **chốt** control-map. **Cấm** Dev đổi SearchInput → Select.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · **cấm** `api/v1/reports` (plural) · **cấm** parent JSON.  
> **Cấm** tạo folder domain mới. MFE live = `Linm.Web.RMMS.Report` (DOMAIN-MAP ghi `BaoCao` = tên cũ — **không** đổi repo).  
> **Supersedes** stub SA `task_6f9f0ca2` (ngắn). Pack này re-audit live BE + Design confirmed.

Context `api/v1/reports/official-docs` **stale** (GAP-PO-CV-01 / GAP-DS-CV-03 **đóng**).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_day** — filter `from`/`to` date `yyyy-MM-dd` trên field `day` (string) · **không** persist TZ client · grid Date display local `vi-VN` từ `day` |
| sa_xco_gate | **xco_na** — P1 in-memory seed, không tenant table / GetById Report |
| sa_shared_table | **share_na** — không schema warehouse / OfficialDocument EF P1 |
| lookup_share | org-unit = **share_na P1** (enum FE khớp seed) · Type A Integration **P2** |
| parent_json | **cấm** |
| design_confirm | **approve** (board APPROVE→CHAIN `task_0caf0bac`) |
| repo | `beRepo` + `uiRepo` **pending** — user tick trước Dev (**không auto**) |
| autoApprove | **OFF** — SA **confirmed** via user APPROVE→CHAIN `task_52ae8b34` |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Report/` |
| Controller | `Domains/Report/Controllers/ReportQueryController.cs` · route `api/v1/report` |
| Service | `Domains/Report/Services/ReportService.cs` · `IReportService.cs` |
| Models | `api/domains/report/LINM.RMMS.Report.Models/DTOs/ReportQueryDtos.cs` |
| Entity / migration | **không** P1 — **cấm** `Schema_*` warehouse · **cấm** bảng báo cáo riêng · OfficialDocument EF **P2** |
| BFF | `bff/domains/report/LINM.RMMS.Report.Bff/Controllers/ReportBffController.cs` |
| Route prefix | **`api/v1/report`** |
| BFF prefix | **`web-bff/api/v1/report`** |
| FE BASE | `/report` (relative `VITE_API_URL`) · `reportEndpoint.getOfficialDocs` / `exportOfficialDocs` |
| Lookup đơn vị | **P1 enum FE** `ORG_UNIT_LOOKUP` — **cấm** clone catalog org-unit vào Report DTO · **cấm** `GET integration/org-units/search` P1 |

**Cấm** `Linm.Web.ERP.WebService`. **Cấm** API dưới `Domains/Ops` / Notification cho slug này (drill = FE route only).

## Live BE vs this pack (delta)

Query + export + BFF proxy + MFE Kind E **đã có** (prior `task_6f9f0ca2`). Pack **không** rewrite domain. SA chốt contract + GAP còn lại cho TL/Dev:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-CV-PREFIX | `GET api/v1/report/official-docs` + `/official-docs/export` | **Giữ** — đóng GAP-PO-CV-01 / GAP-DS-CV-03 · **cấm** `api/v1/reports` | document |
| GAP-SA-CV-ENVELOPE | `ApiResponse<ReportPagedResult<ReportOfficialDocRowDto>>` `{ success, message, data }` · `data.items` + paging · **không** KPI DTO | **Giữ** · BFF proxy raw query-string · **không** envelope mới · **không** KPI hub | document |
| GAP-SA-CV-QUERY | Controller query **`type`** + **`search`** · FE map `direction`→`type`, `qSearch`→`search` | Canonical **`direction` `orgUnitId` `from` `to` `q` `page` `pageSize`** (GAP-DS-CV-04) · BE coalesce `direction ?? type`, `q ?? search` · FE **gửi** `direction`/`q` · **cấm** `routeId` trên leaf | BE + FE Dev |
| GAP-SA-CV-ROW | `id` `docId` `number` `day` `subject` `direction` (`di`/`den`) `directionLabel` `orgUnit` `orgUnitId` | **Giữ** — drill `docId` | keep |
| GAP-SA-CV-DIR | `type` filter `Direction` · `all`/empty = all · seed `di`/`den` | Canonical query **`direction`** cùng rule · empty omit | BE Dev |
| GAP-SA-CV-ORG | `orgUnitId` exact `CC2.1` `CC2.2` `CC2.3` `DRVN` · empty/`all` = all | **Giữ** · FE SearchInput cùng id · **cấm** invent đơn vị / QL.22 / filter tuyến | keep |
| GAP-SA-CV-DAY | `FilterDay` inclusive `from`/`to` trên `day` | **Giữ** | keep |
| GAP-SA-CV-Q | `search` Contains `Number`/`Subject`/`OrgUnit` | Canonical **`q`** cùng Contains · **không** search `docId` bắt buộc P1 | BE Dev |
| GAP-SA-CV-PAGE | allow `{50,100,200,500}` · invalid → 50 | **Khớp** Design Zone D | keep |
| GAP-SA-CV-SEED | In-memory **12** dòng · Chi cục II.* · Cục ĐBVN · đi/đến · **không** QL.22 | **Giữ** (nằm 8–15 GAP-PO-CV-04) | keep |
| GAP-SA-CV-EXPORT | CSV UTF-8 BOM `official-docs.csv` · header `number,day,subject,direction,orgUnit,orgUnitId,docId` · **không** page · cột `direction` = **label** VN | **IN P1** file BE · visible-column subset = **FE** từ `columnPrefs` khi viewed (Design) · export **applied** filters (không draft nếu đã Xem) · **cấm** export khi chưa Xem | BE keep · FE Dev |
| GAP-SA-CV-CHART | — | SoCai **client** từ `items` trang hiện tại — **không** API chart P1 | FE |
| GAP-SA-CV-DRILL | Row `docId` | FE `/ops?id={docId}` top window — **không** Report GetById | FE |
| GAP-SA-CV-PERM | Không `[RequirePermission]` | **P1 stub** `report.cong-van.read` (+ export cùng read) — gắn khi CommonLib ≥ gate · **không** block | document |
| GAP-SA-CV-RM | In-memory 12 dòng | **P1 giữ** · OfficialDocument EF **P2** (GAP-PO-CV-07) | document |
| GAP-SA-CV-LKP | FE `ORG_UNIT_LOOKUP` + `OFFICIAL_DOC_DIRECTION_LOOKUP` | **P1 giữ** · Integration org-unit **P2** · **cấm** native `<select>` | FE |
| GAP-SA-CV-INIT | Không `init-data` | **OUT P1** | FE only |
| GAP-SA-CV-FOOTER | — | Zone D **luôn** `LinCatalogListPagination` — **FE** | FE |

**Không** migration P1. **Không** endpoint path mới — chỉ **alias query** trên endpoint đã có.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` kind=`report` · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` · **cấm** nested CatalogListShell / footerPagination / pageSizeBar / raw table |
| HTTP | `apiClient` SSOT | MFE `reportEndpoint` re-export only |
| Lookup | FE enum P1 | **cấm** copy org-unit catalog vào Report DTO · **cấm** road-route trên leaf |
| BFF | proxy only | query-string + auth/company headers · **không** business |
| Persist | in-memory P1 | **cấm** parent JSON · **cấm** warehouse tables |

## FormType pack (`packKind=report`)

### Screens (from Design)

| id | Surface | Pattern | Route | FormMode | Actions |
|----|---------|---------|-------|----------|---------|
| S-CV | Report A–D + SoCai | Full page `LinPageLayout` kind=`report` | `/bao-cao/cong-van` | report | filter draft → **Xem** load · Làm mới · Excel · chart SoCai · print stub · Config FULL |
| S-FORM | Form CRUD | — | — | — | **OUT** — **cấm** Resource/Slideout/View=`readOnly` · **cấm** Thêm mới Zone A |
| S-MOD-CFG | Config cột | `ReportDisplayConfigModal` / `LinReportTableConfigModal` | toolbar `fa-cog` | — | **FULL** P1 — **cấm** stub/configHint toast |
| S-MOD-CHART | Chart | `ReportChartModal` | toolbar chart | — | SoCai khi viewed + có dòng + `showCharts` |
| S-MOD-PRINT | In | `LinReportPrintScopeModal` | toolbar print | — | stub toast OK P1 (GAP-PO-CV-06) — **cấm** `window.confirm` |

### FormMode ↔ API (REQUIRED)

| Action | Endpoint |
|--------|----------|
| Xem | **API-01** GET `report/official-docs` |
| Xuất Excel | **API-02** GET `report/official-docs/export` |
| SearchInput chiều | **enum tĩnh FE** `di`/`den` — **không** API |
| SearchInput đơn vị | **enum tĩnh FE** P1 — Integration Type A **P2** |
| Health | **API-00** GET `report/health` (giữ, không bắt UI) |

**Cấm** POST/PUT/DELETE official-doc rows P1.

## API catalog

Envelope JSON: `ApiResponse<ReportPagedResult<ReportOfficialDocRowDto>>` `{ success, message, data: { items, totalCount, page, pageSize, totalPages } }`. Export = **file bytes**, không JSON.

### API-00 — Health

`GET /api/v1/report/health` · BFF `GET web-bff/api/v1/report/health`

### API-01 — Official docs (Xem)

`GET /api/v1/report/official-docs?direction=&orgUnitId=&from=&to=&q=&page=&pageSize=`  
Alias (compat live): `type` ≡ `direction` · `search` ≡ `q` — coalesce **canonical thắng** nếu cả hai.  
BFF `GET web-bff/api/v1/report/official-docs` + cùng query (forward raw).

| Query | Rule |
|-------|------|
| `direction` | empty / omit / `all` = all · else exact `di` \| `den` (case-insensitive) trên `Direction` |
| `orgUnitId` | empty / omit / `all` = all · else exact `OrgUnitId` |
| `from`/`to` | filter `day` `yyyy-MM-dd` inclusive |
| `q` | Contains `Number` / `Subject` / `OrgUnit` |
| `page`/`pageSize` | allow-list **50/100/200/500** |
| `type`/`search` | **legacy alias** — Dev BE coalesce; FE **không** gửi sau pack này |
| `routeId` | **cấm** trên leaf |

**Row DTO** `ReportOfficialDocRowDto`: `id` `docId` `number` `day` `subject` `direction` `directionLabel` `orgUnit` `orgUnitId`.

Sort: `day` desc · `number` asc.

### API-02 — Export official-docs

`GET /api/v1/report/official-docs/export` — cùng filter API-01 **trừ** `page`/`pageSize`.  
`text/csv; charset=utf-8` · UTF-8 **BOM** · filename `official-docs.csv`.  
CSV `direction` column = **DirectionLabel** (Đi/Đến).

## Query rules (LOCKED)

- Chưa **Xem** trên FE = **không** gọi list (empty hint). Đổi page/pageSize sau viewed = refetch cùng **applied** filters.
- Đổi filter draft **không** fetch đến **Xem**. Đổi filter rồi Xem → `page=1`.
- Drill: FE `/ops?id={docId}` (top window) — **không** API Report GetById.
- Chart P1: **client** từ `items` trang hiện tại — **không** API chart riêng.
- Excel: chỉ khi `viewed` · params = **applied** (không draft lệch lưới).

## Lookup map (SA chốt)

| Field key | controlHint (Design) | API | catalogKind |
|-----------|----------------------|-----|-------------|
| direction | SearchInput | **không API** · query `direction` | enum `di`/`den` / empty=Tất cả |
| orgUnitId | SearchInput | **không API P1** · query `orgUnitId` | org-unit `CC2.1` `CC2.2` `CC2.3` `DRVN` + empty=Tất cả |
| fromDate / toDate | Date | query `from`/`to` | |
| qSearch | Input | query `q` | số CV · trích yếu |

Grid columns = DTO scalars readonly + drill button. **Cấm** editor.

Org-unit P1 seed labels:

| value | label |
|-------|-------|
| `CC2.1` | Chi cục QLĐB II.1 |
| `CC2.2` | Chi cục QLĐB II.2 |
| `CC2.3` | Chi cục QLĐB II.3 |
| `DRVN` | Cục Đường bộ Việt Nam |

## Permissions (stub)

| Code | Surfaces |
|------|----------|
| `report.cong-van.read` | API-00 · API-01 · API-02 |

## Out of pack

CRUD công văn · GOVOne chrome · warehouse schema · OfficialDocument EF P1 · parent JSON · Kind B · `ERP.*` · `api/v1/rmms/*` · `api/v1/reports` · filter `road-route` · invent QL.22 · KPI hub `reports` · master org-unit thật P1 · Resource/Slideout.

## Handoff TL

- Emit T-CTX · T-PERM · T-UI-LIST (A–D Kind E) · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF. **T-UI-FORM** = OUT.
- DoD: 1× LinPageLayout kind=`report` · grid kéo cột · **luôn** LinCatalogListPagination · SearchInput chiều/đơn vị · Xem mới load · Excel `official-docs.csv` · Config FULL · query `direction`/`q` · drill Ops.
- autoApprove **OFF** → SA **confirmed** (user APPROVE→CHAIN `task_52ae8b34`).
- Dev **cấm** write đến khi `confirms.beRepo && uiRepo` **và** `solution_confirm` approve.
- Build (khi Dev): FE `yarn build` + `yarn typecheck` · BE `dotnet build` nếu đụng API (GAP-SA-CV-QUERY).
- Roles sau TL = Dev **pending** (repo tick). **Cấm** nhảy QA.

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=keep_current -->
