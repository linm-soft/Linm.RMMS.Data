# PO — Requirement — so-ts-rescue-station (Sổ TS — Công trình cứu hộ)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
| title | Sổ TS — Công trình cứu hộ |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `RESCUE_STATION` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `RESCUE_STATION` |
| cluster | `station` · ô KCHT **`—`** (list only · **không** tile · `t24` = `RESCUE_VEHICLE`) |
| dump | `tbl_disaster_res_facility` |
| prefix | `CN-` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-RS-NAME-01 · GAP-RS-SPEC-01 · GAP-RS-POINT-01 · GAP-RS-ROUTE-01 · GAP-RS-LEAVE-01 · GAP-RS-LOOKUP-01 · GAP-RS-TILE-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_cdbd698e`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-rescue-station-control-hint.md` · `so-ts-rescue-station-real-data.md` · contentHash `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` · headerFingerprint `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` · analy `task_ce7b30e4` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=RESCUE_STATION` · STATUS alias `/so-ts-rescue-station` = board deep-link only (**GAP-RS-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=RESCUE_STATION` · alias `http://localhost:9301/so-ts-rescue-station` |
| liveList | `/so-ts?type=RESCUE_STATION` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-station-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-station-real-data.md` |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprint | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_cdbd698e` · analy `task_ce7b30e4` |
| updatedAt | `2026-09-01T02:15:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**) · invent KCHT tile · nhầm `RESCUE_VEHICLE`.

## 1. Goal

Chốt requirement **new_page** cho loại **Công trình cứu hộ (`RESCUE_STATION`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung (kho bãi vật tư dự phòng) — **không** fork page riêng · **không** invent tile KCHT.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `RESCUE_STATION`: tên kho bãi · 3 tầng tuyến · lý trình · `materials_in_store` · DT/cấp nhà/CT phụ/nhà kho **ON theo mẫu** · **ẩn** `type` / `kmTo` / SL / ĐVT.
2. Form S-ATTR editable đủ dump §4 RESCUE_STATION (không chỉ `<dl>` dumpSpecs).
3. `name` ← `name_building` — **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-RS-NAME-01**).
4. Station point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=RESCUE_STATION` · `kmFrom`/`lytrinh` hay trống — **cấm** ép `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `office_building_grade_id` / `auxiliary_works_grade_id` / `stored_building_grade_id` / `vitri` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-RS-LOOKUP-01**).
8. KCHT: ô `—` · **cấm** invent tile · deep-link filter type OK (**GAP-RS-TILE-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T01:55:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `RESCUE_STATION` |
| Grid columns | schema chung (+ profile STATION_HOUSE/…) | Profile `RESCUE_STATION` hide type/kmTo/SL/ĐVT + show vật tư/DT/cấp theo mẫu — **GAP-SOTS-COL-01** |
| Form S-ATTR | editable chỉ STATION_HOUSE (+ KM/SPILLWAY…) | Editable Input/Select đủ dump RESCUE_STATION — **GAP-SOTS-FORM-01** |
| Form layout | flat + dump dl (non-profile) | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | hay = `name_building` · vài row yếu | `name` ← `name_building` · **cấm** IsWeak → đoạn — **GAP-RS-NAME-01** |
| dumpSpecs labels | FE thiếu `materials_in_store` · `stored_building_*` · `vitri` | Label VN khớp mẫu · đủ cột §4 — **GAP-RS-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type ≠ profile point | **Ẩn** + không required khi `type=RESCUE_STATION` — **GAP-RS-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-rescue-station` · index chưa Navigate | Live = `/so-ts?type=RESCUE_STATION` · alias board-only — **GAP-RS-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-RS-LEAVE-01** |
| Lookup station | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-RS-LOOKUP-01** |
| KCHT tile | ô `—` · t24 = vehicle | **không** invent tile — **GAP-RS-TILE-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=RESCUE_STATION` + **search work** (mã · tên kho · vật tư · tuyến · QR · tỉnh) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Công trình cứu hộ» khi `type=RESCUE_STATION` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `RESCUE_STATION` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột RESCUE_STATION (name · route · routeNamed · routeSegment · kmFrom · materials_in_store · site_area_using_land · office/aux/stored grade+area · status/gps optional) · **ẩn** type / kmTo / quantity / unitCode · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · name · leave-confirm dirty · **kmFrom không** required (CSV hay trống).
9. S-ATTR: đủ dump §4 RESCUE_STATION editable (Dropdown/Number/Text/TextArea) — **không** chỉ `<dl>`.
10. Import/bind: `name` = `name_building` — **cấm** IsWeak fallback đoạn tuyến · trống OK · label field «Tên kho bãi».
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `RESCUE_STATION` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh`/`kmFrom` = `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. Grade/vitri = Dropdown LOOKUP_STATIC dump P1.
13. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
16. KCHT: **không** expect tile drill RESCUE_STATION · list filter type / alias board OK.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-rescue-station.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `station` · ô `—` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 RESCUE_STATION | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | ô `—` · t24=vehicle | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-rescue-station-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-rescue-station-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `moc_dbvn.tbl_disaster_res_facility.2026.8.23.14.14.csv` · gov-vn **20** `RESCUE_STATION` · cite `CN-disaster_response_facility_777421` / `Kho Hồng Lĩnh` | dump | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile RESCUE_STATION | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR RESCUE_STATION chưa editable | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | thiếu `materials_in_store` · `stored_building_*` · `vitri` · **GAP-RS-SPEC-01** | P0 |
| MFE-TILE | `kchtTileConfig.ts` | **không** drill RESCUE_STATION · t24=`RESCUE_VEHICLE` | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `RESCUE_STATION` · «Trạm cứu nạn» · unit `TRAM` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `RESCUE_STATION` → group `TS` · prefix `CN-` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên kho · vật tư · tuyến · QR · tỉnh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RESCUE_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=RESCUE_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên kho bãi | link Text | **ON** | bind `name` = `name_building` · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh` / parse · CSV scalar hay trống |
| materials_in_store | Vật tư chứa trong kho | Text | **ON** | dumpSpecs · mẫu list |
| site_area_using_land | Diện tích khuôn viên (m²) | Number | **ON** | mẫu list · SchemaConfig ẩn nếu fill 0 toàn type |
| office_building_grade_id | Nhà làm việc (cấp) | Text / Dropdown label | **ON** | Cấp 1–4 / Khác |
| total_area_office_building | Tổng DT nhà làm việc (m²) | Number | **ON** | mẫu |
| auxiliary_works_grade_id | Công trình phụ (cấp) | Text / Dropdown label | **ON** | mẫu |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | Number | **ON** | mẫu |
| stored_building_grade_id | Nhà kho (cấp) | Text / Dropdown label | **ON** | mẫu |
| total_area_stored_building | Tổng DT nhà kho (m²) | Number | **ON** | mẫu |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CN-` |
| type | Loại tài sản | `SearchInput` | * | lock `RESCUE_STATION` khi create từ filter type |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | mẫu detail «Km 944 + 138» · CSV scalar hay trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs |
| vitri | Vị trí | `Text` / `Dropdown` | | dump `vitri` · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_building | Tên kho bãi | `Text` | * | SSOT dump `name_building` · label mẫu «Tên kho bãi» · **GAP-RS-NAME-01** |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| materials_in_store | Vật tư chứa trong kho | `TextArea` / `Text` | | dump free-text · mẫu list |
| site_area_using_land | Diện tích khuôn viên (m²) | `Number` | | dump |
| office_building_grade_id | Nhà làm việc (cấp) | `Dropdown` | | Cấp 1–4 / Khác · **GAP-RS-LOOKUP-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump |
| auxiliary_works_grade_id | Công trình phụ (cấp) | `Dropdown` | | **GAP-RS-LOOKUP-01** |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump |
| stored_building_grade_id | Nhà kho (cấp) | `Dropdown` | | **GAP-RS-LOOKUP-01** |
| total_area_stored_building | Tổng DT nhà kho (m²) | `Number` | | dump |
| vitri | Vị trí | `Text` / `Dropdown` | | dump · nếu chưa mount S-LOC |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic cho RESCUE_STATION · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột STATION_HOUSE-only (`type_work_id` · `build_location` · `materials_in_office`) trừ khi dump có.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RESCUE_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RESCUE_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_building` | Tên kho bãi | `name` (primary) + dumpSpecs |
| `materials_in_store` | Vật tư chứa trong kho | dumpSpecs · form S-ATTR |
| `site_area_using_land` | Diện tích khuôn viên (m²) | dumpSpecs · form S-ATTR |
| `office_building_grade_id` | Nhà làm việc (cấp) | dumpSpecs · form S-ATTR |
| `total_area_office_building` | Tổng DT nhà làm việc (m²) | dumpSpecs · form S-ATTR |
| `auxiliary_works_grade_id` | Công trình phụ (cấp) | dumpSpecs · form S-ATTR |
| `total_area_auxiliary_works` | Tổng DT CT phụ (m²) | dumpSpecs · form S-ATTR |
| `stored_building_grade_id` | Nhà kho (cấp) | dumpSpecs · form S-ATTR |
| `total_area_stored_building` | Tổng DT nhà kho (m²) | dumpSpecs · form S-ATTR |
| `vitri` | Vị trí | dumpSpecs · form S-ATTR / S-LOC-POINT |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |
| `xaphuong` | Xã / phường | dumpSpecs optional |

