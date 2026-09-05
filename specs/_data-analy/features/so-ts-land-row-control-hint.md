# Data-analy — controlHint — so-ts-land-row (Kind B list + full-page form · type `LAND_ROW`)

| Field | Value |
|-------|-------|
| feature | `so-ts-land-row` |
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
| contentHash | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprint | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| analyzedAt | `2026-09-01T08:20:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_land_btra` cite CTX) |
| taskId | `task_76d3fd4a` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-land-row-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=LAND_ROW` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-land-row` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=LAND_ROW` |
| typeCode | `LAND_ROW` |
| dump | `tbl_land_btra` · mẫu `docs/img/gov-mau-tai-san/9-tbl_land_btra-list.png` · `9-tbl_land_btra-detail.png` · CSV gov-vn **12** row `LAND_ROW` · prefix live import **`DT-`** |
| clusterUi | `land` · ô KCHT `t33` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `land` · parent SSOT **S-LOC-RANGE** · mẫu list/detail chỉ 1 lý trình → `kmTo` **ẩn** / hide-empty (`GAP-LAND-RANGE-01`).  
> Mẫu list: công trình trên đất · 3 tầng tuyến · lý trình · tình trạng thửa · xã · tỉnh · CQ chủ quản · CQ khai thác · dài · rộng · DT · **GAP-SOTS-COL-01** hide-empty khi fill 0.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-land-row.md` | `bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/9-tbl_land_btra-list.png` | CT trên đất · tuyến gộp · lý trình · TT thửa · xã/tỉnh · CQ · kích thước |
| Mẫu detail | `docs/img/gov-mau-tai-san/9-tbl_land_btra-detail.png` | tab Thông tin chung · S-ROUTE · vị trí điểm-like · S-ATTR đất |
| Dump CSV | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_land_btra.2026.8.23.14.16.csv` | header eng · sample `land_btra_404989` `construction=Nhà hạt` |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **12** `LAND_ROW` · prefix `DT-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `LAND_ROW` · «Đất thuộc TS hạ tầng» · unit `HTKT` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `dat-hlat` ↔ `LAND_ROW` · icon `HT` · IdCode GIS short `HT` (**≠** import `DT-`) |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `LAND_ROW` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR LAND_ROW **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | **thiếu** hầu hết key đất (`construction` · `status_land_lot_id` · `under_managemen` …) |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t33` · drill `LAND_ROW` · «Đất thuộc TS hạ tầng đường bộ» · icon `NL` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · peer land `ROW_UTIL` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (LAND_ROW dump attr + 3 tầng tuyến + range):

`construction|status_land_lot_id|under_managemen|under_operation|exploited_id|length|width|total_area|width_access_road|pavement_type_access_road_id|distance_road_center|access_road|location_id|lengthiness_access_road|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|kmTo|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_76d3fd4a`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `LAND_ROW` (land) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer profiles) | Profile `LAND_ROW`: CT trên đất · 3 tầng tuyến · lý trình · TT thửa · xã · tỉnh · CQ chủ quản · CQ khai thác · dài · rộng · DT · **ẩn** `type` khi `?type=` · **ẩn** SL/ĐVT · `kmTo` hide-empty | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 LAND_ROW = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-LAND-NAME-01 | Import: `name` thường = route (`QL.1`) | `name` ← `construction` khi có · trống OK · **cấm** IsWeak → đoạn tuyến | import + form |
| GAP-LAND-SPEC-01 | FE labels thiếu key đất | Label VN khớp dump/mẫu | FE / form |
| GAP-LAND-RANGE-01 | Form hiện `kmTo` generic | Cluster land: S-LOC-RANGE · mẫu 1 lý trình → `kmTo` không bắt buộc · ẩn fill 0 · **cấm** ép `"0"` | form |
| GAP-LAND-PREFIX-01 | `DefaultCodePrefix` → `TS-` · import `DT-` · GIS `HT` | create/import **`DT-`** khớp gov-vn · GIS icon `HT` giữ | BE |
| GAP-LAND-ROUTE-01 | STATUS alias thiếu Navigate | Live `/so-ts?type=LAND_ROW` · alias **DEFER** Design (tile `t33` OK) | shell |
| GAP-LAND-LEAVE-01 | native confirm nếu còn | LeaveConfirmModal · useAlert — **cấm** native dialog | form |
| GAP-LAND-LOOKUP-01 | status/exploited/pavement/location = text dump | Dropdown LOOKUP_STATIC **hoặc** SearchInput seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope (GIS `dat-hlat` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Đất thuộc TS HT» khi `type=LAND_ROW` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `LAND_ROW` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột LAND_ROW** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `dat-hlat` optional |

**Skip chrome:** GOVOne · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · CT trên đất · CQ · tuyến · tỉnh · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `LAND_ROW` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=LAND_ROW`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Công trình trên đất | link Text | **ON** | bind `name` = `construction` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (có thể trống) |
| status_land_lot_id | Tình trạng thửa đất | Text / Dropdown label | **ON** | dumpSpecs · «Có công trình» |
| xaphuong | Phường / Xã | Text | ON · hide-empty | dumpSpecs |
| tinhthanhpho | Tỉnh / TP | Text | ON | dumpSpecs |
| under_managemen | Cơ quan chủ quản | Text | ON | dumpSpecs · typo key dump giữ |
| under_operation | Cơ quan đang khai thác | Text | ON | dumpSpecs |
| length | Chiều dài (m) | Number | ON · hide-empty | dumpSpecs |
| width | Chiều rộng (m) | Number | ON · hide-empty | dumpSpecs |
| total_area | Tổng DT thửa đất (m²) | Number | ON | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | filter `LAND_ROW` |
| kmTo | Lý trình kết thúc | — | **OFF** / hide-empty | mẫu không cột |
| quantity / unitCode | SL / ĐVT | — | **OFF** | unit seed `HTKT` |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DT-` |
| type | Loại tài sản | `SearchInput` | * | lock `LAND_ROW` từ tile `t33` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` |

