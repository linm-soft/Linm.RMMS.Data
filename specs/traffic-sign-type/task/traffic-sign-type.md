# Team lead — tasks — traffic-sign-type

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| title | Loại biển báo (mã QCVN 41) |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** (pipeline; live Master+Integration scaffold — Dev **verify/align** · **cấm** invent API) |
| packKind | **`master`** (Kind **B** flat · Slideout · formType=`master`) |
| formType | `master` |
| catalogKind | `traffic-sign-type` |
| demo | **N/A** (`master-catalog-no-demo`) |
| solution_confirm | **approve** (`task_f9f8d4ee`) |
| design_confirm | **approve** (`task_5c6a5cc1`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/mas/loai-bien-bao`** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/traffic-sign-type/ui/prototype/traffic-sign-type-list-prototype.html` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| prior · data_analy | **confirmed** · control-hint + real-data |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_5319edc4` |
| saTaskId | `task_f9f8d4ee` |
| updatedAt | `2026-09-06T03:05:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-catalog-list-parity` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `slideout-form-layout` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` · `master-catalog-no-demo` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent API/pict/mã · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · live scaffold)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/mas/loai-bien-bao` | **giữ** | **route_confirm=route_a** |
| Domain | Integration | DOMAIN-MAP slug `traffic-sign-type` | **T-CTX-01** verify |
| Form | Slideout live | Slideout `data-form-cols=2` · `footer_actions_only` | **T-UI-FORM-01** · **GAP-TST-FORM-01 closed** |
| Filter | search ± group | `LinErpListFilterBar` · search + groupCode Dropdown | **T-UI-FILTER-01** · filter-bar.md |
| Grid | Kind B | `LinCatalogDataGrid` + ui-schema full | **T-UI-LIST-01** · **T-UI-CFG-01** |
| code | lock edit | create-only · keep case | **T-UI-FORM-01** · **T-BE-CRUD-01** |
| icon | NULL ok | **cấm** invent pict | **T-SEED-01** · **GAP-TST-ICON-01** |
| Seed | gov-vn CSV/Excel | **cấm** invent mã | **T-SEED-01** · **GAP-TST-SEED-01** |
| History | stub | DEFER toast/Modal · **cấm** invent API | **T-UI-HIST-01** |
| Leave | — | `LeaveConfirmModal` | **T-UI-LEAVE-01** |
| Migration | Schema đã ship | **none** @ Dev TL | **cấm** Step 4b |

**Không đổi:** API `api/v1/integration/traffic-sign-types` · BFF proxy · entity `TrafficSignTypeEntity` · table `rmms_traffic_sign_types` · FE BASE `/integration/traffic-sign-types` · **cấm ERP.***

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | **`/mas/loai-bien-bao`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/mas/loai-bien-bao` |
| `mfeStdUrl` | `http://localhost:9318/mas/loai-bien-bao` |
| `peerStdUrl` | `http://localhost:9318/mas/loai-tai-san` |
| form | Slideout · `?form=` deep-link · **cấm** full-page 5 cột |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** · DOMAIN-MAP `traffic-sign-type` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` · `TrafficSignTypesController` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` · **proxy only** |
| FE BASE | `/integration/traffic-sign-types` (`src/services/trafficSignType/endpoint.ts`) |
| API prefix | **`api/v1/integration/traffic-sign-types`** · **cấm** invent / ERP.* |
| catalogKind | `traffic-sign-type` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/traffic-sign-type-filter-bar.md` |
| Seed | `data-import/so-hieu-bien-bao/` · gov-vn · icon **NULL** |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/mas/loai-bien-bao` | **SELECTED** — live MFE + Design/SA |
| B | `/master/loai-bien-bao` | rejected — lệch live `/mas` |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Loại biển báo» — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` FULL · `fa-cog` config · refresh · history · +Thêm |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `traffic-sign-type-filter-bar.md` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 | (filter bar owns search — **cấm** duplicate `LinListFilterField`) |
| DES-GRID-C2 | **`LinCatalogDataGrid`** + `buildDynamicGridColumns` · kéo cột ON |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | **`LinCatalogListPagination`** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · kind=`traffic-sign-type` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` · **DEFER stub** |
| DES-GRID-T | N/A (flat) |
| DES-GRID-Z | Slideout form Create/Edit/View/Copy |
| DES-FORM-Z1–Z3 | fields 2 cột · footer Lưu/Hủy only · View readOnly |
| DES-LEAVE | `LeaveConfirmModal` |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/integration/traffic-sign-types` | list/search · `search` · `groupCode` · page |
| API-02 | GET | `…/search` | SearchInput consumer (Asset TRAFFIC_SIGN) |
| API-03 | GET | `…/init-data` | `groupCodes` Dropdown |
| API-04 | GET | `…/by-code/{code}` | lookup import/resolve |
| API-05 | GET | `…/{id}` | get by Guid |
| API-06 | POST | `/` | create |
| API-07 | PUT | `…/{id}` | update · **cấm** đổi `code` |
| API-08 | DELETE | `…/{id}` | soft (`IsActive=false`) |
| API-UISCHEMA | GET/PUT | Integration `catalogs/traffic-sign-type/ui-schema` | Zone F |

Permissions: `master.traffic-sign-types.read|create|update|delete` · menu `rmms-master-loai-bien-bao` **ADMIN**.

Gates: `tz_na` · `xco_na` · `share_a`.

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only |
| SD-AUTH | stub · `master.traffic-sign-types.*` |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Integration ownership |
| SD-NO-JSON | n/a (flat entity) |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |
| SD-MIG | **none** — Schema đã ship |

---

## FormType pack — task matrix (`master` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + DOMAIN-MAP · filter-bar.md exists |
| T-BE-CRUD-01 | Dev | pending / verify | — | `/agent-dev` | API-01…08 live · code lock · keep case |
| T-BE-INIT-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | groupCodes init-data · **cấm** KIND_LABEL FE |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `traffic-sign-type` |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | `master.traffic-sign-types.*` |
| T-SEED-01 | Dev | pending / verify | — | `/agent-dev` | gov-vn only · icon NULL · **cấm** invent mã/pict |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-INIT-01 | `/agent-dev` | load filter-bar.md **trước Write** · V1–V10 |
| T-UI-CFG-01 | Dev | pending | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | Slideout 2 cột · footer only · C/E/V/Copy |
| T-UI-LEAVE-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal · **cấm** native dialog |
| T-UI-ACT-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | pending / verify | API-02 | `/agent-dev` | consumer SearchInput catalogKind |
| T-UI-FIELD-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · code/name/nameEn/shape/w/h/icon/isActive |
| T-UI-PROD-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | cấm demo chrome · master no-demo |
| T-UI-UX-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | constitution · **2 cột** Slideout |
| T-UI-RESP-01 | Dev | pending | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 · `/dev-ui-review` |
| T-UI-HIST-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | History Modal stub · **cấm** invent API · cấm alert |
| T-QA-CRUD-01 | QA | pending | T-UI-* | `/agent-qa` | C→E→V→D + leave Modal + config full |
| T-QA-FORM-01 | QA | pending | T-UI-FORM-01 | `/agent-qa` | field e2e · body = UI |
| T-QA-FILTER-01 | QA | pending | T-UI-FILTER-01 | `/agent-qa` | V1–V5+V10 · filter-bar.md 1:1 |
| T-QA-FILTER-02 | QA | pending | T-UI-FILTER-01 | `/agent-qa` | headed D+T+M |
| T-QA-TYP-01 | QA | pending | T-UI-UX-01 | `/agent-qa` | label 13 · D14/M16 |
| T-QA-TAB-01 | QA | pending | T-UI-UX-01 | `/agent-qa` | tab index |
| T-LIB-01 | — | **n/a** | — | — | Common đã export LeaveConfirmModal / grid |

**GAP-TL-FORMTYPE-01:** closed — pack IDs stamped.  
**GAP-TL-FILTER-01:** closed — T-UI-FILTER-01 + T-QA-FILTER-* + filter-bar.md.  
**GAP-TL-LEAVE-01:** closed — T-UI-LEAVE-01.  
**GAP-TL-DEV-ASSIGN-01:** closed — `devSlash=/agent-dev` (+ responsive leaves).

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search / 🔍 | S-LIST filter | `LinErpListFilterBar` commit | API-01 |
| groupCode filter | S-LIST filter | Dropdown → query | API-01 + API-03 |
| Refresh | toolbar | `reloadAll` | API-01 |
| +Thêm | toolbar | `openCreate` → Slideout create | API-06 |
| Edit (toolbar) | toolbar | `openRow(edit)` | API-05 · API-07 |
| View (toolbar) | toolbar | `openRow(view)` | API-05 |
| Delete (toolbar) | toolbar | `deleteRow` + Modal confirm | API-08 |
| History (toolbar) | toolbar | `useCatalogHistoryModal` | DEFER stub |
| Config `fa-cog` | toolbar | `LinCatalogUiSchemaEditorModal` | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same |
| Deep-link `?form=` | URL | create/edit/view/copy | API-05 when id |
| Leave dirty | Slideout | `LeaveConfirmModal` | UI only |
| Consumer SearchInput | Asset TRAFFIC_SIGN | catalogKind=`traffic-sign-type` | API-02 |

**GAP-P2-ACT-\*:** none planned — all toolbar/menu → form/API.

---

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/trafficSignType/endpoint.ts` → apiClient → BFF → API |
| List | **1×** `LinPageLayout` kind=catalog — **cấm** nested `CatalogListShell` |
| Grid | **`LinCatalogDataGrid`** + `buildDynamicGridColumns` · kéo cột default ON |
| Footer | `footer={<LinCatalogListPagination />}` — **cấm** `footerPagination` · **cấm** `pageSizeBar` |
| Loading | `useServerPagedListLoading` · skeleton filter / overlay page |
| Filter | `LinErpListFilterBar` per filter-bar.md — **cấm** `ErpListHeaderFilters` / nút Tìm |
| Toolbar | refresh · history · config `fa-cog` · +Thêm · row edit/view/delete |
| Row menu | `LinCatalogRowActionMenu` · GAP-P2-94 |
| Form | **Slideout** · `data-form-cols="2"` · footer_actions_only · View `readOnly` (**cấm** `disabled` xám) |
| groupCode | Dropdown ← init-data **only** — **cấm** KIND_LABEL FE |
| code | Text · create only · lock edit · keep case |
| icon | Text URL/path · NULL ok · **cấm** invent pict |
| size | width/height catalog ≠ install size on asset |
| FE BASE | `/integration/traffic-sign-types` |
| Perm | `master.traffic-sign-types.*` + local mode |
| Pilot UX | `asset-type` / `RoadRouteListPage` · peer `/mas/loai-tai-san` |
| Shell height | **GAP-P2-LAYOUT-06** live title+toolbar+grid/empty — **cấm** DEFER |

