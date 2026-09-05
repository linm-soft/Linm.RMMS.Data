# Real-data bind — so-ts-delineator (Kind B list + full-page form · `DELINEATOR`)

| | |
|---|---|
| feature | `so-ts-delineator` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5a14c20c` |
| typeCode | `DELINEATOR` |
| dump | `tbl_guide_post` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=DELINEATOR` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-delineator` · live filter `…/so-ts?type=DELINEATOR` |
| map | `none` (list pack) · GIS layer cite `coc-tieu` · **cấm** invent map canvas |
| contentHash | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprint | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T14:30:00.000Z` |

## § Delta Current vs New (`new_page` · `task_5a14c20c`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent CTX `api/v1/so-ts/road-assets` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | 1 schema mọi type | Type profile `DELINEATOR` hide `kmTo`/`type` · show 2 bộ tiêu/H + SL |
| Form S-ATTR | `<dl>` dumpSpecs (có groupDumpSpecs) | Editable fields 2 nhóm · đúng label dump |
| Name import | fallback đoạn tuyến | `name` ≠ `name_of_route_asset` · GAP-DELIM-NAME-01 |
| Quantity | default `1` | ← `total_number_*` · GAP-DELIM-QTY-01 |
| Leave / alert | native confirm (peer) | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-delineator.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `atgt_point` · ô `t14` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §2.2 · §4 | — | dump columns DELINEATOR |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=DELINEATOR&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_guide_post` · CSV **37303** | count 0 OK | **cấm** seed giả |
| `gis` | `GisInventoryMapper` · `coc-tieu` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` · `groupDumpSpecs` | — | VN labels + 2 nhóm |
| `mfe` · tile | `kchtTileConfig.ts` `t14` | — | drill `DELINEATOR` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `DELINEATOR` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE | — | BE generate |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=DELINEATOR` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes · **cấm** ép `"0"` |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid DELINEATOR |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên hiển thị | Text | — | detail / list | `name` ≠ đoạn | yes · **GAP-DELIM-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| quantity | Số lượng | Number | — | detail / list | ← `total_number_*` | yes · **GAP-DELIM-QTY-01** |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes |
| h_post_type_id | Loại kiểu cọc | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs | gap · S-NAME/ATTR |
| installed_location_id | Vị trí đặt | Dropdown/Text | — | parse `dumpSpecs` | dumpSpecs | gap |
| guide_post_type_id | VL cọc tiêu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs | gap · nhóm tiêu |
| length / width / height | DxRxC tiêu | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| average_installation_interval | KC LĐ TB tiêu | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| total_number_within_section | SL tiêu | Number | — | parse `dumpSpecs` | dumpSpecs + `quantity` | gap |
| h_guide_post_type_id | VL cọc H | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs | gap · nhóm H |
| h_length / h_width / h_height | DxRxC H | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| h_average_installation_interval | KC LĐ TB H | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
| h_total_number_within_section | SL H | Number | — | parse `dumpSpecs` | dumpSpecs | gap |
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
| List | `GET /web-bff/api/v1/asset/road-assets?type=DELINEATOR&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=DELINEATOR`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (DELINEATOR)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `h_post_type_id` | Loại kiểu cọc | dumpSpecs · S-NAME/ATTR · **không** = `guide_post_type_id` |
| `installed_location_id` | Vị trí đặt / cắt | dumpSpecs · S-LOC-POINT |
| `guide_post_type_id` | Loại vật liệu (cọc tiêu) | dumpSpecs · nhóm tiêu |
| `length` · `width` · `height` | DxRxC tiêu (m) | dumpSpecs |
| `average_installation_interval` | KC LĐ TB tiêu | dumpSpecs |
| `total_number_within_section` | Tổng số cọc tiêu | dumpSpecs + `quantity` |
| `h_guide_post_type_id` | Loại vật liệu (cọc H) | dumpSpecs · nhóm H |
| `h_length` · `h_width` · `h_height` | DxRxC H (m) | dumpSpecs |
| `h_average_installation_interval` | KC LĐ TB H | dumpSpecs |
| `h_total_number_within_section` | Tổng số cọc H | dumpSpecs · fallback `quantity` |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null · **cấm** invent) |
| `from_coordinatex/y` | XY đầu | `lng`/`lat` hoặc dumpSpecs |
| `to_coordinatex/y` | XY cuối | dumpSpecs only · **không** ép `kmTo` |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `DELINEATOR` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | — |
| LOOKUP_STATIC post type / materials (**đề xuất**) | dump distinct / seed SA | **GAP-DELIM-TYPE-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng. GIS layer `coc-tieu` deep-link **out of scope** list pack. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form 2 nhóm S-ATTR · Ask Q lookup/name/qty · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide `kmTo` · **cấm** tab legacy · giữ groupDumpSpecs |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · import qty + name fix |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal |
| QA | filter `type=DELINEATOR` · 2 nhóm tiêu/H · ẩn kmTo · SL từ total_number · name ≠ đoạn |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| `name` = đoạn tuyến | loại+km / vidagis_id |
| `quantity=1` mặc định | `total_number_*` |
| Gộp 1 khối DxRxC tiêu+H | 2 nhóm form |
| Invent lý trình khi dump trống | để trống |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprint | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| analyzedAt | `2026-09-01T14:30:00.000Z` |
| taskId | `task_5a14c20c` |
| status | `done` |
