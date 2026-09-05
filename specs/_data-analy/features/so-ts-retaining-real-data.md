# Real-data bind — so-ts-retaining (Kind B list + full-page form · `RETAINING`)

| | |
|---|---|
| feature | `so-ts-retaining` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5890c753` |
| typeCode | `RETAINING` |
| dump | `tbl_retaining_wall` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=RETAINING` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-retaining` · live filter `…/so-ts?type=RETAINING` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| headerFingerprint | `sha256:a547b71c8847f3079bd462364e95279a8388e5c6de64aaf1b403d77f1e011707` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-02T00:41:31.396Z` |

## § Delta Current vs New (`new_page` · `task_5890c753`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (peer profiles) | Type profile `RETAINING` show loại tường/VL/dài/cao/số/móng · RANGE km · ẩn entity `type`/ảnh |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump RETAINING |
| Name | IsWeak risk → đoạn | optional · primary list = `retaining_wall_type_id` · **GAP-RETAINING-NAME-01** |
| Prefix | `TS-` default · GIS `KE` | đề xuất `KE-` · **GAP-RETAINING-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| Peer SLOPE_PROTECT | GIS `ta-luy` gộp | Page filter `RETAINING` only · **GAP-RETAINING-PEER-01** |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-retaining.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `linear_protect` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 RETAINING | — | dump columns · **không** `name_*` |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_retaining_wall.2026.8.23.15.17.csv` · set `gov-vn` **9660** (`COVERAGE-KCHT-40`) | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=RETAINING&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units · vitriOptions | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_retaining_wall` · type seed `RETAINING` · unit `KET_CAU` | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR set |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | VN labels dump · **GAP-RETAINING-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t20` · drill `RETAINING` | — | icon `KE` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `RETAINING` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `gis` | `GisInventoryMapper` `tuong-chan` · short `KE` · peer `ta-luy` | — | deep-link optional · peer SLOPE_PROTECT |
| `derived` | IdCode BE · đề xuất prefix `KE-` | — | **GAP-RETAINING-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu (CTX + dump §4): list primary = loại tường chắn · 3 tầng tuyến · km đầu/cuối · vật liệu · chiều dài · chiều cao TB · số phân đoạn · loại móng · ẩn ảnh GOV.  
Detail: S-ROUTE · S-LOC-RANGE (km + 4 XY + ĐVHC) · S-ATTR đủ key dump · **không** tab legacy.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=RETAINING` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình đầu | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | `?kmTo=` / detail | `kmTo` | yes · RANGE **ON** |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên | Text | — | detail / list | `name` optional | yes · **GAP-RETAINING-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| retaining_wall_type_id | Loại tường chắn | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-RETAINING-LOOKUP-01** |
| material_type_id | Loại vật liệu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| actual_protected | Chiều dài (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| average_height | Chiều cao trung bình (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number | Số phân đoạn | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| foundation_type_id | Loại móng | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| location_id | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC / init vitriOptions | parse `dumpSpecs` | dumpSpecs / flat | gap |
| asset_type | Loại tài sản (dump) | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-RETAINING-ASSETTYPE-01** |
| provinceFrom / provinceTo | Địa danh tỉnh đầu/cuối | Text | — | dumpSpecs | dumpSpecs | gap |
| communeFrom / communeTo | Địa danh xã đầu/cuối | Text | — | dumpSpecs | dumpSpecs | hide-empty |
| latFrom / lngFrom | XY đầu | Number | — | dumpSpecs / lat·lng | dumpSpecs / scalar | gap · **GAP-RETAINING-RANGE-01** |
| latTo / lngTo | XY cuối | Number | — | dumpSpecs | dumpSpecs | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · hide-empty grid |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · hide-empty · seed `KET_CAU` |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RETAINING&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RETAINING`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (RETAINING)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `retaining_wall_type_id` | Loại tường chắn | dumpSpecs · form S-ATTR · grid ON |
| `material_type_id` | Loại vật liệu | dumpSpecs · form S-ATTR · grid ON |
| `actual_protected` | Chiều dài (m) | dumpSpecs · form S-ATTR · grid ON |
| `average_height` | Chiều cao trung bình (m) | dumpSpecs · form S-ATTR · grid ON |
| `number` | Số phân đoạn | dumpSpecs · form S-ATTR · grid ON |
| `foundation_type_id` | Loại móng | dumpSpecs · form S-ATTR · grid ON |
| `location_id` | Vị trí mặt cắt ngang đường | dumpSpecs · form S-ATTR · hide-empty |
| `asset_type` | Loại tài sản (dump) | dumpSpecs · hide-empty · **GAP-RETAINING-ASSETTYPE-01** |
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
| asset-type | Integration asset-types search | master · code `RETAINING` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init · seed `KET_CAU` | — |
| LOOKUP_STATIC wall/material/foundation/location/asset_type (**đề xuất**) | dump distinct | **GAP-RETAINING-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC / init vitri | init-data `vitriOptions` | BE init · `location_id` | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng + dumpSpecs XY range. Deep-link gis `tuong-chan` **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name + prefix `KE-` + dump asset_type + route alias + peer SLOPE_PROTECT · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns RETAINING · **cấm** tab legacy · **cấm** ảnh invent |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed · DefaultCodePrefix `KE-` |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list |
| QA | filter `type=RETAINING` · loại tường · VL · dài · cao · số đoạn · móng · km đầu/cuối · tile t20 count |

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
| Gộp UI `SLOPE_PROTECT` vào page này | Filter `RETAINING` only |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| headerFingerprint | `sha256:a547b71c8847f3079bd462364e95279a8388e5c6de64aaf1b403d77f1e011707` |
| analyzedAt | `2026-09-02T00:41:31.396Z` |
| taskId | `task_5890c753` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061 -->
