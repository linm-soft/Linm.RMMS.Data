# PO — Requirement — so-ts-spillway (Sổ TS — Đường tràn)

| Field | Value |
|-------|-------|
| feature | `so-ts-spillway` |
| title | Sổ TS — Đường tràn |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `SPILLWAY` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `SPILLWAY` |
| cluster | `crossing` · ô KCHT `t16` |
| dump | `tbl_spill_way` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-SPW-NAME-01 · GAP-SPW-SPEC-01 · GAP-SPW-POINT-01 · GAP-SPW-ROUTE-01 · GAP-SPW-LEAVE-01 · GAP-SPW-LOOKUP-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_650fa003`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-spillway-control-hint.md` · `so-ts-spillway-real-data.md` · contentHash `sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` · headerFingerprint `sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172` · analy `task_ba2de910` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=SPILLWAY` · STATUS alias `/so-ts-spillway` = board deep-link only (**GAP-SPW-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=SPILLWAY` · alias `http://localhost:9301/so-ts-spillway` |
| liveList | `/so-ts?type=SPILLWAY` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-spillway-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-spillway-real-data.md` |
| contentHash | `sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` |
| headerFingerprint | `sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_650fa003` · analy `task_ba2de910` |
| updatedAt | `2026-09-01T03:55:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Đường tràn (`SPILLWAY`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `SPILLWAY`: tên công trình · 3 tầng tuyến · lý trình · loại CT · sông · rộng/dài · nhịp · kết cấu · tải · **ẩn** `type` / `kmTo` / SL / ĐVT / cột KM_POST-only.
2. Form S-ATTR editable đủ dump §4 SPILLWAY (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_work` · hiển thị phụ `name_river` field/cột riêng — **cấm** IsWeak → đoạn tuyến (**GAP-SPW-NAME-01**).
4. Crossing point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=SPILLWAY`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `spillway_type_id` / `structure_type_spillway_id` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-SPW-LOOKUP-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T03:50:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `SPILLWAY` |
| Grid columns | schema chung (+ profile chỉ `KM_POST`) | Profile `SPILLWAY` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ KM_POST) | Editable Input/Select đủ dump SPILLWAY — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild `name_work` (sample «Đường tràn») | `name` ← `name_work` · sông field/cột riêng — **GAP-SPW-NAME-01** |
| dumpSpecs labels | FE thiếu key spillway còn lại | Label VN khớp header dump · form Input/Select đủ cột — **GAP-SPW-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với mọi type ≠ KM_POST | **Ẩn** + không required khi `type=SPILLWAY` — **GAP-SPW-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-spillway` | Live = `/so-ts?type=SPILLWAY` · alias board-only — **GAP-SPW-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-SPW-LEAVE-01** |
| Lookup spillway | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-SPW-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=SPILLWAY` + **search work** (mã · tên công trình · sông · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Đường tràn…» khi `type=SPILLWAY` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `SPILLWAY` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột SPILLWAY (name · route · routeNamed · routeSegment · kmFrom · spillway_type_id · name_river · width/length · no_span · span_length · structure_type · operational_load · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode / distance_next_post / materials_id · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · kmFrom · name · spillway_type_id · leave-confirm dirty.
9. S-ATTR: đủ dump §4 SPILLWAY editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_work` · `name_river` field/cột riêng — **cấm** IsWeak fallback đoạn tuyến.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `SPILLWAY` · **không mount** S-LOC-RANGE.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `spillway_type_id` / `structure_type_spillway_id` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-spillway.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `crossing` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 SPILLWAY | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t16` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/34-moc_dbvn.tbl_spill_way-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/34-moc_dbvn.tbl_spill_way-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-spillway-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-spillway-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_spill_way.2026.8.23.15.17.csv` | dump 128 rows · cite `spill_way_309929` | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile SPILLWAY | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump · gap spillway keys | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `SPILLWAY` · dumpSpecs | P0 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên công trình · sông · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `SPILLWAY` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=SPILLWAY`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên công trình | link Text | **ON** | bind `name` = `name_work` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| spillway_type_id | Loại công trình | Text / Dropdown label | ON | dumpSpecs · mẫu list |
| name_river | Tên sông/ suối | Text | ON | dumpSpecs |
| width_spillway | Chiều rộng mặt tràn (m) | Number | ON | dumpSpecs |
| length_spillway | Chiều dài tràn (m) | Number | ON | dumpSpecs |
| no_span | Số nhịp | Number | ON | dumpSpecs |
| span_length | Chiều dài nhịp (m) | Number | ON | dumpSpecs |
| structure_type_spillway_id | Loại kết cấu mặt tràn | Text / Dropdown label | ON | dumpSpecs |
| operational_load | Tải trọng cho phép | Text | ON | dumpSpecs · mẫu list |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump SPILLWAY không có |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `TR-` |
| type | Loại tài sản | `SearchInput` | * | lock `SPILLWAY` khi create từ tile `t16` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` · catalog KHAC |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` · catalog KHAC |

#### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | * | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_work | Tên công trình | `Text` | * | SSOT dump `name_work` · label «Tên công trình» |
| name_river | Tên sông/ suối | `Text` | | dump · có thể nằm S-ATTR nếu Design gộp |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| spillway_type_id | Loại công trình | `Dropdown` | * | LOOKUP_STATIC dump (Cầu tràn / Đường tràn…) · **GAP-SPW-LOOKUP-01** |
| name_river | Tên sông/ suối | `Text` | | nếu chưa ở S-NAME |
| width_spillway | Chiều rộng mặt tràn (m) | `Number` | | |
| length_spillway | Chiều dài tràn (m) | `Number` | | mẫu detail |
| no_span | Số nhịp | `Number` | | |
| span_length | Chiều dài nhịp (m) | `Number` | | |
| structure_type_spillway_id | Loại kết cấu mặt tràn | `Dropdown` | | LOOKUP_STATIC dump (Bê tông…) · **GAP-SPW-LOOKUP-01** |
| with_water_level_measuring_pole | Có cột thủy chí hay không | `Dropdown` boolean | | True/False · mẫu detail |
| location_where_water_level_id | Vị trí đặt cột thủy chí | `Text` / `Dropdown` | | hiện khi có cột thủy chí |
| Floods_usually_duration_year | Thời điểm thường xuất hiện lũ trong năm (tháng) | `Text` | | |
| average_number_flood_day | Số ngày lũ trung bình hàng năm/ năm | `Number` | | |
| average_number_flooded_day | Số ngày trung bình bị ngập trong năm | `Number` | | |
| operational_load | Tải trọng cho phép | `Text` | | |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit cho SPILLWAY · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=SPILLWAY&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=SPILLWAY`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_work` | Tên công trình | `name` (primary) + dumpSpecs |
| `name_river` | Tên sông/ suối | dumpSpecs · form S-NAME/S-ATTR |
| `spillway_type_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `width_spillway` | Chiều rộng mặt tràn (m) | dumpSpecs · form S-ATTR |
| `length_spillway` | Chiều dài tràn (m) | dumpSpecs · form S-ATTR |
| `no_span` | Số nhịp | dumpSpecs · form S-ATTR |
| `span_length` | Chiều dài nhịp (m) | dumpSpecs · form S-ATTR |
| `structure_type_spillway_id` | Loại kết cấu mặt tràn | dumpSpecs · form S-ATTR |
| `with_water_level_measuring_pole` | Có cột thủy chí hay không | dumpSpecs · form S-ATTR |
| `location_where_water_level_id` | Vị trí đặt cột thủy chí | dumpSpecs · form S-ATTR |
| `Floods_usually_duration_year` | Thời điểm thường xuất hiện lũ trong năm (tháng) | dumpSpecs · form S-ATTR |
| `average_number_flood_day` | Số ngày lũ trung bình hàng năm/ năm | dumpSpecs · form S-ATTR |
| `average_number_flooded_day` | Số ngày trung bình bị ngập trong năm | dumpSpecs · form S-ATTR |
| `operational_load` | Tải trọng cho phép | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

Cite mẫu row: `spill_way_309929` → CSV `TR-spill_way_309929` · `name=Đường tràn` · `type=SPILLWAY` · `spillway_type_id=Cầu tràn` · `width_spillway=4` · `length_spillway=174` · `structure_type_spillway_id=Bê tông`.

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
| **Type profile** | Cột SPILLWAY §5b · **ẩn** type/kmTo/SL/ĐVT/KM_POST-only |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=SPILLWAY` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `SPILLWAY`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `SPILLWAY` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-spillway` | redirect/equiv → `/so-ts?type=SPILLWAY` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-SPW-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-SPW-LOOKUP-01 | P0 | `spillway_type_id` / `structure_type_spillway_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 (chưa có catalog APPROVED) |
| GAP-SPW-NAME-01 | P0 | `name` ← `name_work` primary · `name_river` cột/field riêng — **cấm** ghép `name_work · name_river` vào 1 ô · **cấm** IsWeak → `name_of_route_asset` |
| GAP-SPW-ROUTE-01 | P0 | Live route = **`/so-ts?type=SPILLWAY`** · STATUS alias `/so-ts-spillway` = board link only · Design **optional** redirect alias — **không** fork page · tile `t16` deep-link OK |
| GAP-SPW-SPEC-01 / flatten | P1 | Giữ attr spillway trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) |
| GAP-SOTS-COL-01 | P0 | Type column profile SPILLWAY hide type/kmTo/SL/ĐVT/KM_POST-only |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-SPW-POINT-01 | P0 | Ẩn + không required `kmTo` trên form SPILLWAY · cluster `crossing` → S-LOC-POINT |
| GAP-SPW-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `duong-tran` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog spillway_type / structure_type SearchInput (P2 nếu SA seed)
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
| feature | `so-ts-spillway` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `SPILLWAY` · cluster `crossing` |
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
| peerStdUrl gợi ý | `http://localhost:9301/so-ts` · live filter `…/so-ts?type=SPILLWAY` |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=SPILLWAY` · alias board `…/so-ts-spillway` |
| mfeStdRoute | `/so-ts?type=SPILLWAY` |
| BE | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` — **cấm** invent ERP / so-ts path |
| Open questions | GAP-SPW-LOOKUP-01 Dropdown P1 · name_work + name_river riêng · dumpSpecs P1 · flatten → SA · alias redirect optional |
| Blockers | none cho Design prototype · Dev wire form S-ATTR + column profile SPILLWAY · Import IsWeak/name_work fix = BE · dumpSpecLabels FE |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · full-page form-surface 5 cột · icons SSOT · type-profile columns SPILLWAY · S-ATTR editable đủ dump · **cấm** tab legacy · **cấm** DEM chrome · **cấm** Modal form hồ sơ lớn · **cấm** mount kmTo / S-LOC-RANGE.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T03:55:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f |
| headerFingerprintPrior | sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172 |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.31.2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.30.01 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_650fa003` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f taskId=task_650fa003 -->
