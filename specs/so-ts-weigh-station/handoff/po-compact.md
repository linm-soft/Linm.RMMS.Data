# handoff-compact — po · so-ts-weigh-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f4a717d3` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` |
| clusterUi | `station` · tile `t27` |
| prefix | `TFP-` (keep · shared TOLL) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprintPrior | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T06:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=WEIGH_STATION` · alias `/so-ts-weigh-station` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `station_name` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho management_unit_id · type_weighting_equipment_id · pavement_type_id
- Boolean: Dropdown Có/Không (includes_load_reduction_area · light · camera_observation · equipment_measurement_vehicle_size)
- Grid: ON+hide-empty TB cân/tải/ĐVQL/DT nhà · optional hide-empty DT khu lắp/camera/đèn · length_approaching_road OFF · ẩn type/kmTo/SL/ĐVT
- Prefix: **giữ `TFP-`** live (GAP-WEIGH-PREFIX-01) · **cấm** invent FE
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill WEIGH_STATION / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên trạm | Text | ← station_name |
| type_weighting_equipment_id | Loại TB cân | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| max_axle_load_limit | Tải trục max | Number | grid ON hide-empty |
| management_unit_id | ĐVQL | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| building_area | DT nhà (m²) | Number | grid ON hide-empty |
| site_area_installed_equipment | DT khu lắp | Number | optional hide-empty |
| camera_observation / light | Camera / Đèn | Dropdown bool | Có/Không |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| length/width_approaching_road | Đường vào | Number | form · Design gộp |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts?type=WEIGH_STATION`
- mfeStdUrl alias board `…/so-ts-weigh-station`
- reviewUrl= (Design)
- countCite=24 · tile t27 · GIS tram-can

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t27
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-weigh-station-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-weigh-station-real-data.md`
- po: `specs/so-ts-weigh-station/po/requirement.md`
- prior compact: `specs/so-ts-weigh-station/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · approaching_road grouping · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed · prefix TFP doc |
| TL/Dev | profile WEIGH · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO · invent prefix FE
