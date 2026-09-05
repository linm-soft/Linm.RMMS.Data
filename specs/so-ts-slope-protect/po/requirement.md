# PO — requirement — so-ts-slope-protect

| Field | Value |
|-------|-------|
| feature | `so-ts-slope-protect` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` |
| contentHash | `sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| writtenAt | `2026-09-02T01:33:20.000Z` |
| taskId | `task_1a1b1159` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| typeCode | `SLOPE_PROTECT` |
| dump | `tbl_slope` |
| clusterUi | `linear_protect` · tile `t12` |
| formPattern | Full page Kind B · reuse S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| liveRoute | `/so-ts?type=SLOPE_PROTECT` |
| boardAlias | `/so-ts-slope-protect` (optional Navigate · DEFER Design) |
| mfeStdUrl | `http://localhost:9301/so-ts-slope-protect` |
| peerStdUrl | `http://localhost:9301/so-ts?type=SLOPE_PROTECT` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| analy | confirmed · hash skip · control-hint + real-data §A+§B |

> Analy reuse: **cấm** re-scan demo. Inventory + controlHint + bind từ `_data-analy/features/so-ts-slope-protect-*`.

## § Decisions (autoApprove · chốt GAP)

| GAP | Quyết định PO | Handoff |
|-----|---------------|---------|
| GAP-SLOPE-LOOKUP-01 | `protection_type_id` / `slope_classification_id` / `location_id` = **Dropdown LOOKUP_STATIC** (distinct dump + init `vitriOptions` cho vị trí) · seed BE · **cấm** hardcode FE không cite · **cấm** SearchInput master P1 | Design control-map · SA seed |
| GAP-SLOPE-NAME-01 | `name` **optional** · list primary = `protection_type_id` (+ km) · **cấm** IsWeak → `routeSegment` · **cấm** bắt buộc đoạn tuyến làm tên | Design / SA / Dev |
| GAP-SLOPE-ROUTE-01 | Live SSOT = `/so-ts?type=SLOPE_PROTECT` · alias `/so-ts-slope-protect` = board-only optional Navigate | Design shell |
| GAP-SLOPE-PREFIX-01 | IdCode prefix **`MD-`** (khớp GIS short `MD`) · `DefaultCodePrefix` create/import · **SA chốt collision** với `pavement-sections` cùng short `MD` | SA / BE |
| GAP-SLOPE-RANGE-01 | Mount **S-LOC-RANGE** · `kmFrom`/`kmTo` * · 4 XY (`latFrom/lngFrom/latTo/lngTo`) P1 trong **dumpSpecs** · **cấm** ép `"0"` khi trống · flatten scalar = migration SA | Design / SA |
| GAP-SLOPE-SPEC-01 | FE `dumpSpecLabels` đủ 5 key: `protection_type_id` · `slope_classification_id` · `actual_protected` · `average_height` · `location_id` · label VN khớp mẫu («Kiểu bảo vệ» · «Phân loại mái dốc» · «Chiều dài bảo vệ, gia cố (m)» · «Chiều cao trung bình (m)» · «Vị trí cắt ngang đường») | Dev |
| GAP-SLOPE-PEER-01 | Page filter **`SLOPE_PROTECT` only** · peer `RETAINING` = feature riêng · GIS `ta-luy` gộp OK ngoài page · layer `mai-doc` = SLOPE only · deep-link ưu tiên `mai-doc` | Design / Dev / GIS |
| Flatten attrs | P1 giữ **dumpSpecs** JSON · flatten cột DB = SA migration nếu cần | SA |
| GAP-SOTS-REUSE-01 | **Cấm** fork `AssetFormPage` — reuse section parent | Dev |
| GAP-SOTS-TAB-01 | **Cấm** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy | Design / Dev |
| GAP-SOTS-COL-01 | Profile cột SLOPE_PROTECT · ẩn `type`/ảnh · ẩn KM_POST-only · SL/ĐVT hide-empty | Design / Dev |
| GAP-FILTER-BAR-01 | `LinErpListFilterBar` · **cấm** nút Tìm riêng · search must work | Design / Dev |
| GAP-SLOPE-LEAVE-01 | `LeaveConfirmModal` + `useAlert` · **cấm** native `confirm`/`alert` | Dev |
| GAP-TYP-01 | Label 13 · input D14 / M16 | Design |

