# Real-data bind — so-ts-ditch (Kind B list + full-page form · `DITCH`)

| | |
|---|---|
| feature | `so-ts-ditch` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e8b2158e` |
| typeCode | `DITCH` |
| dump | `tbl_longitudinal` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=DITCH` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-ditch` · live filter `…/so-ts?type=DITCH` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprint | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T10:13:00.000Z` |

## § Delta Current vs New (`new_page` · `task_e8b2158e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (peer profiles) | Type profile `DITCH` show loại/hình dạng/KT · RANGE km · ẩn `type`/ảnh |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump DITCH |
| Name | IsWeak risk → đoạn | optional · primary list = `ditch_type_id` · **GAP-DITCH-NAME-01** |
| Prefix | `TS-` default · GIS `CD` | đề xuất `CD-` · **GAP-DITCH-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| Peer CULVERT_L | tile nav gộp | Page filter `DITCH` only · **GAP-DITCH-PEER-01** |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-ditch.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `linear_protect` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 DITCH | — | dump columns · **không** `name_*` |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_longitudinal.2026.8.23.14.25.csv` · set `gov-vn` **59657** (`COVERAGE-KCHT-40`) | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=DITCH&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units · vitriOptions | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_longitudinal` · type seed `DITCH` · unit `THOAT_NUOC` | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR set |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | VN labels dump · **GAP-DITCH-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t10` · nav `DITCH`+`CULVERT_L` | — | drill `DITCH` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `DITCH` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `gis` | `GisInventoryMapper` `cong-doc` · short `CD` | — | deep-link optional |
| `derived` | IdCode BE · đề xuất prefix `CD-` | — | **GAP-DITCH-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu (CTX + dump §4): list primary = loại rãnh/cống · 3 tầng tuyến · km đầu/cuối · hình dạng · dài/cao/rộng · ẩn ảnh GOV.  
Detail: S-ROUTE · S-LOC-RANGE (km + 4 XY + ĐVHC) · S-ATTR đủ key dump · **không** tab legacy.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=DITCH` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình đầu | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | `?kmTo=` / detail | `kmTo` | yes · RANGE **ON** |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên | Text | — | detail / list | `name` optional | yes · **GAP-DITCH-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| ditch_type_id | Loại rãnh / cống dọc | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DITCH-LOOKUP-01** |
| structural_type_id | Loại kết cấu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| work_type_id | Loại công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| culvert_shape_id | Hình dạng | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| actual_length | Chiều dài thực tế (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · label «thực tế» |
| number | Số lượng | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| height_culvert | Chiều cao (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DITCH-SPEC-01** |
| width_bottom | Chiều rộng đáy (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width_top | Chiều rộng miệng (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_work_within_section | Số CT trên đoạn | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| materials_work_id | Vật liệu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| length_manhole | Dài hố ga (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-DITCH-MANHOLE-01** |
| width_manhole | Rộng hố ga (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| height_manhole | Cao hố ga (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| location_id | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC / init vitriOptions | parse `dumpSpecs` | dumpSpecs / flat | gap |
| provinceFrom / provinceTo | Địa danh tỉnh đầu/cuối | Text | — | dumpSpecs | dumpSpecs | gap |
| communeFrom / communeTo | Địa danh xã đầu/cuối | Text | — | dumpSpecs | dumpSpecs | hide-empty |
| latFrom / lngFrom | XY đầu | Number | — | dumpSpecs / lat·lng | dumpSpecs / scalar | gap · **GAP-DITCH-RANGE-01** |
| latTo / lngTo | XY cuối | Number | — | dumpSpecs | dumpSpecs | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · hide-empty grid |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · hide-empty · seed `THOAT_NUOC` |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=DITCH&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=DITCH`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (DITCH)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `ditch_type_id` | Loại rãnh / cống dọc | dumpSpecs · form S-ATTR · grid ON |
| `structural_type_id` | Loại kết cấu | dumpSpecs · form S-ATTR · hide-empty |
| `work_type_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `culvert_shape_id` | Hình dạng | dumpSpecs · form S-ATTR · grid ON |
| `actual_length` | Chiều dài thực tế (m) | dumpSpecs · form S-ATTR · grid ON |
| `number` | Số lượng | dumpSpecs · form S-ATTR |
| `height_culvert` | Chiều cao (m) | dumpSpecs · form S-ATTR · grid ON |
| `width_bottom` | Chiều rộng đáy (m) | dumpSpecs · form S-ATTR · hide-empty |
| `width_top` | Chiều rộng miệng (m) | dumpSpecs · form S-ATTR · hide-empty |
| `number_work_within_section` | Số CT trên đoạn | dumpSpecs · form S-ATTR |
| `materials_work_id` | Vật liệu | dumpSpecs · form S-ATTR · hide-empty |
| `length_manhole` / `width_manhole` / `height_manhole` | KT hố ga | dumpSpecs · form · hide-empty grid |
| `location_id` | Vị trí mặt cắt | dumpSpecs · form S-ATTR |
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
| asset-type | Integration asset-types search | master · code `DITCH` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init · seed `THOAT_NUOC` | — |
| LOOKUP_STATIC ditch_type / shape / material / … (**đề xuất**) | dump distinct | **GAP-DITCH-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC / init vitri | init-data `vitriOptions` | BE init · `location_id` | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng + dumpSpecs XY range. Deep-link gis `cong-doc` **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name + prefix `CD-` + route alias + peer CULVERT_L · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns DITCH · **cấm** tab legacy · **cấm** ảnh invent |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed · DefaultCodePrefix `CD-` |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list |
| QA | filter `type=DITCH` · loại · hình dạng · km đầu/cuối · dài/cao · tile t10 count |

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
| Gộp UI `CULVERT_L` vào page này | Filter `DITCH` only |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprint | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| analyzedAt | `2026-09-01T10:13:00.000Z` |
| taskId | `task_e8b2158e` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854 -->
