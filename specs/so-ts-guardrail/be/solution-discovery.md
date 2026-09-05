# SA — Solution discovery — so-ts-guardrail (Sổ TS — Hộ lan / tôn sóng)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_4fe4e6c8`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-guardrail` |
| title | Sổ TS — Hộ lan / tôn sóng |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `GUARDRAIL` |
| cluster | `linear_protect` · ô KCHT `t17` |
| dump | `tbl_guardrail` |
| status | `confirmed` |
| design_confirm | approve (`task_fc833be2`) |
| solution_confirm | **approve** (autoApprove=ON · `task_4fe4e6c8`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-guardrail`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=GUARDRAIL` · alias board `/so-ts-guardrail` |
| mfeStdUrl | `http://localhost:9301/so-ts-guardrail` |
| peerStdUrl | `http://localhost:9301/so-ts?type=GUARDRAIL` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-guardrail-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-guardrail-real-data.md` |
| design | `specs/so-ts-guardrail/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8` |
| headerFingerprintPrior | `sha256:0b2e8af0ce459112fb3201d0f7a3f58f90a6d5cf139dd50f3d2570b709fd9e75` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_4fe4e6c8` |
| priorTask | `task_fc833be2` (design completed) |
| peerPack | `so-ts-noise-barrier` (linear_protect · **page GUARDRAIL only** · cấm gộp) |
| updatedAt | `2026-09-01T16:30:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-guardrail` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-guardrail`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr GUARDRAIL · 4 XY + loại/VL/phản quang/mục đích/dài/vitri/địa danh trong bag | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `ho-lan` · DefaultCodePrefix live generic/`TS-` | create/import prefix **`HL-`** · GIS short **`HL`** · type seed `GUARDRAIL` · dump `tbl_guardrail` — **GAP-GUARDRAIL-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key hộ lan | Label VN: loại hộ lan · VL · SL phản quang · mục đích · dài · vitri · địa danh · 4 XY | FE labels + form write |
| LOOKUP loại/VL/mục đích | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `guardrailTypes[]` / `guardrailMaterials[]` / `installationPurposes[]` (+ `vitriOptions`) — **GAP-GUARDRAIL-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump · merge `dumpSpecs` on save · `reflective`=Number | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: loại hộ lan · 3 tầng · kmFrom/kmTo · VL · phản quang · mục đích · dài · hide-empty vitri/địa danh · ẩn type/ảnh · primary = `type_guardrail` | FE type-profile |
| Range | S-LOC-RANGE peer | km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-GUARDRAIL-RANGE-01** | FE validation |
| Name | optional / weak risk | `name` optional · list primary ≠ name · **cấm** IsWeak → đoạn — **GAP-GUARDRAIL-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-guardrail` board-only · optional Navigate — **GAP-GUARDRAIL-ROUTE-01** | FE optional |
| Flatten 4 XY / attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-GUARDRAIL-FLAT-01** (SA chốt) | no migration SA |
| Peer | GIS `ho-lan` + `NOISE_BARRIER` cùng cluster | page filter **GUARDRAIL only** · NOISE_BARRIER pack riêng — **GAP-GUARDRAIL-PEER-01** | FE filter |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `ho-lan` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `GUARDRAIL` · dump `tbl_guardrail` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `HL` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-guardrail.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=GUARDRAIL` · alias board `/so-ts-guardrail` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data guardrail lookups |
| GIS | `ho-lan` ↔ `GUARDRAIL` · icon short `HL` (= IdCode prefix family) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `ho-lan` |

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

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T16:30:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=GUARDRAIL` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=GUARDRAIL`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `HL-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-guardrail` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=GUARDRAIL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=GUARDRAIL` · IdCode prefix **`HL-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** guardrail lookups |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t17` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · kmTo · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · unitCode · … |
| Attr dump | `DumpSpecs` JSON text | `type_guardrail` · `material_id` · `reflective` · `installation_purpose_id` · `actual_length` · `installed_location_id` · `province*`/`commune*` · `lat*`/`lng*` (4 XY đầu/cuối) |
| Flatten | **DEFER P2** | **GAP-GUARDRAIL-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = `type_guardrail` (không bắt buộc `name`) |
| Name | optional Text · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`HL-`** (GIS short `HL`) |
| DefaultCodePrefix live | hôm nay generic → đổi theo type `GUARDRAIL` hoặc override create — **GAP-GUARDRAIL-PREFIX-01** |
| reflective | **Number** (SL) — **GAP-GUARDRAIL-REFLECT-01** · **cấm** boolean Select |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `guardrailTypes` | distinct `type_guardrail` | Dropdown * LOOKUP_STATIC |
| `guardrailMaterials` | distinct `material_id` | Dropdown LOOKUP_STATIC |
| `installationPurposes` | distinct `installation_purpose_id` | Dropdown LOOKUP_STATIC · **dumpSpecLabels** key bắt buộc |
| `vitriOptions` | init-data live (reuse) | Dropdown hide-empty · `installed_location_id` |

### 4 XY RANGE (dumpSpecs · P1)

| Keys (dump) | Control | Rule |
|-------------|---------|------|
| `latFrom`/`lngFrom`/`latTo`/`lngTo` (từ `from_coordinatex/y` · `to_coordinatex/y`) | Number | dumpSpecs · **cấm** ép `"0"` · **không** promote scalar GPS · flatten **DEFER** |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-GR-01 | FE profile | grid columns ON/hide · primary `type_guardrail` · pagination 50/100/200/500 · filter `type=GUARDRAIL` only |
| T-GR-02 | FE form S-ATTR | editable dumpSpecs · labels VN (gồm `installation_purpose_id`) · merge on save · reflective Number |
| T-GR-03 | FE Range | S-LOC-RANGE km* + 4 XY · cấm `"0"` |
| T-GR-04 | FE name | optional · cấm IsWeak |
| T-GR-05 | BE prefix | `DefaultCodePrefix` / create `HL-` · import align GIS `HL` |
| T-GR-06 | BE LOOKUP | init-data `guardrailTypes[]` · `guardrailMaterials[]` · `installationPurposes[]` |
| T-GR-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-GR-08 | FE alias | optional `/so-ts-guardrail` Navigate |
| T-GR-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-GR-10 | Pack | type seed · dumpSpecLabels · tile t17 summary · unit seed `ATGT` |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-01T16:30:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-GUARDRAIL-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-guardrail.md` · T-GR-* |
| Dev | profile · S-ATTR · HL- · LOOKUP · Leave · Range |
| QA | e2e queued `/agent-qa*` only |
