# Real-data bind — so-ts-culvert-x (Kind B list + full-page form · `CULVERT_X`)

| | |
|---|---|
| feature | `so-ts-culvert-x` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_dbd8f71e` |
| typeCode | `CULVERT_X` |
| dump | **thiếu** (`GAP-CULVERT-X-01`) · UI từ mẫu · **cấm** seed |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=CULVERT_X` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-culvert-x` · live `…/so-ts?type=CULVERT_X` |
| map | `none` (list pack) · GIS deep-link `cong` optional |
| contentHash | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| headerFingerprint | `sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T19:12:09.599Z` |

## § Delta Current vs New (`new_page` · `task_dbd8f71e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| Dump | CSV 0 · thiếu `tbl_*` | **GAP-CULVERT-X-01** · empty OK · cấm seed |
| API path docs | có thể ghi `api/v1/so-ts/…` | Cite **`api/v1/asset/road-assets`** |
| List columns | schema chung | Profile `CULVERT_X` hide kmTo/SL/ĐVT/type · show mẫu attrs |
| Form S-ATTR | dumpSpecs readonly | Editable fields đủ mẫu Thông tin chung |
| Name | — | optional · **GAP-CN-NAME-01** |
| Prefix Create | GIS `CN` | Align **`CN-`** · **GAP-CN-PREFIX-01** |
| Leave / alert | native nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage |
| Alias route | thiếu Navigate | DEFER Design (**GAP-CN-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-culvert-x.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | crossing · t07 · GAP-CULVERT-X-01 |
| `context` | `docs/context/features/import-gov-ssot.md` | CSV 0 OK | thiếu bảng dump |
| `context` | `docs/context/features/asset-kcht-32.md` | — | P1 attrs Shape/Aperture/Length/Load |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **UI only** · **cấm** SSOT data |
| `mẫu` | `docs/img/gov-mau-tai-san/22-cong-ngang-list.png` · `…-detail.png` | — | inventory field · **cấm** seed row |
| `import` | — (không CSV) | count 0 OK | **cấm** invent `tbl_*` / seed |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=CULVERT_X&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` type seed `CULVERT_X` | — | type master only · **không** row dump |
| `gis` | `GisInventoryMapper` `cong` ↔ `CULVERT_X` · prefix `CN` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF · **thiếu** ATTR keys |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | **GAP-CN-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t07` → `CULVERT_X` | — | drill |
| `catalog` · UI schema | Integration `road-assets` | bootstrap | toast |
| `catalog` · type | asset-type `CULVERT_X` | — | SearchInput |
| `catalog` · route | road-route | — | SearchInput |
| `derived` | IdCode BE · prefix `CN-` | — | **GAP-CN-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu (GOV UI — **không** CSV): loại CT «Cống thủy lợi» · hình dạng «Hộp» · tải 627 · số ngăn 1 · cao 2 · dài 39 · lý trình `Km 394+907` · route `QL.1` · lat/lng ~19.213 / 105.686 · đầu thượng lưu True · sân thượng 9.6 m².  
**Cấm** dùng demo `roadAssetStore` seed `real-cong-ngang-1` làm SSOT.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=CULVERT_X` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid CULVERT_X |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `CN-` | yes |
| name | Tên / mô tả | Text | — | detail / list | `name` | yes · optional · **GAP-CN-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC | parse dumpSpecs | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| culvert_shape_id | Hình dạng | Dropdown | LOOKUP_STATIC | parse dumpSpecs | dumpSpecs / flat | gap · **GAP-CN-LOOKUP-01** |
| weight | Tải trọng | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| number | Số ngăn cống | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| width | Bề rộng lòng / ĐK (m) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| height | Chiều cao TB (m) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| crossing_length_culvert | Chiều dài thân (m) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| material_body_id | Vật liệu thân | Dropdown | LOOKUP_STATIC | parse dumpSpecs | dumpSpecs / flat | gap |
| has_upstream_head | Đầu thượng lưu? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| upstream_head_structure_id | KC đầu thượng lưu | Dropdown/Text | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_upstream_valve | Van thượng lưu? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_downstream_head | Đầu hạ lưu? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_downstream_valve | Van hạ lưu? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_upstream_apron | Sân thượng lưu? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| upstream_apron_structure_id | KC sân thượng | Dropdown/Text | — | parse dumpSpecs | dumpSpecs / flat | gap |
| upstream_apron_area | DT sân thượng (m²) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_downstream_apron | Sân hạ lưu? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| downstream_apron_structure_id | KC sân hạ | Dropdown/Text | — | parse dumpSpecs | dumpSpecs / flat | gap |
| downstream_apron_area | DT sân hạ (m²) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_upstream_basin | Hố tụ thượng? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| has_downstream_basin | Hố tụ hạ? | Checkbox | — | parse dumpSpecs | dumpSpecs / flat | gap |
| upstream_basin_width | Rộng hố tụ thượng (m) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| downstream_basin_width | Rộng hố tụ hạ (m) | Number | — | parse dumpSpecs | dumpSpecs / flat | gap |
| tinhthanhpho | Tỉnh / TP | Text | — | parse dumpSpecs | dumpSpecs / flat | gap |
| xaphuong | Phường / Xã | Text | — | parse dumpSpecs | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity / unitCode | SL / ĐVT | Number / Dropdown | — | detail | yes · **ẩn** grid |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list lat+lng | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=CULVERT_X&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=CULVERT_X`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### DumpSpecs keys (proposed từ mẫu · **GAP-CN-KEY-01**)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `type_work_id` | Loại công trình | dumpSpecs · S-ATTR |
| `culvert_shape_id` | Hình dạng | dumpSpecs · S-ATTR |
| `weight` | Tải trọng | dumpSpecs |
| `number` | Số ngăn cống | dumpSpecs |
| `width` | Bề rộng lòng / ĐK trong (m) | dumpSpecs |
| `height` | Chiều cao TB lòng cống (m) | dumpSpecs |
| `crossing_length_culvert` | Chiều dài thân cống (m) | dumpSpecs |
| `material_body_id` | Vật liệu thân cống | dumpSpecs |
| `has_upstream_head` … `downstream_basin_width` | Attr thượng/hạ lưu | dumpSpecs · S-ATTR |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `road_name` / `long_route_name` / `name_of_route_asset` | 3 tầng tuyến | → route / routeNamed / routeSegment |
| `lytrinh-kmlytrinh` | Lý trình | → `kmFrom` |
| `from_coordinatex/y` | XY | → `lng`/`lat` |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · `CULVERT_X` | Dropdown nhãn demo SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC (shape/VL/KC) | init-data **hoặc** dump distinct | mẫu values · **GAP-CN-LOOKUP-01** | hardcode demo-only |

## §D — Map

`map: none` (packKind=list). GIS deep-link layer `cong` optional — **cấm** invent map canvas.

## §E — Progress / vòng đời

`progress: none` (không state machine riêng ngoài `status` KT + soft `isActive`).

## §F — Handoff

| Role | Dùng |
|------|------|
| PO | DoD empty-OK · Ask UNCLEAR · **cấm** seed |
| Design | control-map = §B |
| SA | giữ path §B · prefix CN- · remap keys khi dump |
| Dev | type-profile + editable ATTR + labels · live BFF only |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b headerFingerprint=sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c analyzedAt=2026-09-01T19:12:09.599Z taskId=task_dbd8f71e -->
