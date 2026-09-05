# Real-data bind — so-ts-median (Kind B list + full-page form · `MEDIAN`)

| | |
|---|---|
| feature | `so-ts-median` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_cecf0af7` |
| typeCode | `MEDIAN` |
| dump | `tbl_median_strip` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=MEDIAN` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-median` · live filter `…/so-ts?type=MEDIAN` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| headerFingerprint | `sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T17:00:00.000Z` |

## § Delta Current vs New (`new_page` · `task_cecf0af7`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (peer profiles) | Type profile `MEDIAN` show loại/dài/rộng/cỏ/cây/hàng rào · RANGE km · ẩn `type`/ảnh |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump MEDIAN (10 key §4) |
| Name | IsWeak risk → đoạn | optional · primary list = `type_median_strip_id` · **GAP-MEDIAN-NAME-01** |
| Prefix | `TS-` default · GIS `GPC` | đề xuất `PC-` · **GAP-MEDIAN-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| FE labels | thiếu key dump MEDIAN | **GAP-MEDIAN-SPEC-01** |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-median.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `linear_protect` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 MEDIAN | — | dump columns · **không** `name_*` |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_median_strip.2026.8.23.15.8.csv` · set `gov-vn` **6829** (`COVERAGE-KCHT-40`) | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=MEDIAN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units · vitriOptions | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_median_strip` · type seed `MEDIAN` · unit `ATGT` | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR set |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | **GAP-MEDIAN-SPEC-01** · thiếu 10 key |
| `mfe` · tile | `kchtTileConfig.ts` `t11` · drill `MEDIAN` | — | icon `GPC` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `MEDIAN` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `gis` | `GisInventoryMapper` `dai-phan-cach` · short `GPC` | — | deep-link optional |
| `derived` | IdCode BE · đề xuất prefix `PC-` | — | **GAP-MEDIAN-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu (CTX + dump §4): list primary = loại dải · 3 tầng tuyến · km đầu/cuối · dài/rộng · cỏ/cây · hàng rào · ẩn ảnh GOV.  
Detail: S-ROUTE · S-LOC-RANGE (km + 4 XY + ĐVHC) · S-ATTR đủ 10 key dump · **không** tab legacy.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=MEDIAN` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình đầu | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | `?kmTo=` / detail | `kmTo` | yes · RANGE **ON** |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên | Text | — | detail / list | `name` optional | yes · **GAP-MEDIAN-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| type_median_strip_id | Loại dải phân cách | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-MEDIAN-LOOKUP-01** |
| length_median_strip | Chiều dài dải (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width_median_strip | Chiều rộng dải (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| planting_grass | Trồng cỏ | Select bool | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-MEDIAN-BOOL-01** |
| planting_grass_area | DT trồng cỏ (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · hide-empty |
| planting_tree | Trồng cây | Select bool | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-MEDIAN-BOOL-01** |
| number_tree | Số cây | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · hide-empty |
| height_fence | Chiều cao hàng rào (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| material_type_fence_id | Vật liệu hàng rào | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-MEDIAN-LOOKUP-01** |
| location_median_strip_id | Vị trí dải phân cách | Dropdown | LOOKUP_STATIC / init vitriOptions | parse `dumpSpecs` | dumpSpecs / flat | gap |
| provinceFrom / provinceTo | Địa danh tỉnh đầu/cuối | Text | — | dumpSpecs | dumpSpecs | gap |
| communeFrom / communeTo | Địa danh xã đầu/cuối | Text | — | dumpSpecs | dumpSpecs | hide-empty |
| latFrom / lngFrom | XY đầu | Number | — | dumpSpecs / lat·lng | dumpSpecs / scalar | gap · **GAP-MEDIAN-RANGE-01** |
| latTo / lngTo | XY cuối | Number | — | dumpSpecs | dumpSpecs | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · hide-empty grid |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · hide-empty · seed `ATGT` |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=MEDIAN&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=MEDIAN`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (MEDIAN)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `type_median_strip_id` | Loại dải phân cách | dumpSpecs · form S-ATTR · grid ON |
| `length_median_strip` | Chiều dài dải (m) | dumpSpecs · form S-ATTR · grid ON |
| `width_median_strip` | Chiều rộng dải (m) | dumpSpecs · form S-ATTR · grid ON |
| `planting_grass` | Trồng cỏ | dumpSpecs · form S-ATTR · grid ON |
| `planting_grass_area` | Diện tích trồng cỏ (m²) | dumpSpecs · form S-ATTR · hide-empty |
| `planting_tree` | Trồng cây | dumpSpecs · form S-ATTR · grid ON |
| `number_tree` | Số cây | dumpSpecs · form S-ATTR · hide-empty |
| `height_fence` | Chiều cao hàng rào (m) | dumpSpecs · form S-ATTR · grid ON |
| `material_type_fence_id` | Vật liệu hàng rào | dumpSpecs · form S-ATTR · grid ON |
| `location_median_strip_id` | Vị trí dải phân cách | dumpSpecs · form S-ATTR · hide-empty |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình điểm đầu | `kmFrom` |
| `km_to` / lý trình cuối | Lý trình điểm cuối | `kmTo` |
| `from_coordinatex/y` | XY đầu | lngFrom/latFrom · dumpSpecs |
| `to_coordinatex/y` | XY cuối | lngTo/latTo · dumpSpecs |
| `tinhthanhpho` / `xaphuong` | Địa danh đầu | dumpSpecs |
| `tinhthanhpho_cuoi` / `xaphuong_cuoi` | Địa danh cuối | dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `MEDIAN` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init · seed `ATGT` | — |
| LOOKUP_STATIC type_median_strip / material_type_fence / location_median_strip (**đề xuất**) | dump distinct | **GAP-MEDIAN-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC / init vitri | init-data `vitriOptions` | BE init · `location_median_strip_id` | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng + dumpSpecs XY range. Deep-link gis `dai-phan-cach` **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name + prefix `PC-` + bool cỏ/cây + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns MEDIAN · **cấm** tab legacy · **cấm** ảnh invent |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed · DefaultCodePrefix `PC-` |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list |
| QA | filter `type=MEDIAN` · loại · dài/rộng · cỏ/cây · hàng rào · km đầu/cuối · tile t11 count |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| Cột ảnh đại diện invent | Ẩn · không GOV chrome |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| headerFingerprint | `sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7` |
| analyzedAt | `2026-09-01T17:00:00.000Z` |
| taskId | `task_cecf0af7` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5 -->
