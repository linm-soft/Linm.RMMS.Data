# Team lead — tasks — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **G** hub + **B** catalog A–D+F+H + **D** Slideout) |
| formType | `list` |
| gap | `edit_page` · GAP-CSDL-ROAD-01 · GAP-QA-HUB-SLUG · GAP-CSDL-HIST-01 · GAP-CSDL-ROUTE-UI (docs) |
| solution_confirm | **approve** (`task_d16cef3e`) |
| design_confirm | **approve** (`task_01f113ac`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/so-ts/csdl-so-sach`** · alt B `/asset/csdl-so-sach` rejected (docs cũ) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-sach/ui/prototype/csdl-so-sach-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_167e4298` |
| saTaskId | `task_d16cef3e` |
| updatedAt | `2026-08-29T11:20:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `tl-route-vn-abbrev-confirm` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`edit_page` · TL)

| Area | Current (prior task `task_45a05a05`) | New (this TL) | Action |
|------|--------------------------------------|---------------|--------|
| Route | `/asset/csdl-so-sach` | **`/so-ts/csdl-so-sach`** | **route_confirm=route_a** |
| formType pack | thiếu FILTER/LEAVE/HIST/CFG/… | **đủ** §2a `form-type-task-pack` | rewrite |
| `roadName` | Text free | SearchInput `road-route` + `?roadName=` | **T-UI-LKP-01** + **T-BE-CRUD-01** delta |
| Hub card | slug risk | title VN API-00 | **T-UI-PROD-01** / hub DoD |
| History | stub | `LinCatalogHistoryModal` · **cấm** invent API | **T-UI-HIST-01** |
| Leave | partial | `LeaveConfirmModal` HARD | **T-UI-LEAVE-01** |
| Filter context | thiếu | `docs/context/features/csdl-so-sach-filter-bar.md` | **T-UI-FILTER-01** |
| Retry | board retry from data_analy | Dev **ssot_rereview** trước Write | `tl-retry-ssot-rereview` |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · BFF proxy · entity + child entries · pageSize 50/100/200/500 · Slideout 2col footer_only · Excel OUT · org DEFER P2 · typed sổ DEFER report · Auth NuGet DEFER.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts/csdl-so-sach`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts/csdl-so-sach` |
| `mfeStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` (Dev điền/verify) |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · controller `CsdlCatalogRecordsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` (apiClient → BFF) |
| API prefix | **`api/v1/asset/csdl-records`** · **cấm** `so-ts` / `infra` / ERP.* |
| catalogKind | `csdl-records` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-sach-filter-bar.md` |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts/csdl-so-sach` | **SELECTED** — live MFE + Design/SA |
| B | `/asset/csdl-so-sach` | rejected — docs cũ |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header catalog |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `csdl-so-sach-filter-bar.md` |
| DES-GRID-C2 | `LinCatalogDataGrid` |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `csdl-records` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` |
| DES-GRID-Z | Slideout · `data-form-cols="2"` · footer_actions_only |
| Hub Kind G | Tab + KPI + cards — **cấm** Thêm mới trên hub title |
| Tree | **n/a** — không left tree |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-00 | GET | `/api/v1/asset/csdl-records/catalog` | Hub KPI + title VN |
| API-01 | GET | `/api/v1/asset/csdl-records` | list · filters + **`roadName`** delta · TZ |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | detail + entries · XCO |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · IdCode |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update · replace entries |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` | SearchInput road-route · **không** Asset |

Permissions: `asset.csdl-records.read|create|update|delete` · Auth wire **DEFER** GAP-CSDL-AUTH-01.

Gates: `tz_list_only` · `xco_get_only` · `share_tenant`.

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only |
| SD-AUTH | **gap** · GAP-CSDL-AUTH-01 DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership |
| SD-NO-JSON | **required** · child `entries[]` · **cấm** parent JSON |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | **done** | — | `/agent-dev` | context sync Asset |
| T-BE-01 | Dev | **done** | — | `/agent-dev` | prior CRUD host |
| T-BE-02 | Dev | **done** | T-BE-01 | `/agent-dev` | migration **đã có** · **none** this turn |
| T-BFF-01 | Dev | **done** | T-BE-01 | `/agent-dev` | proxy only |
| T-PERM-01 | Dev | **done** | T-BE-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-BE-CRUD-01 | Dev | **pending** (delta) | T-BE-01 | `/agent-dev` | verify + optional `?roadName=` AND |
| T-BE-UISCHEMA-01 | Dev | **done** / verify | T-BE-01 | `/agent-dev` | catalogKind `csdl-records` |
| T-BE-INIT-01 | Dev | **n/a P1** | — | — | province/status LOOKUP_STATIC keep · **cấm** invent init-data |
| T-UI-LIST-01 | Dev | **pending** (retry audit) | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` + LAYOUT-06 |
| T-UI-FILTER-01 | Dev | **pending** | T-BE-CRUD-01 | `/agent-dev` | load filter-bar.md **trước Write** |
| T-UI-CFG-01 | Dev | **pending** / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | **pending** (delta) | T-UI-LIST-01 | `/agent-dev` | Slideout 2col · roadName SearchInput |
| T-UI-LEAVE-01 | Dev | **pending** / verify | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | **done** / verify | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | **pending** | API-LKP-01 | `/agent-dev` | **GAP-CSDL-ROAD-01** |
| T-UI-FIELD-01 | Dev | **pending** / verify | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 |
| T-UI-PROD-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | **GAP-QA-HUB-SLUG** · cấm demo chrome |
| T-UI-UX-01 | Dev | **pending** / verify | T-UI-FORM-01 | `/agent-dev` | constitution · Slideout 2col |
| T-UI-RESP-01 | Dev | **pending** | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | Dev | **pending** | T-UI-LIST-01 | `/agent-dev` | **GAP-CSDL-HIST-01** |
| T-UI-MAP-FORM | — | **n/a** | — | — | packKind=list · map=none |
| T-QA-CRUD-01 | QA | **pending** | T-UI-* delta | `/agent-qa` | + leave Modal · config full cột |
| T-QA-FORM-01 | QA | **pending** | T-UI-FORM-01 | `/agent-qa` | field e2e |
| T-QA-FILTER-01 | QA | **pending** | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + filter-bar.md 1:1 |
| T-QA-TYP-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | label 13 · D14/M16 |
| T-QA-TAB-01 | QA | **pending** | T-UI-UX-01 | `/agent-qa` | tab index |
| T-LIB-01 | — | **n/a** | — | — | Common đã export |

### Retry HARD (`tl-retry-ssot-rereview`)

Dev **bắt buộc** trước mọi Write delta:

```markdown
**retry.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form slideout · LAYOUT-06
  gaps: GAP-CSDL-ROAD-01 · GAP-QA-HUB-SLUG · GAP-CSDL-HIST-01 · (audit others)
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending (retry audit + delta)  
**devSlash:** `/agent-dev`  
**layer:** ui  
**from_design:** Kind G hub + Kind B A–D+F+H · `shared_grid_example=v1`  
**from_solution:** API-00/01 · FormMode list/hub  

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height · tl-retry-ssot-rereview
  - design_zones: DES-GRID-A,B,C0,C1,C2,C2a,C3,D,F,H,Z
  - /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context** · **T-UI-FILTER-01**
  - /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
  - /implement-catalog-ui-schema-registry (verify) · form_pair → T-UI-FORM
  - demo-to-real-enduser · list-form-quality-gates

**ssot.reuse:**
  design_zones: DES-GRID-A,B,C0,C1,C2,C2a,C3,D,F,H,Z
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_hub: Kind G Tab CSDL(12)/Sổ(8) · KPI · cards · **title VN** (GAP-QA-HUB-SLUG) · **cấm** Thêm mới trên hub title · **cấm** slug `c.key` meta
  ui_filter: LinErpListFilterBar · **T-UI-FILTER-01** · `csdl-so-sach-filter-bar.md` — cấm ErpListHeaderFilters / LinListFilterField / nút Tìm
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create) · fa-cog · Import/Export stub toast
  ui_grid: LinCatalogDataGrid · kéo cột default ON
  ui_footer: LinCatalogListPagination ONLY — 50/100/200/500
  ui_config: LinCatalogUiSchemaEditorModal catalogKind=`csdl-records` — **cấm** LinListTableConfigModal / configHint
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal — **cấm** invent History API · stacked nếu Slideout mở
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  http: apiClient · unwrap — BASE `/asset/csdl-records`
  grid: no local table/pager/clone · resizable default ON

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: title theo resource + titleIconClass + pageId · back hub
  filterBarLayout: erp-filter-bar · **cấm** filterMaxWidthPx hack
  listTitle: theo resource listTitle VN
  footer: LinCatalogListPagination testIdPrefix page pageSize totalCount …
  **DoD LAYOUT-06:** live smoke title+toolbar+filter+grid/empty visible · **cấm** DEFER GAP-P2-LAYOUT-06

**implement.toolbar:** (tl-grid-full-flow §1)
  wire: catalogToolbar trên LinPageLayout
  actions: onRefresh · canAdd/onAdd · canHistory/onHistory · showSchemaConfig+onEditConfig
  selection: showEdit/onEdit · showView/onView · canDelete/onDelete
  form_pair: onAdd→Create · onEdit/onView→FormMode · cùng T-UI-FORM Slideout
  cấm: thiếu Create/Refresh/Config · History invent API · icon lệch erp-control-icon-map

**implement.grid:**
  component: LinCatalogDataGrid
  columns: buildDynamicGridColumns(schema) — STT · □ · Mã · Đường · Tỉnh · Lý trình · TT · ĐV QL · Chi tiết · ⋯
  resizable: DEFAULT true
  selection: useErpListSelection
  empty: empty state VN · **cấm** fake row / demo-json

**implement.grid_menu:**
  items: view·edit·copy·history·delete (perm)
  history: useCatalogHistoryModal · GAP-CSDL-HIST-01

**implement.config:**
  mode: ui-schema · kind=`csdl-records`
  editor: LinCatalogUiSchemaEditorModal full cột
  cấm: Zone F-only · configHint · leftover `const columns`

**implement.grid_flow:**
  hook: useLinCatalogColumnFilterSort
  source: filter/sort FULL list rồi page
  paginate: server · footer LinCatalogListPagination

**implement.list_parity:**
  pilot_ux: DoiTuongPage behavior · wire common only
  layout: flex-root + GAP-P2-LAYOUT-06 live smoke
  filter: per T-UI-FILTER-01 · **không** «SearchTextInput only»
  loading: useServerPagedListLoading + CatalogTableSkeleton
  footer: LinCatalogListPagination common ONLY
  perm: asset.csdl-records.* + VITE_PERMISSIONS_LOCAL_MODE

**implement.wire:**
  hub: GET catalog → KPI/cards title VN
  list: GET `?resource=&search=&province=&status=&fromDate=&toDate=&roadName=&page=&pageSize=`
  deep-link: `?resource=&form=&id=` open Slideout

**implement.state:**
  listFilters · resource · pageSize · selection → toolbar

**DoD:**
- [ ] Hub Kind G + List Kind B 1 shell · grid visible khi API có data
- [ ] Toolbar FULL · Grid menu · Config full cột · Grid flow
- [ ] Footer LinCatalogListPagination 50/100/200/500
- [ ] LAYOUT-06 live PASS
- [ ] Hub card meta = title VN (**GAP-QA-HUB-SLUG**)
- [ ] `rg` anti-clone PASS · **yarn build chỉ Dev**

**Fail:** GAP-TL-GRID-TASK-01 · GAP-TL-GRID-FLOW-01 · GAP-P2-LAYOUT-06 · GAP-QA-HUB-SLUG · GAP-DEV-DUP-GRID

---

### T-UI-FILTER-01 — List filter bar

**status:** pending  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - /filter-bar-context · /erp-filter-form · filter-bar-layout-hard
  - context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-sach-filter-bar.md`
  - /filter-dates-context (fromDate/toDate · TZ list_only)

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · data-lin-list-layout="erp-filter-bar"
  ui_layout: title trái · mọi input + 🔍 cụm phải · wrap từng field
  init_data: province/status LOOKUP_STATIC P1 (PO keep) · roadName SearchInput Integration
  http: query keys §1 filter-bar.md = SA API-01

**implement.filter:**
  bar: LinErpListFilterBar · onSearch trên bar (🔍)
  leading fragment: search · province · status · fromDate · toDate · roadName(SearchInput road-route)
  date: empty = tất cả · cấm default Hôm nay · FE local→UTC bound
  cấm: ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · export/print trên bar · Text free roadName

**DoD:**
- [ ] Context file fields 1:1
- [ ] V1–V5 `filter-bar-layout-hard` PASS trên mfeStdUrl
- [ ] Search/filter + `roadName` query work
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField trên page

**Fail:** GAP-TL-FILTER-01 · GAP-CSDL-ROAD-01 · GAP-FILTER-BAR-*

---

### T-UI-CFG-01 — Config full cột

**status:** pending / verify  
**devSlash:** `/agent-dev`  
**DoD:** Sửa config = `LinCatalogUiSchemaEditorModal` bảng cột List/width/filter/sort · **cấm** Zone F-only / `configHint` (**GAP-P2-CC-06**)

---

### T-UI-FORM-01 — Create/Edit/View/Copy Slideout

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**layer:** ui  
**from_design:** Kind D · `formSurface: slideout` · `data-form-cols="2"` · footer_actions_only  
**skills:** /agent-dev · /erp-form-context · slideout-form-layout · form-field-grid (2col slideout) · dev-form-review-checklist · /implement-show-leave-confirm

**ssot.reuse:**
  ui_form: Slideout Z1–Z3 · footer Hủy/Lưu (view: Đóng/Sửa/Copy) · **cấm** top Quay lại/Hủy/Lưu
  ui_leave: LeaveConfirmModal (T-UI-LEAVE-01)
  controls: roadName SearchInput road-route · province/status/side Dropdown LOOKUP_STATIC · entries inline_grid (sổ)
  http: API-02/03/04 · IdCode readonly

**implement.form:**
  modes: create · edit · view(readOnly **không** disabled xám) · copy(clear id/code → POST)
  required: roadName · province · kmFrom · status · detailPrimary
  book: bookNo · contractor · entries[] Col1–3+note · typed DEFER
  org units: Text slim P1 · SearchInput org **DEFER P2** (GAP-CSDL-ORG-01)
  cấm: invent History path · parent JSON · ERP.*

**review.form:** dev-form-review-checklist PASS · slideout footer only

**DoD:**
- [ ] C/E/V/Copy work · View readOnly
- [ ] roadName SearchInput (**GAP-CSDL-ROAD-01**)
- [ ] footer_actions_only · 2 cột

---

### T-UI-LEAVE-01 — Dirty leave

**status:** pending / verify  
**devSlash:** `/agent-dev`  
**skills:** /implement-show-leave-confirm  
**DoD:** dirty → `LeaveConfirmModal` · slideout `useLeaveConfirm` · **cấm** `window.confirm`/`alert` · **GAP-P2-36** / **GAP-DEV-LEAVE-01** / **GAP-TL-LEAVE-01**

---

### T-UI-ACT-01 — Action inventory

**status:** done / verify  
**devSlash:** `/agent-dev`

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search / filters | S-LIST filter | applyFilters · page=1 | GET API-01 |
| Refresh | toolbar | reloadAll | GET API-01 |
| +Tạo | toolbar | openCreate | POST API-03 |
| Edit / View / Delete | toolbar+row | openRow / deleteRow | GET/PUT/DELETE |
| History | toolbar+row | useCatalogHistoryModal | **cấm** invent · GAP-CSDL-HIST-01 |
| Config | toolbar | LinCatalogUiSchemaEditorModal | ui-schema |
| Copy | row | clear id → POST | GET+POST |
| Hub open-resource | Kind G | openResource | GET API-00 |
| Deep-link | URL | `?resource=&form=&id=` | GET when id |
| Import/Export | toolbar | stub toast | OUT GAP-CSDL-XLS-01 |
| Map / Biểu1 | navigate only | pavement-section / gis | **cấm** map canvas |

---

### T-UI-LKP-01 — Lookup master

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `roadName` filter+form = SearchInput `road-route` → API-LKP-01 · bind label → scalar `roadName` · **cấm** free Text khi master READY · **GAP-CSDL-ROAD-01** / **GAP-LIST-LKP-01**

---

### T-UI-FIELD-01 — Field type + DTO

**status:** pending / verify  
**devSlash:** `/agent-dev`  
**DoD:** controlHint Design/DA 1:1 · DTO/API SA field map · **GAP-LIST-FIELD-01**

---

### T-UI-PROD-01 — End-user chrome

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** **cấm** Dev note / demo chrome · hub title VN (**GAP-QA-HUB-SLUG**) · `demo-to-real-enduser`

---

### T-UI-UX-01 — UI-Ux constitution

**status:** pending / verify  
**devSlash:** `/agent-dev`  
**DoD:** contitusion/UI-Ux · Slideout **2 cột** · typography label 13 · input D14/M16 · **GAP-DEV-UX-01** / **GAP-TYP-01**

---

### T-UI-RESP-01 — Responsive

**status:** pending  
**devSlash:** `/dev-web-responsive` (+ `/dev-ui-review`)  
**DoD:** Desktop+Tablet 1 layout · Mobile Web **không** shrink · verify 1280/768/375

---

### T-UI-HIST-01 — History + alert overlay

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** dev-history-alert-overlay · /implement-history  
**DoD:** `LinCatalogHistoryModal` + `useCatalogHistoryModal` · **cấm** `window.alert`/`confirm`/`prompt` · overlay `stacked` khi Slideout mở · **cấm** invent History API path · **GAP-CSDL-HIST-01** / **GAP-DEV-HIST-*** / **GAP-DEV-ALERT-01** / **GAP-DEV-OVERLAY-Z-01**

---

### T-BE-CRUD-01 — API CRUD + delta filter

**status:** pending (delta)  
**layer:** api  
**devSlash:** `/agent-dev`  
**from_solution:** API-00…05 · optional `roadName` on API-01 · **không** migration mới  

**ssot.reuse:**
  be: CsdlCatalogRecordsController · CsdlCatalogService · CommonLib
  persist: CsdlCatalogRecordEntity + CsdlBookEntryEntity · **cấm** parent JSON
  gates: tz_list_only · xco_get_only · share_tenant

**implement.wire:**
  API-01: accept optional `roadName` AND contains trên cột existing
  TZ: fromDate/toDate → CatalogUpdatedAtRange UTC
  XCO: GET by id AllowedCompanyIds
  **cấm** invent `api/v1/so-ts/*` · ERP.* · Schema_* mới

**DoD:**
- [ ] API-00…05 verify live
- [ ] `?roadName=` optional work (**GAP-CSDL-ROAD-01** BE)
- [ ] no-parent-json · migration **none**

---

### T-BE-UISCHEMA-01 — UI schema registry

**status:** done / verify  
**DoD:** CatalogUiSchemaRegistry + seed `csdl-records` · GET/PUT `/integration/catalogs/{kind}/ui-schema`

---

### T-PERM-01 — Permissions

**status:** done  
**DoD:** FE gate + BE codes `asset.csdl-records.*` · Auth NuGet mount **DEFER** GAP-CSDL-AUTH-01

---

### T-QA-CRUD-01 / T-QA-FORM-01 / T-QA-FILTER-01

**status:** pending  
**devSlash:** `/agent-qa`  
**DoD:**
- T-QA-CRUD-01: Create→Edit→View→Delete + row menu + config full cột + dirty leave Modal
- T-QA-FORM-01: từng field required/min/max · UI value = body
- T-QA-FILTER-01: V1–V5 + fields 1:1 `csdl-so-sach-filter-bar.md` · 🔍 work · fail ErpListHeaderFilters / export trên bar  
**e2eQa ON** → chỉ QA chạy e2e/runtime — **cấm** TL/Dev

---

## Out of pack / DEFER

| ID | Note |
|----|------|
| GAP-CSDL-XLS-01 | Excel OUT |
| GAP-CSDL-ORG-01 | org SearchInput P2 |
| GAP-RPT-SRC-CSDL-01 | typed sổ → report pack |
| GAP-CSDL-AUTH-01 | Auth NuGet DEFER |
| Map canvas | **cấm** |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| next role | `dev` · `/agent-dev` |
| write | `specs/csdl-so-sach/implement/csdl-so-sach.md` |
| focus | delta ROAD · HUB-SLUG · HIST · FILTER · LEAVE · ssot_rereview |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| API | **`api/v1/asset/csdl-records`** · **cấm** invent so-ts API |
| e2e | **cấm** ở Dev nếu không phải QA role — e2eQa queued QA |
| migration | **none** |

---

## DoR checklist (TL PASS)

| Check | Pass |
|-------|------|
| route_confirm locked `/so-ts/csdl-so-sach` | ✅ autoApprove route_a |
| formType pack đủ T-* §2a + devSlash | ✅ |
| DES-GRID map + tl-grid-task-template paste | ✅ |
| T-UI-FILTER-01 + filter-bar.md | ✅ |
| T-UI-LEAVE-01 · T-UI-HIST-01 · T-UI-LKP-01 | ✅ |
| LAYOUT-06 DoD | ✅ |
| retry ssot_rereview trên Dev | ✅ |
| **Cấm** product code / e2e / Step 4b | ✅ |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| generatedAt | 2026-08-29T11:20:00.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | edit_page |
| contentHashPriorDataAnaly | sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad |
| analyTaskId | task_21f924bd |
| poTaskId | task_1a6a0841 |
| designTaskId | task_01f113ac |
| saTaskId | task_d16cef3e |
| taskId | task_167e4298 |
| route_confirm | route_a |
| orchestratorSkillVersion | 2026.08.29.03 |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=ok taskId=task_167e4298 route_confirm=route_a -->
