# Real-data bind — so-ts-traffic-sign (Kind B list + full-page form · `TRAFFIC_SIGN`)

| | |
|---|---|
| feature | `so-ts-traffic-sign` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_72cf04fa` |
| typeCode | `TRAFFIC_SIGN` |
| dump | `tbl_road_sign` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=TRAFFIC_SIGN` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-traffic-sign` · live filter `…/so-ts?type=TRAFFIC_SIGN` |
| map | `none` (list pack) · **cấm** invent map canvas |
| contentHash | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprint | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| sourceTables | `rmms_road_assets` · shared `TrafficSignTypeEntity` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T13:25:14.056Z` |

## § Delta Current vs New (`new_page` · `task_72cf04fa`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent CTX `api/v1/so-ts/road-assets` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | 1 schema mọi type | Type profile `TRAFFIC_SIGN` hide `kmTo`/SL/ĐVT/`type` · show dump biển |
| Form S-ATTR | `<dl>` dumpSpecs readonly (một phần) | Editable width/height/area/material/shape/ngaylapdat/location |
| Name | SearchInput QCVN → `name` | Primary = `sign_code_number` + `road_sign_content` |
| Spec dump | CSV bỏ nhiều cột biển | Giữ đủ §4 · **cấm** PoleCount |
| Leave / alert | peer native confirm | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-traffic-sign.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `atgt_point` · ô `t32` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §2.4 · §4 | — | dump columns TRAFFIC_SIGN |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=TRAFFIC_SIGN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_road_sign` · CSV ~223703 | count 0 OK | **cấm** seed giả |
| `master` | `TrafficSignTypeService` · `/integration/traffic-sign-types/search` | — | QCVN code |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · `SIGN_TYPE_LOOKUP_CONFIG` |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | VN labels dump biển |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `TRAFFIC_SIGN` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `catalog` · sign | traffic-sign-type | — | SearchInput QCVN |
| `derived` | IdCode BE · prefix `BB-` | — | BE generate |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=TRAFFIC_SIGN` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form TRAFFIC_SIGN |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Số hiệu / mã QCVN | SearchInput | **traffic-sign-type** | detail / list | `name` ← `sign_code_number` | yes · **GAP-SIGN-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes |
| sign_code_number | Số hiệu (dump) | SearchInput/Text | traffic-sign-type | parse `dumpSpecs` | → `name` / dumpSpecs | gap → S-NAME |
| road_sign_content | Nội dung | Text | — | parse `dumpSpecs` | dumpSpecs / name legacy | gap · **GAP-SOTS-FORM-01** |
| width | Rộng (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SIGN-SPEC-01** |
| height | Cao (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| area | DT (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| material_sign_id | Vật liệu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SIGN-MAT-01** |
| shape_sign_id | Hình dạng | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SIGN-SHAPE-01** |
| location_id | Vị trí đặt | Dropdown/Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| ngaylapdat | Ngày lắp | Date | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid TRAFFIC_SIGN |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=TRAFFIC_SIGN&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=TRAFFIC_SIGN`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |
| Sign types | `GET /web-bff/api/v1/integration/traffic-sign-types/search` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (TRAFFIC_SIGN)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `sign_code_number` | Số hiệu biển báo | `name` (primary) + dumpSpecs · master traffic-sign-type |
| `road_sign_content` | Nội dung biển báo | dumpSpecs · form S-NAME/S-ATTR · CSV `name` legacy |
| `width` | Chiều rộng (m) | dumpSpecs · form S-ATTR |
| `height` | Chiều cao (m) | dumpSpecs · form S-ATTR |
| `area` | Diện tích (m²) | dumpSpecs · form S-ATTR |
| `material_sign_id` | Vật liệu biển | dumpSpecs · form S-ATTR |
| `shape_sign_id` | Hình dạng biển | dumpSpecs · form S-ATTR |
| `location_id` | Vị trí đặt | dumpSpecs · S-LOC-POINT / S-ATTR |
| `ngaylapdat` | Ngày lắp đặt | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm primary name) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

**Cấm bind:** `PoleCount` · `PoleHeightM` · `SignSize` catalog 36 lệch dump.

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `TRAFFIC_SIGN` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| traffic-sign-type | `GET /integration/traffic-sign-types/search` | `TrafficSignTypeCatalogHandler` · QCVN | free-text mã biển làm SSOT |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid TRAFFIC_SIGN |
| LOOKUP_STATIC material/shape (**đề xuất**) | dump distinct / seed SA | **GAP-SIGN-MAT-01** · **GAP-SIGN-SHAPE-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis **out of scope**. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q material/shape + name col + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns TRAFFIC_SIGN · **cấm** tab legacy · **cấm** PoleCount |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · import giữ đủ cột biển |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · traffic-sign-type SearchInput |
| QA | filter `type=TRAFFIC_SIGN` · số hiệu · ẩn kmTo · shape/material/R/C/DT visible |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| PoleCount / PoleHeightM | dump §2.4 / §4 only |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprint | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| analyzedAt | `2026-09-01T13:25:14.056Z` |
| taskId | `task_72cf04fa` |
| status | `done` |
