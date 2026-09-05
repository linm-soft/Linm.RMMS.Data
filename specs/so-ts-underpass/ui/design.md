# Design — so-ts-underpass (Sổ TS — Hầm chui dân sinh)

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_bee06bee`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `UNDERPASS` |
| cluster | `crossing` · ô KCHT `t06` |
| dump | `tbl_underpass_box` |
| prefix | **`CC-`** (import/GIS · Create align) |
| prior · po | `confirmed` · `po/requirement.md` · task `task_7eb8c843` · compact `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-underpass-control-hint.md` · `so-ts-underpass-real-data.md` · contentHash `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=UNDERPASS` · alias board `/so-ts-underpass` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` |
| peerStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_bee06bee` |
| updatedAt | `2026-09-01T11:20:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-underpass.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `crossing` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 UNDERPASS | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/12-tbl_underpass_box-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-underpass-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-underpass-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `UNDERPASS` · S-ATTR editable đủ dump §4 · `name` ← `tencongchui` / `name_underpass` · ẩn `kmTo` form · hide low-fill grid · Dropdown LOOKUP_STATIC · `LeaveConfirmModal` · alias board optional · prefix Create `CC-` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-UP-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-underpass` = board deep-link · **optional** redirect → `/so-ts?type=UNDERPASS` (**GAP-UP-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột UNDERPASS |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `UNDERPASS` · prefix `CC-` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `UNDERPASS` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-underpass` → `/so-ts?type=UNDERPASS` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cống · loại · thi công · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `UNDERPASS` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=UNDERPASS&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=UNDERPASS` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| culvert_type_id | Loại cống | Dropdown label | **ON** | dumpSpecs · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| name | Tên cống / hào KT | link Text | **ON** | bind `name` ← `tencongchui` / `name_underpass` · trống OK |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống) |
| name_underpass | Tên đường chui (nếu có) | Text | ON | dumpSpecs · mẫu list |
| construction_id | Thi công | Dropdown label | ON | Đúc sẵn / Đổ tại chỗ / Khác |
| weight | Tải trọng | Number | ON | dumpSpecs |
| number | Số ngăn | Number | ON | dumpSpecs |
| width | Chiều rộng (m) | Number | optional | dumpSpecs |
| height | Chiều cao (m) | Number | optional | dumpSpecs |
| crossing_length_culvert | Chiều dài thân cống (m) | Number | ON | dumpSpecs · mẫu list |
| structure_type_id | Loại kết cấu | Dropdown label | ON | dumpSpecs |
| number_wingwall | Số lượng tường cánh | Number | optional | dumpSpecs |
| material_wingwall_id | Vật liệu tường cánh | Text | optional | dumpSpecs |
| pavement_* / number_lighting / number_signboard / number_barrier | — | — | **OFF** default | fill thấp · schema có thể bật (**PO hide low-fill**) |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump UNDERPASS không có |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix **`CC-`** |
| type | Loại tài sản | `SearchInput` | * | lock `UNDERPASS` từ tile `t06` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · sample hay trống |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` | | dump `tinhthanhpho` · omit nếu trống |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `UNDERPASS` (**GAP-UP-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / tencongchui | Tên cống / hào kỹ thuật | `Text` | | SSOT dump `tencongchui` · trống OK · **cấm** IsWeak → đoạn tuyến (**GAP-UP-NAME-01**) |
| name_underpass | Tên đường chui (nếu có) | `Text` | | dump · fallback `name` khi `tencongchui` trống |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| culvert_type_id | Loại cống | `Dropdown` LOOKUP_STATIC | * | dump distinct · **GAP-UP-LOOKUP-01** |
| construction_id | Thi công: Đúc sẵn / Đổ tại chỗ / Khác | `Dropdown` LOOKUP_STATIC | | dump distinct |
| weight | Tải trọng | `Number` | | |
| number | Số ngăn | `Number` | | |
| width | Chiều rộng (m) | `Number` | | khẩu độ |
| height | Chiều cao (m) | `Number` | | khẩu độ |
| crossing_length_culvert | Chiều dài thân cống (m) | `Number` | | |
| structure_type_id | Loại kết cấu | `Dropdown` LOOKUP_STATIC | | dump distinct |
| number_wingwall | Số lượng tường cánh (2 cánh mỗi đầu) / Đầu cống | `Number` | | |
| material_wingwall_id | Vật liệu tường cánh | `Dropdown` LOOKUP_STATIC | | dump distinct / seed SA |
| pavement_type_inside_underpass_id | Loại mặt đường trong hầm chui | `Dropdown` LOOKUP_STATIC | | form editable · **grid OFF** |
| area_pavement_inside_underpass | Diện tích mặt đường trong | `Number` | | form editable · **grid OFF** |
| number_lighting | Số đèn chiếu sáng | `Number` | | form editable · **grid OFF** |
| number_signboard | Số biển báo | `Number` | | form editable · **grid OFF** |
| number_barrier | Số rào chắn | `Number` | | form editable · **grid OFF** |

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

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Hầm chui dân sinh» khi `type=UNDERPASS` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách hầm chui dân sinh» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile UNDERPASS · resize ON |
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
| Artifact | `ui/prototype/so-ts-underpass-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=UNDERPASS` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Hầm chui dân sinh» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile UNDERPASS (ẩn type/kmTo/SL/ĐVT/low-fill/KM_POST-only)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · prefix CC-
```

Cite mẫu proto row: `underpass_box_523453` · `culvert_type_id=Cống chui dân sinh` · `construction_id=Đổ tại chỗ` · `weight=625` · `number=1` · `width=4` · `height=3` · `crossing_length_culvert=36` · `structure_type_id=Bê tông cốt thép` · `number_wingwall=2` · lat/lng 21.506734 / 106.357353 · `tencongchui`/`name_underpass`/`lytrinh` trống OK.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột UNDERPASS · ẩn type / kmTo / quantity / unitCode / low-fill / KM_POST·SPILLWAY-only |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC culvert/construction/structure/wingwall/pavement — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `UNDERPASS` · không mount S-LOC-RANGE · **cấm** ép lytrinh `"0"` |
| AC-F-04 | `name` ← `tencongchui` · fallback `name_underpass` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | Create IdCode prefix **`CC-`** · **cấm** TS- / HC legacy Create |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=UNDERPASS&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=UNDERPASS`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-UP-LOOKUP-01 | Dropdown LOOKUP_STATIC dump P1 cho culvert/construction/structure/wingwall/pavement — **không** SearchInput master |
| GAP-UP-NAME-01 | `name` ← `tencongchui` · fallback `name_underpass` · trống OK · **cấm** IsWeak |
| GAP-UP-ROUTE-01 | Live = `/so-ts?type=UNDERPASS` · alias board-only · optional Navigate redirect |
| GAP-UP-PREFIX-01 | Create IdCode **`CC-`** · cấm TS- · HC legacy only |
| hide low-fill | Grid **OFF** pavement_*/lighting/signboard/barrier · form vẫn editable |
| GAP-UP-POINT-01 | Ẩn + không required `kmTo` · S-LOC-POINT only · **cấm** ép `"0"` |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-UP-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `cong-chui` (deep-link optional out of list pack)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog SearchInput cho lookup UNDERPASS (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `UNDERPASS` · cluster `crossing` · tile `t06` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html` |
| prototype.artifact | `specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC P1 · dumpSpecs P1 · hide low-fill grid · prefix `CC-` |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · IdCode `CC-` · dumpSpecLabels FE · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T11:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd |
| headerFingerprintPrior | sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_bee06bee` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd taskId=task_bee06bee -->
