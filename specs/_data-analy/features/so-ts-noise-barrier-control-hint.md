# Data-analy — controlHint — so-ts-noise-barrier (Kind B list + full-page form · type `NOISE_BARRIER`)

| Field | Value |
|-------|-------|
| feature | `so-ts-noise-barrier` |
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
| contentHash | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprint | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| analyzedAt | `2026-09-01T09:30:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_noise_barrier` cite CTX) |
| taskId | `task_28a7b47e` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-noise-barrier-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=NOISE_BARRIER` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-noise-barrier` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| typeCode | `NOISE_BARRIER` |
| dump | `tbl_noise_barrier` · mẫu `docs/img/gov-mau-tai-san/7-tbl_noise_barrier-list.png` · `7-tbl_noise_barrier-detail.png` · CSV gov-vn **21** (`COVERAGE-KCHT-40`) |
| clusterUi | `linear_protect` · ô KCHT `t25` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `linear_protect` · parent SSOT **S-LOC-RANGE** · mẫu list/detail có **km đầu + km cuối** + 4 XY → mount `kmFrom`/`kmTo` + XY đầu/cuối.  
> Mẫu list: loại tường · tuyến (tách 3 tầng Linm) · lý trình đầu/cuối · địa danh tỉnh/xã · cao TB · dài thực tế · **ẩn** ảnh đại diện GOV · **GAP-SOTS-COL-01**.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-noise-barrier.md` | `5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/7-tbl_noise_barrier-list.png` | loại tường · tuyến gộp · km đầu/cuối · địa danh · cao · dài · ảnh N/A |
| Mẫu detail | `docs/img/gov-mau-tai-san/7-tbl_noise_barrier-detail.png` | tab Thông tin chung · S-ROUTE · S-LOC-RANGE · S-ATTR loại/cao/dài · ĐVHC tỉnh |
| Dump CSV | `moc_dbvn.tbl_noise_barrier.2026.8.23.14.14.csv` | cite `COVERAGE-KCHT-40` **21** rows · path raw theo set gov-vn |
| Import set | `…/gov-vn` · type `NOISE_BARRIER` | 21 · unit seed `ATGT` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `NOISE_BARRIER` · «Tường chống ồn» · unit `ATGT` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `chong-on` ↔ `NOISE_BARRIER` · cũng trong `ho-lan` · IdCode GIS short **`TC`** |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `NOISE_BARRIER` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR NOISE_BARRIER **chưa** editable set |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `actual_length` · `vitri` — **thiếu** `type_noise_barrier_id` · `average_height` · label dài ≠ «thực tế» |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t25` · drill `NOISE_BARRIER` · «Rào chắn ồn» · icon `HL` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (NOISE_BARRIER dump attr + 3 tầng tuyến + range):

