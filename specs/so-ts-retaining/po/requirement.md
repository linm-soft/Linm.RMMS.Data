# PO — requirement — so-ts-retaining

| Field | Value |
|-------|-------|
| feature | `so-ts-retaining` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` |
| contentHash | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| writtenAt | `2026-09-02T00:46:04.949Z` |
| taskId | `task_c700f1ca` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| typeCode | `RETAINING` |
| dump | `tbl_retaining_wall` |
| clusterUi | `linear_protect` · tile `t20` |
| formPattern | Full page Kind B · reuse S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| liveRoute | `/so-ts?type=RETAINING` |
| boardAlias | `/so-ts-retaining` (optional Navigate · DEFER Design) |
| mfeStdUrl | `http://localhost:9301/so-ts-retaining` |
| peerStdUrl | `http://localhost:9301/so-ts?type=RETAINING` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| analy | confirmed · hash skip · control-hint + real-data §A+§B |

> Analy reuse: **cấm** re-scan demo. Inventory + controlHint + bind từ `_data-analy/features/so-ts-retaining-*`.

## § Decisions (autoApprove · chốt GAP)

| GAP | Quyết định PO | Handoff |
|-----|---------------|---------|
| GAP-RETAINING-LOOKUP-01 | `retaining_wall_type_id` / `material_type_id` / `foundation_type_id` / `location_id` / `asset_type` = **Dropdown LOOKUP_STATIC** (distinct dump + init `vitriOptions` cho vị trí) · seed BE · **cấm** hardcode FE không cite · **cấm** SearchInput master P1 | Design control-map · SA seed |
| GAP-RETAINING-NAME-01 | `name` **optional** · list primary = `retaining_wall_type_id` (+ km) · **cấm** IsWeak → `routeSegment` · **cấm** bắt buộc đoạn tuyến làm tên | Design / SA / Dev |
| GAP-RETAINING-ASSETTYPE-01 | Dump `asset_type` = **hide-empty** trên grid/form · **không** nhầm cột entity `type` (đã OFF khi `?type=`) | Design / Dev |
| GAP-RETAINING-ROUTE-01 | Live SSOT = `/so-ts?type=RETAINING` · alias `/so-ts-retaining` = board-only optional Navigate | Design shell |
| GAP-RETAINING-PREFIX-01 | IdCode prefix **`KE-`** (khớp GIS short `KE`) · `DefaultCodePrefix` create/import | SA / BE |
| GAP-RETAINING-RANGE-01 | Mount **S-LOC-RANGE** · `kmFrom`/`kmTo` * · 4 XY (`latFrom/lngFrom/latTo/lngTo`) P1 trong **dumpSpecs** · **cấm** ép `"0"` khi trống · flatten scalar = migration SA | Design / SA |
| GAP-RETAINING-SPEC-01 | FE `dumpSpecLabels` đủ 8 key RETAINING: `retaining_wall_type_id` · `material_type_id` · `actual_protected` · `average_height` · `number` · `foundation_type_id` · `location_id` · `asset_type` · label VN khớp mẫu | Dev |
| GAP-RETAINING-PEER-01 | Page filter **`RETAINING` only** · peer `SLOPE_PROTECT` = feature riêng · GIS `ta-luy` gộp OK ngoài page · layer `tuong-chan` = RETAINING | Design / Dev / GIS |
| Flatten attrs | P1 giữ **dumpSpecs** JSON · flatten cột DB = SA migration nếu cần | SA |
| GAP-SOTS-REUSE-01 | **Cấm** fork `AssetFormPage` — reuse section parent | Dev |
| GAP-SOTS-TAB-01 | **Cấm** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy | Design / Dev |
| GAP-SOTS-COL-01 | Profile cột RETAINING · ẩn `type`/ảnh · ẩn KM_POST-only · SL/ĐVT hide-empty | Design / Dev |
| GAP-FILTER-BAR-01 | `LinErpListFilterBar` · **cấm** nút Tìm riêng · search must work | Design / Dev |
| GAP-RETAINING-LEAVE-01 | `LeaveConfirmModal` + `useAlert` · **cấm** native `confirm`/`alert` | Dev |
| GAP-TYP-01 | Label 13 · input D14 / M16 | Design |

