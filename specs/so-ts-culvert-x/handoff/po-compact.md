# Handoff compact — po

schemaVersion: 1
feature: so-ts-culvert-x
packKind: list
role: po
status: done
skillVersion: 2026.08.25.02
writtenAt: 2026-09-01T12:25:00.000Z
taskId: task_0bcb387a
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: CULVERT_X · dump thiếu (GAP-CULVERT-X-01) · empty OK · cấm seed · prefix CN-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=CULVERT_X`
- alias Navigate REQUIRED: `/so-ts-culvert-x` → live
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-CN-LOOKUP-01: Dropdown LOOKUP_STATIC
- GAP-CN-NAME-01: form optional · list OFF
- GAP-CN-KEY-01: giữ proposed keys · SA remap khi dump
- hide-empty: width · material_body_id OK
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock CULVERT_X |
| route* | 3 tầng | SearchInput | road-route |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| type_work_id | Loại CT | Dropdown | * |
| culvert_shape_id | Hình dạng | Dropdown | Hộp/Bản |
| weight/number | Tải/Số ngăn | Number | |
| width/height/crossing_length_culvert | Rộng/Cao/Dài | Number | hide-empty width |
| material_body_id | VL thân | Dropdown | hide-empty |
| has_*/*_structure/*_area/*_basin_* | Thượng/hạ lưu | Checkbox/Dropdown/Number | S-ATTR |
| name | Tên | Text | optional · list OFF |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · LeaveConfirmModal
- S-ALIAS Navigate `/so-ts-culvert-x`
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=UNDERPASS
- mfeStdUrl= http://localhost:9301/so-ts-culvert-x
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=CULVERT_X
- entity: rmms_road_assets · prefix CN- · GIS cong
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-real-data.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/STATUS.md
