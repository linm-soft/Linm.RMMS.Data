# Real-data bind — so-ts-row-util (Kind B list + full-page form · `ROW_UTIL`)

| | |
|---|---|
| feature | `so-ts-row-util` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f00fb2cf` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` |
| prefix | **live import** `HT-` · BFF `web-bff/api/v1/asset/road-assets` · GIS short `HT` · **GAP-ROWUTIL-PREFIX-01** (`DefaultCodePrefix` hôm nay `TS-`) |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*` path mới |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · live `/so-ts?type=ROW_UTIL` |
| mfeStdUrl | STATUS `http://localhost:9301/so-ts-row-util` · live filter `…/so-ts?type=ROW_UTIL` |
| map | `none` (list pack) · GIS deep-link `htkt` optional · **cấm** invent map canvas |
| contentHash | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprint | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| sourceTables | `rmms_road_assets` |
| catalogKind UI schema | `road-assets` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| analyzedAt | `2026-09-02T02:00:00.000Z` |

## § Delta Current vs New (`new_page` · `task_f00fb2cf`)

| ID | Current live | New (this analy) |
|----|--------------|------------------|
| Analy L3 | Stub draft trống | §A+§B+§C+§E bind **done** |
| API path docs | Parent có thể ghi `api/v1/so-ts/…` | Cite controller **`api/v1/asset/road-assets`** |
| List columns | schema chung (+ peer type profiles) | Type profile `ROW_UTIL` hide `type`/SL/ĐVT · show CT HTKT · loại · kmFrom/kmTo · dài · số trụ · chủ |
| Form S-ATTR | `<dl>` dumpSpecs readonly | Editable fields đủ dump ROW_UTIL |
| Name | thường = route khi thiếu Resolve | `name` ← `tencongtrinh_htk` · **GAP-ROWUTIL-NAME-01** |
| Prefix | `DefaultCodePrefix` → `TS-` | create/import **`HT-`** · **GAP-ROWUTIL-PREFIX-01** |
| Leave / alert | native confirm nếu còn | LeaveConfirmModal · useAlert |
| CRUD path | live BFF | **giữ** — cấm demo/localStorage fallback |
| Alias route | thiếu Navigate `so-ts-row-util` | DEFER Design (**GAP-ROWUTIL-ROUTE-01**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/so-ts-row-util.md` | — | version mismatch → gate |
| `context` | `docs/context/features/so-ts-type-grid.md` | — | section reuse · cluster `land` · ô `t08` |
| `context` | `docs/context/features/import-gov-asset-fields.md` §3 · §4 ROW_UTIL | — | dump columns |
| `demo` | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | — | **tham chiếu UI only** · **cấm** SSOT data |
| `import` | `moc_dbvn.tbl_infrastructure_row.2026.8.23.15.15.csv` · set `gov-vn` **13102** | count 0 OK | **cấm** seed giả |
| `api` · list | `RoadAssetsController` `GET …/road-assets?type=ROW_UTIL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` | empty grid copy | toast · **cấm** alert |
| `api` · detail | `GET …/road-assets/{id}` | — | 404 → list · toast |
| `api` · CRUD | `POST` / `PUT` / soft `DELETE` | — | validation toast |
| `api` · init | `GET …/road-assets/init-data` | statuses/sources/units | toast |
| `entity` | `RoadAssetEntity` · table `rmms_road_assets` | — | tenant `CompanyCode` |
| `import` | `RoadAssetCatalogHandler` · dump `tbl_infrastructure_row` · type seed `ROW_UTIL` · unit `HTKT` | count 0 OK | **cấm** invent row |
| `gis` | `GisInventoryMapper` `htkt` ↔ `ROW_UTIL` · icon `HT` | — | deep-link optional |
| `mfe` · list | `AssetListPage.tsx` | empty OK | live BFF · **thiếu** profile ROW_UTIL |
| `mfe` · form | `AssetFormPage.tsx` | — | live BFF only · **thiếu** ATTR keys ROW_UTIL |
| `mfe` · service | `services/asset/endpoint.ts` `BASE=/asset/road-assets` | — | live |
| `mfe` · labels | `dumpSpecLabels.ts` | — | **GAP-ROWUTIL-SPEC-01** thiếu key HTKT |
| `mfe` · tile | `kchtTileConfig.ts` `t08` → `ROW_UTIL` | — | drill |
| `catalog` · UI schema | Integration catalog `road-assets` | bootstrap columns | toast |
| `catalog` · type | asset-type master · code `ROW_UTIL` | — | SearchInput |
| `catalog` · route | road-route master | — | SearchInput |
| `derived` | IdCode BE · prefix `HT-` | — | BE generate / import |
| `derived` | Grid profile hide-empty | — | type column profile |

`sourceCite` = file/controller **có trong repo**. **Cấm** invent `api/v1/so-ts/road-assets` · **cấm** ERP.*.

Cite mẫu row import `HT-infrastructure_row_685327` · `route=QL.1` · `routeNamed=QL.1-THANHHOA` · `routeSegment=Km 285 + 400 - Km 285 + 466` · `kmFrom=285.4` · `kmTo=286.128` · `status=tot` · `lat/lng=20.13275/105.86042` · `source_ref=tbl_infrastructure_row:infrastructure_row_685327` · `name=QL.1` (weak — **GAP-ROWUTIL-NAME-01**).  
Peer rows cùng đoạn: `685328` · `685492` … **13102** total (`COVERAGE-KCHT-40`).

## §B — Bind field (HARD · live)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `?search=` | — | yes |
| type | Loại | SearchInput | **asset-type** | `?type=ROW_UTIL` | `type` | yes |
| route | Cao tốc/QL | SearchInput | **road-route** | `?route=` / detail | `route` | yes |
| routeNamed | Tuyến | SearchInput | **road-route** · `parentCode=route` | detail / list | `routeNamed` | yes |
| routeSegment | Đoạn | SearchInput | **road-route** · `parentCode=routeNamed\|route` | detail / list | `routeSegment` | yes |
| kmFrom | Lý trình đầu | Text | — | `?kmFrom=` / detail | `kmFrom` | yes |
| kmTo | Lý trình cuối | Text | — | `?kmTo=` / detail | `kmTo` | yes |
| orgUnit | Đơn vị | SearchInput tree | **org-unit** | `?orgUnit=` | — | yes |
| code | Mã | Text readonly | — | detail | auto · `HT-` | yes |
| name | Công trình HTKT | Text | — | detail / list | `name` ← `tencongtrinh_htk` | yes · **GAP-ROWUTIL-NAME-01** |
| status | TT KT | Dropdown | LOOKUP_STATIC | detail / list | `status` | yes |
| source | Nguồn | Dropdown | LOOKUP_STATIC | detail | `source` | yes |
| dumpSpecs | Thông số JSON | derived | — | detail | `dumpSpecs` | yes (readonly dl hôm nay) |
| tencongtrinh_htk | Công trình HTKT (dump) | Text | — | parse `dumpSpecs` | → `name` / dumpSpecs | gap → editable S-NAME |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-SOTS-FORM-01** |
| length | Chiều dài (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| number_post | Số trụ / cột | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-ROWUTIL-SPEC-01** |
| owner | Chủ sở hữu | Text / SearchInput | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| located_within_id | Nằm trong phạm vi HL | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap · **GAP-ROWUTIL-LOOKUP-01** |
| protection_tructure | Công trình bảo vệ | Text | — | parse `dumpSpecs` | dumpSpecs / flat | gap · typo key dump giữ |
| type_protection_structure_id | Loại KC bảo vệ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| support_type_id | Loại giá đỡ | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| distance_road_center | KC đến tim đường (km) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| distance_between_supports | KC giữa các giá (m) | Number | — | parse `dumpSpecs` | dumpSpecs / flat | gap |
| status_hiring_is_within_row | TT thuê trong HL | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| build_location | Mặt cắt ngang đường | Dropdown | LOOKUP_STATIC | parse `dumpSpecs` | dumpSpecs / flat | gap |
| tinhthanhpho | Tỉnh / TP | Text | — | parse `dumpSpecs` | dumpSpecs | yes |
| xaphuong | Phường / Xã | Text | — | parse `dumpSpecs` | dumpSpecs | yes |
| lat | Vĩ độ | Number | — | detail | `lat` | yes |
| lng | Kinh độ | Number | — | detail | `lng` | yes |
| qr | QR | Text | — | detail | `qr` | yes |
| valueVnd | Giá trị | Money | — | detail | `valueVnd` | yes |
| quantity | SL | Number | — | detail | `quantity` | yes · **ẩn** grid ROW_UTIL |
| unitCode | ĐVT | Dropdown | LOOKUP_STATIC | detail | `unitCode` | yes · **ẩn** grid · seed `HTKT` |
| note | Ghi chú | TextArea | — | detail | `note` | yes |
| isActive | Active | — | — | detail | soft-delete | yes |
| updatedAt | Cập nhật | DateTime ro | — | detail | — | yes |
| gps | GPS col | derived | — | list `lat`+`lng` | — | yes |

**Prefix map (live):**

| Surface | Prefix | Note |
|---------|--------|------|
| Import set gov-vn | `HT-` | `HT-infrastructure_row_*` |
| GIS IdCode short | `HT` | icon group htkt · peer `LAND_ROW` |
| DefaultCodePrefix create | `TS-` hôm nay | **GAP-ROWUTIL-PREFIX-01** → chốt `HT-` |

## §C — Empty / error / leave

| Case | UX |
|------|-----|
| List empty `type=ROW_UTIL` | empty copy · **cấm** seed row |
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
- packKind list · ROW_UTIL · cluster land · prefix HT-  
- Handoff PO khi control-hint **và** real-data cùng `done`
