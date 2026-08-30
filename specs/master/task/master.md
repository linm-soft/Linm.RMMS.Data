# Tasks — master (hub · 4 shared catalogs)

> Team lead · `/agent-team-lead` · `task_2795907c` · autoApprove ON  
> Status: **done** · `route_confirm` = **route_a** (autopilot · live `/mas/*`) · `2026-08-29T06:48:00.000Z`  
> Serial by page+layer · **cấm** parallel same Field/shell file  
> **Cấm** implement product code ở role TL · **cấm** e2e / `yarn start:std` / build  
> **Cấm** ERP.* · **cấm** invent `open-api` song song live · **cấm** start role khác (**GAP-PKT-ROLE-01**)

| Field | Value |
|-------|-------|
| feature | `master` |
| title | [TL] Master catalogs — Feature hub (Kind B ×4) |
| this role | `team_lead` · `/agent-team-lead` |
| packKind | **`master`** (PO/Design/SA confirmed) |
| formType | **`master`** · Kind **B** ×4 · Modal form `data-form-cols="2"` |
| changeScope | `edit_page` — hub SSOT + GAP-MAS-* · child CRUD **parity_verify** (STATUS child = done) |
| solution_confirm | **approve** |
| design_confirm | **approve** |
| domain_map | **Integration** |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| childFeatures | `org-unit` (P0) · `road-route` (P0) · `asset-type` (P0) · `partner-unit` (P1) |
| contentHash | `sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*` chạy E2E) |
| taskId | `task_2795907c` |
| priorTask | `task_1ca9c5a2` (sa completed) |
| updatedAt | `2026-08-29T06:48:00.000Z` |
| versionGate | `rechecked` |
| TL SSOT | `tl-platform-ssot` · `ssot-no-duplicate` · `tl-implement-architecture` · **`form-type-task-pack`** · `tl-grid-*` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `agent-dev-assign` |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/master/ui/design.md` + reviewUrl hub | T-UI-* · DES-GRID-A…D · Modal · Leave |
| Solution | `specs/master/be/solution-discovery.md` | T-BE · T-BFF · T-PERM · T-CTX · FormMode↔API ×4 |
| Prototype hub | `ui/prototype/master-hub-prototype.html` | UI DoD parity |
| Child designs | `specs/{org-unit,road-route,asset-type,partner-unit}/ui/` | reuse · parity |
| Child solutions | `specs/{child}/be/solution-discovery.md` | cite live contracts |
| controlHint | `specs/_data-analy/features/master-control-hint.md` | control-map · 2li |
| realData | `specs/_data-analy/features/master-real-data.md` | §B Integration bind |
| Filter contexts | `docs/context/features/{org-unit,road-route,asset-type,partner-unit}-filter-bar.md` | **T-UI-FILTER-01** |

## § Delta Current vs New (`edit_page` · hub TL)

| Area | Current | New (this turn) | Action |
|------|---------|-----------------|--------|
| Hub task | stub draft | Full FormType pack + HOW + routes confirmed | write |
| Child CRUD | STATUS **done** | **parity_verify** · fix only on gap | keep + cite |
| Routes docs | legacy `/master/*` · packet `:9318/master/org-unit` | **Live** `/mas/*` SSOT | GAP-MAS-ROUTE-01 → T-CTX |
| API docs | CTX `open-api` | **Live** `integration/*` | GAP-MAS-API-01 → T-CTX |
| Filter context | missing | 4× `*-filter-bar.md` | write (TL) |
| Consumer 2li | controlHint | T-UI-LKP-01 SearchInput | task |

**Không** re-greenfield 4 catalogs khi live PASS — Dev chỉ sửa khi parity FAIL.

---

## Route confirm (REQUIRED · autopilot)

| | |
|--|--|
| AskQuestion | `route_confirm` |
| autoApprove | **ON** → **`route_a`** |
| **route_a (chốt)** | Hub peer `/mas/co-cau-tc` · peers `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` |
| route_b (alt · không chọn) | Legacy `/master/org-unit` · `/master/road-route` · … — **cấm** dùng (GAP-MAS-ROUTE-01) |
| recordedAt | `2026-08-29T06:48:00.000Z` |

**source.routes (confirmed):**

| Catalog | `mfeStdRoute` | Form |
|---------|---------------|------|
| org-unit | `/mas/co-cau-tc` | Modal trên list |
| road-route | `/mas/tuyen-duong` | Modal |
| asset-type | `/mas/loai-ts` | Modal |
| partner-unit | `/mas/doi-tac` | Modal |

**mfeStdRoute (hub draft STATUS):** `/mas/co-cau-tc`  
**mfeStdUrl:** Dev điền sau `yarn start:std` — gợi ý `http://localhost:9318/mas/co-cau-tc` · **cấm** TL chạy start:std.

---

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinErpListFilterBar · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogUiSchemaEditorModal · LinCatalogRowActionMenu · LinCatalogHistoryModal · LeaveConfirmModal · SearchInput · LinTree* |
| **HTTP** | `apiClient` SSOT | re-export only |
| **BE** | `Linm.Platform.CommonLib` | ApiResponse · `[RequirePermission]` |
| **Auth** | Authentication | `master.{org-units\|road-routes\|asset-types\|partner-units}.*` |
| **Shared** | `ISharedMasterCatalogEntity` | Type A ×4 · `/implement-shared-table` |
| **BFF** | Integration BFF | **proxy only** |

**Cấm** fork Lin* · local pager/table · `ERP.*` · parent `*Json` · Dropdown hardcode options.

---

## DES-GRID → Lin* map (HARD · Kind B ×4)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 | **`LinErpListFilterBar`** + **T-UI-FILTER-01** · `{child}-filter-bar.md` |
| DES-GRID-C2 | **`LinCatalogDataGrid`** |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | **`LinCatalogRowActionMenu`** + `buildCatalogRowMenuItems` |
| DES-GRID-D | **`LinCatalogListPagination`** |
| DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** FULL |
| DES-GRID-H | **`LinCatalogHistoryModal`** / `useCatalogHistoryModal` |
| DES-GRID-T | **org-unit only** · `LinTreeGridLayout` + `LinTreeNav` · `/implement-tree-master` |
| DES-GRID-Z | Modal · `data-form-cols="2"` · footer Hủy/Lưu · View `readOnly` |
| DES-LEAVE | **`LeaveConfirmModal`** · `useLeaveConfirm` |

Fail map → **GAP-TL-GRID-MAP-01**.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/loai-ts` · `/mas/doi-tac` (**route_a**) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** (`integration`) |
| `source.api` | `api/src/…/Domains/Integration/` · Controllers OrgUnits · RoadRoutes · AssetTypes · PartnerUnits |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` — **đã có** child Schema (hub **không** new Schema trừ drift) |
| Context | `docs/context/features/{master,org-unit,road-route,asset-type,partner-unit}.md` |
| Seed | `docs/context/seed/{org-unit,road-route,asset-type,partner-unit}-seed.json` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/master/ui/prototype/master-hub-prototype.html` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| FE endpoints | `src/services/{orgUnit,roadRoute,assetType,partnerUnit}/endpoint.ts` → `/integration/…` |
| **Board** | `be_repo_confirm` + `ui_repo_confirm` locked |

---

## Implement HOW (hub)

| Topic | Decision |
|-------|----------|
| **Wire** | Page → `services/{catalog}/endpoint.ts` → `apiClient` → `web-bff/api/v1/integration/{resource}` → API |
| **List state** | page-hooks + `useServerPagedListLoading` · **không** local auth slice |
| **Form** | Kind B **Modal** · `/erp-form-context` · View `readOnly` · **cấm** Full page `/new`·`:id` · **cấm** Slideout |
| **Filter** | `LinErpListFilterBar` · load `{child}-filter-bar.md` **trước Write** |
| **Config** | ui-schema GET/PUT · `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` · **cấm** leftover `const columns` |
| **Tree** | org-unit · `GET /tree` non-leaf · `/implement-tree-master` |
| **init-data** | Dropdown options **chỉ** từ BE — **cấm** `KIND_LABEL` |
| **Leave** | dirty → `LeaveConfirmModal` · xóa → `useAlert`/`Modal` — **cấm** `window.alert`/`confirm` |
| **History** | `LinCatalogHistoryModal` · stacked nếu Modal mở · `dev-history-alert-overlay` |
| **Shell height** | flex-root + live smoke title+toolbar+grid/empty — **cấm** DEFER **GAP-P2-LAYOUT-06** |
| **Consumer 2li** | `orgUnitCode` SearchInput **tree** · `routeCode`/`assetTypeCode`/`partnerUnitCode` SearchInput — **cấm** free-text |
| **GAP-PARTNER-01** | code = `SO-*`/`BOT-*`/`DN-*` (uppercase · hyphen) |
| **provinceCode** | **Text** P1 — **không** SearchInput province |
| **Child order** | org-unit **P0** → road-route → asset-type → partner-unit **P1** |
| **devSlash** | mọi list/form = **`/agent-dev`** (+ `/dev-web-responsive` · `/dev-ui-review` trên T-UI-RESP-01) |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components Lin* | local Button/Input/Modal/Table/Pager/lookup |
| HTTP | `apiClient` | `class ApiClient` local |
| State | page-hooks | local `authSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope |
| Auth | `[RequirePermission]` | custom attr |
| Persist | flat entities | parent `*Json` / ChildrenJson |
| Shared | Type A | tenant_keep giả |
| BFF | proxy only | business logic in BFF |

---

## API contract (cite SA · live)

| Catalog | List | Tree | Search | Init | CRUD | ui-schema |
|---------|------|------|--------|------|------|-----------|
| org-unit | OU-01 | OU-02 | OU-03 | OU-04 | OU-05…08 | UI-01 `org-unit` |
| road-route | RR-01 | — | RR-02 | RR-03 | RR-04…07 | UI-01 `road-route` |
| asset-type | AT-01 | — | AT-02 | AT-03 | AT-05…08 | UI-01 `asset-type` |
| partner-unit | PU-01 | — | PU-02 | PU-03 | PU-04…07 | UI-01 `partner-unit` |

Prefix: `api/v1/integration/{resource}` · BFF `web-bff/api/v1/integration/{resource}`.

---

## Implement gates (from SA)

| Gate | Decision | Skill |
|------|----------|-------|
| TZ | **tz_na** | `/review-timezone-implement` — không DATE form/filter |
| XCO | **xco_na** | `/implement-view-cross-company` — không tenant filter |
| SHARE | **share_a** | `/implement-shared-table` Type A ×4 |

---

## FormType pack (canonical — `form-type-task-pack` §2a master)

| Task id | Role | `devSlash` | Mode | Status |
|---------|------|------------|------|--------|
| T-CTX-01 | Dev/docs | `/agent-dev` | **new** (hub) | pending |
| T-BE-CRUD-01 | Dev | `/agent-dev` | parity_verify ×4 | pending |
| T-BE-UISCHEMA-01 | Dev | `/agent-dev` | parity_verify ×4 | pending |
| T-BE-INIT-01 | Dev | `/agent-dev` | parity_verify ×4 | pending |
| T-BFF-01 | Dev | `/agent-dev` | parity_verify | pending |
| T-PERM-01 | Dev | `/agent-dev` | parity_verify | pending |
| T-SEED-01 | Dev | `/agent-dev` | cite/verify | pending |
| T-UI-LIST-01 | Dev | `/agent-dev` | parity_verify ×4 · `tl-grid-task-template` | pending |
| T-UI-FILTER-01 | Dev | `/agent-dev` | parity + align filter-bar.md | pending |
| T-UI-CFG-01 | Dev | `/agent-dev` | parity_verify | pending |
| T-UI-FORM-01 | Dev | `/agent-dev` | parity_verify Modal | pending |
| T-UI-LEAVE-01 | Dev | `/agent-dev` | parity_verify | pending |
| T-UI-ACT-01 | Dev | `/agent-dev` | parity_verify | pending |
| T-UI-LKP-01 | Dev | `/agent-dev` | parity + consumer 2li | pending |
| T-UI-FIELD-01 | Dev | `/agent-dev` | control-map 1:1 | pending |
| T-UI-PROD-01 | Dev | `/agent-dev` | end-user chrome | pending |
| T-UI-UX-01 | Dev | `/agent-dev` | constitution · Modal 2 cột | pending |
| T-UI-RESP-01 | Dev | `/dev-web-responsive` | 1280/768/375 | pending |
| T-UI-HIST-01 | Dev | `/agent-dev` | history + no alert | pending |
| T-QA-CRUD-01 | QA | `/agent-qa*` | scenarios + e2e queued | pending |
| T-QA-FORM-01 | QA | `/agent-qa*` | field body 1:1 | pending |
| T-QA-FILTER-01 | QA | `/agent-qa*` | V1–V5 + filter-bar.md | pending |

**GAP-TL-FORMTYPE-01:** closed — pack IDs stamped (`task_2795907c`).  
**GAP-TL-FILTER-01:** closed — 4 filter-bar context files + T-UI-FILTER-01.  
**GAP-TL-LEAVE-01:** closed — T-UI-LEAVE-01.  
**GAP-TL-DEV-ASSIGN-01:** closed — `devSlash=/agent-dev` (list/form) · RESP=`/dev-web-responsive`.  
**GAP-TL-GRID-TASK-01 / FLOW-01 / MAP-01:** closed — template + map + full-flow below.

**deps:** T-CTX-01 trước docs consumers · T-BE-* trước T-UI-* nếu API/schema drift · child serial P0→P1.

---

## Task blocks

### T-CTX-01 — Sync hub CTX routes/API (GAP-MAS-*)

**layer:** docs  
**mode:** **new** (hub)  
**skills:** `/erp-form-context` · repo-path-guard  
**DoD:**
- [ ] `docs/context/features/master.md` (+ child CTX nếu còn) cite **live** `api/v1/integration/*` — **cấm** `open-api` SSOT song song
- [ ] Routes docs = **`/mas/*`** — **cấm** teach `/master/*` là SSOT UI
- [ ] DOMAIN-MAP 4 slugs → Integration documented
- [ ] Seed/import cite `gov-vn` · CUC2 archive **không** production SSOT
- [ ] contentHash/headerFingerprint unchanged (analy reuse) — chỉ patch path wording

### T-BE-CRUD-01 — Integration CRUD ×4 (parity)

**layer:** api  
**mode:** parity_verify  
**from_solution:** FormMode↔API §3 · OU/RR/AT/PU  
**gates:** tz_na · xco_na · share_a  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-shared-table`  
**DoD:**
- [ ] 4 catalogs: list/search/page · getById · create · update · soft-delete · (org) tree · search lookup
- [ ] ApiResponse / paged · `[RequirePermission]` codes `master.*`
- [ ] Unique `code` · parent exists · no cycle · **cấm** ChildrenJson
- [ ] partner-unit code scheme `SO-*`/`BOT-*`/`DN-*` (GAP-PARTNER-01)
- [ ] **Không** new Schema trừ drift review · `dotnet build` khi sửa
- [ ] Fail parity → fix gap only · **cấm** invent `api/v1/rmms/*` · **cấm** ERP.*

### T-BE-UISCHEMA-01 — Catalog ui-schema ×4

**skills:** `/implement-catalog-ui-schema-registry`  
**DoD:**
- [ ] Registry + seed `{catalogKind}` ∈ org-unit · road-route · asset-type · partner-unit
- [ ] GET/PUT `/integration/catalogs/{kind}/ui-schema`
- [ ] Bootstrap `hasSavedOverride!==true` · FE dynamic columns

### T-BE-INIT-01 — init-data ×4

**DoD:**
- [ ] GET `…/init-data` trả `{value,label}` cho kind / routeKind / groupCode / partnerKind
- [ ] FE Dropdown **chỉ** consume init-data — **cấm** KIND_LABEL

### T-BFF-01 — Integration BFF proxy

**DoD:**
- [ ] BFF mirror 4 resources · **proxy only = yes** · no business logic

### T-PERM-01 — Permissions

**DoD:**
- [ ] Codes `master.org-units|road-routes|asset-types|partner-units` · `read|create|update|delete|approve`
- [ ] Gate list+form+API · local mode documented nếu stub

### T-SEED-01 — Seed cite

**DoD:**
- [ ] org 60 keep_legacy · road-route · asset-type 23 · partner-unit 13 — cite seed JSON
- [ ] UI **cấm** mock seed che empty API

---

### T-UI-LIST-01 — List page + grid (Kind B ×4)

**status:** pending  
**devSlash:** `/agent-dev`  
**mode:** parity_verify · child order P0→P1  
**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height
  - design_zones: DES-GRID-A,B,C0,C1,C2,C2a,C3,D,F,H,T(org),Z
  - /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context** · **T-UI-FILTER-01**
  - /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
  - org-unit: /implement-tree-master · /implement-grid-tree-context
  - /implement-catalog-ui-schema-registry (BE) · FE bootstrap
  - form_pair → T-UI-FORM + dev-form-review-checklist

**ssot.reuse:**
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_filter: LinErpListFilterBar · **T-UI-FILTER-01** · load `{child}-filter-bar.md`
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create) · fa-cog
  ui_grid: LinCatalogDataGrid
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal · stacked · dev-history-alert-overlay
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  ui_tree (org-unit): LinTreeGridLayout · LinTreeNav · LIN_TREE_GRID_TABLE_CARD_CLASS
  http: apiClient · unwrap

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: title + titleIconClass + pageId
  listTitle: «Danh sách …» per catalog
  footer: LinCatalogListPagination

**implement.toolbar:** (tl-grid-full-flow §1)
  wire: catalogToolbar trên LinPageLayout
  actions: onRefresh · canAdd/onAdd · canHistory/onHistory · showSchemaConfig+onEditConfig
  selection: showEdit/onEdit · showView/onView · canDelete/onDelete
  form_pair: onAdd→Create · onEdit/onView→FormMode · cùng Modal T-UI-FORM
  cấm: thiếu Create/Refresh/Config · History stub · icon lệch erp-control-icon-map · Thêm mới Zone A

**implement.grid / grid_menu / config / grid_flow:** per `tl-grid-task-template` canonical — dynamic columns · kéo cột ON · filter/sort cột default OFF · Confirm search=visible∩checked

**implement.list_parity:**
  layout: flex-root + **GAP-P2-LAYOUT-06** live smoke (title+toolbar+grid/empty visible)
  tree?: org-unit overview=flatten+client · leaf=skip-api
  footer: LinCatalogListPagination only
  routes: **`/mas/*`** only

**implement.init_data:** options GET …/init-data only

**implement.tree_master:** (org-unit) GET /tree non-leaf + childCount/descendantCount · GAP-TREE-MASTER-LEAF-01

**DoD:**
- [ ] 4 pages Kind B PASS map DES-GRID→Lin*
- [ ] Toolbar FULL · grid menu · config FULL · grid_flow
- [ ] Footer common pager · 0 local pager
- [ ] Live shell height PASS — **cấm** DEFER GAP-P2-LAYOUT-06
- [ ] Routes live `/mas/*` · FE BASE `/integration/…`
- [ ] `rg` anti-clone PASS · **yarn build chỉ ở role Dev** (không TL)

### T-UI-FILTER-01 — List filter bar ×4

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`  
**context (REQUIRED load trước Write):**
  - `docs/context/features/org-unit-filter-bar.md`
  - `docs/context/features/road-route-filter-bar.md`
  - `docs/context/features/asset-type-filter-bar.md`
  - `docs/context/features/partner-unit-filter-bar.md`

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · `data-lin-list-layout="erp-filter-bar"`
  ui_layout: title trái · input + 🔍 cụm phải · wrap
  init_data: Select từ GET init-data only

**implement.filter:**
  bar: LinErpListFilterBar · onSearch trên bar (🔍)
  leading: fragment `div[data-testid]` per field — cấm wrapper cả block
  cấm: ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · export/print trên bar · nút Tìm riêng

**DoD:**
- [ ] Fields 1:1 từng filter-bar.md
- [ ] V1–V5 `filter-bar-layout-hard` PASS trên mfeStdUrl (Dev)
- [ ] Search/filter query work
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField trên 4 pages

### T-UI-CFG-01 — Config full cột

**DoD:**
- [ ] Sửa config = `LinCatalogUiSchemaEditorModal` FULL (List/width/filter/sort)
- [ ] **cấm** Zone F-only · `configHint` · leftover `const columns` (**GAP-P2-CC-06**)

### T-UI-FORM-01 — Modal C/E/V/Copy ×4

**skills:** `/erp-form-context` · `dev-form-review-checklist` · `form-field-grid.md` (Modal 2 cột)  
**pattern:** **Modal** · `data-form-cols="2"` · footer Hủy/Lưu · View `readOnly`  
**fields:** Design §3 control-map 1:1 · parentCode/org SearchInput tree · partner code scheme  
**DoD:**
- [ ] FormMode C/E/V/Copy → API map SA §3
- [ ] **cấm** Full page 5 cột · **cấm** Slideout · **cấm** View disabled xám / `<dl>` tách
- [ ] Typography label 13 · input D14/M16 (**GAP-TYP-01**)
- [ ] provinceCode = Text · parentCode ≠ Text

### T-UI-LEAVE-01 — Dirty leave

**skills:** `/implement-show-leave-confirm`  
**DoD:**
- [ ] Dirty → **LeaveConfirmModal** · Modal = `useLeaveConfirm`
- [ ] **cấm** `window.confirm` / `alert` / native dialog (**GAP-P2-36** / **GAP-DEV-LEAVE-01**)

### T-UI-ACT-01 — Action inventory → form/API

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | filter | commitSearch | GET list |
| Tree select (org) | DES-GRID-T | handleNavSelect | GET list · GET /tree |
| Refresh | toolbar | reloadAll | GET list (+ tree) |
| +Thêm | toolbar | openCreate → Modal create | POST |
| Edit/View/Delete | toolbar | openRow / deleteRow | GET/PUT/DELETE |
| History | toolbar | useCatalogHistoryModal | HIST |
| Config fa-cog | toolbar | LinCatalogUiSchemaEditorModal | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | handleRowMenuSelect | same |
| Deep-link `?form=` | URL | create/edit/view/copy | GET by id |

**DoD:** mọi nút có handler + FormMode/API — **cấm** GAP-P2-ACT-* Aligned stub.

### T-UI-LKP-01 — SearchInput master + consumer 2li

**DoD:**
- [ ] Form parentCode (org/road) = SearchInput → `/search`
- [ ] Consumer: `orgUnitCode` tree · `routeCode` · `assetTypeCode` · `partnerUnitCode` = SearchInput — **cấm** free-text / Dropdown thay SearchInput
- [ ] display `code — name`

### T-UI-FIELD-01 — Field type ↔ DTO/API

**DoD:** control-map Design §3 = DTO SA §2 · **GAP-LIST-FIELD-01** closed.

### T-UI-PROD-01 — End-user

**DoD:** **cấm** note Dev / demo chrome trên UI (`demo-to-real-enduser`) · DEM N/A.

### T-UI-UX-01 — UI-Ux constitution

**DoD:** Modal 2 cột · icons erp-control-icon-map §0 · **GAP-DEV-UX-01** / **GAP-P2-FORM-GRID-01**.

### T-UI-RESP-01 — Responsive

**devSlash:** `/dev-web-responsive` (+ `/dev-ui-review`)  
**DoD:** Desktop+Tablet 1 layout · Mobile Web không shrink · verify 1280/768/375.

### T-UI-HIST-01 — History + alert overlay

**skills:** `dev-history-alert-overlay` · `/implement-history`  
**DoD:**
- [ ] `LinCatalogHistoryModal` · stacked khi Modal form mở
- [ ] Xóa/chặn = `useAlert`/`Modal` — **cấm** `window.alert`/`confirm`/`prompt`

---

### T-QA-CRUD-01 — QA scenarios CRUD

**role:** QA · **cấm** TL viết step chi tiết scenario  
**DoD (QA):** Create→Edit→View→Delete + row menu + config = bảng cột + dirty leave = Modal · **e2eQa ON** → chỉ `/agent-qa*` chạy e2e.

### T-QA-FORM-01 — Form field E2E

**DoD (QA):** từng field required/min/max · submit UI value = request body (`form-field-e2e.md`).

### T-QA-FILTER-01 — Filter V1–V5

**DoD (QA):** V1–V5 + fields 1:1 `*-filter-bar.md` · 🔍 work · fail nếu `ErpListHeaderFilters` / stack / export trên bar.

---

## System design flags

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | required | common-components only |
| SD-LIB-BE | required | CommonLib |
| SD-AUTH | required | master.* codes |
| SD-BFF | required | proxy only |
| SD-SHARE | required | Type A ×4 |
| SD-NO-JSON | required | flat scalars |
| SD-SEARCH | required | list + SearchInput `/search` |
| SD-TREE | required | org-unit only |
| SD-LKP | required | SearchInput 2li |
| SD-TZ | n/a | |
| SD-XCO | n/a | shared |
| SD-HEADER | required | X-Company-Id audit |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature | `master` |
| phase_from / phase_to | team_lead → dev |
| packKind | **master** |
| formType | master · Kind B ×4 · Modal |
| `devSlash` | `/agent-dev` (list/form) · RESP `/dev-web-responsive` |
| routes | **route_a** `/mas/*` confirmed |
| task file | `specs/master/task/master.md` |
| filter contexts | 4× `docs/context/features/*-filter-bar.md` |
| child order | org-unit → road-route → asset-type → partner-unit |
| mode | T-CTX **new** · còn lại **parity_verify** (fix on gap) |
| e2eQa | ON — **cấm** Dev chạy e2e; queued QA |
| Blockers | không |
| Next | `/agent-dev` · **cấm** start Dev trong task TL này (**GAP-PKT-ROLE-01**) |
| Out | **cấm** TL Write MFE product · **cấm** e2e/start:std/build ở TL |

---

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| route_confirm = route_a · source.routes `/mas/*` | ✅ |
| formType pack đủ T-* §2a + T-CTX/T-BFF/T-SEED | ✅ |
| DES-GRID map + tl-grid-task-template + full-flow | ✅ |
| T-UI-FILTER-01 + 4 filter-bar.md | ✅ |
| T-UI-LEAVE-01 · LeaveConfirmModal | ✅ |
| T-UI-FORM Modal 2 cột · T-UI-ACT inventory | ✅ |
| init-data dropdown · SearchInput LKP · tree org | ✅ |
| GAP-P2-LAYOUT-06 DoD live smoke | ✅ |
| ssot.reuse + implement.wire/state | ✅ |
| child parity_verify · hub T-CTX new | ✅ |
| **Không** implement product · **không** e2e/build/start:std | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.28 |
| contentHash | sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-29T06:48:00.000Z |
| versionGate | rechecked |
| taskId | task_2795907c |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.28 versionGate=rechecked contentHash=sha256:2e7c4a265a296e1f7bb4cce472f58a1041fdf4ef1b63d088f80cde5012cb8128 -->
