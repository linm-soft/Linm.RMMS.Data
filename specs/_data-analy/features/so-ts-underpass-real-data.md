# Real-data bind — so-ts-underpass (Kind B list + full-page form · `UNDERPASS`)

| | |
|---|---|
| feature | `so-ts-underpass` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3deb2a56` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| prefix | **live** `api/v1/asset/road-assets` · BFF `web-bff/api/v1/asset/road-assets` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=UNDERPASS` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-underpass` · live filter `…/so-ts?type=UNDERPASS` |
| map | `none` (list pack) · GIS deep-link `cong-chui` optional · **cấm** invent map canvas |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-01T11:10:00.000Z` |

## § Delta Current vs New (`new_page` · `task_3deb2a56`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ KM_POST/SPILLWAY profile) | Type profile `UNDERPASS` hide `kmTo`/SL/ĐVT/`type` · show dump attrs |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non KM_POST/SPILLWAY) | Editable fields đủ dump UNDERPASS |
| Name | rebuild: trống tên → fallback route | `name` ← `tencongchui` / `name_underpass` · **GAP-UP-NAME-01** |
| Prefix Create | BE fallback `TS-` | Align **`CC-`** · **GAP-UP-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-underpass` | DEFER Design (**GAP-UP-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-underpass.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `crossing` · ô `t06` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 UNDERPASS | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `data-import/.../moc_dbvn.tbl_underpass_box.2026.8.23.14.24.csv` · set `gov-vn` ~490 | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=UNDERPASS&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_underpass_box` · type seed `UNDERPASS` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `cong-chui` ↔ `UNDERPASS` · prefix `CC` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile UNDERPASS |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys UNDERPASS |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | chỉ `name_underpass` · **GAP-UP-SPEC-01** |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `UNDERPASS` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `CC-` | — | BE generate / import · **GAP-UP-PREFIX-01** |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `underpass_box_523453` → CSV `CC-underpass_box_523453` · `name` rebuild hay `QL.1` (weak) · `type=UNDERPASS` · `culvert_type_id=Cống chui dân sinh` · `construction_id=Đổ tại chỗ` · `weight=625` · `number=1` · `width=4` · `height=3` · `crossing_length_culvert=36` · `structure_type_id=Bê tông cốt thép` · `number_wingwall=2` · `material_wingwall_id=Bê tông cốt thép` · `tencongchui`/`name_underpass`/`lytrinh` trống · lat/lng từ `from_coordinatey/x` (21.506734 / 106.357353).

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=UNDERPASS` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter only | `kmTo` | yes · **ẩn** form/grid UNDERPASS |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `CC-` | yes |
| name | Tên cống / hào KT | Text | — | detail / list | `name` ← `tencongchui` / `name_underpass` | yes · **GAP-UP-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| tencongchui | Tên cống / hào KT (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| name_underpass | Tên đường chui (nếu có) | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| culvert_type_id | Loại cống | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-UP-LOOKUP-01** |
| construction_id | Thi công | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| weight | Tải trọng | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number | Số ngăn | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width | Chiều rộng (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| height | Chiều cao (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| crossing_length_culvert | Chiều dài thân cống (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| structure_type_id | Loại kết cấu | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_wingwall | Số lượng tường cánh | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| material_wingwall_id | Vật liệu tường cánh | Dropdown / Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| pavement_type_inside_underpass_id | Loại mặt đường trong | Dropdown | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| area_pavement_inside_underpass | DT mặt đường trong | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_lighting | Số đèn | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_signboard | Số biển báo | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_barrier | Số rào chắn | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid UNDERPASS |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid UNDERPASS |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=UNDERPASS&…` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` (`type=UNDERPASS`) |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |
| Summary (tile) | `GET /web-bff/api/v1/asset/road-assets/summary-by-type` |

API mirror: `api/v1/asset/road-assets` (`RoadAssetsController`).  
FE cite: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset/src/services/asset/endpoint.ts`.

### Dump → scalar / dumpSpecs (UNDERPASS)

