# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-parking
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:35:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: PARKING · dump tbl_rest_stops · tile t37 · prefix BD-
- peer: so-ts-rest-area (cùng dump · GOV-IMP-02 tách type)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=PARKING`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · grid hide-empty · office/service fields on PARKING form

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock PARKING |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name / name_work | Tên bãi | Text | primary name |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC |
| categorized_id | Xếp loại | Dropdown/Text | label gap |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC |
| actual_length | Chiều dài (m) | Number | hide-empty OK |
| site_area_using_land | DT khuôn viên (m²) | Number | hide-empty OK |
| parking_lot | Bãi đỗ xe | Select boolean | **ON** profile PARKING |
| total_parking_lot | Tổng DT bãi đỗ (m²) | Number | **ON** · GAP-PK-PARK-01 |
| traffic_emergency_service | Cứu hộ GT | Select boolean | label gap |
| first_aid_service | Cấp cứu | Select boolean | label gap |
| office_building_grade_id | Cấp nhà làm việc | Dropdown | form S-ATTR optional |
| service_area | Khu vực phục vụ | Number | form S-ATTR optional |
| build_location_id | Mặt cắt | Dropdown | L/R/C |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=PARKING
- mfeStdUrl= http://localhost:9301/so-ts-parking

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=PARKING
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS bai-do
- T-*: DEFER TL (profile + labels + S-ATTR editable + PARKING/REST split + parking cols)

## UNCLEAR
- GAP-PK-LOOKUP-01: type_work/categorized/owner/grade/location → Dropdown static vs SearchInput seed
- GAP-PK-ROUTE-01: alias `/so-ts-parking` Navigate
- Grid hide-empty vs always-ON cho bãi đỗ / cứu hộ / cấp cứu / DT
- Form PARKING: office/service_area fields optional vs ẩn khi fill 0

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-parking-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-parking-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-parking.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/STATUS.md
