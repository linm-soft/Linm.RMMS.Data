# PO — Requirement — so-ts-rest-area (Sổ TS — Trạm dừng nghỉ)

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| title | Sổ TS — Trạm dừng nghỉ |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `REST_AREA` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `REST_AREA` |
| cluster | `station` · ô KCHT `t26` |
| dump | `tbl_rest_stops` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-RA-NAME-01 · GAP-RA-SPEC-01 · GAP-RA-POINT-01 · GAP-RA-ROUTE-01 · GAP-RA-LEAVE-01 · GAP-RA-LOOKUP-01 · GAP-RA-SPLIT-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_7455d425`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-rest-area-control-hint.md` · `so-ts-rest-area-real-data.md` · contentHash `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` · headerFingerprint `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` · analy `task_75a16740` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=REST_AREA` · STATUS alias `/so-ts-rest-area` = board deep-link only (**GAP-RA-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=REST_AREA` · alias `http://localhost:9301/so-ts-rest-area` |
| liveList | `/so-ts?type=REST_AREA` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rest-area-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rest-area-real-data.md` |
| contentHash | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| headerFingerprint | `sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| peer | `so-ts-parking` (cùng dump · **GOV-IMP-02** tách type `PARKING`) |
| taskId | `task_7455d425` · analy `task_75a16740` |
| updatedAt | `2026-09-01T04:20:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Trạm dừng nghỉ (`REST_AREA`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng · **cấm** lẫn bãi đỗ (`PARKING`) trong cùng filter.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `REST_AREA`: tên trạm · 3 tầng tuyến · lý trình · loại CT · xếp loại · chủ SH · chiều dài · DT khuôn viên · cứu hộ · cấp cứu · **ẩn** `type` / `kmTo` / SL / ĐVT / cột PARKING-only.
2. Form S-ATTR editable đủ dump §4 REST_AREA (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_work` · trống OK — **cấm** IsWeak → đoạn tuyến (**GAP-RA-NAME-01**).
4. Station point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=REST_AREA`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `type_work_id` / `categorized_id` / `owner_id` / `office_building_grade_id` / `auxiliary_works_grade_id` / `build_location_id` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-RA-LOOKUP-01**).
8. Filter/import **tách** `REST_AREA` vs `PARKING` — **cấm** gộp list (**GAP-RA-SPLIT-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T04:12:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `REST_AREA` |
| Grid columns | schema chung (+ profile peer station) | Profile `REST_AREA` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (non editable types) | Editable Input/Select đủ dump REST_AREA — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild `name` có thể lệch dump | `name` ← `name_work` · trống OK — **GAP-RA-NAME-01** |
| dumpSpecs labels | FE thiếu nhiều key §4 REST_AREA | Label VN khớp dump/mẫu · form Input/Select đủ cột — **GAP-RA-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=REST_AREA` — **GAP-RA-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-rest-area` | Live = `/so-ts?type=REST_AREA` · alias board-only — **GAP-RA-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-RA-LEAVE-01** |
| Lookup REST_AREA | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-RA-LOOKUP-01** |
| Type split | cùng dump với PARKING | Filter `?type=REST_AREA` · import `RefineImportedType` — **GAP-RA-SPLIT-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=REST_AREA` + **search work** (mã · tên trạm · loại · chủ SH · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Trạm dừng nghỉ» khi `type=REST_AREA` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `REST_AREA` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột REST_AREA (name · route · routeNamed · routeSegment · kmFrom · type_work_id · categorized_id · owner_id · actual_length · site_area_using_land · traffic_emergency_service · first_aid_service · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode / parking_lot default · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · type_work_id · leave-confirm dirty.
9. S-ATTR: đủ dump §4 REST_AREA editable (Dropdown/Number/Select boolean/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_work` — **cấm** IsWeak fallback đoạn tuyến.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `REST_AREA` · **không mount** S-LOC-RANGE.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. REST_AREA attr lookups = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. Filter **cấm** lẫn `PARKING` rows khi `?type=REST_AREA`.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-rest-area.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `station` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 REST_AREA/PARKING | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t26` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/17-moc_dbvn.tbl_rest_stops-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/17-moc_dbvn.tbl_rest_stops-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-rest-area-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-rest-area-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `…/gov/sets/gov-vn/road_assets*.csv` | dump **106** `REST_AREA` · prefix `DN-` | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile REST_AREA | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump · gap REST_AREA keys | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `REST_AREA` · `RefineImportedType` → PARKING | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · loại · chủ SH · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `REST_AREA` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=REST_AREA`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `name_work` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Trạm dừng nghỉ» |
| categorized_id | Xếp loại | Text / Dropdown label | **ON** | dumpSpecs |
| owner_id | Chủ sở hữu | Text / Dropdown label | **ON** | dumpSpecs |
| actual_length | Chiều dài (m) | Number | ON · hide-empty | dumpSpecs |
| site_area_using_land | Diện tích (m²) | Number | ON · hide-empty | dumpSpecs · DT khuôn viên |
| traffic_emergency_service | Cứu hộ giao thông | Select boolean | ON · hide-empty | dumpSpecs · Có/Không |
| first_aid_service | Cấp cứu | Select boolean | ON · hide-empty | dumpSpecs · Có/Không |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `REST_AREA` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| parking_lot / total_parking_lot | Bãi đỗ | Number | **OFF** default | defer peer `so-ts-parking` |
| service_area | Khu vực phục vụ | Number | optional | form S-ATTR · hide-empty list |
| office_building_grade_id | Cấp nhà làm việc | Dropdown label | optional | form S-ATTR |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DN-` |
| type | Loại tài sản | `SearchInput` | * | lock `REST_AREA` khi create từ tile `t26` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` |

#### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs |
| ward | Phường / Xã | `Text` / SearchInput | | dump `xaphuong` · dumpSpecs |
| build_location_id | Vị trí mặt cắt | `Dropdown` | | dump · Bên trái/phải/giữa · **GAP-RA-LOOKUP-01** |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_work | Tên trạm | `Text` | * | SSOT dump `name_work` · label «Tên trạm» · **GAP-RA-NAME-01** |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4 REST_AREA)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_work_id | Loại công trình | `Dropdown` | * | LOOKUP_STATIC dump («Trạm dừng nghỉ» …) · **GAP-RA-LOOKUP-01** |
| categorized_id | Xếp loại | `Dropdown` / `Text` | | dump · **GAP-RA-SPEC-01** |
| owner_id | Chủ sở hữu | `Dropdown` | | «Địa phương» … · **GAP-RA-LOOKUP-01** |
| actual_length | Chiều dài thực tế (m) | `Number` | | dump |
| site_area_using_land | DT khuôn viên sử dụng đất (m²) | `Number` | | dump |
| office_building_grade_id | Cấp nhà làm việc | `Dropdown` / `Text` | | dump · **GAP-RA-LOOKUP-01** |
| total_area_floors | Tổng DT mặt sàn (m²) | `Number` | | dump |
| service_area | Khu vực phục vụ (m²) | `Number` | | dump · **GAP-RA-SPEC-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump · **GAP-RA-SPEC-01** |
| auxiliary_works_grade_id | Cấp công trình phụ | `Dropdown` / `Text` | | dump · **GAP-RA-LOOKUP-01** |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump |
| parking_lot | Bãi đỗ xe | `Select` boolean | | **OFF** default REST_AREA · defer peer `so-ts-parking` |
| total_parking_lot | Tổng DT bãi đỗ (m²) | `Number` | | **OFF** default REST_AREA |
| traffic_emergency_service | Cứu hộ giao thông | `Select` boolean | | dump · **GAP-RA-SPEC-01** |
| first_aid_service | Cấp cứu | `Select` boolean | | dump · **GAP-RA-SPEC-01** |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột PARKING-only default trên REST_AREA list.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=REST_AREA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=REST_AREA`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_work` | Tên trạm | `name` (primary) + dumpSpecs |
| `type_work_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `categorized_id` | Xếp loại | dumpSpecs · form S-ATTR |
| `owner_id` | Chủ sở hữu | dumpSpecs · form S-ATTR |
| `actual_length` | Chiều dài thực tế (m) | dumpSpecs · form S-ATTR |
| `site_area_using_land` | DT khuôn viên sử dụng đất (m²) | dumpSpecs · form S-ATTR |
| `office_building_grade_id` | Cấp nhà làm việc | dumpSpecs · form S-ATTR |
| `total_area_floors` | Tổng DT mặt sàn (m²) | dumpSpecs · form S-ATTR |
| `service_area` | Khu vực phục vụ (m²) | dumpSpecs · form S-ATTR |
| `total_area_office_building` | Tổng DT nhà làm việc (m²) | dumpSpecs · form S-ATTR |
| `auxiliary_works_grade_id` | Cấp công trình phụ | dumpSpecs · form S-ATTR |
| `total_area_auxiliary_works` | Tổng DT CT phụ (m²) | dumpSpecs · form S-ATTR |
| `traffic_emergency_service` | Cứu hộ giao thông | dumpSpecs · form S-ATTR |
| `first_aid_service` | Cấp cứu | dumpSpecs · form S-ATTR |
| `build_location_id` | Vị trí mặt cắt ngang đường | dumpSpecs · S-LOC / S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |

Cite mẫu row: `DN-rest_stops_761412` · `name=Trạm dừng chân Mê Kông - Hải Vân` · `type=REST_AREA` · `route=QL.1` · lat/lng `16.14` / `108.11`.

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
| **Type profile** | Cột REST_AREA §5b · **ẩn** type/kmTo/SL/ĐVT/parking_lot default · hide-empty ON cho chiều dài/DT/cứu hộ/cấp cứu |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=REST_AREA` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `REST_AREA`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `REST_AREA` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-rest-area` | redirect/equiv → `/so-ts?type=REST_AREA` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-RA-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-RA-LOOKUP-01 | P0 | `type_work_id` / `categorized_id` / `owner_id` / `office_building_grade_id` / `auxiliary_works_grade_id` / `build_location_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 (chưa có catalog APPROVED) |
| GAP-RA-NAME-01 | P0 | `name` ← `name_work` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` |
| GAP-RA-ROUTE-01 | P0 | Live route = **`/so-ts?type=REST_AREA`** · STATUS alias `/so-ts-rest-area` = board link only · Design **optional** redirect alias — **không** fork page · tile `t26` deep-link OK |
| GAP-RA-SPEC-01 / flatten | P1 | Giữ attr REST_AREA trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) |
| GAP-SOTS-COL-01 | P0 | Type column profile REST_AREA hide type/kmTo/SL/ĐVT/parking_lot default · **hide-empty ON** cho `actual_length` · `site_area_using_land` · `traffic_emergency_service` · `first_aid_service` |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-RA-POINT-01 | P0 | Ẩn + không required `kmTo` trên form REST_AREA · cluster `station` → S-LOC-POINT |
| GAP-RA-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-RA-SPLIT-01 | P0 | Filter/import **tách** `REST_AREA` vs `PARKING` · **cấm** gộp list · parking fields **OFF** default REST_AREA |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| parking_lot scope | P1 | **`parking_lot` / `total_parking_lot` OFF default** trên REST_AREA form/list · defer peer `so-ts-parking` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `tram-dung-nghi` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog REST_AREA attr SearchInput (P2 nếu SA seed)
- Excel import wizard / Excel export (parent import path riêng)
- Invent `api/v1/so-ts/*` · ERP.* · Finance fork · `api/v1/rmms/*`
- Auth NuGet `[RequirePermission]` wire full
- Re-CRUD parent `asset` unrelated types · peer `so-ts-parking` pack
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rest-area` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `REST_AREA` · cluster `station` |
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
| peerStdUrl gợi ý | `http://localhost:9301/so-ts` · live filter `…/so-ts?type=REST_AREA` |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=REST_AREA` · alias board `…/so-ts-rest-area` |
| mfeStdRoute | `/so-ts?type=REST_AREA` |
| BE | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` — **cấm** invent ERP / so-ts path |
| Open questions | GAP-RA-LOOKUP-01 Dropdown P1 · dumpSpecs P1 · flatten → SA · alias redirect optional · parking_lot OFF default |
| Blockers | none cho Design prototype · Dev wire form S-ATTR + column profile REST_AREA · Import IsWeak/name_work fix = BE · dumpSpecLabels FE |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · full-page form-surface 5 cột · icons SSOT · type-profile columns REST_AREA · S-ATTR editable đủ dump · **cấm** tab legacy · **cấm** DEM chrome · **cấm** Modal form hồ sơ lớn · **cấm** mount kmTo / S-LOC-RANGE · **cấm** parking_lot default ON.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T04:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc |
| headerFingerprintPrior | sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.31.2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.09.01.02 |
| dataAnalyRulesVersion | 2026.09.01.1 |
| taskId | `task_7455d425` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:b92dcb2dca6f96078721289e687ddbcaa3339828968fe1d11ce202c4e8569bc taskId=task_7455d425 -->