### T-UI-LIST-01 — List page + grid (Kind B)

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity
  - /erp-form-context · /review-grid · /erp-filter-form · /filter-bar-context
  - slideout-form-layout · form_pair → T-UI-FORM · T-UI-ACT
  - /implement-show-leave-confirm · dev-history-alert-overlay

**ssot.reuse:**
  design_zones: DES-GRID-A,B,B-FILTER,C0,C2,C2a,C3,D,F,H,Z · DES-FORM-Z1–Z3 · DES-LEAVE
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root
  ui_filter: LinErpListFilterBar · traffic-sign-type-filter-bar.md
  ui_toolbar: catalogToolbar FULL · fa-cog
  ui_grid: LinCatalogDataGrid
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal · kind=traffic-sign-type
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal (DEFER stub)
  ui_form: Slideout · data-form-cols=2 · footer_actions_only
  ui_leave: LeaveConfirmModal · useLeaveConfirm
  ui_load: useServerPagedListLoading
  http: apiClient
  grid: no local table/pager/clone · resizable default ON

**implement.page_shell:**
  layout: page root flex:1;min-height:0
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  footer: LinCatalogListPagination
  height: GAP-P2-LAYOUT-06 live smoke

**implement.toolbar:** catalogToolbar FULL (refresh·history·config·create·selection)

