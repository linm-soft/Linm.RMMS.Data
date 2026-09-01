# Real-data bind — so-ts-rescue-station (Kind B list + full-page form · `RESCUE_STATION`)

| | |
|---|---|
| feature | `so-ts-rescue-station` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ce7b30e4` |
| typeCode | `RESCUE_STATION` |
| dump | `tbl_disaster_res_facility` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=RESCUE_STATION` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-rescue-station` · live filter `…/so-ts?type=RESCUE_STATION` |
| map | `none` (list pack) · GIS group `TS` optional · **cấm** invent map canvas |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprint | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T01:55:00.000Z` |

## § Delta Current vs New (`new_page` · `task_ce7b30e4`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ STATION_HOUSE/… profile) | Type profile `RESCUE_STATION` hide `kmTo`/SL/ĐVT/`type` + show vật tư / DT / cấp theo mẫu |
| Form S-ATTR | thiếu RESCUE keys editable | Editable fields đủ dump RESCUE_STATION |
| Name | hay = `name_building` · vài row yếu | `name` ← `name_building` · **GAP-RS-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-rescue-station` | DEFER Design (**GAP-RS-ROUTE-01**) |
| KCHT tile | ô `—` · t24 = vehicle | **không** invent tile (**GAP-RS-TILE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-rescue-station.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `—` · list only |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 RESCUE_STATION | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_disaster_res_facility.2026.8.23.14.14.csv` · set `gov-vn` **20** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=RESCUE_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_disaster_res_facility` · type seed `RESCUE_STATION` · «Trạm cứu nạn» · unit `TRAM` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `RESCUE_STATION` → group `TS` · IdCode live prefix `CN-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile RESCUE_STATION |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys RESCUE_STATION |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | thiếu `materials_in_store` · `stored_building_*` · `vitri` · **GAP-RS-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` | — | **không** `RESCUE_STATION` · t24=`RESCUE_VEHICLE` |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `RESCUE_STATION` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `CN-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row gov-vn `CN-disaster_response_facility_777421` · `name=Kho Hồng Lĩnh` · `type=RESCUE_STATION` · `route=QL.1` · `routeNamed=QL.1-HATINH` · `routeSegment=Km 481 + 000 - Km 484 + 000` · lat/lng `18.54` / `105.7` · source dump `tbl_disaster_res:disaster_response_facility_777421` · `kmFrom` CSV trống · status `tot`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=RESCUE_STATION` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid RESCUE_STATION |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `CN-` | yes |
| name | Tên kho bãi | Text | — | detail / list | `name` ← `name_building` | yes · **GAP-RS-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_building | Tên kho bãi (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| materials_in_store | Vật tư chứa trong kho | TextArea | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-RS-SPEC-01** |
| site_area_using_land | DT khuôn viên (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| office_building_grade_id | Nhà làm việc (cấp) | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-RS-LOOKUP-01** |
| total_area_office_building | DT nhà làm việc (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| auxiliary_works_grade_id | CT phụ (cấp) | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| total_area_auxiliary_works | DT CT phụ (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| stored_building_grade_id | Nhà kho (cấp) | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| total_area_stored_building | DT nhà kho (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| vitri | Vị trí | Text / Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid RESCUE_STATION |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid RESCUE_STATION |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=RESCUE_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=RESCUE_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (RESCUE_STATION)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_building` | Tên kho bãi | `name` (primary) + dumpSpecs |
| `materials_in_store` | Vật tư chứa trong kho | dumpSpecs · form S-ATTR |
| `site_area_using_land` | Diện tích khuôn viên (m²) | dumpSpecs · form S-ATTR |
| `office_building_grade_id` | Nhà làm việc (cấp) | dumpSpecs · form S-ATTR |
| `total_area_office_building` | Tổng DT nhà làm việc (m²) | dumpSpecs · form S-ATTR |
| `auxiliary_works_grade_id` | Công trình phụ (cấp) | dumpSpecs · form S-ATTR |
| `total_area_auxiliary_works` | Tổng DT CT phụ (m²) | dumpSpecs · form S-ATTR |
| `stored_building_grade_id` | Nhà kho (cấp) | dumpSpecs · form S-ATTR |
| `total_area_stored_building` | Tổng DT nhà kho (m²) | dumpSpecs · form S-ATTR |
| `vitri` | Vị trí | dumpSpecs · form S-ATTR / S-LOC-POINT |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |
| `xaphuong` | Xã / phường | dumpSpecs optional |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `RESCUE_STATION` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid RESCUE_STATION |
| LOOKUP_STATIC office_grade (**đề xuất**) | dump distinct / seed SA | **GAP-RS-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC aux_grade (**đề xuất**) | dump distinct / seed SA | **GAP-RS-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC store_grade (**đề xuất**) | dump distinct / seed SA | **GAP-RS-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC vitri (**đề xuất**) | dump distinct / seed SA | **GAP-RS-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. GIS group `TS` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + route alias + hide-low-fill + label copy · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns RESCUE_STATION · **cấm** tab legacy · **cấm** GOV chrome |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form mirror STATION_HOUSE |
| QA | filter `type=RESCUE_STATION` · tên kho · ẩn kmTo · attr kho visible · count **20** · prefix `CN-` · **không** expect tile t24 = facility |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| IsWeak name → đoạn tuyến | `name_building` (trống OK) |
| Invent KCHT tile RESCUE_STATION | ô `—` · list filter type |
| Nhầm `t24` / `RESCUE_VEHICLE` | facility = `RESCUE_STATION` · prefix `CN-` |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprint | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| status | `done` |
| analyzedAt | `2026-09-01T01:55:00.000Z` |
