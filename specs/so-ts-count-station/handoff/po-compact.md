# handoff-compact — po · so-ts-count-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ccfc7d69` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| clusterUi | `station` · tile `t30` · icon `CAM` |
| prefix | `THC-` (keep live) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprintPrior | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T06:50:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=COUNT_STATION` · alias `/so-ts-count-station` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_vi` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho `agency_id` (ĐVQL)
- Coord: parse `from_coordinate`/`to_coordinate` → lat/lng ưu tiên · dumpSpecs giữ · to_coordinate optional hide
- Grid: ON+hide-empty ĐVQL/tên EN/số làn/tốc độ · ẩn type/kmTo/SL/ĐVT · 3 tầng tuyến tách
- Label UI «Trạm đếm» · BE seed «Trạm đếm xe» giữ
- GIS slug: **DEFER** SA · prefix **giữ `THC-`** · **cấm** invent FE
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill COUNT_STATION / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên (VI) | Text | ← name_vi |
| agency_id | ĐVQL | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| name_en | Tên (EN) | Text | grid ON hide-empty |
| no_of_lane | Số làn | Number | grid ON hide-empty |
| speed | Tốc độ | Number | grid ON hide-empty |
| from/to_coordinate | Tọa độ dump | derived | → lat/lng |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts?type=COUNT_STATION`
- mfeStdUrl alias board `…/so-ts-count-station`
- reviewUrl= (Design)
- countCite=377 · tile t30 · prefix THC

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t30
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-count-station-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-count-station-real-data.md`
- po: `specs/so-ts-count-station/po/requirement.md`
- prior compact: `specs/so-ts-count-station/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · alias optional |
| SA | path giữ · dumpSpecs vs flatten · agency lookup seed · coord parse · GIS slug DEFER |
| TL/Dev | profile COUNT · S-ATTR editable · dumpSpecLabels · lookups · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO · invent GIS slug/prefix FE
