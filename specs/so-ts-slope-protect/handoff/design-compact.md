# Handoff compact — design

schemaVersion: 1
feature: so-ts-slope-protect
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-02T01:36:00.000Z
taskId: task_ddb66403
autoApprove: ON
e2eQa: ON
design_confirm: approve
changeScope: new_page
typeCode: SLOPE_PROTECT
dump: tbl_slope
clusterUi: linear_protect · tile t12
prefix: MD- (GIS short MD)
formPattern: Full page · CatalogFormShell · data-form-cols=5
Kind: B A–D+F
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294
headerFingerprintPrior: sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Decisions
- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · cấm fork
- Live `/so-ts?type=SLOPE_PROTECT` · alias `/so-ts-slope-protect` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC protection_type_id / slope_classification_id / location_id
- name optional · list primary=protection_type_id · cấm IsWeak
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT · prefix MD-
- Grid: ON kiểu BV/3 tầng/kmFrom/kmTo/phân loại/dài BV/cao TB · hide-empty vị trí/địa danh · ẩn type/ảnh
- Peer: SLOPE_PROTECT only · RETAINING riêng · layer mai-doc
- LeaveConfirmModal · cấm native confirm
- API api/v1/asset/road-assets · cấm ERP.* · cấm invent so-ts path
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill SLOPE_PROTECT |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE * |
| protection_type_id | Kiểu bảo vệ | Dropdown | * LOOKUP_STATIC · grid primary |
| slope_classification_id | Phân loại mái dốc | Dropdown | dumpSpecs · grid ON |
| actual_protected | Chiều dài BV, gia cố (m) | Number | dumpSpecs · grid ON |
| average_height | Chiều cao TB (m) | Number | dumpSpecs · grid ON |
| location_id | Vị trí cắt ngang | Dropdown | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix MD- |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/ui/prototype/so-ts-slope-protect-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=SLOPE_PROTECT`
- mfeStdUrl=`http://localhost:9301/so-ts-slope-protect`
- prototype=`specs/so-ts-slope-protect/ui/prototype/so-ts-slope-protect-list-prototype.html`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t12
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR
- none

## Full paths
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/ui/design.md`
- prototype: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/ui/prototype/so-ts-slope-protect-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next
| Role | Need |
|------|------|
| **SA** | path giữ · MD- DefaultCodePrefix (+ pavement collision) · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels 5 key |
| TL/Dev | profile SLOPE_PROTECT · S-ATTR editable · LeaveConfirmModal |

## Cấm (compact)
Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này · gộp RETAINING
