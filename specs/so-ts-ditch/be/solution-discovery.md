# SA — Solution discovery — so-ts-ditch (Sổ TS — Cống / rãnh dọc)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_8f67882d`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-ditch` |
| title | Sổ TS — Cống / rãnh dọc |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F+H + **full-page** form 5 cột) |
| typeCode | `DITCH` |
| cluster | `linear_protect` · ô KCHT `t10` |
| dump | `tbl_longitudinal` |
| status | `confirmed` |
| design_confirm | approve (`task_5b77b576`) |
| solution_confirm | **approve** (autoApprove=ON · `task_8f67882d`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-ditch`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=DITCH` · alias board `/so-ts-ditch` |
| mfeStdUrl | `http://localhost:9301/so-ts-ditch` |
| peerStdUrl | `http://localhost:9301/so-ts?type=DITCH` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-ditch-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-ditch-real-data.md` |
| design | `specs/so-ts-ditch/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprintPrior | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_8f67882d` |
| priorTask | `task_5b77b576` (design completed) |
| updatedAt | `2026-09-01T10:35:00.000Z` |
| versionGate | `rechecked` (`recheck_new` · stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-ditch` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-ditch`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr DITCH · 4 XY + loại/hình dạng/KT trong bag | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `cong-doc` · DefaultCodePrefix live `TS-` | create/import prefix **`CD-`** · GIS short **`CD`** · type seed `DITCH` · dump `tbl_longitudinal` · unit `THOAT_NUOC` — **GAP-DITCH-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key cống dọc | Label VN đủ §B · form Input/Select merge keys | FE labels + form write |
| LOOKUP ditch/shape/structure/work/materials/location | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta arrays — **GAP-DITCH-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs (trừ peer) | Editable Dropdown/Number/Text đủ dump · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON: loại rãnh · 3 tầng · kmFrom/kmTo · hình dạng · dài · cao · hide-empty rộng/KT/hố ga/địa danh · ẩn type/ảnh · primary = `ditch_type_id` | FE type-profile |
| Range | S-LOC-RANGE peer | km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT — **GAP-DITCH-RANGE-01** | FE validation |
| Name | optional / weak risk | `name` optional · list primary = `ditch_type_id` · **cấm** IsWeak → đoạn — **GAP-DITCH-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-ditch` board-only · optional Navigate — **GAP-DITCH-ROUTE-01** | FE optional |
| Peer CULVERT_L | tile nav | page filter **DITCH only** · CULVERT_L **DEFER** — **GAP-DITCH-PEER-01** | FE filter |
| Flatten 4 XY / attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-DITCH-FLAT-01** | no migration SA |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route / org-unit · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `cong-doc` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `DITCH` · dump `tbl_longitudinal` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `CD` · **cấm** IsWeak ép đoạn |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-ditch.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=DITCH` · alias board `/so-ts-ditch` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data ditch/shape/… |
| GIS | `cong-doc` ↔ `DITCH` · icon short `CD` (= IdCode prefix family) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `cong-doc` · peer `CULVERT_L` UI |

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
| Form reuse | S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab legacy |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | tenant-only · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-01T10:35:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F+H | list | API-01 list `?type=DITCH` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=DITCH`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `CD-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-ditch` → live filter |

### FormMode ↔ API (REQUIRED)

| FormMode | Load | Save / action | Notes |
|----------|------|---------------|-------|
| list | GET list `?type=DITCH` + filters | — | page=1 on filter change · profile cột DITCH |
| create | empty · type lock `DITCH` · init-data | POST body + dumpSpecs merge | IdCode BE prefix `CD-` · S-LOC-RANGE km* required |
| edit | GET `/{id}` | PUT `/{id}` · merge dumpSpecs | leave-confirm dirty |
| view | GET `/{id}` | — | readOnly · **không** disabled xám |
| copy | GET `/{id}` → clear id/code | POST | keep `DITCH` · new IdCode `CD-` |
| delete | — | DELETE soft | Modal confirm · reload list |

### List filter query keys (`LinErpListFilterBar` · **cấm** HOW)

| Query key | UI control | Source |
|-----------|------------|--------|
| `type` | SearchInput asset-type (prefill/ẩn) | **required** `DITCH` deep-link |
| `search` | SearchTextInput | mã · tên · tuyến · QR |
| `route` | SearchInput road-route | master |
| `kmFrom` | Text chainage | filter range start |
| `kmTo` | Text chainage | filter range end |
| `orgUnit` | SearchInput tree org-unit | QS |
| `page` / `pageSize` | pagination | 50/100/200/500 |

**Không mount** trên Zone B pack này: `fromDate` · `toDate`.

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=DITCH&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=DITCH` · IdCode prefix **`CD-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** LOOKUP arrays dưới |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t10` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### controlHint → API shape (cite Design + DA · **cấm** đoán)

| uiField | Control (Design chốt) | SA API shape |
|---------|----------------------|--------------|
| search | SearchTextInput | `?search=` |
| type | SearchInput `asset-type` | `?type=` / body `type` · lock `DITCH` |
| route / routeNamed / routeSegment | SearchInput `road-route` | body scalars · dump `road_name` / `long_route_name` / `name_of_route_asset` |
| kmFrom / kmTo | Text | `?kmFrom=`/`?kmTo=` · body scalars · S-LOC-RANGE · **cấm** ép `"0"` |
| orgUnit | SearchInput tree | `?orgUnit=` |
| code | Text readonly | BE IdCode · prefix `CD-` |
| name | Text optional | body `name` · **không** required · **cấm** IsWeak→đoạn |
| status / source | Dropdown | init-data · body scalars |
| unitCode | Dropdown | init-data · seed `THOAT_NUOC` · hide-empty |
| ditch_type_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · init `ditchTypes` · grid primary |
| culvert_shape_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · init `culvertShapes` · grid ON |
| actual_length / height_culvert | Number | **dumpSpecs** · grid ON |
| width_bottom / width_top | Number | **dumpSpecs** · hide-empty |
| structural_type_id / work_type_id / materials_work_id | Dropdown LOOKUP_STATIC | **dumpSpecs** · init arrays |
| number / number_work_within_section | Number | **dumpSpecs** |
| length_manhole / width_manhole / height_manhole | Number | **dumpSpecs** · hide-empty |
| location_id | Dropdown | **dumpSpecs** · init `vitriOptions` · optional |
| province*/commune* | Text | **dumpSpecs** · hide-empty · keys `tinhthanhpho`/`xaphuong`/`tinhthanhpho_cuoi`/`xaphuong_cuoi` |
| latFrom / lngFrom / latTo / lngTo | Number | **dumpSpecs** RANGE · from/to_coordinatey/x · **cấm** ép `"0"` |
| lat / lng | Number | body scalars · S-GPS |
| qr / valueVnd / note | Text / Money / TextArea | scalars |
| quantity | — | hide-empty / parent DTO |
| updatedAt | Date readonly | audit UTC display |

### Field map (ui → dto → db / dumpSpecs)

| uiField | dtoField | dbColumn / bag |
|---------|----------|----------------|
| code | Code | `code` |
| name | Name | `name` (optional) |
| type | Type | `type` = `DITCH` |
| route | Route | `route` |
| routeNamed | RouteNamed | `route_named` |
| routeSegment | RouteSegment | `route_segment` |
| kmFrom | KmFrom | `km_from` |
| kmTo | KmTo | `km_to` |
| status | Status | `status` |
| source | Source | `source` |
| unitCode | UnitCode | `unit_code` · seed `THOAT_NUOC` |
| lat / lng | Lat / Lng | `lat` / `lng` |
| qr | Qr | `qr` |
| valueVnd | ValueVnd | `value_vnd` |
| note | Note | `note` |
| ditch_type_id | via DumpSpecs | `dumpSpecs.ditch_type_id` |
| culvert_shape_id | via DumpSpecs | `dumpSpecs.culvert_shape_id` |
| actual_length | via DumpSpecs | `dumpSpecs.actual_length` |
| height_culvert | via DumpSpecs | `dumpSpecs.height_culvert` |
| width_bottom / width_top | via DumpSpecs | `dumpSpecs.width_bottom` / `width_top` |
| structural_type_id | via DumpSpecs | `dumpSpecs.structural_type_id` |
| work_type_id | via DumpSpecs | `dumpSpecs.work_type_id` |
| materials_work_id | via DumpSpecs | `dumpSpecs.materials_work_id` |
| number | via DumpSpecs | `dumpSpecs.number` |
| number_work_within_section | via DumpSpecs | `dumpSpecs.number_work_within_section` |
| *_manhole | via DumpSpecs | `dumpSpecs.length_manhole` / `width_manhole` / `height_manhole` |
| location_id | via DumpSpecs | `dumpSpecs.location_id` |
| province*/commune* | via DumpSpecs | `tinhthanhpho` / `xaphuong` / `*_cuoi` |
| latFrom / lngFrom / latTo / lngTo | via DumpSpecs | from/to_coordinate · **không** promote scalar GPS |
| dumpSpecs | DumpSpecs | `dump_specs` text JSON |
| isActive | IsActive | soft-delete |
| updatedAt | UpdatedAt | audit UTC |

**Cấm** parent `AttrsJson` ngoài cột `DumpSpecs` đã có · **cấm** invent `DitchJson` / child table P1.

### Persist / migration / dumpSpecs vs flatten

| Item | Decision |
|------|----------|
| Parent entity | `RoadAssetEntity` · `rmms_road_assets` · **đã có** |
| Child entity | **none** P1 |
| Flatten ditch attrs / 4 XY | **DEFER P2** — **không** Schema_* this turn · **GAP-DITCH-FLAT-01** |
| dumpSpecs write | Form S-ATTR merge keys vào JSON string trên POST/PUT · list grid parse cùng keys |
| New Schema_* | **none** |
| Seed / init | delta LOOKUP arrays · UI schema `road-assets` type-profile hide-empty · unit `THOAT_NUOC` |
| data-import | `RoadAssetCatalogHandler` · rebuild CSV prefix `CD` · giữ attr DITCH trong dumpSpecs · km/XY trống khi null |
| DefaultCodePrefix | type `DITCH` → **`CD-`** |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid primary = `ditch_type_id` (không bắt buộc `name`) |
| Name | optional Text · trống OK — **GAP-DITCH-NAME-01** |
| Weak name | **cấm** `IsWeakAssetName` → ép `routeSegment` / đoạn |
| IdCode create/import | prefix **`CD-`** (GIS short `CD`) — **GAP-DITCH-PREFIX-01** |
| DefaultCodePrefix live | generic `TS-` → đổi theo type `DITCH` |

### LOOKUP init-data delta (P1) — **GAP-DITCH-LOOKUP-01**

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `ditchTypes` | distinct `ditch_type_id` | Dropdown * LOOKUP_STATIC · grid primary |
| `culvertShapes` | distinct `culvert_shape_id` | Dropdown · grid ON |
| `structuralTypes` | distinct `structural_type_id` | Dropdown |
| `workTypes` | distinct `work_type_id` | Dropdown |
| `materialsWorks` | distinct `materials_work_id` | Dropdown |
| `vitriOptions` | init existing / `location_id` | Dropdown optional |

**Cấm** hardcode FE không cite dump/init · **cấm** SearchInput master P1 cho các LOOKUP trên.

### 4 XY RANGE (dumpSpecs · P1) — **GAP-DITCH-RANGE-01**

| Keys (dump) | Control | Rule |
|-------------|---------|------|
| `from_coordinatey/x` → latFrom/lngFrom · `to_coordinatey/x` → latTo/lngTo | Number | dumpSpecs · **cấm** ép `"0"` · **không** promote scalar GPS · flatten **DEFER** |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-DITCH-01 | FE profile | grid ON/hide · primary `ditch_type_id` · pagination 50/100/200/500 |
| T-DITCH-02 | FE form S-ATTR | editable dumpSpecs · labels VN · merge on save |
| T-DITCH-03 | FE Range | S-LOC-RANGE km* + 4 XY · cấm `"0"` · **không** S-LOC-POINT |
| T-DITCH-04 | FE name | optional · cấm IsWeak → đoạn |
| T-DITCH-05 | BE prefix | `DefaultCodePrefix` / create `CD-` · import GIS `cong-doc` align |
| T-DITCH-06 | BE LOOKUP | init-data `ditchTypes` · `culvertShapes` · structure/work/materials · vitri |
| T-DITCH-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-DITCH-08 | FE alias | optional `/so-ts-ditch` Navigate |
| T-DITCH-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-DITCH-10 | Pack | type seed · dumpSpecLabels · unit `THOAT_NUOC` · tile t10 · **cấm** gộp CULVERT_L |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-01T10:35:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-DITCH-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-ditch.md` · T-DITCH-* |
| Dev | profile · S-ATTR · CD- · LOOKUP · Leave · Range |
| QA | e2e queued `/agent-qa*` only |
