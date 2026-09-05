# Real-data bind — so-ts-pontoon (Kind B list + full-page form · `PONTOON`)

| | |
|---|---|
| feature | `so-ts-pontoon` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_7016336c` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=PONTOON` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-pontoon` · live filter `…/so-ts?type=PONTOON` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprint | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T20:00:00.000Z` |

## § Delta Current vs New (`new_page` · `task_7016336c`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST/SPILLWAY/FERRY profile) | Type profile `PONTOON` hide `kmTo`/SL/ĐVT/`type` · show dump attrs |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump PONTOON |
| Name | rebuild `name_pontoon_bridge` | `name` ← `name_pontoon_bridge` |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-pontoon.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `crossing` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 PONTOON | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_pontoon_bridge.2026.8.23.13.41.csv` · set `gov-vn` **2** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=PONTOON&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_pontoon_bridge` · type seed `PONTOON` | count 0 OK | **cấm** invent row |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | VN labels dump · **GAP-PON-SPEC-01** |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `PONTOON` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `CP-` | — | BE generate |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `378806` → CSV `CP-378806` · `name=Cầu phao Sông Hóa` · `type=PONTOON` · `route=QL.37` · lat/lng từ import. Row `484234` «Cầu Phao Ninh Cường» · `QL.37B`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=PONTOON` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid PONTOON |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên cầu phao | Text | — | detail / list | `name` ← `name_pontoon_bridge` | yes · **GAP-PON-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_pontoon_bridge | Tên cầu phao (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| name_river | Tên sông | Text | — | parse `dumpSpecs` | dumpSpecs | gap · **GAP-SOTS-FORM-01** |
| level_work_id | Cấp công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-PON-LOOKUP-01** |
| width_pontoon_bridge | Chiều rộng cầu phao (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| length_pontoon_bridge | Chiều dài cầu phao (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| pontoon_bridge_type_id | Loại cầu phao | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-PON-LOOKUP-01** |
| operational_load | Tải trọng cho phép | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid PONTOON |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid PONTOON |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=PONTOON&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=PONTOON`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (PONTOON)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_pontoon_bridge` | Tên cầu phao | `name` (primary) + dumpSpecs |
| `name_river` | Tên sông | dumpSpecs · form S-ATTR |
| `level_work_id` | Cấp công trình | dumpSpecs · form S-ATTR |
| `width_pontoon_bridge` | Chiều rộng cầu phao (m) | dumpSpecs · form S-ATTR |
| `length_pontoon_bridge` | Chiều dài cầu phao (m) | dumpSpecs · form S-ATTR |
| `pontoon_bridge_type_id` | Loại cầu phao | dumpSpecs · form S-ATTR |
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
| asset-type | Integration asset-types search | master · code `PONTOON` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid PONTOON |
| LOOKUP_STATIC level_work (**đề xuất**) | dump distinct / seed SA | **GAP-PON-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC pontoon_bridge_type (**đề xuất**) | dump distinct / seed SA | **GAP-PON-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `cau-phao` **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns PONTOON · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump |
| QA | filter `type=PONTOON` · tên cầu phao · ẩn kmTo · attr pontoon visible · tile t05 count **2** |

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
| contentHash | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprint | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| analyzedAt | `2026-09-01T20:00:00.000Z` |
| taskId | `task_7016336c` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30 -->
