# Design — so-ts-convex-mirror (Sổ TS — Gương cầu / long môn)

| Field | Value |
|-------|-------|
| feature | `so-ts-convex-mirror` |
| title | Sổ TS — Gương cầu / long môn |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_98fbbc05`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `CONVEX_MIRROR` |
| dump | `road_sphere_mirror` · cluster `atgt_point` · ô KCHT `t31` · CSV **187378** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-convex-mirror-control-hint.md` · `so-ts-convex-mirror-real-data.md` · contentHash `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=CONVEX_MIRROR` · alias board `/so-ts-convex-mirror` (optional Navigate) |
| mfeStdUrl | `http://localhost:9301/so-ts-convex-mirror` |
| peerStdUrl | `http://localhost:9301/so-ts?type=CONVEX_MIRROR` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| GIS | layer `guong-cau` · deep-link optional · **cấm** invent map canvas |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_98fbbc05` |
| updatedAt | `2026-09-01T15:45:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent field long môn / GANTRY · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-convex-mirror.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `atgt_point` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` | dump §4 CONVEX_MIRROR |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/28-moc_dbvn.road_sphere_mirror-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-convex-mirror-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-convex-mirror-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `CONVEX_MIRROR` · S-ATTR editable **9 attr** dump · primary `name` = loại+km else code · LOOKUP_STATIC MST/shape/mat/loc · ẩn `kmTo` form/grid · `quantity` ← `total_number_post` · `LeaveConfirmModal` · reuse S-* — **cấm** invent field gantry/long môn.

**PO chốt (Design khóa):** GAP-MIRROR-TYPE-01 = Dropdown LOOKUP_STATIC P1 · GAP-MIRROR-NAME-01 name=loại+km else code · GAP-MIRROR-QTY-01 quantity←total_number_post · GAP-MIRROR-SCOPE-01 dumpSpecs P1 · flatten=SA · cấm field gantry · GAP-MIRROR-ROUTE-01 alias board-only · GAP-MIRROR-POINT-01 ẩn kmTo · GAP-MIRROR-LEAVE-01 LeaveConfirmModal · GAP-MIRROR-LABEL-01 dumpSpecLabels FE · title CTX «Gương cầu / long môn».

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
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột CONVEX_MIRROR |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `CONVEX_MIRROR` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `CONVEX_MIRROR` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-convex-mirror` → `/so-ts?type=CONVEX_MIRROR` (optional · board-only) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · số biển · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `CONVEX_MIRROR` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=CONVEX_MIRROR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=CONVEX_MIRROR` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên / loại gương | link Text | **ON** | loại+km else code · **cấm** đoạn tuyến (**GAP-MIRROR-NAME-01**) |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | dump trống → để trống · **cấm** ép `"0"` |
| location_post_id | Vị trí đặt | Text / Dropdown label | ON | dumpSpecs |
| asset_type_mst_id | Loại TS (MST) | Text / Dropdown label | ON | dumpSpecs · **≠** filter `type` |
| shape_cut_post_id | Hình cắt trụ | Text / Dropdown label | ON | dumpSpecs |
| diameter_post | Đường kính (m) | Number | ON | dumpSpecs |
| height_post | Chiều cao trụ (m) | Number | ON | dumpSpecs |
| span_length | Chiều dài nhịp (m) | Number | ON | dumpSpecs |
| material_post_id | Vật liệu trụ | Text / Dropdown label | ON | dumpSpecs |
| number_sign | Số biển / số gương | Number | ON | dumpSpecs |
| total_number_post | Tổng số trụ | Number | ON | → `quantity` |
| quantity | Số lượng | Number | ON | ← `total_number_post` (**GAP-MIRROR-QTY-01**) |
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
| type | Loại tài sản | `SearchInput` | * | lock `CONVEX_MIRROR` từ tile t31 |
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
| location_post_id | Vị trí đặt / mặt cắt | `Dropdown` LOOKUP_STATIC | | dumpSpecs · P1 static |

**Không mount:** `kmTo` trên form `CONVEX_MIRROR` (**GAP-MIRROR-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên hiển thị | `Text` | * | loại+km hoặc `vidagis_id`/code · **cấm** đoạn tuyến (**GAP-MIRROR-NAME-01**) |
| asset_type_mst_id | Loại tài sản (MST dump) | `Dropdown` LOOKUP_STATIC | | dump · **≠** shell `type` (**GAP-MIRROR-TYPE-01**) |

#### S-ATTR (mẫu Thông tin chung — editable · **9 attr dump**)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| shape_cut_post_id | Hình dạng mặt cắt trụ | `Dropdown` LOOKUP_STATIC | | dump |
| diameter_post | Đường kính trụ (m) | `Number` | | dump |
| material_post_id | Vật liệu trụ | `Dropdown` LOOKUP_STATIC | | dump |
| height_post | Chiều cao trụ (m) | `Number` | | dump |
| span_length | Chiều dài nhịp (m) | `Number` | | dump · khẩu độ / nhịp |
| number_sign | Số biển / số gương | `Number` | | dump |
| total_number_post | Tổng số trụ trong đoạn | `Number` | | → sync `quantity` |

`dumpSpecs` JSON = nguồn P1 đến khi SA flatten. Form **phải** Input/Select — **cấm** chỉ readonly `<dl>`. **Cấm** mount field long môn / gantry không có trong dump (**GAP-MIRROR-SCOPE-01**). FE bổ sung `dumpSpecLabels` (**GAP-MIRROR-LABEL-01**).

#### S-GPS

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · field `GANTRY_SIGN` / long môn không dump.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Gương cầu / long môn» khi `type=CONVEX_MIRROR` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách gương cầu» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile CONVEX_MIRROR · resize ON |
| DES-GRID-C3 | Row menu: Xem · Sửa · Sao chép · Lịch sử · Xóa |
| DES-GRID-D | `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** |
| DES-GRID-F | `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| DES-GRID-H | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Header chrome: Quay lại · Hủy · Lưu/Tạo mới · (View: Sửa/Đóng) — **cấm** footer Lưu |
| DES-FORM-Z2 | Sections S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR(9 attr) · S-GPS · `data-form-cols="5"` |
| DES-LEAVE | `LeaveConfirmModal` overlay |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/so-ts-convex-mirror-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=CONVEX_MIRROR` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Gương cầu / long môn» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile CONVEX_MIRROR (ẩn type/kmTo · hiện dump attr + SL)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5
· S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR(9 attr gương) · S-GPS
· cấm footer Lưu · LeaveConfirmModal · cấm tab legacy · cấm invent long môn
```

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột CONVEX_MIRROR · ẩn type / kmTo · hiện dump attr + SL · primary name ≠ đoạn tuyến |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable **9 attr** Number + Dropdown LOOKUP_STATIC — **cấm** chỉ `<dl>` · **cấm** field gantry |
| AC-F-03 | Ẩn + không required `kmTo` khi `CONVEX_MIRROR` |
| AC-F-04 | `name` = loại+km else code · MST/shape/mat/loc Dropdown · **cấm** name=đoạn |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native dialog |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title (**GAP-P2-BTN-SSOT-01**) |
| AC-F-08 | `quantity` ← `total_number_post` (**GAP-MIRROR-QTY-01**) |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=CONVEX_MIRROR&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=CONVEX_MIRROR`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`. Dump attrs → `dumpSpecs` + scalar `quantity`/`name` per §B real-data.

## 8. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `guong-cau` canvas
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master SearchInput cho MST/shape/mat/loc (P2 — P1 = LOOKUP_STATIC)
- Excel import/export wizard
- Invent field long môn / `GANTRY_SIGN`
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 9. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-convex-mirror` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `CONVEX_MIRROR` · S-ATTR 9 attr |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html` |
| prototype.artifact | `specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · LOOKUP_STATIC MST/shape/mat/loc P1 · dumpSpecs P1 · name≠đoạn · qty←total_number_post |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP_STATIC seed · import qty/name · dumpSpecLabels · DOMAIN-MAP Asset |
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
| generatedAt | 2026-09-01T15:45:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f |
| headerFingerprintPrior | sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_98fbbc05` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f taskId=task_98fbbc05 -->
