# Handoff compact — design

schemaVersion: 1
feature: so-ts-retaining
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-02T00:50:00.000Z
taskId: task_476f6ddd
autoApprove: ON
e2eQa: ON
design_confirm: approve
changeScope: new_page
typeCode: RETAINING
dump: tbl_retaining_wall
clusterUi: linear_protect · tile t20
prefix: KE- (GIS short KE)
formPattern: Full page · CatalogFormShell · data-form-cols=5
Kind: B A–D+F
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061
headerFingerprintPrior: sha256:a547b71c8847f3079bd462364e95279a8388e5c6de64aaf1b403d77f1e011707
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Decisions
- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · cấm fork
- Live `/so-ts?type=RETAINING` · alias `/so-ts-retaining` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC retaining_wall_type_id / material_type_id / foundation_type_id / location_id / asset_type
- name optional · list primary=retaining_wall_type_id · cấm IsWeak
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT · prefix KE-
- Grid: ON loại tường/3 tầng/kmFrom/kmTo/VL/dài/cao TB/số đoạn/móng · hide-empty vị trí/asset_type/địa danh · ẩn type/ảnh
- Peer: RETAINING only · SLOPE_PROTECT riêng
- LeaveConfirmModal · cấm native confirm
- API api/v1/asset/road-assets · cấm ERP.* · cấm invent so-ts path
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill RETAINING |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE * |
| retaining_wall_type_id | Loại tường chắn | Dropdown | * LOOKUP_STATIC · grid primary |
| material_type_id | Loại vật liệu | Dropdown | dumpSpecs · grid ON |
| actual_protected | Chiều dài (m) | Number | dumpSpecs · grid ON |
| average_height | Chiều cao TB (m) | Number | dumpSpecs · grid ON |
| number | Số phân đoạn | Number | dumpSpecs · grid ON |
| foundation_type_id | Loại móng | Dropdown | dumpSpecs · grid ON |
| location_id | Vị trí mặt cắt | Dropdown | hide-empty |
| asset_type | Loại TS (dump) | Dropdown | hide-empty · ≠ entity |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix KE- |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/ui/prototype/so-ts-retaining-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=RETAINING`
- mfeStdUrl=`http://localhost:9301/so-ts-retaining`
- prototype=`specs/so-ts-retaining/ui/prototype/so-ts-retaining-list-prototype.html`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t20
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR
- none

## Full paths
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/ui/design.md`
- prototype: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/ui/prototype/so-ts-retaining-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next
| Role | Need |
|------|------|
| **SA** | path giữ · KE- DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels 8 key |
| TL/Dev | profile RETAINING · S-ATTR editable · LeaveConfirmModal |

## Cấm (compact)
Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này · gộp SLOPE_PROTECT
