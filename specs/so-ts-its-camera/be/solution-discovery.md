# SA — Solution discovery — so-ts-its-camera (Sổ TS — Hệ thống ITS)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_00134ed9`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · parent `*Json` flatten invent · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| title | Sổ TS — Hệ thống ITS |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** catalog A–D+F + **full-page** form 5 cột) |
| typeCode | `ITS_CAMERA` |
| cluster | `ops` · ô KCHT `t19` |
| dump | `tbl_its` |
| status | `confirmed` |
| design_confirm | approve (`task_33ab0873`) |
| solution_confirm | **approve** (autoApprove=ON · `task_00134ed9`) |
| domain_map | **Asset** (inherit parent `asset` · prefix `api/v1/asset` · optional docs row `so-ts-its-camera`→Asset) |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` (PO approve) |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` (PO/Design approve) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=ITS_CAMERA` · alias board `/so-ts-its-camera` |
| mfeStdUrl | `http://localhost:9301/so-ts-its-camera` |
| peerStdUrl | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/road-assets` |
| domain | **Asset** |
| controlHint | `specs/_data-analy/features/so-ts-its-camera-control-hint.md` |
| realData | `specs/_data-analy/features/so-ts-its-camera-real-data.md` |
| design | `specs/so-ts-its-camera/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprintPrior | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_00134ed9` |
| priorTask | `task_33ab0873` (design completed) |
| importCount | **9** rows `type=ITS_CAMERA` · prefix `IT-` |
| updatedAt | `2026-09-02T04:00:00.000Z` |
| versionGate | `rechecked` (stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live 2026-09-01) | New (Design+analy+PO chốt) | Action |
|------|---------------------------|----------------------------|--------|
| API prefix | `api/v1/asset/road-assets` | **giữ** · **cấm** invent `api/v1/so-ts/*` | keep |
| DOMAIN-MAP | slug `asset` → Asset · `so-ts-its-camera` chưa liệt kê | Cite **Asset** · optional docs row `so-ts-its-camera`→Asset | cite + optional docs |
| Entity | `RoadAssetEntity` · `rmms_road_assets` · `DumpSpecs` text | **giữ** dumpSpecs P1 cho attr ITS §4 | **no Schema_*** flatten P1 |
| Import | `RoadAssetCatalogHandler` · GIS `camera` · import prefix `IT-` live | create/import prefix **`IT-`** · GIS short **`CAM`** · type seed `ITS_CAMERA` · dump `tbl_its` — **GAP-ITS-PREFIX-01** | `DefaultCodePrefix` + import |
| dumpSpecs attrs | FE `dumpSpecLabels` thiếu key ITS | Label VN đủ §4 + `tn_*` · form S-ATTR editable | FE labels + form write |
| LOOKUP type_management_center / location_its | text trong dumpSpecs | Dropdown LOOKUP_STATIC · init-data delta từ dump distinct — **GAP-ITS-LOOKUP-01** | delta init-data |
| Form S-ATTR | `<dl>` readonly dumpSpecs | Editable Dropdown/Number/Text đủ dump §4 · merge `dumpSpecs` on save | FE + dumpSpecs merge |
| Grid profile | schema chung / peer | ON mẫu + hide-empty cột số khi 0/null · ẩn type/kmTo/SL/ĐVT · detail-only tn_* form only | FE type-profile |
| Point | Form hiện `kmTo` với type chưa profile | `kmFrom` only · **ẩn** `kmTo` form/grid · **cấm** ép `"0"` | FE validation |
| Name | import: `name` thường = `route` | `name` ← `location_name_its_ccroom` · trống OK · **cấm** IsWeak → route — **GAP-ITS-NAME-01** | guard rebuild |
| Leave/alert | `window.confirm` risk | `LeaveConfirmModal` + `useAlert`/Modal | FE only |
| Alias board | live filter only | `/so-ts-its-camera` board-only · optional Navigate — **GAP-ITS-ROUTE-01** | FE optional |
| Flatten attrs | dumpSpecs only | **DEFER P2** Schema_* — **GAP-ITS-FLAT-01** (SA chốt) | no migration SA |
| camera-connect | peer feature camera IP | **OUT of scope** · **cấm** merge IP/RTSP/ONVIF — **GAP-ITS-CAM-01** | exclude form |
| Dump keys | chưa cite header CSV | Cite header `moc_dbvn.tbl_its.2026.8.23.15.11.csv` — **GAP-ITS-DUMP-KEY-01** | recorded §2 |
| TZ / XCO / SHARE | live list UTC · GET XCO · TenantEntity | Confirm gates dưới | recorded |

**Không đổi:** Kind B shell `/so-ts` · BFF proxy · CRUD methods · SearchInput asset-type / road-route · catalogKind UI `road-assets` · **cấm ERP.*** · map canvas OUT (GIS `camera` cite only).

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
| Import | `RoadAssetCatalogHandler` · catalogKey `road_assets` · type seed `ITS_CAMERA` · dump `tbl_its` |
| Rebuild CSV | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · Prefix `IT` · **cấm** IsWeak ép route |
| Migrations | **đã có** entity · **không** Schema_* flatten P1 · **không** Step 4b ở SA |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/Controllers/RoadAssetsBffController.cs` · **proxy only = yes** |
| FE service | `src/services/asset/endpoint.ts` · `BASE=/asset/road-assets` |
| FE labels | `src/services/asset/dumpSpecLabels.ts` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Asset · `api/v1/asset` |
| Docs | `docs/context/features/so-ts-its-camera.md` · parent `so-ts-type-grid.md` · `import-gov-asset-fields.md` §4 |

**Cấm** `ERP.Service.*` · invent parallel host · invent `api/v1/so-ts/road-assets`.

### Route / domain (live · DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/so-ts?type=ITS_CAMERA` · alias board `/so-ts-its-camera` (optional redirect) |
| UI form | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| API | `api/v1/asset/road-assets` |
| BFF | `web-bff/api/v1/asset/road-assets` |
| FE BASE | `/asset/road-assets` (apiClient → BFF) |
| Lookups | Integration `asset-types` · `road-routes` · `org-units` · ui-schema `road-assets` · init-data ITS lookups |
| GIS | `camera` ↔ `ITS_CAMERA` · icon short `CAM` (= IdCode prefix family `IT-`) |

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
| Out of pack | flatten DB columns · Excel wizard · Kind F map · invent History API · GIS deep-link `camera` · camera-connect CRUD |

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
| Form reuse | S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS | **cấm** fork `AssetFormPage` · **cấm** tab legacy |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **`tz_na`** | Design Zone B **không** `fromDate`/`toDate` · form **không** business date (chỉ `updatedAt` readonly) | Parent API optional range — **không** mount trên pack |
| XCO | **`xco_get_only`** | API-02 GET `/{id}` · View/Edit/Copy load | live `IgnoreQueryFilters` + `AllowedCompanyIds` · 403 |
| SHARE | **`share_tenant`** | `RoadAssetEntity` : `TenantEntity` · `CompanyCode` | tenant-only · **không** Type A master |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-02T04:00:00.000Z`

---

## FormType pack (`list`)

| Surface | Pattern | FormMode | API |
|---------|---------|----------|-----|
| S-LIST | Kind B A–D+F | list | API-01 list `?type=ITS_CAMERA` |
| S-FORM-CREATE | Kind B full-page 5 cột | create | API-03 POST (`type=ITS_CAMERA`) |
| S-FORM-EDIT | full-page | edit | API-02 GET + API-04 PUT |
| S-FORM-VIEW | full-page readonly | view | API-02 GET |
| S-FORM-COPY | full-page prefill | copy | API-02 GET → API-03 POST (new id · `IT-`) |
| S-ACT-DELETE | soft | delete | API-05 DELETE |
| S-HIST | LinCatalogHistoryModal | — | parent history surface (không invent API) |
| S-ALIAS | board route | navigate | optional `/so-ts-its-camera` → live filter |

---

## 2. API contract (live · **cấm** invent path)

| ID | Method | Path | FormMode / use |
|----|--------|------|----------------|
| API-01 | GET | `…/road-assets?type=ITS_CAMERA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | list |
| API-02 | GET | `…/road-assets/{id}` | view / edit / copy load |
| API-03 | POST | `…/road-assets` | create / copy save · body `type=ITS_CAMERA` · IdCode prefix **`IT-`** |
| API-04 | PUT | `…/road-assets/{id}` | edit save · merge dumpSpecs |
| API-05 | DELETE | `…/road-assets/{id}` | soft delete (`isActive`) |
| API-06 | GET | `…/road-assets/init-data` | statuses/sources/units + **delta** ITS lookups |
| API-07 | GET | `…/road-assets/summary-by-type` | tile `t19` count |

Prefix mirror: API `api/v1/asset/…` · BFF `web-bff/api/v1/asset/…` · FE `/asset/road-assets`.

### Persist model (P1)

| Field group | Storage | Note |
|-------------|---------|------|
| Scalars | columns `RoadAssetEntity` | type · route* · kmFrom · name · status · source · lat/lng · qr · valueVnd · note · CompanyCode · … |
| Attr dump | `DumpSpecs` JSON text | ITS §4 keys + `tn_*` (xem bảng dump map) · tinh/xã (nếu có) |
| Flatten | **DEFER P2** | **GAP-ITS-FLAT-01** — **cấm** Schema_* migration P1 / SA turn |

### Dump header cite — **GAP-ITS-DUMP-KEY-01 RESOLVED**

**Source:** `moc_dbvn.tbl_its.2026.8.23.15.11.csv` (cite `COVERAGE-KCHT-40.md` · gov-vn **9** row · import set `road_assets.part2.csv`).

**Normalized header (eng keys · SA confirm):**

`type_management_center_id|location_name_its_ccroom|location_its_central_control_id|tn_cctv_monitoring|tn_traffic_event_detection|tn_vms_interface|tn_traffic_analysis|tn_screen_controller|tn_traffic_analysis_processor|tn_incident_data_management|tn_data_server|tn_wim_high_speed|tn_cable_duct_length|tn_fiber_optic_length|tn_its_pole|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

### Dump → scalar / dumpSpecs map (ITS_CAMERA)

| Dump key (header CSV) | Label VN (mẫu) | Bind P1 |
|-----------------------|----------------|---------|
| `type_management_center_id` | Loại trung tâm điều hành | dumpSpecs · S-ATTR · LOOKUP_STATIC |
| `location_name_its_ccroom` | Tên vị trí phòng điều hành ITS | dumpSpecs · S-NAME · scalar `name` |
| `location_its_central_control_id` | Vị trí phòng điều hành | dumpSpecs · S-ATTR · LOOKUP_STATIC |
| `tn_cctv_monitoring` | Tổng số thiết bị giám sát CCTV | dumpSpecs · S-ATTR · detail-only grid |
| `tn_traffic_event_detection` | Tổng số thiết bị phát hiện sự kiện | dumpSpecs · S-ATTR · detail-only grid |
| `tn_vms_interface` | Tổng số thiết bị giao diện VMS | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `tn_traffic_analysis` | Tổng số thiết bị phân tích giao thông | dumpSpecs · S-ATTR · detail-only grid |
| `tn_screen_controller` | Tổng số bộ điều khiển màn hình | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `tn_traffic_analysis_processor` | Tổng số bộ xử lý phân tích | dumpSpecs · S-ATTR · detail-only grid |
| `tn_incident_data_management` | Tổng số hệ thống quản lý dữ liệu sự cố | dumpSpecs · S-ATTR · detail-only grid |
| `tn_data_server` | Tổng số máy chủ dữ liệu | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `tn_wim_high_speed` | Tổng số bộ kiểm tra tải trọng tốc độ cao | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `tn_cable_duct_length` | Tổng chiều dài hệ thống cống cáp (km) | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `tn_fiber_optic_length` | Tổng chiều dài cáp quang (km) | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `tn_its_pole` | Tổng số trụ đỡ ITS | dumpSpecs · S-ATTR · grid ON · hide-empty OK |
| `road_name` | Cao tốc/QL | scalar `route` |
| `long_route_name` | Tuyến | scalar `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | scalar `routeSegment` (**không** làm `name` duy nhất) |
| `lytrinh-kmlytrinh` | Lý trình | scalar `kmFrom` (để trống nếu null) |
| `from_coordinatex` / `from_coordinatey` | XY | scalar `lng`/`lat` |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |

### Name / prefix rules

| Rule | Decision |
|------|----------|
| Primary list label | grid ON: tên phòng ITS · 3 tầng tuyến · thiết bị VMS/màn hình/máy chủ/WIM · cống/cáp · trụ · TTĐH |
| Name | optional Text · `location_name_its_ccroom` · trống OK |
| Weak name | **cấm** `IsWeakAssetName` → ép `route` / đoạn |
| IdCode create/import | prefix **`IT-`** (GIS short `CAM` · RebuildGovVn `IT`) |
| DefaultCodePrefix live | hôm nay generic `TS-` → đổi theo type `ITS_CAMERA` — **GAP-ITS-PREFIX-01** |
| camera-connect | **OUT of scope** — **cấm** IP/RTSP/ONVIF fields |

### LOOKUP init-data delta (P1) — **GAP-ITS-LOOKUP-01 RESOLVED**

| Key (đề xuất) | Dump source | UI |
|---------------|-------------|-----|
| `itsManagementCenterTypes` | distinct `type_management_center_id` | Dropdown LOOKUP_STATIC · grid ON |
| `itsCentralControlLocations` | distinct `location_its_central_control_id` | Dropdown LOOKUP_STATIC · hide-empty OK |

Seed: dump distinct từ gov-vn **9** row + import handler · **cấm** hardcode FE không cite.

### S-LOC-POINT (P1)

| Keys | Control | Rule |
|------|---------|------|
| `kmFrom` | Text | scalar · **không** required · **cấm** ép `"0"` |
| `kmTo` | — | **ẩn** form/grid ITS_CAMERA |
| `lat`/`lng` | Number | scalar S-GPS · không promote dump XY |

---

## 3. Tasks for Team Lead (ids)

| ID | Scope | Note |
|----|-------|------|
| T-ITS-01 | FE profile | grid columns ON mẫu + hide-empty · pagination 50/100/200/500 · filter `type=ITS_CAMERA` only · ẩn type/kmTo/SL/ĐVT |
| T-ITS-02 | FE form S-ATTR | editable dumpSpecs · labels VN đủ §4 + `tn_*` · merge on save |
| T-ITS-03 | FE Point | S-LOC-POINT kmFrom only · ẩn kmTo · cấm `"0"` |
| T-ITS-04 | FE name | optional · `location_name_its_ccroom` · cấm IsWeak |
| T-ITS-05 | BE prefix | `DefaultCodePrefix` / create `IT-` · import align GIS `CAM` |
| T-ITS-06 | BE LOOKUP | init-data `itsManagementCenterTypes[]` · `itsCentralControlLocations[]` |
| T-ITS-07 | FE Leave | LeaveConfirmModal + useAlert |
| T-ITS-08 | FE alias | optional `/so-ts-its-camera` Navigate |
| T-ITS-09 | Docs | DOMAIN-MAP optional row · context phase |
| T-ITS-10 | Pack | type seed · dumpSpecLabels · tile t19 summary · **cấm** camera-connect merge |

**Cấm** SA Write MFE/BE code · Step 4b · e2e.

---

## 4. Confirm gate

| Gate | Value |
|------|-------|
| solution_confirm | **approve** |
| autoApprove | ON · agent self-confirm `2026-09-02T04:00:00.000Z` |
| DoR | FormMode↔API · entity/dumpSpecs · BFF proxy · gates TZ/XCO/SHARE · GAP-ITS-* chốt · compact handoff |

## Next

| Role | Artifact |
|------|----------|
| **team-lead** | `task/so-ts-its-camera.md` · T-ITS-* |
| Dev | profile · S-ATTR · IT- · LOOKUP · Leave · Point |
| QA | e2e queued `/agent-qa*` only |

<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked taskId=task_00134ed9 contentHashPrior=sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946 -->
