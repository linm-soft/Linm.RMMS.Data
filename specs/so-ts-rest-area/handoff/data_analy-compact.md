# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-rest-area
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:12:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: REST_AREA · dump tbl_rest_stops · tile t26 · prefix DN-
- peer: so-ts-parking (cùng dump · GOV-IMP-02 tách type)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=REST_AREA`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · grid hide-empty · parking_lot on REST_AREA form

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock REST_AREA |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name / name_work | Tên trạm | Text | primary name |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC |
| categorized_id | Xếp loại | Dropdown/Text | label gap |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC |
| actual_length | Chiều dài (m) | Number | hide-empty OK |
| site_area_using_land | DT khuôn viên (m²) | Number | hide-empty OK |
| traffic_emergency_service | Cứu hộ GT | Select boolean | label gap |
| first_aid_service | Cấp cứu | Select boolean | label gap |
| office_building_grade_id | Cấp nhà làm việc | Dropdown | form S-ATTR |
| service_area | Khu vực phục vụ | Number | form S-ATTR · label gap |
| build_location_id | Mặt cắt | Dropdown | L/R/C |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=REST_AREA
- mfeStdUrl= http://localhost:9301/so-ts-rest-area

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=REST_AREA
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS tram-dung-nghi
- T-*: DEFER TL (profile + labels + S-ATTR editable + REST/PARKING split)

## UNCLEAR
- GAP-RA-LOOKUP-01: type_work/categorized/owner/grade/location → Dropdown static vs SearchInput seed
- GAP-RA-ROUTE-01: alias `/so-ts-rest-area` Navigate
- Grid hide-empty vs always-ON cho cứu hộ/cấp cứu/DT
- parking_lot fields: optional REST_AREA vs defer peer so-ts-parking

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rest-area-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-rest-area-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rest-area.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rest-area/STATUS.md
