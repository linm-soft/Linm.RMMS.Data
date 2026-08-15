# Team lead — tasks — asset

| Field | Value |
|-------|-------|
| feature | `asset` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (Kind B · catalog A–D + **full-page** form) |
| solution_confirm | **approve** (autoApprove ON · `task_86f45a3c`) |
| design_confirm | **approve** (autoApprove ON · Design 2026-08-14 full-page) |
| updatedAt | `2026-08-14T16:15:00.000Z` |
| taskId | `task_31557cdc` |
| TL SSOT | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `tl-list-shell-height` · `tl-catalog-list-parity` · `ssot-no-duplicate` |
| **Supersedes** | `task/asset.md` 2026-08-10 (`task_adea150b`) — Slideout · Select 8 nhãn · filter chỉ search+type · **cấm** coi T-UI-* = done |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/asset/ui/design.md` + reviewUrl | T-UI-LIST A–D · T-UI-FORM Z1–Z3 · T-CTX — **cấm** Slideout · SearchInput 23/38 |
| Solution | `specs/asset/be/solution-discovery.md` | T-BE · T-BE-INIT · T-BFF · T-PERM — API-01…06 · API-LKP-01…03 · `RoadAssetEntity` · **cấm** parent JSON |
| Prototype | `ui/prototype/asset-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/asset-control-hint.md` | T-UI-LKP · T-UI-FIELD |

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` (stub đến ≥1.4.0) |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | `asset.road-assets.read\|create\|update\|delete` |

## Implement HOW (TL — Kind B list + full-page form)

| Topic | Decision (asset pack 2026-08-14) |
|-------|----------------------------------|
| **Wire** | Page → `services/asset/endpoint.ts` → `apiClient` → `web-bff/api/v1/asset/road-assets` → `api/v1/asset/road-assets` |
| **Lookups** | MFE → BFF Integration `web-bff/api/v1/integration/{asset-types,road-routes,org-units}` — **không** clone master dưới Asset |
| **List state** | Page hooks + common reducers — **không** local auth/ui slice |
| **Form state** | Full-page `AssetFormPage` local/controller — **cấm** Slideout/Resource |
| **Redux common** | `authReducer` / toast từ common-components |
| **Skills** | `/erp-form-context` · catalog toolbar · review-grid · leave-confirm · `tl-retry-ssot-rereview` |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local `authSlice` / `uiSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat entity columns | parent `*LinesJson` / `PhotosJson` |
| BFF | proxy only | business logic in BFF |
| Master | Integration APIs | Asset-domain duplicate catalog · FE enum 8 nhãn |

**Cấm** fork component/envelope · `ERP.*` · parent `*Json` · Dev tự invent wire/state.

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | List `/asset` · form `/asset/new` · `/asset/:id` · `/asset/:id/edit` · `/asset/:id/copy` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `api/domains/asset/LINM.RMMS.Asset.Models/` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` (delta indexes only nếu thiếu) |
| Demo | `Linm.RMMS.Demo/src/demo/asset/` |
| Context | `Linm.RMMS.Data/docs/context/features/asset.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/asset/ui/prototype/asset-list-prototype.html` |
| `mfeStdRoute` | `/asset` (**route_confirm** locked) |
| `mfeStdUrl` | `http://localhost:9301/asset` |