### S-LOC-RANGE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình đầu (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| kmTo | Lý trình cuối | `Text` chainage | | **ẩn**/optional · **GAP-LAND-RANGE-01** |
| lat / lng (đầu) | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` |
| ward | Phường / Xã | `Text` / SearchInput | | dump `xaphuong` |
| location_id | Vị trí mặt cắt ngang đường | `Dropdown` | | dump · Bên trái/phải |

**Không mount** `S-LOC-POINT` thay RANGE (parent cluster `land`).

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / construction | Công trình trên đất | `Text` | | dump `construction` · trống OK · **GAP-LAND-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| construction | Công trình trên đất | `Text` | | mirror S-NAME |
| status_land_lot_id | Tình trạng thửa đất | `Dropdown` | * | LOOKUP_STATIC · **GAP-LAND-LOOKUP-01** |
| under_managemen | Cơ quan chủ quản | `Text` / `SearchInput` | | dump typo key giữ |
| under_operation | Cơ quan đang khai thác | `Text` / `SearchInput` | | dump |
| exploited_id | Hình thức khai thác | `Dropdown` | | **GAP-LAND-LOOKUP-01** |
| length | Chiều dài (m) | `Number` | | dump |
| width | Chiều rộng (m) | `Number` | | dump |
| total_area | Tổng diện tích thửa đất (m²) | `Number` | | dump |
| width_access_road | Chiều rộng đường vào (m) | `Number` | | dump |
| pavement_type_access_road_id | Kết cấu mặt đường vào | `Dropdown` / `Text` | | **GAP-LAND-LOOKUP-01** |
| distance_road_center | Khoảng cách đến tim đường (km) | `Number` | | dump |
| access_road | Đường vào (Có/Không) | `Dropdown` boolean | | dump |
| location_id | Vị trí mặt cắt ngang đường | `Dropdown` | | **GAP-LAND-LOOKUP-01** |
| lengthiness_access_road | Chiều dài đường vào thửa đất (m) | `Number` | | dump §4 · hide-empty |

`dumpSpecs` JSON = nguồn đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

### S-GPS

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| lat / lng | Vĩ độ / Kinh độ | `Number` | bind scalar |
| qr | QR | `Text` | |
| valueVnd | Giá trị | `MoneyInput` | giatritaisan-* optional |
| note | Ghi chú | `TextArea` | |

## DoD handoff PO

1. control-hint + real-data **done** · compact `handoff/data_analy-compact.md`
2. packKind=`list` · changeScope=`new_page` · type=`LAND_ROW` · cluster=`land`
3. Zones A–D + form sections id đủ · **cấm** invent API / ERP.*
4. Open: lookup static vs seed · alias route · prefix DT- vs GIS HT · kmTo ẩn RANGE

## Version / hash gate

| Gate | Value |
|------|-------|
| CTX sha256 | `bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| demo entry sha256 | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| dump headerFingerprint | `54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| skip overwrite | chỉ khi CTX+demo **unchanged** **và** artifacts đã `done` (không áp dụng stub draft) |
