# Team lead — tasks — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass `ai` (Kind **B+D+F**) |
| solution_confirm | **approve** (autopilot · task_fc26e595) |
| design_confirm | **approve** (autopilot · task_79fb7b32) |
| route_confirm | **route_a** (autopilot · autoApprove=ON · no AskQuestion) |
| taskId | `task_20c15936` |
| updatedAt | `2026-08-12T14:45:00.000Z` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `form-type-task-pack.md` · `tl-grid-task-template.md` · `tl-design-grid-component-map.md` · `tl-grid-full-flow.md` · `slideout-form-layout.md` |
| Recheck | first implement · **`tl-retry-ssot-rereview` + LAYOUT-06 HARD** trước Dev Write |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/ai-asset-detect/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-MAP · T-CTX — zones **A–D** · Slideout Z1–Z3 footer-only · Kind F map |
| Solution | `specs/ai-asset-detect/be/solution-discovery.md` | T-BE-CRUD · T-BE-INIT · T-BE-AI · T-BE-CONFIRM-ASSET · T-MIG · T-SEED · T-BFF · T-PERM |
| Prototype | `ui/prototype/ai-asset-detect-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` | Dropdowns **init-data only** · SearchInput road-route / asset-type |
| PO | `specs/ai-asset-detect/po/requirement.md` | Camera ITS → **`ITS_CAMERA`** · Confirm bắt buộc |

**Khác `ai-vision`:** taxonomy thiết bị TS → Asset · **cấm** class ổ gà / Incident · **cấm ERP.***

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | perm codes · admin/event |

### ssot.reuse (REQUIRED mọi T-UI / T-BE)

| Concern | Reuse | Cấm (→ GAP-TL-DUP-*) |
|---------|-------|----------------------|
| UI | common-components `Lin*` / `Erp*` | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` · local `apiErrorNavigation` |
| State | page-hooks + common reducers | local `authSlice` / `uiSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope DTO |
| Auth | `[RequirePermission]` + Auth codes | custom perm attribute |
| Persist | flat entity columns | parent `*LinesJson` |
| BFF | proxy only | business logic in BFF |
| Dropdown | GET `…/init-data` | `KIND_LABEL` / hardcode 8 class FE |

## Source assignment (`be_repo_confirm` · `ui_repo_confirm` — user board trước Dev)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| `source.routes` | `/ai-vision/ai-asset-detect` · Slideout `?form=` · **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **AiVision** (`ai-vision`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/AiVision/` · `api/domains/ai-vision/LINM.RMMS.AiVision.Models/` |
| `source.bff` | `bff/domains/ai-vision/` · proxy `web-bff/api/v1/ai-vision/**` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` |
| Confirm→Asset | inject `IRoadAssetService` (domain **Asset** · cùng process) |
| Lookups | Integration `road-routes` · `asset-types` |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` |
| Context | `Linm.RMMS.Data/docs/context/features/ai-asset-detect.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html` |
| `mfeStdRoute` | `/ai-vision/ai-asset-detect` (**locked**) |
| `mfeStdUrl` | *(Dev sau `yarn start:std`)* |

### route_confirm (autopilot)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/ai-vision/ai-asset-detect` | PO+Design+SA đề xuất · prefix MFE AiVision |
| B (alt VN) | `/ai-vision/ph-ts` | phát hiện tài sản — **không chọn** (autopilot A) |
| C custom | — | n/a autopilot |

## API contract (from solution)

