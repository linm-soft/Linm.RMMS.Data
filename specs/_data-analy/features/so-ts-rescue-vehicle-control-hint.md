# Data-analy — controlHint — so-ts-rescue-vehicle (Kind B list + full-page form · type `RESCUE_VEHICLE`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-vehicle` |
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
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprint | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| analyzedAt | `2026-09-02T04:15:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_rescue_vehicle` cite CTX) |
| taskId | `task_e3204624` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-rescue-vehicle-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=RESCUE_VEHICLE` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-rescue-vehicle` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=RESCUE_VEHICLE` |
| typeCode | `RESCUE_VEHICLE` |
| dump | `tbl_rescue_vehicle` · mẫu `docs/img/gov-mau-tai-san/36-moc_dbvn.tbl_rescue_vehicle-list.png` · `36-moc_dbvn.tbl_rescue_vehicle-detail.png` · CSV gov-vn **7** row `RESCUE_VEHICLE` · prefix live import **`XH-`** |
| clusterUi | `ops` · ô KCHT `t24` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng / key dump chính xác từ header CSV.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `ops` · point · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên vị trí/xe · 3 tầng tuyến · lý trình · loại phương tiện · vị trí đậu · đơn vị mua · cơ quan khai thác (**GAP-SOTS-COL-01** hide-empty khi fill 0).  
> **≠** `RESCUE_STATION` (trạm cứu nạn `tbl_disaster_res_facility`) — đây là **xe / phương tiện cứu hộ** `tbl_rescue_vehicle`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-rescue-vehicle.md` | `4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `ops` · ô `t24` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §3–§4 RESCUE_VEHICLE | `vehicle_type_id` · `parking_location_name` · `purchased_by` · `under_operation_by` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` · redirect asset · **cấm** SSOT data |
| Mẫu list | `docs/img/gov-mau-tai-san/36-moc_dbvn.tbl_rescue_vehicle-list.png` | tên · tuyến · lý trình · loại PT · vị trí đậu · ĐV mua · cơ quan khai thác |
| Mẫu detail | `docs/img/gov-mau-tai-san/36-moc_dbvn.tbl_rescue_vehicle-detail.png` | tab Thông tin chung · vị trí điểm · attr xe cứu hộ |
| Dump CSV | `moc_dbvn.tbl_rescue_vehicle.2026.8.23.15.19.csv` (cite COVERAGE) | header eng · **7** row gov-vn |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **7** `RESCUE_VEHICLE` · prefix `XH-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `RESCUE_VEHICLE` · «Xe cứu hộ» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `RESCUE_VEHICLE` icon group `TS` · IdCode import prefix `XH-` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `RESCUE_VEHICLE` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR RESCUE **chưa** editable · có `under_operation` partial |
| FE labels | `services/asset/dumpSpecLabels.ts` | `under_operation` · **thiếu** `vehicle_type_id` · `parking_location_name` · `purchased_by` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t24` · drill `RESCUE_VEHICLE` · «Trạm phương tiện cứu hộ cứu nạn» · icon `NH` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · peer `so-ts-lighting` / `so-ts-its-camera` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (RESCUE_VEHICLE dump attr + 3 tầng tuyến + điểm):

`vehicle_type_id|parking_location_name|purchased_by|under_operation_by|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_e3204624`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `RESCUE_VEHICLE` (ops) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-02) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung | Profile `RESCUE_VEHICLE`: tên · 3 tầng tuyến · lý trình · loại PT · vị trí đậu · ĐV mua · cơ quan khai thác · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 RESCUE_VEHICLE = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-RV-NAME-01 | Import: `name` = mô tả ngắn / mã (SS3, SS4) hoặc `parking_location_name` | `name` ← `parking_location_name` (official §3) · trống OK · **cấm** IsWeak → đoạn tuyến làm tên duy nhất | import + form |
| GAP-RV-SPEC-01 | FE labels thiếu key RESCUE §4 | Label VN khớp dump/mẫu · form Input/Select đủ 4 cột §4 | FE / form |
| GAP-RV-POINT-01 | Form hiện `kmTo` với type chưa profile | Ops point: **không** bắt buộc `kmTo` · **ẩn** khi `type=RESCUE_VEHICLE` · **cấm** ép `"0"` | form |
| GAP-RV-PREFIX-01 | `DefaultCodePrefix` fallback `TS-` · import set dùng `XH-` | IdCode create/import **`XH-`** khớp gov-vn | BE |
| GAP-RV-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-rescue-vehicle` · index chưa Navigate | Live `/so-ts?type=RESCUE_VEHICLE` · alias route **DEFER** Design (tile `t24` deep-link OK) | shell |
| GAP-RV-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-RV-LOOKUP-01 | `vehicle_type_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-RV-DUMP-KEY-01 | FE `under_operation` vs dump `under_operation_by` | SA chốt key canonical · map import/rebuild | BE / FE |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Xe cứu hộ» khi `type=RESCUE_VEHICLE` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `RESCUE_VEHICLE` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột RESCUE_VEHICLE** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · loại PT · vị trí đậu · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RESCUE_VEHICLE` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=RESCUE_VEHICLE`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên vị trí / xe | link Text | **ON** | bind `name` · import = `parking_location_name` — **GAP-RV-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON · hide-empty | dump `lytrinh-kmlytrinh` · hay trống trên 7 row |
| vehicle_type_id | Loại phương tiện | Text / Dropdown label | **ON** | dumpSpecs · **GAP-RV-LOOKUP-01** |
| parking_location_name | Vị trí đậu | Text | ON · hide-empty | dumpSpecs · có thể trùng `name` |
| purchased_by | Đơn vị mua sắm | Text | ON · hide-empty | dumpSpecs |
| under_operation_by | Cơ quan đang khai thác | Text / Dropdown label | **ON** | dumpSpecs · FE key `under_operation` — **GAP-RV-DUMP-KEY-01** |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `RESCUE_VEHICLE` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL · unit seed `TRAM` ẩn grid |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `XH-` |
| type | Loại tài sản | `SearchInput` | * | lock `RESCUE_VEHICLE` khi create từ tile `t24` |
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

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên vị trí / phương tiện | `Text` | | SSOT `parking_location_name` · **GAP-RV-NAME-01** · trống OK |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| vehicle_type_id | Loại phương tiện cứu hộ | `Dropdown` / `Text` | | dump · **GAP-RV-LOOKUP-01** |
| parking_location_name | Tên vị trí đậu | `Text` | | dump · sync `name` nếu official |
| purchased_by | Đơn vị mua sắm | `Text` | | dump |
| under_operation_by | Cơ quan đang khai thác | `Dropdown` / `Text` | | dump · map FE `under_operation` — **GAP-RV-DUMP-KEY-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · field `RESCUE_STATION`-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `vehicle_type_id` / `under_operation_by`?
2. Alias route `/so-ts-rescue-vehicle` → Navigate `?type=RESCUE_VEHICLE` (như peer ops) — Design chốt?
3. Grid: cột loại PT / vị trí đậu — luôn ON theo mẫu list (7 row nhỏ), hay hide-empty theo parent GAP-SOTS-COL-01?
4. Prefix IdCode: chốt `XH-` (gov-vn live) vs fallback `TS-` hiện tại — SA/`DefaultCodePrefix`?
5. Key dump `under_operation_by` vs FE `under_operation` — canonical key SA chốt?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprint | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| status | `done` |
| analyzedAt | `2026-09-02T04:15:00.000Z` |
