# Team lead — tasks — org-route-scope

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| title | Phân khu lý trình (zone km) |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`master`** (Kind B · Modal form + nested đoạn) |
| formType | **`master`** / list |
| Feature Kind | **B** |
| solution_confirm | **approve** (SA `task_0c95c02f`) |
| design_confirm | **approve** (Design `task_4126a205`) |
| domain_map | **Integration** (`D1`) |
| gates | TZ=`tz_yes` · XCO=`xco_na` · SHARE=`share_a` |
| route_confirm | **`route_a`** (autoApprove=ON) · lock **`/mas/phan-khu`** — A=`/mas/phan-khu` (SA/Design/STATUS chốt · peer `/mas/*`) · B=`/mas/pk` (alt) · C=custom — **không** AskQuestion (autopilot) |
| mfeStdRoute | **`/mas/phan-khu`** |
| mfeStdUrl | draft `http://localhost:9318/mas/phan-khu` — **Dev** điền sau `yarn start:std` |
| demo | **N/A** (`master-catalog-no-demo`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only — **cấm** e2e/start:std ở TL) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| taskId | `task_8b1f0e40` |
| prior · sa | `task_0c95c02f` · solution **confirmed** |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| updatedAt | `2026-08-30T11:45:00.000Z` |
| versionGate | `rechecked` |
| TL SSOT | `tl-platform-ssot` · `ssot-no-duplicate` · `tl-ssot-permission-tasks` · `tl-implement-architecture` · **`form-type-task-pack`** · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-route-vn-abbrev-confirm` · `tl-dropdown-from-backend` · `tl-list-shell-height` · `dev-form-review-checklist` · `dev-history-alert-overlay` · `/implement-show-leave-confirm` |
| **devSlash** | **`/agent-dev`** (list/master — `agent-dev-assign`) — **GAP-TL-DEV-ASSIGN-01** closed |

**Cấm:** implement product code · invent-seed · ERP.* · `api/v1/rmms/*` · yarn build/e2e/start:std · Step 4b/migration · start role khác (**GAP-PKT-ROLE-01**).

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/org-route-scope/ui/design.md` + reviewUrl | T-UI-LIST/FILTER/FORM/ACT/LEAVE/CFG · DES-GRID-A…D+F/H/Z · ORG-CASCADE 2 line · Modal `data-form-cols="2"` |
| Solution | `specs/org-route-scope/be/solution-discovery.md` | T-BE-* · T-BFF · T-PERM · API-01…10 · Schema · FormMode↔API |
| Prototype | `ui/prototype/org-route-scope-list-prototype.html` | UI DoD parity |
| Filter bar | `docs/context/features/org-route-scope-filter-bar.md` | **T-UI-FILTER-01** REQUIRED load trước Write |
| ControlHint / real-data | `_data-analy/features/org-route-scope-*.md` | control-map · peer cite · **0** invent control |
| Seed | **none invent** (GAP-ORS-01) | T-SEED-01 = empty OK · admin import later |

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` · SearchInput · LinErpListFilterBar · LinCatalog* · LeaveConfirmModal |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | perm `master.org-route-scopes.*` |
| **Shared** | SharedMasterCatalog / `ISharedMasterCatalogEntity` | `/implement-shared-table` Type A |

## Implement HOW (TL — ref erp-form-context)

| Topic | Decision (org-route-scope pack) |
|-------|----------------------------------|
| **Wire** | Page → `services/orgRouteScope/endpoint.ts` → `apiClient` → `web-bff/api/v1/integration/org-route-scopes` → `api/v1/integration/org-route-scopes` |
| **List state** | page-hooks + optional slice cache — **không** local auth/ui slice |
| **Form state** | Kind B **Modal** local — `/erp-form-context` · View `readOnly` · nested tab Đoạn |
| **ZONE tabs** | REG-I…IV (+ Tất cả) — filter `zoneOrgCode` · **không** tree CRUD OrgUnit · **không** `/implement-tree-master` trên page này |
| **Lookups** | zoneOrgCode / routeCode / assigneeCode = **SearchInput** peers live — **cấm** Text · assignee PARTNER → partner-unit tách |
| **Labels** | design § control-map tiếng Việt · Dropdown assigneeKind ← **init-data only** |
| **FE BASE** | `/integration/org-route-scopes` |
| **Overlap** | BE 422 cùng `routeCode` + km ∩ + HL ∩ (GAP-ORS-08) |
| **Ref** | `tl-implement-architecture` · Step **2li** · **2s** · filter-bar-layout-hard |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` / `SearchInput` | local Button/Input/Modal/Table/Pager/lookup |
| HTTP | `apiClient` re-export | `class ApiClient` local |
| State | page-hooks + common reducers | local `authSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope |
| Auth | `[RequirePermission]` + Auth codes | custom perm attr |
| Persist | flat `OrgRouteScopeEntity` + child table | parent `SegmentsJson` / ChildrenJson |
| Shared | Type A registry | tenant_keep giả trên master |
| BFF | proxy only | business logic in BFF |
| Config | `LinCatalogUiSchemaEditorModal` FULL | `configHint` / Zone F-only |

**Cấm** fork · `ERP.*` · parent JSON · Dev invent wire · duplicate SearchInput · reopen peer CRUD.

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | **`/mas/phan-khu`** · Modal form · nested đoạn tab — **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** (`integration`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` · `api/domains/integration/…Models/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` · `Schema_RmmsOrgRouteScopes` (+ Designer) · **Step 4b Dev only** |
| Context | `Linm.RMMS.Data/docs/context/features/org-route-scope.md` |
| Filter bar | `docs/context/features/org-route-scope-filter-bar.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/doi-tac` |
| **Board** | `be_repo_confirm` + `ui_repo_confirm` **đã approve** (PO/SA) — Dev re-check path trước Write |

## API contract (from solution)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/integration/org-route-scopes` |
| API-02 | GET | `/api/v1/integration/org-route-scopes/search` |
| API-03 | GET | `/api/v1/integration/org-route-scopes/init-data` |
| API-04 | GET | `/api/v1/integration/org-route-scopes/{id}` |
| API-05 | POST | `/api/v1/integration/org-route-scopes` |
| API-06 | PUT | `/api/v1/integration/org-route-scopes/{id}` |
| API-07 | DELETE | `/api/v1/integration/org-route-scopes/{id}` |
| API-08 | GET | `/api/v1/integration/org-route-scopes/{id}/segments` |
| API-09 | POST | `/api/v1/integration/org-route-scopes/{id}/segments` |
| API-10 | PUT/DELETE | `/api/v1/integration/org-route-scopes/{id}/segments/{segmentId}` |

BFF: `web-bff/api/v1/integration/org-route-scopes/**`. FE BASE: **`/integration/org-route-scopes`**.

Peers (cite only): `…/org-units` · `…/road-routes` · `…/partner-units`.

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **yes** (`tz_yes`) | effectiveFrom/To · filter `effectiveAt` → UTC | `/review-timezone-implement` |
| XCO | **n/a** (`xco_na`) | shared Scope — không IgnoreQueryFilters cross-company | `/implement-view-cross-company` n/a |
| SHARE | **Type A** (`share_a`) | `OrgRouteScopeEntity` · `OrgRouteScopeSegmentEntity` | `/implement-shared-table` Type A |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only · SearchInput · LinErpListFilterBar |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | gap/stub | codes `master.org-route-scopes.*` |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` (audit; entity shared) |
| SD-TOKEN | n/a P1 | |
| SD-JOB | n/a | |
| SD-TENANT | **shared** | skip tenant filter · Type A |
| SD-NO-JSON | **required** | Flat scalars · child table FK — **cấm** SegmentsJson |
| SD-SEARCH | **required** | API-01 + API-02 · pageSize 50/100/200/500 |
| SD-TZ | **required** | timestamptz UTC |
| SD-XCO | **n/a** | shared |
| SD-SHARE | **required** | Type A |
| SD-TREE | **n/a** | ZONE tabs only — **không** left tree nav CRUD |
| SD-LKP | **required** | SearchInput peers · assignee split |
| SD-LEAVE | **required** | LeaveConfirmModal |
| SD-HIST | stub OK | LinCatalogHistoryModal — **cấm** invent History API |
| SD-OVERLAP | **required** | GAP-ORS-08 → 422 |

## DES-GRID → Lin\* map (`tl-design-grid-component-map`)

| Design zone | Component SSOT |
|-------------|----------------|
| DES-GRID-A | `LinPageLayout` header catalog · title «Phân khu lý trình» |
| DES-GRID-B | `catalogToolbar` FULL · `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-C0 | listTitle + row menu help |
| DES-GRID-C1 / FILTER | **`LinErpListFilterBar`** + **T-UI-FILTER-01** + `org-route-scope-filter-bar.md` |
| ORG-CASCADE | Cục implicit QLĐB (không ô) · Khu · VP · Đơn vị · tuyến · 2 line · query `zoneOrgCode` |
| DES-GRID-C2 | **`LinCatalogDataGrid`** · dynamic cols · resize ON |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | **`LinCatalogListPagination`** only |
| DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** FULL — **cấm** Zone F-only |
| DES-GRID-H | `LinCatalogHistoryModal` stub |
| DES-GRID-Z | Modal form · `data-form-cols="2"` · footer Hủy/Lưu · tab Đoạn |

**GAP-TL-GRID-MAP-01:** closed.

## FormType pack (canonical — `form-type-task-pack` §2a master)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | Dev | pending | context + DOMAIN-MAP cite |
| T-UI-LIST-01 | Dev `/agent-dev` | pending | `tl-grid-task-template` FULL · Kind B `/mas/phan-khu` |
| T-UI-FILTER-01 | Dev `/agent-dev` | pending | filter-bar context + V1–V5 |
| T-UI-CFG-01 | Dev | pending | LinCatalogUiSchemaEditorModal full cột |
| T-UI-FORM-01 | Dev | pending | Modal C/E/V/Copy · 2 cột · nested đoạn |
| T-UI-LEAVE-01 | Dev | pending | LeaveConfirmModal · **cấm** window.confirm |
| T-UI-ACT-01 | Dev | pending | action inventory → form/API |
| T-UI-LKP-01 | Dev | pending | SearchInput peers · assignee split |
| T-UI-FIELD-01 | Dev | pending | field type + DTO/API map |
| T-UI-PROD-01 | Dev | pending | end-user · cấm note Dev |
| T-UI-UX-01 | Dev | pending | Modal 2 cột · typography 13/D14/M16 |
| T-UI-RESP-01 | Dev `/dev-web-responsive` | pending | 1280/768/375 |
| T-UI-HIST-01 | Dev | pending | History modal + cấm alert |
| T-BE-CRUD-01 | Dev | pending | API-01…07 + overlap |
| T-BE-SEG-01 | Dev | pending | API-08…10 nested segments |
| T-BE-SCHEMA-01 | Dev | pending | `Schema_RmmsOrgRouteScopes` pair · **Step 4b** |
| T-BE-UISCHEMA-01 | Dev | pending | catalogKind `org-route-scope` |
| T-BE-INIT-01 | Dev | pending | init-data assigneeKinds |
| T-BE-SEARCH-01 | Dev | pending | `/search` + exclude KM* |
| T-PERM-01 | Dev | pending | `master.org-route-scopes.*` |
| T-BFF-01 | Dev | pending | BFF proxy only |
| T-SEED-01 | Dev | pending | **no invent-seed** · empty OK |
| T-QA-CRUD-01 | QA | pending | Create→Edit→View→Delete + row menu + config + leave |
| T-QA-FORM-01 | QA | pending | field e2e · body=UI |
| T-QA-FILTER-01 | QA | pending | V1–V5 + filter-bar.md |
| T-QA-TYP-01 | QA | pending | label 13 · input D14/M16 |
| T-QA-TAB-01 | QA | pending | tab order từ analy |

**GAP-TL-FORMTYPE-01:** closed — pack IDs stamped (`task_8b1f0e40`).

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search / 🔍 | S-LIST filter | `LinErpListFilterBar` onSearch | GET `/` |
| Khu SearchInput | ORG-CASCADE | set `zoneOrgCode` → reload | GET `/` |
| Refresh | toolbar | reloadAll | GET `/` |
| + Tạo dòng gán | toolbar Zone B | openCreate → Modal create | POST `/` |
| Edit (toolbar) | toolbar | openRow(edit) | GET `/{id}` · PUT |
| View (toolbar) | toolbar | openRow(view) | GET `/{id}` |
| Delete (toolbar) | toolbar | deleteRow + Modal confirm | DELETE `/{id}` |
| History | toolbar / row | LinCatalogHistoryModal stub | DEFER |
| Config `fa-cog` | toolbar | LinCatalogUiSchemaEditorModal | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | handleRowMenuSelect | same |
| Nested đoạn C/E/D | Modal tab | segment CRUD | API-08…10 |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |

**GAP-P2-ACT-\*:** none planned — all toolbar/menu actions must wire.

---

## Task pack (DoD)

### T-CTX-01
**layer:** docs  
**from_design:** Kind B · A–D+F · Modal · VN · SearchInput · ORG-CASCADE 2 line  
**from_solution:** field map · Integration · share_a · FormMode↔API  
**ssot:** design + solution + context · DOMAIN-MAP `org-route-scope`→Integration  
**skills:** `/erp-form-context` · Step **2s** · **2li**  
**DoD:**
- [ ] Context/control-map khớp design+solution · DOMAIN-MAP row documented
- [ ] Filter-bar context path cited · mfeStdRoute `/mas/phan-khu`

### T-BE-SCHEMA-01
**layer:** api · migration Schema  
**from_solution:** `Schema_RmmsOrgRouteScopes` · entities parent+child · Type A  
**skills:** `/database-migration` · `/new-migration` · **`/implement-shared-table`**  
**deps:** T-CTX-01  
**DoD:**
- [ ] Pair `.cs` + `.Designer.cs` (EF CLI) · UK + IX · **0** invent Seed
- [ ] Register shared Type A · **cấm** SegmentsJson
- [ ] Step **4b** Dev only · `dotnet build` PASS

### T-BE-CRUD-01
**layer:** api  
**from_solution:** API-01…07 · overlap 422 · shared Type A  
**source:** backend=`Linm.RMMS.WebService` · domain=`Integration`  
**ssot.platform_be:** CommonLib  
**ssot.platform_auth:** `master.org-route-scopes.read|create|update|delete|approve`  
**gates:** TZ=yes · XCO=n/a · SHARE=**share_a**  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/review-timezone-implement`  
**deps:** T-BE-SCHEMA-01  
**DoD:**
- [ ] API-01 list/search page · API-02 search · API-04…07 CRUD
- [ ] ApiResponse / paged · `[RequirePermission]`
- [ ] Unique business key · zone REG leaf · route exclude KM* · kmTo>kmFrom · HL valid
- [ ] Overlap validation **422** (GAP-ORS-08)
- [ ] Patch DOMAIN-MAP if drift · `dotnet build` PASS

### T-BE-SEG-01
**layer:** api  
**from_solution:** API-08…10 · ⊆ parent km · assigneeKind/Code  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] Nested segments CRUD · soft-delete cascade parent
- [ ] Segment overlap 422 · assignee catalog match
- [ ] **cấm** parent JSON blob

### T-BE-INIT-01
**layer:** api  
**from_solution:** API-03 init-data  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] `{ assigneeKinds: [{value,label}] }` VN · **cấm** FE KIND_LABEL

### T-BE-SEARCH-01
**layer:** api  
**from_solution:** API-02 · exclude KM* / NHANH/TRANH/GOM as mother route (filter peer)  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] SearchInput consumer shape · routeKind filter exclude `KM0+000-*`

### T-BE-UISCHEMA-01
**layer:** api  
**from_solution:** catalogKind `org-route-scope` · GET/PUT ui-schema  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] CatalogUiSchemaRegistry + seed fields · **cấm** Zone F-only

### T-BFF-01
**layer:** bff  
**deps:** T-BE-CRUD-01  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Proxy `web-bff/api/v1/integration/org-route-scopes/**` · **0** business logic · build PASS

### T-PERM-01
**layer:** ui+api  
**from_solution:** `master.org-route-scopes.*`  
**skills:** `/implement-erp-form-permissions` · `api-permission-gate`  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] Codes documented · FE toolbar/form gated · BE RequirePermission (or TODO+codes documented)

### T-SEED-01
**layer:** api  
**from_solution:** GAP-ORS-01 · **0** invent-seed  
**deps:** T-BE-SCHEMA-01  
**DoD:**
- [ ] Empty table OK · **cấm** Seed từ dump / manage_unit Sở
- [ ] Admin import path documented (out of pack OK)

### T-UI-LIST-01 — List page + grid (Kind B)

**devSlash:** `/agent-dev`  
**page:** `/mas/phan-khu`  
**deps:** T-BFF-01 · T-BE-CRUD-01  
**skills (REQUIRED load trước Write):**
  - `/agent-dev` · `tl-design-grid-component-map` · `tl-grid-ssot` · `tl-grid-full-flow` · `tl-catalog-list-parity` · `tl-list-shell-height`
  - design_zones: DES-GRID-A…D · C2a · C3 · F · H · ORG-CASCADE
  - `/erp-form-context` · `/review-grid` · `/erp-filter-form` · **/filter-bar-context** · **T-UI-FILTER-01**
  - `/lin-list-table-config-modal` · `/implement-catalog-list-toolbar` · `/implement-history`
  - form_pair → T-UI-FORM-01 + `dev-form-review-checklist`

