# Data-analy — controlHint — so-ts-convex-mirror (Kind B list + full-page form · type `CONVEX_MIRROR`)

| Field | Value |
|-------|-------|
| feature | `so-ts-convex-mirror` |
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
| contentHash | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprint | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| analyzedAt | `2026-09-01T15:21:11.932Z` |
| cluster | — (không Excel · import OUT pack · dump `road_sphere_mirror` cite CTX) |
| taskId | `task_34b8bbbf` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-convex-mirror-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=CONVEX_MIRROR` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-convex-mirror` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=CONVEX_MIRROR` |
| typeCode | `CONVEX_MIRROR` |
| dump | `road_sphere_mirror` · mẫu `docs/img/gov-mau-tai-san/28-moc_dbvn.road_sphere_mirror-list.png` · `28-moc_dbvn.road_sphere_mirror-detail.png` · CSV gov-vn **187378** |
| clusterUi | `atgt_point` · ô KCHT `t31` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §4 |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> **Cấm** invent bảng/field «long môn / cột cần vượt» — dump SSOT = `road_sphere_mirror` (gương cầu); `GANTRY_SIGN` alias count 0 (`GAP-MIRROR-SCOPE-01`).  
> **Cấm** bắt buộc `kmTo` trên point cluster (`GAP-MIRROR-POINT-01`).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-convex-mirror.md` | `131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect · UI chrome tham chiếu |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `CONVEX_MIRROR` · «Gương cầu» · dumpSpecs |
| Coverage | `data/import/sets/gov-vn/COVERAGE-KCHT-40.md` | `CONVEX_MIRROR:moc_dbvn.road_sphere_mirror…` **187378** |
| GIS | `GisInventoryMapper` | layer `guong-cau` · type `CONVEX_MIRROR` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` |
| MFE form | `AssetFormPage.tsx` | Kind B · `data-form-cols="5"` |
| FE labels | `services/asset/dumpSpecLabels.ts` | generic `span_length` · **thiếu** label riêng hầu hết key gương (`GAP-MIRROR-LABEL-01`) |
| FE tile | `kchtTileConfig.ts` `t31` | label gộp long môn · drill `CONVEX_MIRROR` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A |

Normalized header (CONVEX_MIRROR dump attr + 3 tầng tuyến + điểm):

`total_number_post|asset_type_mst_id|shape_cut_post_id|diameter_post|material_post_id|height_post|span_length|location_post_id|number_sign|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note|quantity`

