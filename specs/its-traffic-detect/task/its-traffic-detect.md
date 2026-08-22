# Team lead — tasks — its-traffic-detect

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` · featureClass `ai` (Kind **B+D+F**) |
| solution_confirm | **approve** (autopilot · task_6dd0470a) |
| design_confirm | **approve** (autopilot · task_6dd0470a) |
| route_confirm | **route_a** (autopilot · autoApprove=ON · no AskQuestion) |
| taskId | `task_6f2bb59b` |
| updatedAt | `2026-08-21T05:50:00.000Z` |
| skillVersion | `2026.08.19.04` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.20.01` |
| rulesVersion | `2026.08.20.8` |
| versionGate | `ok` · Autopilot `recheck_new` SSOT |
| contentHash (data-analy) | `sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526` |
| TL SSOT | `tl-platform-ssot.md` · `ssot-no-duplicate.md` · `tl-ssot-permission-tasks.md` · `tl-list-shell-height.md` · `tl-retry-ssot-rereview.md` · `form-type-task-pack.md` · `tl-grid-task-template.md` · `tl-design-grid-component-map.md` · `tl-grid-full-flow.md` · `slideout-form-layout.md` · `list-form-quality-gates.md` · `dev-ui-ux-constitution.md` |
| Recheck | **`tl-retry-ssot-rereview` + LAYOUT-06 HARD** trước Dev Write · live 2026-08-21 |

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/its-traffic-detect/ui/design.md` + reviewUrl | T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-MAP · T-UI-CONFIG · T-UI-LKP/FIELD/PROD/UX/LEAVE · T-CTX — zones **A–D+F** · Slideout Z1–Z3 footer-only · Kind F map |
| Solution | `specs/its-traffic-detect/be/solution-discovery.md` | T-BE-CRUD · T-BE-INIT · T-BE-FILTER · T-BE-AI · T-BE-CONFIRM-ASSET · T-BE-UI-SCHEMA · T-MIG · T-BFF · T-PERM |
| Prototype | `ui/prototype/its-traffic-detect-list-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/its-traffic-detect-control-hint.md` | Dropdowns **init-data only** · SearchInput road-route / asset-type |
| PO | `specs/its-traffic-detect/po/requirement.md` | taxonomy `bien_bao`/`coc_tieu` · dedupe **10 m** · Confirm bắt buộc · Config FULL |

**≠ `ai-vision`:** không class ổ gà / Incident. **≠ `ai-asset-detect`:** taxonomy chỉ 2 class · dedupe **10 m** (peer = 25 m). **Cấm ERP.***

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
| Dropdown | GET `…/objects/init-data` | hardcode enum FE / KIND_LABEL |
| Config | `LinCatalogUiSchemaEditorModal` + `useCatalogUiSchema` + `buildDynamicGridColumns` | **`configHint`** · `LinListTableConfigModal` cột · leftover `const columns` |

## Source assignment (`beRepo` · `uiRepo` — **approved** STATUS packet)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| `source.routes` | `/its-traffic-detect` · alias `/ai-vision/its-traffic-detect` · Slideout `?form=` · **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **AiVision** (`ai-vision`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/AiVision/` · Models AiVision |
| `source.bff` | `bff/domains/ai-vision/` · proxy `web-bff/api/v1/ai-vision/its/**` |
| `source.layout` | `micro-src` |
| `source.persistence` | `api/shared/RMMS.Service.Persistence/` |
| `source.migrations` | `api/shared/RMMS.Service.Migrations/` |
| Confirm→Asset | inject `IRoadAssetService` (domain **Asset**) · `Source=its-traffic-detect` · `CodePrefix=TS-AI-` |
| Lookups | Integration `road-routes` · `asset-types` |
| Catalog UI schema | Integration CatalogUiSchema · kind **`its-traffic-detect`** |
| Demo | `Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html` |
| Context | `Linm.RMMS.Data/docs/context/features/its-traffic-detect.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-traffic-detect/ui/prototype/its-traffic-detect-list-prototype.html` |
| `mfeStdRoute` | `/its-traffic-detect` (**locked**) |
| `mfeStdUrl` | `http://localhost:9303/its-traffic-detect` |
| peerStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |

### route_confirm (autopilot)

