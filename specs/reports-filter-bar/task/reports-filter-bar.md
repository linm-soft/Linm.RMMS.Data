# Team lead — tasks — reports-filter-bar

| Field | Value |
|-------|-------|
| feature | `reports-filter-bar` |
| title | Báo cáo Web (hub) — filter bar (Tuyến chính · Khu · Đoạn · layout HARD) |
| status | `confirmed` |
| changeScope | **`edit_page`** (chỉ Zone B / DES-RPT-C filter hub — **cấm** reopen grid/toolbar/config/chart · **cấm** batch leaf `rpt-*`) |
| packKind | **`report`** (Kind **E** hub · FormType pack §2d) |
| formType | **`report`** |
| Feature Kind | **E** |
| solution_confirm | **approve** (SA `task_ab108598`) |
| design_confirm | **approve** (Design `task_68a32657`) |
| domain_map | **Report** (Xem) + **Integration** (lookups) |
| gates | TZ=`tz_list_only` · XCO=`xco_na` · SHARE=`share_cite` lookups **share_a** · Report **share_na** |
| report_export | **`export_yes`** — toolbar parent · **OUT** change wire this pack |
| report_chart | **`chart_in_page`** — SoCai parent · **OUT** change this pack |
| route_confirm | **`route_a`** (autoApprove=ON) · lock **`/bao-cao`** — A=`/bao-cao` (SA/Design/STATUS/parent hub chốt) · B=`/bc` (alt) · C=custom — **không** AskQuestion (autopilot) · **không** URL mới |
| mfeStdRoute | **`/bao-cao`** |
| mfeStdUrl | draft `http://localhost:9311/bao-cao` — **Dev** điền sau `yarn start:std` |
| peerStdUrl | `http://localhost:9311/bao-cao` · `http://localhost:9318/mas/phan-khu` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/bao-cao/reports.html` (stale ref only) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only — **cấm** e2e/start:std/build ở TL) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| taskId | `task_29d8d189` |
| prior · sa | `task_ab108598` · solution **confirmed** |
| prior · design | `task_68a32657` · design **confirmed** |
| prior · po | `task_2acc197f` · requirement **confirmed** |
| prior · data_analy | `task_853659c0` · control-hint + real-data **confirmed** |
| contentHash | `sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a` |
| headerFingerprint | `sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9` |
| updatedAt | `2026-08-30T16:00:00.000Z` |
| versionGate | `rechecked` |
| TL SSOT | `tl-platform-ssot` · `ssot-no-duplicate` · `tl-implement-architecture` · **`form-type-task-pack`** (§2d report) · `tl-filter-bar-task` · `filter-bar-layout-hard` · `po-design-report-standard` · `report-toolbar-actions` · `tl-route-vn-abbrev-confirm` · `tl-source-assignment` · `agent-dev-assign` · `/erp-report-context` · `/filter-bar-context` |
| **devSlash** | **`/agent-dev`** (report hub filter + BE Search/Xem extend) — **GAP-TL-DEV-ASSIGN-01** closed |

**Cấm:** implement product code · invent-seed · ERP.* · `api/v1/rmms/*` · `api/v1/reports` (plural) · yarn build/e2e/start:std · Step 4b/migration · start role khác (**GAP-PKT-ROLE-01**) · batch leaf `rpt-*` FilterBar · reopen toolbar/config/chart/grid.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/reports-filter-bar/ui/design.md` + reviewUrl | T-UI-RPT-01 · T-UI-FILTER-01 · DES-RPT-C · V1–V5 · cascade |
| Solution | `specs/reports-filter-bar/be/solution-discovery.md` | T-BE-FILTER-01 · T-BE-RPT-FILTER-01 · T-PERM · FormMode↔API · GAP-02/ORG-KIND |
| Prototype | `ui/prototype/reports-filter-bar-prototype.html` | UI DoD parity filter |
| Filter bar CTX | `docs/context/features/reports-filter-bar.md` | **T-UI-FILTER-01** / **T-UI-RPT-01** REQUIRED load trước Write |
| ControlHint / real-data | `_data-analy/features/reports-filter-bar-*.md` | control-map · peer cite · **0** invent control |
| Parent hub | `specs/reports/task/reports.md` · CTX `reports.md` | toolbar/config/chart/grid **OUT** — giữ |
| Peer zone | `org-route-scope` **done** | cite segments · **0** invent-seed |

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` · `LinErpListFilterBar` · SearchInput · SearchTextInput · `LinReportPeriodSelectorFields` · (parent) LinReportTableConfigModal / SoCai |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | stub P1 `report.*.read` · `master.road-routes.read` · `master.org-units.read` · `master.org-route-scopes.read` |
| **Lookups** | Integration live | road-routes / org-units / org-route-scopes — **cấm** invent parallel Search |

## Implement HOW (TL — ref erp-report-context · filter-bar)

| Topic | Decision (reports-filter-bar pack) |
|-------|-------------------------------------|
| **Wire** | `ReportFilterBar.tsx` + `services/report/lookups.ts` → `apiClient` → BFF `web-bff/api/v1/integration/*` + `web-bff/api/v1/report/{family}` |
| **Pilot file** | **chỉ** `src/pages/ReportListPage/ReportFilterBar.tsx` (+ lookups) — **cấm** leaf `rpt-*` |
| **Filter state** | page draft → apply on 🔍 Xem · cascade clear zone/segment · **không** LeaveConfirm trên draft |
| **Tuyến** | Search `excludeRouteKinds=NHANH,TRANH,GOM` — **cấm** KM* / dump trong Tuyến |
| **Khu** | FE List `?kind=REG` **hoặc** `/tree` leaf REG-I…IV — **không** T-BE org search P1 |
| **Đoạn** | scopes segments nếu có gán · else dump `routeKind=NHANH` (+TRANH/GOM) · helper FIL-04 |
| **Xem query** | forward `routeId` · `zoneOrgCode` · `segmentCode` · `search` · period/from/to |
| **Toolbar/Config/Chart/Export/Grid** | **OUT** — giữ parent `reports` |
| **BFF** | proxy QS only — **không** business filter |
| **Migration** | **0** Schema_* this pack |
| **Ref** | `tl-implement-architecture` · `filter-bar-layout-hard` · `report-toolbar-actions` · `po-design-report-standard` |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI filter | `LinErpListFilterBar` · fragment leading · `data-lin-list-layout="erp-filter-bar"` | `ErpListHeaderFilters` · `LinListFilterField` · wrapper cả leading · native `<select>` |
| UI lookup | SearchInput · SearchTextInput · LinReportPeriodSelectorFields | local Button/Input clone · Dropdown cứng demo Tuyến/Khu |
| HTTP | `apiClient` re-export | `class ApiClient` local |
| State | page-hooks ReportListPage | local auth/toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope |
| Auth | `[RequirePermission]` + Auth codes | custom perm attr |
| Persist | cite peer tables | parent JSON · warehouse Report mới |
| BFF | proxy only | business logic in BFF |
| Seed | CUC2 38 mother fallback only | invent-seed zone / KM* vào Tuyến |
| Toolbar | parent `reportToolbar` | export/print/config/chart trên filter |

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Report` |
| `source.routes` | **`/bao-cao`** · hub filter edit — **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Report** (`report`) + **Integration** (`integration`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Report/` · `…/Domains/Integration/` · Models tương ứng |
| `source.bff` | `bff/domains/report/` · `bff/domains/integration/` · `web-bff/api/v1/report/**` · `web-bff/api/v1/integration/**` |
| `source.layout` | `micro-src` · file `ReportFilterBar.tsx` |
| `source.persistence` | cite only — **không** bảng mới |
| `source.migrations` | **không** this pack |
| Context | `Linm.RMMS.Data/docs/context/features/reports-filter-bar.md` |
| Filter bar | `docs/context/features/reports-filter-bar.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/reports-filter-bar/ui/prototype/reports-filter-bar-prototype.html` |
| peerStdUrl | `http://localhost:9311/bao-cao` · `http://localhost:9318/mas/phan-khu` |
| **Board** | `ui_repo_confirm` **approve** · `be_repo_confirm` **approve** (SA path · Dev re-check trước Write) |

## API contract (from solution)

| id | Method | Path | Dev |
|----|--------|------|-----|
| API-LK-01 | GET | `/api/v1/integration/road-routes/search` | **extend** `routeKind?` · `excludeRouteKinds?` — **T-BE-FILTER-01** |
| API-LK-02 | GET | `/api/v1/integration/org-units?kind=REG` · `/tree` | **cite** FE only — **không** T-BE P1 |
| API-LK-03 | GET | `/api/v1/integration/org-route-scopes` · `/search` · `/{id}/segments` | **cite** live |
| API-RPT-01 | GET | `/api/v1/report/assets` (+ `/export`) | + `zoneOrgCode?` · `segmentCode?` — **T-BE-RPT-FILTER-01** |
| API-RPT-02 | GET | `/api/v1/report/incidents` (+ `/export`) | same |
| API-RPT-03 | GET | `/api/v1/report/checkins` (+ `/export`) | same · export toolbar parent giữ |

BFF: proxy QS — **0** code nếu forward sẵn. FE BASE: `/report/…` · `/integration/…`.

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **list_only** (`tz_list_only`) | Xem `from`/`to` · period · FE `formatAtVi` | `/review-timezone-implement` |
| XCO | **n/a** (`xco_na`) | không GET/{id} View pack | `/implement-view-cross-company` n/a |
| SHARE | lookups **share_a** cite · Report **share_na** | road-route · org-unit · org-route-scope | `/implement-shared-table` cite only |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components · LinErpListFilterBar · SearchInput |
| SD-LIB-BE | **required** | CommonLib ApiResponse |
| SD-AUTH | stub P1 | `report.*.read` · lookup master.* |
| SD-BFF | **required** | Proxy only QS |
| SD-HEADER | **required** | `X-Company-Id` (audit) |
| SD-NO-JSON | **required** | **cấm** parent JSON |
| SD-SEARCH | **required** | Xem on 🔍 · pageSize parent giữ |
| SD-TZ | **required** | tz_list_only from/to |
| SD-XCO | **n/a** | hub list only |
| SD-SHARE | **cite** | lookups share_a · no Report entity |
| SD-FILTER | **required** | V1–V5 · zone + segment fields |
| SD-LEAVE | **n/a filter draft** | fail → toast · **cấm** alert/confirm |
| SD-MIG | **n/a** | 0 Schema_* |

## DES-RPT → Lin\* map (Kind E hub · EDIT = DES-RPT-C)

| Design zone | Component SSOT | Pack |
|-------------|----------------|------|
| DES-RPT-A title | `LinPageLayout` kind=`report` · title «Báo cáo Web» | **OUT** change (giữ) |
| DES-RPT-A toolbar | `reportToolbar` · Làm mới · In · Config · Xuất Excel | **OUT** — T-UI-RPT-TB-01 / EXPORT / CONFIG / CHART = keep |
| DES-RPT-C filter | **`LinErpListFilterBar`** + CTX + V1–V5 | **IN** — T-UI-RPT-01 · T-UI-FILTER-01 |
| DES-RPT-F config | `LinReportTableConfigModal` FULL | **OUT** keep |
| Grid / Chart / Pager | parent Kind E | **OUT** keep |

**GAP-TL-GRID-MAP-01:** n/a (không Kind B list template) · report map stamped.

## FormType pack (canonical — `form-type-task-pack` §2d report + SA delta)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | Dev | pending | context + DOMAIN-MAP cite · filter CTX path |
| T-UI-RPT-01 | Dev `/agent-dev` | pending | **IN** · LinErpListFilterBar · V1–V5 · Xem work · hub only |
| T-UI-FILTER-01 | Dev `/agent-dev` | pending | **IN** · `/filter-bar-context` + `reports-filter-bar.md` · fields 1:1 · cascade |
| T-UI-RPT-TB-01 | Dev | **keep / OUT** | parent reportToolbar — **cấm** rewrite · verify 0 action trên filter |
| T-UI-RPT-CONFIG-01 | Dev | **keep / OUT** | parent LinReportTableConfigModal FULL |
| T-UI-RPT-EXPORT-01 | Dev | **keep / OUT** | `export_yes` · toolbar only · **cấm** filter export |
| T-UI-RPT-CHART-01 | Dev | **keep / OUT** | `chart_in_page` · parent SoCai · **cấm** stub mới |
| T-UI-LKP-01 | Dev | pending | Tuyến/Khu/Đoạn SearchInput bind · seed fallback mother only |
| T-UI-UX-01 | Dev | pending | typography 13/D14/M16 · toast · **cấm** alert |
| T-UI-RESP-01 | Dev `/dev-web-responsive` | pending | 1280/768/375 filter wrap |
| T-BE-FILTER-01 | Dev | pending | Search extend `routeKind` · `excludeRouteKinds` |
| T-BE-RPT-FILTER-01 | Dev | pending | Xem + export query `zoneOrgCode` · `segmentCode` (API-RPT-01…03) |
| T-BE-RPT-01 | Dev | pending | alias gate · query + TZ bounds (covers FILTER semantics) |
| T-BFF-01 | Dev | pending | verify QS forward · **0** business · no code if live |
| T-PERM-01 | Dev | pending | report read/export stub · lookup master.* |
| T-QA-RPT-01 | QA | pending | search · filter V1+V5 · toolbar vs bar · e2eQa |
| T-QA-FILTER-01 | QA | pending | V1–V5 + CTX fields 1:1 · cascade · **cấm** TL viết scenario |
| T-QA-TYP-01 | QA | pending | label 13 · input D14/M16 |

**GAP-TL-FORMTYPE-01:** closed — §2d IDs stamped + SA T-BE-FILTER / T-BE-RPT-FILTER / T-UI-FILTER.  
**GAP-TL-FILTER-01:** closed — T-UI-FILTER-01 + CTX path.  
**GAP-TL-DEV-ASSIGN-01:** closed — `devSlash=/agent-dev`.

### T-UI-ACT inventory (hub filter · this pack)

| Action | Zone | Handler | API |
|--------|------|---------|-----|
| Chọn Loại BC / kind / kỳ / date / q | DES-RPT-C | draft only | — |
| Chọn Tuyến | C | SearchInput · clear Khu+Đoạn · reset viewed | API-LK-01 exclude dump |
| Chọn Khu | C | SearchInput · clear Đoạn | API-LK-02 |
| Chọn Đoạn | C | SearchInput scopes **hoặc** dump | API-LK-03 / LK-01 |
| **Xem** 🔍 | C | apply → page=1 → viewed | API-RPT-01…03 + zone/segment |
| Enter trên search | C | = Xem | same |
| Làm mới / In / Config / Excel / Chart | toolbar | **OUT** — giữ parent | parent |

**Cấm** POST/PUT/DELETE report · **cấm** invent-seed gán.

---

## Task pack (DoD)

### T-CTX-01
**layer:** docs  
**from_design:** Kind E · DES-RPT-C EDIT · V1–V5 · cascade  
**from_solution:** FormMode↔API · GAP-02/ORG-KIND · 0 migration  
**ssot:** design + solution + `reports-filter-bar.md` · DOMAIN-MAP Report+Integration  
**skills:** `/erp-report-context` · `/filter-bar-context`  
**DoD:**
- [ ] Context/control-map khớp design+solution · mfeStdRoute `/bao-cao`
- [ ] Filter-bar CTX path cited · peer org-route-scope done · **cấm** invent-seed

### T-BE-FILTER-01
**layer:** api · Integration  
**from_solution:** GAP-RPT-FIL-02 · API-LK-01 extend  
**source:** backend=`Linm.RMMS.WebService` · domain=`Integration` · `RoadRouteService.SearchAsync`  
**ssot.platform_be:** CommonLib  
**gates:** TZ=n/a · XCO=n/a · SHARE=share_a  
**skills:** `/new-endpoint` · `/review-query`  
**deps:** T-CTX-01  
**DoD:**
- [ ] `GET …/road-routes/search` nhận `routeKind?` · `excludeRouteKinds?` (comma CI)
- [ ] Response shape giữ `RoadRouteSearchItemDto` · permission `master.road-routes.read`
- [ ] BFF QS forward (T-BFF-01) · **0** migration
- [ ] `dotnet build` PASS (Dev only)

### T-BE-RPT-FILTER-01 · T-BE-RPT-01
**layer:** api · Report  
**from_solution:** API-RPT-01…03 · zone/segment semantics  
**source:** domain=`Report` · `ReportQueryController`  
**gates:** TZ=`tz_list_only` · XCO=n/a · SHARE=share_na  
**skills:** `/new-endpoint` · `/review-timezone-implement` · `/erp-report-context`  
**deps:** T-CTX-01  
**DoD:**
- [ ] Optional query `zoneOrgCode` · `segmentCode` trên assets/incidents/checkins (+ export)
- [ ] Semantics SA §3: segmentCode → FilterRoute; else routeId; zoneOrgCode + assignments → restrict; **0** gán = no-op
- [ ] from/to DateTimeOffset · `to` date-only exclusive +1d
- [ ] **cấm** path plural · **cấm** KPI/chart API mới · `dotnet build` PASS (Dev)

### T-BFF-01
**layer:** bff  
**deps:** T-BE-FILTER-01 · T-BE-RPT-FILTER-01  
**skills:** `/create-bff-api-feature` (verify only)  
**DoD:**
- [ ] QS forward Integration search + Report Xem — **0** business logic
- [ ] No code change OK nếu live đã proxy — document verify

### T-PERM-01
**layer:** ui+api  
**from_solution:** `report.*.read` (+ export cùng read P1) · lookup master.*  
**skills:** `api-permission-gate`  
**deps:** T-BE-FILTER-01 · T-BE-RPT-FILTER-01  
**DoD:**
- [ ] Codes documented · BE RequirePermission (or stub+codes) · FE hide Excel nếu thiếu export (parent giữ)

### T-UI-RPT-01 — Report filter bar (hub)

**devSlash:** `/agent-dev`  
**page:** `/bao-cao`  
**deps:** T-BE-FILTER-01 · T-BE-RPT-FILTER-01 · T-BFF-01  
**skills (REQUIRED load trước Write):**
  - `/agent-dev` · `/erp-report-context` · `po-design-report-standard` · `filter-bar-layout-hard` · `report-toolbar-actions`
  - **/filter-bar-context** · context `docs/context/features/reports-filter-bar.md`
  - design zones: **DES-RPT-C** EDIT · prototype parity
  - controlHint + real-data §B (hash skip — **cấm** invent)

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · `data-lin-list-layout="erp-filter-bar"` · testIdPrefix `rmms-reports-hub`
  ui_period: LinReportPeriodSelectorFields
  ui_lookup: SearchInput · SearchTextInput
  http: apiClient · BASE `/report` · `/integration`
  cấm: ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · action trên bar · leaf rpt-*

