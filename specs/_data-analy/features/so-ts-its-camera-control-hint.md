# Data-analy — controlHint — so-ts-its-camera (Kind B list + full-page form · type `ITS_CAMERA`)

| Field | Value |
|-------|-------|
| feature | `so-ts-its-camera` |
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
| contentHash | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprint | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| analyzedAt | `2026-09-01T20:55:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_its` cite CTX) |
| taskId | `task_b2b521dc` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-its-camera-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=ITS_CAMERA` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-its-camera` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=ITS_CAMERA` |
| typeCode | `ITS_CAMERA` |
| dump | `tbl_its` · mẫu `docs/img/gov-mau-tai-san/25-moc_dbvn.tbl_its-list.png` · `25-moc_dbvn.tbl_its-detail.png` · CSV gov-vn **9** row `ITS_CAMERA` · prefix live import **`IT-`** |
| clusterUi | `ops` · ô KCHT `t19` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng / key dump chính xác từ header CSV.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `ops` · point · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: ĐV QL phòng ITS · 3 tầng tuyến · lý trình · thiết bị VMS/màn hình/máy chủ/WIM · cống cáp · cáp quang · trụ · loại TTĐH · vị trí phòng ITS (**GAP-SOTS-COL-01** hide-empty khi fill 0).  
> **≠** feature `camera-connect` / Camera MFE — đây là sổ TS gov `tbl_its` (**asset-kcht-dashboard** t19).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-its-camera.md` | `f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `ops` · ô `t19` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §3–§4 ITS_CAMERA | `tn_*` · `type_management_center_id` · `location_name_its_ccroom` · `location_its_central_control_id` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | UI chrome tham chiếu · **cấm** SSOT data |
| Mẫu list | `docs/img/gov-mau-tai-san/25-moc_dbvn.tbl_its-list.png` | ĐV QL · tuyến · lý trình · VMS · màn hình · máy chủ · WIM · cống/cáp · trụ · TTĐH · vị trí phòng |
| Mẫu detail | `docs/img/gov-mau-tai-san/25-moc_dbvn.tbl_its-detail.png` | tab Thông tin chung · phòng điều hành · thiết bị trên cao tốc · vị trí điểm |
| Dump CSV | `moc_dbvn.tbl_its.2026.8.23.15.11.csv` (cite COVERAGE) | header eng · **9** row gov-vn |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **9** `ITS_CAMERA` · prefix `IT-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `ITS_CAMERA` · «Camera ITS» · unit `HTKT` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `camera` ↔ `ITS_CAMERA` · icon `CAM` · IdCode import prefix `IT-` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `ITS_CAMERA` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR ITS **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | **thiếu** toàn bộ key ITS §4 |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t19` · drill `ITS_CAMERA` · «Hệ thống giao thông thông minh» · icon `CAM` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · peer `so-ts-lighting` / `so-ts-rescue-vehicle` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (ITS dump attr + 3 tầng tuyến + điểm — key `tn_*` theo mẫu + SSOT §4; SA xác nhận header CSV):

`type_management_center_id|location_name_its_ccroom|location_its_central_control_id|tn_cctv_monitoring|tn_traffic_event_detection|tn_vms_interface|tn_traffic_analysis|tn_screen_controller|tn_traffic_analysis_processor|tn_incident_data_management|tn_data_server|tn_wim_high_speed|tn_cable_duct_length|tn_fiber_optic_length|tn_its_pole|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_b2b521dc`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `ITS_CAMERA` (ops) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung | Profile `ITS_CAMERA`: ĐV QL phòng ITS · 3 tầng tuyến · lý trình · VMS · màn hình · máy chủ · WIM · cống/cáp · trụ · loại TTĐH · vị trí phòng · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 ITS = mẫu Thông tin chung (phòng điều hành + thiết bị) | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-ITS-NAME-01 | Import: `name` thường = `route` (vd. `QL.1`) | `name` ← `location_name_its_ccroom` (Tên phòng điều hành ITS) · trống OK · **cấm** IsWeak → đoạn tuyến làm tên duy nhất | import + form |
| GAP-ITS-SPEC-01 | FE labels thiếu key ITS §4 | Label VN khớp dump/mẫu · form Input/Select/Number đủ cột §4 + `tn_*` | FE / form |
| GAP-ITS-POINT-01 | Form hiện `kmTo` với type chưa profile | Ops point: **không** bắt buộc `kmTo` · **ẩn** khi `type=ITS_CAMERA` · **cấm** ép `"0"` | form |
| GAP-ITS-PREFIX-01 | `DefaultCodePrefix` fallback `TS-` · import set dùng `IT-` | IdCode create/import **`IT-`** khớp GIS/gov-vn | BE |
| GAP-ITS-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-its-camera` · index chưa Navigate | Live `/so-ts?type=ITS_CAMERA` · alias route **DEFER** Design (tile `t19` deep-link OK) | shell |
| GAP-ITS-LOOKUP-01 | `type_management_center_id` · `location_its_central_control_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-ITS-CAM-01 | Peer `camera-connect` CRUD camera IP | Sổ TS `tbl_its` **tách** — **cấm** merge form camera-connect vào AssetFormPage ITS | scope |
| GAP-ITS-DUMP-KEY-01 | Header CSV `tbl_its` chưa cite trong repo | SA map key `tn_*` chính xác từ `moc_dbvn.tbl_its.*.csv` — analy dùng nhãn mẫu + SSOT §4 | SA |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `camera` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Hệ thống ITS» khi `type=ITS_CAMERA` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `ITS_CAMERA` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột ITS_CAMERA** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `camera` optional · **cấm** invent map canvas · **cấm** copy Camera MFE |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Dữ liệu thị sát / Bảo trì / Tệp / Ghi chú / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên phòng ITS · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `ITS_CAMERA` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=ITS_CAMERA`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên phòng điều hành ITS | link Text | **ON** | bind `location_name_its_ccroom` / `name` · **GAP-ITS-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| type_management_center_id | Loại trung tâm điều hành | Text / Dropdown label | ON | Theo tuyến / Theo khu vực |
| location_its_central_control_id | Vị trí phòng ITS | Text / Dropdown label | ON · hide-empty | Trên tuyến / Khác |
| tn_vms_interface | Tổng số thiết bị giao diện VMS | Number | ON · hide-empty | dumpSpecs · mẫu list |
| tn_screen_controller | Tổng số bộ điều khiển màn hình | Number | ON · hide-empty | dumpSpecs |
| tn_data_server | Tổng số máy chủ dữ liệu | Number | ON · hide-empty | dumpSpecs |
| tn_wim_high_speed | Tổng số bộ kiểm tra tải trọng tốc độ cao | Number | ON · hide-empty | dumpSpecs |
| tn_cable_duct_length | Tổng chiều dài hệ thống cống cáp | Number | ON · hide-empty | dumpSpecs · km |
| tn_fiber_optic_length | Tổng chiều dài cáp quang | Number | ON · hide-empty | dumpSpecs · list-only nếu detail không có |
| tn_its_pole | Tổng số trụ đỡ ITS | Number | ON · hide-empty | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `ITS_CAMERA` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL (quantity import ≠ thiết bị ITS) |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `IT-` |
| type | Loại tài sản | `SearchInput` | * | lock `ITS_CAMERA` khi create từ tile `t19` |
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
| name | Tên phòng điều hành ITS | `Text` | | SSOT `location_name_its_ccroom` · **GAP-ITS-NAME-01** · import hay = route |