Base BE: `api/v1/ai-vision` · BFF: `web-bff/api/v1/ai-vision` · FE BASE: **`/ai-vision`** (asset-candidates / detect-assets).

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/ai-vision/asset-candidates` |
| API-02 | GET | `/api/v1/ai-vision/asset-candidates/init-data` |
| API-03 | GET | `/api/v1/ai-vision/asset-candidates/{id}` |
| API-04 | POST | `/api/v1/ai-vision/asset-candidates` |
| API-05 | PUT | `/api/v1/ai-vision/asset-candidates/{id}` |
| API-06 | DELETE | `/api/v1/ai-vision/asset-candidates/{id}` (soft · Draft) |
| API-07 | POST | `/api/v1/ai-vision/detect-assets` (stub P1) |
| API-08 | POST | `/api/v1/ai-vision/detect-assets/batch` |
| API-09 | GET | `/api/v1/ai-vision/asset-candidates/nearby` |
| API-10 | POST | `/api/v1/ai-vision/asset-candidates/{id}/confirm` |
| API-11 | POST | `/api/v1/ai-vision/asset-candidates/{id}/dismiss` |
| L-01 | GET | `/api/v1/integration/road-routes/search` |
| L-02 | GET | `/api/v1/integration/asset-types/search` (gồm `ITS_CAMERA`) |
| L-03 | GET | `/api/v1/asset/road-assets` (map existing pins · **reuse**) |

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **tz_required** | API-01 from/to · DetectedAt · API-03/04/05/10 | `/review-timezone-implement` |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/dismiss load) | `/implement-view-cross-company` |
| SHARE | **share_tenant** | `AiVisionAssetCandidateEntity` | `/implement-shared-table` · tenant_keep |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | gap/stub | Align codes khi NuGet sẵn · stub Attribute OK P1 |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-TOKEN | n/a P1 | |
| SD-JOB | n/a | detect stub sync |
| SD-TENANT | **required** | `CompanyCode` · share_tenant |
| SD-NO-JSON | **required** | Flat scalars · `BboxJson` scalar text OK |
| SD-SEARCH | **required** | search must work · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_required |
| SD-XCO | **required** | get_only |
| SD-SHARE | **required** | share_tenant |
| SD-INIT | **required** | Dropdown assetClass/status/engine từ init-data |

## DES-GRID → Lin* (HARD — GAP-TL-GRID-MAP-01)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / header · titleIcon `fa-camera` · badge AI |
| B | DES-GRID-B | `catalogToolbar` FULL · config=`fa-cog` |
| FILTER | DES-GRID-FILTER | Zone B: SearchInput route · Dropdown class/status · Date from/to · clear |
| C0 | DES-GRID-C0 | listTitle · row-menu help |
| C1 | DES-GRID-C1 | `SearchTextInput` — **cấm** nút Tìm |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON |
| C2a | DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar |
| F | DES-GRID-F | Zone F config / ui-schema |
| H | DES-GRID-H | History stub (`LinCatalogHistoryModal`) |
| Z | DES-GRID-Z | Kind D slideout · **footer actions only** |
| MAP | DES-MAP-F | Kind F overlay · pin AI new / existing / confirmed |
| — | shell | **1×** `LinPageLayout` — **cấm** nested CatalogListShell |

## Retry SSOT re-review (HARD — trước Dev Write)

Live page audit checklist (`tl-retry-ssot-rereview.md` + `tl-list-shell-height.md`):

| # | Check | Target |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` + **LAYOUT-06** | **PASS** · live title+toolbar+grid/empty |
| 4 | Toolbar catalog: refresh · history · config `fa-cog` · +Tạo · Giả lập frame · Nearby · Export · Reset seed · selection view/edit | **PASS** |
| 5 | Filter: SearchTextInput + Zone B filters — **cấm nút Tìm** (GAP-P2-87) | **PASS** |
| 6 | Grid `LinCatalogDataGrid` · kéo cột default ON | **PASS** |
| 7 | Zone F config modal | **PASS** |
| 8 | History stub OK | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form Create/Edit/View/Copy slideout footer-only + Confirm/Dismiss modal | **PASS** |
| 11 | Dropdown options từ init-data only | **PASS** |
| 12 | Map overlay pins + Fit | **PASS** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`  
**Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface. Ghi `retry.ssot_rereview` trên implement MD.

---

## FormType pack (canonical — `form-type-task-pack`)

`packKind=list` + `featureClass=ai` → **list pack + ai pack** + Kind F overlay (`T-UI-MAP-01` rút gọn · không full OMS map page).

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | TL/Dev | **done** (TL) | Context + CONTEXT.md ownership · control-map |
| T-PERM-01 | Dev | **pending** | `ai-vision.asset-candidates.*` |
| T-UI-LIST-01 | Dev | **pending** | A–D · `tl-grid-task-template` FULL |
| T-UI-FORM-01 | Dev | **pending** | Kind D slideout C/E/V/Copy · footer only |
| T-UI-ACT-01 | Dev | **pending** | Action inventory → form/API |
| T-BE-CRUD-01 | Dev | **pending** | API-01…06 |
| T-BE-INIT-01 | Dev | **pending** | API-02 init-data |
| T-BE-AI-01 | Dev | **pending** | API-07…09 detect + nearby |
| T-UI-AI-01 | Dev | **pending** | Giả lập frame + result feed |
| T-UI-AI-FORM-01 | Dev | **pending** | HITL Confirm/Dismiss modals |
| T-BE-CONFIRM-ASSET | Dev | **pending** | API-10/11 + `IRoadAssetService` |
| T-UI-MAP-01 | Dev | **pending** | Kind F overlay cùng page (không full OMS) |
| T-MIG-01 | Dev | **pending** | `Schema_RmmsAiVisionAssetCandidates` + RoadAsset Source/SourceRef |
| T-SEED-ITS_CAMERA | Dev | **pending** | seed asset-type + JSON |
| T-BFF-01 | Dev | **pending** | proxy asset-candidates · detect-assets |
| T-QA-CRUD-01 | QA | **pending** | Create→Edit→View→Delete + row menu |
| T-QA-AI-01 | QA | **pending** | detect stub + confirm/dismiss |
| T-LIB-01 | — | **n/a** | Lin* đã có trên common |

**GAP-TL-FORMTYPE-01:** closed — đủ list + ai + map overlay ids.

---

## Task pack (detail)

### T-CTX-01
**layer:** docs  
**status:** **done** (TL this turn)  
**DoD:**
- [x] Context feature + control-map/actions khớp design+solution
- [x] MFE `Linm.Web.RMMS.AiVision/docs/context/README.md` §2–§3 + hub `CONTEXT.md` thêm slug `ai-asset-detect`
- [x] DOMAIN-MAP slug đã có (SA) · route locked `/ai-vision/ai-asset-detect`
- [x] API paths align solution API-01…11

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**codes:** `ai-vision.asset-candidates.read|create|update|delete|confirm|dismiss`  
**skills:** `/implement-erp-form-permissions` · catalog-list-permissions · api-permission-gate  
**ssot.platform_auth:** `Linm.Platform.Authentication` (stub OK P1)  
**DoD:**
- [ ] FE toolbar/form/row menu gated · local mode OK
- [ ] BE `[RequirePermission]` stub comments trên controllers
- [ ] Confirm/Dismiss riêng perm

### T-BE-CRUD-01
**layer:** api  
**status:** pending  
**from_solution:** API-01…06 · entity `AiVisionAssetCandidateEntity` · table `rmms_ai_vision_asset_candidates`  
**source:** backend=`Linm.RMMS.WebService` · domain=`AiVision` · **cấm ERP.***  
**ssot.platform_be:** `Linm.Platform.CommonLib`  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-view-cross-company` · `/review-timezone-implement` · `/implement-shared-table`  
**gates:** TZ · XCO get_only · SHARE tenant  
**DoD:**
- [ ] ApiResponse / paged · search must work · pageSize ∈{50,100,200,500}
- [ ] Soft-delete Draft only · Edit/Delete locked khi Confirmed/Dismissed
- [ ] Code server-gen `AC-YYYYMMDD-NNNN`
- [ ] `dotnet build` API PASS · **no ERP.***

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**from_solution:** API-02  
**skills:** `tl-dropdown-from-backend`  
**DoD:**
- [ ] `{ assetClasses[8], statuses[], engines[], nearbyRadiusMeters }`
- [ ] FE Dropdown **chỉ** từ init-data — **cấm** KIND_LABEL (GAP-DEV-DROPDOWN-HARDCODE-01)
- [ ] 8 class AI — **cấm** class ổ gà `ai-vision`

