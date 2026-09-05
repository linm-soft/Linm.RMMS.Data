# SA — Solution discovery — so-ts-median (Sổ TS — Dải phân cách)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_1094a2ca`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
| title | Sổ TS — Dải phân cách |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `MEDIAN` |
| cluster | `linear_protect` · ô KCHT `t11` |
| dump | `tbl_median_strip` |
| status | `confirmed` |
| design_confirm | approve (`task_e2599798`) |
| solution_confirm | **approve** (autoApprove=ON · `task_1094a2ca`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-median`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=MEDIAN` · alias board `/so-ts-median` |
| mfeStdUrl | `http://localhost:9301/so-ts-median` |
| peerStdUrl | `http://localhost:9301/so-ts?type=MEDIAN` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-median-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-median-real-data.md` |
| design | `specs/so-ts-median/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| headerFingerprintPrior | `sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_1094a2ca` |
| priorTask | `task_e2599798` (design completed) |
| peerPack | `so-ts-guardrail` / `so-ts-noise-barrier` (linear_protect · **page MEDIAN only** · cấm gộp) |
| updatedAt | `2026-09-01T17:20:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-median` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-median`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr MEDIAN · 4 XY + 10 key dump + địa danh trong bag | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `dai-phan-cach` · DefaultCodePrefix live generic/`TS-` | create/import prefix **`PC-`** · GIS short **`GPC`** · type seed `MEDIAN` · dump `tbl_median_strip` · CSV 6829 · unit `ATGT` — **GAP-MEDIAN-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu 10 key MEDIAN | Label VN đủ 10 key + địa danh + 4 XY — **GAP-MEDIAN-SPEC-01** | FE labels + form write |
| LOOKUP loại/VL/vị trí | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `medianStripTypes[]` / `fenceMaterials[]` / `medianLocations[]` (reuse `vitriOptions` nếu khớp) — **GAP-MEDIAN-LOOKUP-01** | delta init-data |
| Bool cỏ/cây | text dump | Select boolean `planting_grass` / `planting_tree` — **GAP-MEDIAN-BOOL-01** | FE + dumpSpecs merge |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Select/Text đủ dump · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: loại dải · 3 tầng · kmFrom/kmTo · dài · rộng · cỏ · cây · cao hàng rào · VL · hide-empty vị trí/địa danh · ẩn type/ảnh · primary = `type_median_strip_id` | FE type-profile |
| Range | S-LOC-RANGE peer | km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-MEDIAN-RANGE-01** | FE validation |
| Name | optional / weak risk | `name` optional · list primary ≠ name · **cấm** IsWeak → đoạn — **GAP-MEDIAN-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-median` board-only · optional Navigate — **GAP-MEDIAN-ROUTE-01** | FE optional |
| Flatten 4 XY / attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-MEDIAN-FLAT-01** (SA chốt · PO `flatten=SA`) | no migration SA |
| Peer | GIS `dai-phan-cach` cùng cluster linear_protect | page filter **MEDIAN only** · peer packs riêng | FE filter |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `dai-phan-cach` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `MEDIAN` · dump `tbl_median_strip` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `PC` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-median.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=MEDIAN` · alias board `/so-ts-median` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data median lookups |
| GIS | `dai-phan-cach` ↔ `MEDIAN` · icon short `GPC` (= IdCode prefix family `PC-`) |

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
| Auth perm | `asset.road-assets.read|create|update|delete` · FE `rmms-asset:road-assets:read|write` |
| Persist | no-parent-json · flat scalars + `DumpSpecs` text JSON **attrs only** · **cấm** invent child table P1 |
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `dai-phan-cach` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinErpListFilterBar · LinCatalogDataGrid · LinCatalogListPagination · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ |
| Form reuse | S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab legacy |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | tenant-only · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T17:20:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=MEDIAN` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=MEDIAN`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `PC-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-median` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=MEDIAN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=MEDIAN` · IdCode prefix **`PC-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** median lookups |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t11` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · unitCode · … |
| Attr dump | `DumpSpecs` JSON text | **10 key:** `type_median_strip_id` · `length_median_strip` · `width_median_strip` · `planting_grass` · `planting_grass_area` · `planting_tree` · `number_tree` · `height_fence` · `material_type_fence_id` · `location_median_strip_id` · + `province*`/`commune*` · `lat*`/`lng*` (4 XY đầu/cuối) |
| Flatten | **DEFER P2** | **GAP-MEDIAN-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix / bool rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = `type_median_strip_id` (không bắt buộc `name`) |
| Name | optional Text · trống OK — **GAP-MEDIAN-NAME-01** |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`PC-`** (GIS short `GPC`) — **GAP-MEDIAN-PREFIX-01** |
| DefaultCodePrefix live | hôm nay generic/`TS-` → đổi theo type `MEDIAN` hoặc override create |
| planting_grass / planting_tree | **Select boolean** — **GAP-MEDIAN-BOOL-01** · **cấm** Text dump raw |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `medianStripTypes` | distinct `type_median_strip_id` | Dropdown * LOOKUP_STATIC · grid primary |
| `fenceMaterials` | distinct `material_type_fence_id` | Dropdown LOOKUP_STATIC |
| `medianLocations` | distinct `location_median_strip_id` / reuse `vitriOptions` | Dropdown hide-empty |

### dumpSpecLabels — 10 key MEDIAN (P1 · GAP-MEDIAN-SPEC-01)

| Key | Label VN |
|-----|----------|
| `type_median_strip_id` | Loại dải phân cách |
| `length_median_strip` | Chiều dài dải (m) |
| `width_median_strip` | Chiều rộng dải (m) |
| `planting_grass` | Trồng cỏ |
| `planting_grass_area` | Diện tích trồng cỏ (m²) |
| `planting_tree` | Trồng cây |
| `number_tree` | Số cây |
| `height_fence` | Chiều cao hàng rào (m) |
| `material_type_fence_id` | Vật liệu hàng rào |
| `location_median_strip_id` | Vị trí dải phân cách |

### 4 XY RANGE (dumpSpecs · P1)

| Keys (dump) | Control | Rule |
|-------------|---------|------|
| `latFrom`/`lngFrom`/`latTo`/`lngTo` (từ `from_coordinatex/y` · `to_coordinatex/y`) | Number | dumpSpecs · **cấm** ép `"0"` · **không** promote scalar GPS · flatten **DEFER** |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-MD-01 | FE profile | grid columns ON/hide · primary `type_median_strip_id` · pagination 50/100/200/500 · filter `type=MEDIAN` only |
| T-MD-02 | FE form S-ATTR | editable dumpSpecs · labels VN 10 key · Select bool cỏ/cây · merge on save |
| T-MD-03 | FE Range | S-LOC-RANGE km* + 4 XY · cấm `"0"` |
| T-MD-04 | FE name | optional · cấm IsWeak |
| T-MD-05 | BE prefix | `DefaultCodePrefix` / create `PC-` · import align GIS `GPC` |
| T-MD-06 | BE LOOKUP | init-data `medianStripTypes[]` · `fenceMaterials[]` · `medianLocations[]` |
| T-MD-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-MD-08 | FE alias | optional `/so-ts-median` Navigate |
| T-MD-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-MD-10 | Pack | type seed · dumpSpecLabels 10 key · tile t11 summary · unit seed `ATGT` · CSV 6829 |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-01T17:20:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-MEDIAN-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-median.md` · T-MD-* |
| Dev | profile · S-ATTR · PC- · LOOKUP · Leave · Range · dumpSpecLabels |
| QA | e2e queued `/agent-qa*` only |
