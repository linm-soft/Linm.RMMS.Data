# Data-analy — controlHint — so-ts-weigh-station (Kind B list + full-page form · type `WEIGH_STATION`)

| Field | Value |
|-------|-------|
| feature | `so-ts-weigh-station` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` (first fill stubs · CTX+demo · queue `roleOnly=data_analy`) |
| contentHash | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprint | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| analyzedAt | `2026-09-01T05:55:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `weight_station` cite CTX) |
| taskId | `task_fc7e2abd` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-weigh-station-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=WEIGH_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-weigh-station` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=WEIGH_STATION` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` · mẫu `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-list.png` · `27-moc_dbvn.weight_station-detail.png` · CSV gov-vn **24** row · IdCode prefix live **`TFP`** (GIS map · cùng prefix TOLL — **GAP-WEIGH-PREFIX-01**) |
| clusterUi | `station` · ô KCHT **`t27`** · drill `WEIGH_STATION` · label tile «Trạm kiểm soát trọng tải xe» |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên trạm · 3 tầng tuyến · lý trình · loại thiết bị cân · tải trục max · ĐVQL · DT nhà / khu lắp · camera / đèn · đường vào (**GAP-SOTS-COL-01** hide-empty khi fill 0).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-weigh-station.md` | `ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `station` · ô `t27` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §3 · §4 WEIGH_STATION | dump columns |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-list.png` | tên trạm · tuyến · lý trình · thiết bị · tải · ĐVQL |
| Mẫu detail | `docs/img/gov-mau-tai-san/27-moc_dbvn.weight_station-detail.png` | tab Thông tin chung · vị trí điểm · attr trạm cân |
| Dump CSV | `moc_dbvn.weight_station.*.csv` | header eng · cite import handler |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` · COVERAGE-KCHT-40 | **24** `WEIGH_STATION` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `WEIGH_STATION` · «Trạm cân» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `tram-can` ↔ `WEIGH_STATION` · IdCode prefix live `TFP` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `WEIGH_STATION` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR WEIGH **chưa** editable đủ |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `station_name` · `pavement_type_id` · **thiếu** hầu hết §4 WEIGH (`site_area_installed_equipment` · `management_unit_id` · `building_area` · `includes_load_reduction_area` · `light` · `camera_observation` · `equipment_measurement_vehicle_size` · `type_weighting_equipment_id` · `origin_manufacturing` · `year_manufacturing` · `max_axle_load_limit` · `approval_code_number` · `inspection_date_weight_station` · `length_approaching_road` · `width_approaching_road` · `location`) |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t27` · drill `WEIGH_STATION` · «Trạm kiểm soát trọng tải xe» · icon `NH` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · slug peer `so-ts-toll` / `so-ts-bus-station` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (WEIGH dump attr + 3 tầng tuyến + điểm):

