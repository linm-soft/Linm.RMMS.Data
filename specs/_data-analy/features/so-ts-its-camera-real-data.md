# Real-data bind — so-ts-its-camera (Kind B list + full-page form · `ITS_CAMERA`)

| | |
|---|---|
| feature | `so-ts-its-camera` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b2b521dc` |
| typeCode | `ITS_CAMERA` |
| dump | `tbl_its` |
| prefix | **live import** `IT-` · BFF `web-bff/api/v1/asset/road-assets` · **GAP-ITS-PREFIX-01** (`DefaultCodePrefix` hôm nay `TS-`) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=ITS_CAMERA` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-its-camera` · live filter `…/so-ts?type=ITS_CAMERA` |
| map | `none` (list pack) · GIS deep-link `camera` optional · **cấm** invent map canvas · **cấm** Camera MFE CRUD |
| contentHash | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprint | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T20:55:00.000Z` |

## § Delta Current vs New (`new_page` · `task_b2b521dc`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung | Type profile `ITS_CAMERA` hide `kmTo`/SL/ĐVT/`type` · show phòng ITS · thiết bị VMS/màn hình/máy chủ/WIM · cống/cáp · trụ · TTĐH |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump ITS §4 + `tn_*` |
| Name | thường = route khi import | `location_name_its_ccroom` · **GAP-ITS-NAME-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`IT-`** · **GAP-ITS-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-its-camera` | DEFER Design (**GAP-ITS-ROUTE-01**) |
| Dump keys | chưa cite header CSV | SA map `tn_*` từ `moc_dbvn.tbl_its.*.csv` (**GAP-ITS-DUMP-KEY-01**) |
| camera-connect | peer feature camera IP | **tách scope** · **GAP-ITS-CAM-01** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-its-camera.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `ops` · ô `t19` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §4 ITS_CAMERA | — | dump columns · `tn_*` |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_its.2026.8.23.15.11.csv` · set `gov-vn` **9** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=ITS_CAMERA&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_its` · type seed `ITS_CAMERA` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `camera` ↔ `ITS_CAMERA` · icon `CAM` · IdCode import prefix `IT-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile ITS_CAMERA |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys ITS |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | **GAP-ITS-SPEC-01** toàn bộ ITS |
| `mfe` · tile | `kchtTileConfig.ts` `t19` → `ITS_CAMERA` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `ITS_CAMERA` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `IT-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row import `IT-its_779825` · `route=QL.1` · `routeNamed=QL.1-TP.HUE(BOT)` · `routeSegment=Km 0 + 000 - Km 13 + 377` · `name=QL.1` (weak — **GAP-ITS-NAME-01**) · lat/lng `12.88` / `109.37` · source `tbl_its:its_779825`.  
Import set cite: **9** rows `type=ITS_CAMERA` · prefix `IT-` · status `tot`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=ITS_CAMERA` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form ITS_CAMERA |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên phòng ITS | Text | — | detail / list | `name` | yes · **GAP-ITS-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| type_management_center_id | Loại TTĐH | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| location_name_its_ccroom | Tên phòng điều hành | Text | — | parse `dumpSpecs` / `name` | dumpSpecs / flat / `name` | gap · **GAP-ITS-NAME-01** |
| location_its_central_control_id | Vị trí phòng ITS | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-ITS-LOOKUP-01** |
| tn_cctv_monitoring | CCTV giám sát | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| tn_traffic_event_detection | Phát hiện sự kiện | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_vms_interface | Giao diện VMS | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_traffic_analysis | Phân tích giao thông | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_screen_controller | Bộ điều khiển màn hình | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_traffic_analysis_processor | Bộ xử lý phân tích | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_incident_data_management | Quản lý dữ liệu sự cố | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_data_server | Máy chủ dữ liệu | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_wim_high_speed | WIM tốc độ cao | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_cable_duct_length | Chiều dài cống cáp | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_fiber_optic_length | Chiều dài cáp quang | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tn_its_pole | Trụ đỡ ITS | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid ITS_CAMERA |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid ITS_CAMERA |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=ITS_CAMERA&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=ITS_CAMERA`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (ITS_CAMERA)

| Dump key | Label VN (mẫu) | Bind |
|----------|----------------|------|
| `type_management_center_id` | Loại trung tâm điều hành | dumpSpecs · form S-ATTR |
| `location_name_its_ccroom` | Tên vị trí phòng điều hành ITS | dumpSpecs · S-NAME · `name` |
| `location_its_central_control_id` | Vị trí phòng điều hành | dumpSpecs · form S-ATTR |
| `tn_cctv_monitoring` | Tổng số thiết bị giám sát CCTV | dumpSpecs · S-ATTR |
| `tn_traffic_event_detection` | Tổng số thiết bị phát hiện sự kiện | dumpSpecs · S-ATTR |
| `tn_vms_interface` | Tổng số thiết bị giao diện VMS | dumpSpecs · S-ATTR |
| `tn_traffic_analysis` | Tổng số thiết bị phân tích giao thông | dumpSpecs · S-ATTR |
| `tn_screen_controller` | Tổng số bộ điều khiển màn hình | dumpSpecs · S-ATTR |
| `tn_traffic_analysis_processor` | Tổng số bộ xử lý phân tích | dumpSpecs · S-ATTR |
| `tn_incident_data_management` | Tổng số hệ thống quản lý dữ liệu sự cố | dumpSpecs · S-ATTR |
| `tn_data_server` | Tổng số máy chủ dữ liệu | dumpSpecs · S-ATTR |
| `tn_wim_high_speed` | Tổng số bộ kiểm tra tải trọng tốc độ cao | dumpSpecs · S-ATTR |
| `tn_cable_duct_length` | Tổng chiều dài hệ thống cống cáp | dumpSpecs · S-ATTR |
| `tn_fiber_optic_length` | Tổng chiều dài cáp quang | dumpSpecs · S-ATTR |
| `tn_its_pole` | Tổng số trụ đỡ ITS | dumpSpecs · S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name` duy nhất) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

> Key `tn_*` = đề xuất theo mẫu + SSOT §4. SA cite header CSV chính xác (**GAP-ITS-DUMP-KEY-01**).

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `ITS_CAMERA` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init · unit seed `HTKT` | ẩn grid ITS_CAMERA |
| LOOKUP_STATIC type_management_center / location_its (**đề xuất**) | dump distinct / seed SA | **GAP-ITS-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `camera` **out of scope** list. **Không** GAP-DA-MAP-01. **Cấm** merge Camera MFE map vào list pack.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias route + hide-empty + prefix `IT-` + dump key + scope camera-connect · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy · **cấm** camera-connect UI |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · `DefaultCodePrefix` `IT-` · dumpSpecs→flat · cite header `tbl_its` |
| TL/Dev | type profile ITS_CAMERA · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=ITS_CAMERA` · CRUD live · leave-confirm · 9 row gov-vn |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprint | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| status | `done` |
| analyzedAt | `2026-09-01T20:55:00.000Z` |
