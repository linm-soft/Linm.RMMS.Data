# Team lead — tasks — so-ts-bus-station

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| formType | `list` |
| typeCode | `BUS_STATION` |
| cluster | `station` · tile `t04` |
| dump | `tbl_bus_station` |
| prefix | `BX-` |
| gap | `new_page` · GAP-SOTS-COL/FORM/REUSE · GAP-BX-NAME/SPEC/POINT/LOOKUP/LEAVE/ROUTE · flatten DEFER P2 |
| solution_confirm | **approve** (`task_25f658f6`) |
| design_confirm | **approve** (`task_99378d09`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — keep live **`/so-ts?type=BUS_STATION`** · alias board `/so-ts-bus-station` optional redirect · alt B primary-alias-only rejected |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html` |
| prior · data_analy | **confirmed** · control-hint + real-data · contentHash `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| prior · po | **confirmed** · `po/requirement.md` |
| prior · design | **confirmed** · `ui/design.md` + prototype |
| prior · sa | **confirmed** · `be/solution-discovery.md` |
| taskId | `task_2182f77f` |
| saTaskId | `task_25f658f6` |
| updatedAt | `2026-09-01T03:50:00.000Z` |
| TL SSOT | `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-dropdown-from-backend` · `tl-route-vn-abbrev-confirm` · `tl-retry-ssot-rereview` · `agent-dev-assign` · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration · ERP.* · invent `api/v1/so-ts/*` · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page` · TL)

| Area | Current (live) | New (Design+SA chốt) | Action |
|------|----------------|----------------------|--------|
| Route | `/so-ts?type=BUS_STATION` | **giữ** · alias `/so-ts-bus-station` optional | **route_confirm=route_a** · **GAP-BX-ROUTE-01** |
| Grid profile | generic / thiếu BUS_STATION | Hide `type`/`kmTo`/qty/unit · **ON+hide-empty**: DT mặt bằng · tuyến VT · DT sàn · cấp nhà · classification OFF default | **T-UI-LIST-01** · **GAP-SOTS-COL-01** |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump §4 · merge dumpSpecs | **T-UI-FORM-01** · **GAP-SOTS-FORM-01** |
| Point `kmTo` | form hiện / bắt buộc | **Ẩn** + không required khi `BUS_STATION` · kmFrom **không** required · **cấm** ép `"0"` | **T-UI-FORM-01** · **GAP-BX-POINT-01** |
| Name | IsWeak / đoạn tuyến risk | `name` ← `name_terminal` · trống OK · **cấm** IsWeak→đoạn | **T-BE-CRUD-01** + form · **GAP-BX-NAME-01** |
| LOOKUP | text dumpSpecs | LOOKUP_STATIC init `busStationWorkTypes[]` · `busStationOwners[]` · `busStationBuildingGrades[]` · `busStationBuildLocations[]` · `busStationClassifications[]` | **T-BE-INIT-01** + **T-UI-FORM-01** · **GAP-BX-LOOKUP-01** |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | **T-UI-LEAVE-01** · **T-UI-HIST-01** · **GAP-BX-LEAVE-01** |
| Filter context | thiếu file | `so-ts-bus-station-filter-bar.md` | **T-UI-FILTER-01** · **T-CTX-01** |
| Form surface | full-page 5 cột | **giữ** `data-form-cols="5"` + header chrome | **T-UI-FORM-01** · **cấm** Slideout/footer Lưu |
| Flatten DB | — | **DEFER P2** | dumpSpecs P1 · migration **none** |
| dumpSpecLabels | thiếu attr keys | đủ dump §4 + type_work/owner/grade/location/classification | **T-UI-FORM-01** · **GAP-BX-SPEC-01** |

**Không đổi:** API prefix `api/v1/asset/road-assets` · BFF proxy · entity `RoadAssetEntity` + DumpSpecs · catalogKind `road-assets` · SearchInput asset-type / road-route / org-unit · pageSize 50/100/200/500 · Kind B shell `/so-ts` · **cấm ERP.*** · map canvas OUT.

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` |
| `source.routes` | **`/so-ts?type=BUS_STATION`** · confirmed `route_confirm=route_a` (autoApprove · live Design/SA) |
| `mfeStdRoute` | `/so-ts?type=BUS_STATION` |
| `mfeStdUrl` | `http://localhost:9301/so-ts?type=BUS_STATION` (Dev điền/verify) · alias `http://localhost:9301/so-ts-bus-station` |
| `peerStdUrl` | `http://localhost:9301/so-ts?type=BUS_STATION` |
| form routes | `/so-ts/tao-moi` · `/so-ts/sua?id=` (type lock `BUS_STATION`) |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| `source.domain` | **Asset** (`asset`) · DOMAIN-MAP · feature inherit `asset` |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `RoadAssetsController` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| API prefix | **`api/v1/asset/road-assets`** · **cấm** `so-ts` / invent path / ERP.* |
| catalogKind | `road-assets` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-station-filter-bar.md` (create T-CTX-01) |
| `devSlash` (default UI) | **`/agent-dev`** · + `/dev-web-responsive` · `/dev-ui-review` · **cấm** OMS/ai-detect/camera (packKind=list · map=none) |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/so-ts?type=BUS_STATION` | **SELECTED** — live MFE + Design/SA |
| B | `/so-ts-bus-station` as primary list URL | rejected — board alias only · optional redirect → A |
| C | custom | n/a |

---

## DES-GRID → Lin* map (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ TS — Bến xe» khi `type=BUS_STATION` — **cấm** Thêm mới trên A |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `so-ts-bus-station-filter-bar.md` |
| DES-GRID-C0 | listTitle «Danh sách bến xe» · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · BUS_STATION column profile |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · catalogKind `road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` |
| Tree | **n/a** — không left tree |

---

## API contract (cite SA)

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-01 | GET | `/api/v1/asset/road-assets` | list · `?type=BUS_STATION` + filters |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | detail · XCO get_only |
| API-03 | POST | `/api/v1/asset/road-assets` | create · dumpSpecs merge · **không** required `kmTo` |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update · dumpSpecs merge |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | soft |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | statuses · sources · **`busStationWorkTypes[]`** · **`busStationOwners[]`** · **`busStationBuildingGrades[]`** · **`busStationBuildLocations[]`** · **`busStationClassifications[]`** delta |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | peer tile t04 · out of write pack |
| API-LKP-01 | GET | Integration `asset-types` | filter type · form lock |
| API-LKP-02 | GET | Integration `road-routes/search` | filter + form route |
| API-LKP-03 | GET | Integration `org-units/search` | filter org tree |
| API-UISCHEMA | GET/PUT | Integration `catalogs/road-assets/ui-schema` | Zone F |

Permissions: `asset.road-assets.read|create|update|delete` · FE `rmms-asset:road-assets:read|write` — Auth align **DEFER**.

Gates: `tz_na` · `xco_get_only` · `share_tenant`.

---

## System design checklist

| ID | Value |
|----|-------|
| SD-JOB | n/a |
| SD-BFF | **required** · proxy only |
| SD-AUTH | **gap** · DEFER |
| SD-TOKEN | required (BFF) |
| SD-HEADER | required · X-Company-Id |
| SD-SPLIT | Asset ownership |
| SD-NO-JSON | **required** · dumpSpecs attr bag only · **cấm** invent parent line JSON / BusStationJson |
| SD-LIB-UI | Common.Components only |
| SD-LIB-BE | CommonLib envelope |

---

## FormType pack — task matrix (`list` · §2a)

| Task id | Role | Status | deps | `devSlash` | Notes |
|---------|------|--------|------|------------|-------|
| T-CTX-01 | Dev | pending | — | `/agent-dev` | sync context + filter-bar.md · parent so-ts-type-grid |
| T-BE-CRUD-01 | Dev | pending (delta) | — | `/agent-dev` | verify API-01…05 · **GAP-BX-NAME/SPEC** import + rebuild |
| T-BE-INIT-01 | Dev | pending (delta) | T-BE-CRUD-01 | `/agent-dev` | **GAP-BX-LOOKUP-01** busStationWorkTypes + Owners + BuildingGrades + BuildLocations + Classifications |
| T-BE-UISCHEMA-01 | Dev | pending / verify | — | `/agent-dev` | catalogKind `road-assets` · type-profile hide-empty |
| T-BFF-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | proxy only · **cấm** business logic |
| T-PERM-01 | Dev | pending / verify | T-BE-CRUD-01 | `/agent-dev` | codes stub · Auth DEFER |
| T-UI-LIST-01 | Dev | pending | T-BFF-01 | `/agent-dev` | full `tl-grid-task-template` · **GAP-SOTS-COL-01** · LAYOUT-06 |
| T-UI-FILTER-01 | Dev | pending | T-BE-CRUD-01 | `/agent-dev` | load filter-bar.md **trước Write** |
| T-UI-CFG-01 | Dev | pending / verify | T-BE-UISCHEMA-01 | `/agent-dev` | full cột editor · **cấm** Zone F-only |
| T-UI-FORM-01 | Dev | pending (delta) | T-UI-LIST-01 · T-BE-INIT-01 | `/agent-dev` | full-page 5 cột · S-ATTR · **GAP-SOTS-FORM/POINT/REUSE** |
| T-UI-LEAVE-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | LeaveConfirmModal · **GAP-BX-LEAVE-01** |
| T-UI-ACT-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | inventory below |
| T-UI-LKP-01 | Dev | pending / verify | API-LKP-* | `/agent-dev` | asset-type · road-route · org-unit SearchInput |
| T-UI-FIELD-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | controlHint 1:1 · dumpSpecs keys |
| T-UI-PROD-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | cấm demo chrome |
| T-UI-UX-01 | Dev | pending | T-UI-FORM-01 | `/agent-dev` | constitution · **5 cột** full-page |
| T-UI-RESP-01 | Dev | pending | T-UI-LIST-01 | `/dev-web-responsive` | 1280/768/375 |
| T-UI-HIST-01 | Dev | pending | T-UI-LIST-01 | `/agent-dev` | History Modal · **cấm** invent API · cấm alert |
| T-UI-MAP-FORM | — | **n/a** | — | — | packKind=list · map=none |
| T-QA-CRUD-01 | QA | pending | T-UI-* | `/agent-qa` | C→E→V→D + leave Modal + config full |
| T-QA-FORM-01 | QA | pending | T-UI-FORM-01 | `/agent-qa` | field e2e · body = UI |
| T-QA-FILTER-01 | QA | pending | T-UI-FILTER-01 | `/agent-qa` | V1–V5 + filter-bar.md 1:1 |
| T-QA-FILTER-02 | QA | pending | T-UI-FILTER-01 | `/agent-qa` | headed D+T+M |
| T-QA-TYP-01 | QA | pending | T-UI-UX-01 | `/agent-qa` | label 13 · D14/M16 |
| T-QA-TAB-01 | QA | pending | T-UI-UX-01 | `/agent-qa` | tab index |
| T-LIB-01 | — | **n/a** | — | — | Common đã export LeaveConfirmModal / grid |

### new_page SSOT re-audit (`tl-retry-ssot-rereview`)

Board data_analy **closed** · hash skip. Dev **vẫn** audit delta surfaces trước Write:

```markdown
**new_page.ssot_rereview:** pending → pass|fail
  checklist: tl-grid-ssot · list_parity · filter-bar V1–V5 · form full 5col · LAYOUT-06 · leave Modal
  gaps: GAP-SOTS-COL/FORM/REUSE · GAP-BX-NAME/SPEC/POINT/LOOKUP/LEAVE
  then: fix_all
```

**Cấm** chỉ patch 1 chỗ nếu audit còn GAP cùng surface (**GAP-DEV-RETRY-SKIP-01**).

---

### T-CTX-01 — Context sync

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** `docs/context/features/so-ts-bus-station.md` + parent `so-ts-type-grid.md` · filter-bar context tồn tại · lane web → `dev` · **cấm** re-scan demo

---

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**devSlash:** `/agent-dev`  
**layer:** ui  
**from_design:** Kind B A–D+F+H · `shared_grid_example=v1` · type profile `BUS_STATION`  
**from_solution:** API-01 · FormMode list  

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height · tl-retry-ssot-rereview
  - design_zones: DES-GRID-A,B,B-FILTER,C0,C2,C2a,C3,D,F,H
  - /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context** · **T-UI-FILTER-01**
  - /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
  - /implement-catalog-ui-schema-registry (verify) · form_pair → T-UI-FORM
  - demo-to-real-enduser · list-form-quality-gates

**ssot.reuse:**
  design_zones: DES-GRID-A,B,B-FILTER,C0,C2,C2a,C3,D,F,H
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_filter: LinErpListFilterBar · **T-UI-FILTER-01** · `so-ts-bus-station-filter-bar.md` — cấm ErpListHeaderFilters / LinListFilterField / nút Tìm
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create) · fa-cog
  ui_grid: LinCatalogDataGrid · kéo cột default ON · **BUS_STATION profile** hide type/kmTo/qty/unit · show type_work_id · owner_id · site_area_using_land · main_transportation_route · total_area_floors · building_grade_id (**GAP-SOTS-COL-01**)
  ui_footer: LinCatalogListPagination ONLY — 50/100/200/500
  ui_config: LinCatalogUiSchemaEditorModal catalogKind=`road-assets` — **cấm** LinListTableConfigModal / configHint
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal — **cấm** invent History API
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  http: apiClient · unwrap — BASE `/asset/road-assets`
  grid: no local table/pager/clone · resizable default ON

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: title «Sổ TS — Bến xe» khi type=BUS_STATION · titleIconClass + pageId
  filterBarLayout: erp-filter-bar · **cấm** filterMaxWidthPx hack
  listTitle: «Danh sách bến xe»
  footer: LinCatalogListPagination testIdPrefix page pageSize totalCount …
  **DoD LAYOUT-06:** live smoke title+toolbar+filter+grid/empty visible · **cấm** DEFER GAP-P2-LAYOUT-06

