# SA — Solution discovery — so-ts-noise-barrier (Sổ TS — Rào chắn ồn)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_f2c991b9`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-noise-barrier` |
| title | Sổ TS — Rào chắn ồn |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `NOISE_BARRIER` |
| cluster | `linear_protect` · ô KCHT `t25` |
| dump | `tbl_noise_barrier` |
| status | `confirmed` |
| design_confirm | approve (`task_b4455967`) |
| solution_confirm | **approve** (autoApprove=ON · `task_f2c991b9`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-noise-barrier`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=NOISE_BARRIER` · alias board `/so-ts-noise-barrier` |
| mfeStdUrl | `http://localhost:9301/so-ts-noise-barrier` |
| peerStdUrl | `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-noise-barrier-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-noise-barrier-real-data.md` |
| design | `specs/so-ts-noise-barrier/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprintPrior | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_f2c991b9` |
| priorTask | `task_b4455967` (design completed) |
| updatedAt | `2026-09-01T09:55:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-noise-barrier` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-noise-barrier`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr NOISE_BARRIER · 4 XY + loại tường + cao/dài trong bag | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `chong-on` · DefaultCodePrefix live `TS-` | create/import prefix **`TC-`** · GIS short **`TC`** · type seed `NOISE_BARRIER` · dump `tbl_noise_barrier` — **GAP-NB-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key tường ồn | Label VN: loại tường · cao TB · dài thực tế · vitri · địa danh · 4 XY | FE labels + form write |
| LOOKUP `type_noise_barrier_id` | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `noiseBarrierTypes[]` (COMPOSITE / Khác / Bê tông…) — **GAP-NB-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: loại tường · 3 tầng · kmFrom/kmTo · tỉnh · cao · dài · hide-empty vitri/xã · ẩn type/SL/ĐVT/ảnh · primary = loại tường | FE type-profile |
| Range | S-LOC-RANGE peer | km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-NB-RANGE-01** | FE validation |
| Name | optional / weak risk | `name` optional · list primary ≠ name · **cấm** IsWeak → đoạn — **GAP-NB-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-noise-barrier` board-only · optional Navigate — **GAP-NB-ROUTE-01** | FE optional |
| Flatten 4 XY | dumpSpecs only | **DEFER P2** Schema_* — **GAP-NB-FLAT-01** | no migration SA |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `chong-on` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `NOISE_BARRIER` · dump `tbl_noise_barrier` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `TC` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-noise-barrier.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=NOISE_BARRIER` · alias board `/so-ts-noise-barrier` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data `noiseBarrierTypes` |
| GIS | `chong-on` ↔ `NOISE_BARRIER` · icon short `TC` (= IdCode prefix family) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `chong-on` |

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

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T09:55:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=NOISE_BARRIER` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=NOISE_BARRIER`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `TC-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-noise-barrier` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=NOISE_BARRIER&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=NOISE_BARRIER` · IdCode prefix **`TC-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** `noiseBarrierTypes[]` |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t25` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · … |
| Attr dump | `DumpSpecs` JSON text | `type_noise_barrier_id` · `average_height` · `actual_length` · `vitri` · `province*`/`commune*` · `lat*`/`lng*` (4 XY đầu/cuối) |
| Flatten | **DEFER P2** | **GAP-NB-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = `type_noise_barrier_id` (không bắt buộc `name`) |
| Name | optional Text · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`TC-`** (GIS short `TC`) |
| DefaultCodePrefix live | hôm nay generic → đổi theo type `NOISE_BARRIER` hoặc override create — **GAP-NB-PREFIX-01** |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `noiseBarrierTypes` | distinct `type_noise_barrier_id` (COMPOSITE / Khác / Bê tông…) | Dropdown * LOOKUP_STATIC |

### 4 XY RANGE (dumpSpecs · P1)

| Keys (dump) | Control | Rule |
|-------------|---------|------|
| lat/lng đầu + lat/lng cuối (đúng key real-data) | Number | dumpSpecs · **cấm** ép `"0"` · **không** promote scalar GPS · flatten **DEFER** |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-NB-01 | FE profile | grid columns ON/hide · primary loại tường · pagination 50/100/200/500 |
| T-NB-02 | FE form S-ATTR | editable dumpSpecs · labels VN · merge on save |
| T-NB-03 | FE Range | S-LOC-RANGE km* + 4 XY · cấm `"0"` |
| T-NB-04 | FE name | optional · cấm IsWeak |
| T-NB-05 | BE prefix | `DefaultCodePrefix` / create `TC-` · import align |
| T-NB-06 | BE LOOKUP | init-data `noiseBarrierTypes[]` |
| T-NB-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-NB-08 | FE alias | optional `/so-ts-noise-barrier` Navigate |
| T-NB-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-NB-10 | Pack | type seed · dumpSpecLabels · tile t25 summary |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-01T09:55:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-NB-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-noise-barrier.md` · T-NB-* |
| Dev | profile · S-ATTR · TC- · LOOKUP · Leave · Range |
| QA | e2e queued `/agent-qa*` only |
