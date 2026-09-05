# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-toll
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T04:55:12.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: TOLL · dump tbl_toll_booth · tile t28 · prefix TFP-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=TOLL`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · grid hide-empty · width_* grouping

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock TOLL |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name / station_name | Tên trạm | Text | primary name |
| weighting_method | Phương pháp cân | Dropdown/Text | LOOKUP_STATIC |
| number_weighting_lane | Số làn cân | Number | hide-empty OK |
| number_etc_lane | Số làn ETC | Number | hide-empty OK |
| number_manual_lane | Số làn thủ công | Number | hide-empty OK |
| number_one_stop_lane | Số làn một dừng | Number | optional |
| roof_structures_gate_id | Kết cấu mái cổng | Dropdown | LOOKUP_STATIC |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| area_yoll_gate_pavement | DT mặt cổng (m²) | Number | hide-empty OK |
| house_grade_id | Cấp nhà | Dropdown | hide-empty cluster |
| road_structure_id | Kết cấu đường | Dropdown | LOOKUP_STATIC |
| operation_building_location_id | Vị trí nhà ĐH | Dropdown | S-LOC/S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=TOLL
- mfeStdUrl= http://localhost:9301/so-ts-toll

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=TOLL
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS tram-thu-phi
- T-*: DEFER TL (profile + labels + S-ATTR editable)

## UNCLEAR
- GAP-TOLL-LOOKUP-01: weighting/roof/pavement/grade/road_structure/operation_location → Dropdown static vs SearchInput seed
- GAP-TOLL-ROUTE-01: alias `/so-ts-toll` Navigate
- Grid hide-empty vs always-ON cho làn cân / ETC / cấp / DT cổng
- Nhóm `width_*` trên form theo mẫu detail

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-toll-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-toll-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-toll.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/STATUS.md