| Option | Path | Note |
|--------|------|------|
| **A (locked)** | `/its-traffic-detect` (+ alias `/ai-vision/its-traffic-detect`) | PO+Design+SA · STATUS |
| B (alt) | `/ai-vision/its-bien-bao` | **không chọn** |
| C custom | — | n/a autopilot |

## API contract (from solution)

Base BE: `api/v1/ai-vision/its` · BFF: `web-bff/api/v1/ai-vision/its` · FE BASE: **`/ai-vision/its`**.

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/ai-vision/its/objects` (+ **`source`** · **`engine`**) |
| API-02 | GET | `/api/v1/ai-vision/its/objects/init-data` (+ **`sources[]`**) |
| API-03 | GET | `/api/v1/ai-vision/its/objects/{id}` |
| API-04 | POST | `/api/v1/ai-vision/its/objects` |
| API-05 | PUT | `/api/v1/ai-vision/its/objects/{id}` |
| API-06 | DELETE | `/api/v1/ai-vision/its/objects/{id}` (soft · Draft) |
| API-07 | POST | `/api/v1/ai-vision/its/detect` (stub P1) |
| API-08 | GET | `/api/v1/ai-vision/its/objects/nearby` (default **10 m**) |
| API-09 | POST | `/api/v1/ai-vision/its/objects/{id}/confirm` |
| API-10 | POST | `/api/v1/ai-vision/its/objects/{id}/dismiss` |
| L-01 | GET | `/api/v1/integration/road-routes/search` |
| L-02 | GET | `/api/v1/integration/asset-types/search` |
| L-03 | GET | `/api/v1/asset/road-assets` (map existing pins · **reuse**) |
| L-04 | CatalogUiSchema | kind=`its-traffic-detect` |

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply | Skill / DoD |
|------|----------|-------|-------------|
| TZ | **tz_required** | API-01 from/to · ObservedAt · API-03/04/05/09 | `/review-timezone-implement` |
| XCO | **xco_get_only** | API-03 GET/{id} (+ confirm/dismiss load) | `/implement-view-cross-company` |
| SHARE | **share_tenant** | `AiVisionItsTrafficObjectEntity` | `/implement-shared-table` · tenant_keep |

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
| SD-INIT | **required** | Dropdown objectClass/status/engine/**source** từ init-data |
| SD-CONFIG | **required** | CatalogUiSchema FULL · **cấm** configHint |

## DES-GRID → Lin* (HARD — GAP-TL-GRID-MAP-01)

| Zone | Design | Component |
|------|--------|-----------|
| A | DES-GRID-A | `LinPageLayout` / header · titleIcon `fa-road` · **cấm** badge AI |
| B | DES-GRID-B | `catalogToolbar` FULL · config=`fa-cog` → **LinCatalogUiSchemaEditorModal** |
| FILTER | DES-GRID-FILTER | `LinErpListFilterBar` · SearchInput route · Dropdown class/source/status/engine · Date from/to · clear · search cụm phải |
| KPI | DES-KPI | Draft / Confirmed / Nearby risk / Total |
| C0 | DES-GRID-C0 | listTitle · row-menu help |
| C1 | DES-GRID-C1 | `SearchTextInput` — **cấm** nút Tìm |
| C2 | DES-GRID-C2 | `LinCatalogDataGrid` · `buildDynamicGridColumns` · kéo cột default ON |
| C2a | DES-GRID-C2a | `useLinCatalogColumnFilterSort` |
| C3 | DES-GRID-C3 | `LinCatalogRowActionMenu` + `buildCatalogRowMenuItems` |
| D | DES-GRID-D | **`LinCatalogListPagination`** — **cấm** footerPagination / pageSizeBar |
| F | DES-GRID-F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» |
| H | DES-GRID-H | History stub (`LinCatalogHistoryModal`) |
| Z | DES-GRID-Z | Kind D slideout · **footer actions only** |
| MAP | DES-MAP-F | Kind F overlay · pin existing / Draft / nearby / Confirmed |
| CONFIRM | DES-MOD-CONFIRM | Modal · SearchInput asset-type |
| DISMISS | DES-MOD-DISMISS | Modal FP |
| LEAVE | DES-LEAVE | `LeaveConfirmModal` |
| — | shell | **1×** `LinPageLayout` — **cấm** nested CatalogListShell |

---

## retry.ssot_rereview (HARD — live 2026-08-21 · trước Dev Write)

Live: `Linm.Web.RMMS.AiVision/src/pages/ItsTrafficDetectListPage/ItsTrafficDetectListPage.tsx` (+ FormSlideout) · BE `AiVisionItsTrafficObjectsController` / `AiVisionItsTrafficObjectService` · CatalogUiSchemaRegistry.

| # | Check | Live |
|---|-------|------|
| 1 | 1× `LinPageLayout` — cấm nested `CatalogListShell` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | **PARTIAL** — grid present · **FAIL** leftover `const columns` / `LinCatalogDataColumn[]` (chưa `useCatalogUiSchema` + `buildDynamicGridColumns`) |
| 3 | Footer `LinCatalogListPagination` — cấm footerPagination / pageSizeBar | **PASS** |
| 4 | Flex root + `useServerPagedListLoading` + **LAYOUT-06** | **PASS** (title+toolbar+grid/empty) |
| 5 | Toolbar catalog: refresh · history · config `fa-cog` · +Tạo · sim×3 · Nearby · Export · Reset seed · selection view/edit | **PARTIAL** — cog wires **`configHint`** placeholder (**GAP-TL-CONFIG-01** / GAP-P2-CC-06 / GAP-DEV-CONFIG-PLACEHOLDER-01) |
| 6 | Filter Zone B: SearchInput route + Dropdown class/**source**/status/**engine** + Date — **cấm nút Tìm** | **FAIL** — thiếu filter `source` + `engine` query (**GAP-SA-ITS-FILTER-01** / **GAP-TL-FILTER-01**) |
| 7 | Zone F Config FULL `LinCatalogUiSchemaEditorModal` | **FAIL** — configHint modal only (**GAP-SA-ITS-UI-SCHEMA-01** / **GAP-TL-CONFIG-01**) |
| 8 | History stub OK | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form Create/Edit/View/Copy slideout footer-only + LeaveConfirm + Confirm/Dismiss | **PASS** (LeaveConfirmModal present) · Confirm asset-type phải SearchInput (**T-UI-LKP**) |
| 11 | Dropdown options từ init-data only · **sources[]** | **FAIL** — init-data thiếu `Sources[]` (**GAP-SA-ITS-INIT-SOURCE-01**) |
| 12 | Map overlay pins + Fit | **PASS** (basemap OSM/Esri + Fit) |
| 13 | AI chrome header / beforeToolbar badge | **PASS** (no AI badge header) — **cấm** regress |
| 14 | list API `source`/`engine` query | **FAIL** — controller/service chưa nhận (**GAP-SA-ITS-FILTER-01**) |
| 15 | BE CatalogUiSchema seed `its-traffic-detect` | **FAIL** — Registry không có kind (**GAP-SA-ITS-UI-SCHEMA-01**) |

**implement.list_parity.layout** = `flex-root + GAP-P2-LAYOUT-06 smoke`  
**Cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface. Ghi `retry.ssot_rereview` trên implement MD.

### Gaps (this pack — Must-fix trước QA)

| ID | Gap | Task | Status |
|----|-----|------|--------|
| **GAP-SA-ITS-FILTER-01** | List API + FE thiếu query `source` + `engine` | **T-BE-FILTER-01** · **T-UI-LIST-01** | **OPEN P0** |
| **GAP-SA-ITS-INIT-SOURCE-01** | init-data thiếu `sources[]` | **T-BE-INIT-01** · **T-UI-LKP-01** | **OPEN P0** |
| **GAP-SA-ITS-UI-SCHEMA-01** | CatalogUiSchema kind `its-traffic-detect` missing | **T-BE-UI-SCHEMA-01** · **T-UI-CONFIG-01** | **OPEN P0** |
| **GAP-TL-CONFIG-01** | MFE `configHint` placeholder · leftover `const columns` | **T-UI-CONFIG-01** · **T-UI-LIST-01** | **OPEN P0** |
| **GAP-TL-FILTER-01** | Zone B thiếu Dropdown source/engine | **T-UI-LIST-01** · **T-UI-LKP-01** | **OPEN P0** |
| **GAP-TL-LKP-CONFIRM-01** | Confirm asset-type phải SearchInput (không free-text Input) | **T-UI-LKP-01** · **T-UI-AI-FORM-01** | **OPEN P0** |
| GAP-ITS-GEO / GPU / SignalR / live CCTV | PostGIS · YOLO thật · RTSP | — | **DEFER P2** |

---

## FormType pack (canonical — `form-type-task-pack`)

`packKind=list` + `featureClass=ai` → **list pack + ai pack** + Kind F overlay + **Config FULL**.

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | TL/Dev | **done** (TL) | Context ownership · DOMAIN-MAP · control-map |
| T-PERM-01 | Dev | **pending** | `ai-vision.its/objects.*` |
| T-UI-LIST-01 | Dev | **pending** | A–D · `tl-grid-task-template` FULL · **cấm** leftover columns |
| T-UI-FORM-01 | Dev | **pending** | Kind D slideout C/E/V/Copy · footer only · View readOnly |
| T-UI-ACT-01 | Dev | **pending** | Action inventory → form/API |
| T-UI-LKP-01 | Dev | **pending** | road-route · asset-type SearchInput · Dropdowns init-data (+ sources) |
| T-UI-FIELD-01 | Dev | **pending** | Design §5 control-map ↔ DTO/API |
| T-UI-PROD-01 | Dev | **pending** | end-user · cấm demo store codes · View ≠ Input xám · cấm AI chrome |
| T-UI-UX-01 | Dev | **pending** | constitution · **cấm** `filterMaxWidthPx` · spacing |
| T-UI-LEAVE-01 | Dev | **pending** | LeaveConfirmModal dirty paths |
| T-UI-CONFIG-01 | Dev | **pending** | LinCatalogUiSchemaEditorModal · **cấm** configHint |
| T-UI-AI-01 | Dev | **pending** | Sim Mobile/Dashcam/CCTV + result feed |
| T-UI-AI-FORM-01 | Dev | **pending** | HITL Confirm/Dismiss modals |
| T-UI-MAP-01 | Dev | **pending** | Kind F overlay (không full OMS page) |
| T-BE-CRUD-01 | Dev | **pending** | API-01…06 verify/extend |
| T-BE-INIT-01 | Dev | **pending** | API-02 + **sources[]** |
| T-BE-FILTER-01 | Dev | **pending** | API-01 `source`+`engine` (**GAP-SA-ITS-FILTER-01**) |
| T-BE-AI-01 | Dev | **pending** | API-07…08 detect + nearby 10 m |
| T-BE-CONFIRM-ASSET | Dev | **pending** | API-09/10 + `IRoadAssetService` |
| T-BE-UI-SCHEMA-01 | Dev | **pending** | Registry + Seed `its-traffic-detect` |
| T-MIG-01 | Dev | **pending** | verify `Schema_RmmsAiVisionItsTrafficObjects` exists · **cấm** recreate |
| T-BFF-01 | Dev | **pending** | proxy objects · detect · forward new query |
| T-QA-CRUD-01 | QA | **pending** | Create→Edit→View→Delete + row menu |
| T-QA-AI-01 | QA | **pending** | detect stub + confirm/dismiss + map |
| T-LIB-01 | — | **n/a** | Lin* đã có trên common |

**GAP-TL-FORMTYPE-01:** closed — đủ list + ai + map + LKP/FIELD/PROD/UX/LEAVE/CONFIG + BE filter/schema ids.

---

## Task pack (detail)

### T-CTX-01
**layer:** docs  
**status:** **done** (TL this turn)  
**DoD:**
- [x] Context feature + control-map/actions khớp design+solution
- [x] DOMAIN-MAP slug `its-traffic-detect` → AiVision verified
- [x] route locked `/its-traffic-detect` · mfeStdUrl stamped
- [x] API paths align solution API-01…10 · L-01…04
- [ ] Dev: đảm bảo MFE `docs/context` hub mention slug nếu còn thiếu

### T-PERM-01
**layer:** ui+api  
**status:** pending  
**codes:** `ai-vision.its/objects.read|create|update|delete|confirm|dismiss`  
**skills:** `/implement-erp-form-permissions` · catalog-list-permissions · api-permission-gate  
**DoD:**
- [ ] FE toolbar/form/row menu gated · local mode OK
- [ ] BE `[RequirePermission]` stub comments trên controllers
- [ ] Confirm/Dismiss riêng perm

### T-BE-CRUD-01
**layer:** api  
**status:** pending  
**from_solution:** API-01…06 · entity `AiVisionItsTrafficObjectEntity` · table `rmms_ai_vision_its_traffic_objects`  
**source:** backend=`Linm.RMMS.WebService` · domain=`AiVision` · **cấm ERP.***  
**gates:** TZ · XCO get_only · SHARE tenant  
**skills:** `/create-bff-api-feature` · `/new-endpoint` · `/review-query` · `/implement-view-cross-company` · `/review-timezone-implement` · `/implement-shared-table`  
**DoD:**
- [ ] ApiResponse / paged · search must work · pageSize ∈{50,100,200,500}
- [ ] Soft-delete Draft only · Edit/Delete locked khi Confirmed/Dismissed
- [ ] Code server-gen `ITS-YYYYMMDD-NNNN`
- [ ] objectClass ∈ `bien_bao`|`coc_tieu` only
- [ ] `dotnet build` API PASS · **no ERP.***

### T-BE-INIT-01
**layer:** api  
**status:** pending  
**from_solution:** API-02 · **GAP-SA-ITS-INIT-SOURCE-01**  
**skills:** `tl-dropdown-from-backend`  
**DoD:**
- [ ] `{ objectClasses[2], statuses[], engines[], sources[], nearbyRadiusMeters:10 }`
- [ ] FE Dropdown **chỉ** từ init-data — **cấm** hardcode
- [ ] **Cấm** class ổ gà / 8 class ai-asset-detect

### T-BE-FILTER-01
**layer:** api  
**status:** pending  
**from_solution:** API-01 delta · **GAP-SA-ITS-FILTER-01**  
**deps:** T-BE-CRUD-01  
**DoD:**
- [ ] Query params `source` · `engine` trên GET `/objects` (controller + service + FE endpoint)
- [ ] TZ bounds fromDate/toDate UTC
- [ ] `dotnet build` PASS

### T-BE-AI-01
**layer:** api  
**status:** pending  
**from_solution:** API-07 · API-08  
**DoD:**
- [ ] Detect frame **stub** P1 (không YOLO thật) · persist Draft + NearbyRisk
- [ ] Nearby Haversine default **10 m** · config `AiVision:ItsTraffic:NearbyRadiusMeters`
- [ ] **không** auto-create Asset
- [ ] `dotnet build` PASS

### T-BE-CONFIRM-ASSET
**layer:** api  
**status:** pending  
**from_solution:** API-09 · API-10  
**deps:** T-BE-CRUD-01 · Asset `IRoadAssetService`  
**DoD:**
- [ ] Confirm → RoadAsset Code=`TS-AI-YYYYMMDD-NNNN` · Type=`assetTypeCode` · Source=`its-traffic-detect` · SourceRef=object Code
- [ ] Default map: `bien_bao`→`GANTRY_SIGN` · `coc_tieu`→`DELINEATOR`
- [ ] Dismiss → Status=Dismissed · Draft only
- [ ] XCO load object trước mutate
- [ ] `dotnet build` PASS

### T-BE-UI-SCHEMA-01
**layer:** api  
**status:** pending  
**from_solution:** L-04 · **GAP-SA-ITS-UI-SCHEMA-01**  
**DoD:**
- [ ] `CatalogUiSchemaRegistry` + Seed kind **`its-traffic-detect`** · columns Design §5.2
- [ ] Title FE «Cấu hình hiển thị danh mục»
- [ ] `dotnet build` PASS

### T-MIG-01
**layer:** migration  
**status:** pending  
**skills:** `/database-migration` · `/new-migration`  
**DoD:**
- [ ] Verify named migration **`Schema_RmmsAiVisionItsTrafficObjects`** **EXISTS** — **cấm** recreate
- [ ] Chỉ thêm migration mới nếu CatalogUiSchema seed cần pair Schema/Seed riêng
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff  
**status:** pending  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] Proxy-only `web-bff/api/v1/ai-vision/its/objects/**` · `detect`
- [ ] Forward `Authorization` · `X-Company-Id` · query `source`/`engine`
- [ ] `dotnet build` BFF PASS · **no business logic**

### T-UI-LIST-01 — List page + grid (Kind B)

**status:** pending  
**page:** `/its-traffic-detect`  
**from_design:** zones A,B,FILTER,KPI,C0–C3,D,F,H · reviewUrl prototype  
**implement.wire:** ui → `services/itsTrafficDetect` → apiClient → BFF → API  
**ssot.platform_ui:** `@linm-soft-org/linm-web-common-components`

**skills (REQUIRED load trước Write):**
- /agent-dev · tl-design-grid-component-map · tl-grid-ssot · tl-grid-full-flow · tl-catalog-list-parity · tl-list-shell-height · **tl-retry-ssot-rereview**
- /erp-form-context · /review-grid · /erp-filter-form
- /implement-catalog-list-toolbar · /implement-history
- form_pair → T-UI-FORM + dev-form-review-checklist

**ssot.reuse:**
  design_zones: DES-GRID-A,B,FILTER,KPI,C0,C1,C2,C2a,C3,D,F,H,Z + DES-MAP-F
  ui_page: LinPageLayout (kind=catalog) · flex root (GAP-P2-LAYOUT-06)
  ui_filter: LinErpListFilterBar + SearchTextInput + Zone B (SearchInput road-route · Dropdown class/source/status/engine · Date) — cấm nút Tìm (GAP-P2-87)
  ui_toolbar: catalogToolbar FULL (refresh·history·editConfig·view·edit·create) + domain: sim×3 · nearby · export-stub · reset-seed — **cấm** AI badge
  ui_grid: LinCatalogDataGrid · `columns={buildDynamicGridColumns(schema, uiColumns)}` · resizable default ON
  ui_footer: LinCatalogListPagination ONLY
  ui_config: **LinCatalogUiSchemaEditorModal** — **cấm** configHint · **cấm** LinListTableConfigModal cột
  ui_row: LinCatalogRowActionMenu + buildCatalogRowMenuItems · listRowMenuHelp
  ui_history: LinCatalogHistoryModal stub OK
  ui_load: useServerPagedListLoading · CatalogTableSkeleton
  http: apiClient · unwrap — cấm clone ApiClient
  init_data: GET …/objects/init-data only

**implement.page_shell:**
  layout: page root flex:1;min-height:0 · standalone --app-height
  shell: 1× LinPageLayout — cấm nested CatalogListShell
  header: «ITS phát hiện biển báo / cọc tiêu» + fa-road · **không** badge AI
  listTitle: «Danh sách candidate»
  footer: LinCatalogListPagination · pageSize [50,100,200,500]

**implement.grid:**
  columns (schema): STT · □ · ID · Loại · Score(%) · Tọa độ · Tuyến · Nguồn · TT · Engine · Nearby · Quan sát · Mã Asset · ⋮
  resizable: DEFAULT true
  **cấm** leftover `const columns` / `LinCatalogDataColumn` sau đổi import

**APIs:** API-01 · API-02 · L-01  
**deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-BE-FILTER-01 · T-PERM-01 · T-UI-CONFIG-01  

**DoD:**
- [ ] Dev re-review checklist § HARD trước Write · ghi `retry.ssot_rereview`
- [ ] Chỉ Lin*/Erp* từ common — không local pager/toolbar/ApiClient
- [ ] A–D parity · search work · Zone F FULL · History stub
- [ ] Filter source+engine wired
- [ ] BASE list = `/ai-vision/its/objects`
- [ ] `yarn build` PASS (MFE AiVision)

