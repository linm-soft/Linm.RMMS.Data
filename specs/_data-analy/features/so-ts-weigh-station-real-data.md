# Real-data bind — so-ts-weigh-station (Kind B list + full-page form · `WEIGH_STATION`)

| | |
|---|---|
| feature | `so-ts-weigh-station` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fc7e2abd` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=WEIGH_STATION` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-weigh-station` · live filter `…/so-ts?type=WEIGH_STATION` |
| map | `none` (list pack) · GIS deep-link `tram-can` optional · **cấm** invent map canvas |
| contentHash | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprint | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T05:55:00.000Z` |

## § Delta Current vs New (`new_page` · `task_fc7e2abd`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `WEIGH_STATION` hide `kmTo`/SL/ĐVT/`type` · show tên trạm · loại TB cân · tải trục max · ĐVQL · DT nhà/khu lắp · camera/đèn |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump WEIGH |
| Name | map `station_name` khi rebuild | `name` ← `station_name` · **GAP-WEIGH-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-weigh-station` | DEFER Design (**GAP-WEIGH-ROUTE-01**) |
| IdCode prefix | GIS `TFP` trùng TOLL | **GAP-WEIGH-PREFIX-01** PO/SA |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-weigh-station.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `t27` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 WEIGH_STATION | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.weight_station.*.csv` · set `gov-vn` · COVERAGE **24** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=WEIGH_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `weight_station` · type seed `WEIGH_STATION` · «Trạm cân» | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `tram-can` ↔ `WEIGH_STATION` · IdCode live prefix `TFP` | — | deep-link optional · **GAP-WEIGH-PREFIX-01** |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile WEIGH |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys WEIGH |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | `station_name` · `pavement_type_id` only · **GAP-WEIGH-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t27` → `WEIGH_STATION` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `WEIGH_STATION` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `TFP-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row import `type=WEIGH_STATION` · `name` ← dump `station_name` · `route`/`routeNamed`/`routeSegment` từ 3 tầng tuyến · `kmFrom` từ `lytrinh-kmlytrinh` · lat/lng từ `from_coordinatex/y` · source dump `weight_station:*` · attr trong `dumpSpecs` theo §4 · count cite **24**.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=WEIGH_STATION` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form WEIGH |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `TFP-` | yes |
| name | Tên trạm | Text | — | detail / list | `name` ← `station_name` | yes · **GAP-WEIGH-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| station_name | Tên trạm (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| site_area_installed_equipment | DT khu lắp TB (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| management_unit_id | Đơn vị quản lý | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-WEIGH-LOOKUP-01** |
| building_area | DT nhà (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| includes_load_reduction_area | Có khu vực giảm tải | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| light | Đèn chiếu sáng | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| camera_observation | Camera giám sát | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| equipment_measurement_vehicle_size | TB đo kích thước xe | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| type_weighting_equipment_id | Loại thiết bị cân | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-WEIGH-LOOKUP-01** |
| origin_manufacturing | Xuất xứ | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| year_manufacturing | Năm sản xuất | Number / Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| max_axle_load_limit | Tải trọng trục tối đa | Number / Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| approval_code_number | Số hiệu phê duyệt | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| inspection_date_weight_station | Ngày kiểm định | Date | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| length_approaching_road | Chiều dài đường vào (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width_approaching_road | Chiều rộng đường vào (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-WEIGH-LOOKUP-01** |
| location | Vị trí | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap · S-LOC |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid WEIGH |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid WEIGH |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=WEIGH_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=WEIGH_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (WEIGH_STATION)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `station_name` | Tên trạm | `name` (primary) + dumpSpecs |
| `site_area_installed_equipment` | DT khu vực lắp thiết bị (m²) | dumpSpecs · form S-ATTR |
| `management_unit_id` | Đơn vị quản lý | dumpSpecs · form S-ATTR |
| `building_area` | Diện tích nhà (m²) | dumpSpecs · form S-ATTR |
| `includes_load_reduction_area` | Có khu vực giảm tải | dumpSpecs · form S-ATTR |
| `light` | Đèn chiếu sáng | dumpSpecs · form S-ATTR |
| `camera_observation` | Camera giám sát | dumpSpecs · form S-ATTR |
| `equipment_measurement_vehicle_size` | Thiết bị đo kích thước xe | dumpSpecs · form S-ATTR |
| `type_weighting_equipment_id` | Loại thiết bị cân | dumpSpecs · form S-ATTR |
| `origin_manufacturing` | Xuất xứ / nơi sản xuất | dumpSpecs · form S-ATTR |
| `year_manufacturing` | Năm sản xuất | dumpSpecs · form S-ATTR |
| `max_axle_load_limit` | Tải trọng trục tối đa | dumpSpecs · form S-ATTR |
| `approval_code_number` | Số hiệu phê duyệt | dumpSpecs · form S-ATTR |
| `inspection_date_weight_station` | Ngày kiểm định trạm cân | dumpSpecs · form S-ATTR |
| `length_approaching_road` | Chiều dài đường vào (m) | dumpSpecs · form S-ATTR |
| `width_approaching_road` | Chiều rộng đường vào (m) | dumpSpecs · form S-ATTR |
| `pavement_type_id` | Loại mặt đường | dumpSpecs · form S-ATTR |
| `location` | Vị trí | dumpSpecs · S-LOC / S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `WEIGH_STATION` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid WEIGH |
| LOOKUP_STATIC management / equipment type / pavement / boolean flags (**đề xuất**) | dump distinct / seed SA | **GAP-WEIGH-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `tram-can` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias route + hide-empty + prefix TFP · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · dumpSpecs→flat nếu cần · prefix IdCode |
| TL/Dev | type profile WEIGH · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=WEIGH_STATION` · CRUD live · leave-confirm · count **24** |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprint | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| status | `done` |
| analyzedAt | `2026-09-01T05:55:00.000Z` |
