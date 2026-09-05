# Handoff compact — sa

schemaVersion: 1
feature: so-ts-delineator
packKind: list
role: sa
status: done
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T14:45:06.792Z
taskId: task_4c731147
autoApprove: ON
e2eQa: ON
solution_confirm: approve
changeScope: new_page
typeCode: DELINEATOR
dump: tbl_guide_post
clusterUi: atgt_point · tile t14
gis: coc-tieu
formPattern: Full page · CatalogFormShell 5 cols · S-ATTR 2 nhóm
Kind: B A–D+F+H
domain: Asset · api/v1/asset/road-assets
bff: proxy only · web-bff/api/v1/asset/road-assets
entity: RoadAssetEntity · rmms_road_assets · dumpSpecs P1
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9
headerFingerprintPrior: sha256:bb594214df448e59f4012e5bf5cce1a4b506524669fec3a6e6cfa3db8c43e228

## Decisions
- changeScope=new_page · packKind=list · Kind B · Full page · cấm fork · cấm tab · 2 nhóm S-ATTR tiêu/H
- API giữ api/v1/asset/road-assets · BFF proxy · cấm ERP.* · cấm invent api/v1/so-ts/*
- Persist: scalars + dumpSpecs P1 · flatten DEFER (GAP-DELIM-FLAT-01) · không Schema_*/Step 4b
- name≠đoạn · loại+km else code/vidagis (GAP-DELIM-NAME-01)
- quantity←total_number tiêu · fallback h_total (GAP-DELIM-QTY-01)
- LOOKUP P1 init-data: postTypes · guidePostMaterials · hGuidePostMaterials (GAP-DELIM-TYPE-01)
- dumpSpecs editable 2 nhóm + installed_location (GAP-DELIM-SPEC-01)
- Point: S-LOC-POINT · ẩn kmTo · cấm ép "0" (GAP-DELIM-POINT-01)
- LeaveConfirmModal + useAlert (GAP-DELIM-LEAVE-01)
- Alias board-only /so-ts-delineator optional Navigate (GAP-DELIM-ROUTE-01)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR(2)·S-GPS
- Gates: tz_na · xco_get_only · share_tenant
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock DELINEATOR |
| route* | 3 tầng | SearchInput | scalar · cấm gộp |
| kmFrom | Lý trình | Text | scalar · ẩn kmTo |
| name | Tên | Text | scalar · ≠ đoạn |
| quantity | SL | Number | ← total_number_* |
| h_post_type_id | Loại kiểu cọc | Dropdown | dumpSpecs · LOOKUP * |
| installed_location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| guide_post_type_id + DxRxC + KC + SL | Cọc tiêu | Dropdown/Number | dumpSpecs nhóm tiêu |
| h_guide_post_type_id + h_* | Cọc H | Dropdown/Number | dumpSpecs nhóm H |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | IdCode BE |

## Screens / zones (ids only)
- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=http://localhost:9301/so-ts?type=DELINEATOR
- mfeStdUrl=http://localhost:9301/so-ts-delineator
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t14
- LKP: asset-type · road-route · org-unit
- T-* → TL (profile · S-ATTR 2 nhóm · name · qty · LOOKUP · Point · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR
- none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/design.md
- prior compact: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/STATUS.md
