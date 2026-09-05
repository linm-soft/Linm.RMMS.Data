# SA — Solution discovery — so-ts-convex-mirror (Sổ TS — Gương cầu / long môn)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_41734ed0`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-convex-mirror` |
| title | Sổ TS — Gương cầu / long môn |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `CONVEX_MIRROR` |
| cluster | `atgt_point` · ô KCHT `t31` |
| dump | `road_sphere_mirror` · CSV **187378** |
| status | `confirmed` |
| design_confirm | approve (`task_98fbbc05`) |
| solution_confirm | **approve** (autoApprove=ON · `task_41734ed0`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-convex-mirror`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=CONVEX_MIRROR` · alias board `/so-ts-convex-mirror` (optional Navigate) |
| mfeStdUrl | `http://localhost:9301/so-ts-convex-mirror` |
| peerStdUrl | `http://localhost:9301/so-ts?type=CONVEX_MIRROR` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-convex-mirror-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-convex-mirror-real-data.md` |
| design | `specs/so-ts-convex-mirror/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprintPrior | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_41734ed0` |
| priorTask | `task_98fbbc05` (design completed) |
| updatedAt | `2026-09-01T15:37:03.741Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live) | New (Design+analy+PO chốt) | Action |
|------|----------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-convex-mirror` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-convex-mirror`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho 9 attr gương · **không** Schema_* | **no Schema_*** flatten P1 |
| Import / dump | `road_sphere_mirror` · CSV 187378 · GIS `guong-cau` | Giữ đủ dump keys §B · **cấm** invent long môn / GANTRY | import + labels |
| Name | risk = đoạn tuyến | `name` = loại+km else code/vidagis · **cấm** `name_of_route_asset` — **GAP-MIRROR-NAME-01** | form + import |
| Quantity | default `1` risk | `quantity` ← `total_number_post` — **GAP-MIRROR-QTY-01** | import + form |
| dumpSpecs attrs | S-ATTR `<dl>` readonly | Editable **9 attr** dump · merge dumpSpecs — **GAP-MIRROR-SCOPE-01** | FE + dumpSpecs merge |
| MST / shape / mat / loc | text dumpSpecs | Dropdown LOOKUP_STATIC · init-data `assetTypeMsts[]` / `shapeCutPosts[]` / `materialPosts[]` / `locationPosts[]` — **GAP-MIRROR-TYPE-01** | delta init-data |
| Grid profile | 1 schema mọi type | Hide `type`/`kmTo` · show dump attr + SL · primary name | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc | **Ẩn** + không required · **cấm** ép km `"0"` — **GAP-MIRROR-POINT-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-MIRROR-LEAVE-01** | FE only |
| Labels FE | thiếu key gương | `dumpSpecLabels` đủ 9 key — **GAP-MIRROR-LABEL-01** | FE only |
| Alias board | live filter only | `/so-ts-convex-mirror` board-only · optional Navigate — **GAP-MIRROR-ROUTE-01** | FE optional |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — flatten=SA chốt **keep dumpSpecs P1** | no migration SA |
| Title tile t31 | «Gương cầu / long môn» | Title giữ · **data chỉ** `CONVEX_MIRROR` · **cấm** field gantry | FE/copy only |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `guong-cau` cite only).

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · list `AssetListPage` · form `AssetFormPage` · **cấm** fork |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `RoadAssetsController` · `[Route("api/v1/asset/road-assets")]` |
| Service | `RoadAssetService` / `IRoadAssetService` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` · table `rmms_road_assets` |
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `CONVEX_MIRROR` · dump `road_sphere_mirror` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `ResolveTypeAssetName(CONVEX_MIRROR)` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-convex-mirror.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=CONVEX_MIRROR` · alias board `/so-ts-convex-mirror` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Asset** / `asset` · DOMAIN-MAP (feature inherit `asset`) |
| API host | `Domains/Asset/` · `RoadAssetsController` |
| BFF | `bff/domains/asset/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Asset` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `asset.road-assets.read|create|update|delete` · FE `rmms-asset:road-assets:read|write` — debt align Auth |
| Persist | no-parent-json · flat scalars + `DumpSpecs` text JSON **attrs only** · **cấm** invent child table P1 |
| Out of pack | flatten DB columns · MST/shape/mat/loc SearchInput master · Excel wizard · Kind F map · invent History API · invent long môn entity |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinErpListFilterBar · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogUiSchemaEditorModal · LinCatalogHistoryModal · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth · debt stub |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag · **không** line array parent JSON |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` / `configHint` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ · **cấm** tab legacy |
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR(**9 attr**) · S-GPS | **cấm** fork `AssetFormPage` · **cấm** invent gantry fields |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | `/review-timezone-implement` | Parent API optional `fromDate`/`toDate` — **không** mount trên pack CONVEX_MIRROR |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T15:37:03.741Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=CONVEX_MIRROR` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=CONVEX_MIRROR`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| MST / shape / mat / loc | Dropdown LOOKUP_STATIC | form S-ATTR · S-LOC · S-NAME | API-06 init-data delta |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=CONVEX_MIRROR` + filters | — | page=1 on filter change · profile cột CONVEX_MIRROR |
| create | empty · type lock `CONVEX_MIRROR` · init-data | POST body + dumpSpecs merge | IdCode BE · **không** required `kmTo` · qty từ `total_number_post` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `CONVEX_MIRROR` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `CONVEX_MIRROR` deep-link |
| `search` | SearchTextInput | mã · tên · tuyến · QR |
| `route` | SearchInput road-route | master · **cấm** gộp 3 tầng |
| `kmFrom` | Text chainage | filter range start |
| `kmTo` | Text chainage | filter range end · **≠** form/grid cột `kmTo` |
| `orgUnit` | SearchInput tree org-unit | QS |
| `page` / `pageSize` | pagination | 50/100/200/500 |

