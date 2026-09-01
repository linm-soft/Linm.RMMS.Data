# Real-data bind — so-ts-station-house (Kind B list + full-page form · `STATION_HOUSE`)

| | |
|---|---|
| feature | `so-ts-station-house` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_996ab920` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=STATION_HOUSE` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-station-house` · live filter `…/so-ts?type=STATION_HOUSE` |
| map | `none` (list pack) · GIS deep-link `nha-hat` optional · **cấm** invent map canvas |
| contentHash | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprint | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T00:47:00.000Z` |

## § Delta Current vs New (`new_page` · `task_996ab920`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST/SPILLWAY/INTERCHANGE/FERRY profile) | Type profile `STATION_HOUSE` hide `kmTo`/SL/ĐVT/`type` + low-fill DT/cấp · show `type_work_id` |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non KM_POST/SPILLWAY) | Editable fields đủ dump STATION_HOUSE |
| Name | thường đã map `name_building` | `name` ← `name_building` · **GAP-SH-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-station-house` | DEFER Design (**GAP-SH-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-station-house.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `t22` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 STATION_HOUSE | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_road_admin_office.2026.8.23.15.4.csv` · set `gov-vn` **374** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=STATION_HOUSE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_road_admin_office` · type seed `STATION_HOUSE` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `nha-hat` ↔ `STATION_HOUSE` · IdCode live prefix `NH-` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile STATION_HOUSE |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys STATION_HOUSE |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | `name_building` + `type_work_id` generic · **GAP-SH-SPEC-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t22` → `STATION_HOUSE` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `STATION_HOUSE` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `NH-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row CSV/gov-vn `NH-road_admin_office_525966` · `name=hạt 1 QL1` · `type=STATION_HOUSE` · `route=QL.1` · `routeNamed=QL.1 - Lạng Sơn` · `routeSegment=Km 1 + 800 - Km 113 + 985` · lat/lng `21.86` / `106.77` · source dump `tbl_road_admin:road_admin_office_525966` · `kmFrom` CSV trống · `type_work_id=Nhà hạt` · `build_location=Bên phải`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=STATION_HOUSE` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid STATION_HOUSE |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `NH-` | yes |
| name | Tên công trình | Text | — | detail / list | `name` ← `name_building` | yes · **GAP-SH-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_building | Tên công trình (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SH-LOOKUP-01** |
| build_location | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| office_building_grade_id | Cấp nhà làm việc | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| total_area_office_building | DT nhà làm việc (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| site_area_using_land | DT khuôn viên (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| total_area_auxiliary_works | DT CT phụ (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| materials_in_office | Vật tư nhà hạt | TextArea | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid STATION_HOUSE |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid STATION_HOUSE |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=STATION_HOUSE&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=STATION_HOUSE`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (STATION_HOUSE)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_building` | Tên công trình | `name` (primary) + dumpSpecs |
| `type_work_id` | Loại công trình | dumpSpecs · form S-ATTR |
| `build_location` | Vị trí mặt cắt ngang đường | dumpSpecs · form S-ATTR / S-LOC-POINT side |
| `office_building_grade_id` | Nhà làm việc (cấp) | dumpSpecs · form S-ATTR |
| `total_area_office_building` | Tổng DT nhà làm việc (m²) | dumpSpecs · form S-ATTR |
| `site_area_using_land` | Diện tích khuôn viên (m²) | dumpSpecs · form S-ATTR |
| `auxiliary_works_grade_id` | Công trình phụ (cấp) | dumpSpecs · form S-ATTR |
| `total_area_auxiliary_works` | Tổng DT CT phụ (m²) | dumpSpecs · form S-ATTR |
| `materials_in_office` | Vật tư nhà hạt QLĐB | dumpSpecs · form S-ATTR |
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
| asset-type | Integration asset-types search | master · code `STATION_HOUSE` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid STATION_HOUSE |
| LOOKUP_STATIC type_work (**đề xuất**) | dump distinct / seed SA | **GAP-SH-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC build_location (**đề xuất**) | dump distinct / seed SA | **GAP-SH-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC office_grade (**đề xuất**) | dump distinct / seed SA | **GAP-SH-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC aux_grade (**đề xuất**) | dump distinct / seed SA | **GAP-SH-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `nha-hat` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + route alias + hide-low-fill · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns STATION_HOUSE · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form mirror FERRY/SPILLWAY |
| QA | filter `type=STATION_HOUSE` · tên CT · ẩn kmTo · attr nhà hạt visible trên form · tile t22 count · prefix `NH-` |

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

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprint | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| status | `done` |
| analyzedAt | `2026-09-01T00:47:00.000Z` |
| compact | `specs/so-ts-station-house/handoff/data_analy-compact.md` |
