# Data-analy — controlHint — so-ts-delineator (Kind B list + full-page form · type `DELINEATOR`)

| Field | Value |
|-------|-------|
| feature | `so-ts-delineator` |
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
| contentHash | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprint | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| analyzedAt | `2026-09-01T14:30:00.000Z` |
| cluster | — (không Excel · import OUT pack · dump `tbl_guide_post` cite CTX) |
| taskId | `task_5a14c20c` |
| autoApprove | `0` (queue) |
| realData | `specs/_data-analy/features/so-ts-delineator-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live list `/so-ts?type=DELINEATOR` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-delineator` (STATUS alias) · live filter `http://localhost:9301/so-ts?type=DELINEATOR` |
| typeCode | `DELINEATOR` |
| dump | `tbl_guide_post` · mẫu `docs/img/gov-mau-tai-san/14-moc_dbvn.tbl_guide_post-list.png` · `14-moc_dbvn.tbl_guide_post-detail.png` · CSV gov-vn **37303** |
| clusterUi | `atgt_point` · ô KCHT `t14` |
| parent | `so-ts-type-grid` · fields `import-gov-asset-fields` §2.2 · §4 |
| runMode | `new_page` · greenfield type-profile trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` — **reuse** section S-META / S-ROUTE / S-LOC-POINT / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> **Cấm** gộp 1 khối kích thước — form tách **Cọc tiêu** / **Cọc H** (`GAP-DELIM-SPEC-01`).  
> **Cấm** `guide_post_type_id` = «Loại kiểu cọc» — dump: vật liệu cọc tiêu · loại cọc = `h_post_type_id`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-delineator.md` | `bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| Parent shell | `docs/context/features/so-ts-type-grid.md` | `282f3009501f63474eef8eb1201e9e1ff9f0a12868b102277d6ced90b3ac31b3` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | `9d2da13afd9b17d6d54ee1f11c7516d3ff947d1933f5431be64245a5c9fe02cb` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | redirect · UI chrome tham chiếu |
| Entity | `.../Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `.../Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `.../Import/RoadAssetCatalogHandler.cs` | type seed `DELINEATOR` · dumpSpecs |
| GIS | `GisInventoryMapper` | layer `coc-tieu` · type `DELINEATOR` |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` |
| MFE form | `AssetFormPage.tsx` | Kind B · `data-form-cols="5"` |
| FE labels | `services/asset/dumpSpecLabels.ts` | `groupDumpSpecs(DELINEATOR)` · TIEU / H / POS |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `api/v1/asset` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A |

Normalized header (DELINEATOR dump attr + 3 tầng tuyến + điểm):

`h_post_type_id|installed_location_id|guide_post_type_id|average_installation_interval|length|width|height|total_number_within_section|h_average_installation_interval|h_total_number_within_section|h_length|h_width|h_height|h_guide_post_type_id|road_name|long_route_name|name_of_route_asset|lytrinh-kmlytrinh|from_coordinatex|from_coordinatey|to_coordinatex|to_coordinatey|code|type|status|source|route|routeNamed|routeSegment|kmFrom|lat|lng|qr|valueVnd|note|quantity`

## § Delta Current vs New (`new_page` · `task_5a14c20c`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta **bắt buộc** = fill L3 analy stubs + type-profile Cọc tiêu / cọc H.

