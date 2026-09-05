# PO — requirement — so-ts-guardrail

| Field | Value |
|-------|-------|
| feature | `so-ts-guardrail` |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| versionGate | `ok` |
| contentHash | `sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8` |
| writtenAt | `2026-09-01T16:14:20.000Z` |
| taskId | `task_124d8994` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |
| typeCode | `GUARDRAIL` |
| dump | `tbl_guardrail` |
| clusterUi | `linear_protect` · tile `t17` |
| formPattern | Full page Kind B · reuse S-META / S-ROUTE / S-LOC-RANGE / S-NAME / S-ATTR / S-GPS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| liveRoute | `/so-ts?type=GUARDRAIL` |
| boardAlias | `/so-ts-guardrail` (optional Navigate · DEFER Design) |
| mfeStdUrl | `http://localhost:9301/so-ts-guardrail` |
| peerStdUrl | `http://localhost:9301/so-ts?type=GUARDRAIL` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Asset · `api/v1/asset/road-assets` · **cấm ERP.*** |
| analy | confirmed · hash skip · control-hint + real-data §A+§B |

> Analy reuse: **cấm** re-scan demo. Inventory + controlHint + bind từ `_data-analy/features/so-ts-guardrail-*`.

## § Decisions (autoApprove · chốt GAP)

| GAP | Quyết định PO | Handoff |
|-----|---------------|---------|
| GAP-GUARDRAIL-LOOKUP-01 | `type_guardrail` / `material_id` / `installation_purpose_id` / `installed_location_id` = **Dropdown LOOKUP_STATIC** (distinct dump + init `vitriOptions`) · seed BE · **cấm** hardcode FE không cite · **cấm** SearchInput master P1 | Design control-map · SA seed |
| GAP-GUARDRAIL-NAME-01 | `name` **optional** · list primary = `type_guardrail` (+ km) · **cấm** IsWeak → `routeSegment` · **cấm** bắt buộc đoạn tuyến làm tên | Design / SA / Dev |
| GAP-GUARDRAIL-REFLECT-01 | `reflective` = **Number** (SL phản quang) theo mẫu list · **cấm** boolean Select P1 | Design / Dev |
| GAP-GUARDRAIL-ROUTE-01 | Live SSOT = `/so-ts?type=GUARDRAIL` · alias `/so-ts-guardrail` = board-only optional Navigate | Design shell |
| GAP-GUARDRAIL-PREFIX-01 | IdCode prefix **`HL-`** (khớp GIS short `HL`) · `DefaultCodePrefix` create/import | SA / BE |
| GAP-GUARDRAIL-RANGE-01 | Mount **S-LOC-RANGE** · `kmFrom`/`kmTo` * · 4 XY (`latFrom/lngFrom/latTo/lngTo`) P1 trong **dumpSpecs** · **cấm** ép `"0"` khi trống · flatten scalar = migration SA | Design / SA |
| GAP-GUARDRAIL-SPEC-01 | Label VN «Mục đích lắp đặt» cho `installation_purpose_id` · đủ 6 key dump trong FE labels | Dev |
| GAP-GUARDRAIL-PEER-01 | Page filter **`GUARDRAIL` only** · peer `NOISE_BARRIER` = feature riêng · GIS `ho-lan` gộp OK ngoài page | Design / Dev / GIS |
| Flatten attrs | P1 giữ **dumpSpecs** JSON · flatten cột DB = SA migration nếu cần | SA |
| GAP-SOTS-REUSE-01 | **Cấm** fork `AssetFormPage` — reuse section parent | Dev |
| GAP-SOTS-TAB-01 | **Cấm** tab Chi tiết / Bảo trì / Tệp / Lịch sử legacy | Design / Dev |
| GAP-SOTS-COL-01 | Profile cột GUARDRAIL · ẩn `type`/ảnh · ẩn KM_POST-only · SL/ĐVT hide-empty | Design / Dev |
| GAP-FILTER-BAR-01 | `LinErpListFilterBar` · **cấm** nút Tìm riêng · search must work | Design / Dev |
| GAP-GUARDRAIL-LEAVE-01 | `LeaveConfirmModal` + `useAlert` · **cấm** native `confirm`/`alert` | Dev |
| GAP-TYP-01 | Label 13 · input D14 / M16 | Design |

## § Goal

