# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-its-camera
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T20:55:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: ITS_CAMERA · dump tbl_its · tile t19 · cluster ops · prefix IT-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=ITS_CAMERA`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- scope: sổ TS gov tbl_its · cấm merge camera-connect MFE
- open questions: lookup static vs seed · alias route · grid hide-empty · DefaultCodePrefix IT- · dump tn_* keys · camera-connect boundary

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock ITS_CAMERA |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name | Tên phòng ITS | Text | GAP-ITS-NAME-01 · location_name_its_ccroom |
| type_management_center_id | Loại TTĐH | Dropdown | Theo tuyến/khu vực |
| location_its_central_control_id | Vị trí phòng ITS | Dropdown | Trên tuyến/Khác |
| tn_vms_interface | Thiết bị VMS | Number | hide-empty OK |
| tn_screen_controller | Bộ điều khiển màn hình | Number | hide-empty OK |
| tn_data_server | Máy chủ dữ liệu | Number | hide-empty OK |
| tn_wim_high_speed | WIM tốc độ cao | Number | hide-empty OK |
| tn_cable_duct_length | Chiều dài cống cáp | Number | km |
| tn_fiber_optic_length | Chiều dài cáp quang | Number | list |
| tn_its_pole | Trụ đỡ ITS | Number | hide-empty OK |
| tn_cctv_monitoring … tn_incident_data_management | Thiết bị detail-only | Number | form S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy · cấm camera-connect fields
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=ITS_CAMERA
- mfeStdUrl= http://localhost:9301/so-ts-its-camera

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=ITS_CAMERA
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS camera · prefix IT-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix + dump key map)

## UNCLEAR
- GAP-ITS-LOOKUP-01: type_management_center / location_its → Dropdown static vs SearchInput seed
- GAP-ITS-ROUTE-01: alias `/so-ts-its-camera` Navigate
- GAP-ITS-PREFIX-01: chốt IT- trên DefaultCodePrefix
- GAP-ITS-DUMP-KEY-01: SA cite header moc_dbvn.tbl_its.*.csv cho key tn_*
- GAP-ITS-CAM-01: xác nhận tách camera-connect
- Grid hide-empty vs always-ON (9 row nhỏ)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-its-camera-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-its-camera-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-its-camera.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/STATUS.md
