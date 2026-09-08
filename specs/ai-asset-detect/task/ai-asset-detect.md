# Team lead — tasks — ai-asset-detect

| Field | Value |
|-------|-------|
| feature | `ai-asset-detect` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass `ai` (Kind **B+D+F**) |
| solution_confirm | **approve** (autopilot · task_7381f42c) |
| design_confirm | **approve** (autopilot · task_a5f2efac) |
| route_confirm | **route_a** (autopilot · autoApprove=ON · locked) |
| taskId | `task_e89cb646` |
| updatedAt | `2026-09-06T17:00:00.000Z` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `form-type-task-pack.md` · `agent-dev-assign.md` · `tl-design-grid-component-map.md` · `tl-grid-task-template.md` · `tl-grid-full-flow.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `filter-bar-layout-hard.md` · `list-form-quality-gates.md` · `slideout-form-layout.md` |
| Recheck | edit_page reopen · **`tl-retry-ssot-rereview` + LAYOUT-06 HARD** trước Dev Write |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/ai-asset-detect/ui/design.md` + reviewUrl | T-UI-LIST · FORM · FILTER · LEAVE · MISS · ACT · MAP · FILE |
| Solution | `specs/ai-asset-detect/be/solution-discovery.md` | T-BE-CRUD · INIT · AI · CONFIRM · MISS · FILE · MIG · SEED · BFF · PERM |
| Prototype | `ui/prototype/ai-asset-detect-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/ai-asset-detect-control-hint.md` | Dropdowns **init-data only** · SearchInput road-route / asset-type |
| filter-bar | `specs/_data-analy/features/ai-asset-detect-filter-bar.md` | **T-UI-FILTER-01** load **trước Write** |
| PO | `specs/ai-asset-detect/po/requirement.md` | miss reconcile · FileService · LeaveConfirmModal |

**Delta edit_page (SA):** ImageFileId · API-12 miss · missOnly · FilterBar keys · dedupe P1 **25 m** · GAP-AAD-FILE-01 **CLOSED**.  
**Khác `ai-vision`:** taxonomy TS → Asset · **cấm** class ổ gà / YOLO «mất» · **cấm ERP.***

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
| Persist | flat entity columns · **ImageFileId uuid** | parent `*LinesJson` · URL blob SSOT |
| BFF | proxy only | business logic in BFF |
| Files | `web-bff/api/v1/files/*` | scaffold API upload mới |
| Dropdown | GET `…/init-data` | `KIND_LABEL` / hardcode 8 class FE |

## Source assignment (`beRepo` · `uiRepo` — STATUS confirm)

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
| Confirm→Asset | inject `IRoadAssetService` (domain **Asset**) |
| Miss→Incident | peer `POST /api/v1/incident/incidents` (L-05) |
| Lookups | Integration `road-routes` · `asset-types` · files L-04 |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/ai-asset-detect.html` |
| Context | `Linm.RMMS.Data/docs/context/features/ai-asset-detect.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-asset-detect/ui/prototype/ai-asset-detect-list-prototype.html` |
| `mfeStdRoute` | `/ai-vision/ai-asset-detect` (**locked**) |
| `mfeStdUrl` | `http://localhost:9303/ai-vision/ai-asset-detect` (Dev `yarn start:std`) |

### route_confirm (autopilot — locked)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/ai-vision/ai-asset-detect` | PO+Design+SA · prefix MFE AiVision |
| B (alt VN) | `/ai-vision/ph-ts` | **không chọn** |
| C custom | — | n/a |

## API contract (from solution)