**ssot.reuse:**
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_filter: LinErpListFilterBar · **T-UI-FILTER-01** · `org-route-scope-filter-bar.md`
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create «Tạo dòng gán») · fa-cog
  ui_grid: LinCatalogDataGrid
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal (FULL)
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems
  ui_history: LinCatalogHistoryModal stub
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection
  http: apiClient · unwrap
  BASE: `/integration/org-route-scopes`

**implement.page_shell / toolbar / grid / config / grid_flow:** paste canonical từ `tl-grid-task-template` — Dev **MUST** follow block SSOT (không improvisation).

**implement.list_shell_height (`tl-list-shell-height`):**
  - live smoke: title + toolbar + grid **or** empty visible · **cấm** DEFER GAP-P2-LAYOUT-06

**Columns (header VN):** STT · □ · **Khu** · **Tuyến** · **Km từ** · **Km đến** · **HL từ** · **HL đến** · **Trạng thái** · ⋯

**DoD:**
- [ ] Zones A–D+F+H+ORG-CASCADE parity prototype
- [ ] Toolbar FULL · grid LinCatalogDataGrid · pagination common only
- [ ] Config FULL · resize ON · filter/sort cột default OFF
- [ ] Empty copy VN · toast «chưa cấu hình» nếu API chưa migrate — **cấm** mock seed
- [ ] Shell height live smoke PASS
- [ ] yarn build PASS (Dev role only)

