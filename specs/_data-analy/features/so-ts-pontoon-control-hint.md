# Data-analy — controlHint — so-ts-pontoon (Kind B list + full-page form · type `PONTOON`)

| Field | Value |
|-------|-------|
| feature | `so-ts-pontoon` |
| packKind | `list` |
| mode | `feature_context` (new_page · **no Excel** · CTX + parent type-grid + import-gov fields + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo · autoApprove) |
| contentHash | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprint | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| analyzedAt | `2026-09-01T20:00:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_pontoon_bridge` cite CTX) |
| taskId | `task_7016336c` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/so-ts-pontoon-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=PONTOON` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-pontoon` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=PONTOON` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` · mẫu `docs/img/gov-mau-tai-san/2-tbl_pontoon_bridge-list.png` · `2-tbl_pontoon_bridge-detail.png` · CSV gov-vn **2** row · prefix `CP-` |
| clusterUi | `crossing` · ô KCHT `t05` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `crossing` · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-pontoon.md` | `67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/2-tbl_pontoon_bridge-list.png` | cột tên · tuyến · lý trình · loại · sông · KT · tải |
| Mẫu detail | `docs/img/gov-mau-tai-san/2-tbl_pontoon_bridge-detail.png` | tab Thông tin chung · vị trí điểm · attr |
| Dump CSV | `moc_dbvn.tbl_pontoon_bridge.2026.8.23.13.41.csv` (COVERAGE-KCHT-40) | **2** rows |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **2** `PONTOON` · prefix `CP-` · sample `CP-378806` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `PONTOON` · «Cầu phao» · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `cau-phao` ↔ `PONTOON` · prefix live `PON` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST/SPILLWAY/FERRY — **thiếu** PONTOON |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR PONTOON **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_pontoon_bridge` · `name_river` · `operational_load` — **thiếu** key attr còn lại |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t05` · drill `PONTOON` · «Cầu phao» |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (PONTOON dump attr + 3 tầng tuyến + điểm):

`name_pontoon_bridge|name_river|level_work_id|width_pontoon_bridge|length_pontoon_bridge|pontoon_bridge_type_id|operational_load|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_7016336c`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `PONTOON` (crossing) + fill L3 analy stubs (không xóa parent asset / KM_POST / FERRY / SPILLWAY artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY/FERRY) | Profile `PONTOON`: tên cầu phao · 3 tầng tuyến · lý trình · loại CP · sông · rộng/dài · cấp CT · tải · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT · **ẩn** cột KM_POST/SPILLWAY/FERRY-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY/FERRY) | Field editable đủ dump §4 PONTOON = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-PON-NAME-01 | Rebuild: `name` ← `name_pontoon_bridge` (sample «Cầu phao Sông Hóa») | `name` ← `name_pontoon_bridge` · **cấm** IsWeak → đoạn tuyến | import + form |
| GAP-PON-SPEC-01 | FE `dumpSpecLabels` thiếu `width_pontoon_bridge` · `length_pontoon_bridge` · `pontoon_bridge_type_id` · `level_work_id` | Label VN khớp dump · form Input/Select đủ cột §4 | FE / form |
| GAP-PON-POINT-01 | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY/FERRY | Crossing point: **không** bắt buộc `kmTo` · **ẩn** khi `type=PONTOON` · **cấm** ép `lytrinh` `"0"` | form |
| GAP-PON-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-pontoon` | Live `/so-ts?type=PONTOON` · alias route **DEFER** Design (tile `t05` deep-link OK) | shell |
| GAP-PON-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-PON-LOOKUP-01 | `level_work_id` · `pontoon_bridge_type_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `cau-phao` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Cầu phao» khi `type=PONTOON` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `PONTOON` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột PONTOON** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `cau-phao` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cầu phao · sông · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `PONTOON` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=PONTOON`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên cầu phao | link Text | **ON** | bind `name` = `name_pontoon_bridge` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` · có thể trống |
| pontoon_bridge_type_id | Loại cầu phao | Text / Dropdown label | ON | dumpSpecs · mẫu list |
| name_river | Tên sông | Text | ON | dumpSpecs |
| width_pontoon_bridge | Chiều rộng (m) | Number | ON | dumpSpecs |
| length_pontoon_bridge | Chiều dài (m) | Number | ON | dumpSpecs |
| level_work_id | Cấp công trình | Text / Dropdown label | ON | dumpSpecs |
| operational_load | Tải trọng cho phép | Text | ON | dumpSpecs · mẫu list |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump PONTOON không có |
| distance_next_post / materials_id | — | — | **OFF** | KM_POST-only |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CP-` |
| type | Loại tài sản | `SearchInput` | * | lock `PONTOON` khi create từ tile `t05` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_pontoon_bridge | Tên cầu phao | `Text` | * | SSOT dump `name_pontoon_bridge` · label «Tên cầu phao» |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name_river | Tên sông | `Text` | | dump · mẫu detail |
| level_work_id | Cấp công trình | `Dropdown` | | LOOKUP_STATIC dump · **GAP-PON-LOOKUP-01** |
| width_pontoon_bridge | Chiều rộng cầu phao (m) | `Number` | | |
| length_pontoon_bridge | Chiều dài cầu phao (m) | `Number` | | |
| pontoon_bridge_type_id | Loại cầu phao | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-PON-LOOKUP-01** |
| operational_load | Tải trọng cho phép | `Text` | | |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit cho PONTOON · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST-only.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `level_work_id` / `pontoon_bridge_type_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | Alias route `/so-ts-pontoon` vs chỉ `?type=PONTOON`? | Giữ filter URL · STATUS alias = board link |
| 3 | Flatten dump attrs ra cột DB hay chỉ `dumpSpecs`? | dumpSpecs P1 · flatten = migration SA |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprint | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| analyzedAt | `2026-09-01T20:00:00.000Z` |
| taskId | `task_7016336c` |
| status | `done` |

<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30 -->
