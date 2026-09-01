# Data-analy — controlHint — so-ts-bus-station (Kind B list + full-page form · type `BUS_STATION`)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-station` |
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
| contentHash | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprint | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| analyzedAt | `2026-09-01T03:04:42.869Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_bus_station` cite CTX) |
| taskId | `task_dc06532d` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-bus-station-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=BUS_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-bus-station` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=BUS_STATION` |
| typeCode | `BUS_STATION` |
| dump | `tbl_bus_station` · mẫu `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-list.png` · `31-moc_dbvn.tbl_bus_station-detail.png` · CSV gov-vn **387** row `BUS_STATION` · prefix `BX-` |
| clusterUi | `station` · ô KCHT `t04` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên bến · 3 tầng tuyến · loại tài sản · lý trình · chủ SH · DT mặt bằng · tuyến VT chính · DT sàn · cấp nhà (**GAP-SOTS-COL-01** hide-empty khi fill 0).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-bus-station.md` | `e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-list.png` | tên bến · tuyến · loại · lý trình · chủ SH · DT · tuyến VT · DT sàn · cấp nhà |
| Mẫu detail | `docs/img/gov-mau-tai-san/31-moc_dbvn.tbl_bus_station-detail.png` | tab Thông tin chung · vị trí điểm · attr bến |
| Dump CSV | `moc_dbvn.tbl_bus_station.2026.8.23.15.14.csv` | header eng · cite sample `bus_station_523251` |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **387** `BUS_STATION` · prefix `BX-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `BUS_STATION` · «Bến xe buýt / khách» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `ben-xe` ↔ `BUS_STATION` · prefix live `BX` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `BUS_STATION` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR BUS_STATION **chưa** editable đủ |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_terminal` · `type_work_id` · `site_area_using_land` · `build_location` — **thiếu** `owner_id` · `main_transportation_route` · `total_area_floors` · `building_grade_id` · `classification` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t04` · drill `BUS_STATION` · «Bến xe ô tô» · icon `BX` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · slug peer `so-ts-ferry` / `so-ts-interchange` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (BUS_STATION dump attr + 3 tầng tuyến + điểm):

`name_terminal|type_work_id|owner_id|site_area_using_land|main_transportation_route|total_area_floors|building_grade_id|build_location|classification|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_dc06532d`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `BUS_STATION` (station) + fill L3 analy stubs (không xóa parent / peer station artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY/…/STATION_HOUSE) | Profile `BUS_STATION`: tên bến · 3 tầng tuyến · lý trình · loại tài sản · chủ SH · DT mặt bằng · tuyến VT chính · DT sàn · cấp nhà · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Field editable đủ dump §4 BUS_STATION = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-BX-NAME-01 | Rebuild: `name` ← dump `name_terminal` (sample «bến xe phía bắc…») | `name` ← `name_terminal` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-BX-SPEC-01 | FE labels thiếu `owner_id` · `main_transportation_route` · `total_area_floors` · `building_grade_id` · `classification` | Label VN khớp dump/mẫu · form Input/Select đủ cột §4 | FE / form |
| GAP-BX-POINT-01 | Form hiện `kmTo` với type chưa profile | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=BUS_STATION` · **cấm** ép `"0"` | form |
| GAP-BX-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-bus-station` · index chưa Navigate | Live `/so-ts?type=BUS_STATION` · alias route **DEFER** Design (tile `t04` deep-link OK) | shell |
| GAP-BX-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-BX-LOOKUP-01 | `type_work_id` · `owner_id` · `building_grade_id` · `build_location` · `classification` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `ben-xe` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Bến xe» khi `type=BUS_STATION` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `BUS_STATION` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột BUS_STATION** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `ben-xe` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên bến · loại · chủ SH · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `BUS_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=BUS_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên bến | link Text | **ON** | bind `name` = `name_terminal` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại tài sản | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Bến xe khách» |
| owner_id | Chủ sở hữu | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Địa phương» |
| site_area_using_land | DT mặt bằng khu vực bến (m²) | Number | ON · hide-empty | mẫu list · fill thấp OK ẩn |
| main_transportation_route | Tuyến vận tải chính | Text | ON · hide-empty | dumpSpecs |
| total_area_floors | Tổng DT mặt sàn (m²) | Number | ON · hide-empty | dumpSpecs |
| building_grade_id | Cấp nhà | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `BUS_STATION` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| classification | Phân loại | Text | optional / OFF default | dump §4 · form S-ATTR |
| build_location | Vị trí mặt cắt | Text | optional | dumpSpecs |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BX-` |
| type | Loại tài sản | `SearchInput` | * | lock `BUS_STATION` khi create từ tile `t04` |
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
| side / build_location | Mặt cắt | `Dropdown` | | dump `build_location` · Bên trái/phải · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_terminal | Tên bến | `Text` | * | SSOT dump `name_terminal` · label «Tên bến» · **GAP-BX-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_work_id | Loại tài sản | `Dropdown` | * | LOOKUP_STATIC dump («Bến xe khách» …) · **GAP-BX-LOOKUP-01** |
| owner_id | Chủ sở hữu | `Dropdown` | | «Địa phương» … · **GAP-BX-LOOKUP-01** |
| site_area_using_land | Diện tích mặt bằng khu vực bến (m²) | `Number` | | dump |
| main_transportation_route | Tuyến vận tải chính | `Text` | | dump free-text / route name |
| total_area_floors | Tổng diện tích mặt sàn (m²) | `Number` | | dump |
| building_grade_id | Cấp nhà | `Dropdown` / `Text` | | dump · **GAP-BX-LOOKUP-01** |
| build_location | Vị trí mặt cắt ngang đường | `Dropdown` | | Bên trái / Bên phải / Giữa |
| classification | Phân loại | `Dropdown` / `Text` | | dump §4 · **GAP-BX-LOOKUP-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `type_work_id` / `owner_id` / `building_grade_id` / `build_location` / `classification`?
2. Alias route `/so-ts-bus-station` → Navigate `?type=BUS_STATION` (như spillway/ferry/station-house) — Design chốt?
3. Grid: cột DT / tuyến VT / DT sàn / cấp nhà — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprint | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| status | `done` |
| analyzedAt | `2026-09-01T03:04:42.869Z` |