**implement.filter:**
  leading: family · kind · route · **zone** · **segment** · search — từng `div[data-testid]`
  dateLeading: period fields · from/to ẩn assets
  onSearch: Xem · searchAriaLabel=`Xem báo cáo`
  cascade: đổi tuyến → clear khu+đoạn · đổi khu → clear đoạn · reset page/viewed
  đoạn: scopes segments **hoặc** dump + helper FIL-04
  Xem: forward `routeId` · `zoneOrgCode` · `segmentCode` · `search` · dates

**DoD:**
- [ ] Fields 1:1 CTX §1 + Design §3a
- [ ] V1–V5 PASS trên mfeStdUrl
- [ ] Tuyến **0** KM*/NHANH/TRANH/GOM · Khu REG-I…IV · Đoạn riêng
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField trên ReportFilterBar
- [ ] **cấm** export/print/config/chart trên filter
- [ ] yarn build PASS (**Dev only**)

### T-UI-FILTER-01 — List/report filter bar (canonical)

**devSlash:** `/agent-dev`  
**deps:** T-UI-RPT-01 (same surface) · T-BE-FILTER-01  
**skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard` · `/filter-dates-context`  
**context:** `docs/context/features/reports-filter-bar.md`  

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · `data-lin-list-layout="erp-filter-bar"`

**DoD:**
- [ ] Context file tồn tại · fields 1:1 §1
- [ ] V1–V5 `filter-bar-layout-hard` PASS
- [ ] Search/filter query work (API + FE)
- [ ] **cấm** «SearchTextInput only» thay filter bar — **GAP-TL-FILTER-01** closed

### T-UI-LKP-01
**deps:** T-UI-RPT-01 · T-BE-FILTER-01  
**DoD:**
- [ ] Tuyến = Search `excludeRouteKinds=NHANH,TRANH,GOM` · fallback mother CUC2 38 only khi BFF down
- [ ] Khu = List/tree REG leaf — **cấm** mix Sở
- [ ] Đoạn = scopes **hoặc** dump — **cấm** invent-seed
- [ ] Empty = «Tất cả …»

### T-UI-RPT-TB-01 / T-UI-RPT-CONFIG-01 / T-UI-RPT-EXPORT-01 / T-UI-RPT-CHART-01
**status:** **keep / OUT** (parent `reports` live)  
**DoD (verify only — **cấm** rewrite):**
- [ ] Toolbar trái: Làm mới · In · Config · Xuất Excel (check-in) · Chart SoCai — **không** trên filter
- [ ] Config = LinReportTableConfigModal FULL · **cấm** configHint
- [ ] Chart = SoCai · **cấm** stub toast mới
- [ ] export_yes / chart_in_page recorded — wire **OUT** this pack

### T-UI-UX-01
**deps:** T-UI-RPT-01  
**skills:** `dev-ui-ux-constitution`  
**DoD:**
- [ ] label 13 · input D14/M16 · gap SSOT · toast · **cấm** window.alert/confirm
- [ ] Filter draft **không** LeaveConfirm

### T-UI-RESP-01
**devSlash:** `/dev-web-responsive` + `/dev-ui-review`  
**deps:** T-UI-RPT-01  
**DoD:**
- [ ] Verify 1280/768/375 · wrap flex-end · title không chồng field (V2)

### T-QA-RPT-01 / T-QA-FILTER-01 / T-QA-TYP-01
**role:** QA `/agent-qa*`  
**deps:** UI+BE done · mfeStdUrl live  
**DoD:**
- [ ] Scenarios in `qa/scenarios.md` — Xem · cascade · V1–V5 · toolbar≠filter · typography
- [ ] CTX fields 1:1 · fail ErpListHeaderFilters / stack / export trên bar
- [ ] e2eQa=ON → QA runs e2e + PNG — **cấm** TL/Dev chạy e2e
- [ ] Fail → qa_fail_rollback · **cấm** phase=done từ QA

## Deps

```
T-CTX-01 → T-BE-FILTER-01 ──┐
         → T-BE-RPT-FILTER-01 / T-BE-RPT-01 ─┼→ T-BFF-01 → T-PERM-01
                                            └→ T-UI-RPT-01 → T-UI-FILTER-01
                                                         → T-UI-LKP-01
                                                         → T-UI-UX-01 · T-UI-RESP-01
                                                         → (verify) T-UI-RPT-TB/CONFIG/EXPORT/CHART keep
