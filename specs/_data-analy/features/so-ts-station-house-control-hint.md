# Data-analy — controlHint — so-ts-station-house (Kind B list + full-page form · type `STATION_HOUSE`)

| Field | Value |
|-------|-------|
| feature | `so-ts-station-house` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo · autoApprove queue) |
| contentHash | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprint | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| analyzedAt | `2026-09-01T00:47:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_road_admin_office` cite CTX) |
| taskId | `task_996ab920` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-station-house-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=STATION_HOUSE` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-station-house` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=STATION_HOUSE` |
| typeCode | `STATION_HOUSE` |
| dump | `tbl_road_admin_office` · mẫu `docs/img/gov-mau-tai-san/16-moc_dbvn.tbl_road_admin_office-list.png` · `16-moc_dbvn.tbl_road_admin_office-detail.png` · CSV gov-vn **374** row `STATION_HOUSE` · prefix `NH-` |
| clusterUi | `station` · ô KCHT `t22` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Parent grid note: list ưu tiên tên CT · 3 tầng tuyến · lý trình · loại CT; **ẩn** DT / CT phụ / vật tư / cấp / khuôn viên khi fill thấp trên mẫu list (**GAP-SOTS-COL-01**).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-station-house.md` | `3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/16-moc_dbvn.tbl_road_admin_office-list.png` | tên CT · tuyến · lý trình · loại CT · ẩn DT/cấp/CT phụ trống |
| Mẫu detail | `docs/img/gov-mau-tai-san/16-moc_dbvn.tbl_road_admin_office-detail.png` | tab Thông tin chung · vị trí điểm · attr nhà hạt |
| Dump CSV | `moc_dbvn.tbl_road_admin_office.2026.8.23.15.4.csv` | header eng + VN · cite sample `road_admin_office_525966` |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **374** `STATION_HOUSE` · prefix `NH-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `STATION_HOUSE` · «Nhà hạt QLĐB» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `nha-hat` ↔ `STATION_HOUSE` · prefix live `NH-` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST/SPILLWAY/INTERCHANGE/FERRY — **thiếu** STATION_HOUSE |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR STATION_HOUSE **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_building` · `type_work_id` — **thiếu** key DT/cấp/vật tư/vị trí/khuôn viên |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t22` · drill `STATION_HOUSE` · «Nhà hạt QLĐB, trụ sở chi cục» · icon `NH` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (STATION_HOUSE dump attr + 3 tầng tuyến + điểm):

`name_building|total_area_auxiliary_works|auxiliary_works_grade_id|total_area_office_building|materials_in_office|build_location|type_work_id|office_building_grade_id|site_area_using_land|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_996ab920`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `STATION_HOUSE` (station) + fill L3 analy stubs (không xóa parent asset / KM_POST / SPILLWAY / FERRY artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY/INTERCHANGE/FERRY) | Profile `STATION_HOUSE`: tên CT · 3 tầng tuyến · lý trình · loại CT (`type_work_id`) · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · **ẩn** DT/CT phụ/vật tư/cấp/khuôn viên khi fill thấp (mẫu list) | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY) | Field editable đủ dump §4 STATION_HOUSE = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-SH-NAME-01 | Rebuild: `name` thường đã = `name_building` (sample «hạt 1 QL1») | `name` ← `name_building` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-SH-SPEC-01 | FE `dumpSpecLabels` chỉ `name_building` (+ `type_work_id` generic «Loại tài sản») | Label VN khớp dump · `type_work_id` = «Loại công trình» · form Input/Select đủ cột §4 | FE / form |
| GAP-SH-POINT-01 | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=STATION_HOUSE` · `lytrinh` hay trống — **cấm** ép `"0"` | form |
| GAP-SH-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-station-house` · index chưa Navigate | Live `/so-ts?type=STATION_HOUSE` · alias route **DEFER** Design (tile `t22` deep-link OK · mirror ferry/spillway) | shell |
| GAP-SH-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-SH-LOOKUP-01 | `type_work_id` · `build_location` · `office_building_grade_id` · `auxiliary_works_grade_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `nha-hat` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Nhà hạt QLĐB» khi `type=STATION_HOUSE` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `STATION_HOUSE` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột STATION_HOUSE** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `nha-hat` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên CT · loại CT · tuyến · QR · tỉnh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `STATION_HOUSE` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=STATION_HOUSE`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên công trình | link Text | **ON** | bind `name` = `name_building` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống trên CSV) |
| type_work_id | Loại công trình | Text / Dropdown label | **ON** | dumpSpecs · mẫu list «Nhà hạt» / «Trụ sở chi cục» |
| build_location | Vị trí mặt cắt | Text / Dropdown label | optional | dumpSpecs · L/R/C |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| total_area_office_building | DT nhà làm việc (m²) | Number | **OFF default** | fill thấp / trống mẫu list · Design có thể bật schema |
| total_area_auxiliary_works | DT CT phụ (m²) | Number | **OFF default** | parent hide-empty |
| auxiliary_works_grade_id | Cấp CT phụ | Text | **OFF default** | parent hide-empty |
| office_building_grade_id | Cấp nhà làm việc | Text | **OFF default** | parent hide-empty |
| materials_in_office | Vật tư nhà hạt | Text | **OFF default** | parent hide-empty |
| site_area_using_land | DT khuôn viên (m²) | Number | **OFF default** | parent hide-empty |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `NH-` |
| type | Loại tài sản | `SearchInput` | * | lock `STATION_HOUSE` khi create từ tile `t22` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` · catalog KHAC |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` · catalog KHAC |

### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · CSV sample hay trống |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs |
| side / build_location | Mặt cắt | `Dropdown` | | dump `build_location` · Bên trái/phải · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_building | Tên công trình | `Text` | * | SSOT dump `name_building` · label «Tên công trình» · **GAP-SH-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_work_id | Loại công trình | `Dropdown` | * | LOOKUP_STATIC dump («Nhà hạt» · «Trụ sở chi cục») · **GAP-SH-LOOKUP-01** |
| build_location | Vị trí mặt cắt ngang đường | `Dropdown` | | Bên trái / Bên phải / Giữa · **GAP-SH-LOOKUP-01** |
| office_building_grade_id | Nhà làm việc (cấp) | `Dropdown` | | Cấp 3 / Cấp 4 · dump |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump |
| site_area_using_land | Diện tích khuôn viên (m²) | `Number` | | dump |
| auxiliary_works_grade_id | Công trình phụ (cấp) | `Dropdown` | | dump |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump |
| materials_in_office | Vật tư nhà hạt QLĐB | `TextArea` / `Text` | | dump free-text |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic cho STATION_HOUSE · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY/FERRY-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `type_work_id` / `build_location` / `office_building_grade_id` / `auxiliary_works_grade_id`?
2. Alias route `/so-ts-station-house` → Navigate `?type=STATION_HOUSE` (như spillway/ferry) — Design chốt?
3. Grid: giữ **ẩn** cột fill thấp (DT · cấp · CT phụ · vật tư · khuôn viên) theo parent GAP-SOTS-COL-01, hay bật một phần trên schema editor?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:3d78ed6a2ee20b192926ba4ab625d1af20e67dcb78d7035e543c976b364e7a45` |
| headerFingerprint | `sha256:2d2af503163d02586bf99b267baec1560a8feeea8641d58cbcf61573b8fb12f4` |
| status | `done` |
| analyzedAt | `2026-09-01T00:47:00.000Z` |