Base BE: `api/v1/ai-vision` · BFF: `web-bff/api/v1/ai-vision` · FE BASE: **`/ai-vision`**.

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/ai-vision/asset-candidates` (+ **missOnly**) |
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
| API-12 | POST | `/api/v1/ai-vision/asset-candidates/{id}/miss` → L-05 Incident |
| L-01 | GET | `/api/v1/integration/road-routes/search` |
| L-02 | GET | `/api/v1/integration/asset-types/search` (gồm `ITS_CAMERA`) |
| L-03 | GET | `/api/v1/asset/road-assets` (map existing pins) |
| L-04 | * | `web-bff/api/v1/files/*` · ImageFileId resign |
| L-05 | POST | `/api/v1/incident/incidents` (peer API-12) |

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **tz_required** | API-01 from/to · DetectedAt · API-03/04/05/10/12 | `/review-timezone-implement` |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/dismiss/miss load) | `/implement-view-cross-company` |
| SHARE | **share_tenant** | `AiVisionAssetCandidateEntity` | `/implement-shared-table` · tenant_keep |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | gap/stub | Align codes khi NuGet sẵn · stub Attribute OK P1 |
| SD-BFF | **required** | Proxy only · files reuse web-bff |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-TOKEN | n/a P1 | |
| SD-JOB | n/a | detect stub sync · hostInfer Linm.RMMS.Vision |
| SD-TENANT | **required** | `CompanyCode` · share_tenant |
| SD-NO-JSON | **required** | Flat scalars · `BboxJson` scalar text OK |
| SD-SEARCH | **required** | search must work · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_required |
| SD-XCO | **required** | get_only |
| SD-SHARE | **required** | share_tenant |
| SD-INIT | **required** | Dropdown assetClass/status/engine từ init-data |
| SD-FILE | **required** | ImageFileId uuid + FileService · **cấm** URL blob SSOT |
| SD-MISS | **required** | API-12 + missOnly · **cấm** YOLO class «mất» |

## DES-GRID → Lin* (HARD — GAP-TL-GRID-MAP-01)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / header · titleIcon `fa-camera` · **cấm badge `AI`** (`ai-chrome-skip`) |
| B | DES-GRID-B | `catalogToolbar` FULL · config=`fa-cog` · Reconcile mất |
| FILTER | DES-GRID-FILTER | **`LinErpListFilterBar`** · `data-lin-list-layout="erp-filter-bar"` · V1–V10 · **lấp hàng rồi wrap** · 🔍 mép phải |
| C0 | DES-GRID-C0 | listTitle · row-menu help |
| C1 | DES-GRID-C1 | search field trong bar — **cấm** nút Tìm riêng |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · kéo cột default ON |
| C2a | DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` · row **Mất?** |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar |
| F | DES-GRID-F | Zone F / ui-schema · **T-UI-CFG-01** full cột |
| H | DES-GRID-H | History stub (`LinCatalogHistoryModal`) |
| Z | DES-GRID-Z | Kind D slideout · **footer actions only** · FileUpload imageFileId |
| MAP | DES-MAP-F | Kind F overlay · pin AI new / existing / confirmed / miss |
| MISS | DES-MOD-MISS | Miss Modal · expectedAssetId · missWindowMin |
| LEAVE | DES-LEAVE | `LeaveConfirmModal` |
| — | shell | **1×** `LinPageLayout` — **cấm** nested CatalogListShell |

## Retry SSOT re-review (HARD — trước Dev Write)

Live page audit checklist (`tl-retry-ssot-rereview.md` + `tl-list-shell-height.md`):

| # | Check | Target |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | Footer `LinCatalogListPagination` — cấm `footerPagination` / `pageSizeBar` | **PASS** |
| 3 | Flex root + `useServerPagedListLoading` + **LAYOUT-06** | **PASS** · live title+toolbar+grid/empty |
| 4 | Toolbar catalog FULL + domain (sim-frame · nearby · Reconcile mất · export stub · reset seed) | **PASS** |
| 5 | Filter: `LinErpListFilterBar` + missOnly — **cấm nút Tìm** · V1–V10 | **PASS** |
| 6 | Grid `LinCatalogDataGrid` · kéo cột default ON | **PASS** |
| 7 | Zone F / full cột config (`LinCatalogUiSchemaEditorModal`) | **PASS** |
| 8 | History stub OK · **cấm** window.alert | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form Create/Edit/View/Copy slideout footer-only + Confirm/Dismiss/Miss modal + Leave | **PASS** |
| 11 | Dropdown options từ init-data only | **PASS** |
| 12 | Map overlay pins + Fit · FileUpload ImageFileId | **PASS** |
| 13 | **0** badge `AI` header | **PASS** |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`  
**Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface. Ghi `retry.ssot_rereview` trên implement MD.

---

## FormType pack (canonical — `form-type-task-pack` · list + ai + map)

`packKind=list` + `featureClass=ai` → **list pack + ai pack** + Kind F overlay + **delta miss/file**.

| Task id | Role | Status | Maps to / notes | devSlash |
|---------|------|--------|-----------------|----------|
| T-CTX-01 | TL/Dev | **done** (TL) | Context + DOMAIN-MAP · control-map | — |
| T-PERM-01 | Dev | **pending** | `ai-vision.asset-candidates.*` (+miss) | `/agent-dev` |
| T-MIG-01 | Dev | **pending** | base `Schema_RmmsAiVisionAssetCandidates` | `/agent-dev` |
| T-MIG-FILE-01 | Dev | **pending** | ALTER ImageFileId + Miss* | `/agent-dev` |
| T-SEED-ITS_CAMERA | Dev | **pending** | seed asset-type ITS_CAMERA | `/agent-dev` |
| T-BE-CRUD-01 | Dev | **pending** | API-01…06 · missOnly query | `/agent-dev` |
| T-BE-INIT-01 | Dev | **pending** | API-02 init-data | `/agent-dev` |
| T-BE-UISCHEMA-01 | Dev | **pending** | catalog ui-schema registry/seed | `/agent-dev` |
| T-BE-AI-01 | Dev | **pending** | API-07…09 · dedupe 25 m | `/agent-dev-ai-detect` |
| T-BE-CONFIRM-ASSET | Dev | **pending** | API-10/11 + IRoadAssetService | `/agent-dev` |
| T-BE-MISS-01 | Dev | **pending** | API-12 + L-05 · MissFlag | `/agent-dev` |
| T-BE-FILE-01 | Dev | **pending** | ImageFileId persist + resign GET | `/agent-dev` |
| T-BFF-01 | Dev | **pending** | proxy asset-candidates · detect-assets | `/agent-dev` |
| T-UI-LIST-01 | Dev | **pending** | A–D · `tl-grid-task-template` FULL · **0 AI badge** | `/agent-dev` |
| T-UI-FILTER-01 | Dev | **pending** | LinErpListFilterBar + filter-bar.md · V1–V10 · missOnly | `/agent-dev` |
| T-UI-CFG-01 | Dev | **pending** | LinCatalogUiSchemaEditorModal full cột | `/agent-dev` |
| T-UI-FORM-01 | Dev | **pending** | Kind D slideout C/E/V/Copy · footer only | `/agent-dev` |
| T-UI-LEAVE-01 | Dev | **pending** | LeaveConfirmModal · cấm native alert/confirm | `/agent-dev` |
| T-UI-ACT-01 | Dev | **pending** | Action inventory → form/API | `/agent-dev` |
| T-UI-LKP-01 | Dev | **pending** | SearchInput road-route / asset-type / expectedAsset | `/agent-dev` |
| T-UI-FIELD-01 | Dev | **pending** | control-map ↔ DTO/API | `/agent-dev` |
| T-UI-PROD-01 | Dev | **pending** | cấm note Dev trên UI | `/agent-dev` |
| T-UI-UX-01 | Dev | **pending** | UI-Ux · slideout 2-col | `/agent-dev` |
| T-UI-RESP-01 | Dev | **pending** | 1280/768/375 | `/dev-web-responsive` |
| T-UI-HIST-01 | Dev | **pending** | History + cấm window.alert | `/agent-dev` |
| T-UI-FILE-01 | Dev | **pending** | FileUpload imageFileId · L-04 | `/agent-dev` |
| T-UI-MISS-01 | Dev | **pending** | missOnly · Reconcile · row Mất? · S-MOD-MISS | `/agent-dev` |
| T-UI-AI-01 | Dev | **pending** | Giả lập frame + result feed | `/agent-dev-ai-detect` |
| T-UI-AI-FORM-01 | Dev | **pending** | HITL Confirm/Dismiss | `/agent-dev-ai-detect` |
| T-UI-MAP-01 | Dev | **pending** | Kind F overlay (không full OMS) | `/agent-dev-oms-map` |
| T-QA-CRUD-01 | QA | **pending** | CRUD + row menu + leave Modal | `/agent-qa` |
| T-QA-FORM-01 | QA | **pending** | field e2e | `/agent-qa` |
| T-QA-FILTER-01 | QA | **pending** | filter V1–V5+V10 live | `/agent-qa` |
| T-QA-FILTER-02 | QA | **pending** | headed D+T+M | `/agent-qa` |
| T-QA-AI-01 | QA | **pending** | detect + HITL + miss + map | `/agent-qa` |
| T-UD-BUG-15 | docs | **pending** | title + header &lt; 22px | — |
| T-UD-BUG-16 | docs | **pending** | filter align | — |
| T-LIB-01 | — | **n/a** | Lin* đã có trên common | — |

**GAP-TL-FORMTYPE-01:** closed — đủ list + ai + map + filter/leave + delta miss/file.  
**GAP-TL-DEV-ASSIGN-01:** closed — devSlash per surface.  
**GAP-TL-FILTER-01 / GAP-TL-LEAVE-01:** closed — T-UI-FILTER-01 · T-UI-LEAVE-01 + T-QA-FILTER-*.

---

## Task pack (detail)

### T-CTX-01
**layer:** docs  
**status:** **done** (TL prior · kept edit_page)  
**DoD:**
- [x] Context + control-map khớp design+solution (delta ImageFileId/miss)
- [x] DOMAIN-MAP · route locked `/ai-vision/ai-asset-detect`
- [x] API paths align solution API-01…12 · L-01…05

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**codes:** `ai-vision.asset-candidates.read|create|update|delete|confirm|dismiss|miss`  
**skills:** `/implement-erp-form-permissions` · catalog-list-permissions · api-permission-gate  
**DoD:**
- [ ] FE toolbar/form/row menu gated · local mode OK
- [ ] BE `[RequirePermission]` stub comments
- [ ] Confirm/Dismiss/Miss riêng perm

### T-MIG-01
**layer:** migration  
**status:** pending  
**skills:** `/database-migration` · `/new-migration`  
**DoD:**
- [ ] Named migration **`Schema_RmmsAiVisionAssetCandidates`** (+ alter `rmms_road_assets` Source/SourceRef nếu chưa)
- [ ] Pair `.cs` + `.Designer.cs` · DbSet · **no parent JSON**
- [ ] `dotnet build` PASS

### T-MIG-FILE-01 — ImageFileId + Miss* (**DELTA**)
**layer:** migration  
**status:** pending  
**from_solution:** `Schema_RmmsAiVisionAssetCandidates_ImageFileId`  
**DoD:**
- [ ] ALTER ADD `ImageFileId` uuid? · `MissFlag` · `ExpectedAssetId` · `MissWindowMin` · `IncidentDraftId`
- [ ] Pair migration files · `dotnet build` PASS
- [ ] GAP-AAD-FILE-01 remain CLOSED

### T-SEED-ITS_CAMERA
**layer:** data  
**status:** pending  
**DoD:**
- [ ] Insert `rmms_asset_types` · code=`ITS_CAMERA` · name=`Camera ITS / camera giám sát giao thông` · `groupCode=GIAO_THONG`
- [ ] Update `docs/context/seed/asset-type-seed.json`
- [ ] Searchable qua L-02

### T-BE-CRUD-01
**layer:** api  
**status:** pending  
**from_solution:** API-01…06 · entity `AiVisionAssetCandidateEntity`  
**source:** backend=`Linm.RMMS.WebService` · domain=`AiVision` · **cấm ERP.***  
**gates:** TZ · XCO get_only · SHARE tenant  
**DoD:**
- [ ] ApiResponse / paged · search must work · pageSize ∈{50,100,200,500}
- [ ] Query keys: search · routeId · assetClass · status · fromDate · toDate · **missOnly**
- [ ] Soft-delete Draft only · Edit/Delete locked khi Confirmed/Dismissed
- [ ] Code server-gen `AC-YYYYMMDD-NNNN`
- [ ] DTO exposes imageFileId · missFlag · expectedAssetId · incidentDraftId
- [ ] `dotnet build` API PASS · **no ERP.***

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**from_solution:** API-02  
**skills:** `tl-dropdown-from-backend`  
**DoD:**
- [ ] `{ assetClasses[8], statuses[], engines[], nearbyRadiusMeters }`
- [ ] FE Dropdown **chỉ** từ init-data — **cấm** KIND_LABEL
- [ ] 8 class AI — **cấm** class ổ gà · **cấm** class «mất»

### T-BE-UISCHEMA-01
**layer:** api  
**status:** pending  
**DoD:**
- [ ] `CatalogUiSchemaRegistry` + Seed `{catalogKind}` asset-candidates
- [ ] GET/PUT `/integration/catalogs/{kind}/ui-schema`
- [ ] FE wire T-UI-CFG-01

### T-BE-AI-01
**layer:** api  
**status:** pending  
**from_solution:** API-07 · API-08 · API-09  
**devSlash:** `/agent-dev-ai-detect`  
**DoD:**
- [ ] Detect frame/batch **stub** P1 · persist Draft + NearbyRisk
- [ ] Nearby Haversine default **25 m** · config `AiVision:AssetDetect:NearbyRadiusMeters` (prod ITS 10 · PostGIS DEFER)
- [ ] **không** auto-create Asset · **không** invent missing-detect YOLO
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

### T-BE-MISS-01 — miss reconcile (**DELTA**)
**layer:** api  
**status:** pending  
**from_solution:** API-12 · L-05  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] POST `/{id}/miss` · body expectedAssetId · missWindowMin · note
- [ ] Set MissFlag · ExpectedAssetId · MissWindowMin · create peer Incident (L-05) · store IncidentDraftId
- [ ] XCO load · TZ on DetectedAt/window · Draft/eligible only
- [ ] **cấm** YOLO class «mất»
- [ ] `dotnet build` PASS

### T-BE-FILE-01 — ImageFileId (**DELTA**)
**layer:** api  
**status:** pending  
**from_solution:** persist ImageFileId · L-04 resign  
**deps:** T-MIG-FILE-01 · T-BE-CRUD-01  
**DoD:**
- [ ] Create/Update accept `imageFileId` uuid · GET resign URL via FileService
- [ ] ImageUrl = derived/legacy only — **không** SSOT blob
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff  
**status:** pending  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Proxy-only `web-bff/api/v1/ai-vision/asset-candidates/**` · `detect-assets/**` (incl. miss)
- [ ] Files **reuse** `web-bff/api/v1/files/*` — **cấm** scaffold mới
- [ ] Forward `Authorization` · `X-Company-Id`
- [ ] `dotnet build` BFF PASS · **no business logic**

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**page:** `/ai-vision/ai-asset-detect`  
**devSlash:** `/agent-dev`  
**from_design:** zones A,B,FILTER,C0–C3,D,F,H · reviewUrl prototype  
**implement.wire:** ui → `services/ai-vision/asset-candidates` → apiClient → BFF → API  
**implement.state:** list=page-hooks · redux_common=yes  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`

**skills (REQUIRED load trước Write):**
- /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height · **tl-retry-ssot-rereview**
- design_zones: DES-GRID-* (shared-grid-example)
- /erp-form-context · /review-grid · /erp-filter-form · **/filter-bar-context**
- /lin-list-table-config-modal · /implement-catalog-list-toolbar · /implement-history
- form_pair → T-UI-FORM + leave · init_data → T-BE-INIT-01

