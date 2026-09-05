# PO — requirement — so-ts-noise-barrier

| Field | Value |
|-------|-------|
| feature | `so-ts-noise-barrier` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` |
| contentHash | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| writtenAt | `2026-09-01T09:35:00.000Z` |
| taskId | `task_de13cadc` |
| autoApprove | `ON` |
| typeCode | `NOISE_BARRIER` |
| dump | `tbl_noise_barrier` |
| clusterUi | `linear_protect` · tile `t25` |
| formPattern | Full page Kind B · reuse S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| liveRoute | `/so-ts?type=NOISE_BARRIER` |
| boardAlias | `/so-ts-noise-barrier` (optional Navigate · DEFER Design) |
| mfeStdUrl | `http://localhost:9301/so-ts?type=NOISE_BARRIER` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| analy | confirmed · hash skip · control-hint + real-data §A+§B |

> Analy reuse: **cấm** re-scan demo. Inventory + controlHint + bind từ `_data-analy/features/so-ts-noise-barrier-*`.

## § Decisions (autoApprove · chốt GAP)

| GAP | Quyết định PO | Handoff |
|-----|---------------|---------|
| GAP-NB-LOOKUP-01 | `type_noise_barrier_id` = **Dropdown LOOKUP_STATIC** (distinct dump: COMPOSITE / Khác / Bê tông…) · seed BE/init · **cấm** hardcode FE không cite | Design control-map · SA seed |
| GAP-NB-NAME-01 | `name` **optional** · list primary = `type_noise_barrier_id` (+ km) · **cấm** IsWeak → `routeSegment` · **cấm** bắt buộc đoạn tuyến làm tên | Design / SA / Dev |
| GAP-NB-ROUTE-01 | Live SSOT = `/so-ts?type=NOISE_BARRIER` · alias `/so-ts-noise-barrier` = board-only optional Navigate | Design shell |
| GAP-NB-PREFIX-01 | IdCode prefix **`TC-`** (khớp GIS short `TC`) · `DefaultCodePrefix` create/import | SA / BE |
| GAP-NB-RANGE-01 | Mount **S-LOC-RANGE** · `kmFrom`/`kmTo` * · 4 XY (`latFrom/lngFrom/latTo/lngTo`) P1 trong **dumpSpecs** · **cấm** ép `"0"` khi trống · flatten scalar = migration SA | Design / SA |
| GAP-NB-VITRI-01 | `vitri` form S-ATTR **optional** · grid **hide-empty** | Design |
| Flatten attrs | P1 giữ **dumpSpecs** JSON · flatten cột DB = SA migration nếu cần | SA |
| GAP-SOTS-REUSE-01 | **Cấm** fork `AssetFormPage` — reuse section parent | Dev |
| GAP-SOTS-TAB-01 | **Cấm** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy | Design / Dev |
| GAP-SOTS-COL-01 | Profile cột NOISE_BARRIER · ẩn `type`/SL/ĐVT/ảnh · ẩn KM_POST-only | Design / Dev |
| GAP-FILTER-BAR-01 | `LinErpListFilterBar` · **cấm** nút Tìm riêng · search must work | Design / Dev |
| GAP-NB-LEAVE-01 | `LeaveConfirmModal` + `useAlert` · **cấm** native `confirm`/`alert` | Dev |
| GAP-TYP-01 | Label 13 · input D14 / M16 | Design |

## § Goal

Greenfield type-profile `NOISE_BARRIER` trên shell Kind B `/so-ts` đã có: list filter + grid cột đúng mẫu `tbl_noise_barrier` · form full-page editable S-ATTR · CRUD live BFF `road-assets` · tile KCHT `t25`.

## § Out of scope

- Map canvas / GIS draw (`chong-on` deep-link optional only)
- Invent API `api/v1/so-ts/*` · ERP.* · Domains/Master
- Demo JSON / localStorage làm SSOT data
- GOVOne chrome · cột ảnh đại diện invent
- Fork form 32 file / tab legacy
- Flatten migration DB (DEFER SA)
- E2E (queued `/agent-qa*` only)

## § Screens / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| List A | Header | Title «Sổ TS — Rào chắn ồn» khi `type=NOISE_BARRIER` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill/ẩn `NOISE_BARRIER`) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột NOISE_BARRIER** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page `CatalogFormShell` 5 cột | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · sections S-* |
| Map | none | — |

## § Inventory + controlHint (copy analy · Design chốt control-map)

### Filter (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · loại tường · tuyến · QR · địa danh |
| type | Loại tài sản | SearchInput | asset-type | prefill `NOISE_BARRIER` · ẩn khi deep-link |
| route | Cao tốc / quốc lộ | SearchInput | road-route | **cấm** free-text |
| kmFrom | Lý trình từ | Text | chainage | filter |
| kmTo | Lý trình đến | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | org-unit | QS `orgUnit` |

### Grid columns (`type=NOISE_BARRIER`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| type_noise_barrier_id | Loại tường chống ồn | **ON** | dumpSpecs · list primary |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô DRVN |
| kmFrom / kmTo | Lý trình đầu/cuối | ON | RANGE |
| provinceFrom / communeFrom / provinceTo / communeTo | Địa danh | ON · hide-empty xã/cuối | dumpSpecs |
| average_height | Chiều cao trung bình (m) | ON | Number |
| actual_length | Chiều dài thực tế (m) | ON | Number · label ≠ generic |
| name | Tên | optional | hide khi trống |
| type / quantity / unitCode / thumb | — | **OFF** | đã biết / dump không / GOV |
| status / gps | TT KT / tọa độ | optional | schema seed |

