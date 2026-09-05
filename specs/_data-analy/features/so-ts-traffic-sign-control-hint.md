# Data-analy — controlHint — so-ts-traffic-sign (Kind B list + full-page form · type `TRAFFIC_SIGN`)

| Field | Value |
|-------|-------|
| feature | `so-ts-traffic-sign` |
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
| contentHash | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprint | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| analyzedAt | `2026-09-01T13:25:14.056Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_road_sign` cite CTX) |
| taskId | `task_72cf04fa` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-traffic-sign-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=TRAFFIC_SIGN` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-traffic-sign` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=TRAFFIC_SIGN` |
| typeCode | `TRAFFIC_SIGN` |
| dump | `tbl_road_sign` · mẫu `docs/img/gov-mau-tai-san/38-moc_dbvn.tbl_road_sign-list.png` · `38-moc_dbvn.tbl_road_sign-detail.png` · CSV gov-vn **223703** · prefix import **`BB-`** |
| clusterUi | `atgt_point` · ô KCHT `t32` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §2.4 · §4 |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> **Cấm** catalog 36 cũ `PoleCount` / `PoleHeightM` — dump không có (`GAP-SIGN-SPEC-01`).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-traffic-sign.md` | `d715a0f0b2c7df2a00ffbacb299190904bd3e0c20634c734c8853dbb8159ac25` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect · UI chrome tham chiếu |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `TRAFFIC_SIGN` · dumpSpecs |
| Sign master | `TrafficSignTypeEntity` · `TrafficSignTypeService` | `/integration/traffic-sign-types/search` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` |
| MFE form | `AssetFormPage.tsx` | Kind B · `data-form-cols="5"` · `SearchInput` QCVN khi `type=TRAFFIC_SIGN` |
| FE labels | `services/asset/dumpSpecLabels.ts` | `sign_code_number` · `road_sign_content` · `shape_sign_id` · `material_sign_id` · `width`/`height`/`area` · `location_id` · `ngaylapdat` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit · **traffic-sign-type** | APPROVED A |

Normalized header (TRAFFIC_SIGN dump attr + 3 tầng tuyến + điểm):

`sign_code_number|road_sign_content|width|height|area|material_sign_id|shape_sign_id|location_id|ngaylapdat|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_72cf04fa`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = fill L3 analy stubs + type-profile Biển báo.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid **1 schema** mọi type | Profile `TRAFFIC_SIGN`: số hiệu · 3 tầng tuyến · lý trình · vị trí đặt · nội dung · R · C · VL · hình dạng · DT · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT | list |
| GAP-SOTS-FORM-01 | S-ATTR phần lớn readonly `<dl>` dumpSpecs | Field editable dump §2.4 / §4 (không chỉ `<dl>`) | form |
| GAP-SOTS-REUSE-01 | 1 form flat | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork | form |
| GAP-SIGN-NAME-01 | `name` SearchInput QCVN; CSV `name` = `road_sign_content` | Display primary = `sign_code_number` · nội dung = `road_sign_content` · bind master traffic-sign-type | form + import |
| GAP-SIGN-SPEC-01 | CSV bỏ width/height/area/material/shape/location/ngaylapdat | Giữ đủ trong `dumpSpecs` (hoặc cột phẳng SA) · **cấm** PoleCount/PoleHeightM | BE / form |
| GAP-SIGN-POINT-01 | Point cluster vẫn có thể hiện `kmTo` | **không** bắt buộc `kmTo` · ẩn khi `type=TRAFFIC_SIGN` | form |
| GAP-SIGN-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-traffic-sign` | Live `/so-ts?type=TRAFFIC_SIGN` · alias **DEFER** Design (tile `t32`) | shell |
| GAP-SIGN-LEAVE-01 | native confirm dirty/delete (peer) | `LeaveConfirmModal` + `useAlert` — **cấm** native dialog | form |
| GAP-SOTS-API-DOC | Parent CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · SearchInput asset-type / road-route / traffic-sign-type · **cấm ERP.*** · map canvas **out of scope**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Biển báo» khi `type=TRAFFIC_SIGN` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `TRAFFIC_SIGN` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột TRAFFIC_SIGN** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · số hiệu · nội dung · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `TRAFFIC_SIGN` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · không = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=TRAFFIC_SIGN`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name / sign_code_number | Số hiệu | link Text | **ON** | primary display = `sign_code_number` |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · **cấm** gộp 1 ô · **cấm** cột gantry trên row |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| location_id | Vị trí đặt | Text / Dropdown | ON | dumpSpecs |
| road_sign_content | Nội dung | Text | ON | dumpSpecs / `name` legacy |
| width | Rộng (m) | Number | ON | dumpSpecs · GAP-SIGN-SPEC-01 |
| height | Cao (m) | Number | ON | dumpSpecs |
| material_sign_id | Vật liệu | Text / Dropdown | ON | dumpSpecs |
| shape_sign_id | Hình dạng | Text / Dropdown | ON | dumpSpecs |
| area | Diện tích (m²) | Number | ON | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump TRAFFIC_SIGN không có |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `BB-` |
| type | Loại tài sản | `SearchInput` | * | lock `TRAFFIC_SIGN` khi create từ tile |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | * | dump `lytrinh-kmlytrinh` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| location_id | Vị trí đặt / mặt cắt | `Dropdown` | | dump · L/R/C nếu map được · else text dump |

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / sign_code_number | Loại biển báo (mã QCVN) | `SearchInput` | * | `catalogKind=traffic-sign-type` · live `SIGN_TYPE_LOOKUP_CONFIG` · sync `sign_code_number` |
| road_sign_content | Nội dung biển báo | `Text` | | dump · có thể fill từ master name |

### S-ATTR (mẫu Thông tin chung · dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| width | Chiều rộng (m) | `Number` | | dump · **không** chỉ `<dl>` |
| height | Chiều cao (m) | `Number` | | dump |
| area | Diện tích (m²) | `Number` | | dump |
| material_sign_id | Vật liệu biển | `Dropdown` | | LOOKUP_STATIC dump · **GAP-SIGN-MAT-01** |
| shape_sign_id | Hình dạng biển | `Dropdown` | | LOOKUP_STATIC dump · **GAP-SIGN-SHAPE-01** |
| ngaylapdat | Ngày lắp đặt | `Date` local | | `utcToLocalInputValue` |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select.

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · quantity/unit · PoleCount/PoleHeightM · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `material_sign_id` / `shape_sign_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | List primary cột = `sign_code_number` hay `road_sign_content`? | Số hiệu (`sign_code_number`) · nội dung cột riêng |
| 3 | Alias route `/so-ts-traffic-sign` vs chỉ `?type=TRAFFIC_SIGN`? | Giữ filter URL · STATUS alias = board link |
| 4 | Flatten width/height/… ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88` |
| headerFingerprint | `sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562` |
| analyzedAt | `2026-09-01T13:25:14.056Z` |
| taskId | `task_72cf04fa` |
| status | `done` |
