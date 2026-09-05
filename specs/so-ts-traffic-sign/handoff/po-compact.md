# Handoff compact — po

schemaVersion: 1
feature: so-ts-traffic-sign
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T13:30:00.000Z
taskId: task_c795993c
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · cấm PoleCount)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: TRAFFIC_SIGN · dump `tbl_road_sign` · tile t32 · prefix BB- · cluster atgt_point
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=TRAFFIC_SIGN`
- alias: STATUS `/so-ts-traffic-sign` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-SIGN-MAT-01/SHAPE-01: Dropdown LOOKUP_STATIC P1
- GAP-SIGN-NAME-01: primary=`sign_code_number` · content=`road_sign_content`
- GAP-SIGN-SPEC-01: dumpSpecs P1 · flatten=SA migration · cấm PoleCount
- GAP-SIGN-POINT-01: ẩn kmTo form · GAP-SIGN-LEAVE-01: LeaveConfirmModal
- contentHash: sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock TRAFFIC_SIGN |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name/sign_code_number | Số hiệu QCVN | SearchInput | traffic-sign-type |
| road_sign_content | Nội dung | Text | dumpSpecs |
| location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| width/height/area | R/C/DT | Number | S-ATTR editable |
| material_sign_id | Vật liệu | Dropdown | LOOKUP_STATIC |
| shape_sign_id | Hình dạng | Dropdown | LOOKUP_STATIC |
| ngaylapdat | Ngày lắp | Date | dumpSpecs |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-traffic-sign` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=TRAFFIC_SIGN
- mfeStdUrl= http://localhost:9301/so-ts-traffic-sign
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=TRAFFIC_SIGN
- sign master: `…/integration/traffic-sign-types/search`
- entity: rmms_road_assets · prefix BB- · GIS bien-bao
- devSlash=/agent-dev
- T-*: DEFER TL (profile + S-ATTR editable · labels dump biển)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/STATUS.md
