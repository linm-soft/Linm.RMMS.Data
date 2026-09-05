# Design — so-ts-culvert-x (Sổ TS — Cống thoát nước ngang)

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| title | Sổ TS — Cống thoát nước ngang |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_d82a3890`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `CULVERT_X` |
| cluster | `crossing` · ô KCHT `t07` |
| dump | **thiếu** (`GAP-CULVERT-X-01`) · UI từ mẫu · empty OK · **cấm** seed |
| prefix | **`CN-`** (GIS/import · Create align) |
| prior · po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-culvert-x-control-hint.md` · `so-ts-culvert-x-real-data.md` · contentHash `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=CULVERT_X` · alias Navigate **REQUIRED** `/so-ts-culvert-x` |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` |
| peerStdUrl | `http://localhost:9301/so-ts?type=CULVERT_X` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_d82a3890` |
| updatedAt | `2026-09-01T12:30:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal/Slideout form · tab legacy · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-culvert-x.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `crossing` · t07 |
| CTX-03 | `docs/context/features/import-gov-ssot.md` | CSV 0 · GAP-CULVERT-X-01 |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/22-cong-ngang-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-culvert-x-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-culvert-x-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `CULVERT_X` · S-ATTR editable proposed keys · `name` optional list OFF · ẩn `kmTo` · hide-empty `width`/`material_body_id` · Dropdown LOOKUP_STATIC · `LeaveConfirmModal` · alias Navigate `/so-ts-culvert-x` · prefix Create `CN-` · reuse S-* — **không** invent field ngoài PO/analy · empty grid OK.

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** catalog list + form **full-page** (≥10 field — **cấm** Modal / Slideout) |
| List pattern | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested `CatalogListShell` |
| Form pattern | **full-page** `AssetFormPage` · routes `/so-ts/tao-moi` · `/so-ts/sua?id=` · Copy = create prefill |
| Form grid | **`data-form-cols="5"`** · **cấm** `.fields { 1fr 1fr }` (**GAP-DES-FORM-SURFACE-01**) |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` §0 · config=`fa-cog` |
| Zone F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · catalogKind=`road-assets` |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** nút Tìm · **cấm** `ErpListHeaderFilters` |
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-culvert-x` → Navigate live `/so-ts?type=CULVERT_X` (**REQUIRED** · **GAP-CN-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | profile cột CULVERT_X |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `CULVERT_X` · prefix `CN-` |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `CULVERT_X` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-culvert-x` → `/so-ts?type=CULVERT_X` |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại · hình dạng · VL · tuyến · QR · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `CULVERT_X` · **ẩn** khi deep-link |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** form/grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=CULVERT_X&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=CULVERT_X` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| type_work_id | Loại công trình | Dropdown label | **ON** | «Cống thủy lợi» |
| route / routeNamed / routeSegment | 3 tầng tuyến | Text | ON | **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | |
| culvert_shape_id | Hình dạng | Dropdown label | ON | Hộp / Bản · hide-empty OK |
| weight | Tải trọng | Number | ON | |
| number | Số ngăn cống | Number | ON | |
| width | Bề rộng lòng / ĐK trong (m) | Number | ON · **hide-empty** | |
| height | Chiều cao TB lòng cống (m) | Number | ON | |
| crossing_length_culvert | Chiều dài thân cống (m) | Number | ON | |
| material_body_id | Vật liệu thân cống | Dropdown label | ON · **hide-empty** | |
| name | Tên / mô tả | — | **OFF** | GAP-CN-NAME-01 |
| type / kmTo / quantity / unitCode | — | — | **OFF** | |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix **`CN-`** |
| type | Loại tài sản | `SearchInput` | * | lock `CULVERT_X` từ tile `t07` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | `road-route` · `parentCode=route` |
| routeSegment | Đoạn tuyến | `SearchInput` | | cascade |

#### S-LOC-POINT

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | * | **ẩn** `kmTo` · **cấm** ép `"0"` |
| tinhthanhpho | Tỉnh / TP | `Text` | | |
| xaphuong | Phường / Xã | `Text` | | |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `CULVERT_X` (**GAP-CN-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên / mô tả cống | `Text` | | optional · list OFF · **cấm** IsWeak → đoạn (**GAP-CN-NAME-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| type_work_id | Loại công trình | `Dropdown` LOOKUP_STATIC | * | |
| culvert_shape_id | Hình dạng | `Dropdown` LOOKUP_STATIC | * | Hộp / Bản |
| weight | Tải trọng | `Number` | | |
| number | Số ngăn cống | `Number` | | |
| width | Bề rộng lòng / ĐK trong (m) | `Number` | | |
| height | Chiều cao TB lòng cống (m) | `Number` | | |
| crossing_length_culvert | Chiều dài thân cống (m) | `Number` | | |
| material_body_id | Vật liệu thân cống | `Dropdown` LOOKUP_STATIC | | |
| has_upstream_head | Có đầu cống thượng lưu? | `Checkbox`/`Dropdown` | | |
| upstream_head_structure_id | Kết cấu đầu thượng lưu | `Dropdown` | | khi has |
| has_upstream_valve | Có van/phai thượng lưu? | `Checkbox` | | |
| has_downstream_head | Có đầu cống hạ lưu? | `Checkbox` | | |
| has_downstream_valve | Có van/phai hạ lưu? | `Checkbox` | | |
| has_upstream_apron | Có sân thượng lưu? | `Checkbox` | | |
| upstream_apron_structure_id | Kết cấu sân thượng lưu | `Dropdown` | | |
| upstream_apron_area | DT sân thượng lưu (m²) | `Number` | | |
| has_downstream_apron | Có sân hạ lưu? | `Checkbox` | | |
| downstream_apron_structure_id | Kết cấu sân hạ lưu | `Dropdown` | | |
| downstream_apron_area | DT sân hạ lưu (m²) | `Number` | | |
| has_upstream_basin | Có hố tụ thượng lưu? | `Checkbox` | | |
| has_downstream_basin | Có hố tụ hạ lưu? | `Checkbox` | | |
| upstream_basin_width | Bề rộng hố tụ thượng (m) | `Number` | | |
| downstream_basin_width | Bề rộng hố tụ hạ (m) | `Number` | | |

Proposed dumpSpecs keys đến khi SA remap (`GAP-CN-KEY-01`). Form **phải** Input/Select.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat / lng | Vĩ độ / Kinh độ | `Number` | | |
| qr / valueVnd / note | QR / Giá trị / Ghi chú | Text / Money / TextArea | | |
| updatedAt | Cập nhật | `Date` readonly | | |

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header «Sổ TS — Cống thoát nước ngang» — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText+🔍 · type · route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách cống thoát nước ngang» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile CULVERT_X · resize ON |
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
| Artifact | `ui/prototype/so-ts-culvert-x-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=CULVERT_X` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Cống thoát nước ngang» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile CULVERT_X (ẩn type/kmTo/SL/ĐVT/name · hide-empty width/material)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE · prefix CN- · alias Navigate
```