Greenfield type-profile `GUARDRAIL` trên shell Kind B `/so-ts` đã có: list filter + grid cột đúng mẫu `tbl_guardrail` · form full-page editable S-ATTR · CRUD live BFF `road-assets` · tile KCHT `t17` · prefix `HL-`.

## § Out of scope

- Map canvas / GIS draw (`ho-lan` deep-link optional only)
- Invent API `api/v1/so-ts/*` · ERP.* · Domains/Master
- Demo JSON / localStorage làm SSOT data
- GOVOne chrome · cột ảnh đại diện invent
- Fork form 32 file / tab legacy
- Flatten migration DB (DEFER SA)
- Gộp UI `NOISE_BARRIER` vào page này
- E2E / `yarn start:std` (queued `/agent-qa*` only)

## § Screens / zones

| Zone | Pattern | DoD |
|------|---------|-----|
| List A | Header | Title «Sổ TS — Hộ lan / tôn sóng» khi `type=GUARDRAIL` · **cấm** Thêm mới trên A |
| List B | Toolbar + filter | `LinErpListFilterBar` · SearchTextInput · type SearchInput (prefill/ẩn `GUARDRAIL`) · route SearchInput · kmFrom/kmTo Text · org tree · Tạo mới · Refresh · SchemaConfig · History · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử · STT · **profile cột GUARDRAIL** |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind B full-page `CatalogFormShell` 5 cột | C/E/V/Copy · View=`readOnly` · leave-confirm dirty · sections S-* |
| Map | none | — |

## § Inventory + controlHint (copy analy · Design chốt control-map)

### Filter (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | SearchTextInput | text | mã · loại hộ lan · tuyến · QR · địa danh |
| type | Loại tài sản | SearchInput | asset-type | prefill `GUARDRAIL` · ẩn khi deep-link |
| route | Cao tốc / quốc lộ | SearchInput | road-route | **cấm** free-text |
| kmFrom | Lý trình từ | Text | chainage | filter |
| kmTo | Lý trình đến | Text | chainage | filter range |
| orgTree | Cây đơn vị | SearchInput tree | org-unit | QS `orgUnit` |

### Grid columns (`type=GUARDRAIL`)

| Field key | Label | Visible | Notes |
|-----------|-------|---------|-------|
| type_guardrail | Loại hộ lan | **ON** | dumpSpecs · list primary |
| route / routeNamed / routeSegment | 3 tầng tuyến | ON | **cấm** gộp 1 ô DRVN |
| kmFrom / kmTo | Lý trình đầu/cuối | ON | RANGE |
| material_id | Vật liệu | ON | dumpSpecs |
| reflective | SL phản quang | ON | Number · GAP-GUARDRAIL-REFLECT-01 |
| installation_purpose_id | Mục đích lắp đặt | ON | dumpSpecs · GAP-GUARDRAIL-SPEC-01 |
| actual_length | Chiều dài thực tế (m) | ON | Number |
| installed_location_id | Vị trí mặt cắt | hide-empty | dumpSpecs |
| province* / commune* | Địa danh | hide-empty | dumpSpecs |
| name | Tên | optional | hide khi trống |
| type / thumb / image | — | **OFF** | đã biết / GOV · **cấm** invent |
| quantity / unitCode | SL / ĐVT | hide-empty | unit seed `ATGT` |
| distance_next_post / materials_id | — | **OFF** | KM_POST-only |
| status / gps | TT KT / tọa độ | optional | schema seed |

### Form sections (reuse · editable)

| Section | Fields (controlHint) | Required |
|---------|----------------------|----------|
| S-META | code Text ro · type SearchInput lock `GUARDRAIL` · status Dropdown · source Dropdown | type* · status* |
| S-ROUTE | route / routeNamed / routeSegment SearchInput `road-route` | route* |
| S-LOC-RANGE | kmFrom* / kmTo* Text · latFrom/lngFrom/latTo/lngTo Number · provinceFrom/To Text | km* · **cấm** S-LOC-POINT |
| S-NAME | name Text | optional |
| S-ATTR | type_guardrail Dropdown* LOOKUP_STATIC · material_id Dropdown · reflective Number · installation_purpose_id Dropdown · actual_length Number · installed_location_id Dropdown | loại hộ lan* |
| S-GPS | lat/lng Number · qr Text · valueVnd Money · note TextArea · updatedAt Date ro | — |

Prefix create: **`HL-`**. Form **Input/Select** — không chỉ readonly `<dl>`.

## § Grid AC (list pack)

