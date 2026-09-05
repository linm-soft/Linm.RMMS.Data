# SA — Solution discovery — so-ts-bus-station (Sổ TS — Bến xe)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_25f658f6`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `BUS_STATION` |
| cluster | `station` · ô KCHT `t04` |
| dump | `tbl_bus_station` |
| status | `confirmed` |
| design_confirm | approve (`task_99378d09`) |
| solution_confirm | **approve** (autoApprove=ON · `task_25f658f6`) |
| domain_map | **Asset** (`so-ts-bus-station` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=BUS_STATION` · alias board `/so-ts-bus-station` |
| mfeStdUrl | `http://localhost:9301/so-ts-bus-station` |
| peerStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-bus-station-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-bus-station-real-data.md` |
| design | `specs/so-ts-bus-station/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprintPrior | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_25f658f6` |
| priorTask | `task_99378d09` (design completed) |
| updatedAt | `2026-09-01T03:40:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-bus-station` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-bus-station`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr BUS_STATION · mirror `name_terminal` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` gồm `name_terminal` · prefix `BX-` | `name` ← `name_terminal` · trống OK · **cấm** IsWeak → đoạn tuyến — **GAP-BX-NAME-01** | guard rebuild + form |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu attr keys · label gaps owner/tuyến VT/DT sàn/cấp/phân loại | Label VN đủ header dump · form Input/Select merge keys — **GAP-BX-SPEC-01** | FE labels + form write |
| LOOKUP type_work / owner / grade / location / classification | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `busStationWorkTypes[]` · `busStationOwners[]` · `busStationBuildingGrades[]` · `busStationBuildLocations[]` · `busStationClassifications[]` (dump distinct / seed) — **GAP-BX-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text đủ dump · merge vào `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show `type_work_id` · `owner_id` · ON+hide-empty: site_area_using_land · main_transportation_route · total_area_floors · building_grade_id · classification OFF default | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=BUS_STATION` · `kmFrom` **không** required · S-LOC-POINT only | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-BX-LEAVE-01** | FE only |
| Alias board | live filter only | `/so-ts-bus-station` board-only · optional Navigate — **GAP-BX-ROUTE-01** | FE optional |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `ben-xe` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `BUS_STATION` · dump `tbl_bus_station` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `name_terminal` · Prefix `BX` · `IsWeakAssetName` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-bus-station.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=BUS_STATION` · alias board `/so-ts-bus-station` (optional redirect) |
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
| Out of pack | flatten DB columns · bến-xe master SearchInput · Excel wizard · Kind F map · invent History API · GIS deep-link `ben-xe` |

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

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T03:40:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=BUS_STATION` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=BUS_STATION`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate optional | — | `/so-ts-bus-station` → `/so-ts?type=BUS_STATION` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| type_work_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid ON | API-06 init-data `busStationWorkTypes` |
| owner_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid ON | API-06 `busStationOwners` |
| building_grade_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid ON hide-empty | API-06 `busStationBuildingGrades` |
| build_location | Dropdown LOOKUP_STATIC | form S-ATTR | API-06 `busStationBuildLocations` (L/R/C) |
| classification | Dropdown LOOKUP_STATIC | form S-ATTR · grid OFF default | API-06 `busStationClassifications` |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=BUS_STATION` + filters | — | page=1 on filter change · profile cột BUS_STATION |
| create | empty · type lock `BUS_STATION` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `BX-` · **không** required `kmTo`/`kmFrom` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `BUS_STATION` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `BUS_STATION` deep-link |
| `search` | SearchTextInput | mã · tên bến · tuyến · QR |
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
| List grid | name · route · routeNamed · routeSegment · kmFrom · type_work_id · owner_id · status/gps optional · hide-empty attrs | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit · hide-empty ON: site_area_using_land · main_transportation_route · total_area_floors · building_grade_id · classification OFF default |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `BUS_STATION` |
| route | SearchInput `road-route` | `?route=` / body `route` · **required** form |
| routeNamed | SearchInput `road-route` (form) / Text (grid) | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` (form) / Text (grid) | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **không** required · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid BUS_STATION |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `BX-` |
| name / name_terminal | Text | body `name` = `name_terminal` · mirror dumpSpecs.key · trống OK |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| type_work_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · options init-data `busStationWorkTypes` · **required** form |
| owner_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · options `busStationOwners` |
| site_area_using_land | Number | **dumpSpecs** · grid ON hide-empty |
| main_transportation_route | Text | **dumpSpecs** · grid ON hide-empty |
| total_area_floors | Number | **dumpSpecs** · grid ON hide-empty |
| building_grade_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · `busStationBuildingGrades` · grid ON hide-empty |
| build_location | Dropdown LOOKUP_STATIC | **dumpSpecs** · `busStationBuildLocations` · L/R/C |
| classification | Dropdown LOOKUP_STATIC | **dumpSpecs** · `busStationClassifications` · form ON · grid OFF default |
| lat / lng | Number | body `lat`/`lng` · dump GPS |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** BUS_STATION · giữ DTO parent |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **name_terminal** |
| type | Type | `type` = `BUS_STATION` |
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
| name_terminal | (mirror) | `dumpSpecs.name_terminal` + drives `name` |
| type_work_id | via DumpSpecs | `dumpSpecs.type_work_id` |
| owner_id | via DumpSpecs | `dumpSpecs.owner_id` |
| site_area_using_land | via DumpSpecs | `dumpSpecs.site_area_using_land` |
| main_transportation_route | via DumpSpecs | `dumpSpecs.main_transportation_route` |
| total_area_floors | via DumpSpecs | `dumpSpecs.total_area_floors` |
| building_grade_id | via DumpSpecs | `dumpSpecs.building_grade_id` |
| build_location | via DumpSpecs | `dumpSpecs.build_location` |
| classification | via DumpSpecs | `dumpSpecs.classification` |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `BusStationJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten bến-xe attrs | **DEFER P2** — **không** Schema_* this turn (Design/PO OUT · dumpSpecs P1 · **GAP-BX-FLAT-01**) |
| dumpSpecs write | Form S-ATTR (+ name_terminal mirror) merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `busStationWorkTypes[]` · `busStationOwners[]` · `busStationBuildingGrades[]` · `busStationBuildLocations[]` · `busStationClassifications[]` trên init-data · UI schema `road-assets` type-profile hide-empty |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name**=`name_terminal` · giữ toàn bộ attr BUS_STATION trong dumpSpecs · km trống khi null |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |

### Import IsWeak / name (GAP-BX-NAME-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `FindOfficialName` | gồm `name_terminal` — **MUST** ưu tiên khi non-junk cho BUS_STATION |
| `ResolveTypeAssetName` / `ResolveAssetName` | Dev verify CSV `name` = `name_terminal` |
| `IsWeakAssetName` | chỉ QL./CT. — **cấm** classify tên bến weak · **cấm** fallback `name_of_route_asset` khi `name_terminal` hợp lệ (trống OK — **không** ép đoạn) |
| `RoadAssetCatalogHandler` | đọc CSV `name` đã đúng · dumpSpecs giữ `name_terminal` + attrs |
| Form | S-NAME bind `name` ← `name_terminal` · sync mirror dumpSpecs |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type BUS_STATION |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-bus-station.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=BUS_STATION&…`

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
| gates.xco | **yes** |

BFF: `GET web-bff/api/v1/asset/road-assets/{id}`

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create · type `BUS_STATION` · IdCode BE `BX-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. name_terminal · bus-station attrs |
| Response | `RoadAssetDto` |
| Errors | 422 required type · status · route · type_work_id (name trống OK · kmFrom/kmTo không required) |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo`/`kmFrom` · `name` = tên bến |
| Migration | none |

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

### API-05: DELETE `/api/v1/asset/road-assets/{id}`

| | |
|--|--|
| Purpose | Soft delete `IsActive=false` |
| Permission | `asset.road-assets.delete` |
| Request | path id |
| Response | 200 |
| Form surfaces | S-ACT-DELETE |
| Migration | none |

### API-06: GET `/api/v1/asset/road-assets/init-data`

| | |
|--|--|
| Purpose | LOOKUP_STATIC statuses · sources · units · **busStationWorkTypes** · **busStationOwners** · **busStationBuildingGrades** · **busStationBuildLocations** · **busStationClassifications** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + 5 lookup arrays `RoadAssetLookupOption[]` |
| Form surfaces | S-META · S-ATTR |
| Decision | **GAP-BX-LOOKUP-01** P1 — options = dump distinct / seed labels (value=label dump string · cite dump `tbl_bus_station`) · **cấm** invent bến-xe master SearchInput · **cấm** hardcode FE không cite dump |
| Migration | none (DTO fields only) |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (`t04`) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract |

### API-LKP-01…03 (Integration · **không** Asset)

| catalogKind | API (cite live Integration) | Surface |
|-------------|------------------------------|---------|
| asset-type | search asset-types | filter type · form lock |
| road-route | `GET …/integration/road-routes/search` | filter + form route |
| org-unit | `GET …/integration/org-units/search` | filter org tree |
| ui-schema | Integration catalogs `road-assets` | Zone F FULL |

### Catalog / lookup summary

| catalogKind | API | P1 decision |
|-------------|-----|-------------|
| asset-type | LKP | SearchInput · lock `BUS_STATION` |
| road-route | LKP | SearchInput |
| org-unit | LKP | SearchInput tree |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC type_work_id | API-06 `busStationWorkTypes` | **delta** · dump distinct |
| LOOKUP_STATIC owner_id | API-06 `busStationOwners` | **delta** · dump distinct |
| LOOKUP_STATIC building_grade_id | API-06 `busStationBuildingGrades` | **delta** · dump distinct |
| LOOKUP_STATIC build_location | API-06 `busStationBuildLocations` | **delta** · L/R/C |
| LOOKUP_STATIC classification | API-06 `busStationClassifications` | **delta** · dump distinct |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile BUS_STATION hide type/kmTo/qty/unit · show `type_work_id` · `owner_id` · ON+hide-empty DT/tuyến VT/DT sàn/cấp · classification OFF default | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Dropdown/Number/Text · merge dumpSpecs | Dev UI |
| GAP-SOTS-REUSE-01 | Mount S-* trên `AssetFormPage` — **cấm** fork | Dev UI |
| GAP-BX-NAME-01 | `name`←`name_terminal` · trống OK · guard IsWeak + rebuild | Dev BE import + rebuild + form |
| GAP-BX-SPEC-01 | Label VN đủ attr keys · dumpSpecLabels · giữ attrs trong dumpSpecs · km trống khi null | Dev FE labels + form + import |
| GAP-BX-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · không ép `"0"` · không mount S-LOC-RANGE | Dev UI |
| GAP-BX-LOOKUP-01 | Dropdown LOOKUP_STATIC · init-data 5 arrays · dumpSpecs write | Dev BE init + UI |
| GAP-BX-LEAVE-01 | LeaveConfirmModal + useAlert/Modal | Dev UI |
| GAP-BX-ROUTE-01 | Live URL `?type=BUS_STATION` · alias board optional redirect | Dev UI optional |
| GAP-SOTS-API-DOC | Cite `api/v1/asset/road-assets` only · DOMAIN-MAP Asset | docs |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN | Dev UI |
| GAP-BX-FLAT-01 | Flatten DB columns **DEFER P2** | — |
| GAP-BX-AUTH-01 | RequirePermission attr TODO align Auth codes | BE later |
| GAP-BX-GIS-01 | GIS `ben-xe` **out of pack** write · cite only | — |

---

## Out of pack

Flatten Schema_* · bến-xe master SearchInput · Excel import wizard UI · Kind F map canvas · invent History path · invent `api/v1/so-ts/*` · ERP fork · yarn build/e2e/start:std ở SA · Step 4b/migration · GIS deep-link `ben-xe`.

---

## Confirm

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| migration | **none** (dumpSpecs P1) |
| confirmedAt | `2026-09-01T03:40:00.000Z` |
| taskId | `task_25f658f6` |

## Handoff next

| Role | Artifact | Need |
|------|----------|------|
| **team-lead** | `task/so-ts-bus-station.md` | T-* từ Gaps · profile · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | implement | `/agent-dev` · **cấm** start trong task SA |
| QA | scenarios + e2e | queued `/agent-qa*` only |

Compact: `specs/so-ts-bus-station/handoff/sa-compact.md`
