# PO — Requirement — so-ts-underpass (Sổ TS — Hầm chui dân sinh)

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · type-profile `UNDERPASS` trên shell `/so-ts` live · greenfield profile) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list + full-page form) |
| Feature Kind | **B** — Catalog list A–D + **full-page** form (`AssetFormPage` · `CatalogFormShell` 5 cột) |
| typeCode | `UNDERPASS` |
| cluster | `crossing` · ô KCHT `t06` |
| dump | `tbl_underpass_box` |
| gap | GAP-SOTS-COL-01 · GAP-SOTS-FORM-01 · GAP-SOTS-REUSE-01 · GAP-UP-NAME-01 · GAP-UP-SPEC-01 · GAP-UP-POINT-01 · GAP-UP-ROUTE-01 · GAP-UP-LEAVE-01 · GAP-UP-LOOKUP-01 · GAP-UP-PREFIX-01 · GAP-SOTS-API-DOC · GAP-SOTS-TAB-01 |
| mode | `feature_context` · **no Excel** · CTX + parent type-grid + import-gov fields · demo = UI tham chiếu · sourceKind=`synthetic` |
| status | `confirmed` (autoApprove=ON · task `task_7eb8c843`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/so-ts-underpass-control-hint.md` · `so-ts-underpass-real-data.md` · contentHash `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` · headerFingerprint `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` · analy `task_3deb2a56` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | live `/so-ts?type=UNDERPASS` · STATUS alias `/so-ts-underpass` = board deep-link only (**GAP-UP-ROUTE-01**) |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=UNDERPASS` · alias `http://localhost:9301/so-ts-underpass` |
| liveList | `/so-ts?type=UNDERPASS` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-underpass-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-underpass-real-data.md` |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| taskId | `task_7eb8c843` · analy `task_3deb2a56` |
| updatedAt | `2026-09-01T11:15:00.000Z` |
| versionGate | `rechecked` |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** catalog list A–D + full-page form trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này.

**Cấm:** implement · re-scan DEM · fork `AssetFormPage` 32 file · tab legacy DRVN · invent API · ERP.* · `api/v1/rmms/*` · demo-json / localStorage SSOT · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho loại **Hầm chui dân sinh (`UNDERPASS`)** trên shell Sổ TS live: type-profile cột list + form section reuse khớp mẫu DRVN tab Thông tin chung — **không** fork page riêng.

Persona: Ban QLDA · Sở GTVT · Tuần đường · Khu QLĐB (web).

**Delta pack này (SSOT lock từ analy):**

1. Grid profile `UNDERPASS`: loại cống · 3 tầng tuyến · tên cống · lý trình · tên đường chui · thi công · tải · số ngăn · rộng/cao/dài · kết cấu · tường cánh · **ẩn** `type` / `kmTo` / SL / ĐVT / cột KM_POST/SPILLWAY-only · **ẩn default** fill thấp (đèn/biển/rào/mặt đường trong).
2. Form S-ATTR editable đủ dump §4 UNDERPASS (không chỉ `<dl>` dumpSpecs).
3. `name` ← `tencongchui` rồi `name_underpass` khi có · **cấm** IsWeak → đoạn tuyến · trống OK (**GAP-UP-NAME-01**).
4. Crossing point: **không** bắt buộc / **ẩn** `kmTo` trên form khi `type=UNDERPASS` · **cấm** ép `lytrinh` `"0"`.
5. Leave/alert: `LeaveConfirmModal` + `useAlert` / Modal — **cấm** `window.confirm`.
6. Reuse section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS — **cấm** fork file form.
7. Lookup: `culvert_type_id` / `construction_id` / `structure_type_id` / `material_wingwall_id` / `pavement_type_inside_underpass_id` = **Dropdown LOOKUP_STATIC** dump P1 (**GAP-UP-LOOKUP-01**).
8. Create IdCode align prefix **`CC-`** (cite GIS + import gov-vn) — **cấm** fallback `TS-` cho UNDERPASS · legacy `HC` chỉ giữ row cũ (**GAP-UP-PREFIX-01**).

**≠** reopen full CRUD parent `asset` · **≠** invent map canvas · **≠** flatten cột DB trong P1 (SA migration).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-01T11:10:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy 2026-09-01) | New (this pack · copy analy) |
|-------|-------------------------------------------|------------------------------|
| Kind / shell | Kind B A–D list + full-page form CRUD BFF | **keep** shell `/so-ts` · type filter `UNDERPASS` |
| Grid columns | schema chung (+ profile KM_POST/SPILLWAY) | Profile `UNDERPASS` hide-empty — **GAP-SOTS-COL-01** |
| Form S-ATTR | readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY) | Editable Input/Select đủ dump UNDERPASS — **GAP-SOTS-FORM-01** |
| Form layout | 1 flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **GAP-SOTS-REUSE-01** |
| Name import | rebuild: trống tên → fallback route/`QL.*` | `name` ← `tencongchui` / `name_underpass` · trống OK — **GAP-UP-NAME-01** |
| dumpSpecs labels | FE chỉ `name_underpass` | Label VN khớp header dump · form Input/Select đủ cột — **GAP-UP-SPEC-01** |
| Point kmTo | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | **Ẩn** + không required khi `type=UNDERPASS` · **cấm** ép `"0"` — **GAP-UP-POINT-01** |
| Route alias | STATUS `mfeStdRoute=/so-ts-underpass` · index chưa Navigate | Live = `/so-ts?type=UNDERPASS` · alias board-only — **GAP-UP-ROUTE-01** |
| Leave / alert | `window.confirm` dirty/delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal — **GAP-UP-LEAVE-01** |
| Lookup underpass | text dumpSpecs | **Dropdown** LOOKUP_STATIC dump P1 — **GAP-UP-LOOKUP-01** |
| Prefix Create | BE fallback `TS-` · GIS/import `CC-` · Csdl legacy `HC` | Align Create → **`CC-`** — **GAP-UP-PREFIX-01** |
| API docs parent | CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** — **GAP-SOTS-API-DOC** |

**Không đổi:** Kind B A–D · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF passthrough · entity `rmms_road_assets` · SearchInput asset-type / road-route / org-unit · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope**.

## 3. DoD (đo được)

1. **packKind=`list`** confirmed · UI chốt Design (prototype + reviewUrl).
2. List load `?type=UNDERPASS` + **search work** (mã · tên cống · loại · thi công · tuyến · QR) — page=1 khi filter đổi.
3. Zone A: title «Sổ TS — Hầm chui dân sinh» khi `type=UNDERPASS` — **cấm** Thêm mới trên A.
4. Zone B: **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — SearchTextInput · type SearchInput (prefill `UNDERPASS` / ẩn khi deep-link cố định) · route SearchInput · kmFrom/kmTo Text (filter range) · org tree · Tạo mới primary · Refresh · SchemaConfig · History — **search must work** · **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters` / stack.
5. Zone C: `LinCatalogDataGrid` kéo cột default ON · STT · profile cột UNDERPASS (culvert_type · route · routeNamed · routeSegment · name · kmFrom · name_underpass · construction · weight · number · crossing_length · structure · width/height/wingwall optional) · **ẩn** type / kmTo / quantity / unitCode / KM_POST/SPILLWAY-only · **ẩn default** pavement_* / number_lighting / number_signboard / number_barrier · row menu Xem/Sửa/Copy/Lịch sử.
6. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500** — **cấm** footerPagination / pageSizeBar raw.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind=`road-assets` — **cấm** `LinListTableConfigModal` / `configHint`.
8. Form full-page C/E/V/Copy: sections S-* mounted · View=`readOnly` (**không** disabled xám) · required: type · status · route · culvert_type_id · leave-confirm dirty · name/kmFrom **optional** (dump hay trống).
9. S-ATTR: đủ dump §4 UNDERPASS editable (Dropdown/Number/Text) — **không** chỉ `<dl>`.
10. Import/bind: `name` ← `tencongchui` rồi `name_underpass` · **cấm** IsWeak fallback đoạn tuyến · trống OK.
11. Point: **không** bắt buộc `kmTo` · ẩn field form khi `UNDERPASS` · **không mount** S-LOC-RANGE · **cấm** ép `lytrinh` `"0"`.
12. Lookups: asset-type · road-route · org-unit = SearchInput master — **cấm** free-text · **cấm** Dropdown 8 nhãn demo. Attr lookup UNDERPASS = Dropdown LOOKUP_STATIC dump P1.
13. Create IdCode prefix **`CC-`** cho type `UNDERPASS` — **cấm** `TS-` fallback · legacy `HC` giữ row cũ.
14. Dirty → **`LeaveConfirmModal`** · xóa → **`useAlert` / `Modal`** — **cấm** native dialog.
15. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
16. Empty/fail: empty grid copy VN · toast — **cấm** mock seed · **cấm** demo/localStorage fallback.
17. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại | Bắt buộc |
|----|------|------|----------|
| CTX-01 | `docs/context/features/so-ts-underpass.md` | feature | P0 ✅ |
| CTX-02 | `docs/context/features/so-ts-type-grid.md` | parent shell · section reuse · cluster `crossing` | P0 ✅ |
| CTX-03 | `docs/context/features/import-gov-asset-fields.md` §3 · §4 UNDERPASS | dump columns | P0 ✅ |
| CTX-04 | `docs/context/features/asset.md` | peer list/form Kind B | P1 |
| CTX-05 | `docs/context/features/asset-kcht-dashboard.md` | tile `t06` drill | P1 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | demo entry · **UI tham chiếu only** | P1 — **cấm** SSOT data |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/asset.html` | page chrome tham chiếu | P1 |
| MAU-01 | `docs/img/gov-mau-tai-san/12-tbl_underpass_box-list.png` | mẫu list | P0 ✅ |
| MAU-02 | `docs/img/gov-mau-tai-san/12-tbl_underpass_box-detail.png` | mẫu detail Thông tin chung | P0 ✅ |
| DA-HINT | `specs/_data-analy/features/so-ts-underpass-control-hint.md` | controlHint | P0 ✅ |
| DA-REAL | `specs/_data-analy/features/so-ts-underpass-real-data.md` | real-data §A+§B | P0 ✅ |
| DI-01 | — | **no Excel cluster** | — |
| CSV-01 | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_underpass_box.2026.8.23.14.24.csv` | dump · cite `underpass_box_523453` · gov-vn ~490 | P1 |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` | P0 ✅ |
| MFE-LIST | `AssetListPage.tsx` | Kind B · `?type=` · thiếu profile UNDERPASS | P0 |
| MFE-FORM | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` | P0 |
| MFE-EP | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` | P0 |
| MFE-LBL | `services/asset/dumpSpecLabels.ts` | VN labels dump · gap underpass keys | P0 |
| BE-ENT | `…/Entities/RoadAssetEntity.cs` | `rmms_road_assets` | P0 |
| BE-API | `…/Controllers/RoadAssetsController.cs` | live CRUD | P0 |
| BE-IMP | `…/Import/RoadAssetCatalogHandler.cs` | type seed `UNDERPASS` · dumpSpecs | P0 |
| BE-GIS | `GisInventoryMapper.cs` | `cong-chui` ↔ `UNDERPASS` · prefix `CC` | P1 |
| CAT-TYPE | shared catalogs asset-type | APPROVED A | P0 |
| CAT-ROUTE | shared catalogs road-route | APPROVED A | P0 |
| CAT-ORG | shared catalogs org-unit | APPROVED A | P0 |

## 5. Control hints (copy data-analy — Design chốt control-map)

> SSOT: DA-HINT · typography label **13** · input D14/M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field tham chiếu.

### 5a. List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cống · loại · thi công · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `UNDERPASS` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

### 5b. Grid columns (`type=UNDERPASS`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| culvert_type_id | Loại cống | Text / Dropdown label | **ON** | dumpSpecs · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| name | Tên cống / hào KT | link Text | **ON** | bind `name` ← `tencongchui` / `name_underpass` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống) |
| name_underpass | Tên đường chui (nếu có) | Text | ON | dumpSpecs · mẫu list |
| construction_id | Thi công | Text / Dropdown label | ON | Đúc sẵn / Đổ tại chỗ / Khác |
| weight | Tải trọng | Number | ON | dumpSpecs |
| number | Số ngăn | Number | ON | dumpSpecs |
| width | Chiều rộng (m) | Number | optional | dumpSpecs · mẫu detail |
| height | Chiều cao (m) | Number | optional | dumpSpecs |
| crossing_length_culvert | Chiều dài thân cống (m) | Number | ON | dumpSpecs · mẫu list |
| structure_type_id | Loại kết cấu | Text / Dropdown label | ON | dumpSpecs |
| number_wingwall | Số lượng tường cánh | Number | optional | dumpSpecs |
| material_wingwall_id | Vật liệu tường cánh | Text | optional | dumpSpecs |
| pavement_* / number_lighting / number_signboard / number_barrier | — | — | **OFF** default | fill thấp · Design/schema có thể bật |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump UNDERPASS không có generic |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

### 5c. Form sections (reuse — **cấm** fork)

#### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix **`CC-`** |
| type | Loại tài sản | `SearchInput` | * | lock `UNDERPASS` khi create từ tile `t06` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · sample hay trống |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

#### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / tencongchui | Tên cống / hào kỹ thuật | `Text` | | SSOT dump `tencongchui` · **GAP-UP-NAME-01** · trống OK |
| name_underpass | Tên đường chui (nếu có) | `Text` | | dump · fallback name khi tencongchui trống |

#### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| culvert_type_id | Loại cống | `Dropdown` | * | LOOKUP_STATIC dump (Cống chui dân sinh / …) · **GAP-UP-LOOKUP-01** |
| construction_id | Thi công: Đúc sẵn / Đổ tại chỗ / Khác | `Dropdown` | | LOOKUP_STATIC dump |
| weight | Tải trọng | `Number` | | |
| number | Số ngăn | `Number` | | |
| width | Chiều rộng (m) | `Number` | | khẩu độ |
| height | Chiều cao (m) | `Number` | | khẩu độ |
| crossing_length_culvert | Chiều dài thân cống (m) | `Number` | | |
| structure_type_id | Loại kết cấu | `Dropdown` | | LOOKUP_STATIC dump (Bê tông cốt thép…) |
| number_wingwall | Số lượng tường cánh (2 cánh mỗi đầu) / Đầu cống | `Number` | | |
| material_wingwall_id | Vật liệu tường cánh | `Dropdown` / `Text` | | LOOKUP_STATIC nếu SA seed |
| pavement_type_inside_underpass_id | Loại mặt đường trong hầm chui | `Dropdown` | | hay trống · form vẫn editable |
| area_pavement_inside_underpass | Diện tích mặt đường trong | `Number` | | hay trống |
| number_lighting | Số đèn chiếu sáng | `Number` | | hay trống |
| number_signboard | Số biển báo | `Number` | | hay trống |
| number_barrier | Số rào chắn | `Number` | | hay trống |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic cho UNDERPASS · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

### 5d. Real-data bind summary (copy §A+§B — cấm invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=UNDERPASS&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=UNDERPASS`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

| Dump key | Label VN | Bind |
|----------|----------|------|
| `tencongchui` | Tên cống / hào kỹ thuật | `name` (primary) + dumpSpecs |
| `name_underpass` | Tên đường chui (nếu có) | dumpSpecs · form S-NAME · fallback `name` |
| `culvert_type_id` | Loại cống | dumpSpecs · form S-ATTR |
| `construction_id` | Thi công | dumpSpecs · form S-ATTR |
| `weight` | Tải trọng | dumpSpecs · form S-ATTR |
| `number` | Số ngăn | dumpSpecs · form S-ATTR |
| `width` | Chiều rộng (m) | dumpSpecs · form S-ATTR |
| `height` | Chiều cao (m) | dumpSpecs · form S-ATTR |
| `crossing_length_culvert` | Chiều dài thân cống (m) | dumpSpecs · form S-ATTR |
| `structure_type_id` | Loại kết cấu | dumpSpecs · form S-ATTR |
| `number_wingwall` | Số lượng tường cánh | dumpSpecs · form S-ATTR |
| `material_wingwall_id` | Vật liệu tường cánh | dumpSpecs · form S-ATTR |
| `pavement_type_inside_underpass_id` | Loại mặt đường trong hầm chui | dumpSpecs · form S-ATTR |
| `area_pavement_inside_underpass` | Diện tích mặt đường trong | dumpSpecs · form S-ATTR |
| `number_lighting` | Số đèn chiếu sáng | dumpSpecs · form S-ATTR |
| `number_signboard` | Số biển báo | dumpSpecs · form S-ATTR |
| `number_barrier` | Số rào chắn | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

Cite mẫu row: `underpass_box_523453` → CSV `CC-underpass_box_523453` · `type=UNDERPASS` · `culvert_type_id=Cống chui dân sinh` · `construction_id=Đổ tại chỗ` · `weight=625` · `number=1` · `width=4` · `height=3` · `crossing_length_culvert=36` · `structure_type_id=Bê tông cốt thép` · `number_wingwall=2` · `material_wingwall_id=Bê tông cốt thép` · `tencongchui`/`name_underpass`/`lytrinh` trống · lat/lng `21.506734` / `106.357353`.

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
| **Type profile** | Cột UNDERPASS §5b · **ẩn** type/kmTo/SL/ĐVT/KM_POST/SPILLWAY-only · **ẩn default** low-fill |
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
| S-LIST | Kind **B** catalog A–D+F | filter | `/so-ts?type=UNDERPASS` | search · type/route/km/org filter · Tạo mới · Refresh · config · History | `/agent-dev` |
| S-FORM-CREATE | **Full page** (`CatalogFormShell` 5 cột) | create | `/so-ts/tao-moi` (+ type lock `UNDERPASS`) | Lưu · Hủy · leave-confirm · toolbar voucher | `/agent-dev` |
| S-FORM-EDIT | **Full page** | edit | `/so-ts/sua?id=` | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-VIEW | **Full page** | view | `/so-ts/sua?id=` (view) | readOnly — **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | **Full page** | create (copy) | `/so-ts/tao-moi` | POST new · clear id · keep type `UNDERPASS` · prefix `CC-` | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | soft delete / isActive | `/agent-dev` |
| S-HIST | `LinCatalogHistoryModal` | — | — | stub OK nếu API chưa có · **cấm** invent History path | `/agent-dev` |
| S-ALIAS | Board deep-link | navigate | `/so-ts-underpass` | redirect/equiv → `/so-ts?type=UNDERPASS` (Design optional · mirror spillway) | `/agent-dev` |

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

Thiếu → **GAP-PO-LEAVE-01** / **GAP-UP-LEAVE-01**.

## 9. Open questions — Autopilot chốt (UNCLEAR data-analy)

| ID | Severity | PO decision (autoApprove) |
|----|----------|---------------------------|
| GAP-UP-LOOKUP-01 | P0 | `culvert_type_id` / `construction_id` / `structure_type_id` / `material_wingwall_id` / `pavement_type_inside_underpass_id` = **Dropdown LOOKUP_STATIC** từ distinct dump / init seed SA — **không** SearchInput master P1 (chưa có catalog APPROVED) |
| GAP-UP-NAME-01 | P0 | `name` ← `tencongchui` primary · fallback `name_underpass` · **cấm** IsWeak → `name_of_route_asset` / đoạn tuyến · trống OK |
| GAP-UP-ROUTE-01 | P0 | Live route = **`/so-ts?type=UNDERPASS`** · STATUS alias `/so-ts-underpass` = board link only · Design **optional** redirect alias — **không** fork page · tile `t06` deep-link OK |
| GAP-UP-PREFIX-01 | P0 | Create IdCode align **`CC-`** (cite GIS + import gov-vn) — **cấm** `TS-` fallback UNDERPASS · legacy `HC` giữ row cũ / không generate mới |
| GAP-SOTS-COL-01 / hide low-fill | P0 | Grid **OFF default** `pavement_*` · `number_lighting` · `number_signboard` · `number_barrier` · schema editor có thể bật · form S-ATTR vẫn editable đủ dump |
| GAP-UP-SPEC-01 / flatten | P1 | Giữ attr UNDERPASS trong **`dumpSpecs` P1** · flatten cột DB = **SA migration** (không block Design/Dev form bind dumpSpecs) |
| GAP-SOTS-FORM-01 | P0 | S-ATTR editable fields đủ dump — **cấm** chỉ `<dl>` |
| GAP-SOTS-REUSE-01 | P0 | Reuse S-* sections — **cấm** fork `AssetFormPage` |
| GAP-SOTS-TAB-01 | P0 | **Cấm** tab legacy DRVN |
| GAP-UP-POINT-01 | P0 | Ẩn + không required `kmTo` trên form UNDERPASS · cluster `crossing` → S-LOC-POINT · **cấm** ép `"0"` |
| GAP-UP-LEAVE-01 | P0 | `LeaveConfirmModal` + `useAlert` / Modal |
| GAP-SOTS-API-DOC | P1 | Cite live `api/v1/asset/road-assets` — **cấm** invent `api/v1/so-ts/road-assets` |
| packKind | — | **Confirm `list`** |
| Form pattern | — | **Full page** (≥10 fields · `CatalogFormShell` 5 cột) |
| changeScope | — | **Confirm `new_page`** |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion (autoApprove=ON).

## 10. Out of scope (this pack)

- Fork `AssetFormPage` / copy-paste form 32 loại
- Tab legacy DRVN (Chi tiết / Bảo trì / Tệp / Lịch sử server)
- Kind F map canvas / GIS draw deep-link `cong-chui` (nav optional out)
- Flatten `dumpSpecs` → cột DB (SA migration P2)
- Master catalog culvert_type / construction / structure SearchInput (P2 nếu SA seed)
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
| feature | `so-ts-underpass` |
| phase_from / phase_to | po → design |
| packKind confirm | **`list`** |
| changeScope | `new_page` |
| Kind / surfaces | B catalog A–D+F + **Full page** form S-* sections · type `UNDERPASS` · cluster `crossing` |
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
| peerStdUrl gợi ý | `http://localhost:9301/so-ts` · live filter `…/so-ts?type=UNDERPASS` |
| mfeStdUrl | live `http://localhost:9301/so-ts?type=UNDERPASS` · alias board `…/so-ts-underpass` |
| mfeStdRoute | `/so-ts?type=UNDERPASS` |
| BE | `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` — **cấm** invent ERP / so-ts path |
| Open questions | GAP-UP-LOOKUP-01 Dropdown P1 · name tencongchui/name_underpass · dumpSpecs P1 · flatten → SA · prefix `CC-` · alias redirect optional · hide low-fill default |
| Blockers | none cho Design prototype · Dev wire form S-ATTR + column profile UNDERPASS · Import IsWeak/name fix = BE · dumpSpecLabels FE · Create prefix `CC-` |
| Next | `/agent-design` khi tới lượt · **cấm** start Design trong task PO này |
| e2e | queued `/agent-qa*` only |

**Design MUST:** Kind B A–D · full-page form-surface 5 cột · icons SSOT · type-profile columns UNDERPASS · S-ATTR editable đủ dump · **cấm** tab legacy · **cấm** DEM chrome · **cấm** Modal form hồ sơ lớn · **cấm** mount kmTo / S-LOC-RANGE.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T11:15:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd |
| headerFingerprintPrior | sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa |
| orchestratorSkillVersion | 2026.08.30.01 |
| orchestratorWorkflowVersion | 2026.08.30.01 |
| orchestratorRulesVersion | 2026.08.31.2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.08.30.01 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_7eb8c843` |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=rechecked contentHashPriorDataAnaly=sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd taskId=task_7eb8c843 -->