**implement.grid:**
  component: LinCatalogDataGrid
  columns: buildDynamicGridColumns(schema, uiColumns)
  tableConfig: catalogListTableConfigFromSchema
  resizable: DEFAULT true
  selection: useErpListSelection

**implement.filter:**
  component: LinErpListFilterBar
  fields: search SearchTextInput · groupCode Dropdown ← init-data
  layout: filter-bar-layout-hard V1–V10 · lấp hàng rồi wrap · 🔍 mép phải
  cấm: ErpListHeaderFilters · LinListFilterField · nút Tìm riêng

**implement.form:**
  pattern: Slideout
  cols: data-form-cols="2"
  footer: Lưu/Hủy only — cấm header chrome Lưu
  View: readOnly — cấm disabled xám
  code: lock on edit
  groupCode: Dropdown ← init-data
  icon: NULL ok · cấm invent pict

**implement.list_parity:**
  pilot_ux: asset-type / RoadRouteListPage
  peerStdUrl: http://localhost:9318/mas/loai-tai-san
  layout: flex-root + GAP-P2-LAYOUT-06
  tree: N/A flat
  footer: LinCatalogListPagination
  perm: master.traffic-sign-types.* + local mode

**DoD:**
- [ ] Dev load filter-bar.md + skills **trước Write**
- [ ] 1× LinPageLayout · no nested CatalogListShell
- [ ] LinCatalogDataGrid · no raw `<table>`
- [ ] Footer LinCatalogListPagination · no pageSizeBar
- [ ] Flex + skeleton · toolbar FULL · row menu · perm
- [ ] Filter LinErpListFilterBar V1–V10 · GAP-FILTER-WRAP-02
- [ ] Form Slideout 2 cột · footer only · View readOnly · Dropdown ← init-data
- [ ] LeaveConfirmModal · cấm window.confirm/alert
- [ ] code lock edit · icon NULL · cấm invent pict/mã
- [ ] FormType pack ACT/CRUD/INIT/FILTER/LEAVE stamped
- [ ] yarn typecheck + build · BE API+BFF dotnet build PASS (Dev only)
- [ ] **cấm** e2e/start:std @ Dev unless localRoot QA path — E2E queued `/agent-qa*`

---

## new_page SSOT re-audit (`tl-retry-ssot-rereview`)

| # | Check | Expect |
|---|-------|--------|
| 1 | 1 LinPageLayout · cấm nested CatalogListShell | PASS target |
| 2 | LinCatalogListPagination footer | PASS target |
| 3 | Cấm pageSizeBar in body | PASS target |
| 4 | flex + useServerPagedListLoading | PASS target |
| 5 | Toolbar config fa-cog · history · row actions | PASS target |
| 6 | LinErpListFilterBar (not SearchTextInput-only legacy) | PASS target |
| 7 | LinCatalogDataGrid · kéo cột ON | PASS target |
| 8 | tree_master? | N/A (flat) |
| 9 | Form Slideout 2 cột · View readOnly · Dropdown ← init-data | PASS target |
| 10 | FormType pack ACT/CRUD/INIT/FILTER/LEAVE/QA | PASS (this task) |
| 11 | LeaveConfirmModal | PASS target |
| 12 | ICON/SEED no invent | PASS target |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-06T03:05:00.000Z |
| versionGate | rechecked · prior sa/design/po/data_analy aligned |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |
| route_confirm | route_a |
| changeScope | new_page |
