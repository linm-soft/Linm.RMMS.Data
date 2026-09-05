# Real-data bind — so-ts-ems-post (Kind B list + full-page form · `EMS_POST`)

| | |
|---|---|
| feature | `so-ts-ems-post` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_be3be31f` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=EMS_POST` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-ems-post` · live filter `…/so-ts?type=EMS_POST` |
| map | `none` (list pack) · GIS group `TS` optional · **cấm** invent map canvas |
| contentHash | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprint | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T05:30:00.000Z` |

## § Delta Current vs New (`new_page` · `task_be3be31f`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer station profile) | Type profile `EMS_POST` hide `kmTo`/SL/ĐVT/`type`/DT/cấp + show attr §4 |
| Form S-ATTR | thiếu EMS keys editable | Editable fields đủ dump EMS_POST |
| Name | hay lệch dump | `name` ← `name_station` · **GAP-EMS-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-ems-post` | DEFER Design (**GAP-EMS-ROUTE-01**) |
| KCHT tile | `t29` drill có · list chưa profile | count **240** · **GAP-EMS-TILE-01** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-ems-post.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `t29` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §4 EMS_POST | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_first_aid_station.*.csv` · set `gov-vn` **240** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=EMS_POST&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_first_aid_station` · type seed `EMS_POST` · «Trạm trực cấp cứu» · unit `TRAM` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `EMS_POST` → group `TS` · IdCode live prefix `CCU-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile EMS_POST |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys EMS_POST |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | thiếu `name_station` · `station_type_id` · `distance_nearest_major_road` · **GAP-EMS-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` | — | `t29` drill `EMS_POST` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `EMS_POST` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `CCU-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row gov-vn `CCU-tbl_first_aid_station_720846` · `name=Trạm Hồng Thủy` · `type=EMS_POST` · `route=QL.1` · `routeNamed=QL.1-QUANGTRI` · `routeSegment=Km 672 + 821 - Km 704 + 900` · lat/lng `17.3` / `106.75` · source dump `tbl_first_aid:tbl_first_aid_station_720846` · `kmFrom` CSV trống · status `tot`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=EMS_POST` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid EMS_POST |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `CCU-` | yes |
| name | Tên trạm | Text | — | detail / list | `name` ← `name_station` | yes · **GAP-EMS-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_station | Tên trạm (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| owner_id | Chủ sở hữu | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-EMS-LOOKUP-01** |
| station_type_id | Loại trạm | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-EMS-LOOKUP-01** |
| distance_nearest_major_road | Khoảng cách đến ĐL gần nhất (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-EMS-SPEC-01** |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid EMS_POST |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid EMS_POST |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=EMS_POST&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=EMS_POST`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (EMS_POST)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_station` | Tên trạm | `name` (primary) + dumpSpecs |
| `owner_id` | Chủ sở hữu | dumpSpecs · form S-ATTR |
| `station_type_id` | Loại trạm | dumpSpecs · form S-ATTR |
| `distance_nearest_major_road` | Khoảng cách đến đường lớn gần nhất (m) | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `EMS_POST` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid EMS_POST |
| LOOKUP_STATIC owner (**đề xuất**) | dump distinct / seed SA | **GAP-EMS-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC station_type (**đề xuất**) | dump distinct / seed SA | **GAP-EMS-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. GIS group `TS` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + route alias + label copy · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns EMS_POST · **cấm** tab legacy · **cấm** GOV chrome |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form |
| QA | filter `type=EMS_POST` · tên trạm · ẩn kmTo · attr §4 visible · count **240** · prefix `CCU-` · tile `t29` drill |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| IsWeak name → đoạn tuyến | `name_station` (trống OK) |
| Invent DT/cấp cột không có dump | chỉ 4 attr §4 |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprint | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| status | `done` |
| analyzedAt | `2026-09-01T05:30:00.000Z` |
