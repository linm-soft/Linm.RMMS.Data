# Real-data bind — so-ts-spillway (Kind B list + full-page form · `SPILLWAY`)

| | |
|---|---|
| feature | `so-ts-spillway` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ba2de910` |
| typeCode | `SPILLWAY` |
| dump | `tbl_spill_way` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=SPILLWAY` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-spillway` · live filter `…/so-ts?type=SPILLWAY` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` |
| headerFingerprint | `sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T03:50:00.000Z` |

## § Delta Current vs New (`new_page` · `task_ba2de910`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST profile) | Type profile `SPILLWAY` hide `kmTo`/SL/ĐVT/`type` · show dump attrs |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump SPILLWAY |
| Name | rebuild `name_work` | `name` ← `name_work` · sông field riêng |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-spillway.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `crossing` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 SPILLWAY | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `data-import/.../moc_dbvn.tbl_spill_way.2026.8.23.15.17.csv` · set `gov-vn` 128 | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=SPILLWAY&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_spill_way` · type seed `SPILLWAY` | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | VN labels dump · **GAP-SPW-SPEC-01** |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `SPILLWAY` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `TR-` | — | BE generate |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `spill_way_309929` → CSV `TR-spill_way_309929` · `name=Đường tràn` · `type=SPILLWAY` · `spillway_type_id=Cầu tràn` · `width_spillway=4` · `length_spillway=174` · `structure_type_spillway_id=Bê tông` · lat/lng từ `from_coordinatey/x`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=SPILLWAY` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid SPILLWAY |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên công trình | Text | — | detail / list | `name` ← `name_work` | yes · **GAP-SPW-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_work | Tên công trình (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| name_river | Tên sông/ suối | Text | — | parse `dumpSpecs` | dumpSpecs | gap · **GAP-SOTS-FORM-01** |
| spillway_type_id | Loại công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SPW-LOOKUP-01** |
| width_spillway | Chiều rộng mặt tràn (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| length_spillway | Chiều dài tràn (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| no_span | Số nhịp | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| span_length | Chiều dài nhịp (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| structure_type_spillway_id | Loại kết cấu mặt tràn | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SPW-LOOKUP-01** |
| with_water_level_measuring_pole | Có cột thủy chí hay không | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| location_where_water_level_id | Vị trí đặt cột thủy chí | Text / Dropdown | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| Floods_usually_duration_year | Thời điểm lũ trong năm (tháng) | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| average_number_flood_day | Số ngày lũ TB / năm | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| average_number_flooded_day | Số ngày ngập TB / năm | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| operational_load | Tải trọng cho phép | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid SPILLWAY |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid SPILLWAY |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=SPILLWAY&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=SPILLWAY`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (SPILLWAY)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_work` | Tên công trình | `name` (primary) + dumpSpecs |
| `name_river` | Tên sông/ suối | dumpSpecs · form S-NAME/S-ATTR |
| `spillway_type_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `width_spillway` | Chiều rộng mặt tràn (m) | dumpSpecs · form S-ATTR |
| `length_spillway` | Chiều dài tràn (m) | dumpSpecs · form S-ATTR |
| `no_span` | Số nhịp | dumpSpecs · form S-ATTR |
| `span_length` | Chiều dài nhịp (m) | dumpSpecs · form S-ATTR |
| `structure_type_spillway_id` | Loại kết cấu mặt tràn | dumpSpecs · form S-ATTR |
| `with_water_level_measuring_pole` | Có cột thủy chí hay không | dumpSpecs · form S-ATTR |
| `location_where_water_level_id` | Vị trí đặt cột thủy chí | dumpSpecs · form S-ATTR |
| `Floods_usually_duration_year` | Thời điểm thường xuất hiện lũ trong năm (tháng) | dumpSpecs · form S-ATTR |
| `average_number_flood_day` | Số ngày lũ trung bình hàng năm/ năm | dumpSpecs · form S-ATTR |
| `average_number_flooded_day` | Số ngày trung bình bị ngập trong năm | dumpSpecs · form S-ATTR |
| `operational_load` | Tải trọng cho phép | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `SPILLWAY` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid SPILLWAY |
| LOOKUP_STATIC spillway_type (**đề xuất**) | dump distinct / seed SA | **GAP-SPW-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC structure_type_spillway (**đề xuất**) | dump distinct / seed SA | **GAP-SPW-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC boolean thủy chí | True/False | dump | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `duong-tran` **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name display + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns SPILLWAY · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump |
| QA | filter `type=SPILLWAY` · tên công trình · ẩn kmTo · attr spillway visible · tile t16 count |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f` |
| headerFingerprint | `sha256:8124b719fd02c8340500c51370b7318bcf7fe20513aeb85ce99b22ee2ef58172` |
| analyzedAt | `2026-09-01T03:50:00.000Z` |
| taskId | `task_ba2de910` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f -->