## § Goal

Greenfield type-profile `SLOPE_PROTECT` trên shell Kind B `/so-ts` đã có: list filter + grid cột đúng mẫu `tbl_slope` · form full-page editable S-ATTR · CRUD live BFF `road-assets` · tile KCHT `t12` · prefix `MD-`.

## § Out of scope

- Map canvas / GIS draw (`mai-doc` deep-link optional only)
- Invent API `api/v1/so-ts/*` · ERP.* · Domains/Master
- Demo JSON / localStorage làm SSOT data
- GOVOne chrome · cột ảnh đại diện invent
- Fork form 32 file / tab legacy
- Flatten migration DB (DEFER SA)
- Gộp UI `RETAINING` vào page này
- E2E / `yarn start:std` (queued `/agent-qa*` only)

## § Screens / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| List A | Header | Title «Sổ TS — Bảo vệ mái dốc» khi `type=SLOPE_PROTECT` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill/ẩn `SLOPE_PROTECT`) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột SLOPE_PROTECT** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page `CatalogFormShell` 5 cột | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · sections S-* |
| Map | none | — |

## § Inventory + controlHint (copy analy · Design chốt control-map)

### Filter (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · kiểu BV · tuyến · QR · địa danh |
| type | Loại tài sản | SearchInput | asset-type | prefill `SLOPE_PROTECT` · ẩn khi deep-link |
| route | Cao tốc / quốc lộ | SearchInput | road-route | **cấm** free-text |
| kmFrom | Lý trình từ | Text | chainage | filter |
| kmTo | Lý trình đến | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | org-unit | QS `orgUnit` |

### Grid columns (`type=SLOPE_PROTECT`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| protection_type_id | Kiểu bảo vệ | **ON** | dumpSpecs · list primary |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô DRVN |
| kmFrom / kmTo | Lý trình đầu/cuối | ON | RANGE |
| slope_classification_id | Phân loại mái dốc | ON | dumpSpecs |
| actual_protected | Chiều dài bảo vệ, gia cố (m) | ON | Number |
| average_height | Chiều cao trung bình (m) | ON | Number |
| location_id | Vị trí cắt ngang đường | hide-empty | dumpSpecs · mẫu detail |
| province* / commune* | Địa danh | hide-empty | dumpSpecs |
| name | Tên | optional | hide khi trống |
| type / thumb / image | — | **OFF** | đã biết / GOV · **cấm** invent |
| quantity / unitCode | SL / ĐVT | hide-empty | unit seed `KET_CAU` |
| distance_next_post / materials_id | — | **OFF** | KM_POST-only |
| status / gps | TT KT / tọa độ | optional | schema seed |

### Form sections (reuse · editable)

| Section | Fields (controlHint) | Required |
|---------|----------------------|----------|
| S-META | code Text ro · type SearchInput lock `SLOPE_PROTECT` · status Dropdown · source Dropdown | type* · status* |
| S-ROUTE | route / routeNamed / routeSegment SearchInput `road-route` | route* |
| S-LOC-RANGE | kmFrom* / kmTo* Text · latFrom/lngFrom/latTo/lngTo Number · provinceFrom/To Text | km* · **cấm** S-LOC-POINT |
| S-NAME | name Text | optional |
| S-ATTR | protection_type_id Dropdown* LOOKUP_STATIC · slope_classification_id Dropdown · actual_protected Number · average_height Number · location_id Dropdown | kiểu BV* |
| S-GPS | lat/lng Number · qr Text · valueVnd Money · note TextArea · updatedAt Date ro | — |

Prefix create: **`MD-`**. Form **Input/Select** — không chỉ readonly `<dl>`.

## § Grid AC (list pack)

