# Design — so-ts-noise-barrier (Sổ TS — Rào chắn ồn)

| Field | Value |
|-------|-------|
| feature | `so-ts-noise-barrier` |
| title | Sổ TS — Rào chắn ồn |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_b4455967`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `NOISE_BARRIER` |
| cluster | `linear_protect` · ô KCHT `t25` |
| dump | `tbl_noise_barrier` |
| prefix | `TC-` (GIS short `TC`) |
| prior · po | `confirmed` · `po/requirement.md` · handoff `po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-noise-barrier-control-hint.md` · `so-ts-noise-barrier-real-data.md` · contentHash `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=NOISE_BARRIER` · alias board `/so-ts-noise-barrier` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| peerStdUrl | `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_b4455967` |
| updatedAt | `2026-09-01T09:45:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-noise-barrier.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `linear_protect` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 NOISE_BARRIER | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/7-tbl_noise_barrier-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-noise-barrier-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-noise-barrier-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `NOISE_BARRIER` · S-ATTR editable đủ dump §4 · list primary = `type_noise_barrier_id` · S-LOC-RANGE km* + 4 XY · Dropdown LOOKUP_STATIC loại tường · `name` optional · `LeaveConfirmModal` · prefix `TC-` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-NB-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-noise-barrier` = board deep-link · **optional** redirect → `/so-ts?type=NOISE_BARRIER` (**GAP-NB-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột NOISE_BARRIER |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `NOISE_BARRIER` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `NOISE_BARRIER` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-noise-barrier` → `/so-ts?type=NOISE_BARRIER` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại tường · tuyến · QR · địa danh · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `NOISE_BARRIER` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=NOISE_BARRIER&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=NOISE_BARRIER` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| type_noise_barrier_id | Loại tường chống ồn | Dropdown label | **ON** | dumpSpecs · **list primary** · link mở View |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | RANGE · mẫu list |
| provinceFrom | Địa danh điểm đầu (tỉnh) | Text | ON | dumpSpecs |
| communeFrom | Địa danh điểm đầu (xã) | Text | hide-empty | mẫu |
| provinceTo | Địa danh điểm cuối (tỉnh) | Text | hide-empty | mẫu |
| communeTo | Địa danh điểm cuối (xã) | Text | hide-empty | mẫu |
| average_height | Chiều cao trung bình (m) | Number | ON | dumpSpecs |
| actual_length | Chiều dài thực tế (m) | Number | ON | dumpSpecs · label «thực tế» |
| name | Tên | link Text | optional | **GAP-NB-NAME-01** · không bắt buộc |
| vitri | Vị trí | Dropdown label | hide-empty | **GAP-NB-VITRI-01** |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump không có |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `TC-` |
| type | Loại tài sản | `SearchInput` | * | lock `NOISE_BARRIER` từ tile `t25` |
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
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-NB-RANGE-01** |
| provinceFrom / provinceTo | Địa danh tỉnh đầu/cuối | `Text` | | mẫu ĐVHC |
| communeFrom / communeTo | Địa danh xã đầu/cuối | `Text` | | hide-empty |

**Không mount** `S-LOC-POINT` thay RANGE cho type này (cluster `linear_protect`).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-NB-NAME-01** · **cấm** bắt buộc đoạn tuyến |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_noise_barrier_id | Loại tường chống ồn | `Dropdown` LOOKUP_STATIC | * | COMPOSITE / Khác / Bê tông… · **GAP-NB-LOOKUP-01** |
| average_height | Chiều cao trung bình (m) | `Number` | | dump |
| actual_length | Chiều dài thực tế (m) | `Number` | | dump · label «thực tế» |
| vitri | Vị trí (mặt cắt) | `Dropdown` | | optional · **GAP-NB-VITRI-01** |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | có thể = latFrom |
| lng | Kinh độ | `Number` | | có thể = lngFrom |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** quantity/unit trên form NOISE_BARRIER · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột ảnh invent · KM_POST-only.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Rào chắn ồn» khi `type=NOISE_BARRIER` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách rào chắn ồn» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile NOISE_BARRIER · resize ON |
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
| Artifact | `ui/prototype/so-ts-noise-barrier-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Rào chắn ồn» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile NOISE_BARRIER (ẩn type/SL/ĐVT/ảnh · ON loại tường · 3 tầng · kmFrom/kmTo · tỉnh · cao/dài · hide-empty)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · S-LOC-RANGE km*+4XY · cấm footer Lưu · LeaveConfirmModal · prefix TC-
```

Cite mẫu proto row: `COMPOSITE` · route=`CT.Hà Nội – Hải Phòng` · km `63+902`→`64+298` · cao `3` · dài `396` · tỉnh Hải Phòng / Hưng Yên · peer `Khác` · km `189+283`→`189+603` · XY `105.864/20.899`→`105.866/20.897` · cao `2` · dài `320` · Hà Nội.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột NOISE_BARRIER · ẩn type / quantity / unitCode / ảnh · ON loại tường / 3 tầng / kmFrom / kmTo / tỉnh / cao / dài · hide-empty vitri/xã |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC `type_noise_barrier_id` — **cấm** chỉ `<dl>` |
| AC-F-03 | S-LOC-RANGE · kmFrom/kmTo * · 4 XY dumpSpecs · **cấm** ép `"0"` · **không** mount S-LOC-POINT |
| AC-F-04 | `name` optional · list primary = loại tường — **cấm** IsWeak đoạn tuyến |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=NOISE_BARRIER&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=NOISE_BARRIER`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-NB-LOOKUP-01 | `type_noise_barrier_id` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-NB-NAME-01 | `name` optional · list primary = loại tường · **cấm** IsWeak đoạn tuyến |
| GAP-NB-ROUTE-01 | Live = `/so-ts?type=NOISE_BARRIER` · alias board-only · optional redirect |
| GAP-NB-PREFIX-01 | IdCode create/import **`TC-`** · GIS short `TC` |
| GAP-NB-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE dumpSpecLabels đủ key |
| GAP-NB-RANGE-01 | S-LOC-RANGE · km* + 4 XY dumpSpecs P1 · **cấm** ép `"0"` · **không** S-LOC-POINT |
| GAP-NB-VITRI-01 | `vitri` optional · grid hide-empty |
| GAP-SOTS-COL-01 | ON loại tường / 3 tầng / km / tỉnh / cao / dài · ẩn type/SL/ĐVT/ảnh |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-NB-LEAVE-01 | `LeaveConfirmModal` · **cấm** native confirm |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `chong-on` (deep-link optional only)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog noise_barrier SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-noise-barrier` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `NOISE_BARRIER` · cluster `linear_protect` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html` |
| prototype.artifact | `specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC type_noise_barrier · dumpSpecs P1 · S-LOC-RANGE · hide-empty vitri/xã |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path · prefix `TC-` |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels FE · DefaultCodePrefix `TC-` · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T09:45:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3 |
| headerFingerprintPrior | sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_b4455967` |
