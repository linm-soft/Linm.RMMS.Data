# handoff-compact — design · so-ts-rescue-vehicle

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-rescue-vehicle` |
| title | Sổ TS — Xe cứu hộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_62893289` |
| typeCode | `RESCUE_VEHICLE` |
| dump | `tbl_rescue_vehicle` |
| clusterUi | `ops` · tile `t24` |
| prefix | `XH-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca` |
| headerFingerprintPrior | `sha256:e051d26fcf09cdad94c93d0862a90215a0e1fdb277901c181a6655e7bb16fa32` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T04:20:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=RESCUE_VEHICLE` · alias `/so-ts-rescue-vehicle` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC `vehicle_type_id` / `under_operation_by`
- `name` ← `parking_location_name` · trống OK · **cấm** IsWeak route làm tên duy nhất
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid **ON mẫu** + hide-empty kmFrom/vị trí đậu/ĐV mua khi null · ẩn type/kmTo/SL/ĐVT
- LeaveConfirmModal · **cấm** native confirm
- KCHT tile `t24` drill OK · count import **7** · prefix **`XH-`**
- **Cấm** nhầm `RESCUE_STATION` (trạm cứu nạn)
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none** (GAP-RV-DUMP-KEY-01 defer SA)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill RESCUE_VEHICLE |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên vị trí/xe | Text | GAP-RV-NAME-01 |
| vehicle_type_id | Loại phương tiện | Dropdown | LOOKUP_STATIC · grid ON |
| parking_location_name | Vị trí đậu | Text | hide-empty OK |
| purchased_by | ĐV mua sắm | Text | hide-empty OK |
| under_operation_by | Cơ quan khai thác | Dropdown | LOOKUP_STATIC · canonical key |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=RESCUE_VEHICLE`
- mfeStdUrl=`http://localhost:9301/so-ts-rescue-vehicle`
- prototype=`specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t24
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-rescue-vehicle/ui/design.md`
- prototype: `specs/so-ts-rescue-vehicle/ui/prototype/so-ts-rescue-vehicle-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · DefaultCodePrefix XH- · dumpSpecLabels · dump key map `under_operation_by` |
| TL/Dev | profile RESCUE_VEHICLE · S-ATTR editable · LeaveConfirmModal · grid ON mẫu · cấm nhầm RESCUE_STATION |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map · nhầm RESCUE_STATION · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