## § Goal

Greenfield type-profile `RETAINING` trên shell Kind B `/so-ts` đã có: list filter + grid cột đúng mẫu `tbl_retaining_wall` · form full-page editable S-ATTR · CRUD live BFF `road-assets` · tile KCHT `t20` · prefix `KE-`.

## § Out of scope

- Map canvas / GIS draw (`tuong-chan` deep-link optional only)
- Invent API `api/v1/so-ts/*` · ERP.* · Domains/Master
- Demo JSON / localStorage làm SSOT data
- GOVOne chrome · cột ảnh đại diện invent
- Fork form 32 file / tab legacy
- Flatten migration DB (DEFER SA)
- Gộp UI `SLOPE_PROTECT` vào page này
- E2E / `yarn start:std` (queued `/agent-qa*` only)

## § Screens / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| List A | Header | Title «Sổ TS — Kè / tường chắn» khi `type=RETAINING` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill/ẩn `RETAINING`) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột RETAINING** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page `CatalogFormShell` 5 cột | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · sections S-* |
| Map | none | — |

## § Inventory + controlHint (copy analy · Design chốt control-map)

### Filter (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · loại tường · tuyến · QR · địa danh |
| type | Loại tài sản | SearchInput | asset-type | prefill `RETAINING` · ẩn khi deep-link |
| route | Cao tốc / quốc lộ | SearchInput | road-route | **cấm** free-text |
| kmFrom | Lý trình từ | Text | chainage | filter |
| kmTo | Lý trình đến | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | org-unit | QS `orgUnit` |

### Grid columns (`type=RETAINING`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| retaining_wall_type_id | Loại tường chắn | **ON** | dumpSpecs · list primary |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô DRVN |
| kmFrom / kmTo | Lý trình đầu/cuối | ON | RANGE |
| material_type_id | Loại vật liệu | ON | dumpSpecs |
| actual_protected | Chiều dài (m) | ON | Number · mẫu «Chiều dài» |
| average_height | Chiều cao trung bình (m) | ON | Number |
| number | Số phân đoạn | ON | Number |
| foundation_type_id | Loại móng | ON | dumpSpecs |
| location_id | Vị trí mặt cắt | hide-empty | dumpSpecs · mẫu detail |
| asset_type | Loại tài sản (dump) | hide-empty | ≠ entity type · GAP-RETAINING-ASSETTYPE-01 |
| province* / commune* | Địa danh | hide-empty | dumpSpecs |
| name | Tên | optional | hide khi trống |
| type / thumb / image | — | **OFF** | đã biết / GOV · **cấm** invent |
| quantity / unitCode | SL / ĐVT | hide-empty | unit seed `KET_CAU` |
| distance_next_post / materials_id | — | **OFF** | KM_POST-only |
| status / gps | TT KT / tọa độ | optional | schema seed |

### Form sections (reuse · editable)

| Section | Fields (controlHint) | Required |
|---------|----------------------|----------|
| S-META | code Text ro · type SearchInput lock `RETAINING` · status Dropdown · source Dropdown | type* · status* |
| S-ROUTE | route / routeNamed / routeSegment SearchInput `road-route` | route* |
| S-LOC-RANGE | kmFrom* / kmTo* Text · latFrom/lngFrom/latTo/lngTo Number · provinceFrom/To Text | km* · **cấm** S-LOC-POINT |
| S-NAME | name Text | optional |
| S-ATTR | retaining_wall_type_id Dropdown* LOOKUP_STATIC · material_type_id Dropdown · actual_protected Number · average_height Number · number Number · foundation_type_id Dropdown · location_id Dropdown · asset_type Dropdown hide-empty | loại tường* |
| S-GPS | lat/lng Number · qr Text · valueVnd Money · note TextArea · updatedAt Date ro | — |

Prefix create: **`KE-`**. Form **Input/Select** — không chỉ readonly `<dl>`.

## § Grid AC (list pack)

