# Team lead — tasks — its-anpr-overload

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `ai` · featureClass `ai` (Kind **B** list + Kind **D** HITL · S-LIST / S-DETECT · S-MAP **DEFER**) |
| solution_confirm | **approve** (autopilot · autoApprove=ON · task_864dfd9e) |
| design_confirm | **approve** (autopilot · task_864dfd9e) |
| route_confirm | **route_a** (autopilot · `/its-anpr-overload` + alias `/ai-vision/its-anpr-overload`) |
| taskId | `task_a810ce10` |
| updatedAt | `2026-08-24T16:10:00.000Z` |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` |
| contentHash (data-analy) | `sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `form-type-task-pack.md` · `tl-grid-task-template.md` · `tl-design-grid-component-map.md` · `tl-grid-full-flow.md` · `slideout-form-layout.md` · `list-form-quality-gates.md` · `dev-ui-ux-constitution.md` |
| Recheck | **`tl-retry-ssot-rereview` + LAYOUT-06 HARD** trước Dev Write · live audit 2026-08-24 |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/its-anpr-overload/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-CONFIG · T-UI-LKP/FIELD/PROD/UX/LEAVE · T-CTX — zones **A–D** · S-DETECT panel · Slideout Z1–Z3 footer-only |
| Solution | `specs/its-anpr-overload/be/solution-discovery.md` | T-BE-CRUD · T-BE-INIT · T-BE-LOOKUP · T-BE-CONFIRM-STUB · T-BE-UI-SCHEMA · T-MIG · T-BFF · T-PERM |
| Prototype | `ui/prototype/its-anpr-overload-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/its-anpr-overload-control-hint.md` | Dropdowns **init-data only** · SearchInput biển số |
| PO | `specs/its-anpr-overload/po/requirement.md` | ANPR+WIM+registry · Confirm→Incident stub · Config FULL |

**≠ `its-traffic-detect`:** ANPR+WIM+registry · không taxonomy biển báo/cọc. **≠ `ai-asset-detect`:** không Confirm→RoadAsset. **≠ `ai-vision`:** không class ổ gà. **Cấm ERP.***

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
| Persist | flat entity columns · RegistryJson/ViolationsJson scalar | parent `*LinesJson` |
| BFF | proxy only | business logic in BFF |
| Dropdown | GET `…/anpr/events/init-data` | hardcode enum FE / KIND_LABEL |
| Config | `LinCatalogUiSchemaEditorModal` + `useCatalogUiSchema` + `buildDynamicGridColumns` | **`configHint`** · `LinListTableConfigModal` cột · leftover `const columns` |

## Source assignment (`beRepo` · `uiRepo` — **pending** board tick trước Dev)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| `source.routes` | `/its-anpr-overload` · alias `/ai-vision/its-anpr-overload` · Slideout `?form=` · **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **AiVision** (`ai-vision`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/AiVision/` · `api/domains/ai-vision/LINM.RMMS.AiVision.Models/` |
| `source.bff` | `bff/domains/ai-vision/` · proxy `web-bff/api/v1/ai-vision/anpr/events/**` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` · verify `20260817120000_Schema_RmmsAiVisionAnprEvents` **EXISTS** |
| Confirm→Incident | P1 stub `VI-ANPR-*` on entity · full Incident domain **DEFER P2** |
| Registry | mock in-service P1 · POST `/{id}/lookup` only · **cấm** standalone GET registry P1 |
| Catalog UI schema | Integration CatalogUiSchema · kind **`its-anpr-overload`** (**MISSING — GAP-SA-ANPR-UI-SCHEMA-01**) |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html` |
| Context | `Linm.RMMS.Data/docs/context/features/its-anpr-overload.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-anpr-overload/ui/prototype/its-anpr-overload-list-prototype.html` |
| `mfeStdRoute` | `/its-anpr-overload` (**locked**) |
| `mfeStdUrl` | `http://localhost:9303/its-anpr-overload` |
| peerStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |

### route_confirm (autopilot)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/its-anpr-overload` (+ alias `/ai-vision/its-anpr-overload`) | PO+Design+SA · STATUS |
| B (alt) | `/ai-vision/anpr-overload` | **không chọn** |
| C custom | — | n/a autopilot |

