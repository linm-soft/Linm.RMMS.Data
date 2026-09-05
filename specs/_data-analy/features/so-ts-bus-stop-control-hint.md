# Data-analy — controlHint — so-ts-bus-stop (Kind B list + full-page form · type `BUS_STOP`)

| Field | Value |
|-------|-------|
| feature | `so-ts-bus-stop` |
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
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprint | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| analyzedAt | `2026-09-01T07:33:54.890Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_bus_stops` cite CTX) |
| taskId | `task_7552f36d` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-bus-stop-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=BUS_STOP` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-bus-stop` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=BUS_STOP` |
| typeCode | `BUS_STOP` |
| dump | `tbl_bus_stops` · mẫu `docs/img/gov-mau-tai-san/4-tbl_bus_stops-list.png` · `4-tbl_bus_stops-detail.png` · CSV gov-vn **5367** row `BUS_STOP` · prefix live import **`DX-`** |
| clusterUi | `stop` · ô KCHT `t13` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `stop` · như `atgt_point` + S-ATTR bay/nhà chờ · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên điểm · 3 tầng tuyến · loại · lý trình · ĐV QL · làn đậu / ghế / nhà chờ · mặt cắt (**GAP-SOTS-COL-01** hide-empty khi fill 0).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-bus-stop.md` | `c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/4-tbl_bus_stops-list.png` | tên điểm · tuyến · loại · lý trình · ĐV QL · bay/ghế/nhà chờ |
| Mẫu detail | `docs/img/gov-mau-tai-san/4-tbl_bus_stops-detail.png` | tab Thông tin chung · vị trí điểm · attr bay/shelter |
| Dump CSV | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_bus_stops.2026.8.23.14.8.csv` | header eng · cite sample `bus_stops_523797` / `bus_stops` L67 `station_name=Tuyến số: 06` |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **5367** `BUS_STOP` · prefix `DX-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `BUS_STOP` · «Điểm đỗ / dừng xe» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `diem-bus` ↔ `BUS_STOP` · icon `BUS` · IdCode import prefix `DX` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `BUS_STOP` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR BUS_STOP **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `station_name` (=«Tên trạm») · `type_work_id` · `vitri` — **thiếu** hầu hết key bay/shelter |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t13` · drill `BUS_STOP` · «Điểm dừng đỗ xe bus, xe khách» · icon `BUS` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · slug peer `so-ts-bus-station` / `so-ts-km-post` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (BUS_STOP dump attr + 3 tầng tuyến + điểm):

`type_work_id|management_id|stop_bay|pavement_type_bus_stop_bay_id|length_bus_stop_bay|station_name|width_bus_stop_bay|seated_waiting_bus|bus_shelter|structure_bus_shelter_id|material_road_refuge|length_road_refuge|width_road_refuge|max_slope|vitri|escape_route_structure|escape_route_length|escape_route_width|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_7552f36d`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `BUS_STOP` (stop) + fill L3 analy stubs (không xóa parent / peer artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY/…/COUNT_STATION) | Profile `BUS_STOP`: tên điểm · 3 tầng tuyến · lý trình · loại · ĐV QL · làn đậu · ghế · nhà chờ · mặt cắt · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Field editable đủ dump §4 BUS_STOP = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-DD-NAME-01 | Import/rebuild: `name` thường = route/đoạn (vd. `QL.1`) khi thiếu ResolveBusStop | `name` ← `station_name` · trống OK · **cấm** IsWeak → đoạn tuyến | import + form |
| GAP-DD-SPEC-01 | FE labels thiếu bay/shelter keys · `station_name` label «Tên trạm» | Label VN khớp dump/mẫu («Tên điểm» · làn đậu · ghế · nhà chờ · đường lánh nạn…) · form Input/Select đủ cột §4 | FE / form |
| GAP-DD-POINT-01 | Form hiện `kmTo` với type chưa profile | Stop point: **không** bắt buộc `kmTo` · **ẩn** khi `type=BUS_STOP` · **cấm** ép `"0"` | form |
| GAP-DD-PREFIX-01 | `DefaultCodePrefix` fallback `TS-` · import set dùng `DX-` | IdCode create/import **`DX-`** khớp GIS/gov-vn | BE |
| GAP-DD-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-bus-stop` · index chưa Navigate | Live `/so-ts?type=BUS_STOP` · alias route **DEFER** Design (tile `t13` deep-link OK) | shell |
| GAP-DD-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-DD-LOOKUP-01 | `type_work_id` · `management_id` · `pavement_type_*` · `structure_bus_shelter_id` · `vitri` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `diem-bus` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Điểm dừng xe buýt» khi `type=BUS_STOP` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `BUS_STOP` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột BUS_STOP** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `diem-bus` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên điểm · loại · ĐV QL · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `BUS_STOP` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=BUS_STOP`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên điểm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_work_id | Loại tài sản | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Điểm dừng đỗ xe buýt» |
| management_id | Đơn vị QL sử dụng | Text / Dropdown label | **ON** | dumpSpecs · mẫu «Sở GTVT» |
| stop_bay | Có làn đậu | boolean label | ON · hide-empty | dumpSpecs |
| seated_waiting_bus | Có ghế chờ | boolean label | ON · hide-empty | dumpSpecs |
| bus_shelter | Có nhà chờ | boolean label | ON · hide-empty | dumpSpecs |
| vitri | Vị trí mặt cắt | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| length_bus_stop_bay | Chiều dài làn đậu (m) | Number | optional / hide-empty | dumpSpecs |
| width_bus_stop_bay | Chiều rộng làn đậu (m) | Number | optional / hide-empty | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `BUS_STOP` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DX-` |
| type | Loại tài sản | `SearchInput` | * | lock `BUS_STOP` khi create từ tile `t13` |
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
| side / vitri | Mặt cắt | `Dropdown` | | dump `vitri` · Bên trái/phải · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / station_name | Tên điểm | `Text` | | SSOT dump `station_name` · label «Tên điểm» · **GAP-DD-NAME-01** · trống OK |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_work_id | Loại tài sản | `Dropdown` | * | LOOKUP_STATIC dump («Điểm dừng đỗ xe buýt» …) · **GAP-DD-LOOKUP-01** |
| management_id | Đơn vị quản lý sử dụng | `Dropdown` / `Text` | | «Sở GTVT» … · **GAP-DD-LOOKUP-01** |
| stop_bay | Có làn đậu xe buýt/xe khách | `Dropdown` boolean | | True/False |
| pavement_type_bus_stop_bay_id | Kết cấu mặt đường làn đậu | `Dropdown` / `Text` | | BTN/BTXM… · **GAP-DD-LOOKUP-01** |
| length_bus_stop_bay | Chiều dài làn đậu (m) | `Number` | | dump |
| width_bus_stop_bay | Chiều rộng làn đậu (m) | `Number` | | dump |
| seated_waiting_bus | Có ghế chờ xe buýt | `Dropdown` boolean | | |
| bus_shelter | Có nhà chờ xe buýt | `Dropdown` boolean | | |
| structure_bus_shelter_id | Kết cấu nhà chờ | `Dropdown` / `Text` | | **GAP-DD-LOOKUP-01** |
| material_road_refuge | Kết cấu mặt đường nơi chờ | `Dropdown` / `Text` | | dump |
| length_road_refuge | Chiều dài nơi chờ (m) | `Number` | | dump |
| width_road_refuge | Chiều rộng nơi chờ (m) | `Number` | | dump |
| max_slope | Giới hạn nơi chờ / độ dốc max | `Number` / `Text` | | dump key · label VN mẫu |
| vitri | Vị trí mặt cắt ngang đường | `Dropdown` | | L/R/C · **GAP-DD-LOOKUP-01** |
| escape_route_structure | Kết cấu đường lánh nạn | `Text` / `Dropdown` | | dump |
| escape_route_length | Chiều dài đường lánh nạn (m) | `Number` | | dump |
| escape_route_width | Chiều rộng đường lánh nạn (m) | `Number` | | dump |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột BUS_STATION/KM_POST-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `type_work_id` / `management_id` / `pavement_type_bus_stop_bay_id` / `structure_bus_shelter_id` / `vitri`?
2. Alias route `/so-ts-bus-stop` → Navigate `?type=BUS_STOP` (như peer station/point) — Design chốt?
3. Grid: cột boolean bay/ghế/nhà chờ — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?
4. Prefix IdCode: chốt `DX-` (gov-vn live) vs fallback `TS-` hiện tại — SA/`DefaultCodePrefix`?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprint | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| status | `done` |
| analyzedAt | `2026-09-01T07:33:54.890Z` |
