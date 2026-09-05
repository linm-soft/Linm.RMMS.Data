# Data-analy — controlHint — so-ts-ditch (Kind B list + full-page form · type `DITCH`)

| Field | Value |
|-------|-------|
| feature | `so-ts-ditch` |
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
| contentHash | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprint | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| analyzedAt | `2026-09-01T10:13:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_longitudinal` cite CTX) |
| taskId | `task_e8b2158e` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-ditch-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=DITCH` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-ditch` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=DITCH` |
| typeCode | `DITCH` |
| dump | `tbl_longitudinal` · mẫu `docs/img/gov-mau-tai-san/13-moc_dbvn.tbl_longitudinal-list.png` · `13-moc_dbvn.tbl_longitudinal-detail.png` · CSV gov-vn **59657** (`COVERAGE-KCHT-40`) |
| clusterUi | `linear_protect` · ô KCHT `t10` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `linear_protect` · parent SSOT **S-LOC-RANGE** · mẫu list/detail có **km đầu + km cuối** + 4 XY → mount `kmFrom`/`kmTo` + XY đầu/cuối.  
> Mẫu list: loại rãnh/cống · tuyến (tách 3 tầng Linm) · lý trình đầu/cuối · hình dạng · dài · cao · rộng đáy/miệng · **ẩn** ảnh đại diện GOV · **GAP-SOTS-COL-01**.  
> Peer GIS `CULVERT_L` cùng `cong-doc` / tile drill — **không** gộp type UI; filter `DITCH` only trên page này.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-ditch.md` | `8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | `1bbe1d23aa02b69ce977cc44913458a703b3389dbd7058a9c907ea9c64fd9c09` · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/13-moc_dbvn.tbl_longitudinal-list.png` | loại · tuyến gộp · km đầu/cuối · hình dạng · KT · ảnh N/A |
| Mẫu detail | `docs/img/gov-mau-tai-san/13-moc_dbvn.tbl_longitudinal-detail.png` | tab Thông tin chung · S-ROUTE · S-LOC-RANGE · S-ATTR loại/KT/hố ga |
| Dump CSV | `moc_dbvn.tbl_longitudinal.2026.8.23.14.25.csv` | cite `COVERAGE-KCHT-40` **59657** rows · path raw theo set gov-vn |
| Import set | `…/gov-vn` · type `DITCH` | 59657 · unit seed `THOAT_NUOC` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `DITCH` · «Rãnh / cống dọc» · unit `THOAT_NUOC` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `cong-doc` ↔ `DITCH` · `CULVERT_L` · IdCode GIS short **`CD`** · layer `cong` cũng gồm DITCH |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `DITCH` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR DITCH **chưa** editable set |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `actual_length` · `location_id` — **thiếu** hầu hết key DITCH (`ditch_type_id` · `culvert_shape_id` · `height_culvert` · …) |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t10` · drill `DITCH` · «Cống dọc, rãnh dọc, hào kỹ thuật dọc» · icon `CD` |
| KCHT nav | `kchtNavigation.ts` | `DITCH: ['DITCH','CULVERT_L']` — tile count peer · **page filter vẫn `DITCH`** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (DITCH dump attr + 3 tầng tuyến + range):

`ditch_type_id|structural_type_id|work_type_id|culvert_shape_id|actual_length|number|height_culvert|width_bottom|width_top|number_work_within_section|materials_work_id|length_manhole|width_manhole|height_manhole|location_id|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|km_to|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|tinhthanhpho|xaphuong|tinhthanhpho_cuoi|xaphuong_cuoi|code|type|status|source|route|routenamed|routesegment|kmfrom|kmto|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_e8b2158e`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `DITCH` (linear_protect) + fill L3 analy stubs.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer profiles) | Profile `DITCH`: loại rãnh/cống · 3 tầng tuyến · kmFrom · kmTo · tỉnh/xã · hình dạng · dài · cao · rộng đáy/miệng · **ẩn** `type` khi `?type=` · **ẩn** ảnh đại diện GOV · **ẩn** KM_POST-only · SL/ĐVT hide-empty | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 DITCH = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-RANGE · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-DITCH-NAME-01 | Dump **không** cột `name_*` official · IsWeak → đoạn | `name` optional · list primary = `ditch_type_id` (+ km) · **cấm** IsWeak → `routeSegment` | import + form |
| GAP-DITCH-SPEC-01 | FE labels thiếu hầu hết key DITCH | Label VN khớp mẫu («Loại rãnh/cống dọc» · «Hình dạng» · «Chiều cao (m)» · «Rộng đáy/miệng» · KT hố ga…) | FE / form |
| GAP-DITCH-RANGE-01 | Form `kmTo` generic / thiếu 4 XY range | Cluster linear_protect: S-LOC-RANGE · mẫu có km cuối + XY đầu/cuối · **cấm** ép `"0"` khi trống | form |
| GAP-DITCH-PREFIX-01 | `DefaultCodePrefix` → `TS-` · GIS short `CD` | create/import đề xuất **`CD-`** khớp GIS · PO/SA chốt | BE |
| GAP-DITCH-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-ditch` | Live `/so-ts?type=DITCH` · alias **DEFER** Design (tile `t10` OK) | shell |
| GAP-DITCH-LEAVE-01 | native confirm nếu còn | LeaveConfirmModal · useAlert — **cấm** native dialog | form |
| GAP-DITCH-LOOKUP-01 | `ditch_type_id` · `structural_type_id` · `work_type_id` · `culvert_shape_id` · `materials_work_id` · `location_id` = text dump | Dropdown LOOKUP_STATIC dump **hoặc** SearchInput seed — PO chốt | form |
| GAP-DITCH-MANHOLE-01 | `length/width/height_manhole` trong dump §4 · có thể trống trên mẫu list | Form S-ATTR · grid **hide-empty** | form / list |
| GAP-DITCH-PEER-01 | Tile nav `DITCH`+`CULVERT_L` | Page này **chỉ** `type=DITCH` · peer `CULVERT_L` = feature riêng / DEFER | list / tile |
| GAP-SOTS-API-DOC | Parent có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope (GIS `cong-doc` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Cống / rãnh dọc» khi `type=DITCH` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `DITCH` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột DITCH** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `cong-doc` optional |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử · **cấm** cột ảnh đại diện invent.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · loại rãnh/cống · tuyến · QR · địa danh |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `DITCH` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=DITCH`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| ditch_type_id | Loại rãnh / cống dọc | Text / Dropdown label | **ON** | dumpSpecs · mẫu list primary |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình điểm đầu | Text chainage | ON | mẫu list |
| kmTo | Lý trình điểm cuối | Text chainage | ON | mẫu list · RANGE |
| provinceFrom | Địa danh điểm đầu (tỉnh) | Text | hide-empty | dumpSpecs / derived |
| communeFrom | Địa danh điểm đầu (xã) | Text | hide-empty | mẫu list |
| provinceTo | Địa danh điểm cuối (tỉnh) | Text | hide-empty | mẫu list |
| communeTo | Địa danh điểm cuối (xã) | Text | hide-empty | mẫu list |
| culvert_shape_id | Hình dạng | Text | ON | dumpSpecs |
| actual_length | Chiều dài thực tế (m) | Number | ON | dumpSpecs |
| height_culvert | Chiều cao (m) | Number | ON | dumpSpecs |
| width_bottom | Chiều rộng đáy (m) | Number | hide-empty | dumpSpecs |
| width_top | Chiều rộng miệng (m) | Number | hide-empty | dumpSpecs |
| structural_type_id | Loại kết cấu | Text | hide-empty | dumpSpecs |
| materials_work_id | Vật liệu | Text | hide-empty | dumpSpecs |
| name | Tên | link Text | optional | **GAP-DITCH-NAME-01** · không bắt buộc nếu trống |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| quantity / unitCode | SL / ĐVT | — | hide-empty | dump `number` có thể map SL · **không** bắt buộc grid |
| thumb / image | Ảnh đại diện | — | **OFF** | GOV chrome · **cấm** invent |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| length_manhole / width_manhole / height_manhole | KT hố ga | Number | hide-empty | **GAP-DITCH-MANHOLE-01** |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · đề xuất prefix `CD-` (**GAP-DITCH-PREFIX-01**) |
| type | Loại tài sản | `SearchInput` | * | lock `DITCH` khi create từ tile `t10` |
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
| latTo / lngTo | Tọa độ điểm cuối Y / X | `Number` | | dump `to_coordinatey/x` · **GAP-DITCH-RANGE-01** |
| provinceFrom | Địa danh điểm đầu (tỉnh) | `Text` / SearchInput | | mẫu ĐVHC |
| provinceTo | Địa danh điểm cuối (tỉnh) | `Text` / SearchInput | | |

**Không mount** `S-LOC-POINT` thay RANGE cho type này.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên / mô tả | `Text` | | optional · **GAP-DITCH-NAME-01** · **cấm** bắt buộc đoạn tuyến |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| ditch_type_id | Loại rãnh / cống dọc | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-DITCH-LOOKUP-01** |
| structural_type_id | Loại kết cấu | `Dropdown` | | LOOKUP_STATIC |
| work_type_id | Loại công trình | `Dropdown` | | LOOKUP_STATIC |
| culvert_shape_id | Hình dạng | `Dropdown` | | LOOKUP_STATIC · mẫu list |
| actual_length | Chiều dài thực tế (m) | `Number` | | mẫu detail |
| number | Số lượng | `Number` | | dump §4 |
| height_culvert | Chiều cao (m) | `Number` | | mẫu detail |
| width_bottom | Chiều rộng đáy (m) | `Number` | | |
| width_top | Chiều rộng miệng (m) | `Number` | | |
| number_work_within_section | Số công trình trên đoạn | `Number` | | |
| materials_work_id | Vật liệu | `Dropdown` | | LOOKUP_STATIC |
| length_manhole | Chiều dài hố ga (m) | `Number` | | **GAP-DITCH-MANHOLE-01** |
| width_manhole | Chiều rộng hố ga (m) | `Number` | | |
| height_manhole | Chiều cao hố ga (m) | `Number` | | |
| location_id | Vị trí (mặt cắt) | `Dropdown` | | LOOKUP_STATIC / init vitriOptions |

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
| 1 | Lookup `ditch_type_id` / `culvert_shape_id` / … = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | `name` bắt buộc hay ẩn khi trống (dump không có `name_*`)? | optional · list primary = loại rãnh/cống |
| 3 | Alias route `/so-ts-ditch` vs chỉ `?type=DITCH`? | Giữ filter URL · STATUS alias = board link |
| 4 | Prefix IdCode `CD-` (GIS) vs `TS-` default? | `CD-` khớp GIS short |
| 5 | Flatten dump attrs ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |
| 6 | 4 XY range = scalar entity hay chỉ dumpSpecs? | dumpSpecs/XY fields P1 · SA chốt |
| 7 | Tile count gồm `CULVERT_L` — có tách page / filter? | Page `DITCH` only · peer DEFER (**GAP-DITCH-PEER-01**) |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprint | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| analyzedAt | `2026-09-01T10:13:00.000Z` |
| taskId | `task_e8b2158e` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854 -->
