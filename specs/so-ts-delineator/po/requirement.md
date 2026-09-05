# PO — Requirement — so-ts-delineator (Sổ TS — Cọc tiêu / cọc H)

| Field | Value |
|-------|-------|
| feature | `so-ts-delineator` |
| title | Sổ TS — Cọc tiêu / cọc H |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `DELINEATOR` trên shell `/so-ts` live · greenfield L3 stubs) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `DELINEATOR` |
| cluster | `atgt_point` · ô KCHT `t14` |
| dump | `tbl_guide_post` · CSV gov-vn **37303** |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-SOTS-TAB-01 · GAP-DELIM-NAME-01 · GAP-DELIM-SPEC-01 · GAP-DELIM-QTY-01 · GAP-DELIM-POINT-01 · GAP-DELIM-ROUTE-01 · GAP-DELIM-LEAVE-01 · GAP-DELIM-TYPE-01 · GAP-SOTS-API-DOC |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_0e31bcd7`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-delineator-control-hint.md` · `so-ts-delineator-real-data.md` · contentHash `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` · headerFingerprint `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` · analy `task_5a14c20c` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=DELINEATOR` · STATUS alias `/so-ts-delineator` = board deep-link only (**GAP-DELIM-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=DELINEATOR` · alias `http://localhost:9301/so-ts-delineator` |
| liveList | `/so-ts?type=DELINEATOR` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-real-data.md` |
| contentHash | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprint | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §2.2 · §4 |
| taskId | `task_0e31bcd7` · analy `task_5a14c20c` |
| updatedAt | `2026-09-01T14:45:00.000Z` |
| versionGate | `rechecked` · skillVersion `2026.08.25.01` · workflowVersion `2026.09.01.02` · rulesVersion `2026.09.01.1` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Cọc tiêu / cọc H (`DELINEATOR`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN `tbl_guide_post` tab Thông tin chung — **không** fork page riêng · **tách 2 nhóm** Cọc tiêu / Cọc H.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `DELINEATOR`: tên · 3 tầng tuyến · lý trình · vị trí · 2 bộ tiêu/H · SL từ `total_number_*` · **ẩn** `type` khi `?type=` · **ẩn** `kmTo`.
2. Form S-ATTR editable **2 nhóm** (Cọc tiêu / Cọc H) — **không** chỉ `<dl>` dumpSpecs · **cấm** gộp 1 khối DxRxC (**GAP-DELIM-SPEC-01**).
3. `name` = loại+km hoặc `vidagis_id`/code — **cấm** `name_of_route_asset` (**GAP-DELIM-NAME-01**).
4. `quantity` ← `total_number_within_section` ưu tiên · fallback `h_total_number_within_section` — **cấm** default `1` (**GAP-DELIM-QTY-01**).
5. Point cluster: **không** bắt buộc / **ẩn** `kmTo` · **cấm** ép lý trình `"0"`.
6. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** native dialog.
7. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
8. `guide_post_type_id` = vật liệu cọc tiêu · **không** = «Loại kiểu cọc» (`h_post_type_id`).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T14:30:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `DELINEATOR` |
| Grid columns | 1 schema mọi type | Profile `DELINEATOR` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` dumpSpecs (có `groupDumpSpecs`) | Editable Input/Select **2 nhóm** tiêu/H — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | fallback đoạn tuyến | `name` ≠ `name_of_route_asset` — **GAP-DELIM-NAME-01** |
| Specs / labels | Map sai · gộp 1 khối · `guide_post_type_id` nhãn sai | Đủ 2 bộ H + vị trí · label dump · form 2 nhóm — **GAP-DELIM-SPEC-01** |
| Quantity | Import `quantity=1` | ← `total_number_*` · **GAP-DELIM-QTY-01** |
| Point kmTo | Có thể hiện / bắt buộc `kmTo` | **Ẩn** + không required khi `type=DELINEATOR` — **GAP-DELIM-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-delineator` | Live = `/so-ts?type=DELINEATOR` · alias board-only — **GAP-DELIM-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (peer) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-DELIM-LEAVE-01** |
| Lookup type/mat | UNCLEAR static vs SearchInput | **Dropdown LOOKUP_STATIC** P1 — **GAP-DELIM-TYPE-01** |
| API docs parent | CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=DELINEATOR` + **search work** (mã · tên · tuyến · QR · loại cọc) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Cọc tiêu / cọc H» khi `type=DELINEATOR` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `DELINEATOR` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột DELINEATOR (§5b) · **ẩn** type / kmTo · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · leave-confirm dirty.
9. S-ATTR: **2 nhóm** Cọc tiêu / Cọc H editable — **không** chỉ `<dl>` · **cấm** gộp DxRxC tiêu+H.
10. Import/bind: `name` ≠ đoạn tuyến · `quantity` ← `total_number_*` (ưu tiên tiêu).
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `DELINEATOR` · km trống khi dump null — **cấm** ép `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. Post-type / materials = Dropdown LOOKUP_STATIC P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-delineator.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `atgt_point` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §2.2 · §4 | dump columns DELINEATOR | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t14` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/14-moc_dbvn.tbl_guide_post-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/14-moc_dbvn.tbl_guide_post-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-delineator-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-delineator-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` · `groupDumpSpecs('DELINEATOR')` | VN labels + 2 nhóm | P0 |
| MFE-TILE | `kchtTileConfig.ts` `t14` | drill `DELINEATOR` | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `DELINEATOR` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper` | layer `coc-tieu` · type `DELINEATOR` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · loại cọc |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `DELINEATOR` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=DELINEATOR`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên / loại cọc | link Text | **ON** | **cấm** bind đoạn tuyến · GAP-DELIM-NAME-01 |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | dump trống → để trống · **cấm** ép `"0"` |
| installed_location_id | Vị trí cắt / đặt | Text / Dropdown | ON | dumpSpecs |
| h_post_type_id | Loại kiểu cọc | Text / Dropdown | ON | dump · **không** nhầm `guide_post_type_id` |
| guide_post_type_id | Vật liệu cọc tiêu | Text / Dropdown | ON | dumpSpecs |
| length / width / height | DxRxC tiêu (m) | Number | ON | nhóm tiêu |
| average_installation_interval | KC LĐ TB tiêu (m) | Number | ON | dumpSpecs |
| total_number_within_section | SL cọc tiêu | Number | ON | → `quantity` ưu tiên tiêu nếu có |
| h_guide_post_type_id | Vật liệu cọc H | Text / Dropdown | ON | dumpSpecs |
| h_length / h_width / h_height | DxRxC H (m) | Number | ON | nhóm H |
| h_average_installation_interval | KC LĐ TB H (m) | Number | ON | dumpSpecs |
| h_total_number_within_section | SL cọc H | Number | ON | dumpSpecs |
| quantity | Số lượng | Number | ON | bind `total_number_*` · **GAP-DELIM-QTY-01** |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | fill dump ≈0% · **cấm** invent |
| unitCode | ĐVT | Dropdown | optional | nếu có seed |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `DELINEATOR` khi create từ tile `t14` |
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
| installed_location_id | Vị trí đặt / mặt cắt | `Dropdown` / Text | | dump · vd «Ngoài cùng bên phải» |

**Không mount:** `kmTo` bắt buộc trên form DELINEATOR.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên hiển thị | `Text` | * | loại+km hoặc `vidagis_id`/code · **cấm** đoạn tuyến · **GAP-DELIM-NAME-01** |
| h_post_type_id | Loại kiểu cọc | `Dropdown` | | LOOKUP_STATIC dump · **GAP-DELIM-TYPE-01** |

#### S-ATTR (mẫu Thông tin chung · **2 nhóm**)

##### Nhóm Cọc tiêu

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| guide_post_type_id | Loại vật liệu | `Dropdown` | | LOOKUP_STATIC dump · **không** = loại kiểu cọc |
| length | Chiều dài (m) | `Number` | | dump |
| width | Chiều rộng (m) | `Number` | | dump |
| height | Chiều cao (m) | `Number` | | dump |
| average_installation_interval | Khoảng cách LĐ TB (m) | `Number` | | dump |
| total_number_within_section | Tổng số cọc trong đoạn | `Number` | | → sync `quantity` |

##### Nhóm Cọc H / cột H

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| h_guide_post_type_id | Loại vật liệu | `Dropdown` | | LOOKUP_STATIC dump |
| h_length | Chiều dài (m) | `Number` | | dump |
| h_width | Chiều rộng (m) | `Number` | | dump |
| h_height | Chiều cao (m) | `Number` | | dump |
| h_average_installation_interval | Khoảng cách LĐ TB (m) | `Number` | | dump |
| h_total_number_within_section | Tổng số cọc trong đoạn | `Number` | | dump · fallback `quantity` |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select. FE đã có `groupDumpSpecs('DELINEATOR')` — Design **giữ 2 nhóm**.

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · 1 khối DxRxC gộp tiêu+H.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=DELINEATOR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=DELINEATOR`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `h_post_type_id` | Loại kiểu cọc | dumpSpecs · S-NAME/ATTR · **không** = `guide_post_type_id` |
| `installed_location_id` | Vị trí đặt / cắt | dumpSpecs · S-LOC-POINT |
| `guide_post_type_id` | Loại vật liệu (cọc tiêu) | dumpSpecs · nhóm tiêu |
| `length` · `width` · `height` | DxRxC tiêu (m) | dumpSpecs |
| `average_installation_interval` | KC LĐ TB tiêu | dumpSpecs |
| `total_number_within_section` | Tổng số cọc tiêu | dumpSpecs + `quantity` (ưu tiên) |
| `h_guide_post_type_id` | Loại vật liệu (cọc H) | dumpSpecs · nhóm H |
| `h_length` · `h_width` · `h_height` | DxRxC H (m) | dumpSpecs |
| `h_average_installation_interval` | KC LĐ TB H | dumpSpecs |
| `h_total_number_within_section` | Tổng số cọc H | dumpSpecs · fallback `quantity` |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null · **cấm** invent) |
| `from_coordinatex/y` | XY đầu | `lng`/`lat` hoặc dumpSpecs |
| `to_coordinatex/y` | XY cuối | dumpSpecs only · **không** ép `kmTo` |

