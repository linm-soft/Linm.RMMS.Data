# SA — Solution discovery — so-ts-toll (Sổ TS — Trạm thu phí)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_05e187c1`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `TOLL` |
| cluster | `station` · ô KCHT `t28` |
| dump | `tbl_toll_booth` |
| status | `confirmed` |
| design_confirm | approve (`task_d313d9f9`) |
| solution_confirm | **approve** (autoApprove=ON · `task_05e187c1`) |
| domain_map | **Asset** (`so-ts-toll` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=TOLL` · alias board `/so-ts-toll` |
| mfeStdUrl | `http://localhost:9301/so-ts-toll` |
| peerStdUrl | `http://localhost:9301/so-ts?type=TOLL` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-toll-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-toll-real-data.md` |
| design | `specs/so-ts-toll/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprintPrior | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_05e187c1` |
| priorTask | `task_d313d9f9` (design completed) |
| updatedAt | `2026-09-01T05:10:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-toll` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-toll`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho toàn bộ attr TOLL §4 · mirror `station_name` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` gồm `station_name` | `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn tuyến — **GAP-TOLL-NAME-01** | guard rebuild + form |
| dumpSpecs attrs | FE `dumpSpecLabels` partial (thiếu weighting/lane/grade/width keys) | Label VN đủ header dump · form Input/Select merge keys — **GAP-TOLL-SPEC-01** | FE labels + form write |
| LOOKUP weighting/roof/pavement/grade/road_structure/operation_location | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta arrays (dump distinct TOLL / seed) — **GAP-TOLL-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text đủ dump §4 · merge vào `dumpSpecs` on save · `width_*` subsection S-ATTR-WIDTH | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show TOLL attrs · hide-empty ON: làn cân/ETC/thủ công/cấp/DT cổng · auxiliary_works_grade_id OFF default | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=TOLL` · `kmFrom` **không** required · S-LOC-POINT only | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT · GIS deep-link `tram-thu-phi` optional.

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `TOLL` · «Trạm thu phí» · unit `TRAM` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `station_name` · Prefix `TFP-` · `IsWeakAssetName` |
| GIS | `GisInventoryMapper.cs` · `tram-thu-phi` ↔ `TOLL` · IdCode live `TFP` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-toll.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=TOLL` · alias board `/so-ts-toll` (optional redirect) |
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
| Out of pack | flatten DB columns · toll master SearchInput · Excel wizard · Kind F map · invent History API |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-ATTR-WIDTH · S-GPS | **cấm** fork `AssetFormPage` |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | `/review-timezone-implement` | Parent API vẫn có optional `fromDate`/`toDate` + `CatalogUpdatedAtRange` — **không** mount trên pack TOLL |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T05:10:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=TOLL` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=TOLL`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate optional | — | `/so-ts-toll` → `/so-ts?type=TOLL` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| weighting_method | Dropdown LOOKUP_STATIC | form S-ATTR · grid label | API-06 init-data `tollWeightingMethods` |
| roof_structures_gate_id | Dropdown LOOKUP_STATIC | form S-ATTR | API-06 init-data `tollRoofStructures` |
| pavement_type_id | Dropdown LOOKUP_STATIC | form S-ATTR | API-06 init-data `tollPavementTypes` |
| house_grade_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid hide-empty | API-06 init-data `tollHouseGrades` |
| road_structure_id | Dropdown LOOKUP_STATIC | form S-ATTR | API-06 init-data `tollRoadStructures` |
| operation_building_location_id | Dropdown LOOKUP_STATIC | form S-LOC / S-ATTR | API-06 init-data `tollOperationLocations` |
| auxiliary_works_grade_id | Dropdown LOOKUP_STATIC | form S-ATTR optional | API-06 init-data `auxiliaryWorksGrades` (reuse key) |
| number_* lanes | Number | form S-ATTR · grid ON hide-empty | dumpSpecs numeric |
| width_* | Number | form S-ATTR-WIDTH subsection | dumpSpecs numeric · grid OFF default |
| lat/lng | Number | form S-GPS | scalars |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=TOLL` + filters | — | page=1 on filter change · profile cột TOLL |
| create | empty · type lock `TOLL` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `TFP-` · **không** required `kmTo`/`kmFrom` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `TOLL` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `TOLL` deep-link |
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
| List grid | name · route · routeNamed · routeSegment · kmFrom · weighting_method · number_weighting_lane · number_etc_lane · number_manual_lane · house_grade_id · area_yoll_gate_pavement · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit · hide-empty ON: làn/cấp/DT cổng |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột · S-ATTR-WIDTH |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `TOLL` |
| route | SearchInput `road-route` | `?route=` / body `route` · **required** form |
| routeNamed | SearchInput `road-route` (form) / Text (grid) | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` (form) / Text (grid) | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **không** required · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid TOLL |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `TFP-` |
| name / station_name | Text | body `name` = `station_name` · mirror dumpSpecs.key · trống OK |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| weighting_method | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `tollWeightingMethods` |
| number_weighting_lane | Number | **dumpSpecs** key · grid ON hide-empty |
| number_one_stop_lane | Number | **dumpSpecs** key · form optional hide-empty |
| number_manual_lane | Number | **dumpSpecs** key · grid ON hide-empty |
| number_etc_lane | Number | **dumpSpecs** key · grid ON hide-empty |
| roof_structures_gate_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `tollRoofStructures` |
| length_reinforcement | Number | **dumpSpecs** key · form S-ATTR optional |
| pavement_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `tollPavementTypes` |
| area_yoll_gate_pavement | Number | **dumpSpecs** key · grid ON hide-empty |
| operation_building_location_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `tollOperationLocations` |
| house_grade_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `tollHouseGrades` · grid ON hide-empty |
| auxiliary_works_grade_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `auxiliaryWorksGrades` · grid OFF default |
| road_structure_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `tollRoadStructures` |
| land_area_* | Number | **dumpSpecs** keys · form S-ATTR optional |
| width_* | Number | **dumpSpecs** keys · form S-ATTR-WIDTH subsection · grid OFF default |
| solanETC / solancantaitrong | Number | **dumpSpecs** keys · form optional |
| lat / lng | Number | body `lat`/`lng` · dump `from_coordinatey/x` |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** TOLL · giữ DTO parent |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **station_name** |
| type | Type | `type` = `TOLL` |
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
| weighting_method | via DumpSpecs | `dumpSpecs.weighting_method` |
| number_weighting_lane | via DumpSpecs | `dumpSpecs.number_weighting_lane` |
| number_one_stop_lane | via DumpSpecs | `dumpSpecs.number_one_stop_lane` |
| number_manual_lane | via DumpSpecs | `dumpSpecs.number_manual_lane` |
| number_etc_lane | via DumpSpecs | `dumpSpecs.number_etc_lane` |
| roof_structures_gate_id | via DumpSpecs | `dumpSpecs.roof_structures_gate_id` |
| length_reinforcement | via DumpSpecs | `dumpSpecs.length_reinforcement` |
| pavement_type_id | via DumpSpecs | `dumpSpecs.pavement_type_id` |
| area_yoll_gate_pavement | via DumpSpecs | `dumpSpecs.area_yoll_gate_pavement` |
| operation_building_location_id | via DumpSpecs | `dumpSpecs.operation_building_location_id` |
| house_grade_id | via DumpSpecs | `dumpSpecs.house_grade_id` |
| auxiliary_works_grade_id | via DumpSpecs | `dumpSpecs.auxiliary_works_grade_id` |
| road_structure_id | via DumpSpecs | `dumpSpecs.road_structure_id` |
| land_area_* | via DumpSpecs | `dumpSpecs.land_area_*` |
| width_* | via DumpSpecs | `dumpSpecs.width_*` |
| solanETC / solancantaitrong | via DumpSpecs | `dumpSpecs.solanETC` / `dumpSpecs.solancantaitrong` |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `TollBoothJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten TOLL attrs | **DEFER P2** — **không** Schema_* this turn (Design/PO OUT · dumpSpecs P1 · **GAP-TOLL-FLAT-01**) |
| dumpSpecs write | Form S-ATTR (+ S-ATTR-WIDTH + station_name mirror) merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `tollWeightingMethods[]` · `tollRoofStructures[]` · `tollPavementTypes[]` · `tollHouseGrades[]` · `tollRoadStructures[]` · `tollOperationLocations[]` · reuse `auxiliaryWorksGrades[]` trên init-data · UI schema `road-assets` type-profile hide-empty |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name**=`station_name` · giữ toàn bộ attr TOLL trong dumpSpecs · km trống khi null |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |

### Import IsWeak / name (GAP-TOLL-NAME-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `FindOfficialName` | gồm `station_name` — **MUST** ưu tiên khi non-junk cho TOLL |
| `ResolveTypeAssetName` / `ResolveAssetName` | Dev verify CSV `name` = `station_name` (cite sample `TFP-*` → «Trạm thu phí» …) |
| `IsWeakAssetName` | chỉ QL./CT. — **cấm** classify tên trạm weak · **cấm** fallback `name_of_route_asset` khi `station_name` hợp lệ (trống OK — **không** ép đoạn) |
| `RoadAssetCatalogHandler` | đọc CSV `name` đã đúng · dumpSpecs giữ `station_name` + attrs §4 |
| Form | S-NAME bind `name` ← `station_name` · sync mirror dumpSpecs |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type TOLL |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-toll.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| data-import | N/A runtime |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=TOLL&…`

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
| Field map | full § Field map · parse dumpSpecs → S-ATTR / S-NAME / S-ATTR-WIDTH |
| gates.tz | n/a |
| gates.xco | **yes** |
| gates.shared | inherit |

BFF: `GET web-bff/api/v1/asset/road-assets/{id}`

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create · type `TOLL` · IdCode BE `TFP-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. station_name · TOLL attrs §4 |
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
| Purpose | LOOKUP_STATIC statuses · sources · units · **tollWeightingMethods** · **tollRoofStructures** · **tollPavementTypes** · **tollHouseGrades** · **tollRoadStructures** · **tollOperationLocations** · **auxiliaryWorksGrades** (reuse) (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + delta arrays `RoadAssetLookupOption[]` |
| Form surfaces | S-META · S-ATTR · S-LOC · S-ATTR-WIDTH |
| Decision | **GAP-TOLL-LOOKUP-01** P1 — options = dump distinct TOLL rows / seed labels (value=label dump string · cite dump `tbl_toll_booth`) · pattern `LoadDumpSpecLookupOptionsAsync` · **cấm** invent master SearchInput · **cấm** hardcode FE không cite dump |
| Migration | none (DTO fields only) |
| gates | n/a |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (`t28`) |
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
| asset-type | LKP | SearchInput · lock `TOLL` |
| road-route | LKP | SearchInput |
| org-unit | LKP | SearchInput tree |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC weighting | API-06 `tollWeightingMethods` | **delta** · dump distinct TOLL |
| LOOKUP_STATIC roof/pavement/grade/road_structure/operation | API-06 delta arrays | **delta** · dump distinct TOLL |
| LOOKUP_STATIC auxiliary grade | API-06 `auxiliaryWorksGrades` | **reuse** key `auxiliary_works_grade_id` |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile TOLL hide type/kmTo/qty/unit · show dump attrs · hide-empty ON: làn cân/ETC/thủ công/cấp/DT cổng · auxiliary_works_grade_id OFF default | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Dropdown/Number/Text · merge dumpSpecs · S-ATTR-WIDTH subsection | Dev UI |
| GAP-SOTS-REUSE-01 | Mount S-* trên `AssetFormPage` — **cấm** fork | Dev UI |
| GAP-TOLL-NAME-01 | `name`←`station_name` · trống OK · guard IsWeak + rebuild | Dev BE import + rebuild + form |
| GAP-TOLL-SPEC-01 | Label VN đủ key TOLL · giữ attrs trong dumpSpecs · km trống khi null | Dev FE labels + form + import |
| GAP-TOLL-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · không ép `"0"` · không mount S-LOC-RANGE | Dev UI |
| GAP-TOLL-LOOKUP-01 | Dropdown LOOKUP_STATIC · init-data delta arrays · dumpSpecs write | Dev BE init + UI |
| GAP-TOLL-WIDTH-01 | `width_*` gộp S-ATTR-WIDTH theo mẫu detail · grid OFF default | Dev UI |
| GAP-TOLL-LEAVE-01 | LeaveConfirmModal + useAlert/Modal | Dev UI |
| GAP-TOLL-ROUTE-01 | Live URL `?type=TOLL` · alias board optional redirect | Dev UI optional |
| GAP-SOTS-API-DOC | Cite `api/v1/asset/road-assets` only · DOMAIN-MAP Asset | docs |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN | Dev UI |
| GAP-TOLL-FLAT-01 | Flatten DB columns **DEFER P2** | — |
| GAP-TOLL-AUTH-01 | RequirePermission attr TODO align Auth codes | BE later |

---

## Out of pack

Flatten Schema_* · toll master SearchInput · Excel import wizard UI · Kind F map canvas · invent History path · invent `api/v1/so-ts/*` · ERP fork · yarn build/e2e/start:std ở SA · Step 4b/migration.

---

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm gates TZ/XCO/SHARE (`task_05e187c1`).  
Handoff → **Team-lead** pending (roles sau = pending đến lượt). **Cấm** start TL/Dev/QA trong task SA này (**GAP-PKT-ROLE-01**). **Cấm** Write MFE/native · e2e · start:std · Step 4b.

## Handoff → TL

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F+H + Full page `data-form-cols="5"` · type `TOLL` · cluster `station` · tile `t28` |
| FormMode↔API | § FormType pack |
| Filter keys | type · search · route · kmFrom · kmTo · orgUnit · page · pageSize |
| API list | API-01…07 · LKP Integration · init tollWeightingMethods + tollRoofStructures + tollPavementTypes + tollHouseGrades + tollRoadStructures + tollOperationLocations + auxiliaryWorksGrades delta |
| Entity | `RoadAssetEntity` flat + DumpSpecs · **cấm** parent line JSON · **no** flatten P1 |
| Gates | tz_na · xco_get_only · share_tenant |
| Delta Dev | GAP-SOTS-* · GAP-TOLL-* (name/spec/point/lookup/width/leave/route) · init LOOKUP |
| Migration | **none** this SA turn |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html` |
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
| generatedAt | 2026-09-01T05:10:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c |
| headerFingerprintPrior | sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.29.03 |
| taskId | task_05e187c1 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_05e187c1 contentHashPriorDataAnaly=sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c -->
