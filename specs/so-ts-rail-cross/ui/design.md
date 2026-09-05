# Design — so-ts-rail-cross (Sổ TS — Giao cắt đường sắt)

| Field | Value |
|-------|-------|
| feature | `so-ts-rail-cross` |
| title | Sổ TS — Giao cắt đường sắt |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_68fa43af`) |
| changeScope | `new_page` |
| packKind | `list` |
| typeCode | `RAIL_CROSS` |
| cluster | `crossing` · ô KCHT `t15` |
| dump | `tbl_railway_crossing` |
| prior · po | `confirmed` · `po/requirement.md` · task `task_69787dbe` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-rail-cross-control-hint.md` · `so-ts-rail-cross-real-data.md` · contentHash `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RAIL_CROSS` · alias board `/so-ts-rail-cross` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_68fa43af` |
| updatedAt | `2026-09-02T07:31:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` · Modal form hồ sơ · Slideout · tab legacy DRVN · invent API · ERP.* · `ErpListHeaderFilters` / stack filter · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-rail-cross.md` | feature |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · S-* reuse · `crossing` |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 RAIL_CROSS | dump columns |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` | UI tham chiếu only · **cấm** SSOT data · **không** re-scan |
| MAU-01/02 | `docs/img/gov-mau-tai-san/24-moc_dbvn.tbl_railway_crossing-*.png` | mẫu list/detail |
| DA-HINT | `specs/_data-analy/features/so-ts-rail-cross-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-rail-cross-real-data.md` | §A+§B bind |

**Delta this Design (`new_page`):** type-profile cột `RAIL_CROSS` · S-ATTR editable đủ dump §4 · `name` ← `name_crossing` · ẩn `kmTo` form · Dropdown LOOKUP_STATIC protection/traffic · `shortest_waiting_time` phút · `LeaveConfirmModal` · reuse S-* — **không** invent field ngoài PO/analy.

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
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-DES-LEAVE-01** / **GAP-RC-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-rail-cross` = board deep-link · **optional** redirect → `/so-ts?type=RAIL_CROSS` (**GAP-RC-ROUTE-01**) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | `LinErpListFilterBar` · profile cột RAIL_CROSS |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type lock `RAIL_CROSS` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep `RAIL_CROSS` |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-rail-cross` → `/so-ts?type=RAIL_CROSS` (optional redirect) |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên giao cắt · kiểu bảo vệ · tuyến · QR · apply → page=1 · **🔍 cụm phải** |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RAIL_CROSS` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=RAIL_CROSS&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

### 3.2 Grid columns (`type=RAIL_CROSS` profile)

| uiField | Label VN | Control / col | Visible | Notes |
|---------|----------|---------------|---------|-------|
| name | Tên giao cắt | link Text | **ON** | bind `name` ← `name_crossing` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` · có thể trống |
| protection_type_id | Kiểu bảo vệ | Dropdown label | **ON** | dumpSpecs |
| traffic_control_method_id | Phương thức điều khiển giao thông | Dropdown label | **ON** | dumpSpecs |
| shortest_waiting_time | Thời gian chờ ngắn nhất (phút) | Number | ON | dumpSpecs · đơn vị **phút** |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump RAIL_CROSS không có |
| culvert_* / spillway_* / pontoon_* | — | — | **OFF** | type-other |

Grid = `useCatalogUiSchema('road-assets')` + type-profile hide-empty. Kéo cột default **ON**.

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DS-` |
| type | Loại tài sản | `SearchInput` | * | lock `RAIL_CROSS` từ tile `t15` |
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
| side | Mặt cắt | `Select` L/R/C | | nếu dump có |

**Không mount:** `S-LOC-RANGE` / `kmTo` trên form `RAIL_CROSS` (**GAP-RC-POINT-01**).

#### S-NAME

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name_crossing | Tên giao cắt | `Text` | | SSOT dump · **GAP-RC-NAME-01** · trống OK |

#### S-ATTR (mẫu Thông tin chung — editable · **cấm** chỉ `<dl>`)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| protection_type_id | Kiểu bảo vệ | `Dropdown` LOOKUP_STATIC | | dump distinct / init seed · **GAP-RC-LOOKUP-01** |
| traffic_control_method_id | Phương thức điều khiển giao thông | `Dropdown` LOOKUP_STATIC | | dump distinct |
| shortest_waiting_time | Thời gian chờ ngắn nhất | `Number` | | đơn vị **phút** (PO chốt) |

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

**Không mount:** quantity/unit · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột type-other.

### 3.4 DES-GRID / DES-FORM zone ids

