# Handoff compact — design

schemaVersion: 1
feature: so-ts-traffic-sign
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-01T13:40:00.000Z
taskId: task_6bf578d2
autoApprove: ON
e2eQa: ON
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88

## Decisions
- changeScope: new_page
- formPattern: Full page CatalogFormShell · data-form-cols=5 · cấm Modal/Slideout/tab · cấm PoleCount
- Kind B A–D+F · typeCode TRAFFIC_SIGN · tile t32 · prefix BB- · dump tbl_road_sign · cluster atgt_point
- GAP-SIGN-NAME-01: primary=sign_code_number · content=road_sign_content · SearchInput traffic-sign-type
- GAP-SIGN-MAT/SHAPE-01: Dropdown LOOKUP_STATIC P1
- GAP-SIGN-SPEC-01: dumpSpecs P1 · flatten=SA · GAP-SIGN-POINT-01: ẩn kmTo
- Alias: board-only /so-ts-traffic-sign · live /so-ts?type=TRAFFIC_SIGN (optional Navigate)
- mfe: Linm.Web.RMMS.Asset · be: road-assets · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | lock TRAFFIC_SIGN |
| route* | 3 tầng | SearchInput road-route | * · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name/sign_code_number | Số hiệu QCVN | SearchInput | traffic-sign-type |
| road_sign_content | Nội dung | Text | dumpSpecs |
| location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| width/height/area | R/C/DT | Number | S-ATTR editable |
| material_sign_id | Vật liệu | Dropdown | LOOKUP_STATIC |
| shape_sign_id | Hình dạng | Dropdown | LOOKUP_STATIC |
| ngaylapdat | Ngày lắp | Date | dumpSpecs |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix BB- |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts?type=TRAFFIC_SIGN
- mfeStdUrl=http://localhost:9301/so-ts-traffic-sign
- prototype=specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · init-data
- sign master: integration/traffic-sign-types/search
- entity: rmms_road_assets · prefix BB- · GIS bien-bao
- T-*: DEFER TL · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/STATUS.md
