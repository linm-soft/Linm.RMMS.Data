# SA — Solution discovery — so-ts-traffic-sign (Sổ TS — Biển báo)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_49a79beb`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
| title | Sổ TS — Biển báo |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `TRAFFIC_SIGN` |
| cluster | `atgt_point` · ô KCHT `t32` |
| dump | `tbl_road_sign` |
| status | `confirmed` |
| design_confirm | approve (`task_6bf578d2`) |
| solution_confirm | **approve** (autoApprove=ON · `task_49a79beb`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-traffic-sign`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=TRAFFIC_SIGN` · alias board `/so-ts-traffic-sign` (optional Navigate) |
| mfeStdUrl | `http://localhost:9301/so-ts-traffic-sign` |
| peerStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-traffic-sign-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-traffic-sign-real-data.md` |
| design | `specs/so-ts-traffic-sign/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprintPrior | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_49a79beb` |
| priorTask | `task_6bf578d2` (design completed) |
| updatedAt | `2026-09-01T13:50:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live) | New (Design+analy+PO chốt) | Action |
|------|----------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-traffic-sign` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-traffic-sign`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attrs biển · **không** Schema_* | **no Schema_*** flatten P1 |
| Import / dump | `tbl_road_sign` · CSV live · prefix `BB-` · GIS `bien-bao` | Giữ đủ dump keys §B · **cấm** PoleCount/PoleHeightM/SignSize | import + labels |
| Name | SearchInput QCVN → `name` | primary `name` ← `sign_code_number` · content `road_sign_content` dumpSpecs — **GAP-SIGN-NAME-01** | form + import |
| dumpSpecs attrs | CSV hay bỏ cột biển · S-ATTR `<dl>` readonly | Editable width/height/area/material/shape/location/ngaylapdat · merge dumpSpecs — **GAP-SIGN-SPEC-01** | FE + dumpSpecs merge |
| material / shape | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `materialsSign[]` / `shapesSign[]` — **GAP-SIGN-MAT-01** · **GAP-SIGN-SHAPE-01** | delta init-data |
| Grid profile | 1 schema mọi type | Hide `type`/`kmTo`/qty/unit · show dump biển · primary=sign_code_number | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc | **Ẩn** + không required khi `TRAFFIC_SIGN` — **GAP-SIGN-POINT-01** | FE validation |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal — **GAP-SIGN-LEAVE-01** | FE only |
| Alias board | live filter only | `/so-ts-traffic-sign` board-only · optional Navigate — **GAP-SIGN-ROUTE-01** | FE optional |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-SIGN-FLAT-01** | no migration SA |
| Sign master | Integration traffic-sign-types | SearchInput QCVN · **cấm** free-text SSOT | keep LKP |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `bien-bao` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `TRAFFIC_SIGN` · dump `tbl_road_sign` |
| Sign master | `TrafficSignTypeService` · `TrafficSignTypeEntity` · Integration |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `ResolveTypeAssetName(TRAFFIC_SIGN)` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` · `SIGN_TYPE_LOOKUP_CONFIG` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-traffic-sign.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=TRAFFIC_SIGN` · alias board `/so-ts-traffic-sign` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · `traffic-sign-types` · ui-schema `road-assets` |

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
| Out of pack | flatten DB columns · materials/shapes master SearchInput · Excel wizard · Kind F map · invent History API |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** PoleCount |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date range (chỉ `ngaylapdat` dumpSpecs + `updatedAt` readonly) | `/review-timezone-implement` | Parent API optional `fromDate`/`toDate` — **không** mount trên pack TRAFFIC_SIGN |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T13:50:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=TRAFFIC_SIGN` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=TRAFFIC_SIGN`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| Lookup sign | SearchInput | form S-NAME | Integration traffic-sign-types |
| material / shape | Dropdown LOOKUP_STATIC | form S-ATTR · grid label | API-06 init-data delta |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=TRAFFIC_SIGN` + filters | — | page=1 on filter change · profile cột TRAFFIC_SIGN |
| create | empty · type lock `TRAFFIC_SIGN` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `BB-` · **không** required `kmTo` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `TRAFFIC_SIGN` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `TRAFFIC_SIGN` deep-link |
| `search` | SearchTextInput | mã · số hiệu · nội dung · tuyến · QR |
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
| List grid | name(sign_code) · route* · kmFrom · road_sign_content · width/height/area · material/shape · location · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `TRAFFIC_SIGN` |
| route | SearchInput `road-route` | `?route=` / body `route` |
| routeNamed | SearchInput `road-route` | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid TRAFFIC_SIGN |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode prefix `BB-` |
| name / sign_code_number | SearchInput `traffic-sign-type` | body `name` ← `sign_code_number` · mirror dumpSpecs |
| road_sign_content | Text | **dumpSpecs** key · S-NAME/S-ATTR |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| width / height / area | Number | **dumpSpecs** keys · editable S-ATTR |
| material_sign_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · init-data `materialsSign` |
| shape_sign_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · init-data `shapesSign` |
| location_id | Dropdown/Text | **dumpSpecs** · LOOKUP_STATIC / text |
| ngaylapdat | Date | **dumpSpecs** key |
| lat / lng | Number | body `lat`/`lng` |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** TRAFFIC_SIGN · giữ DTO parent |
| updatedAt | Date readonly | audit UTC display |

**Cấm bind:** `PoleCount` · `PoleHeightM` · `SignSize` catalog lệch dump.

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **sign_code_number** |
| type | Type | `type` = `TRAFFIC_SIGN` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` |
| kmTo | KmTo | `km_to` (null OK · form ẩn) |
| status | Status | `status` |
| source | Source | `source` |
| lat / lng | Lat / Lng | `lat` / `lng` |
| qr | Qr | `qr` |
| valueVnd | ValueVnd | `value_vnd` |
| note | Note | `note` |
| quantity / unitCode | Quantity / UnitCode | giữ · UI ẩn |
| sign_code_number | (mirror) | `dumpSpecs.sign_code_number` + drives `name` |
| road_sign_content | via DumpSpecs | `dumpSpecs.road_sign_content` |
| width / height / area | via DumpSpecs | `dumpSpecs.width|height|area` |
| material_sign_id | via DumpSpecs | `dumpSpecs.material_sign_id` |
| shape_sign_id | via DumpSpecs | `dumpSpecs.shape_sign_id` |
| location_id | via DumpSpecs | `dumpSpecs.location_id` |
| ngaylapdat | via DumpSpecs | `dumpSpecs.ngaylapdat` |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `MaterialsJson` / Pole* columns.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten dump biển attrs | **DEFER P2** — **không** Schema_* this turn (PO/Design dumpSpecs P1 · SA chốt flat defer) |
| dumpSpecs write | Form S-ATTR/S-NAME merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `materialsSign[]` · `shapesSign[]` trên init-data · UI schema `road-assets` type-profile hide-empty |
| data-import | `RoadAssetCatalogHandler` · dump `tbl_road_sign` · giữ đủ keys §B · **cấm** PoleCount · `name`=`sign_code_number` |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |
| Step 4b | **cấm** ở role SA |