| # | AC | Pass |
|---|----|------|
| G1 | Filter `type=SLOPE_PROTECT` + search + route + km range + org → list BFF | |
| G2 | Grid hiện kiểu BV · 3 tầng · km đầu/cuối · phân loại · dài BV · cao TB | |
| G3 | Ẩn type / ảnh / KM_POST-only · SL/ĐVT hide-empty · location hide-empty | |
| G4 | Pagination 50/100/200/500 · kéo cột ON · row menu Xem/Sửa/Copy/Lịch sử | |
| G5 | Empty import 0 → empty grid + toast · **cấm** seed giả | |
| G6 | **Cấm** nút Tìm riêng · SearchTextInput trong filter bar | |
| G7 | Title «Sổ TS — Bảo vệ mái dốc» · **cấm** Thêm mới trên header A | |
| G8 | Tile `t12` drill → `?type=SLOPE_PROTECT` · **cấm** gộp `RETAINING` vào list | |

## § Form AC

| # | AC | Pass |
|---|----|------|
| F1 | Full-page 5 cột · C/E/V/Copy · View readOnly | |
| F2 | Mount đủ S-META…S-GPS · **cấm** fork file · **cấm** tab legacy | |
| F3 | S-ATTR editable: kiểu BV* · phân loại · dài BV · cao TB · vị trí cắt ngang | |
| F4 | S-LOC-RANGE km đầu/cuối* + 4 XY dumpSpecs · **cấm** ép `"0"` | |
| F5 | name optional · **cấm** IsWeak → routeSegment | |
| F6 | code auto prefix `MD-` | |
| F7 | LeaveConfirmModal dirty · useAlert · **cấm** native dialog | |
| F8 | CRUD live `…/asset/road-assets` · type=`SLOPE_PROTECT` · **cấm** demo-json | |
| F9 | FE labels đủ 5 key dump SLOPE_PROTECT (GAP-SLOPE-SPEC-01) | |

## § Leave / alert

- Dirty leave → `LeaveConfirmModal` (Linm) · **cấm** `window.confirm`
- Lỗi/validate/toast → `useAlert` / toast SSOT · **cấm** `window.alert`

## § Report AC

N/A — `packKind=list` (không report pack).

## § API / bind (cite real-data · cấm invent)

| Op | Path |
|----|------|
| List | `GET …/asset/road-assets?type=SLOPE_PROTECT&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail / CRUD | `GET/POST/PUT/DELETE …/asset/road-assets[/{id}]` |
| Init | `GET …/asset/road-assets/init-data` |
| Summary tile | `GET …/asset/road-assets/summary-by-type` |
| Entity | `rmms_road_assets` · import `RoadAssetCatalogHandler` · GIS `mai-doc` · unit `KET_CAU` · CSV **10547** |

Catalogs APPROVED: asset-type · road-route · org-unit · LOOKUP_STATIC status/source/units/vitri · protect/class/location seed (SA).

## § Tasks (DEFER Team-Lead)

| ID | Summary |
|----|---------|
| T-FE-PROFILE | List profile cột SLOPE_PROTECT + filter bar + title + hide columns |
| T-FE-FORM | S-ATTR editable set + labels dumpSpec (đủ 5 key) + S-LOC-RANGE |
| T-FE-LEAVE | LeaveConfirmModal · useAlert |
| T-BE-PREFIX | `DefaultCodePrefix` = `MD-` cho SLOPE_PROTECT · collision pavement SA |
| T-BE-LOOKUP | Seed LOOKUP_STATIC / init distinct kiểu BV · phân loại · vị trí dump |
| T-FE-ALIAS | Optional Navigate `/so-ts-slope-protect` → `?type=SLOPE_PROTECT` (Design) |

## § Handoff Design

1. control-map khớp inventory + decisions trên · DES-GRID-A/B/C/D · form 5col
2. reviewUrl + prototype · **cấm** GOV chrome · **cấm** ảnh invent · **cấm** tab legacy
3. Typography GAP-TYP-01 · filter-bar HARD
4. peerStdUrl = `http://localhost:9301/so-ts?type=SLOPE_PROTECT`
5. Page `SLOPE_PROTECT` only — peer RETAINING riêng · layer `mai-doc`

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| writtenAt | `2026-09-02T01:33:20.000Z` |
| taskId | `task_1a1b1159` |
| status | `confirmed` |

<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294 -->