Cite mẫu row: `CN-disaster_response_facility_777421` · `name=Kho Hồng Lĩnh` · `type=RESCUE_STATION` · `route=QL.1` · `routeNamed=QL.1-HATINH` · `routeSegment=Km 481 + 000 - Km 484 + 000` · lat/lng `18.54` / `105.7` · source dump `tbl_disaster_res:disaster_response_facility_777421` · `kmFrom` CSV trống · status `tot`.

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
| **Type profile** | Cột RESCUE_STATION §5b · **ẩn** type/kmTo/SL/ĐVT · **ON mẫu** vật tư/DT/cấp |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=RESCUE_STATION` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `RESCUE_STATION`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `RESCUE_STATION` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-rescue-station` | redirect/equiv → `/so-ts?type=RESCUE_STATION` (Design optional) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-RS-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-RS-LOOKUP-01 | P0 | `office_building_grade_id` / `auxiliary_works_grade_id` / `stored_building_grade_id` / `vitri` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA (Cấp 1–4 / Khác) — **không** SearchInput master P1 |
| GAP-RS-NAME-01 | P0 | `name` ← `name_building` primary · trống OK — **cấm** IsWeak → `name_of_route_asset` · label field «Tên kho bãi» |
| GAP-RS-ROUTE-01 | P0 | Live route = **`/so-ts?type=RESCUE_STATION`** · STATUS alias `/so-ts-rescue-station` = board link only · Design **optional** redirect alias — **không** fork page |
| GAP-RS-SPEC-01 / flatten | P1 | Giữ attr kho trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** · FE `dumpSpecLabels` đủ key §4 (`materials_in_store` · `stored_building_*` · `vitri`) |
| GAP-SOTS-COL-01 | P0 | Type column profile RESCUE_STATION hide type/kmTo/SL/ĐVT · **ON theo mẫu list**: materials · site_area · office/aux/stored grade+area (SchemaConfig ẩn nếu fill 0 toàn type) |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-RS-POINT-01 | P0 | Ẩn + không required `kmTo` trên form RESCUE_STATION · cluster `station` → S-LOC-POINT · **cấm** ép lytrinh/`kmFrom`=`"0"` · `kmFrom` **không** required |
| GAP-RS-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-RS-TILE-01 | P0 | KCHT ô `—` · **cấm** invent tile · **cấm** nhầm t24/`RESCUE_VEHICLE` · deep-link filter type OK |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| Label copy | P0 | Zone A title **«Sổ TS — Công trình cứu hộ»** (CTX) · cột/field name **«Tên kho bãi»** (mẫu) |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw (group `TS` optional out)
- Invent KCHT tile RESCUE_STATION / đổi t24 sang facility
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog grade/vitri SearchInput (P2 nếu SA seed)
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
| title | «Sổ TS — Công trình cứu hộ» khi `type=RESCUE_STATION` |
| grid ON | vật tư · DT/cấp nhà/CT phụ/nhà kho theo mẫu §5b |
| alias | `/so-ts-rescue-station` optional Navigate → `?type=RESCUE_STATION` |
| **cấm** | tab legacy · fork form · invent map/tile · GOVOne chrome · nhầm RESCUE_VEHICLE |

## 12. Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHashPrior | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprintPrior | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| status | `confirmed` |
| writtenAt | `2026-09-01T02:15:00.000Z` |
| taskId | `task_cdbd698e` |
| compact | `specs/so-ts-rescue-station/handoff/po-compact.md` |