| Zone | Spec |
|------|------|
| DES-GRID-A | Header title «Sổ TS — Giao cắt đường sắt» khi `type=RAIL_CROSS` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử · **Sửa config** (`fa-cog`) · Xem/Sửa/Xóa (perm) · **+ Tạo mới** primary phải |
| DES-GRID-B-FILTER | `LinErpListFilterBar` 1 hàng · SearchText + SearchInput type/route · km · org · **không** nút Tìm |
| DES-GRID-C0 | Card title «Danh sách giao cắt đường sắt» + help row-menu |
| DES-GRID-C2 | `LinCatalogDataGrid` · profile RAIL_CROSS · resize ON |
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
| Artifact | `ui/prototype/so-ts-rail-cross-list-prototype.html` |
| List zones | **A–D** + **B-FILTER** + **F** schema + **H** history · shared_grid_example **v1** |
| Form zones | full-page · `data-form-surface="full"` · **`data-form-cols="5"`** · S-* · LeaveConfirmModal |
| Scope | content-only — **cấm** GOVOne chrome / note banner / hub menu / demo skin |
| SSOT | `shared-grid-example` · `list-shell-prototype` · `form-full-page-prototype` · `design-real-view-parity` · `erp-control-icon-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| **real_view_parity** | `v1` |

### Wire (list)

```
[A] icon + «Sổ TS — Giao cắt đường sắt» (**no** Thêm mới)
[B] Làm mới · Lịch sử · config(fa-cog) · Xem/Sửa/Xóa  |  **[+ Tạo mới]**
[B-FILTER] LinErpListFilterBar 1 hàng · SearchText+🔍 · type · route · kmFrom · kmTo · org
[C] card: title · row-menu help · grid profile RAIL_CROSS (ẩn type/kmTo/SL/ĐVT/type-other)
[D] pageSize 50/100/200/500 · Tổng · «‹ ‹ x/y › ›»
[F] LinCatalogUiSchemaEditorModal · [H] History
```

### Wire (form)

```
Full page: [Quay lại | Hủy Lưu] Title · 5 cột data-form-cols=5 · S-META…S-GPS · cấm footer Lưu · LeaveConfirmModal · cấm kmTo/S-LOC-RANGE
```

Cite mẫu proto row: `railway_crossing_593984` · `name=Giao đường sắt có rào chắn` · `protection_type_id=Có rào chắn` · `shortest_waiting_time=5` phút · prefix `DS-`.

## 5. AC Design (align PO § Grid AC)

| ID | AC |
|----|-----|
| AC-G-01 | Zones A · B · C · D (+ F) |
| AC-G-02 | `LinErpListFilterBar` · filter đổi → page=1 · **cấm** nút Tìm / ErpListHeaderFilters |
| AC-G-03 | Toolbar FULL · config `fa-cog` · **+ Tạo mới** phải · **cấm** Thêm mới trên A |
| AC-G-04 | Row menu Xem / Sửa / Sao chép / Lịch sử / Xóa · help «nhấn đúp / Ctrl+chuột phải» |
| AC-G-05 | Profile cột RAIL_CROSS · ẩn type / kmTo / quantity / unitCode / type-other |
| AC-G-06 | Footer pageSize 50/100/200/500 — **cấm** footerPagination raw |
| AC-G-07 | Zone F `LinCatalogUiSchemaEditorModal` kind=`road-assets` |
| AC-G-08 | 1× LinPageLayout — **cấm** nested CatalogListShell |
| AC-F-01 | Full-page · `data-form-cols="5"` · header chrome Lưu — **cấm** Modal form · **cấm** 2 cột |
| AC-F-02 | S-ATTR editable đủ dump §4 · Dropdown LOOKUP_STATIC protection/traffic — **cấm** chỉ `<dl>` |
| AC-F-03 | Ẩn + không required `kmTo` khi `RAIL_CROSS` · không mount S-LOC-RANGE |
| AC-F-04 | `name` ← `name_crossing` · trống OK — **cấm** IsWeak đoạn tuyến |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=RAIL_CROSS&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RAIL_CROSS`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`.

## 8. Design decisions (autopilot chốt từ PO open Q)

| ID | Decision |
|----|----------|
| GAP-RC-LOOKUP-01 | `protection_type_id` / `traffic_control_method_id` = **Dropdown LOOKUP_STATIC** dump P1 — **không** SearchInput master |
| GAP-RC-NAME-01 | `name` ← `name_crossing` · trống OK · **cấm** IsWeak → đoạn tuyến |
| GAP-RC-ROUTE-01 | Live = `/so-ts?type=RAIL_CROSS` · alias board-only · optional redirect `/so-ts-rail-cross` |
| GAP-RC-SPEC-01 | Attr trong **`dumpSpecs` P1** · flatten → SA · FE labels bổ sung traffic_control + shortest_waiting |
| GAP-RC-POINT-01 | Ẩn + không required `kmTo` · S-LOC-POINT only |
| GAP-RC-PREFIX-01 | Create IdCode prefix **`DS-`** · icon KCHT **`NG`** giữ |
| GAP-SOTS-REUSE-01 | Reuse S-* — **cấm** fork form |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| waiting-time | `shortest_waiting_time` đơn vị **phút** trên form + grid label |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN
- Kind F map canvas / GIS `giao-duong-sat` deep-link (optional out)
- Flatten `dumpSpecs` → cột DB (SA migration)
- Master catalog protection/traffic SearchInput (P2)
- Excel import/export wizard
- Invent `api/v1/so-ts/*` · ERP.*
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rail-cross` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · type `RAIL_CROSS` · cluster `crossing` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html` |
| prototype.artifact | `specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · Dropdown LOOKUP_STATIC protection/traffic P1 · dumpSpecs P1 · name_crossing |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | dumpSpecs vs flatten · LOOKUP seed · IdCode `DS-` · dumpSpecLabels FE |
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
| generatedAt | 2026-09-02T07:31:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c |
| headerFingerprintPrior | sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe |
| orchestratorSkillVersion | 2026.08.30.01 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| taskId | `task_68fa43af` |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c taskId=task_68fa43af -->
