# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-bus-stop
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T07:33:54.890Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: BUS_STOP · dump tbl_bus_stops · tile t13 · cluster stop · prefix DX-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=BUS_STOP`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · grid hide-empty boolean cols · DefaultCodePrefix DX-

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock BUS_STOP |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name / station_name | Tên điểm | Text | primary name · GAP-DD-NAME-01 |
| type_work_id | Loại tài sản | Dropdown | LOOKUP_STATIC |
| management_id | ĐV QL sử dụng | Dropdown | LOOKUP_STATIC · label gap |
| stop_bay | Có làn đậu | Dropdown bool | hide-empty OK |
| seated_waiting_bus | Có ghế chờ | Dropdown bool | hide-empty OK |
| bus_shelter | Có nhà chờ | Dropdown bool | hide-empty OK |
| pavement_type_bus_stop_bay_id | Kết cấu làn đậu | Dropdown | label gap |
| length/width_bus_stop_bay | Kích thước làn đậu | Number | hide-empty |
| structure_bus_shelter_id | Kết cấu nhà chờ | Dropdown | label gap |
| length/width_road_refuge | Nơi chờ | Number | hide-empty |
| escape_route_* | Đường lánh nạn | Text/Number | label gap |
| vitri | Mặt cắt | Dropdown | L/R/C |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=BUS_STOP
- mfeStdUrl= http://localhost:9301/so-ts-bus-stop

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=BUS_STOP
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS diem-bus · prefix DX-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-DD-LOOKUP-01: type_work/management/pavement/shelter/vitri → Dropdown static vs SearchInput seed
- GAP-DD-ROUTE-01: alias `/so-ts-bus-stop` Navigate
- GAP-DD-PREFIX-01: chốt DX- trên DefaultCodePrefix
- Grid hide-empty vs always-ON cho boolean bay/ghế/nhà chờ

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-stop-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-stop-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-stop.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/STATUS.md