### T-UI-FILTER-01 — List filter bar

**devSlash:** `/agent-dev`  
**deps:** T-UI-LIST-01 (same page) · T-BE-CRUD-01  
**skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**context:** `docs/context/features/org-route-scope-filter-bar.md`  

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · `data-lin-list-layout="erp-filter-bar"`

**DoD:**
- [ ] Context fields 1:1 · V1–V5 PASS
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField
- [ ] ZONE tabs sync `zoneOrgCode` · filter → page=1
- [ ] **cấm** «SearchTextInput only» thay filter bar — **GAP-TL-FILTER-01** closed

### T-UI-CFG-01
**deps:** T-UI-LIST-01 · T-BE-UISCHEMA-01  
**DoD:**
- [ ] Sửa config = editor full cột · **cấm** configHint / Zone F-only (**GAP-P2-CC-06**)

### T-UI-FORM-01
**layer:** ui  
**from_design:** Modal · `data-form-cols="2"` · C/E/V/Copy · tab Đoạn  
**from_solution:** field map parent+child · FormMode↔API  
**implement.state:** form=modal-local · View readOnly · leave → T-UI-LEAVE-01  
**ssot.reuse:** SearchInput · init-data Dropdown · **cấm** Text master  
**skills:** `/erp-form-context` · `dev-form-review-checklist` · `tl-dropdown-from-backend`  
**deps:** T-UI-LIST-01 · T-BE-INIT-01 · T-BE-SEG-01  
**review.form:** Modal 2 cột + footer only · **cấm** Full page 5 cột · **cấm** Slideout hồ sơ lớn  

