# Design — so-ts-row-util (Sổ TS — CT HTKT trong HL)

| Field | Value |
|-------|-------|
| feature | `so-ts-row-util` |
| title | Sổ TS — CT HTKT trong HL |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_34dbb85e`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `ROW_UTIL` |
| cluster | `land` · ô KCHT `t08` |
| dump | `tbl_infrastructure_row` |
| prefix | `HT-` (GIS `HT` giữ) |
| prior · po | `confirmed` · `po/requirement.md` · task `task_12fe884a` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-row-util-control-hint.md` · `so-ts-row-util-real-data.md` · contentHash `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=ROW_UTIL` · alias board `/so-ts-row-util` |
| mfeStdUrl | `http://localhost:9301/so-ts-row-util` |
| peerStdUrl | `http://localhost:9301/so-ts?type=ROW_UTIL` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_34dbb85e` |
| updatedAt | `2026-09-02T03:00:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-row-util.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `land` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 ROW_UTIL | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/32-moc_dbvn.tbl_infrastructure_row-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-row-util-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-row-util-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `ROW_UTIL` · S-ATTR editable đủ dump §4 · `name` ← `tencongtrinh_htk` · S-LOC-RANGE hiện kmFrom+kmTo · Dropdown LOOKUP_STATIC lookup fields · grid CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance attrs · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-ROWUTIL-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-row-util` = board deep-link · **optional** redirect → `/so-ts?type=ROW_UTIL` (**GAP-ROWUTIL-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột ROW_UTIL |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `ROW_UTIL` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `ROW_UTIL` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-row-util` → `/so-ts?type=ROW_UTIL` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · CT HTKT · loại · tuyến · chủ · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `ROW_UTIL` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · khác LAND_ROW — **hiện** cả filter lẫn grid |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=ROW_UTIL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=ROW_UTIL` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name / tencongtrinh_htk | Công trình HTKT | link Text | **ON** | bind `name` ← `tencongtrinh_htk` · **GAP-ROWUTIL-NAME-01** |
| type_work_id | Loại công trình | Dropdown label | **ON** | dumpSpecs |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình đầu | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| kmTo | Lý trình cuối | Text chainage | **ON** | import có km cuối · khác LAND_ROW |
| length | Chiều dài (m) | Number | ON · **hide-empty** | dumpSpecs |
| number_post | Số trụ / cột | Number | ON · **hide-empty** | dumpSpecs |
| owner | Chủ sở hữu | Text | ON · hide-empty | dumpSpecs |
| located_within_id | Trong phạm vi HL | Dropdown label | optional · hide-empty | dumpSpecs |
| build_location | Vị trí mặt cắt | Dropdown label | optional | dumpSpecs |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | **OFF** | unit seed `HTKT` |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `HT-` |
| type | Loại tài sản | `SearchInput` | * | lock `ROW_UTIL` từ tile `t08` |
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
| kmTo | Lý trình cuối | `Text` chainage | | optional khi trống · **hiện** RANGE · **GAP-ROWUTIL-RANGE-01** |
| lat / lng (đầu) | X / Y đầu | `Number` | | dump `from_coordinatex/y` |
| lat / lng (cuối) | X / Y cuối | `Number` | | dump `to_coordinatex/y` · hide-empty |
| province | Tỉnh / TP | `Text` | | dump `tinhthanhpho` |
| ward | Phường / Xã | `Text` | | dump `xaphuong` |

**Không mount** `S-LOC-POINT` (parent cluster `land` → RANGE).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / tencongtrinh_htk | Công trình HTKT | `Text` | | dump `tencongtrinh_htk` · trống OK · **cấm** IsWeak → đoạn tuyến (**GAP-ROWUTIL-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| tencongtrinh_htk | Công trình HTKT | `Text` | | mirror S-NAME |
| type_work_id | Loại công trình | `Dropdown` LOOKUP_STATIC | * | **GAP-ROWUTIL-LOOKUP-01** |
| length | Chiều dài (m) | `Number` | | dump |
| number_post | Số trụ / cột | `Number` | | dump · hide-empty |
| owner | Chủ sở hữu | `Text` | | dump |
| located_within_id | Nằm trong phạm vi HL | `Dropdown` LOOKUP_STATIC | | **GAP-ROWUTIL-LOOKUP-01** |
| protection_tructure | Công trình bảo vệ | `Text` | | dump typo key giữ |
| type_protection_structure_id | Loại kết cấu bảo vệ | `Dropdown` LOOKUP_STATIC | | **GAP-ROWUTIL-LOOKUP-01** |
| support_type_id | Loại giá đỡ | `Dropdown` LOOKUP_STATIC | | **GAP-ROWUTIL-LOOKUP-01** |
| distance_road_center | Khoảng cách đến tim đường (km) | `Number` | | dump · hide-empty |
| distance_between_supports | Khoảng cách giữa các giá (m) | `Number` | | dump · hide-empty |
| status_hiring_is_within_row | Tình trạng thuê trong HL | `Dropdown` LOOKUP_STATIC | | **GAP-ROWUTIL-LOOKUP-01** |
| build_location | Vị trí mặt cắt ngang đường | `Dropdown` LOOKUP_STATIC | | **GAP-ROWUTIL-LOOKUP-01** |

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

**Không mount:** quantity/unit trên form ROW_UTIL · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột type-other.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — CT HTKT trong HL» khi `type=ROW_UTIL` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + 🔍 · type · route · kmFrom · kmTo · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách CT HTKT trong HL» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile ROW_UTIL · resize ON |
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
| Artifact | `ui/prototype/so-ts-row-util-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=ROW_UTIL` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — CT HTKT trong HL» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile ROW_UTIL (ẩn type/SL/ĐVT · ON CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · S-LOC-RANGE hiện kmFrom+kmTo · cấm footer Lưu · LeaveConfirmModal · prefix HT-
```

