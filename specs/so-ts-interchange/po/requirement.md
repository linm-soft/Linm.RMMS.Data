# PO — Requirement — so-ts-interchange (Sổ TS — Nút giao)

| Field | Value |
|-------|-------|
| feature | `so-ts-interchange` |
| title | Sổ TS — Nút giao |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `INTERCHANGE` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `INTERCHANGE` |
| cluster | `crossing` · ô KCHT `t23` |
| dump | `tbl_intersection` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-IX-NAME-01 · GAP-IX-SPEC-01 · GAP-IX-POINT-01 · GAP-IX-ROUTE-01 · GAP-IX-LOOKUP-01 · GAP-IX-LEAVE-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_6c6d0367`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-interchange-control-hint.md` · `so-ts-interchange-real-data.md` · contentHash `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` · headerFingerprint `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` · analy `task_d2903309` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=INTERCHANGE` · STATUS alias `/so-ts-interchange` = board deep-link only (**GAP-IX-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=INTERCHANGE` · alias `http://localhost:9301/so-ts-interchange` |
| liveList | `/so-ts?type=INTERCHANGE` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-interchange-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-interchange-real-data.md` |
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprint | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_6c6d0367` · analy `task_d2903309` |
| updatedAt | `2026-09-01T05:50:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Nút giao (`INTERCHANGE`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `INTERCHANGE`: tên nút · 3 tầng tuyến · lý trình · loại nút · giao với · hình dạng · đèn · dải PC · **ẩn** `type` / `kmTo` / SL / ĐVT / cột KM_POST/SPILLWAY-only · cột fill thấp default OFF (SchemaConfig bật được).
2. Form S-ATTR editable đủ dump §4 INTERCHANGE (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_intersection` khi có · trống OK — **cấm** IsWeak → đoạn tuyến (**GAP-IX-NAME-01**).
4. Crossing point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=INTERCHANGE` · `lytrinh`/`kmFrom` hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `intersection_type_id` / `intersect_with_id` / `intersection_shape_id` (+ `phuongthucdieukhien` nếu seed) = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-IX-LOOKUP-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T05:40:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `INTERCHANGE` |
| Grid columns | schema chung (+ profile KM_POST/SPILLWAY) | Profile `INTERCHANGE` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY) | Editable Input/Select đủ dump INTERCHANGE — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild: trống `name_intersection` → fallback route | `name` ← `name_intersection` · trống OK — **GAP-IX-NAME-01** |
| dumpSpecs labels | FE chỉ `name_intersection` | Label VN khớp header dump · form Input/Select đủ cột — **GAP-IX-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | **Ẩn** + không required khi `type=INTERCHANGE` — **GAP-IX-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-interchange` · thiếu Navigate | Live = `/so-ts?type=INTERCHANGE` · alias board-only — **GAP-IX-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-IX-LEAVE-01** |
| Lookup intersection | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-IX-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=INTERCHANGE` + **search work** (mã · tên nút · loại · giao với · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Nút giao…» khi `type=INTERCHANGE` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `INTERCHANGE` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột INTERCHANGE (name · route · routeNamed · routeSegment · kmFrom · intersection_type_id · intersect_with_id · intersection_shape_id · traffic_signal_lights · median_strip · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode / distance_next_post / materials_id / spillway_* · cột fill thấp default OFF · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · intersection_type_id · leave-confirm dirty · **kmFrom không bắt buộc** (dump hay trống).
9. S-ATTR: đủ dump §4 INTERCHANGE editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_intersection` khi có · trống OK — **cấm** IsWeak fallback đoạn tuyến.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `INTERCHANGE` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `intersection_type_id` / `intersect_with_id` / `intersection_shape_id` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-interchange.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `crossing` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 INTERCHANGE | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t23` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/26-moc_dbvn.tbl_intersection-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/26-moc_dbvn.tbl_intersection-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-interchange-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-interchange-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_intersection.2026.8.23.15.11.csv` | dump · cite `intersection_526282` · gov-vn ~6989 | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile INTERCHANGE | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump · gap INTERCHANGE keys | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `INTERCHANGE` · dumpSpecs | P0 |
| GIS | `GisInventoryMapper.cs` | `nut-giao` ↔ `INTERCHANGE` · prefix `NG` · deep-link optional | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên nút · loại · giao với · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `INTERCHANGE` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=INTERCHANGE`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên nút giao | link Text | **ON** | bind `name` = `name_intersection` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống) |
| intersection_type_id | Loại nút giao | Text / Dropdown label | ON | dumpSpecs · mẫu list |
| intersect_with_id | Giao với | Text / Dropdown label | ON | dumpSpecs |
| intersection_shape_id | Hình dạng nút giao | Text / Dropdown label | ON | dumpSpecs |
| traffic_signal_lights | Có đèn tín hiệu | boolean label | ON | dumpSpecs · True/False |
| median_strip | Có dải phân cách / chuyển làn | boolean label | ON | dumpSpecs |
| khoangcachvoinuttruoc | Khoảng cách nút trước (m) | Number | **OFF** default | fill thấp · SchemaConfig bật |
| phuongthucdieukhien | Phương thức điều khiển | Text | **OFF** default | fill thấp · SchemaConfig |
| differential_island_height | Chiều cao đảo so với mặt đường | Number | **OFF** default | fill thấp · SchemaConfig |
| ketcau | Kết cấu giao vượt | Text | **OFF** default | hay trống · SchemaConfig |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump INTERCHANGE không có |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `NG-` |
| type | Loại tài sản | `SearchInput` | * | lock `INTERCHANGE` khi create từ tile `t23` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · sample hay trống · **không** required |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_intersection | Tên nút giao | `Text` | * | SSOT dump `name_intersection` · label «Tên nút giao» · **GAP-IX-NAME-01** · trống import OK |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| intersection_type_id | Loại nút giao | `Dropdown` | * | LOOKUP_STATIC dump (Nút giao tuyến đồng mức…) · **GAP-IX-LOOKUP-01** |
| intersect_with_id | Giao với | `Dropdown` | | LOOKUP_STATIC dump (Đường phố chính / Quốc lộ…) |
| intersection_shape_id | Hình dạng nút giao | `Dropdown` | | LOOKUP_STATIC dump (Ngã ba / Ngã tư / Đảo xuyến / Hình tam giác…) |
| ketcau | Kết cấu giao vượt | `Text` | | hay trống trên dump |
| traffic_signal_lights | Có đèn tín hiệu hay không? | `Dropdown` boolean | | True/False |
| median_strip | Có dải phân cách / đoạn chuyển làn hay không? | `Dropdown` boolean | | True/False |
| khoangcachvoinuttruoc | Khoảng cách với nút giao liền trước (m) | `Number` | | |
| phuongthucdieukhien | Phương thức điều khiển | `Text` / `Dropdown` | | LOOKUP_STATIC nếu SA seed · else Text |
| differential_island_height | Chiều cao đảo so với mặt đường xe | `Number` | | đơn vị theo dump |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit cho INTERCHANGE · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=INTERCHANGE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=INTERCHANGE`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_intersection` | Tên nút giao | `name` (primary) + dumpSpecs |
| `intersection_type_id` | Loại nút giao | dumpSpecs · form S-ATTR |
| `intersect_with_id` | Giao với | dumpSpecs · form S-ATTR |
| `intersection_shape_id` | Hình dạng nút giao | dumpSpecs · form S-ATTR |
| `ketcau` | Kết cấu giao vượt | dumpSpecs · form S-ATTR |
| `traffic_signal_lights` | Có đèn tín hiệu hay không? | dumpSpecs · form S-ATTR |
| `median_strip` | Có dải phân cách / đoạn chuyển làn hay không? | dumpSpecs · form S-ATTR |
| `khoangcachvoinuttruoc` | Khoảng cách với nút giao liền trước (m) | dumpSpecs · form S-ATTR |
| `phuongthucdieukhien` | Phương thức điều khiển | dumpSpecs · form S-ATTR |
| `differential_island_height` | Chiều cao đảo so với mặt đường xe | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null · **cấm** ép `"0"`) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

Cite mẫu row: `intersection_526282` → CSV `NG-intersection_526282` · `name=QL 1B` · `type=INTERCHANGE` · `intersection_type_id=Nút giao tuyến đồng mức` · `intersect_with_id=Đường phố chính` · `intersection_shape_id=Hình tam giác` · `traffic_signal_lights=False` · `median_strip=False` · `differential_island_height=300` · lat/lng `21.940788` / `106.703872` · `lytrinh` trống.

`map: none` · `progress: none` (Type A · `status` KT + soft `isActive`). Count cite gov-vn ~6989 · prefix `NG-`.

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
| **Type profile** | Cột INTERCHANGE §5b · **ẩn** type/kmTo/SL/ĐVT/KM_POST/SPILLWAY-only · fill thấp default OFF |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=INTERCHANGE` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `INTERCHANGE`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `INTERCHANGE` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-interchange` | redirect/equiv → `/so-ts?type=INTERCHANGE` (Design optional · mirror spillway) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-IX-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-IX-LOOKUP-01 | P0 | `intersection_type_id` / `intersect_with_id` / `intersection_shape_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1. `phuongthucdieukhien` = Text P1 · Dropdown nếu SA seed |
| GAP-IX-NAME-01 | P0 | `name` ← `name_intersection` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` / đoạn tuyến |
| GAP-IX-ROUTE-01 | P0 | Live route = **`/so-ts?type=INTERCHANGE`** · STATUS alias `/so-ts-interchange` = board link only · Design **optional** redirect alias (mirror spillway) — **không** fork page · tile `t23` deep-link OK |
| GAP-SOTS-COL-01 / hide-low-fill | P0 | Grid default **ON**: type/giao với/hình dạng/đèn/dải PC · **OFF** default: `khoangcachvoinuttruoc` · `ketcau` · `phuongthucdieukhien` · `differential_island_height` (SchemaConfig bật) · form S-ATTR vẫn editable đủ |
| GAP-IX-SPEC-01 / flatten | P1 | Giữ attr INTERCHANGE trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-IX-POINT-01 | P0 | Ẩn + không required `kmTo` · `kmFrom` không required · **cấm** ép `"0"` · cluster `crossing` → S-LOC-POINT |
| GAP-IX-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `nut-giao` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog intersection_type / intersect_with / shape SearchInput (P2 nếu SA seed)
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
| feature | `so-ts-interchange` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `INTERCHANGE` · cluster `crossing` |
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
| peerStdUrl gợi ý | `http://localhost:9301/so-ts` · live filter `…/so-ts?type=INTERCHANGE` · peer profile `…/so-ts?type=SPILLWAY` |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=INTERCHANGE` · alias board `…/so-ts-interchange` |
| mfeStdRoute | `/so-ts?type=INTERCHANGE` |
| BE | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` — **cấm** invent ERP / so-ts path |
| Open questions | GAP-IX-LOOKUP-01 Dropdown P1 · name_intersection · dumpSpecs P1 · flatten → SA · alias redirect optional · hide-low-fill grid OFF |
| Blockers | none cho Design prototype · Dev wire form S-ATTR + column profile INTERCHANGE · Import IsWeak/name_intersection fix = BE · dumpSpecLabels FE |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · full-page form-surface 5 cột · icons SSOT · type-profile columns INTERCHANGE · S-ATTR editable đủ dump · **cấm** tab legacy · **cấm** DEM chrome · **cấm** Modal form hồ sơ lớn · **cấm** mount kmTo / S-LOC-RANGE.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T05:50:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a |
| headerFingerprintPrior | sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.31.2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.30.01 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_6c6d0367` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a taskId=task_6c6d0367 -->