### T-BE-AI-01
**layer:** api  
**status:** pending  
**from_solution:** API-07 · API-08 · API-09  
**DoD:**
- [ ] Detect frame/batch **stub** P1 (không GPT thật) · persist Draft + NearbyRisk
- [ ] Nearby Haversine default **25 m** · config `AiVision:AssetDetect:NearbyRadiusMeters` (prod ITS 10)
- [ ] **không** auto-create Asset
- [ ] `dotnet build` PASS

### T-BE-CONFIRM-ASSET
**layer:** api  
**status:** pending  
**from_solution:** API-10 · API-11  
**deps:** T-BE-CRUD-01 · Asset `IRoadAssetService`  
**DoD:**
- [ ] Confirm → RoadAsset Code=`TS-AI-YYYYMMDD-NNNN` · Type=`assetTypeCode` · Source=`ai-asset-detect` · SourceRef=candidate Code
- [ ] Default map AI class → asset-type (Camera ITS → **`ITS_CAMERA`**)
- [ ] Dismiss → Status=Dismissed · Draft only
- [ ] XCO load candidate trước mutate
- [ ] `dotnet build` PASS

### T-MIG-01
**layer:** migration  
**status:** pending  
**skills:** `/database-migration` · `/new-migration`  
**DoD:**
- [ ] Named migration **`Schema_RmmsAiVisionAssetCandidates`** (+ alter `rmms_road_assets` Source/SourceRef)
- [ ] Pair `.cs` + `.Designer.cs` · DbSet · **no parent JSON**
- [ ] `dotnet build` PASS