| # | AC | Pass |
|---|----|------|
| G1 | Filter `type=GUARDRAIL` + search + route + km range + org → list BFF | |
| G2 | Grid hiện loại hộ lan · 3 tầng · km đầu/cuối · VL · SL phản quang · mục đích · chiều dài | |
| G3 | Ẩn type / ảnh / KM_POST-only · SL/ĐVT hide-empty | |
| G4 | Pagination 50/100/200/500 · kéo cột ON · row menu Xem/Sửa/Copy/Lịch sử | |
| G5 | Empty import 0 → empty grid + toast · **cấm** seed giả | |
| G6 | **Cấm** nút Tìm riêng · SearchTextInput trong filter bar | |
| G7 | Title «Sổ TS — Hộ lan / tôn sóng» · **cấm** Thêm mới trên header A | |
| G8 | Tile `t17` drill → `?type=GUARDRAIL` · **cấm** gộp `NOISE_BARRIER` vào list | |

## § Form AC

| # | AC | Pass |
|---|----|------|
| F1 | Full-page 5 cột · C/E/V/Copy · View readOnly | |
| F2 | Mount đủ S-META…S-GPS · **cấm** fork file · **cấm** tab legacy | |
| F3 | S-ATTR editable: loại hộ lan* · VL · reflective Number · mục đích · dài · vị trí mặt cắt | |
| F4 | S-LOC-RANGE km đầu/cuối* + 4 XY dumpSpecs · **cấm** ép `"0"` | |
| F5 | name optional · **cấm** IsWeak → routeSegment | |
| F6 | code auto prefix `HL-` | |
| F7 | LeaveConfirmModal dirty · useAlert · **cấm** native dialog | |
| F8 | CRUD live `…/asset/road-assets` · type=`GUARDRAIL` · **cấm** demo-json | |

## § Leave / alert

- Dirty leave → `LeaveConfirmModal` (Linm) · **cấm** `window.confirm`
- Lỗi/validate/toast → `useAlert` / toast SSOT · **cấm** `window.alert`

## § Report AC

N/A — `packKind=list` (không report pack).

## § API / bind (cite real-data · cấm invent)

| Op | Path |
|----|------|
| List | `GET …/asset/road-assets?type=GUARDRAIL&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail / CRUD | `GET/POST/PUT/DELETE …/asset/road-assets[/{id}]` |
| Init | `GET …/asset/road-assets/init-data` |
| Summary tile | `GET …/asset/road-assets/summary-by-type` |
| Entity | `rmms_road_assets` · import `RoadAssetCatalogHandler` · GIS `ho-lan` · unit `ATGT` · CSV **50335** |

Catalogs APPROVED: asset-type · road-route · org-unit · LOOKUP_STATIC status/source/units/vitri · type_guardrail / material / purpose seed (SA).

## § Tasks (DEFER Team-Lead)

| ID | Summary |
|----|---------|
| T-FE-PROFILE | List profile cột GUARDRAIL + filter bar + title + hide columns |
| T-FE-FORM | S-ATTR editable set + labels dumpSpec (`installation_purpose_id` «Mục đích lắp đặt» · reflective Number) + S-LOC-RANGE |
| T-FE-LEAVE | LeaveConfirmModal · useAlert |
| T-BE-PREFIX | `DefaultCodePrefix` = `HL-` cho GUARDRAIL |
| T-BE-LOOKUP | Seed LOOKUP_STATIC / init distinct loại hộ lan · VL · mục đích dump |
| T-FE-ALIAS | Optional Navigate `/so-ts-guardrail` → `?type=GUARDRAIL` (Design) |

## § Handoff Design

1. control-map khớp inventory + decisions trên · DES-GRID-A/B/C/D · form 5col
2. reviewUrl + prototype · **cấm** GOV chrome · **cấm** ảnh invent · **cấm** tab legacy
3. Typography GAP-TYP-01 · filter-bar HARD
4. peerStdUrl = `http://localhost:9301/so-ts?type=GUARDRAIL`
5. Page `GUARDRAIL` only — peer NOISE_BARRIER riêng

## Version meta

| | |
|--|--|
| skillId | `agent-po` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| contentHash | `sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8` |
| writtenAt | `2026-09-01T16:14:20.000Z` |
| taskId | `task_124d8994` |
| status | `confirmed` |

<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.09.01.1 versionGate=ok contentHash=sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8 -->