**implement.toolbar:** (tl-grid-full-flow §1)
  wire: catalogToolbar trên LinPageLayout
  actions: onRefresh · canAdd/onAdd · canHistory/onHistory · showSchemaConfig+onEditConfig
  selection: showEdit/onEdit · showView/onView · canDelete/onDelete
  form_pair: onAdd→`/so-ts/tao-moi` · onEdit/onView→`/so-ts/sua?id=` · type lock BUS_STATION
  cấm: thiếu Create/Refresh/Config · History invent API · icon lệch erp-control-icon-map

**implement.grid:**
  component: LinCatalogDataGrid
  columns: buildDynamicGridColumns(schema) + type-profile BUS_STATION
  visible ON: name · route · routeNamed · routeSegment · kmFrom · type_work_id · owner_id · site_area_using_land · main_transportation_route · total_area_floors · building_grade_id · (status/gps optional)
  visible OFF default: type · kmTo · quantity · unitCode · classification
  hide-empty ON: site_area_using_land · main_transportation_route · total_area_floors · building_grade_id
  dumpSpecs: parse bus_station §4 keys · labels via dumpSpecLabels (**GAP-BX-SPEC-01**)
  resizable: DEFAULT true
  selection: useErpListSelection
  empty: empty state VN · **cấm** fake row / demo-json

