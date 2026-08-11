# Team lead — tasks — asset-type

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| status | `confirmed` |
| changeScope | `edit_page` (gap=`crud_formtype`) |
| packKind | `master` (Kind B flat + Modal · formType=`master`) |
| solution_confirm | **approve** |
| domain_map | **Integration** |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| retryFrom | `team_lead` |
| task | `task_b7d98891` |
| updatedAt | `2026-08-10T15:35:00.000Z` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/master/asset-type` · Modal form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| Seed | `docs/context/seed/asset-type-seed.json` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset-type/ui/prototype/asset-type-list-prototype.html` |
| mfeStdRoute | `/master/asset-type` |
| mfeStdUrl | `http://localhost:9314/master/asset-type` |

## Design zone map (tl-design-grid-component-map)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header · title «Loại tài sản» · `fa-cubes` |
| DES-GRID-B | `catalogToolbar` FULL · `fa-cog` config |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C1 | `LinListFilterField` + `SearchTextInput` |
| DES-GRID-C2 | **`LinCatalogDataGrid`** + `tableConfig` · dynamic cols |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | **`LinCatalogListPagination`** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · kind=`asset-types` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` |
| DES-GRID-T | N/A (flat) |
| DES-GRID-Z | Modal form Create/Edit/View/Copy |

## FormType pack (canonical — `form-type-task-pack` master)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-UI-LIST-01 | Dev | **done** | `tl-grid-task-template` FULL |
| T-UI-FORM-01 | Dev | **done** | Modal C/E/V/Copy · View readOnly |
| T-UI-ACT-01 | Dev | **done** | Action inventory → form/API (below) |
| T-BE-CRUD-01 | Dev | **done** | list/search + C/U/D + getById (= prior T-BE-01) |
| T-BE-INIT-01 | Dev | **done** | GET `/init-data` groupCodes |
| T-PERM-01 | Dev | **done** | `master.asset-types.*` |
| T-QA-CRUD-01 | QA | **done** | Create→Edit→View→Delete + row menu (= prior T-QA-01) |
| T-CTX-01 | Dev | **done** | context + DOMAIN-MAP |
| T-SEED-01 | Dev | **done** | seed 23 |
| T-BFF-01 | Dev | **done** | BFF proxy |
| T-BE-02 | Dev | **done** | Schema migration |

**GAP-TL-FORMTYPE-01:** closed — pack IDs stamped (task_b7d98891).

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `commitSearch` | GET `/` |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Thêm | toolbar | `openCreate` → Modal create | POST `/` |
| Edit (toolbar) | toolbar | `openRow(edit)` | GET `/{id}` · PUT |
| View (toolbar) | toolbar | `openRow(view)` | GET `/{id}` |
| Delete (toolbar) | toolbar | `deleteRow` | DELETE `/{id}` |
| History (toolbar) | toolbar | `useCatalogHistoryModal` | DEFER stub |
| Config `fa-cog` | toolbar | `LinCatalogUiSchemaEditorModal` | ui-schema |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same as above |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` when id |

**GAP-P2-ACT-\*:** none — all toolbar/menu actions wired.

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/assetType/endpoint.ts` → apiClient → BFF → API |
| List | **1** `LinPageLayout` — **cấm** nested `CatalogListShell` |
| Grid | **`LinCatalogDataGrid`** + `buildDynamicGridColumns` · kéo cột default ON |
| Footer | `footer={<LinCatalogListPagination />}` — **cấm** `footerPagination` · **cấm** `pageSizeBar` |
| Loading | `useServerPagedListLoading` · skeleton filter / overlay page |
| Filter | `LinListFilterField` + `SearchTextInput` only — **cấm** nút Tìm |
| Toolbar | refresh · history · config `fa-cog` · +Thêm · row edit/view/delete |
| Row menu | `LinCatalogRowActionMenu` · GAP-P2-94 |
| Form | Modal · View `readOnly` (**cấm** `disabled` xám) · `/erp-form-context` |
| groupCode | Dropdown ← init-data **only** — **cấm** KIND_LABEL FE |
| FE BASE | `/integration/asset-types` |
| Perm | `master.asset-types.*` + local mode |
| Pilot UX | `RoadRouteListPage` |

## Retry SSOT (HARD — task_b7d98891 · trước close)

Load `tl-retry-ssot-rereview.md` · re-audit code vs RoadRoute parity · skill **2026.08.10.1**.

| # | Check | Live |
|---|-------|------|
| 1 | 1 LinPageLayout · cấm nested CatalogListShell | **PASS** |
| 2 | LinCatalogListPagination footer | **PASS** |
| 3 | Cấm pageSizeBar in body | **PASS** |
| 4 | flex + useServerPagedListLoading | **PASS** |
| 5 | Toolbar config fa-cog · history · row actions | **PASS** |
| 6 | SearchTextInput only | **PASS** |
| 7 | **LinCatalogDataGrid** · kéo cột ON | **PASS** |
| 8 | tree_master? | N/A (flat) |
| 9 | Form View readOnly · Dropdown ← init-data | **PASS** |
| 10 | FormType pack ACT/CRUD/INIT/QA | **PASS** (this task) |

**then:** verify_build PASS · no UI write required

### T-UI-LIST-01 — List page + grid (Kind B)

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity
  - /erp-form-context · /review-grid · /erp-filter-form
  - tl-retry-ssot-rereview · form_pair → T-UI-FORM · T-UI-ACT

**ssot.reuse:**
  design_zones: DES-GRID-A,B,C0,C1,C2,C2a,C3,D,F,H,Z
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root
  ui_filter: LinListFilterField · SearchTextInput
  ui_toolbar: catalogToolbar FULL · fa-cog
  ui_grid: LinCatalogDataGrid
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal
  ui_load: useServerPagedListLoading
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  http: apiClient
  grid: no local table/pager/clone · resizable default ON

**implement.page_shell:**
  layout: page root flex:1;min-height:0
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  footer: LinCatalogListPagination

**implement.toolbar:** catalogToolbar FULL (refresh·history·config·create·selection)

**implement.grid:**
  component: LinCatalogDataGrid
  columns: buildDynamicGridColumns(schema, uiColumns)
  tableConfig: catalogListTableConfigFromSchema
  resizable: DEFAULT true
  selection: useErpListSelection

**implement.grid_menu:** LinCatalogRowActionMenu · view/edit/copy/history/delete

**implement.config:** LinCatalogUiSchemaEditorModal · kind=asset-types

**implement.grid_flow:** useLinCatalogColumnFilterSort · paginateClient=false (server page)

**implement.list_parity:**
  pilot_ux: RoadRouteListPage
  layout: flex-root + GAP-P2-LAYOUT-06
  tree: N/A flat
  filter: SearchTextInput only
  footer: LinCatalogListPagination
  perm: master.asset-types.* + local mode

**DoD:**
- [x] Dev re-review checklist § HARD trước Write
- [x] 1× LinPageLayout · no nested CatalogListShell
- [x] LinCatalogDataGrid · no raw `<table>`
- [x] Footer LinCatalogListPagination · no pageSizeBar
- [x] Flex + skeleton · toolbar FULL · row menu · perm
- [x] Form View readOnly · Dropdown ← init-data
- [x] FormType pack ACT/CRUD/INIT stamped
- [x] yarn typecheck + build · BE API+BFF dotnet build PASS

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.10.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.1 |
| rulesVersion | 2026.08.10.2 |
| generatedAt | 2026-08-10T15:35:00.000Z |
| versionGate | rechecked |
