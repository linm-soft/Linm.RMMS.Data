# Real-data bind — so-ts-noise-barrier (Kind B list + full-page form · `NOISE_BARRIER`)

| | |
|---|---|
| feature | `so-ts-noise-barrier` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_28a7b47e` |
| typeCode | `NOISE_BARRIER` |
| dump | `tbl_noise_barrier` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=NOISE_BARRIER` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-noise-barrier` · live filter `…/so-ts?type=NOISE_BARRIER` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprint | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T09:30:00.000Z` |

## § Delta Current vs New (`new_page` · `task_28a7b47e`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (peer profiles) | Type profile `NOISE_BARRIER` show loại/cao/dài · RANGE km · ẩn `type`/SL/ĐVT/ảnh |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump NOISE_BARRIER |
| Name | IsWeak risk → đoạn | optional · primary list = loại tường · **GAP-NB-NAME-01** |
| Prefix | `TS-` default · GIS `TC` | đề xuất `TC-` · **GAP-NB-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-noise-barrier.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `linear_protect` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 NOISE_BARRIER | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_noise_barrier.2026.8.23.14.14.csv` · set `gov-vn` **21** (`COVERAGE-KCHT-40`) | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=NOISE_BARRIER&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units · vitriOptions | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_noise_barrier` · type seed `NOISE_BARRIER` | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR set |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | VN labels dump · **GAP-NB-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t25` | — | drill `NOISE_BARRIER` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `NOISE_BARRIER` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `gis` | `GisInventoryMapper` `chong-on` · short `TC` | — | deep-link optional |
| `derived` | IdCode BE · đề xuất prefix `TC-` | — | **GAP-NB-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu (mẫu list PNG): loại `COMPOSITE` · tuyến CT.Hà Nội – Hải Phòng · km `63+902`→`64+298` · cao `3` · dài `396` · tỉnh Hải Phòng / Hưng Yên.  
Cite mẫu detail PNG: loại `Khác` · km `189+283`→`189+603` · XY đầu `105.864/20.899` · XY cuối `105.866/20.897` · cao `2` · dài `320` · tỉnh Hà Nội.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=NOISE_BARRIER` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình đầu | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | `?kmTo=` / detail | `kmTo` | yes · RANGE **ON** |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên | Text | — | detail / list | `name` optional | yes · **GAP-NB-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| type_noise_barrier_id | Loại tường chống ồn | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-NB-LOOKUP-01** |
| average_height | Chiều cao trung bình (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-NB-SPEC-01** |
| actual_length | Chiều dài thực tế (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · label «thực tế» |
| vitri | Vị trí | Dropdown | LOOKUP_STATIC / init vitriOptions | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-NB-VITRI-01** |
| provinceFrom / provinceTo | Địa danh tỉnh đầu/cuối | Text | — | dumpSpecs | dumpSpecs | gap |
| communeFrom / communeTo | Địa danh xã đầu/cuối | Text | — | dumpSpecs | dumpSpecs | hide-empty |
| latFrom / lngFrom | XY đầu | Number | — | dumpSpecs / lat·lng | dumpSpecs / scalar | gap · **GAP-NB-RANGE-01** |
| latTo / lngTo | XY cuối | Number | — | dumpSpecs | dumpSpecs | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=NOISE_BARRIER&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=NOISE_BARRIER`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (NOISE_BARRIER)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `type_noise_barrier_id` | Loại tường chống ồn (Bê tông/…) | dumpSpecs · form S-ATTR · grid ON |
| `average_height` | Chiều cao trung bình (m) | dumpSpecs · form S-ATTR · grid ON |
| `actual_length` | Chiều dài thực tế (m) | dumpSpecs · form S-ATTR · grid ON |
| `vitri` | Vị trí | dumpSpecs · form S-ATTR optional · hide-empty |
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
| asset-type | Integration asset-types search | master · code `NOISE_BARRIER` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid NOISE_BARRIER |
| LOOKUP_STATIC type_noise_barrier (**đề xuất**) | dump distinct (COMPOSITE / Khác / Bê tông…) | **GAP-NB-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC / init vitri | init-data `vitriOptions` | BE init | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng + dumpSpecs XY range. Deep-link gis `chong-on` **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name + prefix `TC-` + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns NOISE_BARRIER · **cấm** tab legacy · **cấm** ảnh invent |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed · DefaultCodePrefix `TC-` |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list |
| QA | filter `type=NOISE_BARRIER` · loại tường · km đầu/cuối · cao/dài · tile t25 count |

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
| contentHash | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprint | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| analyzedAt | `2026-09-01T09:30:00.000Z` |
| taskId | `task_28a7b47e` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3 -->
