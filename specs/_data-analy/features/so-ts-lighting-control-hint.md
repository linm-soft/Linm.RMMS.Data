# Data-analy — controlHint — so-ts-lighting (Kind B list + full-page form · type `LIGHTING`)

| Field | Value |
|-------|-------|
| feature | `so-ts-lighting` |
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
| contentHash | `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| headerFingerprint | `sha256:ca587f46bfa8c91bf0f8d30de24bd8e8db206285936ebdfa3ccc7cc43a303316` |
| analyzedAt | `2026-09-01T20:30:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_street_lighting` cite CTX) |
| taskId | `task_77f2a2d0` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-lighting-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=LIGHTING` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-lighting` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=LIGHTING` |
| typeCode | `LIGHTING` |
| dump | `tbl_street_lighting` · mẫu `docs/img/gov-mau-tai-san/15-moc_dbvn.tbl_street_lighting-list.png` · `15-moc_dbvn.tbl_street_lighting-detail.png` · CSV gov-vn **4871** row `LIGHTING` · prefix live import **`CS-`** |
| clusterUi | `ops` · ô KCHT `t18` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Cluster `ops` · point · dump **không** `km_to` → **S-LOC-POINT** · ẩn `kmTo`.  
> Mẫu list: tên · 3 tầng tuyến · lý trình · ĐV QL · số cột/đèn · loại bóng · MBA · tủ điều khiển · phương thức · mặt cắt (**GAP-SOTS-COL-01** hide-empty khi fill 0).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-lighting.md` | `d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/15-moc_dbvn.tbl_street_lighting-list.png` | tên · tuyến · lý trình · ĐV QL · cột/đèn · MBA · tủ · mặt cắt |
| Mẫu detail | `docs/img/gov-mau-tai-san/15-moc_dbvn.tbl_street_lighting-detail.png` | tab Thông tin chung · vị trí điểm · attr chiếu sáng |
| Dump CSV | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_street_lighting.2026.8.23.14.58.csv` | header eng · cite COVERAGE **4871** |
| Import set | `…/gov/sets/gov-vn/road_assets*.csv` | **4871** `LIGHTING` · prefix `CS-` |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed `LIGHTING` · «Chiếu sáng đường» · unit `HTKT` · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `chieu-sang` ↔ `LIGHTING` · icon `CS` · IdCode import prefix `CS` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **thiếu** profile `LIGHTING` |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR LIGHTING **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `management_id` · `vitri` · **thiếu** hầu hết key lighting §4 |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| KCHT tile | `kchtTileConfig.ts` | `t18` · drill `LIGHTING` · «Hệ thống chiếu sáng đường» · icon `CS` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** · peer `so-ts-its-camera` / `so-ts-rescue-vehicle` |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (LIGHTING dump attr + 3 tầng tuyến + điểm):

`management_id|number_pole_light_bulb|number_light|bulb_type_id|type_transforming_station_id|capacity_transformer|number_control_box|control_method_id|vitri|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|tinhthanhpho|xaphuong|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note`