### T-UI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** Kind D Slideout Z1–Z3 · **footer_actions_only** · fields control-map §5.3  
**skills:** `/erp-form-context` · `/implement-show-leave-confirm` · `dev-form-review-checklist` · `slideout-form-layout`  
**APIs:** API-03 · API-04 · API-05 · API-06 · L-01 · init-data  
**deps:** T-UI-LIST-01  
**DoD:**
- [ ] FormMode Create/Edit/View/Copy · View = readOnly (không disabled xám)
- [ ] Footer only: C/E/Copy = Hủy/Lưu · View = Đóng/Sửa/Sao chép/Confirm/Dismiss — **cấm** top Quay lại/Hủy/Lưu trên Z1
- [ ] leave-confirm dirty · validate required (objectClass·score·engine·lat/lng·routeId·source)
- [ ] Dropdown từ init-data only
- [ ] `yarn build` PASS

### T-UI-ACT-01 — action inventory
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST C1 | `SearchTextInput` → applyFilters | GET `/objects?search=` |
| Route / Class / Source / Status / Engine / Date | S-LIST FILTER | SearchInput · Dropdown · Date | GET query |
| Clear filter | FILTER | reset filters | GET |
| Refresh | toolbar | reloadAll | GET |
| + Tạo | toolbar | openCreate → Slideout | POST |
| Edit / View (toolbar) | toolbar | openRow | GET · PUT |
| History | toolbar | openHistory stub | DEFER |
| Config `fa-cog` | toolbar | LinCatalogUiSchemaEditorModal | L-04 |
| Sim Mobile / Dashcam / CCTV | toolbar | detectFrame | POST `/detect` |
| Nearby | toolbar | checkNearby | GET `/nearby` |
| Export stub | toolbar | toast/stub | — |
| Reset seed | toolbar (dev) | reset local/seed | — |
| Row View/Edit/Copy | row menu | handleRowMenuSelect | GET · POST copy |
| Row Confirm | row menu / form | open Confirm modal | POST `/{id}/confirm` |
| Row Dismiss | row menu / form | open Dismiss modal | POST `/{id}/dismiss` |
| Deep-link `?form=` | URL | create/edit/view/copy | GET when id |
| Map pin → View | S-MAP | openRow(view) | GET |
| Soft-delete Draft | row/toolbar (perm) | deleteRow | DELETE |