**Không mount** trên Zone B pack này: `fromDate` · `toDate` (API parent optional giữ).

---

## 2. Form data analysis

| Screen | Fields | Source type | Persist | Notes |
|--------|--------|-------------|---------|-------|
| List filter | search · type · route · kmFrom/kmTo · orgUnit | query | — | LinErpListFilterBar |
| List grid | name · route* · kmFrom · dump attrs · quantity · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo |
| Form S-META | code · type · status · source · unit · note · value · qr · isActive | transaction | scalars | code IdCode BE |
| Form S-ROUTE | route · routeNamed · routeSegment | master SearchInput | scalars | **cấm** gộp |
| Form S-LOC-POINT | kmFrom · location_post_id | Text + LOOKUP | scalar + dumpSpecs | **ẩn kmTo** |
| Form S-NAME | name · asset_type_mst_id | Text + LOOKUP | scalar + dumpSpecs | name ≠ đoạn · MST ≠ shell type |
| Form S-ATTR | shape · diameter · material · height · span · number_sign · total_number_post | LOOKUP/Number | dumpSpecs (+ quantity sync) | **9 attr** dump |
| Form S-GPS | lat · lng | Number | scalars | |
| Leave | dirty detect | — | — | LeaveConfirmModal |

### DumpSpecs merge (P1 · **không** flatten DB)

| Dump key | UI zone | Persist |
|----------|---------|---------|
| `asset_type_mst_id` | S-NAME | dumpSpecs |
| `location_post_id` | S-LOC-POINT | dumpSpecs |
| `shape_cut_post_id` | S-ATTR | dumpSpecs |
| `diameter_post` | S-ATTR | dumpSpecs |
| `material_post_id` | S-ATTR | dumpSpecs |
| `height_post` | S-ATTR | dumpSpecs |
| `span_length` | S-ATTR | dumpSpecs |
| `number_sign` | S-ATTR | dumpSpecs |
| `total_number_post` | S-ATTR | dumpSpecs **+** scalar `quantity` |
| `from_coordinatex/y` | optional | dumpSpecs or lat/lng |
| `to_coordinatex/y` | — | dumpSpecs only · **không** ép kmTo |

**Flatten decision (SA):** **KEEP dumpSpecs P1** · **DEFER** Schema_* columns / Step 4b / migration — **GAP-MIRROR-SCOPE-01** / flatten=SA chốt. **Cấm** invent long môn / GANTRY fields.

### LOOKUP_STATIC (init-data delta · P1)

| init-data key (đề xuất) | dump keys bound | Note |
|-------------------------|-----------------|------|
| `assetTypeMsts[]` | `asset_type_mst_id` | ≠ shell `type=CONVEX_MIRROR` |
| `shapeCutPosts[]` | `shape_cut_post_id` | |
| `materialPosts[]` | `material_post_id` | |
| `locationPosts[]` | `location_post_id` | S-LOC |
| statuses / sources / units | live | giữ |

