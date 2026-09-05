# Real-data bind — so-ts-rail-cross (Kind B list + full-page form · `RAIL_CROSS`)

| | |
|---|---|
| feature | `so-ts-rail-cross` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f1328a25` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=RAIL_CROSS` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-rail-cross` · live filter `…/so-ts?type=RAIL_CROSS` |
| map | `none` (list pack) · GIS deep-link `giao-duong-sat` optional · **cấm** invent map canvas |
| contentHash | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprint | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T19:30:00.000Z` |

## § Delta Current vs New (`new_page` · `task_f1328a25`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST/SPILLWAY/FERRY profile) | Type profile `RAIL_CROSS` hide `kmTo`/SL/ĐVT/`type` · show dump attrs |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non KM_POST/SPILLWAY/FERRY) | Editable fields đủ dump RAIL_CROSS |
| Name | rebuild: trống tên → fallback route | `name` ← `name_crossing` · **GAP-RC-NAME-01** |
| Prefix Create | BE fallback `TS-` | Align **`DS-`** · **GAP-RC-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-rail-cross` | DEFER Design (**GAP-RC-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-rail-cross.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `crossing` · ô `t15` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 RAIL_CROSS | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_railway_crossing.*.csv` · set `gov-vn` **144** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=RAIL_CROSS&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_railway_crossing` · type seed `RAIL_CROSS` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `giao-duong-sat` ↔ `RAIL_CROSS` · prefix icon `NG` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile RAIL_CROSS |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys RAIL_CROSS |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | có `name_crossing` · `protection_type_id` · **GAP-RC-SPEC-01** |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `RAIL_CROSS` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `DS-` | — | BE generate / import · **GAP-RC-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `railway_crossing_593984` → CSV `DS-railway_crossing_593984` · `name` «Giao đường sắt có rào chăn» · `type=RAIL_CROSS` · `route=QL.10` · `routeNamed=QL.10-THANHHOA` · lat/lng 19.85/105.8 · dumpSpecs attr theo §4.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=RAIL_CROSS` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid RAIL_CROSS |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `DS-` | yes |
| name | Tên giao cắt | Text | — | detail / list | `name` ← `name_crossing` | yes · **GAP-RC-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_crossing | Tên giao cắt (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| protection_type_id | Kiểu bảo vệ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-RC-LOOKUP-01** |
| traffic_control_method_id | Phương thức điều khiển | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| shortest_waiting_time | Thời gian chờ ngắn nhất | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid RAIL_CROSS |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid RAIL_CROSS |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RAIL_CROSS&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RAIL_CROSS`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (RAIL_CROSS)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_crossing` | Tên giao cắt | `name` (primary) + dumpSpecs |
| `protection_type_id` | Kiểu bảo vệ | dumpSpecs · form S-ATTR |
| `traffic_control_method_id` | Phương thức điều khiển giao thông | dumpSpecs · form S-ATTR |
| `shortest_waiting_time` | Thời gian chờ ngắn nhất | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `RAIL_CROSS` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid RAIL_CROSS |
| LOOKUP_STATIC protection_type (**đề xuất**) | dump distinct / seed SA | **GAP-RC-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC traffic_control_method (**đề xuất**) | dump distinct / seed SA | **GAP-RC-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `giao-duong-sat` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name empty + route alias + prefix + waiting time unit · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns RAIL_CROSS · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed · IdCode `DS-` |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form mirror pontoon/spillway |
| QA | filter `type=RAIL_CROSS` · tên giao cắt · ẩn kmTo · attr protection/traffic visible · tile t15 count · prefix `DS-` |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| IsWeak name → đoạn tuyến | `name_crossing` (trống OK) |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprint | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| status | `done` |
| analyzedAt | `2026-09-01T19:30:00.000Z` |
| compact | `specs/so-ts-rail-cross/handoff/data_analy-compact.md` |
