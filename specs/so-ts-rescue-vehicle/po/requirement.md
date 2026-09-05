# PO — Requirement — so-ts-rescue-vehicle (Sổ TS — Xe cứu hộ)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-vehicle` |
| title | Sổ TS — Xe cứu hộ |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `RESCUE_VEHICLE` trên shell `/so-ts` live · greenfield L3 stubs) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `RESCUE_VEHICLE` |
| cluster | `ops` · ô KCHT `t24` |
| dump | `tbl_rescue_vehicle` · prefix import **`XH-`** · CSV gov-vn **7** row |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-RV-NAME-01 · GAP-RV-SPEC-01 · GAP-RV-POINT-01 · GAP-RV-PREFIX-01 · GAP-RV-ROUTE-01 · GAP-RV-LEAVE-01 · GAP-RV-LOOKUP-01 · GAP-RV-DUMP-KEY-01 · GAP-SOTS-TAB-01 · GAP-SOTS-API-DOC |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_0f384c26`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-rescue-vehicle-control-hint.md` · `so-ts-rescue-vehicle-real-data.md` · contentHash `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` · headerFingerprint `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` · analy `task_e3204624` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RESCUE_VEHICLE` · STATUS alias `/so-ts-rescue-vehicle` = board deep-link only (**GAP-RV-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=RESCUE_VEHICLE` · alias `http://localhost:9301/so-ts-rescue-vehicle` |
| liveList | `/so-ts?type=RESCUE_VEHICLE` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-vehicle-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-vehicle-real-data.md` |
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprint | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §4 RESCUE_VEHICLE |
| taskId | `task_0f384c26` · analy `task_e3204624` |
| updatedAt | `2026-09-02T04:16:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**≠** `RESCUE_STATION` (trạm cứu nạn `tbl_disaster_res_facility`) — đây là **xe / phương tiện cứu hộ** `tbl_rescue_vehicle`.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` · tab legacy DRVN · invent API · ERP.* · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Xe cứu hộ (`RESCUE_VEHICLE`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung / dump `tbl_rescue_vehicle` — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Khu QLĐB · đội vận hành cứu hộ (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `RESCUE_VEHICLE`: tên vị trí/xe · 3 tầng tuyến · lý trình · loại phương tiện · vị trí đậu · ĐV mua · cơ quan khai thác · **ẩn** `type` / `kmTo` / SL / ĐVT · hide-empty cột khi giá trị null/trống.
2. Form S-ATTR editable: `vehicle_type_id` · `parking_location_name` · `purchased_by` · `under_operation_by` (không chỉ `<dl>` dumpSpecs).
3. Primary display = `name` ← `parking_location_name` official — **GAP-RV-NAME-01** · trống OK · **cấm** ép đoạn tuyến làm tên duy nhất.
4. Point cluster ops: **không** bắt buộc / **ẩn** `kmTo` trên form.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Prefix IdCode create/import **`XH-`** khớp gov-vn / GIS — **GAP-RV-PREFIX-01**.

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-02T04:15:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-02) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `RESCUE_VEHICLE` |
| Grid columns | 1 schema mọi type (gồm `kmTo` · SL · ĐVT · cột Loại) | Profile `RESCUE_VEHICLE` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` | Editable Input/Select đủ dump §4 RESCUE_VEHICLE — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | import: mô tả ngắn / mã hoặc `parking_location_name` | `name` ← `parking_location_name` official — **GAP-RV-NAME-01** |
| FE labels | thiếu key RESCUE §4 | Label VN khớp dump/mẫu — **GAP-RV-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=RESCUE_VEHICLE` — **GAP-RV-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-rescue-vehicle` | Live = `/so-ts?type=RESCUE_VEHICLE` · alias board-only — **GAP-RV-ROUTE-01** |
| Leave / alert | peer native confirm | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-RV-LEAVE-01** |
| Lookups | text trong dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-RV-LOOKUP-01** |
| Dump key | FE `under_operation` partial | canonical `under_operation_by` — **GAP-RV-DUMP-KEY-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`XH-`** — **GAP-RV-PREFIX-01** |
| API docs parent | CTX ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=RESCUE_VEHICLE` + **search work** (mã · tên · tuyến · loại PT · vị trí đậu · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Xe cứu hộ» khi `type=RESCUE_VEHICLE` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `RESCUE_VEHICLE` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột RESCUE_VEHICLE §5b · hide-empty lý trình/vị trí đậu/ĐV mua khi null/trống · **ẩn** type / kmTo / quantity / unitCode · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · leave-confirm dirty.
9. S-NAME: Text `name` = tên vị trí/phương tiện · sync `parking_location_name` official · trống OK.
10. S-ATTR: `vehicle_type_id` · `parking_location_name` · `purchased_by` · `under_operation_by` — **không** chỉ `<dl>`.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `RESCUE_VEHICLE`.
12. Lookups RESCUE attrs = **Dropdown LOOKUP_STATIC** dump/seed SA — **cấm** hardcode FE · asset-type / road-route / org-unit = SearchInput master.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. IdCode prefix **`XH-`** trên create/import.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-rescue-vehicle.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · cluster `ops` · ô `t24` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 RESCUE_VEHICLE | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t24` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/36-moc_dbvn.tbl_rescue_vehicle-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/36-moc_dbvn.tbl_rescue_vehicle-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-rescue-vehicle-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-rescue-vehicle-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile RESCUE_VEHICLE | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels RESCUE §4 | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `RESCUE_VEHICLE` · dumpSpecs · prefix `XH-` | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `RESCUE_VEHICLE` icon group `TS` · prefix `XH-` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · loại PT · vị trí đậu · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RESCUE_VEHICLE` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=RESCUE_VEHICLE`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên vị trí / xe | link Text | **ON** | bind `name` · **GAP-RV-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON · hide-empty | dump `lytrinh-kmlytrinh` · hay trống trên 7 row |
| vehicle_type_id | Loại phương tiện | Text / Dropdown label | **ON** | dumpSpecs · **GAP-RV-LOOKUP-01** |
| parking_location_name | Vị trí đậu | Text | ON · hide-empty | dumpSpecs · có thể trùng `name` |
| purchased_by | Đơn vị mua sắm | Text | ON · hide-empty | dumpSpecs |
| under_operation_by | Cơ quan đang khai thác | Text / Dropdown label | **ON** | dumpSpecs · **GAP-RV-DUMP-KEY-01** |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `RESCUE_VEHICLE` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL · unit seed `TRAM` ẩn grid |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `XH-` |
| type | Loại tài sản | `SearchInput` | * | lock `RESCUE_VEHICLE` khi create từ tile `t24` |
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
| name | Tên vị trí / phương tiện | `Text` | | SSOT `parking_location_name` · **GAP-RV-NAME-01** · trống OK |

