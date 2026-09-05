# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-rescue-vehicle
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T04:15:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: RESCUE_VEHICLE · dump tbl_rescue_vehicle · tile t24 · cluster ops · prefix XH-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=RESCUE_VEHICLE`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- scope: sổ TS gov tbl_rescue_vehicle · ≠ RESCUE_STATION (trạm cứu nạn)
- open questions: lookup static vs seed · alias route · grid hide-empty · DefaultCodePrefix XH- · dump key under_operation_by

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock RESCUE_VEHICLE |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name | Tên vị trí/xe | Text | GAP-RV-NAME-01 · parking_location_name |
| vehicle_type_id | Loại phương tiện | Dropdown | GAP-RV-LOOKUP-01 |
| parking_location_name | Vị trí đậu | Text | có thể trùng name |
| purchased_by | Đơn vị mua sắm | Text | dumpSpecs |
| under_operation_by | Cơ quan khai thác | Dropdown | GAP-RV-DUMP-KEY-01 · FE under_operation |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=RESCUE_VEHICLE
- mfeStdUrl= http://localhost:9301/so-ts-rescue-vehicle

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=RESCUE_VEHICLE
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS TS group · prefix XH-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix + dump key map)

## UNCLEAR
- GAP-RV-LOOKUP-01: vehicle_type_id → Dropdown static vs SearchInput seed
- GAP-RV-ROUTE-01: alias `/so-ts-rescue-vehicle` Navigate
- GAP-RV-PREFIX-01: chốt XH- trên DefaultCodePrefix
- GAP-RV-DUMP-KEY-01: under_operation_by vs FE under_operation
- Grid hide-empty vs always-ON (7 row nhỏ)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-vehicle-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rescue-vehicle-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rescue-vehicle.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-vehicle/STATUS.md