**ssot.reuse:**
  design_zones: DES-GRID-A,B,FILTER,C0,C1,C2,C2a,C3,D,F,H,Z + DES-MAP-F + DES-MOD-MISS + DES-LEAVE
  ui_page: LinPageLayout (kind=catalog) · data-catalog-list-page · flex root (GAP-P2-LAYOUT-06) · **0 badge AI**
  ui_filter: LinErpListFilterBar + missOnly — cấm nút Tìm (GAP-P2-87) · filter-bar-layout-hard
  ui_toolbar: catalogToolbar FULL + domain: sim-frame · nearby · Reconcile mất · export-stub · reset-seed
  ui_grid: LinCatalogDataGrid · resizable default ON
  ui_footer: LinCatalogListPagination ONLY
  ui_config: LinCatalogUiSchemaEditorModal (full cột) | LinListTableConfigModal
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp · **Mất?**
  ui_history: LinCatalogHistoryModal stub OK
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  ui_grid_flow: useLinCatalogColumnFilterSort · useErpListSelection
  http: apiClient · unwrap — cấm clone ApiClient
  init_data: GET …/asset-candidates/init-data only

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: «AI phát hiện tài sản» + fa-camera · **cấm** badge `AI`
  listTitle: «Danh sách candidate»
  footer: LinCatalogListPagination · pageSize [50,100,200,500]

