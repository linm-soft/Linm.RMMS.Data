# handoff-compact — design · so-ts-rescue-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-rescue-station` |
| title | Sổ TS — Công trình cứu hộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_64104e4c` |
| typeCode | `RESCUE_STATION` |
| dump | `tbl_disaster_res_facility` |
| clusterUi | `station` · ô `—` (list only · t24≠facility) |
| prefix | `CN-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprintPrior | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T02:35:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=RESCUE_STATION` · alias `/so-ts-rescue-station` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC office/aux/stored grade · vitri
- `name` ← `name_building` · label «Tên kho bãi» · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid **ON mẫu**: vật tư · DT khuôn viên · cấp+DT nhà/CT phụ/nhà kho · ẩn type/kmTo/SL/ĐVT
- LeaveConfirmModal · **cấm** native confirm
- KCHT ô `—` · **cấm** invent tile · **cấm** nhầm RESCUE_VEHICLE
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill RESCUE_STATION |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên kho bãi | Text | ← name_building |
| materials_in_store | Vật tư chứa trong kho | TextArea | form ON · grid ON |
| site_area_using_land | DT khuôn viên | Number | form ON · grid ON |
| office_building_grade_id | Cấp nhà | Dropdown | LOOKUP_STATIC · grid ON |
| total_area_office_building | DT nhà | Number | form ON · grid ON |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | LOOKUP_STATIC · grid ON |
| total_area_auxiliary_works | DT CT phụ | Number | form ON · grid ON |
| stored_building_grade_id | Cấp nhà kho | Dropdown | LOOKUP_STATIC · grid ON |
| total_area_stored_building | DT nhà kho | Number | form ON · grid ON |
| vitri | Vị trí | Text/Dropdown | LOOKUP_STATIC · S-ATTR |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=RESCUE_STATION`
- prototype=`specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type (no facility tile)
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-rescue-station/ui/design.md`
- prototype: `specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile RESCUE_STATION · S-ATTR editable · LeaveConfirmModal · grid ON mẫu |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map/tile · nhầm RESCUE_VEHICLE · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