`map: none` · `progress: none` (Type A · `status` KT + soft `isActive`). GIS layer `coc-tieu` deep-link **out of scope** list pack.

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
| **Type profile** | Cột DELINEATOR §5b · **ẩn** type/kmTo · show 2 bộ tiêu/H + SL |
| **Form pair** | Create/Edit/View/Copy → **Full page** (`ui-pattern-decision` · ≥10 fields) · Design clone `form-surface-prototype` full-page 5 cột · **2 nhóm S-ATTR** |
| **Empty/fail** | empty copy VN · toast — **cấm** fake row / invent-seed |
| **SSOT Design** | `shared-grid-example` · `list-shell-prototype` · `po-design-grid-standard` |
| **SSOT TL/Dev** | `tl-design-grid-component-map` · `tl-grid-full-flow` · `tl-filter-bar-task` (T-UI-FILTER-01) |
| **Skip chrome** | GOVOne · Signed demo · hub nav skin demo |

### Report AC

**N/A** — packKind `list` · **không** report/dashboard (**GAP-PO-RPT-01** không áp).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Actions | `devSlash` |
|---------|---------|----------|-----|---------|------------|
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=DELINEATOR` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `DELINEATOR` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-delineator` | redirect/equiv → `/so-ts?type=DELINEATOR` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-DELIM-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-DELIM-TYPE-01 | P0 | `h_post_type_id` / `guide_post_type_id` / `h_guide_post_type_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 |
| GAP-DELIM-NAME-01 | P0 | List/form primary `name` = **loại kiểu cọc + lý trình** nếu có · else `vidagis_id` / IdCode — **cấm** `name_of_route_asset` |
| GAP-DELIM-ROUTE-01 | P0 | Live route = **`/so-ts?type=DELINEATOR`** · STATUS alias `/so-ts-delineator` = board link only · Design **optional** redirect alias — **không** fork page |
| GAP-DELIM-QTY-01 | P0 | `quantity` ưu tiên **`total_number_within_section`** · fallback **`h_total_number_within_section`** — **cấm** default `1` |
| GAP-DELIM-SPEC-01 / flatten | P1 | Giữ 2 bộ tiêu/H trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind) · form **2 nhóm** bắt buộc |
| GAP-SOTS-COL-01 | P0 | Type column profile DELINEATOR hide type/kmTo · show tiêu/H + SL |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable 2 nhóm — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-DELIM-POINT-01 | P0 | Ẩn + không required `kmTo` trên form DELINEATOR · **cấm** ép km `"0"` |
| GAP-DELIM-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột · 2 nhóm S-ATTR) |
| changeScope | — | **Confirm `new_page`** |

**UNCLEAR còn lại:** **none** (autoApprove đã chốt).

## 10. Handoff Design

| Field | Value |
|-------|-------|
| next role | `design` · `/agent-design` |
| write | `ui/design.md` + prototype + **reviewUrl** |
| peerStdUrl | `http://localhost:9301/so-ts?type=DELINEATOR` |
| mfeStdUrl | `http://localhost:9301/so-ts-delineator` (alias board) |
| controlHint cite | DA-HINT § list filters / grid / form |
| Grid AC | **YES** (§6) |
| Report AC | **N/A** |
| Leave | **YES** (§8) |
| formPattern | Full page 5col · **2 nhóm** Cọc tiêu / Cọc H · cấm Modal/Slideout/tab legacy |
| T-* | DEFER TL (profile + S-ATTR editable 2 nhóm · import qty/name) |

## 11. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprint | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| analyzedAt (analy) | `2026-09-01T14:30:00.000Z` |
| taskId | `task_0e31bcd7` |
| status | `confirmed` |
| writtenAt | `2026-09-01T14:45:00.000Z` |
