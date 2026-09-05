# Design — so-ts-bus-stop (Sổ TS — Điểm dừng xe buýt)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
| title | Sổ TS — Điểm dừng xe buýt |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_fd756851`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `BUS_STOP` |
| cluster | `stop` · ô KCHT `t13` |
| dump | `tbl_bus_stops` |
| prefix | `DX-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_1e861241` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-bus-stop-control-hint.md` · `so-ts-bus-stop-real-data.md` · contentHash `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=BUS_STOP` · alias board `/so-ts-bus-stop` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STOP` |
| peerStdUrl | `http://localhost:9301/so-ts?type=BUS_STOP` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_fd756851` |
| updatedAt | `2026-09-01T07:55:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-bus-stop.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `stop` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 BUS_STOP | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/4-tbl_bus_stops-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-bus-stop-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-bus-stop-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `BUS_STOP` · S-ATTR editable đủ dump §4 · `name` ← `station_name` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC type_work/management/pavement/shelter/vitri/bool · grid boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-DD-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-bus-stop` = board deep-link · **optional** redirect → `/so-ts?type=BUS_STOP` (**GAP-DD-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột BUS_STOP |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `BUS_STOP` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `BUS_STOP` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-bus-stop` → `/so-ts?type=BUS_STOP` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên điểm · loại · ĐV QL · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `BUS_STOP` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=BUS_STOP&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=BUS_STOP` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên điểm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại tài sản | Dropdown label | **ON** | dumpSpecs · «Điểm dừng đỗ xe buýt» |
| management_id | Đơn vị QL sử dụng | Dropdown label | **ON** | dumpSpecs · «Sở GTVT» |
| stop_bay | Có làn đậu | boolean label | **ON · luôn** | **không** hide-empty (PO) |
| seated_waiting_bus | Có ghế chờ | boolean label | **ON · luôn** | **không** hide-empty |
| bus_shelter | Có nhà chờ | boolean label | **ON · luôn** | **không** hide-empty |
| vitri | Vị trí mặt cắt | Dropdown label | ON · **hide-empty** | L/R/C |
| length_bus_stop_bay | Chiều dài làn đậu (m) | Number | optional · **hide-empty** | dumpSpecs |
| width_bus_stop_bay | Chiều rộng làn đậu (m) | Number | optional · **hide-empty** | dumpSpecs |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| ferry_* / spillway_* / station_house_* / BUS_STATION-* | — | — | **OFF** | type-other |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DX-` |
| type | Loại tài sản | `SearchInput` | * | lock `BUS_STOP` từ tile `t13` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **không** required · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` | | dump `tinhthanhpho` · omit nếu trống |
| ward | Phường / Xã | `Text` | | dump `xaphuong` · omit nếu trống |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `BUS_STOP` (**GAP-DD-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / station_name | Tên điểm | `Text` | | SSOT dump `station_name` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-DD-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_work_id | Loại tài sản | `Dropdown` LOOKUP_STATIC | * | «Điểm dừng đỗ xe buýt» … · **GAP-DD-LOOKUP-01** |
| management_id | Đơn vị quản lý sử dụng | `Dropdown` LOOKUP_STATIC | | «Sở GTVT» … |
| stop_bay | Có làn đậu xe buýt/xe khách | `Dropdown` boolean | | True/False |
| pavement_type_bus_stop_bay_id | Kết cấu mặt đường làn đậu | `Dropdown` LOOKUP_STATIC | | BTN/BTXM… |
| length_bus_stop_bay | Chiều dài làn đậu (m) | `Number` | | dump |
| width_bus_stop_bay | Chiều rộng làn đậu (m) | `Number` | | dump |
| seated_waiting_bus | Có ghế chờ xe buýt | `Dropdown` boolean | | |
| bus_shelter | Có nhà chờ xe buýt | `Dropdown` boolean | | |
| structure_bus_shelter_id | Kết cấu nhà chờ | `Dropdown` LOOKUP_STATIC | | |
| material_road_refuge | Kết cấu mặt đường nơi chờ | `Dropdown` LOOKUP_STATIC | | |
| length_road_refuge | Chiều dài nơi chờ (m) | `Number` | | |
| width_road_refuge | Chiều rộng nơi chờ (m) | `Number` | | |
| max_slope | Giới hạn nơi chờ / độ dốc max | `Number` / `Text` | | |
| vitri | Vị trí mặt cắt ngang đường | `Dropdown` LOOKUP_STATIC | | Bên trái / Bên phải / Giữa |
| escape_route_structure | Kết cấu đường lánh nạn | `Text` / `Dropdown` | | |
| escape_route_length | Chiều dài đường lánh nạn (m) | `Number` | | |
| escape_route_width | Chiều rộng đường lánh nạn (m) | `Number` | | |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột BUS_STATION/KM_POST/SPILLWAY-only.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Điểm dừng xe buýt» khi `type=BUS_STOP` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách điểm dừng xe buýt» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile BUS_STOP · resize ON |
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
| Artifact | `ui/prototype/so-ts-bus-stop-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=BUS_STOP` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Điểm dừng xe buýt» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile BUS_STOP (ẩn type/kmTo/SL/ĐVT · boolean bay/ghế/nhà chờ ON · hide-empty length/width/vitri)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · DX-
```

Cite mẫu proto row: `DX-bus_stops_523797` · `type_work_id=Điểm dừng đỗ xe buýt` · `management_id=Sở GTVT` · route=`QL.1` · routeNamed=`QL.1 - Lạng Sơn` · routeSegment=`Km 1 + 800 - Km 113 + 985` · lat/lng `21.95` / `106.7` · `stop_bay=False` · `bus_shelter=False` · peer fill `station_name=Tuyến số: 06` · `bus_shelter=True` · import cite `DX-bus_stops_523796`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột BUS_STOP · ẩn type / kmTo / quantity / unitCode · boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC type_work/management/pavement/shelter/vitri/bool — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `BUS_STOP` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `station_name` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=BUS_STOP&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=BUS_STOP`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-DD-LOOKUP-01 | `type_work_id` / `management_id` / `pavement_type_*` / `structure_bus_shelter_id` / `vitri` / bool = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-DD-NAME-01 | `name` ← `station_name` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-DD-ROUTE-01 | Live = `/so-ts?type=BUS_STOP` · alias board-only · optional redirect |
| GAP-DD-PREFIX-01 | IdCode create/import **`DX-`** |
| GAP-DD-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key bay/shelter/escape |
| GAP-DD-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-DD-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `diem-bus` (deep-link optional only)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog bus_stop_* SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `BUS_STOP` · cluster `stop` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html` |
| prototype.artifact | `specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC type_work/management/pavement/shelter/vitri/bool P1 · dumpSpecs P1 · boolean grid luôn ON · hide-empty length/width/vitri |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `DX-` |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `DX-` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T07:55:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f |
| headerFingerprintPrior | sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_fd756851` |
