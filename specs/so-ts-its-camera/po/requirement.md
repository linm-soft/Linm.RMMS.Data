# PO — Requirement — so-ts-its-camera (Sổ TS — Hệ thống ITS)

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| title | Sổ TS — Hệ thống ITS |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `ITS_CAMERA` trên shell `/so-ts` live · greenfield L3 stubs) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `ITS_CAMERA` |
| cluster | `ops` · ô KCHT `t19` |
| dump | `tbl_its` · prefix import **`IT-`** · CSV gov-vn **9** |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-ITS-NAME-01 · GAP-ITS-SPEC-01 · GAP-ITS-POINT-01 · GAP-ITS-PREFIX-01 · GAP-ITS-ROUTE-01 · GAP-ITS-LOOKUP-01 · GAP-ITS-CAM-01 · GAP-ITS-DUMP-KEY-01 · GAP-SOTS-TAB-01 · GAP-SOTS-API-DOC |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_3df3fca9`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-its-camera-control-hint.md` · `so-ts-its-camera-real-data.md` · contentHash `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` · headerFingerprint `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` · analy `task_b2b521dc` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=ITS_CAMERA` · STATUS alias `/so-ts-its-camera` = board deep-link only (**GAP-ITS-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=ITS_CAMERA` · alias `http://localhost:9301/so-ts-its-camera` |
| liveList | `/so-ts?type=ITS_CAMERA` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-its-camera-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-its-camera-real-data.md` |
| contentHash | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprint | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §4 ITS_CAMERA |
| taskId | `task_3df3fca9` · analy `task_b2b521dc` |
| updatedAt | `2026-09-02T03:55:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy DRVN · invent API · ERP.* · demo-json / localStorage SSOT · merge `camera-connect` form · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Hệ thống ITS (`ITS_CAMERA`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung / dump `tbl_its` — **không** fork page riêng · **≠** feature `camera-connect` (CRUD camera IP).

Persona: Ban QLDA · Sở GTVT · Khu QLĐB · đội vận hành ITS / phòng điều hành cao tốc (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `ITS_CAMERA`: tên phòng ITS · 3 tầng tuyến · lý trình · loại TTĐH · vị trí phòng · thiết bị VMS/màn hình/máy chủ/WIM · cống/cáp · trụ · **ẩn** `type` / `kmTo` / SL / ĐVT · hide-empty cột số khi giá trị 0/null.
2. Form S-ATTR editable: `type_management_center_id` · `location_name_its_ccroom` · `location_its_central_control_id` · đủ `tn_*` dump §4 (không chỉ `<dl>` dumpSpecs).
3. Primary display = `name` ← `location_name_its_ccroom` (Tên phòng điều hành ITS) · **GAP-ITS-NAME-01** · trống OK · **cấm** ép đoạn tuyến làm tên duy nhất.
4. Point cluster ops: **không** bắt buộc / **ẩn** `kmTo` trên form.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Prefix IdCode create/import **`IT-`** khớp gov-vn / GIS — **GAP-ITS-PREFIX-01**.
8. **Cấm** field camera-connect (IP/RTSP/ONVIF) trong form ITS — **GAP-ITS-CAM-01**.

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T20:55:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `ITS_CAMERA` |
| Grid columns | 1 schema mọi type (gồm `kmTo` · SL · ĐVT · cột Loại) | Profile `ITS_CAMERA` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` | Editable Input/Select/Number đủ dump §4 ITS + `tn_*` — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | import/rebuild: `name` thường = `route` | `location_name_its_ccroom` · trống OK — **GAP-ITS-NAME-01** |
| FE labels | thiếu key ITS §4 | Label VN khớp dump/mẫu — **GAP-ITS-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=ITS_CAMERA` — **GAP-ITS-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-its-camera` | Live = `/so-ts?type=ITS_CAMERA` · alias board-only — **GAP-ITS-ROUTE-01** |
| Lookups | text trong dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-ITS-LOOKUP-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`IT-`** — **GAP-ITS-PREFIX-01** |
| camera-connect | peer feature camera IP | **Tách scope** — **GAP-ITS-CAM-01** |
| Dump keys | chưa cite header CSV | SA map `tn_*` từ `moc_dbvn.tbl_its.*.csv` — **GAP-ITS-DUMP-KEY-01** |
| API docs parent | CTX ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=ITS_CAMERA` + **search work** (mã · tên phòng ITS · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Hệ thống ITS» khi `type=ITS_CAMERA` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `ITS_CAMERA` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột ITS_CAMERA §5b · hide-empty cột thiết bị khi 0/null · **ẩn** type / kmTo / quantity / unitCode · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · leave-confirm dirty.
9. S-NAME: Text `name` = Tên phòng điều hành ITS (`location_name_its_ccroom`) · trống OK.
10. S-ATTR: phòng điều hành + đủ `tn_*` thiết bị cao tốc — **không** chỉ `<dl>`.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `ITS_CAMERA`.
12. Lookups ITS attrs = **Dropdown LOOKUP_STATIC** dump/seed SA — **cấm** hardcode FE · asset-type / road-route / org-unit = SearchInput master.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. IdCode prefix **`IT-`** trên create/import.
17. **Cấm** field camera-connect trong form ITS.
18. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-its-camera.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · cluster `ops` · ô `t19` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 ITS_CAMERA | dump columns · `tn_*` | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t19` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| MAU-01 | `docs/img/gov-mau-tai-san/25-moc_dbvn.tbl_its-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/25-moc_dbvn.tbl_its-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-its-camera-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-its-camera-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile ITS_CAMERA | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels ITS §4 | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `ITS_CAMERA` · dumpSpecs · prefix `IT-` | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `camera` ↔ `ITS_CAMERA` · icon `CAM` | P1 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên phòng ITS · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `ITS_CAMERA` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=ITS_CAMERA`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên phòng điều hành ITS | link Text | **ON** | bind `location_name_its_ccroom` / `name` · **GAP-ITS-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_management_center_id | Loại trung tâm điều hành | Text / Dropdown label | ON | Theo tuyến / Theo khu vực |
| location_its_central_control_id | Vị trí phòng ITS | Text / Dropdown label | ON · hide-empty | Trên tuyến / Khác |
| tn_vms_interface | Tổng số thiết bị giao diện VMS | Number | ON · hide-empty | dumpSpecs |
| tn_screen_controller | Tổng số bộ điều khiển màn hình | Number | ON · hide-empty | dumpSpecs |
| tn_data_server | Tổng số máy chủ dữ liệu | Number | ON · hide-empty | dumpSpecs |
| tn_wim_high_speed | Tổng số bộ kiểm tra tải trọng tốc độ cao | Number | ON · hide-empty | dumpSpecs |
| tn_cable_duct_length | Tổng chiều dài hệ thống cống cáp | Number | ON · hide-empty | dumpSpecs · km |
| tn_fiber_optic_length | Tổng chiều dài cáp quang | Number | ON · hide-empty | dumpSpecs |
| tn_its_pole | Tổng số trụ đỡ ITS | Number | ON · hide-empty | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `ITS_CAMERA` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `IT-` |
| type | Loại tài sản | `SearchInput` | * | lock `ITS_CAMERA` khi create từ tile `t19` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | dump `name_of_route_asset` |

#### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` |
| ward | Phường / Xã | `Text` / SearchInput | | dump `xaphuong` |

**Không mount:** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên phòng điều hành ITS | `Text` | | SSOT `location_name_its_ccroom` · trống OK — **GAP-ITS-NAME-01** |

#### S-ATTR — Phòng điều hành

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_management_center_id | Loại trung tâm điều hành | `Dropdown` | | Theo tuyến / Theo khu vực · **GAP-ITS-LOOKUP-01** |
| location_name_its_ccroom | Tên vị trí phòng điều hành ITS | `Text` | | mirror S-NAME |
| location_its_central_control_id | Vị trí phòng điều hành | `Dropdown` | | Trên tuyến / Khác · **GAP-ITS-LOOKUP-01** |

#### S-ATTR — Thiết bị trên cao tốc (`tn_*`)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| tn_cctv_monitoring | Tổng số thiết bị giám sát CCTV | `Number` | | dump · form detail |
| tn_traffic_event_detection | Tổng số thiết bị phát hiện sự kiện giao thông | `Number` | | dump |
| tn_vms_interface | Tổng số thiết bị giao diện VMS | `Number` | | dump |
| tn_traffic_analysis | Tổng số thiết bị phân tích giao thông | `Number` | | dump |
| tn_screen_controller | Tổng số bộ điều khiển màn hình | `Number` | | dump |
| tn_traffic_analysis_processor | Tổng số bộ xử lý phân tích giao thông | `Number` | | dump |
| tn_incident_data_management | Tổng số hệ thống quản lý dữ liệu sự cố | `Number` | | dump |
| tn_data_server | Tổng số máy chủ dữ liệu | `Number` | | dump |
| tn_wim_high_speed | Tổng số bộ kiểm tra tải trọng tốc độ cao | `Number` | | dump |
| tn_cable_duct_length | Tổng chiều dài hệ thống cống cáp (km) | `Number` | | dump |
| tn_fiber_optic_length | Tổng chiều dài cáp quang (km) | `Number` | | dump |
| tn_its_pole | Tổng số trụ đỡ ITS | `Number` | | dump |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select/Number. Key `tn_*` — SA xác nhận header CSV (**GAP-ITS-DUMP-KEY-01**).

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab legacy · field camera-connect (IP/RTSP/ONVIF).

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=ITS_CAMERA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=ITS_CAMERA`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `type_management_center_id` | Loại trung tâm điều hành | dumpSpecs · form S-ATTR |
| `location_name_its_ccroom` | Tên vị trí phòng điều hành ITS | dumpSpecs · S-NAME · `name` |
| `location_its_central_control_id` | Vị trí phòng điều hành | dumpSpecs · form S-ATTR |
| `tn_*` (12 keys) | Thiết bị cao tốc | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name` duy nhất) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

`map: none` · `progress: none` (Type A · `status` KT + soft `isActive`).

## 6. Grid list AC (REQUIRED · Kind B / list)

> Paste `po-design-grid-standard.md` · filter HARD `filter-bar-layout-hard.md` — **GAP-PO-GRID-01**.

| Area | Acceptance (Design phải prototype / parity) |
|------|---------------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer (+ Zone F config) |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · **+ Tạo mới** — **cấm** Thêm mới trên Zone A |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | `LinCatalogUiSchemaEditorModal` · kéo cột default ON — **cấm** Zone F-only `LinListTableConfigModal` · **cấm** `configHint` |
| **Grid flow** | Sort cột · filter cột · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — SearchText + SearchInput type/route · km Text · org tree — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack · filter đổi → page=1 |
| **Type profile** | Cột ITS_CAMERA §5b · **ẩn** type/kmTo/SL/ĐVT · hide-empty cột thiết bị |
| **Form pair** | Create/Edit/View/Copy → **Full page** (`ui-pattern-decision` · ≥10 fields) · Design clone `form-surface-prototype` full-page 5 cột |
| **Empty/fail** | empty copy VN · toast — **cấm** fake row / invent-seed |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

### Report AC

**N/A** — packKind `list` · **không** report/dashboard (**GAP-PO-RPT-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=ITS_CAMERA` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `ITS_CAMERA` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-its-camera` | redirect/equiv → `/so-ts?type=ITS_CAMERA` (Design optional) | `/agent-dev` |

**devSlash:** `/agent-dev` (list + full-page form · **không** oms-map / ai-detect / camera-connect).

**Cấm** Modal form hồ sơ (≥10 fields) · **cấm** Slideout · **cấm** map canvas · **cấm** GOVOne chrome · **cấm** tab legacy DRVN · **cấm** camera-connect UI.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Esc / đổi mode / navigate away | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | `window.confirm` / native dialog |
| Xóa / chặn thao tác nguy hiểm | **`useAlert` / `Modal`** | `window.alert` |
| API fail / lookup fail | toast · empty | alert blocking |
| Import 0 / empty list | empty grid + toast | invent-seed / mock rows |
| Validation 422 | toast business message | silent fail |
| History | `LinCatalogHistoryModal` | custom history alert · invent API |
| Lookup no match | SearchInput empty · save 422 | free-text substitute master |

Thiếu → **GAP-PO-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-ITS-LOOKUP-01 | P0 | `type_management_center_id` · `location_its_central_control_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA P1 — **không** SearchInput master riêng P1 |
| GAP-ITS-ROUTE-01 | P0 | Live route = **`/so-ts?type=ITS_CAMERA`** · STATUS alias `/so-ts-its-camera` = board/tile `t19` deep-link only · Design **optional** Navigate alias — **không** fork page |
| GAP-ITS-PREFIX-01 | P0 | IdCode create/import prefix **`IT-`** — SA cập nhật `DefaultCodePrefix` khớp gov-vn / GIS |
| GAP-ITS-NAME-01 | P0 | `name` = `location_name_its_ccroom` (Tên phòng điều hành ITS) hoặc **trống OK** · import hay = route — **cấm** ép đoạn tuyến làm tên duy nhất |
| GAP-SOTS-COL-01 | P0 | Type column profile ITS_CAMERA hide type/kmTo/SL/ĐVT · **hide-empty** cột thiết bị (`tn_*` · cống/cáp · trụ) khi giá trị 0/null |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump §4 + `tn_*` — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-ITS-POINT-01 | P0 | Ẩn + không required `kmTo` trên form ITS_CAMERA |
| GAP-ITS-CAM-01 | P0 | **Tách scope** `camera-connect` — **cấm** merge form kết nối camera (IP/RTSP/ONVIF) vào AssetFormPage ITS |
| GAP-ITS-DUMP-KEY-01 | P1 | SA cite header `moc_dbvn.tbl_its.*.csv` cho key `tn_*` chính xác — PO giữ nhãn mẫu + SSOT §4 |
| GAP-ITS-SPEC-01 | P1 | FE labels VN đủ key ITS §4 trong `dumpSpecLabels.ts` |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/*` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Feature `camera-connect` / Camera MFE CRUD (**GAP-ITS-CAM-01**)
- Excel import wizard / Excel export (parent import path riêng)
- Invent `api/v1/so-ts/*` · ERP.* · Finance fork · `api/v1/rmms/*`
- Auth NuGet `[RequirePermission]` wire full
- Re-CRUD parent `asset` unrelated types
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `ITS_CAMERA` |
| Context | CTX-01 · CTX-02 · CTX-03 · MAU-01/02 · DA-HINT · DA-REAL |
| Demo | `asset-demo.html` → `asset/asset.html` — **UI tham chiếu only** · **cấm** demo-json SSOT |
| controlHint | §5 + DA-HINT — **cấm** đoán Text vs SearchInput · **cấm** Select 8 nhãn demo |
| realData | DA-REAL §A–§F |
| Grid AC | §6 · DES-GRID-A/B/C/D · filter-bar HARD |
| Form | CatalogFormShell 5col · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · **cấm** tab · **cấm** camera-connect |
| Leave | §8 LeaveConfirmModal · useAlert |
| Decisions | §9 LOOKUP Dropdown · PREFIX IT- · ROUTE alias board-only · hide-empty grid · dumpSpecs P1 · scope tách camera-connect |
| reviewUrl | (Design fill) |
| peerStdUrl | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| mfeStdUrl | `http://localhost:9301/so-ts-its-camera` |
| compact | `specs/so-ts-its-camera/handoff/po-compact.md` |
| next | `/agent-design` · autoApprove ON · e2eQa queued QA |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprint | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| analyzedAt | `2026-09-01T20:55:00.000Z` |
| writtenAt | `2026-09-02T03:55:00.000Z` |
| taskId | `task_3df3fca9` |
| status | `confirmed` |