**implement.grid_menu:**
  items: view·edit·copy·history·delete (perm)
  history: useCatalogHistoryModal

**implement.config:**
  mode: ui-schema · kind=`road-assets`
  editor: LinCatalogUiSchemaEditorModal full cột
  cấm: Zone F-only · configHint · leftover `const columns`

**implement.grid_flow:**
  hook: useLinCatalogColumnFilterSort
  source: filter/sort FULL list rồi page
  paginate: server · footer LinCatalogListPagination

**implement.list_parity:**
  pilot_ux: DoiTuongPage / AssetListPage behavior · wire common only · **cấm** fork 32 files
  layout: flex-root + GAP-P2-LAYOUT-06 live smoke
  filter: per T-UI-FILTER-01 · **không** «SearchTextInput only»
  loading: useServerPagedListLoading + CatalogTableSkeleton
  footer: LinCatalogListPagination common ONLY
  perm: asset.road-assets.* + VITE_PERMISSIONS_LOCAL_MODE

**implement.wire:**
  list: GET `?type=BUS_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`
  alias: optional `/so-ts-bus-station` → `/so-ts?type=BUS_STATION` (**GAP-BX-ROUTE-01**)

**implement.test:**
  listFilters · type lock · pageSize · selection → toolbar · column profile BUS_STATION