**Parent fields:** zoneOrgCode* · routeCode* · kmFrom* · kmTo* · effectiveFrom* · effectiveTo* · isActive  
**Child tab:** kmFrom/kmTo ⊆ parent · assigneeKind* · assigneeCode* SearchInput  

**DoD:**
- [ ] FormMode Create/Edit/View/Copy badges VN
- [ ] View=readOnly / `<dl>` — **cấm** Input disabled xám
- [ ] Nested đoạn CRUD trong tab
- [ ] Dropdown assigneeKind ← init-data only
- [ ] Build PASS

### T-UI-LEAVE-01
**deps:** T-UI-FORM-01  
**skills:** `/implement-show-leave-confirm`  
**DoD:**
- [ ] Dirty → **LeaveConfirmModal** · full `useFormLeaveGuard` / `useLeaveConfirm`
- [ ] **cấm** `window.confirm` / `alert` — **GAP-TL-LEAVE-01** / **GAP-DEV-LEAVE-01**

### T-UI-LKP-01
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] zoneOrgCode SearchInput org-unit REG leaf only
- [ ] routeCode SearchInput road-route · exclude KM*
- [ ] assigneeCode org **hoặc** partner theo kind — **cấm** mix Sở vào org tree (GAP-ORS-UI-01 note P1)
- [x] Dual-box mã+tên sau chọn — `primaryDisplay=code` · `secondaryDisplay=name` · **GAP-ORS-LKP-DISPLAY-01** (`/edit-web-feature` 2026-08-30)