## API contract (from solution)

Base BE: `api/v1/ai-vision/anpr/events` · BFF: `web-bff/api/v1/ai-vision/anpr/events` · FE BASE: **`/ai-vision/anpr/events`**.

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/ai-vision/anpr/events` |
| API-02 | GET | `/api/v1/ai-vision/anpr/events/init-data` |
| API-03 | GET | `/api/v1/ai-vision/anpr/events/{id}` |
| API-04 | POST | `/api/v1/ai-vision/anpr/events` |
| API-05 | PUT | `/api/v1/ai-vision/anpr/events/{id}` |
| API-06 | DELETE | `/api/v1/ai-vision/anpr/events/{id}` (soft) |
| API-07 | POST | `/api/v1/ai-vision/anpr/events/simulate` |
| API-08 | POST | `/api/v1/ai-vision/anpr/events/{id}/lookup` |
| API-09 | POST | `/api/v1/ai-vision/anpr/events/{id}/confirm` |
| API-10 | POST | `/api/v1/ai-vision/anpr/events/{id}/dismiss` |
| L-01 | CatalogUiSchema | kind=`its-anpr-overload` (**new seed**) |

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **tz_required** | CapturedAt · ResolvedAt · API-03/04/05/09 | `/review-timezone-implement` |
| XCO | **xco_get_only** | API-03 GET/{id} (+ lookup/confirm/dismiss load) | `/implement-view-cross-company` |
| SHARE | **share_tenant** | `AiVisionAnprEventEntity` | `/implement-shared-table` · tenant_keep |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components only |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | gap/stub | Align codes khi NuGet sẵn · stub Attribute OK P1 |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-TOKEN | n/a P1 | |
| SD-JOB | n/a | simulate sync |
| SD-TENANT | **required** | `CompanyCode` · share_tenant |
| SD-NO-JSON | **required** | Flat scalars · RegistryJson/ViolationsJson scalar text OK |
| SD-SEARCH | **required** | search must work · pageSize 50/100/200/500 |
| SD-TZ | **required** | tz_required |
| SD-XCO | **required** | get_only |
| SD-SHARE | **required** | share_tenant |
| SD-INIT | **required** | Dropdown camera/status từ init-data |
| SD-CONFIG | **required** | CatalogUiSchema FULL · **cấm** configHint |

## DES-GRID → Lin* (HARD — GAP-TL-GRID-MAP-01)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / header · titleIcon `fa-car` · **cấm** badge AI |
| B | DES-GRID-B | `catalogToolbar` FULL · config=`fa-cog` → **LinCatalogUiSchemaEditorModal** |
| FILTER | DES-GRID-FILTER | camera `Dropdown` · status `Dropdown` · SearchInput biển số (**cụm phải**) |
| KPI | DES-KPI | Total · Pending · Critical · Confirmed |
| C0 | DES-GRID-C0 | listTitle · row-menu help |
| C1 | DES-GRID-C1 | `SearchTextInput` — **cấm** nút Tìm |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột default ON |
| C2a | DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» |
| H | DES-GRID-H | History stub (`LinCatalogHistoryModal`) |
| Z | DES-GRID-Z | Kind D slideout · **footer actions only** |
| DETECT | DES-DETECT | S-DETECT panel ① Camera · ② Đăng kiểm · ③ Violations |
| LEAVE | DES-LEAVE | `LeaveConfirmModal` |
| MAP | S-MAP | **DEFER P2** — không pin map P1 |
| — | shell | **1×** `LinPageLayout` — **cấm** nested CatalogListShell |

---

## retry.ssot_rereview (HARD — live 2026-08-24 · trước Dev Write)

Live: `Linm.Web.RMMS.AiVision/src/pages/ItsAnprOverloadListPage/ItsAnprOverloadListPage.tsx` (+ `ItsAnprFormSlideout.tsx`) · BE `AiVisionAnprEventsController` / `AiVisionAnprEventService` · CatalogUiSchemaRegistry **thiếu kind**.

| # | Check | Live |
|---|-------|------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | **FAIL** — leftover `const columns` / `LinCatalogDataColumn[]` (chưa `useCatalogUiSchema` + `buildDynamicGridColumns`) |
| 3 | Footer `LinCatalogListPagination` — cấm footerPagination / pageSizeBar | **PASS** |
| 4 | Flex root + `useServerPagedListLoading` + **LAYOUT-06** | **PASS** (title+toolbar+grid/empty) |
| 5 | Toolbar catalog: refresh · history · config `fa-cog` · +Tạo · simulate · lookup · confirm · view/edit | **PARTIAL** — cog wires **`configHint`** placeholder (**GAP-TL-CONFIG-01** / GAP-DEV-CONFIG-PLACEHOLDER-01) |
| 6 | Filter Zone B: SearchInput biển số + Dropdown camera/status — **cấm nút Tìm** | **PASS** (ErpListHeaderFilters + SearchTextInput) |
| 7 | Zone F Config FULL `LinCatalogUiSchemaEditorModal` | **FAIL** — configHint modal only (**GAP-SA-ANPR-UI-SCHEMA-01** / **GAP-TL-CONFIG-01**) |
| 8 | History stub OK | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form Create/Edit/View/Copy slideout footer-only + LeaveConfirm + Confirm/Dismiss | **PASS** (LeaveConfirmModal present) |
| 11 | Dropdown options từ init-data only | **PASS** |
| 12 | S-DETECT panel ①②③ | **PASS** (detail panel on row select) |
| 13 | AI chrome header / beforeToolbar badge | **PASS** (no AI badge header) — **cấm** regress |
| 14 | `filterMaxWidthPx` on LinPageLayout | **FAIL** — `filterMaxWidthPx={900}` (**GAP-TL-UX-01** / dev-ui-ux-constitution) |
| 15 | BE CatalogUiSchema seed `its-anpr-overload` | **FAIL** — Registry không có kind (**GAP-SA-ANPR-UI-SCHEMA-01**) |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`  
**Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface. Ghi `retry.ssot_rereview` trên implement MD.