| ID | Current (live inventory 2026-09-01) | New (SSOT CTX+dump+mẫu) | Surface |
|----|-------------------------------------|-------------------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind list/form + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Grid **1 schema** mọi type | Profile `DELINEATOR`: tên · 3 tầng tuyến · lý trình · vị trí · 2 bộ tiêu/H · SL từ `total_number_*` · **ẩn** `type` khi `?type=` · **ẩn** `kmTo` (fill dump ≈0%) | list |
| GAP-SOTS-FORM-01 | S-ATTR phần lớn readonly `<dl>` dumpSpecs | Field editable dump §2.2 / §4 · **tách nhóm** Cọc tiêu / Cọc H | form |
| GAP-SOTS-REUSE-01 | 1 form flat | Mount S-META · S-ROUTE · S-LOC-POINT · S-NAME · S-ATTR · S-GPS — **cấm** fork | form |
| GAP-DELIM-NAME-01 | Không `name_*` official → `name` = đoạn tuyến | `name` = loại+km hoặc `vidagis_id` — **cấm** `name_of_route_asset` | form + import |
| GAP-DELIM-SPEC-01 | Map/hiển thị sai · gộp 1 khối · `guide_post_type_id` nhãn sai | Đủ cột 2 bộ H + vị trí · label đúng dump · form 2 nhóm | BE / form |
| GAP-DELIM-QTY-01 | Import `quantity=1` (tìm `soluong`) | `quantity` ← `total_number_within_section` / `h_total_number_*` · backfill dumpSpecs | import + list |
| GAP-DELIM-POINT-01 | Point cluster vẫn có thể hiện `kmTo` | **không** bắt buộc `kmTo` · ẩn khi `type=DELINEATOR` · **cấm** invent lý trình | form |
| GAP-DELIM-ROUTE-01 | STATUS `mfeStdRoute=/so-ts-delineator` | Live `/so-ts?type=DELINEATOR` · alias **DEFER** Design (tile `t14`) | shell |
| GAP-DELIM-LEAVE-01 | native confirm dirty/delete (peer) | `LeaveConfirmModal` + `useAlert` — **cấm** native dialog | form |
| GAP-SOTS-API-DOC | Parent CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** | docs |