**GAP-P2-ACT-\*:** mọi action trên phải wire — thiếu = GAP-P2-ACT-* · **cấm** Aligned.

**DoD:**
- [ ] Inventory đủ · search work · Confirm/Dismiss/sim/nearby/config wired
- [ ] `yarn build` PASS

### T-UI-LKP-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01 · T-BE-INIT-01  
**DoD:**
- [ ] List/form `routeId` = SearchInput `road-route` — **cấm** free-text khi seed sẵn
- [ ] Confirm `assetTypeCode` = SearchInput `asset-type` — default map class→code (**GAP-TL-LKP-CONFIRM-01**)
- [ ] Dropdown objectClass/source/status/engine **chỉ** init-data (sau T-BE-INIT sources)
- [ ] `yarn build` PASS

### T-UI-FIELD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Field inventory Design §5.3 ↔ DTO/API scalars (score 0–1 UI %, lat/lng, bboxJson, heading/alpha, note multiline)
- [ ] Required * khớp SA validation
- [ ] `yarn build` PASS

### T-UI-PROD-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01  
**DoD:**
- [ ] Code `ITS-*` server-gen — Create display `(tự sinh)` · **cấm** gen từ demo store
- [ ] View mode = readOnly / `<dl>` style — **cấm** Input xám disabled toàn form
- [ ] **Cấm** Resource/Slideout/View=readOnly anti-pattern sai · **cấm** AI chrome header
- [ ] `yarn build` PASS