### Gaps (this pack — Must-fix trước QA)

| ID | Gap | Task | Status |
|----|-----|------|--------|
| **GAP-SA-ANPR-UI-SCHEMA-01** | CatalogUiSchema kind `its-anpr-overload` missing | **T-BE-UI-SCHEMA-01** · **T-UI-CONFIG-01** | **OPEN P0** |
| **GAP-TL-CONFIG-01** | MFE `configHint` placeholder · leftover `const columns` | **T-UI-CONFIG-01** · **T-UI-LIST-01** | **OPEN P0** |
| **GAP-TL-UX-01** | `filterMaxWidthPx={900}` vi phạm constitution | **T-UI-UX-01** · **T-UI-LIST-01** | **OPEN P1** |
| GAP-ANPR-02 | Real Cục Đăng kiểm adapter | — | **DEFER P2** |
| GAP-ANPR-03 | Confirm → Incident domain đầy đủ | — | **DEFER P2** (stub VI-ANPR OK P1) |
| S-MAP | Pin map camera | — | **DEFER P2** |
| Live camera/WIM ingest | Real ingest | — | **DEFER P2** |

---

## FormType pack (canonical — `form-type-task-pack`)

`packKind=ai` + Kind B+D → **list pack + ai detect/HITL pack** · S-MAP **DEFER** · **Config FULL**.

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | TL/Dev | **done** (TL) | Context ownership · DOMAIN-MAP · control-map |
| T-PERM-01 | Dev | **pending** | `ai-vision.anpr-events.*` |
| T-UI-LIST-01 | Dev | **pending** | A–D · `tl-grid-task-template` FULL · **cấm** leftover columns |
| T-UI-FORM-01 | Dev | **pending** | Kind D slideout C/E/V/Copy · footer only · View readOnly |
| T-UI-ACT-01 | Dev | **pending** | Action inventory → form/API |
| T-UI-LKP-01 | Dev | **pending** | Dropdown camera/status init-data only |
| T-UI-FIELD-01 | Dev | **pending** | Design §5 control-map ↔ DTO/API |
| T-UI-PROD-01 | Dev | **pending** | end-user · cấm demo store codes · View ≠ Input xám · cấm AI chrome |
| T-UI-UX-01 | Dev | **pending** | constitution · **cấm** `filterMaxWidthPx` · spacing |
| T-UI-LEAVE-01 | Dev | **pending** | LeaveConfirmModal dirty paths |
| T-UI-CONFIG-01 | Dev | **pending** | LinCatalogUiSchemaEditorModal · **cấm** configHint |
| T-UI-AI-01 | Dev | **pending** | Simulate toolbar + S-DETECT lookup feed |
| T-UI-AI-FORM-01 | Dev | **pending** | HITL Confirm/Dismiss footer/modals |
| T-BE-CRUD-01 | Dev | **pending** | API-01…06 verify/extend |
| T-BE-INIT-01 | Dev | **pending** | API-02 init-data cameras/statuses |
| T-BE-LOOKUP-01 | Dev | **pending** | API-08 registry mock + rule engine |
| T-BE-CONFIRM-STUB | Dev | **pending** | API-09/10 · stub `VI-ANPR-*` |
| T-BE-UI-SCHEMA-01 | Dev | **pending** | Registry + Seed `its-anpr-overload` |
| T-MIG-01 | Dev | **pending** | verify `Schema_RmmsAiVisionAnprEvents` exists · **cấm** recreate |
| T-BFF-01 | Dev | **pending** | proxy anpr/events |
| T-QA-CRUD-01 | QA | **pending** | Create→Edit→View→Delete + row menu |
| T-QA-AI-01 | QA | **pending** | simulate + lookup + confirm/dismiss |
| T-LIB-01 | — | **n/a** | Lin* đã có trên common |