### S-ATTR — Phòng điều hành (mẫu Thông tin chung)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_management_center_id | Loại trung tâm điều hành | `Dropdown` / `Text` | | Theo tuyến / Theo khu vực · **GAP-ITS-LOOKUP-01** |
| location_name_its_ccroom | Tên vị trí phòng điều hành ITS | `Text` | | mirror S-NAME |
| location_its_central_control_id | Vị trí phòng điều hành (trái/phải / trên tuyến) | `Dropdown` / `Text` | | **GAP-ITS-LOOKUP-01** |

### S-ATTR — Thiết bị trên cao tốc (đủ dump §4 `tn_*`)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| tn_cctv_monitoring | Tổng số thiết bị giám sát CCTV | `Number` | | dump · mẫu detail |
| tn_traffic_event_detection | Tổng số thiết bị phát hiện sự kiện giao thông | `Number` | | dump |
| tn_vms_interface | Tổng số thiết bị giao diện VMS | `Number` | | dump |
| tn_traffic_analysis | Tổng số thiết bị phân tích giao thông | `Number` | | dump |
| tn_screen_controller | Tổng số bộ điều khiển màn hình | `Number` | | dump |
| tn_traffic_analysis_processor | Tổng số bộ xử lý phân tích giao thông | `Number` | | dump |
| tn_incident_data_management | Tổng số hệ thống quản lý dữ liệu sự cố | `Number` | | dump |
| tn_data_server | Tổng số máy chủ dữ liệu (bộ CPU) | `Number` | | dump |
| tn_wim_high_speed | Tổng số bộ kiểm tra tải trọng tốc độ cao | `Number` | | dump |
| tn_cable_duct_length | Tổng chiều dài hệ thống cống cáp (km) | `Number` | | dump |
| tn_fiber_optic_length | Tổng chiều dài cáp quang (km) | `Number` | | dump · list có · detail có thể thiếu |
| tn_its_pole | Tổng số trụ đỡ các loại thuộc hệ thống ITS | `Number` | | dump |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select/Number (không chỉ readonly list). Key `tn_*` — SA xác nhận header CSV (**GAP-ITS-DUMP-KEY-01**).

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab legacy · field camera-connect (IP/RTSP/ONVIF).

## Open questions (PO)

1. Lookup seed vs Dropdown static cho `type_management_center_id` / `location_its_central_control_id`?
2. Alias route `/so-ts-its-camera` → Navigate `?type=ITS_CAMERA` — Design chốt?
3. Grid: cột thiết bị — luôn ON theo mẫu list, hay hide-empty theo GAP-SOTS-COL-01 (9 row nhỏ)?
4. Prefix IdCode: chốt `IT-` (gov-vn live) vs fallback `TS-` — SA/`DefaultCodePrefix`?
5. Key dump `tn_*` chính xác — SA cite header `moc_dbvn.tbl_its.*.csv` (**GAP-ITS-DUMP-KEY-01**)?
6. Scope tách `camera-connect` — PO xác nhận không gộp form kết nối camera vào sổ TS?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprint | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| status | `done` |
| analyzedAt | `2026-09-01T20:55:00.000Z` |
