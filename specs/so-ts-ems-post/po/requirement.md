# PO — Requirement — so-ts-ems-post (Sổ TS — Trạm trực cấp cứu)

| Field | Value |
|-------|-------|
| feature | `so-ts-ems-post` |
| title | Sổ TS — Trạm trực cấp cứu |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `EMS_POST` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `EMS_POST` |
| cluster | `station` · ô KCHT **`t29`** · drill `EMS_POST` |
| dump | `tbl_first_aid_station` |
| prefix | `CCU-` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-EMS-NAME-01 · GAP-EMS-SPEC-01 · GAP-EMS-POINT-01 · GAP-EMS-ROUTE-01 · GAP-EMS-LEAVE-01 · GAP-EMS-LOOKUP-01 · GAP-EMS-TILE-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_de7c9863`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-ems-post-control-hint.md` · `so-ts-ems-post-real-data.md` · contentHash `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` · headerFingerprint `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` · analy `task_be3be31f` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=EMS_POST` · STATUS alias `/so-ts-ems-post` = board deep-link only (**GAP-EMS-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=EMS_POST` · alias `http://localhost:9301/so-ts-ems-post` |
| liveList | `/so-ts?type=EMS_POST` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ems-post-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ems-post-real-data.md` |
| contentHash | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprint | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_de7c9863` · analy `task_be3be31f` |
| updatedAt | `2026-09-01T05:45:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Trạm trực cấp cứu (`EMS_POST`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung (trạm cấp cứu) — **không** fork page riêng · tile KCHT `t29` drill có sẵn.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `EMS_POST`: tên trạm · 3 tầng tuyến · lý trình · chủ SH · loại trạm · khoảng cách đến đường lớn gần nhất · **ẩn** `type` / `kmTo` / SL / ĐVT / DT / cấp / CT phụ / vật tư / khuôn viên (dump không có).
2. Form S-ATTR editable đủ dump §4 EMS_POST (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_station` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-EMS-NAME-01**).
4. Station point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=EMS_POST` · `kmFrom`/`lytrinh` hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `owner_id` / `station_type_id` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-EMS-LOOKUP-01**).
8. KCHT: tile `t29` drill có · list profile sync count import **240** (**GAP-EMS-TILE-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T05:30:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `EMS_POST` |
| Grid columns | schema chung (+ profile peer station) | Profile `EMS_POST` hide type/kmTo/SL/ĐVT/DT/cấp + show attr §4 — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` dumpSpecs | Editable Input/Select đủ dump EMS_POST — **GAP-SOTS-FORM-01** |
| Form layout | flat + dump dl (non-profile) | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | hay lệch dump hoặc = mã tuyến | `name` ← `name_station` · **cấm** IsWeak → đoạn — **GAP-EMS-NAME-01** |
| dumpSpecs labels | FE thiếu `name_station` · `station_type_id` · `distance_nearest_major_road` | Label VN khớp mẫu · đủ cột §4 — **GAP-EMS-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type chưa profile | **Ẩn** + không required khi `type=EMS_POST` — **GAP-EMS-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-ems-post` · index chưa Navigate | Live = `/so-ts?type=EMS_POST` · alias board-only — **GAP-EMS-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-EMS-LEAVE-01** |
| Lookup station | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-EMS-LOOKUP-01** |
| KCHT tile | `t29` drill có · list chưa profile | count **240** · deep-link filter type OK — **GAP-EMS-TILE-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=EMS_POST` + **search work** (mã · tên trạm · tuyến · QR · tỉnh) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Trạm trực cấp cứu» khi `type=EMS_POST` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `EMS_POST` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột EMS_POST (name · route · routeNamed · routeSegment · kmFrom · owner_id · station_type_id · distance_nearest_major_road · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode / DT / cấp / CT phụ · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · leave-confirm dirty · **kmFrom không** required (CSV hay trống).
9. S-ATTR: đủ dump §4 EMS_POST editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_station` — **cấm** IsWeak fallback đoạn tuyến · trống OK · label field «Tên trạm».
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `EMS_POST` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `owner_id` / `station_type_id` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. KCHT: tile `t29` drill `EMS_POST` · count import **240** · list filter type / alias board OK.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-ems-post.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `station` · ô `t29` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §4 EMS_POST | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | ô `t29` · drill `EMS_POST` | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-ems-post-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-ems-post-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_first_aid_station.*.csv` · gov-vn **240** `EMS_POST` · cite `CCU-tbl_first_aid_station_720846` / `Trạm Hồng Thủy` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile EMS_POST | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR EMS_POST chưa editable | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | thiếu `name_station` · `station_type_id` · `distance_nearest_major_road` · **GAP-EMS-SPEC-01** | P0 |
| MFE-TILE | `kchtTileConfig.ts` | `t29` drill `EMS_POST` · «Trạm trực cấp cứu» | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `EMS_POST` · «Trạm trực cấp cứu» · unit `TRAM` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `EMS_POST` → group `TS` · prefix `CCU-` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR · tỉnh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `EMS_POST` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=EMS_POST`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `name_station` · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh` / parse · CSV scalar hay trống |
| owner_id | Chủ sở hữu | Text / Dropdown label | **ON** | dumpSpecs |
| station_type_id | Loại trạm | Text / Dropdown label | **ON** | dumpSpecs |
| distance_nearest_major_road | Khoảng cách đến đường lớn gần nhất (m) | Number | **ON** | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| site_area / office_grade / aux_grade | DT / cấp | — | **OFF** | dump EMS_POST không có |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CCU-` |
| type | Loại tài sản | `SearchInput` | * | lock `EMS_POST` khi create từ filter type |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | CSV scalar hay trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` optional |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_station | Tên trạm | `Text` | * | SSOT dump `name_station` · **GAP-EMS-NAME-01** |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| owner_id | Chủ sở hữu | `Dropdown` / `Text` | | **GAP-EMS-LOOKUP-01** |
| station_type_id | Loại trạm | `Dropdown` / `Text` | | **GAP-EMS-LOOKUP-01** |
| distance_nearest_major_road | Khoảng cách đến đường lớn gần nhất (m) | `Number` | | dump |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột STATION_HOUSE-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=EMS_POST&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=EMS_POST`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_station` | Tên trạm | `name` (primary) + dumpSpecs |
| `owner_id` | Chủ sở hữu | dumpSpecs · form S-ATTR |
| `station_type_id` | Loại trạm | dumpSpecs · form S-ATTR |
| `distance_nearest_major_road` | Khoảng cách đến đường lớn gần nhất (m) | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

Cite mẫu row: `CCU-tbl_first_aid_station_720846` · `name=Trạm Hồng Thủy` · `type=EMS_POST` · `route=QL.1` · `routeNamed=QL.1-QUANGTRI` · `routeSegment=Km 672 + 821 - Km 704 + 900` · lat/lng `17.3` / `106.75` · source dump `tbl_first_aid:tbl_first_aid_station_720846` · `kmFrom` CSV trống · status `tot`.

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
| **Type profile** | Cột EMS_POST §5b · **ẩn** type/kmTo/SL/ĐVT/DT/cấp · **ON mẫu** attr §4 |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=EMS_POST` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `EMS_POST`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `EMS_POST` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-ems-post` | redirect/equiv → `/so-ts?type=EMS_POST` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-EMS-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-EMS-LOOKUP-01 | P0 | `owner_id` / `station_type_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 |
| GAP-EMS-NAME-01 | P0 | `name` ← `name_station` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` · label field «Tên trạm» |
| GAP-EMS-ROUTE-01 | P0 | Live route = **`/so-ts?type=EMS_POST`** · STATUS alias `/so-ts-ems-post` = board link only · Design **optional** redirect alias — **không** fork page |
| GAP-EMS-SPEC-01 / flatten | P1 | Giữ attr trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** · FE `dumpSpecLabels` đủ key §4 (`name_station` · `owner_id` · `station_type_id` · `distance_nearest_major_road`) |
| GAP-SOTS-COL-01 | P0 | Type column profile EMS_POST hide type/kmTo/SL/ĐVT/DT/cấp · **ON theo mẫu list**: tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-EMS-POINT-01 | P0 | Ẩn + không required `kmTo` trên form EMS_POST · cluster `station` → S-LOC-POINT · **cấm** ép lytrinh/`kmFrom`=`"0"` · `kmFrom` **không** required |
| GAP-EMS-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-EMS-TILE-01 | P0 | KCHT tile `t29` drill `EMS_POST` · count import **240** · list profile sync |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| Label copy | P0 | Zone A title **«Sổ TS — Trạm trực cấp cứu»** (CTX) · cột/field name **«Tên trạm»** (mẫu list) |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw (group `TS` optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog owner/station_type SearchInput (P2 nếu SA seed)
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
| title | «Sổ TS — Trạm trực cấp cứu» khi `type=EMS_POST` |
| grid ON | tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách theo mẫu §5b |
| alias | `/so-ts-ems-post` optional Navigate → `?type=EMS_POST` |
| tile | KCHT `t29` drill · count **240** |
| **cấm** | tab legacy · fork form · invent map · GOVOne chrome |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHashPrior | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprintPrior | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| status | `confirmed` |
| writtenAt | `2026-09-01T05:45:00.000Z` |
| taskId | `task_de7c9863` |
| compact | `specs/so-ts-ems-post/handoff/po-compact.md` |
