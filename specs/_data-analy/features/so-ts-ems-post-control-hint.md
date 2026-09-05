# Data-analy — controlHint — so-ts-ems-post (Kind B list + full-page form · type `EMS_POST`)

| Field | Value |
|-------|-------|
| feature | `so-ts-ems-post` |
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
| contentHash | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprint | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| analyzedAt | `2026-09-01T05:30:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_first_aid_station` cite CTX) |
| taskId | `task_be3be31f` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-ems-post-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=EMS_POST` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-ems-post` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=EMS_POST` |
| typeCode | `EMS_POST` |
| dump | `tbl_first_aid_station` · mẫu `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-list.png` · `8-tbl_first_aid_station-detail.png` · CSV gov-vn **240** row `EMS_POST` · prefix **`CCU-`** |
| clusterUi | `station` · ô KCHT **`t29`** · drill `EMS_POST` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên trạm · 3 tầng tuyến · lý trình · chủ SH · loại trạm · khoảng cách đến đường lớn gần nhất.  
> **Ẩn** DT / cấp / CT phụ / vật tư / khuôn viên (dump không có — **GAP-SOTS-COL-01**).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-ems-post.md` | `07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `station` · ô `t29` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §4 EMS_POST | dump columns |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-list.png` | tên trạm · tuyến · lý trình · chủ SH · loại trạm · khoảng cách |
| Mẫu detail | `docs/img/gov-mau-tai-san/8-tbl_first_aid_station-detail.png` | tab Thông tin chung · vị trí điểm · attr trạm cấp cứu |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **240** `EMS_POST` · prefix `CCU-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `EMS_POST` · «Trạm trực cấp cứu» · unit `TRAM` |
| GIS map | `GisInventoryMapper.cs` | `EMS_POST` group `TS` (cùng RESCUE_STATION/RESCUE_VEHICLE) |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `EMS_POST` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR EMS_POST **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `owner_id` · **thiếu** `name_station` · `station_type_id` · `distance_nearest_major_road` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t29` · drill `EMS_POST` · «Trạm trực cấp cứu» · icon `NH` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (EMS_POST dump attr + 3 tầng tuyến + điểm):

`name_station|owner_id|station_type_id|distance_nearest_major_road|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_be3be31f`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `EMS_POST` (station) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile peer station) | Profile `EMS_POST`: tên trạm · 3 tầng tuyến · lý trình · chủ SH · loại trạm · khoảng cách · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT · **ẩn** DT/cấp/CT phụ (dump không có) | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 EMS_POST = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-EMS-NAME-01 | Rebuild: `name` có thể lệch dump hoặc = mã tuyến | `name` ← `name_station` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-EMS-SPEC-01 | FE labels thiếu `name_station` · `station_type_id` · `distance_nearest_major_road` | Label VN khớp dump/mẫu · form Input/Select đủ cột §4 | FE / form |
| GAP-EMS-POINT-01 | Form hiện `kmTo` với type chưa profile | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=EMS_POST` · **cấm** ép `"0"` | form |
| GAP-EMS-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-ems-post` · index chưa Navigate | Live `/so-ts?type=EMS_POST` · alias route **DEFER** Design (tile `t29` deep-link OK) | shell |
| GAP-EMS-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-EMS-LOOKUP-01 | `owner_id` · `station_type_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-EMS-TILE-01 | KCHT `t29` drill có · list chưa profile | Tile count = import **240** · deep-link filter type OK | KCHT |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Trạm trực cấp cứu» khi `type=EMS_POST` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `EMS_POST` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột EMS_POST** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | GIS group `TS` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử / Dữ liệu thị sát.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR · tỉnh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `EMS_POST` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=EMS_POST`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `name_station` · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh` / parse · CSV scalar hay trống |
| owner_id | Chủ sở hữu | Text / Dropdown label | **ON** | dumpSpecs |
| station_type_id | Loại trạm | Text / Dropdown label | **ON** | dumpSpecs |
| distance_nearest_major_road | Khoảng cách đến đường lớn gần nhất (m) | Number | **ON** | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| site_area / office_grade / aux_grade | DT / cấp | — | **OFF** | dump EMS_POST không có |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CCU-` |
| type | Loại tài sản | `SearchInput` | * | lock `EMS_POST` khi create từ filter type |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | CSV scalar hay trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` optional |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_station | Tên trạm | `Text` | * | SSOT dump `name_station` · **GAP-EMS-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| owner_id | Chủ sở hữu | `Dropdown` / `Text` | | **GAP-EMS-LOOKUP-01** |
| station_type_id | Loại trạm | `Dropdown` / `Text` | | **GAP-EMS-LOOKUP-01** |
| distance_nearest_major_road | Khoảng cách đến đường lớn gần nhất (m) | `Number` | | dump |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab legacy · cột STATION_HOUSE-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `owner_id` / `station_type_id`?
2. Alias route `/so-ts-ems-post` → Navigate `?type=EMS_POST` — Design chốt?
3. Label list «Tên trạm» vs CTX «Trạm trực cấp cứu» — PO chốt copy header/list?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8` |
| headerFingerprint | `sha256:217e92270fb2f2f697db16f1f0b64a113763ee1b45e953024344123c8f7b2c5e` |
| status | `done` |
| analyzedAt | `2026-09-01T05:30:00.000Z` |
