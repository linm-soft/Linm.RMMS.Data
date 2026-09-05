# Data-analy — controlHint — so-ts-toll (Kind B list + full-page form · type `TOLL`)

| Field | Value |
|-------|-------|
| feature | `so-ts-toll` |
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
| contentHash | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprint | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| analyzedAt | `2026-09-01T04:55:12.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_toll_booth` cite CTX) |
| taskId | `task_ae3ed12b` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-toll-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=TOLL` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-toll` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=TOLL` |
| typeCode | `TOLL` |
| dump | `tbl_toll_booth` · mẫu `docs/img/gov-mau-tai-san/37-moc_dbvn.tbl_toll_booth-list.png` · `37-moc_dbvn.tbl_toll_booth-detail.png` · CSV gov-vn imported · prefix `TFP-` |
| clusterUi | `station` · ô KCHT `t28` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên trạm · 3 tầng tuyến · lý trình · phương pháp cân · số làn cân/ETC/thủ công · cấp nhà · DT cổng (**GAP-SOTS-COL-01** hide-empty khi fill 0).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-toll.md` | `6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | section reuse · cluster `station` · ô `t28` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` §3 · §4 TOLL | dump columns |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/37-moc_dbvn.tbl_toll_booth-list.png` | tên trạm · tuyến · lý trình · làn cân · ETC · cấp |
| Mẫu detail | `docs/img/gov-mau-tai-san/37-moc_dbvn.tbl_toll_booth-detail.png` | tab Thông tin chung · vị trí điểm · attr trạm thu phí |
| Dump CSV | `moc_dbvn.tbl_toll_booth.*.csv` | header eng · cite import handler |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | `TOLL` imported · prefix `TFP-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `TOLL` · «Trạm thu phí» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `tram-thu-phi` ↔ `TOLL` · IdCode prefix live `TFP` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `TOLL` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR TOLL **chưa** editable đủ |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `station_name` · **thiếu** `weighting_method` · `number_weighting_lane` · `number_etc_lane` · `number_manual_lane` · `number_one_stop_lane` · `roof_structures_gate_id` · `pavement_type_id` · `house_grade_id` · `auxiliary_works_grade_id` · `road_structure_id` · `operation_building_location_id` · `area_yoll_gate_pavement` · `length_reinforcement` · `land_area_*` · `solanETC` · `solancantaitrong` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t28` · drill `TOLL` · «Trạm thu phí» · icon `NH` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · slug peer `so-ts-weigh-station` / `so-ts-bus-station` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (TOLL dump attr + 3 tầng tuyến + điểm):

`station_name|weighting_method|number_weighting_lane|roof_structures_gate_id|number_one_stop_lane|number_manual_lane|number_etc_lane|length_reinforcement|pavement_type_id|area_yoll_gate_pavement|operation_building_location_id|house_grade_id|auxiliary_works_grade_id|road_structure_id|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_ae3ed12b`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `TOLL` (station) + fill L3 analy stubs (không xóa parent / peer station artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile peer station) | Profile `TOLL`: tên trạm · 3 tầng tuyến · lý trình · phương pháp cân · số làn cân · số làn ETC · số làn thủ công · cấp nhà · DT cổng · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 (DT / CT phụ / cấp nếu dump trống) | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ type đã editable) | Field editable đủ dump §4 TOLL = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-TOLL-NAME-01 | Rebuild: `name` có thể lệch dump | `name` ← `station_name` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-TOLL-SPEC-01 | FE labels thiếu hầu hết cột §4 TOLL | Label VN khớp dump/mẫu · form Input/Select/Number đủ cột §4 | FE / form |
| GAP-TOLL-POINT-01 | Form hiện `kmTo` với type chưa profile | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=TOLL` · **cấm** ép `"0"` | form |
| GAP-TOLL-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-toll` · index chưa Navigate | Live `/so-ts?type=TOLL` · alias route **DEFER** Design (tile `t28` deep-link OK) | shell |
| GAP-TOLL-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-TOLL-LOOKUP-01 | `weighting_method` · `roof_structures_gate_id` · `pavement_type_id` · `house_grade_id` · `auxiliary_works_grade_id` · `road_structure_id` · `operation_building_location_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `tram-thu-phi` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Trạm thu phí» khi `type=TOLL` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `TOLL` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột TOLL** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `tram-thu-phi` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên trạm · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `TOLL` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=TOLL`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên trạm | link Text | **ON** | bind `name` = `station_name` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| weighting_method | Phương pháp cân | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| number_weighting_lane | Số làn cân | Number | ON · hide-empty | dumpSpecs |
| number_etc_lane | Số làn ETC | Number | ON · hide-empty | dumpSpecs |
| number_manual_lane | Số làn thu phí thủ công | Number | ON · hide-empty | dumpSpecs |
| number_one_stop_lane | Số làn một dừng | Number | optional / hide-empty | dumpSpecs |
| house_grade_id | Cấp nhà | Text / Dropdown label | ON · hide-empty | dumpSpecs · cluster station |
| area_yoll_gate_pavement | DT mặt cổng thu phí (m²) | Number | optional / hide-empty | typo dump `yoll` |
| auxiliary_works_grade_id | Cấp CT phụ | Text / Dropdown | **OFF** default | hide-empty cluster station |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `TOLL` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `TFP-` |
| type | Loại tài sản | `SearchInput` | * | lock `TOLL` khi create từ tile `t28` |
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
| operation_building_location_id | Vị trí nhà điều hành | `Dropdown` | | dump §4 · có thể S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / station_name | Tên trạm | `Text` | * | SSOT dump `station_name` · label «Tên trạm» · **GAP-TOLL-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| weighting_method | Phương pháp cân | `Dropdown` / `Text` | | **GAP-TOLL-LOOKUP-01** |
| number_weighting_lane | Số làn cân | `Number` | | dump |
| number_one_stop_lane | Số làn một dừng | `Number` | | dump |
| number_manual_lane | Số làn thu phí thủ công | `Number` | | dump |
| number_etc_lane | Số làn ETC | `Number` | | dump |
| roof_structures_gate_id | Kết cấu mái cổng | `Dropdown` | | **GAP-TOLL-LOOKUP-01** |
| length_reinforcement | Chiều dài gia cố (m) | `Number` | | dump |
| pavement_type_id | Loại mặt đường | `Dropdown` | | **GAP-TOLL-LOOKUP-01** |
| area_yoll_gate_pavement | Diện tích mặt cổng thu phí (m²) | `Number` | | typo dump |
| width_* | Chiều rộng (các hạng mục) | `Number` | | dump `width_*` — Design gộp nhãn theo mẫu |
| house_grade_id | Cấp nhà | `Dropdown` / `Text` | | **GAP-TOLL-LOOKUP-01** |
| auxiliary_works_grade_id | Cấp công trình phụ | `Dropdown` / `Text` | | hide-empty cluster |
| land_area_* | Diện tích đất (m²) | `Number` | | dump `land_area_*` |
| solanETC | Số lần ETC | `Number` | | dump (nếu có trên mẫu) |
| solancantaitrong | Số lần cân tải trọng | `Number` | | dump (nếu có trên mẫu) |
| road_structure_id | Kết cấu đường | `Dropdown` | | **GAP-TOLL-LOOKUP-01** |

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

1. Lookup seed vs Dropdown static từ distinct dump cho `weighting_method` / `roof_structures_gate_id` / `pavement_type_id` / `house_grade_id` / `road_structure_id` / `operation_building_location_id`?
2. Alias route `/so-ts-toll` → Navigate `?type=TOLL` — Design chốt?
3. Grid: cột làn cân / ETC / cấp / DT cổng — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?
4. Nhóm `width_*` trên form — gộp section hay từng field theo mẫu detail?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprint | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| status | `done` |
| analyzedAt | `2026-09-01T04:55:12.000Z` |
