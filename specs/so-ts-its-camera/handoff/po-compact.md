# Handoff compact — po

schemaVersion: 1
feature: so-ts-its-camera
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T03:55:00.000Z
taskId: task_3df3fca9
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-*)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: ITS_CAMERA · dump `tbl_its` · tile t19 · prefix IT- · cluster ops
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=ITS_CAMERA`
- alias: STATUS `/so-ts-its-camera` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-ITS-LOOKUP-01: Dropdown LOOKUP_STATIC dump/seed SA P1 (type_management_center / location_its)
- GAP-ITS-NAME-01: name=location_name_its_ccroom · trống OK · cấm ép route làm tên duy nhất
- GAP-ITS-PREFIX-01: IdCode prefix IT- (SA DefaultCodePrefix)
- GAP-SOTS-COL-01: hide type/kmTo/SL/ĐVT · hide-empty cột thiết bị khi 0/null
- GAP-ITS-CAM-01: tách scope camera-connect · cấm merge form IP/RTSP/ONVIF
- GAP-ITS-DUMP-KEY-01: defer SA cite header moc_dbvn.tbl_its.*.csv cho tn_*
- contentHash: sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946
- open questions: none (autopilot chốt §9)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock ITS_CAMERA |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên phòng ITS | Text | GAP-ITS-NAME-01 |
| type_management_center_id | Loại TTĐH | Dropdown | LOOKUP_STATIC |
| location_its_central_control_id | Vị trí phòng ITS | Dropdown | LOOKUP_STATIC |
| tn_vms_interface | VMS | Number | hide-empty OK |
| tn_screen_controller | Bộ điều khiển màn hình | Number | hide-empty OK |
| tn_data_server | Máy chủ dữ liệu | Number | hide-empty OK |
| tn_wim_high_speed | WIM tốc độ cao | Number | hide-empty OK |
| tn_cable_duct_length | Chiều dài cống cáp | Number | km · hide-empty OK |
| tn_fiber_optic_length | Chiều dài cáp quang | Number | hide-empty OK |
| tn_its_pole | Trụ đỡ ITS | Number | hide-empty OK |
| tn_cctv_monitoring … tn_incident_data_management | Thiết bị detail-only | Number | form S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-its-camera` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=ITS_CAMERA
- mfeStdUrl= http://localhost:9301/so-ts-its-camera
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=ITS_CAMERA
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS camera · prefix IT-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix + dump key map)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-its-camera-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-its-camera-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/STATUS.md
