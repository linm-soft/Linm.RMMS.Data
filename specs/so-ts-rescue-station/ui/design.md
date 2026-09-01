# Design — so-ts-rescue-station (Sổ TS — Công trình cứu hộ)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
| title | Sổ TS — Công trình cứu hộ |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_64104e4c`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RESCUE_STATION` |
| cluster | `station` · ô KCHT **`—`** (list only · **cấm** invent tile · `t24`=`RESCUE_VEHICLE`) |
| dump | `tbl_disaster_res_facility` |
| prefix | `CN-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_cdbd698e` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-rescue-station-control-hint.md` · `so-ts-rescue-station-real-data.md` · contentHash `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RESCUE_STATION` · alias board `/so-ts-rescue-station` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_64104e4c` |
| updatedAt | `2026-09-01T02:35:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · invent KCHT tile · nhầm `RESCUE_VEHICLE` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-rescue-station.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `station` · ô `—` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 RESCUE_STATION | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-{list,detail}.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-rescue-station-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-rescue-station-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `RESCUE_STATION` · S-ATTR editable đủ dump §4 · `name` ← `name_building` label «Tên kho bãi» · ẩn `kmTo` form · Dropdown LOOKUP_STATIC cấp nhà/CT phụ/nhà kho · vitri · **grid ON mẫu** vật tư + DT/cấp · `LeaveConfirmModal` · reuse S-* · alias optional · **không** invent tile / field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-RS-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-rescue-station` = board deep-link · **optional** redirect → `/so-ts?type=RESCUE_STATION` (**GAP-RS-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột RESCUE_STATION |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `RESCUE_STATION` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `RESCUE_STATION` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-rescue-station` → `/so-ts?type=RESCUE_STATION` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên kho · vật tư · tuyến · QR · tỉnh · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RESCUE_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=RESCUE_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=RESCUE_STATION` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên kho bãi | link Text | **ON** | bind `name` = `name_building` · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh` / parse · CSV scalar hay trống |
| materials_in_store | Vật tư chứa trong kho | Text | **ON** | dumpSpecs · mẫu list (**PO ON mẫu**) |
| site_area_using_land | Diện tích khuôn viên (m²) | Number | **ON** | mẫu · SchemaConfig có thể ẩn |
| office_building_grade_id | Nhà làm việc (cấp) | Dropdown label | **ON** | Cấp 1–4 / Khác |
| total_area_office_building | Tổng DT nhà làm việc (m²) | Number | **ON** | mẫu |
| auxiliary_works_grade_id | Công trình phụ (cấp) | Dropdown label | **ON** | mẫu |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | Number | **ON** | mẫu |
| stored_building_grade_id | Nhà kho (cấp) | Dropdown label | **ON** | mẫu |
| total_area_stored_building | Tổng DT nhà kho (m²) | Number | **ON** | mẫu |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| type_work_id / build_location / materials_in_office / ferry_* / spillway_* | — | — | **OFF** | type-other / STATION_HOUSE-only |

Grid = `useCatalogUiSchema('road-assets')` + type-profile. Kéo cột default **ON**. **Không** áp hide-low-fill OFF default cho DT/cấp/vật tư (PO = **ON mẫu**).

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CN-` |
| type | Loại tài sản | `SearchInput` | * | lock `RESCUE_STATION` khi create từ filter type |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | mẫu «Km 944 + 138» · CSV scalar hay trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` | | dump `tinhthanhpho` · omit nếu trống |
| vitri | Vị trí | `Text` / `Dropdown` | | dump · có thể gộp S-ATTR |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `RESCUE_STATION` (**GAP-RS-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / name_building | Tên kho bãi | `Text` | * | SSOT dump `name_building` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-RS-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| materials_in_store | Vật tư chứa trong kho | `TextArea` | | dump free-text · mẫu list |
| site_area_using_land | Diện tích khuôn viên (m²) | `Number` | | dump |
| office_building_grade_id | Nhà làm việc (cấp) | `Dropdown` LOOKUP_STATIC | | Cấp 1–4 / Khác · **GAP-RS-LOOKUP-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump |
| auxiliary_works_grade_id | Công trình phụ (cấp) | `Dropdown` LOOKUP_STATIC | | **GAP-RS-LOOKUP-01** |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump |
| stored_building_grade_id | Nhà kho (cấp) | `Dropdown` LOOKUP_STATIC | | **GAP-RS-LOOKUP-01** |
| total_area_stored_building | Tổng DT nhà kho (m²) | `Number` | | dump |
| vitri | Vị trí | `Text` / `Dropdown` LOOKUP_STATIC | | dump · nếu chưa mount S-LOC |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select.

**Không mount:** `type_work_id` · `build_location` · `materials_in_office` (STATION_HOUSE-only).

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY/FERRY-only.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Công trình cứu hộ» khi `type=RESCUE_STATION` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách công trình cứu hộ» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile RESCUE_STATION · resize ON · cột ON mẫu |
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
| Artifact | `ui/prototype/so-ts-rescue-station-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Công trình cứu hộ» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile RESCUE_STATION (ẩn type/kmTo/SL/ĐVT · ON mẫu vật tư/DT/cấp)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · S-ATTR kho (vật tư · DT/cấp · vitri)
```

Cite mẫu proto row: `CN-disaster_response_facility_777421` · `name=Kho Hồng Lĩnh` · `type=RESCUE_STATION` · route=`QL.1` · routeNamed=`QL.1-HATINH` · routeSegment=`Km 481 + 000 - Km 484 + 000` · lat/lng `18.54` / `105.7` · `kmFrom` CSV trống · status `tot` · source dump `tbl_disaster_res:disaster_response_facility_777421`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột RESCUE_STATION · ẩn type / kmTo / quantity / unitCode · **ON mẫu** vật tư · DT/cấp nhà/CT phụ/nhà kho |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC cấp / vitri — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `RESCUE_STATION` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `name_building` · label «Tên kho bãi» · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-T-01 | KCHT ô `—` · **cấm** invent tile · **cấm** nhầm `t24`/`RESCUE_VEHICLE` (**GAP-RS-TILE-01**) |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RESCUE_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RESCUE_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` — **không** expect facility tile |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-RS-LOOKUP-01 | `office_building_grade_id` / `auxiliary_works_grade_id` / `stored_building_grade_id` / `vitri` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-RS-NAME-01 | `name` ← `name_building` · label «Tên kho bãi» · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-RS-ROUTE-01 | Live = `/so-ts?type=RESCUE_STATION` · alias board-only · **optional** Navigate redirect |
| GAP-RS-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key (`materials_in_store` · `stored_building_*` · `vitri`) |
| GAP-RS-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | Grid **ON mẫu**: vật tư · DT khuôn viên · cấp+DT nhà/CT phụ/nhà kho · ẩn type/kmTo/SL/ĐVT |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-RS-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-RS-TILE-01 | KCHT ô `—` · **cấm** invent tile · **cấm** nhầm `RESCUE_VEHICLE` |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / invent GIS tile facility
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog rescue_* SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- Invent KCHT tile `RESCUE_STATION`
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `RESCUE_STATION` · cluster `station` · ô `—` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html` |
| prototype.artifact | `specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC cấp/vitri P1 · dumpSpecs P1 · grid ON mẫu |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T02:35:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47 |
| headerFingerprintPrior | sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_64104e4c` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47 taskId=task_64104e4c -->
