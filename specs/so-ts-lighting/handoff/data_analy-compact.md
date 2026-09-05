# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-lighting
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T20:30:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: LIGHTING · dump tbl_street_lighting · tile t18 · cluster ops · prefix CS-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=LIGHTING`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · grid hide-empty · DefaultCodePrefix CS- · GAP-AK32-07 solar cols

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock LIGHTING |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name | Tên hệ thống | Text | GAP-LT-NAME-01 · import hay = route |
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
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=LIGHTING
- mfeStdUrl= http://localhost:9301/so-ts-lighting

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=LIGHTING
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS chieu-sang · prefix CS-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-LT-LOOKUP-01: management/bulb/MBA type/control/vitri → Dropdown static vs SearchInput seed
- GAP-LT-ROUTE-01: alias `/so-ts-lighting` Navigate
- GAP-LT-PREFIX-01: chốt CS- trên DefaultCodePrefix
- GAP-AK32-07: KCHT Solar* / LampWatt có trong scope form không?
- Grid hide-empty vs always-ON cho cột số cột/đèn/MBA

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-lighting-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-lighting-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-lighting.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/STATUS.md