### T-SEED-ITS_CAMERA
**layer:** data  
**status:** pending  
**DoD:**
- [ ] Insert `rmms_asset_types` · code=`ITS_CAMERA` · name=`Camera ITS / camera giám sát giao thông` · `groupCode=GIAO_THONG`
- [ ] Update `docs/context/seed/asset-type-seed.json`
- [ ] Searchable qua L-02

### T-BFF-01
**layer:** bff  
**status:** pending  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Proxy-only `web-bff/api/v1/ai-vision/asset-candidates/**` · `detect-assets/**`
- [ ] Forward `Authorization` · `X-Company-Id`
- [ ] `dotnet build` BFF PASS · **no business logic**

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**page:** `/ai-vision/ai-asset-detect`  
**from_design:** zones A,B,FILTER,C0–C3,D,F,H · reviewUrl prototype  
**implement.wire:** ui → `services/ai-vision/asset-candidates` (endpoint) → apiClient → BFF → API  
**implement.state:** list=page-hooks · redux_common=yes  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`

**skills (REQUIRED load trước Write):**
- /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height · **tl-retry-ssot-rereview**
- design_zones: DES-GRID-* (shared-grid-example)
- /erp-form-context · /review-grid · /erp-filter-form
- /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
- form_pair → T-UI-FORM + dev-form-review-checklist
- init_data → T-BE-INIT-01

**ssot.reuse:**
  design_zones: DES-GRID-A,B,FILTER,C0,C1,C2,C2a,C3,D,F,H,Z + DES-MAP-F
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06)
  ui_filter: SearchTextInput + Zone B filters (SearchInput road-route · Dropdown · Date) — cấm nút Tìm (GAP-P2-87)
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·create) + domain: sim-frame · nearby · export-stub · reset-seed · badge AI
  ui_grid: LinCatalogDataGrid · resizable default ON
  ui_footer: LinCatalogListPagination ONLY — cấm footerPagination · pageSizeBar · local pager
  ui_config: LinCatalogUiSchemaEditorModal | LinListTableConfigModal
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp (GAP-P2-94)
  ui_history: LinCatalogHistoryModal stub OK
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection
  http: apiClient · unwrap — cấm clone ApiClient
  init_data: GET …/asset-candidates/init-data only

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: «AI phát hiện tài sản» + fa-camera + badge AI
  listTitle: «Danh sách candidate»
  footer: LinCatalogListPagination · pageSize [50,100,200,500]

**implement.toolbar:**
  wire: catalogToolbar trên LinPageLayout
  actions: onRefresh · canAdd/onAdd (+ Tạo candidate) · canHistory/onHistory · showSchemaConfig+onEditConfig (fa-cog)
  selection: showEdit/onEdit · showView/onView
  domain: Giả lập frame · Nearby · Export stub · Reset seed (dev)
  form_pair: onAdd→Create · onEdit/onView→FormMode

**implement.grid:**
  columns: STT · □ · ID · Loại TS · Score(%) · Tọa độ · Tuyến · TT · Engine/Model · Nearby · Phát hiện · Mã Asset · ⋮
  resizable: DEFAULT true

**implement.grid_menu:**
  items: view · edit · copy · confirm · dismiss · history (perm gate)
  open: dbl/Ctrl/long-press · listRowMenuHelp

**implement.list_parity:**
  pilot_ux: DoiTuongPage
  layout: flex-root + GAP-P2-LAYOUT-06 smoke
  tree: n/a
  filter: SearchTextInput + Zone B — no Tìm btn
  loading: useServerPagedListLoading
  footer: LinCatalogListPagination (common ONLY)
  row_menu: LinCatalogRowActionMenu · GAP-P2-94
  zone_f: config modal
  history: stub OK
  grid_resize: resizable default ON
  perm: ai-vision.asset-candidates.* + local mode

**APIs:** API-01 · API-02 · L-01  
**deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01  

**DoD:**
- [ ] Dev re-review checklist § HARD trước Write (`tl-retry-ssot-rereview`) · ghi `retry.ssot_rereview`
- [ ] Chỉ Lin*/Erp* từ common — không local pager/toolbar/ApiClient
- [ ] A–D parity · search work · Zone F · History stub
- [ ] BASE list = `/ai-vision/asset-candidates`
- [ ] `yarn build` PASS (MFE AiVision)

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** Kind D Slideout Z1–Z3 · **footer_actions_only** · fields control-map §5.2  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm` · `dev-form-review-checklist` · `slideout-form-layout`  
**APIs:** API-03 · API-04 · API-05 · API-06 · L-01 · init-data  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode Create/Edit/View/Copy · View = readOnly (không disabled xám)
- [ ] Footer only: C/E/Copy = Hủy/Lưu · View = Đóng/Sửa/Sao chép/Confirm/Dismiss — **cấm** top Quay lại/Hủy/Lưu trên Z1
- [ ] leave-confirm dirty · validate required (assetClass·score·engine·lat/lng·routeId)
- [ ] Dropdown từ init-data only
- [ ] `yarn build` PASS

