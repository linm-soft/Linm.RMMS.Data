# PO — Requirement — so-ts-km-post (Sổ TS — Cột Km)

| Field | Value |
|-------|-------|
| feature | `so-ts-km-post` |
| title | Sổ TS — Cột Km |
| this role | `po` · `/agent-po` |
| changeScope | **`edit_page`** (STATUS + packet · type-profile `KM_POST` trên shell `/so-ts` live) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `KM_POST` |
| cluster | `atgt_point` · ô KCHT `t09` |
| dump | `tbl_km_post` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-KM-NAME-01 · GAP-KM-SPEC-01 · GAP-KM-POINT-01 · GAP-KM-LEAVE-01 · GAP-KM-MAT-01 · GAP-KM-ROUTE-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_e17c1985`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-km-post-control-hint.md` · `so-ts-km-post-real-data.md` · contentHash `sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc` · headerFingerprint `sha256:adf424c895e255a36321742bdf855f877f2800371b066db8fc571ff3263e309e` · analy `task_7d6abf77` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=KM_POST` · STATUS alias `/so-ts-km-post` = board deep-link only (**GAP-KM-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=KM_POST` · alias `http://localhost:9301/so-ts-km-post` |
| liveList | `/so-ts?type=KM_POST` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-km-post-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-km-post-real-data.md` |
| contentHash | `sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc` |
| headerFingerprint | `sha256:adf424c895e255a36321742bdf855f877f2800371b066db8fc571ff3263e309e` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_e17c1985` · analy `task_7d6abf77` |
| updatedAt | `2026-09-01T02:10:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **edit_page** cho loại **Cột Km (`KM_POST`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `KM_POST`: tên cột · 3 tầng tuyến · lý trình · khoảng cách cột kế · vật liệu · **ẩn** `type` / `kmTo` / SL / ĐVT.
2. Form S-ATTR editable: `name_km_post` · `distance_next_post` · `materials_id` (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_km_post` — **cấm** IsWeak → đoạn tuyến (**GAP-KM-NAME-01**).
4. Point cluster: **không** bắt buộc / **ẩn** `kmTo` trên form.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`edit_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-08-31T19:00:59.696Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-08-31) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `KM_POST` |
| Grid columns | 1 schema mọi type (gồm `kmTo` · SL · ĐVT · cột Loại) | Profile `KM_POST` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` | Editable Input/Select: `name_km_post` · `distance_next_post` · `materials_id` — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | IsWeak → `name` = `name_of_route_asset` | `name` ← `name_km_post` (`Km0+0` / `Km2`) — **GAP-KM-NAME-01** |
| dumpSpecs fields | CSV bỏ `materials_id` · `distance_next_post` · km ép `"0"` | Giữ trong `dumpSpecs` P1 · km trống khi dump null — **GAP-KM-SPEC-01** |
| Point kmTo | Form hiện / bắt buộc `kmTo` | **Ẩn** + không required khi `type=KM_POST` — **GAP-KM-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-km-post` | Live = `/so-ts?type=KM_POST` · alias board-only — **GAP-KM-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-KM-LEAVE-01** |
| materials_id | text trong dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-KM-MAT-01** |
| API docs parent | CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=KM_POST` + **search work** (mã · tên cột · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Cột Km» khi `type=KM_POST` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `KM_POST` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột KM_POST (name · route · routeNamed · routeSegment · kmFrom · distance_next_post · materials_id · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · kmFrom · name · leave-confirm dirty.
9. S-ATTR: `distance_next_post` Number · `materials_id` Dropdown LOOKUP_STATIC — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_km_post` — **cấm** IsWeak fallback đoạn tuyến.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `KM_POST`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-km-post.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `atgt_point` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §2.3 · §4 | dump columns KM_POST | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t09` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/3-tbl_km_post-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/3-tbl_km_post-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-km-post-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-km-post-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `KM_POST` · dumpSpecs | P0 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cột · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `KM_POST` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=KM_POST`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên cột | link Text | **ON** | bind `name` = `name_km_post` |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn tuyến | Text | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | parse từ tên nếu dump lytrinh trống |
| distance_next_post | Khoảng cách cột kế (m) | Number | ON | từ `dumpSpecs` · GAP-KM-SPEC-01 |
| materials_id | Vật liệu | Dropdown label | ON | từ `dumpSpecs` |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump KM_POST không có |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `KM_POST` khi create từ tile |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `Text` | | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `Text` | | dump `name_of_route_asset` |

#### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | * | **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| side | Mặt cắt | `Dropdown` | | L/R/C nếu dump có · else omit |

**Không mount:** `kmTo` bắt buộc trên form KM_POST.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_km_post | Tên cột Km | `Text` | * | SSOT dump `name_km_post` · label «Tên cột Km» |

#### S-ATTR (mẫu Thông tin chung)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| distance_next_post | Khoảng cách tới cột kế tiếp (m) | `Number` | | dump · **không** chỉ `<dl>` |
| materials_id | Vật liệu cột | `Dropdown` | | LOOKUP_STATIC dump · **GAP-KM-MAT-01** PO chốt Dropdown P1 |

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

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · quantity/unit cho KM_POST.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=KM_POST&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=KM_POST`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_km_post` | Tên cột Km | `name` (primary) + dumpSpecs |
| `distance_next_post` | Khoảng cách tới cột kế tiếp (m) | dumpSpecs · form S-ATTR |
| `materials_id` | Vật liệu cột | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
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
| **Type profile** | Cột KM_POST §5b · **ẩn** type/kmTo/SL/ĐVT |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=KM_POST` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `KM_POST` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-km-post` | redirect/equiv → `/so-ts?type=KM_POST` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-KM-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-KM-MAT-01 | P0 | `materials_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master materials P1 (chưa có catalog materials APPROVED) |
| GAP-KM-ROUTE-01 | P0 | Live route = **`/so-ts?type=KM_POST`** · STATUS alias `/so-ts-km-post` = board link only · Design **optional** redirect alias — **không** fork page |
| GAP-KM-SPEC-01 / flatten | P1 | Giữ `distance_next_post` / `materials_id` trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) |
| GAP-KM-NAME-01 | P0 | `name` ← `name_km_post` — **cấm** IsWeak → `name_of_route_asset` |
| GAP-SOTS-COL-01 | P0 | Type column profile KM_POST hide type/kmTo/SL/ĐVT |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-KM-POINT-01 | P0 | Ẩn + không required `kmTo` trên form KM_POST |
| GAP-KM-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `edit_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog `materials` SearchInput (P2 nếu SA seed)
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
| feature | `so-ts-km-post` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `edit_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `KM_POST` |
| Context | CTX-01 · CTX-02 · CTX-03 · MAU-01/02 · DA-HINT · DA-REAL |
| Demo | `asset-demo.html` → `asset/asset.html` — **UI tham chiếu only** · **cấm** demo-json SSOT |
| controlHint | §5 + DA-HINT — **cấm** đoán Text vs SearchInput · **cấm** Select 8 nhãn demo |
| realData | DA-REAL §A–§F |
| **§ Screens** | §7 · Pattern **Full page** · FormMode C/E/V/Copy · **devSlash=`/agent-dev`** |
| **grid_standard** | `po-design-grid-standard` + `filter-bar-layout-hard` (**REQUIRED**) |
| **report_standard** | n/a |
| **Leave** | `LeaveConfirmModal` (**REQUIRED**) |
| Prototype | content-only · clone `shared-grid-example` / `list-shell-prototype` · form 5 cột · **skip** note/sidebar/menu/chrome demo |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm khi tới lượt |
| peerStdUrl gợi ý | `http://localhost:9301/so-ts` · live filter `…/so-ts?type=KM_POST` |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=KM_POST` · alias board `…/so-ts-km-post` |
| mfeStdRoute | `/so-ts?type=KM_POST` |
| BE | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` — **cấm** invent ERP / so-ts path |
| Open questions | GAP-KM-MAT-01 Dropdown P1 · dumpSpecs P1 · flatten → SA · alias redirect optional |
| Blockers | none cho Design prototype · Dev wire form S-ATTR + column profile · Import IsWeak fix = BE |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · full-page form-surface 5 cột · icons SSOT · type-profile columns KM_POST · S-ATTR editable · **cấm** tab legacy · **cấm** DEM chrome · **cấm** Modal form hồ sơ lớn.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T02:10:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc |
| headerFingerprintPrior | sha256:adf424c895e255a36321742bdf855f877f2800371b066db8fc571ff3263e309e |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.31.2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.30.01 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_e17c1985` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc taskId=task_e17c1985 -->