**Không** đổi: Kind B A–D list · full-page form · `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · SearchInput asset-type / road-route · **cấm ERP.*** · map canvas **out of scope**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ TS — Cọc tiêu / cọc H» khi `type=DELINEATOR` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | SearchTextInput · type SearchInput (prefill `DELINEATOR` / ẩn) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột DELINEATOR** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page (`CatalogFormShell` 5 cột) | C/E/V/Copy · View=`readOnly` · leave-confirm dirty |
| Map | none (list pack) | deep-link gis `coc-tieu` optional · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · loại cọc |
| type | Loại tài sản | `SearchInput` | **asset-type** | prefills `DELINEATOR` · **ẩn** khi deep-link type cố định |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | master · **cấm** free-text |
| kmFrom | Lý trình từ | `Text` | chainage | filter |
| kmTo | Lý trình đến | `Text` | chainage | filter range · không = cột grid `kmTo` |
| orgTree | Cây đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

## Control hint — grid columns (`type=DELINEATOR`)

| Field key | Label | controlHint / col | Visible | Notes |
|-----------|-------|-------------------|---------|-------|
| name | Tên / loại cọc | link Text | **ON** | **cấm** bind đoạn tuyến · GAP-DELIM-NAME-01 |
| route | Cao tốc / QL | Text | ON | tầng 1 |
| routeNamed | Tuyến | SearchInput | ON | tầng 2 · `parentCode=route` |
| routeSegment | Đoạn tuyến | SearchInput | ON | tầng 3 · **cấm** gộp 1 ô |
| kmFrom | Lý trình | Text chainage | ON | dump `lytrinh` trống → để trống · **cấm** ép `"0"` |
| installed_location_id | Vị trí cắt / đặt | Text / Dropdown | ON | dumpSpecs |
| h_post_type_id | Loại kiểu cọc | Text / Dropdown | ON | dump · **không** nhầm `guide_post_type_id` |
| guide_post_type_id | Vật liệu cọc tiêu | Text / Dropdown | ON | dumpSpecs |
| length / width / height | DxRxC tiêu (m) | Number | ON | nhóm tiêu |
| average_installation_interval | KC LĐ TB tiêu (m) | Number | ON | dumpSpecs |
| total_number_within_section | SL cọc tiêu | Number | ON | → `quantity` ưu tiên tiêu nếu có |
| h_guide_post_type_id | Vật liệu cọc H | Text / Dropdown | ON | dumpSpecs |
| h_length / h_width / h_height | DxRxC H (m) | Number | ON | nhóm H |
| h_average_installation_interval | KC LĐ TB H (m) | Number | ON | dumpSpecs |
| h_total_number_within_section | SL cọc H | Number | ON | dumpSpecs |
| quantity | Số lượng | Number | ON | bind `total_number_*` · **GAP-DELIM-QTY-01** |
| type | Loại tài sản | — | **OFF** | đã biết từ filter |
| kmTo | Lý trình kết thúc | — | **OFF** | fill dump ≈0% · **cấm** invent |
| unitCode | ĐVT | Dropdown | optional | nếu có seed |
| status | Tình trạng KT | Dropdown label | optional | |
| gps | Tọa độ | derived | optional | lat/lng |

## Control hint — form sections (reuse)

### S-META

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE |
| type | Loại tài sản | `SearchInput` | * | lock `DELINEATOR` khi create từ tile `t14` |
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
| installed_location_id | Vị trí đặt / mặt cắt | `Dropdown` / Text | | dump · vd «Ngoài cùng bên phải» |

### S-NAME

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| name | Tên hiển thị | `Text` | * | loại+km hoặc `vidagis_id` · **cấm** đoạn tuyến · **GAP-DELIM-NAME-01** |
| h_post_type_id | Loại kiểu cọc | `Dropdown` | | dump · LOOKUP_STATIC · **GAP-DELIM-TYPE-01** |

### S-ATTR (mẫu Thông tin chung · 2 nhóm)

#### Nhóm Cọc tiêu

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| guide_post_type_id | Loại vật liệu | `Dropdown` | | LOOKUP_STATIC dump · **không** = loại kiểu cọc |
| length | Chiều dài (m) | `Number` | | dump |
| width | Chiều rộng (m) | `Number` | | dump |
| height | Chiều cao (m) | `Number` | | dump |
| average_installation_interval | Khoảng cách LĐ TB (m) | `Number` | | dump |
| total_number_within_section | Tổng số cọc trong đoạn | `Number` | | → sync `quantity` |

#### Nhóm Cọc H / cột H

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| h_guide_post_type_id | Loại vật liệu | `Dropdown` | | LOOKUP_STATIC dump |
| h_length | Chiều dài (m) | `Number` | | dump |
| h_width | Chiều rộng (m) | `Number` | | dump |
| h_height | Chiều cao (m) | `Number` | | dump |
| h_average_installation_interval | Khoảng cách LĐ TB (m) | `Number` | | dump |
| h_total_number_within_section | Tổng số cọc trong đoạn | `Number` | | dump |

`dumpSpecs` JSON = nguồn giá trị đến khi SA chốt cột phẳng. Form **phải** render Input/Select (không chỉ readonly `<dl>`). FE đã có `groupDumpSpecs('DELINEATOR')` — Design giữ 2 nhóm.

### S-GPS

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| lat | Vĩ độ | `Number` | | |
| lng | Kinh độ | `Number` | | |
| qr | Mã QR | `Text` | | |
| valueVnd | Giá trị (VND) | `Money` | | |
| note | Ghi chú | `TextArea` | | |
| updatedAt | Cập nhật | `Date` readonly | | |

**Không mount:** `kmTo` bắt buộc · tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy · 1 khối DxRxC gộp tiêu+H.

## Open questions (PO AskQuestion trước Design)

| # | Q | Default đề xuất |
|---|---|-----------------|
| 1 | `h_post_type_id` / `guide_post_type_id` / `h_guide_post_type_id` = Dropdown static dump hay SearchInput master? | Dropdown LOOKUP_STATIC P1 |
| 2 | List primary `name` = loại+km hay `vidagis_id` / IdCode? | loại + lý trình nếu có · else code |
| 3 | Alias route `/so-ts-delineator` vs chỉ `?type=DELINEATOR`? | Giữ filter URL · STATUS alias = board link |
| 4 | Flatten dumpSpecs 2 bộ H ra cột DB hay chỉ JSON? | dumpSpecs P1 · flatten = migration SA |
| 5 | `quantity` ưu tiên tiêu vs H khi cả hai có? | ưu tiên `total_number_within_section` · fallback `h_total_*` |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9` |
| headerFingerprint | `sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228` |
| analyzedAt | `2026-09-01T14:30:00.000Z` |
| taskId | `task_5a14c20c` |
| status | `done` |
