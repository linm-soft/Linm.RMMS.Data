# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-land-row
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T08:20:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: LAND_ROW · dump tbl_land_btra · tile t33 · cluster land · prefix DT-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=LAND_ROW`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · kmTo ẩn RANGE · DefaultCodePrefix DT- vs GIS HT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock LAND_ROW |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | RANGE · ẩn kmTo fill 0 |
| name / construction | Công trình trên đất | Text | primary name · GAP-LAND-NAME-01 |
| status_land_lot_id | Tình trạng thửa đất | Dropdown | LOOKUP_STATIC |
| under_managemen | CQ chủ quản | Text | dump typo key |
| under_operation | CQ đang khai thác | Text | |
| exploited_id | Hình thức khai thác | Dropdown | LOOKUP_STATIC |
| length / width / total_area | Kích thước / DT | Number | grid ON |
| width_access_road | Rộng đường vào | Number | |
| pavement_type_access_road_id | KC mặt đường vào | Dropdown | label gap |
| distance_road_center | KC đến tim (km) | Number | |
| access_road | Có đường vào | Dropdown bool | hide-empty |
| location_id | Mặt cắt | Dropdown | L/R |
| lengthiness_access_road | Dài đường vào | Number | dump §4 · hide-empty |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=LAND_ROW
- mfeStdUrl= http://localhost:9301/so-ts-land-row

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=LAND_ROW
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS dat-hlat · prefix DT-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-LAND-LOOKUP-01: status/exploited/pavement/location → Dropdown static vs SearchInput seed
- GAP-LAND-ROUTE-01: alias `/so-ts-land-row` Navigate
- GAP-LAND-PREFIX-01: chốt DT- trên DefaultCodePrefix (GIS short HT giữ)
- GAP-LAND-RANGE-01: mẫu 1 lý trình vs parent S-LOC-RANGE · kmTo ẩn

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-land-row-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-land-row-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-land-row.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/STATUS.md
