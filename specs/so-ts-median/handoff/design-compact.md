# Handoff compact — design

schemaVersion: 1
feature: so-ts-median
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-01T17:30:00.000Z
taskId: task_e2599798
autoApprove: ON
e2eQa: ON
design_confirm: approve
changeScope: new_page
typeCode: MEDIAN
dump: tbl_median_strip
clusterUi: linear_protect · tile t11
prefix: PC- (GIS short GPC)
formPattern: Full page · CatalogFormShell · data-form-cols=5
Kind: B A–D+F
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5
headerFingerprintPrior: sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Decisions
- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · cấm fork
- Live `/so-ts?type=MEDIAN` · alias `/so-ts-median` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_median_strip_id / material_type_fence_id / location_median_strip_id
- planting_grass/tree=Select bool · name optional · list primary=type_median_strip_id · cấm IsWeak
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT · prefix PC-
- Grid: ON loại dải/3 tầng/kmFrom/kmTo/dài/rộng/cỏ/cây/cao hàng rào/VL · hide-empty vị trí/địa danh · ẩn type/ảnh
- Page filter MEDIAN only
- LeaveConfirmModal · cấm native confirm
- API api/v1/asset/road-assets · cấm ERP.* · cấm invent so-ts path
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill MEDIAN |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE * |
| type_median_strip_id | Loại dải | Dropdown | * LOOKUP_STATIC · grid primary |
| length_median_strip | Chiều dài (m) | Number | dumpSpecs · grid ON |
| width_median_strip | Chiều rộng (m) | Number | dumpSpecs · grid ON |
| planting_grass | Trồng cỏ | Select bool | GAP-MEDIAN-BOOL-01 |
| planting_grass_area | DT cỏ (m²) | Number | hide-empty |
| planting_tree | Trồng cây | Select bool | GAP-MEDIAN-BOOL-01 |
| number_tree | Số cây | Number | hide-empty |
| height_fence | Cao hàng rào (m) | Number | grid ON |
| material_type_fence_id | VL hàng rào | Dropdown | LOOKUP_STATIC |
| location_median_strip_id | Vị trí dải | Dropdown | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix PC- |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=MEDIAN`
- mfeStdUrl=`http://localhost:9301/so-ts-median`
- prototype=`specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html`
- Grid AC=YES · Leave=YES · Report AC=N/A

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t11
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR
- none

## Full paths
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/design.md`
- prototype: `D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next
| Role | Need |
|------|------|
| **SA** | path giữ · PC- DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels 10 key MEDIAN |
| TL/Dev | profile MEDIAN · S-ATTR editable · LeaveConfirmModal |

## Cấm (compact)
Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này
