# Real-data bind — so-ts-bus-stop (Kind B list + full-page form · `BUS_STOP`)

| | |
|---|---|
| feature | `so-ts-bus-stop` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7552f36d` |
| typeCode | `BUS_STOP` |
| dump | `tbl_bus_stops` |
| prefix | **live import** `DX-` · BFF `web-bff/api/v1/asset/road-assets` · **GAP-DD-PREFIX-01** (`DefaultCodePrefix` hôm nay `TS-`) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=BUS_STOP` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-bus-stop` · live filter `…/so-ts?type=BUS_STOP` |
| map | `none` (list pack) · GIS deep-link `diem-bus` optional · **cấm** invent map canvas |
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprint | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T07:33:54.890Z` |

## § Delta Current vs New (`new_page` · `task_7552f36d`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `BUS_STOP` hide `kmTo`/SL/ĐVT/`type` · show tên điểm · loại · ĐV QL · bay/ghế/nhà chờ · mặt cắt |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump BUS_STOP |
| Name | thường = route khi thiếu ResolveBusStop | `name` ← `station_name` · **GAP-DD-NAME-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`DX-`** · **GAP-DD-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-bus-stop` | DEFER Design (**GAP-DD-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-bus-stop.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `stop` · ô `t13` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 BUS_STOP | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_bus_stops.2026.8.23.14.8.csv` · set `gov-vn` **5367** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=BUS_STOP&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_bus_stops` · type seed `BUS_STOP` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `diem-bus` ↔ `BUS_STOP` · icon `BUS` · IdCode import prefix `DX` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile BUS_STOP |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys BUS_STOP |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | `station_name` + `type_work_id` · **GAP-DD-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t13` → `BUS_STOP` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `BUS_STOP` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `DX-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `bus_stops_523797` · `type_work_id=Điểm dừng đỗ xe buýt` · `management_id=Sở GTVT` · `route=QL.1` · `routeNamed=QL.1 - Lạng Sơn` · `routeSegment=Km 1 + 800 - Km 113 + 985` · lat/lng `21.95` / `106.7` · `stop_bay=False` · `bus_shelter=False` · source `tbl_bus_stops:bus_stops_523797`.  
Peer name fill: L67 `station_name=Tuyến số: 06` · `bus_shelter=True` · `type=BUS_STOP`.  
Import set cite: `DX-bus_stops_523796` · `name=QL.1` (weak — **GAP-DD-NAME-01**) · `type=BUS_STOP` · status `tot`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=BUS_STOP` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form BUS_STOP |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `DX-` | yes |
| name | Tên điểm | Text | — | detail / list | `name` ← `station_name` | yes · **GAP-DD-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| station_name | Tên điểm (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| type_work_id | Loại tài sản | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| management_id | Đơn vị QL sử dụng | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| stop_bay | Có làn đậu | Dropdown bool | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| pavement_type_bus_stop_bay_id | Kết cấu mặt đường làn đậu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| length_bus_stop_bay | Chiều dài làn đậu (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| width_bus_stop_bay | Chiều rộng làn đậu (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| seated_waiting_bus | Có ghế chờ | Dropdown bool | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| bus_shelter | Có nhà chờ | Dropdown bool | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| structure_bus_shelter_id | Kết cấu nhà chờ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| material_road_refuge | Kết cấu mặt đường nơi chờ | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| length_road_refuge | Chiều dài nơi chờ (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width_road_refuge | Chiều rộng nơi chờ (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| max_slope | Giới hạn nơi chờ / max slope | Number / Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| vitri | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| escape_route_structure | Kết cấu đường lánh nạn | Text / Dropdown | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DD-SPEC-01** |
| escape_route_length | Chiều dài đường lánh nạn (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| escape_route_width | Chiều rộng đường lánh nạn (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid BUS_STOP |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid BUS_STOP |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=BUS_STOP&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=BUS_STOP`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (BUS_STOP)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `station_name` | Tên điểm | `name` (primary) + dumpSpecs |
| `type_work_id` | Loại tài sản | dumpSpecs · form S-ATTR |
| `management_id` | Đơn vị QL sử dụng | dumpSpecs · form S-ATTR |
| `stop_bay` | Có làn đậu xe buýt/xe khách | dumpSpecs · form S-ATTR |
| `pavement_type_bus_stop_bay_id` | Kết cấu mặt đường làn đậu | dumpSpecs · form S-ATTR |
| `length_bus_stop_bay` | Chiều dài làn đậu (m) | dumpSpecs · form S-ATTR |
| `width_bus_stop_bay` | Chiều rộng làn đậu (m) | dumpSpecs · form S-ATTR |
| `seated_waiting_bus` | Có ghế chờ xe buýt | dumpSpecs · form S-ATTR |
| `bus_shelter` | Có nhà chờ xe buýt | dumpSpecs · form S-ATTR |
| `structure_bus_shelter_id` | Kết cấu nhà chờ | dumpSpecs · form S-ATTR |
| `material_road_refuge` | Kết cấu mặt đường nơi chờ | dumpSpecs · form S-ATTR |
| `length_road_refuge` | Chiều dài nơi chờ (m) | dumpSpecs · form S-ATTR |
| `width_road_refuge` | Chiều rộng nơi chờ (m) | dumpSpecs · form S-ATTR |
| `max_slope` | Giới hạn nơi chờ / max slope | dumpSpecs · form S-ATTR |
| `vitri` | Vị trí mặt cắt ngang đường | dumpSpecs · S-LOC / S-ATTR |
| `escape_route_structure` | Kết cấu đường lánh nạn | dumpSpecs · form S-ATTR |
| `escape_route_length` | Chiều dài đường lánh nạn (m) | dumpSpecs · form S-ATTR |
| `escape_route_width` | Chiều rộng đường lánh nạn (m) | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `BUS_STOP` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid BUS_STOP |
| LOOKUP_STATIC type_work / management / pavement / shelter / vitri / bool (**đề xuất**) | dump distinct / seed SA | **GAP-DD-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `diem-bus` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias route + hide-empty + prefix `DX-` · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · `DefaultCodePrefix` `DX-` · dumpSpecs→flat nếu cần migration |
| TL/Dev | type profile BUS_STOP · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=BUS_STOP` · CRUD live · leave-confirm |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprint | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| status | `done` |
| analyzedAt | `2026-09-01T07:33:54.890Z` |
