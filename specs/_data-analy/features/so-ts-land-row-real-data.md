# Real-data bind — so-ts-land-row (Kind B list + full-page form · `LAND_ROW`)

| | |
|---|---|
| feature | `so-ts-land-row` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_76d3fd4a` |
| typeCode | `LAND_ROW` |
| dump | `tbl_land_btra` |
| prefix | **live import** `DT-` · BFF `web-bff/api/v1/asset/road-assets` · GIS short `HT` · **GAP-LAND-PREFIX-01** (`DefaultCodePrefix` hôm nay `TS-`) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=LAND_ROW` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-land-row` · live filter `…/so-ts?type=LAND_ROW` |
| map | `none` (list pack) · GIS deep-link `dat-hlat` optional · **cấm** invent map canvas |
| contentHash | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprint | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-01T08:20:00.000Z` |

## § Delta Current vs New (`new_page` · `task_76d3fd4a`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `LAND_ROW` hide `kmTo`/SL/ĐVT/`type` · show CT · TT thửa · xã/tỉnh · CQ · kích thước/DT |
| Form S-ATTR | `<dl>` dumpSpecs readonly (non editable types) | Editable fields đủ dump LAND_ROW |
| Name | thường = route khi thiếu Resolve | `name` ← `construction` · **GAP-LAND-NAME-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`DT-`** · **GAP-LAND-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-land-row` | DEFER Design (**GAP-LAND-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-land-row.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `land` · ô `t33` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 LAND_ROW | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_land_btra.2026.8.23.14.16.csv` · set `gov-vn` **12** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=LAND_ROW&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_land_btra` · type seed `LAND_ROW` · unit `HTKT` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `dat-hlat` ↔ `LAND_ROW` · icon `HT` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile LAND_ROW |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys LAND_ROW |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | **GAP-LAND-SPEC-01** thiếu key đất |
| `mfe` · tile | `kchtTileConfig.ts` `t33` → `LAND_ROW` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `LAND_ROW` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `DT-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row dump `land_btra_404989` · `construction=Nhà hạt` · `status_land_lot_id=Có công trình` · `under_managemen=Chi cục QLĐB III.3` · `under_operation=Công Ty TNHH ĐT 194-BOT-QL1 -Cam Ranh` · `exploited_id=Cho thuê có thời hạn` · `length=48` · `width=50` · `total_area=2400` · `width_access_road=6` · `pavement_type_access_road_id=Bê tông xi măng` · `location_id=Bên trái` · `route=QL.1` · `routeNamed=QL.1 - Khánh Hòa (BOT)` · `routeSegment=Km 1488 + 000 - Km 1525 + 000` · X/Y `109.18` / `11.93` · `lytrinh` trống trên dump (mẫu UI có thể có Km).  
Peer: `land_btra_404990` · `construction=Trạm thu phí` · `location_id=Bên phải` · `total_area=1500`.  
Import set cite: `DT-land_btra_404989` · `name=QL.1` (weak — **GAP-LAND-NAME-01**) · `type=LAND_ROW` · status `tot` · lat/lng `11.93` / `109.18`.

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=LAND_ROW` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | filter / optional form | `kmTo` | yes · **ẩn** khi fill 0 LAND_ROW |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `DT-` | yes |
| name | Công trình trên đất | Text | — | detail / list | `name` ← `construction` | yes · **GAP-LAND-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| construction | Công trình trên đất (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| status_land_lot_id | Tình trạng thửa đất | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| under_managemen | Cơ quan chủ quản | Text / SearchInput | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-LAND-SPEC-01** |
| under_operation | Cơ quan đang khai thác | Text / SearchInput | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| exploited_id | Hình thức khai thác | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-LAND-LOOKUP-01** |
| length | Chiều dài (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width | Chiều rộng (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| total_area | Tổng DT thửa đất (m²) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| width_access_road | Chiều rộng đường vào (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| pavement_type_access_road_id | Kết cấu mặt đường vào | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-LAND-LOOKUP-01** |
| distance_road_center | Khoảng cách đến tim đường (km) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| access_road | Đường vào (Có/Không) | Dropdown bool | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| location_id | Vị trí mặt cắt ngang đường | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| lengthiness_access_road | Chiều dài đường vào thửa đất (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tinhthanhpho | Tỉnh / TP | Text | — | parse `dumpSpecs` | dumpSpecs | yes |
| xaphuong | Phường / Xã | Text | — | parse `dumpSpecs` | dumpSpecs | yes |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid LAND_ROW |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid · seed `HTKT` |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Surface | Prefix | Note |
|---------|--------|------|
| Import set gov-vn | `DT-` | `DT-land_btra_*` |
| GIS IdCode short | `HT` | icon group land · **≠** import |
| DefaultCodePrefix create | `TS-` hôm nay | **GAP-LAND-PREFIX-01** → chốt `DT-` |

## §C — Empty / error / leave

| Case | UX |
|------|-----|
| List empty `type=LAND_ROW` | empty copy · **cấm** seed row |
| 404 detail | toast · navigate list |
| Validation | field toast · **cấm** alert |
| Dirty leave | LeaveConfirmModal |
| Delete | Modal confirm · soft-delete |

## §E — Out of scope

- Tab legacy DRVN · fork `AssetFormPage` · ERP.* / Domains/Master  
- Invent `api/v1/so-ts/*` · map canvas · Excel pack  
- Seed giả khi CSV 0 · GOVOne chrome

## DoD

- §A+§B PASS · khớp control-hint  
- packKind list · LAND_ROW · cluster land · prefix DT-  
- Handoff PO khi control-hint **và** real-data cùng `done`
