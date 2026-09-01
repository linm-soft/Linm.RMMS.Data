# Data-analy — controlHint — so-ts-km-post (Kind B list + full-page form · type `KM_POST`)

| Field | Value |
|-------|-------|
| feature | `so-ts-km-post` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` (`recheck_new` · autoApprove · STATUS retry data_analy) |
| contentHash | `sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc` |
| headerFingerprint | `sha256:adf424c895e255a36321742bdf855f877f2800371b066db8fc571ff3263e309e` |
| analyzedAt | `2026-08-31T19:00:59.696Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_km_post` cite CTX) |
| taskId | `task_7d6abf77` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/so-ts-km-post-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=KM_POST` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-km-post` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=KM_POST` |
| typeCode | `KM_POST` |
| dump | `tbl_km_post` · mẫu `docs/img/gov-mau-tai-san/3-tbl_km_post-list.png` · `3-tbl_km_post-detail.png` |
| clusterUi | `atgt_point` · ô KCHT `t09` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `edit_page` · board Retry · L3 analy fill stubs |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-km-post.md` | `29e5b2901de7d6b7bd49efc64fb977116d02608b052a9fa4898f51bde402272b` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `e6f11b1d56f56e996705c8a41979b113f402df768bf102ba4cc20e9cd9d5f718` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `ca31f6cd12030cc4d2a91cc9055357d9dfd2a9841e1ce86255707fccc940bac1` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `KM_POST` · dumpSpecs |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` |
| FE labels | `services/asset/dumpSpecLabels.ts` | `name_km_post` · `materials_id` · `distance_next_post` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (KM_POST dump attr + 3 tầng tuyến + điểm):

`name_km_post|distance_next_post|materials_id|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`edit_page` · `task_7d6abf77`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = fill L3 analy stubs + type-profile Cột Km (không xóa parent asset artifacts).

| ID | Current (live inventory 2026-08-31) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid **1 schema** mọi type (gồm `kmTo` · SL · ĐVT · cột Loại) | Profile `KM_POST`: tên cột · 3 tầng tuyến · lý trình · khoảng cách cột kế · vật liệu · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT (dump không có) | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable: `name_km_post` · `distance_next_post` · `materials_id` = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | 1 form flat «Thông tin tài sản» | Mount section S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-KM-NAME-01 | Import `IsWeak` → `name` = `name_of_route_asset` (đoạn) | `name` ← `name_km_post` (`Km0+0` / `Km2`) — **cấm** IsWeak | import + form |
| GAP-KM-SPEC-01 | CSV bỏ `materials_id` · `distance_next_post` · km ép `"0"` | Giữ trong `dumpSpecs` (hoặc cột phẳng SA) · km trống khi dump null | BE / form |
| GAP-KM-POINT-01 | Form bắt buộc chỉ `kmFrom` nhưng vẫn hiện `kmTo` | Point cluster: **không** bắt buộc `kmTo` · ẩn field khi `type=KM_POST` | form |
| GAP-KM-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-km-post` | Live `/so-ts?type=KM_POST` · alias route **DEFER** Design (deep-link tile `t09` OK) | shell |
| GAP-KM-LEAVE-01 | `window.confirm` dirty / delete | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-KM-MAT-01 | `materials_id` text trong dumpSpecs | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed materials — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Cột Km» khi `type=KM_POST` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `KM_POST` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột KM_POST** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cột · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `KM_POST` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · không = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=KM_POST`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên cột | link Text | **ON** | bind `name` = `name_km_post` |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` · `/mas/tuyen-duong` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | parse từ tên nếu dump lytrinh trống |
| distance_next_post | Khoảng cách cột kế (m) | Number | ON | từ `dumpSpecs` · GAP-KM-SPEC-01 |
| materials_id | Vật liệu | Text / Dropdown label | ON | từ `dumpSpecs` |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | point · dump không có |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump KM_POST không có |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `KM_POST` khi create từ tile |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | * | **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` |
| side | Mặt cắt | `Dropdown` | | L/R/C nếu dump có · else omit |

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_km_post | Tên cột Km | `Text` | * | SSOT dump `name_km_post` · label «Tên cột Km» |

### S-ATTR (mẫu Thông tin chung)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| distance_next_post | Khoảng cách tới cột kế tiếp (m) | `Number` | | dump · **không** chỉ `<dl>` |
| materials_id | Vật liệu cột | `Dropdown` | | LOOKUP_STATIC dump · **GAP-KM-MAT-01** UNCLEAR→PO nếu chưa seed |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit cho KM_POST · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `materials_id` = Dropdown static dump hay SearchInput master materials? | Dropdown LOOKUP_STATIC P1 |
| 2 | Alias route `/so-ts-km-post` vs chỉ `?type=KM_POST`? | Giữ filter URL · STATUS alias = board link |
| 3 | Flatten `distance_next_post` / `materials_id` ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc` |
| headerFingerprint | `sha256:adf424c895e255a36321742bdf855f877f2800371b066db8fc571ff3263e309e` |
| analyzedAt | `2026-08-31T19:00:59.696Z` |
| taskId | `task_7d6abf77` |
| status | `done` |
