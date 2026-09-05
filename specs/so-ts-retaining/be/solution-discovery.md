# SA — Solution discovery — so-ts-retaining (Sổ TS — Kè / tường chắn)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_d63d88eb`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-retaining` |
| title | Sổ TS — Kè / tường chắn |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `RETAINING` |
| cluster | `linear_protect` · ô KCHT `t20` |
| dump | `tbl_retaining_wall` |
| status | `confirmed` |
| design_confirm | approve (`task_476f6ddd`) |
| solution_confirm | **approve** (autoApprove=ON · `task_d63d88eb`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-retaining`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RETAINING` · alias board `/so-ts-retaining` |
| mfeStdUrl | `http://localhost:9301/so-ts-retaining` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RETAINING` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-retaining-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-retaining-real-data.md` |
| design | `specs/so-ts-retaining/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| headerFingerprintPrior | `sha256:a547b71c8847f3079bd462364e95279a8388e5c6de64aaf1b403d77f1e011707` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_d63d88eb` |
| priorTask | `task_476f6ddd` (design completed) |
| peerPack | `so-ts` linear_protect · **page RETAINING only** · SLOPE_PROTECT pack riêng |
| updatedAt | `2026-09-02T01:00:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-02) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-retaining` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-retaining`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr RETAINING · 4 XY + loại tường/VL/dài/cao/số đoạn/móng/vị trí/asset_type/địa danh trong bag | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `tuong-chan` · DefaultCodePrefix live generic/`TS-` | create/import prefix **`KE-`** · GIS short **`KE`** · type seed `RETAINING` · dump `tbl_retaining_wall` · CSV 9660 · unit `KET_CAU` — **GAP-RETAINING-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu 7/8 key RETAINING | Label VN đủ 8 key: loại tường · VL · dài · cao TB · số đoạn · móng · (+ vị trí/asset_type hide-empty) · 4 XY · địa danh | FE labels + form write — **GAP-RETAINING-SPEC-01** |
| LOOKUP loại/VL/móng/vị trí/asset_type | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `retainingWallTypes[]` / `materialTypes[]` / `foundationTypes[]` / `locationOptions[]` / `dumpAssetTypes[]` — **GAP-RETAINING-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: loại tường · 3 tầng · kmFrom/kmTo · VL · dài · cao TB · số đoạn · móng · hide-empty vị trí/asset_type/địa danh · ẩn type/ảnh · primary = `retaining_wall_type_id` | FE type-profile |
| Range | S-LOC-RANGE peer | km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-RETAINING-RANGE-01** | FE validation |
| Name | optional / weak risk | `name` optional · list primary ≠ name · **cấm** IsWeak → đoạn — **GAP-RETAINING-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-retaining` board-only · optional Navigate — **GAP-RETAINING-ROUTE-01** | FE optional |
| Flatten 4 XY / attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-RETAINING-FLAT-01** (SA chốt) | no migration SA |
| Peer | GIS `tuong-chan` · cluster có SLOPE_PROTECT | page filter **RETAINING only** · SLOPE_PROTECT pack riêng — **GAP-RETAINING-PEER-01** | FE filter |
| dump `asset_type` | có thể nhầm entity type | dump field hide-empty · **≠** scalar `type` — **GAP-RETAINING-ASSETTYPE-01** | FE/BE clarify |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `tuong-chan` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `RETAINING` · dump `tbl_retaining_wall` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `KE` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-retaining.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=RETAINING` · alias board `/so-ts-retaining` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data retaining lookups |
| GIS | `tuong-chan` ↔ `RETAINING` · icon short `KE` (= IdCode prefix family) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `tuong-chan` |

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

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-02T01:00:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=RETAINING` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=RETAINING`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `KE-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-retaining` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=RETAINING&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=RETAINING` · IdCode prefix **`KE-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** retaining lookups |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t20` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · unitCode · … |
| Attr dump | `DumpSpecs` JSON text | `retaining_wall_type_id` · `material_type_id` · `actual_protected` · `average_height` · `number` · `foundation_type_id` · `location_id` · `asset_type` · `province*`/`commune*` · `lat*`/`lng*` (4 XY đầu/cuối) |
| Flatten | **DEFER P2** | **GAP-RETAINING-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = `retaining_wall_type_id` (không bắt buộc `name`) |
| Name | optional Text · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`KE-`** (GIS short `KE`) |
| DefaultCodePrefix live | hôm nay generic → đổi theo type `RETAINING` hoặc override create — **GAP-RETAINING-PREFIX-01** |
| dump `asset_type` | hide-empty Dropdown · **≠** entity `type` scalar — **GAP-RETAINING-ASSETTYPE-01** |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `retainingWallTypes` | distinct `retaining_wall_type_id` | Dropdown * LOOKUP_STATIC · grid primary |
| `materialTypes` | distinct `material_type_id` | Dropdown LOOKUP_STATIC |
| `foundationTypes` | distinct `foundation_type_id` | Dropdown LOOKUP_STATIC |
| `locationOptions` | distinct `location_id` / reuse vitri | Dropdown hide-empty |
| `dumpAssetTypes` | distinct dump `asset_type` | Dropdown hide-empty · **≠** Integration asset-types |

### 4 XY RANGE (dumpSpecs · P1)

| Keys (dump) | Control | Rule |
|-------------|---------|------|
| `latFrom`/`lngFrom`/`latTo`/`lngTo` (từ `from_coordinatex/y` · `to_coordinatex/y`) | Number | dumpSpecs · **cấm** ép `"0"` · **không** promote scalar GPS · flatten **DEFER** |

### dumpSpecLabels P1 (8 key tối thiểu + hide-empty)

| Key | Label VN (đề xuất) |
|-----|-------------------|
| `retaining_wall_type_id` | Loại tường chắn |
| `material_type_id` | Loại vật liệu |
| `actual_protected` | Chiều dài (m) |
| `average_height` | Chiều cao TB (m) |
| `number` | Số phân đoạn |
| `foundation_type_id` | Loại móng |
| `location_id` | Vị trí mặt cắt |
| `asset_type` | Loại TS (dump) |
| (+ 4 XY · province*/commune*) | theo peer linear_protect |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-KE-01 | FE profile | grid columns ON/hide · primary `retaining_wall_type_id` · pagination 50/100/200/500 · filter `type=RETAINING` only |
| T-KE-02 | FE form S-ATTR | editable dumpSpecs · labels VN đủ 8 key · merge on save |
| T-KE-03 | FE Range | S-LOC-RANGE km* + 4 XY · cấm `"0"` |
| T-KE-04 | FE name | optional · cấm IsWeak |
| T-KE-05 | BE prefix | `DefaultCodePrefix` / create `KE-` · import align GIS `KE` |
| T-KE-06 | BE LOOKUP | init-data `retainingWallTypes[]` · `materialTypes[]` · `foundationTypes[]` · `locationOptions[]` · `dumpAssetTypes[]` |
| T-KE-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-KE-08 | FE alias | optional `/so-ts-retaining` Navigate |
| T-KE-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-KE-10 | Pack | type seed · dumpSpecLabels · tile t20 summary · unit seed `KET_CAU` · CSV 9660 |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-02T01:00:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-RETAINING-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-retaining.md` · T-KE-* |
| Dev | profile · S-ATTR · KE- · LOOKUP · Leave · Range |
| QA | e2e queued `/agent-qa*` only |
