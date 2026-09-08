# Team lead — tasks — csdl-so-10

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| title | CSDL Sổ 10 — Bình đồ duỗi thẳng tuyến |
| this role | `team_lead` · `/agent-team-lead` |
| status | **confirmed** |
| changeScope | **`new_page`** |
| packKind | **`map`** (Kind **B** list + Kind **D** Slideout + Kind **F** map host→bar) |
| formType | `map` · secondary `list` |
| formNo | `10` |
| resource | `route-strip-maps` |
| IdCode | `SO-` |
| MapGateSlash | **`/agent-dev-oms-map`** |
| solution_confirm | **approve** (`task_70d802d8`) |
| design_confirm | **approve** (`task_7d13ee8d`) |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| route_confirm | **`route_a`** (autoApprove) — **`/csdl-so-10`** + hub `?resource=route-strip-maps` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html` |
| contentHash | `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` |
| headerFingerprint | `sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad` |
| prior · data_analy | **confirmed** · handoff/data_analy-compact.md |
| prior · po | **confirmed** · handoff/po-compact.md |
| prior · design | **confirmed** · handoff/design-compact.md |
| prior · sa | **confirmed** · handoff/sa-compact.md |
| taskId | `task_6564a261` |
| saTaskId | `task_70d802d8` |
| updatedAt | `2026-09-06T00:48:00.000Z` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| versionGate | `ok` |
| TL SSOT | `form-type-task-pack` · `agent-dev-assign` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` · `tl-list-shell-height` · `tl-route-vn-abbrev-confirm` · `tl-dropdown-from-backend` · `/agent-dev-oms-map` R1–R11 · `list-form-quality-gates` · `dev-form-review-checklist` · `/implement-show-leave-confirm` · `dev-history-alert-overlay` · `dev-ui-ux-constitution` |

**Cấm:** implement product code (trừ template task) · e2e · `yarn build` / `start:std` · Step 4b/migration @ TL · ERP.* · invent `api/v1/gis/*` · detail*/col1–3 only · Guid IdCode · Cesium · OSM.org chip · merge Sổ TS · start role khác (**GAP-PKT-ROLE-01**).

---

## § Delta Current vs New (`new_page`)

| Area | Current | New (Design+SA) | Action |
|------|---------|-----------------|--------|
| Route | thiếu alias page | **`/csdl-so-10`** + hub `?resource=route-strip-maps` | **route_confirm=route_a** · **T-FE-01** |
| DOMAIN-MAP | thiếu row | add `csdl-so-10` → Asset | **T-DM-01** · **GAP-SO10-DM-01** |
| Persist | shell only / col1–3 risk | typed `Schema_CsdlSo10` + jsonb geom + widen entries | **T-BE-01..05** · **T-MIG-01** |
| Resource seed | chưa | seed `route-strip-maps` | **GAP-SO10-RES-01** · **T-BE-02** |
| List/Form | — | Kind B A–D+F+H · Slideout 2col footer_only · typed T-SO-10 | **T-UI-LIST/FORM/FILTER/CFG/ACT** |
| Map | — | Kind F OMS R1–R11 · OSRM · Fit · File fallback empty geom | **T-UI-MAP-01/02** · **T-FE-MAP-01/02** |
| PostGIS | — | **DEFER P2** | **T-OUT-01** · GAP-SO10-POSTGIS-02 |
| Org SearchInput / XLS | — | DEFER / OUT | **T-OUT-01** |

---

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | **`/csdl-so-10`** · hub `/so-ts/csdl-so-sach?resource=route-strip-maps` · **route_confirm=route_a** |
| `mfeStdRoute` | `/csdl-so-10` |
| `mfeStdUrl` | `http://localhost:9301/csdl-so-10` (Dev verify) |
| `peerStdUrl` | `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** · DOMAIN-MAP (**T-DM-01**) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `api/v1/asset/csdl-records` |
| `source.bff` | `bff/domains/asset/` · `web-bff/api/v1/asset/csdl-records` · **proxy only** |
| `source.layout` | `micro-src` |
| FE BASE | `/asset/csdl-records` |
| catalogKind | `route-strip-maps` |
| filter context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/csdl-so-10-filter-bar.md` |
| `devSlash` list/form | **`/agent-dev`** + `/dev-web-responsive` + `/dev-ui-review` |
| `devSlash` map | **`/agent-dev-oms-map`** (R1–R11) — **MapGateSlash** |

### Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| **A** | `/csdl-so-10` (+ hub QS resource) | **SELECTED** — STATUS/Design/SA |
| B | hub-only primary | rejected |
| C | custom | n/a |

---

## DES-GRID → Lin* (`tl-design-grid-component-map` · PASS)

| Zone | Component |
|------|-----------|
| DES-GRID-A | `LinPageLayout` header «Sổ 10 — Bình đồ duỗi thẳng tuyến» |
| DES-GRID-B | `catalogToolbar` / `buildCatalogListToolbarActions` · `fa-cog` |
| DES-GRID-B-FILTER / FILTER | `LinErpListFilterBar` · **T-UI-FILTER-01** · `csdl-so-10-filter-bar.md` |
| DES-GRID-C0 | listTitle · `listRowMenuHelp` |
| DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · resize ON |
| DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` · kind `route-strip-maps` |
| DES-GRID-H | `LinCatalogHistoryModal` + `useCatalogHistoryModal` |
| DES-FORM-Z1–Z3 | Kind D Slideout `data-form-cols=2` · **footer_actions_only** |
| DES-ENTRIES | inline_grid typed T-SO-10 strip cols |
| DES-MAP-F / BAR | Kind F host→bar · OMS · **cấm** isolate legend · **cấm** OSM.org |
| DES-MAP-FALLBACK | File `stripImageUrl` khi empty geom |
| DES-LEAVE | `LeaveConfirmModal` (form + dirty draw) |
| S-HUB-ENTRY | hub card deep-link |
| Tree | **n/a** |

---

## Platform SSOT / gates

| Gate | Decision |
|------|----------|
| TZ | **tz_list_and_form** — list from/to + form period |
| XCO | **xco_get_only** |
| SHARE | **share_tenant** |
| Dropdown P1 | LOOKUP_STATIC status/align/struct/surface/province (PO/SA) · road = SearchInput BE |
| Init-data | optional DEFER cho static enums · **cấm** hardcode road options |
| BFF | proxy only · geom passthrough |
| Persist | shell + typed 1:1 · **cấm** parent `*Json` inventory · **cấm** detail*/col1–3 write |
| Geom | jsonb GeoJSON P1 · PostGIS DEFER |

### ssot.reuse (mọi T-UI/T-BE)

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` Lin* | local table/pager/Modal fork |
| HTTP | `apiClient` | clone ApiClient |
| BE | CommonLib ApiResponse · RequirePermission | ERP.* / Domains/Master |
| Config | `LinCatalogUiSchemaEditorModal` + dynamic cols | `configHint` · leftover `const columns` |
| Map | OMS helpers · MFE clip TileUrl | Cesium · OSM.org chip · invent GIS CRUD API |

---

