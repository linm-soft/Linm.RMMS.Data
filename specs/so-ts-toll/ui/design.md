# Design — so-ts-toll (Sổ TS — Trạm thu phí)

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_d313d9f9`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `TOLL` |
| cluster | `station` · ô KCHT `t28` |
| dump | `tbl_toll_booth` |
| prefix | `TFP-` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_a5a4bec3` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-toll-control-hint.md` · `so-ts-toll-real-data.md` · contentHash `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=TOLL` · alias board `/so-ts-toll` |
| mfeStdUrl | `http://localhost:9301/so-ts-toll` |
| peerStdUrl | `http://localhost:9301/so-ts?type=TOLL` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_d313d9f9` |
| updatedAt | `2026-09-01T05:05:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-toll.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `station` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 TOLL | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/37-moc_dbvn.tbl_toll_booth-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-toll-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-toll-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `TOLL` · S-ATTR editable đủ dump §4 · `name` ← `station_name` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC weighting/roof/pavement/grade/road_structure/operation_location · grid ON+hide-empty làn cân/ETC/thủ công/DT cổng/cấp · `width_*` gộp subsection S-ATTR · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-TOLL-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-toll` = board deep-link · **optional** redirect → `/so-ts?type=TOLL` (**GAP-TOLL-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột TOLL |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `TOLL` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `TOLL` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-toll` → `/so-ts?type=TOLL` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `TOLL` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=TOLL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=TOLL` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| weighting_method | Phương pháp cân | Dropdown label | **ON · hide-empty** | dumpSpecs |
| number_weighting_lane | Số làn cân | Number | **ON · hide-empty** | dumpSpecs |
| number_etc_lane | Số làn ETC | Number | **ON · hide-empty** | dumpSpecs |
| number_manual_lane | Số làn thu phí thủ công | Number | **ON · hide-empty** | dumpSpecs |
| number_one_stop_lane | Số làn một dừng | Number | optional / hide-empty | dumpSpecs |
| house_grade_id | Cấp nhà | Dropdown label | **ON · hide-empty** | dumpSpecs |
| area_yoll_gate_pavement | DT mặt cổng thu phí (m²) | Number | optional / hide-empty | typo dump `yoll` |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown label | **OFF default** | hide-empty cluster station |
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
| type | Loại tài sản | `SearchInput` | * | lock `TOLL` từ tile `t28` |
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
| operation_building_location_id | Vị trí nhà điều hành | `Dropdown` LOOKUP_STATIC | | dump §4 · S-LOC hoặc S-ATTR |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `TOLL` (**GAP-TOLL-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / station_name | Tên trạm | `Text` | * | SSOT dump `station_name` · trống OK · **cấm** IsWeak đoạn tuyến (**GAP-TOLL-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| weighting_method | Phương pháp cân | `Dropdown` LOOKUP_STATIC | | **GAP-TOLL-LOOKUP-01** |
| number_weighting_lane | Số làn cân | `Number` | | dump |
| number_one_stop_lane | Số làn một dừng | `Number` | | dump |
| number_manual_lane | Số làn thu phí thủ công | `Number` | | dump |
| number_etc_lane | Số làn ETC | `Number` | | dump |
| roof_structures_gate_id | Kết cấu mái cổng | `Dropdown` LOOKUP_STATIC | | **GAP-TOLL-LOOKUP-01** |
| length_reinforcement | Chiều dài gia cố (m) | `Number` | | dump |
| pavement_type_id | Loại mặt đường | `Dropdown` LOOKUP_STATIC | | **GAP-TOLL-LOOKUP-01** |
| area_yoll_gate_pavement | Diện tích mặt cổng thu phí (m²) | `Number` | | typo dump |
| house_grade_id | Cấp nhà | `Dropdown` LOOKUP_STATIC | | **GAP-TOLL-LOOKUP-01** |
| auxiliary_works_grade_id | Cấp công trình phụ | `Dropdown` LOOKUP_STATIC | | hide-empty cluster · form ON |
| road_structure_id | Kết cấu đường | `Dropdown` LOOKUP_STATIC | | **GAP-TOLL-LOOKUP-01** |
| land_area_* | Diện tích đất (m²) | `Number` | | dump `land_area_*` |
| solanETC | Số lần ETC | `Number` | | dump (nếu có trên mẫu) |
| solancantaitrong | Số lần cân tải trọng | `Number` | | dump (nếu có trên mẫu) |

##### S-ATTR-WIDTH (subsection gộp `width_*` theo mẫu detail)

| uiField | Label VN | Control | Notes |
|---------|----------|---------|-------|
| width_toll_gate | Chiều rộng cổng thu phí (m) | `Number` | dump `width_*` |
| width_weighting_lane | Chiều rộng làn cân (m) | `Number` | dump |
| width_etc_lane | Chiều rộng làn ETC (m) | `Number` | dump |
| width_manual_lane | Chiều rộng làn thủ công (m) | `Number` | dump |
| width_operation_building | Chiều rộng nhà điều hành (m) | `Number` | dump |

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

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột peer-only.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Trạm thu phí» khi `type=TOLL` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + 🔍 · type · route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách trạm thu phí» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile TOLL · resize ON |
| DES-GRID-C3 | Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome: Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | Sections S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-ATTR-WIDTH · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` overlay |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/so-ts-toll-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · S-ATTR-WIDTH · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=TOLL` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Trạm thu phí» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile TOLL (ẩn type/kmTo/SL/ĐVT · ON+hide-empty làn cân/ETC/thủ công/cấp/DT cổng · auxiliary OFF)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · S-ATTR-WIDTH subsection · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · kmFrom không required
```