Seed từ dump distinct / BE seed cite · **cấm** hardcode FE không cite.

---

## 3. API inventory (live · **cấm** invent)

| ID | Method | Path | Auth | Note |
|----|--------|------|------|------|
| API-01 | GET | `/api/v1/asset/road-assets` | read | `?type=CONVEX_MIRROR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| API-02 | GET | `/api/v1/asset/road-assets/{id}` | read | XCO get-only |
| API-03 | POST | `/api/v1/asset/road-assets` | create | body `type=CONVEX_MIRROR` + dumpSpecs |
| API-04 | PUT | `/api/v1/asset/road-assets/{id}` | update | merge dumpSpecs |
| API-05 | DELETE | `/api/v1/asset/road-assets/{id}` | delete | soft `isActive` |
| API-06 | GET | `/api/v1/asset/road-assets/init-data` | read | + delta LOOKUP MST/shape/mat/loc |
| API-07 | GET | `/api/v1/asset/road-assets/summary-by-type` | read | tile t31 |
| LKP-01 | GET | Integration asset-types search | — | shell type |
| LKP-02 | GET | Integration road-routes search | — | 3 tầng |
| LKP-03 | GET | Integration org-units search | — | filter |
| LKP-04 | — | Integration ui-schema `road-assets` | — | config modal |

BFF mirror: `web-bff/api/v1/asset/road-assets` · **proxy only**.

---

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Table | `rmms_road_assets` **giữ** |
| Entity | `RoadAssetEntity` · `DumpSpecs` text JSON |
| Type seed | `CONVEX_MIRROR` · `RoadAssetCatalogHandler` · dump `road_sphere_mirror` |
| Schema_* flatten | **DEFER P2** · **không** migration / Step 4b ở SA |
| Child table | **cấm** invent |
| Import fixes | name ≠ đoạn · quantity ← `total_number_post` · giữ dump keys §B |
| GIS | layer `guong-cau` cite only · map OUT of list pack |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| API | `RoadAssetsController` · business + persist |
| BFF | `RoadAssetsBffController` · **proxy only = yes** · no transform dumpSpecs |
| FE | `endpoint.ts` BASE `/asset/road-assets` → BFF |
| Fallback | **cấm** demo / localStorage SSOT |

---

## 6. Tasks handoff (ids · DEFER TL)

| ID | Area | Note |
|----|------|------|
| T-PROFILE | FE grid | type profile CONVEX_MIRROR · hide type/kmTo · show dump+SL · primary name |
| T-FORM-ATTR | FE form | S-ATTR 9 attr editable · merge dumpSpecs · dumpSpecLabels |
| T-NAME-QTY | FE + import | GAP-MIRROR-NAME-01 · GAP-MIRROR-QTY-01 |
| T-LOOKUP | BE init-data + FE | GAP-MIRROR-TYPE-01 LOOKUP_STATIC 4 nhóm |
| T-POINT | FE | ẩn kmTo · cấm ép `"0"` |
| T-LEAVE | FE | LeaveConfirmModal + useAlert |
| T-ALIAS | FE | optional Navigate `/so-ts-convex-mirror` |
| T-DOMAIN | docs | optional DOMAIN-MAP row |
| T-PACK | TL | `task/so-ts-convex-mirror.md` |

**devSlash:** `/agent-dev` · **cấm** fork AssetFormPage · **cấm** invent long môn fields.

---

## 7. DoR / confirm

| Check | Result |
|-------|--------|
| Design confirmed + compact | PASS |
| real-data §B FormMode↔API | PASS · cite live road-assets |
| Ownership / DOMAIN Asset | PASS |
| dumpSpecs vs flatten | PASS · **keep P1** · DEFER Schema_* |
| Gates TZ/XCO/SHARE | PASS · tz_na · xco_get_only · share_tenant |
| solution_confirm | **approve** (autoApprove=ON) |
| Write MFE/native | **không** (role SA) |
| Step 4b / migration / e2e | **không** |

## Version meta

| | |
|--|--|
| skillId | `agent-sa` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprintPrior | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| taskId | `task_41734ed0` |
| status | `confirmed` |
| solution_confirm | `approve` |
| updatedAt | `2026-09-01T15:37:03.741Z` |
