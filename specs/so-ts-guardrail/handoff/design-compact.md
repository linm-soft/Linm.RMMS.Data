# Handoff compact — design

schemaVersion: 1
feature: so-ts-guardrail
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-01T16:19:30.000Z
taskId: task_fc833be2
autoApprove: ON
e2eQa: ON
design_confirm: approve
changeScope: new_page
typeCode: GUARDRAIL
dump: tbl_guardrail
clusterUi: linear_protect · tile t17
prefix: HL- (GIS short HL)
formPattern: Full page · CatalogFormShell · data-form-cols=5
Kind: B A–D+F
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8
headerFingerprintPrior: sha256:0b2e8af0ce459112fb3201d0f7a3f58f90a6d5cf139dd50f3d2570b709fd9e75
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Decisions
- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · cấm fork
- Live `/so-ts?type=GUARDRAIL` · alias `/so-ts-guardrail` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_guardrail / material_id / installation_purpose_id / installed_location_id
- reflective=Number (SL) · name optional · list primary=type_guardrail · cấm IsWeak
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT · prefix HL-
- Grid: ON loại hộ lan/3 tầng/kmFrom/kmTo/VL/phản quang/mục đích/dài · hide-empty vị trí/địa danh · ẩn type/ảnh
- Peer: GUARDRAIL only · NOISE_BARRIER riêng
- LeaveConfirmModal · cấm native confirm
- API api/v1/asset/road-assets · cấm ERP.* · cấm invent so-ts path
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill GUARDRAIL |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE * |
| type_guardrail | Loại hộ lan | Dropdown | * LOOKUP_STATIC · grid primary |
| material_id | Vật liệu | Dropdown | dumpSpecs · grid ON |
| reflective | SL phản quang | Number | GAP-GUARDRAIL-REFLECT-01 |
| installation_purpose_id | Mục đích lắp đặt | Dropdown | LOOKUP_STATIC · SPEC-01 |
| actual_length | Chiều dài (m) | Number | grid ON |
| installed_location_id | Vị trí mặt cắt | Dropdown | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix HL- |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/ui/prototype/so-ts-guardrail-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=GUARDRAIL`
- mfeStdUrl=`http://localhost:9301/so-ts-guardrail`
- prototype=`specs/so-ts-guardrail/ui/prototype/so-ts-guardrail-list-prototype.html`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t17
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR
- none

## Full paths
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/ui/design.md`
- prototype: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/ui/prototype/so-ts-guardrail-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next
| Role | Need |
|------|------|
| **SA** | path giữ · HL- DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels installation_purpose_id |
| TL/Dev | profile GUARDRAIL · S-ATTR editable · LeaveConfirmModal |

## Cấm (compact)
Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này · gộp NOISE_BARRIER
