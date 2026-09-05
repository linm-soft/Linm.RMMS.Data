# Design — so-ts-delineator (Sổ TS — Cọc tiêu / cọc H)

| Field | Value |
|-------|-------|
| feature | `so-ts-delineator` |
| title | Sổ TS — Cọc tiêu / cọc H |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_7fb62df7`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `DELINEATOR` |
| dump | `tbl_guide_post` · cluster `atgt_point` · ô KCHT `t14` · CSV **37303** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-delineator-control-hint.md` · `so-ts-delineator-real-data.md` · contentHash `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=DELINEATOR` · alias board `/so-ts-delineator` (optional Navigate) |
| mfeStdUrl | `http://localhost:9301/so-ts-delineator` |
| peerStdUrl | `http://localhost:9301/so-ts?type=DELINEATOR` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| GIS | layer `coc-tieu` · deep-link optional · **cấm** invent map canvas |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_7fb62df7` |
| updatedAt | `2026-09-01T14:50:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · gộp 1 khối DxRxC tiêu+H · `guide_post_type_id` = «Loại kiểu cọc» · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-delineator.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `atgt_point` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` | dump §2.2 · §4 DELINEATOR |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/14-moc_dbvn.tbl_guide_post-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-delineator-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-delineator-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `DELINEATOR` · S-ATTR editable **2 nhóm** Cọc tiêu / Cọc H · primary `name` = loại+km else code · `h_post_type_id` Dropdown LOOKUP_STATIC · ẩn `kmTo` form/grid · `quantity` ← `total_number_*` · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

**PO chốt (Design khóa):** GAP-DELIM-TYPE-01 = Dropdown LOOKUP_STATIC P1 · GAP-DELIM-NAME-01 name=loại+km else code · GAP-DELIM-QTY-01 quantity←total_number tiêu · fallback h_total · GAP-DELIM-SPEC-01 dumpSpecs P1 · form 2 nhóm bắt buộc · GAP-DELIM-ROUTE-01 alias board-only · GAP-DELIM-POINT-01 ẩn kmTo · GAP-DELIM-LEAVE-01 LeaveConfirmModal.

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

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột DELINEATOR |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `DELINEATOR` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `DELINEATOR` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-delineator` → `/so-ts?type=DELINEATOR` (optional · board-only) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · loại cọc · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `DELINEATOR` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=DELINEATOR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=DELINEATOR` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên / loại cọc | link Text | **ON** | loại+km else code · **cấm** đoạn tuyến (**GAP-DELIM-NAME-01**) |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | dump trống → để trống · **cấm** ép `"0"` |
| installed_location_id | Vị trí cắt / đặt | Text / Dropdown label | ON | dumpSpecs |
| h_post_type_id | Loại kiểu cọc | Text / Dropdown label | ON | dump · **≠** `guide_post_type_id` |
| guide_post_type_id | Vật liệu cọc tiêu | Text / Dropdown label | ON | dumpSpecs · nhóm tiêu |
| length / width / height | DxRxC tiêu (m) | Number | ON | nhóm tiêu |
| average_installation_interval | KC LĐ TB tiêu (m) | Number | ON | dumpSpecs |
| total_number_within_section | SL cọc tiêu | Number | ON | → `quantity` ưu tiên |
| h_guide_post_type_id | Vật liệu cọc H | Text / Dropdown label | ON | dumpSpecs · nhóm H |
| h_length / h_width / h_height | DxRxC H (m) | Number | ON | nhóm H |
| h_average_installation_interval | KC LĐ TB H (m) | Number | ON | dumpSpecs |
| h_total_number_within_section | SL cọc H | Number | ON | dumpSpecs |
| quantity | Số lượng | Number | ON | ← `total_number_*` (**GAP-DELIM-QTY-01**) |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · fill ≈0% |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `DELINEATOR` từ tile t14 |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | road-route · `parentCode=route` · dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | road-route · dump `name_of_route_asset` · **không** làm `name` |

#### S-LOC-POINT

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump trống → để trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| installed_location_id | Vị trí đặt / mặt cắt | `Dropdown` / Text | | dump · vd «Ngoài cùng bên phải» |

**Không mount:** `kmTo` trên form `DELINEATOR` (**GAP-DELIM-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên hiển thị | `Text` | * | loại+km hoặc `vidagis_id`/code · **cấm** đoạn tuyến (**GAP-DELIM-NAME-01**) |
| h_post_type_id | Loại kiểu cọc | `Dropdown` LOOKUP_STATIC | | dump · **≠** `guide_post_type_id` (**GAP-DELIM-TYPE-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **2 nhóm bắt buộc**)

##### Nhóm Cọc tiêu

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| guide_post_type_id | Loại vật liệu | `Dropdown` LOOKUP_STATIC | | dump · **không** = loại kiểu cọc |
| length | Chiều dài (m) | `Number` | | |
| width | Chiều rộng (m) | `Number` | | |
| height | Chiều cao (m) | `Number` | | |
| average_installation_interval | Khoảng cách LĐ TB (m) | `Number` | | |
| total_number_within_section | Tổng số cọc trong đoạn | `Number` | | → sync `quantity` |

##### Nhóm Cọc H / cột H

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| h_guide_post_type_id | Loại vật liệu | `Dropdown` LOOKUP_STATIC | | dump |
| h_length | Chiều dài (m) | `Number` | | |
| h_width | Chiều rộng (m) | `Number` | | |
| h_height | Chiều cao (m) | `Number` | | |
| h_average_installation_interval | Khoảng cách LĐ TB (m) | `Number` | | |
| h_total_number_within_section | Tổng số cọc trong đoạn | `Number` | | fallback `quantity` |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. FE `groupDumpSpecs('DELINEATOR')` — Design **giữ** 2 nhóm. Form **phải** Input/Select — **cấm** chỉ readonly `<dl>`.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · 1 khối DxRxC gộp tiêu+H.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Cọc tiêu / cọc H» khi `type=DELINEATOR` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách cọc tiêu / cọc H» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile DELINEATOR · resize ON |
| DES-GRID-C3 | Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome: Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | Sections S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR(2 nhóm) · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` overlay |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/so-ts-delineator-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=DELINEATOR` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Cọc tiêu / cọc H» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile DELINEATOR (ẩn type/kmTo · hiện 2 bộ tiêu/H + SL)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5
· S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR(Cọc tiêu | Cọc H) · S-GPS
· cấm footer Lưu · LeaveConfirmModal · cấm tab legacy · cấm gộp 1 khối DxRxC
```

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột DELINEATOR · ẩn type / kmTo · hiện 2 bộ tiêu/H · primary name ≠ đoạn tuyến |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable **2 nhóm** tiêu/H Number + Dropdown VL — **cấm** chỉ `<dl>` · **cấm** gộp 1 khối |
| AC-F-03 | Ẩn + không required `kmTo` khi `DELINEATOR` |
| AC-F-04 | `name` = loại+km else code · `h_post_type_id` Dropdown · **cấm** name=đoạn |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | `quantity` ← `total_number_within_section` · fallback `h_total_*` (**GAP-DELIM-QTY-01**) |
| AC-P-01 | `real_view_parity: v1` · peer `peerStdUrl` cùng shell `/so-ts` (**GAP-DES-DEV-VIEW-01**) |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=DELINEATOR&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=DELINEATOR`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`. Dump attrs → `dumpSpecs` + scalar `quantity`/`name` per §B real-data.

## 8. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `coc-tieu` canvas
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master SearchInput cho post-type/materials (P2 — P1 = LOOKUP_STATIC)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 9. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-delineator` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `DELINEATOR` · S-ATTR 2 nhóm |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html` |
| prototype.artifact | `specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · LOOKUP_STATIC post-type/materials P1 · dumpSpecs P1 · name≠đoạn · qty←total_number |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP_STATIC seed · import qty/name · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T14:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9 |
| headerFingerprintPrior | sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_7fb62df7` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9 taskId=task_7fb62df7 -->
