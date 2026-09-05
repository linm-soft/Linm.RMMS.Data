# Handoff compact — po

schemaVersion: 1
feature: so-ts-lighting
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T20:20:00.000Z
taskId: task_a6385cc7
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-*)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: LIGHTING · dump `tbl_street_lighting` · tile t18 · prefix CS- · cluster ops
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=LIGHTING`
- alias: STATUS `/so-ts-lighting` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-LT-LOOKUP-01: Dropdown LOOKUP_STATIC dump/seed SA P1 (management/bulb/MBA type/control/vitri)
- GAP-LT-NAME-01: name=mô tả hệ thống · trống OK · cấm ép route làm tên duy nhất
- GAP-LT-PREFIX-01: IdCode prefix CS- (SA DefaultCodePrefix)
- GAP-SOTS-COL-01: hide type/kmTo/SL/ĐVT · hide-empty cột số khi 0/null
- GAP-AK32-07: Solar*/LampWatt out of scope · dump §4 only
- GAP-LT-LEAVE-01: LeaveConfirmModal + useAlert
- contentHash: sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock LIGHTING |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên hệ thống | Text | GAP-LT-NAME-01 |
| management_id | ĐV QL sử dụng | Dropdown | LOOKUP_STATIC |
| number_pole_light_bulb | Số cột đèn | Number | hide-empty OK |
| number_light | Số đèn | Number | hide-empty OK |
| bulb_type_id | Loại bóng đèn | Dropdown | LOOKUP_STATIC |
| type_transforming_station_id | Loại trạm biến áp | Dropdown | LOOKUP_STATIC |
| capacity_transformer | Công suất MBA | Number/Text | kVA |
| number_control_box | Số tủ điều khiển | Number | hide-empty OK |
| control_method_id | Phương thức điều khiển | Dropdown | LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | L/R/C |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-lighting` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=LIGHTING
- mfeStdUrl= http://localhost:9301/so-ts-lighting
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=LIGHTING
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS chieu-sang · prefix CS-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-lighting-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-lighting-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/STATUS.md
