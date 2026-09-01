# Data-analy — controlHint — so-ts-interchange (Kind B list + full-page form · type `INTERCHANGE`)

| Field | Value |
|-------|-------|
| feature | `so-ts-interchange` |
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
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprint | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| analyzedAt | `2026-09-01T05:40:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_intersection` cite CTX) |
| taskId | `task_d2903309` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-interchange-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=INTERCHANGE` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-interchange` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=INTERCHANGE` |
| typeCode | `INTERCHANGE` |
| dump | `tbl_intersection` · mẫu `docs/img/gov-mau-tai-san/26-moc_dbvn.tbl_intersection-list.png` · `26-moc_dbvn.tbl_intersection-detail.png` · CSV ~6989 import gov-vn |
| clusterUi | `crossing` · ô KCHT `t23` |
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
| Context | `docs/context/features/so-ts-interchange.md` | `65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect target · UI chrome tham chiếu |
| Mẫu list | `docs/img/gov-mau-tai-san/26-moc_dbvn.tbl_intersection-list.png` | cột loại · giao với · hình dạng · đèn · dải PC |
| Mẫu detail | `docs/img/gov-mau-tai-san/26-moc_dbvn.tbl_intersection-detail.png` | tab Thông tin chung · vị trí điểm · attr |
| Dump CSV | `data-import/Sau-sat-nhap/gov/raw/moc_dbvn.tbl_intersection.2026.8.23.15.11.csv` | header eng + VN · cite sample `intersection_526282` |
| Import set | `data-import/.../gov/sets/gov-vn/road_assets*.csv` | ~6989 `INTERCHANGE` · prefix `NG-` |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `INTERCHANGE` · «Nút giao đường bộ» · dumpSpecs |
| GIS map | `GisInventoryMapper.cs` | `nut-giao` ↔ `INTERCHANGE` · prefix `NG` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · profile KM_POST/SPILLWAY — **thiếu** INTERCHANGE |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · S-ATTR INTERCHANGE **chưa** editable |
| FE labels | `services/asset/dumpSpecLabels.ts` | có `name_intersection` — **thiếu** key attr còn lại |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (INTERCHANGE dump attr + 3 tầng tuyến + điểm):

`name_intersection|intersection_type_id|intersect_with_id|intersection_shape_id|ketcau|traffic_signal_lights|median_strip|khoangcachvoinuttruoc|phuongthucdieukhien|differential_island_height|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|code|type|status|source|route|routenamed|routesegment|kmfrom|lat|lng|qr|valuevnd|note`

