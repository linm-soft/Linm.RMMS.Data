# Design — so-ts-bus-station (Sổ TS — Bến xe)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_99378d09`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `BUS_STATION` |
| cluster | `station` · ô KCHT `t04` |
| dump | `tbl_bus_station` |
| prefix | `BX-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_71c6f080` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-bus-station-control-hint.md` · `so-ts-bus-station-real-data.md` · contentHash `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=BUS_STATION` · alias board `/so-ts-bus-station` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| peerStdUrl | `http://localhost:9301/so-ts?type=BUS_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_99378d09` |
| updatedAt | `2026-09-01T03:30:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-bus-station.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `station` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 BUS_STATION | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-bus-station-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-bus-station-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `BUS_STATION` · S-ATTR editable đủ dump §4 · `name` ← `name_terminal` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC type_work/owner/grade/location/classification · grid ON+hide-empty DT/tuyến VT/DT sàn/cấp · classification grid OFF default · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-BX-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-bus-station` = board deep-link · **optional** redirect → `/so-ts?type=BUS_STATION` (**GAP-BX-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột BUS_STATION |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `BUS_STATION` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `BUS_STATION` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-bus-station` → `/so-ts?type=BUS_STATION` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên bến · loại · chủ SH · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `BUS_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=BUS_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=BUS_STATION` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên bến | link Text | **ON** | bind `name` = `name_terminal` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại tài sản | Dropdown label | **ON** | dumpSpecs · «Bến xe khách» |
| owner_id | Chủ sở hữu | Dropdown label | **ON** | dumpSpecs · «Địa phương» |
| site_area_using_land | DT mặt bằng khu vực bến (m²) | Number | **ON · hide-empty** | fill 0/null → ẩn cột |
| main_transportation_route | Tuyến vận tải chính | Text | **ON · hide-empty** | dumpSpecs |
| total_area_floors | Tổng DT mặt sàn (m²) | Number | **ON · hide-empty** | dumpSpecs |
| building_grade_id | Cấp nhà | Dropdown label | **ON · hide-empty** | dumpSpecs |
| build_location | Vị trí mặt cắt | Dropdown label | optional | L/R/C · SchemaConfig |
| classification | Phân loại | Dropdown label | **OFF default** | form ON · SchemaConfig ON |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| ferry_* / spillway_* / station_house_* | — | — | **OFF** | type-other |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BX-` |
| type | Loại tài sản | `SearchInput` | * | lock `BUS_STATION` từ tile `t04` |
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

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `BUS_STATION` (**GAP-BX-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / name_terminal | Tên bến | `Text` | * | SSOT dump `name_terminal` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-BX-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_work_id | Loại tài sản | `Dropdown` LOOKUP_STATIC | * | «Bến xe khách» … · **GAP-BX-LOOKUP-01** |
| owner_id | Chủ sở hữu | `Dropdown` LOOKUP_STATIC | | «Địa phương» … |
| site_area_using_land | Diện tích mặt bằng khu vực bến (m²) | `Number` | | dump |
| main_transportation_route | Tuyến vận tải chính | `Text` | | dump free-text |
| total_area_floors | Tổng diện tích mặt sàn (m²) | `Number` | | dump |
| building_grade_id | Cấp nhà | `Dropdown` LOOKUP_STATIC | | dump |
| build_location | Vị trí mặt cắt ngang đường | `Dropdown` LOOKUP_STATIC | | Bên trái / Bên phải / Giữa |
| classification | Phân loại | `Dropdown` LOOKUP_STATIC | | dump §4 · form ON |

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

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY/FERRY/STATION_HOUSE-only.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Bến xe» khi `type=BUS_STATION` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách bến xe» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile BUS_STATION · resize ON |
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
| Artifact | `ui/prototype/so-ts-bus-station-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=BUS_STATION` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Bến xe» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile BUS_STATION (ẩn type/kmTo/SL/ĐVT · ON+hide-empty DT/tuyến VT/DT sàn/cấp · classification OFF)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required
```

Cite mẫu proto row: `BX-bus_station_523251` · `name=bến xe phía bắc TP Lang Sơn` · `type_work_id=Bến xe khách` · `owner_id=Địa phương` · `build_location=Bên trái` · route=`QL.1` · routeNamed=`QL.1 - Lạng Sơn` · routeSegment=`Km 1 + 800 - Km 113 + 985` · `kmFrom=14.216` · lat/lng `21.87198` / `106.760757` · peer fill `bus_station_749278` · `site_area_using_land=2500` · `main_transportation_route=Hà Nội - Thanh Hóa` · `total_area_floors=220` · `building_grade_id=24`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột BUS_STATION · ẩn type / kmTo / quantity / unitCode · ON+hide-empty DT/tuyến VT/DT sàn/cấp · classification OFF default |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC type_work/owner/grade/location/classification — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `BUS_STATION` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `name_terminal` · trống OK — **cấm** IsWeak đoạn tuyến |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=BUS_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=BUS_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-BX-LOOKUP-01 | `type_work_id` / `owner_id` / `building_grade_id` / `build_location` / `classification` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-BX-NAME-01 | `name` ← `name_terminal` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-BX-ROUTE-01 | Live = `/so-ts?type=BUS_STATION` · alias board-only · optional redirect |
| GAP-BX-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key (owner · tuyến VT · DT sàn · cấp · classification) |
| GAP-BX-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | ON+hide-empty: DT mặt bằng · tuyến VT · DT sàn · cấp nhà · classification OFF default (SchemaConfig ON) |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-BX-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `ben-xe`
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog bus_station_* SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `BUS_STATION` · cluster `station` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html` |
| prototype.artifact | `specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC type_work/owner/grade/location/classification P1 · dumpSpecs P1 · hide-empty |
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
| generatedAt | 2026-09-01T03:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd |
| headerFingerprintPrior | sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553 |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_99378d09` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd taskId=task_99378d09 -->