**implement.toolbar:**
  wire: catalogToolbar trên LinPageLayout
  actions: onRefresh · canAdd/onAdd · canHistory/onHistory · showSchemaConfig+onEditConfig (fa-cog)
  selection: showEdit/onEdit · showView/onView
  domain: Giả lập frame · Nearby · **Reconcile mất** · Export stub · Reset seed (dev)
  form_pair: onAdd→Create · onEdit/onView→FormMode

**implement.grid:**
  columns: STT · □ · ID · Loại TS · Score(%) · Tọa độ · Tuyến · TT · Engine/Model · Nearby · Miss · Phát hiện · Mã Asset · ⋮
  resizable: DEFAULT true

**implement.grid_menu:**
  items: view · edit · copy · confirm · dismiss · **miss** · history (perm gate)
  open: dbl/Ctrl/long-press · listRowMenuHelp

**implement.list_parity:**
  pilot_ux: DoiTuongPage
  layout: flex-root + GAP-P2-LAYOUT-06 smoke
  filter: LinErpListFilterBar — no Tìm btn · missOnly
  loading: useServerPagedListLoading
  footer: LinCatalogListPagination (common ONLY)
  row_menu: LinCatalogRowActionMenu · GAP-P2-94
  zone_f: config full cột
  history: stub OK
  grid_resize: resizable default ON
  perm: ai-vision.asset-candidates.* + local mode