#### S-ATTR (mẫu Thông tin chung + dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| vehicle_type_id | Loại phương tiện cứu hộ | `Dropdown` | | LOOKUP_STATIC · **GAP-RV-LOOKUP-01** |
| parking_location_name | Tên vị trí đậu | `Text` | | dump · sync `name` nếu official |
| purchased_by | Đơn vị mua sắm | `Text` | | dump |
| under_operation_by | Cơ quan đang khai thác | `Dropdown` | | LOOKUP_STATIC · canonical key — **GAP-RV-DUMP-KEY-01** |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select.

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · field `RESCUE_STATION`-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RESCUE_VEHICLE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RESCUE_VEHICLE`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `vehicle_type_id` | Loại phương tiện cứu hộ | dumpSpecs · form S-ATTR |
| `parking_location_name` | Tên vị trí đậu | dumpSpecs · `name` · form S-NAME/S-ATTR |
| `purchased_by` | Đơn vị mua sắm | dumpSpecs · form S-ATTR |
| `under_operation_by` | Cơ quan đang khai thác | dumpSpecs · form S-ATTR · FE alias `under_operation` |
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
| **Type profile** | Cột RESCUE_VEHICLE §5b · **ẩn** type/kmTo/SL/ĐVT · hide-empty khi null/trống |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=RESCUE_VEHICLE` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `RESCUE_VEHICLE` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-rescue-vehicle` | redirect/equiv → `/so-ts?type=RESCUE_VEHICLE` (Design optional) | `/agent-dev` |

**devSlash:** `/agent-dev` (list + full-page form · **không** oms-map / ai-detect / camera).

**Cấm** Modal form hồ sơ (≥10 fields) · **cấm** Slideout · **cấm** map canvas · **cấm** GOVOne chrome · **cấm** tab legacy DRVN.

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-RV-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-RV-LOOKUP-01 | P0 | `vehicle_type_id` · `under_operation_by` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA P1 — **không** SearchInput master riêng P1 |
| GAP-RV-ROUTE-01 | P0 | Live route = **`/so-ts?type=RESCUE_VEHICLE`** · STATUS alias `/so-ts-rescue-vehicle` = board/tile `t24` deep-link only · Design **optional** Navigate alias — **không** fork page |
| GAP-RV-PREFIX-01 | P0 | IdCode create/import prefix **`XH-`** — SA cập nhật `DefaultCodePrefix` khớp gov-vn / GIS |
| GAP-RV-NAME-01 | P0 | `name` ← `parking_location_name` official hoặc **trống OK** · **cấm** ép đoạn tuyến làm tên duy nhất |
| GAP-RV-DUMP-KEY-01 | P0 | Canonical dump key = **`under_operation_by`** · SA map FE alias `under_operation` · import/rebuild dùng key dump |
| GAP-SOTS-COL-01 | P0 | Type column profile RESCUE_VEHICLE hide type/kmTo/SL/ĐVT · **hide-empty** cột lý trình/vị trí đậu/ĐV mua khi null/trống · cột loại PT/cơ quan khai thác **luôn ON** theo mẫu list |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump §4 — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-RV-POINT-01 | P0 | Ẩn + không required `kmTo` trên form RESCUE_VEHICLE |
| GAP-RV-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-RV-SPEC-01 | P1 | FE labels VN đủ key RESCUE §4 trong `dumpSpecLabels.ts` |
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
- `RESCUE_STATION` (trạm cứu nạn) — type khác
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
| feature | `so-ts-rescue-vehicle` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `RESCUE_VEHICLE` |
| Context | CTX-01 · CTX-02 · CTX-03 · MAU-01/02 · DA-HINT · DA-REAL |
| Demo | `asset-demo.html` → `asset/asset.html` — **UI tham chiếu only** · **cấm** demo-json SSOT |
| controlHint | §5 + DA-HINT — **cấm** đoán Text vs SearchInput · **cấm** Select 8 nhãn demo |
| realData | DA-REAL §A–§F |
| Grid AC | §6 · DES-GRID-A/B/C/D · filter-bar HARD |
| Form | CatalogFormShell 5col · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · **cấm** tab |
| Leave | §8 LeaveConfirmModal · useAlert |
| Decisions | §9 LOOKUP Dropdown · PREFIX XH- · ROUTE alias board-only · hide-empty grid · dump key `under_operation_by` · dumpSpecs P1 |
| reviewUrl | (Design fill) |
| peerStdUrl | `http://localhost:9301/so-ts?type=RESCUE_VEHICLE` |
| mfeStdUrl | `http://localhost:9301/so-ts-rescue-vehicle` |
| compact | `specs/so-ts-rescue-vehicle/handoff/po-compact.md` |
| next | `/agent-design` · autoApprove ON · e2eQa queued QA |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprint | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| analyzedAt | `2026-09-02T04:15:00.000Z` |
| writtenAt | `2026-09-02T04:16:00.000Z` |
| taskId | `task_0f384c26` |
| status | `confirmed` |
