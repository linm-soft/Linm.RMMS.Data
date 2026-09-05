# Design — so-ts-its-camera (Sổ TS — Hệ thống ITS)

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| title | Sổ TS — Hệ thống ITS |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_33ab0873`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `ITS_CAMERA` |
| cluster | `ops` · ô KCHT **`t19`** |
| dump | `tbl_its` |
| prefix | `IT-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_3df3fca9` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-its-camera-control-hint.md` · `so-ts-its-camera-real-data.md` · contentHash `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=ITS_CAMERA` · alias board `/so-ts-its-camera` |
| mfeStdUrl | `http://localhost:9301/so-ts-its-camera` |
| peerStdUrl | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_33ab0873` |
| updatedAt | `2026-09-02T03:54:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · merge `camera-connect` (IP/RTSP/ONVIF) · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · invent map canvas · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-its-camera.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `ops` · ô `t19` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 ITS_CAMERA | dump columns · `tn_*` |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/25-moc_dbvn.tbl_its-{list,detail}.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-its-camera-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-its-camera-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `ITS_CAMERA` · S-ATTR editable đủ dump §4 + `tn_*` · `name` ← `location_name_its_ccroom` · trống OK · ẩn `kmTo` form · Dropdown LOOKUP_STATIC type_management_center / location_its · grid ON mẫu + hide-empty cột thiết bị khi 0/null · `LeaveConfirmModal` · reuse S-* · alias optional · tile `t19` count import **9** · **cấm** camera-connect fields.

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** catalog list + form **full-page** (≥10 field — **cấm** Modal / Slideout) |
| List pattern | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested `CatalogListShell` |
| Form pattern | **full-page** `AssetFormPage` · routes `/so-ts/tao-moi` · `/so-ts/sua?id=` · Copy = create prefill — **cấm** Resource · **cấm** overlay `?form=` |
| Form grid | **`data-form-cols="5"`** · **cấm** `.fields { 1fr 1fr }` (**GAP-DES-FORM-SURFACE-01** / **GAP-P2-FORM-GRID-05**) |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` §0 · config=`fa-cog` |
| Zone F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · catalogKind=`road-assets` · **cấm** `configHint` · **cấm** `LinListTableConfigModal` |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** nút Tìm · **cấm** `ErpListHeaderFilters` / stack (**GAP-FILTER-BAR-01/07**) |
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-its-camera` = board deep-link · **optional** redirect → `/so-ts?type=ITS_CAMERA` (**GAP-ITS-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột ITS_CAMERA |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `ITS_CAMERA` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `ITS_CAMERA` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-its-camera` → `/so-ts?type=ITS_CAMERA` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** camera-connect / oms-map / ai-detect).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên phòng ITS · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `ITS_CAMERA` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=ITS_CAMERA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=ITS_CAMERA` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên phòng điều hành ITS | link Text | **ON** | bind `location_name_its_ccroom` / `name` · **GAP-ITS-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_management_center_id | Loại trung tâm điều hành | Text / Dropdown label | **ON** | Theo tuyến / Theo khu vực |
| location_its_central_control_id | Vị trí phòng ITS | Text / Dropdown label | ON · hide-empty | Trên tuyến / Khác |
| tn_vms_interface | Tổng số thiết bị giao diện VMS | Number | ON · hide-empty | dumpSpecs |
| tn_screen_controller | Tổng số bộ điều khiển màn hình | Number | ON · hide-empty | dumpSpecs |
| tn_data_server | Tổng số máy chủ dữ liệu | Number | ON · hide-empty | dumpSpecs |
| tn_wim_high_speed | Tổng số bộ kiểm tra tải trọng tốc độ cao | Number | ON · hide-empty | dumpSpecs |
| tn_cable_duct_length | Tổng chiều dài hệ thống cống cáp | Number | ON · hide-empty | dumpSpecs · km |
| tn_fiber_optic_length | Tổng chiều dài cáp quang | Number | ON · hide-empty | dumpSpecs |
| tn_its_pole | Tổng số trụ đỡ ITS | Number | ON · hide-empty | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| tn_cctv_monitoring … tn_incident_data_management | Thiết bị detail-only | — | **OFF** grid | form S-ATTR only |

Grid = `useCatalogUiSchema('road-assets')` + type-profile. Kéo cột default **ON**. Hide-empty cột số khi giá trị 0/null (**GAP-SOTS-COL-01**).

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `IT-` |
| type | Loại tài sản | `SearchInput` | * | lock `ITS_CAMERA` khi create từ tile `t19` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | `road-route` · `parentCode=route` · dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | `road-route` · `parentCode=routeNamed\|route` · dump `name_of_route_asset` |

#### S-LOC-POINT

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` | | dump `tinhthanhpho` · omit nếu trống |
| ward | Phường / Xã | `Text` | | dump `xaphuong` · omit nếu trống |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `ITS_CAMERA` (**GAP-ITS-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên phòng điều hành ITS | `Text` | | SSOT `location_name_its_ccroom` · import hay = route · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-ITS-NAME-01**) |

#### S-ATTR — Phòng điều hành (editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_management_center_id | Loại trung tâm điều hành | `Dropdown` LOOKUP_STATIC | | Theo tuyến / Theo khu vực · **GAP-ITS-LOOKUP-01** |
| location_name_its_ccroom | Tên vị trí phòng điều hành ITS | `Text` | | mirror S-NAME |
| location_its_central_control_id | Vị trí phòng điều hành | `Dropdown` LOOKUP_STATIC | | Trên tuyến / Khác · **GAP-ITS-LOOKUP-01** |

#### S-ATTR — Thiết bị trên cao tốc (đủ dump §4 `tn_*`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| tn_cctv_monitoring | Tổng số thiết bị giám sát CCTV | `Number` | | dump · detail-only grid |
| tn_traffic_event_detection | Tổng số thiết bị phát hiện sự kiện giao thông | `Number` | | dump |
| tn_vms_interface | Tổng số thiết bị giao diện VMS | `Number` | | dump · grid ON hide-empty |
| tn_traffic_analysis | Tổng số thiết bị phân tích giao thông | `Number` | | dump |
| tn_screen_controller | Tổng số bộ điều khiển màn hình | `Number` | | dump · grid ON hide-empty |
| tn_traffic_analysis_processor | Tổng số bộ xử lý phân tích giao thông | `Number` | | dump |
| tn_incident_data_management | Tổng số hệ thống quản lý dữ liệu sự cố | `Number` | | dump |
| tn_data_server | Tổng số máy chủ dữ liệu | `Number` | | dump · grid ON hide-empty |
| tn_wim_high_speed | Tổng số bộ kiểm tra tải trọng tốc độ cao | `Number` | | dump · grid ON hide-empty |
| tn_cable_duct_length | Tổng chiều dài hệ thống cống cáp (km) | `Number` | | dump · grid ON hide-empty |
| tn_fiber_optic_length | Tổng chiều dài cáp quang (km) | `Number` | | dump · grid ON hide-empty |
| tn_its_pole | Tổng số trụ đỡ ITS | `Number` | | dump · grid ON hide-empty |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select/Number.

**Không mount:** quantity/unit · tab legacy · field camera-connect (IP/RTSP/ONVIF) · **GAP-ITS-CAM-01**.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Hệ thống ITS» khi `type=ITS_CAMERA` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách hệ thống ITS» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile ITS_CAMERA · resize ON · cột ON mẫu · hide-empty |
| DES-GRID-C3 | Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome: Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | Sections S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` overlay |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/so-ts-its-camera-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Hệ thống ITS» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile ITS_CAMERA (ẩn type/kmTo/SL/ĐVT · ON mẫu attr §4 · hide-empty)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · S-ATTR phòng ITS + thiết bị tn_* · cấm camera-connect
```

Cite mẫu proto row: `IT-its_779825` · `name=QL.1` (weak) · `type=ITS_CAMERA` · route=`QL.1` · routeNamed=`QL.1-TP.HUE(BOT)` · routeSegment=`Km 0 + 000 - Km 13 + 377` · lat/lng `12.88` / `109.37` · `kmFrom` trống · status `tot` · source dump `tbl_its:its_779825`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột ITS_CAMERA · ẩn type / kmTo / quantity / unitCode · **ON mẫu** tên phòng · tuyến · lý trình · TTĐH · vị trí phòng · VMS/màn hình/máy chủ/WIM · cống/cáp · trụ · hide-empty cột số |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 + `tn_*` · Dropdown LOOKUP_STATIC — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `ITS_CAMERA` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` = `location_name_its_ccroom` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-T-01 | KCHT tile `t19` drill OK · list count import **9** |
| AC-S-01 | **Cấm** field camera-connect (IP/RTSP/ONVIF) trong form ITS — **GAP-ITS-CAM-01** |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=ITS_CAMERA&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=ITS_CAMERA`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` — tile `t19` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-ITS-LOOKUP-01 | `type_management_center_id` / `location_its_central_control_id` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-ITS-NAME-01 | `name` = `location_name_its_ccroom` · trống OK · **cấm** IsWeak đoạn tuyến làm tên duy nhất |
| GAP-ITS-ROUTE-01 | Live = `/so-ts?type=ITS_CAMERA` · alias board-only · **optional** Navigate redirect |
| GAP-ITS-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key ITS §4 |
| GAP-ITS-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | Grid **ON mẫu** + hide-empty cột số khi 0/null · ẩn type/kmTo/SL/ĐVT |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-ITS-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-ITS-PREFIX-01 | IdCode prefix **`IT-`** — SA `DefaultCodePrefix` |
| GAP-ITS-CAM-01 | **Tách scope** camera-connect · **cấm** merge form IP/RTSP/ONVIF |
| GAP-ITS-DUMP-KEY-01 | defer SA cite header `moc_dbvn.tbl_its.*.csv` cho `tn_*` |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / invent GIS map
- Flatten `dumpSpecs` → cột DB (SA migration)
- Field camera-connect (IP/RTSP/ONVIF)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `ITS_CAMERA` · cluster `ops` · ô `t19` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html` |
| prototype.artifact | `specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC P1 · dumpSpecs P1 · grid ON mẫu · hide-empty |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `IT-` · dump key map `tn_*` · DOMAIN-MAP Asset |
| Next | `/agent-sa` khi tới lượt · **cấm** start SA trong task Design này |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | 2026-09-02T03:54:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946 |
| headerFingerprintPrior | sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_33ab0873` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked contentHashPriorDataAnaly=sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946 taskId=task_33ab0873 -->
