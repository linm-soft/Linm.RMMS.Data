# Design — so-ts-rest-area (Sổ TS — Trạm dừng nghỉ)

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_a11a8936`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `REST_AREA` |
| cluster | `station` · ô KCHT `t26` |
| dump | `tbl_rest_stops` |
| prefix | `DN-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_7455d425` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-rest-area-control-hint.md` · `so-ts-rest-area-real-data.md` · contentHash `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=REST_AREA` · alias board `/so-ts-rest-area` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=REST_AREA` |
| peerStdUrl | `http://localhost:9301/so-ts?type=REST_AREA` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_a11a8936` |
| updatedAt | `2026-09-01T04:25:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-rest-area.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `station` · ô `t26` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 REST_AREA/PARKING | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/17-moc_dbvn.tbl_rest_stops-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-rest-area-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-rest-area-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `REST_AREA` · S-ATTR editable đủ dump §4 · `name` ← `name_work` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC type_work/categorized/owner/grade/location · grid ON+hide-empty chiều dài/DT/cứu hộ/cấp cứu · parking OFF default · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy · **cấm** lẫn PARKING trong list.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-RA-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-rest-area` = board deep-link · **optional** redirect → `/so-ts?type=REST_AREA` (**GAP-RA-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột REST_AREA · filter `?type=REST_AREA` |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `REST_AREA` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `REST_AREA` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-rest-area` → `/so-ts?type=REST_AREA` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · loại · chủ SH · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `REST_AREA` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=REST_AREA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=REST_AREA` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `name_work` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại công trình | Dropdown label | **ON** | dumpSpecs · «Trạm dừng nghỉ» |
| categorized_id | Xếp loại | Dropdown label | **ON** | dumpSpecs |
| owner_id | Chủ sở hữu | Dropdown label | **ON** | dumpSpecs |
| actual_length | Chiều dài (m) | Number | **ON · hide-empty** | fill 0/null → ẩn cột |
| site_area_using_land | DT khuôn viên (m²) | Number | **ON · hide-empty** | dumpSpecs |
| traffic_emergency_service | Cứu hộ giao thông | Select boolean | **ON · hide-empty** | Có/Không |
| first_aid_service | Cấp cứu | Select boolean | **ON · hide-empty** | Có/Không |
| build_location_id | Vị trí mặt cắt | Dropdown label | optional | L/R/C · SchemaConfig |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| parking_lot / total_parking_lot | Bãi đỗ | Number | **OFF default** | defer peer `so-ts-parking` |
| service_area / office_building_grade_id / total_area_floors | — | — | optional form | SchemaConfig ON nếu cần |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DN-` |
| type | Loại tài sản | `SearchInput` | * | lock `REST_AREA` từ tile `t26` |
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
| build_location_id | Vị trí mặt cắt | `Dropdown` LOOKUP_STATIC | | Bên trái / Bên phải / Giữa · **GAP-RA-LOOKUP-01** |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `REST_AREA` (**GAP-RA-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / name_work | Tên trạm | `Text` | * | SSOT dump `name_work` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-RA-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_work_id | Loại công trình | `Dropdown` LOOKUP_STATIC | * | «Trạm dừng nghỉ» … · **GAP-RA-LOOKUP-01** |
| categorized_id | Xếp loại | `Dropdown` LOOKUP_STATIC | | dump |
| owner_id | Chủ sở hữu | `Dropdown` LOOKUP_STATIC | | «Địa phương» … |
| actual_length | Chiều dài thực tế (m) | `Number` | | dump |
| site_area_using_land | DT khuôn viên sử dụng đất (m²) | `Number` | | dump |
| office_building_grade_id | Cấp nhà làm việc | `Dropdown` LOOKUP_STATIC | | dump |
| total_area_floors | Tổng DT mặt sàn (m²) | `Number` | | dump |
| service_area | Khu vực phục vụ (m²) | `Number` | | dump · **GAP-RA-SPEC-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump · **GAP-RA-SPEC-01** |
| auxiliary_works_grade_id | Cấp công trình phụ | `Dropdown` LOOKUP_STATIC | | dump |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump |
| parking_lot | Bãi đỗ xe | `Select` boolean | | **OFF default** · defer peer `so-ts-parking` |
| total_parking_lot | Tổng DT bãi đỗ (m²) | `Number` | | **OFF default** |
| traffic_emergency_service | Cứu hộ giao thông | `Select` boolean | | dump · **GAP-RA-SPEC-01** |
| first_aid_service | Cấp cứu | `Select` boolean | | dump · **GAP-RA-SPEC-01** |

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

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột PARKING-only default · **cấm** lẫn `PARKING` trong REST_AREA list (**GAP-RA-SPLIT-01**).

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Trạm dừng nghỉ» khi `type=REST_AREA` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách trạm dừng nghỉ» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile REST_AREA · resize ON |
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
| Artifact | `ui/prototype/so-ts-rest-area-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=REST_AREA` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Trạm dừng nghỉ» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile REST_AREA (ẩn type/kmTo/SL/ĐVT/parking · ON+hide-empty chiều dài/DT/cứu hộ/cấp cứu)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · parking OFF default
```

Cite mẫu proto row: `DN-rest_stops_761412` · `name=Trạm dừng chân Mê Kông - Hải Vân` · `type_work_id=Trạm dừng nghỉ` · `route=QL.1` · `routeNamed=QL.1-DANANG-DEOCA(BOT)` · `routeSegment=Km 7 + 923 - Km 12 + 182` · `kmFrom=` (nullable) · lat/lng `16.14` / `108.11` · peer fill `DN-rest_stops_761928` · `name=Bình An` · `routeNamed=QL.1-DANANG(BOT)` · lat/lng `15.63` / `108.44`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột REST_AREA · ẩn type / kmTo / quantity / unitCode / parking default · ON+hide-empty chiều dài/DT/cứu hộ/cấp cứu |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-G-09 | Filter/import **tách** REST_AREA vs PARKING (**GAP-RA-SPLIT-01**) |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `REST_AREA` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `name_work` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | parking_lot / total_parking_lot **OFF default** · defer peer `so-ts-parking` |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=REST_AREA&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=REST_AREA`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-RA-LOOKUP-01 | `type_work_id` / `categorized_id` / `owner_id` / `office_building_grade_id` / `auxiliary_works_grade_id` / `build_location_id` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-RA-NAME-01 | `name` ← `name_work` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-RA-ROUTE-01 | Live = `/so-ts?type=REST_AREA` · alias board-only · optional redirect `/so-ts-rest-area` |
| GAP-RA-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key REST_AREA |
| GAP-RA-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | ON+hide-empty: chiều dài · DT khuôn viên · cứu hộ GT · cấp cứu |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-RA-SPLIT-01 | Filter/import **tách** REST_AREA vs PARKING · **cấm** gộp list |
| GAP-RA-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-PARKING-DEFER | `parking_lot` / `total_parking_lot` **OFF default** · defer peer `so-ts-parking` |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `tram-dung-nghi` deep-link (optional out)
- Flatten `dumpSpecs` → cột DB (SA migration)
- parking_lot profile default (peer `so-ts-parking`)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `REST_AREA` · cluster `station` · dump `tbl_rest_stops` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html` |
| prototype.artifact | `specs/so-ts-rest-area/ui/prototype/so-ts-rest-area-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC P1 · dumpSpecs P1 · hide-empty · REST/PARKING split |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DOMAIN-MAP Asset · REST/PARKING split |
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
| generatedAt | 2026-09-01T04:25:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc |
| headerFingerprintPrior | sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_a11a8936` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc taskId=task_a11a8936 -->