Cite mẫu proto row: `TFP-toll_booth_1001` · `name=Trạm thu phí Pháp Vân — Cầu Giẽ` · `weighting_method=Cân động` · route=`CT.01` · routeNamed=`Cao tốc Pháp Vân — Cầu Giẽ` · routeSegment=`Km 0 – Km 35` · `kmFrom=Km12+500` · `number_weighting_lane=2` · `number_etc_lane=4` · `number_manual_lane=2` · `house_grade_id=Cấp 4` · `area_yoll_gate_pavement=850` · lat/lng `20.95` / `105.88`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột TOLL · ẩn type / kmTo / quantity / unitCode · ON+hide-empty làn cân/ETC/thủ công/cấp/DT cổng · auxiliary_works_grade_id OFF default |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC lookup fields — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `TOLL` · `kmFrom` không required · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `station_name` · trống OK — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | `width_*` gộp subsection S-ATTR-WIDTH theo mẫu detail |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=TOLL&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=TOLL`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-TOLL-LOOKUP-01 | `weighting_method` / `roof_structures_gate_id` / `pavement_type_id` / `house_grade_id` / `road_structure_id` / `operation_building_location_id` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-TOLL-NAME-01 | `name` ← `station_name` · trống OK · **cấm** IsWeak đoạn tuyến |
| GAP-TOLL-ROUTE-01 | Live = `/so-ts?type=TOLL` · alias board `/so-ts-toll` · optional redirect Navigate |
| GAP-TOLL-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key TOLL |
| GAP-TOLL-POINT-01 | Ẩn + không required `kmTo` · `kmFrom` không required · S-LOC-POINT only |
| GAP-SOTS-COL-01 | ON+hide-empty: làn cân · ETC · thủ công · cấp nhà · DT cổng · auxiliary_works_grade_id OFF default |
| GAP-SOTS-FORM-01 | S-ATTR editable đủ dump §4 · **cấm** chỉ readonly `<dl>` |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-TOLL-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |
| GAP-TOLL-WIDTH-01 | `width_*` gộp subsection **S-ATTR-WIDTH** trong S-ATTR theo mẫu detail gov |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `tram-thu-phi` deep-link
- Flatten `dumpSpecs` → cột DB (SA migration)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `TOLL` · cluster `station` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html` |
| prototype.artifact | `specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · S-ATTR-WIDTH · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC lookup fields P1 · dumpSpecs P1 · hide-empty · width_* subsection |
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
| generatedAt | 2026-09-01T05:05:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c |
| headerFingerprintPrior | sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_d313d9f9` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c taskId=task_d313d9f9 -->
