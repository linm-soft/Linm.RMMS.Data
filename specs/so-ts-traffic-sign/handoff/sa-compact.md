# Handoff compact — sa

schemaVersion: 1
feature: so-ts-traffic-sign
packKind: list
role: sa
status: done
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T13:50:00.000Z
taskId: task_49a79beb
autoApprove: ON
e2eQa: ON
solution_confirm: approve
changeScope: new_page
typeCode: TRAFFIC_SIGN
dump: tbl_road_sign
clusterUi: atgt_point · tile t32
prefix: BB- (GIS bien-bao)
formPattern: Full page · CatalogFormShell 5 cols
Kind: B A–D+F+H
domain: Asset · api/v1/asset/road-assets
bff: proxy only · web-bff/api/v1/asset/road-assets
entity: RoadAssetEntity · rmms_road_assets · dumpSpecs P1
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88
headerFingerprintPrior: sha256:e6ab0bf4f672088b15987fbd6225b1cd10770f28d17a9ca601296020ae6e5562

## Decisions
- changeScope=new_page · packKind=list · Kind B · Full page · cấm fork · cấm tab · cấm PoleCount
- API giữ api/v1/asset/road-assets · BFF proxy · cấm ERP.* · cấm invent api/v1/so-ts/*
- Persist: scalars + dumpSpecs P1 · flatten DEFER (GAP-SIGN-FLAT-01) · không Schema_*/Step 4b
- name←sign_code_number · content=road_sign_content dumpSpecs (GAP-SIGN-NAME-01)
- LOOKUP P1 init-data STATIC: materialsSign · shapesSign (GAP-SIGN-MAT/SHAPE-01)
- dumpSpecs editable: width/height/area/location/ngaylapdat (GAP-SIGN-SPEC-01)
- Point: S-LOC-POINT · ẩn kmTo · không S-LOC-RANGE (GAP-SIGN-POINT-01)
- Alias board-only /so-ts-traffic-sign optional Navigate (GAP-SIGN-ROUTE-01)
- Sign master: integration/traffic-sign-types/search
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS
- Gates: tz_na · xco_get_only · share_tenant
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock TRAFFIC_SIGN |
| route* | 3 tầng | SearchInput | scalar · cấm gộp |
| kmFrom | Lý trình | Text | scalar · ẩn kmTo |
| name/sign_code_number | Số hiệu QCVN | SearchInput | scalar name + dumpSpecs |
| road_sign_content | Nội dung | Text | dumpSpecs |
| width/height/area | R/C/DT | Number | dumpSpecs · S-ATTR |
| material_sign_id | Vật liệu | Dropdown | dumpSpecs · LOOKUP_STATIC * |
| shape_sign_id | Hình dạng | Dropdown | dumpSpecs · LOOKUP_STATIC * |
| location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| ngaylapdat | Ngày lắp | Date | dumpSpecs |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix BB- |

## Screens / zones (ids only)
- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=http://localhost:9301/so-ts?type=TRAFFIC_SIGN
- mfeStdUrl=http://localhost:9301/so-ts-traffic-sign
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t32
- LKP: asset-type · road-route · org-unit · traffic-sign-types
- T-* → TL (profile · S-ATTR · name · LOOKUP · Point · Leave · alias optional · DOMAIN-MAP · pack)

## UNCLEAR
- none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/design.md
- prior compact: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/STATUS.md
