# handoff-compact — design · so-ts-bus-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_99378d09` |
| typeCode | `BUS_STATION` |
| dump | `tbl_bus_station` |
| clusterUi | `station` · tile `t04` |
| prefix | `BX-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprintPrior | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T03:30:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=BUS_STATION` · alias `/so-ts-bus-station` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_work_id · owner_id · building_grade_id · build_location · classification
- `name` ← `name_terminal` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid ON+hide-empty: DT mặt bằng · tuyến VT · DT sàn · cấp nhà · classification OFF default
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill BUS_STATION |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên bến | Text | ← name_terminal |
| type_work_id | Loại tài sản | Dropdown | * LOOKUP_STATIC · grid ON |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC · grid ON |
| site_area_using_land | DT mặt bằng | Number | form ON · grid ON hide-empty |
| main_transportation_route | Tuyến VT chính | Text | form ON · grid ON hide-empty |
| total_area_floors | DT sàn | Number | form ON · grid ON hide-empty |
| building_grade_id | Cấp nhà | Dropdown | form ON · grid ON hide-empty |
| build_location | Mặt cắt | Dropdown | L/R/C |
| classification | Phân loại | Dropdown | form ON · grid OFF default |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=BUS_STATION`
- prototype=`specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t04
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-bus-station/ui/design.md`
- prototype: `specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile BUS_STATION · S-ATTR editable · LeaveConfirmModal · hide-empty |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
