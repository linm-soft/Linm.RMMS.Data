# Design — so-ts-rescue-vehicle (Sổ TS — Xe cứu hộ)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-vehicle` |
| title | Sổ TS — Xe cứu hộ |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_62893289`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RESCUE_VEHICLE` |
| cluster | `ops` · ô KCHT **`t24`** |
| dump | `tbl_rescue_vehicle` |
| prefix | `XH-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_0f384c26` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-rescue-vehicle-control-hint.md` · `so-ts-rescue-vehicle-real-data.md` · contentHash `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RESCUE_VEHICLE` · alias board `/so-ts-rescue-vehicle` |
| mfeStdUrl | `http://localhost:9301/so-ts-rescue-vehicle` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RESCUE_VEHICLE` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_62893289` |
| updatedAt | `2026-09-02T04:20:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · nhầm `RESCUE_STATION` (trạm cứu nạn) · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · invent map canvas · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-rescue-vehicle.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `ops` · ô `t24` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 RESCUE_VEHICLE | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/36-moc_dbvn.tbl_rescue_vehicle-{list,detail}.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-rescue-vehicle-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-rescue-vehicle-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `RESCUE_VEHICLE` · S-ATTR editable đủ dump §4 · `name` ← `parking_location_name` · trống OK · ẩn `kmTo` form · Dropdown LOOKUP_STATIC `vehicle_type_id` / `under_operation_by` · grid ON mẫu + hide-empty kmFrom/vị trí đậu/ĐV mua khi null · `LeaveConfirmModal` · reuse S-* · alias optional · tile `t24` count import **7** · prefix **`XH-`**.

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
| Alias | `/so-ts-rescue-vehicle` = board deep-link · **optional** redirect → `/so-ts?type=RESCUE_VEHICLE` (**GAP-RV-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột RESCUE_VEHICLE |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `RESCUE_VEHICLE` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `RESCUE_VEHICLE` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-rescue-vehicle` → `/so-ts?type=RESCUE_VEHICLE` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** map canvas / ERP.*).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · loại PT · vị trí đậu · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RESCUE_VEHICLE` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=RESCUE_VEHICLE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=RESCUE_VEHICLE` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên vị trí / xe | link Text | **ON** | bind `name` · import = `parking_location_name` · **GAP-RV-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON · hide-empty | dump `lytrinh-kmlytrinh` · hay trống trên 7 row |
| vehicle_type_id | Loại phương tiện | Text / Dropdown label | **ON** | dumpSpecs · **GAP-RV-LOOKUP-01** |
| parking_location_name | Vị trí đậu | Text | ON · hide-empty | dumpSpecs · có thể trùng `name` |
| purchased_by | Đơn vị mua sắm | Text | ON · hide-empty | dumpSpecs |
| under_operation_by | Cơ quan đang khai thác | Text / Dropdown label | **ON** | dumpSpecs · FE key `under_operation` — **GAP-RV-DUMP-KEY-01** |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL · unit seed `TRAM` ẩn grid |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

Grid = `useCatalogUiSchema('road-assets')` + type-profile. Kéo cột default **ON**. Hide-empty cột kmFrom/vị trí đậu/ĐV mua khi null (**GAP-SOTS-COL-01**).

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `XH-` |
| type | Loại tài sản | `SearchInput` | * | lock `RESCUE_VEHICLE` khi create từ tile `t24` |
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

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `RESCUE_VEHICLE` (**GAP-RV-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên vị trí / phương tiện | `Text` | | SSOT `parking_location_name` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-RV-NAME-01**) |

#### S-ATTR — Thông tin chung (editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| vehicle_type_id | Loại phương tiện cứu hộ | `Dropdown` LOOKUP_STATIC | | dump · **GAP-RV-LOOKUP-01** |
| parking_location_name | Tên vị trí đậu | `Text` | | dump · mirror/sync `name` nếu official |
| purchased_by | Đơn vị mua sắm | `Text` | | dump |
| under_operation_by | Cơ quan đang khai thác | `Dropdown` LOOKUP_STATIC | | dump · map FE `under_operation` — **GAP-RV-DUMP-KEY-01** |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select (không chỉ readonly list).

**Không mount:** quantity/unit · tab legacy · field `RESCUE_STATION`-only.

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
| DES-GRID-A | Header title «Sổ TS — Xe cứu hộ» khi `type=RESCUE_VEHICLE` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách xe cứu hộ» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile RESCUE_VEHICLE · resize ON · cột ON mẫu · hide-empty |
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
| Artifact | `ui/prototype/so-ts-rescue-vehicle-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=RESCUE_VEHICLE` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Xe cứu hộ» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile RESCUE_VEHICLE (ẩn type/kmTo/SL/ĐVT · ON mẫu §4 · hide-empty)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · S-ATTR xe cứu hộ §4 · cấm nhầm RESCUE_STATION
```

Cite mẫu proto row: `XH-rescue_vehicle_779829` · `name=SS3` · `type=RESCUE_VEHICLE` · route=`QL.1` · routeNamed=`QL.1-TP.HUE(BOT)` · routeSegment=`Km 0 + 000 - Km 13 + 377` · lat/lng `12.88` / `109.37` · `kmFrom` trống · status `tot` · source dump `tbl_rescue_vehicle:rescue_vehicle_779829` · import **7** row.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột RESCUE_VEHICLE · ẩn type / kmTo / quantity / unitCode · **ON mẫu** tên · tuyến · lý trình · loại PT · vị trí đậu · ĐV mua · cơ quan khai thác · hide-empty kmFrom/vị trí đậu/ĐV mua |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `RESCUE_VEHICLE` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` = `parking_location_name` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-T-01 | KCHT tile `t24` drill OK · list count import **7** |
| AC-S-01 | **Cấm** nhầm `RESCUE_STATION` (trạm cứu nạn `tbl_disaster_res_facility`) |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RESCUE_VEHICLE&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RESCUE_VEHICLE`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` — tile `t24` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-RV-LOOKUP-01 | `vehicle_type_id` / `under_operation_by` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-RV-NAME-01 | `name` = `parking_location_name` · trống OK · **cấm** IsWeak đoạn tuyến làm tên duy nhất |
| GAP-RV-ROUTE-01 | Live = `/so-ts?type=RESCUE_VEHICLE` · alias board-only · **optional** Navigate redirect |
| GAP-RV-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key RESCUE §4 |
| GAP-RV-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | Grid **ON mẫu** + hide-empty kmFrom/vị trí đậu/ĐV mua khi null · ẩn type/kmTo/SL/ĐVT |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-RV-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-RV-PREFIX-01 | IdCode prefix **`XH-`** — SA `DefaultCodePrefix` |
| GAP-RV-DUMP-KEY-01 | Canonical key **`under_operation_by`** · FE map `under_operation` — defer SA |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / invent GIS map
- Flatten `dumpSpecs` → cột DB (SA migration)
- Nhầm `RESCUE_STATION` (trạm cứu nạn)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-vehicle` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `RESCUE_VEHICLE` · cluster `ops` · ô `t24` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html` |
| prototype.artifact | `specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC P1 · dumpSpecs P1 · grid ON mẫu · hide-empty |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `XH-` · dump key map `under_operation_by` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-02T04:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca |
| headerFingerprintPrior | sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_62893289` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked contentHashPriorDataAnaly=sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca taskId=task_62893289 -->