T-UI-* → T-QA-RPT-01 · T-QA-FILTER-01 · T-QA-TYP-01
```

**Order HARD:** T-BE-FILTER-01 + T-BE-RPT-FILTER-01 trước T-UI-RPT-01 (endpoint mới).

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — **T-CTX-01** rồi **T-BE-FILTER-01** + **T-BE-RPT-FILTER-01** (serial/parallel OK) rồi **T-UI-RPT-01** |
| Gate | re-check `be_repo_confirm` + `ui_repo_confirm` paths trước Write |
| Anti-dup | `ssot-no-duplicate.md` |
| Route | **`/bao-cao`** locked (`route_confirm=route_a`) |
| mfeStdUrl | Dev điền sau start:std (`http://localhost:9311/bao-cao`) |
| Schema | **0** migration — **cấm** Step 4b |
| Seed | **0** invent zone · mother CUC2 fallback only |
| E2E | queued QA only |
| Out | **cấm** Write product ở TL · **cấm** e2e/build/start:std ở TL · **cấm** leaf rpt-* · **cấm** toolbar rewrite |

## Retry SSOT

Not a retry (`retryFrom` absent for TL) — **n/a** `tl-retry-ssot-rereview`. Nếu board Retry sau này → Dev **MUST** re-audit filter SSOT từ đầu (`tl-retry-ssot-rereview`).

