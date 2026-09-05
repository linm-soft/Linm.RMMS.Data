# SA — Solution discovery — so-ts-weigh-station (Sổ TS — Trạm kiểm soát tải)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_241ffb82`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `WEIGH_STATION` |
| cluster | `station` · ô KCHT `t27` |
| dump | `weight_station` |
| status | `confirmed` |
| design_confirm | approve (`task_d6606268`) |
| solution_confirm | **approve** (autoApprove=ON · `task_241ffb82`) |
| domain_map | **Asset** (`so-ts-weigh-station` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=WEIGH_STATION` · alias board `/so-ts-weigh-station` |
| mfeStdUrl | `http://localhost:9301/so-ts-weigh-station` |
| peerStdUrl | `http://localhost:9301/so-ts?type=WEIGH_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-weigh-station-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-weigh-station-real-data.md` |
| design | `specs/so-ts-weigh-station/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprintPrior | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_241ffb82` |
| priorTask | `task_d6606268` (design completed) |
| updatedAt | `2026-09-01T06:25:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · peers `so-ts-*` · `so-ts-weigh-station` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-weigh-station`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho toàn bộ attr WEIGH §4 · mirror `station_name` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` gồm `station_name` | `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn tuyến — **GAP-WEIGH-NAME-01** | guard rebuild + form |
| dumpSpecs attrs | FE `dumpSpecLabels` partial (`station_name` · `pavement_type_id`) | Label VN đủ dump §4 WEIGH — **GAP-WEIGH-SPEC-01** | FE labels + form write |
| LOOKUP management / equipment / pavement / bool | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta arrays — **GAP-WEIGH-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text/Date đủ dump §4 · merge `dumpSpecs` · gộp Đường vào length+width | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show TB cân/tải/ĐVQL/DT nhà · hide-empty ON · optional DT khu lắp/camera/đèn · `length_approaching_road` OFF | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=WEIGH_STATION` · `kmFrom` **không** required · S-LOC-POINT only — **GAP-WEIGH-POINT-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-WEIGH-LEAVE-01** | FE only |
| IdCode prefix | GIS `TFP` trùng TOLL | **giữ `TFP-`** live shared TOLL — **GAP-WEIGH-PREFIX-01** · **cấm** invent FE prefix | doc + BE keep |
| Alias route | thiếu Navigate | board `/so-ts-weigh-station` optional redirect — **GAP-WEIGH-ROUTE-01** | FE optional |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT · GIS deep-link `tram-can` optional · tile `t27` drill.

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `WEIGH_STATION` · «Trạm cân» · dump `weight_station` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `station_name` · Prefix `TFP-` · `IsWeakAssetName` |
| GIS | `GisInventoryMapper.cs` · `tram-can` ↔ `WEIGH_STATION` · IdCode live `TFP` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| FE tile | `kchtTileConfig.ts` · `t27` → `WEIGH_STATION` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-weigh-station.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=WEIGH_STATION` · alias board `/so-ts-weigh-station` (optional redirect) |
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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · invent weigh master SearchInput |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · `LinCatalogHistoryModal` · `LeaveConfirmModal` · SearchInput — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | re-export only · BFF only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth · debt stub |
| Persist | `no-parent-json-field` | dumpSpecs = attr bag · **không** line array parent JSON |
| BFF | proxy only | no business logic |
| Config | catalogKind `road-assets` · `LinCatalogUiSchemaEditorModal` | **cấm** `LinListTableConfigModal` / `configHint` |
| Filter layout | `filter-bar-layout-hard` | 1 hàng wrap · input+🔍 cụm phải · **cấm** nút Tìm riêng |
| Form surface | full-page · `data-form-cols="5"` · header chrome Lưu | **cấm** footer Lưu · **cấm** Slideout/Modal hồ sơ |
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab Chi tiết/Bảo trì/Tệp |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form attr `inspection_date_weight_station` = business date **string/Date dumpSpecs** (không range filter UI) · `updatedAt` readonly UTC | `/review-timezone-implement` | Parent API optional `fromDate`/`toDate` — **không** mount Zone B pack WEIGH |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T06:25:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=WEIGH_STATION` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=WEIGH_STATION`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate optional | — | `/so-ts-weigh-station` → `/so-ts?type=WEIGH_STATION` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| management_unit_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid ON hide-empty | API-06 init-data `weighManagementUnits` |
| type_weighting_equipment_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid ON hide-empty | API-06 init-data `weighEquipmentTypes` |
| pavement_type_id | Dropdown LOOKUP_STATIC | form S-ATTR | API-06 init-data `weighPavementTypes` |
| includes_load_reduction_area · light · camera_observation · equipment_measurement_vehicle_size | Dropdown bool Có/Không | form S-ATTR · grid optional hide-empty (camera/light) | API-06 `weighBoolOptions` (Có/Không) |
| max_axle_load_limit · building_area · site_area_* · length/width_approaching | Number | form S-ATTR · grid per Design | dumpSpecs numeric |
| inspection_date_weight_station | Date | form S-ATTR | dumpSpecs date string |
| lat/lng | Number | form S-GPS | scalars |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=WEIGH_STATION` + filters | — | page=1 on filter change · profile cột WEIGH |
| create | empty · type lock `WEIGH_STATION` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `TFP-` · **không** required `kmTo`/`kmFrom` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `WEIGH_STATION` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `WEIGH_STATION` deep-link |
| `search` | SearchTextInput | mã · tên trạm · tuyến · QR |
| `route` | SearchInput road-route | master |
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
| List grid | name · route · routeNamed · routeSegment · kmFrom · type_weighting_equipment_id · max_axle_load_limit · management_unit_id · building_area · (+ optional site_area/camera/light) · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit · length_approaching OFF · hide-empty ON chính |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột · approaching_road group |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `WEIGH_STATION` |
| route | SearchInput `road-route` | `?route=` / body `route` · **required** form |
| routeNamed | SearchInput `road-route` (form) / Text (grid) | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` (form) / Text (grid) | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **không** required · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid WEIGH |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `TFP-` (shared TOLL) |
| name / station_name | Text | body `name` = `station_name` · mirror dumpSpecs.key · trống OK |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| management_unit_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · options init-data `weighManagementUnits` |
| type_weighting_equipment_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · options init-data `weighEquipmentTypes` · grid ON hide-empty |
| pavement_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · options init-data `weighPavementTypes` |
| includes_load_reduction_area | Dropdown bool Có/Không | **dumpSpecs** · options `weighBoolOptions` |
| light | Dropdown bool | **dumpSpecs** · grid optional hide-empty |
| camera_observation | Dropdown bool | **dumpSpecs** · grid optional hide-empty |
| equipment_measurement_vehicle_size | Dropdown bool | **dumpSpecs** |
| site_area_installed_equipment | Number | **dumpSpecs** · grid optional hide-empty |
| building_area | Number | **dumpSpecs** · grid ON hide-empty |
| max_axle_load_limit | Number | **dumpSpecs** · grid ON hide-empty |
| origin_manufacturing | Text | **dumpSpecs** |
| year_manufacturing | Number/Text | **dumpSpecs** |
| approval_code_number | Text | **dumpSpecs** |
| inspection_date_weight_station | Date | **dumpSpecs** date string |
| length_approaching_road | Number | **dumpSpecs** · form gộp Đường vào · **grid OFF** |
| width_approaching_road | Number | **dumpSpecs** · form gộp Đường vào |
| location | Text | **dumpSpecs** · S-LOC / S-ATTR |
| lat / lng | Number | body `lat`/`lng` · dump `from_coordinatey/x` |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** WEIGH · giữ DTO parent |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **station_name** |
| type | Type | `type` = `WEIGH_STATION` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` (null OK) |
| kmTo | KmTo | `km_to` (null OK · form ẩn) |
| status | Status | `status` |
| source | Source | `source` |
| lat / lng | Lat / Lng | `lat` / `lng` |
| qr | Qr | `qr` |
| valueVnd | ValueVnd | `value_vnd` |
| note | Note | `note` |
| quantity / unitCode | Quantity / UnitCode | giữ · UI ẩn |
| station_name | (mirror) | `dumpSpecs.station_name` + drives `name` |
| site_area_installed_equipment | via DumpSpecs | `dumpSpecs.site_area_installed_equipment` |
| management_unit_id | via DumpSpecs | `dumpSpecs.management_unit_id` |
| building_area | via DumpSpecs | `dumpSpecs.building_area` |
| includes_load_reduction_area | via DumpSpecs | `dumpSpecs.includes_load_reduction_area` |
| light | via DumpSpecs | `dumpSpecs.light` |
| camera_observation | via DumpSpecs | `dumpSpecs.camera_observation` |
| equipment_measurement_vehicle_size | via DumpSpecs | `dumpSpecs.equipment_measurement_vehicle_size` |
| type_weighting_equipment_id | via DumpSpecs | `dumpSpecs.type_weighting_equipment_id` |
| origin_manufacturing | via DumpSpecs | `dumpSpecs.origin_manufacturing` |
| year_manufacturing | via DumpSpecs | `dumpSpecs.year_manufacturing` |
| max_axle_load_limit | via DumpSpecs | `dumpSpecs.max_axle_load_limit` |
| approval_code_number | via DumpSpecs | `dumpSpecs.approval_code_number` |
| inspection_date_weight_station | via DumpSpecs | `dumpSpecs.inspection_date_weight_station` |
| length_approaching_road | via DumpSpecs | `dumpSpecs.length_approaching_road` |
| width_approaching_road | via DumpSpecs | `dumpSpecs.width_approaching_road` |
| pavement_type_id | via DumpSpecs | `dumpSpecs.pavement_type_id` |
| location | via DumpSpecs | `dumpSpecs.location` |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `WeighStationJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten WEIGH attrs | **DEFER P2** — **không** Schema_* this turn (Design/PO OUT · dumpSpecs P1 · **GAP-WEIGH-FLAT-01**) |
| dumpSpecs write | Form S-ATTR (+ station_name mirror + approaching_road pair) merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `weighManagementUnits[]` · `weighEquipmentTypes[]` · `weighPavementTypes[]` · `weighBoolOptions[]` (Có/Không) trên init-data · UI schema `road-assets` type-profile hide-empty |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name**=`station_name` · giữ toàn bộ attr WEIGH trong dumpSpecs · km trống khi null |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |

### Import IsWeak / name (GAP-WEIGH-NAME-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `FindOfficialName` | gồm `station_name` — **MUST** ưu tiên khi non-junk cho WEIGH_STATION |
| `ResolveTypeAssetName` / `ResolveAssetName` | Dev verify CSV `name` = `station_name` (cite sample `TFP-*` → «Trạm cân» …) |
| `IsWeakAssetName` | chỉ QL./CT. — **cấm** classify tên trạm weak · **cấm** fallback `name_of_route_asset` khi `station_name` hợp lệ (trống OK — **không** ép đoạn) |
| `RoadAssetCatalogHandler` | đọc CSV `name` đã đúng · dumpSpecs giữ `station_name` + attrs §4 |
| Form | S-NAME bind `name` ← `station_name` · sync mirror dumpSpecs |

### Prefix IdCode (GAP-WEIGH-PREFIX-01)

| Cite | Decision |
|------|----------|
| Live GIS / IdCode | prefix **`TFP-`** shared với TOLL — **giữ** |
| FE | **cấm** invent prefix mới · readonly `code` từ BE |
| Docs | ghi rõ share TOLL · optional DOMAIN-MAP / CTX note · **không** migration prefix |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type WEIGH_STATION |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-weigh-station.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| data-import | N/A runtime |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=WEIGH_STATION&…`

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
| Field map | full § Field map · parse dumpSpecs → S-ATTR / S-NAME |
| gates.tz | n/a |
| gates.xco | **yes** |
| gates.shared | inherit |

BFF: `GET web-bff/api/v1/asset/road-assets/{id}`

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create · type `WEIGH_STATION` · IdCode BE `TFP-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. station_name · WEIGH attrs §4 |
| Response | `RoadAssetDto` |
| Errors | 422 required type · status · route (name trống OK · kmFrom/kmTo không required) |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo`/`kmFrom` · `name` = tên trạm |
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
| Purpose | LOOKUP_STATIC statuses · sources · units · **weighManagementUnits** · **weighEquipmentTypes** · **weighPavementTypes** · **weighBoolOptions** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + delta arrays `RoadAssetLookupOption[]` |
| Form surfaces | S-META · S-ATTR · S-LOC |
| Decision | **GAP-WEIGH-LOOKUP-01** P1 — options = dump distinct WEIGH_STATION rows / seed labels (value=label dump string · cite dump `weight_station`) · pattern `LoadDumpSpecLookupOptionsAsync` · **cấm** invent master SearchInput · **cấm** hardcode FE không cite dump · bool = fixed Có/Không (`true`/`false` hoặc `1`/`0` khớp dump) |
| Migration | none (DTO fields only) |
| gates | n/a |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (`t27`) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract · count cite **24** |

### API-LKP-01…03 (Integration · **không** Asset)

| catalogKind | API (cite live Integration) | Surface |
|-------------|------------------------------|---------|
| asset-type | search asset-types | filter type · form lock |
| road-route | `GET …/integration/road-routes/search` | filter + form route |
| org-unit | `GET …/integration/org-units/search` | filter org tree |
| ui-schema | Integration catalogs `road-assets` | Zone F FULL |

**Cấm** free-text thay SearchInput master đã chốt.

### Catalog / lookup summary

| catalogKind | API | P1 decision |
|-------------|-----|-------------|
| asset-type | LKP | SearchInput · lock `WEIGH_STATION` |
| road-route | LKP | SearchInput |
| org-unit | LKP | SearchInput tree |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC management_unit | API-06 `weighManagementUnits` | **delta** · dump distinct WEIGH |
| LOOKUP_STATIC equipment type | API-06 `weighEquipmentTypes` | **delta** · dump distinct WEIGH |
| LOOKUP_STATIC pavement | API-06 `weighPavementTypes` | **delta** · dump distinct WEIGH |
| LOOKUP_STATIC bool Có/Không | API-06 `weighBoolOptions` | **delta** fixed pair |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile WEIGH hide type/kmTo/qty/unit · show TB cân/tải/ĐVQL/DT nhà · hide-empty ON · optional site_area/camera/light · length_approaching OFF | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Dropdown/Number/Text/Date · merge dumpSpecs · gộp Đường vào length+width | Dev UI |
| GAP-SOTS-REUSE-01 | Reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork AssetFormPage · **cấm** tab legacy | Dev UI |
| GAP-WEIGH-NAME-01 | `name` ← `station_name` · trống OK · **cấm** IsWeak→đoạn | Dev BE/FE + import verify |
| GAP-WEIGH-SPEC-01 | `dumpSpecLabels` đủ keys §4 WEIGH | Dev UI |
| GAP-WEIGH-POINT-01 | ẩn kmTo form/grid · kmFrom không required · **cấm** ép `"0"` | Dev UI |
| GAP-WEIGH-ROUTE-01 | optional Navigate alias `/so-ts-weigh-station` → `?type=WEIGH_STATION` | Dev UI |
| GAP-WEIGH-LOOKUP-01 | init-data delta weighManagementUnits · weighEquipmentTypes · weighPavementTypes · weighBoolOptions | Dev BE + FE bind |
| GAP-WEIGH-LEAVE-01 | LeaveConfirmModal · useAlert/Modal · **cấm** native confirm | Dev UI |
| GAP-WEIGH-PREFIX-01 | **giữ `TFP-`** shared TOLL · doc only · **cấm** invent FE | TL/docs |
| GAP-WEIGH-TILE-01 | tile t27 → WEIGH_STATION · summary-by-type live · count **24** | cite only |
| GAP-WEIGH-FLAT-01 | dumpSpecs P1 · flatten Schema_* **DEFER P2** | SA recorded |

---

## Task hints (TL pack · ids)

| ID | Title | Layer | Deps |
|----|-------|-------|------|
| T-WEIGH-01 | Type-profile grid WEIGH_STATION + hide-empty | FE | — |
| T-WEIGH-02 | dumpSpecLabels §4 WEIGH | FE | — |
| T-WEIGH-03 | S-ATTR editable + approaching_road group + name←station_name | FE | T-WEIGH-02 |
| T-WEIGH-04 | Point hide kmTo · validation · LeaveConfirmModal | FE | — |
| T-WEIGH-05 | init-data LOOKUP delta weigh* + FE Dropdown bind | BE+FE | — |
| T-WEIGH-06 | Import/rebuild name IsWeak guard verify | BE/Data | — |
| T-WEIGH-07 | Alias route optional Navigate | FE | — |
| T-WEIGH-08 | DOMAIN-MAP optional row `so-ts-weigh-station`→Asset | Docs | — |

**Migration:** **none** SA turn · **cấm** Step 4b ở role này.

---

## DoR / confirm

| Check | Result |
|-------|--------|
| Design confirmed + compact | PASS |
| FormMode↔API mapped | PASS |
| Entity/migration decision (dumpSpecs P1 · no Schema_*) | PASS |
| BFF proxy vs API | PASS · proxy only |
| Gates TZ/XCO/SHARE | PASS · tz_na · xco_get_only · share_tenant |
| GAP closed / deferred recorded | PASS |
| solution_confirm | **approve** (autoApprove ON) |
| open questions | **none** |

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile WEIGH · GAP-WEIGH-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · LeaveConfirmModal · hide-empty · alias · `/agent-dev` |
| QA | e2e queued `/agent-qa*` only |

## Cấm (SA)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · Write MFE/native · e2e/build/start:std · Step 4b/migration