## API contract (cite SA)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=route-strip-maps&…` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` |
| API-03 | POST | `/api/v1/asset/csdl-records` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` soft |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |
| API-FILE-01 | POST | integrate-file-upload-web → `stripImageUrl` |
| UI-SCHEMA | GET/PUT | `/integration/catalogs/route-strip-maps/ui-schema` |

BFF mirror `web-bff/api/v1/asset/…`. **Cấm** invent prefix.

### FormMode ↔ API

| FormMode | Load | Save |
|----------|------|------|
| list | API-01 | — |
| create | empty | API-03 |
| edit | API-02 | API-04 |
| view | API-02 | — |
| copy | API-02 → clear id/code | API-03 |
| delete | — | API-05 |
| map draw | geom on 02/03/04 | dirty → LeaveConfirm |
| map empty | — | File fallback CTA |

---

## FormType pack (canonical · `form-type-task-pack` §2a+§2b)

`packKind=map` + S-LIST Kind B → **list pack + map pack**.

| Task id | Role | Status | Maps SA / notes | devSlash |
|---------|------|--------|-----------------|----------|
| T-CTX-01 | TL | **done** | filter-bar.md + context stamp | — |
| T-DM-01 | Dev | pending | DOMAIN-MAP `csdl-so-10`→Asset · GAP-SO10-DM-01 | docs/BE |
| T-PERM-01 | Dev | pending | `asset.csdl-records.*` | `/agent-dev` |
| T-BE-01 | Dev | pending | Entity `CsdlSo10Entity` + EF jsonb | `/agent-dev` |
| T-BE-02 | Dev | pending | Migration `Schema_CsdlSo10` + widen entries + seed resource (**Step 4b**) · GAP-SO10-RES-01 | `/database-migration` |
| T-BE-03 | Dev | pending | DTO typed + service join shell↔typed↔entries↔geom · stop col1–3 | `/agent-dev` |
| T-BE-04 | Dev | pending | IdCode `SO-` generator | `/agent-dev` |
| T-BE-05 | Dev | pending | List filter roadCode + period TZ · GeoJSON validate | `/agent-dev` |
| T-BE-CRUD-01 | Dev | pending | API-01…05 verify/extend · **covers T-BE-01..05** | `/agent-dev` |
| T-BE-UISCHEMA-01 | Dev | pending | Registry + Seed `route-strip-maps` | `/agent-dev` |
| T-BE-INIT-01 | Dev | pending | optional init-data · LOOKUP_STATIC P1 OK per SA | `/agent-dev` |
| T-BE-GIS-01 | Dev | pending | geom jsonb on CRUD body · **cấm** invent gis API | `/agent-dev` |
| T-BFF-01 | Dev | pending | proxy only · geom passthrough | `/agent-dev` |
| T-MIG-01 | Dev | pending | = T-BE-02 · Dev/4b only | `/database-migration` |
| T-UI-LIST-01 | Dev | pending | Kind B · `tl-grid-task-template` FULL · T-FE-01 | `/agent-dev` |
| T-UI-FILTER-01 | Dev | pending | filter-bar HARD · T-FE-04 · **cấm** nút Tìm | `/agent-dev` · `/filter-bar-context` |
| T-UI-CFG-01 | Dev | pending | UiSchema editor full · T-FE-07 | `/agent-dev` |
| T-UI-FORM-01 | Dev | pending | Slideout C/E/V/Copy · entries T-SO-10 · T-FE-02/03 | `/agent-dev` |
| T-UI-ACT-01 | Dev | pending | toolbar/row → FormMode/API | `/agent-dev` |
| T-UI-LEAVE-01 | Dev | pending | LeaveConfirm form+draw · T-FE-05 | `/agent-dev` · `/implement-show-leave-confirm` |
| T-UI-LKP-01 | Dev | pending | road-route SearchInput | `/agent-dev` |
| T-UI-FIELD-01 | Dev | pending | controlHint ↔ DTO typed · **cấm** detail*/col1–3 | `/agent-dev` |
| T-UI-PROD-01 | Dev | pending | end-user · cấm demo codes | `/agent-dev` |
| T-UI-UX-01 | Dev | pending | constitution · Slideout 2col | `/agent-dev` |
| T-UI-RESP-01 | Dev | pending | 1280/768/375 | `/dev-web-responsive` · `/dev-ui-review` |
| T-UI-HIST-01 | Dev | pending | History modal · **cấm** window.alert | `/agent-dev` |
| T-UI-MAP-01 | Dev | pending | Kind F OMS R1–R11 · T-FE-MAP-01 | **`/agent-dev-oms-map`** |
| T-UI-MAP-FORM-01 | Dev | pending | draw/save geom + Leave · attribute | **`/agent-dev-oms-map`** |
| T-FE-MAP-02 | Dev | pending | empty geom → File stripImageUrl | `/agent-dev` + OMS |
| T-FE-06 | Dev | pending | hub deep-link «Sổ 10» · **cấm** merge Sổ TS | `/agent-dev` |
| T-OUT-01 | — | deferred | XLS OUT · org SearchInput P2 · PostGIS P2 · Cesium | — |
| T-QA-CRUD-01 | QA | pending | C→E→V→D + row menu + dirty Modal | `/agent-qa` |
| T-QA-FORM-01 | QA | pending | field required + body parity | `/agent-qa` |
| T-QA-FILTER-01 | QA | pending | V1–V5+V10 live + filter-bar.md | `/agent-qa` |
| T-QA-FILTER-02 | QA | pending | D+T+M headed | `/agent-qa` |
| T-QA-MAP-01 | QA | pending | draw·save·reload · R1–R11 smoke · M-01…M-12 | `/agent-qa` |
| T-LIB-01 | — | **n/a** | Lin* đã có | — |

**GAP-TL-FORMTYPE-01:** closed — đủ §2a list + §2b map + Leave + Filter + Map OMS assign.  
**GAP-TL-DEV-ASSIGN-01:** closed — list=`/agent-dev` · map=`/agent-dev-oms-map`.

---

## Task detail (P1)

### T-CTX-01
**status:** **done** (TL)  
**DoD:**
- [x] `csdl-so-10-filter-bar.md` written
- [x] route locked `/csdl-so-10` · reviewUrl · peerStdUrl stamped
- [x] MapGateSlash `/agent-dev-oms-map`

### T-DM-01
**deps:** —  
**DoD:**
- [ ] DOMAIN-MAP.md add `csdl-so-10` → Asset
- [ ] close GAP-SO10-DM-01

### T-BE-CRUD-01 · T-BE-01..05 · T-BE-GIS-01 · T-MIG-01
**deps:** T-DM-01 (doc) · migration Step 4b  
**skills:** `/new-endpoint` · `/database-migration` · `/review-timezone-implement` · `/implement-view-cross-company` · `/implement-shared-table`  
**DoD:**
- [ ] `CsdlSo10Entity` + EF jsonb Geometry · GeomType · Srid · StripImageUrl · Contractor · Period*
- [ ] Migration `Schema_CsdlSo10` + widen `CsdlBookEntryEntity` strip cols + seed `route-strip-maps`
- [ ] Service map shell↔typed↔entries↔geom · **stop** detail*/col1–3 write for this resource
- [ ] IdCode `SO-` server-gen
- [ ] List filters: search · province · status · roadCode · fromDate/toDate (TZ) · pageSize ∈{50,100,200,500}
- [ ] GeoJSON LineString/MultiLineString validate when present
- [ ] Soft-delete · ApiResponse · **cấm ERP.*** · **cấm** invent `api/v1/gis/*`
- [ ] Gates: tz_list_and_form · xco_get_only · share_tenant

### T-BE-UISCHEMA-01
**DoD:**
- [ ] CatalogUiSchemaRegistry + Seed kind **`route-strip-maps`** typed columns (list projection SA)
- [ ] **cấm** 3-col-only schema làm SSOT form

### T-BFF-01
**DoD:**
- [ ] Proxy-only csdl-records · forward Authorization · X-Company-Id · geom body untouched
- [ ] **no** business remap

### T-PERM-01
**DoD:**
- [ ] FE toolbar/form/row gated · local mode OK
- [ ] BE `[RequirePermission]` `asset.csdl-records.read|create|update|delete`

### T-UI-LIST-01 — List page + grid (Kind B)

**skills (REQUIRED load trước Write):**
  - /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height
  - design_zones: DES-GRID-A,B,FILTER,C0,C2,C2a,C3,D,F,H · DES-FORM-Z · DES-MAP-F
  - /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context** · **T-UI-FILTER-01**
  - /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
  - /implement-catalog-ui-schema-registry (BE) · FE bootstrap
  - form_pair → T-UI-FORM + dev-form-review-checklist · Leave → T-UI-LEAVE-01

**ssot.reuse:**
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_filter: LinErpListFilterBar · load `csdl-so-10-filter-bar.md` — cấm ErpListHeaderFilters / nút Tìm
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·delete·create) · fa-cog
  ui_grid: LinCatalogDataGrid · buildDynamicGridColumns
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal · kind=`route-strip-maps`
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems
  ui_history: LinCatalogHistoryModal + useCatalogHistoryModal · stacked nếu Slideout mở
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection · filterSourceRows=full
  http: apiClient · unwrap
  grid: no local table/pager · resizable default ON

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: title «Sổ 10 — Bình đồ duỗi thẳng tuyến» + titleIconClass + pageId
  listTitle: «Danh sách bình đồ strip»
  footer: LinCatalogListPagination

**implement.toolbar / grid / grid_menu / config / grid_flow:** per `tl-grid-task-template` FULL · `tl-grid-full-flow`

**implement.wire:** ui → services/csdlRecords → apiClient → BFF → API `?resource=route-strip-maps`  
**implement.state:** list query · selection · formMode · map dirty · leave guard  
**implement.init_data:** LOOKUP_STATIC P1 enums OK · road SearchInput BE only

**DoD:**
- [ ] Layout live: title+toolbar+grid/empty (**GAP-P2-LAYOUT-06** — **cấm** DEFER)
- [ ] Toolbar FULL · row menu · Config FULL · dynamic cols · **0** leftover `const columns`
- [ ] Filter 1 hàng · 🔍 phải · **0** nút Tìm · fields = filter-bar.md
- [ ] Hub deep-link parity · alias `/csdl-so-10`
- [ ] pageSize 50/100/200/500 · empty VN
- [ ] `rg` anti-clone PASS · yarn build (Dev only)

### T-UI-FILTER-01
**deps:** T-CTX-01  
**skills:** `/filter-bar-context` · `filter-bar-pipeline` · `filter-bar-layout-hard` V1–V10  
**DoD:**
- [ ] `LinErpListFilterBar` · lấp hàng rồi wrap · **GAP-FILTER-WRAP-02**
- [ ] Fields 1:1 `csdl-so-10-filter-bar.md`
- [ ] **cấm** export/action trên bar · **cấm** `LinListFilterField`

### T-UI-FORM-01
**deps:** T-BE-CRUD-01  
**skills:** `dev-form-review-checklist` · `slideout-form-layout`  
**DoD:**
- [ ] Kind D Slideout `data-form-cols=2` · footer_actions_only · C/E/V/Copy
- [ ] Header typed: bookNo* · contractor* · road SearchInput* · kmFrom/To* · periodStart* · periodEnd · status · province · notes
- [ ] Entries inline_grid T-SO-10 cols (align/struct/surface LOOKUP_STATIC)
- [ ] View readOnly · **không** disabled xám
- [ ] Copy: clear id/code · new SO- on save
- [ ] **cấm** detail*/col1–3 only form

