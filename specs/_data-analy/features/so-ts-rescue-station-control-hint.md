# Data-analy — controlHint — so-ts-rescue-station (Kind B list + full-page form · type `RESCUE_STATION`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rescue-station` |
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
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprint | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| analyzedAt | `2026-09-01T01:55:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_disaster_res_facility` cite CTX) |
| taskId | `task_ce7b30e4` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-rescue-station-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=RESCUE_STATION` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-rescue-station` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=RESCUE_STATION` |
| typeCode | `RESCUE_STATION` |
| dump | `tbl_disaster_res_facility` · mẫu `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-list.png` · `6-tbl_disaster_res_facility-detail.png` · CSV gov-vn **20** row `RESCUE_STATION` · prefix **`CN-`** |
| clusterUi | `station` · ô KCHT **`—`** (list only · **không** tile riêng; `t24` = `RESCUE_VEHICLE`) |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `station` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Gov mẫu list title «Kho bãi vật tư dự phòng» · seed type «Trạm cứu nạn» · CTX title «Công trình cứu hộ» — label UI theo CTX · field dump giữ key eng.  
> Parent: imported · **list only** trên KCHT · form vẫn enqueue qua shell `/so-ts` (reuse section).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-rescue-station.md` | `5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-list.png` | tên kho · tuyến · lý trình · vật tư · DT/cấp nhà/CT phụ/nhà kho |
| Mẫu detail | `docs/img/gov-mau-tai-san/6-tbl_disaster_res_facility-detail.png` | tab Thông tin chung · S-ROUTE · vị trí điểm · tên kho |
| Dump CSV | `moc_dbvn.tbl_disaster_res_facility.2026.8.23.14.14.csv` | COVERAGE cite · 20 row |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **20** `RESCUE_STATION` · prefix `CN-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `RESCUE_STATION` · «Trạm cứu nạn» · unit `TRAM` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `RESCUE_STATION` group `TS` (cùng EMS/RESCUE_VEHICLE) · **không** tile KCHT riêng |
| MFE list | `AssetListPage.tsx` | Kind B · profile STATION_HOUSE/… — **thiếu** `RESCUE_STATION` |
| MFE form | `AssetFormPage.tsx` | Kind B · S-ATTR `STATION_HOUSE` có · **thiếu** RESCUE_STATION keys |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_building` · cấp/DT nhà/CT phụ · **thiếu** `materials_in_store` · `stored_building_*` · `vitri` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | **không** drill `RESCUE_STATION` · `t24` = `RESCUE_VEHICLE` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (RESCUE_STATION dump attr + 3 tầng tuyến + điểm):

