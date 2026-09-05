# PO — Requirement — so-ts-ditch (Sổ TS — Cống / rãnh dọc)

| Field | Value |
|-------|-------|
| feature | `so-ts-ditch` |
| title | Sổ TS — Cống / rãnh dọc |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `DITCH` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `DITCH` |
| cluster | `linear_protect` · ô KCHT `t10` |
| dump | `tbl_longitudinal` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-DITCH-NAME-01 · GAP-DITCH-SPEC-01 · GAP-DITCH-RANGE-01 · GAP-DITCH-ROUTE-01 · GAP-DITCH-LEAVE-01 · GAP-DITCH-LOOKUP-01 · GAP-DITCH-PREFIX-01 · GAP-DITCH-MANHOLE-01 · GAP-DITCH-PEER-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_58be7ac6`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-ditch-control-hint.md` · `so-ts-ditch-real-data.md` · contentHash `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` · headerFingerprint `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` · analy `task_e8b2158e` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=DITCH` · STATUS alias `/so-ts-ditch` = board deep-link only (**GAP-DITCH-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=DITCH` · alias `http://localhost:9301/so-ts-ditch` |
| liveList | `/so-ts?type=DITCH` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ditch-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ditch-real-data.md` |
| contentHash | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprint | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_58be7ac6` · analy `task_e8b2158e` |
| updatedAt | `2026-09-01T10:20:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Cống / rãnh dọc (`DITCH`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `DITCH`: loại rãnh/cống · 3 tầng tuyến · kmFrom · kmTo · tỉnh/xã · hình dạng · dài · cao · rộng đáy/miệng · **ẩn** `type` khi `?type=` · **ẩn** ảnh đại diện GOV · **ẩn** KM_POST-only · SL/ĐVT hide-empty.
2. Form S-ATTR editable đủ dump §4 DITCH (không chỉ `<dl>` dumpSpecs).
3. `name` **optional** · list primary = `ditch_type_id` (+ km) — **cấm** IsWeak → `routeSegment` (**GAP-DITCH-NAME-01**).
4. Cluster `linear_protect`: mount **S-LOC-RANGE** · km đầu/cuối * · 4 XY đầu/cuối dumpSpecs P1 · **cấm** ép `"0"` khi trống (**GAP-DITCH-RANGE-01**).
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS — **cấm** fork file form · **không mount** S-LOC-POINT.
7. Lookup: `ditch_type_id` / `culvert_shape_id` / `structural_type_id` / `work_type_id` / `materials_work_id` / `location_id` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-DITCH-LOOKUP-01**).
8. Prefix IdCode đề xuất **`CD-`** khớp GIS short CD (**GAP-DITCH-PREFIX-01**).
9. Page filter **`DITCH` only** · peer `CULVERT_L` DEFER (**GAP-DITCH-PEER-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration) · **≠** gộp UI `CULVERT_L`.

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T10:13:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `DITCH` |
| Grid columns | schema chung (+ peer profiles) | Profile `DITCH` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` | Editable Input/Select đủ dump DITCH — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name | Dump không `name_*` · IsWeak risk → đoạn | `name` optional · primary list = `ditch_type_id` — **GAP-DITCH-NAME-01** |
| dumpSpecs labels | FE thiếu hầu hết key DITCH | Label VN khớp mẫu · form Input/Select đủ cột — **GAP-DITCH-SPEC-01** |
| Loc range | Form `kmTo` generic / thiếu 4 XY | S-LOC-RANGE · km* + 4 XY dumpSpecs · **cấm** ép `"0"` — **GAP-DITCH-RANGE-01** |
| Prefix | `DefaultCodePrefix` → `TS-` · GIS `CD` | create/import đề xuất **`CD-`** — **GAP-DITCH-PREFIX-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-ditch` | Live = `/so-ts?type=DITCH` · alias board-only — **GAP-DITCH-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-DITCH-LEAVE-01** |
| Lookup ditch | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-DITCH-LOOKUP-01** |
| Manhole KT | dump §4 · có thể trống | Form S-ATTR · grid **hide-empty** — **GAP-DITCH-MANHOLE-01** |
| Peer CULVERT_L | Tile nav `DITCH`+`CULVERT_L` | Page **chỉ** `type=DITCH` · peer DEFER — **GAP-DITCH-PEER-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=DITCH` + **search work** (mã · loại rãnh/cống · tuyến · QR · địa danh) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Cống / rãnh dọc» khi `type=DITCH` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `DITCH` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột DITCH (§5b) · **ẩn** type / thumb / KM_POST-only · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · kmFrom · kmTo · ditch_type_id · leave-confirm dirty.
9. S-ATTR: đủ dump §4 DITCH editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` optional · primary list = `ditch_type_id` — **cấm** IsWeak fallback đoạn tuyến.
11. RANGE: mount **S-LOC-RANGE** · `kmFrom`/`kmTo` * · 4 XY dumpSpecs P1 · **không mount** S-LOC-POINT · **cấm** ép `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. Attr dump = Dropdown LOOKUP_STATIC dump P1.
13. Prefix create/import: **`CD-`** (GIS short CD) — SA/BE chốt `DefaultCodePrefix`.
14. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
15. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
16. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
17. Page filter **`DITCH` only** — **không** gộp `CULVERT_L` trên UI page này.
18. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-ditch.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `linear_protect` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 DITCH | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t10` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/13-moc_dbvn.tbl_longitudinal-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/13-moc_dbvn.tbl_longitudinal-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-ditch-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-ditch-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_longitudinal.2026.8.23.14.25.csv` · gov-vn **59657** (`COVERAGE-KCHT-40`) | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile DITCH | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump · gap DITCH keys | P0 |
| MFE-TILE | `kchtTileConfig.ts` `t10` · `kchtNavigation.ts` | drill DITCH · peer CULVERT_L count | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `DITCH` · unit `THOAT_NUOC` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `cong-doc` ↔ DITCH · short `CD` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại rãnh/cống · tuyến · QR · địa danh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `DITCH` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=DITCH`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| ditch_type_id | Loại rãnh / cống dọc | Text / Dropdown label | **ON** | dumpSpecs · mẫu list primary |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | mẫu list · RANGE |
| provinceFrom | Địa danh điểm đầu (tỉnh) | Text | hide-empty | dumpSpecs / derived |
| communeFrom | Địa danh điểm đầu (xã) | Text | hide-empty | mẫu list |
| provinceTo | Địa danh điểm cuối (tỉnh) | Text | hide-empty | mẫu list |
| communeTo | Địa danh điểm cuối (xã) | Text | hide-empty | mẫu list |
| culvert_shape_id | Hình dạng | Text | ON | dumpSpecs |
| actual_length | Chiều dài thực tế (m) | Number | ON | dumpSpecs |
| height_culvert | Chiều cao (m) | Number | ON | dumpSpecs |
| width_bottom | Chiều rộng đáy (m) | Number | hide-empty | dumpSpecs |
| width_top | Chiều rộng miệng (m) | Number | hide-empty | dumpSpecs |
| structural_type_id | Loại kết cấu | Text | hide-empty | dumpSpecs |
| materials_work_id | Vật liệu | Text | hide-empty | dumpSpecs |
| length_manhole / width_manhole / height_manhole | KT hố ga | Number | hide-empty | **GAP-DITCH-MANHOLE-01** |
| name | Tên | link Text | optional | **GAP-DITCH-NAME-01** · không bắt buộc nếu trống |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | hide-empty | dump `number` có thể map SL · **không** bắt buộc grid |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix **`CD-`** (**GAP-DITCH-PREFIX-01**) |
| type | Loại tài sản | `SearchInput` | * | lock `DITCH` khi create từ tile `t10` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` · catalog KHAC |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` · catalog KHAC |

#### S-LOC-RANGE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình điểm đầu (Km+) | `Text` chainage | * | mẫu detail · **cấm** ép `"0"` |
| kmTo | Lý trình điểm cuối (Km+) | `Text` chainage | * | mẫu detail có giá trị |
| latFrom / lngFrom | Tọa độ điểm đầu Y / X | `Number` | | dump `from_coordinatey/x` (Y→lat · X→lng) · dumpSpecs P1 |
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-DITCH-RANGE-01** |
| provinceFrom | Địa danh điểm đầu (tỉnh) | `Text` / SearchInput | | mẫu ĐVHC |
| provinceTo | Địa danh điểm cuối (tỉnh) | `Text` / SearchInput | | |

**Không mount** `S-LOC-POINT` thay RANGE cho type này.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-DITCH-NAME-01** · **cấm** bắt buộc đoạn tuyến |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| ditch_type_id | Loại rãnh / cống dọc | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-DITCH-LOOKUP-01** |
| structural_type_id | Loại kết cấu | `Dropdown` | | LOOKUP_STATIC |
| work_type_id | Loại công trình | `Dropdown` | | LOOKUP_STATIC |
| culvert_shape_id | Hình dạng | `Dropdown` | | LOOKUP_STATIC · mẫu list |
| actual_length | Chiều dài thực tế (m) | `Number` | | mẫu detail |
| number | Số lượng | `Number` | | dump §4 |
| height_culvert | Chiều cao (m) | `Number` | | mẫu detail |
| width_bottom | Chiều rộng đáy (m) | `Number` | | |
| width_top | Chiều rộng miệng (m) | `Number` | | |
| number_work_within_section | Số công trình trên đoạn | `Number` | | |
| materials_work_id | Vật liệu | `Dropdown` | | LOOKUP_STATIC |
| length_manhole | Chiều dài hố ga (m) | `Number` | | **GAP-DITCH-MANHOLE-01** |
| width_manhole | Chiều rộng hố ga (m) | `Number` | | |
| height_manhole | Chiều cao hố ga (m) | `Number` | | |
| location_id | Vị trí (mặt cắt) | `Dropdown` | | LOOKUP_STATIC / init vitriOptions |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

#### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | có thể = latFrom |
| lng | Kinh độ | `Number` | | có thể = lngFrom |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST-only · ảnh đại diện invent · quantity/unit bắt buộc trên grid · S-LOC-POINT.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=DITCH&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=DITCH`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `ditch_type_id` | Loại rãnh / cống dọc | dumpSpecs · form S-ATTR · grid ON |
| `structural_type_id` | Loại kết cấu | dumpSpecs · form S-ATTR · hide-empty |
| `work_type_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `culvert_shape_id` | Hình dạng | dumpSpecs · form S-ATTR · grid ON |
| `actual_length` | Chiều dài thực tế (m) | dumpSpecs · form S-ATTR · grid ON |
| `number` | Số lượng | dumpSpecs · form S-ATTR |
| `height_culvert` | Chiều cao (m) | dumpSpecs · form S-ATTR · grid ON |
| `width_bottom` | Chiều rộng đáy (m) | dumpSpecs · form S-ATTR · hide-empty |
| `width_top` | Chiều rộng miệng (m) | dumpSpecs · form S-ATTR · hide-empty |
| `number_work_within_section` | Số CT trên đoạn | dumpSpecs · form S-ATTR |
| `materials_work_id` | Vật liệu | dumpSpecs · form S-ATTR · hide-empty |
| `length_manhole` / `width_manhole` / `height_manhole` | KT hố ga | dumpSpecs · form · hide-empty grid |
| `location_id` | Vị trí mặt cắt | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình điểm đầu | `kmFrom` |
| `km_to` / lý trình cuối | Lý trình điểm cuối | `kmTo` |
| `from_coordinatex/y` | XY đầu | lngFrom/latFrom · dumpSpecs |
| `to_coordinatex/y` | XY cuối | lngTo/latTo · dumpSpecs |
| `tinhthanhpho` / `xaphuong` | Địa danh đầu | dumpSpecs |
| `tinhthanhpho_cuoi` / `xaphuong_cuoi` | Địa danh cuối | dumpSpecs |

Unit seed: `THOAT_NUOC`. GIS: `cong-doc` · IdCode short **`CD`**.

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
| **Type profile** | Cột DITCH §5b · **ẩn** type/thumb/KM_POST-only · SL/ĐVT hide-empty |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=DITCH` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `DITCH`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `DITCH` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-ditch` | redirect/equiv → `/so-ts?type=DITCH` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-DITCH-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-DITCH-LOOKUP-01 | P0 | `ditch_type_id` / `culvert_shape_id` / `structural_type_id` / `work_type_id` / `materials_work_id` / `location_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 |
| GAP-DITCH-NAME-01 | P0 | `name` **optional** · list primary = `ditch_type_id` (+ km) — **cấm** IsWeak → `routeSegment` / `name_of_route_asset` |
| GAP-DITCH-ROUTE-01 | P0 | Live route = **`/so-ts?type=DITCH`** · STATUS alias `/so-ts-ditch` = board link only · Design **optional** redirect alias — **không** fork page · tile `t10` deep-link OK |
| GAP-DITCH-PREFIX-01 | P0 | Prefix IdCode **`CD-`** khớp GIS short CD — SA/BE chốt `DefaultCodePrefix` (thay `TS-`) |
| GAP-DITCH-RANGE-01 | P0 | 4 XY + km RANGE = **dumpSpecs / form fields P1** · flatten scalar DB = **SA migration** · **cấm** ép `"0"` |
| GAP-DITCH-PEER-01 | P0 | Page filter **`DITCH` only** · peer `CULVERT_L` = feature riêng / DEFER — tile count có thể gồm peer nhưng UI page không gộp |
| GAP-DITCH-SPEC-01 | P0 | FE `dumpSpecLabels` đủ key DITCH · label VN khớp mẫu |
| GAP-DITCH-MANHOLE-01 | P1 | KT hố ga form S-ATTR · grid **hide-empty** |
| GAP-SOTS-COL-01 | P0 | Type column profile DITCH hide type/thumb/KM_POST-only |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-DITCH-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `cong-doc` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog ditch_type / culvert_shape SearchInput (P2 nếu SA seed)
- Excel import wizard / Excel export (parent import path riêng)
- Gộp UI `CULVERT_L` vào page này
- Invent `api/v1/so-ts/*` · ERP.* · Finance fork · `api/v1/rmms/*`
- Auth NuGet `[RequirePermission]` wire full
- Re-CRUD parent `asset` unrelated types
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Re-scan demo HTML / crawl DemoRoot (**GAP-PO-DEMO-RESCAN-01**)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| feature | `so-ts-ditch` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `DITCH` · cluster `linear_protect` · **S-LOC-RANGE** |
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
| peerStdUrl gợi ý | `http://localhost:9301/so-ts` · live filter `…/so-ts?type=DITCH` |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=DITCH` · alias board `…/so-ts-ditch` |
| mfeStdRoute | `/so-ts?type=DITCH` |
| BE | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` — **cấm** invent ERP / so-ts path |
| Open questions | GAP-DITCH-* chốt §9 · dumpSpecs P1 · flatten → SA · alias redirect optional · peer CULVERT_L DEFER |
| Blockers | none cho Design prototype · Dev wire form S-ATTR + column profile DITCH · labels FE · prefix CD- = BE · lookup seed = SA |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · full-page form-surface 5 cột · icons SSOT · type-profile columns DITCH · S-ATTR editable đủ dump · mount **S-LOC-RANGE** (không S-LOC-POINT) · **cấm** tab legacy · **cấm** DEM chrome · **cấm** Modal form hồ sơ lớn · **cấm** ảnh invent · **cấm** gộp CULVERT_L.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T10:20:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854 |
| headerFingerprintPrior | sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.31.2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.09.01.02 |
| dataAnalyRulesVersion | 2026.09.01.1 |
| taskId | `task_58be7ac6` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854 taskId=task_58be7ac6 -->