### T-UI-ACT-01
**DoD:**
- [ ] Inventory: Tạo/Sửa/Xem/Copy/Xóa/History/Config/Refresh → handler + surface (**GAP-P2-ACT-***)

### T-UI-LEAVE-01 · T-UI-HIST-01
**DoD:**
- [ ] Dirty form **hoặc** dirty draw → `LeaveConfirmModal` · **0** `window.confirm`/`alert`
- [ ] History = LinCatalogHistoryModal · stacked overlay OK

### T-UI-CFG-01
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` full cột · **cấm** configHint / Zone F-only

### T-UI-MAP-01 · T-UI-MAP-FORM-01 · T-FE-MAP-02

**devSlash:** **`/agent-dev-oms-map`** (REQUIRED)  
**skills:** `/agent-dev-oms-map` R1–R11 · `/map-snap-centerline` · `/map-inspect-popup` · `gis-mfe-map-standard` · `mfe-gis-live-ssot` · LeaveConfirm  
**from_design:** DES-MAP-F · DES-MAP-BAR · Map AC M-01…M-12 · Q-SO10 File fallback

**DoD:**
- [ ] Kind F host→bar · dock default · MFE clip Tiêu chuẩn/Vệ tinh — **cấm** OSM.org/Esri/Google chip
- [ ] Live Leaflet · **cấm** map picture/gradient (**R1**)
- [ ] Full flex fill · **cấm** `NNvh` (**R4b**) · chrome host→bar (**R4c**)
- [ ] LineString/MultiLineString draw · OSRM routeAlongStreets · snap (**R8/R9**)
- [ ] Fit load = `fitVnClipMap` · Fit corridor bbox Km (**R11**)
- [ ] Line levels corridor underlay + track (**R7b**) · map click = popup only (**R7c**)
- [ ] Persist geom via API-02/03/04 fields · **cấm** invent GIS CRUD path
- [ ] Empty geom → toast + CTA vẽ **hoặc** File `stripImageUrl` (Q-SO10)
- [ ] Dirty draw/form → LeaveConfirmModal (**R-LEAVE**)
- [ ] Overlay z≥5000 (**R10**) · **cấm** Cesium · **cấm** «3D Tiles (sắp có)»
- [ ] Grid AC G-01…G-10 parity Design · Map AC M-01…M-12

### T-FE-06
**DoD:**
- [ ] Hub card label «Sổ 10» · deep-link resource · **cấm** merge vào Sổ TS list

### T-UI-UX-01 · T-UI-RESP-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01
**DoD:** per `list-form-quality-gates` · constitution · D/T/M · SearchInput road · field↔DTO · end-user copy

### T-OUT-01 (DEFER/OUT — không block P1)
- GAP-CSDL-ORG-01 org SearchInput P2  
- GAP-CSDL-XLS-01 OUT  
- GAP-SO10-POSTGIS-02 PostGIS P2  
- Cesium / Twin 3D OUT P1  

### T-QA-* (queued `/agent-qa*` · e2eQa ON)
**DoD:** scenarios Grid AC G-01…G-10 · Map AC M-01…M-12 · CRUD · filter V1–V5+V10 · D+T+M · Leave Modal · **cấm** TL viết scenario text

---

## Deps order

```
T-CTX-01 (done)
 → T-DM-01
 → T-BE-01..05 / T-MIG-01 / T-BE-UISCHEMA-01 / T-BE-GIS-01 / T-PERM-01
 → T-BFF-01
 → T-UI-LIST-01 + T-UI-FILTER-01 + T-UI-CFG-01
 → T-UI-FORM-01 + T-UI-ACT-01 + T-UI-LEAVE-01 + T-UI-HIST-01 + T-UI-LKP/FIELD/PROD/UX/RESP
 → T-UI-MAP-01 + T-UI-MAP-FORM-01 + T-FE-MAP-02 + T-FE-06
 → (Dev yarn build / start:std)
 → T-QA-* (e2e queued)
 → review
