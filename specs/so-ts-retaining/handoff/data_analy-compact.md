# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-retaining
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T00:41:31.396Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: RETAINING · dump tbl_retaining_wall · tile t20 · cluster linear_protect · prefix đề xuất KE-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=RETAINING`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup loại/VL/móng/vị trí · name optional · dump asset_type · alias route · prefix KE- vs TS- · 4 XY flatten · peer SLOPE_PROTECT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock RETAINING |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | S-LOC-RANGE · mẫu có km cuối |
| retaining_wall_type_id | Loại tường chắn | Dropdown | LOOKUP_STATIC · grid primary |
| material_type_id | Loại vật liệu | Dropdown | dumpSpecs · grid ON |
| actual_protected | Chiều dài (m) | Number | dumpSpecs · grid ON |
| average_height | Chiều cao TB (m) | Number | dumpSpecs · grid ON |
| number | Số phân đoạn | Number | dumpSpecs · grid ON |
| foundation_type_id | Loại móng | Dropdown | dumpSpecs · grid ON |
| location_id | Vị trí mặt cắt | Dropdown | hide-empty · detail |
| asset_type | Loại TS (dump) | Dropdown/Text | hide-empty · ≠ entity type |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | RANGE · GAP-RETAINING-RANGE-01 |
| name | Tên | Text | optional · GAP-RETAINING-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=RETAINING
- mfeStdUrl= http://localhost:9301/so-ts-retaining

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=RETAINING
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS tuong-chan · prefix KE- · unit KET_CAU · CSV 9660
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-RETAINING-LOOKUP-01: retaining_wall_type_id / material_type_id / foundation_type_id / location_id / asset_type → Dropdown static vs SearchInput seed
- GAP-RETAINING-NAME-01: name optional vs synthetic
- GAP-RETAINING-ASSETTYPE-01: dump asset_type vs entity type ẩn
- GAP-RETAINING-ROUTE-01: alias `/so-ts-retaining` Navigate
- GAP-RETAINING-PREFIX-01: chốt KE- trên DefaultCodePrefix (GIS short KE)
- GAP-RETAINING-RANGE-01: 4 XY scalar vs dumpSpecs only
- GAP-RETAINING-SPEC-01: FE dumpSpecLabels thiếu 7/8 key RETAINING
- GAP-RETAINING-PEER-01: GIS ta-luy gồm SLOPE_PROTECT — page RETAINING only

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-retaining-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-retaining-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-retaining.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/STATUS.md