Cite mẫu proto row: `HT-infrastructure_row_685327` · `tencongtrinh_htk=Hàng rào bảo vệ` · `type_work_id=Hàng rào` · route=`QL.1` · routeNamed=`QL.1-THANHHOA` · routeSegment=`Km 285 + 400 - Km 285 + 466` · kmFrom=`285.4` · kmTo=`286.128` · length=`728` · number_post=`12` · owner=`BQLDA` · lat/lng `20.13275` / `105.86042` · peer `685328` · `tencongtrinh_htk=Lan can` · `kmFrom=285.4` · `kmTo=285.9`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột ROW_UTIL · ẩn type / quantity / unitCode · ON CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance attrs |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC type_work/located_within/protection/support/status_hiring/build_location — **cấm** chỉ `<dl>` |
| AC-F-03 | S-LOC-RANGE · hiện kmFrom+kmTo · optional khi trống · **cấm** ép `"0"` · **không** mount S-LOC-POINT |
| AC-F-04 | `name` ← `tencongtrinh_htk` · trống OK — **cấm** IsWeak đoạn tuyến |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=ROW_UTIL&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=ROW_UTIL`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-ROWUTIL-LOOKUP-01 | `type_work_id` / `located_within_id` / `type_protection_structure_id` / `support_type_id` / `status_hiring_is_within_row` / `build_location` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-ROWUTIL-NAME-01 | `name` ← `tencongtrinh_htk` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-ROWUTIL-ROUTE-01 | Live = `/so-ts?type=ROW_UTIL` · alias board-only · optional redirect |
| GAP-ROWUTIL-PREFIX-01 | IdCode create/import **`HT-`** · GIS icon `HT` giữ |
| GAP-ROWUTIL-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key HTKT |
| GAP-ROWUTIL-RANGE-01 | S-LOC-RANGE · **hiện** kmFrom+kmTo · optional khi trống · **cấm** ép `"0"` · **không** S-LOC-POINT |
| GAP-SOTS-COL-01 | ON CT HTKT/loại/3 tầng/kmFrom/kmTo/dài/số trụ/chủ · hide-empty length/number_post/distance |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-ROWUTIL-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `htkt` (deep-link optional only)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog HTKT SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-row-util` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `ROW_UTIL` · cluster `land` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html` |
| prototype.artifact | `specs/so-ts-row-util/ui/prototype/so-ts-row-util-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC lookup fields P1 · dumpSpecs P1 · S-LOC-RANGE kmFrom+kmTo · hide-empty length/number_post/distance |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `HT-` |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `HT-` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-02T03:00:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da |
| headerFingerprintPrior | sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_34dbb85e` |

<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked contentHashPriorDataAnaly=sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da taskId=task_34dbb85e -->
