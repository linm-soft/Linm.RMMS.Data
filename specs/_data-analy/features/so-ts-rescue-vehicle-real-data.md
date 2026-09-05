# Real-data bind — so-ts-rescue-vehicle (Kind B list + full-page form · `RESCUE_VEHICLE`)

| | |
|---|---|
| feature | `so-ts-rescue-vehicle` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_e3204624` |
| typeCode | `RESCUE_VEHICLE` |
| dump | `tbl_rescue_vehicle` |
| prefix | **live import** `XH-` · BFF `web-bff/api/v1/asset/road-assets` · **GAP-RV-PREFIX-01** (`DefaultCodePrefix` hôm nay `TS-`) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=RESCUE_VEHICLE` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-rescue-vehicle` · live filter `…/so-ts?type=RESCUE_VEHICLE` |
| map | `none` (list pack) · GIS deep-link optional · **cấm** invent map canvas |
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprint | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-02T04:15:00.000Z` |

## § Delta Current vs New (`new_page` · `task_e3204624`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `RESCUE_VEHICLE` hide `kmTo`/SL/ĐVT/`type` · show loại PT · vị trí đậu · ĐV mua · cơ quan khai thác |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump RESCUE_VEHICLE §4 |
| Name | import = mô tả ngắn / parking | `parking_location_name` official · **GAP-RV-NAME-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`XH-`** · **GAP-RV-PREFIX-01** |
| Dump key | FE `under_operation` partial | canonical `under_operation_by` · **GAP-RV-DUMP-KEY-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-rescue-vehicle` | DEFER Design (**GAP-RV-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-rescue-vehicle.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `ops` · ô `t24` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §4 RESCUE_VEHICLE | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_rescue_vehicle.2026.8.23.15.19.csv` · set `gov-vn` **7** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=RESCUE_VEHICLE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_rescue_vehicle` · type seed `RESCUE_VEHICLE` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` · icon group `TS` · IdCode import prefix `XH-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile RESCUE_VEHICLE |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys RESCUE · partial `under_operation` |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | `under_operation` · **GAP-RV-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t24` → `RESCUE_VEHICLE` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `RESCUE_VEHICLE` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `XH-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row import `XH-rescue_vehicle_779829` · `name=SS3` · `route=QL.1` · `routeNamed=QL.1-TP.HUE(BOT)` · `routeSegment=Km 0 + 000 - Km 13 + 377` · lat/lng `12.88` / `109.37` · source `tbl_rescue_vehicle:rescue_vehicle_779829`.  
Import set cite: **7** rows `type=RESCUE_VEHICLE` · prefix `XH-` · status `tot`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=RESCUE_VEHICLE` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form RESCUE_VEHICLE |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto | yes |
| name | Tên vị trí/xe | Text | — | detail / list | `name` | yes · **GAP-RV-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| vehicle_type_id | Loại phương tiện | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| parking_location_name | Vị trí đậu | Text | — | parse `dumpSpecs` / `name` | dumpSpecs / flat / `name` | gap · **GAP-SOTS-FORM-01** |
| purchased_by | Đơn vị mua | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| under_operation_by | Cơ quan khai thác | Dropdown / Text | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-RV-DUMP-KEY-01** |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid RESCUE_VEHICLE |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid RESCUE_VEHICLE |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RESCUE_VEHICLE&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RESCUE_VEHICLE`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (RESCUE_VEHICLE)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `vehicle_type_id` | Loại phương tiện cứu hộ | dumpSpecs · form S-ATTR |
| `parking_location_name` | Tên vị trí đậu | dumpSpecs · `name` · form S-NAME/S-ATTR |
| `purchased_by` | Đơn vị mua sắm | dumpSpecs · form S-ATTR |
| `under_operation_by` | Cơ quan đang khai thác | dumpSpecs · form S-ATTR · FE alias `under_operation` |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name` duy nhất) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `tinhthanhpho` / `xaphuong` | Tỉnh / Xã | dumpSpecs · S-LOC |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `RESCUE_VEHICLE` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init · unit seed `TRAM` | ẩn grid RESCUE_VEHICLE |
| LOOKUP_STATIC vehicle_type / under_operation (**đề xuất**) | dump distinct / seed SA | **GAP-RV-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias route + hide-empty + prefix `XH-` + dump key · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · `DefaultCodePrefix` `XH-` · dumpSpecs→flat · key `under_operation_by` |
| TL/Dev | type profile RESCUE_VEHICLE · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=RESCUE_VEHICLE` · CRUD live · leave-confirm |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprint | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| status | `done` |
| analyzedAt | `2026-09-02T04:15:00.000Z` |
