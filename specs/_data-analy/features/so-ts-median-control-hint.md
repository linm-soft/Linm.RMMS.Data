# Data-analy — controlHint — so-ts-median (Kind B list + full-page form · type `MEDIAN`)

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
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
| contentHash | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| headerFingerprint | `sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7` |
| analyzedAt | `2026-09-01T17:00:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_median_strip` cite CTX) |
| taskId | `task_cecf0af7` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-median-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=MEDIAN` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-median` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=MEDIAN` |
| typeCode | `MEDIAN` |
| dump | `tbl_median_strip` · mẫu `docs/img/gov-mau-tai-san/23-moc_dbvn.tbl_median_strip-list.png` · `23-moc_dbvn.tbl_median_strip-detail.png` · CSV gov-vn **6829** (`COVERAGE-KCHT-40`) |
| clusterUi | `linear_protect` · ô KCHT `t11` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `linear_protect` · parent SSOT **S-LOC-RANGE** · mẫu list/detail có **km đầu + km cuối** + 4 XY → mount `kmFrom`/`kmTo` + XY đầu/cuối.  
> Mẫu list: loại dải · tuyến (tách 3 tầng Linm) · lý trình đầu/cuối · dài/rộng · cỏ/cây · hàng rào · **ẩn** ảnh đại diện GOV · **GAP-SOTS-COL-01**.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-median.md` | `19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/23-moc_dbvn.tbl_median_strip-list.png` | loại dải · tuyến gộp · km đầu/cuối · dài/rộng · cỏ/cây · hàng rào · ảnh N/A |
| Mẫu detail | `docs/img/gov-mau-tai-san/23-moc_dbvn.tbl_median_strip-detail.png` | tab Thông tin chung · S-ROUTE · S-LOC-RANGE · S-ATTR đủ dump §4 |
| Dump CSV | `moc_dbvn.tbl_median_strip.2026.8.23.15.8.csv` | cite `COVERAGE-KCHT-40` **6829** rows · path raw theo set gov-vn |
| Import set | `…/gov-vn` · type `MEDIAN` | 6829 · unit seed `ATGT` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `MEDIAN` · «Dải phân cách giữa» · unit `ATGT` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `dai-phan-cach` ↔ `MEDIAN` · IdCode GIS short **`GPC`** |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `MEDIAN` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR MEDIAN **chưa** editable set |
| FE labels | `services/asset/dumpSpecLabels.ts` | chỉ có `median_strip` (INTERCHANGE) · **thiếu** toàn bộ 10 key dump §4 MEDIAN |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t11` · drill `MEDIAN` · «Dải phân cách giữa» · icon `GPC` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (MEDIAN dump attr + 3 tầng tuyến + range):

`type_median_strip_id|length_median_strip|width_median_strip|planting_grass|planting_grass_area|planting_tree|number_tree|height_fence|material_type_fence_id|location_median_strip_id|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|km_to|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|tinhthanhpho|xaphuong|tinhthanhpho_cuoi|xaphuong_cuoi|code|type|status|source|route|routenamed|routesegment|kmfrom|kmto|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_cecf0af7`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `MEDIAN` (linear_protect) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer profiles) | Profile `MEDIAN`: loại dải · 3 tầng tuyến · kmFrom · kmTo · dài/rộng · cỏ/cây · hàng rào · **ẩn** `type` khi `?type=` · **ẩn** ảnh đại diện GOV · **ẩn** KM_POST-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 MEDIAN = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-MEDIAN-NAME-01 | Dump **không** cột `name_*` official (§3) · IsWeak risk → đoạn | `name` optional · list primary = `type_median_strip_id` (+ km) · **cấm** IsWeak → `routeSegment` | import + form |
| GAP-MEDIAN-SPEC-01 | FE labels thiếu toàn bộ key dump MEDIAN | Label VN khớp mẫu · đủ 10 key §4 | FE / form |
| GAP-MEDIAN-RANGE-01 | Form `kmTo` generic / thiếu 4 XY range | Cluster linear_protect: S-LOC-RANGE · mẫu có km cuối + XY đầu/cuối · **cấm** ép `"0"` khi trống | form |
| GAP-MEDIAN-PREFIX-01 | `DefaultCodePrefix` → `TS-` · GIS short `GPC` | create/import đề xuất **`PC-`** khớp RebuildGovVn · PO/SA chốt | BE |
| GAP-MEDIAN-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-median` | Live `/so-ts?type=MEDIAN` · alias **DEFER** Design (tile `t11` OK) | shell |
| GAP-MEDIAN-LEAVE-01 | native confirm nếu còn | LeaveConfirmModal · useAlert — **cấm** native dialog | form |
| GAP-MEDIAN-LOOKUP-01 | `type_median_strip_id` · `material_type_fence_id` · `location_median_strip_id` = text dump | Dropdown LOOKUP_STATIC dump **hoặc** SearchInput seed — PO chốt | form |
| GAP-MEDIAN-BOOL-01 | `planting_grass` · `planting_tree` = text dump | Select boolean / checkbox kit — PO chốt | form / list |
| GAP-SOTS-API-DOC | Parent có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope (GIS `dai-phan-cach` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Dải phân cách giữa» khi `type=MEDIAN` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `MEDIAN` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột MEDIAN** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `dai-phan-cach` optional |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử · **cấm** cột ảnh đại diện invent.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại dải · tuyến · QR · địa danh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `MEDIAN` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=MEDIAN`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| type_median_strip_id | Loại dải phân cách | Text / Dropdown label | **ON** | dumpSpecs · mẫu list primary · CTX §6 |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | mẫu list · RANGE |
| length_median_strip | Chiều dài dải (m) | Number | ON | dumpSpecs · mẫu list |
| width_median_strip | Chiều rộng dải (m) | Number | ON | dumpSpecs · mẫu list |
| planting_grass | Trồng cỏ | Text / Select bool | ON | dumpSpecs · **GAP-MEDIAN-BOOL-01** |
| planting_grass_area | Diện tích trồng cỏ (m²) | Number | hide-empty | dumpSpecs |
| planting_tree | Trồng cây | Text / Select bool | ON | dumpSpecs · **GAP-MEDIAN-BOOL-01** |
| number_tree | Số cây | Number | hide-empty | dumpSpecs |
| height_fence | Chiều cao hàng rào (m) | Number | ON | dumpSpecs · mẫu list |
| material_type_fence_id | Vật liệu hàng rào | Text | ON | dumpSpecs · mẫu list |
| location_median_strip_id | Vị trí dải phân cách | Text | hide-empty | dumpSpecs |
| provinceFrom / communeFrom | Địa danh điểm đầu | Text | hide-empty | dumpSpecs / derived |
| provinceTo / communeTo | Địa danh điểm cuối | Text | hide-empty | dumpSpecs |
| name | Tên | link Text | optional | **GAP-MEDIAN-NAME-01** |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | hide-empty | unit seed `ATGT` · **không** bắt buộc grid |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · đề xuất prefix `PC-` (**GAP-MEDIAN-PREFIX-01**) |
| type | Loại tài sản | `SearchInput` | * | lock `MEDIAN` khi create từ tile `t11` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` · catalog KHAC |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` · catalog KHAC |

### S-LOC-RANGE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình điểm đầu (Km+) | `Text` chainage | * | mẫu detail · **cấm** ép `"0"` |
| kmTo | Lý trình điểm cuối (Km+) | `Text` chainage | * | mẫu detail có giá trị |
| latFrom / lngFrom | Tọa độ điểm đầu Y / X | `Number` | | dump `from_coordinatey/x` (Y→lat · X→lng) |
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-MEDIAN-RANGE-01** |
| provinceFrom | Địa danh điểm đầu (tỉnh) | `Text` / SearchInput | | mẫu ĐVHC |
| provinceTo | Địa danh điểm cuối (tỉnh) | `Text` / SearchInput | | |

**Không mount** `S-LOC-POINT` thay RANGE cho type này.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-MEDIAN-NAME-01** · **cấm** bắt buộc đoạn tuyến |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_median_strip_id | Loại dải phân cách | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-MEDIAN-LOOKUP-01** |
| length_median_strip | Chiều dài dải (m) | `Number` | * | mẫu detail / list |
| width_median_strip | Chiều rộng dải (m) | `Number` | | mẫu detail / list |
| planting_grass | Trồng cỏ | `Select` boolean | | **GAP-MEDIAN-BOOL-01** |
| planting_grass_area | Diện tích trồng cỏ (m²) | `Number` | | hide-empty grid |
| planting_tree | Trồng cây | `Select` boolean | | **GAP-MEDIAN-BOOL-01** |
| number_tree | Số cây | `Number` | | hide-empty |
| height_fence | Chiều cao hàng rào (m) | `Number` | | mẫu detail / list |
| material_type_fence_id | Vật liệu hàng rào | `Dropdown` | | LOOKUP_STATIC · **GAP-MEDIAN-LOOKUP-01** |
| location_median_strip_id | Vị trí dải phân cách | `Dropdown` | | LOOKUP_STATIC / init vitriOptions |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly list).

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | có thể = latFrom |
| lng | Kinh độ | `Number` | | có thể = lngFrom |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST-only · ảnh đại diện invent · quantity/unit bắt buộc trên grid.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | Lookup `type_median_strip_id` / `material_type_fence_id` / `location_median_strip_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | `name` bắt buộc hay ẩn khi trống (dump không có `name_*`)? | optional · list primary = loại dải |
| 3 | Alias route `/so-ts-median` vs chỉ `?type=MEDIAN`? | Giữ filter URL · STATUS alias = board link |
| 4 | Prefix IdCode `PC-` (RebuildGovVn) vs `TS-` default? | `PC-` khớp GIS short `GPC` |
| 5 | Flatten dump attrs ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |
| 6 | 4 XY range = scalar entity hay chỉ dumpSpecs? | dumpSpecs/XY fields P1 · SA chốt |
| 7 | `planting_grass` / `planting_tree` = Select boolean hay Text dump? | Select boolean P1 |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| headerFingerprint | `sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7` |
| analyzedAt | `2026-09-01T17:00:00.000Z` |
| taskId | `task_cecf0af7` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5 -->