### T-UI-FIELD-01
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Control-map ↔ DTO/API 1:1 · typography label 13 · input D14/M16

### T-UI-PROD-01
**DoD:**
- [ ] End-user page — **cấm** note Dev / demo chrome (`demo-to-real-enduser`)

### T-UI-UX-01
**deps:** T-UI-FORM-01 · T-UI-LIST-01  
**skills:** `dev-ui-ux-constitution` · `form-field-grid` Modal 2 cột  
**DoD:**
- [ ] Modal 2 cột + footer · icons erp-control-icon-map §0 · **GAP-DEV-UX-01**

### T-UI-RESP-01
**devSlash:** `/dev-web-responsive` + `/dev-ui-review`  
**DoD:**
- [ ] Verify 1280/768/375 · Desktop+Tablet 1 layout · Mobile Web không shrink

### T-UI-HIST-01
**deps:** T-UI-LIST-01  
**skills:** `dev-history-alert-overlay`  
**DoD:**
- [ ] LinCatalogHistoryModal stub · delete confirm = Modal/useAlert · **cấm** window.alert/confirm/prompt

### T-QA-CRUD-01 / T-QA-FORM-01 / T-QA-FILTER-01 / T-QA-TYP-01 / T-QA-TAB-01
**role:** QA `/agent-qa*`  
**deps:** UI+BE done · mfeStdUrl live  
**DoD:**
- [ ] Scenarios in `qa/scenarios.md` — CRUD · form fields · filter V1–V5 · typography · tab order
- [ ] e2eQa=ON → QA runs e2e + PNG — **cấm** TL/Dev chạy e2e
- [ ] Fail → qa_fail_rollback · **cấm** phase=done từ QA

