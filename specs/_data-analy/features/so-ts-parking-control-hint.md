# Data-analy — controlHint — so-ts-parking (Kind B list + full-page form · type `PARKING`)

| Field | Value |
|-------|-------|
| feature | `so-ts-parking` |
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
| contentHash | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprint | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| analyzedAt | `2026-09-01T04:35:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_rest_stops` cite CTX) |
| taskId | `task_96e1d4b9` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-parking-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=PARKING` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-parking` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=PARKING` |
| typeCode | `PARKING` |
| dump | `tbl_rest_stops` · mẫu `docs/img/gov-mau-tai-san/17-moc_dbvn.tbl_rest_stops-list.png` · `17-moc_dbvn.tbl_rest_stops-detail.png` · CSV gov-vn **46** row `PARKING` · prefix `BD-` |
| clusterUi | `station` · ô KCHT `t37` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |
| peer | `so-ts-rest-area` (cùng dump · **tách** type `REST_AREA` · **GOV-IMP-02**) |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên trạm · 3 tầng tuyến · loại · lý trình · xếp loại · chủ SH · chiều dài · DT · cứu hộ · cấp cứu · **bãi đỗ** (**GAP-SOTS-COL-01** hide-empty khi fill 0).  
> **PARKING** ≠ **REST_AREA** — cùng dump `tbl_rest_stops` · import `RefineImportedType` tách theo tên · filter `?type=PARKING` **cấm** lẫn trạm dừng nghỉ.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-parking.md` | `da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `station` · ô `t37` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §4 REST_AREA/PARKING | dump columns |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/17-moc_dbvn.tbl_rest_stops-list.png` | tên trạm · tuyến · loại · lý trình · xếp loại · chủ SH · dài · DT · cứu hộ · cấp cứu |
| Mẫu detail | `docs/img/gov-mau-tai-san/17-moc_dbvn.tbl_rest_stops-detail.png` | tab Thông tin chung · vị trí điểm · attr trạm dừng nghỉ / bãi đỗ |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **46** `PARKING` · prefix `BD-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `PARKING` · «Bãi đỗ xe» · unit `TRAM` · `RefineImportedType` tách từ REST_AREA |
| GIS map | `GisInventoryMapper.cs` | `bai-do` ↔ `PARKING` · IdCode prefix live `TDN` / import `BD-` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `PARKING` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR PARKING **chưa** editable đủ |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `parking_lot` · `total_parking_lot` · `name_work` · `type_work_id` · `owner_id` · `actual_length` · `site_area_using_land` · `traffic_emergency_service` · `first_aid_service` — **thiếu** `categorized_id` · `service_area` · `office_building_grade_id` · `total_area_floors` · `auxiliary_works_grade_id` · `total_area_auxiliary_works` · `total_area_office_building` · `build_location_id` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t37` · drill `PARKING` · «Bãi đỗ xe» · icon `BX` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · slug peer `so-ts-rest-area` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (PARKING dump attr + 3 tầng tuyến + điểm):

