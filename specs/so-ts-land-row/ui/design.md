# Design — so-ts-land-row (Sổ TS — Đất thuộc TS HT)

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_0abc91dc`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `LAND_ROW` |
| cluster | `land` · ô KCHT `t33` |
| dump | `tbl_land_btra` |
| prefix | `DT-` (GIS `HT` giữ) |
| prior · po | `confirmed` · `po/requirement.md` · task `task_d3a42912` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-land-row-control-hint.md` · `so-ts-land-row-real-data.md` · contentHash `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=LAND_ROW` · alias board `/so-ts-land-row` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=LAND_ROW` |
| peerStdUrl | `http://localhost:9301/so-ts?type=LAND_ROW` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_0abc91dc` |
| updatedAt | `2026-09-01T08:35:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-land-row.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `land` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 LAND_ROW | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/9-tbl_land_btra-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-land-row-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-land-row-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `LAND_ROW` · S-ATTR editable đủ dump §4 · `name` ← `construction` · S-LOC-RANGE · ẩn `kmTo` fill 0 · Dropdown LOOKUP_STATIC status/exploited/pavement/location/access_road · grid CT/tuyến/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · hide-empty length/width/xaphuong · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-LAND-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-land-row` = board deep-link · **optional** redirect → `/so-ts?type=LAND_ROW` (**GAP-LAND-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột LAND_ROW |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `LAND_ROW` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `LAND_ROW` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-land-row` → `/so-ts?type=LAND_ROW` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · CT trên đất · CQ · tuyến · tỉnh · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `LAND_ROW` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=LAND_ROW&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=LAND_ROW` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Công trình trên đất | link Text | **ON** | bind `name` = `construction` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (có thể trống) |
| status_land_lot_id | Tình trạng thửa đất | Dropdown label | **ON** | dumpSpecs · «Có công trình» |
| xaphuong | Phường / Xã | Text | ON · **hide-empty** | dumpSpecs |
| tinhthanhpho | Tỉnh / TP | Text | ON | dumpSpecs |
| under_managemen | Cơ quan chủ quản | Text | ON | dumpSpecs · typo key dump giữ |
| under_operation | Cơ quan đang khai thác | Text | ON | dumpSpecs |
| length | Chiều dài (m) | Number | ON · **hide-empty** | dumpSpecs |
| width | Chiều rộng (m) | Number | ON · **hide-empty** | dumpSpecs |
| total_area | Tổng DT thửa đất (m²) | Number | **ON** | dumpSpecs |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** / hide-empty | mẫu không cột |
| quantity / unitCode | SL / ĐVT | — | **OFF** | unit seed `HTKT` |
| ferry_* / bus_* / spillway_* | — | — | **OFF** | type-other |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DT-` |
| type | Loại tài sản | `SearchInput` | * | lock `LAND_ROW` từ tile `t33` |
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
| kmFrom | Lý trình đầu (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| kmTo | Lý trình cuối | `Text` chainage | | **ẩn**/optional · fill 0 · **GAP-LAND-RANGE-01** |
| lat / lng (đầu) | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` | | dump `tinhthanhpho` |
| ward | Phường / Xã | `Text` | | dump `xaphuong` |
| location_id | Vị trí mặt cắt ngang đường | `Dropdown` LOOKUP_STATIC | | Bên trái / Bên phải |

**Không mount** `S-LOC-POINT` thay RANGE (parent cluster `land`).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / construction | Công trình trên đất | `Text` | | dump `construction` · trống OK · **cấm** IsWeak → đoạn tuyến (**GAP-LAND-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| construction | Công trình trên đất | `Text` | | mirror S-NAME |
| status_land_lot_id | Tình trạng thửa đất | `Dropdown` LOOKUP_STATIC | * | «Có công trình» … · **GAP-LAND-LOOKUP-01** |
| under_managemen | Cơ quan chủ quản | `Text` | | dump typo key giữ |
| under_operation | Cơ quan đang khai thác | `Text` | | dump |
| exploited_id | Hình thức khai thác | `Dropdown` LOOKUP_STATIC | | «Cho thuê có thời hạn» … |
| length | Chiều dài (m) | `Number` | | dump |
| width | Chiều rộng (m) | `Number` | | dump |
| total_area | Tổng diện tích thửa đất (m²) | `Number` | | dump |
| width_access_road | Chiều rộng đường vào (m) | `Number` | | dump |
| pavement_type_access_road_id | Kết cấu mặt đường vào | `Dropdown` LOOKUP_STATIC | | BTN / Bê tông xi măng … |
| distance_road_center | Khoảng cách đến tim đường (km) | `Number` | | dump |
| access_road | Đường vào (Có/Không) | `Dropdown` boolean | | hide-empty grid |
| location_id | Vị trí mặt cắt ngang đường | `Dropdown` LOOKUP_STATIC | | L/R · có thể mirror S-LOC |
| lengthiness_access_road | Chiều dài đường vào thửa đất (m) | `Number` | | dump §4 · hide-empty |

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

**Không mount:** quantity/unit trên form LAND_ROW · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột type-other.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Đất thuộc TS HT» khi `type=LAND_ROW` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách đất thuộc TS HT» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile LAND_ROW · resize ON |
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
| Artifact | `ui/prototype/so-ts-land-row-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=LAND_ROW` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Đất thuộc TS HT» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile LAND_ROW (ẩn type/kmTo/SL/ĐVT · ON CT/tuyến/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · hide-empty length/width/xaphuong)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · S-LOC-RANGE · ẩn kmTo fill 0 · cấm footer Lưu · LeaveConfirmModal · prefix DT-
```

Cite mẫu proto row: `DT-land_btra_404989` · `construction=Nhà hạt` · `status_land_lot_id=Có công trình` · `under_managemen=Chi cục QLĐB III.3` · `under_operation=Công Ty TNHH ĐT 194-BOT-QL1 -Cam Ranh` · `exploited_id=Cho thuê có thời hạn` · `length=48` · `width=50` · `total_area=2400` · `width_access_road=6` · `pavement_type_access_road_id=Bê tông xi măng` · `location_id=Bên trái` · route=`QL.1` · routeNamed=`QL.1 - Khánh Hòa (BOT)` · routeSegment=`Km 1488 + 000 - Km 1525 + 000` · lat/lng `11.93` / `109.18` · peer `DT-land_btra_404990` · `construction=Trạm thu phí` · `location_id=Bên phải` · `total_area=1500`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột LAND_ROW · ẩn type / kmTo / quantity / unitCode · ON CT/tuyến/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · hide-empty length/width/xaphuong |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC status/exploited/pavement/location/access_road — **cấm** chỉ `<dl>` |
| AC-F-03 | S-LOC-RANGE · ẩn + không required `kmTo` fill 0 · **cấm** ép `"0"` · **không** mount S-LOC-POINT |
| AC-F-04 | `name` ← `construction` · trống OK — **cấm** IsWeak đoạn tuyến |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=LAND_ROW&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=LAND_ROW`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-LAND-LOOKUP-01 | `status_land_lot_id` / `exploited_id` / `pavement_type_access_road_id` / `location_id` / `access_road` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-LAND-NAME-01 | `name` ← `construction` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-LAND-ROUTE-01 | Live = `/so-ts?type=LAND_ROW` · alias board-only · optional redirect |
| GAP-LAND-PREFIX-01 | IdCode create/import **`DT-`** · GIS icon `HT` giữ |
| GAP-LAND-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key đất |
| GAP-LAND-RANGE-01 | S-LOC-RANGE · ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT |
| GAP-SOTS-COL-01 | ON CT/tuyến/TT thửa/xã/tỉnh/CQ/dài/rộng/DT · hide-empty length/width/xaphuong |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-LAND-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `dat-hlat` (deep-link optional only)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog land_* SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `LAND_ROW` · cluster `land` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html` |
| prototype.artifact | `specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC status/exploited/pavement/location/access_road P1 · dumpSpecs P1 · S-LOC-RANGE · hide-empty length/width/xaphuong |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `DT-` |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `DT-` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T08:35:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849 |
| headerFingerprintPrior | sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_0abc91dc` |
