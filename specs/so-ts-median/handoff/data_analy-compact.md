# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-median
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:00:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: MEDIAN · dump tbl_median_strip · tile t11 · cluster linear_protect · prefix đề xuất PC-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=MEDIAN`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup loại/VL/vị trí · name optional · bool cỏ/cây · alias route · prefix PC- vs TS- · 4 XY flatten

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock MEDIAN |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | S-LOC-RANGE · mẫu có km cuối |
| type_median_strip_id | Loại dải phân cách | Dropdown | LOOKUP_STATIC · grid primary |
| length_median_strip | Chiều dài dải (m) | Number | dumpSpecs · grid ON |
| width_median_strip | Chiều rộng dải (m) | Number | dumpSpecs · grid ON |
| planting_grass | Trồng cỏ | Select bool | GAP-MEDIAN-BOOL-01 |
| planting_grass_area | DT trồng cỏ (m²) | Number | hide-empty |
| planting_tree | Trồng cây | Select bool | GAP-MEDIAN-BOOL-01 |
| number_tree | Số cây | Number | hide-empty |
| height_fence | Chiều cao hàng rào (m) | Number | dumpSpecs · grid ON |
| material_type_fence_id | Vật liệu hàng rào | Dropdown | dumpSpecs · GAP-MEDIAN-LOOKUP-01 |
| location_median_strip_id | Vị trí dải | Dropdown | hide-empty |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | RANGE · GAP-MEDIAN-RANGE-01 |
| name | Tên | Text | optional · GAP-MEDIAN-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=MEDIAN
- mfeStdUrl= http://localhost:9301/so-ts-median

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=MEDIAN
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS dai-phan-cach · prefix PC- · unit ATGT · CSV 6829
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-MEDIAN-LOOKUP-01: type_median_strip_id / material_type_fence_id / location_median_strip_id → Dropdown static vs SearchInput seed
- GAP-MEDIAN-NAME-01: name optional vs synthetic
- GAP-MEDIAN-BOOL-01: planting_grass / planting_tree → Select boolean vs Text dump
- GAP-MEDIAN-ROUTE-01: alias `/so-ts-median` Navigate
- GAP-MEDIAN-PREFIX-01: chốt PC- trên DefaultCodePrefix (GIS short GPC)
- GAP-MEDIAN-RANGE-01: 4 XY scalar vs dumpSpecs only
- GAP-MEDIAN-SPEC-01: FE dumpSpecLabels thiếu 10 key MEDIAN

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-median-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-median-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-median.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/STATUS.md
