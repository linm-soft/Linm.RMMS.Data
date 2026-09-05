# Data-analy — controlHint — so-ts-culvert-x (Kind B list + full-page form · type `CULVERT_X`)

| Field | Value |
|-------|-------|
| feature | `so-ts-culvert-x` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + type-grid + import-gov-ssot gap + demo · live MFE/BE · synthetic · **UI từ mẫu**) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` (first fill stubs · CTX+demo · queue `roleOnly=data_analy`) |
| contentHash | `sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b` |
| headerFingerprint | `sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c` |
| analyzedAt | `2026-09-01T19:12:09.599Z` |
| cluster | — (**gap-no-source** CSV 0 · dump `tbl_*` chưa có · **cấm** seed) |
| taskId | `task_dbd8f71e` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-culvert-x-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=CULVERT_X` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-culvert-x` · live `http://localhost:9301/so-ts?type=CULVERT_X` |
| typeCode | `CULVERT_X` |
| dump | **thiếu** (`GAP-CULVERT-X-01`) · mẫu `22-cong-ngang-list.png` · `22-cong-ngang-detail.png` · CSV **0** · **cấm** seed |
| clusterUi | `crossing` · ô KCHT `t07` |
| parent | `so-ts-type-grid` · `import-gov-ssot` gap · `import-gov-asset-fields` (không § CULVERT_X) |
| runMode | `new_page` · greenfield type-profile trên shell Kind B |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / key dump.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> Demo = zone **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** fork `AssetFormPage` — reuse S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS.  
> **Cấm** tab legacy (`GAP-SOTS-TAB-01`). Crossing point → **ẩn** `kmTo`.  
> **GAP-CULVERT-X-01:** UI từ mẫu · CSV 0 · **cấm** seed.

## Sources

| Source | Path | note |
|--------|------|------|
| Context | `docs/context/features/so-ts-culvert-x.md` | contentHash CTX |
| Parent | `docs/context/features/so-ts-type-grid.md` | crossing · t07 · GAP-CULVERT-X-01 |
| Import gap | `docs/context/features/import-gov-ssot.md` | t07 · CSV 0 · thiếu bảng |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | không § CULVERT_X |
| KCHT attrs | `docs/context/features/asset-kcht-32.md` | Shape* · Aperture* · LengthM · DesignLoad · Inlet/Outlet |
| Demo | `Linm.RMMS.Demo/.../asset-demo.html` | UI only |
| Mẫu list/detail | `docs/img/gov-mau-tai-san/22-cong-ngang-*.png` | inventory UI |
| Entity / API | `RoadAssetEntity` · `RoadAssetsController` | `rmms_road_assets` · `api/v1/asset/road-assets` |
| Import / GIS | `RoadAssetCatalogHandler` · `GisInventoryMapper` | type `CULVERT_X` · prefix **`CN`** · layer `cong` |
| MFE | `AssetListPage` · `AssetFormPage` · `endpoint.ts` · `kchtTileConfig` t07 | thiếu profile CULVERT_X |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · **cấm ERP.*** |

Normalized header (proposed keys từ mẫu — đến khi có dump):

`type_work_id|culvert_shape_id|weight|number|width|height|crossing_length_culvert|material_body_id|has_upstream_head|upstream_head_structure_id|has_upstream_valve|has_downstream_head|has_downstream_valve|has_upstream_apron|upstream_apron_structure_id|upstream_apron_area|has_downstream_apron|downstream_apron_structure_id|downstream_apron_area|has_upstream_basin|has_downstream_basin|upstream_basin_width|downstream_basin_width|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_dbd8f71e`)

