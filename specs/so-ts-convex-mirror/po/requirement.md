# PO — Requirement — so-ts-convex-mirror (Sổ TS — Gương cầu / long môn)

| Field | Value |
|-------|-------|
| feature | `so-ts-convex-mirror` |
| title | Sổ TS — Gương cầu / long môn |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `CONVEX_MIRROR` trên shell `/so-ts` live · greenfield L3 stubs) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `CONVEX_MIRROR` |
| cluster | `atgt_point` · ô KCHT `t31` |
| dump | `road_sphere_mirror` · CSV gov-vn **187378** |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-SOTS-TAB-01 · GAP-MIRROR-SCOPE-01 · GAP-MIRROR-NAME-01 · GAP-MIRROR-QTY-01 · GAP-MIRROR-POINT-01 · GAP-MIRROR-LABEL-01 · GAP-MIRROR-ROUTE-01 · GAP-MIRROR-LEAVE-01 · GAP-MIRROR-TYPE-01 · GAP-SOTS-API-DOC |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_4405a6a5`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-convex-mirror-control-hint.md` · `so-ts-convex-mirror-real-data.md` · contentHash `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` · headerFingerprint `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` · analy `task_34b8bbbf` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=CONVEX_MIRROR` · STATUS alias `/so-ts-convex-mirror` = board deep-link only (**GAP-MIRROR-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=CONVEX_MIRROR` · alias `http://localhost:9301/so-ts-convex-mirror` |
| liveList | `/so-ts?type=CONVEX_MIRROR` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-real-data.md` |
| contentHash | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprint | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §4 |
| taskId | `task_4405a6a5` · analy `task_34b8bbbf` |
| updatedAt | `2026-09-01T15:30:00.000Z` |
| versionGate | `rechecked` · skillVersion `2026.08.25.01` · workflowVersion `2026.09.01.02` · rulesVersion `2026.09.01.1` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Gương cầu (`CONVEX_MIRROR`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN `road_sphere_mirror` tab Thông tin chung — **không** fork page riêng · **cấm** invent field long môn / gantry không có trong dump.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `CONVEX_MIRROR`: tên · 3 tầng tuyến · lý trình · vị trí · ĐK · cao · nhịp · VL · hình cắt · SL · **ẩn** `type` khi `?type=` · **ẩn** `kmTo`.
2. Form S-ATTR editable **9 attr dump §4** — **không** chỉ `<dl>` dumpSpecs · **cấm** invent long môn / `GANTRY_SIGN` (**GAP-MIRROR-SCOPE-01**).
3. `name` = loại+km hoặc `vidagis_id`/code — **cấm** `name_of_route_asset` (**GAP-MIRROR-NAME-01**).
4. `quantity` ← `total_number_post` — **cấm** default `1` (**GAP-MIRROR-QTY-01**).
5. Point cluster: **không** bắt buộc / **ẩn** `kmTo` · **cấm** ép lý trình `"0"` (**GAP-MIRROR-POINT-01**).
6. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** native dialog (**GAP-MIRROR-LEAVE-01**).
7. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
8. FE labels: bổ sung `dumpSpecLabels` + `useFormOptions` cho key gương (**GAP-MIRROR-LABEL-01**).
9. UI title «Sổ TS — Gương cầu / long môn» (CTX + tile t31) · **data chỉ** `CONVEX_MIRROR` / dump `road_sphere_mirror`.

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T15:21:11.932Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `CONVEX_MIRROR` |
| Grid columns | 1 schema mọi type | Profile `CONVEX_MIRROR` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` dumpSpecs | Editable Input/Select **9 attr** gương — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Scope tile t31 | Nhãn gộp long môn / cột cần / gương | Data = `road_sphere_mirror` · **cấm** invent long môn — **GAP-MIRROR-SCOPE-01** |
| Name | fallback đoạn tuyến | `name` ≠ `name_of_route_asset` — **GAP-MIRROR-NAME-01** |
| Quantity | Import `quantity=1` | ← `total_number_post` · **GAP-MIRROR-QTY-01** |
| Labels FE | thiếu hầu hết key gương | `dumpSpecLabels` + options — **GAP-MIRROR-LABEL-01** |
| Point kmTo | Có thể hiện / bắt buộc `kmTo` | **Ẩn** + không required khi `type=CONVEX_MIRROR` — **GAP-MIRROR-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-convex-mirror` | Live = `/so-ts?type=CONVEX_MIRROR` · alias board-only — **GAP-MIRROR-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (peer) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-MIRROR-LEAVE-01** |
| Lookup MST/shape/mat/loc | UNCLEAR static vs SearchInput | **Dropdown LOOKUP_STATIC** P1 — **GAP-MIRROR-TYPE-01** |
| API docs parent | CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=CONVEX_MIRROR` + **search work** (mã · tên · tuyến · QR · số biển) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Gương cầu / long môn» khi `type=CONVEX_MIRROR` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `CONVEX_MIRROR` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột CONVEX_MIRROR (§5b) · **ẩn** type / kmTo · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · leave-confirm dirty.
9. S-ATTR: **9 attr** dump editable — **không** chỉ `<dl>` · **cấm** field long môn / gantry không dump.
10. Import/bind: `name` ≠ đoạn tuyến · `quantity` ← `total_number_post`.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `CONVEX_MIRROR` · km trống khi dump null — **cấm** ép `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. MST / shape / material / location = Dropdown LOOKUP_STATIC P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-convex-mirror.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `atgt_point` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 | dump columns CONVEX_MIRROR | P0 ✅ |
| CTX-04 | `docs/context/features/import-gov-ssot.md` · `asset-kcht-dashboard.md` | dump gương · GANTRY alias 0 · tile t31 | P1 |
| CTX-05 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/28-moc_dbvn.road_sphere_mirror-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/28-moc_dbvn.road_sphere_mirror-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-convex-mirror-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-convex-mirror-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels gương — **GAP-MIRROR-LABEL-01** | P0 |
| MFE-TILE | `kchtTileConfig.ts` `t31` | drill `CONVEX_MIRROR` | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `CONVEX_MIRROR` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper` | layer `guong-cau` · type `CONVEX_MIRROR` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · số biển |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `CONVEX_MIRROR` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=CONVEX_MIRROR`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên / loại gương | link Text | **ON** | **cấm** bind đoạn tuyến · GAP-MIRROR-NAME-01 |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | dump trống → để trống · **cấm** ép `"0"` |
| location_post_id | Vị trí đặt | Text / Dropdown | ON | dumpSpecs |
| asset_type_mst_id | Loại TS (MST) | Text / Dropdown | ON | dumpSpecs · ≠ filter `type` |
| shape_cut_post_id | Hình cắt trụ | Text / Dropdown | ON | dumpSpecs |
| diameter_post | Đường kính (m) | Number | ON | dumpSpecs |
| height_post | Chiều cao trụ (m) | Number | ON | dumpSpecs |
| span_length | Chiều dài nhịp (m) | Number | ON | dumpSpecs · FE label có sẵn |
| material_post_id | Vật liệu trụ | Text / Dropdown | ON | dumpSpecs |
| number_sign | Số biển / số gương | Number | ON | dumpSpecs |
| total_number_post | Tổng số trụ | Number | ON | → `quantity` |
| quantity | Số lượng | Number | ON | bind `total_number_post` · **GAP-MIRROR-QTY-01** |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | fill dump ≈0% · point · **cấm** invent |
| unitCode | ĐVT | Dropdown | optional | nếu có seed |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `CONVEX_MIRROR` khi create từ tile `t31` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | **road-route** · dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | | **road-route** · dump `name_of_route_asset` · **không** làm `name` |

#### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump trống → để trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| location_post_id | Vị trí đặt / mặt cắt | `Dropdown` / Text | | dumpSpecs · LOOKUP_STATIC P1 |

**Không mount:** `kmTo` bắt buộc trên form CONVEX_MIRROR.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên hiển thị | `Text` | * | loại+km hoặc `vidagis_id`/code · **cấm** đoạn tuyến · **GAP-MIRROR-NAME-01** |
| asset_type_mst_id | Loại tài sản (MST dump) | `Dropdown` | | LOOKUP_STATIC dump · **≠** shell `type` · **GAP-MIRROR-TYPE-01** |

#### S-ATTR (mẫu Thông tin chung · dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| shape_cut_post_id | Hình dạng mặt cắt trụ | `Dropdown` | | LOOKUP_STATIC dump |
| diameter_post | Đường kính trụ (m) | `Number` | | dump |
| material_post_id | Vật liệu trụ | `Dropdown` | | LOOKUP_STATIC dump |
| height_post | Chiều cao trụ (m) | `Number` | | dump |
| span_length | Chiều dài nhịp (m) | `Number` | | dump · khẩu độ / nhịp |
| number_sign | Số biển / số gương | `Number` | | dump |
| total_number_post | Tổng số trụ trong đoạn | `Number` | | → sync `quantity` |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly `<dl>`). **Cấm** mount field long môn / gantry không có trong dump.

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · field `GANTRY_SIGN` / long môn không dump.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=CONVEX_MIRROR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=CONVEX_MIRROR`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `total_number_post` | Tổng số trụ | dumpSpecs + `quantity` |
| `asset_type_mst_id` | Loại tài sản (MST) | dumpSpecs · S-NAME · **≠** shell `type` |
| `shape_cut_post_id` | Hình dạng mặt cắt trụ | dumpSpecs · S-ATTR |
| `diameter_post` | Đường kính trụ (m) | dumpSpecs |
| `material_post_id` | Vật liệu trụ | dumpSpecs |
| `height_post` | Chiều cao trụ (m) | dumpSpecs |
| `span_length` | Chiều dài nhịp (m) | dumpSpecs |
| `location_post_id` | Vị trí đặt | dumpSpecs · S-LOC-POINT |
| `number_sign` | Số biển / số gương | dumpSpecs |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null · **cấm** invent) |
| `from_coordinatex/y` | XY đầu | `lng`/`lat` hoặc dumpSpecs |
| `to_coordinatex/y` | XY cuối | dumpSpecs only · **không** ép `kmTo` |