### T-UI-UX-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-LIST-01 · T-UI-FORM-01  
**skills:** `dev-ui-ux-constitution`  
**DoD:**
- [ ] **Cấm** `filterMaxWidthPx` / filterMaxWidth trên LinPageLayout
- [ ] Spacing constitution · footer-only form · toast/`useAlert` — **cấm** `window.alert`/`confirm`
- [ ] `yarn build` PASS

### T-UI-LEAVE-01
**layer:** ui  
**status:** pending  
**deps:** T-UI-FORM-01  
**skills:** `/implement-show-leave-confirm`  
**DoD:**
- [ ] Dirty → LeaveConfirmModal trên Đóng / Hủy / route leave / workspace switch
- [ ] **Cấm** native `window.confirm` trên MFE
- [ ] `yarn build` PASS

### T-UI-CONFIG-01
**layer:** ui  
**status:** pending  
**from_design:** DES-GRID-F FULL · **GAP-TL-CONFIG-01** · **GAP-SA-ITS-UI-SCHEMA-01**  
**deps:** T-BE-UI-SCHEMA-01 · T-UI-LIST-01  
**DoD:**
- [ ] `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort/Thêm cột
- [ ] `useCatalogUiSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}`
- [ ] **Cấm** `configHint` · **cấm** `LinListTableConfigModal` (cột) · **cấm** leftover `const columns`
- [ ] `yarn build` PASS

### T-UI-AI-01
**layer:** ui  
**status:** pending  
**from_design:** S-FEED · toolbar sim×3  
**APIs:** API-07  
**deps:** T-BE-AI-01 · T-UI-LIST-01  
**devSlash:** `/agent-dev-ai-detect`  
**DoD:**
- [ ] Sim Mobile/Dashcam/CCTV tạo 1–N Draft trên list + map pins
- [ ] **không** hứa mAP · **không** badge AI header
- [ ] `yarn build` PASS

### T-UI-AI-FORM-01
**layer:** ui  
**status:** pending  
**from_design:** S-MOD-CONFIRM · S-MOD-DISMISS  
**APIs:** API-09 · API-10 · L-02  
**deps:** T-BE-CONFIRM-ASSET · T-UI-FORM-01 · T-UI-LKP-01  
**devSlash:** `/agent-dev-ai-detect`  
**DoD:**
- [ ] Confirm modal: SearchInput `asset-type` * · default `bien_bao`→`GANTRY_SIGN` · `coc_tieu`→`DELINEATOR`
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
- [ ] Pins: existing TS · Draft · nearby · Confirmed
- [ ] Basemap OSM / Esri Streets / Esri sat · Fit
- [ ] Pin click → View slideout
- [ ] `yarn build` PASS

### T-QA-CRUD-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-ACT-01 · T-BE-CRUD-01 · T-UI-FORM-01 · T-UI-CONFIG-01  
**DoD:**
- [ ] Smoke Create→Edit→View→Copy→Delete + row menu
- [ ] Search/filter(source·engine)/pagination · Zone F · leave-confirm
- [ ] Update `qa/scenarios.md`

### T-QA-AI-01
**layer:** qa  
**status:** pending  
**deps:** T-UI-AI-01 · T-UI-AI-FORM-01 · T-BE-AI-01 · T-BE-CONFIRM-ASSET · T-UI-MAP-01  
**DoD:**
- [ ] Sim → Draft · Nearby banner · Confirm→Asset · Dismiss
- [ ] Map pin parity · e2eQa ON (start:std + docker + yarn e2e-qa + screenshot)
- [ ] Update `qa/scenarios.md` QA-AI rows

---

## Deps order

```
T-CTX-01 (done)
  → T-MIG-01 (verify)
  → T-BE-CRUD-01 → T-BE-INIT-01 → T-BE-FILTER-01 → T-BE-AI-01 → T-BE-CONFIRM-ASSET → T-BE-UI-SCHEMA-01
  → T-BFF-01
  → T-PERM-01
  → T-UI-LIST-01 → T-UI-CONFIG-01
                 → T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01 → T-UI-PROD-01 → T-UI-UX-01 → T-UI-LEAVE-01
                 → T-UI-ACT-01
                 ↘ T-UI-AI-01 · T-UI-AI-FORM-01 · T-UI-MAP-01
  → verify: MFE yarn build PASS · BE dotnet build PASS
  → T-QA-CRUD-01 · T-QA-AI-01 → Review