**DoD:**
- [ ] Kind B 1 shell · grid visible khi API có data · profile BUS_STATION (**GAP-SOTS-COL-01**)
- [ ] Toolbar FULL · Grid menu · Config full cột · Grid flow
- [ ] Footer LinCatalogListPagination 50/100/200/500
- [ ] LAYOUT-06 live PASS
- [ ] `rg` anti-clone PASS · **yarn build chỉ Dev**

**Fail:** GAP-TL-GRID-TASK-01 · GAP-TL-GRID-FLOW-01 · GAP-P2-LAYOUT-06 · GAP-SOTS-COL-01 · GAP-DEV-DUP-GRID

---

### T-UI-FILTER-01 — List filter bar

**status:** pending  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
  - /filter-bar-context · /erp-filter-form · filter-bar-layout-hard
  - context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-station-filter-bar.md`

**ssot.reuse:**
  ui_filter: LinErpListFilterBar · fragment leading · data-lin-list-layout="erp-filter-bar"
  ui_layout: title trái · mọi input + 🔍 cụm phải · wrap từng field
  lookups: SearchInput asset-type / road-route / org-unit · **cấm** free-text
  http: query keys §1 filter-bar.md = SA API-01
  tz: **không** mount fromDate/toDate (`tz_na`)

**implement.filter:**
  bar: LinErpListFilterBar · onSearch trên bar (🔍)
  leading: search · type(ẩn deep-link) · route · kmFrom · kmTo · orgUnit
  type lock: luôn `BUS_STATION` trên deep-link
  cấm: ErpListHeaderFilters · LinListFilterField · filterMaxWidthPx · export/print trên bar · date fields

**DoD:**
- [ ] Context file fields 1:1
- [ ] V1–V5 `filter-bar-layout-hard` PASS trên mfeStdUrl
- [ ] Search/filter query work · page=1 on change
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField trên page

**Fail:** GAP-TL-FILTER-01 · GAP-FILTER-BAR-*

---

### T-UI-CFG-01 — Config full cột

**status:** pending / verify  
**devSlash:** `/agent-dev`  
**DoD:** Sửa config = `LinCatalogUiSchemaEditorModal` bảng cột List/width/filter/sort · catalogKind `road-assets` · **cấm** Zone F-only / `configHint` (**GAP-P2-CC-06**)

---

### T-UI-FORM-01 — Create/Edit/View/Copy full-page

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**layer:** ui  
**from_design:** Kind B · `formSurface: full` · `data-form-cols="5"` · header chrome · **cấm** Slideout/Modal hồ sơ  
**skills:** /agent-dev · /erp-form-context · form-field-grid (5col full) · form-full-page-prototype · dev-form-review-checklist · /implement-show-leave-confirm · list-form-quality-gates

**ssot.reuse:**
  ui_form: `AssetFormPage` reuse S-* — **cấm** fork (**GAP-SOTS-REUSE-01**)
  ui_grid: `data-form-cols="5"` · header Quay lại/Hủy/Lưu — **cấm** footer Lưu (**GAP-P2-FORM-GRID-05**)
  ui_leave: LeaveConfirmModal (T-UI-LEAVE-01)
  controls: SearchInput type/route · Dropdown status/source/busStationWorkTypes/busStationOwners/busStationBuildingGrades/busStationBuildLocations/busStationClassifications · Text/Number dump §4 · Text name_terminal
  http: API-02/03/04 · IdCode readonly prefix `BX-` · init-data API-06

**implement.form:**
  modes: create · edit · view(readOnly **không** disabled xám) · copy(clear id/code → POST · keep BUS_STATION)
  sections: S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS
  required: type · status · route · type_work_id — name trống OK · kmFrom **không** required · **không** required `kmTo` (**GAP-BX-POINT-01**)
  S-ATTR: type_work_id Dropdown * · owner_id Dropdown · site_area_using_land Number · main_transportation_route Text · total_area_floors Number · building_grade_id Dropdown · build_location Dropdown L/R/C · classification Dropdown · merge dumpSpecs (**GAP-SOTS-FORM-01** · **GAP-BX-LOOKUP-01** · **GAP-BX-SPEC-01**)
  S-NAME: `name` ← `name_terminal` · trống OK · mirror dumpSpecs (**GAP-BX-NAME-01**)
  kmFrom: **cấm** ép `"0"` khi dump null (**GAP-BX-SPEC-01** · **GAP-BX-POINT-01**)
  **Không mount:** kmTo · quantity/unit · S-LOC-RANGE · tab Chi tiết/Bảo trì/Tệp/Lịch sử legacy
  cấm: invent History path · flatten Schema_* · ERP.* · Modal form

**implement.init_data:**
  options: GET `/asset/road-assets/init-data` only — statuses · sources · **busStationWorkTypes** · **busStationOwners** · **busStationBuildingGrades** · **busStationBuildLocations** · **busStationClassifications** · **cấm** KIND_LABEL hardcode (**GAP-DEV-DROPDOWN-HARDCODE-01**)

**review.form:** dev-form-review-checklist PASS · full-page 5 cột + header chrome

**DoD:**
- [ ] C/E/V/Copy work · View readOnly
- [ ] 5 cột · header chrome · **cấm** footer Lưu
- [ ] S-ATTR editable · dumpSpecs merge
- [ ] kmTo ẩn · bus-station LOOKUP Dropdown từ init-data
- [ ] reuse AssetFormPage S-* — **cấm** fork

**Fail:** GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-BX-POINT-01 · GAP-BX-LOOKUP-01 · GAP-P2-FORM-GRID-05 · GAP-LIST-FIELD-01

---

### T-UI-LEAVE-01 — Dirty leave

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** /implement-show-leave-confirm  
**DoD:** dirty → `LeaveConfirmModal` · full `useFormLeaveGuard` · **cấm** `window.confirm`/`alert` · **GAP-BX-LEAVE-01** / **GAP-P2-36** / **GAP-DEV-LEAVE-01** / **GAP-TL-LEAVE-01**

---

### T-UI-ACT-01 — Action inventory

**status:** pending  
**devSlash:** `/agent-dev`

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search / filters | S-LIST filter | applyFilters · page=1 | GET API-01 |
| Refresh | toolbar | reload list | GET API-01 |
| +Tạo mới | toolbar | navigate `/so-ts/tao-moi` type=BUS_STATION | POST API-03 |
| Edit / View / Delete | toolbar+row | navigate sua / Modal delete | GET/PUT/DELETE |
| History | toolbar+row | useCatalogHistoryModal | **cấm** invent |
| Config | toolbar | LinCatalogUiSchemaEditorModal | ui-schema |
| Copy | row | create prefill clear id | GET+POST |
| Alias board | `/so-ts-bus-station` | optional redirect → `?type=BUS_STATION` | — |

---

### T-UI-LKP-01 — Lookup master

**status:** pending / verify  
**devSlash:** `/agent-dev`  
**DoD:** filter+form type/route/org = SearchInput Integration · type_work_id/owner_id/building_grade_id/build_location/classification = LOOKUP_STATIC init-data (**không** SearchInput master P1) · **GAP-LIST-LKP-01** / **GAP-BX-LOOKUP-01**

---

### T-UI-FIELD-01 — Field type + DTO

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** controlHint Design/DA 1:1 · SA field map · dumpSpecs keys `name_terminal` · `type_work_id` · `owner_id` · `site_area_using_land` · `main_transportation_route` · `total_area_floors` · `building_grade_id` · `build_location` · `classification` · **GAP-LIST-FIELD-01**

---

### T-UI-PROD-01 — End-user chrome

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** **cấm** Dev note / demo chrome / GOVOne skin · `demo-to-real-enduser`

---

### T-UI-UX-01 — UI-Ux constitution

**status:** pending  
**devSlash:** `/agent-dev`  
**DoD:** constitution/UI-Ux · full-page **5 cột** · typography label 13 · input D14/M16 · **GAP-DEV-UX-01** / **GAP-TYP-01** / **GAP-P2-FORM-GRID-05**

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
**DoD:** `LinCatalogHistoryModal` + `useCatalogHistoryModal` · **cấm** `window.alert`/`confirm`/`prompt` · overlay `stacked` nếu overlay khác mở · **cấm** invent History API · delete confirm = Modal/`useAlert` · **GAP-DEV-HIST-*** / **GAP-DEV-ALERT-01**

---

### T-BE-CRUD-01 — API CRUD + import name/spec

**status:** pending (delta)  
**layer:** api  
**devSlash:** `/agent-dev`  
**from_solution:** API-01…05 · **không** migration mới · dumpSpecs P1  

**ssot.reuse:**
  be: RoadAssetsController · RoadAssetService · CommonLib
  persist: RoadAssetEntity · DumpSpecs text · **cấm** parent line JSON · **cấm** Schema_* flatten P1
  import: RoadAssetCatalogHandler · RebuildGovVn `FindOfficialName incl. name_terminal` / `IsWeakAssetName`
  gates: tz_na · xco_get_only · share_tenant

**implement.wire:**
  API-01…05: verify live · **cấm** invent `api/v1/so-ts/*` · ERP.*
  GAP-BX-NAME-01: rebuild CSV `name`←`name_terminal` · **cấm** IsWeak reject «Bến xe»/«Tên bến» · **cấm** fallback `name_of_route_asset` khi name_terminal hợp lệ
  GAP-BX-SPEC-01: giữ bus_station §4 attrs trong dumpSpecs · km trống khi dump null · FE dumpSpecLabels đủ key
  XCO: GET by id AllowedCompanyIds
  POST/PUT: accept dumpSpecs merge · **không** required kmTo for BUS_STATION

**DoD:**
- [ ] API-01…05 verify
- [ ] name/import fix (**GAP-BX-NAME-01** · **GAP-BX-SPEC-01**)
- [ ] no-parent-json · migration **none**

---

### T-BE-INIT-01 — init-data BUS_STATION LOOKUP

**status:** pending (delta)  
**devSlash:** `/agent-dev`  
**from_solution:** API-06  
**DoD:** `RoadAssetInitDataDto.busStationWorkTypes` + `busStationOwners` + `busStationBuildingGrades` + `busStationBuildLocations` + `busStationClassifications: RoadAssetLookupOption[]` · options = dump LOOKUP_STATIC / seed · **cấm** invent bus-station master SearchInput P1 · **cấm** FE hardcode · **GAP-BX-LOOKUP-01**

---

### T-BE-UISCHEMA-01 — UI schema registry

**status:** pending / verify  
**DoD:** CatalogUiSchemaRegistry + seed `road-assets` · type-profile hide-empty · GET/PUT Integration ui-schema

---

### T-BFF-01 — BFF proxy

**status:** pending / verify  
**DoD:** `RoadAssetsBffController` proxy only · **cấm** business logic

---

### T-PERM-01 — Permissions

**status:** pending / verify  
**DoD:** FE gate + BE codes `asset.road-assets.*` · Auth NuGet mount **DEFER**

---

### T-QA-* — queued QA

**status:** pending  
**devSlash:** `/agent-qa`  
**e2eQa ON** → chỉ QA chạy e2e/runtime — **cấm** TL/Dev

| Task | DoD |
|------|-----|
| T-QA-CRUD-01 | Create→Edit→View→Delete + row menu + config full cột + dirty leave Modal |
| T-QA-FORM-01 | từng field required · UI value = body · dumpSpecs bus-station attrs · kmTo ẩn |
| T-QA-FILTER-01 | V1–V5 + fields 1:1 `so-ts-bus-station-filter-bar.md` · 🔍 work · fail ErpListHeaderFilters / export trên bar |
| T-QA-FILTER-02 | headed 1280+768+375 · `filter-bar-dtm-gate` |
| T-QA-TYP-01 | label 13 · input D14/M16 |
| T-QA-TAB-01 | tab index |

---

## Dependency graph

```
T-CTX-01
T-BE-CRUD-01 → T-BE-INIT-01 → T-UI-FORM-01
             → T-BFF-01 → T-UI-LIST-01 → T-UI-FILTER-01
                                       → T-UI-ACT-01 · T-UI-HIST-01 · T-UI-CFG-01
                                       → T-UI-FORM-01 → T-UI-LEAVE-01 · T-UI-FIELD-01 · T-UI-UX-01
             → T-PERM-01
T-BE-UISCHEMA-01 → T-UI-CFG-01
T-UI-LKP-01 ∥ T-UI-LIST-01
T-UI-RESP-01 · T-UI-PROD-01 after list/form
T-QA-* after T-UI-*
```

---

## Out of pack / DEFER

| ID | Note |
|----|------|
| Flatten Schema_* | P2 · dumpSpecs P1 |
| Auth NuGet | DEFER |
| Bus-station LOOKUP master SearchInput | P2 |
| Excel import wizard UI | OUT |
| Kind F map canvas | **cấm** |
| invent History API | **cấm** |
| invent `api/v1/so-ts/*` | **cấm** |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| next role | `dev` · `/agent-dev` |
| write | `specs/so-ts-bus-station/implement/so-ts-bus-station.md` |
| focus | COL profile · S-ATTR editable · kmTo ẩn · busStationWorkTypes/Owners/BuildingGrades/BuildLocations/Classifications init · name←name_terminal · LeaveConfirm · filter-bar · dumpSpecs P1 |
| mfeStdRoute | `/so-ts?type=BUS_STATION` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| API | **`api/v1/asset/road-assets`** · **cấm** invent so-ts API · **cấm ERP.*** |
| e2e | **cấm** ở Dev — e2eQa queued QA |
| migration | **none** |
| Gates | tz_na · xco_get_only · share_tenant |

---

## DoR checklist (TL PASS)

| Check | Pass |
|-------|------|
| route_confirm AskQuestion (autoApprove route_a) | ✅ |
| formType pack §2a đủ T-UI/T-BE/T-QA + leave + filter + hist | ✅ |
| DES-GRID → Lin* map PASS | ✅ |
| tl-grid-task-template paste T-UI-LIST-01 | ✅ |
| T-UI-FILTER-01 + filter-bar.md + T-QA-FILTER-01/02 | ✅ |
| T-UI-FORM-01 full-page 5 cột (không Slideout) | ✅ |
| T-UI-LEAVE-01 | ✅ |
| tl-list-shell-height DoD | ✅ |
| init-data busStation* · cấm hardcode dropdown | ✅ |
| Source assignment · API cite SA · **cấm** invent | ✅ |
| **Cấm** product code / e2e / start:std / Step 4b | ✅ |
| STATUS unlock → Dev pending | ✅ |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T03:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd |
| headerFingerprintPrior | sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553 |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.29.03 |
| saSkillVersion | 2026.08.24.01 |
| taskId | task_2182f77f |
| packKind | list |
| changeScope | new_page |
| route_confirm | route_a |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_2182f77f contentHashPriorDataAnaly=sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd route_confirm=route_a -->
