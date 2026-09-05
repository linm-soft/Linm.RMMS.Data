# SA — Solution discovery — so-ts-bus-stop (Sổ TS — Điểm dừng xe buýt)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_75165bee`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
| title | Sổ TS — Điểm dừng xe buýt |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `BUS_STOP` |
| cluster | `stop` · ô KCHT `t13` |
| dump | `tbl_bus_stops` |
| status | `confirmed` |
| design_confirm | approve (`task_fd756851`) |
| solution_confirm | **approve** (autoApprove=ON · `task_75165bee`) |
| domain_map | **Asset** (`so-ts-bus-stop` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=BUS_STOP` · alias board `/so-ts-bus-stop` |
| mfeStdUrl | `http://localhost:9301/so-ts-bus-stop` |
| peerStdUrl | `http://localhost:9301/so-ts?type=BUS_STOP` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-bus-stop-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-bus-stop-real-data.md` |
| design | `specs/so-ts-bus-stop/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprintPrior | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_75165bee` |
| priorTask | `task_fd756851` (design completed) |
| updatedAt | `2026-09-01T08:05:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-bus-stop` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-bus-stop`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr BUS_STOP · mirror `station_name`→`name` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` / `IsWeakAssetName` · prefix GIS `DX` · DefaultCodePrefix **`TS-`** | `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn · create/import prefix **`DX-`** — **GAP-DD-NAME-01** · **GAP-DD-PREFIX-01** | guard rebuild + `DefaultCodePrefix` |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu attr keys · label gaps management/pavement/shelter/escape | Label VN đủ header dump · form Input/Select merge keys — **GAP-DD-SPEC-01** | FE labels + form write |
| LOOKUP type_work / management / pavement / shelter / vitri / bool | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `busStopWorkTypes[]` · `busStopManagementUnits[]` · `busStopPavementTypes[]` · `busStopShelterStructures[]` · `busStopCrossSections[]` · bool Có/Không (dump distinct / seed) — **GAP-DD-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text đủ dump · merge vào `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show `type_work_id` · `management_id` · boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=BUS_STOP` · `kmFrom` **không** required · **cấm** ép `"0"` · S-LOC-POINT only | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-bus-stop` board-only · optional Navigate — **GAP-DD-ROUTE-01** | FE optional |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `diem-bus` cite only).

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · list `AssetListPage` · form `AssetFormPage` · **cấm** fork 32 file |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Asset** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controller | `RoadAssetsController` · `[Route("api/v1/asset/road-assets")]` |
| Service | `RoadAssetService` / `IRoadAssetService` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/RoadAssetDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/RoadAssetEntity.cs` · table `rmms_road_assets` |
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `BUS_STOP` · dump `tbl_bus_stops` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `station_name` · Prefix `DX` · `IsWeakAssetName` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-bus-stop.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=BUS_STOP` · alias board `/so-ts-bus-stop` (optional redirect) |
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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `diem-bus` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinPageLayout · LinErpListFilterBar · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogUiSchemaEditorModal · LinCatalogHistoryModal · LeaveConfirmModal · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ |
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | tenant-only · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T08:05:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=BUS_STOP` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=BUS_STOP`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `DX-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-bus-stop` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=BUS_STOP&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=BUS_STOP` · IdCode prefix **`DX-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** BUS_STOP LOOKUP arrays |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t13` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · … |
| Attr dump | `DumpSpecs` JSON text | station_name · type_work_id · management_id · stop_bay · pavement* · length/width_* · seated_waiting_bus · bus_shelter · structure_* · material_* · vitri · escape_route_* · max_slope · tinh/xa |
| Flatten | **DEFER P2** | **GAP-DD-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary name | `name` ← dump `station_name` · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`DX-`** (align GIS import) |
| DefaultCodePrefix live | hôm nay `TS-` → đổi theo type `BUS_STOP` hoặc override create — **GAP-DD-PREFIX-01** |

### LOOKUP init-data delta (P1)

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `busStopWorkTypes` | distinct `type_work_id` | Dropdown * |
| `busStopManagementUnits` | distinct `management_id` | Dropdown |
| `busStopPavementTypes` | distinct `pavement_type_bus_stop_bay_id` | Dropdown |
| `busStopShelterStructures` | distinct `structure_bus_shelter_id` (+ material_road_refuge nếu cùng enum) | Dropdown |
| `busStopCrossSections` | `vitri` L/R/C | Dropdown |
| bool labels | Có / Không | stop_bay · seated_waiting_bus · bus_shelter |

**Cấm** hardcode FE không cite seed/init.

---

## 3. FormMode ↔ field bind (slim)

| Zone | Fields | controlHint | write |
|------|--------|-------------|-------|
| S-META | code · status · source · type(lock BUS_STOP) | Text ro / Dropdown / SearchInput | scalar |
| S-ROUTE | route · routeNamed · routeSegment | SearchInput road-route | scalar |
| S-LOC-POINT | kmFrom · vitri (optional) · **ẩn kmTo** | Text · Dropdown | scalar / dumpSpecs |
| S-NAME | name (`station_name`) | Text | scalar + dumpSpecs mirror |
| S-ATTR | type_work · management · bay/ghế/nhà chờ · pavement · length/width bay · shelter struct · refuge · escape_* · max_slope | Dropdown/Number/Text | dumpSpecs merge |
| S-GPS | lat · lng | Number | scalar |

Grid: boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri · ẩn type/kmTo/SL/ĐVT.

---

## 4. Tasks (ids → TL pack)

| ID | Owner | Summary |
|----|-------|---------|
| T-DD-01 | Dev FE | Type profile `BUS_STOP` grid columns + hide-empty rules |
| T-DD-02 | Dev FE | S-ATTR editable + dumpSpecLabels VN (GAP-DD-SPEC-01) |
| T-DD-03 | Dev FE | Point: hide kmTo · kmFrom optional · no `"0"` coerce |
| T-DD-04 | Dev FE | name ← station_name · cấm IsWeak→đoạn (GAP-DD-NAME-01) |
| T-DD-05 | Dev BE | DefaultCodePrefix / IdCode create `DX-` (GAP-DD-PREFIX-01) |
| T-DD-06 | Dev BE | init-data LOOKUP arrays BUS_STOP (GAP-DD-LOOKUP-01) |
| T-DD-07 | Dev FE | LeaveConfirmModal · useAlert · cấm native confirm |
| T-DD-08 | Dev FE | Alias board `/so-ts-bus-stop` optional (GAP-DD-ROUTE-01) |
| T-DD-09 | Docs | Optional DOMAIN-MAP row `so-ts-bus-stop`→Asset |
| T-DD-10 | TL | Task pack + acceptance · Dev `/agent-dev` |

**Migration:** none ở SA · flatten **DEFER**.

---

## 5. Quality / cấm

- **Cấm** ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · demo/localStorage SSOT  
- **Cấm** yarn build/e2e/start:std · Step 4b/migration ở role SA  
- BFF = proxy only · dumpSpecs P1 · no Schema_*  
- E2E: queued `/agent-qa*` only  

---

## 6. Handoff

| Role | Need |
|------|------|
| **TL** | task/so-ts-bus-stop.md · T-DD-* · gates recorded |
| Dev | profile · S-ATTR · labels · prefix DX- · init LOOKUP · LeaveConfirm · alias |
| QA | e2e queued · filter `?type=BUS_STOP` · CRUD live · leave-confirm |

## Version meta

| | |
|--|--|
| skillId | `agent-sa` |
| skillVersion | `2026.08.24.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprintPrior | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| status | `confirmed` |
| solution_confirm | `approve` |
| writtenAt | `2026-09-01T08:05:00.000Z` |
