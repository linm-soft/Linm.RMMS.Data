# SA — Solution discovery — so-ts-rail-cross (Sổ TS — Giao cắt đường sắt)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_08a1b760`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `RAIL_CROSS` |
| cluster | `crossing` · ô KCHT `t15` |
| dump | `tbl_railway_crossing` |
| status | `confirmed` |
| design_confirm | approve (`task_68fa43af`) |
| solution_confirm | **approve** (autoApprove=ON · `task_08a1b760`) |
| domain_map | **Asset** (`so-ts-rail-cross` → inherit parent `asset` · prefix `api/v1/asset`) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RAIL_CROSS` · alias board `/so-ts-rail-cross` |
| mfeStdUrl | `http://localhost:9301/so-ts-rail-cross` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-rail-cross-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-rail-cross-real-data.md` |
| design | `specs/so-ts-rail-cross/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprintPrior | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_08a1b760` |
| priorTask | `task_68fa43af` (design completed) |
| updatedAt | `2026-09-02T07:33:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · SSOT skill/workflow/rules · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy chốt) | Action |
|------|---------------------------|-------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-rail-cross` chưa liệt kê | Cite **Asset** · docs delta optional row `so-ts-rail-cross`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho toàn bộ attr RAIL_CROSS §4 · mirror `name_crossing` | **no Schema_*** flatten |
| Import name | rebuild `FindOfficialName` gồm `name_crossing` · sample «Giao đường sắt có rào chắn» | `name` ← `name_crossing` · trống OK · **cấm** IsWeak → đoạn tuyến — **GAP-RC-NAME-01** | guard rebuild + form |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu `traffic_control_method_id` · `shortest_waiting_time` | Label VN đủ header dump · form Dropdown/Number merge keys — **GAP-RC-SPEC-01** | FE labels + form write |
| LOOKUP protection/traffic | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data `railCrossProtectionTypes[]` · `railCrossTrafficControlMethods[]` (dump distinct / seed) — **GAP-RC-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer types) | Editable Dropdown/Number/Text đủ dump §4 · merge vào `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | 1 schema (+ profile peer types) | Hide `type`/`kmTo`/qty/unit · show rail-cross attrs | FE type-profile |
| Point `kmTo` | form hiện / bắt buộc với type ≠ KM_POST | **Ẩn** + không required khi `type=RAIL_CROSS` · `kmFrom` **không** required · S-LOC-POINT only | FE validation |
| IdCode Create | BE fallback `TS-` | Align prefix **`DS-`** (cite import set) · icon KCHT `NG` giữ — **GAP-RC-PREFIX-01** | BE Create |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| waiting time unit | chưa chốt trên UI | **phút** form + grid label (PO chốt) | FE label |
| TZ / XCO / SHARE | live list UTC range · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT.

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `RAIL_CROSS` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · `FindOfficialName` incl. `name_crossing` · Prefix `DS` · `IsWeakAssetName` |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-rail-cross.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=RAIL_CROSS` · alias board `/so-ts-rail-cross` (optional redirect) |
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
| Out of pack | flatten DB columns · rail-cross master SearchInput · Excel wizard · Kind F map · invent History API |

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
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | `/review-timezone-implement` | Parent API vẫn có optional `fromDate`/`toDate` + `CatalogUpdatedAtRange` — **không** mount trên pack RAIL_CROSS |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | `/implement-view-cross-company` | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 path |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | `/implement-shared-table` | tenant-only road asset · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-02T07:33:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=RAIL_CROSS` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=RAIL_CROSS`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readOnly/`<dl>` | view | API-02 GET |
| S-FORM-COPY | full-page | create | API-02 GET + API-03 POST (clear id · keep type) |
| S-ACT-DELETE | Confirm Modal | — | API-05 DELETE soft |
| S-HIST | `LinCatalogHistoryModal` | — | **cấm** invent History API |
| S-CFG | `LinCatalogUiSchemaEditorModal` | — | Integration ui-schema `road-assets` |
| S-ALIAS | navigate optional | — | `/so-ts-rail-cross` → `/so-ts?type=RAIL_CROSS` |
| Lookup type | SearchInput | filter (+ form lock) | Integration asset-types |
| Lookup route | SearchInput | filter + form | Integration road-routes |
| Lookup org | SearchInput tree | filter | Integration org-units |
| protection_type_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid label | API-06 init-data `railCrossProtectionTypes` |
| traffic_control_method_id | Dropdown LOOKUP_STATIC | form S-ATTR · grid | API-06 init-data `railCrossTrafficControlMethods` |
| shortest_waiting_time | Number | form S-ATTR · grid | dumpSpecs · đơn vị **phút** |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=RAIL_CROSS` + filters | — | page=1 on filter change · profile cột RAIL_CROSS |
| create | empty · type lock `RAIL_CROSS` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `DS-` · **không** required `kmTo`/`kmFrom` |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `RAIL_CROSS` · new IdCode |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `RAIL_CROSS` deep-link |
| `search` | SearchTextInput | mã · tên giao cắt · kiểu bảo vệ · tuyến · QR |
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
| List grid | name · route · routeNamed · routeSegment · kmFrom · protection_type_id · traffic_control_method_id · shortest_waiting_time · status/gps optional | transaction + dumpSpecs parse | `RoadAssetEntity` | hide type/kmTo/qty/unit |
| Form S-* | § Field map | transaction + dumpSpecs | scalars + DumpSpecs text | full 5 cột |
| History | shared modal | — | — | stub OK |

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `RAIL_CROSS` |
| route | SearchInput `road-route` | `?route=` / body `route` · **required** form |
| routeNamed | SearchInput `road-route` (form) / Text (grid) | body `routeNamed` · dump `long_route_name` |
| routeSegment | SearchInput `road-route` (form) / Text (grid) | body `routeSegment` · dump `name_of_route_asset` · **không** làm `name` |
| kmFrom | Text chainage | `?kmFrom=` / body `kmFrom` · **không** required · **cấm** ép `"0"` |
| kmTo | Text filter only | `?kmTo=` filter · **ẩn** form/grid RAIL_CROSS |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `DS-` |
| name / name_crossing | Text | body `name` = `name_crossing` · mirror dumpSpecs.key · trống OK |
| status | Dropdown | init-data `statuses` · body `status` |
| source | Dropdown | init-data `sources` · body `source` |
| protection_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `railCrossProtectionTypes` |
| traffic_control_method_id | Dropdown LOOKUP_STATIC | **dumpSpecs** key · options init-data `railCrossTrafficControlMethods` |
| shortest_waiting_time | Number | **dumpSpecs** key · đơn vị **phút** |
| lat / lng | Number | body `lat`/`lng` · dump `from_coordinatey/x` |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity / unitCode | — | **ẩn** RAIL_CROSS · giữ DTO parent |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` ← **name_crossing** |
| type | Type | `type` = `RAIL_CROSS` |
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
| name_crossing | (mirror) | `dumpSpecs.name_crossing` + drives `name` |
| protection_type_id | via DumpSpecs | `dumpSpecs.protection_type_id` |
| traffic_control_method_id | via DumpSpecs | `dumpSpecs.traffic_control_method_id` |
| shortest_waiting_time | via DumpSpecs | `dumpSpecs.shortest_waiting_time` |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `RailCrossJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten rail-cross attrs | **DEFER P2** — **không** Schema_* this turn (Design/PO OUT · dumpSpecs P1 · **GAP-RC-FLAT-01**) |
| dumpSpecs write | Form S-ATTR (+ name_crossing mirror) merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta `railCrossProtectionTypes[]` · `railCrossTrafficControlMethods[]` trên init-data · UI schema `road-assets` type-profile hide-empty |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV **name**=`name_crossing` · giữ toàn bộ attr RAIL_CROSS trong dumpSpecs · km trống khi null |
| Default đơn vị | II.1/QL.1 khi reopen import (parent) |
| IdCode Create | BE align prefix **`DS-`** (GAP-RC-PREFIX-01) · GIS icon `NG` giữ |

### Import IsWeak / name (GAP-RC-NAME-01)

| Cite | Decision |
|------|----------|
| `RebuildGovVn.cs` `FindOfficialName` | gồm `name_crossing` — **MUST** ưu tiên khi non-junk cho RAIL_CROSS |
| `ResolveTypeAssetName` / `ResolveAssetName` | Dev verify CSV `name` = `name_crossing` (cite sample `DS-railway_crossing_593984` → «Giao đường sắt có rào chăn») |
| `IsWeakAssetName` | chỉ QL./CT. — **cấm** classify tên giao cắt weak · **cấm** fallback `name_of_route_asset` khi `name_crossing` hợp lệ (trống OK — **không** ép đoạn) |
| `RoadAssetCatalogHandler` | đọc CSV `name` đã đúng · dumpSpecs giữ `name_crossing` + attrs §4 |
| Form | S-NAME bind `name` ← `name_crossing` · sync mirror dumpSpecs |

---

## 3. API catalog

### API-01: GET `/api/v1/asset/road-assets`

| | |
|--|--|
| Purpose | Paged list · filter type RAIL_CROSS |
| Permission | `asset.road-assets.read` |
| Tenant | X-Company-Id · CompanyCode |
| Request | query: `type` · `search` · `route` · `kmFrom` · `kmTo` · `orgUnit` · (`fromDate`/`toDate` parent optional **không** UI pack) · `page` · `pageSize` |
| Response | `RoadAssetPagedResult` · items `RoadAssetDto` (+ dumpSpecs) |
| Errors | toast · empty grid OK |
| Form surfaces | S-LIST |
| Field map | grid ← DTO + parse dumpSpecs keys |
| Context | `docs/context/features/so-ts-rail-cross.md` |
| Demo | asset-demo UI ref only · **cấm** SSOT data |
| data-import | N/A runtime |
| Migration | none |
| gates.tz | n/a (pack UI) |
| gates.xco | n/a |
| gates.shared | inherit tenant |

BFF: `GET web-bff/api/v1/asset/road-assets?type=RAIL_CROSS&…`

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
| Purpose | Create · type `RAIL_CROSS` · IdCode BE `DS-` |
| Permission | `asset.road-assets.create` |
| Tenant | current company |
| Request | `CreateRoadAssetRequest` · `DumpSpecs` JSON string incl. name_crossing · rail-cross attrs §4 |
| Response | `RoadAssetDto` |
| Errors | 422 required type · status · route (name trống OK · kmFrom/kmTo không required) |
| Form surfaces | create · copy |
| Notes | **không** required `kmTo`/`kmFrom` · `name` = tên giao cắt |
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
| Purpose | LOOKUP_STATIC statuses · sources · units · materials (peer) · **railCrossProtectionTypes** · **railCrossTrafficControlMethods** (delta) |
| Permission | read |
| Request | — |
| Response | `RoadAssetInitDataDto` + **`railCrossProtectionTypes: RoadAssetLookupOption[]`** + **`railCrossTrafficControlMethods: RoadAssetLookupOption[]`** |
| Form surfaces | S-META · S-ATTR |
| Decision | **GAP-RC-LOOKUP-01** P1 — options = dump distinct / seed labels (value=label dump string · cite dump `tbl_railway_crossing`) · **cấm** invent rail-cross master SearchInput · **cấm** hardcode FE không cite dump |
| Migration | none (DTO fields only) |
| gates | n/a |

### API-07: GET `/api/v1/asset/road-assets/summary-by-type` (peer tile)

| | |
|--|--|
| Purpose | KCHT tile counts (`t15`) |
| Form surfaces | peer dashboard · **out of write pack** except cite |
| Note | giữ live · không đổi contract · gov-vn count **144** |

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
| asset-type | LKP | SearchInput · lock `RAIL_CROSS` |
| road-route | LKP | SearchInput |
| org-unit | LKP | SearchInput tree |
| LOOKUP_STATIC status/source/units | API-06 | keep init-data |
| LOOKUP_STATIC protection_type_id | API-06 `railCrossProtectionTypes` | **delta** · dump distinct |
| LOOKUP_STATIC traffic_control_method_id | API-06 `railCrossTrafficControlMethods` | **delta** · dump distinct |
| ui-schema `road-assets` | Integration | Zone F · type-profile hide |

---

## Gaps chốt (SA → TL)

| ID | SA decision | Owner |
|----|-------------|-------|
| GAP-SOTS-COL-01 | Type-profile RAIL_CROSS hide type/kmTo/qty/unit · show dump attrs | Dev UI |
| GAP-SOTS-FORM-01 | S-ATTR editable Dropdown/Number/Text · merge dumpSpecs | Dev UI |
| GAP-SOTS-REUSE-01 | Mount S-* trên `AssetFormPage` — **cấm** fork | Dev UI |
| GAP-RC-NAME-01 | `name`←`name_crossing` · trống OK · guard IsWeak + rebuild | Dev BE import + rebuild + form |
| GAP-RC-SPEC-01 | Label VN đủ key rail-cross · giữ attrs trong dumpSpecs · km trống khi null | Dev FE labels + form + import |
| GAP-RC-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · không ép `"0"` · không mount S-LOC-RANGE | Dev UI |
| GAP-RC-LOOKUP-01 | Dropdown LOOKUP_STATIC · init-data `railCrossProtectionTypes[]` + `railCrossTrafficControlMethods[]` · dumpSpecs write | Dev BE init + UI |
| GAP-RC-PREFIX-01 | Create IdCode prefix **`DS-`** · icon KCHT `NG` giữ | Dev BE |
| GAP-RC-LEAVE-01 | LeaveConfirmModal + useAlert/Modal | Dev UI |
| GAP-RC-ROUTE-01 | Live URL `?type=RAIL_CROSS` · alias board optional redirect | Dev UI optional |
| GAP-SOTS-API-DOC | Cite `api/v1/asset/road-assets` only · DOMAIN-MAP Asset | docs |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN | Dev UI |
| GAP-RC-FLAT-01 | Flatten DB columns **DEFER P2** | — |
| GAP-SOTS-AUTH-01 | RequirePermission attr TODO align Auth codes | BE later |

---

## Out of pack

Flatten Schema_* · rail-cross master SearchInput · Excel import wizard UI · Kind F map canvas · invent History path · invent `api/v1/so-ts/*` · ERP fork · yarn build/e2e/start:std ở SA · Step 4b/migration.

---

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent tự confirm gates TZ/XCO/SHARE (`task_08a1b760`).  
Handoff → **Team-lead** pending (roles sau = pending đến lượt). **Cấm** start TL/Dev/QA trong task SA này (**GAP-PKT-ROLE-01**). **Cấm** Write MFE/native · e2e · start:std · Step 4b.

## Handoff → TL

| Field | Value |
|-------|-------|
| Kind / pattern | B A–D+F+H + Full page `data-form-cols="5"` · type `RAIL_CROSS` · cluster `crossing` · tile `t15` |
| FormMode↔API | § FormType pack |
| Filter keys | type · search · route · kmFrom · kmTo · orgUnit · page · pageSize |
| API list | API-01…07 · LKP Integration · init railCrossProtectionTypes + railCrossTrafficControlMethods delta |
| Entity | `RoadAssetEntity` flat + DumpSpecs · **cấm** parent line JSON · **no** flatten P1 |
| Gates | tz_na · xco_get_only · share_tenant |
| Delta Dev | GAP-SOTS-* · GAP-RC-* (name/spec/point/lookup/leave/route/prefix) · init LOOKUP |
| Migration | **none** this SA turn |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html` |
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
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-02T07:33:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c |
| headerFingerprintPrior | sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.29.03 |
| taskId | task_08a1b760 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_08a1b760 contentHashPriorDataAnaly=sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c -->
