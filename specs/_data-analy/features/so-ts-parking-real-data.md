# Real-data bind — so-ts-parking (Kind B list + full-page form · `PARKING`)

| | |
|---|---|
| feature | `so-ts-parking` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_96e1d4b9` |
| typeCode | `PARKING` |
| dump | `tbl_rest_stops` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=PARKING` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-parking` · live filter `…/so-ts?type=PARKING` |
| map | `none` (list pack) · GIS deep-link `bai-do` optional · **cấm** invent map canvas |
| contentHash | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprint | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T04:35:00.000Z` |

## § Delta Current vs New (`new_page` · `task_96e1d4b9`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `PARKING` hide `kmTo`/SL/ĐVT/`type` · show tên bãi · loại · xếp loại · chủ SH · chiều dài · DT · **bãi đỗ** · cứu hộ · cấp cứu |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump PARKING |
| Name | map `name_work` khi rebuild | `name` ← `name_work` · **GAP-PK-NAME-01** |
| Type split | cùng dump REST_AREA | Filter `?type=PARKING` · import `RefineImportedType` · **GAP-PK-SPLIT-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-parking` | DEFER Design (**GAP-PK-ROUTE-01**) |
| Parking cols | optional/off trên peer REST_AREA | **ON** `parking_lot` · `total_parking_lot` · **GAP-PK-PARK-01** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-parking.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `t37` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 REST_AREA/PARKING | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | dump `tbl_rest_stops` · set `gov-vn` **46** `PARKING` | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=PARKING&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_rest_stops` · type seed `PARKING` · `RefineImportedType` ← REST_AREA | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `bai-do` ↔ `PARKING` · IdCode live prefix `TDN` / import `BD-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile PARKING |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys PARKING |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | partial · **GAP-PK-SPEC-01** | có `parking_lot` · `total_parking_lot` |
| `mfe` · tile | `kchtTileConfig.ts` `t37` → `PARKING` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `PARKING` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `BD-` import / `TDN` GIS | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row CSV/gov-vn `BD-rest_stops_222171` · `name=Bãi đậu xe` · `type=PARKING` · `route=QL.1` · `routeNamed=QL.1-DANANG(BOT)` · `routeSegment=Km 933 + 082 - Km 942 + 000` · `kmFrom=` (nullable) · lat/lng `15.99` / `108.19` · source dump `tbl_rest_stops:rest_stops_222171`.  
Peer fill: `BD-rest_stops_115849` · `name=bãi đậu xe` · `route=QL.9` · `routeNamed=QL.9-QUANGTRI` · lat/lng `16.82` / `107.01`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=PARKING` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form PARKING |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `BD-` | yes |
| name | Tên bãi | Text | — | detail / list | `name` ← `name_work` | yes · **GAP-PK-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_work | Tên bãi (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| categorized_id | Xếp loại | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-PK-SPEC-01** |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| actual_length | Chiều dài (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| site_area_using_land | DT khuôn viên (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| office_building_grade_id | Cấp nhà làm việc | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap optional · **GAP-PK-SPEC-01** |
| total_area_floors | Tổng DT mặt sàn (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap optional |
| service_area | Khu vực phục vụ (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap optional · **GAP-PK-SPEC-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap optional · **GAP-PK-SPEC-01** |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap optional |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap optional |
| parking_lot | Bãi đỗ xe | Select boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | **GAP-PK-PARK-01** |
| total_parking_lot | Tổng DT bãi đỗ (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | **GAP-PK-PARK-01** |
| traffic_emergency_service | Cứu hộ giao thông | Select boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-PK-SPEC-01** |
| first_aid_service | Cấp cứu | Select boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-PK-SPEC-01** |
| build_location_id | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-PK-LOOKUP-01** |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid PARKING |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid PARKING |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=PARKING&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=PARKING`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (PARKING)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_work` | Tên bãi / trạm | `name` (primary) + dumpSpecs |
| `type_work_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `categorized_id` | Xếp loại | dumpSpecs · form S-ATTR |
| `owner_id` | Chủ sở hữu | dumpSpecs · form S-ATTR |
| `actual_length` | Chiều dài thực tế (m) | dumpSpecs · form S-ATTR |
| `site_area_using_land` | DT khuôn viên sử dụng đất (m²) | dumpSpecs · form S-ATTR |
| `office_building_grade_id` | Cấp nhà làm việc | dumpSpecs · form S-ATTR · optional |
| `total_area_floors` | Tổng DT mặt sàn (m²) | dumpSpecs · form S-ATTR · optional |
| `service_area` | Khu vực phục vụ (m²) | dumpSpecs · form S-ATTR · optional |
| `total_area_office_building` | Tổng DT nhà làm việc (m²) | dumpSpecs · form S-ATTR · optional |
| `auxiliary_works_grade_id` | Cấp công trình phụ | dumpSpecs · form S-ATTR · optional |
| `total_area_auxiliary_works` | Tổng DT CT phụ (m²) | dumpSpecs · form S-ATTR · optional |
| `parking_lot` | Bãi đỗ xe | dumpSpecs · form S-ATTR · **profile ON** |
| `total_parking_lot` | Tổng DT bãi đỗ (m²) | dumpSpecs · form S-ATTR · **profile ON** |
| `traffic_emergency_service` | Cứu hộ giao thông | dumpSpecs · form S-ATTR |
| `first_aid_service` | Cấp cứu | dumpSpecs · form S-ATTR |
| `build_location_id` | Vị trí mặt cắt ngang đường | dumpSpecs · S-LOC / S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `PARKING` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid PARKING |
| LOOKUP_STATIC type_work / categorized / owner / grade / location / boolean svc (**đề xuất**) | dump distinct / seed SA | **GAP-PK-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `bai-do` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias route + hide-empty + PARKING/REST split + parking cols ON · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · dumpSpecs→flat nếu cần migration |
| TL/Dev | type profile PARKING · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=PARKING` · CRUD live · leave-confirm · **cấm** lẫn REST_AREA |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprint | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| status | `done` |
| analyzedAt | `2026-09-01T04:35:00.000Z` |
