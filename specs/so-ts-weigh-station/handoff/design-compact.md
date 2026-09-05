# handoff-compact — design · so-ts-weigh-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-weigh-station` |
| title | Sổ TS — Trạm kiểm soát tải |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d6606268` |
| typeCode | `WEIGH_STATION` |
| dump | `weight_station` |
| clusterUi | `station` · tile `t27` |
| prefix | `TFP-` (keep · shared TOLL) |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a` |
| headerFingerprintPrior | `sha256:c0a14d13c73f53f988d023183596ac60b5d7cfbd937027e3c50b32122f4466de` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T06:15:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=WEIGH_STATION` · alias `/so-ts-weigh-station` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC management_unit_id · type_weighting_equipment_id · pavement_type_id
- Boolean: Dropdown Có/Không (includes_load_reduction_area · light · camera_observation · equipment_measurement_vehicle_size)
- `name` ← `station_name` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · location Text · **cấm** ép `"0"`
- Grid ON+hide-empty: TB cân · tải max · ĐVQL · DT nhà · optional DT khu lắp/camera/đèn · length_approaching OFF
- Form gộp Đường vào: length_approaching_road + width_approaching_road
- LeaveConfirmModal · **cấm** native confirm · prefix giữ `TFP-`
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill WEIGH_STATION |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên trạm | Text | ← station_name |
| type_weighting_equipment_id | Loại TB cân | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| max_axle_load_limit | Tải trục max | Number | grid ON hide-empty |
| management_unit_id | ĐVQL | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| building_area | DT nhà | Number | grid ON hide-empty |
| site_area_installed_equipment | DT khu lắp | Number | optional hide-empty |
| camera/light | Camera / Đèn | Dropdown bool | Có/Không |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| length/width_approaching_road | Đường vào | Number | form gộp · grid length OFF |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=WEIGH_STATION`
- prototype=`specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t27
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-weigh-station/ui/design.md`
- prototype: `specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels · prefix TFP doc |
| TL/Dev | profile WEIGH_STATION · S-ATTR editable · LeaveConfirmModal · hide-empty |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
