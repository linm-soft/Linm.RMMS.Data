# Data-analy — controlHint — so-ts-type-grid (Kind B shell · list + form theo loại)

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| packKind | `list` |
| mode | `feature_context` (edit_page · **no Excel** · CTX + demo asset · live MFE/BE cite · synthetic) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` (retry fill stubs · CTX+demo hash · queue `roleOnly=data_analy`) |
| contentHash | `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| headerFingerprint | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| analyzedAt | `2026-09-18T17:55:00.000Z` |
| cluster | — (shell · không Excel · import OUT pack · dump cite per-type children) |
| taskId | `task_7f826b0d` |
| autoApprove | `1` (queue) |
| realData | `specs/_data-analy/features/so-ts-type-grid-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts` · `?type=` · form `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| mfeStdUrl | `http://localhost:9301/so-ts-type-grid` (STATUS alias) · live `http://localhost:9301/so-ts` |
| typeCode | — (shell · mọi type asset `/so-ts?type=`) |
| dump | per-type children · mẫu `docs/img/gov-mau-tai-san/{n}-*-list/detail.png` · CSV gov-vn |
| clusterUi | registry clusters CTX §3 (`atgt_point` · `linear_protect` · `crossing` · `station` · `stop` · `land` · `ops`) · **out** `route_master` · `pavement` |
| parent | — (this = parent shell) · peers `import-gov-asset-fields` · `asset` · `asset-kcht-32` |
| runMode | `edit_page` · formalize type column profile + S-* section reuse trên shell Kind B đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup / cột phẳng.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — **cấm** GOVOne chrome · demo = zone/field **tham chiếu**, **cấm** demo-json / localStorage làm SSOT data.  
> **Cấm** fork `AssetFormPage` 32 file — **reuse** section S-META / S-ROUTE / S-LOC-POINT|RANGE / S-NAME / S-ATTR / S-GPS (`GAP-SOTS-REUSE-01`).  
> **Cấm** tab legacy DRVN (`GAP-SOTS-TAB-01`).  
> Point cluster **cấm** bắt buộc `kmTo`. Range cluster mount `S-LOC-RANGE`.  
> `gap-no-source` (vd. `CULVERT_X`) → grid 0 + toast · **cấm** enqueue form giả (`GAP-CULVERT-X-01`).  
> Live API cite **`api/v1/asset/road-assets`** — CTX «`api/v1/so-ts/…`» = doc alias · **cấm** invent path mới (`GAP-SOTS-API-DOC`).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/so-ts-type-grid.md` | `48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| Import fields | `docs/context/features/import-gov-asset-fields.md` | peer SSOT dump §3–§4 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/asset-demo.html` | `e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` · redirect → `asset/asset.html` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/asset.html` | UI chrome tham chiếu · filter + grid zones |
| Mẫu | `docs/img/gov-mau-tai-san/` | 35 cặp list/detail · CTX §5 |
| Entity | `…/Entities/RoadAssetEntity.cs` | table `rmms_road_assets` |
| API | `…/Controllers/RoadAssetsController.cs` | `api/v1/asset/road-assets` **live** |
| Import handler | `…/Import/RoadAssetCatalogHandler.cs` | type seed + dumpSpecs |
| MFE list | `AssetListPage.tsx` | Kind B · `?type=` · **đã** có nhiều `*_HIDE_COLS` · **chưa** SSOT profile registry + hide-empty fill% |
| MFE form | `AssetFormPage.tsx` | Kind B full-page · `data-form-cols="5"` · ATTR per-type **lẫn** section cứng · dumpSpecs còn chỗ readonly |
| FE endpoint | `services/asset/endpoint.ts` | `BASE=/asset/road-assets` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · children `so-ts-*` · **thiếu** slug `so-ts-type-grid` · **cấm ERP.*** |
| Shared catalogs | asset-type · road-route · org-unit | APPROVED A (parent asset) |

Normalized header (shell shared + dumpSpecs attr):

`code|type|status|source|name|route|routenamed|routesegment|kmfrom|kmto|lat|lng|qr|valuevnd|note|quantity|unitcode|dumpspecs|road_name|long_route_name|name_of_route_asset`

## § Delta Current vs New (`edit_page` · `task_7f826b0d`)

