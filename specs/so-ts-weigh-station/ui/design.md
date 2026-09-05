# Design — so-ts-weigh-station (Sổ TS — Trạm kiểm soát tải)

| Field | Value |
|-------|-------|
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_d6606268`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `WEIGH_STATION` |
| cluster | `station` · ô KCHT `t27` |
| dump | `weight_station` |
| prefix | `TFP-` (keep · shared TOLL · **GAP-WEIGH-PREFIX-01**) |
| prior · po | `confirmed` · `po/requirement.md` · task `task_f4a717d3` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-weigh-station-control-hint.md` · `so-ts-weigh-station-real-data.md` · contentHash `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=WEIGH_STATION` · alias board `/so-ts-weigh-station` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=WEIGH_STATION` |
| peerStdUrl | `http://localhost:9301/so-ts?type=WEIGH_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_d6606268` |
| updatedAt | `2026-09-01T06:15:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-weigh-station.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `station` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 WEIGH_STATION | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-weigh-station-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-weigh-station-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `WEIGH_STATION` · S-ATTR editable đủ dump §4 · `name` ← `station_name` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC management/equipment/pavement · boolean Có/Không · grid ON+hide-empty TB cân/tải/ĐVQL/DT nhà · approaching_road gộp form · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-WEIGH-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-weigh-station` = board deep-link · **optional** redirect → `/so-ts?type=WEIGH_STATION` (**GAP-WEIGH-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột WEIGH_STATION |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `WEIGH_STATION` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `WEIGH_STATION` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-weigh-station` → `/so-ts?type=WEIGH_STATION` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `WEIGH_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=WEIGH_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=WEIGH_STATION` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_weighting_equipment_id | Loại thiết bị cân | Dropdown label | **ON · hide-empty** | dumpSpecs |
| max_axle_load_limit | Tải trọng trục tối đa | Number / Text | **ON · hide-empty** | dumpSpecs |
| management_unit_id | Đơn vị quản lý | Dropdown label | **ON · hide-empty** | dumpSpecs |
| building_area | DT nhà (m²) | Number | **ON · hide-empty** | dumpSpecs |
| site_area_installed_equipment | DT khu lắp TB (m²) | Number | optional / hide-empty | dumpSpecs · SchemaConfig |
| camera_observation | Camera giám sát | boolean label | optional / hide-empty | Có/Không |
| light | Đèn chiếu sáng | boolean label | optional / hide-empty | Có/Không |
| length_approaching_road | Chiều dài đường vào (m) | Number | **OFF default** | form ON · SchemaConfig ON |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `TFP-` |
| type | Loại tài sản | `SearchInput` | * | lock `WEIGH_STATION` từ tile `t27` |
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
| location | Vị trí | `Text` | | dump `location` · dumpSpecs |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `WEIGH_STATION` (**GAP-WEIGH-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / station_name | Tên trạm | `Text` | * | SSOT dump `station_name` · label «Tên trạm» · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-WEIGH-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| site_area_installed_equipment | DT khu vực lắp thiết bị (m²) | `Number` | | dump |
| management_unit_id | Đơn vị quản lý | `Dropdown` LOOKUP_STATIC | | **GAP-WEIGH-LOOKUP-01** |
| building_area | Diện tích nhà (m²) | `Number` | | dump |
| includes_load_reduction_area | Có khu vực giảm tải | `Dropdown` boolean Có/Không | | **GAP-WEIGH-LOOKUP-01** |
| light | Đèn chiếu sáng | `Dropdown` boolean Có/Không | | |
| camera_observation | Camera giám sát | `Dropdown` boolean Có/Không | | |
| equipment_measurement_vehicle_size | Thiết bị đo kích thước xe | `Dropdown` boolean Có/Không | | |
| type_weighting_equipment_id | Loại thiết bị cân | `Dropdown` LOOKUP_STATIC | | **GAP-WEIGH-LOOKUP-01** |
| origin_manufacturing | Xuất xứ / nơi sản xuất | `Text` | | dump |
| year_manufacturing | Năm sản xuất | `Number` / `Text` | | dump |
| max_axle_load_limit | Tải trọng trục tối đa | `Number` / `Text` | | dump |
| approval_code_number | Số hiệu phê duyệt | `Text` | | dump |
| inspection_date_weight_station | Ngày kiểm định trạm cân | `Date` local | | `utcToLocalInputValue` |
| length_approaching_road | Chiều dài đường vào (m) | `Number` | | **gộp nhóm** Đường vào |
| width_approaching_road | Chiều rộng đường vào (m) | `Number` | | **gộp nhóm** Đường vào |
| pavement_type_id | Loại mặt đường | `Dropdown` LOOKUP_STATIC | | **GAP-WEIGH-LOOKUP-01** |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select. Nhóm «Đường vào»: `length_approaching_road` + `width_approaching_road` cạnh nhau (cùng row / visual group) — **không** tách section mới.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột type-other.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Trạm kiểm soát tải» khi `type=WEIGH_STATION` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách trạm kiểm soát tải» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile WEIGH_STATION · resize ON |
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
| Artifact | `ui/prototype/so-ts-weigh-station-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=WEIGH_STATION` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Trạm kiểm soát tải» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile WEIGH_STATION (ẩn type/kmTo/SL/ĐVT · ON+hide-empty TB cân/tải/ĐVQL/DT nhà · length_approaching OFF)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · S-ATTR gộp Đường vào (length+width)
```

Cite mẫu proto row: `TFP-weight_station_1001` · `name=Trạm cân QL1 Hà Nam` · `type_weighting_equipment_id=Cân động` · `max_axle_load_limit=10` · `management_unit_id=Khu QLĐB II` · `building_area=120` · route=`QL.1` · routeNamed=`QL.1 - Hà Nam` · routeSegment=`Km 210 + 000 - Km 225 + 000` · `kmFrom=212.5` · lat/lng `20.54` / `105.92` · peer fill `TFP-weight_station_1002` · count cite import **24**.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột WEIGH_STATION · ẩn type / kmTo / quantity / unitCode · ON+hide-empty TB cân / tải max / ĐVQL / DT nhà · length_approaching OFF default · optional camera/đèn/DT khu lắp |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC management/equipment/pavement · boolean Có/Không — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `WEIGH_STATION` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `station_name` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | Form gộp `length_approaching_road` + `width_approaching_road` nhóm Đường vào |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-T-01 | KCHT ô `t27` · drill `WEIGH_STATION` · count cite **24** (**GAP-WEIGH-TILE-01**) |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=WEIGH_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=WEIGH_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-WEIGH-LOOKUP-01 | `management_unit_id` / `type_weighting_equipment_id` / `pavement_type_id` = **Dropdown LOOKUP_STATIC** dump P1 · boolean 4 flags = Dropdown **Có/Không** — **không** SearchInput master |
| GAP-WEIGH-NAME-01 | `name` ← `station_name` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-WEIGH-ROUTE-01 | Live = `/so-ts?type=WEIGH_STATION` · alias board-only · **optional** Navigate redirect |
| GAP-WEIGH-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key §4 WEIGH |
| GAP-WEIGH-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only + `location` |
| GAP-WEIGH-PREFIX-01 | **Giữ `TFP-`** live (shared TOLL) · **cấm** invent prefix FE — SA doc |
| GAP-SOTS-COL-01 | ON+hide-empty: TB cân · tải max · ĐVQL · DT nhà · optional DT khu lắp/camera/đèn · length_approaching OFF default |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-WEIGH-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-WEIGH-TILE-01 | KCHT `t27` · count **24** · deep-link filter type OK |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `tram-can` (deep-link optional out of list)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog weigh_* SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- Invent prefix FE tách TOLL
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-weigh-station` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `WEIGH_STATION` · cluster `station` · ô `t27` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html` |
| prototype.artifact | `specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC management/equipment/pavement · bool Có/Không · dumpSpecs P1 · hide-empty · approaching_road group |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `TFP-` doc |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DOMAIN-MAP Asset · GAP-WEIGH-PREFIX-01 |
| Next | `/agent-sa` khi tới lượt · **cấm** start SA trong task Design này |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T06:15:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a |
| headerFingerprintPrior | sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_d6606268` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a taskId=task_d6606268 -->