### Import / name (GAP-SIGN-NAME-01)

| Cite | Decision |
|------|----------|
| Dump `sign_code_number` | **MUST** drive scalar `name` + mirror dumpSpecs |
| `road_sign_content` | dumpSpecs · form Text · CSV `name` legacy ≠ list primary |
| `name_of_route_asset` | **chỉ** `routeSegment` · **cấm** làm primary name |
| Form | S-NAME SearchInput traffic-sign-type → `name` · sync dumpSpecs.sign_code_number |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type TRAFFIC_SIGN |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-traffic-sign.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=TRAFFIC_SIGN&…`

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
| Field map | full § Field map · parse dumpSpecs → S-ATTR/S-NAME |
| gates.xco | **yes** |

BFF: `GET web-bff/api/v1/asset/road-assets/{id}`

### API-03: POST `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Create · type `TRAFFIC_SIGN` · IdCode BE `BB-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. biển attrs |
| Response | `RoadAssetDto` |
| Errors | 422 required name · type · status · route · kmFrom |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo` · `name` = số hiệu QCVN |
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
| Purpose | LOOKUP_STATIC statuses · sources · units · **materialsSign** · **shapesSign** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + **`materialsSign`** · **`shapesSign`** (`RoadAssetLookupOption[]`) |
| Form surfaces | S-META · S-ATTR |
| Decision | **GAP-SIGN-MAT-01** / **GAP-SIGN-SHAPE-01** P1 — options = dump distinct / seed labels · **cấm** invent materials/shapes master SearchInput · **cấm** hardcode không cite dump |
| Migration | none (DTO field only) |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (t32) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract |

### API-LKP (Integration · **không** Asset)

