# Data-analy — controlHint — so-ts-spillway (Kind B list + full-page form · type `SPILLWAY`)

| Field | Value |
|-------|-------|
| feature | `so-ts-spillway` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo · autoApprove) |
| contentHash | `sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` |
| headerFingerprint | `sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172` |
| analyzedAt | `2026-09-01T03:50:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_spill_way` cite CTX) |
| taskId | `task_ba2de910` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/so-ts-spillway-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=SPILLWAY` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-spillway` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=SPILLWAY` |
| typeCode | `SPILLWAY` |
| dump | `tbl_spill_way` · mẫu `docs/img/gov-mau-tai-san/34-moc_dbvn.tbl_spill_way-list.png` · `34-moc_dbvn.tbl_spill_way-detail.png` · CSV 128 |
| clusterUi | `crossing` · ô KCHT `t16` |
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
| Context | `docs/context/features/so-ts-spillway.md` | `508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/34-moc_dbvn.tbl_spill_way-list.png` | cột loại + sông + kích thước + kết cấu + tải |
| Mẫu detail | `docs/img/gov-mau-tai-san/34-moc_dbvn.tbl_spill_way-detail.png` | tab Thông tin chung · vị trí điểm · attr |
| Dump CSV | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_spill_way.2026.8.23.15.17.csv` | 128 rows · cite sample `spill_way_309929` |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `SPILLWAY` · dumpSpecs |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST tồn tại — **thiếu** SPILLWAY |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR SPILLWAY **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_work` · `name_river` — **thiếu** key spillway còn lại |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (SPILLWAY dump attr + 3 tầng tuyến + điểm):

`spillway_type_id|name_work|name_river|width_spillway|length_spillway|no_span|span_length|structure_type_spillway_id|with_water_level_measuring_pole|location_where_water_level_id|floods_usually_duration_year|average_number_flood_day|average_number_flooded_day|operational_load|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_ba2de910`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `SPILLWAY` (crossing) + fill L3 analy stubs (không xóa parent asset / KM_POST artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile chỉ `KM_POST`) | Profile `SPILLWAY`: tên công trình · 3 tầng tuyến · lý trình · loại CT · sông · rộng/dài · nhịp · kết cấu · tải · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT (dump không có) · **ẩn** cột KM_POST-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST) | Field editable đủ dump §4 SPILLWAY = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-SPW-NAME-01 | `name` ← rebuild `name_work` (sample «Đường tràn») | `name` ← `name_work` · hiển thị phụ `name_river` khi có — **cấm** IsWeak → đoạn tuyến | import + form |
| GAP-SPW-SPEC-01 | FE `dumpSpecLabels` thiếu key spillway | Label VN khớp header dump · form Input/Select đủ cột | FE / form |
| GAP-SPW-POINT-01 | Form hiện `kmTo` với mọi type ≠ KM_POST | Crossing point: **không** bắt buộc `kmTo` · **ẩn** khi `type=SPILLWAY` | form |
| GAP-SPW-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-spillway` | Live `/so-ts?type=SPILLWAY` · alias route **DEFER** Design (tile `t16` deep-link OK) | shell |
| GAP-SPW-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-SPW-LOOKUP-01 | `spillway_type_id` · `structure_type_spillway_id` · boolean thủy chí = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Đường tràn…» khi `type=SPILLWAY` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `SPILLWAY` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột SPILLWAY** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên công trình · sông · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `SPILLWAY` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=SPILLWAY`)

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

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `TR-` |
| type | Loại tài sản | `SearchInput` | * | lock `SPILLWAY` khi create từ tile `t16` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | * | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_work | Tên công trình | `Text` | * | SSOT dump `name_work` · label «Tên công trình» |
| name_river | Tên sông/ suối | `Text` | | dump · có thể nằm S-ATTR nếu Design gộp |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

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

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit cho SPILLWAY · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST-only.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `spillway_type_id` / `structure_type_spillway_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | Hiển thị `name` = chỉ `name_work` hay ghép `name_work · name_river`? | `name_work` primary · sông cột/field riêng |
| 3 | Alias route `/so-ts-spillway` vs chỉ `?type=SPILLWAY`? | Giữ filter URL · STATUS alias = board link |
| 4 | Flatten dump attrs ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` |
| headerFingerprint | `sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172` |
| analyzedAt | `2026-09-01T03:50:00.000Z` |
| taskId | `task_ba2de910` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f -->
