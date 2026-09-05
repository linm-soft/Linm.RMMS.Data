# Data-analy — controlHint — so-ts-rail-cross (Kind B list + full-page form · type `RAIL_CROSS`)

| Field | Value |
|-------|-------|
| feature | `so-ts-rail-cross` |
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
| contentHash | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprint | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| analyzedAt | `2026-09-01T19:30:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_railway_crossing` cite CTX) |
| taskId | `task_f1328a25` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-rail-cross-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=RAIL_CROSS` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-rail-cross` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=RAIL_CROSS` |
| typeCode | `RAIL_CROSS` |
| dump | `tbl_railway_crossing` · mẫu `docs/img/gov-mau-tai-san/24-moc_dbvn.tbl_railway_crossing-list.png` · `24-moc_dbvn.tbl_railway_crossing-detail.png` · CSV gov-vn **144** row · prefix import `DS-` |
| clusterUi | `crossing` · ô KCHT `t15` |
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
| Context | `docs/context/features/so-ts-rail-cross.md` | `da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/24-moc_dbvn.tbl_railway_crossing-list.png` | tên giao cắt · tuyến · lý trình · kiểu bảo vệ · phương thức điều khiển · thời gian chờ |
| Mẫu detail | `docs/img/gov-mau-tai-san/24-moc_dbvn.tbl_railway_crossing-detail.png` | tab Thông tin chung · vị trí điểm · attr |
| Dump CSV | `moc_dbvn.tbl_railway_crossing.*.csv` (gov raw) | header §4 import-gov |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **144** `RAIL_CROSS` · prefix `DS-` · sample `DS-railway_crossing_593984` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `RAIL_CROSS` · «Giao bằng đường sắt» · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `giao-duong-sat` ↔ `RAIL_CROSS` · prefix icon `NG` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST/SPILLWAY/FERRY — **thiếu** RAIL_CROSS |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR RAIL_CROSS **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_crossing` · `protection_type_id` — **thiếu** `traffic_control_method_id` · `shortest_waiting_time` |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t15` · drill `RAIL_CROSS` · «Điểm giao bằng với đường sắt» |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (RAIL_CROSS dump attr + 3 tầng tuyến + điểm):

`name_crossing|protection_type_id|traffic_control_method_id|shortest_waiting_time|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_f1328a25`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `RAIL_CROSS` (crossing) + fill L3 analy stubs (không xóa parent asset / KM_POST / SPILLWAY artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY/FERRY) | Profile `RAIL_CROSS`: tên giao cắt · 3 tầng tuyến · lý trình · kiểu bảo vệ · phương thức điều khiển · thời gian chờ · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT · **ẩn** cột type-other | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY/FERRY) | Field editable đủ dump §4 RAIL_CROSS = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-RC-NAME-01 | Rebuild: `name` hay fallback `route`/`QL.*` khi `name_crossing` trống | `name` ← `name_crossing` · **cấm** IsWeak → đoạn tuyến · trống OK | import + form |
| GAP-RC-SPEC-01 | FE `dumpSpecLabels` thiếu `traffic_control_method_id` · `shortest_waiting_time` | Label VN khớp dump / mẫu · form Input/Select đủ cột §4 | FE / form |
| GAP-RC-POINT-01 | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY/FERRY | Crossing point: **không** bắt buộc `kmTo` · **ẩn** khi `type=RAIL_CROSS` · **cấm** ép `lytrinh` `"0"` | form |
| GAP-RC-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-rail-cross` · index chưa Navigate | Live `/so-ts?type=RAIL_CROSS` · alias route **DEFER** Design (tile `t15` deep-link OK) | shell |
| GAP-RC-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-RC-LOOKUP-01 | `protection_type_id` · `traffic_control_method_id` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-RC-PREFIX-01 | Import live `DS-` · GIS icon `NG` · Create BE fallback `TS-` | Align IdCode Create → **`DS-`** (cite import set) · icon `NG` giữ KCHT | BE |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `giao-duong-sat` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Giao cắt đường sắt» khi `type=RAIL_CROSS` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `RAIL_CROSS` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột RAIL_CROSS** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `giao-duong-sat` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên giao cắt · kiểu bảo vệ · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `RAIL_CROSS` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=RAIL_CROSS`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên giao cắt | link Text | **ON** | bind `name` ← `name_crossing` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` · có thể trống |
| protection_type_id | Kiểu bảo vệ | Text / Dropdown label | **ON** | dumpSpecs · mẫu list |
| traffic_control_method_id | Phương thức điều khiển giao thông | Text / Dropdown label | **ON** | dumpSpecs · mẫu list |
| shortest_waiting_time | Thời gian chờ ngắn nhất | Number | optional | dumpSpecs · đơn vị PO chốt |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump RAIL_CROSS không có generic |
| culvert_* / spillway_* / pontoon_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `DS-` |
| type | Loại tài sản | `SearchInput` | * | lock `RAIL_CROSS` khi create từ tile `t15` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| side | Mặt cắt | `Select` L/R/C | | nếu dump có |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name_crossing | Tên giao cắt | `Text` | | SSOT dump · **GAP-RC-NAME-01** · trống OK |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| protection_type_id | Kiểu bảo vệ | `Dropdown` | | LOOKUP_STATIC dump (có rào chắn / không…) · **GAP-RC-LOOKUP-01** |
| traffic_control_method_id | Phương thức điều khiển giao thông | `Dropdown` | | LOOKUP_STATIC dump |
| shortest_waiting_time | Thời gian chờ ngắn nhất | `Number` | | đơn vị phút (đề xuất) · PO chốt |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `protection_type_id` / `traffic_control_method_id`?
2. Alias route `/so-ts-rail-cross` → Navigate `?type=RAIL_CROSS` (như pontoon/spillway) — Design chốt?
3. Đơn vị `shortest_waiting_time` (phút / giây) trên form + grid?
4. Align Create IdCode `DS-` (**GAP-RC-PREFIX-01**) vs icon KCHT `NG`?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c` |
| headerFingerprint | `sha256:c58cbfbc7bfb2218673aa17f73e22229589c62eb05c1740833423a3bf63a4ffe` |
| status | `done` |
| analyzedAt | `2026-09-01T19:30:00.000Z` |