## § Delta Current vs New (`new_page` · `task_d2903309`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = type-profile `INTERCHANGE` (crossing) + fill L3 analy stubs (không xóa parent asset / KM_POST / SPILLWAY artifacts).

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid schema chung (+ profile KM_POST/SPILLWAY) | Profile `INTERCHANGE`: tên nút · 3 tầng tuyến · lý trình · loại nút · giao với · hình dạng · đèn · dải PC · khoảng cách · PT ĐK · cao đảo · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` · **ẩn** SL/ĐVT · **ẩn** cột KM_POST/SPILLWAY-only | list |
| GAP-SOTS-FORM-01 | S-ATTR = readonly `<dl>` `dumpSpecs` (trừ KM_POST/SPILLWAY) | Field editable đủ dump §4 INTERCHANGE = mẫu Thông tin chung | form |
| GAP-SOTS-REUSE-01 | Form flat «Thông tin tài sản» + dump dl | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork file form | form |
| GAP-IX-NAME-01 | Rebuild: nhiều row `name_intersection` trống → fallback `route`/`QL.*` | `name` ← `name_intersection` khi có · **cấm** IsWeak → đoạn tuyến · trống OK (không invent) | import + form |
| GAP-IX-SPEC-01 | FE `dumpSpecLabels` chỉ `name_intersection` | Label VN khớp header dump row VN · form Input/Select đủ cột | FE / form |
| GAP-IX-POINT-01 | Form hiện `kmTo` với type ≠ KM_POST/SPILLWAY | Crossing point: **không** bắt buộc `kmTo` · **ẩn** khi `type=INTERCHANGE` · `lytrinh` hay trống — **cấm** ép `"0"` | form |
| GAP-IX-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-interchange` · index chưa Navigate | Live `/so-ts?type=INTERCHANGE` · alias route **DEFER** Design (tile `t23` deep-link OK · mirror `so-ts-spillway`) | shell |
| GAP-IX-LEAVE-01 | `window.confirm` dirty / delete (nếu còn) | `LeaveConfirmModal` + `useAlert` / Modal stacked — **cấm** native dialog | form |
| GAP-IX-LOOKUP-01 | `intersection_type_id` · `intersect_with_id` · `intersection_shape_id` · `phuongthucdieukhien` = text dump | controlHint **Dropdown** LOOKUP_STATIC dump **hoặc** SearchInput nếu SA seed — PO chốt | form |
| GAP-SOTS-API-DOC | Parent CTX có thể ghi `api/v1/so-ts/…` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API prefix `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · **cấm** invent API mới · map canvas **out of scope** list pack (GIS deep-link `nut-giao` optional).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Nút giao…» khi `type=INTERCHANGE` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `INTERCHANGE` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột INTERCHANGE** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar raw |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` (**không** disabled xám) · leave-confirm dirty · toolbar zones voucher SSOT |
| Map | none (list pack) | deep-link gis `nut-giao` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin · **cấm** clone tab Chi tiết / Bảo trì / Tệp / Lịch sử.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên nút · loại · giao với · tuyến · QR |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `INTERCHANGE` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **không** = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=INTERCHANGE`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên nút giao | link Text | **ON** | bind `name` = `name_intersection` |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp 1 ô DRVN |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · `parentCode=routeNamed\|route` |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh-kmlytrinh` (hay trống) |
| intersection_type_id | Loại nút giao | Text / Dropdown label | ON | dumpSpecs · mẫu list |
| intersect_with_id | Giao với | Text / Dropdown label | ON | dumpSpecs |
| intersection_shape_id | Hình dạng nút giao | Text / Dropdown label | ON | dumpSpecs |
| traffic_signal_lights | Có đèn tín hiệu | boolean label | ON | dumpSpecs · True/False |
| median_strip | Có dải phân cách / chuyển làn | boolean label | ON | dumpSpecs |
| khoangcachvoinuttruoc | Khoảng cách nút trước (m) | Number | optional | dumpSpecs · fill thấp → Design có thể ẩn |
| phuongthucdieukhien | Phương thức điều khiển | Text | optional | dumpSpecs |
| differential_island_height | Chiều cao đảo so với mặt đường | Number | optional | dumpSpecs |
| ketcau | Kết cấu giao vượt | Text | optional | dumpSpecs · hay trống |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | dump không có · point |
| quantity / unitCode | SL / ĐVT | — | **OFF** | dump INTERCHANGE không có |
| distance_next_post / materials_id / spillway_* | — | — | **OFF** | type-other |
| status | Tình trạng KT | Dropdown label | optional | giữ nếu schema seed |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix `NG-` |
| type | Loại tài sản | `SearchInput` | * | lock `INTERCHANGE` khi create từ tile `t23` |
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
| kmFrom | Lý trình (Km+) | `Text` chainage | | dump `lytrinh-kmlytrinh` · **cấm** ép `"0"` · sample hay trống |
| lat / lng | X / Y | `Number` | | dump `from_coordinatex/y` (X→lng · Y→lat) |
| province | Tỉnh / TP | `Text` / SearchInput | | dump `tinhthanhpho` · dumpSpecs hoặc omit nếu trống |

**Không mount** `S-LOC-RANGE` / `kmTo` bắt buộc.

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name / name_intersection | Tên nút giao | `Text` | * | SSOT dump `name_intersection` · label «Tên nút giao» · **GAP-IX-NAME-01** |

### S-ATTR (mẫu Thông tin chung + đủ dump §4)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| intersection_type_id | Loại nút giao | `Dropdown` | * | LOOKUP_STATIC dump (Nút giao tuyến đồng mức…) · **GAP-IX-LOOKUP-01** |
| intersect_with_id | Giao với | `Dropdown` | | LOOKUP_STATIC dump (Đường phố chính / Quốc lộ…) |
| intersection_shape_id | Hình dạng nút giao | `Dropdown` | | LOOKUP_STATIC dump (Ngã ba / Ngã tư / Đảo xuyến / Hình tam giác…) |
| ketcau | Kết cấu giao vượt | `Text` | | hay trống trên dump |
| traffic_signal_lights | Có đèn tín hiệu hay không? | `Dropdown` boolean | | True/False |
| median_strip | Có dải phân cách / đoạn chuyển làn hay không? | `Dropdown` boolean | | True/False |
| khoangcachvoinuttruoc | Khoảng cách với nút giao liền trước (m) | `Number` | | |
| phuongthucdieukhien | Phương thức điều khiển | `Text` / `Dropdown` | | LOOKUP_STATIC nếu SA seed |
| differential_island_height | Chiều cao đảo so với mặt đường xe | `Number` | | đơn vị theo dump (số nguyên sample) |

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

**Không mount:** `kmTo` bắt buộc · quantity/unit cho INTERCHANGE · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · cột KM_POST/SPILLWAY-only.

## Open questions (PO)

1. Lookup seed vs Dropdown static từ distinct dump cho `intersection_type_id` / `intersect_with_id` / `intersection_shape_id` / `phuongthucdieukhien`?
2. Alias route `/so-ts-interchange` → Navigate `?type=INTERCHANGE` (như spillway) — Design chốt?
3. Grid: ẩn cột fill thấp (`khoangcachvoinuttruoc` · `ketcau` · `phuongthucdieukhien`) theo GAP-SOTS-COL-01 hay giữ mẫu list?

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprint | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| status | `done` |
| analyzedAt | `2026-09-01T05:40:00.000Z` |
