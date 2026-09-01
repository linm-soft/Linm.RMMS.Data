# Real-data bind — so-ts-ferry (Kind B list + full-page form · `FERRY`)

| | |
|---|---|
| feature | `so-ts-ferry` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_137dda50` |
| typeCode | `FERRY` |
| dump | `tbl_ferry_terminal` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=FERRY` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-ferry` · live filter `…/so-ts?type=FERRY` |
| map | `none` (list pack) · GIS deep-link `ben-pha` optional · **cấm** invent map canvas |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprint | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-08-31T23:51:30.740Z` |

## § Delta Current vs New (`new_page` · `task_137dda50`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST/SPILLWAY profile) | Type profile `FERRY` hide `kmTo`/SL/ĐVT/`type` · show dump attrs |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non KM_POST/SPILLWAY) | Editable fields đủ dump FERRY |
| Name | thường đã map `name_ferry_terminal` | `name` ← `name_ferry_terminal` · **GAP-FY-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-ferry` | DEFER Design (**GAP-FY-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-ferry.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `crossing` · ô `t03` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 FERRY | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_ferry_terminal.2026.8.23.15.6.csv` · set `gov-vn` **16** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=FERRY&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_ferry_terminal` · type seed `FERRY` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `ben-pha` ↔ `FERRY` · IdCode live prefix `PH-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile FERRY |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys FERRY |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | chỉ `name_ferry_terminal` · **GAP-FY-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t03` → `FERRY` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `FERRY` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `PH-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row CSV `PH-782061` · `name=Phà Đại Nội` · `type=FERRY` · `route=QL.21B` · `routeNamed=QL.21B-NINHBINH` · `routeSegment=Km 109 + 242 - Km 146 + 292` · lat/lng `20.227228` / `106.229148` · source dump `tbl_ferry_terminal:782061` · `kmFrom` CSV trống.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=FERRY` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid FERRY |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `PH-` | yes |
| name | Tên bến phà | Text | — | detail / list | `name` ← `name_ferry_terminal` | yes · **GAP-FY-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_ferry_terminal | Tên bến phà (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| loaibenpha | Loại bến phà | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-FY-LOOKUP-01** |
| level_worlk_id | Cấp công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| river_channel_name_id | Tên sông / luồng | Dropdown / SearchInput | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_of_ferries_at_terminal | Số phà tại bến | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| operation_time | Thời gian hoạt động | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| is_project_replacement | Có dự án thay thế? | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| chieurongben | Chiều rộng bến (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| chieudailuoiben | Chiều dài luồng bến (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid FERRY |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid FERRY |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=FERRY&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=FERRY`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (FERRY)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_ferry_terminal` | Tên bến phà | `name` (primary) + dumpSpecs |
| `loaibenpha` | Loại bến phà | dumpSpecs · form S-ATTR |
| `level_worlk_id` | Cấp công trình | dumpSpecs · form S-ATTR (typo key giữ nguyên) |
| `river_channel_name_id` | Tên sông / luồng | dumpSpecs · form S-ATTR |
| `number_of_ferries_at_terminal` | Số phà tại bến | dumpSpecs · form S-ATTR |
| `operation_time` | Thời gian hoạt động | dumpSpecs · form S-ATTR |
| `is_project_replacement` | Có dự án thay thế? | dumpSpecs · form S-ATTR |
| `chieurongben` | Chiều rộng bến (m) | dumpSpecs · form S-ATTR |
| `chieudailuoiben` | Chiều dài luồng bến (m) | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `FERRY` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid FERRY |
| LOOKUP_STATIC loaibenpha (**đề xuất**) | dump distinct / seed SA | **GAP-FY-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC level_worlk (**đề xuất**) | dump distinct / seed SA | **GAP-FY-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC river_channel (**đề xuất**) | dump distinct / seed SA | **GAP-FY-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC boolean thay thế | True/False | dump | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `ben-pha` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns FERRY · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form mirror SPILLWAY |
| QA | filter `type=FERRY` · tên bến · ẩn kmTo · attr ferry visible · tile t03 count · prefix `PH-` |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| IsWeak name → đoạn tuyến | `name_ferry_terminal` (trống OK) |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprint | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| status | `done` |
| analyzedAt | `2026-08-31T23:51:30.740Z` |
| compact | `specs/so-ts-ferry/handoff/data_analy-compact.md` |
