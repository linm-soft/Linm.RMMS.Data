# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-slope-protect
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T18:29:28.978Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: SLOPE_PROTECT · dump tbl_slope · tile t12 · cluster linear_protect · prefix đề xuất MD-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=SLOPE_PROTECT`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup kiểu BV/phân loại/vị trí · name optional · alias route · prefix MD- vs TS- (collision pavement) · 4 XY flatten · peer RETAINING

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock SLOPE_PROTECT |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | S-LOC-RANGE · mẫu có km cuối |
| protection_type_id | Kiểu bảo vệ | Dropdown | LOOKUP_STATIC · grid primary |
| slope_classification_id | Phân loại mái dốc | Dropdown | dumpSpecs · grid ON |
| actual_protected | Chiều dài BV, gia cố (m) | Number | dumpSpecs · grid ON |
| average_height | Chiều cao TB (m) | Number | dumpSpecs · grid ON |
| location_id | Vị trí cắt ngang | Dropdown | hide-empty · detail |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | RANGE · GAP-SLOPE-RANGE-01 |
| name | Tên | Text | optional · GAP-SLOPE-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=SLOPE_PROTECT
- mfeStdUrl= http://localhost:9301/so-ts-slope-protect

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=SLOPE_PROTECT
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS mai-doc · prefix MD- · unit KET_CAU · CSV 10547
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-SLOPE-LOOKUP-01: protection_type_id / slope_classification_id / location_id → Dropdown static vs SearchInput seed
- GAP-SLOPE-NAME-01: name optional vs synthetic
- GAP-SLOPE-ROUTE-01: alias `/so-ts-slope-protect` Navigate
- GAP-SLOPE-PREFIX-01: chốt MD- trên DefaultCodePrefix (GIS short MD · collision pavement-sections)
- GAP-SLOPE-RANGE-01: 4 XY scalar vs dumpSpecs only
- GAP-SLOPE-SPEC-01: FE dumpSpecLabels thiếu protection_type_id / slope_classification_id · label lệch mẫu
- GAP-SLOPE-PEER-01: GIS ta-luy gồm RETAINING — page SLOPE_PROTECT only · layer mai-doc

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-slope-protect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-slope-protect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-slope-protect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/STATUS.md
