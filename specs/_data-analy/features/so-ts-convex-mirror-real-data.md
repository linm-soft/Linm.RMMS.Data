# Real-data bind — so-ts-convex-mirror (Kind B list + full-page form · `CONVEX_MIRROR`)

| | |
|---|---|
| feature | `so-ts-convex-mirror` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_34b8bbbf` |
| typeCode | `CONVEX_MIRROR` |
| dump | `road_sphere_mirror` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=CONVEX_MIRROR` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-convex-mirror` · live filter `…/so-ts?type=CONVEX_MIRROR` |
| map | `none` (list pack) · GIS layer cite `guong-cau` · **cấm** invent map canvas |
| contentHash | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprint | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T15:21:11.932Z` |

## § Delta Current vs New (`new_page` · `task_34b8bbbf`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent CTX `api/v1/so-ts/road-assets` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | 1 schema mọi type | Type profile `CONVEX_MIRROR` hide `kmTo`/`type` · show dump attr + SL |
| Form S-ATTR | `<dl>` dumpSpecs | Editable fields 9 attr dump §4 |
| Scope tile t31 | Nhãn gộp long môn | Data = gương `road_sphere_mirror` · **cấm** invent long môn · GAP-MIRROR-SCOPE-01 |
| Name import | fallback đoạn tuyến | `name` ≠ `name_of_route_asset` · GAP-MIRROR-NAME-01 |
| Quantity | default `1` risk | ← `total_number_post` · GAP-MIRROR-QTY-01 |
| Labels FE | thiếu key gương | GAP-MIRROR-LABEL-01 |
| Leave / alert | native confirm (peer) | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-convex-mirror.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `atgt_point` · ô `t31` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §4 | — | dump columns CONVEX_MIRROR |
| `context` | `docs/context/features/import-gov-ssot.md` · `asset-kcht-dashboard.md` | — | dump gương · GANTRY alias 0 |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=CONVEX_MIRROR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `road_sphere_mirror` · CSV **187378** | count 0 OK | **cấm** seed giả |
| `gis` | `GisInventoryMapper` · `guong-cau` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | thiếu hầu hết key · GAP-MIRROR-LABEL-01 |
| `mfe` · tile | `kchtTileConfig.ts` `t31` | — | drill `CONVEX_MIRROR` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `CONVEX_MIRROR` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE | — | BE generate |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=CONVEX_MIRROR` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes · **cấm** ép `"0"` |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid CONVEX_MIRROR |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên hiển thị | Text | — | detail / list | `name` ≠ đoạn | yes · **GAP-MIRROR-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| quantity | Số lượng | Number | — | detail / list | ← `total_number_post` | yes · **GAP-MIRROR-QTY-01** |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes |
| asset_type_mst_id | Loại TS MST | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs | gap · S-NAME |
| location_post_id | Vị trí đặt | Dropdown/Text | — | parse `dumpSpecs` | dumpSpecs | gap · S-LOC-POINT |
| shape_cut_post_id | Hình cắt trụ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs | gap · S-ATTR |
| diameter_post | Đường kính | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| material_post_id | Vật liệu trụ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs | gap |
| height_post | Chiều cao trụ | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| span_length | Chiều dài nhịp | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| number_sign | Số biển/gương | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| total_number_post | Tổng số trụ | Number | — | parse `dumpSpecs` | dumpSpecs + `quantity` | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · optional |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=CONVEX_MIRROR&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=CONVEX_MIRROR`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (CONVEX_MIRROR)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `total_number_post` | Tổng số trụ | dumpSpecs + `quantity` |
| `asset_type_mst_id` | Loại tài sản (MST) | dumpSpecs · S-NAME · **≠** shell `type` |
| `shape_cut_post_id` | Hình dạng mặt cắt trụ | dumpSpecs · S-ATTR |
| `diameter_post` | Đường kính trụ (m) | dumpSpecs |
| `material_post_id` | Vật liệu trụ | dumpSpecs |
| `height_post` | Chiều cao trụ (m) | dumpSpecs |
| `span_length` | Chiều dài nhịp (m) | dumpSpecs |
| `location_post_id` | Vị trí đặt | dumpSpecs · S-LOC-POINT |
| `number_sign` | Số biển / số gương | dumpSpecs |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null · **cấm** invent) |
| `from_coordinatex/y` | XY đầu | `lng`/`lat` hoặc dumpSpecs |
| `to_coordinatex/y` | XY cuối | dumpSpecs only · **không** ép `kmTo` |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `CONVEX_MIRROR` | Dropdown demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | — |
| LOOKUP_STATIC shape/material/location/MST (**đề xuất**) | dump distinct / seed SA | **GAP-MIRROR-TYPE-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng. GIS layer `guong-cau` deep-link **out of scope** list pack. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR 9 attr · Ask Q lookup/name/title · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide `kmTo` · **cấm** tab legacy · **cấm** invent long môn field |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · import qty + name fix |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · dumpSpecLabels |
| QA | filter `type=CONVEX_MIRROR` · ẩn kmTo · SL từ total_number_post · name ≠ đoạn · không field gantry giả |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| `name` = đoạn tuyến | loại+km / vidagis_id |
| `quantity=1` mặc định | `total_number_post` |
| Invent field long môn / GANTRY | chỉ dump `road_sphere_mirror` |
| Invent lý trình khi dump trống | để trống |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprint | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| analyzedAt | `2026-09-01T15:21:11.932Z` |
| taskId | `task_34b8bbbf` |
| status | `done` |
