# PO — requirement — so-ts-median

| Field | Value |
|-------|-------|
| feature | `so-ts-median` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` |
| contentHash | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| writtenAt | `2026-09-01T17:05:00.000Z` |
| taskId | `task_471bda1f` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| typeCode | `MEDIAN` |
| dump | `tbl_median_strip` |
| clusterUi | `linear_protect` · tile `t11` |
| formPattern | Full page Kind B · reuse S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| liveRoute | `/so-ts?type=MEDIAN` |
| boardAlias | `/so-ts-median` (optional Navigate · DEFER Design) |
| mfeStdUrl | `http://localhost:9301/so-ts-median` |
| peerStdUrl | `http://localhost:9301/so-ts?type=MEDIAN` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| analy | confirmed · hash skip · control-hint + real-data §A+§B |

> Analy reuse: **cấm** re-scan demo. Inventory + controlHint + bind từ `_data-analy/features/so-ts-median-*`.

## § Decisions (autoApprove · chốt GAP)

| GAP | Quyết định PO | Handoff |
|-----|---------------|---------|
| GAP-MEDIAN-LOOKUP-01 | `type_median_strip_id` / `material_type_fence_id` / `location_median_strip_id` = **Dropdown LOOKUP_STATIC** (distinct dump + init `vitriOptions`) · seed BE · **cấm** hardcode FE không cite · **cấm** SearchInput master P1 | Design control-map · SA seed |
| GAP-MEDIAN-NAME-01 | `name` **optional** · list primary = `type_median_strip_id` (+ km) · **cấm** IsWeak → `routeSegment` · **cấm** bắt buộc đoạn tuyến làm tên | Design / SA / Dev |
| GAP-MEDIAN-BOOL-01 | `planting_grass` / `planting_tree` = **Select boolean** (Có/Không) · **cấm** Text dump P1 | Design / Dev |
| GAP-MEDIAN-ROUTE-01 | Live SSOT = `/so-ts?type=MEDIAN` · alias `/so-ts-median` = board-only optional Navigate | Design shell |
| GAP-MEDIAN-PREFIX-01 | IdCode prefix **`PC-`** (khớp RebuildGovVn · GIS short `GPC`) · `DefaultCodePrefix` create/import | SA / BE |
| GAP-MEDIAN-RANGE-01 | Mount **S-LOC-RANGE** · `kmFrom`/`kmTo` * · 4 XY (`latFrom/lngFrom/latTo/lngTo`) P1 trong **dumpSpecs** · **cấm** ép `"0"` khi trống · flatten scalar = migration SA | Design / SA |
| GAP-MEDIAN-SPEC-01 | FE `dumpSpecLabels` đủ **10 key** dump §4 MEDIAN · label VN khớp mẫu | Dev |
| Flatten attrs | P1 giữ **dumpSpecs** JSON · flatten cột DB = SA migration nếu cần | SA |
| GAP-SOTS-REUSE-01 | **Cấm** fork `AssetFormPage` — reuse section parent | Dev |
| GAP-SOTS-TAB-01 | **Cấm** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy | Design / Dev |
| GAP-SOTS-COL-01 | Profile cột MEDIAN · ẩn `type`/ảnh · ẩn KM_POST-only · SL/ĐVT hide-empty | Design / Dev |
| GAP-FILTER-BAR-01 | `LinErpListFilterBar` · **cấm** nút Tìm riêng · search must work | Design / Dev |
| GAP-MEDIAN-LEAVE-01 | `LeaveConfirmModal` + `useAlert` · **cấm** native `confirm`/`alert` | Dev |
| GAP-TYP-01 | Label 13 · input D14 / M16 | Design |

## § Goal

Greenfield type-profile `MEDIAN` trên shell Kind B `/so-ts` đã có: list filter + grid cột đúng mẫu `tbl_median_strip` · form full-page editable S-ATTR · CRUD live BFF `road-assets` · tile KCHT `t11` · prefix `PC-`.

## § Out of scope

