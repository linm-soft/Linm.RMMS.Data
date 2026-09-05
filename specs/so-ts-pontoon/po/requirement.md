# PO — Requirement — so-ts-pontoon (Sổ TS — Cầu phao)

| Field | Value |
|-------|-------|
| feature | `so-ts-pontoon` |
| title | Sổ TS — Cầu phao |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `PONTOON` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `PONTOON` |
| cluster | `crossing` · ô KCHT `t05` |
| dump | `tbl_pontoon_bridge` |
| prefix | `CP-` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-PON-NAME-01 · GAP-PON-SPEC-01 · GAP-PON-POINT-01 · GAP-PON-ROUTE-01 · GAP-PON-LEAVE-01 · GAP-PON-LOOKUP-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_093eb569`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-pontoon-control-hint.md` · `so-ts-pontoon-real-data.md` · contentHash `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` · headerFingerprint `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` · analy `task_7016336c` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=PONTOON` · STATUS alias `/so-ts-pontoon` = board deep-link only (**GAP-PON-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=PONTOON` · alias `http://localhost:9301/so-ts-pontoon` |
| liveList | `/so-ts?type=PONTOON` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-pontoon-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-pontoon-real-data.md` |
| contentHash | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprint | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_093eb569` · analy `task_7016336c` |
| updatedAt | `2026-09-01T19:01:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Cầu phao (`PONTOON`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `PONTOON`: tên cầu phao · 3 tầng tuyến · lý trình · loại CP · sông · rộng/dài · cấp CT · tải · **ẩn** `type` / `kmTo` / SL / ĐVT / cột KM_POST·SPILLWAY·FERRY-only.
2. Form S-ATTR editable đủ dump §4 PONTOON (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_pontoon_bridge` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-PON-NAME-01**).
4. Crossing point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=PONTOON` · `kmFrom`/`lytrinh` hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `level_work_id` / `pontoon_bridge_type_id` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-PON-LOOKUP-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T20:00:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `PONTOON` |
| Grid columns | schema chung (+ profile KM_POST/SPILLWAY/FERRY) | Profile `PONTOON` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY/FERRY) | Editable Input/Select đủ dump PONTOON — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild thường = `name_pontoon_bridge` | `name` ← `name_pontoon_bridge` · **cấm** IsWeak → đoạn — **GAP-PON-NAME-01** |
| dumpSpecs labels | FE thiếu width/length/type/level keys | Label VN khớp header dump · form Input/Select đủ cột — **GAP-PON-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY/FERRY | **Ẩn** + không required khi `type=PONTOON` — **GAP-PON-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-pontoon` | Live = `/so-ts?type=PONTOON` · alias board-only — **GAP-PON-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-PON-LEAVE-01** |
| Lookup pontoon | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-PON-LOOKUP-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=PONTOON` + **search work** (mã · tên cầu phao · sông · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Cầu phao» khi `type=PONTOON` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `PONTOON` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột PONTOON (name · route · routeNamed · routeSegment · kmFrom · pontoon_bridge_type_id · name_river · width · length · level_work_id · operational_load · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode / distance_next_post / materials_id / spillway_* / ferry-only · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · pontoon_bridge_type_id · leave-confirm dirty · **kmFrom không** required (CSV hay trống).
9. S-ATTR: đủ dump §4 PONTOON editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_pontoon_bridge` — **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `PONTOON` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. `level_work_id` / `pontoon_bridge_type_id` = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-pontoon.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `crossing` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 PONTOON | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t05` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/2-tbl_pontoon_bridge-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/2-tbl_pontoon_bridge-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-pontoon-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-pontoon-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_pontoon_bridge.2026.8.23.13.41.csv` (COVERAGE-KCHT-40) · gov-vn **2** `PONTOON` · cite `CP-378806` / `Cầu phao Sông Hóa` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile PONTOON | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR PONTOON chưa editable | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | có name/name_river/operational_load · **GAP-PON-SPEC-01** thiếu key còn lại | P0 |
| MFE-TILE | `kchtTileConfig.ts` | `t05` · drill `PONTOON` | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `PONTOON` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `cau-phao` ↔ `PONTOON` · prefix live `PON` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cầu phao · sông · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `PONTOON` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=PONTOON`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên cầu phao | link Text | **ON** | bind `name` = `name_pontoon_bridge` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống) |
| pontoon_bridge_type_id | Loại cầu phao | Text / Dropdown label | **ON** | dumpSpecs · mẫu list |
| name_river | Tên sông | Text | **ON** | dumpSpecs |
| width_pontoon_bridge | Chiều rộng (m) | Number | **ON** | dumpSpecs |
| length_pontoon_bridge | Chiều dài (m) | Number | **ON** | dumpSpecs |
| level_work_id | Cấp công trình | Text / Dropdown label | **ON** | dumpSpecs |
| operational_load | Tải trọng cho phép | Text | **ON** | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump PONTOON không có |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CP-` |
| type | Loại tài sản | `SearchInput` | * | lock `PONTOON` khi create từ tile `t05` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · CSV sample hay trống |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_pontoon_bridge | Tên cầu phao | `Text` | * | SSOT dump `name_pontoon_bridge` · label «Tên cầu phao» · **GAP-PON-NAME-01** |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name_river | Tên sông | `Text` | | dump · mẫu detail |
| level_work_id | Cấp công trình | `Dropdown` | | LOOKUP_STATIC dump · **GAP-PON-LOOKUP-01** |
| width_pontoon_bridge | Chiều rộng cầu phao (m) | `Number` | | |
| length_pontoon_bridge | Chiều dài cầu phao (m) | `Number` | | |
| pontoon_bridge_type_id | Loại cầu phao | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-PON-LOOKUP-01** |
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