**APIs:** API-01 · API-02 · L-01  
**deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-FILTER-01  

**DoD:**
- [ ] Dev re-review checklist § HARD trước Write (`tl-retry-ssot_rereview`) · ghi `retry.ssot_rereview`
- [ ] Chỉ Lin*/Erp* từ common — không local pager/toolbar/ApiClient
- [ ] A–D parity · search work · Zone F full cột · History stub · **0 AI badge**
- [ ] BASE list = `/ai-vision/asset-candidates`
- [ ] `yarn build` PASS (MFE AiVision)

### T-UI-FILTER-01 — Filter bar (HARD)

**status:** pending  
**devSlash:** `/agent-dev`  
**skills:** `/filter-bar-context` · `filter-bar-pipeline.md` · `filter-bar-layout-hard.md` · `/erp-filter-form`  
**load trước Write:** `specs/_data-analy/features/ai-asset-detect-filter-bar.md`  
**DoD:**
- [ ] `data-lin-list-layout="erp-filter-bar"` · `LinErpListFilterBar` only
- [ ] Fields 1:1 filter-bar.md: search · routeId · assetClass · status · fromDate/toDate · **missOnly**
- [ ] **lấp hàng rồi wrap** · 🔍 mép phải · **0** action trên bar · **0** `ErpListHeaderFilters` / `LinListFilterField`
- [ ] Query keys khớp API-01
- [ ] Live V1–V10 (Dev smoke) — QA owns headed D+T+M