Giữ shell `/so-ts` live (list+form CRUD BFF). Delta = SSOT type-column-profile + section S-* + hide-empty + children enqueue.

| ID | Current (live inventory 2026-09-18) | New (SSOT CTX) | Surface |
|----|-------------------------------------|----------------|---------|
| GAP-L3-REAL-DATA | Stub `draft` control-hint + real-data **trống** | §A+§B bind shell + Version meta `done` | data-analy |
| GAP-SOTS-COL-01 | Nhiều `*_HIDE_COLS` ad-hoc trong `AssetListPage` · schema base còn chung | **Type column profile** registry (cluster + dump fill%) · ẩn `type` khi `?type=` · ẩn cột fill 0% · point ẩn `kmTo` nếu dump không có · **cấm** invent cột ngoài dump/mẫu | list |
| GAP-SOTS-FORM-01 | Form «Thông tin tài sản» + ATTR blocks · còn chỗ dumpSpecs `<dl>` | Field editable = mẫu **Thông tin chung** · dumpSpecs = value source đến khi SA flatten | form |
| GAP-SOTS-REUSE-01 | Section logic **inline** / copy theo type trong 1 file lớn | Extract mountable S-META · S-ROUTE · S-LOC-POINT\|RANGE · S-NAME · S-ATTR · S-GPS — children **import** · **cấm** fork page | form |
| GAP-SOTS-TAB-01 | Live 1 tab body | **Cấm** port Chi tiết / Dữ liệu TS / Bảo trì / Tệp / Ghi chú / Lịch sử DRVN | form |
| GAP-SOTS-HIDE-01 | Hide set cứng theo type | Hide-empty từ **fill profile** dump/CSV · **không** ẩn cột đang có giá trị trên trang chỉ vì vài row «—» | list |
| GAP-SOTS-CLUSTER-01 | Cluster logic rải HIDE sets | Registry cluster CTX §3 → default sections + default hide | list+form |
| GAP-SOTS-ROUTE-SPLIT | 3 tầng tuyến | **Tách cột** route / routeNamed / routeSegment · **cấm** gộp 1 ô DRVN | list |
| GAP-SOTS-API-DOC | CTX ghi `api/v1/so-ts/road-assets` | Cite live **`api/v1/asset/road-assets`** · DOMAIN-MAP add slug shell | docs |
| GAP-SOTS-DOMAIN-01 | DOMAIN-MAP thiếu `so-ts-type-grid` | Map → Asset · `asset` | docs |
| GAP-CULVERT-X-01 | `CULVERT_X` gap-no-source | UI từ mẫu · CSV 0 · toast · **cấm** seed | list |
| GAP-SOTS-OUT-01 | Route master / PAVEMENT | **Không** `/so-ts` generic — slug `road-route` · `pavement-section` | scope |
| GAP-FILTER-BAR-01 | Live `LinErpListFilterBar` | Search must work · **cấm** nút Tìm riêng · lead SearchTextInput | list |
| GAP-SOTS-LEAVE-01 | LeaveConfirm nếu còn native | LeaveConfirmModal · useAlert — **cấm** native dialog | form |

**Không** đổi: Kind B A–D · full-page form · `LinCatalogDataGrid` · pagination SSOT · API `api/v1/asset/road-assets` · BFF · entity `rmms_road_assets` · **cấm ERP.*** · **cấm** invent API · map canvas out of scope.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| List A | Header | title «Sổ tài sản» / theo type khi filter · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (**asset-type**) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng (**GAP-FILTER-BAR-01**) |
| List C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột theo `?type=`** |
| List D | Pager | SSOT pagination |
| Form | Full-page `CatalogFormShell` `data-form-cols="5"` | chỉ Thông tin chung · mount S-* theo cluster · **cấm** tab legacy |
| Demo zones | `asset.html` `.filter` + table | tham chiếu chrome only |

## Control hint — shell shared (list filter + form identity)