`type_work_id|name_work|categorized_id|owner_id|actual_length|site_area_using_land|office_building_grade_id|total_area_floors|service_area|total_area_office_building|auxiliary_works_grade_id|parking_lot|total_parking_lot|traffic_emergency_service|first_aid_service|build_location_id|total_area_auxiliary_works|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_96e1d4b9`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `PARKING` (station) + fill L3 analy stubs (không xóa parent / peer rest-area artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile peer station) | Profile `PARKING`: tên trạm · 3 tầng tuyến · lý trình · loại · xếp loại · chủ SH · chiều dài · DT · **bãi đỗ** · cứu hộ · cấp cứu · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Field editable đủ dump §4 PARKING = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-PK-NAME-01 | Rebuild: `name` có thể lệch dump | `name` ← `name_work` («Bãi đậu xe» …) · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-PK-SPEC-01 | FE labels thiếu nhiều cột §4 PARKING | Label VN khớp dump/mẫu · form Input/Select/Checkbox đủ cột §4 | FE / form |
| GAP-PK-POINT-01 | Form hiện `kmTo` với type chưa profile | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=PARKING` · **cấm** ép `"0"` | form |
| GAP-PK-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-parking` · index chưa Navigate | Live `/so-ts?type=PARKING` · alias route **DEFER** Design (tile `t37` deep-link OK) | shell |
| GAP-PK-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-PK-LOOKUP-01 | `type_work_id` · `categorized_id` · `owner_id` · `office_building_grade_id` · `auxiliary_works_grade_id` · `build_location_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-PK-SPLIT-01 | Cùng dump với REST_AREA | Filter/import **tách** `PARKING` vs `REST_AREA` · **cấm** gộp list | list + import |
| GAP-PK-PARK-01 | `parking_lot` optional/off trên peer REST_AREA | Profile PARKING: **ON** `parking_lot` · `total_parking_lot` list + form S-ATTR | list + form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `bai-do` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Bãi đỗ xe» khi `type=PARKING` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `PARKING` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột PARKING** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `bai-do` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên bãi · loại · chủ SH · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `PARKING` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=PARKING`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên bãi / trạm | link Text | **ON** | bind `name` = `name_work` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Bãi đỗ xe» |
| categorized_id | Xếp loại | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| owner_id | Chủ sở hữu | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| actual_length | Chiều dài (m) | Number | ON · hide-empty | dumpSpecs |
| site_area_using_land | Diện tích (m²) | Number | ON · hide-empty | dumpSpecs · DT khuôn viên |
| parking_lot | Bãi đỗ xe | Select boolean | **ON** | dumpSpecs · **GAP-PK-PARK-01** |
| total_parking_lot | Tổng DT bãi đỗ (m²) | Number | **ON** · hide-empty | dumpSpecs · **GAP-PK-PARK-01** |
| traffic_emergency_service | Cứu hộ giao thông | Select boolean | ON · hide-empty | dumpSpecs · Có/Không |
| first_aid_service | Cấp cứu | Select boolean | ON · hide-empty | dumpSpecs · Có/Không |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `PARKING` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| service_area | Khu vực phục vụ | Number | optional | form S-ATTR · hide-empty list |
| office_building_grade_id | Cấp nhà làm việc | Dropdown label | optional | form S-ATTR · hide-empty list |
| total_area_floors | Tổng DT mặt sàn (m²) | Number | optional | form S-ATTR |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BD-` |
| type | Loại tài sản | `SearchInput` | * | lock `PARKING` khi create từ tile `t37` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs |
| ward | Phường / Xã | `Text` / SearchInput | | dump `xaphuong` · dumpSpecs |
| build_location_id | Vị trí mặt cắt | `Dropdown` | | dump `build_location_id` · Bên trái/phải/giữa · **GAP-PK-LOOKUP-01** |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_work | Tên bãi / trạm | `Text` | * | SSOT dump `name_work` · label «Tên bãi đỗ» · **GAP-PK-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4 PARKING)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_work_id | Loại công trình | `Dropdown` | * | LOOKUP_STATIC dump («Bãi đỗ xe» …) · **GAP-PK-LOOKUP-01** |
| categorized_id | Xếp loại | `Dropdown` / `Text` | | dump · **GAP-PK-SPEC-01** |
| owner_id | Chủ sở hữu | `Dropdown` | | «Địa phương» … · **GAP-PK-LOOKUP-01** |
| actual_length | Chiều dài thực tế (m) | `Number` | | dump |
| site_area_using_land | DT khuôn viên sử dụng đất (m²) | `Number` | | dump |
| office_building_grade_id | Cấp nhà làm việc | `Dropdown` / `Text` | | dump · optional · **GAP-PK-LOOKUP-01** |
| total_area_floors | Tổng DT mặt sàn (m²) | `Number` | | dump · optional |
| service_area | Khu vực phục vụ (m²) | `Number` | | dump · optional · **GAP-PK-SPEC-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump · optional · **GAP-PK-SPEC-01** |
| auxiliary_works_grade_id | Cấp công trình phụ | `Dropdown` / `Text` | | dump · optional · **GAP-PK-LOOKUP-01** |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump · optional |
| parking_lot | Bãi đỗ xe | `Select` boolean | * | dump · **GAP-PK-PARK-01** · profile PARKING |
| total_parking_lot | Tổng DT bãi đỗ (m²) | `Number` | | dump · **GAP-PK-PARK-01** |
| traffic_emergency_service | Cứu hộ giao thông | `Select` boolean | | dump · **GAP-PK-SPEC-01** |
| first_aid_service | Cấp cứu | `Select` boolean | | dump · **GAP-PK-SPEC-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `type_work_id` / `categorized_id` / `owner_id` / `office_building_grade_id` / `auxiliary_works_grade_id` / `build_location_id`?
2. Alias route `/so-ts-parking` → Navigate `?type=PARKING` (như rest-area/bus-station) — Design chốt?
3. Grid: cột bãi đỗ / cứu hộ / cấp cứu / DT — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?
4. Form PARKING: field CT phụ / nhà làm việc (office/service_area) — hiện optional hay ẩn khi fill 0 trên mẫu bãi đỗ?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| headerFingerprint | `sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba` |
| status | `done` |
| analyzedAt | `2026-09-01T04:35:00.000Z` |