**GAP-TL-FORMTYPE-01:** closed — đủ list + ai/HITL + LKP/FIELD/PROD/UX/LEAVE/CONFIG + BE lookup/schema ids.

---

## Task pack (detail)

### T-CTX-01
**layer:** docs  
**status:** **done** (TL this turn)  
**DoD:**
- [x] Context feature + control-map/actions khớp design+solution
- [x] DOMAIN-MAP slug `its-anpr-overload` → AiVision verified
- [x] route locked `/its-anpr-overload` · mfeStdUrl stamped
- [x] API paths align solution API-01…10 · L-01
- [x] Rule codes SPEED / OVERLOAD_* / NO_REGISTRY server-side

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**codes:** `ai-vision.anpr-events.read|create|update|delete|confirm|dismiss`  
**skills:** `/implement-erp-form-permissions` · catalog-list-permissions · api-permission-gate  
**DoD:**
- [ ] FE toolbar/form/row menu gated · local mode OK
- [ ] BE `[RequirePermission]` stub comments trên controllers
- [ ] Confirm/Dismiss riêng perm

### T-BE-CRUD-01
**layer:** api  
**status:** pending  
**from_solution:** API-01…06 · entity `AiVisionAnprEventEntity` · table `rmms_ai_vision_anpr_events`  
**source:** backend=`Linm.RMMS.WebService` · domain=`AiVision` · **cấm ERP.***  
**gates:** TZ · XCO get_only · SHARE tenant  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-view-cross-company` · `/review-timezone-implement` · `/implement-shared-table`  
**DoD:**
- [ ] ApiResponse / paged · search must work · pageSize ∈{50,100,200,500}
- [ ] Soft-delete · Edit locked khi Confirmed/Dismissed
- [ ] Code server-gen `ANPR-YYYYMMDD-NNNN`
- [ ] `dotnet build` API PASS · **no ERP.***

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**from_solution:** API-02  
**skills:** `tl-dropdown-from-backend`  
**DoD:**
- [ ] `{ cameras[], statuses[], severities[] }` · CAM-QL1-286/312/340
- [ ] FE Dropdown **chỉ** từ init-data — **cấm** hardcode

### T-BE-LOOKUP-01
**layer:** api  
**status:** pending  
**from_solution:** API-08  
**DoD:**
- [ ] POST `/{id}/lookup` mock registry + evaluate SPEED/OVERLOAD_*/NO_REGISTRY
- [ ] Persist RegistryJson · ViolationsJson · Severity
- [ ] XCO load before mutate
- [ ] `dotnet build` PASS

### T-BE-CONFIRM-STUB
**layer:** api  
**status:** pending  
**from_solution:** API-09 · API-10  
**DoD:**
- [ ] Confirm Pending→Confirmed · stub `VI-ANPR-YYYYMMDD-NNNN` · **không** create Incident entity P1
- [ ] Dismiss Pending→Dismissed · optional note
- [ ] XCO load before mutate · TZ ResolvedAt UTC
- [ ] `dotnet build` PASS

### T-BE-UI-SCHEMA-01
**layer:** api  
**status:** pending  
**from_solution:** L-01 · **GAP-SA-ANPR-UI-SCHEMA-01**  
**DoD:**
- [ ] `CatalogUiSchemaRegistry` + Seed kind **`its-anpr-overload`** · columns Design §5.2
- [ ] Title FE «Cấu hình hiển thị danh mục»
- [ ] `dotnet build` PASS

### T-MIG-01
**layer:** migration  
**status:** pending  
**skills:** `/database-migration`  
**DoD:**
- [ ] Verify named migration **`20260817120000_Schema_RmmsAiVisionAnprEvents`** **EXISTS** — **cấm** recreate
- [ ] Chỉ thêm migration mới nếu CatalogUiSchema seed cần pair Schema/Seed riêng
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff  
**status:** pending  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Proxy-only `web-bff/api/v1/ai-vision/anpr/events/**`
- [ ] Forward `Authorization` · `X-Company-Id`
- [ ] `dotnet build` BFF PASS · **no business logic**

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**page:** `/its-anpr-overload`  
**from_design:** zones A,B,FILTER,KPI,C0–C3,D,F,H · reviewUrl prototype  
**implement.wire:** ui → `services/itsAnpr` → apiClient → BFF → API  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`

**skills (REQUIRED load trước Write):**
- /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height · **tl-retry-ssot-rereview**
- /erp-form-context · /review-grid · /erp-filter-form
- /implement-catalog-list-toolbar · /implement-history
- form_pair → T-UI-FORM + dev-form-review-checklist

**ssot.reuse:**
  design_zones: DES-GRID-A,B,FILTER,KPI,C0,C1,C2,C2a,C3,D,F,H,Z + DES-DETECT
  ui_page: LinPageLayout (kind=catalog) · flex root (GAP-P2-LAYOUT-06)
  ui_filter: ErpListHeaderFilters + SearchTextInput + Zone B (Dropdown camera/status · SearchInput biển số cụm phải) — cấm nút Tìm
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·create) + domain: simulate · lookup · confirm — **cấm** AI badge
  ui_grid: LinCatalogDataGrid · `columns={buildDynamicGridColumns(schema, uiColumns)}` · resizable default ON
  ui_footer: LinCatalogListPagination ONLY
  ui_config: **LinCatalogUiSchemaEditorModal** — **cấm** configHint · **cấm** LinListTableConfigModal cột
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal stub OK
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  http: apiClient · unwrap — cấm clone ApiClient
  init_data: GET …/anpr/events/init-data only

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: «ITS ANPR · Quá tải / tốc độ» + fa-car · **không** badge AI
  listTitle: «Danh sách sự kiện ANPR»
  footer: LinCatalogListPagination · pageSize [50,100,200,500]

**implement.grid:**
  columns (schema): STT · □ · Mã · Biển số · Tốc độ · WIM · Camera · Lúc · TT · Mức lỗi · ⋮
  resizable: DEFAULT true
  **cấm** leftover `const columns` / `LinCatalogDataColumn` sau đổi import

**APIs:** API-01 · API-02  
**deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-UI-CONFIG-01  

**DoD:**
- [ ] Dev re-review checklist § HARD trước Write · ghi `retry.ssot_rereview`
- [ ] Chỉ Lin*/Erp* từ common — không local pager/toolbar/ApiClient
- [ ] A–D parity · search work · Zone F FULL · History stub · S-DETECT panel
- [ ] **Cấm** `filterMaxWidthPx` on LinPageLayout
- [ ] BASE list = `/ai-vision/anpr/events`
- [ ] `yarn build` PASS (MFE AiVision)

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** Kind D Slideout Z1–Z3 · **footer_actions_only** · fields control-map §5.3 · 2 cột  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm` · `dev-form-review-checklist` · `slideout-form-layout`  
**APIs:** API-03 · API-04 · API-05 · API-06 · init-data  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode Create/Edit/View/Copy · View = readOnly (không disabled xám)
- [ ] Footer only: C/E/Copy = Hủy/Lưu/Bỏ qua/Xác nhận lỗi · View = Đóng/Sửa/Bỏ qua/Xác nhận lỗi — **cấm** top Quay lại/Hủy/Lưu trên Z1
- [ ] leave-confirm dirty · validate required (plate·cameraId·speedKmh·capturedAt)
- [ ] Dropdown camera từ init-data only
- [ ] Registry fields readonly sau lookup
- [ ] `yarn build` PASS

### T-UI-ACT-01 — action inventory
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST C1 | `SearchTextInput` → applyFilters | GET `/anpr/events?search=` |
| Camera / Status | S-LIST FILTER | Dropdown | GET query |
| Clear filter | FILTER | reset filters | GET |
| Refresh | toolbar | reloadAll | GET |
| + Tạo | toolbar | openCreate → Slideout | POST |
| Edit / View (toolbar) | toolbar | openRow | GET · PUT |
| History | toolbar | openHistory stub | DEFER |
| Config `fa-cog` | toolbar | LinCatalogUiSchemaEditorModal | L-01 |
| Mô phỏng | toolbar / domainBar | simulate | POST `/simulate` |
| Tra cứu | toolbar / row | lookup registry | POST `/{id}/lookup` |
| Xác nhận | toolbar / row / form | confirm HITL | POST `/{id}/confirm` |
| Bỏ qua | row / form | dismiss HITL | POST `/{id}/dismiss` |
| Row View/Edit/Copy | row menu | handleRowMenuSelect | GET · POST copy |
| Deep-link `?form=` | URL | create/edit/view/copy | GET when id |
| Soft-delete | row/toolbar (perm) | deleteRow | DELETE |

**DoD:**
- [ ] Inventory đủ · search work · simulate/lookup/confirm/dismiss/config wired
- [ ] **Cấm** `window.confirm` / `window.alert`
- [ ] `yarn build` PASS

### T-UI-LKP-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-BE-INIT-01  
**DoD:**
- [ ] List/form `cameraId` = Dropdown từ init-data — **cấm** free-text khi seed sẵn
- [ ] Form `status` Dropdown Pending/Confirmed/Dismissed từ init-data
- [ ] Lookup via POST `/{id}/lookup` only — **cấm** standalone registry GET P1
- [ ] `yarn build` PASS

### T-UI-FIELD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Field inventory Design §5.3 ↔ DTO/API scalars (speedKmh·wimKg·confidence 0–1 UI %, registry readonly, note multiline)
- [ ] Required * khớp SA validation
- [ ] violationCodes readonly · incidentId readonly sau Confirm
- [ ] `yarn build` PASS

### T-UI-PROD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Code `ANPR-*` server-gen — Create display `(tự sinh)` · **cấm** gen từ demo store
- [ ] View mode = readOnly — **cấm** Input xám disabled toàn form
- [ ] **Cấm** badge AI header · **cấm** text «Kind D» / «stub» end-user
- [ ] `yarn build` PASS

### T-UI-UX-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  
**skills:** `dev-ui-ux-constitution`  
**DoD:**
- [ ] **Cấm** `filterMaxWidthPx` / filterMaxWidth trên LinPageLayout (**GAP-TL-UX-01**)
- [ ] Spacing constitution · footer-only form · toast/`useAlert` — **cấm** `window.alert`/`confirm`
- [ ] `yarn build` PASS

### T-UI-LEAVE-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01  
**skills:** `/implement-show-leave-confirm`  
**DoD:**
- [ ] Dirty → LeaveConfirmModal trên Đóng / Hủy / route leave
- [ ] **Cấm** native `window.confirm` trên MFE
- [ ] `yarn build` PASS

### T-UI-CONFIG-01
**layer:** ui  
**status:** pending  
**from_design:** DES-GRID-F FULL · **GAP-TL-CONFIG-01** · **GAP-SA-ANPR-UI-SCHEMA-01**  
**deps:** T-BE-UI-SCHEMA-01 · T-UI-LIST-01  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột
- [ ] `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}`
- [ ] **Cấm** `configHint` · **cấm** `LinListTableConfigModal` (cột) · **cấm** leftover `const columns`
- [ ] `yarn build` PASS

### T-UI-AI-01
**layer:** ui  
**status:** pending  
**from_design:** S-DETECT · toolbar simulate  
**APIs:** API-07 · API-08  
**deps:** T-BE-LOOKUP-01 · T-UI-LIST-01  
**devSlash:** `/agent-dev-ai-detect`  
**DoD:**
- [ ] Simulate toolbar thêm event Pending
- [ ] Lookup → S-DETECT panel ②③ update · rule violations display
- [ ] **không** badge AI header · **không** S-MAP P1
- [ ] `yarn build` PASS

### T-UI-AI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** Kind D HITL Confirm/Dismiss footer  
**APIs:** API-09 · API-10  
**deps:** T-BE-CONFIRM-STUB · T-UI-FORM-01  
**devSlash:** `/agent-dev-ai-detect`  
**DoD:**
- [ ] Confirm: note optional · Pending only · stub incident link display
- [ ] Dismiss: optional note · Pending only
- [ ] Modal stacked OK nếu cần — **cấm** native confirm
- [ ] `yarn build` PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01 · T-UI-FORM-01 · T-UI-CONFIG-01  
**DoD:**
- [ ] Smoke Create→Edit→View→Copy→Delete + row menu
- [ ] Search/filter/pagination · Zone F · leave-confirm
- [ ] Update `qa/scenarios.md`

### T-QA-AI-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-LOOKUP-01 · T-BE-CONFIRM-STUB  
**DoD:**
- [ ] Simulate → lookup → Confirm/Dismiss · S-DETECT panel
- [ ] e2eQa ON (Pages :9100 + `yarn e2e-qa --serve=local-root` + screenshot)
- [ ] Update `qa/scenarios.md` QA-AI rows

---

## Deps order

```
T-CTX-01 (done)
  → T-MIG-01 (verify)
  → T-BE-CRUD-01 → T-BE-INIT-01 → T-BE-LOOKUP-01 → T-BE-CONFIRM-STUB → T-BE-UI-SCHEMA-01
  → T-BFF-01
  → T-PERM-01
  → T-UI-LIST-01 → T-UI-CONFIG-01
                 → T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01 → T-UI-PROD-01 → T-UI-UX-01 → T-UI-LEAVE-01
                 → T-UI-ACT-01
                 ↘ T-UI-AI-01 · T-UI-AI-FORM-01
  → verify: MFE yarn build PASS · BE dotnet build PASS
  → T-QA-CRUD-01 · T-QA-AI-01 → Review
