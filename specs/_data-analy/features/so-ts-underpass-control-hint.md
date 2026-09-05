# Data-analy — controlHint — so-ts-underpass (Kind B list + full-page form · type `UNDERPASS`)

| Field | Value |
|-------|-------|
| feature | `so-ts-underpass` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo · autoApprove queue) |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| analyzedAt | `2026-09-01T11:10:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_underpass_box` cite CTX) |
| taskId | `task_3deb2a56` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-underpass-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=UNDERPASS` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-underpass` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=UNDERPASS` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` · mẫu `docs/img/gov-mau-tai-san/12-tbl_underpass_box-list.png` · `12-tbl_underpass_box-detail.png` · CSV ~490 import gov-vn |
| clusterUi | `crossing` · ô KCHT `t06` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `crossing` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-underpass.md` | `e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/12-tbl_underpass_box-list.png` | loại cống · tuyến · tên cống · lý trình · tên đường chui · thi công · tải · số ngăn · dài · kết cấu |
| Mẫu detail | `docs/img/gov-mau-tai-san/12-tbl_underpass_box-detail.png` | tab Thông tin chung · vị trí điểm · khẩu độ · tường cánh |
| Dump CSV | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_underpass_box.2026.8.23.14.24.csv` | header eng + VN · cite sample `underpass_box_523453` |
| Import set | `data-import/.../gov/sets/gov-vn/road_assets*.csv` | ~490 `UNDERPASS` · prefix `CC-` |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `UNDERPASS` · «Hầm chui dân sinh» · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `cong-chui` ↔ `UNDERPASS` · prefix `CC` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST/SPILLWAY — **thiếu** UNDERPASS |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR UNDERPASS **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_underpass` — **thiếu** key attr còn lại |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (UNDERPASS dump attr + 3 tầng tuyến + điểm):

`tencongchui|culvert_type_id|name_underpass|construction_id|weight|number|width|height|crossing_length_culvert|structure_type_id|number_wingwall|material_wingwall_id|pavement_type_inside_underpass_id|area_pavement_inside_underpass|number_lighting|number_signboard|number_barrier|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_3deb2a56`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `UNDERPASS` (crossing) + fill L3 analy stubs (không xóa parent asset / KM_POST / SPILLWAY artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY) | Profile `UNDERPASS`: loại cống · 3 tầng tuyến · tên cống · lý trình · tên đường chui · thi công · tải · số ngăn · rộng/cao/dài · kết cấu · tường cánh · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · **ẩn** cột KM_POST/SPILLWAY-only · ẩn fill thấp (đèn/biển/rào/mặt đường trong) theo Design | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY) | Field editable đủ dump §4 UNDERPASS = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-UP-NAME-01 | Rebuild: nhiều row `tencongchui`/`name_underpass` trống → fallback `route`/`QL.*` | `name` ← `tencongchui` rồi `name_underpass` khi có · **cấm** IsWeak → đoạn tuyến · trống OK (không invent) | import + form |
| GAP-UP-SPEC-01 | FE `dumpSpecLabels` chỉ `name_underpass` | Label VN khớp header dump / mẫu · form Input/Select đủ cột | FE / form |
| GAP-UP-POINT-01 | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | Crossing point: **không** bắt buộc `kmTo` · **ẩn** khi `type=UNDERPASS` · `lytrinh` hay trống — **cấm** ép `"0"` | form |
| GAP-UP-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-underpass` · index chưa Navigate | Live `/so-ts?type=UNDERPASS` · alias route **DEFER** Design (tile `t06` deep-link OK · mirror `so-ts-spillway`) | shell |
| GAP-UP-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-UP-LOOKUP-01 | `culvert_type_id` · `construction_id` · `structure_type_id` · `material_wingwall_id` · `pavement_type_inside_underpass_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-UP-PREFIX-01 | Import live `CC-` · GIS `CC` · Create BE fallback `TS-` · Csdl legacy `HC` | Align IdCode Create → **`CC-`** (cite GIS + import set) | BE |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `cong-chui` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Hầm chui dân sinh» khi `type=UNDERPASS` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `UNDERPASS` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột UNDERPASS** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `cong-chui` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cống · loại · thi công · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `UNDERPASS` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=UNDERPASS`)

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
| pavement_* / number_lighting / number_signboard / number_barrier | — | — | **OFF** default | fill thấp · Design có thể bật schema |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump UNDERPASS không có generic |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CC-` |
| type | Loại tài sản | `SearchInput` | * | lock `UNDERPASS` khi create từ tile `t06` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` · catalog KHAC |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` · catalog KHAC |

### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · sample hay trống |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / tencongchui | Tên cống / hào kỹ thuật | `Text` | | SSOT dump `tencongchui` · **GAP-UP-NAME-01** · trống OK |
| name_underpass | Tên đường chui (nếu có) | `Text` | | dump · fallback name khi tencongchui trống |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

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
| pavement_type_inside_underpass_id | Loại mặt đường trong hầm chui | `Dropdown` | | hay trống |
| area_pavement_inside_underpass | Diện tích mặt đường trong | `Number` | | hay trống |
| number_lighting | Số đèn chiếu sáng | `Number` | | hay trống |
| number_signboard | Số biển báo | `Number` | | hay trống |
| number_barrier | Số rào chắn | `Number` | | hay trống |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit generic cho UNDERPASS · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `culvert_type_id` / `construction_id` / `structure_type_id` / `material_wingwall_id` / `pavement_type_inside_underpass_id`?
2. Alias route `/so-ts-underpass` → Navigate `?type=UNDERPASS` (như spillway) — Design chốt?
3. Grid: ẩn cột fill thấp (`pavement_*` · `number_lighting` · `number_signboard` · `number_barrier` · `tencongchui` khi empty) theo GAP-SOTS-COL-01 hay giữ mẫu list?
4. Align Create IdCode `CC-` (**GAP-UP-PREFIX-01**) vs legacy Csdl `HC`?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| status | `done` |
| analyzedAt | `2026-09-01T11:10:00.000Z` |