### Form sections (reuse · editable)

| Section | Fields (controlHint) | Required |
|---------|----------------------|----------|
| S-META | code Text ro · type SearchInput lock `NOISE_BARRIER` · status Dropdown · source Dropdown | type* · status* |
| S-ROUTE | route / routeNamed / routeSegment SearchInput `road-route` | route* |
| S-LOC-RANGE | kmFrom* / kmTo* Text · latFrom/lngFrom/latTo/lngTo Number · provinceFrom/To Text | km* · **cấm** S-LOC-POINT |
| S-NAME | name Text | optional |
| S-ATTR | type_noise_barrier_id Dropdown* LOOKUP_STATIC · average_height Number · actual_length Number · vitri Dropdown optional | loại tường* |
| S-GPS | lat/lng Number · qr Text · valueVnd Money · note TextArea · updatedAt Date ro | — |

Prefix create: **`TC-`**. Form **Input/Select** — không chỉ readonly `<dl>`.

## § Grid AC (list pack)

| # | AC | Pass |
|---|----|------|
| G1 | Filter `type=NOISE_BARRIER` + search + route + km range + org → list BFF | |
| G2 | Grid hiện loại tường · 3 tầng · km đầu/cuối · cao TB · dài thực tế · địa danh | |
| G3 | Ẩn type / SL / ĐVT / ảnh / KM_POST-only | |
| G4 | Pagination 50/100/200/500 · kéo cột ON · row menu Xem/Sửa/Copy/Lịch sử | |
| G5 | Empty import 0 → empty grid + toast · **cấm** seed giả | |
| G6 | **Cấm** nút Tìm riêng · SearchTextInput trong filter bar | |
| G7 | Title «Sổ TS — Rào chắn ồn» · **cấm** Thêm mới trên header A | |
| G8 | Tile `t25` drill → `?type=NOISE_BARRIER` | |

## § Form AC

| # | AC | Pass |
|---|----|------|
| F1 | Full-page 5 cột · C/E/V/Copy · View readOnly | |
| F2 | Mount đủ S-META…S-GPS · **cấm** fork file · **cấm** tab legacy | |
| F3 | S-ATTR editable: loại tường Dropdown* · cao · dài · vitri optional | |
| F4 | S-LOC-RANGE km đầu/cuối* + 4 XY dumpSpecs · **cấm** ép `"0"` | |
| F5 | name optional · **cấm** IsWeak → routeSegment | |
| F6 | code auto prefix `TC-` | |
| F7 | LeaveConfirmModal dirty · useAlert · **cấm** native dialog | |
| F8 | CRUD live `…/asset/road-assets` · type=`NOISE_BARRIER` · **cấm** demo-json | |

## § Leave / alert

- Dirty leave → `LeaveConfirmModal` (Linm) · **cấm** `window.confirm`
- Lỗi/validate/toast → `useAlert` / toast SSOT · **cấm** `window.alert`

## § API / bind (cite real-data · cấm invent)

| Op | Path |
|----|------|
| List | `GET …/asset/road-assets?type=NOISE_BARRIER&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail / CRUD | `GET/POST/PUT/DELETE …/asset/road-assets[/{id}]` |
| Init | `GET …/asset/road-assets/init-data` |
| Summary tile | `GET …/asset/road-assets/summary-by-type` |
| Entity | `rmms_road_assets` · import `RoadAssetCatalogHandler` · GIS `chong-on` |

Catalogs APPROVED: asset-type · road-route · org-unit · LOOKUP_STATIC status/source/units/vitri · type_noise_barrier seed (SA).

## § Tasks (DEFER Team-Lead)

| ID | Summary |
|----|---------|
| T-FE-PROFILE | List profile cột NOISE_BARRIER + filter bar + title + hide columns |
| T-FE-FORM | S-ATTR editable set + labels dumpSpec (`type_noise_barrier_id` · `average_height` · `actual_length` «thực tế») + S-LOC-RANGE |
| T-FE-LEAVE | LeaveConfirmModal · useAlert |
| T-BE-PREFIX | `DefaultCodePrefix` = `TC-` cho NOISE_BARRIER |
| T-BE-LOOKUP | Seed LOOKUP_STATIC / init distinct loại tường dump |
| T-FE-ALIAS | Optional Navigate `/so-ts-noise-barrier` → `?type=NOISE_BARRIER` (Design) |

## § Handoff Design

1. control-map khớp inventory + decisions trên · DES-GRID-A/B/C/D · form 5col
2. reviewUrl + prototype · **cấm** GOV chrome · **cấm** ảnh invent · **cấm** tab legacy
3. Typography GAP-TYP-01 · filter-bar HARD
4. peerStdUrl = `http://localhost:9301/so-ts?type=NOISE_BARRIER`

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| writtenAt | `2026-09-01T09:35:00.000Z` |
| taskId | `task_de13cadc` |
| status | `confirmed` |

<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3 -->
