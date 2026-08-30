# SA — Solution discovery — reports-filter-bar (hub `/bao-cao` filter)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_ab108598`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`report`) · **filter-bar-layout-hard** · **report-toolbar-actions** · **po-design-report-standard**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · prototype + reviewUrl  
> **Cấm:** Write MFE/native · invent API song song live · ERP.* · `api/v1/rmms/*` · re-scan DEM · yarn build/e2e/start:std · Step 4b/migration ở role SA · invent-seed zone (**GOV-IMP-01/03**) · batch leaf `rpt-*`

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| title | Báo cáo Web (hub) — filter bar (Tuyến chính · Khu · Đoạn · layout HARD) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** (chỉ Zone B filter hub — **cấm** reopen grid/toolbar/config/chart · **cấm** batch leaf) |
| packKind | **`report`** (Kind **E** hub · DES-RPT-C EDIT) |
| Feature Kind | **E** |
| status | `confirmed` |
| design_confirm | approve |
| solution_confirm | **approve** (autoApprove=ON) |
| report_export | **`export_yes`** (parent toolbar check-in — **OUT** change wire this pack · **cấm** export trên filter) |
| report_chart | **`chart_in_page`** (parent SoCai — **OUT** change this pack · **cấm** stub chart mới) |
| domain_map | **Report** (Xem hub) + **Integration** (lookups) — DOMAIN-MAP `reports` · peers live |
| sa_tz_gate | **tz_list_only** (period · from/to trên Xem) |
| sa_xco_gate | **xco_na** (không GET/{id} View trong pack) |
| sa_shared_table | **share_cite** → lookups Integration **share_a** (cite) · **không** entity Report mới (`share_na`) |
| be_repo_confirm | `Linm.RMMS.WebService` (SA chốt path · board Dev tick STATUS) |
| ui_repo_confirm | `Linm.Web.RMMS.Report` (Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| mfeStdRoute | **`/bao-cao`** |
| mfeStdUrl | `http://localhost:9311/bao-cao` |
| peerStdUrl | `http://localhost:9311/bao-cao` · `http://localhost:9318/mas/phan-khu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Report `api/v1/report` · Integration `api/v1/integration` |
| controlHint | `specs/_data-analy/features/reports-filter-bar-control-hint.md` |
| realData | `specs/_data-analy/features/reports-filter-bar-real-data.md` |
| design | `specs/reports-filter-bar/ui/design.md` (confirmed) |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent control |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_ab108598` |
| priorTask | design `task_68a32657` · po `task_2acc197f` · analy `task_853659c0` |
| updatedAt | `2026-08-30T16:15:00.000Z` |
| versionGate | `rechecked` |
| skillVersion | `2026.08.24.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.30.6` |

## § Delta Current vs New (`edit_page`)

| Area | Current (live 2026-08-30) | New (this SA) | Action |
|------|---------------------------|---------------|--------|
| Tuyến SearchInput | `GET …/road-routes/search` **không** `routeKind` → dump NHANH `KM0+*` | Search + `routeKind` / `excludeRouteKinds` · Tuyến chính exclude NHANH/TRANH/GOM | **T-BE-FILTER-01** + FE |
| Khu | **0** field | SearchInput REG-I…IV via List/`/tree` · **không** extend org `/search?kind=` P1 | FE cite |
| Đoạn | nhầm trong Tuyến | Field riêng · dump `routeKind=NHANH\|TRANH\|GOM` **hoặc** `org-route-scopes/{id}/segments` | FE + cite live |
| Report Xem query | `routeId` · `search` · dates · **0** zone/segment | Optional `zoneOrgCode` · `segmentCode` trên hub family | **T-BE-RPT-FILTER-01** |
| Layout / shell | partial leading | Design V1–V5 + zone/segment testIds | T-UI-FILTER-01 / T-UI-RPT-01 |
| Toolbar / Config / Chart / Grid | parent live | **OUT** change — giữ | document |
| Migration / entity Report | — | **0** Schema_* mới | document |
| Scope | — | **chỉ** hub `ReportFilterBar.tsx` | GAP-RPT-FIL-SCOPE |

**Không đổi:** family/kind/period/search live · Report prefixes `api/v1/report/{assets\|incidents\|checkins}` · BFF proxy-only · peer CRUD Integration · seed CUC2 38 · **cấm** ERP.*.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` · route **`/bao-cao`** · file **`ReportFilterBar.tsx`** + `services/report/lookups.ts` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain Xem | **Report** — `api/src/RMMS.Service.Api/Domains/Report/` · `ReportQueryController` |
| API lookups | **Integration** — `RoadRoutesController` · `OrgUnitsController` · `OrgRouteScopesController` |
| BFF | `…Report.Bff` · `…Integration.Bff` · **proxy only = yes** (QS forward sẵn) |
| Models | Report DTOs giữ · Integration Search DTO thêm filter fields |
| Persistence | **cite** `rmms_road_routes` · `rmms_org_units` · `rmms_org_route_scopes` · `rmms_org_route_scope_segments` · Xem read-model giữ — **không** bảng báo cáo mới |
| Migrations | **không** Schema_* this pack (Search query-only · Report query-only) |
| DOMAIN-MAP | `reports` → Report · `road-route`/`org-unit`/`org-route-scope` → Integration (**đã có**) |

**Cấm** `ERP.Service.*` · `api/v1/rmms/*` · `api/v1/reports` (plural) · domain folder mới.

### Route / domain (chốt)

| | Choice |
|--|--------|
| Xem prefix | `api/v1/report` · BFF `web-bff/api/v1/report` |
| Lookup prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| UI route | **`/bao-cao`** (hub) |
| FE BASE | `/report/…` · `/integration/…` (relative `VITE_API_URL`) |
| Pilot file | `src/pages/ReportListPage/ReportFilterBar.tsx` **only** |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain Xem | **Report** / `report` |
| Domain lookup | **Integration** / `integration` |
| API host | `Domains/Report/` + `Domains/Integration/` |
| BFF | Report + Integration Bff · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Report` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | stub P1 `report.*.read` (+ export cùng read) · lookup `master.road-routes.read` / `master.org-units.read` / `master.org-route-scopes.read` — gắn CommonLib ≥1.4.0 |
| Persist | **no new parent JSON** · cite child tables peer zone |
| Out of pack | leaf `rpt-*` FilterBar · reopen Config/Chart/Grid · invent-seed · map canvas · ERP fork |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | `LinErpListFilterBar` · SearchInput · LinReportPeriodSelectorFields · LinReportTableConfigModal — **cấm** local Lin* clone |
| Filter layout | `filter-bar-layout-hard` V1–V5 | fragment leading · **cấm** wrapper · **cấm** `ErpListHeaderFilters` / `LinListFilterField` |
| Toolbar | `report-toolbar-actions` | export/print/config **chỉ** toolbar — **OUT** change |
| HTTP | `apiClient` SSOT | re-export only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Lookups | Integration paths **live** | **cấm** invent parallel Search · **cấm** Dropdown cứng demo làm Tuyến/Khu |
| BFF | proxy only | QS đã forward — **không** business filter ở BFF |

## FormType pack (`report`)

| Surface | Decision |
|---------|----------|
| Filter | `LinErpListFilterBar` + **filter-bar-layout-hard** · Design §3 · testIdPrefix `rmms-reports-hub` |
| Config | `LinReportTableConfigModal` FULL — **giữ parent** · **OUT** |
| Export | `report_export=export_yes` · toolbar only — **giữ parent** · **OUT** filter |
| Chart | `report_chart=chart_in_page` — **giữ parent SoCai** · **OUT** |
| Grid | **OUT** |
| Dev slash | `/agent-dev` (T-UI-FILTER-01 / T-UI-RPT-01 · T-BE-FILTER-01 · T-BE-RPT-FILTER-01) |
| Canonical tasks (TL) | T-UI-RPT-01 · T-UI-FILTER-01 · T-BE-FILTER-01 · T-BE-RPT-01/FILTER · T-QA-RPT-01 / T-QA-FILTER-01 — **cấm** batch leaf |

AskQuestion (autoApprove recorded): `report_export=export_yes` · `report_chart=chart_in_page` · `2026-08-30T16:15:00.000Z`.

## Implement gates (confirm) — RECORDED

> Matrix: Kind **report** · filter date/period · không View-by-id · không entity mới.  
> autoApprove=ON → tự confirm.

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **list_only** (`tz_list_only`) | Report Xem `from`/`to` · period · FE display `formatAtVi` | `/review-timezone-implement` | parse `DateTimeOffset` · `to` date-only = exclusive +1d · **cấm** persist TZ client |
| **XCO** | **n/a** (`xco_na`) | không GET/{id} trong pack | `/implement-view-cross-company` | hub list/search only |
| **SHARE** | lookups **share_a** cite · Report rows **share_na** | road-route · org-unit · org-route-scope | `/implement-shared-table` | **không** bảng báo cáo mới · **không** invent-seed |

AskQuestion (autoApprove recorded): `sa_tz_gate=tz_list_only` · `sa_xco_gate=xco_na` · `sa_shared_table=share_cite_share_a_lookups` · `2026-08-30T16:15:00.000Z`.  
`solution_confirm=approve` · cùng timestamp.

---

## 2. Form data analysis (REQUIRED · controlHint / Design chốt)

> Typography: label **13** · input D14/M16 (**GAP-TYP-01**).  
> **Cấm** đổi SearchInput → Text/Dropdown free khi controlHint = SearchInput.  
> Keys: `family|kind|routeId|routeCode|zoneOrgCode|segmentCode|search|viewMode|month|year|quarter|fromDate|toDate`

### 2a. Screens / FormMode

| Screen / FormMode | Fields (UI) | Source type | Entity / API |
|-------------------|-------------|-------------|--------------|
| S-HUB-FILTER · filter | family · kind · route · zone · segment · search · period · from/to · onSearch | query + lookups | Integration search/list · Report Xem |
| S-HUB-TOOLBAR | refresh · print · config · export | — | **OUT** change (giữ) |
| S-HUB-CONFIG / GRID / CHART | — | — | **OUT** |
| S-LEAF-RPT | — | — | **OUT** (GAP-RPT-FIL-SCOPE) |

### 2b. Filter field map (DES-RPT-C)

| uiField | Label VN | Control | write / query | Source GET (chốt) | Notes |
|---------|----------|---------|---------------|-------------------|-------|
| family | Loại BC | **SearchInput** | `family` | FE static | assets · incidents · checkins |
| kind | Loại báo cáo | **SearchInput** | `type` / kind | FE `kindsForFamily` | cascade family |
| routeId / routeCode | Tuyến | **SearchInput** | `routeId` | **API-LK-01** Search + exclude dump | **cấm** KM* / NHANH/TRANH/GOM |
| zoneOrgCode | Khu | **SearchInput** tree | `zoneOrgCode` | **API-LK-02** List `?kind=REG` **hoặc** `/tree` leaf | **cấm** mix Sở · **không** T-BE org search P1 |
| segmentCode | Đoạn | **SearchInput** | `segmentCode` | **API-LK-03** dump Search `routeKind=` **hoặc** scopes segments | helper FIL-04 |
| search | Tìm kiếm | SearchTextInput / Input | `search` | Report Xem | Enter = Xem |
| viewMode · month · year · quarter | Kỳ | LinReportPeriodSelectorFields | period fields | FE | giữ |
| fromDate · toDate | Từ / Đến | Date | `from`/`to` | Report Xem | ẩn assets · TZ list_only |
| onSearch | Xem | bar 🔍 | — | **API-RPT-01…03** | **cấm** nút Tìm riêng |

### 2c. Cascade (HARD · FE)

| Trigger | Effect |
|---------|--------|
| Đổi Tuyến | clear Khu + Đoạn · reset page/viewed |
| Đổi Khu | clear Đoạn · reset page/viewed |
| Đổi family | reset kind · dates sync ẩn assets |
| Empty | = tất cả (scope tài khoản) |

### 2d. Đoạn source precedence (chốt SA)

| Condition | Đoạn options | Xem query |
|-----------|--------------|-----------|
| Có ≥1 `org-route-scopes` active khớp `zoneOrgCode` (+ `routeCode` nếu có) | `GET …/org-route-scopes/{id}/segments` · placeholder «Chọn đoạn quản lý» | `zoneOrgCode` + `segmentCode` (segment code/id theo DTO live) |
| **0** gán | dump Search `routeKind=NHANH` (+ TRANH/GOM merge FE) · helper FIL-04 | `segmentCode` = dump code → FilterRoute |
| Empty đoạn | «Tất cả đoạn» | chỉ `routeId` / `zoneOrgCode` theo rule dưới |

**Cấm** invent-seed gán.

---

## 3. API catalog

### Quyết định GAP mở (SA chốt)

| ID | Decision |
|----|----------|
| **GAP-RPT-FIL-02** | **Extend Search** `GET …/road-routes/search` thêm `routeKind?` · `excludeRouteKinds?` (comma, case-insensitive). BFF **không** đổi (QS forward). FE Tuyến: `excludeRouteKinds=NHANH,TRANH,GOM`. FE Đoạn dump: `routeKind=NHANH` (và/hoặc TRANH/GOM). **Cấm** FE-only List-only path làm primary (SearchInput SSOT = `/search`). |
| **GAP-RPT-FIL-ORG-KIND** | **P1 FE-only:** Khu = `GET …/org-units?kind=REG` **hoặc** `/tree` + leaf `REG-I`…`REG-IV`. **Không** T-BE extend `/org-units/search?kind=` trong pack này (P2 optional). |
| **GAP-RPT-FIL-03** | Khi có gán: resolve scopes → filter Xem theo route codes / segment; **0** gán → dump P1 · zone query **no-op** row filter. |
| Report zone/segment | **T-BE-RPT-FILTER-01** thêm query optional trên hub family + export |

### API-LK-01: GET `/api/v1/integration/road-routes/search` (**extend**)

| | |
|--|--|
| Purpose | SearchInput Tuyến chính + Đoạn dump |
| Live today | `search` · `page` · `pageSize` · `excludeCode` — **thiếu** routeKind |
| **New query** | `routeKind?` (single · mirror List) · `excludeRouteKinds?` (comma · e.g. `NHANH,TRANH,GOM`) |
| Permission | `master.road-routes.read` (stub OK) |
| Response | giữ `RoadRouteSearchItemDto[]` (`code` · `name` · `routeKind` · `isSelectable`) |
| BFF | `web-bff/api/v1/integration/road-routes/search` · proxy QS |
| Form surfaces | S-HUB-FILTER route · segment dump |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | share_a |
| Migration | **không** |
| Dev | T-BE-FILTER-01 · wire `RoadRouteService.SearchAsync` |

**List** `GET …/road-routes?routeKind=` **giữ** (fallback / admin) — Search = primary consumer.

### API-LK-02: Org-unit Khu (**cite · không extend P1**)

| | |
|--|--|
| Primary | `GET api/v1/integration/org-units?kind=REG` **live** |
| Alt tree | `GET …/org-units/tree` **live** · FE leaf REG-I…IV · **cấm** mix partner/Sở |
| Search | `…/org-units/search` **live** — **không** bắt buộc `kind` P1 |
| BFF | `web-bff/api/v1/integration/org-units…` |
| Form surfaces | S-HUB-FILTER zone |
| gates.shared | share_a |

### API-LK-03: Org-route-scopes / segments (**cite live**)

| | |
|--|--|
| List/search | `GET …/org-route-scopes` · `/search?zoneOrgCode=&routeCode=` **live** |
| Segments | `GET …/org-route-scopes/{id}/segments` **live** |
| Empty | FE dump path API-LK-01 · **cấm** invent-seed |
| Form surfaces | S-HUB-FILTER segment (khi có gán) |
| gates.tz | inherit peer (effectiveAt) nếu FE gửi — optional P1 |
| gates.shared | share_a |

### API-RPT-01: GET `/api/v1/report/assets` (+ `/export`)

| | |
|--|--|
| Purpose | Hub Xem family assets |
| Keep query | `type` · `routeId` · `status` · `from` · `to` · `search` · `period` · `page` · `pageSize` |
| **New query** | `zoneOrgCode?` · `segmentCode?` |
| Filter semantics P1 | (1) `segmentCode` set → `FilterRoute` trên `segmentCode` (dump/mã đoạn). (2) else `routeId` giữ. (3) `zoneOrgCode` set → nếu có assignments active cho zone (+ route mẹ nếu có) → restrict `Route` ∈ mother `routeCode` của scopes; **0** rows gán → **no-op** (không 422). |
| Envelope | giữ `ApiResponse<ReportPagedResult<…>>` |
| BFF | proxy QS |
| gates.tz | **yes** (from/to) |
| gates.xco | n/a |
| Migration | **không** |

### API-RPT-02: GET `/api/v1/report/incidents` (+ `/export`)

Cùng pattern query mới `zoneOrgCode?` · `segmentCode?` · semantics API-RPT-01 · gates.tz yes.

### API-RPT-03: GET `/api/v1/report/checkins` (+ `/export`)

Cùng pattern · export toolbar parent giữ (`export_yes`).

**Cấm** đổi path plural · **cấm** KPI envelope mới · **cấm** chart API mới this pack.

---

## 4. Persist / migration

| Item | Decision |
|------|----------|
| New Report entity / warehouse | **không** |
| New Integration table | **không** |
| Schema_* migration | **không** this pack |
| parent `*Json` | **cấm** |
| Seed zone | **cấm** invent (**GOV-IMP-01/03**) |
| Road-route / org-unit seed | cite CUC2 / org-unit-seed — **không** sửa dump KM* thành tuyến mẹ |

---

## 5. FE bind (WHAT — không HOW)

| Concern | Chốt |
|---------|------|
| File pilot | `ReportFilterBar.tsx` · `lookups.ts` **only** |
| Tuyến fetcher | `/integration/road-routes/search?excludeRouteKinds=NHANH,TRANH,GOM` |
| Đoạn dump | `/integration/road-routes/search?routeKind=NHANH` (+ TRANH/GOM) |
| Khu | `/integration/org-units?kind=REG` hoặc `/tree` |
| Đoạn gán | scopes search → `/{id}/segments` |
| Xem | forward `routeId` · `zoneOrgCode` · `segmentCode` · `search` · dates trên `/report/{family}` |
| Seed fallback BFF down | **chỉ** mother CUC2 38 — **cấm** thêm KM* vào Tuyến |
| Layout | Design §3c V1–V5 |
| Leave | filter draft **không** LeaveConfirm · fail → toast |

---

## 6. Gaps closed / open for TL-Dev

| ID | SA status |
|----|-----------|
| GAP-RPT-FIL-01 | **closed** contract — Tuyến = exclude dump |
| GAP-RPT-FIL-02 | **closed** — extend Search `routeKind` + `excludeRouteKinds` |
| GAP-RPT-FIL-ZONE / SEG | **closed** UI+API cite |
| GAP-RPT-FIL-ORG-KIND | **closed** — FE List/tree P1 · no T-BE |
| GAP-RPT-FIL-03 | **closed** semantics · empty gán = no-op + dump |
| GAP-RPT-FIL-04 | Design copy — Dev wire helper |
| GAP-RPT-FIL-SCOPE | **closed** — hub only |
| GAP-FILTER-BAR-01/07 · WRAP-01 | Design closed · Dev verify live |
| Report zone/segment query | **T-BE-RPT-FILTER-01** IN |

---

## 7. Handoff → Team-lead

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| phase_from / phase_to | sa → team-lead |
| packKind | **report** |
| changeScope | `edit_page` |
| solution | `be/solution-discovery.md` **confirmed** |
| FormMode↔API | §2–§3 |
| BE tasks | T-BE-FILTER-01 (Search extend) · T-BE-RPT-FILTER-01 (zone/segment query) · BFF **no code** if QS forward |
| UI tasks | T-UI-FILTER-01 / T-UI-RPT-01 hub only · lookups · cascade · V1–V5 · **cấm** leaf |
| OUT | toolbar/config/chart/grid rewrite · invent-seed · ERP.* |
| Next | `/agent-team-lead` · **cấm** start TL trong task SA này |
| e2e | queued `/agent-qa*` only |
| Blockers | none |

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm (`task_ab108598`).

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Design confirmed + controlHint + real-data §B | ✅ |
| Architecture + SSOT + FormType report | ✅ |
| FormMode↔API + filter query keys | ✅ |
| GAP-02 / ORG-KIND / zone-segment **chốt** | ✅ |
| Implement gates TZ/XCO/SHARE recorded | ✅ |
| report_export / report_chart recorded | ✅ |
| **0** Write MFE · **0** migration · **0** invent API path | ✅ |
| solution_confirm approve | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T16:15:00.000Z |
| versionGate | rechecked |
| taskId | task_ab108598 |
| contentHashPriorDataAnaly | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| priorDesignTaskId | task_68a32657 |
| priorPoTaskId | task_2acc197f |
| priorAnalyTaskId | task_853659c0 |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a taskId=task_ab108598 -->
