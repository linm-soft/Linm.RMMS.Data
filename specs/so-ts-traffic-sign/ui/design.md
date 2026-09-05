# Design — so-ts-traffic-sign (Sổ TS — Biển báo)

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
| title | Sổ TS — Biển báo |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_6bf578d2`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `TRAFFIC_SIGN` |
| dump | `tbl_road_sign` · prefix **`BB-`** · cluster `atgt_point` · ô KCHT `t32` |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-traffic-sign-control-hint.md` · `so-ts-traffic-sign-real-data.md` · contentHash `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=TRAFFIC_SIGN` · alias board `/so-ts-traffic-sign` (optional Navigate) |
| mfeStdUrl | `http://localhost:9301/so-ts-traffic-sign` |
| peerStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| sign master | `…/integration/traffic-sign-types/search` · `SIGN_TYPE_LOOKUP_CONFIG` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_6bf578d2` |
| updatedAt | `2026-09-01T13:40:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · PoleCount/PoleHeightM · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-traffic-sign.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `atgt_point` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` | dump §2.4 · §4 TRAFFIC_SIGN |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/38-moc_dbvn.tbl_road_sign-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-traffic-sign-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-traffic-sign-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `TRAFFIC_SIGN` · S-ATTR editable (width/height/area/material/shape/ngaylapdat/location) · primary name=`sign_code_number` · content=`road_sign_content` · MAT/SHAPE Dropdown LOOKUP_STATIC · ẩn `kmTo` form · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

**PO chốt (Design khóa):** GAP-SIGN-MAT-01/SHAPE-01 = Dropdown LOOKUP_STATIC P1 · GAP-SIGN-NAME-01 primary=`sign_code_number` · GAP-SIGN-SPEC-01 dumpSpecs P1 · GAP-SIGN-ROUTE-01 alias board-only · GAP-SIGN-POINT-01 ẩn kmTo · GAP-SIGN-LEAVE-01 LeaveConfirmModal.

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
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột TRAFFIC_SIGN |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `TRAFFIC_SIGN` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `TRAFFIC_SIGN` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-traffic-sign` → `/so-ts?type=TRAFFIC_SIGN` (optional · board-only) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · số hiệu · nội dung · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `TRAFFIC_SIGN` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=TRAFFIC_SIGN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=TRAFFIC_SIGN` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name / sign_code_number | Số hiệu | link Text | **ON** | primary display = `sign_code_number` (**GAP-SIGN-NAME-01**) |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 · **cấm** gộp 1 ô · **cấm** cột gantry trên row |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| location_id | Vị trí đặt | Text / Dropdown label | ON | dumpSpecs |
| road_sign_content | Nội dung | Text | ON | dumpSpecs |
| width | Rộng (m) | Number | ON | dumpSpecs |
| height | Cao (m) | Number | ON | dumpSpecs |
| material_sign_id | Vật liệu | Dropdown label | ON | dumpSpecs · LOOKUP_STATIC |
| shape_sign_id | Hình dạng | Dropdown label | ON | dumpSpecs · LOOKUP_STATIC |
| area | Diện tích (m²) | Number | ON | dumpSpecs |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | |
| kmTo | Lý trình kết thúc | — | **OFF** | point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BB-` |
| type | Loại tài sản | `SearchInput` | * | lock `TRAFFIC_SIGN` từ tile t32 |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | road-route · `parentCode=route` · dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | road-route · dump `name_of_route_asset` |

#### S-LOC-POINT

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | * | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump coords |
| location_id | Vị trí đặt | `Dropdown` / Text | | dumpSpecs · L/R/C nếu map được |

**Không mount:** `kmTo` trên form `TRAFFIC_SIGN` (**GAP-SIGN-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name / sign_code_number | Loại biển báo (mã QCVN) | `SearchInput` | * | `catalogKind=traffic-sign-type` · sync `sign_code_number` → `name` |
| road_sign_content | Nội dung biển báo | `Text` | | dump · có thể fill từ master |

#### S-ATTR (mẫu Thông tin chung — editable)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| width | Chiều rộng (m) | `Number` | | **không** chỉ `<dl>` |
| height | Chiều cao (m) | `Number` | | |
| area | Diện tích (m²) | `Number` | | |
| material_sign_id | Vật liệu biển | `Dropdown` LOOKUP_STATIC | | **GAP-SIGN-MAT-01** P1 |
| shape_sign_id | Hình dạng biển | `Dropdown` LOOKUP_STATIC | | **GAP-SIGN-SHAPE-01** P1 |
| ngaylapdat | Ngày lắp đặt | `Date` local | | `utcToLocalInputValue` |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. **Cấm** PoleCount / PoleHeightM.

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Biển báo» khi `type=TRAFFIC_SIGN` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách biển báo» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile TRAFFIC_SIGN · resize ON |
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
| Artifact | `ui/prototype/so-ts-traffic-sign-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Biển báo» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile TRAFFIC_SIGN (ẩn type/kmTo/SL/ĐVT)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal
```

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột TRAFFIC_SIGN · ẩn type / kmTo / quantity / unitCode · primary = `sign_code_number` |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable Number + Dropdown material/shape + Date ngaylapdat — **cấm** chỉ `<dl>` dumpSpecs · **cấm** PoleCount |
| AC-F-03 | Ẩn + không required `kmTo` khi `TRAFFIC_SIGN` |
| AC-F-04 | `name` ← `sign_code_number` · SearchInput traffic-sign-type · content=`road_sign_content` |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=TRAFFIC_SIGN&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=TRAFFIC_SIGN`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Sign master | `GET …/integration/traffic-sign-types/search` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog materials/shapes SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 9. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `TRAFFIC_SIGN` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html` |
| prototype.artifact | `specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · material/shape Dropdown LOOKUP_STATIC P1 · dumpSpecs P1 · name=`sign_code_number` |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · DOMAIN-MAP Asset · LOOKUP_STATIC seed MAT/SHAPE |
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
| generatedAt | 2026-09-01T13:40:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88 |
| headerFingerprintPrior | sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562 |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_6bf578d2` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88 taskId=task_6bf578d2 -->