`station_name|site_area_installed_equipment|management_unit_id|building_area|includes_load_reduction_area|light|camera_observation|equipment_measurement_vehicle_size|type_weighting_equipment_id|origin_manufacturing|year_manufacturing|max_axle_load_limit|approval_code_number|inspection_date_weight_station|length_approaching_road|width_approaching_road|pavement_type_id|location|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_fc7e2abd`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `WEIGH_STATION` (station) + fill L3 analy stubs (không xóa parent / peer station artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile peer station) | Profile `WEIGH_STATION`: tên trạm · 3 tầng tuyến · lý trình · loại TB cân · tải trục max · ĐVQL · DT nhà · DT khu lắp · camera · đèn · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Field editable đủ dump §4 WEIGH = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-WEIGH-NAME-01 | Rebuild: `name` có thể lệch dump | `name` ← `station_name` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-WEIGH-SPEC-01 | FE labels thiếu hầu hết cột §4 WEIGH | Label VN khớp dump/mẫu · form Input/Select/Number/Date đủ cột §4 | FE / form |
| GAP-WEIGH-POINT-01 | Form hiện `kmTo` với type chưa profile | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=WEIGH_STATION` · **cấm** ép `"0"` | form |
| GAP-WEIGH-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-weigh-station` · index chưa Navigate | Live `/so-ts?type=WEIGH_STATION` · alias route **DEFER** Design (tile `t27` deep-link OK) | shell |
| GAP-WEIGH-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-WEIGH-LOOKUP-01 | `management_unit_id` · `type_weighting_equipment_id` · `pavement_type_id` · bool `includes_load_reduction_area` / `light` / `camera_observation` / `equipment_measurement_vehicle_size` = text dump | controlHint **Dropdown** LOOKUP_STATIC / boolean Select · SearchInput nếu SA seed — PO chốt | form |
| GAP-WEIGH-PREFIX-01 | GIS IdCode prefix `TFP` **trùng** TOLL | PO/SA: giữ `TFP` live **hoặc** tách prefix trạm cân — **cấm** invent prefix FE | BE / import |
| GAP-WEIGH-TILE-01 | KCHT `t27` drill có · list chưa profile | Tile count = import **24** · deep-link filter type OK | KCHT |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `tram-can` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Trạm kiểm soát tải» khi `type=WEIGH_STATION` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `WEIGH_STATION` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột WEIGH_STATION** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `tram-can` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `WEIGH_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=WEIGH_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_weighting_equipment_id | Loại thiết bị cân | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| max_axle_load_limit | Tải trọng trục tối đa | Number / Text | ON · hide-empty | dumpSpecs |
| management_unit_id | Đơn vị quản lý | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| building_area | DT nhà (m²) | Number | ON · hide-empty | dumpSpecs |
| site_area_installed_equipment | DT khu lắp TB (m²) | Number | optional / hide-empty | dumpSpecs |
| camera_observation | Camera giám sát | Text / boolean | optional / hide-empty | dumpSpecs |
| light | Đèn chiếu sáng | Text / boolean | optional / hide-empty | dumpSpecs |
| length_approaching_road | Chiều dài đường vào (m) | Number | **OFF** default | hide-empty · form ON |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `WEIGH_STATION` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix live `TFP-` (**GAP-WEIGH-PREFIX-01**) |
| type | Loại tài sản | `SearchInput` | * | lock `WEIGH_STATION` khi create từ tile `t27` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` |

### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| location | Vị trí | `Text` / SearchInput | | dump `location` · dumpSpecs |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / station_name | Tên trạm | `Text` | * | SSOT dump `station_name` · label «Tên trạm» · **GAP-WEIGH-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| site_area_installed_equipment | DT khu vực lắp thiết bị (m²) | `Number` | | dump |
| management_unit_id | Đơn vị quản lý | `Dropdown` / `Text` | | **GAP-WEIGH-LOOKUP-01** |
| building_area | Diện tích nhà (m²) | `Number` | | dump |
| includes_load_reduction_area | Có khu vực giảm tải | `Dropdown` boolean | | **GAP-WEIGH-LOOKUP-01** |
| light | Đèn chiếu sáng | `Dropdown` boolean | | **GAP-WEIGH-LOOKUP-01** |
| camera_observation | Camera giám sát | `Dropdown` boolean | | **GAP-WEIGH-LOOKUP-01** |
| equipment_measurement_vehicle_size | Thiết bị đo kích thước xe | `Dropdown` boolean / Text | | dump |
| type_weighting_equipment_id | Loại thiết bị cân | `Dropdown` | | **GAP-WEIGH-LOOKUP-01** |
| origin_manufacturing | Xuất xứ / nơi sản xuất | `Text` | | dump |
| year_manufacturing | Năm sản xuất | `Number` / `Text` | | dump |
| max_axle_load_limit | Tải trọng trục tối đa | `Number` / `Text` | | dump |
| approval_code_number | Số hiệu phê duyệt | `Text` | | dump |
| inspection_date_weight_station | Ngày kiểm định trạm cân | `Date` local | | `utcToLocalInputValue` |
| length_approaching_road | Chiều dài đường vào (m) | `Number` | | dump |
| width_approaching_road | Chiều rộng đường vào (m) | `Number` | | dump |
| pavement_type_id | Loại mặt đường | `Dropdown` | | **GAP-WEIGH-LOOKUP-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `management_unit_id` / `type_weighting_equipment_id` / `pavement_type_id`?
2. Boolean dump (`includes_load_reduction_area` · `light` · `camera_observation` · `equipment_measurement_vehicle_size`) — Select Có/Không hay checkbox kit?
3. Alias route `/so-ts-weigh-station` → Navigate `?type=WEIGH_STATION` — Design chốt?
4. Prefix IdCode `TFP` trùng TOLL — giữ live hay tách prefix SA?
5. Grid: cột TB cân / tải max / ĐVQL / DT — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprint | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| status | `done` |
| analyzedAt | `2026-09-01T05:55:00.000Z` |