### T-UI-CFG-01
**status:** pending · **devSlash:** `/agent-dev`  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` full cột (List/width/filter/sort)
- [ ] **cấm** Zone F-only / `configHint` (GAP-P2-CC-06)

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev`  
**from_design:** Kind D Slideout Z1–Z3 · **footer_actions_only**  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm` · `dev-form-review-checklist` · `slideout-form-layout`  
**APIs:** API-03 · API-04 · API-05 · API-06 · L-01 · L-04 · init-data  
**deps:** T-UI-LIST-01 · T-UI-LEAVE-01 · T-UI-FILE-01  
**DoD:**
- [ ] FormMode Create/Edit/View/Copy · View = readOnly (không disabled xám)
- [ ] Footer only: C/E/Copy = Hủy/Lưu · View = Đóng/Sửa/Sao chép/Confirm/Dismiss/Miss
- [ ] validate required (assetClass·score·engine·lat/lng·routeId)
- [ ] Dropdown từ init-data only · FileUpload imageFileId
- [ ] `yarn build` PASS

### T-UI-LEAVE-01
**status:** pending · **devSlash:** `/agent-dev`  
**skills:** `/implement-show-leave-confirm`  
**DoD:**
- [ ] Dirty leave: `LeaveConfirmModal` · slideout `useLeaveConfirm` / form `useFormLeaveGuard`
- [ ] **cấm** `window.confirm` / `alert` / `prompt` — GAP-TL-LEAVE-01 / GAP-DEV-LEAVE-01

### T-UI-ACT-01 — action inventory
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · T-UI-MISS-01  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search / filters | S-LIST FILTER | LinErpListFilterBar | GET `/asset-candidates` |
| missOnly | FILTER | Checkbox | GET `?missOnly=` |
| Clear filter | FILTER | reset | GET |
| Refresh | toolbar | reloadAll | GET |
| + Tạo candidate | toolbar | openCreate → Slideout | POST |
| Edit / View | toolbar | openRow | GET · PUT |
| History | toolbar | openHistory stub | DEFER |
| Config `fa-cog` | toolbar | ui-schema full cột | — |
| Giả lập frame | toolbar | detectFrame | POST `/detect-assets` |
| Nearby | toolbar | checkNearby | GET `/nearby` |
| Reconcile mất | toolbar | open miss queue / filter | GET missOnly / API-12 |
| Export stub | toolbar | toast/stub | — |
| Reset seed | toolbar (dev) | reset | — |
| Row View/Edit/Copy | row menu | handleRowMenuSelect | GET · POST copy |
| Row Confirm | row / form | Confirm modal | POST `/{id}/confirm` |
| Row Dismiss | row / form | Dismiss modal | POST `/{id}/dismiss` |
| Row Mất? | row / form | Miss modal | POST `/{id}/miss` |
| Deep-link `?form=` | URL | create/edit/view/copy | GET when id |
| Map pin → View | S-MAP | openRow(view) | GET |
| Soft-delete Draft | row/toolbar | deleteRow | DELETE |
| Upload frame | S-FORM | FileUpload | L-04 files |

**DoD:**
- [ ] Inventory đủ · mọi action → form/API · **GAP-P2-ACT-*** = 0
- [ ] `yarn build` PASS

### T-UI-LKP-01 / T-UI-FIELD-01 / T-UI-PROD-01 / T-UI-UX-01 / T-UI-RESP-01 / T-UI-HIST-01
**status:** pending  
**devSlash:** `/agent-dev` (+ RESP=`/dev-web-responsive` · `/dev-ui-review`)  
**DoD:** theo `list-form-quality-gates.md` + `dev-ui-ux-constitution` — Lookup SearchInput · field map · **0** note Dev · slideout 2-col · D/T/M · History **cấm** window.alert.

### T-UI-FILE-01 — FileUpload (**DELTA**)
**status:** pending · **devSlash:** `/agent-dev`  
**APIs:** L-04 · API-04/05  
**DoD:**
- [ ] FileUpload → upload files/* → persist guid `imageFileId`
- [ ] View/Edit resign URL · **cấm** local blob SSOT
- [ ] `yarn build` PASS

### T-UI-MISS-01 — miss UI (**DELTA**)
**status:** pending · **devSlash:** `/agent-dev`  
**from_design:** DES-MOD-MISS · missOnly · toolbar Reconcile · row Mất?  
**APIs:** API-01 missOnly · API-12 · L-03 · L-05  
**deps:** T-BE-MISS-01 · T-UI-FORM-01  
**DoD:**
- [ ] missOnly Checkbox trên FilterBar
- [ ] Toolbar «Reconcile mất» · row menu «Mất?»
- [ ] Miss Modal: expectedAssetId (SearchInput asset) · missWindowMin · note → API-12
- [ ] **cấm** YOLO class «mất» trên UI
- [ ] `yarn build` PASS

### T-UI-AI-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev-ai-detect`  
**from_design:** S-FEED · toolbar «Giả lập frame»  
**APIs:** API-07 · API-08  
**deps:** T-BE-AI-01 · T-UI-LIST-01  
**DoD:**
- [ ] Sim frame tạo 1–N Draft trên list + map pins
- [ ] Engine P1 · **0** badge `AI` header · **không** hứa mAP local
- [ ] `yarn build` PASS

