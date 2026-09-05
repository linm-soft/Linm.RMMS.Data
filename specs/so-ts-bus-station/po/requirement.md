# PO — Requirement — so-ts-bus-station (Sổ TS — Bến xe)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `BUS_STATION` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `BUS_STATION` |
| cluster | `station` · ô KCHT `t04` |
| dump | `tbl_bus_station` |
| prefix | `BX-` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-BX-NAME-01 · GAP-BX-SPEC-01 · GAP-BX-POINT-01 · GAP-BX-ROUTE-01 · GAP-BX-LEAVE-01 · GAP-BX-LOOKUP-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_71c6f080`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-bus-station-control-hint.md` · `so-ts-bus-station-real-data.md` · contentHash `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` · headerFingerprint `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` · analy `task_dc06532d` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=BUS_STATION` · STATUS alias `/so-ts-bus-station` = board deep-link only (**GAP-BX-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=BUS_STATION` · alias `http://localhost:9301/so-ts-bus-station` |
| liveList | `/so-ts?type=BUS_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-station-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-station-real-data.md` |
| contentHash | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprint | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_71c6f080` · analy `task_dc06532d` |
| updatedAt | `2026-09-01T03:15:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Bến xe (`BUS_STATION`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `BUS_STATION`: tên bến · 3 tầng tuyến · lý trình · loại tài sản · chủ SH · DT mặt bằng · tuyến VT chính · DT sàn · cấp nhà · **ẩn** `type` / `kmTo` / SL / ĐVT / cột KM_POST·SPILLWAY-only · **hide-empty** cột fill 0 (SchemaConfig bật lại).
2. Form S-ATTR editable đủ dump §4 BUS_STATION (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_terminal` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-BX-NAME-01**).
4. Station point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=BUS_STATION` · `kmFrom`/`lytrinh` hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `type_work_id` / `owner_id` / `building_grade_id` / `build_location` / `classification` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-BX-LOOKUP-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T03:04:42.869Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `BUS_STATION` |
| Grid columns | schema chung (+ profile KM_POST/SPILLWAY/…/STATION_HOUSE) | Profile `BUS_STATION` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Editable Input/Select đủ dump BUS_STATION — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild thường = `name_terminal` | `name` ← `name_terminal` · **cấm** IsWeak → đoạn — **GAP-BX-NAME-01** |
| dumpSpecs labels | FE có `name_terminal` · `type_work_id` · `site_area_using_land` · `build_location` — thiếu owner / tuyến VT / DT sàn / cấp / classification | Label VN khớp header dump · form Input/Select đủ cột — **GAP-BX-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | **Ẩn** + không required khi `type=BUS_STATION` — **GAP-BX-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-bus-station` | Live = `/so-ts?type=BUS_STATION` · alias board-only — **GAP-BX-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-BX-LEAVE-01** |
| Lookup bus | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-BX-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=BUS_STATION` + **search work** (mã · tên bến · loại · chủ SH · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Bến xe» khi `type=BUS_STATION` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `BUS_STATION` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột BUS_STATION (name · route · routeNamed · routeSegment · kmFrom · type_work_id · owner_id · site_area_using_land · main_transportation_route · total_area_floors · building_grade_id · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode · **hide-empty** DT / tuyến VT / DT sàn / cấp khi fill 0 · classification OFF default · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · type_work_id · leave-confirm dirty · **kmFrom không** required (CSV hay trống).
9. S-ATTR: đủ dump §4 BUS_STATION editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_terminal` — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `BUS_STATION` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `type_work_id` / `owner_id` / `building_grade_id` / `build_location` / `classification` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-bus-station.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `station` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 BUS_STATION | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t04` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-bus-station-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-bus-station-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_bus_station.2026.8.23.15.14.csv` · gov-vn **387** `BUS_STATION` · cite `BX-bus_station_523251` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile BUS_STATION | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR BUS_STATION chưa editable | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | thiếu owner/tuyến VT/DT sàn/cấp/classification · **GAP-BX-SPEC-01** | P0 |
| MFE-TILE | `kchtTileConfig.ts` | `t04` · drill `BUS_STATION` | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `BUS_STATION` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `ben-xe` ↔ `BUS_STATION` · prefix `BX` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên bến · loại · chủ SH · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `BUS_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=BUS_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên bến | link Text | **ON** | bind `name` = `name_terminal` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại tài sản | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Bến xe khách» |
| owner_id | Chủ sở hữu | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Địa phương» |
| site_area_using_land | DT mặt bằng khu vực bến (m²) | Number | **ON · hide-empty** | mẫu list · fill 0 → ẩn |
| main_transportation_route | Tuyến vận tải chính | Text | **ON · hide-empty** | dumpSpecs |
| total_area_floors | Tổng DT mặt sàn (m²) | Number | **ON · hide-empty** | dumpSpecs |
| building_grade_id | Cấp nhà | Text / Dropdown label | **ON · hide-empty** | dumpSpecs |
| classification | Phân loại | Text | **OFF default** | form S-ATTR · SchemaConfig |
| build_location | Vị trí mặt cắt | Text | optional | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BX-` |
| type | Loại tài sản | `SearchInput` | * | lock `BUS_STATION` khi create từ tile `t04` |
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
| side / build_location | Mặt cắt | `Dropdown` | | dump `build_location` · L/R/C · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_terminal | Tên bến | `Text` | * | SSOT dump `name_terminal` · label «Tên bến» · **GAP-BX-NAME-01** |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_work_id | Loại tài sản | `Dropdown` | * | LOOKUP_STATIC dump («Bến xe khách» …) · **GAP-BX-LOOKUP-01** |
| owner_id | Chủ sở hữu | `Dropdown` | | «Địa phương» … · **GAP-BX-LOOKUP-01** |
| site_area_using_land | Diện tích mặt bằng khu vực bến (m²) | `Number` | | dump |
| main_transportation_route | Tuyến vận tải chính | `Text` | | dump free-text / route name |
| total_area_floors | Tổng diện tích mặt sàn (m²) | `Number` | | dump |
| building_grade_id | Cấp nhà | `Dropdown` | | LOOKUP_STATIC dump · **GAP-BX-LOOKUP-01** |
| build_location | Vị trí mặt cắt ngang đường | `Dropdown` | | Bên trái / Bên phải / Giữa |
| classification | Phân loại | `Dropdown` | | LOOKUP_STATIC dump · **GAP-BX-LOOKUP-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=BUS_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=BUS_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_terminal` | Tên bến | `name` (primary) + dumpSpecs |
| `type_work_id` | Loại tài sản | dumpSpecs · form S-ATTR |
| `owner_id` | Chủ sở hữu | dumpSpecs · form S-ATTR |
| `site_area_using_land` | DT mặt bằng khu vực bến (m²) | dumpSpecs · form S-ATTR |
| `main_transportation_route` | Tuyến vận tải chính | dumpSpecs · form S-ATTR |
| `total_area_floors` | Tổng DT mặt sàn (m²) | dumpSpecs · form S-ATTR |
| `building_grade_id` | Cấp nhà | dumpSpecs · form S-ATTR |
| `build_location` | Vị trí mặt cắt ngang đường | dumpSpecs · S-LOC / S-ATTR |
| `classification` | Phân loại | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

Cite mẫu row: `BX-bus_station_523251` · `name=bến xe phía bắc TP Lang Sơn` · `type=BUS_STATION` · `route=QL.1` · `routeNamed=QL.1 - Lạng Sơn` · `routeSegment=Km 1 + 800 - Km 113 + 985` · `kmFrom=14.216` · lat/lng `21.87198` / `106.760757` · source dump `tbl_bus_station:bus_station_523251` · `type_work_id=Bến xe khách` · `owner_id=Địa phương` · `build_location=Bên trái`.  
Peer fill: `bus_station_749278` · `site_area_using_land=2500` · `main_transportation_route=Hà Nội - Thanh Hóa` · `total_area_floors=220` · `building_grade_id=24`.

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
| **Type profile** | Cột BUS_STATION §5b · **ẩn** type/kmTo/SL/ĐVT · **hide-empty** DT/tuyến VT/DT sàn/cấp · classification OFF default |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=BUS_STATION` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `BUS_STATION`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `BUS_STATION` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-bus-station` | redirect/equiv → `/so-ts?type=BUS_STATION` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-BX-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-BX-LOOKUP-01 | P0 | `type_work_id` / `owner_id` / `building_grade_id` / `build_location` / `classification` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 (chưa có catalog APPROVED) |
| GAP-BX-NAME-01 | P0 | `name` ← `name_terminal` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` |
| GAP-BX-ROUTE-01 | P0 | Live route = **`/so-ts?type=BUS_STATION`** · STATUS alias `/so-ts-bus-station` = board link only · Design **optional** redirect alias — **không** fork page · tile `t04` deep-link OK |
| GAP-BX-SPEC-01 / flatten | P1 | Giữ attr bus trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) · FE `dumpSpecLabels` đủ key §4 (owner · tuyến VT · DT sàn · cấp · classification) |
| GAP-SOTS-COL-01 | P0 | Type column profile BUS_STATION hide type/kmTo/SL/ĐVT · **ON mẫu + hide-empty**: site_area_using_land · main_transportation_route · total_area_floors · building_grade_id · **OFF default**: classification · **ON**: name · 3 tầng · kmFrom · type_work_id · owner_id |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-BX-POINT-01 | P0 | Ẩn + không required `kmTo` trên form BUS_STATION · cluster `station` → S-LOC-POINT · **cấm** ép lytrinh/`kmFrom`=`"0"` · `kmFrom` **không** required |
| GAP-BX-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `ben-xe` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog type_work / owner / grade SearchInput (P2 nếu SA seed)
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
| title | «Sổ TS — Bến xe» khi `type=BUS_STATION` |
| hide-empty | DT / tuyến VT / DT sàn / cấp nhà (fill 0) · SchemaConfig |
| alias | `/so-ts-bus-station` optional Navigate → `?type=BUS_STATION` |
| **cấm** | tab legacy · fork form · invent map · GOVOne chrome |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHashPrior | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprintPrior | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| status | `confirmed` |
| writtenAt | `2026-09-01T03:15:00.000Z` |
| taskId | `task_71c6f080` |
| compact | `specs/so-ts-bus-station/handoff/po-compact.md` |
