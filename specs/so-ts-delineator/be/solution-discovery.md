# SA — Solution discovery — so-ts-delineator (Sổ TS — Cọc tiêu / cọc H)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_4c731147`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-delineator` |
| title | Sổ TS — Cọc tiêu / cọc H |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `DELINEATOR` |
| cluster | `atgt_point` · ô KCHT `t14` |
| dump | `tbl_guide_post` · CSV **37303** |
| status | `confirmed` |
| design_confirm | approve (`task_7fb62df7`) |
| solution_confirm | **approve** (autoApprove=ON · `task_4c731147`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-delineator`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=DELINEATOR` · alias board `/so-ts-delineator` (optional Navigate) |
| mfeStdUrl | `http://localhost:9301/so-ts-delineator` |
| peerStdUrl | `http://localhost:9301/so-ts?type=DELINEATOR` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-delineator-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-delineator-real-data.md` |
| design | `specs/so-ts-delineator/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprintPrior | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_4c731147` |
| priorTask | `task_7fb62df7` (design completed) |
| updatedAt | `2026-09-01T14:45:06.792Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live) | New (Design+analy+PO chốt) | Action |
|------|----------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-delineator` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-delineator`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attrs tiêu/H · **không** Schema_* | **no Schema_*** flatten P1 |
| Import / dump | `tbl_guide_post` · CSV 37303 · GIS `coc-tieu` | Giữ đủ dump keys §B · 2 nhóm tiêu/H | import + labels |
| Name | risk = đoạn tuyến | `name` = loại+km else code/vidagis · **cấm** `name_of_route_asset` — **GAP-DELIM-NAME-01** | form + import |
| Quantity | default `1` risk | `quantity` ← `total_number_within_section` · fallback `h_total_number_within_section` — **GAP-DELIM-QTY-01** | import + form |
| dumpSpecs attrs | S-ATTR `<dl>` / groupDumpSpecs readonly | Editable 2 nhóm tiêu + H · merge dumpSpecs — **GAP-DELIM-SPEC-01** | FE + dumpSpecs merge |
| post type / materials | text dumpSpecs | Dropdown LOOKUP_STATIC · init-data `postTypes[]` / `guidePostMaterials[]` / `hGuidePostMaterials[]` — **GAP-DELIM-TYPE-01** | delta init-data |
| Grid profile | 1 schema mọi type | Hide `type`/`kmTo` · show 2 bộ tiêu/H + SL · primary name | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc | **Ẩn** + không required · **cấm** ép km `"0"` — **GAP-DELIM-POINT-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-DELIM-LEAVE-01** | FE only |
| Alias board | live filter only | `/so-ts-delineator` board-only · optional Navigate — **GAP-DELIM-ROUTE-01** | FE optional |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-DELIM-FLAT-01** | no migration SA |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `coc-tieu` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `DELINEATOR` · dump `tbl_guide_post` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `ResolveTypeAssetName(DELINEATOR)` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` · `groupDumpSpecs` (2 nhóm) |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-delineator.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=DELINEATOR` · alias board `/so-ts-delineator` (optional redirect) |
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
| Out of pack | flatten DB columns · post-type/materials master SearchInput · Excel wizard · Kind F map · invent History API |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR(**2 nhóm**) · S-GPS | **cấm** fork `AssetFormPage` · **cấm** gộp 1 khối DxRxC tiêu+H |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | `/review-timezone-implement` | Parent API optional `fromDate`/`toDate` — **không** mount trên pack DELINEATOR |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T14:45:06.792Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=DELINEATOR` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=DELINEATOR`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| post type / materials | Dropdown LOOKUP_STATIC | form S-ATTR · grid label | API-06 init-data delta |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=DELINEATOR` + filters | — | page=1 on filter change · profile cột DELINEATOR |
| create | empty · type lock `DELINEATOR` · init-data | POST body + dumpSpecs merge | IdCode BE · **không** required `kmTo` · qty từ total_number |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `DELINEATOR` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `DELINEATOR` deep-link |
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
| List grid | name · route* · kmFrom · h_post_type · installed_location · 2 nhóm tiêu/H · quantity · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột · S-ATTR **2 nhóm** |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `DELINEATOR` |
| route | SearchInput `road-route` | `?route=` / body `route` |
| routeNamed | SearchInput `road-route` | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid DELINEATOR |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode |
| name | Text | body `name` ← loại+km else code/vidagis · **≠** đoạn |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| quantity | Number | body `quantity` ← `total_number_within_section` · fallback `h_total_*` |
| h_post_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · init-data `postTypes` · **≠** `guide_post_type_id` |
| installed_location_id | Dropdown/Text | **dumpSpecs** · LOOKUP_STATIC / text |
| guide_post_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · nhóm tiêu · init-data `guidePostMaterials` |
| length / width / height | Number | **dumpSpecs** · nhóm tiêu DxRxC |
| average_installation_interval | Number | **dumpSpecs** · KC LĐ TB tiêu |
| total_number_within_section | Number | **dumpSpecs** + drives `quantity` |
| h_guide_post_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · nhóm H · init-data `hGuidePostMaterials` |
| h_length / h_width / h_height | Number | **dumpSpecs** · nhóm H DxRxC |
| h_average_installation_interval | Number | **dumpSpecs** · KC LĐ TB H |
| h_total_number_within_section | Number | **dumpSpecs** · fallback `quantity` |
| lat / lng | Number | body `lat`/`lng` |
| qr / valueVnd / note / unitCode | Text / Money / TextArea / Dropdown | scalars |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **loại+km / code / vidagis** |
| type | Type | `type` = `DELINEATOR` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` |
| kmTo | KmTo | `km_to` (null OK · form ẩn) |
| status | Status | `status` |
| source | Source | `source` |
| quantity | Quantity | `quantity` ← total_number tiêu · fallback h_total |
| lat / lng | Lat / Lng | `lat` / `lng` |
| qr | Qr | `qr` |
| valueVnd | ValueVnd | `value_vnd` |
| unitCode | UnitCode | `unit_code` |
| note | Note | `note` |
| h_post_type_id | via DumpSpecs | `dumpSpecs.h_post_type_id` |
| installed_location_id | via DumpSpecs | `dumpSpecs.installed_location_id` |
| guide_post_type_id | via DumpSpecs | `dumpSpecs.guide_post_type_id` |
| length / width / height | via DumpSpecs | `dumpSpecs.length|width|height` |
| average_installation_interval | via DumpSpecs | `dumpSpecs.average_installation_interval` |
| total_number_within_section | via DumpSpecs | `dumpSpecs.total_number_within_section` |
| h_guide_post_type_id | via DumpSpecs | `dumpSpecs.h_guide_post_type_id` |
| h_length / h_width / h_height | via DumpSpecs | `dumpSpecs.h_length|h_width|h_height` |
| h_average_installation_interval | via DumpSpecs | `dumpSpecs.h_average_installation_interval` |
| h_total_number_within_section | via DumpSpecs | `dumpSpecs.h_total_number_within_section` |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `GuidePostJson` / gộp tiêu+H thành 1 key.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten dumpSpecs keys | **DEFER P2** — **GAP-DELIM-FLAT-01** · **không** Schema_* this turn (PO/Design: dumpSpecs P1 · flatten=SA → SA chốt **defer**) |
| dumpSpecs write | Form S-ATTR **2 nhóm** merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `postTypes[]` · `guidePostMaterials[]` · `hGuidePostMaterials[]` trên init-data · UI schema type-profile DELINEATOR |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name** ≠ đoạn · **quantity** ← total_number · giữ 2 nhóm keys trong dumpSpecs · km trống khi null |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |

### Import name / quantity (GAP-DELIM-NAME-01 · GAP-DELIM-QTY-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `ResolveTypeAssetName(DELINEATOR)` | **MUST** ưu tiên loại+km (h_post_type + km) · else code/vidagis · **cấm** `name_of_route_asset` |
| `IsWeakAssetName` | **Cấm** fallback đoạn tuyến cho DELINEATOR |
| `RoadAssetCatalogHandler` | `quantity` ← `total_number_within_section` · fallback `h_total_number_within_section` · **cấm** default `1` khi dump có total |
| Form | S-NAME bind `name` · S-ATTR sync total → `quantity` |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type DELINEATOR |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys (2 nhóm) |
| Context | `docs/context/features/so-ts-delineator.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=DELINEATOR&…`

### API-02: GET `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Detail · View/Edit/Copy load |
| Permission | `asset.road-assets.read` |
| Tenant | XCO get_only · 403 ngoài AllowedCompanyIds |
| Request | path `id` Guid |
| Response | `RoadAssetDto` |
| Errors | 404 → list · 403 |
| Form surfaces | view · edit · copy |
| Field map | full § Field map · parse dumpSpecs → S-ATTR 2 nhóm |
| gates.tz | n/a |
| gates.xco | **yes** |
| gates.shared | inherit |