### T-UI-AI-FORM-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev-ai-detect`  
**from_design:** S-MOD-CONFIRM · S-MOD-DISMISS  
**APIs:** API-10 · API-11 · L-02  
**deps:** T-BE-CONFIRM-ASSET · T-UI-FORM-01 · T-UI-LEAVE-01  
**DoD:**
- [ ] Confirm modal: SearchInput `asset-type` * · default map class→code (ITS→`ITS_CAMERA`)
- [ ] Dismiss modal: optional note
- [ ] NearbyRisk=true → user ack trước Confirm (FE) · BE không block
- [ ] Dirty → LeaveConfirmModal · **cấm** window.alert
- [ ] `yarn build` PASS

### T-UI-MAP-01
**layer:** ui  
**status:** pending  
**devSlash:** `/agent-dev-oms-map`  
**from_design:** Kind F overlay cùng S-LIST · DES-MAP-F  
**skills:** `/agent-dev-oms-map` (overlay only · **không** full OMS page)  
**APIs:** API-01 · L-03  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] Pins: AI new (Draft) · confirmed · existing TS · miss
- [ ] Basemap OSM / Esri Streets / Esri sat · Fit
- [ ] Pin click → View slideout
- [ ] **Cấm** giả full Kind B list trên map page riêng
- [ ] `yarn build` PASS