```

**HARD trước Dev Write:** board `beRepo` && `uiRepo` = **approved** (STATUS) · path = `Linm.RMMS.WebService` + `Linm.Web.RMMS.AiVision` · **cấm ERP.***  
**HARD:** `tl-retry-ssot-rereview` · fix_all GAP cùng surface · build PASS trước Dev `completed`.

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · roleOnly khi enqueue · implement `specs/its-traffic-detect/implement/its-traffic-detect.md` |
| Priority | T-BE-FILTER/INIT/UI-SCHEMA + T-UI-CONFIG/LIST (đóng GAP P0) → FORM/ACT/AI/MAP |
| Anti-dup | `ssot-no-duplicate.md` — reuse AiVision patterns · **tách** bảng ITS · **≠** ai-asset-detect 25 m |
| UI SSOT | `MFE-COMMON/Linm.Web.Common.Components` |
| BE SSOT | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| Auth SSOT | `Linm.Platform.Authentication` |
| HARD | `tl-retry-ssot-rereview` · Config FULL · source/engine filter · sources[] init · build PASS |
| Cấm | class ổ gà · nested CatalogListShell · footerPagination · configHint · leftover columns · AI chrome header · auto-create Asset |
| e2eQa | ON — khi tới QA: yarn start:std + docker + yarn e2e-qa + screenshot |
| autoApprove | ON — Review gate vẫn pending đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.20.01 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | 2026-08-21T05:50:00.000Z |
| versionGate | ok |
| taskId | `task_6f2bb59b` |
| contentHash (data-analy) | sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526 |

---
<!-- Version meta: skillVersion=2026.08.19.04 · schemaVersion=4 · workflowVersion=2026.08.20.01 · versionGate=ok -->
