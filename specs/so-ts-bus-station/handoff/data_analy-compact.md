# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-bus-station
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T03:04:42.869Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: BUS_STATION · dump tbl_bus_station · tile t04 · prefix BX-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=BUS_STATION`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · grid hide-empty DT/cấp

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock BUS_STATION |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name / name_terminal | Tên bến | Text | primary name |
| type_work_id | Loại tài sản | Dropdown | LOOKUP_STATIC |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC · label gap |
| site_area_using_land | DT mặt bằng (m²) | Number | hide-empty OK |
| main_transportation_route | Tuyến VT chính | Text | label gap |
| total_area_floors | DT sàn (m²) | Number | label gap |
| building_grade_id | Cấp nhà | Dropdown | label gap |
| build_location | Mặt cắt | Dropdown | L/R/C |
| classification | Phân loại | Dropdown/Text | label gap |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=BUS_STATION
- mfeStdUrl= http://localhost:9301/so-ts-bus-station

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=BUS_STATION
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS ben-xe
- T-*: DEFER TL (profile + labels + S-ATTR editable)

## UNCLEAR
- GAP-BX-LOOKUP-01: type_work/owner/grade/location/classification → Dropdown static vs SearchInput seed
- GAP-BX-ROUTE-01: alias `/so-ts-bus-station` Navigate
- Grid hide-empty vs always-ON cho DT / tuyến VT / DT sàn / cấp nhà

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-station-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-bus-station-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-station.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/STATUS.md