- Map canvas / GIS draw (`dai-phan-cach` deep-link optional only)
- Invent API `api/v1/so-ts/*` · ERP.* · Domains/Master
- Demo JSON / localStorage làm SSOT data
- GOVOne chrome · cột ảnh đại diện invent
- Fork form 32 file / tab legacy
- Flatten migration DB (DEFER SA)
- E2E / `yarn start:std` (queued `/agent-qa*` only)

## § Screens / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| List A | Header | Title «Sổ TS — Dải phân cách giữa» khi `type=MEDIAN` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill/ẩn `MEDIAN`) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột MEDIAN** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page `CatalogFormShell` 5 cột | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · sections S-* |
| Map | none | — |

## § Inventory + controlHint (copy analy · Design chốt control-map)

### Filter (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · loại dải · tuyến · QR · địa danh |
| type | Loại tài sản | SearchInput | asset-type | prefill `MEDIAN` · ẩn khi deep-link |
| route | Cao tốc / quốc lộ | SearchInput | road-route | **cấm** free-text |
| kmFrom | Lý trình từ | Text | chainage | filter |
| kmTo | Lý trình đến | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | org-unit | QS `orgUnit` |

### Grid columns (`type=MEDIAN`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| type_median_strip_id | Loại dải phân cách | **ON** | dumpSpecs · list primary |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô DRVN |
| kmFrom / kmTo | Lý trình đầu/cuối | ON | RANGE |
| length_median_strip | Chiều dài dải (m) | ON | Number |
| width_median_strip | Chiều rộng dải (m) | ON | Number |
| planting_grass | Trồng cỏ | ON | Select bool · GAP-MEDIAN-BOOL-01 |
| planting_grass_area | DT trồng cỏ (m²) | hide-empty | Number |
| planting_tree | Trồng cây | ON | Select bool · GAP-MEDIAN-BOOL-01 |
| number_tree | Số cây | hide-empty | Number |
| height_fence | Chiều cao hàng rào (m) | ON | Number |
| material_type_fence_id | Vật liệu hàng rào | ON | Dropdown label |
| location_median_strip_id | Vị trí dải | hide-empty | dumpSpecs |
| province* / commune* | Địa danh | hide-empty | dumpSpecs |
| name | Tên | optional | hide khi trống |
| type / thumb / image | — | **OFF** | đã biết / GOV · **cấm** invent |
| quantity / unitCode | SL / ĐVT | hide-empty | unit seed `ATGT` |
| distance_next_post / materials_id | — | **OFF** | KM_POST-only |
| status / gps | TT KT / tọa độ | optional | schema seed |

### Form sections (reuse · editable)

| Section | Fields (controlHint) | Required |
|---------|----------------------|----------|
| S-META | code Text ro · type SearchInput lock `MEDIAN` · status Dropdown · source Dropdown | type* · status* |
| S-ROUTE | route / routeNamed / routeSegment SearchInput `road-route` | route* |
| S-LOC-RANGE | kmFrom* / kmTo* Text · latFrom/lngFrom/latTo/lngTo Number · provinceFrom/To Text | km* · **cấm** S-LOC-POINT |
| S-NAME | name Text | optional |
| S-ATTR | type_median_strip_id Dropdown* LOOKUP_STATIC · length_median_strip Number* · width_median_strip Number · planting_grass Select bool · planting_grass_area Number · planting_tree Select bool · number_tree Number · height_fence Number · material_type_fence_id Dropdown · location_median_strip_id Dropdown | loại dải* · chiều dài* |
| S-GPS | lat/lng Number · qr Text · valueVnd Money · note TextArea · updatedAt Date ro | — |

Prefix create: **`PC-`**. Form **Input/Select** — không chỉ readonly `<dl>`.

## § Grid AC (list pack)

