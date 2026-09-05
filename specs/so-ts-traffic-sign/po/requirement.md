# PO — Requirement — so-ts-traffic-sign (Sổ TS — Biển báo)

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
| title | Sổ TS — Biển báo |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `TRAFFIC_SIGN` trên shell `/so-ts` live · greenfield L3 stubs) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `TRAFFIC_SIGN` |
| cluster | `atgt_point` · ô KCHT `t32` |
| dump | `tbl_road_sign` · prefix import **`BB-`** · CSV gov-vn ~223703 |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-SIGN-NAME-01 · GAP-SIGN-SPEC-01 · GAP-SIGN-POINT-01 · GAP-SIGN-LEAVE-01 · GAP-SIGN-MAT-01 · GAP-SIGN-SHAPE-01 · GAP-SIGN-ROUTE-01 · GAP-SOTS-TAB-01 · GAP-SOTS-API-DOC |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_c795993c`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-traffic-sign-control-hint.md` · `so-ts-traffic-sign-real-data.md` · contentHash `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` · headerFingerprint `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` · analy `task_72cf04fa` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=TRAFFIC_SIGN` · STATUS alias `/so-ts-traffic-sign` = board deep-link only (**GAP-SIGN-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` · alias `http://localhost:9301/so-ts-traffic-sign` |
| liveList | `/so-ts?type=TRAFFIC_SIGN` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-real-data.md` |
| contentHash | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprint | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §2.4 · §4 |
| taskId | `task_c795993c` · analy `task_72cf04fa` |
| updatedAt | `2026-09-01T13:30:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Biển báo (`TRAFFIC_SIGN`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung / dump `tbl_road_sign` — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `TRAFFIC_SIGN`: số hiệu · 3 tầng tuyến · lý trình · vị trí đặt · nội dung · R · C · VL · hình dạng · DT · **ẩn** `type` / `kmTo` / SL / ĐVT.
2. Form S-ATTR editable: `width` · `height` · `area` · `material_sign_id` · `shape_sign_id` · `ngaylapdat` (không chỉ `<dl>` dumpSpecs).
3. Primary display = `sign_code_number` · nội dung = `road_sign_content` · bind master `traffic-sign-type` (**GAP-SIGN-NAME-01**).
4. Point cluster: **không** bắt buộc / **ẩn** `kmTo` trên form.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. **Cấm** catalog 36 `PoleCount` / `PoleHeightM` (**GAP-SIGN-SPEC-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T13:25:14.056Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `TRAFFIC_SIGN` |
| Grid columns | 1 schema mọi type (gồm `kmTo` · SL · ĐVT · cột Loại) | Profile `TRAFFIC_SIGN` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (một phần) | Editable Input/Select: width/height/area/material/shape/ngaylapdat/location — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name / QCVN | `name` SearchInput QCVN; CSV `name` = `road_sign_content` | Primary = `sign_code_number` · nội dung cột riêng — **GAP-SIGN-NAME-01** |
| dumpSpecs fields | CSV bỏ width/height/area/material/shape/location/ngaylapdat | Giữ đủ trong `dumpSpecs` P1 · **cấm** PoleCount/PoleHeightM — **GAP-SIGN-SPEC-01** |
| Point kmTo | Form hiện / bắt buộc `kmTo` | **Ẩn** + không required khi `type=TRAFFIC_SIGN` — **GAP-SIGN-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-traffic-sign` | Live = `/so-ts?type=TRAFFIC_SIGN` · alias board-only — **GAP-SIGN-ROUTE-01** |
| Leave / alert | peer native confirm | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-SIGN-LEAVE-01** |
| material / shape | text trong dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-SIGN-MAT-01** · **GAP-SIGN-SHAPE-01** |
| API docs parent | CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit / traffic-sign-type · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=TRAFFIC_SIGN` + **search work** (mã · số hiệu · nội dung · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Biển báo» khi `type=TRAFFIC_SIGN` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `TRAFFIC_SIGN` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột TRAFFIC_SIGN (số hiệu · route · routeNamed · routeSegment · kmFrom · location_id · road_sign_content · width · height · material_sign_id · shape_sign_id · area · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · kmFrom · name/sign_code_number · leave-confirm dirty.
9. S-NAME: SearchInput `traffic-sign-type` → sync `sign_code_number` · Text `road_sign_content`.
10. S-ATTR: width/height/area Number · material/shape Dropdown LOOKUP_STATIC · ngaylapdat Date — **không** chỉ `<dl>` · **cấm** PoleCount/PoleHeightM.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `TRAFFIC_SIGN`.
12. Lookups: asset-type · road-route · org-unit · traffic-sign-type = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-traffic-sign.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `atgt_point` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §2.4 · §4 | dump columns TRAFFIC_SIGN | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t32` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/38-moc_dbvn.tbl_road_sign-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/38-moc_dbvn.tbl_road_sign-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-traffic-sign-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-traffic-sign-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · `SIGN_TYPE_LOOKUP_CONFIG` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump biển | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `TRAFFIC_SIGN` · dumpSpecs | P0 |
| BE-SIGN | `TrafficSignTypeEntity` · `TrafficSignTypeService` | `/integration/traffic-sign-types/search` | P0 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |
| CAT-SIGN | shared catalogs traffic-sign-type | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · số hiệu · nội dung · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `TRAFFIC_SIGN` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=TRAFFIC_SIGN`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name / sign_code_number | Số hiệu | link Text | **ON** | primary display = `sign_code_number` |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 · **cấm** gộp 1 ô · **cấm** cột gantry trên row |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| location_id | Vị trí đặt | Text / Dropdown | ON | dumpSpecs |
| road_sign_content | Nội dung | Text | ON | dumpSpecs / `name` legacy |
| width | Rộng (m) | Number | ON | dumpSpecs · GAP-SIGN-SPEC-01 |
| height | Cao (m) | Number | ON | dumpSpecs |
| material_sign_id | Vật liệu | Dropdown label | ON | dumpSpecs · GAP-SIGN-MAT-01 |
| shape_sign_id | Hình dạng | Dropdown label | ON | dumpSpecs · GAP-SIGN-SHAPE-01 |
| area | Diện tích (m²) | Number | ON | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump TRAFFIC_SIGN không có |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BB-` |
| type | Loại tài sản | `SearchInput` | * | lock `TRAFFIC_SIGN` khi create từ tile |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | dump `long_route_name` · `parentCode=route` |
| routeSegment | Đoạn tuyến | `SearchInput` | | dump `name_of_route_asset` · `parentCode=routeNamed\|route` |

#### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | * | dump `lytrinh-kmlytrinh` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| location_id | Vị trí đặt / mặt cắt | `Dropdown` | | dump · L/R/C nếu map được · else text dump |

**Không mount:** `kmTo` bắt buộc trên form TRAFFIC_SIGN.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / sign_code_number | Loại biển báo (mã QCVN) | `SearchInput` | * | `catalogKind=traffic-sign-type` · live `SIGN_TYPE_LOOKUP_CONFIG` · sync `sign_code_number` |
| road_sign_content | Nội dung biển báo | `Text` | | dump · có thể fill từ master name |

#### S-ATTR (mẫu Thông tin chung · dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| width | Chiều rộng (m) | `Number` | | dump · **không** chỉ `<dl>` |
| height | Chiều cao (m) | `Number` | | dump |
| area | Diện tích (m²) | `Number` | | dump |
| material_sign_id | Vật liệu biển | `Dropdown` | | LOOKUP_STATIC dump · **GAP-SIGN-MAT-01** PO chốt Dropdown P1 |
| shape_sign_id | Hình dạng biển | `Dropdown` | | LOOKUP_STATIC dump · **GAP-SIGN-SHAPE-01** PO chốt Dropdown P1 |
| ngaylapdat | Ngày lắp đặt | `Date` local | | `utcToLocalInputValue` |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select.

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit · PoleCount/PoleHeightM · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=TRAFFIC_SIGN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=TRAFFIC_SIGN`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |
| Sign types | `GET /web-bff/api/v1/integration/traffic-sign-types/search` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `sign_code_number` | Số hiệu biển báo | `name` (primary) + dumpSpecs · master traffic-sign-type |
| `road_sign_content` | Nội dung biển báo | dumpSpecs · form S-NAME · CSV `name` legacy |
| `width` | Chiều rộng (m) | dumpSpecs · form S-ATTR |
| `height` | Chiều cao (m) | dumpSpecs · form S-ATTR |
| `area` | Diện tích (m²) | dumpSpecs · form S-ATTR |
| `material_sign_id` | Vật liệu biển | dumpSpecs · form S-ATTR |
| `shape_sign_id` | Hình dạng biển | dumpSpecs · form S-ATTR |
| `location_id` | Vị trí đặt | dumpSpecs · S-LOC-POINT / S-ATTR |
| `ngaylapdat` | Ngày lắp đặt | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm primary name) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

`map: none` · `progress: none` (Type A · `status` KT + soft `isActive`).

## 6. Grid list AC (REQUIRED · Kind B / list)

> Paste `po-design-grid-standard.md` · filter HARD `filter-bar-layout-hard.md` — **GAP-PO-GRID-01**.

| Area | Acceptance (Design phải prototype / parity) |
|------|---------------------------------------------|
| **Shell A–D** | Header · Toolbar · Grid card · Pagination footer (+ Zone F config) |
| **Toolbar FULL** | Làm mới · Lịch sử · Sửa config (`fa-cog`) · **+ Tạo mới** — **cấm** Thêm mới trên Zone A |
| **Grid menu** | Row menu: Xem/Sửa/Sao chép/Lịch sử · help «nhấn đúp / Ctrl+chuột phải» |
| **Config** | `LinCatalogUiSchemaEditorModal` · kéo cột default ON — **cấm** Zone F-only `LinListTableConfigModal` · **cấm** `configHint` |
| **Grid flow** | Sort cột · filter cột · chọn dòng |
| **Filter Zone B** | **`LinErpListFilterBar`** · 1 hàng wrap · **input + 🔍 cụm phải** — SearchText + SearchInput type/route · km Text · org tree — **không** nút Tìm · **cấm** `ErpListHeaderFilters` / stack · filter đổi → page=1 |
| **Type profile** | Cột TRAFFIC_SIGN §5b · **ẩn** type/kmTo/SL/ĐVT |
| **Form pair** | Create/Edit/View/Copy → **Full page** (`ui-pattern-decision` · ≥10 fields) · Design clone `form-surface-prototype` full-page 5 cột |
| **Empty/fail** | empty copy VN · toast — **cấm** fake row / invent-seed |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

### Report AC

**N/A** — packKind `list` · **không** report/dashboard (**GAP-PO-RPT-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=TRAFFIC_SIGN` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `TRAFFIC_SIGN` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-traffic-sign` | redirect/equiv → `/so-ts?type=TRAFFIC_SIGN` (Design optional) | `/agent-dev` |

**devSlash:** `/agent-dev` (list + full-page form · **không** oms-map / ai-detect / camera).

**Cấm** Modal form hồ sơ (≥10 fields) · **cấm** Slideout · **cấm** map canvas · **cấm** GOVOne chrome · **cấm** tab legacy DRVN.

## 8. Leave / alert (REQUIRED)

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Esc / đổi mode / navigate away | **`LeaveConfirmModal`** (`/implement-show-leave-confirm`) | `window.confirm` / native dialog |
| Xóa / chặn thao tác nguy hiểm | **`useAlert` / `Modal`** | `window.alert` |
| API fail / lookup fail | toast · empty | alert blocking |
| Import 0 / empty list | empty grid + toast | invent-seed / mock rows |
| Validation 422 | toast business message | silent fail |
| History | `LinCatalogHistoryModal` | custom history alert · invent API |
| Lookup no match | SearchInput empty · save 422 | free-text substitute master |

Thiếu → **GAP-PO-LEAVE-01** / **GAP-SIGN-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-SIGN-MAT-01 | P0 | `material_sign_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master materials P1 |
| GAP-SIGN-SHAPE-01 | P0 | `shape_sign_id` = **Dropdown LOOKUP_STATIC** dump / seed SA — **không** SearchInput master shape P1 |
| GAP-SIGN-NAME-01 | P0 | List/form primary = **`sign_code_number`** · nội dung = **`road_sign_content`** cột/field riêng · bind master traffic-sign-type |
| GAP-SIGN-ROUTE-01 | P0 | Live route = **`/so-ts?type=TRAFFIC_SIGN`** · STATUS alias `/so-ts-traffic-sign` = board link only · Design **optional** redirect alias — **không** fork page |
| GAP-SIGN-SPEC-01 / flatten | P1 | Giữ width/height/area/material/shape/location/ngaylapdat trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** · **cấm** PoleCount/PoleHeightM |
| GAP-SOTS-COL-01 | P0 | Type column profile TRAFFIC_SIGN hide type/kmTo/SL/ĐVT |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-SIGN-POINT-01 | P0 | Ẩn + không required `kmTo` trên form TRAFFIC_SIGN |
| GAP-SIGN-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog materials/shape SearchInput (P2 nếu SA seed)
- Excel import wizard / Excel export (parent import path riêng)
- Invent `api/v1/so-ts/*` · ERP.* · Finance fork · `api/v1/rmms/*`
- Auth NuGet `[RequirePermission]` wire full
- Re-CRUD parent `asset` unrelated types
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `TRAFFIC_SIGN` |
| Context | CTX-01 · CTX-02 · CTX-03 · MAU-01/02 · DA-HINT · DA-REAL |
| Demo | `asset-demo.html` → `asset/asset.html` — **UI tham chiếu only** · **cấm** demo-json SSOT |
| controlHint | §5 + DA-HINT — **cấm** đoán Text vs SearchInput · **cấm** Select 8 nhãn demo |
| realData | DA-REAL §A–§F |
| Grid AC | §6 · DES-GRID-A/B/C/D · filter-bar HARD |
| Form | CatalogFormShell 5col · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · **cấm** tab · **cấm** PoleCount |
| Leave | §8 LeaveConfirmModal · useAlert |
| Decisions | §9 MAT/SHAPE Dropdown · NAME=sign_code_number · ROUTE alias board-only · dumpSpecs P1 |
| reviewUrl | (Design fill) |
| peerStdUrl | `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| mfeStdUrl | `http://localhost:9301/so-ts-traffic-sign` |
| compact | `specs/so-ts-traffic-sign/handoff/po-compact.md` |
| next | `/agent-design` · autoApprove ON · e2eQa queued QA |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprint | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| analyzedAt | `2026-09-01T13:25:14.056Z` |
| writtenAt | `2026-09-01T13:30:00.000Z` |
| taskId | `task_c795993c` |
| status | `confirmed` |