```

**HARD trước Dev Write:** board `beRepo` && `uiRepo` = **approved** (STATUS) · path = `Linm.RMMS.WebService` + `Linm.Web.RMMS.AiVision` · **cấm ERP.***  
**HARD:** `tl-retry-ssot-rereview` · fix_all GAP cùng surface · build PASS trước Dev `completed`.

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · roleOnly khi enqueue · implement `specs/its-anpr-overload/implement/its-anpr-overload.md` |
| Priority | T-BE-UI-SCHEMA + T-UI-CONFIG/LIST (đóng GAP P0) → FORM/ACT/AI → UX (filterMaxWidthPx) |
| Anti-dup | `ssot-no-duplicate.md` — reuse AiVision patterns · **tách** bảng ANPR · peer `ai-asset-detect` |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| Auth SSOT | `Linm.Platform.Authentication` |
| HARD | `tl-retry-ssot-rereview` · Config FULL · build PASS |
| Cấm | nested CatalogListShell · footerPagination · configHint · leftover columns · AI chrome header · S-MAP P1 · ERP.* |
| e2eQa | ON — khi tới QA: Pages :9100 + await `_manifest.json` + `yarn e2e-qa --serve=local-root` (**cấm** start:std) |
| autoApprove | ON — Review gate vẫn pending đến lượt |
| beRepo/uiRepo | **pending** — board tick trước Dev (**không auto**) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.16.05 |
| generatedAt | 2026-08-24T16:10:00.000Z |
| versionGate | ok |
| taskId | `task_a810ce10` |
| contentHash (data-analy) | sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865 |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=4 · workflowVersion=2026.08.16.02 · versionGate=ok -->