| ID | Current | New | Surface |
|----|---------|-----|---------|
| GAP-L3-REAL-DATA | Stub draft trống | §A+§B + meta `done` | data-analy |
| GAP-CULVERT-X-01 | CSV 0 | UI mẫu · empty OK · **cấm** seed | import |
| GAP-SOTS-COL-01 | schema chung | Profile CULVERT_X · ẩn type/kmTo/SL/ĐVT · hide-empty | list |
| GAP-SOTS-FORM-01 | dumpSpecs readonly | Editable S-ATTR = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | flat form | Mount S-* shared · **cấm** fork | form |
| GAP-CN-NAME-01 | mẫu không cột tên | `name` optional · **cấm** IsWeak→đoạn | form |
| GAP-CN-SPEC-01 | labels thiếu | Label VN + controls đủ | FE |
| GAP-CN-POINT-01 | hiện kmTo | **ẩn** kmTo | form |
| GAP-CN-ROUTE-01 | alias thiếu Navigate | live `?type=` · alias DEFER Design | shell |
| GAP-CN-LEAVE-01 | native confirm? | LeaveConfirmModal · useAlert | form |
| GAP-CN-LOOKUP-01 | text mẫu | Dropdown static vs SearchInput — PO | form |
| GAP-CN-PREFIX-01 | GIS `CN` | Create IdCode **`CN-`** | BE |
| GAP-CN-KEY-01 | proposed snake keys | SA remap khi có `tbl_*` | SA |
| GAP-SOTS-API-DOC | có thể ghi so-ts/* | Cite **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · CatalogFormShell · BFF/API road-assets · entity · **cấm ERP.*** · map canvas out of scope.

## Kind / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| List A | Header | title «Sổ TS — Cống thoát nước ngang» · **cấm** Thêm mới trên A |
| List B | Filter bar | SearchTextInput · type · route · km · org · Tạo mới · Refresh · Schema · History · **cấm** nút Tìm riêng |
| List C | Grid | profile CULVERT_X · row menu Xem/Sửa/Copy/Lịch sử |
| List D | Footer | LinCatalogListPagination 50/100/200/500 |
| Form | Full-page 5col | C/E/V/Copy · readOnly view · leave dirty · **cấm** tab legacy |
| Map | none | GIS `cong` deep-link optional |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · loại · hình dạng · VL · tuyến · QR |
| type | Loại tài sản | SearchInput | **asset-type** | prefills `CULVERT_X` · ẩn deep-link |
| route | Cao tốc / QL | SearchInput | **road-route** | **cấm** free-text |
| kmFrom | Lý trình từ | Text | chainage | filter |
| kmTo | Lý trình đến | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=CULVERT_X`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| type_work_id | Loại công trình | **ON** | «Cống thủy lợi» |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô |
| kmFrom | Lý trình | ON | |
| culvert_shape_id | Hình dạng | ON | Hộp / Bản · hide-empty OK |
| weight | Tải trọng | ON | |
| number | Số ngăn cống | ON | |
| width | Bề rộng lòng / ĐK trong (m) | ON · hide-empty | |
| height | Chiều cao TB lòng cống (m) | ON | |
| crossing_length_culvert | Chiều dài thân cống (m) | ON | |
| material_body_id | Vật liệu thân cống | ON · hide-empty | |
| name | Tên / mô tả | optional OFF | GAP-CN-NAME-01 |
| type / kmTo / quantity / unitCode | — | **OFF** | |

## Control hint — form sections

### S-META
| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| code | Mã tài sản | Text readonly | prefix `CN-` |
| type | Loại tài sản | SearchInput | lock `CULVERT_X` |
| status | Tình trạng KT | Dropdown | init-data |
| source | Nguồn | Dropdown | init-data |

### S-ROUTE
| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| route | Cao tốc / QL | SearchInput | road-route * |
| routeNamed | Tuyến | SearchInput | parentCode=route |
| routeSegment | Đoạn tuyến | SearchInput | parent cascade |

### S-LOC-POINT
| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| kmFrom | Lý trình | Text | * · ẩn kmTo |
| tinhthanhpho | Tỉnh / TP | Text / Search | mẫu detail |
| xaphuong | Phường / Xã | Text / Search | |

### S-NAME
| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| name | Tên / mô tả cống | Text | optional · GAP-CN-NAME-01 |

### S-ATTR
| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| type_work_id | Loại công trình | Dropdown | * LOOKUP_STATIC |
| culvert_shape_id | Hình dạng | Dropdown | * |
| weight | Tải trọng | Number | |
| number | Số ngăn cống | Number | |
| width | Bề rộng lòng / ĐK trong (m) | Number | Aperture |
| height | Chiều cao TB lòng cống (m) | Number | |
| crossing_length_culvert | Chiều dài thân cống (m) | Number | |
| material_body_id | Vật liệu thân cống | Dropdown | |
| has_upstream_head | Có đầu cống thượng lưu? | Checkbox | |
| upstream_head_structure_id | Kết cấu đầu thượng lưu | Dropdown/Text | khi has |
| has_upstream_valve | Có van/phai thượng lưu? | Checkbox | |
| has_downstream_head | Có đầu cống hạ lưu? | Checkbox | |
| has_downstream_valve | Có van/phai hạ lưu? | Checkbox | |
| has_upstream_apron | Có sân thượng lưu? | Checkbox | |
| upstream_apron_structure_id | Kết cấu sân thượng lưu | Dropdown/Text | |
| upstream_apron_area | DT sân thượng lưu (m²) | Number | |
| has_downstream_apron | Có sân hạ lưu? | Checkbox | |
| downstream_apron_structure_id | Kết cấu sân hạ lưu | Dropdown/Text | |
| downstream_apron_area | DT sân hạ lưu (m²) | Number | |
| has_upstream_basin | Có hố tụ thượng lưu? | Checkbox | |
| has_downstream_basin | Có hố tụ hạ lưu? | Checkbox | |
| upstream_basin_width | Bề rộng hố tụ thượng (m) | Number | |
| downstream_basin_width | Bề rộng hố tụ hạ (m) | Number | |

### S-GPS
| key | Label | controlHint | Notes |
|-----|-------|-------------|-------|
| lat / lng | Vĩ độ / Kinh độ | Number | Y/X mẫu |
| qr / valueVnd / note | QR / Giá trị / Ghi chú | Text / Money / TextArea | |

## UNCLEAR (PO Ask trước Design)

1. GAP-CN-LOOKUP-01 — Dropdown static vs SearchInput seed  
2. GAP-CN-NAME-01 — cột `name` trên list?  
3. GAP-CN-ROUTE-01 — alias Navigate  
4. GAP-CN-KEY-01 — giữ proposed keys hay chờ dump trước Dev  
5. hide-empty vs always-ON cho `width` · `material_body_id`

## Handoff

| Role | Dùng |
|------|------|
| PO | Inventory · empty-OK · Ask UNCLEAR · **cấm** seed |
| Design | control-map · Kind B prototype · filter-bar SSOT |
| SA | giữ road-assets · prefix CN- · remap keys khi dump |
| TL/Dev | type-profile + S-ATTR + labels |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b headerFingerprint=sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c analyzedAt=2026-09-01T19:12:09.599Z taskId=task_dbd8f71e -->
