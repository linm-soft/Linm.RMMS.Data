# SA — Solution discovery — so-ts-lighting (Sổ TS — Chiếu sáng đường)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_38f62562`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-lighting` |
| title | Sổ TS — Chiếu sáng đường |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F + **full-page** form 5 cột) |
| typeCode | `LIGHTING` |
| cluster | `ops` · ô KCHT `t18` |
| dump | `tbl_street_lighting` |
| status | `confirmed` |
| design_confirm | approve (`task_9224ca23`) |
| solution_confirm | **approve** (autoApprove=ON · `task_38f62562`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-lighting`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=LIGHTING` · alias board `/so-ts-lighting` |
| mfeStdUrl | `http://localhost:9301/so-ts-lighting` |
| peerStdUrl | `http://localhost:9301/so-ts?type=LIGHTING` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-lighting-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-lighting-real-data.md` |
| design | `specs/so-ts-lighting/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| headerFingerprintPrior | `sha256:ca587f46bfa8c91bf0f8d30de24bd8e8db206285936ebdfa3ccc7cc43a303316` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_38f62562` |
| priorTask | `task_9224ca23` (design completed) |
| importCount | **4871** rows `type=LIGHTING` · prefix `CS-` |
| updatedAt | `2026-09-02T03:30:00.000Z` |
| versionGate | `rechecked` (stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-lighting` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-lighting`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr LIGHTING §4 | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `chieu-sang` · DefaultCodePrefix live generic/`TS-` | create/import prefix **`CS-`** · GIS short **`CS`** · type seed `LIGHTING` · dump `tbl_street_lighting` — **GAP-LT-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key chiếu sáng | Label VN: management · số cột/đèn · loại bóng · loại MBA · công suất · tủ điều khiển · phương thức · vitri | FE labels + form write |
| LOOKUP management/bulb/MBA/control/vitri | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta từ dump distinct — **GAP-LT-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump §4 · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: ĐV QL · 3 tầng · kmFrom · số cột/đèn · MBA · tủ · vitri · hide-empty số khi 0/null · ẩn type/kmTo/SL/ĐVT · **cấm** Solar*/LampWatt | FE type-profile |
| Point | S-LOC-POINT peer | `kmFrom` only · **ẩn** `kmTo` form/grid · **cấm** ép `"0"` · scalar lat/lng S-GPS | FE validation |
| Name | optional / weak = route import | `name` = mô tả hệ thống · trống OK · **cấm** IsWeak → route — **GAP-LT-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-LT-LEAVE-01** | FE only |
| Alias board | live filter only | `/so-ts-lighting` board-only · optional Navigate — **GAP-LT-ROUTE-01** | FE optional |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-LT-FLAT-01** (SA chốt) | no migration SA |
| KCHT solar cols | template AK32 có Solar*/LampWatt | **OUT of scope** dump §4 only — **GAP-AK32-07** | exclude form/grid |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `chieu-sang` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `LIGHTING` · dump `tbl_street_lighting` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `CS` · **cấm** IsWeak ép route |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-lighting.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` §4 |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=LIGHTING` · alias board `/so-ts-lighting` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data lighting lookups |
| GIS | `chieu-sang` ↔ `LIGHTING` · icon short `CS` (= IdCode prefix family) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `chieu-sang` |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab legacy |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | tenant-only · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-02T03:30:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F | list | API-01 list `?type=LIGHTING` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=LIGHTING`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `CS-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-lighting` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=LIGHTING&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=LIGHTING` · IdCode prefix **`CS-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** lighting lookups |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t18` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · … |
| Attr dump | `DumpSpecs` JSON text | `management_id` · `number_pole_light_bulb` · `number_light` · `bulb_type_id` · `type_transforming_station_id` · `capacity_transformer` · `number_control_box` · `control_method_id` · `vitri` · tinh/xã (nếu có) |
| Flatten | **DEFER P2** | **GAP-LT-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = route/ĐV QL composite (không bắt buộc `name`) |
| Name | optional Text · mô tả hệ thống · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `route` / đoạn |
| IdCode create/import | prefix **`CS-`** (GIS short `CS`) |
| DefaultCodePrefix live | hôm nay generic `TS-` → đổi theo type `LIGHTING` hoặc override create — **GAP-LT-PREFIX-01** |
| Solar*/LampWatt | **OUT of scope** — **GAP-AK32-07** · **cấm** form/grid cols |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `lightingManagementUnits` | distinct `management_id` | Dropdown LOOKUP_STATIC · grid ON |
| `bulbTypes` | distinct `bulb_type_id` | Dropdown LOOKUP_STATIC |
| `transformingStationTypes` | distinct `type_transforming_station_id` | Dropdown LOOKUP_STATIC |
| `controlMethods` | distinct `control_method_id` | Dropdown LOOKUP_STATIC |
| `vitriOptions` | init-data live (reuse) hoặc distinct `vitri` | Dropdown L/R/C · hide-empty OK |

### S-LOC-POINT (P1)

| Keys | Control | Rule |
|------|---------|------|
| `kmFrom` | Text | scalar · **không** required · **cấm** ép `"0"` |
| `kmTo` | — | **ẩn** form/grid LIGHTING |
| `lat`/`lng` | Number | scalar S-GPS · không promote dump XY |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-LT-01 | FE profile | grid columns ON/hide · hide-empty số cột · pagination 50/100/200/500 · filter `type=LIGHTING` only |
| T-LT-02 | FE form S-ATTR | editable dumpSpecs · labels VN (management · bulb · MBA · control · vitri) · merge on save |
| T-LT-03 | FE Point | S-LOC-POINT kmFrom only · ẩn kmTo · cấm `"0"` |
| T-LT-04 | FE name | optional · cấm IsWeak |
| T-LT-05 | BE prefix | `DefaultCodePrefix` / create `CS-` · import align GIS `CS` |
| T-LT-06 | BE LOOKUP | init-data `lightingManagementUnits[]` · `bulbTypes[]` · `transformingStationTypes[]` · `controlMethods[]` |
| T-LT-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-LT-08 | FE alias | optional `/so-ts-lighting` Navigate |
| T-LT-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-LT-10 | Pack | type seed · dumpSpecLabels · tile t18 summary · exclude Solar*/LampWatt |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-02T03:30:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-LT-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-lighting.md` · T-LT-* |
| Dev | profile · S-ATTR · CS- · LOOKUP · Leave · Point |
| QA | e2e queued `/agent-qa*` only |
