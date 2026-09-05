# Real-data bind — so-ts-count-station (Kind B list + full-page form · `COUNT_STATION`)

| | |
|---|---|
| feature | `so-ts-count-station` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2645c3b4` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=COUNT_STATION` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-count-station` · live filter `…/so-ts?type=COUNT_STATION` |
| map | `none` (list pack) · GIS slug DEFER (**GAP-COUNT-GIS-01**) · **cấm** invent map canvas |
| contentHash | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprint | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T06:40:24.000Z` |

## § Delta Current vs New (`new_page` · `task_2645c3b4`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `COUNT_STATION` hide `kmTo`/SL/ĐVT/`type` · show tên VI · 3 tầng tuyến · ĐVQL · tên EN · lý trình · số làn · tốc độ |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump COUNT |
| Name | map generic | `name` ← `name_vi` · **GAP-COUNT-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-count-station` | DEFER Design (**GAP-COUNT-ROUTE-01**) |
| IdCode prefix | GIS `THC` | giữ live |
| GIS slug | chưa map layer ↔ COUNT | **GAP-COUNT-GIS-01** |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-count-station.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `station` · ô `t30` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 COUNT_STATION | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.mst_counting_station.*.csv` · set `gov-vn` · COVERAGE **377** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=COUNT_STATION&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `mst_counting_station` · type seed `COUNT_STATION` · «Trạm đếm xe» · unit `TRAM` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` IdCode prefix `THC` · **chưa** slug layer | — | deep-link DEFER · **GAP-COUNT-GIS-01** |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile COUNT |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys COUNT |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | chỉ `name_vi` · **GAP-COUNT-SPEC-01** |
| `mfe` · lookups | `lookups.ts` | — | **thiếu** `COUNT_STATION` · **GAP-COUNT-LABEL-01** |
| `mfe` · tile | `kchtTileConfig.ts` `t30` → `COUNT_STATION` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `COUNT_STATION` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `THC-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row import `type=COUNT_STATION` · `name` ← dump `name_vi` · `route`/`routeNamed`/`routeSegment` từ 3 tầng tuyến · `kmFrom` từ lý trình · lat/lng từ mẫu / parse coordinate · source dump `mst_counting_station:*` · attr trong `dumpSpecs` theo §4 · count cite **377**.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=COUNT_STATION` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form COUNT |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `THC-` | yes |
| name | Tên (VI) | Text | — | detail / list | `name` ← `name_vi` | yes · **GAP-COUNT-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_vi | Tên (tiếng Việt) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| name_en | Tên (tiếng Anh) | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| agency_id | Đơn vị quản lý | Dropdown / SearchInput | LOOKUP_STATIC / org | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-COUNT-LOOKUP-01** |
| no_of_lane | Số làn đường | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| speed | Tốc độ | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| from_coordinate | Tọa độ đầu | Text / derived | — | parse `dumpSpecs` | dumpSpecs / → lat·lng | gap · **GAP-COUNT-COORD-01** |
| to_coordinate | Tọa độ cuối | Text / derived | — | parse `dumpSpecs` | dumpSpecs / flat | gap · optional |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid COUNT |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid COUNT · seed `TRAM` |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=COUNT_STATION&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=COUNT_STATION`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (COUNT_STATION)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_vi` | Tên (tiếng Việt) | `name` (primary) + dumpSpecs |
| `name_en` | Tên (tiếng Anh) | dumpSpecs · form S-ATTR |
| `agency_id` | Đơn vị quản lý | dumpSpecs · form S-ATTR |
| `no_of_lane` | Số làn đường | dumpSpecs · form S-ATTR |
| `speed` | Tốc độ | dumpSpecs · form S-ATTR |
| `from_coordinate` | Tọa độ đầu | dumpSpecs · → `lat`/`lng` nếu parse được (**GAP-COUNT-COORD-01**) |
| `to_coordinate` | Tọa độ cuối | dumpSpecs · optional |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` / lý trình | Lý trình | `kmFrom` (để trống nếu null) |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `COUNT_STATION` | Dropdown nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init · seed `TRAM` | ẩn grid COUNT |
| LOOKUP_STATIC agency / ĐVQL (**đề xuất**) | dump distinct / seed SA / org-unit | **GAP-COUNT-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. GIS slug **DEFER** (**GAP-COUNT-GIS-01**). **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.  
Tab «Lưu lượng xe» trên mẫu DRVN = **out of scope** list pack (không enqueue progress).

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + alias + coord + GIS slug + label copy · copy § Delta |
| Design | control-map khớp §B · zones DES-GRID-A…D · filter-bar HARD · form full-page · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · entity `rmms_road_assets` · dumpSpecs→flat nếu cần · coord parse · GIS slug |
| TL/Dev | type profile COUNT · labels thiếu · reuse S-* · **cấm** fork AssetFormPage · **cấm** ERP.* |
| QA | empty/error toast · filter `?type=COUNT_STATION` · CRUD live · leave-confirm · count **377** |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprint | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| status | `done` |
| analyzedAt | `2026-09-01T06:40:24.000Z` |
