# Real-data bind — so-ts-toll (Kind B list + full-page form · `TOLL`)

| | |
|---|---|
| feature | `so-ts-toll` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ae3ed12b` |
| typeCode | `TOLL` |
| dump | `tbl_toll_booth` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=TOLL` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-toll` · live filter `…/so-ts?type=TOLL` |
| map | `none` (list pack) · GIS deep-link `tram-thu-phi` optional · **cấm** invent map canvas |
| contentHash | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprint | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T04:55:12.000Z` |

## § Delta Current vs New (`new_page` · `task_ae3ed12b`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `TOLL` hide `kmTo`/SL/ĐVT/`type` · show tên trạm · phương pháp cân · làn cân/ETC/thủ công · cấp nhà · DT cổng |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump TOLL |
| Name | map `station_name` khi rebuild | `name` ← `station_name` · **GAP-TOLL-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-toll` | DEFER Design (**GAP-TOLL-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-toll.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `t28` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 TOLL | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_toll_booth.*.csv` · set `gov-vn` | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=TOLL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_toll_booth` · type seed `TOLL` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `tram-thu-phi` ↔ `TOLL` · IdCode live prefix `TFP` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile TOLL |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys TOLL |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | `station_name` only · **GAP-TOLL-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t28` → `TOLL` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `TOLL` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `TFP-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row import `TFP-*` · `type=TOLL` · `name` ← dump `station_name` · `route`/`routeNamed`/`routeSegment` từ 3 tầng tuyến · `kmFrom` từ `lytrinh-kmlytrinh` · lat/lng từ `from_coordinatex/y` · source dump `tbl_toll_booth:*` · attr trong `dumpSpecs` theo §4.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=TOLL` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form TOLL |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `TFP-` | yes |
| name | Tên trạm | Text | — | detail / list | `name` ← `station_name` | yes · **GAP-TOLL-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| station_name | Tên trạm (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| weighting_method | Phương pháp cân | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| number_weighting_lane | Số làn cân | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_one_stop_lane | Số làn một dừng | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_manual_lane | Số làn thu phí thủ công | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_etc_lane | Số làn ETC | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| roof_structures_gate_id | Kết cấu mái cổng | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-TOLL-LOOKUP-01** |
| length_reinforcement | Chiều dài gia cố (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-TOLL-LOOKUP-01** |
| area_yoll_gate_pavement | DT mặt cổng thu phí (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| operation_building_location_id | Vị trí nhà điều hành | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| house_grade_id | Cấp nhà | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-TOLL-LOOKUP-01** |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · hide-empty |
| road_structure_id | Kết cấu đường | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-TOLL-LOOKUP-01** |
| land_area_* | Diện tích đất | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| solanETC | Số lần ETC | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| solancantaitrong | Số lần cân tải trọng | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid TOLL |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid TOLL |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=TOLL&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=TOLL`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (TOLL)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `station_name` | Tên trạm | `name` (primary) + dumpSpecs |
| `weighting_method` | Phương pháp cân | dumpSpecs · form S-ATTR |
| `number_weighting_lane` | Số làn cân | dumpSpecs · form S-ATTR |
| `number_one_stop_lane` | Số làn một dừng | dumpSpecs · form S-ATTR |
| `number_manual_lane` | Số làn thu phí thủ công | dumpSpecs · form S-ATTR |
| `number_etc_lane` | Số làn ETC | dumpSpecs · form S-ATTR |
| `roof_structures_gate_id` | Kết cấu mái cổng | dumpSpecs · form S-ATTR |
| `length_reinforcement` | Chiều dài gia cố (m) | dumpSpecs · form S-ATTR |
| `pavement_type_id` | Loại mặt đường | dumpSpecs · form S-ATTR |
| `area_yoll_gate_pavement` | DT mặt cổng thu phí (m²) | dumpSpecs · form S-ATTR |
| `operation_building_location_id` | Vị trí nhà điều hành | dumpSpecs · S-LOC / S-ATTR |
| `house_grade_id` | Cấp nhà | dumpSpecs · form S-ATTR |
| `auxiliary_works_grade_id` | Cấp CT phụ | dumpSpecs · form S-ATTR |
| `road_structure_id` | Kết cấu đường | dumpSpecs · form S-ATTR |
| `land_area_*` | Diện tích đất | dumpSpecs · form S-ATTR |
| `solanETC` | Số lần ETC | dumpSpecs · form S-ATTR |
| `solancantaitrong` | Số lần cân tải trọng | dumpSpecs · form S-ATTR |
| `width_*` | Chiều rộng hạng mục | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `TOLL` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid TOLL |
| LOOKUP_STATIC weighting / roof / pavement / grade / road_structure / operation_location (**đề xuất**) | dump distinct / seed SA | **GAP-TOLL-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `tram-thu-phi` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias route + hide-empty + width grouping · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · dumpSpecs→flat nếu cần migration |
| TL/Dev | type profile TOLL · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=TOLL` · CRUD live · leave-confirm |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprint | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| status | `done` |
| analyzedAt | `2026-09-01T04:55:12.000Z` |
