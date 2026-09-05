# Design — so-ts-median (Sổ TS — Dải phân cách giữa)

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
| title | Sổ TS — Dải phân cách giữa |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_e2599798`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `MEDIAN` |
| cluster | `linear_protect` · ô KCHT `t11` |
| dump | `tbl_median_strip` · CSV gov-vn **6829** · unit `ATGT` |
| prefix | `PC-` (GIS short `GPC`) |
| prior · po | `confirmed` · `po/requirement.md` · handoff `po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-median-control-hint.md` · `so-ts-median-real-data.md` · contentHash `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=MEDIAN` · alias board `/so-ts-median` |
| mfeStdUrl | `http://localhost:9301/so-ts-median` |
| peerStdUrl | `http://localhost:9301/so-ts?type=MEDIAN` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| GIS | layer `dai-phan-cach` · deep-link optional · page filter **MEDIAN only** |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_e2599798` |
| updatedAt | `2026-09-01T17:30:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · cột ảnh invent · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-median.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `linear_protect` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 MEDIAN | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/23-moc_dbvn.tbl_median_strip-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-median-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-median-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `MEDIAN` · S-ATTR editable đủ 10 key dump §4 · list primary = `type_median_strip_id` · S-LOC-RANGE km* + 4 XY · Dropdown LOOKUP_STATIC loại dải/VL hàng rào/vị trí · Select bool cỏ/cây · `name` optional · `LeaveConfirmModal` · prefix `PC-` · reuse S-* — **không** invent field ngoài PO/analy.

**PO chốt (Design khóa):** GAP-MEDIAN-LOOKUP-01 = Dropdown LOOKUP_STATIC P1 · GAP-MEDIAN-NAME-01 name optional · primary=`type_median_strip_id` · GAP-MEDIAN-BOOL-01 Select boolean · GAP-MEDIAN-PREFIX-01 `PC-` · GAP-MEDIAN-RANGE-01 S-LOC-RANGE + 4 XY dumpSpecs · GAP-MEDIAN-SPEC-01 FE labels đủ 10 key · Flatten dumpSpecs P1 · GAP-MEDIAN-ROUTE-01 live filter + optional alias Navigate.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-MEDIAN-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-median` = board deep-link · **optional** redirect → `/so-ts?type=MEDIAN` (**GAP-MEDIAN-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột MEDIAN |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `MEDIAN` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `MEDIAN` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-median` → `/so-ts?type=MEDIAN` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại dải · tuyến · QR · địa danh · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `MEDIAN` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=MEDIAN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=MEDIAN` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| type_median_strip_id | Loại dải phân cách | Dropdown label | **ON** | dumpSpecs · **list primary** · link mở View |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | RANGE · mẫu list |
| length_median_strip | Chiều dài dải (m) | Number | ON | dumpSpecs · mẫu list |
| width_median_strip | Chiều rộng dải (m) | Number | ON | dumpSpecs · mẫu list |
| planting_grass | Trồng cỏ | Select bool label | ON | **GAP-MEDIAN-BOOL-01** |
| planting_grass_area | DT trồng cỏ (m²) | Number | hide-empty | dumpSpecs |
| planting_tree | Trồng cây | Select bool label | ON | **GAP-MEDIAN-BOOL-01** |
| number_tree | Số cây | Number | hide-empty | dumpSpecs |
| height_fence | Chiều cao hàng rào (m) | Number | ON | dumpSpecs · mẫu list |
| material_type_fence_id | Vật liệu hàng rào | Text | ON | dumpSpecs · mẫu list |
| location_median_strip_id | Vị trí dải | Dropdown label | hide-empty | dumpSpecs |
| provinceFrom / communeFrom | Địa danh điểm đầu | Text | hide-empty | dumpSpecs |
| provinceTo / communeTo | Địa danh điểm cuối | Text | hide-empty | dumpSpecs |
| name | Tên | link Text | optional | **GAP-MEDIAN-NAME-01** · không bắt buộc |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | hide-empty | unit seed `ATGT` · **không** bắt buộc grid |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `PC-` |
| type | Loại tài sản | `SearchInput` | * | lock `MEDIAN` từ tile `t11` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | `road-route` · `parentCode=route` · dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | `road-route` · `parentCode=routeNamed\|route` · dump `name_of_route_asset` |

#### S-LOC-RANGE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình điểm đầu (Km+) | `Text` chainage | * | mẫu detail · **cấm** ép `"0"` |
| kmTo | Lý trình điểm cuối (Km+) | `Text` chainage | * | mẫu có giá trị |
| latFrom / lngFrom | Tọa độ điểm đầu Y / X | `Number` | | dump `from_coordinatey/x` (Y→lat · X→lng) |
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-MEDIAN-RANGE-01** |
| provinceFrom / provinceTo | Địa danh tỉnh đầu/cuối | `Text` | | mẫu ĐVHC |
| communeFrom / communeTo | Địa danh xã đầu/cuối | `Text` | | hide-empty |

**Không mount** `S-LOC-POINT` thay RANGE cho type này (cluster `linear_protect`).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-MEDIAN-NAME-01** · **cấm** bắt buộc đoạn tuyến |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_median_strip_id | Loại dải phân cách | `Dropdown` LOOKUP_STATIC | * | dump distinct · **GAP-MEDIAN-LOOKUP-01** |
| length_median_strip | Chiều dài dải (m) | `Number` | * | dumpSpecs · mẫu list |
| width_median_strip | Chiều rộng dải (m) | `Number` | | dumpSpecs · mẫu list |
| planting_grass | Trồng cỏ | `Select` boolean | | Có/Không · **GAP-MEDIAN-BOOL-01** |
| planting_grass_area | Diện tích trồng cỏ (m²) | `Number` | | hide-empty grid |
| planting_tree | Trồng cây | `Select` boolean | | Có/Không · **GAP-MEDIAN-BOOL-01** |
| number_tree | Số cây | `Number` | | hide-empty |
| height_fence | Chiều cao hàng rào (m) | `Number` | | dumpSpecs · mẫu list |
| material_type_fence_id | Vật liệu hàng rào | `Dropdown` LOOKUP_STATIC | | **GAP-MEDIAN-LOOKUP-01** |
| location_median_strip_id | Vị trí dải phân cách | `Dropdown` | | LOOKUP_STATIC / init `vitriOptions` · hide-empty |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select. FE `dumpSpecLabels` đủ **10 key** (**GAP-MEDIAN-SPEC-01**).

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | có thể = latFrom |
| lng | Kinh độ | `Number` | | có thể = lngFrom |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột ảnh invent · KM_POST-only · quantity/unit bắt buộc trên grid.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Dải phân cách giữa» khi `type=MEDIAN` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách dải phân cách giữa» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile MEDIAN · resize ON |
| DES-GRID-C3 | Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome: Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | Sections S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` overlay |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/so-ts-median-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=MEDIAN` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Dải phân cách giữa» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile MEDIAN (ẩn type/ảnh · ON loại dải · 3 tầng · kmFrom/kmTo · dài/rộng · cỏ/cây · hàng rào · hide-empty vị trí/địa danh/DT cỏ/số cây)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · S-LOC-RANGE km*+4XY · S-ATTR Dropdown+Number+Select bool · cấm footer Lưu · LeaveConfirmModal · prefix PC-
```

