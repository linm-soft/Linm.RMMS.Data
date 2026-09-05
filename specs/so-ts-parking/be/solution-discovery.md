# SA — Solution discovery — so-ts-parking (Sổ TS — Bãi đỗ xe)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_a1f6e42a`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-parking` |
| title | Sổ TS — Bãi đỗ xe |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `PARKING` |
| cluster | `station` · ô KCHT `t37` |
| dump | `tbl_rest_stops` |
| status | `confirmed` |
| design_confirm | approve (`task_db842a4d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_a1f6e42a`) |
| domain_map | **Asset** (`so-ts-parking` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=PARKING` · alias board `/so-ts-parking` |
| mfeStdUrl | `http://localhost:9301/so-ts-parking` |
| peerStdUrl | `http://localhost:9301/so-ts?type=PARKING` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-parking-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-parking-real-data.md` |
| design | `specs/so-ts-parking/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprintPrior | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_a1f6e42a` |
| priorTask | `task_db842a4d` (design completed) |
| updatedAt | `2026-09-01T04:50:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-parking` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-parking`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho toàn bộ attr PARKING §4 · mirror `name_work` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` gồm `name_work` · sample «Bãi đậu xe» | `name` ← `name_work` · trống OK · **cấm** IsWeak → đoạn tuyến — **GAP-PK-NAME-01** | guard rebuild + form |
| dumpSpecs attrs | FE `dumpSpecLabels` partial (thiếu categorized/service/grade keys) | Label VN đủ header dump · form Input/Select merge keys — **GAP-PK-SPEC-01** | FE labels + form write |
| LOOKUP type_work / categorized / owner / grade / location | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta arrays (dump distinct PARKING / seed) — **GAP-PK-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text đủ dump §4 · merge vào `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show PARKING attrs · **ON** parking_lot/total_parking_lot · hide-empty ON: chiều dài/DT/bãi đỗ/cứu hộ/cấp cứu | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=PARKING` · `kmFrom` **không** required · S-LOC-POINT only | FE validation |
| PARKING vs REST_AREA | cùng dump `tbl_rest_stops` | Filter `?type=PARKING` · import `RefineImportedType` tách — **GAP-PK-SPLIT-01** | list + import guard |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT · office/service_area optional form S-ATTR (không ẩn cứng khi fill 0).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `PARKING` · `RefineImportedType` tách REST_AREA |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `name_work` · Prefix `BD-` · `IsWeakAssetName` |
| GIS | `GisInventoryMapper.cs` · `bai-do` ↔ `PARKING` · IdCode live `TDN` / import `BD-` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-parking.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=PARKING` · alias board `/so-ts-parking` (optional redirect) |
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
| Response | `Linm.Platform.CommonLib` ApiResponse / paged (local stub → CommonLib) |
| Auth perm | `asset.road-assets.read|create|update|delete` (controller TODO) · FE `rmms-asset:road-assets:read|write` — debt align Auth |
| Persist | no-parent-json · flat scalars + `DumpSpecs` text JSON **attrs only** · **cấm** `LinesJson` / invent child table P1 |
| Out of pack | flatten DB columns · parking master SearchInput · Excel wizard · Kind F map · invent History API |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | `/review-timezone-implement` | Parent API vẫn có optional `fromDate`/`toDate` + `CatalogUpdatedAtRange` — **không** mount trên pack PARKING |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T04:50:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=PARKING` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=PARKING`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate optional | — | `/so-ts-parking` → `/so-ts?type=PARKING` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| type_work_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid label | API-06 init-data `parkingWorkTypes` |
| categorized_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid | API-06 init-data `parkingCategories` |
| owner_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid | API-06 init-data `parkingOwners` |
| office_building_grade_id | Dropdown LOOKUP_STATIC | form S-ATTR optional | API-06 init-data `officeBuildingGrades` |
| auxiliary_works_grade_id | Dropdown LOOKUP_STATIC | form S-ATTR optional | API-06 init-data `auxiliaryWorksGrades` |
| build_location_id | Dropdown LOOKUP_STATIC | form S-LOC / S-ATTR | API-06 init-data `buildLocations` |
| parking_lot / total_parking_lot | Select boolean / Number | form S-ATTR · grid **ON** profile PARKING | LOOKUP_STATIC True/False · dump numeric |
| traffic_emergency_service / first_aid_service | Select boolean | form S-ATTR · grid ON hide-empty | LOOKUP_STATIC True/False |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=PARKING` + filters | — | page=1 on filter change · profile cột PARKING · **cấm** lẫn REST_AREA |
| create | empty · type lock `PARKING` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `BD-` · **không** required `kmTo`/`kmFrom` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `PARKING` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `PARKING` deep-link |
| `search` | SearchTextInput | mã · tên bãi · tuyến · QR |
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
| List grid | name · route · routeNamed · routeSegment · kmFrom · type_work_id · categorized_id · owner_id · actual_length · site_area_using_land · **parking_lot** · **total_parking_lot** · traffic_emergency_service · first_aid_service · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit · **ON** parking cols · hide-empty ON: chiều dài/DT/bãi đỗ/cứu hộ/cấp cứu |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `PARKING` |
| route | SearchInput `road-route` | `?route=` / body `route` · **required** form |
| routeNamed | SearchInput `road-route` (form) / Text (grid) | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` (form) / Text (grid) | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **không** required · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid PARKING |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `BD-` |
| name / name_work | Text | body `name` = `name_work` · mirror dumpSpecs.key · trống OK |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| type_work_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `parkingWorkTypes` · **required** form |
| categorized_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `parkingCategories` |
| owner_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `parkingOwners` |
| actual_length | Number | **dumpSpecs** key · grid ON hide-empty |
| site_area_using_land | Number | **dumpSpecs** key · grid ON hide-empty |
| office_building_grade_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `officeBuildingGrades` · form optional |
| total_area_floors | Number | **dumpSpecs** key · form S-ATTR optional |
| service_area | Number | **dumpSpecs** key · form S-ATTR optional · hide-empty list |
| total_area_office_building | Number | **dumpSpecs** key · form S-ATTR optional |
| auxiliary_works_grade_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `auxiliaryWorksGrades` · form optional |
| total_area_auxiliary_works | Number | **dumpSpecs** key · form S-ATTR optional |
| parking_lot | Select boolean | **dumpSpecs** key · grid **ON** profile PARKING |
| total_parking_lot | Number | **dumpSpecs** key · grid **ON** hide-empty |
| traffic_emergency_service | Select boolean | **dumpSpecs** key · grid ON hide-empty |
| first_aid_service | Select boolean | **dumpSpecs** key · grid ON hide-empty |
| build_location_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `buildLocations` · L/R/C |
| lat / lng | Number | body `lat`/`lng` · dump `from_coordinatey/x` |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** PARKING · giữ DTO parent |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **name_work** |
| type | Type | `type` = `PARKING` |
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
| name_work | (mirror) | `dumpSpecs.name_work` + drives `name` |
| type_work_id | via DumpSpecs | `dumpSpecs.type_work_id` |
| categorized_id | via DumpSpecs | `dumpSpecs.categorized_id` |
| owner_id | via DumpSpecs | `dumpSpecs.owner_id` |
| actual_length | via DumpSpecs | `dumpSpecs.actual_length` |
| site_area_using_land | via DumpSpecs | `dumpSpecs.site_area_using_land` |
| office_building_grade_id | via DumpSpecs | `dumpSpecs.office_building_grade_id` |
| total_area_floors | via DumpSpecs | `dumpSpecs.total_area_floors` |
| service_area | via DumpSpecs | `dumpSpecs.service_area` |
| total_area_office_building | via DumpSpecs | `dumpSpecs.total_area_office_building` |
| auxiliary_works_grade_id | via DumpSpecs | `dumpSpecs.auxiliary_works_grade_id` |
| total_area_auxiliary_works | via DumpSpecs | `dumpSpecs.total_area_auxiliary_works` |
| parking_lot | via DumpSpecs | `dumpSpecs.parking_lot` · **ON** profile PARKING |
| total_parking_lot | via DumpSpecs | `dumpSpecs.total_parking_lot` · **ON** profile PARKING |
| traffic_emergency_service | via DumpSpecs | `dumpSpecs.traffic_emergency_service` |
| first_aid_service | via DumpSpecs | `dumpSpecs.first_aid_service` |
| build_location_id | via DumpSpecs | `dumpSpecs.build_location_id` |
| tinhthanhpho / xaphuong | via DumpSpecs | `dumpSpecs.tinhthanhpho` / `dumpSpecs.xaphuong` optional |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `RestStopJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten PARKING attrs | **DEFER P2** — **không** Schema_* this turn (Design/PO OUT · dumpSpecs P1 · **GAP-PK-FLAT-01**) |
| dumpSpecs write | Form S-ATTR (+ name_work mirror) merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `parkingWorkTypes[]` · `parkingCategories[]` · `parkingOwners[]` · `officeBuildingGrades[]` · `auxiliaryWorksGrades[]` · `buildLocations[]` trên init-data · UI schema `road-assets` type-profile hide-empty |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name**=`name_work` · giữ toàn bộ attr PARKING trong dumpSpecs · `RefineImportedType` tách REST_AREA · km trống khi null |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |

### Import IsWeak / name (GAP-PK-NAME-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `FindOfficialName` | gồm `name_work` — **MUST** ưu tiên khi non-junk cho PARKING |
| `ResolveTypeAssetName` / `ResolveAssetName` | Dev verify CSV `name` = `name_work` (cite sample `BD-rest_stops_*` → «Bãi đậu xe» …) |
| `IsWeakAssetName` | chỉ QL./CT. — **cấm** classify tên bãi weak · **cấm** fallback `name_of_route_asset` khi `name_work` hợp lệ (trống OK — **không** ép đoạn) |
| `RoadAssetCatalogHandler` | đọc CSV `name` đã đúng · dumpSpecs giữ `name_work` + attrs §4 · **cấm** gộp REST_AREA |
| Form | S-NAME bind `name` ← `name_work` · sync mirror dumpSpecs |

### PARKING vs REST_AREA split (GAP-PK-SPLIT-01)

| Cite | Decision |
|------|----------|
| List filter | **MUST** `?type=PARKING` · deep-link tile `t37` · **cấm** hiện row `REST_AREA` |
| Import | `RefineImportedType` trong `RoadAssetCatalogHandler` tách theo tên/dump · peer `so-ts-rest-area` riêng pack |
| Grid/form | parking_lot/total_parking_lot **ON** default PARKING · peer REST_AREA profile riêng |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type PARKING |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-parking.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| data-import | N/A runtime |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=PARKING&…`

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
| Purpose | Create · type `PARKING` · IdCode BE `BD-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. name_work · PARKING attrs §4 |
| Response | `RoadAssetDto` |
| Errors | 422 required type · status · route · type_work_id (name trống OK · kmFrom/kmTo không required) |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo`/`kmFrom` · `name` = tên bãi |
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
| Purpose | LOOKUP_STATIC statuses · sources · units · materials (peer) · **parkingWorkTypes** · **parkingCategories** · **parkingOwners** · **officeBuildingGrades** · **auxiliaryWorksGrades** · **buildLocations** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + delta arrays `RoadAssetLookupOption[]` |
| Form surfaces | S-META · S-ATTR · S-LOC |
| Decision | **GAP-PK-LOOKUP-01** P1 — options = dump distinct PARKING rows / seed labels (value=label dump string · cite dump `tbl_rest_stops`) · **cấm** invent master SearchInput · **cấm** hardcode FE không cite dump |
| Migration | none (DTO fields only) |
| gates | n/a |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (`t37`) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract |

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
| asset-type | LKP | SearchInput · lock `PARKING` |
| road-route | LKP | SearchInput |
| org-unit | LKP | SearchInput tree |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC type_work | API-06 `parkingWorkTypes` | **delta** · dump distinct PARKING |
| LOOKUP_STATIC categorized | API-06 `parkingCategories` | **delta** · dump distinct PARKING |
| LOOKUP_STATIC owner | API-06 `parkingOwners` | **delta** · dump distinct PARKING |
| LOOKUP_STATIC office/aux grade | API-06 `officeBuildingGrades` / `auxiliaryWorksGrades` | **delta** · dump distinct |
| LOOKUP_STATIC build_location | API-06 `buildLocations` | **delta** · L/R/C |
| LOOKUP_STATIC boolean svc/parking | True/False | dump / init cite |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile PARKING hide type/kmTo/qty/unit · show dump attrs · **ON** parking_lot/total_parking_lot · hide-empty ON: chiều dài/DT/bãi đỗ/cứu hộ/cấp cứu | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Dropdown/Number/Text · merge dumpSpecs | Dev UI |
| GAP-SOTS-REUSE-01 | Mount S-* trên `AssetFormPage` — **cấm** fork | Dev UI |
| GAP-PK-NAME-01 | `name`←`name_work` · trống OK · guard IsWeak + rebuild | Dev BE import + rebuild + form |
| GAP-PK-SPEC-01 | Label VN đủ key PARKING · giữ attrs trong dumpSpecs · km trống khi null | Dev FE labels + form + import |
| GAP-PK-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · không ép `"0"` · không mount S-LOC-RANGE | Dev UI |
| GAP-PK-LOOKUP-01 | Dropdown LOOKUP_STATIC · init-data delta arrays · dumpSpecs write | Dev BE init + UI |
| GAP-PK-SPLIT-01 | Filter/import tách PARKING vs REST_AREA · **cấm** gộp list | Dev BE import + UI filter |
| GAP-PK-PARK-01 | parking_lot/total_parking_lot **ON** default profile PARKING | Dev UI profile |
| GAP-PK-LEAVE-01 | LeaveConfirmModal + useAlert/Modal | Dev UI |
| GAP-PK-ROUTE-01 | Live URL `?type=PARKING` · alias board optional redirect | Dev UI optional |
| GAP-SOTS-API-DOC | Cite `api/v1/asset/road-assets` only · DOMAIN-MAP Asset | docs |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN | Dev UI |
| GAP-PK-FLAT-01 | Flatten DB columns **DEFER P2** | — |
| GAP-PK-AUTH-01 | RequirePermission attr TODO align Auth codes | BE later |

---

## Out of pack

Flatten Schema_* · parking master SearchInput · Excel import wizard UI · Kind F map canvas · invent History path · invent `api/v1/so-ts/*` · ERP fork · yarn build/e2e/start:std ở SA · Step 4b/migration.

---

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm gates TZ/XCO/SHARE (`task_a1f6e42a`).  
Handoff → **Team-lead** pending (roles sau = pending đến lượt). **Cấm** start TL/Dev/QA trong task SA này (**GAP-PKT-ROLE-01**). **Cấm** Write MFE/native · e2e · start:std · Step 4b.

## Handoff → TL

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F+H + Full page `data-form-cols="5"` · type `PARKING` · cluster `station` · tile `t37` |
| FormMode↔API | § FormType pack |
| Filter keys | type · search · route · kmFrom · kmTo · orgUnit · page · pageSize |
| API list | API-01…07 · LKP Integration · init parkingWorkTypes + parkingCategories + parkingOwners + officeBuildingGrades + auxiliaryWorksGrades + buildLocations delta |
| Entity | `RoadAssetEntity` flat + DumpSpecs · **cấm** parent line JSON · **no** flatten P1 |
| Gates | tz_na · xco_get_only · share_tenant |
| Delta Dev | GAP-SOTS-* · GAP-PK-* (name/spec/point/lookup/leave/route/split/park) · init LOOKUP |
| Migration | **none** this SA turn |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/ui/prototype/so-ts-parking-list-prototype.html` |
| Next | TL enqueue khi tới lượt · **cấm** start trong task này |

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Design confirmed + controlHint + real-data §B | ✅ |
| Architecture · SSOT · Ownership · DOMAIN-MAP Asset | ✅ |
| FormType list · FormMode↔API đủ | ✅ |
| Filter query keys + LinErpListFilterBar (no HOW) | ✅ |
| controlHint → SearchInput/Dropdown/Text | ✅ |
| Persist dumpSpecs P1 · no flatten migration · no-parent-json | ✅ |
| API catalog blocks + BFF proxy · **cấm** invent so-ts path | ✅ |
| Implement gates TZ/XCO/SHARE recorded | ✅ |
| solution_confirm approve (autoApprove) | ✅ |
| **Cấm** MFE write / e2e / Step 4b | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T04:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba |
| headerFingerprintPrior | sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.29.03 |
| taskId | task_a1f6e42a |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_a1f6e42a contentHashPriorDataAnaly=sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba -->
