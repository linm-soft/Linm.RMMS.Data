# Data-analy — controlHint — so-ts-row-util (Kind B list + full-page form · type `ROW_UTIL`)

| Field | Value |
|-------|-------|
| feature | `so-ts-row-util` |
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
| contentHash | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprint | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| analyzedAt | `2026-09-02T02:00:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_infrastructure_row` cite CTX) |
| taskId | `task_f00fb2cf` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-row-util-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=ROW_UTIL` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-row-util` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=ROW_UTIL` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` · mẫu `docs/img/gov-mau-tai-san/32-moc_dbvn.tbl_infrastructure_row-list.png` · `32-moc_dbvn.tbl_infrastructure_row-detail.png` · CSV gov-vn **13102** (`COVERAGE-KCHT-40`) |
| clusterUi | `land` · ô KCHT `t08` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `land` · parent SSOT **S-LOC-RANGE** · import có **km đầu + km cuối** → mount `kmFrom`/`kmTo` (khác LAND_ROW chỉ 1 lý trình).  
> Mẫu list: tên CT HTKT · loại CT · 3 tầng tuyến · lý trình đầu/cuối · chiều dài · số trụ · chủ sở hữu · **GAP-SOTS-COL-01** hide-empty khi fill 0.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-row-util.md` | `87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/32-moc_dbvn.tbl_infrastructure_row-list.png` | CT HTKT · loại · tuyến · km đầu/cuối · dài · số trụ · chủ |
| Mẫu detail | `docs/img/gov-mau-tai-san/32-moc_dbvn.tbl_infrastructure_row-detail.png` | tab Thông tin chung · S-ROUTE · S-LOC-RANGE · S-ATTR HTKT |
| Dump CSV | `moc_dbvn.tbl_infrastructure_row.2026.8.23.15.15.csv` | cite `COVERAGE-KCHT-40` **13102** rows |
| Import set | `…/gov-vn/road_assets*.csv` | **13102** `ROW_UTIL` · prefix live import **`HT-`** |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `ROW_UTIL` · «CT HTKT trong HLATĐB» · unit `HTKT` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `htkt` ↔ `ROW_UTIL` · icon `HT` · IdCode GIS short `HT` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `ROW_UTIL` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR ROW_UTIL **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | **thiếu** hầu hết key HTKT (`tencongtrinh_htk` · `number_post` · `located_within_id` …) |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t08` · drill `ROW_UTIL` · «Công trình HTKT trong phạm vi GPMB» · icon `HT` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · peer land `LAND_ROW` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (ROW_UTIL dump attr + 3 tầng tuyến + range):