## API contract (from solution)

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/road-assets` query `search,type,route,kmFrom,kmTo,orgUnit,page,pageSize` |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` (XCO) |
| API-03 | POST | `/api/v1/asset/road-assets` |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` (+ `source`) |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` (soft · optional UI) |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` |
| API-LKP-01 | GET | `/api/v1/integration/asset-types/search` |
| API-LKP-02 | GET | `/api/v1/integration/road-routes/search` |
| API-LKP-03 | GET | `/api/v1/integration/org-units/tree` |

BFF: `web-bff/api/v1/asset/road-assets/**` (+ init-data). Lookups: `web-bff/api/v1/integration/**` (existing). FE BASE list/CRUD: **`/asset/road-assets`**.

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **n/a** | — | không date filter P1 · `updatedAt` display UTC→local |
| XCO | **required** (`get_only`) | API-02 · T-BE-01 | `/implement-view-cross-company` |
| SHARE | **tenant_keep** | `RoadAssetEntity` | master type/route/org = Integration Type A |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission (stub OK) |
| SD-AUTH | gap/stub | Align codes khi NuGet sẵn — không block CRUD |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-TENANT | **required** | `CompanyCode` · **tenant_keep** |
| SD-NO-JSON | **required** | Flat scalars · **cấm** PhotosJson |
| SD-SEARCH | **required** | search (code/name/qr/route/type) · pageSize 50/100/200/500 |
| SD-TZ | **n/a** | |
| SD-XCO | **required** | GetById cross-company |
| SD-SHARE | **n/a** | tenant_keep (entity) |

## Retry SSOT re-review (HARD — live MFE 2026-08-14 · trước Dev Write)

Live: `AssetListPage.tsx` + `AssetFormPage.tsx` + `lookups.ts` + `roadAssetStore.ts` + `index.tsx`.

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | List: 1× `LinPageLayout` · không CatalogListShell | **PASS** |
| 2 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` / raw table | `LinCatalogListPagination` only | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` + LAYOUT-06 | `.page` flex column height 100% · skeletonRows=8 | **PASS** |
| 4 | Toolbar catalog: refresh · history · config `fa-cog` · +Tạo mới trên **B** · row actions | catalogToolbar present | **PASS** (verify labels vs Design) |
| 5 | Filter Zone B: SearchInput text + type + route + km Text + org tree + Xóa điều kiện — **cấm** nút Tìm · **cấm** Select 8 | Chỉ `SearchTextInput` + type `SearchInput` FE `ASSET_TYPES` 8 nhãn · **thiếu** route/km/org/clear | **GAP-TL-LIST-FILTER-01** |
| 6 | Grid `LinCatalogDataGrid` · kéo cột default ON | `tableConfig` + schema | **PASS** |
| 7 | Zone F: `LinCatalogUiSchemaEditorModal` | present | **PASS** |
| 8 | History: `LinCatalogHistoryModal` stub | present | **PASS** |
| 9 | tree_master? | n/a list · org-unit tree = filter only | n/a |
| 10 | Form Create/Edit/View/Copy **full-page** — cấm Slideout | `AssetFormPage` routes `/asset/new` · `/asset/:id` — **không** Slideout trên asset list | **PASS** shell · **GAP** fields/routes dưới |
| 11 | Type/route SearchInput master 23/38 | `TYPE_LOOKUP` = demo 8 VN labels · form `route` = `Input` free-text | **GAP-TL-LKP-01** |
| 12 | Dropdown status/source từ init-data | status = SearchInput FE enum VN · **thiếu** source | **GAP-TL-FIELD-01** |
| 13 | View = readOnly (không disabled xám toàn form) | View `<dl>` | **PASS** view · code edit dùng `disabled` → **GAP-TL-UX-CODE-01** |
| 14 | Photos mock · valueVnd Money · note multiline | thiếu photos · note Input 1 dòng | **GAP-TL-FIELD-02** |
| 15 | Dedicated form routes `/edit` `/copy` | copy via `?copyFrom=` · edit via `?mode=edit` · **thiếu** `/asset/:id/edit` · `/asset/:id/copy` | **GAP-TL-ROUTE-01** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`.  
**Cấm** Dev chỉ patch 1 chỗ user nêu nếu còn GAP cùng surface (list filter + lookups + form fields cùng pack).

`retry.ssot_rereview` (stamp Dev implement MD): copy bảng trên + re-audit sau Write.

## Live GAP → task map

| ID | Gap | Task |
|----|-----|------|
| GAP-SA-LIST-FILTER-01 | GET list thiếu `route,kmFrom,kmTo,orgUnit` | T-BE-CRUD-01 · T-BFF-01 · T-UI-LIST-01 |
| GAP-SA-SEARCH-01 | search thiếu qr + type ILIKE | T-BE-CRUD-01 |
| GAP-SA-INIT-01 | không `GET …/init-data` | T-BE-INIT-01 · T-BFF-01 · T-UI-FIELD-01 |
| GAP-SA-LKP-EXISTS-01 | POST/PUT không 422 type/route master | T-BE-CRUD-01 |
| GAP-SA-UPD-SOURCE-01 | PUT thiếu `source` | T-BE-CRUD-01 · T-UI-FIELD-01 |
| GAP-SA-TYPE-CODE-01 | data cũ 8 nhãn VN | T-UI-LKP-01 alias-map display · **cấm** persist nhãn mới |
| GAP-TL-LIST-FILTER-01 | Zone B thiếu route/km/org/clear · type = 8 demo | T-UI-LIST-01 · T-UI-LKP-01 |
| GAP-TL-LKP-01 | lookups FE-only · route Text | T-UI-LKP-01 |
| GAP-TL-FIELD-01 | status/source không init-data | T-UI-FIELD-01 |
| GAP-TL-FIELD-02 | thiếu photos mock · source · note multiline | T-UI-FORM-01 · T-UI-FIELD-01 |
| GAP-TL-ROUTE-01 | thiếu `/asset/:id/edit` `/copy` | T-UI-FORM-01 |
| GAP-TL-UX-CODE-01 | code `disabled` vs readonly | T-UI-UX-01 |
| GAP-TL-PROD-01 | `ASSET_TYPES` 8 nhãn demo còn trên production lookup | T-UI-PROD-01 |

## Task pack

### T-CTX-01
**layer:** docs  
**status:** pending  
**DoD:**
- [ ] `docs/context/features/asset.md` khớp Design 2026-08-14 (full-page · SearchInput 23/38 · cấm Slideout)
- [ ] control-map / readonly-lock: View readOnly · code/updatedAt all-mode readonly
- [ ] **cấm ERP.*** · **cấm** Finance `api/v1/assets`

### T-BE-01
**layer:** api  
**status:** pending (verify + delta)  
**from_solution:** API-01…06 · `RoadAssetEntity` · route `api/v1/asset/road-assets`  
**source:** backend=`Linm.RMMS.WebService` · domain=`Asset`  
**ssot.platform_be:** `Linm.Platform.CommonLib`  
**ssot.platform_auth:** `Linm.Platform.Authentication` — codes `asset.road-assets.*`  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-view-cross-company`  
**DoD:**
- [ ] ApiResponse / paged envelope · XCO GetById giữ · no ERP · `dotnet build` API PASS
- [ ] **cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`

### T-BE-CRUD-01
**layer:** api  
**status:** pending  
**DoD:**
- [ ] API-01: query `search,type,route,kmFrom,kmTo,orgUnit,page,pageSize` · default pageSize **50** · sizes 50/100/200/500
- [ ] Search ILIKE: code · name · **qr** · route · type (**GAP-SA-SEARCH-01**)
- [ ] `orgUnit` P1: filter `CompanyCode` khớp node đơn vị; node tuyến → map `route` — **cấm** invent `org_unit_code` JSON
- [ ] API-02 XCO GetById giữ
- [ ] API-03 create: không nhận `code` · IdCode `TS-yyyyMMdd-nnn` · type/route = master **code**
- [ ] API-04 update: + `source` (**GAP-SA-UPD-SOURCE-01**)
- [ ] API-05 soft delete `IsActive=false`
- [ ] **GAP-SA-LKP-EXISTS-01:** POST/PUT 422 nếu type/route không tồn tại Integration
- [ ] Compat đọc list: chấp nhận value code **và** nhãn VN cũ — display qua alias-map / init-data (**GAP-SA-TYPE-CODE-01**)
- [ ] `dotnet build` API PASS · ghi implement § Build

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**DoD:**
- [ ] API-06 `GET /api/v1/asset/road-assets/init-data`
- [ ] Body `{ statuses: [{value,label}], sources: [{value,label}] }`
- [ ] status: `tot`→Tốt · `theo_doi`→Theo dõi · `can_bao_tri`→Cần bảo trì
- [ ] source: `manual`→Nhập tay · `ai`→AI
- [ ] **cấm** FE-only KIND_LABEL làm SSOT Dropdown
- [ ] `dotnet build` API PASS

### T-BE-02
**layer:** api (migration)  
**status:** pending (delta only)  
**DoD:**
- [ ] Table `rmms_road_assets` **exists** — không tạo bảng mới
- [ ] Delta indexes CI search name/code/route/qr/type **nếu thiếu** — pair `.cs` + `.Designer.cs`
- [ ] **cấm** cột JSON / PhotosJson / PostGIS P1
- [ ] Nếu không thiếu index: ghi `n/a` trên implement · không fake migration

### T-BFF-01
**layer:** bff  
**status:** pending  
**DoD:**
- [ ] Proxy `web-bff/api/v1/asset/road-assets/**` gồm list QS mới + **GET init-data**
- [ ] Lookups **không** proxy qua Asset BFF — dùng Integration BFF sẵn
- [ ] proxy only · `dotnet build` BFF PASS

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**DoD:**
- [ ] FE toolbar/form gated `asset.road-assets.read|create|update|delete`
- [ ] Tạo mới ẩn nếu `!canCreate` · Edit/Delete theo perm
- [ ] BE `[RequirePermission]` TODO documented nếu CommonLib <1.4.0 — không block CRUD

### T-UI-LIST-01
**layer:** ui  
**status:** pending  
**page:** `/asset`  
**from_design:** zones **A,B,C,D**  
**implement.wire:** ui → `services/asset/endpoint.ts` → apiClient → BFF → API  
**implement.state:** list=page-hooks · redux_common=yes  
**implement.page_shell:** 1× `LinPageLayout` kind=catalog · no nested CatalogListShell · flex root · `data-catalog-list-page`  
**implement.grid:** `LinCatalogDataGrid` · dynamic cols · `tableConfig` resizable default ON  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`  
**skills:** `/erp-form-context` · `/implement-catalog-list-toolbar` · `/review-grid` · `tl-grid-ssot` · `tl-catalog-list-parity` · **`tl-retry-ssot-rereview`**  
**APIs:** API-01  
**deps:** T-BE-CRUD-01 · T-UI-LKP-01  
**implement.list_parity:**
  pilot_ux: Kind B catalog
  layout: flex-root + GAP-P2-LAYOUT-06 smoke
  tree: n/a (org tree = filter SearchInput)
  filter: SearchInput search + type + route + orgTree · Text kmFrom/kmTo · **Xóa điều kiện** · **no Tìm btn** (GAP-P2-87)
  loading: useServerPagedListLoading
  footer: LinCatalogListPagination (common ONLY) `[50,100,200,500]`
  row_menu: LinCatalogRowActionMenu · Xem · Sửa · Sao chép · Lịch sử (stub) · Delete nếu `canDelete` (Design không bắt buộc Xóa)
  zone_f: LinCatalogUiSchemaEditorModal
  history: LinCatalogHistoryModal stub
  grid_resize: resizable default ON
  perm: asset.road-assets.*
**DoD:**
- [ ] Dev re-review checklist § HARD trước Write — ghi `retry.ssot_rereview` trên implement MD
- [ ] Zone A: `fa-road` + title **Sổ tài sản kết cấu hạ tầng đường bộ** — **cấm** Thêm mới trên A
- [ ] Zone B: đủ filter Design §2 · Tạo mới **chỉ trên B** · Làm mới · `fa-cog` · filter đổi → page=1
- [ ] Zone C: cột STT · □ · Mã · Tên · Loại · Tuyến · Lý trình từ · đến · Tình trạng KT · Tọa độ GPS · ⋯ — loại/tuyến `code — name`
- [ ] Click mã → View full-page
- [ ] **Cấm** Select 8 nhãn demo · **cấm** `ASSET_TYPES` làm production lookup
- [ ] BASE=`/asset/road-assets` · query `route,kmFrom,kmTo,orgUnit`
- [ ] MFE `yarn build` PASS

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** Full page Z1 · Z1h · Z2 · Z3 · 15 fields · View `<dl>` / readOnly  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm` · `dev-form-review-checklist`  
**deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-UI-LKP-01 · T-UI-FIELD-01  
**DoD:**
- [ ] Routes: `/asset/new` · `/asset/:id` (view) · `/asset/:id/edit` · `/asset/:id/copy` (**GAP-TL-ROUTE-01**)
- [ ] FormMode Create/Edit/View/Copy · Copy = POST new · IdCode mới
- [ ] Z1 actions: Quay lại · Sao chép · Sửa · Hủy · Lưu — Z3 Hủy/Lưu ẩn khi view
- [ ] Dirty leave-confirm khi Hủy / Quay lại
- [ ] **Cấm** Slideout / Resource trên surface asset form
- [ ] MFE `yarn build` PASS

### T-UI-ACT-01
**layer:** ui  
**status:** pending  
**DoD:** action inventory → handler + API (bảng dưới) wired live

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST B | SearchInput text → applyFilters page=1 | GET `/` `?search=` |
| Type filter | S-LIST B | SearchInput asset-type | GET `?type=` (code) |
| Route filter | S-LIST B | SearchInput road-route | GET `?route=` (code) |
| kmFrom / kmTo | S-LIST B | Text | GET `?kmFrom=&kmTo=` |
| orgTree | S-LIST B | SearchInput tree org-unit | GET `?orgUnit=` |
| Xóa điều kiện | S-LIST B | clear all → page=1 | GET `/` |
| Refresh | toolbar | reloadAll | GET `/` |
| +Tạo mới | toolbar B | navigate `/asset/new` | POST `/` |
| Config `fa-cog` | toolbar | `LinCatalogUiSchemaEditorModal` | ui-schema |
| History | toolbar / row | `LinCatalogHistoryModal` stub | DEFER |
| Row / click mã View | C | `/asset/:id` | GET `/{id}` |
| Row Sửa | C | `/asset/:id/edit` | GET · PUT |
| Row Sao chép | C | `/asset/:id/copy` | GET · POST |
| Form Lưu | S-FORM | create/update | POST / PUT |
| Form Hủy / Back | S-FORM | leave-confirm | — |
| Delete | optional nếu `canDelete` | soft delete | DELETE `/{id}` |

### T-UI-LKP-01
**layer:** ui  
**status:** pending  
**DoD:**
- [ ] List + form **type**: SearchInput → API-LKP-01 (23) display `code — name` persist **code**
- [ ] List + form **route**: SearchInput → API-LKP-02 (38) — **cấm** `Input` free-text
- [ ] List **orgTree**: SearchInput tree → API-LKP-03
- [ ] Alias demo 8: **chỉ** display map (GANTRY_SIGN…) — **cấm** persist «Mặt đường»/`BRIDGE`
- [ ] **Cấm** `ASSET_TYPES` 8 nhãn làm `TYPE_LOOKUP_CONFIG` production
- [ ] Seed Integration 23+38 **trước** consumer (nếu empty → empty SearchInput, không fallback 8)

### T-UI-FIELD-01
**layer:** ui  
**status:** pending  
**control-map ↔ DTO**

| uiField | Control | dtoField | Required | Notes |
|---------|---------|----------|----------|-------|
| code | Text readonly IdCode | Code | auto | all-mode readonly |
| name | Text | Name | * | view=readOnly |
| type | SearchInput asset-type | Type | * | code 23 |
| route | SearchInput road-route | Route | * | code 38 |
| kmFrom | Text | KmFrom | * | |
| kmTo | Text | KmTo | | |
| status | **Dropdown** init-data | Status | * | **cấm** SearchInput FE enum |
| source | **Dropdown** init-data | Source | | `manual` \| `ai` |
| lat / lng | Text number | Lat / Lng | | |
| qr | Text display | Qr | | P1 |
| photos | Text mock | — | | **không** persist |
| valueVnd | Text Money | ValueVnd | | |
| note | Text multiline | Note | | |
| updatedAt | Date readonly | UpdatedAt | | UTC→local display |

**DoD:**
- [ ] `getInitData` client · Dropdown bind API-06
- [ ] Create body **không** gửi code
- [ ] Update gửi `source`
- [ ] **cấm** parent JSON trên field

### T-UI-PROD-01
**layer:** ui  
**status:** pending  
**DoD:**
- [ ] **Cấm** Resource / Slideout trên `/asset*` form
- [ ] View = `readOnly` / `<dl>` — **cấm** disabled xám toàn form
- [ ] **Cấm** Dropdown 8 nhãn demo production
- [ ] Excel / Leaflet / AI confirm **out of pack** — không invent UI

### T-UI-UX-01
**layer:** ui  
**status:** pending  
**skills:** `dev-ui-ux-constitution`  
**DoD:**
- [ ] spacing 4/8/16 · Lin* · no `filterMaxWidthPx`
- [ ] Input pad 6×10 · min-height 32 · focus shadow (GAP-P2-CSS-*)
- [ ] Checkbox grid 24×24 · cột 48px · ellipsis cột
- [ ] AppLayout definite height · title không clip (GAP-P2-LAYOUT-06)
- [ ] code field **readonly** không `disabled` xám (GAP-TL-UX-CODE-01)
- [ ] SearchInput dropdown portal ON

### T-UI-MAP-FORM
**layer:** —  
**status:** n/a  
**note:** packKind=`list` — không map OMS / không `/agent-dev-oms-map`

### T-QA-01
**layer:** qa  
**status:** pending (QA role — **không** làm ở Dev)  
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · T-BFF-01 · T-PERM-01  
**DoD:**
- [ ] `qa/scenarios.md` — A–D · SearchInput 23/38 · full-page form · mfeStdUrl · no ERP

### T-QA-CRUD-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-UI-LKP-01  
**DoD:**
- [ ] Smoke Create→Edit→View→Copy→(optional Delete) + filter route/km/org + init-data Dropdown
- [ ] QA-CRUD + LKP/PROD/UX rows

## Deps

```
T-CTX-01
T-BE-01 → T-BE-CRUD-01 → T-BE-INIT-01 → T-BFF-01
                ↘ T-PERM-01
T-BE-CRUD-01 + T-BE-INIT-01 + T-BFF-01
        → T-UI-LKP-01 → T-UI-FIELD-01
        → T-UI-LIST-01 → T-UI-FORM-01 → T-UI-ACT-01
        → T-UI-PROD-01 → T-UI-UX-01
T-UI-* → T-QA-01 · T-QA-CRUD-01  (QA role)
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · **toàn bộ** T-BE-* delta + T-UI-* (list filter + full-page field/lookup) |
| `devSlash` | `/agent-dev` — **không** `/agent-dev-oms-map` / `/agent-dev-ai-detect` |
| Anti-dup | `ssot-no-duplicate.md` — reuse only |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `Linm.RMMS.WebService` domain Asset · Integration lookups |
| HARD | `tl-retry-ssot-rereview` · cấm patch mù 1 chỗ · đóng GAP-SA-* + GAP-TL-* cùng surface |
| Build | MFE `yarn build` PASS · BE `dotnet build` API+BFF PASS · ghi implement § Build |
| **cấm** | `ERP.*` · parent JSON · 8 nhãn demo persist · Slideout form |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:15:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_31557cdc` |
| contentHashPriorSa | `task_86f45a3c` |
| contentHashPriorDesign | `task_52b245e2` |
| contentHashPriorPo | `task_9ab7f74a` |
| contentHashPriorDataAnaly | sha256:b21de98e21ce800f30383fb452770f85aa87d5be969e4bf0ccd5387c2acd17af |
