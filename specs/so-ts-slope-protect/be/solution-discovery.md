# SA — Solution discovery — so-ts-slope-protect (Sổ TS — Bảo vệ mái dốc)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_6fb60810`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-slope-protect` |
| title | Sổ TS — Bảo vệ mái dốc |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `SLOPE_PROTECT` |
| cluster | `linear_protect` · ô KCHT `t12` |
| dump | `tbl_slope` |
| status | `confirmed` |
| design_confirm | approve (`task_ddb66403`) |
| solution_confirm | **approve** (autoApprove=ON · `task_6fb60810`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-slope-protect`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=SLOPE_PROTECT` · alias board `/so-ts-slope-protect` |
| mfeStdUrl | `http://localhost:9301/so-ts-slope-protect` |
| peerStdUrl | `http://localhost:9301/so-ts?type=SLOPE_PROTECT` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-slope-protect-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-slope-protect-real-data.md` |
| design | `specs/so-ts-slope-protect/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| headerFingerprintPrior | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_6fb60810` |
| priorTask | `task_ddb66403` (design completed) |
| peerPack | `so-ts-retaining` (linear_protect · **page SLOPE_PROTECT only** · cấm gộp RETAINING) |
| updatedAt | `2026-09-02T01:45:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-02) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-slope-protect` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-slope-protect`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr SLOPE_PROTECT · 4 XY + kiểu BV/phân loại/dài/cao/vị trí/địa danh trong bag | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `mai-doc` · DefaultCodePrefix live generic/`TS-` | create/import prefix **`MD-`** · GIS short **`MD`** · type seed `SLOPE_PROTECT` · dump `tbl_slope` · CSV 10547 · unit `KET_CAU` — **GAP-SLOPE-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu 5 key SLOPE_PROTECT | Label VN đủ 5 key: kiểu BV · phân loại mái dốc · dài BV/gia cố · cao TB · vị trí cắt ngang · (+ 4 XY · địa danh hide-empty) | FE labels + form write — **GAP-SLOPE-SPEC-01** |
| LOOKUP kiểu BV/phân loại/vị trí | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `protectionTypes[]` / `slopeClassifications[]` / `locationOptions[]` — **GAP-SLOPE-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: kiểu BV · 3 tầng · kmFrom/kmTo · phân loại · dài BV · cao TB · hide-empty vị trí/địa danh · ẩn type/ảnh · primary = `protection_type_id` | FE type-profile |
| Range | S-LOC-RANGE peer | km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-SLOPE-RANGE-01** | FE validation |
| Name | optional / weak risk | `name` optional · list primary ≠ name · **cấm** IsWeak → đoạn — **GAP-SLOPE-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-slope-protect` board-only · optional Navigate — **GAP-SLOPE-ROUTE-01** | FE optional |
| Flatten 4 XY / attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-SLOPE-FLAT-01** (SA chốt) | no migration SA |
| Peer | GIS `ta-luy` gộp RETAINING | page filter **SLOPE_PROTECT only** · RETAINING pack riêng · layer `mai-doc` — **GAP-SLOPE-PEER-01** | FE filter |
| Prefix collision | pavement-sections có thể dùng family `MD` | **Chốt `MD-`** cho SLOPE_PROTECT theo GIS `mai-doc` + import `tbl_slope` · IdCode unique per tenant + filter `type=SLOPE_PROTECT` · **không** đổi prefix | recorded |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `mai-doc` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `SLOPE_PROTECT` · dump `tbl_slope` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `MD` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-slope-protect.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=SLOPE_PROTECT` · alias board `/so-ts-slope-protect` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data slope lookups |
| GIS | `mai-doc` ↔ `SLOPE_PROTECT` · icon short `MD` (= IdCode prefix family) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `mai-doc` |

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

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-02T01:45:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=SLOPE_PROTECT` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=SLOPE_PROTECT`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `MD-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-slope-protect` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=SLOPE_PROTECT&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=SLOPE_PROTECT` · IdCode prefix **`MD-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** slope lookups |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t12` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · unitCode · … |
| Attr dump | `DumpSpecs` JSON text | `protection_type_id` · `slope_classification_id` · `actual_protected` · `average_height` · `location_id` · `province*`/`commune*` · `lat*`/`lng*` (4 XY đầu/cuối) |
| Flatten | **DEFER P2** | **GAP-SLOPE-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = `protection_type_id` (không bắt buộc `name`) |
| Name | optional Text · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`MD-`** (GIS short `MD`) |
| DefaultCodePrefix live | hôm nay generic/`TS-` → đổi theo type `SLOPE_PROTECT` hoặc override create — **GAP-SLOPE-PREFIX-01** |
| Pavement collision | prefix `MD-` **giữ** · GIS `mai-doc` + import `tbl_slope` SSOT · uniqueness = tenant + full IdCode · filter `type=SLOPE_PROTECT` |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `protectionTypes` | distinct `protection_type_id` | Dropdown * LOOKUP_STATIC · grid primary |
| `slopeClassifications` | distinct `slope_classification_id` | Dropdown LOOKUP_STATIC |
| `locationOptions` | distinct `location_id` / reuse `vitriOptions` | Dropdown hide-empty |

### 4 XY RANGE (dumpSpecs · P1)

| Keys (dump) | Control | Rule |
|-------------|---------|------|
| `latFrom`/`lngFrom`/`latTo`/`lngTo` (từ `from_coordinatex/y` · `to_coordinatex/y`) | Number | dumpSpecs · **cấm** ép `"0"` · **không** promote scalar GPS · flatten **DEFER** |

### dumpSpecLabels P1 (5 key tối thiểu + hide-empty)

| Key | Label VN (đề xuất) |
|-----|-------------------|
| `protection_type_id` | Kiểu bảo vệ |
| `slope_classification_id` | Phân loại mái dốc |
| `actual_protected` | Chiều dài bảo vệ, gia cố (m) |
| `average_height` | Chiều cao trung bình (m) |
| `location_id` | Vị trí cắt ngang đường |
| (+ 4 XY · province*/commune*) | theo peer linear_protect |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-MD-01 | FE profile | grid columns ON/hide · primary `protection_type_id` · pagination 50/100/200/500 · filter `type=SLOPE_PROTECT` only |
| T-MD-02 | FE form S-ATTR | editable dumpSpecs · labels VN đủ 5 key · merge on save |
| T-MD-03 | FE Range | S-LOC-RANGE km* + 4 XY · cấm `"0"` |
| T-MD-04 | FE name | optional · cấm IsWeak |
| T-MD-05 | BE prefix | `DefaultCodePrefix` / create `MD-` · import align GIS `MD` |
| T-MD-06 | BE LOOKUP | init-data `protectionTypes[]` · `slopeClassifications[]` · `locationOptions[]` |
| T-MD-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-MD-08 | FE alias | optional `/so-ts-slope-protect` Navigate |
| T-MD-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-MD-10 | Pack | type seed · dumpSpecLabels · tile t12 summary · unit seed `KET_CAU` · CSV 10547 |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-02T01:45:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-SLOPE-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-slope-protect.md` · T-MD-* |
| Dev | profile · S-ATTR · MD- · LOOKUP · Leave · Range |
| QA | e2e queued `/agent-qa*` only |