Cite mẫu proto (GOV — **không** seed Dev): loại CT «Cống thủy lợi» · hình dạng «Hộp» · tải 627 · số ngăn 1 · cao 2 · dài 39 · lý trình `Km 394+907` · route `QL.1` · lat/lng ~19.213 / 105.686 · đầu thượng lưu Có · sân thượng 9.6 m². Live empty OK (`GAP-CULVERT-X-01`).

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột CULVERT_X · ẩn type / kmTo / quantity / unitCode / name · hide-empty width / material_body_id |
| AC-G-06 | Footer pageSize 50/100/200/500 |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ mẫu · Dropdown LOOKUP_STATIC — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` · không mount S-LOC-RANGE |
| AC-F-04 | `name` optional form · list OFF — **cấm** IsWeak đoạn tuyến |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title |
| AC-F-08 | Create IdCode prefix **`CN-`** |
| AC-F-09 | Alias Navigate `/so-ts-culvert-x` → live |
| AC-P-01 | `real_view_parity: v1` · peer cùng shell `/so-ts` |
| AC-P-02 | Prototype content-only · reviewUrl mở được · empty OK |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=CULVERT_X&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=CULVERT_X`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-CN-LOOKUP-01 | Dropdown LOOKUP_STATIC shape/VL/KC — **không** SearchInput master |
| GAP-CN-NAME-01 | `name` optional form · list **OFF** · **cấm** IsWeak |
| GAP-CN-ROUTE-01 | Alias Navigate **REQUIRED** `/so-ts-culvert-x` → `/so-ts?type=CULVERT_X` |
| GAP-CN-KEY-01 | Giữ proposed keys · SA remap khi dump |
| GAP-CN-PREFIX-01 | Create IdCode **`CN-`** |
| hide-empty | Grid hide-empty `width` · `material_body_id` OK |
| GAP-CULVERT-X-01 | UI từ mẫu · empty OK · **cấm** seed |
| GAP-CN-POINT-01 | Ẩn `kmTo` · S-LOC-POINT only |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `cong` (deep-link optional)
- Flatten dumpSpecs → cột DB (SA)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `CULVERT_X` · cluster `crossing` · tile `t07` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html` |
| prototype.artifact | `specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC · proposed keys · hide-empty · prefix `CN-` · alias Navigate |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · IdCode `CN-` · dumpSpecLabels · DOMAIN-MAP Asset · GAP-CULVERT-X-01 empty |
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
| generatedAt | 2026-09-01T12:30:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b |
| headerFingerprintPrior | sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| design_confirm | approve |
| taskId | task_d82a3890 |
