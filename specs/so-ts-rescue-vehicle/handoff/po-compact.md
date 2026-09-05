# Handoff compact — po

schemaVersion: 1
feature: so-ts-rescue-vehicle
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T04:16:00.000Z
taskId: task_0f384c26
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-*)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: RESCUE_VEHICLE · dump `tbl_rescue_vehicle` · tile t24 · prefix XH- · cluster ops
- scope: xe/phương tiện cứu hộ · ≠ RESCUE_STATION (trạm cứu nạn)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=RESCUE_VEHICLE`
- alias: STATUS `/so-ts-rescue-vehicle` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-RV-LOOKUP-01: Dropdown LOOKUP_STATIC dump/seed SA P1 (vehicle_type_id · under_operation_by)
- GAP-RV-NAME-01: name←parking_location_name official · trống OK · cấm ép route làm tên duy nhất
- GAP-RV-PREFIX-01: IdCode prefix XH- (SA DefaultCodePrefix)
- GAP-RV-DUMP-KEY-01: canonical key `under_operation_by` · FE map `under_operation`
- GAP-SOTS-COL-01: hide type/kmTo/SL/ĐVT · hide-empty kmFrom/vị trí đậu/ĐV mua khi null
- GAP-RV-LEAVE-01: LeaveConfirmModal + useAlert
- contentHash: sha256:4e427c783d9d8dd44e9a5f5db4f196cb07db0b2c66e736d0326d84ba0f4cc9ca
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock RESCUE_VEHICLE |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên vị trí/xe | Text | GAP-RV-NAME-01 |
| vehicle_type_id | Loại phương tiện | Dropdown | LOOKUP_STATIC |
| parking_location_name | Vị trí đậu | Text | có thể trùng name |
| purchased_by | Đơn vị mua sắm | Text | dumpSpecs |
| under_operation_by | Cơ quan khai thác | Dropdown | LOOKUP_STATIC · canonical key |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-rescue-vehicle` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=RESCUE_VEHICLE
- mfeStdUrl= http://localhost:9301/so-ts-rescue-vehicle
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=RESCUE_VEHICLE
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS TS group · prefix XH-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix + dump key map)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-vehicle-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-vehicle-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/STATUS.md