### T-UI-ACT-01 — action inventory
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST C1 | `SearchTextInput` → applyFilters | GET `/asset-candidates?search=` |
| Route / Class / Status / Date | S-LIST FILTER | SearchInput · Dropdown · Date | GET query |
| Clear filter | FILTER | reset filters | GET |
| Refresh | toolbar | reloadAll | GET |
| + Tạo candidate | toolbar | openCreate → Slideout | POST |
| Edit / View (toolbar) | toolbar | openRow | GET · PUT |
| History | toolbar | openHistory stub | DEFER |
| Config `fa-cog` | toolbar | schema/Zone F modal | — |
| Giả lập frame | toolbar | detectFrame | POST `/detect-assets` |
| Nearby | toolbar | checkNearby | GET `/nearby` |
| Export stub | toolbar | toast/stub | — |
| Reset seed | toolbar (dev) | reset local/seed | — |
| Row View/Edit/Copy | row menu | handleRowMenuSelect | GET · POST copy |
| Row Confirm | row menu / form | open Confirm modal | POST `/{id}/confirm` |
| Row Dismiss | row menu / form | open Dismiss modal | POST `/{id}/dismiss` |
| Deep-link `?form=` | URL | create/edit/view/copy | GET when id |
| Map pin → View | S-MAP | openRow(view) | GET |
| Soft-delete Draft | row/toolbar (perm) | deleteRow | DELETE |

**GAP-P2-ACT-\* (pre-Dev):** mọi action trên phải wire — thiếu = GAP-P2-ACT-* · **cấm** Aligned.

**DoD:**
- [ ] Inventory đủ · search work · Confirm/Dismiss/sim-frame/nearby wired
- [ ] `yarn build` PASS