## § Delta Current vs New (`new_page` · `task_77f2a2d0`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `LIGHTING` (ops) + fill L3 analy stubs (không xóa parent / peer artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ peer type profiles) | Profile `LIGHTING`: tên · 3 tầng tuyến · lý trình · ĐV QL · số cột/đèn · loại bóng · MBA · tủ · phương thức · mặt cắt · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT generic · hide-empty cột fill 0 | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` | Field editable đủ dump §4 LIGHTING = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-LT-NAME-01 | Import/rebuild: `name` thường = `route` (vd. `QL.1`) khi thiếu official | `name` ← mô tả hệ thống hoặc đoạn tuyến · trống OK · **cấm** IsWeak → đoạn tuyến làm tên duy nhất | import + form |
| GAP-LT-SPEC-01 | FE labels thiếu key lighting §4 | Label VN khớp dump/mẫu («Số cột đèn» · «Loại bóng đèn» · «Công suất MBA» …) · form Input/Select đủ cột §4 | FE / form |
| GAP-LT-POINT-01 | Form hiện `kmTo` với type chưa profile | Ops point: **không** bắt buộc `kmTo` · **ẩn** khi `type=LIGHTING` · **cấm** ép `"0"` | form |
| GAP-LT-PREFIX-01 | `DefaultCodePrefix` fallback `TS-` · import set dùng `CS-` | IdCode create/import **`CS-`** khớp GIS/gov-vn | BE |
| GAP-LT-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-lighting` · index chưa Navigate | Live `/so-ts?type=LIGHTING` · alias route **DEFER** Design (tile `t18` deep-link OK) | shell |
| GAP-LT-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-LT-LOOKUP-01 | `management_id` · `bulb_type_id` · `type_transforming_station_id` · `control_method_id` · `vitri` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-AK32-07 | KCHT template có cột Solar* / LampWatt ngoài dump | Grid/form **chỉ** cột dump §4 · solar chi tiết **DEFER** PO/SA | list/form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `chieu-sang` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Chiếu sáng đường» khi `type=LIGHTING` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill `LIGHTING` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột LIGHTING** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `chieu-sang` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · ĐV QL · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `LIGHTING` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=LIGHTING`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên hệ thống | link Text | **ON** | bind `name` · import thường = route — **GAP-LT-NAME-01** |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` |
| management_id | Đơn vị QL sử dụng | Text / Dropdown label | **ON** | dumpSpecs |
| number_pole_light_bulb | Số cột đèn chiếu sáng | Number | ON · hide-empty | dumpSpecs |
| number_light | Số đèn chiếu sáng | Number | ON · hide-empty | dumpSpecs |
| bulb_type_id | Loại bóng đèn | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| type_transforming_station_id | Loại trạm biến áp | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| capacity_transformer | Công suất MBA (kVA) | Number / Text | ON · hide-empty | dumpSpecs |
| number_control_box | Số tủ điều khiển | Number | ON · hide-empty | dumpSpecs |
| control_method_id | Phương thức điều khiển | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| vitri | Vị trí mặt cắt | Text / Dropdown label | ON · hide-empty | dumpSpecs |
| type | Loại tài sản (master) | — | **OFF** | đã biết từ filter `LIGHTING` |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | không generic SL |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `CS-` |
| type | Loại tài sản | `SearchInput` | * | lock `LIGHTING` khi create từ tile `t18` |
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
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs |
| ward | Phường / Xã | `Text` / SearchInput | | dump `xaphuong` · dumpSpecs |
| side / vitri | Mặt cắt | `Dropdown` | | dump `vitri` · Bên trái/phải · có thể gộp S-ATTR |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên hệ thống chiếu sáng | `Text` | | SSOT mô tả ngắn · import hay = route — **GAP-LT-NAME-01** · trống OK |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| management_id | Đơn vị quản lý sử dụng | `Dropdown` / `Text` | | dump · **GAP-LT-LOOKUP-01** |
| number_pole_light_bulb | Số cột đèn chiếu sáng | `Number` | | dump |
| number_light | Số đèn chiếu sáng | `Number` | | dump |
| bulb_type_id | Loại bóng đèn | `Dropdown` / `Text` | | dump · **GAP-LT-LOOKUP-01** |
| type_transforming_station_id | Loại trạm biến áp | `Dropdown` / `Text` | | dump · **GAP-LT-LOOKUP-01** |
| capacity_transformer | Công suất MBA (kVA) | `Number` / `Text` | | dump |
| number_control_box | Số tủ điều khiển | `Number` | | dump |
| control_method_id | Phương thức điều khiển | `Dropdown` / `Text` | | dump · **GAP-LT-LOOKUP-01** |
| vitri | Vị trí mặt cắt ngang đường | `Dropdown` | | L/R/C · **GAP-LT-LOOKUP-01** |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit generic · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột ITS_CAMERA-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `management_id` / `bulb_type_id` / `type_transforming_station_id` / `control_method_id` / `vitri`?
2. Alias route `/so-ts-lighting` → Navigate `?type=LIGHTING` (như peer ops) — Design chốt?
3. Grid: cột số cột/đèn/MBA — luôn ON theo mẫu list, hay hide-empty theo parent GAP-SOTS-COL-01?
4. Prefix IdCode: chốt `CS-` (gov-vn live) vs fallback `TS-` hiện tại — SA/`DefaultCodePrefix`?
5. KCHT template Solar* / LampWatt (**GAP-AK32-07**) — có đưa vào scope form không?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| headerFingerprint | `sha256:ca587f46bfa8c91bf0f8d30de24bd8e8db206285936ebdfa3ccc7cc43a303316` |
| status | `done` |
| analyzedAt | `2026-09-01T20:30:00.000Z` |
