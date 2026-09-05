# Design — so-ts-lighting (Sổ TS — Chiếu sáng đường)

| Field | Value |
|-------|-------|
| feature | `so-ts-lighting` |
| title | Sổ TS — Chiếu sáng đường |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_9224ca23`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `LIGHTING` |
| cluster | `ops` · ô KCHT **`t18`** |
| dump | `tbl_street_lighting` |
| prefix | `CS-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_a6385cc7` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-lighting-control-hint.md` · `so-ts-lighting-real-data.md` · contentHash `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=LIGHTING` · alias board `/so-ts-lighting` |
| mfeStdUrl | `http://localhost:9301/so-ts-lighting` |
| peerStdUrl | `http://localhost:9301/so-ts?type=LIGHTING` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_9224ca23` |
| updatedAt | `2026-09-01T20:30:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · invent map canvas · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-lighting.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `ops` · ô `t18` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 LIGHTING | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/15-moc_dbvn.tbl_street_lighting-{list,detail}.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-lighting-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-lighting-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `LIGHTING` · S-ATTR editable đủ dump §4 · `name` ← mô tả hệ thống · trống OK · ẩn `kmTo` form · Dropdown LOOKUP_STATIC management/bulb/MBA type/control/vitri · grid ON mẫu + hide-empty cột số khi 0/null · `LeaveConfirmModal` · reuse S-* · alias optional · tile `t18` count **4871**.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-LT-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-lighting` = board deep-link · **optional** redirect → `/so-ts?type=LIGHTING` (**GAP-LT-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột LIGHTING |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `LIGHTING` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `LIGHTING` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-lighting` → `/so-ts?type=LIGHTING` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · ĐV QL · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `LIGHTING` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=LIGHTING&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=LIGHTING` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên hệ thống | link Text | **ON** | bind `name` · import thường = route — **GAP-LT-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| management_id | Đơn vị QL sử dụng | Text / Dropdown label | **ON** | dumpSpecs |
| number_pole_light_bulb | Số cột đèn chiếu sáng | Number | ON · hide-empty | dumpSpecs |
| number_light | Số đèn chiếu sáng | Number | ON · hide-empty | dumpSpecs |
| bulb_type_id | Loại bóng đèn | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| type_transforming_station_id | Loại trạm biến áp | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| capacity_transformer | Công suất MBA (kVA) | Number / Text | ON · hide-empty | dumpSpecs |
| number_control_box | Số tủ điều khiển | Number | ON · hide-empty | dumpSpecs |
| control_method_id | Phương thức điều khiển | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| vitri | Vị trí mặt cắt | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| Solar* / LampWatt | — | — | **OFF** | **GAP-AK32-07** out of scope |

Grid = `useCatalogUiSchema('road-assets')` + type-profile. Kéo cột default **ON**. Hide-empty cột số khi giá trị 0/null (**GAP-SOTS-COL-01**).

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CS-` |
| type | Loại tài sản | `SearchInput` | * | lock `LIGHTING` khi create từ tile `t18` |
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

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `LIGHTING` (**GAP-LT-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên hệ thống chiếu sáng | `Text` | | SSOT mô tả ngắn · import hay = route · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-LT-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| management_id | Đơn vị quản lý sử dụng | `Dropdown` LOOKUP_STATIC | | **GAP-LT-LOOKUP-01** |
| number_pole_light_bulb | Số cột đèn chiếu sáng | `Number` | | dump |
| number_light | Số đèn chiếu sáng | `Number` | | dump |
| bulb_type_id | Loại bóng đèn | `Dropdown` LOOKUP_STATIC | | **GAP-LT-LOOKUP-01** |
| type_transforming_station_id | Loại trạm biến áp | `Dropdown` LOOKUP_STATIC | | **GAP-LT-LOOKUP-01** |
| capacity_transformer | Công suất MBA (kVA) | `Number` / `Text` | | dump |
| number_control_box | Số tủ điều khiển | `Number` | | dump |
| control_method_id | Phương thức điều khiển | `Dropdown` LOOKUP_STATIC | | **GAP-LT-LOOKUP-01** |
| vitri | Vị trí mặt cắt ngang đường | `Dropdown` LOOKUP_STATIC | | L/R/C · **GAP-LT-LOOKUP-01** |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select.

**Không mount:** quantity/unit · Solar*/LampWatt · tab legacy · cột ITS_CAMERA-only.

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
| DES-GRID-A | Header title «Sổ TS — Chiếu sáng đường» khi `type=LIGHTING` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách hệ thống chiếu sáng đường» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile LIGHTING · resize ON · cột ON mẫu · hide-empty |
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
| Artifact | `ui/prototype/so-ts-lighting-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=LIGHTING` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Chiếu sáng đường» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile LIGHTING (ẩn type/kmTo/SL/ĐVT · ON mẫu attr §4 · hide-empty)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required · S-ATTR chiếu sáng (management · cột/đèn · bóng · MBA · tủ · phương thức · mặt cắt)
```

Cite mẫu proto row: `CS-street_lighting_523892` · `name=QL.1` (weak) · `type=LIGHTING` · route=`QL.1` · routeNamed=`QL.1-LANGSON(BOT)` · routeSegment=`Km 0 + 000 - Km 1 + 800` · lat/lng `21.97` / `106.71` · `kmFrom` trống · status `tot` · source dump `tbl_street_lighting:street_lighting_523892`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột LIGHTING · ẩn type / kmTo / quantity / unitCode · **ON mẫu** tên · tuyến · lý trình · ĐV QL · cột/đèn · MBA · tủ · mặt cắt · hide-empty cột số |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `LIGHTING` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` = mô tả hệ thống · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `mfeStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
| AC-P-02 | Prototype content-only · reviewUrl mở được |
| AC-T-01 | KCHT tile `t18` drill OK · list count import **4871** |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=LIGHTING&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=LIGHTING`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` — tile `t18` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-LT-LOOKUP-01 | `management_id` / `bulb_type_id` / `type_transforming_station_id` / `control_method_id` / `vitri` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-LT-NAME-01 | `name` = mô tả hệ thống · trống OK · **cấm** IsWeak đoạn tuyến làm tên duy nhất |
| GAP-LT-ROUTE-01 | Live = `/so-ts?type=LIGHTING` · alias board-only · **optional** Navigate redirect |
| GAP-LT-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key lighting §4 |
| GAP-LT-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | Grid **ON mẫu** + hide-empty cột số khi 0/null · ẩn type/kmTo/SL/ĐVT |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-LT-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-LT-PREFIX-01 | IdCode prefix **`CS-`** — SA `DefaultCodePrefix` |
| GAP-AK32-07 | Solar*/LampWatt **out of scope** · dump §4 only |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / invent GIS map
- Flatten `dumpSpecs` → cột DB (SA migration)
- Solar*/LampWatt KCHT template cols
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-lighting` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `LIGHTING` · cluster `ops` · ô `t18` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html` |
| prototype.artifact | `specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC P1 · dumpSpecs P1 · grid ON mẫu · hide-empty |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `CS-` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T20:30:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa |
| headerFingerprintPrior | sha256:ca587f46bfa8c91bf0f8d30de24bd8e8db206285936ebdfa3ccc7cc43a303316 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_9224ca23` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=rechecked contentHashPriorDataAnaly=sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa taskId=task_9224ca23 -->