| # | AC | Pass |
|---|----|------|
| G1 | Filter `type=RETAINING` + search + route + km range + org → list BFF | |
| G2 | Grid hiện loại tường · 3 tầng · km đầu/cuối · VL · chiều dài · cao TB · số đoạn · móng | |
| G3 | Ẩn type / ảnh / KM_POST-only · SL/ĐVT hide-empty · dump `asset_type` hide-empty | |
| G4 | Pagination 50/100/200/500 · kéo cột ON · row menu Xem/Sửa/Copy/Lịch sử | |
| G5 | Empty import 0 → empty grid + toast · **cấm** seed giả | |
| G6 | **Cấm** nút Tìm riêng · SearchTextInput trong filter bar | |
| G7 | Title «Sổ TS — Kè / tường chắn» · **cấm** Thêm mới trên header A | |
| G8 | Tile `t20` drill → `?type=RETAINING` · **cấm** gộp `SLOPE_PROTECT` vào list | |

## § Form AC

| # | AC | Pass |
|---|----|------|
| F1 | Full-page 5 cột · C/E/V/Copy · View readOnly | |
| F2 | Mount đủ S-META…S-GPS · **cấm** fork file · **cấm** tab legacy | |
| F3 | S-ATTR editable: loại tường* · VL · dài · cao TB · số đoạn · móng · vị trí mặt cắt · asset_type hide-empty | |
| F4 | S-LOC-RANGE km đầu/cuối* + 4 XY dumpSpecs · **cấm** ép `"0"` | |
| F5 | name optional · **cấm** IsWeak → routeSegment | |
| F6 | code auto prefix `KE-` | |
| F7 | LeaveConfirmModal dirty · useAlert · **cấm** native dialog | |
| F8 | CRUD live `…/asset/road-assets` · type=`RETAINING` · **cấm** demo-json | |
| F9 | FE labels đủ 8 key dump RETAINING (GAP-RETAINING-SPEC-01) | |

## § Leave / alert

- Dirty leave → `LeaveConfirmModal` (Linm) · **cấm** `window.confirm`
- Lỗi/validate/toast → `useAlert` / toast SSOT · **cấm** `window.alert`

## § Report AC

N/A — `packKind=list` (không report pack).

## § API / bind (cite real-data · cấm invent)

| Op | Path |
|----|------|
| List | `GET …/asset/road-assets?type=RETAINING&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail / CRUD | `GET/POST/PUT/DELETE …/asset/road-assets[/{id}]` |
| Init | `GET …/asset/road-assets/init-data` |
| Summary tile | `GET …/asset/road-assets/summary-by-type` |
| Entity | `rmms_road_assets` · import `RoadAssetCatalogHandler` · GIS `tuong-chan` · unit `KET_CAU` · CSV **9660** |

Catalogs APPROVED: asset-type · road-route · org-unit · LOOKUP_STATIC status/source/units/vitri · wall/material/foundation/location/asset_type seed (SA).

## § Tasks (DEFER Team-Lead)

| ID | Summary |
|----|---------|
| T-FE-PROFILE | List profile cột RETAINING + filter bar + title + hide columns |
| T-FE-FORM | S-ATTR editable set + labels dumpSpec (đủ 8 key) + S-LOC-RANGE |
| T-FE-LEAVE | LeaveConfirmModal · useAlert |
| T-BE-PREFIX | `DefaultCodePrefix` = `KE-` cho RETAINING |
| T-BE-LOOKUP | Seed LOOKUP_STATIC / init distinct loại tường · VL · móng · vị trí dump |
| T-FE-ALIAS | Optional Navigate `/so-ts-retaining` → `?type=RETAINING` (Design) |

## § Handoff Design

1. control-map khớp inventory + decisions trên · DES-GRID-A/B/C/D · form 5col
2. reviewUrl + prototype · **cấm** GOV chrome · **cấm** ảnh invent · **cấm** tab legacy
3. Typography GAP-TYP-01 · filter-bar HARD
4. peerStdUrl = `http://localhost:9301/so-ts?type=RETAINING`
5. Page `RETAINING` only — peer SLOPE_PROTECT riêng

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| writtenAt | `2026-09-02T00:46:04.949Z` |
| taskId | `task_c700f1ca` |
| status | `confirmed` |

<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061 -->