Cite mẫu proto row: `Cứng` · route=`CT.Hà Nội – Hải Phòng` · km `12+100`→`12+450` · dài `350` · rộng `2.5` · cỏ Có · cây Không · hàng rào `1.2` · VL Thép · peer `Mềm` · km `45+200`→`45+680` · XY `105.864/20.899`→`105.866/20.897`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột MEDIAN · ẩn type / ảnh · ON loại dải / 3 tầng / kmFrom / kmTo / dài / rộng / cỏ / cây / cao hàng rào / VL · hide-empty vị trí/địa danh/DT cỏ/số cây |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ 10 key dump §4 · Dropdown LOOKUP_STATIC loại/VL/vị trí · Select bool cỏ/cây — **cấm** chỉ `<dl>` |
| AC-F-03 | S-LOC-RANGE · kmFrom/kmTo * · 4 XY dumpSpecs · **cấm** ép `"0"` · **không** mount S-LOC-POINT |
| AC-F-04 | `name` optional · list primary = loại dải — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-P-03 | Page filter `MEDIAN` only · live `/so-ts?type=MEDIAN` · alias board optional |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=MEDIAN&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=MEDIAN`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-MEDIAN-LOOKUP-01 | `type_median_strip_id` / `material_type_fence_id` / `location_median_strip_id` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-MEDIAN-NAME-01 | `name` optional · list primary = `type_median_strip_id` · **cấm** IsWeak đoạn tuyến |
| GAP-MEDIAN-BOOL-01 | `planting_grass` / `planting_tree` = **Select boolean** (Có/Không) — **không** Text dump P1 |
| GAP-MEDIAN-ROUTE-01 | Live = `/so-ts?type=MEDIAN` · alias board-only · optional redirect |
| GAP-MEDIAN-PREFIX-01 | IdCode create/import **`PC-`** · GIS short `GPC` |
| GAP-MEDIAN-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ **10 key** MEDIAN |
| GAP-MEDIAN-RANGE-01 | S-LOC-RANGE · km* + 4 XY dumpSpecs P1 · **cấm** ép `"0"` · **không** S-LOC-POINT |
| GAP-SOTS-COL-01 | ON loại dải / 3 tầng / km / dài / rộng / cỏ / cây / hàng rào · ẩn type/ảnh · hide-empty vị trí/địa danh |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-MEDIAN-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `dai-phan-cach` (deep-link optional only)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog SearchInput cho lookup MEDIAN (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `MEDIAN` · cluster `linear_protect` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html` |
| prototype.artifact | `specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC · Select bool cỏ/cây · dumpSpecs P1 · S-LOC-RANGE · hide-empty vị trí/địa danh |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `PC-` |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE (10 key MEDIAN) · DefaultCodePrefix `PC-` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T17:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5 |
| headerFingerprintPrior | sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.01 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_e2599798` |