```

---

## retry.ssot_rereview (HARD — trước Dev Write · new_page)

Live chưa có page → checklist = prototype + SA + SSOT (không skip):

| # | Check | Expect |
|---|-------|--------|
| 1 | 1× LinPageLayout · cấm nested CatalogListShell | PASS on implement |
| 2 | LinCatalogDataGrid + dynamic cols · kéo cột ON | PASS |
| 3 | LinCatalogListPagination only | PASS |
| 4 | Flex root + LAYOUT-06 live title+toolbar+grid/empty | PASS · **cấm** DEFER |
| 5 | Toolbar FULL + Config UiSchema FULL | PASS · **cấm** configHint |
| 6 | Filter bar HARD · cấm nút Tìm | PASS |
| 7 | Slideout 2col footer_only · typed fields | PASS |
| 8 | LeaveConfirm form+draw | PASS |
| 9 | Map OMS R1–R11 · host→bar · clip chips | PASS |
| 10 | **cấm** ERP.* · col1–3 only · Cesium · OSM.org | PASS |
| 11 | Dropdown static P1 OK · road SearchInput BE | PASS |
| 12 | Hub deep-link resource | PASS |

Ghi `retry.ssot_rereview` trên implement MD trước Write.

---

## System design flags

| ID | Flag |
|----|------|
| SD-LIB-UI | required |
| SD-LIB-BE | required |
| SD-AUTH | stub OK P1 |
| SD-BFF | required proxy |
| SD-HEADER | X-Company-Id |
| SD-TENANT | share_tenant |
| SD-NO-JSON | required (geom jsonb scalar OK · **cấm** parent inventory Json) |
| SD-SEARCH | required |
| SD-TZ | tz_list_and_form |
| SD-XCO | xco_get_only |
| SD-SHARE | share_tenant |
| SD-CONFIG | UiSchema FULL |
| SD-MAP | OMS R1–R11 |

---

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `csdl-so-10` / `map` (+ list surfaces) |
| task | `specs/csdl-so-10/task/csdl-so-10.md` |
| compact | `specs/csdl-so-10/handoff/team_lead-compact.md` |
| mfeStdRoute | `/csdl-so-10` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` |
| MapGateSlash | `/agent-dev-oms-map` |
| open Q | **none** |
| Next | `/agent-dev` (list/form) + `/agent-dev-oms-map` (map) · **cấm** TL chạy e2e |

---

<!-- Version meta: skillVersion=2026.08.25.01 · workflowVersion=2026.09.05.03 · rulesVersion=2026.09.05.8 · packKind=map · changeScope=new_page · route_confirm=route_a · versionGate=ok -->