## § Delta Current vs New (`new_page` · `task_34b8bbbf`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = fill L3 analy stubs + type-profile Gương cầu / long môn (dump gương).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid **1 schema** mọi type | Profile `CONVEX_MIRROR`: tên · 3 tầng tuyến · lý trình · vị trí · ĐK · cao · nhịp · VL · hình cắt · SL · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` | list |
| GAP-SOTS-FORM-01 | S-ATTR phần lớn readonly `<dl>` dumpSpecs | Field editable dump §4 · đủ 9 attr gương | form |
| GAP-SOTS-REUSE-01 | 1 form flat | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork | form |
| GAP-MIRROR-SCOPE-01 | Tile `t31` nhãn gộp long môn / cột cần / gương | SSOT data = `road_sphere_mirror` · **cấm** invent field long môn · `GANTRY_SIGN` alias 0 | CTX + form |
| GAP-MIRROR-NAME-01 | `name` có thể = đoạn tuyến | `name` = loại+km / vidagis / IdCode — **cấm** `name_of_route_asset` | form + import |
| GAP-MIRROR-QTY-01 | Import `quantity` có thể mặc định 1 | `quantity` ← `total_number_post` · sync dumpSpecs | import + list |
| GAP-MIRROR-POINT-01 | Point cluster vẫn có thể hiện `kmTo` | **không** bắt buộc `kmTo` · ẩn khi `type=CONVEX_MIRROR` | form + list |
| GAP-MIRROR-LABEL-01 | FE thiếu VN label hầu hết key dump gương | Bổ sung `dumpSpecLabels` + `useFormOptions` | FE |
| GAP-MIRROR-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-convex-mirror` | Live `/so-ts?type=CONVEX_MIRROR` · alias **DEFER** Design (tile `t31`) | shell |
| GAP-MIRROR-LEAVE-01 | native confirm dirty/delete (peer) | `LeaveConfirmModal` + `useAlert` — **cấm** native dialog | form |
| GAP-SOTS-API-DOC | Parent CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · map canvas **out of scope**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Gương cầu / long môn» khi `type=CONVEX_MIRROR` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `CONVEX_MIRROR` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột CONVEX_MIRROR** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `guong-cau` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · số biển |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `CONVEX_MIRROR` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · không = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=CONVEX_MIRROR`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên / loại gương | link Text | **ON** | **cấm** bind đoạn tuyến · GAP-MIRROR-NAME-01 |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | dump trống → để trống · **cấm** ép `"0"` |
| location_post_id | Vị trí đặt | Text / Dropdown | ON | dumpSpecs |
| asset_type_mst_id | Loại TS (MST) | Text / Dropdown | ON | dumpSpecs · ≠ filter `type` |
| shape_cut_post_id | Hình cắt trụ | Text / Dropdown | ON | dumpSpecs |
| diameter_post | Đường kính (m) | Number | ON | dumpSpecs |
| height_post | Chiều cao trụ (m) | Number | ON | dumpSpecs |
| span_length | Chiều dài nhịp (m) | Number | ON | dumpSpecs · FE label có sẵn |
| material_post_id | Vật liệu trụ | Text / Dropdown | ON | dumpSpecs |
| number_sign | Số biển / số gương | Number | ON | dumpSpecs |
| total_number_post | Tổng số trụ | Number | ON | → `quantity` |
| quantity | Số lượng | Number | ON | bind `total_number_post` · **GAP-MIRROR-QTY-01** |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | fill dump ≈0% · point · **cấm** invent |
| unitCode | ĐVT | Dropdown | optional | nếu có seed |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `CONVEX_MIRROR` khi create từ tile `t31` |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

### S-ROUTE

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | **road-route** | dump `long_route_name` |
| routeSegment | Đoạn tuyến | `SearchInput` | **road-route** | dump `name_of_route_asset` · **không** làm `name` |

### S-LOC-POINT

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump trống → để trống · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| location_post_id | Vị trí đặt / mặt cắt | `Dropdown` / Text | | dumpSpecs |

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên hiển thị | `Text` | * | loại+km hoặc vidagis/IdCode · **cấm** đoạn tuyến · **GAP-MIRROR-NAME-01** |
| asset_type_mst_id | Loại tài sản (MST dump) | `Dropdown` | | dump LOOKUP_STATIC · **≠** shell `type` |

### S-ATTR (mẫu Thông tin chung · dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| shape_cut_post_id | Hình dạng mặt cắt trụ | `Dropdown` | | LOOKUP_STATIC dump |
| diameter_post | Đường kính trụ (m) | `Number` | | dump |
| material_post_id | Vật liệu trụ | `Dropdown` | | LOOKUP_STATIC dump |
| height_post | Chiều cao trụ (m) | `Number` | | dump |
| span_length | Chiều dài nhịp (m) | `Number` | | dump · khẩu độ / nhịp |
| number_sign | Số biển / số gương | `Number` | | dump |
| total_number_post | Tổng số trụ trong đoạn | `Number` | | → sync `quantity` |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly `<dl>`). **Cấm** mount field long môn / gantry không có trong dump.

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · field `GANTRY_SIGN` / long môn không dump.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `asset_type_mst_id` / `shape_cut_post_id` / `material_post_id` / `location_post_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | List primary `name` = loại+km hay vidagis_id / IdCode? | loại + lý trình nếu có · else code |
| 3 | Alias route `/so-ts-convex-mirror` vs chỉ `?type=CONVEX_MIRROR`? | Giữ filter URL · STATUS alias = board link |
| 4 | Flatten dumpSpecs ra cột DB hay chỉ JSON? | dumpSpecs P1 · flatten = migration SA |
| 5 | Tile `t31` nhãn gộp long môn — UI title «Gương cầu» hay giữ nhãn KCHT gộp? | Title theo CTX «Gương cầu / long môn» · data chỉ CONVEX_MIRROR |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f` |
| headerFingerprint | `sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a` |
| analyzedAt | `2026-09-01T15:21:11.932Z` |
| taskId | `task_34b8bbbf` |
| status | `done` |
