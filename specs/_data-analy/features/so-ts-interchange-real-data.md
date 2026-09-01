# Real-data bind — so-ts-interchange (Kind B list + full-page form · `INTERCHANGE`)

| | |
|---|---|
| feature | `so-ts-interchange` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d2903309` |
| typeCode | `INTERCHANGE` |
| dump | `tbl_intersection` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=INTERCHANGE` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-interchange` · live filter `…/so-ts?type=INTERCHANGE` |
| map | `none` (list pack) · GIS deep-link `nut-giao` optional · **cấm** invent map canvas |
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprint | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T05:40:00.000Z` |

## § Delta Current vs New (`new_page` · `task_d2903309`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST/SPILLWAY profile) | Type profile `INTERCHANGE` hide `kmTo`/SL/ĐVT/`type` · show dump attrs |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non KM_POST/SPILLWAY) | Editable fields đủ dump INTERCHANGE |
| Name | rebuild: trống `name_intersection` → fallback route | `name` ← `name_intersection` · **GAP-IX-NAME-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-interchange` | DEFER Design (**GAP-IX-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-interchange.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `crossing` · ô `t23` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 INTERCHANGE | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `data-import/.../moc_dbvn.tbl_intersection.2026.8.23.15.11.csv` · set `gov-vn` ~6989 | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=INTERCHANGE&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_intersection` · type seed `INTERCHANGE` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `nut-giao` ↔ `INTERCHANGE` · prefix `NG` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile INTERCHANGE |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys INTERCHANGE |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | chỉ `name_intersection` · **GAP-IX-SPEC-01** |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `INTERCHANGE` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `NG-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `intersection_526282` → CSV `NG-intersection_526282` · `name=QL 1B` · `type=INTERCHANGE` · `intersection_type_id=Nút giao tuyến đồng mức` · `intersect_with_id=Đường phố chính` · `intersection_shape_id=Hình tam giác` · `traffic_signal_lights=False` · `median_strip=False` · `differential_island_height=300` · lat/lng từ `from_coordinatey/x` (21.940788 / 106.703872) · `lytrinh` trống.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=INTERCHANGE` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid INTERCHANGE |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `NG-` | yes |
| name | Tên nút giao | Text | — | detail / list | `name` ← `name_intersection` | yes · **GAP-IX-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| name_intersection | Tên nút giao (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| intersection_type_id | Loại nút giao | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-IX-LOOKUP-01** |
| intersect_with_id | Giao với | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| intersection_shape_id | Hình dạng nút giao | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| ketcau | Kết cấu giao vượt | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| traffic_signal_lights | Có đèn tín hiệu hay không? | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| median_strip | Có dải phân cách / đoạn chuyển làn hay không? | Dropdown boolean | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| khoangcachvoinuttruoc | Khoảng cách với nút giao liền trước (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| phuongthucdieukhien | Phương thức điều khiển | Text / Dropdown | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| differential_island_height | Chiều cao đảo so với mặt đường xe | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid INTERCHANGE |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid INTERCHANGE |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=INTERCHANGE&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=INTERCHANGE`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (INTERCHANGE)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `name_intersection` | Tên nút giao | `name` (primary) + dumpSpecs |
| `intersection_type_id` | Loại nút giao | dumpSpecs · form S-ATTR |
| `intersect_with_id` | Giao với | dumpSpecs · form S-ATTR |
| `intersection_shape_id` | Hình dạng nút giao | dumpSpecs · form S-ATTR |
| `ketcau` | Kết cấu giao vượt | dumpSpecs · form S-ATTR |
| `traffic_signal_lights` | Có đèn tín hiệu hay không? | dumpSpecs · form S-ATTR |
| `median_strip` | Có dải phân cách / đoạn chuyển làn hay không? | dumpSpecs · form S-ATTR |
| `khoangcachvoinuttruoc` | Khoảng cách với nút giao liền trước (m) | dumpSpecs · form S-ATTR |
| `phuongthucdieukhien` | Phương thức điều khiển | dumpSpecs · form S-ATTR |
| `differential_island_height` | Chiều cao đảo so với mặt đường xe | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `INTERCHANGE` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid INTERCHANGE |
| LOOKUP_STATIC intersection_type (**đề xuất**) | dump distinct / seed SA | **GAP-IX-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC intersect_with (**đề xuất**) | dump distinct / seed SA | **GAP-IX-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC intersection_shape (**đề xuất**) | dump distinct / seed SA | **GAP-IX-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC boolean đèn / dải PC | True/False | dump | — |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `nut-giao` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name empty + route alias · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns INTERCHANGE · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form mirror SPILLWAY |
| QA | filter `type=INTERCHANGE` · tên nút · ẩn kmTo · attr intersection visible · tile t23 count · prefix `NG-` |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| IsWeak name → đoạn tuyến | `name_intersection` (trống OK) |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprint | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| status | `done` |
| analyzedAt | `2026-09-01T05:40:00.000Z` |
| compact | `specs/so-ts-interchange/handoff/data_analy-compact.md` |
