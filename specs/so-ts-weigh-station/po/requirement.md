# PO — Requirement — so-ts-weigh-station (Sổ TS — Trạm kiểm soát tải)

| Field | Value |
|-------|-------|
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `WEIGH_STATION` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `WEIGH_STATION` |
| cluster | `station` · ô KCHT `t27` |
| dump | `weight_station` |
| prefix | `TFP-` (live GIS · **giữ** · trùng TOLL cluster station — **GAP-WEIGH-PREFIX-01** chốt keep) |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-WEIGH-NAME-01 · GAP-WEIGH-SPEC-01 · GAP-WEIGH-POINT-01 · GAP-WEIGH-ROUTE-01 · GAP-WEIGH-LEAVE-01 · GAP-WEIGH-LOOKUP-01 · GAP-WEIGH-PREFIX-01 · GAP-WEIGH-TILE-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_f4a717d3`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-weigh-station-control-hint.md` · `so-ts-weigh-station-real-data.md` · contentHash `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` · headerFingerprint `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` · analy `task_fc7e2abd` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=WEIGH_STATION` · STATUS alias `/so-ts-weigh-station` = board deep-link only (**GAP-WEIGH-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=WEIGH_STATION` · alias `http://localhost:9301/so-ts-weigh-station` |
| liveList | `/so-ts?type=WEIGH_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-weigh-station-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-weigh-station-real-data.md` |
| contentHash | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprint | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| countCite | gov-vn **24** · GIS `tram-can` · tile `t27` |
| taskId | `task_f4a717d3` · analy `task_fc7e2abd` |
| updatedAt | `2026-09-01T06:00:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Trạm kiểm soát tải (`WEIGH_STATION`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `WEIGH_STATION`: tên trạm · 3 tầng tuyến · lý trình · loại TB cân · tải trục max · ĐVQL · DT nhà · DT khu lắp · camera · đèn · **ẩn** `type` / `kmTo` / SL / ĐVT · **hide-empty** cột fill 0.
2. Form S-ATTR editable đủ dump §4 WEIGH (không chỉ `<dl>` dumpSpecs).
3. `name` ← `station_name` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-WEIGH-NAME-01**).
4. Station point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=WEIGH_STATION` · `kmFrom`/`lytrinh` hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `management_unit_id` / `type_weighting_equipment_id` / `pavement_type_id` = **Dropdown LOOKUP_STATIC** dump P1; boolean flags = **Dropdown Có/Không** (**GAP-WEIGH-LOOKUP-01**).
8. IdCode prefix: **giữ live `TFP-`** (cùng cluster station / TOLL) — **cấm** invent prefix FE (**GAP-WEIGH-PREFIX-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T05:55:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `WEIGH_STATION` |
| Grid columns | schema chung (+ profile peer station) | Profile `WEIGH_STATION` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Editable Input/Select đủ dump WEIGH — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild có thể lệch dump | `name` ← `station_name` · **cấm** IsWeak → đoạn — **GAP-WEIGH-NAME-01** |
| dumpSpecs labels | FE có `station_name` · `pavement_type_id` · thiếu hầu hết §4 WEIGH | Label VN khớp header dump · form Input/Select đủ cột — **GAP-WEIGH-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=WEIGH_STATION` — **GAP-WEIGH-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-weigh-station` · index chưa Navigate | Live = `/so-ts?type=WEIGH_STATION` · alias board-only — **GAP-WEIGH-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-WEIGH-LEAVE-01** |
| Lookup weigh | text dumpSpecs | **Dropdown** LOOKUP_STATIC / boolean Có/Không — **GAP-WEIGH-LOOKUP-01** |
| IdCode prefix | GIS `TFP` trùng TOLL | **Giữ `TFP-`** live — **GAP-WEIGH-PREFIX-01** |
| KCHT tile | `t27` drill có · list chưa profile | Tile count = import **24** · deep-link OK — **GAP-WEIGH-TILE-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=WEIGH_STATION` + **search work** (mã · tên trạm · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Trạm kiểm soát tải» khi `type=WEIGH_STATION` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `WEIGH_STATION` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột WEIGH (name · route · routeNamed · routeSegment · kmFrom · type_weighting_equipment_id · max_axle_load_limit · management_unit_id · building_area · site_area_installed_equipment · camera_observation · light · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode · **hide-empty** TB cân / tải / ĐVQL / DT / camera / đèn khi fill 0 · `length_approaching_road` OFF default · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · leave-confirm dirty · **kmFrom không** required (CSV hay trống).
9. S-ATTR: đủ dump §4 WEIGH editable (Dropdown/Number/Text/Date) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `station_name` — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `WEIGH_STATION` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `management_unit_id` / `type_weighting_equipment_id` / `pavement_type_id` = Dropdown LOOKUP_STATIC dump P1. Boolean (`includes_load_reduction_area` · `light` · `camera_observation` · `equipment_measurement_vehicle_size`) = **Dropdown Có/Không** — **cấm** checkbox kit lệch SSOT.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. Tile `t27` deep-link filter type OK · count cite import **24** (**GAP-WEIGH-TILE-01**).
17. IdCode: BE/import **giữ prefix `TFP-`** — **cấm** invent prefix FE.
18. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-weigh-station.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `station` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 WEIGH_STATION | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t27` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-weigh-station-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-weigh-station-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.weight_station.*.csv` · gov-vn · **24** row · IdCode `TFP` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile WEIGH | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR WEIGH chưa editable | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | thiếu hầu hết key §4 WEIGH · **GAP-WEIGH-SPEC-01** | P0 |
| MFE-TILE | `kchtTileConfig.ts` | `t27` · drill `WEIGH_STATION` · «Trạm kiểm soát trọng tải xe» | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `WEIGH_STATION` · «Trạm cân» · unit `TRAM` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `tram-can` ↔ `WEIGH_STATION` · prefix `TFP` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `WEIGH_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=WEIGH_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_weighting_equipment_id | Loại thiết bị cân | Text / Dropdown label | **ON · hide-empty** | dumpSpecs |
| max_axle_load_limit | Tải trọng trục tối đa | Number / Text | **ON · hide-empty** | dumpSpecs |
| management_unit_id | Đơn vị quản lý | Text / Dropdown label | **ON · hide-empty** | dumpSpecs |
| building_area | DT nhà (m²) | Number | **ON · hide-empty** | dumpSpecs |
| site_area_installed_equipment | DT khu lắp TB (m²) | Number | optional / hide-empty | dumpSpecs |
| camera_observation | Camera giám sát | Text / boolean | optional / hide-empty | dumpSpecs |
| light | Đèn chiếu sáng | Text / boolean | optional / hide-empty | dumpSpecs |
| length_approaching_road | Chiều dài đường vào (m) | Number | **OFF** default | hide-empty · form ON |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix live `TFP-` (**GAP-WEIGH-PREFIX-01** keep) |
| type | Loại tài sản | `SearchInput` | * | lock `WEIGH_STATION` khi create từ tile `t27` |
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
| location | Vị trí | `Text` / SearchInput | | dump `location` · dumpSpecs |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / station_name | Tên trạm | `Text` | * | SSOT dump `station_name` · label «Tên trạm» · **GAP-WEIGH-NAME-01** |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| site_area_installed_equipment | DT khu vực lắp thiết bị (m²) | `Number` | | dump |
| management_unit_id | Đơn vị quản lý | `Dropdown` | | LOOKUP_STATIC dump · **GAP-WEIGH-LOOKUP-01** |
| building_area | Diện tích nhà (m²) | `Number` | | dump |
| includes_load_reduction_area | Có khu vực giảm tải | `Dropdown` boolean Có/Không | | **GAP-WEIGH-LOOKUP-01** |
| light | Đèn chiếu sáng | `Dropdown` boolean Có/Không | | **GAP-WEIGH-LOOKUP-01** |
| camera_observation | Camera giám sát | `Dropdown` boolean Có/Không | | **GAP-WEIGH-LOOKUP-01** |
| equipment_measurement_vehicle_size | Thiết bị đo kích thước xe | `Dropdown` boolean Có/Không | | dump |
| type_weighting_equipment_id | Loại thiết bị cân | `Dropdown` | | LOOKUP_STATIC · **GAP-WEIGH-LOOKUP-01** |
| origin_manufacturing | Xuất xứ / nơi sản xuất | `Text` | | dump |
| year_manufacturing | Năm sản xuất | `Number` / `Text` | | dump |
| max_axle_load_limit | Tải trọng trục tối đa | `Number` / `Text` | | dump |
| approval_code_number | Số hiệu phê duyệt | `Text` | | dump |
| inspection_date_weight_station | Ngày kiểm định trạm cân | `Date` local | | `utcToLocalInputValue` |
| length_approaching_road | Chiều dài đường vào (m) | `Number` | | dump |
| width_approaching_road | Chiều rộng đường vào (m) | `Number` | | dump |
| pavement_type_id | Loại mặt đường | `Dropdown` | | LOOKUP_STATIC · **GAP-WEIGH-LOOKUP-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=WEIGH_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=WEIGH_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `station_name` | Tên trạm | `name` (primary) + dumpSpecs |
| `site_area_installed_equipment` | DT khu vực lắp thiết bị (m²) | dumpSpecs · form S-ATTR |
| `management_unit_id` | Đơn vị quản lý | dumpSpecs · form S-ATTR |
| `building_area` | Diện tích nhà (m²) | dumpSpecs · form S-ATTR |
| `includes_load_reduction_area` | Có khu vực giảm tải | dumpSpecs · form S-ATTR |
| `light` | Đèn chiếu sáng | dumpSpecs · form S-ATTR |
| `camera_observation` | Camera giám sát | dumpSpecs · form S-ATTR |
| `equipment_measurement_vehicle_size` | Thiết bị đo kích thước xe | dumpSpecs · form S-ATTR |
| `type_weighting_equipment_id` | Loại thiết bị cân | dumpSpecs · form S-ATTR |
| `origin_manufacturing` | Xuất xứ / nơi sản xuất | dumpSpecs · form S-ATTR |
| `year_manufacturing` | Năm sản xuất | dumpSpecs · form S-ATTR |
| `max_axle_load_limit` | Tải trọng trục tối đa | dumpSpecs · form S-ATTR |
| `approval_code_number` | Số hiệu phê duyệt | dumpSpecs · form S-ATTR |
| `inspection_date_weight_station` | Ngày kiểm định trạm cân | dumpSpecs · form S-ATTR |
| `length_approaching_road` | Chiều dài đường vào (m) | dumpSpecs · form S-ATTR |
| `width_approaching_road` | Chiều rộng đường vào (m) | dumpSpecs · form S-ATTR |
| `pavement_type_id` | Loại mặt đường | dumpSpecs · form S-ATTR |
| `location` | Vị trí | dumpSpecs · S-LOC / S-ATTR |
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
| **Type profile** | Cột WEIGH §5b · **ẩn** type/kmTo/SL/ĐVT · **ON+hide-empty** TB cân / tải max / ĐVQL / DT nhà · optional hide-empty DT khu lắp / camera / đèn · length_approaching_road OFF default |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=WEIGH_STATION` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `WEIGH_STATION`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `WEIGH_STATION` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-weigh-station` | redirect/equiv → `/so-ts?type=WEIGH_STATION` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-WEIGH-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-WEIGH-LOOKUP-01 | P0 | `management_unit_id` / `type_weighting_equipment_id` / `pavement_type_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1. Boolean `includes_load_reduction_area` / `light` / `camera_observation` / `equipment_measurement_vehicle_size` = **Dropdown Có/Không** — **cấm** checkbox kit |
| GAP-WEIGH-NAME-01 | P0 | `name` ← `station_name` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` |
| GAP-WEIGH-ROUTE-01 | P0 | Live route = **`/so-ts?type=WEIGH_STATION`** · STATUS alias `/so-ts-weigh-station` = board link only · Design **optional** redirect alias — **không** fork page · tile `t27` deep-link OK |
| GAP-WEIGH-PREFIX-01 | P0 | **Giữ live `TFP-`** (cùng GIS/TOLL cluster station) — SA document · **cấm** invent prefix FE / đổi prefix trong pack UI |
| GAP-WEIGH-SPEC-01 / flatten | P1 | Giữ attr WEIGH trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) · FE `dumpSpecLabels` đủ key §4 WEIGH |
| GAP-SOTS-COL-01 | P0 | Type column profile WEIGH hide type/kmTo/SL/ĐVT · **ON mẫu + hide-empty**: type_weighting_equipment_id · max_axle_load_limit · management_unit_id · building_area · **optional hide-empty**: site_area_installed_equipment · camera_observation · light · **OFF default**: length_approaching_road · **ON**: name · 3 tầng · kmFrom |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-WEIGH-POINT-01 | P0 | Ẩn + không required `kmTo` trên form WEIGH · cluster `station` → S-LOC-POINT · **cấm** ép lytrinh/`kmFrom`=`"0"` · `kmFrom` **không** required |
| GAP-WEIGH-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-WEIGH-TILE-01 | P1 | Tile `t27` drill + list profile · count cite **24** |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| approaching_road grouping | P1 | **Design** gộp `length_approaching_road` / `width_approaching_road` trong subsection S-ATTR theo mẫu detail — **không** tab riêng |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `tram-can` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog lookup SearchInput cho ĐVQL / loại TB cân / mặt đường (P2 nếu SA seed)
- Tách prefix IdCode khác `TFP` (out — giữ live)
- Excel import wizard / Excel export (parent import path riêng)
- Invent `api/v1/so-ts/*` · ERP.* · Finance fork · `api/v1/rmms/*`
- Auth NuGet `[RequirePermission]` wire full
- Re-CRUD parent `asset` unrelated types
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp §5 · Grid AC §6 · Screens §7 · Leave §8 |
| prototype | Kind B list A–D+F + full-page form 5 cột · reviewUrl |
| title | «Sổ TS — Trạm kiểm soát tải» khi `type=WEIGH_STATION` |
| hide-empty | TB cân / tải max / ĐVQL / DT nhà (fill 0) · SchemaConfig |
| approaching_road | Gộp length/width đường vào trong subsection S-ATTR theo mẫu detail |
| alias | `/so-ts-weigh-station` optional Navigate → `?type=WEIGH_STATION` |
| **cấm** | tab legacy · fork form · invent map · GOVOne chrome |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHashPrior | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprintPrior | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| status | `confirmed` |
| writtenAt | `2026-09-01T06:00:00.000Z` |
| taskId | `task_f4a717d3` |
| compact | `specs/so-ts-weigh-station/handoff/po-compact.md` |
