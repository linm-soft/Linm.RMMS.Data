# Data-analy — controlHint — so-ts-count-station (Kind B list + full-page form · type `COUNT_STATION`)

| Field | Value |
|-------|-------|
| feature | `so-ts-count-station` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` (first fill stubs · CTX+demo · queue `roleOnly=data_analy`) |
| contentHash | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprint | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| analyzedAt | `2026-09-01T06:40:24.000Z` |
| cluster | — (không Excel · import OUT pack · dump `mst_counting_station` cite CTX) |
| taskId | `task_2645c3b4` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-count-station-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=COUNT_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-count-station` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=COUNT_STATION` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` · mẫu `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-list.png` · `18-moc_dbvn.mst_counting_station-detail.png` · CSV gov-vn **377** row · IdCode prefix live **`THC`** |
| clusterUi | `station` · ô KCHT **`t30`** · drill `COUNT_STATION` · label tile «Trạm đếm» · icon `CAM` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`) — mẫu có Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp / Ghi chú / Lịch sử → **không** mount.  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên VI · 3 tầng tuyến (Linm tách; mẫu DRVN gộp 1 ô) · ĐVQL · tên EN · lý trình · số làn · tốc độ (**GAP-SOTS-COL-01** hide-empty khi fill 0).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-count-station.md` | `dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `station` · ô `t30` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §3 · §4 COUNT_STATION | dump columns |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-list.png` | tên VI · tuyến · ĐVQL · tên EN · lý trình · số làn · tốc độ |
| Mẫu detail | `docs/img/gov-mau-tai-san/18-moc_dbvn.mst_counting_station-detail.png` | tab Thông tin chung · vị trí điểm · attr trạm đếm |
| Dump CSV | `moc_dbvn.mst_counting_station.*.csv` | header eng · cite import handler |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` · COVERAGE-KCHT-40 | **377** `COUNT_STATION` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `COUNT_STATION` · «Trạm đếm xe» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | IdCode prefix live `THC` · **chưa** slug layer ↔ type (**GAP-COUNT-GIS-01**) |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `COUNT_STATION` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR COUNT **chưa** editable đủ |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_vi` · **thiếu** `agency_id` · `name_en` · `no_of_lane` · `speed` · `from_coordinate` · `to_coordinate` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| FE lookups | `services/asset/lookups.ts` | **thiếu** label `COUNT_STATION` |
| KCHT tile | `kchtTileConfig.ts` | `t30` · drill `COUNT_STATION` · «Trạm đếm» · icon `CAM` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · slug peer `so-ts-weigh-station` / `so-ts-toll` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (COUNT dump attr + 3 tầng tuyến + điểm):

`agency_id|name_vi|name_en|from_coordinate|to_coordinate|no_of_lane|speed|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_2645c3b4`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `COUNT_STATION` (station) + fill L3 analy stubs (không xóa parent / peer station artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile peer station) | Profile `COUNT_STATION`: tên VI · 3 tầng tuyến · ĐVQL · tên EN · lý trình · số làn · tốc độ · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 · **cấm** gộp tuyến 1 ô DRVN | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Field editable đủ dump §4 COUNT = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-COUNT-NAME-01 | Rebuild: `name` có thể lệch dump | `name` ← `name_vi` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-COUNT-SPEC-01 | FE labels thiếu hầu hết cột §4 COUNT | Label VN khớp dump/mẫu · form Input/Select/Number đủ cột §4 | FE / form |
| GAP-COUNT-POINT-01 | Form hiện `kmTo` với type chưa profile | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=COUNT_STATION` · **cấm** ép `"0"` | form |
| GAP-COUNT-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-count-station` · index chưa Navigate | Live `/so-ts?type=COUNT_STATION` · alias route **DEFER** Design (tile `t30` deep-link OK) | shell |
| GAP-COUNT-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-COUNT-LOOKUP-01 | `agency_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC / SearchInput org nếu SA seed — PO chốt | form |
| GAP-COUNT-COORD-01 | dump `from_coordinate` / `to_coordinate` (scalar) vs live lat/lng / `from_coordinatex/y` | SA map: parse → `lat`/`lng` hoặc dumpSpecs · mẫu detail = Kinh độ/Vĩ độ | form / import |
| GAP-COUNT-GIS-01 | IdCode prefix `THC` có · **chưa** slug layer ↔ type | PO/SA: thêm GIS slug (vd. `tram-dem`) **hoặc** defer — **cấm** invent FE | BE / GIS |
| GAP-COUNT-TILE-01 | KCHT `t30` drill có · list chưa profile | Tile count = import **377** · deep-link filter type OK | KCHT |
| GAP-COUNT-LABEL-01 | `lookups.ts` thiếu `COUNT_STATION` | Label «Trạm đếm» / «Trạm đếm xe» khớp seed | FE |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack · tab Lưu lượng xe (out of scope list pack).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Trạm đếm» khi `type=COUNT_STATION` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `COUNT_STATION` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột COUNT_STATION** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | GIS deep-link DEFER (**GAP-COUNT-GIS-01**) · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên VI/EN · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `COUNT_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=COUNT_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên (tiếng Việt) | link Text | **ON** | bind `name` = `name_vi` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| agency_id | Đơn vị quản lý | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| name_en | Tên (tiếng Anh) | Text | ON · hide-empty | dumpSpecs |
| kmFrom | Lý trình | Text chainage | ON | dump lý trình / parse |
| no_of_lane | Số làn đường | Number / Text | ON · hide-empty | dumpSpecs |
| speed | Tốc độ | Number / Text | ON · hide-empty | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `COUNT_STATION` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix live `THC-` |
| type | Loại tài sản | `SearchInput` | * | lock `COUNT_STATION` khi create từ tile `t30` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` |

### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | mẫu «Lý trình» · **cấm** ép `"0"` |
| lat / lng | Vĩ độ / Kinh độ | `Number` | | mẫu detail · bind scalar **hoặc** parse `from_coordinate` (**GAP-COUNT-COORD-01**) |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_vi | Tên (tiếng Việt) | `Text` | * | SSOT dump `name_vi` · **GAP-COUNT-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name_en | Tên (tiếng Anh) | `Text` | | dump |
| agency_id | Đơn vị quản lý | `Dropdown` / `SearchInput` | | **GAP-COUNT-LOOKUP-01** |
| no_of_lane | Số làn đường | `Number` | | dump |
| speed | Tốc độ | `Number` | | dump · đơn vị theo dump/mẫu |
| from_coordinate | Tọa độ đầu (dump) | `Text` / derived | | **GAP-COUNT-COORD-01** · ưu tiên map lat/lng |
| to_coordinate | Tọa độ cuối (dump) | `Text` / derived | | optional · hide nếu luôn trống |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Lưu lượng xe / Chi tiết / Thị sát / Bảo trì / Tệp / Lịch sử legacy.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `agency_id` (ĐVQL)?
2. `from_coordinate` / `to_coordinate` — parse sang lat/lng scalar hay giữ dumpSpecs + Number riêng trên form?
3. Alias route `/so-ts-count-station` → Navigate `?type=COUNT_STATION` — Design chốt?
4. GIS slug layer cho COUNT — thêm `tram-dem` hay defer (**GAP-COUNT-GIS-01**)?
5. Grid: cột ĐVQL / tên EN / số làn / tốc độ — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?
6. Label type: «Trạm đếm» (tile) vs «Trạm đếm xe» (BE seed) — PO chốt copy UI?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprint | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| status | `done` |
| analyzedAt | `2026-09-01T06:40:24.000Z` |