## DoR checklist (TL PASS)

| Check | Pass |
|-------|------|
| design + solution confirmed | ✅ |
| controlHint + real-data under `_data-analy/features/` | ✅ |
| route_confirm locked `/bao-cao` | ✅ (autoApprove route_a) |
| formType pack đủ T-* §2d + SA FILTER/RPT-FILTER | ✅ |
| devSlash=`/agent-dev` | ✅ |
| T-UI-FILTER-01 + `reports-filter-bar.md` | ✅ |
| T-UI-RPT-01 + V1–V5 DoD | ✅ |
| export/chart flags · TB/CONFIG/EXPORT/CHART stamped keep/OUT | ✅ |
| ssot.reuse + wire + source.* | ✅ |
| **Không** implement · **không** e2e/build/start:std · **không** Step 4b | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.30.6 |
| contentHash | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| headerFingerprint | sha256:e5226ff0b146ffd2e67210f7ebc5ebbf68ab3612f5416314988acc7c1b5442a9 |
| generatedAt | 2026-08-30T16:00:00.000Z |
| versionGate | rechecked |
| taskId | task_29d8d189 |
| contentHashPriorDataAnaly | sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| priorSaTaskId | task_ab108598 |
| priorDesignTaskId | task_68a32657 |
| priorPoTaskId | task_2acc197f |
| priorAnalyTaskId | task_853659c0 |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.30.6 versionGate=rechecked contentHash=sha256:9c8f48aa63c0db817e348a729489019ecdb814928fedc007d79770d3724fcd4a taskId=task_29d8d189 -->