### T-QA-CRUD-01 / T-QA-FORM-01 / T-QA-FILTER-01 / T-QA-FILTER-02 / T-QA-AI-01
**layer:** qa · **status:** pending  
**E2E:** chỉ `/agent-qa*` (e2eQa ON · **cấm** TL/Dev chạy e2e)  
**DoD:**
- [ ] T-QA-CRUD: Create→Edit→View→Copy→Delete + row menu + leave Modal + config full cột
- [ ] T-QA-FORM: field e2e body parity
- [ ] T-QA-FILTER-01: V1–V5+V10 live `mfeStdUrl` + filter-bar.md 1:1 · missOnly
- [ ] T-QA-FILTER-02: headed 1280+768+375
- [ ] T-QA-AI: sim frame · Nearby · Confirm→Asset · Dismiss · Miss→Incident · map pin · **0** AI badge · seed ITS_CAMERA
- [ ] Update `qa/scenarios.md`

### T-UD-BUG-15 / T-UD-BUG-16
**layer:** docs · **status:** pending  
**DoD:** title/header &lt; 22px · filter align (follow-up UI polish)

---

## Deps order

```
T-CTX-01 (done)
  → T-MIG-01 → T-MIG-FILE-01 → T-SEED-ITS_CAMERA
  → T-BE-CRUD-01 → T-BE-INIT-01 → T-BE-UISCHEMA-01
  → T-BE-AI-01 → T-BE-CONFIRM-ASSET → T-BE-MISS-01 → T-BE-FILE-01
  → T-BFF-01 → T-PERM-01
  → T-UI-FILTER-01 → T-UI-LIST-01 → T-UI-CFG-01
  → T-UI-LEAVE-01 → T-UI-FORM-01 → T-UI-FILE-01 → T-UI-MISS-01 → T-UI-ACT-01
  → T-UI-LKP/FIELD/PROD/UX/HIST/RESP
  → T-UI-AI-01 · T-UI-AI-FORM-01 · T-UI-MAP-01
  → verify: MFE yarn build PASS · BE/BFF dotnet build PASS (Dev)
  → T-QA-* → Review
```

**HARD trước Dev:** board `beRepo` && `uiRepo` tick · path = `Linm.RMMS.WebService` + `Linm.Web.RMMS.AiVision`.  
**Cấm** TL chạy yarn build / e2e / start:std.

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` (+ ai-detect · oms-map theo T-UI) · roleOnly khi enqueue |
| implement | `specs/ai-asset-detect/implement/ai-asset-detect.md` |
| Priority | T-MIG(+FILE) → T-BE-* → T-BFF → T-UI-FILTER/LIST/FORM/LEAVE/MISS/FILE/AI/MAP |
| Anti-dup | `ssot-no-duplicate.md` — reuse AiVision patterns · **tách** bảng candidates |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| Auth SSOT | `Linm.Platform.Authentication` |
| HARD | `tl-retry-ssot-rereview` · filter-bar.md trước Write · fix_all GAP cùng surface · build PASS trước completed |
| Cấm | class ổ gà · YOLO «mất» · nested CatalogListShell · footerPagination · KIND_LABEL · auto-create Asset · AI badge header · scaffold files API |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.06.1 |
| generatedAt | 2026-09-06T17:00:00.000Z |
| versionGate | ok |
| taskId | `task_e89cb646` |
| contentHash (STATUS) | `sha256:48ebba7d1ea4319eeaa330252a90d875a2a1dca1ff750846b50ff9c18897c20f` |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.09.05.03 · versionGate=ok -->