BFF: `GET web-bff/api/v1/asset/road-assets/{id}`

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create · type `DELINEATOR` · IdCode BE |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. 2 nhóm tiêu/H |
| Response | `RoadAssetDto` |
| Errors | 422 required name · type · status · route · kmFrom |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo` · `quantity` sync total_number |
| Migration | none |
| gates | inherit |

### API-04: PUT `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Update scalars + replace dumpSpecs merge |
| Permission | `asset.road-assets.update` |
| Request | `UpdateRoadAssetRequest` |
| Response | `RoadAssetDto` |
| Form surfaces | edit |
| Field map | same · **cấm** invent parallel JSON columns |
| Migration | none |
| gates | inherit |

### API-05: DELETE `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Soft delete `IsActive=false` |
| Permission | `asset.road-assets.delete` |
| Request | path id |
| Response | 200 |
| Form surfaces | S-ACT-DELETE |
| Migration | none |
| gates | inherit |

### API-06: GET `/api/v1/asset/road-assets/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC statuses · sources · units · **postTypes** · **guidePostMaterials** · **hGuidePostMaterials** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + delta arrays `RoadAssetLookupOption[]` |
| Form surfaces | S-META · S-ATTR 2 nhóm |
| Decision | **GAP-DELIM-TYPE-01** P1 — options = dump distinct / seed labels · **cấm** invent master SearchInput · **cấm** hardcode không cite dump · **cấm** gộp `h_post_type_id` = `guide_post_type_id` |
| Migration | none (DTO field only) |
| gates | n/a |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (t14) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract |

### API-LKP-01…03 (Integration · **không** Asset)

| Id | Purpose | Path |
|----|---------|------|
| LKP-01 | asset-type | Integration asset-types search · lock `DELINEATOR` |
| LKP-02 | road-route 3 tầng | `GET /integration/road-routes/search` |
| LKP-03 | org-unit | `GET /integration/org-units/search` |

---

## 4. Tasks handoff (ids · DEFER TL detail)

| Id | Scope | Notes |
|----|-------|-------|
| T-PROFILE | FE type-profile DELINEATOR | hide type/kmTo · show 2 nhóm + SL |
| T-SATTR | FE S-ATTR editable 2 nhóm | merge dumpSpecs · groupDumpSpecs labels |
| T-NAME | import + form name | GAP-DELIM-NAME-01 |
| T-QTY | import + form quantity | GAP-DELIM-QTY-01 |
| T-LOOKUP | init-data delta LOOKUP_STATIC | GAP-DELIM-TYPE-01 |
| T-POINT | ẩn kmTo · cấm ép `"0"` | GAP-DELIM-POINT-01 |
| T-LEAVE | LeaveConfirmModal + useAlert | GAP-DELIM-LEAVE-01 |
| T-ALIAS | board `/so-ts-delineator` optional Navigate | GAP-DELIM-ROUTE-01 |
| T-DOMAIN | optional DOMAIN-MAP row | `so-ts-delineator`→Asset |
| T-PACK | TL pack + Dev implement | **cấm** fork · **cấm** Schema_* P1 |

**Out / DEFER P2:** Schema_* flatten (**GAP-DELIM-FLAT-01**) · materials master SearchInput · GIS canvas · History API invent · Step 4b.

---

## 5. Solution confirm (autoApprove)

| | |
|--|--|
| `solution_confirm` | **approve** |
| autoApprove | ON |
| recordedAt | `2026-09-01T14:45:06.792Z` |
| taskId | `task_4c731147` |
| next role | `team_lead` · `/agent-team-lead` (pending · **không** start trong task này) |
| compact | `specs/so-ts-delineator/handoff/sa-compact.md` |

**DoR PASS:** Design confirmed · FormMode↔API · entity/migration (dumpSpecs P1 · flatten DEFER) · BFF proxy · gates TZ/XCO/SHARE · compact ≤5KB · **cấm** Write MFE.