`map: none` · `progress: none` (Type A · `status` KT + soft `isActive`). GIS layer `guong-cau` deep-link **out of scope** list pack.

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
| **Type profile** | Cột CONVEX_MIRROR §5b · **ẩn** type/kmTo · show dump attr + SL |
| **Form pair** | Create/Edit/View/Copy → **Full page** (`ui-pattern-decision` · ≥10 fields) · Design clone `form-surface-prototype` full-page 5 cột · S-ATTR 9 attr editable |
| **Empty/fail** | empty copy VN · toast — **cấm** fake row / invent-seed |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

### Report AC

**N/A** — packKind `list` · **không** report/dashboard (**GAP-PO-RPT-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=CONVEX_MIRROR` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `CONVEX_MIRROR` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-ALIAS | optional Navigate | — | `/so-ts-convex-mirror` | board deep-link → live `?type=CONVEX_MIRROR` | Design optional |

**Form pattern decision:** Full page (Kind B · ≥10 fields · CatalogFormShell 5col) — **cấm** Modal/Slideout · **cấm** tab legacy DRVN.

## 8. Leave / dirty / delete (REQUIRED)

| Event | UI | Cấm |
|-------|-----|-----|
| Dirty navigate / Hủy | `LeaveConfirmModal` | `window.confirm` / native |
| Soft delete | `useAlert` / `Modal` confirm | native dialog |
| Validation / API fail | toast | `alert()` |

## 9. PO decisions (autoApprove — chốt open questions analy)

| # | Q | Decision (PO lock) |
|---|---|--------------------|
| 1 | Lookup MST / shape / material / location | **Dropdown LOOKUP_STATIC** P1 (dump distinct / seed SA) — **GAP-MIRROR-TYPE-01** · SearchInput master = DEFER nếu master READY |
| 2 | List primary `name` | **loại + lý trình** nếu có · else `code` / `vidagis_id` — **cấm** `name_of_route_asset` — **GAP-MIRROR-NAME-01** |
| 3 | Alias route | Live = `/so-ts?type=CONVEX_MIRROR` · STATUS `/so-ts-convex-mirror` = **board link only** · Design optional Navigate — **GAP-MIRROR-ROUTE-01** |
| 4 | Flatten dumpSpecs | **dumpSpecs JSON P1** · flatten cột DB = **migration SA** (DEFER) |
| 5 | Tile t31 title | UI title «**Sổ TS — Gương cầu / long môn**» (CTX) · **data chỉ** `CONVEX_MIRROR` / `road_sphere_mirror` · **cấm** invent field long môn — **GAP-MIRROR-SCOPE-01** |

**Open questions sau PO:** none.

## 10. Out of scope / cấm

- Map canvas / GIS draw · Excel import wizard trong pack này
- Fork `AssetFormPage` · tab legacy · invent `api/v1/so-ts/*` · ERP.*
- Field long môn / cột cần vượt / `GANTRY_SIGN` không dump
- Demo JSON / localStorage SSOT · seed giả khi import 0
- Flatten DB columns P1 · e2e / start:std / yarn build ở role PO

## 11. Handoff Design

| Deliverable | Path / note |
|-------------|-------------|
| design.md + prototype + reviewUrl | `specs/so-ts-convex-mirror/ui/` |
| control-map | khớp §5 · 5 cột form · hide kmTo · **cấm** tab · **cấm** invent long môn |
| Grid AC | §6 parity · LinErpListFilterBar |
| Leave | LeaveConfirmModal + useAlert |
| Alias | optional Navigate từ `/so-ts-convex-mirror` |

## 12. Handoff SA / TL (ids)

| ID | Note |
|----|------|
| API | giữ `api/v1/asset/road-assets` · type=`CONVEX_MIRROR` |
| Entity | `rmms_road_assets` · dumpSpecs P1 |
| Import | qty ← `total_number_post` · name ≠ đoạn |
| Labels | `dumpSpecLabels` GAP-MIRROR-LABEL-01 |
| T-* | DEFER TL (profile + S-ATTR editable · import qty/name · dumpSpecLabels) |

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprint | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| taskId | `task_4405a6a5` |
| status | `confirmed` |
| writtenAt | `2026-09-01T15:30:00.000Z` |
