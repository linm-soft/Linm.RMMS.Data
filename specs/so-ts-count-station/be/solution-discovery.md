# SA — Solution discovery — so-ts-count-station (Sổ TS — Trạm đếm)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_c54bef0c`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B (via compact) · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `COUNT_STATION` |
| cluster | `station` · ô KCHT `t30` · icon `CAM` |
| dump | `mst_counting_station` |
| status | `confirmed` |
| design_confirm | approve (`task_0e1b860d`) |
| solution_confirm | **approve** (autoApprove=ON · `task_c54bef0c`) |
| domain_map | **Asset** (`so-ts-count-station` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=COUNT_STATION` · alias board `/so-ts-count-station` |
| mfeStdUrl | `http://localhost:9301/so-ts-count-station` |
| peerStdUrl | `http://localhost:9301/so-ts?type=COUNT_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-count-station-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-count-station-real-data.md` |
| design | `specs/so-ts-count-station/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprintPrior | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_c54bef0c` |
| priorTask | `task_0e1b860d` (design completed) |
| updatedAt | `2026-09-01T07:10:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · peers `so-ts-*` · `so-ts-count-station` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-count-station`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr COUNT §4 · mirror `name_vi` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` (startsWith `name_` catch `name_vi`) | `name` ← `name_vi` · trống OK · **cấm** IsWeak→đoạn — **GAP-COUNT-NAME-01** | guard + form sync |
| dumpSpecs attrs | FE `dumpSpecLabels` partial (`name_vi`) | Label VN đủ dump §4 COUNT — **GAP-COUNT-SPEC-01** | FE labels + form write |
| LOOKUP `agency_id` | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta `countAgencies` — **GAP-COUNT-LOOKUP-01** | delta init-data |
| Coord | dump `from_coordinate`/`to_coordinate` raw | Parse → `lat`/`lng` ưu tiên · dumpSpecs giữ · `to_coordinate` optional hide — **GAP-COUNT-COORD-01** | FE parse + BE keep keys |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump §4 · merge dumpSpecs | FE + dumpSpecs merge |
| Grid profile | generic schema | Hide `type`/`kmTo`/qty/unit · show ĐVQL/`name_en`/`no_of_lane`/`speed` · hide-empty ON · 3 tầng tuyến tách | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=COUNT_STATION` · `kmFrom` **không** required · **cấm** ép `"0"` — **GAP-COUNT-POINT-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-COUNT-LEAVE-01** | FE only |
| IdCode prefix | GIS `THC` · rebuild script debt `TX` | **giữ `THC-`** live GIS — **GAP-COUNT-GIS-01** prefix keep · rebuild align Dev | doc + BE keep THC |
| GIS layer slug | `LayerCodeForType` fallback `count-station` · chưa TypesForLayer dedicated | **DEFER** slug invent · **cấm** invent FE — **GAP-COUNT-GIS-01** | P2 / GIS owner |
| Alias route | thiếu Navigate | board `/so-ts-count-station` optional redirect — **GAP-COUNT-ROUTE-01** | FE optional |
| Label | UI «Trạm đếm» · BE seed «Trạm đếm xe» · lookups thiếu COUNT | FE lookups COUNT · BE seed giữ — **GAP-COUNT-LABEL-01** | FE + cite |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT · tile `t30` drill · count cite **377**.

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `COUNT_STATION` · «Trạm đếm xe» · unit `TRAM` · dump `mst_counting_station` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` catch `name_vi` · **prefix debt `TX` vs live `THC`** — Dev align IdCode gen to **THC** |
| GIS | `GisInventoryMapper.cs` · AssetCode `COUNT_STATION`→`THC` · LayerCode fallback `count-station` · slug dedicated **DEFER** |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| FE tile | `kchtTileConfig.ts` · `t30` → `COUNT_STATION` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-count-station.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=COUNT_STATION` · alias board `/so-ts-count-station` (optional redirect) |
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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · invent agency master SearchInput · invent GIS slug FE |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab Chi tiết/Bảo trì/Tệp/Lưu lượng |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · COUNT attrs không date business · `updatedAt` readonly UTC | `/review-timezone-implement` | Parent API optional `fromDate`/`toDate` — **không** mount Zone B pack COUNT |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T07:10:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=COUNT_STATION` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=COUNT_STATION`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate optional | — | `/so-ts-count-station` → `/so-ts?type=COUNT_STATION` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| agency_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid ON hide-empty | API-06 init-data `countAgencies` |
| name_en · no_of_lane · speed | Text / Number | form S-ATTR · grid ON hide-empty | dumpSpecs |
| from/to_coordinate | derived Text (optional hide to) | form · parse → lat/lng | dumpSpecs keep |
| lat/lng | Number | form S-GPS / S-LOC-POINT | scalars |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=COUNT_STATION` + filters | — | page=1 on filter change · profile cột COUNT |
| create | empty · type lock `COUNT_STATION` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `THC-` · **không** required `kmTo`/`kmFrom` · `name` trống OK |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty · coord parse on load |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `COUNT_STATION` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `COUNT_STATION` deep-link |
| `search` | SearchTextInput | mã · tên · tuyến · QR |
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
| List grid | name · route · routeNamed · routeSegment · kmFrom · agency_id · name_en · no_of_lane · speed · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit · hide-empty ON |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `COUNT_STATION` |
| route | SearchInput `road-route` | `?route=` / body `route` · **required** form |
| routeNamed | SearchInput `road-route` (form) / Text (grid) | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` (form) / Text (grid) | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **không** required · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid COUNT |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `THC-` |
| name / name_vi | Text | body `name` = `name_vi` · mirror dumpSpecs.key · trống OK |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| agency_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · options init-data `countAgencies` · grid ON hide-empty |
| name_en | Text | **dumpSpecs** · grid ON hide-empty |
| no_of_lane | Number | **dumpSpecs** · grid ON hide-empty |
| speed | Number | **dumpSpecs** · grid ON hide-empty |
| from_coordinate | Text / derived | **dumpSpecs** · parse → `lat`/`lng` ưu tiên (**GAP-COUNT-COORD-01**) |
| to_coordinate | Text / derived optional hide | **dumpSpecs** keep · optional UI hide |
| lat / lng | Number | body `lat`/`lng` · sync từ parse coord khi có |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** COUNT · giữ DTO parent · unit seed `TRAM` |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **name_vi** |
| type | Type | `type` = `COUNT_STATION` |
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
| name_vi | (mirror) | `dumpSpecs.name_vi` + drives `name` |
| agency_id | via DumpSpecs | `dumpSpecs.agency_id` |
| name_en | via DumpSpecs | `dumpSpecs.name_en` |
| no_of_lane | via DumpSpecs | `dumpSpecs.no_of_lane` |
| speed | via DumpSpecs | `dumpSpecs.speed` |
| from_coordinate | via DumpSpecs | `dumpSpecs.from_coordinate` · derive lat/lng |
| to_coordinate | via DumpSpecs | `dumpSpecs.to_coordinate` · optional |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `CountStationJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten COUNT attrs | **DEFER P2** — **không** Schema_* this turn (Design/PO OUT · dumpSpecs P1 · **GAP-COUNT-FLAT-01**) |
| dumpSpecs write | Form S-ATTR (+ name_vi mirror + coord keys) merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `countAgencies[]` trên init-data · UI schema `road-assets` type-profile hide-empty |
| Coord | FE parse `from_coordinate`/`to_coordinate` → fill lat/lng khi parse được · **giữ** raw keys trong dumpSpecs · **không** drop on save |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name**=`name_vi` · giữ toàn bộ attr COUNT trong dumpSpecs · km trống khi null |
| Default đơn vị | unit seed `TRAM` · II.1/QL.1 khi reopen import (parent) |

### Import IsWeak / name (GAP-COUNT-NAME-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `FindOfficialName` | `name_vi` match `StartsWith("name_")` — **MUST** ưu tiên khi non-junk cho COUNT_STATION · optional explicit list `name_vi` |
| `IsWeakAssetName` | chỉ QL./CT. — **cấm** classify tên trạm weak · **cấm** fallback `name_of_route_asset` khi `name_vi` hợp lệ (trống OK — **không** ép đoạn) |
| `RoadAssetCatalogHandler` | đọc CSV `name` đã đúng · dumpSpecs giữ `name_vi` + attrs §4 |
| Form | S-NAME bind `name` ← `name_vi` · sync mirror dumpSpecs |

### Prefix IdCode + GIS (GAP-COUNT-GIS-01)

| Cite | Decision |
|------|----------|
| Live GIS / IdCode | `GisInventoryMapper.AssetCodeForType` → **`THC`** — **giữ `THC-`** |
| Rebuild script | `RebuildGovVn` return `"TX"` cho COUNT — **debt** · Dev align gen/import prefix về **THC** (không invent FE) |
| Layer slug | chưa dedicated `TypesForLayer` · fallback `count-station` — **DEFER** invent slug/`tram-dem` · **cấm** invent FE deep-link |
| FE | **cấm** invent prefix/slug · readonly `code` từ BE |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type COUNT_STATION |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-count-station.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=COUNT_STATION&…`

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
| Field map | full § Field map · parse dumpSpecs → S-ATTR / S-NAME · coord → lat/lng |
| gates.tz | n/a |
| gates.xco | **yes** |
| gates.shared | inherit |

BFF: `GET web-bff/api/v1/asset/road-assets/{id}`

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create · type `COUNT_STATION` · IdCode BE `THC-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. name_vi · COUNT attrs §4 · from/to_coordinate |
| Response | `RoadAssetDto` |
| Errors | 422 required type · status · route (name trống OK · kmFrom/kmTo không required) |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo`/`kmFrom` · `name` = tên VI |
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
| Purpose | LOOKUP_STATIC statuses · sources · units · **countAgencies** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + delta `countAgencies: RoadAssetLookupOption[]` |
| Form surfaces | S-META · S-ATTR · S-LOC |
| Decision | **GAP-COUNT-LOOKUP-01** P1 — options = dump distinct COUNT_STATION `agency_id` / seed labels (value=label dump string · cite dump `mst_counting_station`) · pattern `LoadDumpSpecLookupOptionsAsync` · **cấm** invent master SearchInput · **cấm** hardcode FE không cite dump |
| Migration | none (DTO fields only) |
| gates | n/a |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (`t30`) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract · count cite **377** |

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
| asset-type | LKP | SearchInput · lock `COUNT_STATION` |
| road-route | LKP | SearchInput |
| org-unit | LKP | SearchInput tree |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC agency | API-06 `countAgencies` | **delta** · dump distinct COUNT |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile COUNT hide type/kmTo/qty/unit · show ĐVQL/tên EN/số làn/tốc độ · hide-empty ON · 3 tầng tuyến tách | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Dropdown/Number/Text · merge dumpSpecs | Dev UI |
| GAP-SOTS-REUSE-01 | Reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy | Dev UI |
| GAP-COUNT-NAME-01 | `name` ← `name_vi` · trống OK · **cấm** IsWeak→đoạn | Dev BE/FE + import verify |
| GAP-COUNT-SPEC-01 | `dumpSpecLabels` đủ keys §4 COUNT (agency_id/name_en/no_of_lane/speed/coords) | Dev UI |
| GAP-COUNT-POINT-01 | ẩn kmTo form/grid · kmFrom không required · **cấm** ép `"0"` | Dev UI |
| GAP-COUNT-ROUTE-01 | optional Navigate alias `/so-ts-count-station` → `?type=COUNT_STATION` | Dev UI |
| GAP-COUNT-LOOKUP-01 | init-data delta `countAgencies` · FE Dropdown bind | Dev BE + FE |
| GAP-COUNT-COORD-01 | parse from/to_coordinate → lat/lng · dumpSpecs giữ · to_coordinate optional hide | Dev FE (+ cite) |
| GAP-COUNT-LEAVE-01 | LeaveConfirmModal · useAlert/Modal · **cấm** native confirm | Dev UI |
| GAP-COUNT-GIS-01 | **giữ `THC-`** · rebuild TX debt align · GIS slug **DEFER** · **cấm** invent FE | TL/docs + Dev BE |
| GAP-COUNT-LABEL-01 | lookups.ts COUNT_STATION · UI «Trạm đếm» · BE seed «Trạm đếm xe» giữ | Dev UI |
| GAP-COUNT-TILE-01 | tile t30 → COUNT_STATION · summary-by-type live · count **377** | cite only |
| GAP-COUNT-FLAT-01 | dumpSpecs P1 · flatten Schema_* **DEFER P2** | SA recorded |

---

## Task hints (TL pack · ids)

| ID | Title | Layer | Deps |
|----|-------|-------|------|
| T-COUNT-01 | Type-profile grid COUNT_STATION + hide-empty | FE | — |
| T-COUNT-02 | dumpSpecLabels §4 COUNT | FE | — |
| T-COUNT-03 | S-ATTR editable + name←name_vi + coord parse | FE | T-COUNT-02 |
| T-COUNT-04 | Point hide kmTo · validation · LeaveConfirmModal | FE | — |
| T-COUNT-05 | init-data LOOKUP delta countAgencies + FE Dropdown bind | BE+FE | — |
| T-COUNT-06 | Import/rebuild name IsWeak + prefix THC align (vs TX debt) | BE/Data | — |
| T-COUNT-07 | Alias route optional Navigate + lookups COUNT label | FE | — |
| T-COUNT-08 | DOMAIN-MAP optional row `so-ts-count-station`→Asset | Docs | — |

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
| **TL** | task pack · profile COUNT · GAP-COUNT-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · coord parse · LeaveConfirmModal · hide-empty · alias · `/agent-dev` |
| QA | e2e queued `/agent-qa*` only |

## Cấm (SA)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · Write MFE/native · e2e/build/start:std · Step 4b/migration