### T-UI-AI-01
**layer:** ui  
**status:** pending  
**from_design:** S-FEED · toolbar «Giả lập frame»  
**APIs:** API-07 · API-08  
**deps:** T-BE-AI-01 · T-UI-LIST-01  
**DoD:**
- [ ] Sim frame tạo 1–N Draft trên list + map pins
- [ ] Badge AI / engine P1 · **không** hứa mAP local
- [ ] `yarn build` PASS

### T-UI-AI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** S-MOD-CONFIRM · S-MOD-DISMISS  
**APIs:** API-10 · API-11 · L-02  
**deps:** T-BE-CONFIRM-ASSET · T-UI-FORM-01  
**DoD:**
- [ ] Confirm modal: SearchInput `asset-type` * · default map class→code (ITS→`ITS_CAMERA`)
- [ ] Dismiss modal: optional note
- [ ] NearbyRisk=true → user ack trước Confirm (FE) · BE không block
- [ ] `yarn build` PASS

### T-UI-MAP-01
**layer:** ui  
**status:** pending  
**from_design:** Kind F overlay cùng S-LIST · DES-MAP-F  
**skills:** `/agent-dev-oms-map` (rút gọn — overlay only · **không** full OMS page)  
**APIs:** API-01 · L-03  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] Pins: AI new (Draft) · confirmed · existing TS (road-assets)
- [ ] Basemap OSM / Esri Streets / Esri sat · Fit
- [ ] Pin click → View slideout
- [ ] **Cấm** giả full Kind B list trên map page riêng
- [ ] `yarn build` PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01 · T-UI-FORM-01  
**DoD:**
- [ ] Smoke Create→Edit→View→Copy→Delete + row menu
- [ ] Search/filter/pagination · Zone F · leave-confirm
- [ ] Update `qa/scenarios.md`

### T-QA-AI-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-AI-01 · T-BE-CONFIRM-ASSET · T-UI-MAP-01  
**DoD:**
- [ ] Sim frame → Draft · Nearby banner · Confirm→Asset · Dismiss
- [ ] Map pin parity · seed ITS_CAMERA searchable
- [ ] Update `qa/scenarios.md` QA-AI rows

---

## Deps order

```
T-CTX-01 (done)
  → T-MIG-01 → T-SEED-ITS_CAMERA
  → T-BE-CRUD-01 → T-BE-INIT-01 → T-BE-AI-01 → T-BE-CONFIRM-ASSET
  → T-BFF-01
  → T-PERM-01
  → T-UI-LIST-01 → T-UI-FORM-01 → T-UI-ACT-01
                 ↘ T-UI-AI-01 · T-UI-AI-FORM-01 · T-UI-MAP-01
  → verify: MFE yarn build PASS · BE dotnet build PASS
  → T-QA-CRUD-01 · T-QA-AI-01 → Review
```

**HARD trước Dev:** board `beRepo` && `uiRepo` tick (user) · path = `Linm.RMMS.WebService` + `Linm.Web.RMMS.AiVision`.

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · roleOnly khi enqueue · implement `specs/ai-asset-detect/implement/ai-asset-detect.md` |
| Priority | T-MIG + T-BE-CRUD/INIT/AI/CONFIRM + T-BFF → T-UI-LIST/FORM/ACT/AI/MAP |
| Anti-dup | `ssot-no-duplicate.md` — reuse AiVision detections patterns · **tách** bảng candidates |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| Auth SSOT | `Linm.Platform.Authentication` |
| HARD | `tl-retry-ssot-rereview` · fix_all GAP cùng surface · build PASS trước completed |
| Cấm | class ổ gà · nested CatalogListShell · footerPagination · KIND_LABEL · auto-create Asset |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.10.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.10.3 |
| rulesVersion | 2026.08.11.1 |
| generatedAt | 2026-08-12T14:45:00.000Z |
| versionGate | ok |
| taskId | `task_20c15936` |
| contentHash (data-analy) | `sha256:97450ff90d8d4576a8de82e118d463e705b49b21f212a76fd178527a8b38793e` |

---
<!-- Version meta: skillVersion=2026.08.10.2 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.10.3 · versionGate=ok -->
