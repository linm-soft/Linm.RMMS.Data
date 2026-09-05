# Data-analy — controlHint — so-ts-slope-protect (Kind B list + full-page form · type `SLOPE_PROTECT`)

| Field | Value |
|-------|-------|
| feature | `so-ts-slope-protect` |
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
| contentHash | `sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| headerFingerprint | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| analyzedAt | `2026-09-01T18:29:28.978Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_slope` cite CTX) |
| taskId | `task_1e8df2bf` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-slope-protect-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=SLOPE_PROTECT` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-slope-protect` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=SLOPE_PROTECT` |
| typeCode | `SLOPE_PROTECT` |
| dump | `tbl_slope` · mẫu `docs/img/gov-mau-tai-san/33-moc_dbvn.tbl_slope-list.png` · `33-moc_dbvn.tbl_slope-detail.png` · CSV gov-vn **10547** (`COVERAGE-KCHT-40`) |
| clusterUi | `linear_protect` · ô KCHT `t12` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `linear_protect` · parent SSOT **S-LOC-RANGE** · mẫu list/detail có **km đầu + km cuối** + 4 XY → mount `kmFrom`/`kmTo` + XY đầu/cuối.  
> Mẫu list: kiểu bảo vệ · tuyến (tách 3 tầng Linm) · lý trình đầu/cuối · phân loại mái dốc · chiều dài bảo vệ · chiều cao TB · **ẩn** ảnh đại diện GOV · **GAP-SOTS-COL-01**.  
> GIS layer `mai-doc` = `SLOPE_PROTECT` · peer `ta-luy` gộp `RETAINING`+`SLOPE_PROTECT` — **page filter vẫn `SLOPE_PROTECT` only**.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-slope-protect.md` | `52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/33-moc_dbvn.tbl_slope-list.png` | kiểu BV · tuyến gộp · km đầu/cuối · phân loại · dài BV · cao TB · loại TS N/A ảnh |
| Mẫu detail | `docs/img/gov-mau-tai-san/33-moc_dbvn.tbl_slope-detail.png` | tab Thông tin chung · S-ROUTE · S-LOC-RANGE · vị trí mặt cắt · S-ATTR kiểu/phân loại/dài/cao |
| Dump CSV | `moc_dbvn.tbl_slope.2026.8.23.15.16.csv` | cite `COVERAGE-KCHT-40` **10547** rows · path raw theo set gov-vn |
| Import set | `…/gov-vn` · type `SLOPE_PROTECT` | 10547 · unit seed `KET_CAU` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `SLOPE_PROTECT` · «Bảo vệ mái dốc» · unit `KET_CAU` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `mai-doc` ↔ `SLOPE_PROTECT` · peer layer `ta-luy` (+ `RETAINING`) · IdCode GIS short **`MD`** |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `SLOPE_PROTECT` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR SLOPE_PROTECT **chưa** editable set |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `average_height` · `actual_protected` · `location_id` — **thiếu** `protection_type_id` · `slope_classification_id` · label `location_id`/`actual_protected` lệch mẫu |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| FE lookup | `services/asset/lookups.ts` | có nhãn «Taluy / nền đường» / `SLOPE_PROTECT` |
| KCHT tile | `kchtTileConfig.ts` | `t12` · drill `SLOPE_PROTECT` · «Bảo vệ mái dốc (gia cố mái ta luy)» · icon `MD` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (SLOPE_PROTECT dump attr + 3 tầng tuyến + entity):

`protection_type_id|slope_classification_id|actual_protected|location_id|average_height|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|km_to|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|tinhthanhpho|xaphuong|tinhthanhpho_cuoi|xaphuong_cuoi|code|type|status|source|route|routenamed|routesegment|kmfrom|kmto|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_1e8df2bf`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `SLOPE_PROTECT` (linear_protect) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer profiles) | Profile `SLOPE_PROTECT`: kiểu BV · 3 tầng tuyến · kmFrom · kmTo · phân loại · dài BV · cao TB · **ẩn** entity `type` khi `?type=` · **ẩn** ảnh GOV · **ẩn** KM_POST-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 SLOPE_PROTECT = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-SLOPE-NAME-01 | Dump **không** cột `name_*` official (§3) · IsWeak risk → đoạn | `name` optional · list primary = `protection_type_id` (+ km) · **cấm** IsWeak → `routeSegment` | import + form |
| GAP-SLOPE-SPEC-01 | FE labels thiếu `protection_type_id` / `slope_classification_id` · `actual_protected`/`location_id` lệch mẫu | Label VN khớp mẫu · đủ 5 key §4 | FE / form |
| GAP-SLOPE-RANGE-01 | Form `kmTo` generic / thiếu 4 XY range | Cluster linear_protect: S-LOC-RANGE · mẫu có km cuối + XY đầu/cuối · **cấm** ép `"0"` khi trống | form |
| GAP-SLOPE-PREFIX-01 | `DefaultCodePrefix` → `TS-` · GIS short `MD` · pavement cũng `MD` | create/import đề xuất **`MD-`** khớp GIS · PO/SA chốt conflict với `pavement-sections` | BE |
| GAP-SLOPE-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-slope-protect` | Live `/so-ts?type=SLOPE_PROTECT` · alias **DEFER** Design (tile `t12` OK) | shell |
| GAP-SLOPE-LEAVE-01 | native confirm nếu còn | LeaveConfirmModal · useAlert — **cấm** native dialog | form |
| GAP-SLOPE-LOOKUP-01 | `protection_type_id` · `slope_classification_id` · `location_id` = text dump | Dropdown LOOKUP_STATIC dump **hoặc** SearchInput seed — PO chốt | form |
| GAP-SLOPE-PEER-01 | GIS `ta-luy` = RETAINING + SLOPE_PROTECT | Page này **chỉ** `type=SLOPE_PROTECT` · peer `RETAINING` = feature riêng · layer `mai-doc` = SLOPE only | list / GIS |
| GAP-SOTS-API-DOC | Parent có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope (GIS `mai-doc` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Bảo vệ mái dốc» khi `type=SLOPE_PROTECT` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `SLOPE_PROTECT` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột SLOPE_PROTECT** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `mai-doc` optional |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử · **cấm** cột ảnh đại diện invent.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · kiểu BV · tuyến · QR · địa danh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `SLOPE_PROTECT` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=SLOPE_PROTECT`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| protection_type_id | Kiểu bảo vệ | Text / Dropdown label | **ON** | dumpSpecs · mẫu list primary · CTX §6 |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | mẫu list · RANGE |
| slope_classification_id | Phân loại mái dốc | Text | ON | dumpSpecs · mẫu list |
| actual_protected | Chiều dài bảo vệ, gia cố (m) | Number | ON | dumpSpecs · mẫu list |
| average_height | Chiều cao trung bình (m) | Number | ON | dumpSpecs · mẫu list |
| location_id | Vị trí cắt ngang đường | Text | hide-empty | dumpSpecs · mẫu detail · **không** cột list mẫu |
| provinceFrom / communeFrom | Địa danh điểm đầu | Text | hide-empty | dumpSpecs / derived |
| provinceTo / communeTo | Địa danh điểm cuối | Text | hide-empty | dumpSpecs |
| name | Tên | link Text | optional | **GAP-SLOPE-NAME-01** |
| type | Loại tài sản (entity) | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | hide-empty | unit seed `KET_CAU` · **không** bắt buộc grid |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · đề xuất prefix `MD-` (**GAP-SLOPE-PREFIX-01**) |
| type | Loại tài sản | `SearchInput` | * | lock `SLOPE_PROTECT` khi create từ tile `t12` |
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
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-SLOPE-RANGE-01** |
| provinceFrom | Địa danh điểm đầu (tỉnh) | `Text` / SearchInput | | mẫu ĐVHC |
| provinceTo | Địa danh điểm cuối (tỉnh) | `Text` / SearchInput | | |

**Không mount** `S-LOC-POINT` thay RANGE cho type này.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-SLOPE-NAME-01** · **cấm** bắt buộc đoạn tuyến |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| protection_type_id | Kiểu bảo vệ | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-SLOPE-LOOKUP-01** |
| slope_classification_id | Phân loại mái dốc | `Dropdown` | | LOOKUP_STATIC |
| actual_protected | Chiều dài bảo vệ, gia cố (m) | `Number` | | mẫu list/detail · dump key `actual_protected` |
| average_height | Chiều cao trung bình (m) | `Number` | | mẫu detail / list |
| location_id | Vị trí cắt ngang đường | `Dropdown` | | LOOKUP_STATIC / init vitriOptions · mẫu detail «Bên trái» |

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
| 1 | Lookup `protection_type_id` / `slope_classification_id` / `location_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | `name` bắt buộc hay ẩn khi trống (dump không có `name_*`)? | optional · list primary = kiểu bảo vệ |
| 3 | Alias route `/so-ts-slope-protect` vs chỉ `?type=SLOPE_PROTECT`? | Giữ filter URL · STATUS alias = board link |
| 4 | Prefix IdCode `MD-` (GIS) vs `TS-` default · conflict `pavement-sections` cũng `MD`? | `MD-` khớp GIS short · SA chốt collision |
| 5 | Flatten dump attrs ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |
| 6 | 4 XY range = scalar entity hay chỉ dumpSpecs? | dumpSpecs/XY fields P1 · SA chốt |
| 7 | GIS layer `ta-luy` gồm RETAINING — tách page? | Page `SLOPE_PROTECT` only · peer DEFER (**GAP-SLOPE-PEER-01**) · deep-link ưu tiên `mai-doc` |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| headerFingerprint | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| analyzedAt | `2026-09-01T18:29:28.978Z` |
| taskId | `task_1e8df2bf` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294 -->