## Deps

```
T-CTX-01 → T-BE-SCHEMA-01 → T-BE-CRUD-01 → T-BE-SEG-01
                              ↘ T-BE-INIT-01
                              ↘ T-BE-SEARCH-01
                              ↘ T-BE-UISCHEMA-01
                              ↘ T-BFF-01
                              ↘ T-PERM-01
         → T-SEED-01 (empty OK)
T-BFF-01 → T-UI-LIST-01 → T-UI-FILTER-01
                       → T-UI-CFG-01
                       → T-UI-FORM-01 → T-UI-LEAVE-01 · T-UI-LKP-01 · T-UI-FIELD-01
                       → T-UI-ACT-01 · T-UI-HIST-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
T-UI-* → T-QA-*
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` — **T-CTX-01** + **T-BE-SCHEMA-01** / **T-BE-CRUD-01** (serial) |
| Gate | re-check `be_repo_confirm` + `ui_repo_confirm` paths trước Write |
| Anti-dup | `ssot-no-duplicate.md` |
| Route | **`/mas/phan-khu`** locked (`route_confirm=route_a`) |
| mfeStdUrl | Dev điền sau start:std |
| Schema | Step **4b** Dev — **cấm** TL chạy migration |
| Seed | **0** invent |
| E2E | queued QA only |
| Out | **cấm** Write product ở TL · **cấm** e2e/build/start:std ở TL |

## Retry SSOT

Not a retry (`retryFrom` absent) — **n/a** `tl-retry-ssot-rereview`. Nếu board Retry sau này → Dev **MUST** re-audit list/form SSOT từ đầu.

## DoR checklist (TL PASS)

| Check | Pass |
|-------|------|
| design + solution confirmed | ✅ |
| route_confirm locked `/mas/phan-khu` | ✅ (autoApprove route_a) |
| formType pack đủ T-* §2a + T-BE-SEG/SCHEMA/SEARCH/BFF/SEED/CTX | ✅ |
| devSlash=`/agent-dev` | ✅ |
| DES-GRID map + tl-grid-task-template paste | ✅ |
| T-UI-FILTER-01 + filter-bar.md | ✅ |
| T-UI-LEAVE-01 | ✅ |
| init-data dropdown rule | ✅ |
| ssot.reuse + wire + source.* | ✅ |
| **Không** implement · **không** e2e/build/start:std · **không** Step 4b | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-30T11:45:00.000Z |
| versionGate | rechecked |
| taskId | task_8b1f0e40 |
| contentHashPriorDataAnaly | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| orchestratorWorkflowVersion | 2026.08.29.04 |
| dataAnalySkillVersion | 2026.08.25.01 |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc taskId=task_8b1f0e40 -->
