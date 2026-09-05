# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-ditch
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T10:13:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: DITCH · dump tbl_longitudinal · tile t10 · cluster linear_protect · prefix đề xuất CD-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=DITCH`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup loại/hình dạng · name optional · alias route · prefix CD- vs TS- · 4 XY flatten · peer CULVERT_L

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock DITCH |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | S-LOC-RANGE · mẫu có km cuối |
| ditch_type_id | Loại rãnh / cống dọc | Dropdown | LOOKUP_STATIC · grid primary |
| culvert_shape_id | Hình dạng | Dropdown | dumpSpecs · grid ON |
| actual_length | Chiều dài thực tế (m) | Number | dumpSpecs |
| height_culvert | Chiều cao (m) | Number | dumpSpecs |
| width_bottom / width_top | Rộng đáy/miệng | Number | hide-empty |
| structural_type_id / work_type_id / materials_work_id | KT/CT/VL | Dropdown | dumpSpecs |
| *_manhole | KT hố ga | Number | hide-empty · GAP-DITCH-MANHOLE-01 |
| location_id | Vị trí mặt cắt | Dropdown | optional |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | RANGE · GAP-DITCH-RANGE-01 |
| name | Tên | Text | optional · GAP-DITCH-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=DITCH
- mfeStdUrl= http://localhost:9301/so-ts-ditch

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=DITCH
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS cong-doc · prefix CD- · unit THOAT_NUOC · CSV 59657
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-DITCH-LOOKUP-01: ditch_type_id / culvert_shape_id → Dropdown static vs SearchInput seed
- GAP-DITCH-NAME-01: name optional vs synthetic
- GAP-DITCH-ROUTE-01: alias `/so-ts-ditch` Navigate
- GAP-DITCH-PREFIX-01: chốt CD- trên DefaultCodePrefix (GIS short CD)
- GAP-DITCH-RANGE-01: 4 XY scalar vs dumpSpecs only
- GAP-DITCH-PEER-01: tile nav CULVERT_L — page filter DITCH only

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ditch-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ditch-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ditch.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/STATUS.md