| Field key | Label | controlHint | catalogKind |
|-----------|-------|-------------|-------------|
| search | Tìm | SearchTextInput | — |
| type | Loại tài sản | SearchInput | **asset-type** (ẩn/lock khi `?type=`) |
| route | Cao tốc/QL | SearchInput | **road-route** |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` |
| routeSegment | Đoạn | SearchInput | **road-route** · cascade |
| kmFrom | Lý trình từ / đầu | Text | chainage |
| kmTo | Lý trình đến / cuối | Text | chainage · **ẩn** point nếu dump không có |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** |
| code | Mã | Text readonly | IdCode |
| name | Tên official | Text **hoặc** SearchInput | biển = **traffic-sign-type** |
| status | Tình trạng KT | Dropdown | LOOKUP_STATIC / init |
| source | Nguồn | Dropdown | LOOKUP_STATIC / init |
| side | Vị trí mặt cắt | Dropdown | LOOKUP_STATIC L/R/C |
| lat / lng | GPS | Number | S-GPS |
| qr | QR | Text | S-GPS |
| value | Giá trị | MoneyInput | S-GPS |
| note | Ghi chú | TextArea | S-GPS |
| quantity / unitCode | SL / ĐVT | Number / Text | hide-empty theo dump |
| dumpSpecs.* | Thuộc tính loại | Select / SearchInput / Number / Text / date | S-ATTR · map CTX §2 · **cấm** bịa |

## Control hint — sections (SSOT form)

| id | Section | When | Controls |
|----|---------|------|----------|
| `S-META` | Định danh | mọi type `/so-ts` | code · type · status · source |
| `S-ROUTE` | Thông tin tuyến | mọi | SearchInput road-route ×3 |
| `S-LOC-POINT` | Vị trí điểm | cluster point/stop/ops/station/crossing-point | kmFrom · XY · tỉnh · side |
| `S-LOC-RANGE` | Vị trí đoạn | `linear_protect` · `land` · crossing có km cuối | kmFrom · kmTo · 4 XY |
| `S-NAME` | Tên official | dump có name_* | Input / SearchInput |
| `S-ATTR` | Thuộc tính loại | mọi · field = mẫu Thông tin chung | per-type children |
| `S-GPS` | GPS / hồ sơ | mọi | lat · lng · QR · value · note |

**Không** mount section trống.

## Cluster → default grid hide / form mount

| Cluster | Form sections | Grid ẩn mặc định |
|---------|---------------|------------------|
| `atgt_point` | META ROUTE LOC-POINT NAME ATTR GPS | `kmTo` · SL/ĐVT nếu dump không có · `type` khi `?type=` |
| `linear_protect` | META ROUTE LOC-RANGE NAME ATTR GPS | `type` khi filter · ảnh GOV N/A |
| `crossing` | META ROUTE POINT\|RANGE NAME ATTR GPS | theo fill dump |
| `station` | META ROUTE LOC-POINT NAME ATTR GPS | DT/cấp/CT phụ nếu fill 0 |
| `stop` | như atgt_point + ATTR bay | — |
| `land` | META ROUTE LOC-RANGE NAME ATTR GPS | — |
| `ops` | META ROUTE LOC-POINT NAME ATTR GPS | — |
| `route_master` / `pavement` | **out of `/so-ts`** | slug riêng |

## Open questions → PO

| ID | Question | Default đề xuất |
|----|----------|-----------------|
| GAP-SOTS-COL-01 | Profile registry file vs inline map? | module `typeColumnProfiles` shared · children override |
| GAP-SOTS-FORM-01 | Flatten dumpSpecs → cột DB khi nào? | giữ JSON đến `/database-migration` Schema_* pair · SA chốt |
| GAP-SOTS-DOMAIN-01 | Thêm slug DOMAIN-MAP? | **yes** → Asset |
| GAP-SOTS-API-DOC | Sửa CTX path `so-ts` → `asset`? | cite live asset · CTX note alias |
| GAP-CULVERT-X-01 | Enqueue child UI khi CSV 0? | UI từ mẫu · **cấm** seed row |

## Handoff

→ **PO:** duyệt shell DoD (profile + S-* + hide-empty + cấm tab legacy) · copy delta vào requirement · children `so-ts-{kebab(type)}` reuse.  
→ **Design:** zones A–D + form 5col · filter-bar HARD · **cấm** invent ảnh cột.  
→ **SA:** API giữ `road-assets` · DOMAIN-MAP slug · flatten dumpSpecs optional.  
**Cấm** Dev đoán Search vs SearchInput ngoài bảng trên.