`tencongtrinh_htk|type_work_id|length|number_post|owner|located_within_id|protection_tructure|type_protection_structure_id|support_type_id|distance_road_center|distance_between_supports|status_hiring_is_within_row|build_location|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|km_to|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|kmTo|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_f00fb2cf`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `ROW_UTIL` (land) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-02) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer profiles) | Profile `ROW_UTIL`: CT HTKT · loại CT · 3 tầng tuyến · kmFrom · kmTo · dài · số trụ · chủ · **ẩn** `type` khi `?type=` · **ẩn** SL/ĐVT · hide-empty cột dump fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 ROW_UTIL = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-ROWUTIL-NAME-01 | Import: `name` thường = route (`QL.1`) | `name` ← `tencongtrinh_htk` khi có · trống OK · **cấm** IsWeak → đoạn tuyến | import + form |
| GAP-ROWUTIL-SPEC-01 | FE labels thiếu key HTKT | Label VN khớp dump/mẫu | FE / form |
| GAP-ROWUTIL-RANGE-01 | Form `kmTo` generic | Cluster land + dump có km cuối: S-LOC-RANGE · hiện kmFrom/kmTo · **cấm** ép `"0"` khi trống | form |
| GAP-ROWUTIL-PREFIX-01 | `DefaultCodePrefix` → `TS-` · import `HT-` · GIS `HT` | create/import **`HT-`** khớp gov-vn · GIS icon `HT` giữ | BE |
| GAP-ROWUTIL-ROUTE-01 | STATUS alias thiếu Navigate | Live `/so-ts?type=ROW_UTIL` · alias **DEFER** Design (tile `t08` OK) | shell |
| GAP-ROWUTIL-LEAVE-01 | native confirm nếu còn | LeaveConfirmModal · useAlert — **cấm** native dialog | form |
| GAP-ROWUTIL-LOOKUP-01 | type_work/located_within/protection/support/status_hiring = text dump | Dropdown LOOKUP_STATIC **hoặc** SearchInput seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope (GIS `htkt` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — CT HTKT trong HL» khi `type=ROW_UTIL` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `ROW_UTIL` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột ROW_UTIL** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `htkt` optional |

**Skip chrome:** GOVOne · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · CT HTKT · loại · tuyến · chủ · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `ROW_UTIL` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=ROW_UTIL`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name / tencongtrinh_htk | Công trình HTKT | link Text | **ON** | bind `name` ← `tencongtrinh_htk` · **GAP-ROWUTIL-NAME-01** |
| type_work_id | Loại công trình | Text / Dropdown label | ON | dumpSpecs |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 |
| kmFrom | Lý trình đầu | Text chainage | ON | dump `lytrinh-kmlytrinh` hoặc scalar |
| kmTo | Lý trình cuối | Text chainage | ON | import có km cuối · khác LAND_ROW |
| length | Chiều dài (m) | Number | ON · hide-empty | dumpSpecs |
| number_post | Số trụ / cột | Number | ON · hide-empty | dumpSpecs |
| owner | Chủ sở hữu | Text | ON · hide-empty | dumpSpecs |
| located_within_id | Nằm trong phạm vi HL | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| build_location | Vị trí mặt cắt | Text / Dropdown label | optional | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | filter `ROW_UTIL` |
| quantity / unitCode | SL / ĐVT | — | **OFF** | unit seed `HTKT` |
| status | Tình trạng KT | Dropdown label | optional | schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `HT-` |
| type | Loại tài sản | `SearchInput` | * | lock `ROW_UTIL` từ tile `t08` |
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
| kmTo | Lý trình cuối | `Text` chainage | | import có km cuối · **GAP-ROWUTIL-RANGE-01** |
| lat / lng (đầu) | X / Y đầu | `Number` | | dump `from_coordinatex/y` |
| lat / lng (cuối) | X / Y cuối | `Number` | | dump `to_coordinatex/y` · hide-empty |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` |
| ward | Phường / Xã | `Text` / SearchInput | | dump `xaphuong` |

**Không mount** `S-LOC-POINT` (parent cluster `land` → RANGE).

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / tencongtrinh_htk | Công trình HTKT | `Text` | | dump `tencongtrinh_htk` · **GAP-ROWUTIL-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| tencongtrinh_htk | Công trình HTKT | `Text` | | mirror S-NAME |
| type_work_id | Loại công trình | `Dropdown` | * | LOOKUP_STATIC · **GAP-ROWUTIL-LOOKUP-01** |
| length | Chiều dài (m) | `Number` | | dump |
| number_post | Số trụ / cột | `Number` | | dump · hide-empty |
| owner | Chủ sở hữu | `Text` / `SearchInput` | | dump |
| located_within_id | Nằm trong phạm vi HL | `Dropdown` | | **GAP-ROWUTIL-LOOKUP-01** |
| protection_tructure | Công trình bảo vệ | `Text` | | dump typo key giữ |
| type_protection_structure_id | Loại kết cấu bảo vệ | `Dropdown` | | **GAP-ROWUTIL-LOOKUP-01** |
| support_type_id | Loại giá đỡ | `Dropdown` | | **GAP-ROWUTIL-LOOKUP-01** |
| distance_road_center | Khoảng cách đến tim đường (km) | `Number` | | dump · hide-empty |
| distance_between_supports | Khoảng cách giữa các giá (m) | `Number` | | dump · hide-empty |
| status_hiring_is_within_row | Tình trạng thuê trong HL | `Dropdown` | | **GAP-ROWUTIL-LOOKUP-01** |
| build_location | Vị trí mặt cắt ngang đường | `Dropdown` / `Text` | | dump · **GAP-ROWUTIL-LOOKUP-01** |

`dumpSpecs` JSON = nguồn đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

### S-GPS

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| lat / lng | Vĩ độ / Kinh độ | `Number` | bind scalar |
| qr | QR | `Text` | |
| valueVnd | Giá trị | `MoneyInput` | optional |
| note | Ghi chú | `TextArea` | |

## DoD handoff PO

1. control-hint + real-data **done** · compact `handoff/data_analy-compact.md`
2. packKind=`list` · changeScope=`new_page` · type=`ROW_UTIL` · cluster=`land`
3. Zones A–D + form sections id đủ · **cấm** invent API / ERP.*
4. Open: lookup static vs seed · alias route · prefix HT- · kmTo hiện RANGE

## Version / hash gate

| Gate | Value |
|------|-------|
| CTX sha256 | `87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| demo entry sha256 | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| dump headerFingerprint | `ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| skip overwrite | chỉ khi CTX+demo **unchanged** **và** artifacts đã `done` |