| # | AC | Pass |
|---|----|------|
| G1 | Filter `type=MEDIAN` + search + route + km range + org → list BFF | |
| G2 | Grid hiện loại dải · 3 tầng · km đầu/cuối · dài/rộng · cỏ/cây · hàng rào | |
| G3 | Ẩn type / ảnh / KM_POST-only · SL/ĐVT hide-empty | |
| G4 | Pagination 50/100/200/500 · kéo cột ON · row menu Xem/Sửa/Copy/Lịch sử | |
| G5 | Empty import 0 → empty grid + toast · **cấm** seed giả | |
| G6 | **Cấm** nút Tìm riêng · SearchTextInput trong filter bar | |
| G7 | Title «Sổ TS — Dải phân cách giữa» · **cấm** Thêm mới trên header A | |
| G8 | Tile `t11` drill → `?type=MEDIAN` | |

## § Form AC

| # | AC | Pass |
|---|----|------|
| F1 | Full-page 5 cột · C/E/V/Copy · View readOnly | |
| F2 | Mount đủ S-META…S-GPS · **cấm** fork file · **cấm** tab legacy | |
| F3 | S-ATTR editable: loại dải* · dài* · rộng · cỏ/cây Select bool · DT cỏ · số cây · cao hàng rào · VL hàng rào · vị trí | |
| F4 | S-LOC-RANGE km đầu/cuối* + 4 XY dumpSpecs · **cấm** ép `"0"` | |
| F5 | name optional · **cấm** IsWeak → routeSegment | |
| F6 | code auto prefix `PC-` | |
| F7 | LeaveConfirmModal dirty · useAlert · **cấm** native dialog | |
| F8 | CRUD live `…/asset/road-assets` · type=`MEDIAN` · **cấm** demo-json | |
| F9 | FE labels đủ 10 key dump MEDIAN (GAP-MEDIAN-SPEC-01) | |

## § Leave / alert

- Dirty leave → `LeaveConfirmModal` (Linm) · **cấm** `window.confirm`
- Lỗi/validate/toast → `useAlert` / toast SSOT · **cấm** `window.alert`

## § Report AC

N/A — `packKind=list` (không report pack).

## § API / bind (cite real-data · cấm invent)

| Op | Path |
|----|------|
| List | `GET …/asset/road-assets?type=MEDIAN&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail / CRUD | `GET/POST/PUT/DELETE …/asset/road-assets[/{id}]` |
| Init | `GET …/asset/road-assets/init-data` |
| Summary tile | `GET …/asset/road-assets/summary-by-type` |
| Entity | `rmms_road_assets` · import `RoadAssetCatalogHandler` · GIS `dai-phan-cach` · prefix `PC-` · unit `ATGT` · CSV **6829** |

Catalogs APPROVED: asset-type · road-route · org-unit · LOOKUP_STATIC status/source/units/vitri · type_median_strip / material_type_fence / location_median_strip seed (SA).

## § Tasks (DEFER Team-Lead)

| ID | Summary |
|----|---------|
| T-FE-PROFILE | List profile cột MEDIAN + filter bar + title + hide columns |
| T-FE-FORM | S-ATTR editable set + labels dumpSpec (10 key) + Select bool cỏ/cây + S-LOC-RANGE |
| T-FE-LEAVE | LeaveConfirmModal · useAlert |
| T-BE-PREFIX | `DefaultCodePrefix` = `PC-` cho MEDIAN |
| T-BE-LOOKUP | Seed LOOKUP_STATIC / init distinct loại dải · VL hàng rào · vị trí dump |
| T-FE-ALIAS | Optional Navigate `/so-ts-median` → `?type=MEDIAN` (Design) |

## § Handoff Design

1. control-map khớp inventory + decisions trên · DES-GRID-A/B/C/D · form 5col
2. reviewUrl + prototype · **cấm** GOV chrome · **cấm** ảnh invent · **cấm** tab legacy
3. Typography GAP-TYP-01 · filter-bar HARD
4. peerStdUrl = `http://localhost:9301/so-ts?type=MEDIAN`
5. Page `MEDIAN` only — Select boolean cỏ/cây · Dropdown LOOKUP_STATIC loại/VL/vị trí

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| writtenAt | `2026-09-01T17:05:00.000Z` |
| taskId | `task_471bda1f` |
| status | `confirmed` |

<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5 -->