**Không mount:** `kmTo` bắt buộc · quantity/unit cho PONTOON · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=PONTOON&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=PONTOON`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_pontoon_bridge` | Tên cầu phao | `name` (primary) + dumpSpecs |
| `name_river` | Tên sông | dumpSpecs · form S-ATTR |
| `level_work_id` | Cấp công trình | dumpSpecs · form S-ATTR |
| `width_pontoon_bridge` | Chiều rộng cầu phao (m) | dumpSpecs · form S-ATTR |
| `length_pontoon_bridge` | Chiều dài cầu phao (m) | dumpSpecs · form S-ATTR |
| `pontoon_bridge_type_id` | Loại cầu phao | dumpSpecs · form S-ATTR |
| `operational_load` | Tải trọng cho phép | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

Cite mẫu row: `CP-378806` · `name=Cầu phao Sông Hóa` · `type=PONTOON` · `route=QL.37` · row `484234` «Cầu Phao Ninh Cường» · `QL.37B` · gov-vn count **2**.

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
| **Type profile** | Cột PONTOON §5b · **ẩn** type/kmTo/SL/ĐVT/type-other |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=PONTOON` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `PONTOON`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `PONTOON` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-pontoon` | redirect/equiv → `/so-ts?type=PONTOON` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-PON-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-PON-LOOKUP-01 | P0 | `level_work_id` / `pontoon_bridge_type_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 (chưa có catalog APPROVED) |
| GAP-PON-NAME-01 | P0 | `name` ← `name_pontoon_bridge` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` |
| GAP-PON-ROUTE-01 | P0 | Live route = **`/so-ts?type=PONTOON`** · STATUS alias `/so-ts-pontoon` = board link only · Design **optional** redirect alias — **không** fork page · tile `t05` deep-link OK |
| GAP-PON-SPEC-01 / flatten | P1 | Giữ attr pontoon trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) · FE `dumpSpecLabels` đủ key §4 |
| GAP-SOTS-COL-01 | P0 | Type column profile PONTOON hide type/kmTo/SL/ĐVT/type-other · **ON mẫu**: name · route 3 tầng · kmFrom · loại CP · sông · rộng/dài · cấp · tải |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-PON-POINT-01 | P0 | Ẩn + không required `kmTo` trên form PONTOON · cluster `crossing` → S-LOC-POINT · **cấm** ép lytrinh/`kmFrom`=`"0"` · `kmFrom` **không** required |
| GAP-PON-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `cau-phao` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog level/type SearchInput (P2 nếu SA seed)
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
| title | «Sổ TS — Cầu phao» khi `type=PONTOON` |
| alias | `/so-ts-pontoon` optional Navigate → `?type=PONTOON` |
| **cấm** | tab legacy · fork form · invent map · GOVOne chrome |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHashPrior | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprintPrior | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| status | `confirmed` |
| writtenAt | `2026-09-01T19:01:00.000Z` |
| taskId | `task_093eb569` |
| compact | `specs/so-ts-pontoon/handoff/po-compact.md` |
