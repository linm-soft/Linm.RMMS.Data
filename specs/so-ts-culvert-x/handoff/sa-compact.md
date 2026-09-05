# Handoff compact — sa

schemaVersion: 1
feature: so-ts-culvert-x
packKind: list
role: sa
status: done
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T12:36:51.307Z
taskId: task_50a770e3
autoApprove: ON
e2eQa: ON
solution_confirm: approve
changeScope: new_page
typeCode: CULVERT_X
dump: missing (GAP-CULVERT-X-01)
clusterUi: crossing · tile t07
prefix: CN- (GIS CN · layer cong)
formPattern: Full page · CatalogFormShell 5 cols
Kind: B A–D+F+H
domain: Asset · api/v1/asset/road-assets
bff: proxy only · web-bff/api/v1/asset/road-assets
entity: RoadAssetEntity · rmms_road_assets · dumpSpecs P1
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b
headerFingerprintPrior: sha256:9d3fd5a681be3c4f5d0541bb0a5681a621e75aac36d4f65e9881b5c40c24b63c

## Decisions
- changeScope=new_page · packKind=list · Kind B · Full page · cấm fork
- API giữ api/v1/asset/road-assets · BFF proxy · cấm ERP.* · cấm invent api/v1/so-ts/*
- Persist: scalars + dumpSpecs P1 · flatten DEFER (GAP-CN-FLAT-01) · không Schema_*/Step 4b
- dump thiếu · empty OK · cấm seed · giữ proposed keys · remap khi tbl_* (GAP-CN-KEY-01)
- IdCode create/import CN- · GIS cong short CN (GAP-CN-PREFIX-01)
- Point: S-LOC-POINT · ẩn kmTo · cấm ép "0" · không S-LOC-RANGE (GAP-CN-POINT-01)
- LOOKUP P1 init-data STATIC: typeWork · culvertShapes · materialBody · structures (GAP-CN-LOOKUP-01)
- name form optional · list OFF · cấm IsWeak (GAP-CN-NAME-01)
- Alias REQUIRED /so-ts-culvert-x Navigate (GAP-CN-ROUTE-01)
- hide-empty: width · material_body_id · ẩn type/kmTo/SL/ĐVT
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS
- Gates: tz_na · xco_get_only · share_tenant
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock CULVERT_X |
| route* | 3 tầng | SearchInput | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT · ẩn kmTo |
| type_work_id | Loại CT | Dropdown | dumpSpecs · LOOKUP_STATIC * |
| culvert_shape_id | Hình dạng | Dropdown | dumpSpecs · Hộp/Bản |
| weight/number | Tải/Số ngăn | Number | dumpSpecs · grid ON |
| width/height/crossing_length_culvert | Rộng/Cao/Dài | Number | dumpSpecs · hide-empty width |
| material_body_id | VL thân | Dropdown | dumpSpecs · hide-empty |
| has_*/*_structure/*_area/*_basin_* | Thượng/hạ lưu | Checkbox/Dropdown/Number | dumpSpecs · S-ATTR |
| name | Tên | Text | scalar optional · list OFF |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix CN- |

## Screens / zones (ids only)
- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=http://localhost:9301/so-ts?type=CULVERT_X
- mfeStdUrl=http://localhost:9301/so-ts-culvert-x
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t07
- T-CN-01..11 → TL (profile · S-ATTR · Point · name · CN- · LOOKUP · Leave · alias REQUIRED · DOMAIN-MAP · pack · key remap)

## UNCLEAR
- none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/design.md
- prior compact: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/STATUS.md

## Next
| Role | Need |
|------|------|
| TL | task/so-ts-culvert-x.md · T-CN-* · gates |
| Dev | profile CULVERT_X · S-ATTR · CN- · LOOKUP · LeaveConfirm · Point · alias |
| QA | e2e queued /agent-qa* |

## Cấm (compact)
ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · CSV seed