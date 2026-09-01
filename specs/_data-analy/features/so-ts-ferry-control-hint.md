# Data-analy — controlHint — so-ts-ferry (Kind B list + full-page form · type `FERRY`)

| Field | Value |
|-------|-------|
| feature | `so-ts-ferry` |
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
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprint | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| analyzedAt | `2026-08-31T23:51:30.740Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_ferry_terminal` cite CTX) |
| taskId | `task_137dda50` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-ferry-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=FERRY` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-ferry` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=FERRY` |
| typeCode | `FERRY` |
| dump | `tbl_ferry_terminal` · mẫu `docs/img/gov-mau-tai-san/21-moc_dbvn.tbl_ferry_terminal-list.png` · `21-moc_dbvn.tbl_ferry_terminal-detail.png` · CSV gov-vn **16** row `FERRY` · prefix `PH-` |
| clusterUi | `crossing` · ô KCHT `t03` |
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
| Context | `docs/context/features/so-ts-ferry.md` | `0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/21-moc_dbvn.tbl_ferry_terminal-list.png` | cột tên bến · loại · cấp · sông · SL phà · KT |
| Mẫu detail | `docs/img/gov-mau-tai-san/21-moc_dbvn.tbl_ferry_terminal-detail.png` | tab Thông tin chung · vị trí điểm · attr |
| Dump CSV | `moc_dbvn.tbl_ferry_terminal.2026.8.23.15.6.csv` (COVERAGE-KCHT-40) | header eng + VN · cite sample `PH-782061` |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **16** `FERRY` · prefix `PH-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `FERRY` · «Bến phà» · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `ben-pha` ↔ `FERRY` · prefix live `PH-` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST/SPILLWAY — **thiếu** FERRY |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR FERRY **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_ferry_terminal` — **thiếu** key attr còn lại |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t03` · drill `FERRY` · «Bến phà và phà» |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (FERRY dump attr + 3 tầng tuyến + điểm):

`name_ferry_terminal|loaibenpha|level_worlk_id|river_channel_name_id|number_of_ferries_at_terminal|operation_time|is_project_replacement|chieurongben|chieudailuoiben|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_137dda50`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `FERRY` (crossing) + fill L3 analy stubs (không xóa parent asset / KM_POST / SPILLWAY / INTERCHANGE artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY) | Profile `FERRY`: tên bến · 3 tầng tuyến · lý trình · loại bến · cấp CT · sông/luồng · số phà · giờ HT · KT bến · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · **ẩn** cột KM_POST/SPILLWAY-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY) | Field editable đủ dump §4 FERRY = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-FY-NAME-01 | Rebuild: `name` thường đã = `name_ferry_terminal` (sample Phà Bính…) | `name` ← `name_ferry_terminal` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-FY-SPEC-01 | FE `dumpSpecLabels` chỉ `name_ferry_terminal` | Label VN khớp dump · form Input/Select đủ cột §4 | FE / form |
| GAP-FY-POINT-01 | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | Crossing point: **không** bắt buộc `kmTo` · **ẩn** khi `type=FERRY` · `lytrinh` hay trống — **cấm** ép `"0"` | form |
| GAP-FY-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-ferry` · index chưa Navigate | Live `/so-ts?type=FERRY` · alias route **DEFER** Design (tile `t03` deep-link OK · mirror spillway/interchange) | shell |
| GAP-FY-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-FY-LOOKUP-01 | `loaibenpha` · `level_worlk_id` · `river_channel_name_id` · `is_project_replacement` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `ben-pha` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Bến phà» khi `type=FERRY` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `FERRY` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột FERRY** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `ben-pha` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên bến · loại · sông · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `FERRY` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=FERRY`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên bến phà | link Text | **ON** | bind `name` = `name_ferry_terminal` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống trên CSV) |
| loaibenpha | Loại bến phà | Text / Dropdown label | ON | dumpSpecs · mẫu list |
| level_worlk_id | Cấp công trình | Text / Dropdown label | ON | dump key **typo** `worlk` · giữ nguyên key |
| river_channel_name_id | Tên sông / luồng | Text / Dropdown label | ON | dumpSpecs |
| number_of_ferries_at_terminal | Số phà tại bến | Number | ON | dumpSpecs |
| operation_time | Thời gian hoạt động | Text | optional | dumpSpecs |
| chieurongben | Chiều rộng bến (m) | Number | optional | dumpSpecs · fill thấp → Design có thể ẩn |
| chieudailuoiben | Chiều dài luồng bến (m) | Number | optional | dumpSpecs |
| is_project_replacement | Có dự án thay thế | boolean label | optional | dumpSpecs |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dùng `number_of_ferries_*` · **không** generic SL |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `PH-` |
| type | Loại tài sản | `SearchInput` | * | lock `FERRY` khi create từ tile `t03` |
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
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_ferry_terminal | Tên bến phà | `Text` | * | SSOT dump `name_ferry_terminal` · label «Tên bến phà» · **GAP-FY-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| loaibenpha | Loại bến phà | `Dropdown` | * | LOOKUP_STATIC dump · **GAP-FY-LOOKUP-01** |
| level_worlk_id | Cấp công trình | `Dropdown` | | dump key typo `worlk` · **cấm** rename key FE unilaterally |
| river_channel_name_id | Tên sông / luồng | `Dropdown` / `SearchInput` | | LOOKUP_STATIC hoặc master nếu SA seed |
| number_of_ferries_at_terminal | Số phà tại bến | `Number` | | |
| operation_time | Thời gian hoạt động | `Text` | | |
| is_project_replacement | Có dự án thay thế? | `Dropdown` boolean | | True/False / Có-Không |
| chieurongben | Chiều rộng bến (m) | `Number` | | |
| chieudailuoiben | Chiều dài luồng bến (m) | `Number` | | |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic cho FERRY · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `loaibenpha` / `level_worlk_id` / `river_channel_name_id`?
2. Alias route `/so-ts-ferry` → Navigate `?type=FERRY` (như spillway) — Design chốt?
3. Grid: ẩn cột fill thấp (`operation_time` · `chieurongben` · `chieudailuoiben` · `is_project_replacement`) theo GAP-SOTS-COL-01 hay giữ mẫu list?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprint | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| status | `done` |
| analyzedAt | `2026-08-31T23:51:30.740Z` |