| catalogKind | API (cite live Integration) | Surface |
|-------------|------------------------------|---------|
| asset-type | search asset-types | filter type · form lock |
| road-route | `GET …/integration/road-routes/search` | filter + form route* |
| org-unit | `GET …/integration/org-units/search` | filter org tree |
| traffic-sign-type | `GET …/integration/traffic-sign-types/search` | S-NAME QCVN |
| ui-schema | Integration catalogs `road-assets` | Zone F FULL |

**Cấm** free-text thay SearchInput master đã chốt.

### Catalog / lookup summary

| catalogKind | API | P1 decision |
|-------------|-----|-------------|
| asset-type | LKP | SearchInput · lock `TRAFFIC_SIGN` |
| road-route | LKP | SearchInput · 3 tầng · cấm gộp |
| org-unit | LKP | SearchInput tree |
| traffic-sign-type | LKP | SearchInput QCVN |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC material/shape | API-06 `materialsSign`/`shapesSign` | **delta** · dump distinct |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile TRAFFIC_SIGN hide type/kmTo/qty/unit · show dump biển | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Number + Dropdown · merge dumpSpecs | Dev UI |
| GAP-SOTS-REUSE-01 | Mount S-* trên `AssetFormPage` — **cấm** fork · **cấm** tab legacy | Dev UI |
| GAP-SIGN-NAME-01 | `name`←`sign_code_number` · content=`road_sign_content` dumpSpecs | Dev UI + import |
| GAP-SIGN-SPEC-01 | Giữ width/height/area/location/ngaylapdat trong dumpSpecs · **cấm** PoleCount | Dev import + form |
| GAP-SIGN-MAT-01 | Dropdown LOOKUP_STATIC · init-data `materialsSign[]` · dumpSpecs write | Dev BE init + UI |
| GAP-SIGN-SHAPE-01 | Dropdown LOOKUP_STATIC · init-data `shapesSign[]` · dumpSpecs write | Dev BE init + UI |
| GAP-SIGN-POINT-01 | Ẩn + không required `kmTo` khi TRAFFIC_SIGN | Dev UI |
| GAP-SIGN-LEAVE-01 | LeaveConfirmModal + useAlert/Modal | Dev UI |
| GAP-SIGN-ROUTE-01 | Live URL `?type=TRAFFIC_SIGN` · alias board optional Navigate | Dev UI optional |
| GAP-SOTS-API-DOC | Cite `api/v1/asset/road-assets` only · DOMAIN-MAP Asset · optional row slug | docs |
| GAP-SIGN-FLAT-01 | Flatten DB columns **DEFER P2** | — |
| GAP-SIGN-AUTH-01 | RequirePermission attr TODO align Auth codes | BE later |

---

## Out of pack

Flatten Schema_* · materials/shapes master SearchInput · Excel import wizard UI · Kind F map canvas · invent History path · invent `api/v1/so-ts/*` · ERP fork · PoleCount · yarn build/e2e/start:std ở SA · Step 4b.

---

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm gates TZ/XCO/SHARE (`task_49a79beb`).  
Handoff → **Team-lead** pending (roles sau = pending đến lượt). **Cấm** start TL/Dev/QA trong task SA này (**GAP-PKT-ROLE-01**). **Cấm** Write MFE/native · e2e · start:std · Step 4b.

## Handoff → TL

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F+H + Full page `data-form-cols="5"` · type `TRAFFIC_SIGN` |
| FormMode↔API | § FormType pack |
| Filter keys | type · search · route · kmFrom · kmTo · orgUnit · page · pageSize |
| API list | API-01…07 · LKP Integration (incl. traffic-sign-types) · init materialsSign/shapesSign delta |
| Entity | `RoadAssetEntity` flat + DumpSpecs · **cấm** parent line JSON · **no** flatten P1 |
| Gates | tz_na · xco_get_only · share_tenant |
| Delta Dev | GAP-SOTS-* · GAP-SIGN-* (name/spec/mat/shape/point/leave/route) · init LOOKUP |
| Migration | **none** this SA turn |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html` |
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
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | 2026-09-01T13:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88 |
| headerFingerprintPrior | sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562 |
| orchestratorSkillVersion | 2026.09.01.02 |
| orchestratorWorkflowVersion | 2026.09.01.02 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.01 |
| designSkillVersion | 2026.08.29.03 |
| taskId | task_49a79beb |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked taskId=task_49a79beb contentHashPriorDataAnaly=sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88 -->