| Dump key | Label VN | Bind |
|----------|----------|------|
| `tencongchui` | Tên cống / hào kỹ thuật | `name` (primary) + dumpSpecs |
| `name_underpass` | Tên đường chui (nếu có) | dumpSpecs · form S-NAME · fallback `name` |
| `culvert_type_id` | Loại cống | dumpSpecs · form S-ATTR |
| `construction_id` | Thi công | dumpSpecs · form S-ATTR |
| `weight` | Tải trọng | dumpSpecs · form S-ATTR |
| `number` | Số ngăn | dumpSpecs · form S-ATTR |
| `width` | Chiều rộng (m) | dumpSpecs · form S-ATTR |
| `height` | Chiều cao (m) | dumpSpecs · form S-ATTR |
| `crossing_length_culvert` | Chiều dài thân cống (m) | dumpSpecs · form S-ATTR |
| `structure_type_id` | Loại kết cấu | dumpSpecs · form S-ATTR |
| `number_wingwall` | Số lượng tường cánh | dumpSpecs · form S-ATTR |
| `material_wingwall_id` | Vật liệu tường cánh | dumpSpecs · form S-ATTR |
| `pavement_type_inside_underpass_id` | Loại mặt đường trong hầm chui | dumpSpecs · form S-ATTR |
| `area_pavement_inside_underpass` | Diện tích mặt đường trong | dumpSpecs · form S-ATTR |
| `number_lighting` | Số đèn chiếu sáng | dumpSpecs · form S-ATTR |
| `number_signboard` | Số biển báo | dumpSpecs · form S-ATTR |
| `number_barrier` | Số rào chắn | dumpSpecs · form S-ATTR |
| `road_name` | Cao tốc/QL | `route` |
| `long_route_name` | Tuyến | `routeNamed` |
| `name_of_route_asset` | Đoạn tuyến | `routeSegment` (**không** làm `name`) |
| `lytrinh-kmlytrinh` | Lý trình | `kmFrom` (để trống nếu null) |
| `from_coordinatex/y` | XY | `lng`/`lat` hoặc dumpSpecs |
| `tinhthanhpho` | Tỉnh / TP | dumpSpecs optional |

## §C — Catalog / lookup

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| asset-type | Integration asset-types search | master · code `UNDERPASS` | Dropdown 8 nhãn demo làm SSOT |
| road-route | `GET /integration/road-routes/search` | shared 38 READY | free-text tuyến chính |
| org-unit | `GET /integration/org-units/search` | shared org READY | hardcode ĐV |
| LOOKUP_STATIC status | init-data `statuses` | BE init | demo-only enum |
| LOOKUP_STATIC source | init-data `sources` | BE init | — |
| LOOKUP_STATIC units | init-data `units` | BE init | ẩn grid UNDERPASS |
| LOOKUP_STATIC culvert_type (**đề xuất**) | dump distinct / seed SA | **GAP-UP-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC construction (**đề xuất**) | dump distinct / seed SA | **GAP-UP-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC structure_type (**đề xuất**) | dump distinct / seed SA | **GAP-UP-LOOKUP-01** | hardcode FE không cite |
| LOOKUP_STATIC wingwall / pavement (**đề xuất**) | dump distinct / seed SA | **GAP-UP-LOOKUP-01** | hardcode FE không cite |
| catalog ui-schema | Integration `road-assets` | `LinCatalogUiSchemaEditorModal` | `LinListTableConfigModal` thay schema |

## §D — Map / vẽ

`map: none` — list pack. GPS = scalar lat/lng trên form/list. Deep-link gis `cong-chui` **out of scope** list. **Không** GAP-DA-MAP-01.

## §E — Progress / vòng đời

`progress: none` — không workflow trạng thái riêng ngoài `status` KT + soft `isActive`.  
`status` đổi bởi user form · API PUT · chip list.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD list profile + form S-ATTR editable · Ask Q lookup + name empty + route alias + prefix · copy § Delta |
| Design | control-map khớp §B · 5 cột form · hide columns UNDERPASS · **cấm** tab legacy |
| SA | giữ path `api/v1/asset/road-assets` · dumpSpecs vs flatten · lookup seed · IdCode `CC-` |
| TL/Dev | reuse section parent · **cấm** fork AssetFormPage · LeaveConfirmModal · labels dump · profile list/form mirror SPILLWAY |
| QA | filter `type=UNDERPASS` · tên cống · ẩn kmTo · attr culvert/load/span visible · tile t06 count · prefix `CC-` |

## Cấm

| ❌ | ✅ |
|----|-----|
| Demo JSON / localStorage SSOT | BFF `road-assets` |
| Invent `api/v1/so-ts/road-assets` | Cite live Asset controller |
| ERP.* / Domains/Master | DOMAIN-MAP Asset |
| Seed row khi import 0 | empty grid + toast |
| Fork form 32 file | section S-* reuse |
| Clone tab Chi tiết / Bảo trì / Tệp | Chỉ Thông tin chung |
| IsWeak name → đoạn tuyến | `tencongchui` / `name_underpass` (trống OK) |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| contentHash | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprint | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| status | `done` |
| analyzedAt | `2026-09-01T11:10:00.000Z` |
| compact | `specs/so-ts-underpass/handoff/data_analy-compact.md` |