`type_noise_barrier_id|average_height|actual_length|vitri|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|km_to|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|tinhthanhpho|xaphuong|tinhthanhpho_cuoi|xaphuong_cuoi|code|type|status|source|route|routenamed|routesegment|kmfrom|kmto|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_28a7b47e`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `NOISE_BARRIER` (linear_protect) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer profiles) | Profile `NOISE_BARRIER`: loại tường · 3 tầng tuyến · kmFrom · kmTo · tỉnh/xã đầu/cuối · cao TB · dài thực tế · **ẩn** `type` khi `?type=` · **ẩn** SL/ĐVT · **ẩn** ảnh đại diện GOV · **ẩn** KM_POST-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 NOISE_BARRIER = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-NB-NAME-01 | Dump **không** cột tên official · import dễ IsWeak → đoạn | `name` optional · list primary = `type_noise_barrier_id` (+ km) · **cấm** IsWeak → `routeSegment` | import + form |
| GAP-NB-SPEC-01 | FE labels thiếu `type_noise_barrier_id` · `average_height` · `actual_length` label generic | Label VN khớp mẫu («Loại tường chống ồn» · «Chiều cao trung bình (m)» · «Chiều dài thực tế (m)») | FE / form |
| GAP-NB-RANGE-01 | Form `kmTo` generic / thiếu 4 XY range | Cluster linear_protect: S-LOC-RANGE · mẫu có km cuối + XY đầu/cuối · **cấm** ép `"0"` khi trống | form |
| GAP-NB-PREFIX-01 | `DefaultCodePrefix` → `TS-` · GIS short `TC` | create/import đề xuất **`TC-`** khớp GIS · PO/SA chốt | BE |
| GAP-NB-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-noise-barrier` | Live `/so-ts?type=NOISE_BARRIER` · alias **DEFER** Design (tile `t25` OK) | shell |
| GAP-NB-LEAVE-01 | native confirm nếu còn | LeaveConfirmModal · useAlert — **cấm** native dialog | form |
| GAP-NB-LOOKUP-01 | `type_noise_barrier_id` · `vitri` = text dump | Dropdown LOOKUP_STATIC dump (COMPOSITE / Khác / Bê tông…) **hoặc** SearchInput seed — PO chốt | form |
| GAP-NB-VITRI-01 | `vitri` trong dump §4 · **không** trên mẫu list/detail Thông tin chung | Form S-ATTR optional · grid **hide-empty** | form / list |
| GAP-SOTS-API-DOC | Parent có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope (GIS `chong-on` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Rào chắn ồn» khi `type=NOISE_BARRIER` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `NOISE_BARRIER` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột NOISE_BARRIER** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `chong-on` optional |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử · **cấm** cột ảnh đại diện invent.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại tường · tuyến · QR · địa danh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `NOISE_BARRIER` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=NOISE_BARRIER`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| type_noise_barrier_id | Loại tường chống ồn | Text / Dropdown label | **ON** | dumpSpecs · mẫu list primary |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | mẫu list · RANGE |
| provinceFrom | Địa danh điểm đầu (tỉnh) | Text | ON | dumpSpecs / derived |
| communeFrom | Địa danh điểm đầu (xã) | Text | hide-empty | mẫu list |
| provinceTo | Địa danh điểm cuối (tỉnh) | Text | hide-empty | mẫu list |
| communeTo | Địa danh điểm cuối (xã) | Text | hide-empty | mẫu list |
| average_height | Chiều cao trung bình (m) | Number | ON | dumpSpecs |
| actual_length | Chiều dài thực tế (m) | Number | ON | dumpSpecs |
| name | Tên | link Text | optional | **GAP-NB-NAME-01** · không bắt buộc nếu trống |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump không có |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · đề xuất prefix `TC-` (**GAP-NB-PREFIX-01**) |
| type | Loại tài sản | `SearchInput` | * | lock `NOISE_BARRIER` khi create từ tile `t25` |
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
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-NB-RANGE-01** |
| provinceFrom | Địa danh điểm đầu (tỉnh) | `Text` / SearchInput | | mẫu ĐVHC |
| provinceTo | Địa danh điểm cuối (tỉnh) | `Text` / SearchInput | | |

**Không mount** `S-LOC-POINT` thay RANGE cho type này.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-NB-NAME-01** · **cấm** bắt buộc đoạn tuyến |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| type_noise_barrier_id | Loại tường chống ồn (Bê tông/…) | `Dropdown` | * | LOOKUP_STATIC dump (COMPOSITE / Khác / …) · **GAP-NB-LOOKUP-01** |
| average_height | Chiều cao trung bình (m) | `Number` | | mẫu detail |
| actual_length | Chiều dài thực tế (m) | `Number` | | mẫu detail |
| vitri | Vị trí (mặt cắt) | `Dropdown` | | dump §4 · **không** trên mẫu → optional · **GAP-NB-VITRI-01** |

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

**Không mount:** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST-only · ảnh đại diện invent · quantity/unit bắt buộc.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `type_noise_barrier_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | `name` bắt buộc hay ẩn khi trống (dump không có)? | optional · list primary = loại tường |
| 3 | Alias route `/so-ts-noise-barrier` vs chỉ `?type=NOISE_BARRIER`? | Giữ filter URL · STATUS alias = board link |
| 4 | Prefix IdCode `TC-` (GIS) vs `TS-` default? | `TC-` khớp GIS short |
| 5 | Flatten dump attrs ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |
| 6 | 4 XY range = scalar entity hay chỉ dumpSpecs? | dumpSpecs/XY fields P1 · SA chốt |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprint | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| analyzedAt | `2026-09-01T09:30:00.000Z` |
| taskId | `task_28a7b47e` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3 -->