`name_building|materials_in_store|site_area_using_land|office_building_grade_id|total_area_office_building|auxiliary_works_grade_id|total_area_auxiliary_works|stored_building_grade_id|total_area_stored_building|vitri|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_ce7b30e4`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `RESCUE_STATION` (station) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile STATION_HOUSE/…) | Profile `RESCUE_STATION`: tên kho · 3 tầng tuyến · lý trình · `materials_in_store` · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · cột DT/cấp theo mẫu list (ON) hoặc hide-empty nếu fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR editable chỉ STATION_HOUSE (+ KM/SPILLWAY…) | Field editable đủ dump §4 RESCUE_STATION = mẫu Thông tin chung + attr kho | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl (non-profile types) | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-RS-NAME-01 | Rebuild: `name` thường = `name_building` (sample «Kho Hồng Lĩnh») · vài row = mã tuyến / `+` | `name` ← `name_building` · **cấm** IsWeak → đoạn tuyến · trống OK · **cấm** seed tên giả | import + form |
| GAP-RS-SPEC-01 | FE `dumpSpecLabels` thiếu `materials_in_store` · `stored_building_grade_id` · `total_area_stored_building` · `vitri` | Label VN khớp mẫu list · form Input/Select đủ cột §4 | FE / form |
| GAP-RS-POINT-01 | Form hiện `kmTo` với type ≠ profile point | Station point: **không** bắt buộc `kmTo` · **ẩn** khi `type=RESCUE_STATION` · CSV `km_from` hay trống — **cấm** ép `"0"` | form |
| GAP-RS-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-rescue-station` · index chưa Navigate | Live `/so-ts?type=RESCUE_STATION` · alias route **DEFER** Design (mirror station-house) | shell |
| GAP-RS-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-RS-LOOKUP-01 | `office_building_grade_id` · `auxiliary_works_grade_id` · `stored_building_grade_id` · `vitri` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump (Cấp 1–4 / Khác) **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-RS-TILE-01 | KCHT **không** ô drill RESCUE_STATION (ô `—`) | List-only dashboard · **không** invent tile · deep-link filter type OK | KCHT |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Công trình cứu hộ» khi `type=RESCUE_STATION` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `RESCUE_STATION` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng · **cấm** clone GOV «Tìm kiếm» button |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột RESCUE_STATION** · **cấm** gộp 1 ô tuyến DRVN |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | GIS group `TS` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử / Dữ liệu thị sát.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên kho · vật tư · tuyến · QR · tỉnh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RESCUE_STATION` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=RESCUE_STATION`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên kho bãi | link Text | **ON** | bind `name` = `name_building` · mẫu list |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh` / parse · CSV scalar hay trống |
| materials_in_store | Vật tư chứa trong kho | Text | **ON** | dumpSpecs · mẫu list |
| site_area_using_land | Diện tích khuôn viên (m²) | Number | **ON** (mẫu) | hide-empty nếu fill 0 toàn type |
| office_building_grade_id | Nhà làm việc (cấp) | Text / Dropdown label | **ON** (mẫu) | Cấp 1–4 / Khác |
| total_area_office_building | Tổng DT nhà làm việc (m²) | Number | **ON** (mẫu) | |
| auxiliary_works_grade_id | Công trình phụ (cấp) | Text / Dropdown label | **ON** (mẫu) | |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | Number | **ON** (mẫu) | |
| stored_building_grade_id | Nhà kho (cấp) | Text / Dropdown label | **ON** (mẫu) | |
| total_area_stored_building | Tổng DT nhà kho (m²) | Number | **ON** (mẫu) | |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CN-` |
| type | Loại tài sản | `SearchInput` | * | lock `RESCUE_STATION` khi create từ filter type |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | mẫu detail «Km 944 + 138» · CSV scalar hay trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs |
| vitri | Vị trí | `Text` / `Dropdown` | | dump `vitri` · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_building | Tên kho bãi | `Text` | * | SSOT dump `name_building` · label mẫu «Tên kho bãi» · **GAP-RS-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| materials_in_store | Vật tư chứa trong kho | `TextArea` / `Text` | | dump free-text · mẫu list |
| site_area_using_land | Diện tích khuôn viên (m²) | `Number` | | dump |
| office_building_grade_id | Nhà làm việc (cấp) | `Dropdown` | | Cấp 1–4 / Khác · **GAP-RS-LOOKUP-01** |
| total_area_office_building | Tổng DT nhà làm việc (m²) | `Number` | | dump |
| auxiliary_works_grade_id | Công trình phụ (cấp) | `Dropdown` | | **GAP-RS-LOOKUP-01** |
| total_area_auxiliary_works | Tổng DT CT phụ (m²) | `Number` | | dump |
| stored_building_grade_id | Nhà kho (cấp) | `Dropdown` | | **GAP-RS-LOOKUP-01** |
| total_area_stored_building | Tổng DT nhà kho (m²) | `Number` | | dump |
| vitri | Vị trí | `Text` / `Dropdown` | | dump · nếu chưa mount S-LOC |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic cho RESCUE_STATION · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột STATION_HOUSE-only (`type_work_id` · `build_location` · `materials_in_office`) trừ khi dump có.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `office_building_grade_id` / `auxiliary_works_grade_id` / `stored_building_grade_id` / `vitri`?
2. Alias route `/so-ts-rescue-station` → Navigate `?type=RESCUE_STATION` — Design chốt?
3. Grid: giữ **ON** cột DT/cấp theo mẫu list (fill có trên DRVN demo), hay áp hide-empty parent khi CSV fill thấp?
4. Label list «Tên kho bãi» vs CTX «Công trình cứu hộ» — PO chốt copy header/list?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprint | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| status | `done` |
| analyzedAt | `2026-09-01T01:55:00.000Z` |
